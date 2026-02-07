#!/usr/bin/env python3
"""
Proxy server for WeChat Jump Jump game.
- Serves local game files
- Proxies CDN requests (configs, versions, assets)
- Mocks login/protocol API calls
"""
import http.server
import json
import time
import urllib.request
import urllib.error
import os
import sys

PORT = 8080
GAME_DIR = os.path.dirname(os.path.abspath(__file__))

# CDN proxy targets
CDN_HOSTS = {
    "cdn.i51game.com": "https://cdn.i51game.com",
    "ver.i51game.com": "https://ver.i51game.com",
    "wxgame-conf.i51game.com": "https://wxgame-conf.i51game.com",
}

class GameHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=GAME_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?")[0]

        # Proxy CDN requests: /proxy/cdn.i51game.com/...
        if path.startswith("/proxy/"):
            self._proxy_get(path[7:])  # strip /proxy/
            return

        # Mock gate
        if "/_mock_gate" in path:
            self._handle_mock_gate("GET")
            return

        # Serve local files
        super().do_GET()

    def do_POST(self):
        path = self.path.split("?")[0]

        # Read POST body
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length) if content_length > 0 else b""

        # Mock login
        if "loginAccount" in path:
            self._mock_login()
            return

        # Mock valid
        if "/valid" in path:
            self._mock_login()
            return

        # Mock gate (protocol commands)
        if "/_mock_gate" in path:
            self._handle_mock_gate("POST", body)
            return

        # Analytics - just accept silently
        if "analysis" in path or "record" in path:
            self._json_response({})
            return

        # Proxy CDN POST
        if path.startswith("/proxy/"):
            self._proxy_post(path[7:], body)
            return

        # Default: accept
        self._json_response({})

    def _json_response(self, data, status=200):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _mock_login(self):
        print("[MOCK] loginAccount")
        self._json_response({
            "uid": 10001,
            "token": f"mock_token_{int(time.time())}",
            "online": f"http://localhost:{PORT}/_mock_gate",
            "url": f"http://localhost:{PORT}",
            "gatePath": "/mock",
        })

    def _handle_mock_gate(self, method, body=b""):
        cmd = 0
        seq = 0
        try:
            if body:
                req = json.loads(body)
            else:
                # GET: cmd might be in query params
                from urllib.parse import urlparse, parse_qs
                qs = parse_qs(urlparse(self.path).query)
                if "cmd" in qs:
                    req = json.loads(qs["cmd"][0])
                else:
                    req = {}
            if "cmds" in req and req["cmds"]:
                cmd = req["cmds"][0].get("header", {}).get("cmd", 0)
                seq = req["cmds"][0].get("header", {}).get("seq", 0)
        except Exception as e:
            print(f"[MOCK GATE] parse error: {e}")

        print(f"[MOCK GATE] cmd={cmd} seq={seq}")

        # cmd 257 = login
        if cmd == 257:
            user_info = {
                "1": 10001,       # uid
                "2": "Player",    # nick
                "3": "",          # image
                "4": 0,           # gold
                "5": 0,           # bestScore
                "6": 0,           # skin
                "14": True,       # guest
                "15": 0,          # sex
                "17": 100,        # guideStep (100=skip guide)
                "19": 0,          # isCheat
                "20": 0,          # coin
                "21": 0,          # ticket
                "22": 0,          # ticketVideoAd
                "23": 0,          # ticketChallenge
                "31": 1,          # loginDays
                "32": 0,          # todayGameCount
                "33": int(time.time() * 1000),  # createTime
                "41": 0,          # gameVersion
            }
            response = {
                "cmds": [{
                    "header": {"cmd": 257, "ret": 0, "seq": seq},
                    "body": {
                        "1": int(time.time() * 1000),  # now
                        "2": f"mock_ct_{int(time.time())}",  # connectToken
                        "3": user_info,
                    }
                }]
            }
        else:
            # Default: return success with empty body
            response = {
                "cmds": [{
                    "header": {"cmd": cmd, "ret": 0, "seq": seq},
                    "body": {}
                }]
            }

        self._json_response(response)

    def _proxy_get(self, remote_path):
        """Proxy a GET request to CDN"""
        url = f"https://{remote_path}"
        print(f"[PROXY] GET {url}")
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "Mozilla/5.0",
                "Accept": "*/*",
            })
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                content_type = resp.headers.get("Content-Type", "application/octet-stream")
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
        except Exception as e:
            print(f"[PROXY] Error: {e}")
            self._json_response({"error": str(e)}, 502)

    def _proxy_post(self, remote_path, body):
        """Proxy a POST request"""
        url = f"https://{remote_path}"
        print(f"[PROXY] POST {url}")
        try:
            req = urllib.request.Request(url, data=body, method="POST", headers={
                "User-Agent": "Mozilla/5.0",
                "Content-Type": "application/json",
            })
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                content_type = resp.headers.get("Content-Type", "application/json")
                self.send_response(200)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
        except Exception as e:
            print(f"[PROXY] Error: {e}")
            self._json_response({"error": str(e)}, 502)

    def log_message(self, format, *args):
        msg = format % args
        # Suppress noisy logs
        if ".js" in msg or ".png" in msg or ".jpg" in msg or ".mp3" in msg or ".bin" in msg:
            return
        print(f"[SERVER] {msg}")


if __name__ == "__main__":
    print(f"Starting game server on http://localhost:{PORT}")
    print(f"Serving files from: {GAME_DIR}")
    print(f"Open http://localhost:{PORT}/index.html to play")
    server = http.server.HTTPServer(("", PORT), GameHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
