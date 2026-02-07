// WeChat API Shim for running WeChat Mini Games in browser
(function () {
  "use strict";

  // Setup GameGlobal
  window.GameGlobal = window;

  // Main canvas (created before game loads)
  var mainCanvas = document.getElementById("gameCanvas");
  window.canvas = mainCanvas;

  // Web Audio API context for game sounds - create immediately
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioBufferCache = {};
  var audioResumePromise = null;
  function getAudioCtx() {
    if (audioCtx.state === "suspended" && !audioResumePromise) {
      audioResumePromise = audioCtx.resume().then(function() { audioResumePromise = null; });
    }
    return audioCtx;
  }
  // Unlock audio context on EVERY user interaction (before game processes it)
  function unlockAudio() {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }
  // Use capture phase so we unlock BEFORE game's touch handlers fire
  document.addEventListener("mousedown", unlockAudio, true);
  document.addEventListener("touchstart", unlockAudio, true);
  document.addEventListener("click", unlockAudio, true);
  document.addEventListener("keydown", unlockAudio, true);

  function loadAudioBuffer(url, callback) {
    if (audioBufferCache[url]) { callback(audioBufferCache[url]); return; }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      if (xhr.status === 200) {
        getAudioCtx().decodeAudioData(xhr.response, function(buffer) {
          audioBufferCache[url] = buffer;
          callback(buffer);
        }, function() { callback(null); });
      } else { callback(null); }
    };
    xhr.onerror = function() { callback(null); };
    xhr.send();
  }

  // Touch/Mouse event listeners storage
  var touchStartListeners = [];
  var touchMoveListeners = [];
  var touchEndListeners = [];
  var touchCancelListeners = [];
  var showListeners = [];
  var hideListeners = [];

  function convertTouchEvent(e) {
    var touches = [];
    if (e.changedTouches) {
      for (var i = 0; i < e.changedTouches.length; i++) {
        var t = e.changedTouches[i];
        touches.push({
          identifier: t.identifier,
          clientX: t.clientX,
          clientY: t.clientY,
          pageX: t.pageX,
          pageY: t.pageY,
        });
      }
    } else {
      touches.push({
        identifier: 0,
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY,
      });
    }
    return {
      touches: touches,
      changedTouches: touches,
      timeStamp: e.timeStamp,
      preventDefault: function () {},
      stopPropagation: function () {},
    };
  }

  // Mouse/touch events on canvas
  var isTouching = false;
  mainCanvas.addEventListener("mousedown", function (e) {
    isTouching = true;
    var evt = convertTouchEvent(e);
    touchStartListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("mousemove", function (e) {
    if (!isTouching) return;
    var evt = convertTouchEvent(e);
    touchMoveListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("mouseup", function (e) {
    isTouching = false;
    var evt = convertTouchEvent(e);
    touchEndListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    var evt = convertTouchEvent(e);
    touchStartListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    var evt = convertTouchEvent(e);
    touchMoveListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("touchend", function (e) {
    e.preventDefault();
    var evt = convertTouchEvent(e);
    touchEndListeners.forEach(function (fn) { fn(evt); });
  });
  mainCanvas.addEventListener("touchcancel", function (e) {
    e.preventDefault();
    var evt = convertTouchEvent(e);
    touchCancelListeners.forEach(function (fn) { fn(evt); });
  });

  // Page visibility
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      hideListeners.forEach(function (fn) { fn(); });
    } else {
      showListeners.forEach(function (fn) { fn({ scene: 1001, query: {}, referrerInfo: {} }); });
    }
  });

  // wx API shim
  window.wx = {
    // Canvas
    createCanvas: function () {
      var c = document.createElement("canvas");
      c.toTempFilePathSync = function (opt) {
        return c.toDataURL();
      };
      c.toTempFilePath = function (opt) {
        var url = c.toDataURL();
        if (opt && opt.success) opt.success({ tempFilePath: url });
      };
      return c;
    },

    // Image
    createImage: function () {
      return new Image();
    },

    // System info
    getSystemInfoSync: function () {
      return {
        brand: "browser",
        model: "Web",
        pixelRatio: window.devicePixelRatio || 2,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        language: navigator.language || "zh_CN",
        version: "8.0.0",
        system: navigator.platform,
        platform: "devtools",
        SDKVersion: "3.0.0",
        benchmarkLevel: 30,
      };
    },

    getWindowInfo: function () {
      return {
        pixelRatio: window.devicePixelRatio || 2,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        statusBarHeight: 0,
        safeArea: {
          left: 0, right: window.innerWidth,
          top: 0, bottom: window.innerHeight,
          width: window.innerWidth, height: window.innerHeight
        }
      };
    },

    getDeviceInfo: function () {
      return {
        brand: "browser",
        model: "Web",
        system: navigator.platform,
        platform: "devtools",
        benchmarkLevel: 30,
      };
    },

    getMenuButtonBoundingClientRect: function () {
      return {
        width: 87,
        height: 32,
        top: 26,
        right: window.innerWidth - 10,
        bottom: 58,
        left: window.innerWidth - 97,
      };
    },

    getLaunchOptionsSync: function () {
      return { scene: 1001, query: {}, referrerInfo: {} };
    },

    // Storage (use localStorage) - always JSON.stringify on write, JSON.parse on read
    getStorageSync: function (key) {
      try {
        var val = localStorage.getItem("wx_" + key);
        if (val === null) return "";
        return JSON.parse(val);
      } catch (e) { return ""; }
    },

    setStorageSync: function (key, data) {
      try {
        localStorage.setItem("wx_" + key, JSON.stringify(data));
      } catch (e) {}
    },

    setStorage: function (opt) {
      try {
        localStorage.setItem("wx_" + opt.key, JSON.stringify(opt.data));
        if (opt.success) opt.success();
      } catch (e) {
        if (opt.fail) opt.fail(e);
      }
      if (opt.complete) opt.complete();
    },

    getStorage: function (opt) {
      try {
        var val = localStorage.getItem("wx_" + opt.key);
        if (val !== null) {
          val = JSON.parse(val);
          if (opt.success) opt.success({ data: val });
        } else {
          if (opt.fail) opt.fail({ errMsg: "getStorage:fail" });
        }
      } catch (e) {
        if (opt.fail) opt.fail(e);
      }
      if (opt.complete) opt.complete();
    },

    removeStorageSync: function (key) {
      try { localStorage.removeItem("wx_" + key); } catch (e) {}
    },

    // Touch events
    onTouchStart: function (fn) { touchStartListeners.push(fn); },
    onTouchMove: function (fn) { touchMoveListeners.push(fn); },
    onTouchEnd: function (fn) { touchEndListeners.push(fn); },
    onTouchCancel: function (fn) { touchCancelListeners.push(fn); },

    // Lifecycle
    onShow: function (fn) { showListeners.push(fn); },
    offShow: function (fn) {
      var idx = showListeners.indexOf(fn);
      if (idx !== -1) showListeners.splice(idx, 1);
    },
    onHide: function (fn) { hideListeners.push(fn); },
    onError: function (fn) {
      window.addEventListener("error", function (e) { fn(e.message); });
    },

    // Audio (Web Audio API)
    createInnerAudioContext: function () {
      var _src = "";
      var _sourceNode = null;
      var _buffer = null;
      var _gainNode = null;
      var ctx = {
        loop: false,
        volume: 0.8,
        autoplay: false,
        play: function () {
          if (!_src) return;
          function doPlay() {
            var actx = getAudioCtx();
            if (!_gainNode) {
              _gainNode = actx.createGain();
              _gainNode.connect(actx.destination);
            }
            _gainNode.gain.value = ctx.volume;
            function playBuffer(buf) {
              if (!buf) return;
              _buffer = buf;
              if (_sourceNode) { try { _sourceNode.stop(); } catch(e) {} }
              _sourceNode = actx.createBufferSource();
              _sourceNode.buffer = buf;
              _sourceNode.loop = ctx.loop;
              _sourceNode.connect(_gainNode);
              _sourceNode.start(0);
            }
            if (_buffer) {
              playBuffer(_buffer);
            } else {
              loadAudioBuffer(_src, playBuffer);
            }
          }
          // If context is suspended, wait for resume then play
          if (audioCtx.state === "suspended") {
            audioCtx.resume().then(doPlay);
          } else {
            doPlay();
          }
        },
        pause: function () { if (_sourceNode) { try { _sourceNode.stop(); } catch(e) {} _sourceNode = null; } },
        stop: function () { if (_sourceNode) { try { _sourceNode.stop(); } catch(e) {} _sourceNode = null; } },
        seek: function () {},
        destroy: function () { ctx.stop(); _buffer = null; _src = ""; },
        onCanplay: function () {},
        onPlay: function () {},
        onEnded: function (fn) {
          // Will be called when buffer finishes
        },
        onError: function () {},
        offCanplay: function () {},
        offPlay: function () {},
        offEnded: function () {},
        offError: function () {},
        offStop: function () {},
      };
      Object.defineProperty(ctx, "src", {
        set: function (v) {
          _src = v;
          _buffer = null;
          if (v) {
            // Preload
            loadAudioBuffer(v, function(buf) {
              _buffer = buf;
              if (ctx.autoplay && buf) ctx.play();
            });
          }
        },
        get: function () { return _src; },
      });
      Object.defineProperty(ctx, "currentTime", {
        get: function () { return 0; },
        set: function () {},
      });
      Object.defineProperty(ctx, "duration", {
        get: function () { return _buffer ? _buffer.duration : 0; },
      });
      Object.defineProperty(ctx, "paused", {
        get: function () { return !_sourceNode; },
      });
      return ctx;
    },

    // Network - mock all external API calls, use localStorage for data
    request: function (opt) {
      var url = opt.url || "";
      var mockData = null;

      // --- LOGIN ---
      if (url.indexOf("loginAccount") !== -1) {
        console.log("[MOCK] loginAccount");
        mockData = {
          uid: 10001,
          token: "mock_token_browser_" + Date.now(),
          online: "http://localhost/_mock_gate",
          url: "http://localhost",
          gatePath: "/mock"
        };
      }
      // --- PROTOCOL COMMANDS (gate) ---
      else if (url.indexOf("_mock_gate") !== -1 || url.indexOf("/valid") !== -1) {
        var reqBody = opt.data;
        if (typeof reqBody === "string") {
          try { reqBody = JSON.parse(reqBody); } catch(e) { reqBody = {}; }
        }
        reqBody = reqBody || {};
        var cmd = 0, seq = 0, reqCmdBody = {};
        // POST: data = {cmds: [{header: {cmd, seq}, body}]}  (or string of same)
        // GET: data = {cmd: jsonString, _t: timestamp}
        if (reqBody.cmds && reqBody.cmds[0]) {
          cmd = reqBody.cmds[0].header.cmd;
          seq = reqBody.cmds[0].header.seq || 0;
          reqCmdBody = reqBody.cmds[0].body || {};
        } else if (reqBody.cmd) {
          // GET format: cmd is a JSON string
          try {
            var parsed = typeof reqBody.cmd === "string" ? JSON.parse(reqBody.cmd) : reqBody.cmd;
            if (parsed.cmds && parsed.cmds[0]) {
              cmd = parsed.cmds[0].header.cmd;
              seq = parsed.cmds[0].header.seq || 0;
              reqCmdBody = parsed.cmds[0].body || {};
            }
          } catch(e) {}
        }
        console.log("[MOCK GATE] cmd=" + cmd + " seq=" + seq + " method=" + (opt.method || "GET"));
        // Check if it's a /valid call (token validation)
        if (url.indexOf("/valid") !== -1) {
          console.log("[MOCK] /valid");
          mockData = {
            uid: 10001,
            token: "mock_token_browser_" + Date.now(),
            online: "http://localhost/_mock_gate",
            url: "http://localhost",
            gatePath: "/mock"
          };
        }
        // cmd 257 = login/TP - return user data
        else if (cmd === 257) {
          console.log("[MOCK] cmd 257 (login)");
          // Load saved user data from localStorage
          var saved = {};
          try { saved = JSON.parse(localStorage.getItem("mockUserData") || "{}"); } catch(e) {}
          // Generate all skin items (unlocked) - format: {1: id, 2: count}
          var allItems = [];
          // Skin IDs: 101-105, 201-205, 301-313, 401-403, 501-504, 601-603
          // 1001-1047, 1201-1213, 2001-2014, 3001-3015
          var skinRanges = [[101,105],[201,205],[301,313],[401,403],[501,504],[601,603],
            [1001,1047],[1201,1213],[2001,2014],[3001,3015]];
          for (var ri = 0; ri < skinRanges.length; ri++) {
            for (var si = skinRanges[ri][0]; si <= skinRanges[ri][1]; si++) {
              allItems.push({1: si, 2: 1}); // {id: si, count: 1}
            }
          }
          var userInfo = {
            1: saved.uid || 10001,           // uid
            2: saved.nick || "Player",       // nick
            3: saved.image || "",            // image
            4: 999999,                       // gold (CHEAT)
            5: saved.bestScore || 999,       // bestScore
            6: saved.skin || 0,              // skin
            7: allItems,                     // itemInfos - ALL SKINS UNLOCKED
            8: saved.expertBestScores || [], // expertBestScores
            14: true,                        // guest
            15: 0,                           // sex
            17: 0,                           // guideStep (0 = show guide)
            19: 0,                           // isCheat
            20: 999999,                      // coin (CHEAT)
            21: 999,                         // ticket (CHEAT)
            22: 0,                           // ticketVideoAd
            23: 0,                           // ticketChallenge
            31: saved.loginDays || 30,       // loginDays
            32: saved.todayGameCount || 0,   // todayGameCount
            33: saved.createTime || Date.now(), // createTime
            41: 0                            // gameVersion
          };
          mockData = {
            cmds: [{
              header: { cmd: 257, ret: 0, seq: seq },
              body: {
                1: Date.now(),               // now
                2: "mock_connect_" + Date.now(), // connectToken
                3: userInfo                   // userInfo
              }
            }]
          };
        }
        // cmd 769 = PP (equip skin) - return syncData with skin field
        else if (cmd === 769) {
          var skinId = reqCmdBody["1"] || reqCmdBody[1] || 0;
          console.log("[MOCK] cmd 769 (equip skin) skinId=" + skinId);
          // syncData indexed format: 6=skin, 39=paint, 40=trail
          // We set skin field; the game's syncData will update uC.skin
          var syncIdx = {};
          syncIdx["6"] = skinId;
          mockData = {
            cmds: [{
              header: { cmd: 769, ret: 0, seq: seq },
              body: { "1": syncIdx }
            }]
          };
        }
        // cmd 1794 = KP (buy skin with gold) - return syncData with gold + new item
        else if (cmd === 1794) {
          var buySkinId = reqCmdBody["1"] || reqCmdBody[1] || 0;
          console.log("[MOCK] cmd 1794 (buy skin) skinId=" + buySkinId);
          // syncData: keep gold at 999999, add item to inventory
          var buySyncIdx = {};
          buySyncIdx["4"] = 999999;  // gold stays maxed (cheat)
          buySyncIdx["20"] = 999999; // coin stays maxed
          buySyncIdx["7"] = [{"1": buySkinId, "2": 1}]; // itemInfos: [{id, count}]
          mockData = {
            cmds: [{
              header: { cmd: 1794, ret: 0, seq: seq },
              body: { "1": buySyncIdx }
            }]
          };
        }
        // cmd 1025 = UP (game start) - return fightId + floorCount
        else if (cmd === 1025) {
          var fightId = Date.now();
          console.log("[MOCK] cmd 1025 (game start) fightId=" + fightId);
          mockData = {
            cmds: [{
              header: { cmd: 1025, ret: 0, seq: seq },
              body: {
                "1": fightId,  // fightId
                "2": 200,      // floorCount
                "3": reqCmdBody["3"] || reqCmdBody[3] || 0  // map
              }
            }]
          };
        }
        // cmd 1027 = WP (game end) - return score + syncData with gold
        else if (cmd === 1027) {
          var endScore = reqCmdBody["2"] || reqCmdBody[2] || 0;
          var addGold = Math.max(1, Math.floor(endScore / 10));
          console.log("[MOCK] cmd 1027 (game end) score=" + endScore + " addGold=" + addGold);
          mockData = {
            cmds: [{
              header: { cmd: 1027, ret: 0, seq: seq },
              body: {
                "1": reqCmdBody["1"] || reqCmdBody[1] || 0,  // fightId
                "2": { "4": 999999, "20": 999999 },          // syncData (gold + coin maxed)
                "3": endScore,                                 // score
                "4": 999999,                                   // gold
                "5": 0,                                        // goldRate
                "6": addGold                                   // addGold
              }
            }]
          };
        }
        // Any other protocol command - return success with empty body
        else {
          console.log("[MOCK] cmd", cmd);
          mockData = {
            cmds: [{
              header: { cmd: cmd, ret: 0, seq: seq },
              body: {}
            }]
          };
        }
      }
      // --- ANALYTICS (skip) ---
      else if (url.indexOf("analysis") !== -1 || url.indexOf("record") !== -1) {
        mockData = {};
      }
      // --- ALL i51game.com URLs -> local data/ folder ---
      else if (url.indexOf("i51game.com") !== -1) {
        var rewritten = false;

        // resm/ MD5 hashed files -> data/resm/
        var resmMatch = url.match(/resm\/([a-f0-9]+\.\w+)/);
        if (resmMatch) {
          url = "data/resm/" + resmMatch[1];
          rewritten = true;
        }
        // version*.json -> data/
        else if (url.match(/version\d+\.json/)) {
          var verMatch = url.match(/(version\d+\.json)/);
          if (verMatch) { url = "data/" + verMatch[1]; rewritten = true; }
        }
        // Known config files
        else if (url.indexOf("host.json") !== -1) { url = "data/host.json"; rewritten = true; }
        else if (url.indexOf("configs2.json") !== -1) { url = "data/configs2.json"; rewritten = true; }
        else if (url.indexOf("challenge.json") !== -1) { url = "data/challenge.json"; rewritten = true; }
        else if (url.indexOf("expertmode.json") !== -1) { url = "data/expertmode.json"; rewritten = true; }
        else if (url.indexOf("notice.json") !== -1) { url = "data/notice.json"; rewritten = true; }
        else if (url.indexOf("moreGame") !== -1) { url = "data/moreGame.json"; rewritten = true; }
        else if (url.indexOf("yunying") !== -1 || url.indexOf("conf/") !== -1 || url.indexOf("open/conf") !== -1) {
          url = "data/yunying.json"; rewritten = true;
        }

        if (rewritten) {
          console.log("[LOCAL]", opt.url, "->", url);
        } else {
          console.log("[MOCK] i51game (skip):", url);
          mockData = {};
        }
      }

      // If we have mock data, return it immediately
      if (mockData !== null) {
        setTimeout(function() {
          if (opt.success) opt.success({ data: mockData, statusCode: 200 });
          if (opt.complete) opt.complete();
        }, 10);
        return { abort: function() {} };
      }

      // For local/same-origin URLs, make real request
      var finalUrl = url;  // url may have been rewritten above
      var xhr = new XMLHttpRequest();
      xhr.open(opt.method || "GET", finalUrl);
      if (opt.header && !finalUrl.startsWith("data/")) {
        Object.keys(opt.header).forEach(function (k) {
          try { xhr.setRequestHeader(k, opt.header[k]); } catch(e) {}
        });
      }
      xhr.onload = function () {
        var data = xhr.responseText;
        try { data = JSON.parse(data); } catch (e) {}
        if (opt.success) opt.success({ data: data, statusCode: xhr.status });
      };
      xhr.onerror = function () {
        console.warn("[wx.request] failed:", finalUrl);
        if (opt.success) opt.success({ data: {}, statusCode: 200 });
      };
      xhr.onloadend = function () {
        if (opt.complete) opt.complete();
      };
      try {
        xhr.send(opt.data && !finalUrl.startsWith("data/") ? (typeof opt.data === "string" ? opt.data : JSON.stringify(opt.data)) : null);
      } catch(e) {
        console.warn("[wx.request] send error:", finalUrl);
        if (opt.success) opt.success({ data: {}, statusCode: 200 });
        if (opt.complete) opt.complete();
      }
      return { abort: function () { try { xhr.abort(); } catch(e) {} } };
    },

    downloadFile: function (opt) {
      var url = opt.url || "";
      // Block external downloads
      if (url.indexOf("i51game.com") !== -1) {
        console.log("[MOCK] downloadFile skip:", url);
        if (opt.fail) opt.fail({ errMsg: "downloadFile:mock" });
        if (opt.complete) opt.complete();
        return { abort: function() {} };
      }
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.onload = function () {
        var blobUrl = URL.createObjectURL(xhr.response);
        if (opt.success) opt.success({ tempFilePath: blobUrl, statusCode: xhr.status });
      };
      xhr.onerror = function () {
        if (opt.fail) opt.fail({ errMsg: "downloadFile:fail" });
      };
      xhr.onloadend = function () {
        if (opt.complete) opt.complete();
      };
      xhr.send();
      return { abort: function () { xhr.abort(); } };
    },

    // UI
    showToast: function (opt) {
      console.log("[Toast]", opt.title);
    },
    showLoading: function (opt) {
      console.log("[Loading]", opt && opt.title);
    },
    hideLoading: function () {},
    showModal: function (opt) {
      var result = confirm(opt.content || opt.title || "");
      if (result) {
        if (opt.success) opt.success({ confirm: true, cancel: false });
      } else {
        if (opt.success) opt.success({ confirm: false, cancel: true });
      }
    },
    showShareMenu: function () {},
    showKeyboard: function (opt) {},
    onKeyboardComplete: function (fn) {},
    offKeyboardComplete: function (fn) {},

    // Vibration
    vibrateShort: function (opt) {
      try { if (navigator.vibrate) navigator.vibrate(15); } catch(e) {}
      if (opt && opt.success) opt.success();
    },

    // Login/Social (mock)
    login: function (opt) {
      if (opt.success) opt.success({ code: "mock_code_browser" });
    },
    checkSession: function (opt) {
      if (opt.success) opt.success();
    },
    getSetting: function (opt) {
      if (opt.success) opt.success({ authSetting: {} });
    },
    openSetting: function (opt) {
      if (opt.success) opt.success({ authSetting: {} });
    },

    // User info button (mock)
    createUserInfoButton: function (opt) {
      return {
        show: function () {},
        hide: function () {},
        destroy: function () {},
        onTap: function (fn) {},
        offTap: function () {},
        style: opt.style || {},
      };
    },

    // Game club button (mock)
    createGameClubButton: function (opt) {
      return {
        show: function () {},
        hide: function () {},
        destroy: function () {},
        style: opt ? opt.style || {} : {},
      };
    },

    // Share
    shareAppMessage: function (opt) { console.log("[Share]", opt); },
    onShareAppMessage: function (fn) {},
    onShareTimeline: function (fn) {},

    // Open data context (mock)
    getOpenDataContext: function () {
      return {
        canvas: document.createElement("canvas"),
        postMessage: function (msg) {
          console.log("[OpenData]", msg);
        },
      };
    },

    // Rank manager (mock)
    getRankManager: function () {
      return {
        setRankData: function () {},
        getRankData: function (opt) {
          if (opt && opt.success) opt.success({ data: [] });
        },
      };
    },

    // Subscribe message (mock)
    requestSubscribeMessage: function (opt) {
      if (opt.success) opt.success({});
      if (opt.complete) opt.complete();
    },

    // Ads (mock - no-op)
    createBannerAd: function () {
      return {
        show: function () { return Promise.resolve(); },
        hide: function () { return Promise.resolve(); },
        destroy: function () {},
        onLoad: function () {},
        onError: function () {},
        onResize: function () {},
        offLoad: function () {},
        offError: function () {},
        offResize: function () {},
        style: {},
      };
    },
    createRewardedVideoAd: function () {
      return {
        show: function () { return Promise.reject({ errMsg: "no ads in browser" }); },
        load: function () { return Promise.resolve(); },
        destroy: function () {},
        onLoad: function () {},
        onError: function () {},
        onClose: function (fn) {},
        offLoad: function () {},
        offError: function () {},
        offClose: function () {},
      };
    },
    createInterstitialAd: function () {
      return {
        show: function () { return Promise.reject(); },
        load: function () { return Promise.resolve(); },
        destroy: function () {},
        onLoad: function () {},
        onError: function () {},
        onClose: function () {},
        offLoad: function () {},
        offError: function () {},
        offClose: function () {},
      };
    },

    // Subpackage loading
    loadSubpackage: function (opt) {
      console.log("[LoadSubpackage]", opt.name);
      // Subpackages already loaded via script tags
      setTimeout(function () {
        if (opt.success) opt.success();
      }, 100);
      return {
        onProgressUpdate: function () {},
      };
    },

    // Update manager
    getUpdateManager: function () {
      return {
        onCheckForUpdate: function () {},
        onUpdateReady: function () {},
        onUpdateFailed: function () {},
        applyUpdate: function () {},
      };
    },

    // Navigate
    navigateToMiniProgram: function (opt) {
      console.log("[Navigate]", opt);
      if (opt.fail) opt.fail({ errMsg: "navigateToMiniProgram:fail" });
    },
    exitMiniProgram: function () {
      window.close();
    },
    restartMiniProgram: function () {
      window.location.reload();
    },

    // Open customer service
    openCustomerServiceConversation: function (opt) {
      console.log("[CustomerService]");
    },

    // GC
    triggerGC: function () {},

    // File system (mock - reads local files via XHR)
    getFileSystemManager: function () {
      return {
        readFile: function (opt) {
          var path = opt.filePath || "";
          // For local paths (dlc/, res/, etc), fetch via XHR from server
          if (path && !path.startsWith("http") && !path.startsWith("//")) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", path);
            if (!opt.encoding) xhr.responseType = "arraybuffer";
            xhr.onload = function() {
              if (xhr.status === 200) {
                if (opt.success) opt.success({ data: opt.encoding ? xhr.responseText : xhr.response });
              } else {
                if (opt.fail) opt.fail({ errMsg: "readFile:fail " + xhr.status });
              }
            };
            xhr.onerror = function() {
              if (opt.fail) opt.fail({ errMsg: "readFile:fail network error" });
            };
            xhr.send();
            return;
          }
          if (opt.fail) opt.fail({ errMsg: "readFile:fail no such file" });
        },
        writeFile: function (opt) {
          try {
            localStorage.setItem("fs_" + opt.filePath, opt.data);
            if (opt.success) opt.success();
          } catch(e) {
            if (opt.fail) opt.fail({ errMsg: "writeFile:fail" });
          }
        },
        access: function (opt) {
          if (localStorage.getItem("fs_" + opt.filePath) !== null) {
            if (opt.success) opt.success();
          } else {
            if (opt.fail) opt.fail({ errMsg: "access:fail no such file" });
          }
        },
        accessSync: function (path) {
          // Throw = file does not exist (game will fallback to HTTP)
          throw new Error("access:fail no such file");
        },
        readFileSync: function (path) { return null; },
        readdirSync: function (path) { return []; },
        statSync: function (path) { return null; },
        mkdirSync: function () {},
        unlinkSync: function () {},
        unlink: function (opt) {
          if (opt && opt.success) opt.success();
        },
        getFileInfo: function (opt) {
          if (opt.fail) opt.fail({ errMsg: "getFileInfo:fail no such file" });
        },
        saveFile: function (opt) {
          if (opt.success) opt.success({ savedFilePath: opt.tempFilePath || "" });
        },
      };
    },

    setUserCloudStorage: function (opt) {
      if (opt.success) opt.success();
    },
    removeUserCloudStorage: function (opt) {
      if (opt.success) opt.success();
    },

    onOfficialComponentsInfoChange: function (fn) {},

    env: {
      USER_DATA_PATH: ".",
    },
  };

  // Mock require for subpackage loading
  window.require = function (path) {
    console.log("[require]", path);
    return {};
  };

  // Block all WebSocket connections (socket.io disabled in jump.js, this is just a safety net)
  window.WebSocket = function MockWebSocket() {
    return {
      readyState: 3, send: function() {}, close: function() {},
      addEventListener: function() {}, removeEventListener: function() {},
      onopen: null, onclose: null, onerror: null, onmessage: null,
    };
  };
  window.WebSocket.CONNECTING = 0;
  window.WebSocket.OPEN = 1;
  window.WebSocket.CLOSING = 2;
  window.WebSocket.CLOSED = 3;

  // Ensure DEVELOP and DEBUG
  window.DEVELOP = false;
  window.DEBUG = false;

  console.log("[wx-shim] WeChat API shim loaded for browser");
})();
