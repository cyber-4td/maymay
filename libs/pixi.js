! function(t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PIXI = t()
  }
}((function() {
  return function t(e, r, i) {
    function n(s, a) {
      if (!r[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;
          if (!a && u) return u(s, !0);
          if (o) return o(s, !0);
          var h = new Error("Cannot find module '" + s + "'");
          throw h.code = "MODULE_NOT_FOUND", h
        }
        var l = r[s] = {
          exports: {}
        };
        e[s][0].call(l.exports, (function(t) {
          return n(e[s][1][t] || t)
        }), l, l.exports, t, e, r, i)
      }
      return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
    return n
  }({
    1: [function(t, e, r) {
      "use strict";

      function i(t) {
        var e = 32;
        return (t &= -t) && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
      }
      r.INT_BITS = 32, r.INT_MAX = 2147483647, r.INT_MIN = -1 << 31, r.sign = function(t) {
        return (t > 0) - (t < 0)
      }, r.abs = function(t) {
        var e = t >> 31;
        return (t ^ e) - e
      }, r.min = function(t, e) {
        return e ^ (t ^ e) & -(t < e)
      }, r.max = function(t, e) {
        return t ^ (t ^ e) & -(t < e)
      }, r.isPow2 = function(t) {
        return !(t & t - 1 || !t)
      }, r.log2 = function(t) {
        var e, r;
        return e = (t > 65535) << 4, e |= r = ((t >>>= e) > 255) << 3, e |= r = ((t >>>= r) > 15) << 2, (e |= r = ((t >>>= r) > 3) << 1) | (t >>>= r) >> 1
      }, r.log10 = function(t) {
        return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
      }, r.popCount = function(t) {
        return 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
      }, r.countTrailingZeros = i, r.nextPow2 = function(t) {
        return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16)
      }, r.prevPow2 = function(t) {
        return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1)
      }, r.parity = function(t) {
        return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1
      };
      var n = new Array(256);
      ! function(t) {
        for (var e = 0; e < 256; ++e) {
          var r = e,
            i = e,
            n = 7;
          for (r >>>= 1; r; r >>>= 1) i <<= 1, i |= 1 & r, --n;
          t[e] = i << n & 255
        }
      }(n), r.reverse = function(t) {
        return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255]
      }, r.interleave2 = function(t, e) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
      }, r.deinterleave2 = function(t, e) {
        return (t = 65535 & ((t = 16711935 & ((t = 252645135 & ((t = 858993459 & ((t = t >>> e & 1431655765) | t >>> 1)) | t >>> 2)) | t >>> 4)) | t >>> 16)) << 16 >> 16
      }, r.interleave3 = function(t, e, r) {
        return t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2), (t |= (e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2)) << 1) | (r = 1227133513 & ((r = 3272356035 & ((r = 251719695 & ((r = 4278190335 & ((r &= 1023) | r << 16)) | r << 8)) | r << 4)) | r << 2)) << 2
      }, r.deinterleave3 = function(t, e) {
        return (t = 1023 & ((t = 4278190335 & ((t = 251719695 & ((t = 3272356035 & ((t = t >>> e & 1227133513) | t >>> 2)) | t >>> 4)) | t >>> 8)) | t >>> 16)) << 22 >> 22
      }, r.nextCombination = function(t) {
        var e = t | t - 1;
        return e + 1 | (~e & -~e) - 1 >>> i(t) + 1
      }
    }, {}],
    2: [function(t, e, r) {
      "use strict";

      function i(t, e, r) {
        r = r || 2;
        var i, o, a, u, h, l, f, d = e && e.length,
          p = d ? e[0] * r : t.length,
          y = n(t, 0, p, r, !0),
          v = [];
        if (!y) return v;
        if (d && (y = c(t, e, y, r)), t.length > 80 * r) {
          i = a = t[0], o = u = t[1];
          for (var g = r; g < p; g += r)(h = t[g]) < i && (i = h), (l = t[g + 1]) < o && (o = l), h > a && (a = h), l > u && (u = l);
          f = 0 !== (f = Math.max(a - i, u - o)) ? 1 / f : 0
        }
        return s(y, v, r, i, o, f), v
      }

      function n(t, e, r, i, n) {
        var o, s;
        if (n === M(t, e, r, i) > 0)
          for (o = e; o < r; o += i) s = E(o, t[o], t[o + 1], s);
        else
          for (o = r - i; o >= e; o -= i) s = E(o, t[o], t[o + 1], s);
        return s && x(s, s.next) && (O(s), s = s.next), s
      }

      function o(t, e) {
        if (!t) return t;
        e || (e = t);
        var r, i = t;
        do {
          if (r = !1, i.steiner || !x(i, i.next) && 0 !== m(i.prev, i, i.next)) i = i.next;
          else {
            if (O(i), (i = e = i.prev) === i.next) break;
            r = !0
          }
        } while (r || i !== e);
        return e
      }

      function s(t, e, r, i, n, c, f) {
        if (t) {
          !f && c && p(t, i, n, c);
          for (var d, y, v = t; t.prev !== t.next;)
            if (d = t.prev, y = t.next, c ? u(t, i, n, c) : a(t)) e.push(d.i / r), e.push(t.i / r), e.push(y.i / r), O(t), t = y.next, v = y.next;
            else if ((t = y) === v) {
            f ? 1 === f ? s(t = h(t, e, r), e, r, i, n, c, 2) : 2 === f && l(t, e, r, i, n, c) : s(o(t), e, r, i, n, c, 1);
            break
          }
        }
      }

      function a(t) {
        var e = t.prev,
          r = t,
          i = t.next;
        if (m(e, r, i) >= 0) return !1;
        for (var n = t.next.next; n !== t.prev;) {
          if (g(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && m(n.prev, n, n.next) >= 0) return !1;
          n = n.next
        }
        return !0
      }

      function u(t, e, r, i) {
        var n = t.prev,
          o = t,
          s = t.next;
        if (m(n, o, s) >= 0) return !1;
        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, u = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, h = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = y(a, u, e, r, i), f = y(h, l, e, r, i), d = t.prevZ, p = t.nextZ; d && d.z >= c && p && p.z <= f;) {
          if (d !== t.prev && d !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && m(d.prev, d, d.next) >= 0) return !1;
          if (d = d.prevZ, p !== t.prev && p !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && m(p.prev, p, p.next) >= 0) return !1;
          p = p.nextZ
        }
        for (; d && d.z >= c;) {
          if (d !== t.prev && d !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && m(d.prev, d, d.next) >= 0) return !1;
          d = d.prevZ
        }
        for (; p && p.z <= f;) {
          if (p !== t.prev && p !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && m(p.prev, p, p.next) >= 0) return !1;
          p = p.nextZ
        }
        return !0
      }

      function h(t, e, r) {
        var i = t;
        do {
          var n = i.prev,
            o = i.next.next;
          !x(n, o) && b(n, i, i.next, o) && T(n, o) && T(o, n) && (e.push(n.i / r), e.push(i.i / r), e.push(o.i / r), O(i), O(i.next), i = t = o), i = i.next
        } while (i !== t);
        return i
      }

      function l(t, e, r, i, n, a) {
        var u = t;
        do {
          for (var h = u.next.next; h !== u.prev;) {
            if (u.i !== h.i && _(u, h)) {
              var l = w(u, h);
              return u = o(u, u.next), l = o(l, l.next), s(u, e, r, i, n, a), void s(l, e, r, i, n, a)
            }
            h = h.next
          }
          u = u.next
        } while (u !== t)
      }

      function c(t, e, r, i) {
        var s, a, u, h = [];
        for (s = 0, a = e.length; s < a; s++)(u = n(t, e[s] * i, s < a - 1 ? e[s + 1] * i : t.length, i, !1)) === u.next && (u.steiner = !0), h.push(v(u));
        for (h.sort(f), s = 0; s < h.length; s++) d(h[s], r), r = o(r, r.next);
        return r
      }

      function f(t, e) {
        return t.x - e.x
      }

      function d(t, e) {
        if (e = function(t, e) {
            var r, i = e,
              n = t.x,
              o = t.y,
              s = -1 / 0;
            do {
              if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                if (a <= n && a > s) {
                  if (s = a, a === n) {
                    if (o === i.y) return i;
                    if (o === i.next.y) return i.next
                  }
                  r = i.x < i.next.x ? i : i.next
                }
              }
              i = i.next
            } while (i !== e);
            if (!r) return null;
            if (n === s) return r.prev;
            var u, h = r,
              l = r.x,
              c = r.y,
              f = 1 / 0;
            for (i = r.next; i !== h;) n >= i.x && i.x >= l && n !== i.x && g(o < c ? n : s, o, l, c, o < c ? s : n, o, i.x, i.y) && ((u = Math.abs(o - i.y) / (n - i.x)) < f || u === f && i.x > r.x) && T(i, t) && (r = i, f = u), i = i.next;
            return r
          }(t, e)) {
          var r = w(e, t);
          o(r, r.next)
        }
      }

      function p(t, e, r, i) {
        var n = t;
        do {
          null === n.z && (n.z = y(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
        } while (n !== t);
        n.prevZ.nextZ = null, n.prevZ = null,
          function(t) {
            var e, r, i, n, o, s, a, u, h = 1;
            do {
              for (r = t, t = null, o = null, s = 0; r;) {
                for (s++, i = r, a = 0, e = 0; e < h && (a++, i = i.nextZ); e++);
                for (u = h; a > 0 || u > 0 && i;) 0 !== a && (0 === u || !i || r.z <= i.z) ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, u--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                r = i
              }
              o.nextZ = null, h *= 2
            } while (s > 1)
          }(n)
      }

      function y(t, e, r, i, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
      }

      function v(t) {
        var e = t,
          r = t;
        do {
          e.x < r.x && (r = e), e = e.next
        } while (e !== t);
        return r
      }

      function g(t, e, r, i, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (n - s) * (i - a) >= 0
      }

      function _(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
          var r = t;
          do {
            if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && b(r, r.next, t, e)) return !0;
            r = r.next
          } while (r !== t);
          return !1
        }(t, e) && T(t, e) && T(e, t) && function(t, e) {
          var r = t,
            i = !1,
            n = (t.x + e.x) / 2,
            o = (t.y + e.y) / 2;
          do {
            r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next
          } while (r !== t);
          return i
        }(t, e)
      }

      function m(t, e, r) {
        return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
      }

      function x(t, e) {
        return t.x === e.x && t.y === e.y
      }

      function b(t, e, r, i) {
        return !!(x(t, e) && x(r, i) || x(t, i) && x(r, e)) || m(t, e, r) > 0 != m(t, e, i) > 0 && m(r, i, t) > 0 != m(r, i, e) > 0
      }

      function T(t, e) {
        return m(t.prev, t, t.next) < 0 ? m(t, e, t.next) >= 0 && m(t, t.prev, e) >= 0 : m(t, e, t.prev) < 0 || m(t, t.next, e) < 0
      }

      function w(t, e) {
        var r = new S(t.i, t.x, t.y),
          i = new S(e.i, e.x, e.y),
          n = t.next,
          o = e.prev;
        return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
      }

      function E(t, e, r, i) {
        var n = new S(t, e, r);
        return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n
      }

      function O(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
      }

      function S(t, e, r) {
        this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
      }

      function M(t, e, r, i) {
        for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        return n
      }
      e.exports = i, e.exports.default = i, i.deviation = function(t, e, r, i) {
        var n = e && e.length,
          o = n ? e[0] * r : t.length,
          s = Math.abs(M(t, 0, o, r));
        if (n)
          for (var a = 0, u = e.length; a < u; a++) {
            var h = e[a] * r,
              l = a < u - 1 ? e[a + 1] * r : t.length;
            s -= Math.abs(M(t, h, l, r))
          }
        var c = 0;
        for (a = 0; a < i.length; a += 3) {
          var f = i[a] * r,
            d = i[a + 1] * r,
            p = i[a + 2] * r;
          c += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]))
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
      }, i.flatten = function(t) {
        for (var e = t[0][0].length, r = {
            vertices: [],
            holes: [],
            dimensions: e
          }, i = 0, n = 0; n < t.length; n++) {
          for (var o = 0; o < t[n].length; o++)
            for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
          n > 0 && (i += t[n - 1].length, r.holes.push(i))
        }
        return r
      }
    }, {}],
    3: [function(t, e, r) {
      "use strict";

      function i() {}

      function n(t, e, r) {
        this.fn = t, this.context = e, this.once = r || !1
      }

      function o() {
        this._events = new i, this._eventsCount = 0
      }
      var s = Object.prototype.hasOwnProperty,
        a = "~";
      Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (a = !1)), o.prototype.eventNames = function() {
        var t, e, r = [];
        if (0 === this._eventsCount) return r;
        for (e in t = this._events) s.call(t, e) && r.push(a ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
      }, o.prototype.listeners = function(t, e) {
        var r = a ? a + t : t,
          i = this._events[r];
        if (e) return !!i;
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var n = 0, o = i.length, s = new Array(o); n < o; n++) s[n] = i[n].fn;
        return s
      }, o.prototype.emit = function(t, e, r, i, n, o) {
        var s = a ? a + t : t;
        if (!this._events[s]) return !1;
        var u, h, l = this._events[s],
          c = arguments.length;
        if (l.fn) {
          switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
            case 1:
              return l.fn.call(l.context), !0;
            case 2:
              return l.fn.call(l.context, e), !0;
            case 3:
              return l.fn.call(l.context, e, r), !0;
            case 4:
              return l.fn.call(l.context, e, r, i), !0;
            case 5:
              return l.fn.call(l.context, e, r, i, n), !0;
            case 6:
              return l.fn.call(l.context, e, r, i, n, o), !0
          }
          for (h = 1, u = new Array(c - 1); h < c; h++) u[h - 1] = arguments[h];
          l.fn.apply(l.context, u)
        } else {
          var f, d = l.length;
          for (h = 0; h < d; h++) switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), c) {
            case 1:
              l[h].fn.call(l[h].context);
              break;
            case 2:
              l[h].fn.call(l[h].context, e);
              break;
            case 3:
              l[h].fn.call(l[h].context, e, r);
              break;
            case 4:
              l[h].fn.call(l[h].context, e, r, i);
              break;
            default:
              if (!u)
                for (f = 1, u = new Array(c - 1); f < c; f++) u[f - 1] = arguments[f];
              l[h].fn.apply(l[h].context, u)
          }
        }
        return !0
      }, o.prototype.on = function(t, e, r) {
        var i = new n(e, r || this),
          o = a ? a + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
      }, o.prototype.once = function(t, e, r) {
        var i = new n(e, r || this, !0),
          o = a ? a + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
      }, o.prototype.removeListener = function(t, e, r, n) {
        var o = a ? a + t : t;
        if (!this._events[o]) return this;
        if (!e) return 0 == --this._eventsCount ? this._events = new i : delete this._events[o], this;
        var s = this._events[o];
        if (s.fn) s.fn !== e || n && !s.once || r && s.context !== r || (0 == --this._eventsCount ? this._events = new i : delete this._events[o]);
        else {
          for (var u = 0, h = [], l = s.length; u < l; u++)(s[u].fn !== e || n && !s[u].once || r && s[u].context !== r) && h.push(s[u]);
          h.length ? this._events[o] = 1 === h.length ? h[0] : h : 0 == --this._eventsCount ? this._events = new i : delete this._events[o]
        }
        return this
      }, o.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new i : delete this._events[e])) : (this._events = new i, this._eventsCount = 0), this
      }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
        return this
      }, o.prefixed = a, o.EventEmitter = o, void 0 !== e && (e.exports = o)
    }, {}],
    4: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function n(t, e) {
        return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
      }
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var o = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        s = function() {
          function t(e, r, n) {
            void 0 === r && (r = !1), i(this, t), this._fn = e, this._once = r, this._thisArg = n, this._next = this._prev = this._owner = null
          }
          return o(t, [{
            key: "detach",
            value: function() {
              return null !== this._owner && (this._owner.detach(this), !0)
            }
          }]), t
        }(),
        a = function() {
          function t() {
            i(this, t), this._head = this._tail = void 0
          }
          return o(t, [{
            key: "handlers",
            value: function() {
              var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                e = this._head;
              if (t) return !!e;
              for (var r = []; e;) r.push(e), e = e._next;
              return r
            }
          }, {
            key: "has",
            value: function(t) {
              if (!(t instanceof s)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
              return t._owner === this
            }
          }, {
            key: "dispatch",
            value: function() {
              var t = this._head;
              if (!t) return !1;
              for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
              return !0
            }
          }, {
            key: "add",
            value: function(t) {
              var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
              if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
              return n(this, new s(t, !1, e))
            }
          }, {
            key: "once",
            value: function(t) {
              var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
              if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
              return n(this, new s(t, !0, e))
            }
          }, {
            key: "detach",
            value: function(t) {
              if (!(t instanceof s)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
              return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this
            }
          }, {
            key: "detachAll",
            value: function() {
              var t = this._head;
              if (!t) return this;
              for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
              return this
            }
          }]), t
        }();
      a.MiniSignalBinding = s, r.default = a, e.exports = r.default
    }, {}],
    5: [function(t, e, r) {
      "use strict";
      var i = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      e.exports = function() {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
          for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
          if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
              return e[t]
            })).join("")) return !1;
          var i = {};
          return "abcdefghijklmnopqrst".split("").forEach((function(t) {
            i[t] = t
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (t) {
          return !1
        }
      }() ? Object.assign : function(t, e) {
        for (var r, s, a = function(t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
          }(t), u = 1; u < arguments.length; u++) {
          for (var h in r = Object(arguments[u])) n.call(r, h) && (a[h] = r[h]);
          if (i) {
            s = i(r);
            for (var l = 0; l < s.length; l++) o.call(r, s[l]) && (a[s[l]] = r[s[l]])
          }
        }
        return a
      }
    }, {}],
    6: [function(t, e, r) {
      "use strict";
      e.exports = function(t, e) {
        e = e || {};
        for (var r = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
              name: "queryKey",
              parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
          }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[r.key[o]] = i[o] || "";
        return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, (function(t, e, i) {
          e && (n[r.q.name][e] = i)
        })), n
      }
    }, {}],
    7: [function(t, e, r) {
      (function(t) {
        function e(t, e) {
          for (var r = 0, i = t.length - 1; i >= 0; i--) {
            var n = t[i];
            "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), r--)
          }
          if (e)
            for (; r--; r) t.unshift("..");
          return t
        }

        function i(t, e) {
          if (t.filter) return t.filter(e);
          for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]);
          return r
        }
        var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
          o = function(t) {
            return n.exec(t).slice(1)
          };
        r.resolve = function() {
          for (var r = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
            var s = o >= 0 ? arguments[o] : t.cwd();
            if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
            s && (r = s + "/" + r, n = "/" === s.charAt(0))
          }
          return r = e(i(r.split("/"), (function(t) {
            return !!t
          })), !n).join("/"), (n ? "/" : "") + r || "."
        }, r.normalize = function(t) {
          var n = r.isAbsolute(t),
            o = "/" === s(t, -1);
          return (t = e(i(t.split("/"), (function(t) {
            return !!t
          })), !n).join("/")) || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t
        }, r.isAbsolute = function(t) {
          return "/" === t.charAt(0)
        }, r.join = function() {
          var t = Array.prototype.slice.call(arguments, 0);
          return r.normalize(i(t, (function(t, e) {
            if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
            return t
          })).join("/"))
        }, r.relative = function(t, e) {
          function i(t) {
            for (var e = 0; e < t.length && "" === t[e]; e++);
            for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
            return e > r ? [] : t.slice(e, r - e + 1)
          }
          t = r.resolve(t).substr(1), e = r.resolve(e).substr(1);
          for (var n = i(t.split("/")), o = i(e.split("/")), s = Math.min(n.length, o.length), a = s, u = 0; u < s; u++)
            if (n[u] !== o[u]) {
              a = u;
              break
            } var h = [];
          for (u = a; u < n.length; u++) h.push("..");
          return (h = h.concat(o.slice(a))).join("/")
        }, r.sep = "/", r.delimiter = ":", r.dirname = function(t) {
          var e = o(t),
            r = e[0],
            i = e[1];
          return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
        }, r.basename = function(t, e) {
          var r = o(t)[2];
          return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
        }, r.extname = function(t) {
          return o(t)[3]
        };
        var s = "b" === "ab".substr(-1) ? function(t, e, r) {
          return t.substr(e, r)
        } : function(t, e, r) {
          return e < 0 && (e = t.length + e), t.substr(e, r)
        }
      }).call(this, t("_process"))
    }, {
      _process: 25
    }],
    8: [function(t, e, r) {
      var i = new ArrayBuffer(0),
        n = function(t, e, r, n) {
          this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = n || t.STATIC_DRAW, this.data = i, r && this.upload(r), this._updateID = 0
        };
      n.prototype.upload = function(t, e, r) {
        r || this.bind();
        var i = this.gl;
        t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? i.bufferSubData(this.type, e, t) : i.bufferData(this.type, t, this.drawType), this.data = t
      }, n.prototype.bind = function() {
        this.gl.bindBuffer(this.type, this.buffer)
      }, n.createVertexBuffer = function(t, e, r) {
        return new n(t, t.ARRAY_BUFFER, e, r)
      }, n.createIndexBuffer = function(t, e, r) {
        return new n(t, t.ELEMENT_ARRAY_BUFFER, e, r)
      }, n.create = function(t, e, r, i) {
        return new n(t, e, r, i)
      }, n.prototype.destroy = function() {
        this.gl.deleteBuffer(this.buffer)
      }, e.exports = n
    }, {}],
    9: [function(t, e, r) {
      var i = t("./GLTexture"),
        n = function(t, e, r) {
          this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = r || 100
        };
      n.prototype.enableTexture = function(t) {
        var e = this.gl;
        this.texture = t || new i(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
      }, n.prototype.enableStencil = function() {
        if (!this.stencil) {
          var t = this.gl;
          this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
        }
      }, n.prototype.clear = function(t, e, r, i) {
        this.bind();
        var n = this.gl;
        n.clearColor(t, e, r, i), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
      }, n.prototype.bind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
      }, n.prototype.unbind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, null)
      }, n.prototype.resize = function(t, e) {
        var r = this.gl;
        this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e))
      }, n.prototype.destroy = function() {
        var t = this.gl;
        this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
      }, n.createRGBA = function(t, e, r, o) {
        var s = i.fromData(t, null, e, r);
        s.enableNearestScaling(), s.enableWrapClamp();
        var a = new n(t, e, r);
        return a.enableTexture(s), a.unbind(), a
      }, n.createFloat32 = function(t, e, r, o) {
        var s = new i.fromData(t, o, e, r);
        s.enableNearestScaling(), s.enableWrapClamp();
        var a = new n(t, e, r);
        return a.enableTexture(s), a.unbind(), a
      }, e.exports = n
    }, {
      "./GLTexture": 11
    }],
    10: [function(t, e, r) {
      var i = t("./shader/compileProgram"),
        n = t("./shader/extractAttributes"),
        o = t("./shader/extractUniforms"),
        s = t("./shader/setPrecision"),
        a = t("./shader/generateUniformAccessObject"),
        u = function(t, e, r, u, h) {
          this.gl = t, u && (e = s(e, u), r = s(r, u)), this.program = i(t, e, r, h), this.attributes = n(t, this.program), this.uniformData = o(t, this.program), this.uniforms = a(t, this.uniformData)
        };
      u.prototype.bind = function() {
        return this.gl.useProgram(this.program), this
      }, u.prototype.destroy = function() {
        this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program)
      }, e.exports = u
    }, {
      "./shader/compileProgram": 16,
      "./shader/extractAttributes": 18,
      "./shader/extractUniforms": 19,
      "./shader/generateUniformAccessObject": 20,
      "./shader/setPrecision": 24
    }],
    11: [function(t, e, r) {
      var i = function(t, e, r, i, n) {
        this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || -1, this.height = r || -1, this.format = i || t.RGBA, this.type = n || t.UNSIGNED_BYTE
      };
      i.prototype.upload = function(t) {
        this.bind();
        var e = this.gl;
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        var r = t.videoWidth || t.width,
          i = t.videoHeight || t.height;
        i !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t), this.width = r, this.height = i
      };
      var n = !1;
      i.prototype.uploadData = function(t, e, r) {
        this.bind();
        var i = this.gl;
        if (t instanceof Float32Array) {
          if (!n) {
            if (!i.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
            n = !0
          }
          this.type = i.FLOAT
        } else this.type = this.type || i.UNSIGNED_BYTE;
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || r !== this.height ? i.texImage2D(i.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t || null) : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t || null), this.width = e, this.height = r
      }, i.prototype.bind = function(t) {
        var e = this.gl;
        void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
      }, i.prototype.unbind = function() {
        var t = this.gl;
        t.bindTexture(t.TEXTURE_2D, null)
      }, i.prototype.minFilter = function(t) {
        var e = this.gl;
        this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
      }, i.prototype.magFilter = function(t) {
        var e = this.gl;
        this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
      }, i.prototype.enableMipmap = function() {
        var t = this.gl;
        this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
      }, i.prototype.enableLinearScaling = function() {
        this.minFilter(!0), this.magFilter(!0)
      }, i.prototype.enableNearestScaling = function() {
        this.minFilter(!1), this.magFilter(!1)
      }, i.prototype.enableWrapClamp = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
      }, i.prototype.enableWrapRepeat = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
      }, i.prototype.enableWrapMirrorRepeat = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
      }, i.prototype.destroy = function() {
        this.gl.deleteTexture(this.texture)
      }, i.fromSource = function(t, e, r) {
        var n = new i(t);
        return n.premultiplyAlpha = r || !1, n.upload(e), n
      }, i.fromData = function(t, e, r, n) {
        var o = new i(t);
        return o.uploadData(e, r, n), o
      }, e.exports = i
    }, {}],
    12: [function(t, e, r) {
      function i(t, e) {
        if (this.nativeVaoExtension = null, i.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
          this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
          var r = t.getParameter(t.MAX_VERTEX_ATTRIBS);
          this.nativeState = {
            tempAttribState: new Array(r),
            attribState: new Array(r)
          }
        }
        this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
      }
      var n = t("./setVertexAttribArrays");
      i.prototype.constructor = i, e.exports = i, i.FORCE_NATIVE = !1, i.prototype.bind = function() {
        if (this.nativeVao) {
          if (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty) return this.dirty = !1, this.activate(), this;
          this.indexBuffer && this.indexBuffer.bind()
        } else this.activate();
        return this
      }, i.prototype.unbind = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
      }, i.prototype.activate = function() {
        for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
          var i = this.attributes[r];
          e !== i.buffer && (i.buffer.bind(), e = i.buffer), t.vertexAttribPointer(i.attribute.location, i.attribute.size, i.type || t.FLOAT, i.normalized || !1, i.stride || 0, i.start || 0)
        }
        return n(t, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this
      }, i.prototype.addAttribute = function(t, e, r, i, n, o) {
        return e ? (this.attributes.push({
          buffer: t,
          attribute: e,
          location: e.location,
          type: r || this.gl.FLOAT,
          normalized: i || !1,
          stride: n || 0,
          start: o || 0
        }), this.dirty = !0, this) : this
      }, i.prototype.addIndex = function(t) {
        return this.indexBuffer = t, this.dirty = !0, this
      }, i.prototype.clear = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
      }, i.prototype.draw = function(t, e, r) {
        var i = this.gl;
        return this.indexBuffer ? i.drawElements(t, e || this.indexBuffer.data.length, i.UNSIGNED_SHORT, 2 * (r || 0)) : i.drawArrays(t, r, e || this.getSize()), this
      }, i.prototype.destroy = function() {
        this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
      }, i.prototype.getSize = function() {
        var t = this.attributes[0];
        return t.buffer.data.length / (t.stride / 4 || t.attribute.size)
      }
    }, {
      "./setVertexAttribArrays": 15
    }],
    13: [function(t, e, r) {
      e.exports = function(t, e) {
        var r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
        if (!r) throw new Error("This browser does not support webGL. Try using the canvas renderer");
        return r
      }
    }, {}],
    14: [function(t, e, r) {
      var i = {
        createContext: t("./createContext"),
        setVertexAttribArrays: t("./setVertexAttribArrays"),
        GLBuffer: t("./GLBuffer"),
        GLFramebuffer: t("./GLFramebuffer"),
        GLShader: t("./GLShader"),
        GLTexture: t("./GLTexture"),
        VertexArrayObject: t("./VertexArrayObject"),
        shader: t("./shader")
      };
      void 0 !== e && e.exports && (e.exports = i), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = i)
    }, {
      "./GLBuffer": 8,
      "./GLFramebuffer": 9,
      "./GLShader": 10,
      "./GLTexture": 11,
      "./VertexArrayObject": 12,
      "./createContext": 13,
      "./setVertexAttribArrays": 15,
      "./shader": 21
    }],
    15: [function(t, e, r) {
      e.exports = function(t, e, r) {
        var i;
        if (r) {
          var n = r.tempAttribState,
            o = r.attribState;
          for (i = 0; i < n.length; i++) n[i] = !1;
          for (i = 0; i < e.length; i++) n[e[i].attribute.location] = !0;
          for (i = 0; i < o.length; i++) o[i] !== n[i] && (o[i] = n[i], r.attribState[i] ? t.enableVertexAttribArray(i) : t.disableVertexAttribArray(i))
        } else
          for (i = 0; i < e.length; i++) {
            var s = e[i];
            t.enableVertexAttribArray(s.attribute.location)
          }
      }
    }, {}],
    16: [function(t, e, r) {
      var i = function(t, e, r) {
        var i = t.createShader(e);
        return t.shaderSource(i, r), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) ? i : (console.log(t.getShaderInfoLog(i)), null)
      };
      e.exports = function(t, e, r, n) {
        var o = i(t, t.VERTEX_SHADER, e),
          s = i(t, t.FRAGMENT_SHADER, r),
          a = t.createProgram();
        if (t.attachShader(a, o), t.attachShader(a, s), n)
          for (var u in n) t.bindAttribLocation(a, n[u], u);
        return t.linkProgram(a), t.getProgramParameter(a, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(a, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(a) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(a)), t.deleteProgram(a), a = null), t.deleteShader(o), t.deleteShader(s), a
      }
    }, {}],
    17: [function(t, e, r) {
      var i = function(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
        return e
      };
      e.exports = function(t, e) {
        switch (t) {
          case "float":
          case "int":
          case "sampler2D":
            return 0;
          case "vec2":
            return new Float32Array(2 * e);
          case "vec3":
            return new Float32Array(3 * e);
          case "vec4":
            return new Float32Array(4 * e);
          case "ivec2":
            return new Int32Array(2 * e);
          case "ivec3":
            return new Int32Array(3 * e);
          case "ivec4":
            return new Int32Array(4 * e);
          case "bool":
            return !1;
          case "bvec2":
            return i(2 * e);
          case "bvec3":
            return i(3 * e);
          case "bvec4":
            return i(4 * e);
          case "mat2":
            return new Float32Array([1, 0, 0, 1]);
          case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          case "mat4":
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
      }
    }, {}],
    18: [function(t, e, r) {
      var i = t("./mapType"),
        n = t("./mapSize"),
        o = function(t, e, r, i) {
          gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, r || 0, i || 0)
        };
      e.exports = function(t, e) {
        for (var r = {}, s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < s; a++) {
          var u = t.getActiveAttrib(e, a),
            h = i(t, u.type);
          r[u.name] = {
            type: h,
            size: n(h),
            location: t.getAttribLocation(e, u.name),
            pointer: o
          }
        }
        return r
      }
    }, {
      "./mapSize": 22,
      "./mapType": 23
    }],
    19: [function(t, e, r) {
      var i = t("./mapType"),
        n = t("./defaultValue");
      e.exports = function(t, e) {
        for (var r = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
          var a = t.getActiveUniform(e, s),
            u = a.name.replace(/\[.*?\]/, ""),
            h = i(t, a.type);
          r[u] = {
            type: h,
            size: a.size,
            location: t.getUniformLocation(e, u),
            value: n(h, a.size)
          }
        }
        return r
      }
    }, {
      "./defaultValue": 17,
      "./mapType": 23
    }],
    20: [function(t, e, r) {
      function i(t, e) {
        return function(r) {
          this.data[t].value = r;
          var i = this.data[t].location;
          1 === e.size ? s[e.type](this.gl, i, r) : a[e.type](this.gl, i, r)
        }
      }

      function n(t, e) {
        for (var r = e, i = 0; i < t.length - 1; i++) {
          var n = r[t[i]] || {
            data: {}
          };
          r[t[i]] = n, r = n
        }
        return r
      }
      var o = function(t) {
          return function() {
            return this.data[t].value
          }
        },
        s = {
          float: function(t, e, r) {
            t.uniform1f(e, r)
          },
          vec2: function(t, e, r) {
            t.uniform2f(e, r[0], r[1])
          },
          vec3: function(t, e, r) {
            t.uniform3f(e, r[0], r[1], r[2])
          },
          vec4: function(t, e, r) {
            t.uniform4f(e, r[0], r[1], r[2], r[3])
          },
          int: function(t, e, r) {
            t.uniform1i(e, r)
          },
          ivec2: function(t, e, r) {
            t.uniform2i(e, r[0], r[1])
          },
          ivec3: function(t, e, r) {
            t.uniform3i(e, r[0], r[1], r[2])
          },
          ivec4: function(t, e, r) {
            t.uniform4i(e, r[0], r[1], r[2], r[3])
          },
          bool: function(t, e, r) {
            t.uniform1i(e, r)
          },
          bvec2: function(t, e, r) {
            t.uniform2i(e, r[0], r[1])
          },
          bvec3: function(t, e, r) {
            t.uniform3i(e, r[0], r[1], r[2])
          },
          bvec4: function(t, e, r) {
            t.uniform4i(e, r[0], r[1], r[2], r[3])
          },
          mat2: function(t, e, r) {
            t.uniformMatrix2fv(e, !1, r)
          },
          mat3: function(t, e, r) {
            t.uniformMatrix3fv(e, !1, r)
          },
          mat4: function(t, e, r) {
            t.uniformMatrix4fv(e, !1, r)
          },
          sampler2D: function(t, e, r) {
            t.uniform1i(e, r)
          }
        },
        a = {
          float: function(t, e, r) {
            t.uniform1fv(e, r)
          },
          vec2: function(t, e, r) {
            t.uniform2fv(e, r)
          },
          vec3: function(t, e, r) {
            t.uniform3fv(e, r)
          },
          vec4: function(t, e, r) {
            t.uniform4fv(e, r)
          },
          int: function(t, e, r) {
            t.uniform1iv(e, r)
          },
          ivec2: function(t, e, r) {
            t.uniform2iv(e, r)
          },
          ivec3: function(t, e, r) {
            t.uniform3iv(e, r)
          },
          ivec4: function(t, e, r) {
            t.uniform4iv(e, r)
          },
          bool: function(t, e, r) {
            t.uniform1iv(e, r)
          },
          bvec2: function(t, e, r) {
            t.uniform2iv(e, r)
          },
          bvec3: function(t, e, r) {
            t.uniform3iv(e, r)
          },
          bvec4: function(t, e, r) {
            t.uniform4iv(e, r)
          },
          sampler2D: function(t, e, r) {
            t.uniform1iv(e, r)
          }
        };
      e.exports = function(t, e) {
        var r = {
          data: {}
        };
        r.gl = t;
        for (var s = Object.keys(e), a = 0; a < s.length; a++) {
          var u = s[a],
            h = u.split("."),
            l = h[h.length - 1],
            c = n(h, r),
            f = e[u];
          c.data[l] = f, c.gl = t, Object.defineProperty(c, l, {
            get: o(l),
            set: i(l, f)
          })
        }
        return r
      }
    }, {}],
    21: [function(t, e, r) {
      e.exports = {
        compileProgram: t("./compileProgram"),
        defaultValue: t("./defaultValue"),
        extractAttributes: t("./extractAttributes"),
        extractUniforms: t("./extractUniforms"),
        generateUniformAccessObject: t("./generateUniformAccessObject"),
        setPrecision: t("./setPrecision"),
        mapSize: t("./mapSize"),
        mapType: t("./mapType")
      }
    }, {
      "./compileProgram": 16,
      "./defaultValue": 17,
      "./extractAttributes": 18,
      "./extractUniforms": 19,
      "./generateUniformAccessObject": 20,
      "./mapSize": 22,
      "./mapType": 23,
      "./setPrecision": 24
    }],
    22: [function(t, e, r) {
      var i = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
      };
      e.exports = function(t) {
        return i[t]
      }
    }, {}],
    23: [function(t, e, r) {
      var i = null,
        n = {
          FLOAT: "float",
          FLOAT_VEC2: "vec2",
          FLOAT_VEC3: "vec3",
          FLOAT_VEC4: "vec4",
          INT: "int",
          INT_VEC2: "ivec2",
          INT_VEC3: "ivec3",
          INT_VEC4: "ivec4",
          BOOL: "bool",
          BOOL_VEC2: "bvec2",
          BOOL_VEC3: "bvec3",
          BOOL_VEC4: "bvec4",
          FLOAT_MAT2: "mat2",
          FLOAT_MAT3: "mat3",
          FLOAT_MAT4: "mat4",
          SAMPLER_2D: "sampler2D"
        };
      e.exports = function(t, e) {
        if (!i) {
          var r = Object.keys(n);
          i = {};
          for (var o = 0; o < r.length; ++o) {
            var s = r[o];
            i[t[s]] = n[s]
          }
        }
        return i[e]
      }
    }, {}],
    24: [function(t, e, r) {
      e.exports = function(t, e) {
        return "precision" !== t.substring(0, 9) ? "precision " + e + " float;\n" + t : t
      }
    }, {}],
    25: [function(t, e, r) {
      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === i || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
          return l(t, 0)
        } catch (e) {
          try {
            return l.call(null, t, 0)
          } catch (e) {
            return l.call(this, t, 0)
          }
        }
      }

      function s() {
        y && d && (y = !1, d.length ? p = d.concat(p) : v = -1, p.length && a())
      }

      function a() {
        if (!y) {
          var t = o(s);
          y = !0;
          for (var e = p.length; e;) {
            for (d = p, p = []; ++v < e;) d && d[v].run();
            v = -1, e = p.length
          }
          d = null, y = !1,
            function(t) {
              if (c === clearTimeout) return clearTimeout(t);
              if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
              try {
                return c(t)
              } catch (e) {
                try {
                  return c.call(null, t)
                } catch (e) {
                  return c.call(this, t)
                }
              }
            }(t)
        }
      }

      function u(t, e) {
        this.fun = t, this.array = e
      }

      function h() {}
      var l, c, f = e.exports = {};
      ! function() {
        try {
          l = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          l = i
        }
        try {
          c = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
          c = n
        }
      }();
      var d, p = [],
        y = !1,
        v = -1;
      f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        p.push(new u(t, e)), 1 !== p.length || y || o(a)
      }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = h, f.addListener = h, f.once = h, f.off = h, f.removeListener = h, f.removeAllListeners = h, f.emit = h, f.prependListener = h, f.prependOnceListener = h, f.listeners = function(t) {
        return []
      }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, f.cwd = function() {
        return "/"
      }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, f.umask = function() {
        return 0
      }
    }, {}],
    26: [function(t, e, r) {
      (function(t) {
        ! function(i) {
          function n(t) {
            throw new RangeError(R[t])
          }

          function o(t, e) {
            for (var r = t.length, i = []; r--;) i[r] = e(t[r]);
            return i
          }

          function s(t, e) {
            var r = t.split("@"),
              i = "";
            return r.length > 1 && (i = r[0] + "@", t = r[1]), i + o((t = t.replace(A, ".")).split("."), e).join(".")
          }

          function a(t) {
            for (var e, r, i = [], n = 0, o = t.length; n < o;)(e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--) : i.push(e);
            return i
          }

          function u(t) {
            return o(t, (function(t) {
              var e = "";
              return t > 65535 && (e += L((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + L(t)
            })).join("")
          }

          function h(t) {
            return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : x
          }

          function l(t, e) {
            return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
          }

          function c(t, e, r) {
            var i = 0;
            for (t = r ? I(t / E) : t >> 1, t += I(t / e); t > D * T >> 1; i += x) t = I(t / D);
            return I(i + (D + 1) * t / (t + w))
          }

          function f(t) {
            var e, r, i, o, s, a, l, f, d, p, y = [],
              v = t.length,
              g = 0,
              _ = S,
              w = O;
            for ((r = t.lastIndexOf(M)) < 0 && (r = 0), i = 0; i < r; ++i) t.charCodeAt(i) >= 128 && n("not-basic"), y.push(t.charCodeAt(i));
            for (o = r > 0 ? r + 1 : 0; o < v;) {
              for (s = g, a = 1, l = x; o >= v && n("invalid-input"), ((f = h(t.charCodeAt(o++))) >= x || f > I((m - g) / a)) && n("overflow"), g += f * a, !(f < (d = l <= w ? b : l >= w + T ? T : l - w)); l += x) a > I(m / (p = x - d)) && n("overflow"), a *= p;
              w = c(g - s, e = y.length + 1, 0 == s), I(g / e) > m - _ && n("overflow"), _ += I(g / e), g %= e, y.splice(g++, 0, _)
            }
            return u(y)
          }

          function d(t) {
            var e, r, i, o, s, u, h, f, d, p, y, v, g, _, w, E = [];
            for (v = (t = a(t)).length, e = S, r = 0, s = O, u = 0; u < v; ++u)(y = t[u]) < 128 && E.push(L(y));
            for (i = o = E.length, o && E.push(M); i < v;) {
              for (h = m, u = 0; u < v; ++u)(y = t[u]) >= e && y < h && (h = y);
              for (h - e > I((m - r) / (g = i + 1)) && n("overflow"), r += (h - e) * g, e = h, u = 0; u < v; ++u)
                if ((y = t[u]) < e && ++r > m && n("overflow"), y == e) {
                  for (f = r, d = x; !(f < (p = d <= s ? b : d >= s + T ? T : d - s)); d += x) w = f - p, _ = x - p, E.push(L(l(p + w % _, 0))), f = I(w / _);
                  E.push(L(l(f, 0))), s = c(r, g, i == o), r = 0, ++i
                }++ r, ++e
            }
            return E.join("")
          }
          var p = "object" == typeof r && r && !r.nodeType && r,
            y = "object" == typeof e && e && !e.nodeType && e,
            v = "object" == typeof t && t;
          v.global !== v && v.window !== v && v.self !== v || (i = v);
          var g, _, m = 2147483647,
            x = 36,
            b = 1,
            T = 26,
            w = 38,
            E = 700,
            O = 72,
            S = 128,
            M = "-",
            P = /^xn--/,
            C = /[^\x20-\x7E]/,
            A = /[\x2E\u3002\uFF0E\uFF61]/g,
            R = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input"
            },
            D = x - b,
            I = Math.floor,
            L = String.fromCharCode;
          if (g = {
              version: "1.4.1",
              ucs2: {
                decode: a,
                encode: u
              },
              decode: f,
              encode: d,
              toASCII: function(t) {
                return s(t, (function(t) {
                  return C.test(t) ? "xn--" + d(t) : t
                }))
              },
              toUnicode: function(t) {
                return s(t, (function(t) {
                  return P.test(t) ? f(t.slice(4).toLowerCase()) : t
                }))
              }
            }, p && y)
            if (e.exports == p) y.exports = g;
            else
              for (_ in g) g.hasOwnProperty(_) && (p[_] = g[_]);
          else i.punycode = g
        }(this)
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    27: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      e.exports = function(t, e, r, o) {
        e = e || "&", r = r || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length) return s;
        var a = /\+/g;
        t = t.split(e);
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var h = t.length;
        u > 0 && h > u && (h = u);
        for (var l = 0; l < h; ++l) {
          var c, f, d, p, y = t[l].replace(a, "%20"),
            v = y.indexOf(r);
          v >= 0 ? (c = y.substr(0, v), f = y.substr(v + 1)) : (c = y, f = ""), d = decodeURIComponent(c), p = decodeURIComponent(f), i(s, d) ? n(s[d]) ? s[d].push(p) : s[d] = [s[d], p] : s[d] = p
        }
        return s
      };
      var n = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
      }
    }, {}],
    28: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        if (t.map) return t.map(e);
        for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i));
        return r
      }
      var n = function(t) {
        switch (typeof t) {
          case "string":
            return t;
          case "boolean":
            return t ? "true" : "false";
          case "number":
            return isFinite(t) ? t : "";
          default:
            return ""
        }
      };
      e.exports = function(t, e, r, a) {
        return e = e || "&", r = r || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), (function(s) {
          var a = encodeURIComponent(n(s)) + r;
          return o(t[s]) ? i(t[s], (function(t) {
            return a + encodeURIComponent(n(t))
          })).join(e) : a + encodeURIComponent(n(t[s]))
        })).join(e) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t)) : ""
      };
      var o = Array.isArray || function(t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        },
        s = Object.keys || function(t) {
          var e = [];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
          return e
        }
    }, {}],
    29: [function(t, e, r) {
      "use strict";
      r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode")
    }, {
      "./decode": 27,
      "./encode": 28
    }],
    30: [function(t, e, r) {
      "use strict";
      e.exports = function(t, e, r) {
        var i, n = t.length;
        if (!(e >= n || r <= 0 || e < 0)) {
          var o = n - (r = e + r > n ? n - e : r);
          for (i = e; i < o; ++i) t[i] = t[i + r];
          t.length = o
        }
      }
    }, {}],
    31: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        s = i(t("mini-signals")),
        a = i(t("parse-uri")),
        u = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("./async")),
        h = i(t("./Resource")),
        l = /(#[\w-]+)?$/,
        c = function() {
          function t() {
            var e = this,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.baseUrl = r, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, r) {
              return e._loadResource(t, r)
            }, this._queue = u.queue(this._boundLoadResource, i), this._queue.pause(), this.resources = {}, this.onProgress = new s.default, this.onError = new s.default, this.onLoad = new s.default, this.onStart = new s.default, this.onComplete = new s.default
          }
          return t.prototype.add = function(t, e, r, i) {
            if (Array.isArray(t)) {
              for (var o = 0; o < t.length; ++o) this.add(t[o]);
              return this
            }
            if ("object" === (void 0 === t ? "undefined" : n(t)) && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
            if ("function" == typeof r && (i = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
            if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
            if (e = this._prepareUrl(e), this.resources[t] = new h.default(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
              for (var s = r.parentResource, a = [], u = 0; u < s.children.length; ++u) s.children[u].isComplete || a.push(s.children[u]);
              var l = s.progressChunk * (a.length + 1) / (a.length + 2);
              s.children.push(this.resources[t]), s.progressChunk = l;
              for (var c = 0; c < a.length; ++c) a[c].progressChunk = l;
              this.resources[t].progressChunk = l
            }
            return this._queue.push(this.resources[t]), this
          }, t.prototype.pre = function(t) {
            return this._beforeMiddleware.push(t), this
          }, t.prototype.use = function(t) {
            return this._afterMiddleware.push(t), this
          }, t.prototype.reset = function() {
            for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
              var e = this.resources[t];
              e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
            }
            return this.resources = {}, this
          }, t.prototype.load = function(t) {
            if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
            if (this._queue.idle()) this._onStart(), this._onComplete();
            else {
              for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
              this._onStart(), this._queue.resume()
            }
            return this
          }, t.prototype._prepareUrl = function(t) {
            var e = (0, a.default)(t, {
                strictMode: !0
              }),
              r = void 0;
            if (r = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
              var i = l.exec(r)[0]; - 1 !== (r = r.substr(0, r.length - i.length)).indexOf("?") ? r += "&" + this.defaultQueryString : r += "?" + this.defaultQueryString, r += i
            }
            return r
          }, t.prototype._loadResource = function(t, e) {
            var r = this;
            t._dequeue = e, u.eachSeries(this._beforeMiddleware, (function(e, i) {
              e.call(r, t, (function() {
                i(t.isComplete ? {} : null)
              }))
            }), (function() {
              t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load())
            }), !0)
          }, t.prototype._onStart = function() {
            this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
          }, t.prototype._onComplete = function() {
            this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
          }, t.prototype._onLoad = function(t) {
            var e = this;
            t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), u.eachSeries(this._afterMiddleware, (function(r, i) {
              r.call(e, t, i)
            }), (function() {
              t.onAfterMiddleware.dispatch(t), e.progress += t.progressChunk, e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
            }), !0)
          }, o(t, [{
            key: "concurrency",
            get: function() {
              return this._queue.concurrency
            },
            set: function(t) {
              this._queue.concurrency = t
            }
          }]), t
        }();
      r.default = c
    }, {
      "./Resource": 32,
      "./async": 33,
      "mini-signals": 4,
      "parse-uri": 6
    }],
    32: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function n() {}

      function o(t, e, r) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
      }

      function s(t) {
        return t.toString().replace("object ", "")
      }
      r.__esModule = !0;
      var a = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        u = i(t("parse-uri")),
        h = i(t("mini-signals")),
        l = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
        c = null,
        f = function() {
          function t(e, r, i) {
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
            i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = n, this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new h.default, this.onProgress = new h.default, this.onComplete = new h.default, this.onAfterMiddleware = new h.default
          }
          return t.setExtensionLoadType = function(e, r) {
            o(t._loadTypeMap, e, r)
          }, t.setExtensionXhrType = function(e, r) {
            o(t._xhrTypeMap, e, r)
          }, t.prototype.complete = function() {
            if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
          }, t.prototype.abort = function(e) {
            if (!this.error) {
              if (this.error = new Error(e), this.xhr) this.xhr.abort();
              else if (this.xdr) this.xdr.abort();
              else if (this.data)
                if (this.data.src) this.data.src = t.EMPTY_GIF;
                else
                  for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
              this.complete()
            }
          }, t.prototype.load = function(e) {
            var r = this;
            if (!this.isLoading) {
              if (this.isComplete) return void(e && setTimeout((function() {
                return e(r)
              }), 1));
              switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                case t.LOAD_TYPE.IMAGE:
                  this.type = t.TYPE.IMAGE, this._loadElement("image");
                  break;
                case t.LOAD_TYPE.AUDIO:
                  this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                  break;
                case t.LOAD_TYPE.VIDEO:
                  this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                  break;
                case t.LOAD_TYPE.XHR:
                default:
                  l && this.crossOrigin ? this._loadXdr() : this._loadXhr()
              }
            }
          }, t.prototype._hasFlag = function(t) {
            return !!(this._flags & t)
          }, t.prototype._setFlag = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
          }, t.prototype._loadElement = function(t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
          }, t.prototype._loadSourceElement = function(t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
              if (!this.metadata.skipSource)
                if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                else if (Array.isArray(this.url))
                for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
              else {
                var i = this.metadata.mimeType;
                this.data.appendChild(this._createSource(t, this.url, Array.isArray(i) ? i[0] : i))
              }
              this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
            } else this.abort("Unsupported element: " + t)
          }, t.prototype._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest;
            e.open("GET", this.url, !0), this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
          }, t.prototype._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new XDomainRequest;
            t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout((function() {
              return t.send()
            }), 1)
          }, t.prototype._createSource = function(t, e, r) {
            r || (r = t + "/" + this._getExtension(e));
            var i = document.createElement("source");
            return i.src = e, i.type = r, i
          }, t.prototype._onError = function(t) {
            this.abort("Failed to load element using: " + t.target.nodeName)
          }, t.prototype._onProgress = function(t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
          }, t.prototype._xhrOnError = function() {
            var t = this.xhr;
            this.abort(s(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
          }, t.prototype._xhrOnAbort = function() {
            this.abort(s(this.xhr) + " Request was aborted by the user.")
          }, t.prototype._xdrOnTimeout = function() {
            this.abort(s(this.xhr) + " Request timed out.")
          }, t.prototype._xhrOnLoad = function() {
            var e = this.xhr,
              r = "",
              i = void 0 === e.status ? 200 : e.status;
            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 == (i / 100 | 0)) {
              if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT;
              else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                this.data = JSON.parse(r), this.type = t.TYPE.JSON
              } catch (t) {
                return void this.abort("Error trying to parse loaded json: " + t)
              } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                if (window.DOMParser) {
                  var n = new DOMParser;
                  this.data = n.parseFromString(r, "text/xml")
                } else {
                  var o = document.createElement("div");
                  o.innerHTML = r, this.data = o
                }
                this.type = t.TYPE.XML
              } catch (t) {
                return void this.abort("Error trying to parse loaded xml: " + t)
              } else this.data = e.response || r;
              this.complete()
            } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
          }, t.prototype._determineCrossOrigin = function(t, e) {
            if (0 === t.indexOf("data:")) return "";
            e = e || window.location, c || (c = document.createElement("a")), c.href = t;
            var r = !(t = (0, u.default)(c.href, {
                strictMode: !0
              })).port && "" === e.port || t.port === e.port,
              i = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && r && i === e.protocol ? "" : "anonymous"
          }, t.prototype._determineXhrType = function() {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
          }, t.prototype._determineLoadType = function() {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
          }, t.prototype._getExtension = function() {
            var t = this.url,
              e = "";
            if (this.isDataUrl) {
              var r = t.indexOf("/");
              e = t.substring(r + 1, t.indexOf(";", r))
            } else {
              var i = t.indexOf("?"),
                n = t.indexOf("#"),
                o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
              e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
            }
            return e.toLowerCase()
          }, t.prototype._getMimeFromXhrType = function(e) {
            switch (e) {
              case t.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
              case t.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
              case t.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
              case t.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
              case t.XHR_RESPONSE_TYPE.DEFAULT:
              case t.XHR_RESPONSE_TYPE.TEXT:
              default:
                return "text/plain"
            }
          }, a(t, [{
            key: "isDataUrl",
            get: function() {
              return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
            }
          }, {
            key: "isComplete",
            get: function() {
              return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
            }
          }, {
            key: "isLoading",
            get: function() {
              return this._hasFlag(t.STATUS_FLAGS.LOADING)
            }
          }]), t
        }();
      r.default = f, f.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
      }, f.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
      }, f.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
      }, f.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
      }, f._loadTypeMap = {
        gif: f.LOAD_TYPE.IMAGE,
        png: f.LOAD_TYPE.IMAGE,
        bmp: f.LOAD_TYPE.IMAGE,
        jpg: f.LOAD_TYPE.IMAGE,
        jpeg: f.LOAD_TYPE.IMAGE,
        tif: f.LOAD_TYPE.IMAGE,
        tiff: f.LOAD_TYPE.IMAGE,
        webp: f.LOAD_TYPE.IMAGE,
        tga: f.LOAD_TYPE.IMAGE,
        svg: f.LOAD_TYPE.IMAGE,
        "svg+xml": f.LOAD_TYPE.IMAGE,
        mp3: f.LOAD_TYPE.AUDIO,
        ogg: f.LOAD_TYPE.AUDIO,
        wav: f.LOAD_TYPE.AUDIO,
        mp4: f.LOAD_TYPE.VIDEO,
        webm: f.LOAD_TYPE.VIDEO
      }, f._xhrTypeMap = {
        xhtml: f.XHR_RESPONSE_TYPE.DOCUMENT,
        html: f.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: f.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: f.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: f.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: f.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: f.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: f.XHR_RESPONSE_TYPE.BLOB,
        png: f.XHR_RESPONSE_TYPE.BLOB,
        bmp: f.XHR_RESPONSE_TYPE.BLOB,
        jpg: f.XHR_RESPONSE_TYPE.BLOB,
        jpeg: f.XHR_RESPONSE_TYPE.BLOB,
        tif: f.XHR_RESPONSE_TYPE.BLOB,
        tiff: f.XHR_RESPONSE_TYPE.BLOB,
        webp: f.XHR_RESPONSE_TYPE.BLOB,
        tga: f.XHR_RESPONSE_TYPE.BLOB,
        json: f.XHR_RESPONSE_TYPE.JSON,
        text: f.XHR_RESPONSE_TYPE.TEXT,
        txt: f.XHR_RESPONSE_TYPE.TEXT,
        ttf: f.XHR_RESPONSE_TYPE.BUFFER,
        otf: f.XHR_RESPONSE_TYPE.BUFFER
      }, f.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    }, {
      "mini-signals": 4,
      "parse-uri": 6
    }],
    33: [function(t, e, r) {
      "use strict";

      function i() {}

      function n(t) {
        return function() {
          if (null === t) throw new Error("Callback was already called.");
          var e = t;
          t = null, e.apply(this, arguments)
        }
      }
      r.__esModule = !0, r.eachSeries = function(t, e, r, i) {
        var n = 0,
          o = t.length;
        ! function s(a) {
          a || n === o ? r && r(a) : i ? setTimeout((function() {
            e(t[n++], s)
          }), 1) : e(t[n++], s)
        }()
      }, r.queue = function(t, e) {
        function r(t, e, r) {
          if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
          if (a.started = !0, null == t && a.idle()) setTimeout((function() {
            return a.drain()
          }), 1);
          else {
            var n = {
              data: t,
              callback: "function" == typeof r ? r : i
            };
            e ? a._tasks.unshift(n) : a._tasks.push(n), setTimeout((function() {
              return a.process()
            }), 1)
          }
        }

        function o(t) {
          return function() {
            s -= 1, t.callback.apply(t, arguments), null != arguments[0] && a.error(arguments[0], t.data), s <= a.concurrency - a.buffer && a.unsaturated(), a.idle() && a.drain(), a.process()
          }
        }
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var s = 0,
          a = {
            _tasks: [],
            concurrency: e,
            saturated: i,
            unsaturated: i,
            buffer: e / 4,
            empty: i,
            drain: i,
            error: i,
            started: !1,
            paused: !1,
            push: function(t, e) {
              r(t, !1, e)
            },
            kill: function() {
              s = 0, a.drain = i, a.started = !1, a._tasks = []
            },
            unshift: function(t, e) {
              r(t, !0, e)
            },
            process: function() {
              for (; !a.paused && s < a.concurrency && a._tasks.length;) {
                var e = a._tasks.shift();
                0 === a._tasks.length && a.empty(), (s += 1) === a.concurrency && a.saturated(), t(e.data, n(o(e)))
              }
            },
            length: function() {
              return a._tasks.length
            },
            running: function() {
              return s
            },
            idle: function() {
              return a._tasks.length + s === 0
            },
            pause: function() {
              !0 !== a.paused && (a.paused = !0)
            },
            resume: function() {
              if (!1 !== a.paused) {
                a.paused = !1;
                for (var t = 1; t <= a.concurrency; t++) a.process()
              }
            }
          };
        return a
      }
    }, {}],
    34: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.encodeBinary = function(t) {
        for (var e = "", r = 0; r < t.length;) {
          for (var n = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < n.length; ++s) r < t.length ? n[s] = 255 & t.charCodeAt(r++) : n[s] = 0;
          switch (o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2], r - (t.length - 1)) {
            case 2:
              o[3] = 64, o[2] = 64;
              break;
            case 1:
              o[3] = 64
          }
          for (var a = 0; a < o.length; ++a) e += i.charAt(o[a])
        }
        return e
      };
      var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, {}],
    35: [function(t, e, r) {
      "use strict";
      var i = t("./Loader").default,
        n = t("./Resource").default,
        o = t("./async"),
        s = t("./b64");
      i.Resource = n, i.async = o, i.base64 = s, e.exports = i, e.exports.default = i
    }, {
      "./Loader": 31,
      "./Resource": 32,
      "./async": 33,
      "./b64": 34
    }],
    36: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      };
      r.blobMiddlewareFactory = function() {
        return function(t, e) {
          if (t.data) {
            if (t.xhr && t.xhrType === o.default.XHR_RESPONSE_TYPE.BLOB)
              if (window.Blob && "string" != typeof t.data) {
                if (0 === t.data.type.indexOf("image")) {
                  var r = function() {
                    var r = a.createObjectURL(t.data);
                    return t.blob = t.data, t.data = new Image, t.data.src = r, t.type = o.default.TYPE.IMAGE, t.data.onload = function() {
                      a.revokeObjectURL(r), t.data.onload = null, e()
                    }, {
                      v: void 0
                    }
                  }();
                  if ("object" === (void 0 === r ? "undefined" : n(r))) return r.v
                }
              } else {
                var i = t.xhr.getResponseHeader("content-type");
                if (i && 0 === i.indexOf("image")) return t.data = new Image, t.data.src = "data:" + i + ";base64," + s.default.encodeBinary(t.xhr.responseText), t.type = o.default.TYPE.IMAGE, void(t.data.onload = function() {
                  t.data.onload = null, e()
                })
              } e()
          } else e()
        }
      };
      var o = i(t("../../Resource")),
        s = i(t("../../b64")),
        a = window.URL || window.webkitURL
    }, {
      "../../Resource": 32,
      "../../b64": 34
    }],
    37: [function(t, e, r) {
      "use strict";

      function i() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
      }

      function n(t, e, r) {
        if (t && s.isObject(t) && t instanceof i) return t;
        var n = new i;
        return n.parse(t, e, r), n
      }
      var o = t("punycode"),
        s = t("./util");
      r.parse = n, r.resolve = function(t, e) {
        return n(t, !1, !0).resolve(e)
      }, r.resolveObject = function(t, e) {
        return t ? n(t, !1, !0).resolveObject(e) : e
      }, r.format = function(t) {
        return s.isString(t) && (t = n(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
      }, r.Url = i;
      var a = /^([a-z0-9.+-]+:)/i,
        u = /:[0-9]*$/,
        h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        c = ["'"].concat(l),
        f = ["%", "/", "?", ";", "#"].concat(c),
        d = ["/", "?", "#"],
        p = /^[+a-z0-9A-Z_-]{0,63}$/,
        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        v = {
          javascript: !0,
          "javascript:": !0
        },
        g = {
          javascript: !0,
          "javascript:": !0
        },
        _ = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0
        },
        m = t("querystring");
      i.prototype.parse = function(t, e, r) {
        if (!s.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var i = t.indexOf("?"),
          n = -1 !== i && i < t.indexOf("#") ? "?" : "#",
          u = t.split(n);
        u[0] = u[0].replace(/\\/g, "/");
        var l = t = u.join(n);
        if (l = l.trim(), !r && 1 === t.split("#").length) {
          var x = h.exec(l);
          if (x) return this.path = l, this.href = l, this.pathname = x[1], x[2] ? (this.search = x[2], this.query = e ? m.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var b = a.exec(l);
        if (b) {
          var T = (b = b[0]).toLowerCase();
          this.protocol = T, l = l.substr(b.length)
        }
        if (r || b || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var w = "//" === l.substr(0, 2);
          !w || b && g[b] || (l = l.substr(2), this.slashes = !0)
        }
        if (!g[b] && (w || b && !_[b])) {
          for (var E = -1, O = 0; O < d.length; O++) {
            -1 !== (P = l.indexOf(d[O])) && (-1 === E || P < E) && (E = P)
          }
          var S, M; - 1 !== (M = -1 === E ? l.lastIndexOf("@") : l.lastIndexOf("@", E)) && (S = l.slice(0, M), l = l.slice(M + 1), this.auth = decodeURIComponent(S)), E = -1;
          for (O = 0; O < f.length; O++) {
            var P; - 1 !== (P = l.indexOf(f[O])) && (-1 === E || P < E) && (E = P)
          } - 1 === E && (E = l.length), this.host = l.slice(0, E), l = l.slice(E), this.parseHost(), this.hostname = this.hostname || "";
          var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
          if (!C)
            for (var A = this.hostname.split(/\./), R = (O = 0, A.length); O < R; O++) {
              var D = A[O];
              if (D && !D.match(p)) {
                for (var I = "", L = 0, k = D.length; L < k; L++) D.charCodeAt(L) > 127 ? I += "x" : I += D[L];
                if (!I.match(p)) {
                  var B = A.slice(0, O),
                    j = A.slice(O + 1),
                    N = D.match(y);
                  N && (B.push(N[1]), j.unshift(N[2])), j.length && (l = "/" + j.join(".") + l), this.hostname = B.join(".");
                  break
                }
              }
            }
          this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), C || (this.hostname = o.toASCII(this.hostname));
          var F = this.port ? ":" + this.port : "",
            U = this.hostname || "";
          this.host = U + F, this.href += this.host, C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== l[0] && (l = "/" + l))
        }
        if (!v[T])
          for (O = 0, R = c.length; O < R; O++) {
            var X = c[O];
            if (-1 !== l.indexOf(X)) {
              var G = encodeURIComponent(X);
              G === X && (G = escape(X)), l = l.split(X).join(G)
            }
          }
        var W = l.indexOf("#"); - 1 !== W && (this.hash = l.substr(W), l = l.slice(0, W));
        var Y = l.indexOf("?");
        if (-1 !== Y ? (this.search = l.substr(Y), this.query = l.substr(Y + 1), e && (this.query = m.parse(this.query)), l = l.slice(0, Y)) : e && (this.search = "", this.query = {}), l && (this.pathname = l), _[T] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
          F = this.pathname || "";
          var V = this.search || "";
          this.path = F + V
        }
        return this.href = this.format(), this
      }, i.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
          r = this.pathname || "",
          i = this.hash || "",
          n = !1,
          o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && s.isObject(this.query) && Object.keys(this.query).length && (o = m.stringify(this.query));
        var a = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || _[e]) && !1 !== n ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), r = r.replace(/[?#]/g, (function(t) {
          return encodeURIComponent(t)
        })), e + n + r + (a = a.replace("#", "%23")) + i
      }, i.prototype.resolve = function(t) {
        return this.resolveObject(n(t, !1, !0)).format()
      }, i.prototype.resolveObject = function(t) {
        if (s.isString(t)) {
          var e = new i;
          e.parse(t, !1, !0), t = e
        }
        for (var r = new i, n = Object.keys(this), o = 0; o < n.length; o++) {
          var a = n[o];
          r[a] = this[a]
        }
        if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
        if (t.slashes && !t.protocol) {
          for (var u = Object.keys(t), h = 0; h < u.length; h++) {
            var l = u[h];
            "protocol" !== l && (r[l] = t[l])
          }
          return _[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
        }
        if (t.protocol && t.protocol !== r.protocol) {
          if (!_[t.protocol]) {
            for (var c = Object.keys(t), f = 0; f < c.length; f++) {
              var d = c[f];
              r[d] = t[d]
            }
            return r.href = r.format(), r
          }
          if (r.protocol = t.protocol, t.host || g[t.protocol]) r.pathname = t.pathname;
          else {
            for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
            t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
          }
          if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
            var y = r.pathname || "",
              v = r.search || "";
            r.path = y + v
          }
          return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
        }
        var m = r.pathname && "/" === r.pathname.charAt(0),
          x = t.host || t.pathname && "/" === t.pathname.charAt(0),
          b = x || m || r.host && t.pathname,
          T = b,
          w = r.pathname && r.pathname.split("/") || [],
          E = (p = t.pathname && t.pathname.split("/") || [], r.protocol && !_[r.protocol]);
        if (E && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), b = b && ("" === p[0] || "" === w[0])), x) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, w = p;
        else if (p.length) w || (w = []), w.pop(), w = w.concat(p), r.search = t.search, r.query = t.query;
        else if (!s.isNullOrUndefined(t.search)) {
          if (E) r.hostname = r.host = w.shift(), (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(), r.host = r.hostname = C.shift());
          return r.search = t.search, r.query = t.query, s.isNull(r.pathname) && s.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
        }
        if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
        for (var O = w.slice(-1)[0], S = (r.host || t.host || w.length > 1) && ("." === O || ".." === O) || "" === O, M = 0, P = w.length; P >= 0; P--) "." === (O = w[P]) ? w.splice(P, 1) : ".." === O ? (w.splice(P, 1), M++) : M && (w.splice(P, 1), M--);
        if (!b && !T)
          for (; M--; M) w.unshift("..");
        !b || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
        var C, A = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        E && (r.hostname = r.host = A ? "" : w.length ? w.shift() : "", (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(), r.host = r.hostname = C.shift()));
        return (b = b || r.host && w.length) && !A && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), s.isNull(r.pathname) && s.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
      }, i.prototype.parseHost = function() {
        var t = this.host,
          e = u.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
      }
    }, {
      "./util": 38,
      punycode: 26,
      querystring: 29
    }],
    38: [function(t, e, r) {
      "use strict";
      e.exports = {
        isString: function(t) {
          return "string" == typeof t
        },
        isObject: function(t) {
          return "object" == typeof t && null !== t
        },
        isNull: function(t) {
          return null === t
        },
        isNullOrUndefined: function(t) {
          return null == t
        }
      }
    }, {}],
    39: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = t("./autoDetectRenderer"),
        s = i(t("./display/Container")),
        a = t("./ticker"),
        u = i(t("./settings")),
        h = t("./const"),
        l = function() {
          function t(e, r, i, n, h) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), "number" == typeof e && (e = Object.assign({
              width: e,
              height: r || u.default.RENDER_OPTIONS.height,
              forceCanvas: !!n,
              sharedTicker: !!h
            }, i)), this._options = e = Object.assign({
              autoStart: !0,
              sharedTicker: !1,
              forceCanvas: !1,
              sharedLoader: !1
            }, e), this.renderer = (0, o.autoDetectRenderer)(e), this.stage = new s.default, this._ticker = null, this.ticker = e.sharedTicker ? a.shared : new a.Ticker, e.autoStart && this.start()
          }
          return t.prototype.removeRenderTick = function() {
            this._ticker && this._ticker.remove(this.render, this)
          }, t.prototype.render = function() {
            this.renderer.render(this.stage)
          }, t.prototype.stop = function() {
            this._ticker.stop()
          }, t.prototype.start = function() {
            this._ticker.start()
          }, t.prototype.destroy = function(t, e) {
            if (this._ticker) {
              var r = this._ticker;
              this.ticker = null, r.destroy()
            }
            this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
          }, n(t, [{
            key: "ticker",
            set: function(t) {
              this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, h.UPDATE_PRIORITY.LOW)
            },
            get: function() {
              return this._ticker
            }
          }, {
            key: "view",
            get: function() {
              return this.renderer.view
            }
          }, {
            key: "screen",
            get: function() {
              return this.renderer.screen
            }
          }]), t
        }();
      r.default = l
    }, {
      "./autoDetectRenderer": 41,
      "./const": 42,
      "./display/Container": 44,
      "./settings": 91,
      "./ticker": 109
    }],
    40: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        if (t instanceof Array) {
          if ("precision" !== t[0].substring(0, 9)) {
            var r = t.slice(0);
            return r.unshift("precision " + e + " float;"), r
          }
        } else if ("precision" !== t.trim().substring(0, 9)) return "precision " + e + " float;\n" + t;
        return t
      }
      r.__esModule = !0;
      var n = t("pixi-gl-core"),
        o = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./settings")),
        s = function(t) {
          function e(r, n, s, a, u) {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, e),
              function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, t.call(this, r, i(n, u || o.default.PRECISION_VERTEX), i(s, u || o.default.PRECISION_FRAGMENT), void 0, a))
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e
        }(n.GLShader);
      r.default = s
    }, {
      "./settings": 91,
      "pixi-gl-core": 14
    }],
    41: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.autoDetectRenderer = function(t, e, r, n) {
        return new i.default(t, e, r)
      };
      var i = function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("./renderers/webgl/WebGLRenderer"))
    }, {
      "./renderers/webgl/WebGLRenderer": 74
    }],
    42: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.VERSION = "4.8.2", r.PI_2 = 2 * Math.PI, r.RAD_TO_DEG = 180 / Math.PI, r.DEG_TO_RAD = Math.PI / 180, r.RENDERER_TYPE = {
        UNKNOWN: 0,
        WEBGL: 1,
        CANVAS: 2
      }, r.BLEND_MODES = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16,
        NORMAL_NPM: 17,
        ADD_NPM: 18,
        SCREEN_NPM: 19
      }, r.DRAW_MODES = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
      }, r.SCALE_MODES = {
        LINEAR: 0,
        NEAREST: 1
      }, r.WRAP_MODES = {
        CLAMP: 0,
        REPEAT: 1,
        MIRRORED_REPEAT: 2
      }, r.GC_MODES = {
        AUTO: 0,
        MANUAL: 1
      }, r.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, r.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i, r.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, r.SHAPES = {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
      }, r.PRECISION = {
        LOW: "lowp",
        MEDIUM: "mediump",
        HIGH: "highp"
      }, r.TRANSFORM_MODE = {
        STATIC: 0,
        DYNAMIC: 1
      }, r.TEXT_GRADIENT = {
        LINEAR_VERTICAL: 0,
        LINEAR_HORIZONTAL: 1
      }, r.UPDATE_PRIORITY = {
        INTERACTION: 50,
        HIGH: 25,
        NORMAL: 0,
        LOW: -25,
        UTILITY: -50
      }
    }, {}],
    43: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("../math"),
        n = function() {
          function t() {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
          }
          return t.prototype.isEmpty = function() {
            return this.minX > this.maxX || this.minY > this.maxY
          }, t.prototype.clear = function() {
            this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
          }, t.prototype.getRectangle = function(t) {
            return this.minX > this.maxX || this.minY > this.maxY ? i.Rectangle.EMPTY : ((t = t || new i.Rectangle(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
          }, t.prototype.addPoint = function(t) {
            this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
          }, t.prototype.addQuad = function(t) {
            var e = this.minX,
              r = this.minY,
              i = this.maxX,
              n = this.maxY,
              o = t[0],
              s = t[1];
            e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, r = (s = t[7]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, this.minX = e, this.minY = r, this.maxX = i, this.maxY = n
          }, t.prototype.addFrame = function(t, e, r, i, n) {
            var o = t.worldTransform,
              s = o.a,
              a = o.b,
              u = o.c,
              h = o.d,
              l = o.tx,
              c = o.ty,
              f = this.minX,
              d = this.minY,
              p = this.maxX,
              y = this.maxY,
              v = s * e + u * r + l,
              g = a * e + h * r + c;
            f = v < f ? v : f, d = g < d ? g : d, p = v > p ? v : p, y = g > y ? g : y, f = (v = s * i + u * r + l) < f ? v : f, d = (g = a * i + h * r + c) < d ? g : d, p = v > p ? v : p, y = g > y ? g : y, f = (v = s * e + u * n + l) < f ? v : f, d = (g = a * e + h * n + c) < d ? g : d, p = v > p ? v : p, y = g > y ? g : y, f = (v = s * i + u * n + l) < f ? v : f, d = (g = a * i + h * n + c) < d ? g : d, p = v > p ? v : p, y = g > y ? g : y, this.minX = f, this.minY = d, this.maxX = p, this.maxY = y
          }, t.prototype.addVertices = function(t, e, r, i) {
            for (var n = t.worldTransform, o = n.a, s = n.b, a = n.c, u = n.d, h = n.tx, l = n.ty, c = this.minX, f = this.minY, d = this.maxX, p = this.maxY, y = r; y < i; y += 2) {
              var v = e[y],
                g = e[y + 1],
                _ = o * v + a * g + h,
                m = u * g + s * v + l;
              c = _ < c ? _ : c, f = m < f ? m : f, d = _ > d ? _ : d, p = m > p ? m : p
            }
            this.minX = c, this.minY = f, this.maxX = d, this.maxY = p
          }, t.prototype.addBounds = function(t) {
            var e = this.minX,
              r = this.minY,
              i = this.maxX,
              n = this.maxY;
            this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, this.maxY = t.maxY > n ? t.maxY : n
          }, t.prototype.addBoundsMask = function(t, e) {
            var r = t.minX > e.minX ? t.minX : e.minX,
              i = t.minY > e.minY ? t.minY : e.minY,
              n = t.maxX < e.maxX ? t.maxX : e.maxX,
              o = t.maxY < e.maxY ? t.maxY : e.maxY;
            if (r <= n && i <= o) {
              var s = this.minX,
                a = this.minY,
                u = this.maxX,
                h = this.maxY;
              this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > u ? n : u, this.maxY = o > h ? o : h
            }
          }, t.prototype.addBoundsArea = function(t, e) {
            var r = t.minX > e.x ? t.minX : e.x,
              i = t.minY > e.y ? t.minY : e.y,
              n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
              o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
            if (r <= n && i <= o) {
              var s = this.minX,
                a = this.minY,
                u = this.maxX,
                h = this.maxY;
              this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > u ? n : u, this.maxY = o > h ? o : h
            }
          }, t
        }();
      r.default = n
    }, {
      "../math": 65
    }],
    44: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = t("../utils"),
        o = function(t) {
          function e() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.children = [], r
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
            var e = arguments.length;
            if (e > 1)
              for (var r = 0; r < e; r++) this.addChild(arguments[r]);
            else t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), t.emit("added", this);
            return t
          }, e.prototype.addChildAt = function(t, e) {
            if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), t
          }, e.prototype.swapChildren = function(t, e) {
            if (t !== e) {
              var r = this.getChildIndex(t),
                i = this.getChildIndex(e);
              this.children[r] = e, this.children[i] = t, this.onChildrenChange(r < i ? r : i)
            }
          }, e.prototype.getChildIndex = function(t) {
            var e = this.children.indexOf(t);
            if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
          }, e.prototype.setChildIndex = function(t, e) {
            if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var r = this.getChildIndex(t);
            (0, n.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
          }, e.prototype.getChildAt = function(t) {
            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t]
          }, e.prototype.removeChild = function(t) {
            var e = arguments.length;
            if (e > 1)
              for (var r = 0; r < e; r++) this.removeChild(arguments[r]);
            else {
              var i = this.children.indexOf(t);
              if (-1 === i) return null;
              t.parent = null, t.transform && (t.transform._parentID = -1), (0, n.removeItems)(this.children, i, 1), this._boundsID++, this.onChildrenChange(i), t.emit("removed", this)
            }
            return t
          }, e.prototype.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e.parent = null, e.transform && (e.transform._parentID = -1), (0, n.removeItems)(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), e
          }, e.prototype.removeChildren = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments[1],
              r = t,
              i = "number" == typeof e ? e : this.children.length,
              n = i - r,
              o = void 0;
            if (n > 0 && n <= i) {
              o = this.children.splice(r, n);
              for (var s = 0; s < o.length; ++s) o[s].parent = null, o[s].transform && (o[s].transform._parentID = -1);
              this._boundsID++, this.onChildrenChange(t);
              for (var a = 0; a < o.length; ++a) o[a].emit("removed", this);
              return o
            }
            if (0 === n && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
          }, e.prototype.updateTransform = function() {
            this._boundsID++, this.parent && this.transform.updateTransform(this.parent.transform), this.parent ? this.worldAlpha = this.alpha * this.parent.worldAlpha : this.worldAlpha = this.alpha;
            for (var t = 0, e = this.children.length; t < e; ++t) {
              var r = this.children[t];
              r.visible && r.updateTransform()
            }
          }, e.prototype.calculateBounds = function() {
            this._bounds.clear(), this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
              var e = this.children[t];
              e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
            }
            this._lastBoundsID = this._boundsID
          }, e.prototype._calculateBounds = function() {}, e.prototype.renderWebGL = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
              if (this._mask || this._filters) this.renderAdvancedWebGL(t);
              else {
                this._renderWebGL(t);
                for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderWebGL(t)
              }
          }, e.prototype.renderAdvancedWebGL = function(t) {
            t.flush();
            var e = this._filters,
              r = this._mask;
            if (e) {
              this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
              for (var i = 0; i < e.length; i++) e[i].enabled && this._enabledFilters.push(e[i]);
              this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
            }
            r && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
            for (var n = 0, o = this.children.length; n < o; n++) this.children[n].renderWebGL(t);
            t.flush(), r && t.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
          }, e.prototype._renderWebGL = function(t) {}, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this);
            var r = "boolean" == typeof e ? e : e && e.children,
              i = this.removeChildren(0, this.children.length);
            if (r)
              for (var n = 0; n < i.length; ++n) i[n].destroy(e)
          }, i(e, [{
            key: "width",
            get: function() {
              return this.scale.x * this.getLocalBounds().width
            },
            set: function(t) {
              var e = this.getLocalBounds().width;
              this.scale.x = 0 !== e ? t / e : 1, this._width = t
            }
          }, {
            key: "height",
            get: function() {
              return this.scale.y * this.getLocalBounds().height
            },
            set: function(t) {
              var e = this.getLocalBounds().height;
              this.scale.y = 0 !== e ? t / e : 1, this._height = t
            }
          }]), e
        }(function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./DisplayObject")).default);
      r.default = o, o.prototype.containerUpdateTransform = o.prototype.updateTransform
    }, {
      "../utils": 113,
      "./DisplayObject": 45
    }],
    45: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = i(t("eventemitter3")),
        s = t("../const"),
        a = i(t("../settings")),
        u = i(t("./TransformStatic")),
        h = i(t("./Transform")),
        l = i(t("./Bounds")),
        c = t("../math"),
        f = function(t) {
          function e() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, t.call(this)),
              i = a.default.TRANSFORM_MODE === s.TRANSFORM_MODE.STATIC ? u.default : h.default;
            return r.tempDisplayObjectParent = null, r.transform = new i, r.alpha = 1, r.visible = !0, r.renderable = !0, r.parent = null, r.worldAlpha = 1, r.filterArea = null, r._filters = null, r._enabledFilters = null, r._bounds = new l.default, r._boundsID = 0, r._lastBoundsID = -1, r._boundsRect = null, r._localBoundsRect = null, r._mask = null, r._destroyed = !1, r
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.updateTransform = function() {
            this.parent && this.transform.updateTransform(this.parent.transform), this.parent ? this.worldAlpha = this.alpha * this.parent.worldAlpha : this.worldAlpha = this.alpha, this._bounds.updateID++
          }, e.prototype._recursivePostUpdateTransform = function() {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
          }, e.prototype.getBounds = function(t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new c.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
          }, e.prototype.getLocalBounds = function(t) {
            var e = this.transform,
              r = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new c.Rectangle), t = this._localBoundsRect);
            var i = this.getBounds(!1, t);
            return this.parent = r, this.transform = e, i
          }, e.prototype.toGlobal = function(t, e) {
            return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
          }, e.prototype.toLocal = function(t, e, r, i) {
            return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
          }, e.prototype.renderWebGL = function(t) {}, e.prototype.setParent = function(t) {
            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t
          }, e.prototype.setTransform = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
              n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
              s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
              a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
              u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
            return this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = i || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, this
          }, e.prototype.destroy = function() {
            this._destroyed = !0, this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.parent = null, this.transform = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1
          }, n(e, [{
            key: "_tempDisplayObjectParent",
            get: function() {
              return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
            }
          }, {
            key: "destroyed",
            get: function() {
              return this._destroyed
            }
          }, {
            key: "x",
            get: function() {
              return this.position.x
            },
            set: function(t) {
              this.transform.position.x = t
            }
          }, {
            key: "y",
            get: function() {
              return this.position.y
            },
            set: function(t) {
              this.transform.position.y = t
            }
          }, {
            key: "worldTransform",
            get: function() {
              return this.transform.worldTransform
            }
          }, {
            key: "localTransform",
            get: function() {
              return this.transform.localTransform
            }
          }, {
            key: "position",
            get: function() {
              return this.transform.position
            },
            set: function(t) {
              this.transform.position.copy(t)
            }
          }, {
            key: "scale",
            get: function() {
              return this.transform.scale
            },
            set: function(t) {
              this.transform.scale.copy(t)
            }
          }, {
            key: "pivot",
            get: function() {
              return this.transform.pivot
            },
            set: function(t) {
              this.transform.pivot.copy(t)
            }
          }, {
            key: "skew",
            get: function() {
              return this.transform.skew
            },
            set: function(t) {
              this.transform.skew.copy(t)
            }
          }, {
            key: "rotation",
            get: function() {
              return this.transform.rotation
            },
            set: function(t) {
              this.transform.rotation = t
            }
          }, {
            key: "angle",
            get: function() {
              return this.transform.rotation * s.RAD_TO_DEG
            },
            set: function(t) {
              this.transform.rotation = t * s.DEG_TO_RAD
            }
          }, {
            key: "worldVisible",
            get: function() {
              var t = this;
              do {
                if (!t.visible) return !1;
                t = t.parent
              } while (t);
              return !0
            }
          }, {
            key: "mask",
            get: function() {
              return this._mask
            },
            set: function(t) {
              this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
            }
          }, {
            key: "filters",
            get: function() {
              return this._filters && this._filters.slice()
            },
            set: function(t) {
              this._filters = t && t.slice()
            }
          }]), e
        }(o.default);
      r.default = f, f.prototype.displayObjectUpdateTransform = f.prototype.updateTransform
    }, {
      "../const": 42,
      "../math": 65,
      "../settings": 91,
      "./Bounds": 43,
      "./Transform": 46,
      "./TransformStatic": 48,
      eventemitter3: 3
    }],
    46: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = t("../math"),
        o = function(t) {
          function e() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.position = new n.Point(0, 0), r.scale = new n.Point(1, 1), r.skew = new n.ObservablePoint(r.updateSkew, r, 0, 0), r.pivot = new n.Point(0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.updateSkew = function() {
            this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
          }, e.prototype.updateLocalTransform = function() {
            var t = this.localTransform;
            t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)
          }, e.prototype.updateTransform = function(t) {
            var e = this.localTransform;
            e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
            var r = t.worldTransform,
              i = this.worldTransform;
            i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._worldID++
          }, e.prototype.setFromMatrix = function(t) {
            t.decompose(this)
          }, i(e, [{
            key: "rotation",
            get: function() {
              return this._rotation
            },
            set: function(t) {
              this._rotation = t, this.updateSkew()
            }
          }]), e
        }(function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./TransformBase")).default);
      r.default = o
    }, {
      "../math": 65,
      "./TransformBase": 47
    }],
    47: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("../math"),
        n = function() {
          function t() {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.worldTransform = new i.Matrix, this.localTransform = new i.Matrix, this._worldID = 0, this._parentID = 0
          }
          return t.prototype.updateLocalTransform = function() {}, t.prototype.updateTransform = function(t) {
            var e = t.worldTransform,
              r = this.worldTransform,
              i = this.localTransform;
            r.a = i.a * e.a + i.b * e.c, r.b = i.a * e.b + i.b * e.d, r.c = i.c * e.a + i.d * e.c, r.d = i.c * e.b + i.d * e.d, r.tx = i.tx * e.a + i.ty * e.c + e.tx, r.ty = i.tx * e.b + i.ty * e.d + e.ty, this._worldID++
          }, t
        }();
      r.default = n, n.prototype.updateWorldTransform = n.prototype.updateTransform, n.IDENTITY = new n
    }, {
      "../math": 65
    }],
    48: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = t("../math"),
        o = function(t) {
          function e() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.position = new n.ObservablePoint(r.onChange, r, 0, 0), r.scale = new n.ObservablePoint(r.onChange, r, 1, 1), r.pivot = new n.ObservablePoint(r.onChange, r, 0, 0), r.skew = new n.ObservablePoint(r.updateSkew, r, 0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r._localID = 0, r._currentLocalID = 0, r
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onChange = function() {
            this._localID++
          }, e.prototype.updateSkew = function() {
            this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
          }, e.prototype.updateLocalTransform = function() {
            var t = this.localTransform;
            this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
          }, e.prototype.updateTransform = function(t) {
            var e = this.localTransform;
            if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
              var r = t.worldTransform,
                i = this.worldTransform;
              i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
            }
          }, e.prototype.setFromMatrix = function(t) {
            t.decompose(this), this._localID++
          }, i(e, [{
            key: "rotation",
            get: function() {
              return this._rotation
            },
            set: function(t) {
              this._rotation = t, this.updateSkew()
            }
          }]), e
        }(function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./TransformBase")).default);
      r.default = o
    }, {
      "../math": 65,
      "./TransformBase": 47
    }],
    49: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("../display/Container")),
        o = i(t("../textures/Texture")),
        s = i(t("./GraphicsData")),
        a = i(t("../sprites/Sprite")),
        u = t("../math"),
        h = t("../utils"),
        l = t("../const"),
        c = i(t("../display/Bounds")),
        f = i(t("./utils/bezierCurveTo")),
        d = new u.Point,
        p = new Float32Array(4),
        y = new Float32Array(4),
        v = function(t) {
          function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return i.fillAlpha = 1, i.lineWidth = 0, i.nativeLines = r, i.lineColor = 0, i.lineAlignment = .5, i.graphicsData = [], i.tint = 16777215, i._prevTint = 16777215, i.blendMode = l.BLEND_MODES.NORMAL, i.currentPath = null, i._webGL = {}, i.isMask = !1, i.boundsPadding = 0, i._localBounds = new c.default, i.dirty = 0, i.fastRectDirty = -1, i.clearDirty = 0, i.boundsDirty = -1, i.cachedSpriteDirty = !1, i._spriteRect = null, i._fastRect = !1, i._prevRectTint = null, i._prevRectFillColor = null, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.clone = function() {
            var t = new e;
            t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.lineAlignment = this.lineAlignment, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
            for (var r = 0; r < this.graphicsData.length; ++r) t.graphicsData.push(this.graphicsData[r].clone());
            return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
          }, e.prototype._quadraticCurveLength = function(t, e, r, i, n, o) {
            var s = t - (2 * r + n),
              a = e - (2 * i + o),
              u = (r - 2) * t * 2,
              h = (i - 2) * e * 2,
              l = 4 * (s * s + a * a),
              c = 4 * (s * u + a * h),
              f = u * u + h * h,
              d = 2 * Math.sqrt(l + c + f),
              p = Math.sqrt(l),
              y = 2 * l * p,
              v = 2 * Math.sqrt(f),
              g = c / p;
            return (y * d + p * c * (d - v) + (4 * f * l - c * c) * Math.log((2 * p + g + d) / (g + v))) / (4 * y)
          }, e.prototype._bezierCurveLength = function(t, e, r, i, n, o, s, a) {
            for (var u = 0, h = 0, l = 0, c = 0, f = 0, d = 0, p = 0, y = 0, v = 0, g = 0, _ = 0, m = t, x = e, b = 1; b <= 10; ++b) g = m - (y = (p = (d = (f = 1 - (h = b / 10)) * f) * f) * t + 3 * d * h * r + 3 * f * (l = h * h) * n + (c = l * h) * s), _ = x - (v = p * e + 3 * d * h * i + 3 * f * l * o + c * a), m = y, x = v, u += Math.sqrt(g * g + _ * _);
            return u
          }, e.prototype._segmentsCount = function(t) {
            var r = Math.ceil(t / e.CURVES.maxLength);
            return r < e.CURVES.minSegments ? r = e.CURVES.minSegments : r > e.CURVES.maxSegments && (r = e.CURVES.maxSegments), r
          }, e.prototype.lineStyle = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            if (this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this.lineAlignment = i, this.currentPath)
              if (this.currentPath.shape.points.length) {
                var n = new u.Polygon(this.currentPath.shape.points.slice(-2));
                n.closed = !1, this.drawShape(n)
              } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha, this.currentPath.lineAlignment = this.lineAlignment;
            return this
          }, e.prototype.moveTo = function(t, e) {
            var r = new u.Polygon([t, e]);
            return r.closed = !1, this.drawShape(r), this
          }, e.prototype.lineTo = function(t, e) {
            var r = this.currentPath.shape.points,
              i = r[r.length - 2],
              n = r[r.length - 1];
            return i === t && n === e || (r.push(t, e), this.dirty++), this
          }, e.prototype.quadraticCurveTo = function(t, r, i, n) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
            var o = this.currentPath.shape.points,
              s = 0,
              a = 0;
            0 === o.length && this.moveTo(0, 0);
            for (var u = o[o.length - 2], h = o[o.length - 1], l = e.CURVES.adaptive ? this._segmentsCount(this._quadraticCurveLength(u, h, t, r, i, n)) : 20, c = 1; c <= l; ++c) {
              var f = c / l;
              s = u + (t - u) * f, a = h + (r - h) * f, o.push(s + (t + (i - t) * f - s) * f, a + (r + (n - r) * f - a) * f)
            }
            return this.dirty++, this
          }, e.prototype.bezierCurveTo = function(t, r, i, n, o, s) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
            var a = this.currentPath.shape.points,
              u = a[a.length - 2],
              h = a[a.length - 1];
            a.length -= 2;
            var l = e.CURVES.adaptive ? this._segmentsCount(this._bezierCurveLength(u, h, t, r, i, n, o, s)) : 20;
            return (0, f.default)(u, h, t, r, i, n, o, s, l, a), this.dirty++, this
          }, e.prototype.arcTo = function(t, e, r, i, n) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
            var o = this.currentPath.shape.points,
              s = o[o.length - 2],
              a = o[o.length - 1] - e,
              u = s - t,
              h = i - e,
              l = r - t,
              c = Math.abs(a * l - u * h);
            if (c < 1e-8 || 0 === n) o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
            else {
              var f = a * a + u * u,
                d = h * h + l * l,
                p = a * h + u * l,
                y = n * Math.sqrt(f) / c,
                v = n * Math.sqrt(d) / c,
                g = y * p / f,
                _ = v * p / d,
                m = y * l + v * u,
                x = y * h + v * a,
                b = u * (v + g),
                T = a * (v + g),
                w = l * (y + _),
                E = h * (y + _),
                O = Math.atan2(T - x, b - m),
                S = Math.atan2(E - x, w - m);
              this.arc(m + t, x + e, n, O, S, u * h > l * a)
            }
            return this.dirty++, this
          }, e.prototype.arc = function(t, r, i, n, o) {
            var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (n === o) return this;
            !s && o <= n ? o += l.PI_2 : s && n <= o && (n += l.PI_2);
            var a = o - n,
              u = e.CURVES.adaptive ? this._segmentsCount(Math.abs(a) * i) : 40 * Math.ceil(Math.abs(a) / l.PI_2);
            if (0 === a) return this;
            var h = t + Math.cos(n) * i,
              c = r + Math.sin(n) * i,
              f = this.currentPath ? this.currentPath.shape.points : null;
            if (f) {
              var d = Math.abs(f[f.length - 2] - h),
                p = Math.abs(f[f.length - 1] - c);
              d < .001 && p < .001 || f.push(h, c)
            } else this.moveTo(h, c), f = this.currentPath.shape.points;
            for (var y = a / (2 * u), v = 2 * y, g = Math.cos(y), _ = Math.sin(y), m = u - 1, x = m % 1 / m, b = 0; b <= m; ++b) {
              var T = y + n + v * (b + x * b),
                w = Math.cos(T),
                E = -Math.sin(T);
              f.push((g * w + _ * E) * i + t, (g * -E + _ * w) * i + r)
            }
            return this.dirty++, this
          }, e.prototype.beginFill = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return this.filling = !0, this.fillColor = t, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
          }, e.prototype.endFill = function() {
            return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
          }, e.prototype.drawRect = function(t, e, r, i) {
            return this.drawShape(new u.Rectangle(t, e, r, i)), this
          }, e.prototype.drawRoundedRect = function(t, e, r, i, n) {
            return this.drawShape(new u.RoundedRectangle(t, e, r, i, n)), this
          }, e.prototype.drawCircle = function(t, e, r) {
            return this.drawShape(new u.Circle(t, e, r)), this
          }, e.prototype.drawEllipse = function(t, e, r, i) {
            return this.drawShape(new u.Ellipse(t, e, r, i)), this
          }, e.prototype.drawPolygon = function(t) {
            var e = t,
              r = !0;
            if (e instanceof u.Polygon && (r = e.closed, e = e.points), !Array.isArray(e)) {
              e = new Array(arguments.length);
              for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
            }
            var n = new u.Polygon(e);
            return n.closed = r, this.drawShape(n), this
          }, e.prototype.drawStar = function(t, e, r, i, n) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            n = n || i / 2;
            for (var s = -1 * Math.PI / 2 + o, a = 2 * r, u = l.PI_2 / a, h = [], c = 0; c < a; c++) {
              var f = c % 2 ? n : i,
                d = c * u + s;
              h.push(t + f * Math.cos(d), e + f * Math.sin(d))
            }
            return this.drawPolygon(h)
          }, e.prototype.clear = function() {
            return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.lineAlignment = .5, this.filling = !1, this.boundsDirty = -1, this.canvasTintDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
          }, e.prototype.isFastRect = function() {
            return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === l.SHAPES.RECT && !this.graphicsData[0].lineWidth
          }, e.prototype._renderWebGL = function(t) {
            this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
          }, e.prototype._renderSpriteRect = function(t) {
            var e = this.graphicsData[0].shape;
            this._spriteRect || (this._spriteRect = new a.default(new o.default(o.default.WHITE)));
            var r = this._spriteRect,
              i = this.graphicsData[0].fillColor;
            if (16777215 === this.tint) r.tint = i;
            else if (this.tint !== this._prevRectTint || i !== this._prevRectFillColor) {
              var n = p,
                s = y;
              (0, h.hex2rgb)(i, n), (0, h.hex2rgb)(this.tint, s), n[0] *= s[0], n[1] *= s[1], n[2] *= s[2], r.tint = (0, h.rgb2hex)(n), this._prevRectTint = this.tint, this._prevRectFillColor = i
            }
            r.alpha = this.graphicsData[0].fillAlpha, r.worldAlpha = this.worldAlpha * r.alpha, r.blendMode = this.blendMode, r._texture._frame.width = e.width, r._texture._frame.height = e.height, r.transform.worldTransform = this.transform.worldTransform, r.anchor.set(-e.x / e.width, -e.y / e.height), r._onAnchorUpdate(), r._renderWebGL(t)
          }, e.prototype._calculateBounds = function() {
            this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
            var t = this._localBounds;
            this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
          }, e.prototype.containsPoint = function(t) {
            this.worldTransform.applyInverse(t, d);
            for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
              var i = e[r];
              if (i.fill && i.shape && i.shape.contains(d.x, d.y)) {
                if (i.holes)
                  for (var n = 0; n < i.holes.length; n++) {
                    if (i.holes[n].contains(d.x, d.y)) return !1
                  }
                return !0
              }
            }
            return !1
          }, e.prototype.updateLocalBounds = function() {
            var t = 1 / 0,
              e = -1 / 0,
              r = 1 / 0,
              i = -1 / 0;
            if (this.graphicsData.length)
              for (var n = 0, o = 0, s = 0, a = 0, u = 0, h = 0; h < this.graphicsData.length; h++) {
                var c = this.graphicsData[h],
                  f = c.type,
                  d = c.lineWidth;
                if (n = c.shape, f === l.SHAPES.RECT || f === l.SHAPES.RREC) o = n.x - d / 2, s = n.y - d / 2, t = o < t ? o : t, e = o + (a = n.width + d) > e ? o + a : e, r = s < r ? s : r, i = s + (u = n.height + d) > i ? s + u : i;
                else if (f === l.SHAPES.CIRC) o = n.x, s = n.y, t = o - (a = n.radius + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, r = s - (u = n.radius + d / 2) < r ? s - u : r, i = s + u > i ? s + u : i;
                else if (f === l.SHAPES.ELIP) o = n.x, s = n.y, t = o - (a = n.width + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, r = s - (u = n.height + d / 2) < r ? s - u : r, i = s + u > i ? s + u : i;
                else
                  for (var p = n.points, y = 0, v = 0, g = 0, _ = 0, m = 0, x = 0, b = 0, T = 0, w = 0; w + 2 < p.length; w += 2) o = p[w], s = p[w + 1], y = p[w + 2], v = p[w + 3], g = Math.abs(y - o), _ = Math.abs(v - s), u = d, (a = Math.sqrt(g * g + _ * _)) < 1e-9 || (t = (b = (y + o) / 2) - (m = (u / a * _ + g) / 2) < t ? b - m : t, e = b + m > e ? b + m : e, r = (T = (v + s) / 2) - (x = (u / a * g + _) / 2) < r ? T - x : r, i = T + x > i ? T + x : i)
              } else t = 0, e = 0, r = 0, i = 0;
            var E = this.boundsPadding;
            this._localBounds.minX = t - E, this._localBounds.maxX = e + E, this._localBounds.minY = r - E, this._localBounds.maxY = i + E
          }, e.prototype.drawShape = function(t) {
            this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
            var e = new s.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, t, this.lineAlignment);
            return this.graphicsData.push(e), e.type === l.SHAPES.POLY && (e.shape.closed = e.shape.closed, this.currentPath = e), this.dirty++, e
          }, e.prototype.closePath = function() {
            var t = this.currentPath;
            return t && t.shape && t.shape.close(), this
          }, e.prototype.addHole = function() {
            var t = this.graphicsData.pop();
            return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
          }, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this, e);
            for (var r = 0; r < this.graphicsData.length; ++r) this.graphicsData[r].destroy();
            for (var i in this._webGL)
              for (var n = 0; n < this._webGL[i].data.length; ++n) this._webGL[i].data[n].destroy();
            this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webGL = null, this._localBounds = null
          }, e
        }(n.default);
      r.default = v, v._SPRITE_TEXTURE = null, v.CURVES = {
        adaptive: !1,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048
      }
    }, {
      "../const": 42,
      "../display/Bounds": 43,
      "../display/Container": 44,
      "../math": 65,
      "../sprites/Sprite": 92,
      "../textures/Texture": 103,
      "../utils": 113,
      "./GraphicsData": 50,
      "./utils/bezierCurveTo": 51
    }],
    50: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t(e, r, i, n, o, s, a, u, h) {
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.lineWidth = e, this.lineAlignment = h, this.nativeLines = a, this.lineColor = r, this.lineAlpha = i, this._lineTint = r, this.fillColor = n, this.fillAlpha = o, this._fillTint = n, this.fill = s, this.holes = [], this.shape = u, this.type = u.type
        }
        return t.prototype.clone = function() {
          return new t(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape)
        }, t.prototype.addHole = function(t) {
          this.holes.push(t)
        }, t.prototype.destroy = function() {
          this.shape = null, this.holes = null
        }, t
      }();
      r.default = i
    }, {}],
    51: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e, r, i, n, o, s, a, u) {
        var h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [],
          l = 0,
          c = 0,
          f = 0,
          d = 0,
          p = 0;
        h.push(t, e);
        for (var y = 1, v = 0; y <= u; ++y) f = (c = (l = 1 - (v = y / u)) * l) * l, p = (d = v * v) * v, h.push(f * t + 3 * c * v * r + 3 * l * d * n + p * s, f * e + 3 * c * v * i + 3 * l * d * o + p * a);
        return h
      }
    }, {}],
    52: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("../../utils"),
        o = t("../../const"),
        s = i(t("../../renderers/webgl/utils/ObjectRenderer")),
        a = i(t("../../renderers/webgl/WebGLRenderer")),
        u = i(t("./WebGLGraphicsData")),
        h = i(t("./shaders/PrimitiveShader")),
        l = i(t("./utils/buildPoly")),
        c = i(t("./utils/buildRectangle")),
        f = i(t("./utils/buildRoundedRectangle")),
        d = i(t("./utils/buildCircle")),
        p = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.graphicsDataPool = [], i.primitiveShader = null, i.gl = r.gl, i.CONTEXT_UID = 0, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onContextChange = function() {
            this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new h.default(this.gl)
          }, e.prototype.destroy = function() {
            s.default.prototype.destroy.call(this);
            for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
            this.graphicsDataPool = null
          }, e.prototype.render = function(t) {
            var e = this.renderer,
              r = e.gl,
              i = void 0,
              o = t._webGL[this.CONTEXT_UID];
            o && t.dirty === o.dirty || (this.updateGraphics(t), o = t._webGL[this.CONTEXT_UID]);
            var s = this.primitiveShader;
            e.bindShader(s), e.state.setBlendMode(t.blendMode);
            for (var a = 0, u = o.data.length; a < u; a++) {
              var h = (i = o.data[a]).shader;
              e.bindShader(h), h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), h.uniforms.tint = (0, n.hex2rgb)(t.tint), h.uniforms.alpha = t.worldAlpha, e.bindVao(i.vao), i.nativeLines ? r.drawArrays(r.LINES, 0, i.points.length / 6) : i.vao.draw(r.TRIANGLE_STRIP, i.indices.length)
            }
          }, e.prototype.updateGraphics = function(t) {
            var e = this.renderer.gl,
              r = t._webGL[this.CONTEXT_UID];
            if (r || (r = t._webGL[this.CONTEXT_UID] = {
                lastIndex: 0,
                data: [],
                gl: e,
                clearDirty: -1,
                dirty: -1
              }), r.dirty = t.dirty, t.clearDirty !== r.clearDirty) {
              r.clearDirty = t.clearDirty;
              for (var i = 0; i < r.data.length; i++) this.graphicsDataPool.push(r.data[i]);
              r.data.length = 0, r.lastIndex = 0
            }
            for (var n = void 0, s = void 0, a = r.lastIndex; a < t.graphicsData.length; a++) {
              var u = t.graphicsData[a];
              n = this.getWebGLData(r, 0), u.nativeLines && u.lineWidth && (s = this.getWebGLData(r, 0, !0), r.lastIndex++), u.type === o.SHAPES.POLY && (0, l.default)(u, n, s), u.type === o.SHAPES.RECT ? (0, c.default)(u, n, s) : u.type === o.SHAPES.CIRC || u.type === o.SHAPES.ELIP ? (0, d.default)(u, n, s) : u.type === o.SHAPES.RREC && (0, f.default)(u, n, s), r.lastIndex++
            }
            this.renderer.bindVao(null);
            for (var h = 0; h < r.data.length; h++)(n = r.data[h]).dirty && n.upload()
          }, e.prototype.getWebGLData = function(t, e, r) {
            var i = t.data[t.data.length - 1];
            return (!i || i.nativeLines !== r || i.points.length > 32e4) && ((i = this.graphicsDataPool.pop() || new u.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState)).nativeLines = r, i.reset(e), t.data.push(i)), i.dirty = !0, i
          }, e
        }(s.default);
      r.default = p, a.default.registerPlugin("graphics", p)
    }, {
      "../../const": 42,
      "../../renderers/webgl/WebGLRenderer": 74,
      "../../renderers/webgl/utils/ObjectRenderer": 84,
      "../../utils": 113,
      "./WebGLGraphicsData": 53,
      "./shaders/PrimitiveShader": 54,
      "./utils/buildCircle": 55,
      "./utils/buildPoly": 57,
      "./utils/buildRectangle": 58,
      "./utils/buildRoundedRectangle": 59
    }],
    53: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("pixi-gl-core")),
        n = function() {
          function t(e, r, n) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.gl = e, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = i.default.GLBuffer.createVertexBuffer(e), this.indexBuffer = i.default.GLBuffer.createIndexBuffer(e), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = r, this.vao = new i.default.VertexArrayObject(e, n).addIndex(this.indexBuffer).addAttribute(this.buffer, r.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, r.attributes.aColor, e.FLOAT, !1, 24, 8)
          }
          return t.prototype.reset = function() {
            this.points.length = 0, this.indices.length = 0
          }, t.prototype.upload = function() {
            this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
          }, t.prototype.destroy = function() {
            this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
          }, t
        }();
      r.default = n
    }, {
      "pixi-gl-core": 14
    }],
    54: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
        function e(r) {
          return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), e
      }(function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("../../../Shader")).default);
      r.default = i
    }, {
      "../../../Shader": 40
    }],
    55: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e, r) {
        var s = t.shape,
          a = s.x,
          u = s.y,
          h = void 0,
          l = void 0;
        if (t.type === n.SHAPES.CIRC ? (h = s.radius, l = s.radius) : (h = s.width, l = s.height), 0 !== h && 0 !== l) {
          var c = Math.floor(30 * Math.sqrt(s.radius)) || Math.floor(15 * Math.sqrt(s.width + s.height)),
            f = 2 * Math.PI / c;
          if (t.fill) {
            var d = (0, o.hex2rgb)(t.fillColor),
              p = t.fillAlpha,
              y = d[0] * p,
              v = d[1] * p,
              g = d[2] * p,
              _ = e.points,
              m = e.indices,
              x = _.length / 6;
            m.push(x);
            for (var b = 0; b < c + 1; b++) _.push(a, u, y, v, g, p), _.push(a + Math.sin(f * b) * h, u + Math.cos(f * b) * l, y, v, g, p), m.push(x++, x++);
            m.push(x - 1)
          }
          if (t.lineWidth) {
            var T = t.points;
            t.points = [];
            for (var w = 0; w < c; w++) t.points.push(a + Math.sin(f * -w) * h, u + Math.cos(f * -w) * l);
            t.points.push(t.points[0], t.points[1]), (0, i.default)(t, e, r), t.points = T
          }
        }
      };
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./buildLine")),
        n = t("../../../const"),
        o = t("../../../utils")
    }, {
      "../../../const": 42,
      "../../../utils": 113,
      "./buildLine": 56
    }],
    56: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e, r) {
        t.nativeLines ? function(t, e) {
          var r = 0,
            i = t.points;
          if (0 !== i.length) {
            var o = e.points,
              s = i.length / 2,
              a = (0, n.hex2rgb)(t.lineColor),
              u = t.lineAlpha,
              h = a[0] * u,
              l = a[1] * u,
              c = a[2] * u;
            for (r = 1; r < s; r++) {
              var f = i[2 * (r - 1)],
                d = i[2 * (r - 1) + 1],
                p = i[2 * r],
                y = i[2 * r + 1];
              o.push(f, d), o.push(h, l, c, u), o.push(p, y), o.push(h, l, c, u)
            }
          }
        }(t, r) : function(t, e) {
          var r = t.points;
          if (0 !== r.length) {
            var o = new i.Point(r[0], r[1]),
              s = new i.Point(r[r.length - 2], r[r.length - 1]);
            if (o.x === s.x && o.y === s.y) {
              (r = r.slice()).pop(), r.pop();
              var a = (s = new i.Point(r[r.length - 2], r[r.length - 1])).x + .5 * (o.x - s.x),
                u = s.y + .5 * (o.y - s.y);
              r.unshift(a, u), r.push(a, u)
            }
            var h = e.points,
              l = e.indices,
              c = r.length / 2,
              f = r.length,
              d = h.length / 6,
              p = t.lineWidth / 2,
              y = (0, n.hex2rgb)(t.lineColor),
              v = t.lineAlpha,
              g = y[0] * v,
              _ = y[1] * v,
              m = y[2] * v,
              x = r[0],
              b = r[1],
              T = r[2],
              w = r[3],
              E = 0,
              O = 0,
              S = -(b - w),
              M = x - T,
              P = 0,
              C = 0,
              A = 0,
              R = 0,
              D = Math.sqrt(S * S + M * M);
            S /= D, M /= D, S *= p, M *= p;
            var I = t.lineAlignment,
              L = 2 * (1 - I),
              k = 2 * I;
            h.push(x - S * L, b - M * L, g, _, m, v), h.push(x + S * k, b + M * k, g, _, m, v);
            for (var B = 1; B < c - 1; ++B) {
              x = r[2 * (B - 1)], b = r[2 * (B - 1) + 1], T = r[2 * B], w = r[2 * B + 1], E = r[2 * (B + 1)], O = r[2 * (B + 1) + 1], S = -(b - w), M = x - T, S /= D = Math.sqrt(S * S + M * M), M /= D, S *= p, M *= p, P = -(w - O), C = T - E, P /= D = Math.sqrt(P * P + C * C), C /= D;
              var j = -M + b - (-M + w),
                N = -S + T - (-S + x),
                F = (-S + x) * (-M + w) - (-S + T) * (-M + b),
                U = -(C *= p) + O - (-C + w),
                X = -(P *= p) + T - (-P + E),
                G = (-P + E) * (-C + w) - (-P + T) * (-C + O),
                W = j * X - U * N;
              if (Math.abs(W) < .1) W += 10.1, h.push(T - S * L, w - M * L, g, _, m, v), h.push(T + S * k, w + M * k, g, _, m, v);
              else {
                var Y = (N * G - X * F) / W,
                  V = (U * F - j * G) / W;
                (Y - T) * (Y - T) + (V - w) * (V - w) > 196 * p * p ? (A = S - P, R = M - C, A /= D = Math.sqrt(A * A + R * R), R /= D, A *= p, R *= p, h.push(T - A * L, w - R * L), h.push(g, _, m, v), h.push(T + A * k, w + R * k), h.push(g, _, m, v), h.push(T - A * k * L, w - R * L), h.push(g, _, m, v), f++) : (h.push(T + (Y - T) * L, w + (V - w) * L), h.push(g, _, m, v), h.push(T - (Y - T) * k, w - (V - w) * k), h.push(g, _, m, v))
              }
            }
            x = r[2 * (c - 2)], b = r[2 * (c - 2) + 1], T = r[2 * (c - 1)], S = -(b - (w = r[2 * (c - 1) + 1])), M = x - T, S /= D = Math.sqrt(S * S + M * M), M /= D, S *= p, M *= p, h.push(T - S * L, w - M * L), h.push(g, _, m, v), h.push(T + S * k, w + M * k), h.push(g, _, m, v), l.push(d);
            for (var H = 0; H < f; ++H) l.push(d++);
            l.push(d - 1)
          }
        }(t, e)
      };
      var i = t("../../../math"),
        n = t("../../../utils")
    }, {
      "../../../math": 65,
      "../../../utils": 113
    }],
    57: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0, r.default = function(t, e, r) {
        t.points = t.shape.points.slice();
        var i = t.points;
        if (t.fill && i.length >= 6) {
          for (var a = [], u = t.holes, h = 0; h < u.length; h++) {
            var l = u[h];
            a.push(i.length / 2), i = i.concat(l.points)
          }
          var c = e.points,
            f = e.indices,
            d = i.length / 2,
            p = (0, o.hex2rgb)(t.fillColor),
            y = t.fillAlpha,
            v = p[0] * y,
            g = p[1] * y,
            _ = p[2] * y,
            m = (0, s.default)(i, a, 2);
          if (!m) return;
          for (var x = c.length / 6, b = 0; b < m.length; b += 3) f.push(m[b] + x), f.push(m[b] + x), f.push(m[b + 1] + x), f.push(m[b + 2] + x), f.push(m[b + 2] + x);
          for (var T = 0; T < d; T++) c.push(i[2 * T], i[2 * T + 1], v, g, _, y)
        }
        t.lineWidth > 0 && (0, n.default)(t, e, r)
      };
      var n = i(t("./buildLine")),
        o = t("../../../utils"),
        s = i(t("earcut"))
    }, {
      "../../../utils": 113,
      "./buildLine": 56,
      earcut: 2
    }],
    58: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e, r) {
        var o = t.shape,
          s = o.x,
          a = o.y,
          u = o.width,
          h = o.height;
        if (t.fill) {
          var l = (0, n.hex2rgb)(t.fillColor),
            c = t.fillAlpha,
            f = l[0] * c,
            d = l[1] * c,
            p = l[2] * c,
            y = e.points,
            v = e.indices,
            g = y.length / 6;
          y.push(s, a), y.push(f, d, p, c), y.push(s + u, a), y.push(f, d, p, c), y.push(s, a + h), y.push(f, d, p, c), y.push(s + u, a + h), y.push(f, d, p, c), v.push(g, g, g + 1, g + 2, g + 3, g + 3)
        }
        if (t.lineWidth) {
          var _ = t.points;
          t.points = [s, a, s + u, a, s + u, a + h, s, a + h, s, a], (0, i.default)(t, e, r), t.points = _
        }
      };
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./buildLine")),
        n = t("../../../utils")
    }, {
      "../../../utils": 113,
      "./buildLine": 56
    }],
    59: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function n(t, e, r) {
        return t + (e - t) * r
      }

      function o(t, e, r, i, o, s) {
        for (var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], u = 0, h = 0, l = 0, c = 0, f = 0, d = 0, p = 0, y = 0; p <= 20; ++p) u = n(t, r, y = p / 20), h = n(e, i, y), l = n(r, o, y), c = n(i, s, y), f = n(u, l, y), d = n(h, c, y), a.push(f, d);
        return a
      }
      r.__esModule = !0, r.default = function(t, e, r) {
        var i = t.shape,
          n = i.x,
          h = i.y,
          l = i.width,
          c = i.height,
          f = i.radius,
          d = [];
        if (d.push(n, h + f), o(n, h + c - f, n, h + c, n + f, h + c, d), o(n + l - f, h + c, n + l, h + c, n + l, h + c - f, d), o(n + l, h + f, n + l, h, n + l - f, h, d), o(n + f, h, n, h, n, h + f + 1e-10, d), t.fill) {
          for (var p = (0, u.hex2rgb)(t.fillColor), y = t.fillAlpha, v = p[0] * y, g = p[1] * y, _ = p[2] * y, m = e.points, x = e.indices, b = m.length / 6, T = (0, s.default)(d, null, 2), w = 0, E = T.length; w < E; w += 3) x.push(T[w] + b), x.push(T[w] + b), x.push(T[w + 1] + b), x.push(T[w + 2] + b), x.push(T[w + 2] + b);
          for (var O = 0, S = d.length; O < S; O++) m.push(d[O], d[++O], v, g, _, y)
        }
        if (t.lineWidth) {
          var M = t.points;
          t.points = d, (0, a.default)(t, e, r), t.points = M
        }
      };
      var s = i(t("earcut")),
        a = i(t("./buildLine")),
        u = t("../../../utils")
    }, {
      "../../../utils": 113,
      "./buildLine": 56,
      earcut: 2
    }],
    60: [function(t, e, r) {
      "use strict";

      function i(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e
      }

      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0, r.autoDetectRenderer = r.Application = r.Filter = r.SpriteMaskFilter = r.Quad = r.RenderTarget = r.ObjectRenderer = r.WebGLManager = r.Shader = r.TextureUvs = r.VideoBaseTexture = r.BaseRenderTexture = r.RenderTexture = r.BaseTexture = r.TextureMatrix = r.Texture = r.Spritesheet = r.GraphicsRenderer = r.GraphicsData = r.Graphics = r.TextMetrics = r.TextStyle = r.Text = r.SpriteRenderer = r.Sprite = r.TransformBase = r.TransformStatic = r.Transform = r.Container = r.DisplayObject = r.Bounds = r.glCore = r.WebGLRenderer = r.ticker = r.utils = r.settings = void 0;
      var o = t("./const");
      Object.keys(o).forEach((function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
          enumerable: !0,
          get: function() {
            return o[t]
          }
        })
      }));
      var s = t("./math");
      Object.keys(s).forEach((function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
          enumerable: !0,
          get: function() {
            return s[t]
          }
        })
      }));
      var a = t("pixi-gl-core");
      Object.defineProperty(r, "glCore", {
        enumerable: !0,
        get: function() {
          return n(a).default
        }
      });
      var u = t("./display/Bounds");
      Object.defineProperty(r, "Bounds", {
        enumerable: !0,
        get: function() {
          return n(u).default
        }
      });
      var h = t("./display/DisplayObject");
      Object.defineProperty(r, "DisplayObject", {
        enumerable: !0,
        get: function() {
          return n(h).default
        }
      });
      var l = t("./display/Container");
      Object.defineProperty(r, "Container", {
        enumerable: !0,
        get: function() {
          return n(l).default
        }
      });
      var c = t("./display/Transform");
      Object.defineProperty(r, "Transform", {
        enumerable: !0,
        get: function() {
          return n(c).default
        }
      });
      var f = t("./display/TransformStatic");
      Object.defineProperty(r, "TransformStatic", {
        enumerable: !0,
        get: function() {
          return n(f).default
        }
      });
      var d = t("./display/TransformBase");
      Object.defineProperty(r, "TransformBase", {
        enumerable: !0,
        get: function() {
          return n(d).default
        }
      });
      var p = t("./sprites/Sprite");
      Object.defineProperty(r, "Sprite", {
        enumerable: !0,
        get: function() {
          return n(p).default
        }
      });
      var y = t("./sprites/webgl/SpriteRenderer");
      Object.defineProperty(r, "SpriteRenderer", {
        enumerable: !0,
        get: function() {
          return n(y).default
        }
      });
      var v = t("./text/Text");
      Object.defineProperty(r, "Text", {
        enumerable: !0,
        get: function() {
          return n(v).default
        }
      });
      var g = t("./text/TextStyle");
      Object.defineProperty(r, "TextStyle", {
        enumerable: !0,
        get: function() {
          return n(g).default
        }
      });
      var _ = t("./text/TextMetrics");
      Object.defineProperty(r, "TextMetrics", {
        enumerable: !0,
        get: function() {
          return n(_).default
        }
      });
      var m = t("./graphics/Graphics");
      Object.defineProperty(r, "Graphics", {
        enumerable: !0,
        get: function() {
          return n(m).default
        }
      });
      var x = t("./graphics/GraphicsData");
      Object.defineProperty(r, "GraphicsData", {
        enumerable: !0,
        get: function() {
          return n(x).default
        }
      });
      var b = t("./graphics/webgl/GraphicsRenderer");
      Object.defineProperty(r, "GraphicsRenderer", {
        enumerable: !0,
        get: function() {
          return n(b).default
        }
      });
      var T = t("./textures/Spritesheet");
      Object.defineProperty(r, "Spritesheet", {
        enumerable: !0,
        get: function() {
          return n(T).default
        }
      });
      var w = t("./textures/Texture");
      Object.defineProperty(r, "Texture", {
        enumerable: !0,
        get: function() {
          return n(w).default
        }
      });
      var E = t("./textures/TextureMatrix");
      Object.defineProperty(r, "TextureMatrix", {
        enumerable: !0,
        get: function() {
          return n(E).default
        }
      });
      var O = t("./textures/BaseTexture");
      Object.defineProperty(r, "BaseTexture", {
        enumerable: !0,
        get: function() {
          return n(O).default
        }
      });
      var S = t("./textures/RenderTexture");
      Object.defineProperty(r, "RenderTexture", {
        enumerable: !0,
        get: function() {
          return n(S).default
        }
      });
      var M = t("./textures/BaseRenderTexture");
      Object.defineProperty(r, "BaseRenderTexture", {
        enumerable: !0,
        get: function() {
          return n(M).default
        }
      });
      var P = t("./textures/VideoBaseTexture");
      Object.defineProperty(r, "VideoBaseTexture", {
        enumerable: !0,
        get: function() {
          return n(P).default
        }
      });
      var C = t("./textures/TextureUvs");
      Object.defineProperty(r, "TextureUvs", {
        enumerable: !0,
        get: function() {
          return n(C).default
        }
      });
      var A = t("./Shader");
      Object.defineProperty(r, "Shader", {
        enumerable: !0,
        get: function() {
          return n(A).default
        }
      });
      var R = t("./renderers/webgl/managers/WebGLManager");
      Object.defineProperty(r, "WebGLManager", {
        enumerable: !0,
        get: function() {
          return n(R).default
        }
      });
      var D = t("./renderers/webgl/utils/ObjectRenderer");
      Object.defineProperty(r, "ObjectRenderer", {
        enumerable: !0,
        get: function() {
          return n(D).default
        }
      });
      var I = t("./renderers/webgl/utils/RenderTarget");
      Object.defineProperty(r, "RenderTarget", {
        enumerable: !0,
        get: function() {
          return n(I).default
        }
      });
      var L = t("./renderers/webgl/utils/Quad");
      Object.defineProperty(r, "Quad", {
        enumerable: !0,
        get: function() {
          return n(L).default
        }
      });
      var k = t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");
      Object.defineProperty(r, "SpriteMaskFilter", {
        enumerable: !0,
        get: function() {
          return n(k).default
        }
      });
      var B = t("./renderers/webgl/filters/Filter");
      Object.defineProperty(r, "Filter", {
        enumerable: !0,
        get: function() {
          return n(B).default
        }
      });
      var j = t("./Application");
      Object.defineProperty(r, "Application", {
        enumerable: !0,
        get: function() {
          return n(j).default
        }
      });
      var N = t("./autoDetectRenderer");
      Object.defineProperty(r, "autoDetectRenderer", {
        enumerable: !0,
        get: function() {
          return N.autoDetectRenderer
        }
      });
      var F = i(t("./utils")),
        U = i(t("./ticker")),
        X = n(t("./settings")),
        G = n(t("./renderers/webgl/WebGLRenderer"));
      r.settings = X.default, r.utils = F, r.ticker = U, r.WebGLRenderer = G.default
    }, {
      "./Application": 39,
      "./Shader": 40,
      "./autoDetectRenderer": 41,
      "./const": 42,
      "./display/Bounds": 43,
      "./display/Container": 44,
      "./display/DisplayObject": 45,
      "./display/Transform": 46,
      "./display/TransformBase": 47,
      "./display/TransformStatic": 48,
      "./graphics/Graphics": 49,
      "./graphics/GraphicsData": 50,
      "./graphics/webgl/GraphicsRenderer": 52,
      "./math": 65,
      "./renderers/webgl/WebGLRenderer": 74,
      "./renderers/webgl/filters/Filter": 76,
      "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 79,
      "./renderers/webgl/managers/WebGLManager": 83,
      "./renderers/webgl/utils/ObjectRenderer": 84,
      "./renderers/webgl/utils/Quad": 85,
      "./renderers/webgl/utils/RenderTarget": 86,
      "./settings": 91,
      "./sprites/Sprite": 92,
      "./sprites/webgl/SpriteRenderer": 94,
      "./text/Text": 96,
      "./text/TextMetrics": 97,
      "./text/TextStyle": 98,
      "./textures/BaseRenderTexture": 99,
      "./textures/BaseTexture": 100,
      "./textures/RenderTexture": 101,
      "./textures/Spritesheet": 102,
      "./textures/Texture": 103,
      "./textures/TextureMatrix": 104,
      "./textures/TextureUvs": 105,
      "./textures/VideoBaseTexture": 106,
      "./ticker": 109,
      "./utils": 113,
      "pixi-gl-core": 14
    }],
    61: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
      }
      r.__esModule = !0;
      var n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Matrix")),
        o = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        s = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        a = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        u = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        h = [],
        l = [];
      ! function() {
        for (var t = 0; t < 16; t++) {
          var e = [];
          l.push(e);
          for (var r = 0; r < 16; r++)
            for (var c = i(o[t] * o[r] + a[t] * s[r]), f = i(s[t] * o[r] + u[t] * s[r]), d = i(o[t] * a[r] + a[t] * u[r]), p = i(s[t] * a[r] + u[t] * u[r]), y = 0; y < 16; y++)
              if (o[y] === c && s[y] === f && a[y] === d && u[y] === p) {
                e.push(y);
                break
              }
        }
        for (var v = 0; v < 16; v++) {
          var g = new n.default;
          g.set(o[v], s[v], a[v], u[v], 0, 0), h.push(g)
        }
      }();
      var c = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MIRROR_HORIZONTAL: 12,
        uX: function(t) {
          return o[t]
        },
        uY: function(t) {
          return s[t]
        },
        vX: function(t) {
          return a[t]
        },
        vY: function(t) {
          return u[t]
        },
        inv: function(t) {
          return 8 & t ? 15 & t : 7 & -t
        },
        add: function(t, e) {
          return l[t][e]
        },
        sub: function(t, e) {
          return l[t][c.inv(e)]
        },
        rotate180: function(t) {
          return 4 ^ t
        },
        isVertical: function(t) {
          return 2 == (3 & t)
        },
        byDirection: function(t, e) {
          return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? c.S : c.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? c.E : c.W : e > 0 ? t > 0 ? c.SE : c.SW : t > 0 ? c.NE : c.NW
        },
        matrixAppendRotationInv: function(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            n = h[c.inv(e)];
          n.tx = r, n.ty = i, t.append(n)
        }
      };
      r.default = c
    }, {
      "./Matrix": 62
    }],
    62: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Point")),
        o = t("../const"),
        s = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
              o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.a = e, this.b = r, this.c = i, this.d = n, this.tx = o, this.ty = s, this.array = null
          }
          return t.prototype.fromArray = function(t) {
            this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
          }, t.prototype.set = function(t, e, r, i, n, o) {
            return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this
          }, t.prototype.toArray = function(t, e) {
            this.array || (this.array = new Float32Array(9));
            var r = e || this.array;
            return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
          }, t.prototype.apply = function(t, e) {
            e = e || new n.default;
            var r = t.x,
              i = t.y;
            return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
          }, t.prototype.applyInverse = function(t, e) {
            e = e || new n.default;
            var r = 1 / (this.a * this.d + this.c * -this.b),
              i = r * t.x,
              o = r * t.y;
            return e.x = this.d * i + -this.c * o + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * o + -this.b * i + (-this.ty * this.a + this.tx * this.b) * r, e
          }, t.prototype.translate = function(t, e) {
            return this.tx += t, this.ty += e, this
          }, t.prototype.scale = function(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
          }, t.prototype.rotate = function(t) {
            var e = Math.cos(t),
              r = Math.sin(t),
              i = this.a,
              n = this.c,
              o = this.tx;
            return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
          }, t.prototype.append = function(t) {
            var e = this.a,
              r = this.b,
              i = this.c,
              n = this.d;
            return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
          }, t.prototype.setTransform = function(t, e, r, i, n, o, s, a, u) {
            return this.a = Math.cos(s + u) * n, this.b = Math.sin(s + u) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + i * this.c), this.ty = e - (r * this.b + i * this.d), this
          }, t.prototype.prepend = function(t) {
            var e = this.tx;
            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
              var r = this.a,
                i = this.c;
              this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
            }
            return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
          }, t.prototype.decompose = function(t) {
            var e = this.a,
              r = this.b,
              i = this.c,
              n = this.d,
              s = -Math.atan2(-i, n),
              a = Math.atan2(r, e),
              u = Math.abs(s + a);
            return u < 1e-5 || Math.abs(o.PI_2 - u) < 1e-5 ? (t.rotation = a, e < 0 && n >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = s, t.skew.y = a), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx, t.position.y = this.ty, t
          }, t.prototype.invert = function() {
            var t = this.a,
              e = this.b,
              r = this.c,
              i = this.d,
              n = this.tx,
              o = t * i - e * r;
            return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
          }, t.prototype.identity = function() {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
          }, t.prototype.clone = function() {
            var e = new t;
            return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
          }, t.prototype.copy = function(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
          }, i(t, null, [{
            key: "IDENTITY",
            get: function() {
              return new t
            }
          }, {
            key: "TEMP_MATRIX",
            get: function() {
              return new t
            }
          }]), t
        }();
      r.default = s
    }, {
      "../const": 42,
      "./Point": 64
    }],
    63: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function() {
          function t(e, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this._x = i, this._y = n, this.cb = e, this.scope = r
          }
          return t.prototype.clone = function() {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return new t((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null) || this.cb, e || this.scope, this._x, this._y)
          }, t.prototype.set = function(t, e) {
            var r = t || 0,
              i = e || (0 !== e ? r : 0);
            this._x === r && this._y === i || (this._x = r, this._y = i, this.cb.call(this.scope))
          }, t.prototype.copy = function(t) {
            this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
          }, t.prototype.equals = function(t) {
            return t.x === this._x && t.y === this._y
          }, i(t, [{
            key: "x",
            get: function() {
              return this._x
            },
            set: function(t) {
              this._x !== t && (this._x = t, this.cb.call(this.scope))
            }
          }, {
            key: "y",
            get: function() {
              return this._y
            },
            set: function(t) {
              this._y !== t && (this._y = t, this.cb.call(this.scope))
            }
          }]), t
        }();
      r.default = n
    }, {}],
    64: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.x = e, this.y = r
        }
        return t.prototype.clone = function() {
          return new t(this.x, this.y)
        }, t.prototype.copy = function(t) {
          this.set(t.x, t.y)
        }, t.prototype.equals = function(t) {
          return t.x === this.x && t.y === this.y
        }, t.prototype.set = function(t, e) {
          this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
        }, t
      }();
      r.default = i
    }, {}],
    65: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("./Point");
      Object.defineProperty(r, "Point", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./ObservablePoint");
      Object.defineProperty(r, "ObservablePoint", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      });
      var s = t("./Matrix");
      Object.defineProperty(r, "Matrix", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("./GroupD8");
      Object.defineProperty(r, "GroupD8", {
        enumerable: !0,
        get: function() {
          return i(a).default
        }
      });
      var u = t("./shapes/Circle");
      Object.defineProperty(r, "Circle", {
        enumerable: !0,
        get: function() {
          return i(u).default
        }
      });
      var h = t("./shapes/Ellipse");
      Object.defineProperty(r, "Ellipse", {
        enumerable: !0,
        get: function() {
          return i(h).default
        }
      });
      var l = t("./shapes/Polygon");
      Object.defineProperty(r, "Polygon", {
        enumerable: !0,
        get: function() {
          return i(l).default
        }
      });
      var c = t("./shapes/Rectangle");
      Object.defineProperty(r, "Rectangle", {
        enumerable: !0,
        get: function() {
          return i(c).default
        }
      });
      var f = t("./shapes/RoundedRectangle");
      Object.defineProperty(r, "RoundedRectangle", {
        enumerable: !0,
        get: function() {
          return i(f).default
        }
      })
    }, {
      "./GroupD8": 61,
      "./Matrix": 62,
      "./ObservablePoint": 63,
      "./Point": 64,
      "./shapes/Circle": 66,
      "./shapes/Ellipse": 67,
      "./shapes/Polygon": 68,
      "./shapes/Rectangle": 69,
      "./shapes/RoundedRectangle": 70
    }],
    66: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Rectangle")),
        n = t("../../const"),
        o = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.x = e, this.y = r, this.radius = i, this.type = n.SHAPES.CIRC
          }
          return t.prototype.clone = function() {
            return new t(this.x, this.y, this.radius)
          }, t.prototype.contains = function(t, e) {
            if (this.radius <= 0) return !1;
            var r = this.radius * this.radius,
              i = this.x - t,
              n = this.y - e;
            return (i *= i) + (n *= n) <= r
          }, t.prototype.getBounds = function() {
            return new i.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
          }, t
        }();
      r.default = o
    }, {
      "../../const": 42,
      "./Rectangle": 69
    }],
    67: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Rectangle")),
        n = t("../../const"),
        o = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.x = e, this.y = r, this.width = i, this.height = o, this.type = n.SHAPES.ELIP
          }
          return t.prototype.clone = function() {
            return new t(this.x, this.y, this.width, this.height)
          }, t.prototype.contains = function(t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var r = (t - this.x) / this.width,
              i = (e - this.y) / this.height;
            return (r *= r) + (i *= i) <= 1
          }, t.prototype.getBounds = function() {
            return new i.default(this.x - this.width, this.y - this.height, this.width, this.height)
          }, t
        }();
      r.default = o
    }, {
      "../../const": 42,
      "./Rectangle": 69
    }],
    68: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../Point")),
        n = t("../../const"),
        o = function() {
          function t() {
            for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), Array.isArray(r[0]) && (r = r[0]), r[0] instanceof i.default) {
              for (var s = [], a = 0, u = r.length; a < u; a++) s.push(r[a].x, r[a].y);
              r = s
            }
            this.closed = !0, this.points = r, this.type = n.SHAPES.POLY
          }
          return t.prototype.clone = function() {
            return new t(this.points.slice())
          }, t.prototype.close = function() {
            var t = this.points;
            t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
          }, t.prototype.contains = function(t, e) {
            for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
              var s = this.points[2 * n],
                a = this.points[2 * n + 1],
                u = this.points[2 * o],
                h = this.points[2 * o + 1];
              a > e != h > e && t < (e - a) / (h - a) * (u - s) + s && (r = !r)
            }
            return r
          }, t
        }();
      r.default = o
    }, {
      "../../const": 42,
      "../Point": 64
    }],
    69: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = t("../../const"),
        o = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.x = Number(e), this.y = Number(r), this.width = Number(i), this.height = Number(o), this.type = n.SHAPES.RECT
          }
          return t.prototype.clone = function() {
            return new t(this.x, this.y, this.width, this.height)
          }, t.prototype.copy = function(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
          }, t.prototype.contains = function(t, e) {
            return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
          }, t.prototype.pad = function(t, e) {
            t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
          }, t.prototype.fit = function(t) {
            var e = Math.max(this.x, t.x),
              r = Math.min(this.x + this.width, t.x + t.width),
              i = Math.max(this.y, t.y),
              n = Math.min(this.y + this.height, t.y + t.height);
            this.x = e, this.width = Math.max(r - e, 0), this.y = i, this.height = Math.max(n - i, 0)
          }, t.prototype.enlarge = function(t) {
            var e = Math.min(this.x, t.x),
              r = Math.max(this.x + this.width, t.x + t.width),
              i = Math.min(this.y, t.y),
              n = Math.max(this.y + this.height, t.y + t.height);
            this.x = e, this.width = r - e, this.y = i, this.height = n - i
          }, i(t, [{
            key: "left",
            get: function() {
              return this.x
            }
          }, {
            key: "right",
            get: function() {
              return this.x + this.width
            }
          }, {
            key: "top",
            get: function() {
              return this.y
            }
          }, {
            key: "bottom",
            get: function() {
              return this.y + this.height
            }
          }], [{
            key: "EMPTY",
            get: function() {
              return new t(0, 0, 0, 0)
            }
          }]), t
        }();
      r.default = o
    }, {
      "../../const": 42
    }],
    70: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("../../const"),
        n = function() {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
              s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.x = e, this.y = r, this.width = n, this.height = o, this.radius = s, this.type = i.SHAPES.RREC
          }
          return t.prototype.clone = function() {
            return new t(this.x, this.y, this.width, this.height, this.radius)
          }, t.prototype.contains = function(t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
              if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
              var r = t - (this.x + this.radius),
                i = e - (this.y + this.radius),
                n = this.radius * this.radius;
              if (r * r + i * i <= n) return !0;
              if ((r = t - (this.x + this.width - this.radius)) * r + i * i <= n) return !0;
              if (r * r + (i = e - (this.y + this.height - this.radius)) * i <= n) return !0;
              if ((r = t - (this.x + this.radius)) * r + i * i <= n) return !0
            }
            return !1
          }, t
        }();
      r.default = n
    }, {
      "../../const": 42
    }],
    71: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = t("../utils"),
        s = t("../math"),
        a = t("../const"),
        u = i(t("../settings")),
        h = i(t("../display/Container")),
        l = i(t("../textures/RenderTexture")),
        c = i(t("eventemitter3")),
        f = new s.Matrix,
        d = function(t) {
          function e(r, i, n, o) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var l = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return "number" == typeof i && (i = Object.assign({
              width: i,
              height: n || u.default.RENDER_OPTIONS.height
            }, o)), i = Object.assign({}, u.default.RENDER_OPTIONS, i), l.options = i, l.type = a.RENDERER_TYPE.UNKNOWN, l.screen = new s.Rectangle(0, 0, i.width, i.height), l.view = i.view || document.createElement("canvas"), l.resolution = i.resolution || u.default.RESOLUTION, l.transparent = i.transparent || !1, l.autoResize = i.autoResize || !1, l.blendModes = null, l.preserveDrawingBuffer = i.preserveDrawingBuffer || !1, l.clearBeforeRender = i.clearBeforeRender, l.roundPixels = i.roundPixels, l._backgroundColor = 0, l._backgroundColorRgba = [0, 0, 0, 0], l._backgroundColorString = "#000000", l.backgroundColor = i.backgroundColor || l._backgroundColor, l._tempDisplayObjectParent = new h.default, l._lastObjectRendered = l._tempDisplayObjectParent, l
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.resize = function(t, e) {
            this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoResize && (this.view.style.width = t + "px", this.view.style.height = e + "px")
          }, e.prototype.generateTexture = function(t, e, r, i) {
            i = i || t.getLocalBounds();
            var n = l.default.create(0 | i.width, 0 | i.height, e, r);
            return f.tx = -i.x, f.ty = -i.y, this.render(t, n, !1, f, !!t.parent), n
          }, e.prototype.destroy = function(t) {
            t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = a.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
          }, n(e, [{
            key: "width",
            get: function() {
              return this.view.width
            }
          }, {
            key: "height",
            get: function() {
              return this.view.height
            }
          }, {
            key: "backgroundColor",
            get: function() {
              return this._backgroundColor
            },
            set: function(t) {
              this._backgroundColor = t, this._backgroundColorString = (0, o.hex2string)(t), (0, o.hex2rgb)(t, this._backgroundColorRgba)
            }
          }]), e
        }(c.default);
      r.default = d
    }, {
      "../const": 42,
      "../display/Container": 44,
      "../math": 65,
      "../settings": 91,
      "../textures/RenderTexture": 101,
      "../utils": 113,
      eventemitter3: 3
    }],
    72: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("../../const"),
        n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../../settings")),
        o = function() {
          function t(e) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = n.default.GC_MAX_IDLE, this.checkCountMax = n.default.GC_MAX_CHECK_COUNT, this.mode = n.default.GC_MODE
          }
          return t.prototype.update = function() {
            this.count++, this.mode !== i.GC_MODES.MANUAL && ++this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())
          }, t.prototype.run = function() {
            for (var t = this.renderer.textureManager, e = t._managedTextures, r = !1, i = 0; i < e.length; i++) {
              var n = e[i];
              !n._glRenderTargets && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0)
            }
            if (r) {
              for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
              e.length = o
            }
          }, t.prototype.unload = function(t) {
            var e = this.renderer.textureManager;
            t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
            for (var r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
          }, t
        }();
      r.default = o
    }, {
      "../../const": 42,
      "../../settings": 91
    }],
    73: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("pixi-gl-core"),
        n = t("../../const"),
        o = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./utils/RenderTarget")),
        s = t("../../utils"),
        a = function() {
          function t(e) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.renderer = e, this.gl = e.gl, this._managedTextures = []
          }
          return t.prototype.bindTexture = function() {}, t.prototype.getTexture = function() {}, t.prototype.updateTexture = function(t, e) {
            var r = this.gl,
              s = !!t._glRenderTargets;
            if (!t.hasLoaded) return null;
            var a = this.renderer.boundTextures;
            if (void 0 === e) {
              e = 0;
              for (var u = 0; u < a.length; ++u)
                if (a[u] === t) {
                  e = u;
                  break
                }
            }
            a[e] = t, r.activeTexture(r.TEXTURE0 + e);
            var h = t._glTextures[this.renderer.CONTEXT_UID];
            if (h) s ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : h.upload(t.source);
            else {
              if (s) {
                var l = new o.default(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                l.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = l, h = l.texture
              } else(h = new i.GLTexture(this.gl, null, null, null, null)).bind(e), h.premultiplyAlpha = !0, h.upload(t.source);
              t._glTextures[this.renderer.CONTEXT_UID] = h, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && h.enableMipmap(), t.wrapMode === n.WRAP_MODES.CLAMP ? h.enableWrapClamp() : t.wrapMode === n.WRAP_MODES.REPEAT ? h.enableWrapRepeat() : h.enableWrapMirrorRepeat()) : h.enableWrapClamp(), t.scaleMode === n.SCALE_MODES.NEAREST ? h.enableNearestScaling() : h.enableLinearScaling()
            }
            return h
          }, t.prototype.destroyTexture = function(t, e) {
            if ((t = t.baseTexture || t).hasLoaded) {
              var r = this.renderer.CONTEXT_UID,
                i = t._glTextures,
                n = t._glRenderTargets;
              if (i[r] && (this.renderer.unbindTexture(t), i[r].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete i[r], !e)) {
                var o = this._managedTextures.indexOf(t); - 1 !== o && (0, s.removeItems)(this._managedTextures, o, 1)
              }
              n && n[r] && (n[r].destroy(), delete n[r])
            }
          }, t.prototype.removeAll = function() {
            for (var t = 0; t < this._managedTextures.length; ++t) {
              var e = this._managedTextures[t];
              e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
            }
          }, t.prototype.destroy = function() {
            for (var t = 0; t < this._managedTextures.length; ++t) {
              var e = this._managedTextures[t];
              this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
            }
            this._managedTextures = null
          }, t
        }();
      r.default = a
    }, {
      "../../const": 42,
      "../../utils": 113,
      "./utils/RenderTarget": 86,
      "pixi-gl-core": 14
    }],
    74: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("../SystemRenderer")),
        o = i(t("./managers/MaskManager")),
        s = i(t("./managers/StencilManager")),
        a = i(t("./managers/FilterManager")),
        u = i(t("./utils/RenderTarget")),
        h = i(t("./utils/ObjectRenderer")),
        l = i(t("./TextureManager")),
        c = i(t("../../textures/BaseTexture")),
        f = i(t("./TextureGarbageCollector")),
        d = i(t("./WebGLState")),
        p = i(t("./utils/mapWebGLDrawModesToPixi")),
        y = i(t("./utils/validateContext")),
        v = t("../../utils"),
        g = i(t("pixi-gl-core")),
        _ = t("../../const"),
        m = i(t("../../../core/settings")),
        x = 0,
        b = function(t) {
          function e(r, i, n) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "WebGL", r, i, n));
            return a.legacy = a.options.legacy, a.legacy && (g.default.VertexArrayObject.FORCE_NATIVE = !0), a.type = _.RENDERER_TYPE.WEBGL, a.handleContextLost = a.handleContextLost.bind(a), a.handleContextRestored = a.handleContextRestored.bind(a), a.view.addEventListener("webglcontextlost", a.handleContextLost, !1), a.view.addEventListener("webglcontextrestored", a.handleContextRestored, !1), a._contextOptions = {
              alpha: a.transparent,
              antialias: a.options.antialias,
              premultipliedAlpha: a.transparent && "notMultiplied" !== a.transparent,
              stencil: !0,
              preserveDrawingBuffer: a.options.preserveDrawingBuffer,
              powerPreference: a.options.powerPreference
            }, a._backgroundColorRgba[3] = a.transparent ? 0 : 1, a.maskManager = new o.default(a), a.stencilManager = new s.default(a), a.emptyRenderer = new h.default(a), a.currentRenderer = a.emptyRenderer, a.textureManager = null, a.filterManager = null, a.initPlugins(), a.options.context && (0, y.default)(a.options.context), a.gl = a.options.context || g.default.createContext(a.view, a._contextOptions), a.CONTEXT_UID = x++, a.state = new d.default(a.gl), a.renderingToScreen = !0, a.boundTextures = null, a._activeShader = null, a._activeVao = null, a._activeRenderTarget = null, a._initContext(), a.drawModes = (0, p.default)(a.gl), a._nextTextureLocation = 0, a.setBlendMode(0), a
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._initContext = function() {
            var t = this.gl;
            if (t.isContextLost()) {
              var e = t.getExtension("WEBGL_lose_context");
              e && e.restoreContext && e.restoreContext()
            }
            var r = Math.min(m.default.MAX_TEXTURES, t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));
            r < 4 && (r = 4), this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(r), this.emptyTextures = new Array(r), this.textureManager = new l.default(this), this.filterManager = new a.default(this), this.textureGC = new f.default(this), this.state.resetToDefault(), this.rootRenderTarget = new u.default(t, this.width, this.height, null, this.resolution, !0), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
            var i = new g.default.GLTexture.fromData(t, null, 1, 1),
              n = {
                _glTextures: {}
              };
            n._glTextures[this.CONTEXT_UID] = {};
            for (var o = 0; o < r; o++) {
              var s = new c.default;
              s._glTextures[this.CONTEXT_UID] = i, this.boundTextures[o] = n, this.emptyTextures[o] = s, this.bindTexture(null, o)
            }
            this.emit("context", t), this.resize(this.screen.width, this.screen.height)
          }, e.prototype.render = function(t, e, r, i, n) {
            if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
              if (this._nextTextureLocation = 0, e || (this._lastObjectRendered = t), !n) {
                var o = t.parent;
                t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
              }
              this.bindRenderTexture(e, i), this.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
            }
          }, e.prototype.setObjectRenderer = function(t) {
            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
          }, e.prototype.flush = function() {
            this.setObjectRenderer(this.emptyRenderer)
          }, e.prototype.resize = function(t, e) {
            n.default.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
          }, e.prototype.setBlendMode = function(t) {
            this.state.setBlendMode(t)
          }, e.prototype.clear = function(t) {
            this._activeRenderTarget.clear(t)
          }, e.prototype.setTransform = function(t) {
            this._activeRenderTarget.transform = t
          }, e.prototype.clearRenderTexture = function(t, e) {
            var r = t.baseTexture._glRenderTargets[this.CONTEXT_UID];
            return r && r.clear(e), this
          }, e.prototype.bindRenderTexture = function(t, e) {
            var r = void 0;
            if (t) {
              var i = t.baseTexture;
              i._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(i, 0), this.unbindTexture(i), (r = i._glRenderTargets[this.CONTEXT_UID]).setFrame(t.frame)
            } else r = this.rootRenderTarget;
            return r.transform = e, this.bindRenderTarget(r), this
          }, e.prototype.bindRenderTarget = function(t) {
            return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
          }, e.prototype.bindShader = function(t, e) {
            return this._activeShader !== t && (this._activeShader = t, t.bind(), !1 !== e && (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), this
          }, e.prototype.bindTexture = function(t, e, r) {
            if ((t = (t = t || this.emptyTextures[e]).baseTexture || t).touched = this.textureGC.count, r) e = e || 0;
            else {
              for (var i = 0; i < this.boundTextures.length; i++)
                if (this.boundTextures[i] === t) return i;
              void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, e = this.boundTextures.length - this._nextTextureLocation - 1)
            }
            var n = this.gl,
              o = t._glTextures[this.CONTEXT_UID];
            return o ? (this.boundTextures[e] = t, n.activeTexture(n.TEXTURE0 + e), n.bindTexture(n.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t, e), e
          }, e.prototype.unbindTexture = function(t) {
            var e = this.gl;
            t = t.baseTexture || t;
            for (var r = 0; r < this.boundTextures.length; r++) this.boundTextures[r] === t && (this.boundTextures[r] = this.emptyTextures[r], e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
            return this
          }, e.prototype.createVao = function() {
            return new g.default.VertexArrayObject(this.gl, this.state.attribState)
          }, e.prototype.bindVao = function(t) {
            return this._activeVao === t || (t ? t.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = t), this
          }, e.prototype.reset = function() {
            this.setObjectRenderer(this.emptyRenderer), this.bindVao(null), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget;
            for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.emptyTextures[t];
            return this.rootRenderTarget.activate(), this.state.resetToDefault(), this
          }, e.prototype.handleContextLost = function(t) {
            t.preventDefault()
          }, e.prototype.handleContextRestored = function() {
            this.textureManager.removeAll(), this.filterManager.destroy(!0), this._initContext()
          }, e.prototype.destroy = function(e) {
            this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), t.prototype.destroy.call(this, e), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
          }, e
        }(n.default);
      r.default = b, v.pluginTarget.mixin(b)
    }, {
      "../../../core/settings": 91,
      "../../const": 42,
      "../../textures/BaseTexture": 100,
      "../../utils": 113,
      "../SystemRenderer": 71,
      "./TextureGarbageCollector": 72,
      "./TextureManager": 73,
      "./WebGLState": 75,
      "./managers/FilterManager": 80,
      "./managers/MaskManager": 81,
      "./managers/StencilManager": 82,
      "./utils/ObjectRenderer": 84,
      "./utils/RenderTarget": 86,
      "./utils/mapWebGLDrawModesToPixi": 89,
      "./utils/validateContext": 90,
      "pixi-gl-core": 14
    }],
    75: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("./utils/mapWebGLBlendModesToPixi")),
        o = i(t("../../../core/settings")),
        s = function() {
          function t(e) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = e, this.maxAttribs = Math.min(o.default.MAX_VERTEX_ATTRIBS, e.getParameter(e.MAX_VERTEX_ATTRIBS)), this.maxAttribs < 8 && (this.maxAttribs = 8), this.attribState = {
              tempAttribState: new Array(this.maxAttribs),
              attribState: new Array(this.maxAttribs)
            }, this.blendModes = (0, n.default)(e), o.default.isLittleGame || (this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"))
          }
          return t.prototype.push = function() {
            var t = this.stack[this.stackIndex];
            t || (t = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
            for (var e = 0; e < this.activeState.length; e++) t[e] = this.activeState[e]
          }, t.prototype.pop = function() {
            var t = this.stack[--this.stackIndex];
            this.setState(t)
          }, t.prototype.setState = function(t) {
            this.setBlend(t[0]), this.setDepthTest(t[1]), this.setFrontFace(t[2]), this.setCullFace(t[3]), this.setBlendMode(t[4])
          }, t.prototype.setBlend = function(t) {
            t = t ? 1 : 0, this.activeState[0] !== t && (this.activeState[0] = t, this.gl[t ? "enable" : "disable"](this.gl.BLEND))
          }, t.prototype.setBlendMode = function(t) {
            if (t !== this.activeState[4]) {
              this.activeState[4] = t;
              var e = this.blendModes[t];
              2 === e.length ? this.gl.blendFunc(e[0], e[1]) : this.gl.blendFuncSeparate(e[0], e[1], e[2], e[3])
            }
          }, t.prototype.setDepthTest = function(t) {
            t = t ? 1 : 0, this.activeState[1] !== t && (this.activeState[1] = t, this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST))
          }, t.prototype.setCullFace = function(t) {
            t = t ? 1 : 0, this.activeState[3] !== t && (this.activeState[3] = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE))
          }, t.prototype.setFrontFace = function(t) {
            t = t ? 1 : 0, this.activeState[2] !== t && (this.activeState[2] = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]))
          }, t.prototype.resetAttributes = function() {
            for (var t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
            for (var e = 0; e < this.attribState.attribState.length; e++) this.attribState.attribState[e] = 0;
            for (var r = 1; r < this.maxAttribs; r++) this.gl.disableVertexAttribArray(r)
          }, t.prototype.resetToDefault = function() {
            this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
            for (var t = 0; t < this.activeState.length; ++t) this.activeState[t] = 32;
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
          }, t
        }();
      r.default = s
    }, {
      "../../../core/settings": 91,
      "./utils/mapWebGLBlendModesToPixi": 88
    }],
    76: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = i(t("./extractUniformsFromSrc")),
        s = t("../../../utils"),
        a = t("../../../const"),
        u = i(t("../../../settings")),
        h = {},
        l = function() {
          function t(e, r, i) {
            for (var n in function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this._blendMode = a.BLEND_MODES.NORMAL, this.uniformData = i || (0, o.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {}, this.uniformData) this.uniforms[n] = this.uniformData[n].value, this.uniformData[n].type && (this.uniformData[n].type = this.uniformData[n].type.toLowerCase());
            this.glShaders = {}, h[this.vertexSrc + this.fragmentSrc] || (h[this.vertexSrc + this.fragmentSrc] = (0, s.uid)()), this.glShaderKey = h[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = u.default.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0
          }
          return t.prototype.apply = function(t, e, r, i, n) {
            t.applyFilter(this, e, r, i)
          }, n(t, [{
            key: "blendMode",
            get: function() {
              return this._blendMode
            },
            set: function(t) {
              this._blendMode = t
            }
          }], [{
            key: "defaultVertexSrc",
            get: function() {
              return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
            }
          }, {
            key: "defaultFragmentSrc",
            get: function() {
              return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
            }
          }]), t
        }();
      r.default = l
    }, {
      "../../../const": 42,
      "../../../settings": 91,
      "../../../utils": 113,
      "./extractUniformsFromSrc": 77
    }],
    77: [function(t, e, r) {
      "use strict";

      function i(t) {
        for (var e = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), r = {}, i = void 0, o = t.replace(/\s+/g, " ").split(/\s*;\s*/), s = 0; s < o.length; s++) {
          var a = o[s].trim();
          if (a.indexOf("uniform") > -1) {
            var u = a.split(" "),
              h = u[1],
              l = u[2],
              c = 1;
            l.indexOf("[") > -1 && (i = l.split(/\[|]/), l = i[0], c *= Number(i[1])), l.match(e) || (r[l] = {
              value: n(h, c),
              name: l,
              type: h
            })
          }
        }
        return r
      }
      r.__esModule = !0, r.default = function(t, e, r) {
        var n = i(t),
          o = i(e);
        return Object.assign(n, o)
      };
      var n = function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("pixi-gl-core")).default.shader.defaultValue
    }, {
      "pixi-gl-core": 14
    }],
    78: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.calculateScreenSpaceMatrix = function(t, e, r) {
        var i = t.identity();
        return i.translate(e.x / r.width, e.y / r.height), i.scale(r.width, r.height), i
      }, r.calculateNormalizedScreenSpaceMatrix = function(t, e, r) {
        var i = t.identity();
        i.translate(e.x / r.width, e.y / r.height);
        var n = r.width / e.width,
          o = r.height / e.height;
        return i.scale(n, o), i
      }, r.calculateSpriteMatrix = function(t, e, r, n) {
        var o = n._texture.orig,
          s = t.set(r.width, 0, 0, r.height, e.x, e.y),
          a = n.worldTransform.copy(i.Matrix.TEMP_MATRIX);
        return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(n.anchor.x, n.anchor.y), s
      };
      var i = t("../../../math")
    }, {
      "../../../math": 65
    }],
    79: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("../Filter")),
        o = t("../../../../math"),
        s = i((t("path"), t("../../../../textures/TextureMatrix"))),
        a = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = new o.Matrix,
              n = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\nvoid main(void){\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n"));
            return r.renderable = !1, n.maskSprite = r, n.maskMatrix = i, n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.apply = function(t, e, r) {
            var i = this.maskSprite,
              n = this.maskSprite.texture;
            n.valid && (n.transform || (n.transform = new s.default(n, 0)), n.transform.update(), this.uniforms.mask = n, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i).prepend(n.transform.mapCoord), this.uniforms.alpha = i.worldAlpha, this.uniforms.maskClamp = n.transform.uClampFrame, t.applyFilter(this, e, r))
          }, e
        }(n.default);
      r.default = a
    }, {
      "../../../../math": 65,
      "../../../../textures/TextureMatrix": 104,
      "../Filter": 76,
      path: 7
    }],
    80: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      r.__esModule = !0;
      var o = i(t("./WebGLManager")),
        s = i(t("../utils/RenderTarget")),
        a = i(t("../utils/Quad")),
        u = t("../../../math"),
        h = i(t("../../../Shader")),
        l = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../filters/filterTransforms")),
        c = i(t("bit-twiddle")),
        f = function() {
          function t() {
            n(this, t), this.renderTarget = null, this.target = null, this.resolution = 1, this.sourceFrame = new u.Rectangle, this.destinationFrame = new u.Rectangle, this.filters = []
          }
          return t.prototype.clear = function() {
            this.filters = null, this.target = null, this.renderTarget = null
          }, t
        }(),
        d = function(t) {
          function e(r) {
            n(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.gl = i.renderer.gl, i.quad = new a.default(i.gl, r.state.attribState), i.shaderCache = {}, i.pool = {}, i.filterData = null, i.managedFilters = [], i.renderer.on("prerender", i.onPrerender, i), i._screenWidth = r.view.width, i._screenHeight = r.view.height, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.pushFilter = function(t, e) {
            var r = this.renderer,
              i = this.filterData;
            if (!i) {
              i = this.renderer._activeRenderTarget.filterStack;
              var n = new f;
              n.sourceFrame = n.destinationFrame = this.renderer._activeRenderTarget.size, n.renderTarget = r._activeRenderTarget, this.renderer._activeRenderTarget.filterData = i = {
                index: 0,
                stack: [n]
              }, this.filterData = i
            }
            var o = i.stack[++i.index],
              s = i.stack[0].destinationFrame;
            o || (o = i.stack[i.index] = new f);
            var a = t.filterArea && 0 === t.filterArea.x && 0 === t.filterArea.y && t.filterArea.width === r.screen.width && t.filterArea.height === r.screen.height,
              u = e[0].resolution,
              h = 0 | e[0].padding,
              l = a ? r.screen : t.filterArea || t.getBounds(!0),
              c = o.sourceFrame,
              d = o.destinationFrame;
            c.x = (l.x * u | 0) / u, c.y = (l.y * u | 0) / u, c.width = (l.width * u | 0) / u, c.height = (l.height * u | 0) / u, a || (i.stack[0].renderTarget.transform || e[0].autoFit && c.fit(s), c.pad(h)), d.width = c.width, d.height = c.height;
            var p = this.getPotRenderTarget(r.gl, c.width, c.height, u);
            o.target = t, o.filters = e, o.resolution = u, o.renderTarget = p, p.setFrame(d, c), r.bindRenderTarget(p), p.clear()
          }, e.prototype.popFilter = function() {
            var t = this.filterData,
              e = t.stack[t.index - 1],
              r = t.stack[t.index];
            this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
            var i = r.filters;
            if (1 === i.length) i[0].apply(this, r.renderTarget, e.renderTarget, !1, r), this.freePotRenderTarget(r.renderTarget);
            else {
              var n = r.renderTarget,
                o = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution);
              o.setFrame(r.destinationFrame, r.sourceFrame), o.clear();
              var s = 0;
              for (s = 0; s < i.length - 1; ++s) {
                i[s].apply(this, n, o, !0, r);
                var a = n;
                n = o, o = a
              }
              i[s].apply(this, n, e.renderTarget, !1, r), this.freePotRenderTarget(n), this.freePotRenderTarget(o)
            }
            r.clear(), 0 === --t.index && (this.filterData = null)
          }, e.prototype.applyFilter = function(t, e, r, i) {
            var n = this.renderer,
              o = n.gl,
              s = t.glShaders[n.CONTEXT_UID];
            s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey]) || (s = new h.default(this.gl, t.vertexSrc, t.fragmentSrc), t.glShaders[n.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s, this.managedFilters.push(t)) : (s = t.glShaders[n.CONTEXT_UID] = new h.default(this.gl, t.vertexSrc, t.fragmentSrc), this.managedFilters.push(t)), n.bindVao(null), this.quad.initVao(s)), n.bindVao(this.quad.vao), n.bindRenderTarget(r), i && (o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)), r === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), n.bindShader(s);
            var a = this.renderer.emptyTextures[0];
            this.renderer.boundTextures[0] = a, this.syncUniforms(s, t), n.state.setBlendMode(t.blendMode), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
          }, e.prototype.syncUniforms = function(t, e) {
            var r = e.uniformData,
              i = e.uniforms,
              n = 1,
              o = void 0;
            if (t.uniforms.filterArea) {
              o = this.filterData.stack[this.filterData.index];
              var s = t.uniforms.filterArea;
              s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, t.uniforms.filterArea = s
            }
            if (t.uniforms.filterClamp) {
              o = o || this.filterData.stack[this.filterData.index];
              var a = t.uniforms.filterClamp;
              a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, t.uniforms.filterClamp = a
            }
            for (var u in r) {
              var h = r[u].type;
              if ("sampler2d" === h && 0 !== i[u]) {
                if (i[u].baseTexture) t.uniforms[u] = this.renderer.bindTexture(i[u].baseTexture, n);
                else {
                  t.uniforms[u] = n;
                  var l = this.renderer.gl;
                  this.renderer.boundTextures[n] = this.renderer.emptyTextures[n], l.activeTexture(l.TEXTURE0 + n), i[u].texture.bind()
                }
                n++
              } else if ("mat3" === h) void 0 !== i[u].a ? t.uniforms[u] = i[u].toArray(!0) : t.uniforms[u] = i[u];
              else if ("vec2" === h)
                if (void 0 !== i[u].x) {
                  var c = t.uniforms[u] || new Float32Array(2);
                  c[0] = i[u].x, c[1] = i[u].y, t.uniforms[u] = c
                } else t.uniforms[u] = i[u];
              else "float" === h ? t.uniforms.data[u].value !== r[u] && (t.uniforms[u] = i[u]) : t.uniforms[u] = i[u]
            }
          }, e.prototype.getRenderTarget = function(t, e) {
            var r = this.filterData.stack[this.filterData.index],
              i = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
            return i.setFrame(r.destinationFrame, r.sourceFrame), i
          }, e.prototype.returnRenderTarget = function(t) {
            this.freePotRenderTarget(t)
          }, e.prototype.calculateScreenSpaceMatrix = function(t) {
            var e = this.filterData.stack[this.filterData.index];
            return l.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
          }, e.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
            var e = this.filterData.stack[this.filterData.index];
            return l.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
          }, e.prototype.calculateSpriteMatrix = function(t, e) {
            var r = this.filterData.stack[this.filterData.index];
            return l.calculateSpriteMatrix(t, r.sourceFrame, r.renderTarget.size, e)
          }, e.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.renderer,
              r = this.managedFilters;
            e.off("prerender", this.onPrerender, this);
            for (var i = 0; i < r.length; i++) t || r[i].glShaders[e.CONTEXT_UID].destroy(), delete r[i].glShaders[e.CONTEXT_UID];
            this.shaderCache = {}, t ? this.pool = {} : this.emptyPool()
          }, e.prototype.getPotRenderTarget = function(t, e, r, i) {
            var n = "screen";
            r *= i, (e *= i) === this._screenWidth && r === this._screenHeight || (n = (65535 & (e = c.default.nextPow2(e))) << 16 | 65535 & (r = c.default.nextPow2(r))), this.pool[n] || (this.pool[n] = []);
            var o = this.pool[n].pop();
            if (!o) {
              var a = this.renderer.boundTextures[0];
              t.activeTexture(t.TEXTURE0), o = new s.default(t, e, r, null, 1), t.bindTexture(t.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
            }
            return o.resolution = i, o.defaultFrame.width = o.size.width = e / i, o.defaultFrame.height = o.size.height = r / i, o.filterPoolKey = n, o
          }, e.prototype.emptyPool = function() {
            for (var t in this.pool) {
              var e = this.pool[t];
              if (e)
                for (var r = 0; r < e.length; r++) e[r].destroy(!0)
            }
            this.pool = {}
          }, e.prototype.freePotRenderTarget = function(t) {
            this.pool[t.filterPoolKey].push(t)
          }, e.prototype.onPrerender = function() {
            if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
              this._screenWidth = this.renderer.view.width, this._screenHeight = this.renderer.view.height;
              var t = this.pool.screen;
              if (t)
                for (var e = 0; e < t.length; e++) t[e].destroy(!0);
              this.pool.screen = []
            }
          }, e
        }(o.default);
      r.default = d
    }, {
      "../../../Shader": 40,
      "../../../math": 65,
      "../filters/filterTransforms": 78,
      "../utils/Quad": 85,
      "../utils/RenderTarget": 86,
      "./WebGLManager": 83,
      "bit-twiddle": 1
    }],
    81: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("./WebGLManager")),
        o = i(t("../filters/spriteMask/SpriteMaskFilter")),
        s = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.scissor = !1, i.scissorData = null, i.scissorRenderTarget = null, i.enableScissor = !0, i.alphaMaskPool = [], i.alphaMaskIndex = 0, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.pushMask = function(t, e) {
            if (e.texture) this.pushSpriteMask(t, e);
            else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
              var r = e.worldTransform,
                i = Math.atan2(r.b, r.a);
              (i = Math.round(i * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
            } else this.pushStencilMask(e)
          }, e.prototype.popMask = function(t, e) {
            e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
          }, e.prototype.pushSpriteMask = function(t, e) {
            var r = this.alphaMaskPool[this.alphaMaskIndex];
            r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new o.default(e)]), r[0].resolution = this.renderer.resolution, r[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, r), this.alphaMaskIndex++
          }, e.prototype.popSpriteMask = function() {
            this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
          }, e.prototype.pushStencilMask = function(t) {
            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
          }, e.prototype.popStencilMask = function() {
            this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
          }, e.prototype.pushScissorMask = function(t, e) {
            e.renderable = !0;
            var r = this.renderer._activeRenderTarget,
              i = e.getBounds();
            i.fit(r.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
            var n = this.renderer.resolution;
            this.renderer.gl.scissor(i.x * n, (r.root ? r.size.height - i.y - i.height : i.y) * n, i.width * n, i.height * n), this.scissorRenderTarget = r, this.scissorData = e, this.scissor = !0
          }, e.prototype.popScissorMask = function() {
            this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
            var t = this.renderer.gl;
            t.disable(t.SCISSOR_TEST)
          }, e
        }(n.default);
      r.default = s
    }, {
      "../filters/spriteMask/SpriteMaskFilter": 79,
      "./WebGLManager": 83
    }],
    82: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./WebGLManager")),
        n = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.stencilMaskStack = null, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.setMaskStack = function(t) {
            this.stencilMaskStack = t;
            var e = this.renderer.gl;
            0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
          }, e.prototype.pushStencil = function(t) {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
            var e = this.renderer.gl,
              r = this.stencilMaskStack.length;
            0 === r && e.enable(e.STENCIL_TEST), this.stencilMaskStack.push(t), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, r, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), this._useCurrent()
          }, e.prototype.popStencil = function() {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
            var t = this.renderer.gl,
              e = this.stencilMaskStack.pop();
            0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(e), this._useCurrent())
          }, e.prototype._useCurrent = function() {
            var t = this.renderer.gl;
            t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
          }, e.prototype._getBitwiseMask = function() {
            return (1 << this.stencilMaskStack.length) - 1
          }, e.prototype.destroy = function() {
            i.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
          }, e
        }(i.default);
      r.default = n
    }, {
      "./WebGLManager": 83
    }],
    83: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t(e) {
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.renderer = e, this.renderer.on("context", this.onContextChange, this)
        }
        return t.prototype.onContextChange = function() {}, t.prototype.destroy = function() {
          this.renderer.off("context", this.onContextChange, this), this.renderer = null
        }, t
      }();
      r.default = i
    }, {}],
    84: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
        function e() {
          return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), e.prototype.start = function() {}, e.prototype.stop = function() {
          this.flush()
        }, e.prototype.flush = function() {}, e.prototype.render = function(t) {}, e
      }(function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("../managers/WebGLManager")).default);
      r.default = i
    }, {
      "../managers/WebGLManager": 83
    }],
    85: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("pixi-gl-core")),
        o = i(t("../../../utils/createIndicesForQuads")),
        s = function() {
          function t(e, r) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.gl = e, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
            for (var i = 0; i < 4; i++) this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
            this.indices = (0, o.default)(1), this.vertexBuffer = n.default.GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW), this.indexBuffer = n.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.vao = new n.default.VertexArrayObject(e, r)
          }
          return t.prototype.initVao = function(t) {
            this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
          }, t.prototype.map = function(t, e) {
            var r = 0,
              i = 0;
            return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this
          }, t.prototype.upload = function() {
            for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
            return this.vertexBuffer.upload(this.interleaved), this
          }, t.prototype.destroy = function() {
            var t = this.gl;
            t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
          }, t
        }();
      r.default = s
    }, {
      "../../../utils/createIndicesForQuads": 111,
      "pixi-gl-core": 14
    }],
    86: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = t("../../../math"),
        n = t("../../../const"),
        o = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../../../settings")),
        s = t("pixi-gl-core"),
        a = function() {
          function t(e, r, a, u, h, l) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.gl = e, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new i.Rectangle(0, 0, 1, 1), this.resolution = h || o.default.RESOLUTION, this.projectionMatrix = new i.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new i.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.filterPoolKey = "", this.scaleMode = void 0 !== u ? u : o.default.SCALE_MODE, this.root = l, this.root ? (this.frameBuffer = new s.GLFramebuffer(e, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = s.GLFramebuffer.createRGBA(e, 100, 100), this.scaleMode === n.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(r, a)
          }
          return t.prototype.clear = function(t) {
            var e = t || this.clearColor;
            this.frameBuffer.clear(e[0], e[1], e[2], e[3])
          }, t.prototype.attachStencilBuffer = function() {
            this.root || this.frameBuffer.enableStencil()
          }, t.prototype.setFrame = function(t, e) {
            this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || this.destinationFrame
          }, t.prototype.activate = function() {
            var t = this.gl;
            this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
          }, t.prototype.calculateProjection = function(t, e) {
            var r = this.projectionMatrix;
            e = e || t, r.identity(), this.root ? (r.a = 1 / t.width * 2, r.d = -1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = 1 - e.y * r.d) : (r.a = 1 / t.width * 2, r.d = 1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = -1 - e.y * r.d)
          }, t.prototype.resize = function(t, e) {
            if (t |= 0, e |= 0, this.size.width !== t || this.size.height !== e) {
              this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
              var r = this.frame || this.size;
              this.calculateProjection(r)
            }
          }, t.prototype.destroy = function() {
            this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
          }, t
        }();
      r.default = a
    }, {
      "../../../const": 42,
      "../../../math": 65,
      "../../../settings": 91,
      "pixi-gl-core": 14
    }],
    87: [function(t, e, r) {
      "use strict";

      function i(t) {
        for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
        return e
      }
      r.__esModule = !0, r.default = function(t, e) {
        var r = !e;
        if (r) {
          var s = document.createElement("canvas");
          s.width = 1, s.height = 1, e = n.default.createContext(s)
        }
        for (var a = e.createShader(e.FRAGMENT_SHADER);;) {
          var u = o.replace(/%forloop%/gi, i(t));
          if (e.shaderSource(a, u), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS)) break;
          t = t / 2 | 0
        }
        return r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
      };
      var n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("pixi-gl-core")),
        o = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n")
    }, {
      "pixi-gl-core": 14
    }],
    88: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e[i.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[i.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[i.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[i.BLEND_MODES.ADD_NPM] = [t.SRC_ALPHA, t.DST_ALPHA, t.ONE, t.DST_ALPHA], e[i.BLEND_MODES.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_COLOR], e
      };
      var i = t("../../../const")
    }, {
      "../../../const": 42
    }],
    89: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e[i.DRAW_MODES.POINTS] = t.POINTS, e[i.DRAW_MODES.LINES] = t.LINES, e[i.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[i.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[i.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[i.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[i.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN, e
      };
      var i = t("../../../const")
    }, {
      "../../../const": 42
    }],
    90: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
      }
    }, {}],
    91: [function(t, e, r) {
      "use strict";
      r.__esModule = !0,
        function(t) {
          t && t.__esModule
        }(t("./utils/canUploadSameBuffer")), r.default = {
          TARGET_FPMS: .06,
          MIPMAP_TEXTURES: !0,
          RESOLUTION: 1,
          FILTER_RESOLUTION: 1,
          SPRITE_MAX_TEXTURES: 4,
          SPRITE_BATCH_SIZE: 4096,
          RETINA_PREFIX: /@([0-9\.]+)x/,
          RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            roundPixels: !1,
            width: 800,
            height: 600,
            legacy: !1
          },
          TRANSFORM_MODE: 0,
          GC_MODE: 0,
          GC_MAX_IDLE: 3600,
          GC_MAX_CHECK_COUNT: 600,
          WRAP_MODE: 0,
          SCALE_MODE: 0,
          PRECISION_VERTEX: "highp",
          PRECISION_FRAGMENT: "mediump",
          CAN_UPLOAD_SAME_BUFFER: !0,
          MESH_CANVAS_PADDING: 0,
          isLittleGame: !1,
          MAX_TEXTURES: 16,
          MAX_VERTEX_ATTRIBS: 16
        }
    }, {
      "./utils/canUploadSameBuffer": 110
    }],
    92: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = t("../math"),
        s = t("../utils"),
        a = t("../const"),
        u = i(t("../textures/Texture")),
        h = i(t("../display/Container")),
        l = new o.Point,
        c = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return i._anchor = new o.ObservablePoint(i._onAnchorUpdate, i, r ? r.defaultAnchor.x : 0, r ? r.defaultAnchor.y : 0), i._texture = null, i._width = 0, i._height = 0, i._tint = null, i._tintRGB = null, i.tint = 16777215, i.blendMode = a.BLEND_MODES.NORMAL, i.shader = null, i.cachedTint = 16777215, i.texture = r || u.default.EMPTY, i.vertexData = new Float32Array(8), i.vertexTrimmedData = null, i._transformID = -1, i._textureID = -1, i._transformTrimmedID = -1, i._textureTrimmedID = -1, i.pluginName = "sprite", i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._onTextureUpdate = function() {
            this.destroyed || (this._textureID = -1, this._textureTrimmedID = -1, this.cachedTint = 16777215, this._width && this._texture && this._texture.orig && (this.scale.x = (0, s.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && this._texture && this._texture.orig && (this.scale.y = (0, s.sign)(this.scale.y) * this._height / this._texture.orig.height))
          }, e.prototype._onAnchorUpdate = function() {
            this._transformID = -1, this._transformTrimmedID = -1
          }, e.prototype.calculateVertices = function() {
            if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
              this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
              var t = this._texture,
                e = this.transform.worldTransform,
                r = e.a,
                i = e.b,
                n = e.c,
                o = e.d,
                s = e.tx,
                a = e.ty,
                u = this.vertexData,
                h = t.trim,
                l = t.orig,
                c = this._anchor,
                f = 0,
                d = 0,
                p = 0,
                y = 0;
              h ? (f = (d = h.x - c._x * l.width) + h.width, p = (y = h.y - c._y * l.height) + h.height) : (f = (d = -c._x * l.width) + l.width, p = (y = -c._y * l.height) + l.height), u[0] = r * d + n * y + s, u[1] = o * y + i * d + a, u[2] = r * f + n * y + s, u[3] = o * y + i * f + a, u[4] = r * f + n * p + s, u[5] = o * p + i * f + a, u[6] = r * d + n * p + s, u[7] = o * p + i * d + a
            }
          }, e.prototype.calculateTrimmedVertices = function() {
            if (this.vertexTrimmedData) {
              if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
            } else this.vertexTrimmedData = new Float32Array(8);
            this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
            var t = this._texture,
              e = this.vertexTrimmedData,
              r = t.orig,
              i = this._anchor,
              n = this.transform.worldTransform,
              o = n.a,
              s = n.b,
              a = n.c,
              u = n.d,
              h = n.tx,
              l = n.ty,
              c = -i._x * r.width,
              f = c + r.width,
              d = -i._y * r.height,
              p = d + r.height;
            e[0] = o * c + a * d + h, e[1] = u * d + s * c + l, e[2] = o * f + a * d + h, e[3] = u * d + s * f + l, e[4] = o * f + a * p + h, e[5] = u * p + s * f + l, e[6] = o * c + a * p + h, e[7] = u * p + s * c + l
          }, e.prototype._renderWebGL = function(t) {
            this.calculateVertices(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
          }, e.prototype._calculateBounds = function() {
            var t = this._texture.trim,
              e = this._texture.orig;
            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
          }, e.prototype.getLocalBounds = function(e) {
            if (0 === this.children.length) {
              var r = this._texture.orig;
              return this._bounds.minX = r.width * -this._anchor._x, this._bounds.minY = r.height * -this._anchor._y, this._bounds.maxX = r.width * (1 - this._anchor._x), this._bounds.maxY = r.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new o.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)
            }
            return t.prototype.getLocalBounds.call(this, e)
          }, e.prototype.containsPoint = function(t) {
            if (this.destroyed || !this._texture || !this._texture.orig) return !1;
            this.worldTransform.applyInverse(t, l);
            var e = this._texture.orig.width,
              r = this._texture.orig.height,
              i = -e * this.anchor.x,
              n = 0;
            return l.x >= i && l.x < i + e && (n = -r * this.anchor.y, l.y >= n && l.y < n + r)
          }, e.prototype.destroy = function(e) {
            if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
              var r = "boolean" == typeof e ? e : e && e.baseTexture;
              this._texture.destroy(!!r)
            }
            this._texture = null, this.shader = null
          }, e.from = function(t) {
            return new e(u.default.from(t))
          }, e.fromFrame = function(t) {
            var r = s.TextureCache[t];
            if (!r) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
            return new e(r)
          }, e.fromImage = function(t, r, i) {
            return new e(u.default.fromImage(t, r, i))
          }, n(e, [{
            key: "width",
            get: function() {
              return this._texture && this._texture.orig ? Math.abs(this.scale.x) * this._texture.orig.width : Math.abs(this.scale.x)
            },
            set: function(t) {
              var e = (0, s.sign)(this.scale.x) || 1;
              this._texture && this._texture.orig ? this.scale.x = e * t / this._texture.orig.width : this.scale.x = e, this._width = t
            }
          }, {
            key: "height",
            get: function() {
              return this._texture && this._texture.orig ? Math.abs(this.scale.y) * this._texture.orig.height : Math.abs(this.scale.y)
            },
            set: function(t) {
              var e = (0, s.sign)(this.scale.y) || 1;
              this._texture && this._texture.orig ? this.scale.y = e * t / this._texture.orig.height : this.scale.y = e, this._height = t
            }
          }, {
            key: "anchor",
            get: function() {
              return this._anchor
            },
            set: function(t) {
              this._anchor.copy(t)
            }
          }, {
            key: "tint",
            get: function() {
              return this._tint
            },
            set: function(t) {
              this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
            }
          }, {
            key: "texture",
            get: function() {
              return this._texture
            },
            set: function(t) {
              this._texture !== t && (this._texture = t || u.default.EMPTY, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
          }]), e
        }(h.default);
      r.default = c
    }, {
      "../const": 42,
      "../display/Container": 44,
      "../math": 65,
      "../textures/Texture": 103,
      "../utils": 113
    }],
    93: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t(e) {
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.vertices = new ArrayBuffer(e), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
        }
        return t.prototype.destroy = function() {
          this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
        }, t
      }();
      r.default = i
    }, {}],
    94: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("../../renderers/webgl/utils/ObjectRenderer")),
        o = i(t("../../renderers/webgl/WebGLRenderer")),
        s = i(t("../../utils/createIndicesForQuads")),
        a = i(t("./generateMultiTextureShader")),
        u = i(t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader")),
        h = i(t("./BatchBuffer")),
        l = i(t("../../settings")),
        c = t("../../utils"),
        f = i(t("pixi-gl-core")),
        d = i(t("bit-twiddle")),
        p = 0,
        y = 0,
        v = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            i.vertSize = 5, i.vertByteSize = 4 * i.vertSize, i.size = l.default.SPRITE_BATCH_SIZE, i.buffers = [];
            for (var n = 1; n <= d.default.nextPow2(i.size); n *= 2) i.buffers.push(new h.default(4 * n * i.vertByteSize));
            i.indices = (0, s.default)(i.size), i.shader = null, i.currentIndex = 0, i.groups = [];
            for (var o = 0; o < i.size; o++) i.groups[o] = {
              textures: [],
              textureCount: 0,
              ids: [],
              size: 0,
              start: 0,
              blend: 0
            };
            return i.sprites = [], i.vertexBuffers = [], i.vaos = [], i.vaoMax = 2, i.vertexCount = 0, i.renderer.on("prerender", i.onPrerender, i), i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), l.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES < 1 && (this.MAX_TEXTURES = 1), this.MAX_TEXTURES = (0, u.default)(this.MAX_TEXTURES, t)), this.MAX_TEXTURES < 1 && (this.MAX_TEXTURES = 1), this.shader = (0, a.default)(t, this.MAX_TEXTURES), this.indexBuffer = f.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.renderer.bindVao(null);
            for (var e = this.shader.attributes, r = 0; r < this.vaoMax; r++) {
              var i = this.vertexBuffers[r] = f.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                n = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(i, e.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(i, e.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(i, e.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
              e.aTextureId && n.addAttribute(i, e.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[r] = n
            }
            this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
          }, e.prototype.onPrerender = function() {
            this.vertexCount = 0
          }, e.prototype.render = function(t) {
            this.currentIndex >= this.size && this.flush(), t._texture._uvs && (this.sprites[this.currentIndex++] = t)
          }, e.prototype.flush = function() {
            if (0 !== this.currentIndex) {
              var t = this.renderer.gl,
                e = this.MAX_TEXTURES,
                r = d.default.nextPow2(this.currentIndex),
                i = d.default.log2(r),
                n = this.buffers[i],
                o = this.sprites,
                s = this.groups,
                a = n.float32View,
                u = n.uint32View,
                h = this.boundTextures,
                v = this.renderer.boundTextures,
                g = this.renderer.textureGC.count,
                _ = 0,
                m = void 0,
                x = void 0,
                b = 1,
                T = 0,
                w = s[0],
                E = void 0,
                O = void 0,
                S = c.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
              w.textureCount = 0, w.start = 0, w.blend = S, p++;
              var M = void 0;
              for (M = 0; M < e; ++M) {
                var P = v[M];
                P._enabled !== p ? (h[M] = P, P._virtalBoundId = M, P._enabled = p) : h[M] = this.renderer.emptyTextures[M]
              }
              for (p++, M = 0; M < this.currentIndex; ++M) {
                var C = o[M];
                o[M] = null, m = C._texture.baseTexture;
                var A = c.premultiplyBlendMode[Number(m.premultipliedAlpha)][C.blendMode];
                if (S !== A && (S = A, x = null, T = e, p++), x !== m && (x = m, m._enabled !== p)) {
                  if (T === e && (p++, w.size = M - w.start, T = 0, (w = s[b++]).blend = S, w.textureCount = 0, w.start = M), m.touched = g, -1 === m._virtalBoundId)
                    for (var R = 0; R < e; ++R) {
                      var D = (R + y) % e,
                        I = h[D];
                      if (I._enabled !== p) {
                        y++, I._virtalBoundId = -1, m._virtalBoundId = D, h[D] = m;
                        break
                      }
                    }
                  m._enabled = p, w.textureCount++, w.ids[T] = m._virtalBoundId, w.textures[T++] = m
                }
                if (E = C.vertexData, O = C._texture._uvs.uvsUint32, this.renderer.roundPixels) {
                  var L = this.renderer.resolution;
                  a[_] = (E[0] * L | 0) / L, a[_ + 1] = (E[1] * L | 0) / L, a[_ + 5] = (E[2] * L | 0) / L, a[_ + 6] = (E[3] * L | 0) / L, a[_ + 10] = (E[4] * L | 0) / L, a[_ + 11] = (E[5] * L | 0) / L, a[_ + 15] = (E[6] * L | 0) / L, a[_ + 16] = (E[7] * L | 0) / L
                } else a[_] = E[0], a[_ + 1] = E[1], a[_ + 5] = E[2], a[_ + 6] = E[3], a[_ + 10] = E[4], a[_ + 11] = E[5], a[_ + 15] = E[6], a[_ + 16] = E[7];
                u[_ + 2] = O[0], u[_ + 7] = O[1], u[_ + 12] = O[2], u[_ + 17] = O[3];
                var k = Math.min(C.worldAlpha, 1),
                  B = k < 1 && m.premultipliedAlpha ? (0, c.premultiplyTint)(C._tintRGB, k) : C._tintRGB + (255 * k << 24);
                u[_ + 3] = u[_ + 8] = u[_ + 13] = u[_ + 18] = B, a[_ + 4] = a[_ + 9] = a[_ + 14] = a[_ + 19] = m._virtalBoundId, _ += 20
              }
              if (w.size = M - w.start, l.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !0);
              else {
                if (this.vaoMax <= this.vertexCount) {
                  this.vaoMax++;
                  var j = this.shader.attributes,
                    N = this.vertexBuffers[this.vertexCount] = f.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                    F = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(N, j.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(N, j.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(N, j.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                  j.aTextureId && F.addAttribute(N, j.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = F
                }
                this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !1), this.vertexCount++
              }
              for (M = 0; M < e; ++M) v[M]._virtalBoundId = -1;
              for (M = 0; M < b; ++M) {
                for (var U = s[M], X = U.textureCount, G = 0; G < X; G++) x = U.textures[G], v[U.ids[G]] !== x && this.renderer.bindTexture(x, U.ids[G], !0), x._virtalBoundId = -1;
                this.renderer.state.setBlendMode(U.blend), t.drawElements(t.TRIANGLES, 6 * U.size, t.UNSIGNED_SHORT, 6 * U.start * 2)
              }
              this.currentIndex = 0
            }
          }, e.prototype.start = function() {
            this.renderer.bindShader(this.shader), l.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
          }, e.prototype.stop = function() {
            this.flush()
          }, e.prototype.destroy = function() {
            for (var e = 0; e < this.vaoMax; e++) this.vertexBuffers[e] && this.vertexBuffers[e].destroy(), this.vaos[e] && this.vaos[e].destroy();
            this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
            for (var r = 0; r < this.buffers.length; ++r) this.buffers[r].destroy()
          }, e
        }(n.default);
      r.default = v, o.default.registerPlugin("sprite", v)
    }, {
      "../../renderers/webgl/WebGLRenderer": 74,
      "../../renderers/webgl/utils/ObjectRenderer": 84,
      "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 87,
      "../../settings": 91,
      "../../utils": 113,
      "../../utils/createIndicesForQuads": 111,
      "./BatchBuffer": 93,
      "./generateMultiTextureShader": 95,
      "bit-twiddle": 1,
      "pixi-gl-core": 14
    }],
    95: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e) {
        var r = void 0;
        e > 1 ? r = (r = (r = n).replace(/%count%/gi, e)).replace(/%forloop%/gi, function(t) {
          var e = "";
          e += "\n", e += "\n";
          for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(textureId == " + r + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
          return e += "\n", e + "\n"
        }(e)) : r = o;
        var s = new i.default(t, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", r);
        if (s.bind(), e > 1) {
          for (var a = [], u = 0; u < e; u++) a[u] = u;
          s.uniforms.uSamplers = a
        } else s.uniforms.uSamplers = 0;
        return s
      };
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../../Shader")),
        n = (t("path"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n")),
        o = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers;", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "color = texture2D(uSamplers, vTextureCoord);", "gl_FragColor = color * vColor;", "}"].join("\n")
    }, {
      "../../Shader": 40,
      path: 7
    }],
    96: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = i(t("../sprites/Sprite")),
        s = i(t("../textures/Texture")),
        a = t("../math"),
        u = t("../utils"),
        h = t("../const"),
        l = i(t("../settings")),
        c = i(t("./TextStyle")),
        f = i(t("./TextMetrics")),
        d = i(t("../utils/trimCanvas")),
        p = {
          texture: !0,
          children: !1,
          baseTexture: !0
        },
        y = function(t) {
          function e(r, i, n) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, e), (n = n || document.createElement("canvas")).width = 3, n.height = 3;
            var o = s.default.fromCanvas(n, l.default.SCALE_MODE, "text");
            o.orig = new a.Rectangle, o.trim = new a.Rectangle;
            var u = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, o));
            return s.default.addToCache(u._texture, u._texture.baseTexture.textureCacheIds[0]), u.canvas = n, u.context = u.canvas.getContext("2d"), u.resolution = l.default.RESOLUTION, u._text = null, u._style = null, u._styleListener = null, u._font = "", u.text = r, u.style = i, u.localStyleID = -1, u
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.updateText = function(t) {
            var e = this._style;
            if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
              this._font = this._style.toFontString();
              var r = this.context,
                i = f.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas),
                n = i.width,
                o = i.height,
                s = i.lines,
                a = i.lineHeight,
                u = i.lineWidths,
                h = i.maxLineWidth,
                l = i.fontProperties;
              this.canvas.width = Math.ceil((Math.max(1, n) + 2 * e.padding) * this.resolution), this.canvas.height = Math.ceil((Math.max(1, o) + 2 * e.padding) * this.resolution), r.scale(this.resolution, this.resolution), r.clearRect(0, 0, this.canvas.width, this.canvas.height), r.font = this._font, r.strokeStyle = e.stroke, r.lineWidth = e.strokeThickness, r.textBaseline = e.textBaseline, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit;
              var c = void 0,
                d = void 0;
              if (e.dropShadow) {
                r.fillStyle = e.dropShadowColor, r.globalAlpha = e.dropShadowAlpha, r.shadowBlur = e.dropShadowBlur, e.dropShadowBlur > 0 && (r.shadowColor = e.dropShadowColor);
                for (var p = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, y = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, v = 0; v < s.length; v++) c = e.strokeThickness / 2, d = e.strokeThickness / 2 + v * a + l.ascent, "right" === e.align ? c += h - u[v] : "center" === e.align && (c += (h - u[v]) / 2), e.fill && (this.drawLetterSpacing(s[v], c + p + e.padding, d + y + e.padding), e.stroke && e.strokeThickness && (r.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(s[v], c + p + e.padding, d + y + e.padding, !0), r.strokeStyle = e.stroke))
              }
              r.shadowBlur = 0, r.globalAlpha = 1, r.fillStyle = this._generateFillStyle(e, s);
              for (var g = 0; g < s.length; g++) c = e.strokeThickness / 2, d = e.strokeThickness / 2 + g * a + l.ascent, "right" === e.align ? c += h - u[g] : "center" === e.align && (c += (h - u[g]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(s[g], c + e.padding, d + e.padding, !0), e.fill && this.drawLetterSpacing(s[g], c + e.padding, d + e.padding);
              this.updateTexture()
            }
          }, e.prototype.drawLetterSpacing = function(t, e, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              n = this._style.letterSpacing;
            if (0 !== n)
              for (var o = String.prototype.split.call(t, ""), s = e, a = 0, u = ""; a < t.length;) {
                u = o[a++], i ? this.context.strokeText(u, s, r) : this.context.fillText(u, s, r);
                var h = this.context.measureText(u);
                s += h ? h.width + n : 20 + n
              } else i ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r)
          }, e.prototype.updateTexture = function() {
            var t = this.canvas;
            if (this._style.trim) {
              var e = (0, d.default)(t);
              e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
            }
            var r = this._texture,
              i = this._style,
              n = i.trim ? 0 : i.padding,
              o = r.baseTexture;
            o.hasLoaded = !0, o.resolution = this.resolution, o.realWidth = t.width, o.realHeight = t.height, o.width = t.width / this.resolution, o.height = t.height / this.resolution, r.trim.width = r._frame.width = t.width / this.resolution, r.trim.height = r._frame.height = t.height / this.resolution, r.trim.x = -n, r.trim.y = -n, r.orig.width = r._frame.width - 2 * n, r.orig.height = r._frame.height - 2 * n, this._onTextureUpdate(), o.emit("update", o), this.dirty = !1
          }, e.prototype.renderWebGL = function(e) {
            this.updateText(!0), t.prototype.renderWebGL.call(this, e)
          }, e.prototype.getLocalBounds = function(e) {
            return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
          }, e.prototype._calculateBounds = function() {
            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
          }, e.prototype._onStyleChange = function() {
            this.dirty = !0
          }, e.prototype._generateFillStyle = function(t, e) {
            if (!Array.isArray(t.fill)) return t.fill;
            var r = void 0,
              i = void 0,
              n = void 0,
              o = void 0,
              s = this.canvas.width / this.resolution,
              a = this.canvas.height / this.resolution,
              u = t.fill.slice(),
              l = t.fillGradientStops.slice();
            if (!l.length)
              for (var c = u.length + 1, f = 1; f < c; ++f) l.push(f / c);
            if (u.unshift(t.fill[0]), l.unshift(0), u.push(t.fill[t.fill.length - 1]), l.push(1), t.fillGradientType === h.TEXT_GRADIENT.LINEAR_VERTICAL) {
              r = this.context.createLinearGradient(s / 2, 0, s / 2, a), i = (u.length + 1) * e.length, n = 0;
              for (var d = 0; d < e.length; d++) {
                n += 1;
                for (var p = 0; p < u.length; p++) o = "number" == typeof l[p] ? l[p] / e.length + d / e.length : n / i, r.addColorStop(o, u[p]), n++
              }
            } else {
              r = this.context.createLinearGradient(0, a / 2, s, a / 2), i = u.length + 1, n = 1;
              for (var y = 0; y < u.length; y++) o = "number" == typeof l[y] ? l[y] : n / i, r.addColorStop(o, u[y]), n++
            }
            return r
          }, e.prototype.destroy = function(e) {
            "boolean" == typeof e && (e = {
              children: e
            }), e = Object.assign({}, p, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
          }, n(e, [{
            key: "width",
            get: function() {
              return this.updateText(!0), this._texture && this._texture.orig ? Math.abs(this.scale.x) * this._texture.orig.width : Math.abs(this.scale.x)
            },
            set: function(t) {
              this.updateText(!0);
              var e = (0, u.sign)(this.scale.x) || 1;
              this._texture && this._texture.orig ? this.scale.x = e * t / this._texture.orig.width : this.scale.x = e, this._width = t
            }
          }, {
            key: "height",
            get: function() {
              return this.updateText(!0), this._texture && this._texture.orig ? Math.abs(this.scale.y) * this._texture.orig.height : Math.abs(this.scale.y)
            },
            set: function(t) {
              this.updateText(!0);
              var e = (0, u.sign)(this.scale.y) || 1;
              this._texture && this._texture.orig ? this.scale.y = e * t / this._texture.orig.height : this.scale.y = e, this._height = t
            }
          }, {
            key: "style",
            get: function() {
              return this._style
            },
            set: function(t) {
              (t = t || {}) instanceof c.default ? this._style = t : this._style = new c.default(t), this.localStyleID = -1, this.dirty = !0
            }
          }, {
            key: "text",
            get: function() {
              return this._text
            },
            set: function(t) {
              t = String("" === t || null == t ? " " : t), this._text !== t && (this._text = t, this.dirty = !0)
            }
          }]), e
        }(o.default);
      r.default = y
    }, {
      "../const": 42,
      "../math": 65,
      "../settings": 91,
      "../sprites/Sprite": 92,
      "../textures/Texture": 103,
      "../utils": 113,
      "../utils/trimCanvas": 117,
      "./TextMetrics": 97,
      "./TextStyle": 98
    }],
    97: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t(e, r, i, n, o, s, a, u, h) {
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.text = e, this.style = r, this.width = i, this.height = n, this.lines = o, this.lineWidths = s, this.lineHeight = a, this.maxLineWidth = u, this.fontProperties = h
        }
        return t.initCanvas = function() {
          if (!t._initedCanvas) {
            t._initedCanvas = !0;
            var e = document.createElement("canvas");
            e.width = e.height = 10, t._canvas = e, t._context = e.getContext("2d")
          }
        }, t.measureText = function(e, r, i) {
          var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t._canvas;
          t._initedCanvas || t.initCanvas(), i = null == i ? r.wordWrap : i;
          var o = r.toFontString(),
            s = t.measureFont(o);
          0 === s.fontSize && (s.fontSize = r.fontSize, s.ascent = r.fontSize);
          var a = n.getContext("2d");
          a.font = o;
          for (var u = (i ? t.wordWrap(e, r, n) : e).split(/(?:\r\n|\r|\n)/), h = new Array(u.length), l = 0, c = 0; c < u.length; c++) {
            var f = a.measureText(u[c]),
              d = (f ? f.width : 40) + (u[c].length - 1) * r.letterSpacing;
            h[c] = d, l = Math.max(l, d)
          }
          var p = l + r.strokeThickness;
          r.dropShadow && (p += r.dropShadowDistance);
          var y = r.lineHeight || s.fontSize + r.strokeThickness,
            v = Math.max(y, s.fontSize + r.strokeThickness) + (u.length - 1) * (y + r.leading);
          return r.dropShadow && (v += r.dropShadowDistance), new t(e, r, p, v, u, h, y + r.leading, l, s)
        }, t.wordWrap = function(e, r, i) {
          t._initedCanvas || t.initCanvas(), i || (i = t._canvas);
          for (var n = i.getContext("2d"), o = 0, s = "", a = "", u = {}, h = r.letterSpacing, l = r.whiteSpace, c = t.collapseSpaces(l), f = t.collapseNewlines(l), d = !c, p = r.wordWrapWidth + h, y = t.tokenize(e), v = 0; v < y.length; v++) {
            var g = y[v];
            if (t.isNewline(g)) {
              if (!f) {
                a += t.addLine(s), d = !c, s = "", o = 0;
                continue
              }
              g = " "
            }
            if (c) {
              var _ = t.isBreakingSpace(g),
                m = t.isBreakingSpace(s[s.length - 1]);
              if (_ && m) continue
            }
            var x = t.getFromCache(g, h, u, n);
            if (x > p)
              if ("" !== s && (a += t.addLine(s), s = "", o = 0), t.canBreakWords(g, r.breakWords))
                for (var b = g.split(""), T = 0; T < b.length; T++) {
                  for (var w = b[T], E = 1; b[T + E];) {
                    var O = b[T + E],
                      S = w[w.length - 1];
                    if (t.canBreakChars(S, O, g, T, r.breakWords)) break;
                    w += O, E++
                  }
                  T += w.length - 1;
                  var M = t.getFromCache(w, h, u, n);
                  M + o > p && (a += t.addLine(s), d = !1, s = "", o = 0), s += w, o += M
                } else {
                  s.length > 0 && (a += t.addLine(s), s = "", o = 0);
                  var P = v === y.length - 1;
                  a += t.addLine(g, !P), d = !1, s = "", o = 0
                } else x + o > p && (d = !1, a += t.addLine(s), s = "", o = 0), (s.length > 0 || !t.isBreakingSpace(g) || d) && (s += g, o += x)
          }
          return a + t.addLine(s, !1)
        }, t.addLine = function(e) {
          var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return e = t.trimRight(e), r ? e + "\n" : e
        }, t.getFromCache = function(t, e, r, i) {
          var n = r[t];
          if (void 0 === n) {
            var o = t.length * e,
              s = i.measureText(t);
            n = (s ? s.width : 40) + o, r[t] = n
          }
          return n
        }, t.collapseSpaces = function(t) {
          return "normal" === t || "pre-line" === t
        }, t.collapseNewlines = function(t) {
          return "normal" === t
        }, t.trimRight = function(e) {
          if ("string" != typeof e) return "";
          for (var r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            if (!t.isBreakingSpace(i)) break;
            e = e.slice(0, -1)
          }
          return e
        }, t.isNewline = function(e) {
          return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
        }, t.isBreakingSpace = function(e) {
          return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
        }, t.tokenize = function(e) {
          var r = [],
            i = "";
          if ("string" != typeof e) return r;
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            t.isBreakingSpace(o) || t.isNewline(o) ? ("" !== i && (r.push(i), i = ""), r.push(o)) : i += o
          }
          return "" !== i && r.push(i), r
        }, t.canBreakWords = function(t, e) {
          return e
        }, t.canBreakChars = function(t, e, r, i, n) {
          return !0
        }, t.measureFont = function(e) {
          if (t._initedCanvas || t.initCanvas(), t._fonts[e]) return t._fonts[e];
          var r = {},
            i = t._canvas,
            n = t._context;
          n.font = e;
          var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
            s = n.measureText(o),
            a = Math.ceil(s ? s.width : 120);
          s = n.measureText(t.BASELINE_SYMBOL);
          var u = Math.ceil(s ? s.width : 40),
            h = 2 * u;
          u = u * t.BASELINE_MULTIPLIER | 0, a < 4 && (a = 4), h < 4 && (h = 4), i.width = a, i.height = h, n.fillStyle = "#f00", n.fillRect(0, 0, a, h), n.font = e, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText(o, 0, u);
          var l = n.getImageData(0, 0, a, h),
            c = l ? l.data : new Uint8ClampedArray(a * h * 4),
            f = c.length,
            d = 4 * a,
            p = 0,
            y = 0,
            v = !1;
          if (f > 0)
            for (p = 0; p < u; ++p) {
              for (var g = 0; g < d; g += 4)
                if (255 !== c[y + g]) {
                  v = !0;
                  break
                } if (v) break;
              y += d
            }
          if (r.ascent = u - p, y = f - d, v = !1, p = h, f > 0)
            for (; p > u; --p) {
              for (var _ = 0; _ < d; _ += 4)
                if (255 !== c[y + _]) {
                  v = !0;
                  break
                } if (v) break;
              y -= d
            }
          return r.descent = p - u, r.fontSize = r.ascent + r.descent, t._fonts[e] = r, r
        }, t.clearMetrics = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          e ? delete t._fonts[e] : t._fonts = {}
        }, t
      }();
      r.default = i, i._initedCanvas = !1, i._canvas = null, i._context = null, i._fonts = {}, i.METRICS_STRING = "|Éq", i.BASELINE_SYMBOL = "M", i.BASELINE_MULTIPLIER = 1.4, i._newlines = [10, 13], i._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
    }, {}],
    98: [function(t, e, r) {
      "use strict";

      function i(t) {
        return "number" == typeof t ? (0, u.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
      }

      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0; e < t.length; ++e) t[e] = i(t[e]);
          return t
        }
        return i(t)
      }

      function o(t, e, r) {
        for (var i in r) Array.isArray(e[i]) ? t[i] = e[i].slice() : t[i] = e[i]
      }
      r.__esModule = !0;
      var s = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        a = t("../const"),
        u = t("../utils"),
        h = {
          align: "left",
          breakWords: !1,
          dropShadow: !1,
          dropShadowAlpha: 1,
          dropShadowAngle: Math.PI / 6,
          dropShadowBlur: 0,
          dropShadowColor: "black",
          dropShadowDistance: 5,
          fill: "black",
          fillGradientType: a.TEXT_GRADIENT.LINEAR_VERTICAL,
          fillGradientStops: [],
          fontFamily: "Arial",
          fontSize: 26,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          letterSpacing: 0,
          lineHeight: 0,
          lineJoin: "miter",
          miterLimit: 10,
          padding: 0,
          stroke: "black",
          strokeThickness: 0,
          textBaseline: "alphabetic",
          trim: !1,
          whiteSpace: "pre",
          wordWrap: !1,
          wordWrapWidth: 100,
          leading: 0
        },
        l = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
        c = function() {
          function t(e) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.styleID = 0, this.reset(), o(this, e, e)
          }
          return t.prototype.clone = function() {
            var e = {};
            return o(e, this, h), new t(e)
          }, t.prototype.reset = function() {
            o(this, h, h)
          }, t.prototype.toFontString = function() {
            var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
              e = this.fontFamily;
            Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
            for (var r = e.length - 1; r >= 0; r--) {
              var i = e[r].trim();
              !/([\"\'])[^\'\"]+\1/.test(i) && l.indexOf(i) < 0 && (i = '"' + i + '"'), e[r] = i
            }
            return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
          }, s(t, [{
            key: "align",
            get: function() {
              return this._align
            },
            set: function(t) {
              this._align !== t && (this._align = t, this.styleID++)
            }
          }, {
            key: "breakWords",
            get: function() {
              return this._breakWords
            },
            set: function(t) {
              this._breakWords !== t && (this._breakWords = t, this.styleID++)
            }
          }, {
            key: "dropShadow",
            get: function() {
              return this._dropShadow
            },
            set: function(t) {
              this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
            }
          }, {
            key: "dropShadowAlpha",
            get: function() {
              return this._dropShadowAlpha
            },
            set: function(t) {
              this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
            }
          }, {
            key: "dropShadowAngle",
            get: function() {
              return this._dropShadowAngle
            },
            set: function(t) {
              this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
            }
          }, {
            key: "dropShadowBlur",
            get: function() {
              return this._dropShadowBlur
            },
            set: function(t) {
              this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
            }
          }, {
            key: "dropShadowColor",
            get: function() {
              return this._dropShadowColor
            },
            set: function(t) {
              var e = n(t);
              this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
            }
          }, {
            key: "dropShadowDistance",
            get: function() {
              return this._dropShadowDistance
            },
            set: function(t) {
              this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
            }
          }, {
            key: "fill",
            get: function() {
              return this._fill
            },
            set: function(t) {
              var e = n(t);
              this._fill !== e && (this._fill = e, this.styleID++)
            }
          }, {
            key: "fillGradientType",
            get: function() {
              return this._fillGradientType
            },
            set: function(t) {
              this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
            }
          }, {
            key: "fillGradientStops",
            get: function() {
              return this._fillGradientStops
            },
            set: function(t) {
              (function(t, e) {
                if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                if (t.length !== e.length) return !1;
                for (var r = 0; r < t.length; ++r)
                  if (t[r] !== e[r]) return !1;
                return !0
              })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
            }
          }, {
            key: "fontFamily",
            get: function() {
              return this._fontFamily
            },
            set: function(t) {
              this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
            }
          }, {
            key: "fontSize",
            get: function() {
              return this._fontSize
            },
            set: function(t) {
              this._fontSize !== t && (this._fontSize = t, this.styleID++)
            }
          }, {
            key: "fontStyle",
            get: function() {
              return this._fontStyle
            },
            set: function(t) {
              this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
            }
          }, {
            key: "fontVariant",
            get: function() {
              return this._fontVariant
            },
            set: function(t) {
              this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
            }
          }, {
            key: "fontWeight",
            get: function() {
              return this._fontWeight
            },
            set: function(t) {
              this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
            }
          }, {
            key: "letterSpacing",
            get: function() {
              return this._letterSpacing
            },
            set: function(t) {
              this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
            }
          }, {
            key: "lineHeight",
            get: function() {
              return this._lineHeight
            },
            set: function(t) {
              this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
            }
          }, {
            key: "leading",
            get: function() {
              return this._leading
            },
            set: function(t) {
              this._leading !== t && (this._leading = t, this.styleID++)
            }
          }, {
            key: "lineJoin",
            get: function() {
              return this._lineJoin
            },
            set: function(t) {
              this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
            }
          }, {
            key: "miterLimit",
            get: function() {
              return this._miterLimit
            },
            set: function(t) {
              this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
            }
          }, {
            key: "padding",
            get: function() {
              return this._padding
            },
            set: function(t) {
              this._padding !== t && (this._padding = t, this.styleID++)
            }
          }, {
            key: "stroke",
            get: function() {
              return this._stroke
            },
            set: function(t) {
              var e = n(t);
              this._stroke !== e && (this._stroke = e, this.styleID++)
            }
          }, {
            key: "strokeThickness",
            get: function() {
              return this._strokeThickness
            },
            set: function(t) {
              this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
            }
          }, {
            key: "textBaseline",
            get: function() {
              return this._textBaseline
            },
            set: function(t) {
              this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
            }
          }, {
            key: "trim",
            get: function() {
              return this._trim
            },
            set: function(t) {
              this._trim !== t && (this._trim = t, this.styleID++)
            }
          }, {
            key: "whiteSpace",
            get: function() {
              return this._whiteSpace
            },
            set: function(t) {
              this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
            }
          }, {
            key: "wordWrap",
            get: function() {
              return this._wordWrap
            },
            set: function(t) {
              this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
            }
          }, {
            key: "wordWrapWidth",
            get: function() {
              return this._wordWrapWidth
            },
            set: function(t) {
              this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
            }
          }]), t
        }();
      r.default = c
    }, {
      "../const": 42,
      "../utils": 113
    }],
    99: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("./BaseTexture")),
        o = i(t("../settings")),
        s = function(t) {
          function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
              n = arguments[2],
              s = arguments[3];
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, null, n));
            return a.resolution = s || o.default.RESOLUTION, a.width = Math.ceil(r), a.height = Math.ceil(i), a.realWidth = a.width * a.resolution, a.realHeight = a.height * a.resolution, a.scaleMode = void 0 !== n ? n : o.default.SCALE_MODE, a.hasLoaded = !0, a._glRenderTargets = {}, a._canvasRenderTarget = null, a.valid = !1, a
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.resize = function(t, e) {
            t = Math.ceil(t), e = Math.ceil(e), t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
          }, e.prototype.destroy = function() {
            t.prototype.destroy.call(this, !0), this.renderer = null
          }, e
        }(n.default);
      r.default = s
    }, {
      "../settings": 91,
      "./BaseTexture": 100
    }],
    100: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("../utils"),
        o = i(t("../settings")),
        s = i(t("eventemitter3")),
        a = i(t("../utils/determineCrossOrigin")),
        u = i(t("bit-twiddle")),
        h = function(t) {
          function e(r, i, s) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return a.uid = (0, n.uid)(), a.touched = 0, a.resolution = s || o.default.RESOLUTION, a.width = 100, a.height = 100, a.realWidth = 100, a.realHeight = 100, a.scaleMode = void 0 !== i ? i : o.default.SCALE_MODE, a.hasLoaded = !1, a.isLoading = !1, a.source = null, a.imageType = null, a.sourceScale = 1, a.premultipliedAlpha = !0, a.imageUrl = null, a.isPowerOfTwo = !1, a.mipmap = o.default.MIPMAP_TEXTURES, a.wrapMode = o.default.WRAP_MODE, a._glTextures = {}, a._enabled = 0, a._virtalBoundId = -1, a._destroyed = !1, a.textureCacheIds = [], r && a.loadSource(r), a
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.update = function() {
            this._destroyed || (this.source && null !== this.source && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this._updateDimensions()), this.source && null !== this.source && this.emit("update", this))
          }, e.prototype._updateDimensions = function() {
            this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = u.default.isPow2(this.realWidth) && u.default.isPow2(this.realHeight)
          }, e.prototype.loadSource = function(t) {
            var e = this.isLoading;
            this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null);
            var r = !this.source;
            if (this.source = t, (t.src && t.complete || t.getContext) && t.width && t.height) this._updateImageType(), this._sourceLoaded(), r && this.emit("loaded", this);
            else if (!t.getContext) {
              this.isLoading = !0;
              var i = this;
              t.onload = function() {
                i._updateImageType(), t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i._sourceLoaded(), i.emit("loaded", i))
              }, t.onerror = function() {
                t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
              }, t.complete && t.src && (t.onload = null, t.onerror = null, this.isLoading = !1, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
            }
          }, e.prototype._updateImageType = function() {
            if (this.imageUrl) {
              var t = (0, n.decomposeDataUri)(this.imageUrl),
                e = void 0;
              if (t && "image" === t.mediaType) {
                var r = t.subType.split("+")[0];
                if (!(e = (0, n.getUrlFileExtension)("." + r))) throw new Error("Invalid image type in data URI.")
              } else(e = (0, n.getUrlFileExtension)(this.imageUrl)) || (e = "png");
              this.imageType = e
            }
          }, e.prototype._sourceLoaded = function() {
            this.hasLoaded = !0, this.update()
          }, e.prototype.destroy = function() {
            this.imageUrl && (delete n.TextureCache[this.imageUrl], this.imageUrl = null, this.source.src = ""), this.source = null, this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this._destroyed = !0
          }, e.prototype.dispose = function() {
            this.emit("dispose", this)
          }, e.prototype.updateSourceImage = function(t) {
            this.source.src = t, this.loadSource(this.source)
          }, e.fromImage = function(t, r, i, o) {
            var s = n.BaseTextureCache[t];
            if (!s) {
              var u = new Image;
              void 0 === r && 0 !== t.indexOf("data:") ? u.crossOrigin = (0, a.default)(t) : r && (u.crossOrigin = "string" == typeof r ? r : "anonymous"), (s = new e(u, i)).imageUrl = t, o && (s.sourceScale = o), s.resolution = (0, n.getResolutionOfUrl)(t), u.src = t, e.addToCache(s, t)
            }
            return s
          }, e.fromCanvas = function(t, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
            t._pixiId || (t._pixiId = i + "_" + (0, n.uid)());
            var o = n.BaseTextureCache[t._pixiId];
            return o || (o = new e(t, r), e.addToCache(o, t._pixiId)), o
          }, e.fromWxImage = function(t, r, i) {
            var o = t.src,
              s = n.BaseTextureCache[o];
            return s || ((s = new e(t, r)).imageUrl = o, i && (s.sourceScale = i), s.resolution = (0, n.getResolutionOfUrl)(o), e.addToCache(s, o)), s
          }, e.from = function(t, r, i) {
            if ("string" == typeof t) return e.fromImage(t, void 0, r, i);
            if (t instanceof HTMLImageElement) {
              var o = t.src,
                s = n.BaseTextureCache[o];
              return s || ((s = new e(t, r)).imageUrl = o, i && (s.sourceScale = i), s.resolution = (0, n.getResolutionOfUrl)(o), e.addToCache(s, o)), s
            }
            return t instanceof HTMLCanvasElement ? e.fromCanvas(t, r) : t
          }, e.addToCache = function(t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), n.BaseTextureCache[e] = t)
          }, e.removeFromCache = function(t) {
            if ("string" == typeof t) {
              var e = n.BaseTextureCache[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return r > -1 && e.textureCacheIds.splice(r, 1), delete n.BaseTextureCache[t], e
              }
            } else if (t && t.textureCacheIds) {
              for (var i = 0; i < t.textureCacheIds.length; ++i) delete n.BaseTextureCache[t.textureCacheIds[i]];
              return t.textureCacheIds.length = 0, t
            }
            return null
          }, e
        }(s.default);
      r.default = h
    }, {
      "../settings": 91,
      "../utils": 113,
      "../utils/determineCrossOrigin": 112,
      "bit-twiddle": 1,
      eventemitter3: 3
    }],
    101: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("./BaseRenderTexture")),
        o = function(t) {
          function e(r, i) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = null;
            if (!(r instanceof n.default)) {
              var s = arguments[1],
                a = arguments[2],
                u = arguments[3],
                h = arguments[4];
              console.warn("Please use RenderTexture.create(" + s + ", " + a + ") instead of the ctor directly."), o = arguments[0], i = null, r = new n.default(s, a, u, h)
            }
            var l = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, i));
            return l.legacyRenderer = o, l.valid = !0, l._updateUvs(), l
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.resize = function(t, e, r) {
            t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, r || this.baseTexture.resize(t, e), this._updateUvs()
          }, e.create = function(t, r, i, o) {
            return new e(new n.default(t, r, i, o))
          }, e
        }(i(t("./Texture")).default);
      r.default = o
    }, {
      "./BaseRenderTexture": 99,
      "./Texture": 103
    }],
    102: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = t("../"),
        o = t("../utils"),
        s = function() {
          function t(e, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.baseTexture = e, this.textures = {}, this.animations = {}, this.data = r, this.resolution = this._updateResolution(i || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
          }
          return i(t, null, [{
            key: "BATCH_SIZE",
            get: function() {
              return 1e3
            }
          }]), t.prototype._updateResolution = function(t) {
            var e = this.data.meta.scale,
              r = (0, o.getResolutionOfUrl)(t, null);
            return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && (this.baseTexture.resolution = r, this.baseTexture.update()), r
          }, t.prototype.parse = function(e) {
            this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
          }, t.prototype._processFrames = function(e) {
            for (var r = e, i = t.BATCH_SIZE, o = this.baseTexture.sourceScale; r - e < i && r < this._frameKeys.length;) {
              var s = this._frameKeys[r],
                a = this._frames[s],
                u = a.frame;
              if (u) {
                var h, l = null,
                  c = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame,
                  f = new n.Rectangle(0, 0, Math.floor(c.w * o) / this.resolution, Math.floor(c.h * o) / this.resolution);
                h = a.rotated ? new n.Rectangle(Math.floor(u.x * o) / this.resolution, Math.floor(u.y * o) / this.resolution, Math.floor(u.h * o) / this.resolution, Math.floor(u.w * o) / this.resolution) : new n.Rectangle(Math.floor(u.x * o) / this.resolution, Math.floor(u.y * o) / this.resolution, Math.floor(u.w * o) / this.resolution, Math.floor(u.h * o) / this.resolution), !1 !== a.trimmed && a.spriteSourceSize && (l = new n.Rectangle(Math.floor(a.spriteSourceSize.x * o) / this.resolution, Math.floor(a.spriteSourceSize.y * o) / this.resolution, Math.floor(u.w * o) / this.resolution, Math.floor(u.h * o) / this.resolution)), this.textures[s] = new n.Texture(this.baseTexture, h, f, l, a.rotated ? 2 : 0, a.anchor), n.Texture.addToCache(this.textures[s], s)
              }
              r++
            }
          }, t.prototype._processAnimations = function() {
            var t = this.data.animations || {};
            for (var e in t) {
              this.animations[e] = [];
              var r = t[e],
                i = Array.isArray(r),
                n = 0;
              for (r = i ? r : r[Symbol.iterator]();;) {
                var o;
                if (i) {
                  if (n >= r.length) break;
                  o = r[n++]
                } else {
                  if ((n = r.next()).done) break;
                  o = n.value
                }
                var s = o;
                this.animations[e].push(this.textures[s])
              }
            }
          }, t.prototype._parseComplete = function() {
            var t = this._callback;
            this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
          }, t.prototype._nextBatch = function() {
            var e = this;
            this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout((function() {
              e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
            }), 0)
          }, t.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            for (var e in this.textures) this.textures[e].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
          }, t
        }();
      r.default = s
    }, {
      "../": 60,
      "../utils": 113
    }],
    103: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function n(t) {
        t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
      }
      r.__esModule = !0;
      var o = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        s = i(t("./BaseTexture")),
        a = i(t("./VideoBaseTexture")),
        u = i(t("./TextureUvs")),
        h = i(t("eventemitter3")),
        l = t("../math"),
        c = t("../utils"),
        f = i(t("../settings")),
        d = function(t) {
          function e(r, i, n, o, s, a) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var u = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            if (u.noFrame = !1, i || (u.noFrame = !0, i = new l.Rectangle(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), u.baseTexture = r, u._frame = i, u.trim = o, u.valid = !1, u.requiresUpdate = !1, u._uvs = null, u.orig = n || i, u._rotate = Number(s || 0), !0 === s) u._rotate = 2;
            else if (u._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
            return r.hasLoaded ? (u.noFrame && (i = new l.Rectangle(0, 0, r.width, r.height), r.on("update", u.onBaseTextureUpdated, u)), u.frame = i) : r.once("loaded", u.onBaseTextureLoaded, u), u.defaultAnchor = a ? new l.Point(a.x, a.y) : new l.Point(0, 0), u._updateID = 0, u.transform = null, u.textureCacheIds = [], u
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.update = function() {
            this.baseTexture.update()
          }, e.prototype.onBaseTextureLoaded = function(t) {
            this._updateID++, this.noFrame ? this.frame = new l.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
          }, e.prototype.onBaseTextureUpdated = function(t) {
            this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
          }, e.prototype.destroy = function(t) {
            this.baseTexture && (t && (c.TextureCache[this.baseTexture.imageUrl] && e.removeFromCache(this.baseTexture.imageUrl), this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
          }, e.prototype.clone = function() {
            return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
          }, e.prototype._updateUvs = function() {
            this._uvs || (this._uvs = new u.default), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
          }, e.fromImage = function(t, r, i, n) {
            var o = c.TextureCache[t];
            return o || (o = new e(s.default.fromImage(t, r, i, n)), e.addToCache(o, t)), o
          }, e.fromFrame = function(t) {
            var e = c.TextureCache[t];
            if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
            return e
          }, e.fromCanvas = function(t, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
            return new e(s.default.fromCanvas(t, r, i))
          }, e.fromVideo = function(t, r) {
            return "string" == typeof t ? e.fromVideoUrl(t, r) : new e(a.default.fromVideo(t, r))
          }, e.fromVideoUrl = function(t, r) {
            return new e(a.default.fromUrl(t, r))
          }, e.from = function(t) {
            if ("string" == typeof t) {
              var r = c.TextureCache[t];
              return r || (null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? e.fromVideoUrl(t) : e.fromImage(t))
            }
            return t instanceof HTMLImageElement ? new e(s.default.from(t)) : t instanceof HTMLCanvasElement ? e.fromCanvas(t, f.default.SCALE_MODE, "HTMLCanvasElement") : t instanceof HTMLVideoElement ? e.fromVideo(t) : t instanceof s.default ? new e(t) : t
          }, e.fromLoader = function(t, r, i) {
            var n = new s.default(t, void 0, (0, c.getResolutionOfUrl)(r)),
              o = new e(n);
            return n.imageUrl = r, i || (i = r), s.default.addToCache(o.baseTexture, i), e.addToCache(o, i), i !== r && (s.default.addToCache(o.baseTexture, r), e.addToCache(o, r)), o
          }, e.addToCache = function(t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), c.TextureCache[e] = t)
          }, e.removeFromCache = function(t) {
            if ("string" == typeof t) {
              var e = c.TextureCache[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return r > -1 && e.textureCacheIds.splice(r, 1), delete c.TextureCache[t], e
              }
            } else if (t && t.textureCacheIds) {
              for (var i = 0; i < t.textureCacheIds.length; ++i) c.TextureCache[t.textureCacheIds[i]] === t && delete c.TextureCache[t.textureCacheIds[i]];
              return t.textureCacheIds.length = 0, t
            }
            return null
          }, o(e, [{
            key: "frame",
            get: function() {
              return this._frame
            },
            set: function(t) {
              this._frame = t, this.noFrame = !1;
              var e = t.x,
                r = t.y,
                i = t.width,
                n = t.height,
                o = e + i > this.baseTexture.width,
                s = r + n > this.baseTexture.height;
              if (o || s) {
                var a = o && s ? "and" : "or",
                  u = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width,
                  h = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + u + " " + a + " " + h)
              }
              this.valid = i && n && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
            }
          }, {
            key: "rotate",
            get: function() {
              return this._rotate
            },
            set: function(t) {
              this._rotate = t, this.valid && this._updateUvs()
            }
          }, {
            key: "width",
            get: function() {
              return this.orig.width
            }
          }, {
            key: "height",
            get: function() {
              return this.orig.height
            }
          }]), e
        }(h.default);
      r.default = d, d.EMPTY = new d(new s.default), n(d.EMPTY), n(d.EMPTY.baseTexture), d.WHITE = function() {
        var t = document.createElement("canvas");
        t.width = 16, t.height = 16;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new d(new s.default(t))
      }(), n(d.WHITE), n(d.WHITE.baseTexture)
    }, {
      "../math": 65,
      "../settings": 91,
      "../utils": 113,
      "./BaseTexture": 100,
      "./TextureUvs": 105,
      "./VideoBaseTexture": 106,
      eventemitter3: 3
    }],
    104: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../math/Matrix")),
        o = new n.default,
        s = function() {
          function t(e, r) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this._texture = e, this.mapCoord = new n.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = void 0 === r ? .5 : r
          }
          return t.prototype.multiplyUvs = function(t, e) {
            void 0 === e && (e = t);
            for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
              var n = t[i],
                o = t[i + 1];
              e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty
            }
            return e
          }, t.prototype.update = function(t) {
            var e = this._texture;
            if (!e || !e.valid) return !1;
            if (!t && this._lastTextureID === e._updateID) return !1;
            this._lastTextureID = e._updateID;
            var r = e._uvs;
            this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
            var i = e.orig,
              n = e.trim;
            n && (o.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(o));
            var s = e.baseTexture,
              a = this.uClampFrame,
              u = this.clampMargin / s.resolution,
              h = this.clampOffset;
            return a[0] = (e._frame.x + u + h) / s.width, a[1] = (e._frame.y + u + h) / s.height, a[2] = (e._frame.x + e._frame.width - u + h) / s.width, a[3] = (e._frame.y + e._frame.height - u + h) / s.height, this.uClampOffset[0] = h / s.realWidth, this.uClampOffset[1] = h / s.realHeight, !0
          }, i(t, [{
            key: "texture",
            get: function() {
              return this._texture
            },
            set: function(t) {
              this._texture = t, this._lastTextureID = -1
            }
          }]), t
        }();
      r.default = s
    }, {
      "../math/Matrix": 62
    }],
    105: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../math/GroupD8")),
        n = function() {
          function t() {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
          }
          return t.prototype.set = function(t, e, r) {
            var n = e.width,
              o = e.height;
            if (r) {
              var s = t.width / 2 / n,
                a = t.height / 2 / o,
                u = t.x / n + s,
                h = t.y / o + a;
              r = i.default.add(r, i.default.NW), this.x0 = u + s * i.default.uX(r), this.y0 = h + a * i.default.uY(r), r = i.default.add(r, 2), this.x1 = u + s * i.default.uX(r), this.y1 = h + a * i.default.uY(r), r = i.default.add(r, 2), this.x2 = u + s * i.default.uX(r), this.y2 = h + a * i.default.uY(r), r = i.default.add(r, 2), this.x3 = u + s * i.default.uX(r), this.y3 = h + a * i.default.uY(r)
            } else this.x0 = t.x / n, this.y0 = t.y / o, this.x1 = (t.x + t.width) / n, this.y1 = t.y / o, this.x2 = (t.x + t.width) / n, this.y2 = (t.y + t.height) / o, this.x3 = t.x / n, this.y3 = (t.y + t.height) / o;
            this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
          }, t
        }();
      r.default = n
    }, {
      "../math/GroupD8": 61
    }],
    106: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function n(t, e) {
        e || (e = "video/" + (t = t.split("?").shift().toLowerCase()).substr(t.lastIndexOf(".") + 1));
        var r = document.createElement("source");
        return r.src = t, r.type = e, r
      }
      r.__esModule = !0;
      var o = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        s = i(t("./BaseTexture")),
        a = t("../utils"),
        u = t("../ticker"),
        h = t("../const"),
        l = i(t("../utils/determineCrossOrigin")),
        c = function(t) {
          function e(r, i) {
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, e), !r) throw new Error("No video source element specified.");
            (r.readyState === r.HAVE_ENOUGH_DATA || r.readyState === r.HAVE_FUTURE_DATA) && r.width && r.height && (r.complete = !0);
            var n = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, i));
            return n.width = r.videoWidth, n.height = r.videoHeight, n._autoUpdate = !0, n._isAutoUpdating = !1, n.autoPlay = !0, n.update = n.update.bind(n), n._onCanPlay = n._onCanPlay.bind(n), r.addEventListener("play", n._onPlayStart.bind(n)), r.addEventListener("pause", n._onPlayStop.bind(n)), n.hasLoaded = !1, n.__loaded = !1, n._isSourceReady() ? n._onCanPlay() : (r.addEventListener("canplay", n._onCanPlay), r.addEventListener("canplaythrough", n._onCanPlay)), n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._isSourcePlaying = function() {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
          }, e.prototype._isSourceReady = function() {
            return 3 === this.source.readyState || 4 === this.source.readyState
          }, e.prototype._onPlayStart = function() {
            this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (u.shared.add(this.update, this, h.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0)
          }, e.prototype._onPlayStop = function() {
            this._isAutoUpdating && (u.shared.remove(this.update, this), this._isAutoUpdating = !1)
          }, e.prototype._onCanPlay = function() {
            this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
          }, e.prototype.destroy = function() {
            this._isAutoUpdating && u.shared.remove(this.update, this), this.source && this.source._pixiId && (s.default.removeFromCache(this.source._pixiId), delete this.source._pixiId, this.source.pause(), this.source.src = "", this.source.load()), t.prototype.destroy.call(this)
          }, e.fromVideo = function(t, r) {
            t._pixiId || (t._pixiId = "video_" + (0, a.uid)());
            var i = a.BaseTextureCache[t._pixiId];
            return i || (i = new e(t, r), s.default.addToCache(i, t._pixiId)), i
          }, e.fromUrl = function(t, r, i) {
            var o = document.createElement("video");
            o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", "");
            var s = Array.isArray(t) ? t[0].src || t[0] : t.src || t;
            if (void 0 === i && 0 !== s.indexOf("data:") ? o.crossOrigin = (0, l.default)(s) : i && (o.crossOrigin = "string" == typeof i ? i : "anonymous"), Array.isArray(t))
              for (var a = 0; a < t.length; ++a) o.appendChild(n(t[a].src || t[a], t[a].mime));
            else o.appendChild(n(s, t.mime));
            return o.load(), e.fromVideo(o, r)
          }, o(e, [{
            key: "autoUpdate",
            get: function() {
              return this._autoUpdate
            },
            set: function(t) {
              t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (u.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (u.shared.add(this.update, this, h.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0))
            }
          }]), e
        }(s.default);
      r.default = c, c.fromUrls = c.fromUrl
    }, {
      "../const": 42,
      "../ticker": 109,
      "../utils": 113,
      "../utils/determineCrossOrigin": 112,
      "./BaseTexture": 100
    }],
    107: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = i(t("../settings")),
        s = t("../const"),
        a = i(t("./TickerListener")),
        u = function() {
          function t() {
            var e = this;
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this._head = new a.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / o.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function(t) {
              e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)))
            }
          }
          return t.prototype._requestIfNeeded = function() {
            null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
          }, t.prototype._cancelIfNeeded = function() {
            null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
          }, t.prototype._startIfPossible = function() {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start()
          }, t.prototype.add = function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UPDATE_PRIORITY.NORMAL;
            return this._addListener(new a.default(t, e, r))
          }, t.prototype.addOnce = function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UPDATE_PRIORITY.NORMAL;
            return this._addListener(new a.default(t, e, r, !0))
          }, t.prototype._addListener = function(t) {
            var e = this._head.next,
              r = this._head;
            if (e) {
              for (; e;) {
                if (t.priority > e.priority) {
                  t.connect(r);
                  break
                }
                r = e, e = e.next
              }
              t.previous || t.connect(r)
            } else t.connect(r);
            return this._startIfPossible(), this
          }, t.prototype.remove = function(t, e) {
            for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;
            return this._head.next || this._cancelIfNeeded(), this
          }, t.prototype.start = function() {
            this.started || (this.started = !0, this._requestIfNeeded())
          }, t.prototype.stop = function() {
            this.started && (this.started = !1, this._cancelIfNeeded())
          }, t.prototype.destroy = function() {
            this.stop();
            for (var t = this._head.next; t;) t = t.destroy(!0);
            this._head.destroy(), this._head = null
          }, t.prototype.update = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(),
              e = void 0;
            if (t > this.lastTime) {
              (e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * o.default.TARGET_FPMS * this.speed;
              for (var r = this._head, i = r.next; i;) i = i.emit(this.deltaTime);
              r.next || this._cancelIfNeeded()
            } else this.deltaTime = this.elapsedMS = 0;
            this.lastTime = t
          }, n(t, [{
            key: "FPS",
            get: function() {
              return 1e3 / this.elapsedMS
            }
          }, {
            key: "minFPS",
            get: function() {
              return 1e3 / this._maxElapsedMS
            },
            set: function(t) {
              var e = Math.min(Math.max(0, t) / 1e3, o.default.TARGET_FPMS);
              this._maxElapsedMS = 1 / e
            }
          }]), t
        }();
      r.default = u
    }, {
      "../const": 42,
      "../settings": 91,
      "./TickerListener": 108
    }],
    108: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.fn = e, this.context = r, this.priority = i, this.once = n, this.next = null, this.previous = null, this._destroyed = !1
        }
        return t.prototype.match = function(t, e) {
          return e = e || null, this.fn === t && this.context === e
        }, t.prototype.emit = function(t) {
          this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
          var e = this.next;
          return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
        }, t.prototype.connect = function(t) {
          this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
        }, t.prototype.destroy = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
          var e = this.next;
          return this.next = t ? null : e, this.previous = null, e
        }, t
      }();
      r.default = i
    }, {}],
    109: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.Ticker = r.shared = void 0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Ticker")),
        n = new i.default;
      n.autoStart = !0, n.destroy = function() {}, r.shared = n, r.Ticker = i.default
    }, {
      "./Ticker": 107
    }],
    110: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function() {
        return !(navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
      }
    }, {}],
    111: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        for (var e = 6 * t, r = new Uint16Array(e), i = 0, n = 0; i < e; i += 6, n += 4) r[i + 0] = n + 0, r[i + 1] = n + 1, r[i + 2] = n + 2, r[i + 3] = n + 0, r[i + 4] = n + 2, r[i + 5] = n + 3;
        return r
      }
    }, {}],
    112: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        if (0 === t.indexOf("data:")) return "";
        e = e || window.location, n || (n = document.createElement("a")), n.href = t;
        var r = !(t = i.default.parse(n.href)).port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous"
      };
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("url")),
        n = void 0
    }, {
      url: 37
    }],
    113: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0, r.premultiplyBlendMode = r.BaseTextureCache = r.TextureCache = r.earcut = r.mixins = r.pluginTarget = r.EventEmitter = r.removeItems = void 0, r.uid = function() {
        return ++f
      }, r.hex2rgb = function(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
      }, r.hex2string = function(t) {
        return t = t.toString(16), "#" + ("000000".substr(0, 6 - t.length) + t)
      }, r.rgb2hex = function(t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
      }, r.getResolutionOfUrl = function(t, e) {
        var r = o.default.RETINA_PREFIX.exec(t);
        return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
      }, r.decomposeDataUri = function(t) {
        var e = n.DATA_URI.exec(t);
        if (e) return {
          mediaType: e[1] ? e[1].toLowerCase() : void 0,
          subType: e[2] ? e[2].toLowerCase() : void 0,
          charset: e[3] ? e[3].toLowerCase() : void 0,
          encoding: e[4] ? e[4].toLowerCase() : void 0,
          data: e[5]
        }
      }, r.getUrlFileExtension = function(t) {
        var e = n.URL_FILE_EXTENSION.exec(t);
        if (e) return e[1].toLowerCase()
      }, r.isWebGLSupported = function() {
        return !0
      }, r.sign = function(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
      }, r.destroyTextureCache = function() {
        var t = void 0;
        for (t in d) d[t].destroy();
        for (t in p) p[t].destroy()
      }, r.clearTextureCache = function() {
        var t = void 0;
        for (t in d) delete d[t];
        for (t in p) delete p[t]
      }, r.correctBlendMode = function(t, e) {
        return y[e ? 1 : 0][t]
      }, r.premultiplyTint = function(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var r = t >> 16 & 255,
          i = t >> 8 & 255,
          n = 255 & t;
        return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n = n * e + .5 | 0)
      }, r.premultiplyRgba = function(t, e, r, i) {
        return r = r || new Float32Array(4), i || void 0 === i ? (r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]), r[3] = e, r
      }, r.premultiplyTintToRgba = function(t, e, r, i) {
        return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (i || void 0 === i) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r
      };
      var n = t("../const"),
        o = i(t("../settings")),
        s = i(t("eventemitter3")),
        a = i(t("./pluginTarget")),
        u = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("./mixin")),
        h = i(t("remove-array-items")),
        l = i(t("./mapPremultipliedBlendModes")),
        c = i(t("earcut")),
        f = 0;
      r.removeItems = h.default, r.EventEmitter = s.default, r.pluginTarget = a.default, r.mixins = u, r.earcut = c.default;
      var d = r.TextureCache = Object.create(null),
        p = r.BaseTextureCache = Object.create(null),
        y = r.premultiplyBlendMode = (0, l.default)()
    }, {
      "../const": 42,
      "../settings": 91,
      "./mapPremultipliedBlendModes": 114,
      "./mixin": 115,
      "./pluginTarget": 116,
      earcut: 2,
      eventemitter3: 3,
      "remove-array-items": 30
    }],
    114: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function() {
        for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
        t[i.BLEND_MODES.NORMAL_NPM] = i.BLEND_MODES.NORMAL, t[i.BLEND_MODES.ADD_NPM] = i.BLEND_MODES.ADD, t[i.BLEND_MODES.SCREEN_NPM] = i.BLEND_MODES.SCREEN, e[i.BLEND_MODES.NORMAL] = i.BLEND_MODES.NORMAL_NPM, e[i.BLEND_MODES.ADD] = i.BLEND_MODES.ADD_NPM, e[i.BLEND_MODES.SCREEN] = i.BLEND_MODES.SCREEN_NPM;
        var n = [];
        return n.push(e), n.push(t), n
      };
      var i = t("../const")
    }, {
      "../const": 42
    }],
    115: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        if (t && e)
          for (var r = Object.keys(e), i = 0; i < r.length; ++i) {
            var n = r[i];
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
          }
      }
      r.__esModule = !0, r.mixin = i, r.delayMixin = function(t, e) {
        n.push(t, e)
      }, r.performMixins = function() {
        for (var t = 0; t < n.length; t += 2) i(n[t], n[t + 1]);
        n.length = 0
      };
      var n = []
    }, {}],
    116: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = {
        mixin: function(t) {
          ! function(t) {
            t.__plugins = {}, t.registerPlugin = function(e, r) {
              t.__plugins[e] = r
            }, t.prototype.initPlugins = function() {
              for (var e in this.plugins = this.plugins || {}, t.__plugins) this.plugins[e] = new t.__plugins[e](this)
            }, t.prototype.destroyPlugins = function() {
              for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
              this.plugins = null
            }
          }(t)
        }
      }
    }, {}],
    117: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        var e = t.width,
          r = t.height,
          i = t.getContext("2d"),
          n = i.getImageData(0, 0, e, r).data,
          o = n.length,
          s = {
            top: null,
            left: null,
            right: null,
            bottom: null
          },
          a = null,
          u = void 0,
          h = void 0,
          l = void 0;
        for (u = 0; u < o; u += 4) 0 !== n[u + 3] && (h = u / 4 % e, l = ~~(u / 4 / e), null === s.top && (s.top = l), (null === s.left || h < s.left) && (s.left = h), (null === s.right || s.right < h) && (s.right = h + 1), (null === s.bottom || s.bottom < l) && (s.bottom = l));
        return null !== s.top && (e = s.right - s.left, r = s.bottom - s.top + 1, a = i.getImageData(s.left, s.top, e, r)), {
          height: r,
          width: e,
          data: a
        }
      }
    }, {}],
    118: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = function(t) {
          function e(r, i) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r[0] instanceof n.Texture ? r[0] : r[0].texture));
            return o._textures = null, o._durations = null, o.textures = r, o._autoUpdate = !1 !== i, o.animationSpeed = 1, o.loop = !0, o.onComplete = null, o.onFrameChange = null, o.onLoop = null, o._currentTime = 0, o.playing = !1, o
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.stop = function() {
            this.playing && (this.playing = !1, this._autoUpdate && n.ticker.shared.remove(this.update, this))
          }, e.prototype.play = function() {
            this.playing || (this.playing = !0, this._autoUpdate && n.ticker.shared.add(this.update, this, n.UPDATE_PRIORITY.HIGH))
          }, e.prototype.gotoAndStop = function(t) {
            this.stop();
            var e = this.currentFrame;
            this._currentTime = t, e !== this.currentFrame && this.updateTexture()
          }, e.prototype.gotoAndPlay = function(t) {
            var e = this.currentFrame;
            this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
          }, e.prototype.update = function(t) {
            var e = this.animationSpeed * t,
              r = this.currentFrame;
            if (null !== this._durations) {
              var i = this._currentTime % 1 * this._durations[this.currentFrame];
              for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
              var n = Math.sign(this.animationSpeed * t);
              for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * n, this._currentTime += n;
              this._currentTime += i / this._durations[this.currentFrame]
            } else this._currentTime += e;
            this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(), this.updateTexture())
          }, e.prototype.updateTexture = function() {
            this._texture = this._textures[this.currentFrame], this._textureID = -1, this.cachedTint = 16777215, this.onFrameChange && this.onFrameChange(this.currentFrame)
          }, e.prototype.destroy = function(e) {
            this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
          }, e.fromFrames = function(t) {
            for (var r = [], i = 0; i < t.length; ++i) r.push(n.Texture.fromFrame(t[i]));
            return new e(r)
          }, e.fromImages = function(t) {
            for (var r = [], i = 0; i < t.length; ++i) r.push(n.Texture.fromImage(t[i]));
            return new e(r)
          }, i(e, [{
            key: "totalFrames",
            get: function() {
              return this._textures.length
            }
          }, {
            key: "textures",
            get: function() {
              return this._textures
            },
            set: function(t) {
              if (t[0] instanceof n.Texture) this._textures = t, this._durations = null;
              else {
                this._textures = [], this._durations = [];
                for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
              }
              this.gotoAndStop(0), this.updateTexture()
            }
          }, {
            key: "currentFrame",
            get: function() {
              var t = Math.floor(this._currentTime) % this._textures.length;
              return t < 0 && (t += this._textures.length), t
            }
          }]), e
        }(n.Sprite);
      r.default = o
    }, {
      "../core": 60
    }],
    119: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        s = i(t("../core/math/ObservablePoint")),
        a = t("../core/utils"),
        u = (i(t("../core/settings")), function(t) {
          function e(r) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return n._textWidth = 0, n._textHeight = 0, n._glyphs = [], n._font = {
              tint: void 0 !== i.tint ? i.tint : 16777215,
              align: i.align || "left",
              name: null,
              size: 0
            }, n.font = i.font, n._text = r, n._maxWidth = 0, n._maxLineHeight = 0, n._letterSpacing = 0, n._anchor = new s.default((function() {
              n.dirty = !0
            }), n, 0, 0), n.dirty = !1, n.updateText(), n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.updateText = function() {
            for (var t = e.fonts[this._font.name], r = this._font.size / t.size, i = new o.Point, n = [], s = [], a = this.text.replace(/(?:\r\n|\r)/g, "\n"), u = a.length, h = this._maxWidth * t.size / this._font.size, l = null, c = 0, f = 0, d = 0, p = -1, y = 0, v = 0, g = 0, _ = 0; _ < u; _++) {
              var m = a.charCodeAt(_),
                x = a.charAt(_);
              if (/(?:\s)/.test(x) && (p = _, y = c), "\r" !== x && "\n" !== x) {
                var b = t.chars[m];
                b && (l && b.kerning[l] && (i.x += b.kerning[l]), n.push({
                  texture: b.texture,
                  line: d,
                  charCode: m,
                  position: new o.Point(i.x + b.xOffset + this._letterSpacing / 2, i.y + b.yOffset)
                }), i.x += b.xAdvance + this._letterSpacing, c = i.x, g = Math.max(g, b.yOffset + b.texture.height), l = m, -1 !== p && h > 0 && i.x > h && (++v, o.utils.removeItems(n, 1 + p - v, 1 + _ - p), _ = p, p = -1, s.push(y), f = Math.max(f, y), d++, i.x = 0, i.y += t.lineHeight, l = null))
              } else s.push(c), f = Math.max(f, c), ++d, ++v, i.x = 0, i.y += t.lineHeight, l = null
            }
            var T = a.charAt(a.length - 1);
            "\r" !== T && "\n" !== T && (/(?:\s)/.test(T) && (c = y), s.push(c), f = Math.max(f, c));
            for (var w = [], E = 0; E <= d; E++) {
              var O = 0;
              "right" === this._font.align ? O = f - s[E] : "center" === this._font.align && (O = (f - s[E]) / 2), w.push(O)
            }
            for (var S = n.length, M = this.tint, P = 0; P < S; P++) {
              var C = this._glyphs[P];
              C ? C.texture = n[P].texture : (C = new o.Sprite(n[P].texture), this._glyphs.push(C)), C.position.x = (n[P].position.x + w[n[P].line]) * r, C.position.y = n[P].position.y * r, C.scale.x = C.scale.y = r, C.tint = M, C.parent || this.addChild(C)
            }
            for (var A = S; A < this._glyphs.length; ++A) this.removeChild(this._glyphs[A]);
            if (this._textWidth = f * r, this._textHeight = (i.y + t.lineHeight) * r, 0 !== this.anchor.x || 0 !== this.anchor.y)
              for (var R = 0; R < S; R++) this._glyphs[R].x -= this._textWidth * this.anchor.x, this._glyphs[R].y -= this._textHeight * this.anchor.y;
            this._maxLineHeight = g * r
          }, e.prototype.updateTransform = function() {
            this.validate(), this.containerUpdateTransform()
          }, e.prototype.getLocalBounds = function() {
            return this.validate(), t.prototype.getLocalBounds.call(this)
          }, e.prototype.validate = function() {
            this.dirty && (this.updateText(), this.dirty = !1)
          }, e.registerFont = function(t, r) {
            var i = {},
              n = t.getElementsByTagName("info")[0],
              s = t.getElementsByTagName("common")[0],
              u = t.getElementsByTagName("page"),
              h = (0, a.getResolutionOfUrl)(u[0].getAttribute("file"), 1),
              l = {};
            i.font = n.getAttribute("face"), i.size = parseInt(n.getAttribute("size"), 10), i.lineHeight = parseInt(s.getAttribute("lineHeight"), 10) / h, i.chars = {}, r instanceof o.Texture && (r = [r]);
            for (var c = 0; c < u.length; c++) {
              var f = u[c].getAttribute("id"),
                d = u[c].getAttribute("file");
              l[f] = r instanceof Array ? r[c] : r[d]
            }
            for (var p = t.getElementsByTagName("char"), y = 0; y < p.length; y++) {
              var v = p[y],
                g = parseInt(v.getAttribute("id"), 10),
                _ = v.getAttribute("page") || 0,
                m = new o.Rectangle(parseInt(v.getAttribute("x"), 10) / h + l[_].frame.x / h, parseInt(v.getAttribute("y"), 10) / h + l[_].frame.y / h, parseInt(v.getAttribute("width"), 10) / h, parseInt(v.getAttribute("height"), 10) / h);
              i.chars[g] = {
                xOffset: parseInt(v.getAttribute("xoffset"), 10) / h,
                yOffset: parseInt(v.getAttribute("yoffset"), 10) / h,
                xAdvance: parseInt(v.getAttribute("xadvance"), 10) / h,
                kerning: {},
                texture: new o.Texture(l[_].baseTexture, m),
                page: _
              }
            }
            for (var x = t.getElementsByTagName("kerning"), b = 0; b < x.length; b++) {
              var T = x[b],
                w = parseInt(T.getAttribute("first"), 10) / h,
                E = parseInt(T.getAttribute("second"), 10) / h,
                O = parseInt(T.getAttribute("amount"), 10) / h;
              i.chars[E] && (i.chars[E].kerning[w] = O)
            }
            return e.fonts[i.font] = i, i
          }, e.registerJsonFont = function(t, r) {
            var i = {},
              n = t.font,
              s = n.info,
              u = n.common,
              h = n.pages.page;
            h instanceof Array || (h = [h]);
            var l = h[0]["@file"],
              c = (0, a.getResolutionOfUrl)(l, 1),
              f = {};
            i.font = s["@face"], i.size = parseInt(s["@size"], 10), i.lineHeight = parseInt(u["@lineHeight"], 10) / c, i.chars = {}, r instanceof o.Texture && (r = [r]);
            for (var d = 0; d < h.length; d++) {
              var p = h[d]["@id"],
                y = h[d]["@file"];
              f[p] = r instanceof Array ? r[d] : r[y]
            }
            for (var v = n.chars.char, g = 0; g < v.length; g++) {
              var _ = v[g],
                m = parseInt(_["@id"], 10),
                x = _["@page"] || 0,
                b = new o.Rectangle(parseInt(_["@x"], 10) / c + f[x].frame.x / c, parseInt(_["@y"], 10) / c + f[x].frame.y / c, parseInt(_["@width"], 10) / c, parseInt(_["@height"], 10) / c);
              i.chars[m] = {
                xOffset: parseInt(_["@xoffset"], 10) / c,
                yOffset: parseInt(_["@yoffset"], 10) / c,
                xAdvance: parseInt(_["@xadvance"], 10) / c,
                kerning: {},
                texture: new o.Texture(f[x].baseTexture, b),
                page: x
              }
            }
            if (n.kernings && n.kernings.kerning)
              for (var T = n.kernings.kerning, w = 0; w < T.length; w++) {
                var E = T[w],
                  O = parseInt(E["@first"], 10) / c,
                  S = parseInt(E["@second"], 10) / c,
                  M = parseInt(E["@amount"], 10) / c;
                i.chars[S] && (i.chars[S].kerning[O] = M)
              }
            return e.fonts[i.font] = i, i
          }, n(e, [{
            key: "tint",
            get: function() {
              return this._font.tint
            },
            set: function(t) {
              this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
            }
          }, {
            key: "align",
            get: function() {
              return this._font.align
            },
            set: function(t) {
              this._font.align = t || "left", this.dirty = !0
            }
          }, {
            key: "anchor",
            get: function() {
              return this._anchor
            },
            set: function(t) {
              "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
            }
          }, {
            key: "font",
            get: function() {
              return this._font
            },
            set: function(t) {
              t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
            }
          }, {
            key: "text",
            get: function() {
              return this._text
            },
            set: function(t) {
              t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
            }
          }, {
            key: "maxWidth",
            get: function() {
              return this._maxWidth
            },
            set: function(t) {
              this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
            }
          }, {
            key: "maxLineHeight",
            get: function() {
              return this.validate(), this._maxLineHeight
            }
          }, {
            key: "textWidth",
            get: function() {
              return this.validate(), this._textWidth
            }
          }, {
            key: "letterSpacing",
            get: function() {
              return this._letterSpacing
            },
            set: function(t) {
              this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
            }
          }, {
            key: "textHeight",
            get: function() {
              return this.validate(), this._textHeight
            }
          }]), e
        }(o.Container));
      r.default = u, u.fonts = {}
    }, {
      "../core": 60,
      "../core/math/ObservablePoint": 63,
      "../core/settings": 91,
      "../core/utils": 113
    }],
    120: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = new n.Point,
        s = function(t) {
          function e(r) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return s.tileTransform = new n.TransformStatic, s._width = i, s._height = o, s._canvasPattern = null, s.uvTransform = r.transform || new n.TextureMatrix(r), s.pluginName = "tilingSprite", s.uvRespectAnchor = !1, s
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._onTextureUpdate = function() {
            this.uvTransform && (this.uvTransform.texture = this._texture), this.cachedTint = 16777215
          }, e.prototype._renderWebGL = function(t) {
            var e = this._texture;
            e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
          }, e.prototype._calculateBounds = function() {
            var t = this._width * -this._anchor._x,
              e = this._height * -this._anchor._y,
              r = this._width * (1 - this._anchor._x),
              i = this._height * (1 - this._anchor._y);
            this._bounds.addFrame(this.transform, t, e, r, i)
          }, e.prototype.getLocalBounds = function(e) {
            return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new n.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
          }, e.prototype.containsPoint = function(t) {
            this.worldTransform.applyInverse(t, o);
            var e = this._width,
              r = this._height,
              i = -e * this.anchor._x;
            if (o.x >= i && o.x < i + e) {
              var n = -r * this.anchor._y;
              if (o.y >= n && o.y < n + r) return !0
            }
            return !1
          }, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvTransform = null
          }, e.from = function(t, r, i) {
            return new e(n.Texture.from(t), r, i)
          }, e.fromFrame = function(t, r, i) {
            var o = n.utils.TextureCache[t];
            if (!o) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
            return new e(o, r, i)
          }, e.fromImage = function(t, r, i, o, s) {
            return new e(n.Texture.fromImage(t, o, s), r, i)
          }, i(e, [{
            key: "clampMargin",
            get: function() {
              return this.uvTransform.clampMargin
            },
            set: function(t) {
              this.uvTransform.clampMargin = t, this.uvTransform.update(!0)
            }
          }, {
            key: "tileScale",
            get: function() {
              return this.tileTransform.scale
            },
            set: function(t) {
              this.tileTransform.scale.copy(t)
            }
          }, {
            key: "tilePosition",
            get: function() {
              return this.tileTransform.position
            },
            set: function(t) {
              this.tileTransform.position.copy(t)
            }
          }, {
            key: "width",
            get: function() {
              return this._width
            },
            set: function(t) {
              this._width = t
            }
          }, {
            key: "height",
            get: function() {
              return this._height
            },
            set: function(t) {
              this._height = t
            }
          }]), e
        }(n.Sprite);
      r.default = s
    }, {
      "../core": 60
    }],
    121: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = i(t("../core/textures/Texture")),
        s = i(t("../core/textures/BaseTexture")),
        a = t("../core/utils"),
        u = n.DisplayObject,
        h = new n.Matrix;
      u.prototype._cacheAsBitmap = !1, u.prototype._cacheData = !1;
      var l = function t() {
        (function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        })(this, t), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
      };
      Object.defineProperties(u.prototype, {
        cacheAsBitmap: {
          get: function() {
            return this._cacheAsBitmap
          },
          set: function(t) {
            if (this._cacheAsBitmap !== t) {
              this._cacheAsBitmap = t;
              var e = void 0;
              t ? (this._cacheData || (this._cacheData = new l), (e = this._cacheData).originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
            }
          }
        }
      }), u.prototype._renderCachedWebGL = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
      }, u.prototype._initCachedDisplayObject = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
          var e = this.alpha;
          this.alpha = 1, t.currentRenderer.flush();
          var r = this.getLocalBounds().clone();
          if (this._filters && this._filters.length) {
            var i = this._filters[0].padding;
            r.pad(i)
          }
          var u = t._activeRenderTarget,
            l = t.filterManager.filterStack,
            c = n.RenderTexture.create(0 | r.width, 0 | r.height),
            f = "cacheAsBitmap_" + (0, a.uid)();
          this._cacheData.textureCacheId = f, s.default.addToCache(c.baseTexture, f), o.default.addToCache(c, f);
          var d = h;
          d.tx = -r.x, d.ty = -r.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, c, !0, d, !0), t.bindRenderTarget(u), t.filterManager.filterStack = l, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
          var p = new n.Sprite(c);
          p.transform.worldTransform = this.transform.worldTransform, p.anchor.x = -r.x / r.width, p.anchor.y = -r.y / r.height, p.alpha = e, p._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = p, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = p.containsPoint.bind(p)
        }
      }, u.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
      }, u.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
          var e = this.getLocalBounds(),
            r = this.alpha;
          this.alpha = 1;
          var i = t.context,
            u = n.RenderTexture.create(0 | e.width, 0 | e.height),
            l = "cacheAsBitmap_" + (0, a.uid)();
          this._cacheData.textureCacheId = l, s.default.addToCache(u.baseTexture, l), o.default.addToCache(u, l);
          var c = h;
          this.transform.localTransform.copy(c), c.invert(), c.tx -= e.x, c.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, u, !0, c, !1), t.context = i, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
          var f = new n.Sprite(u);
          f.transform.worldTransform = this.transform.worldTransform, f.anchor.x = -e.x / e.width, f.anchor.y = -e.y / e.height, f._bounds = this._bounds, f.alpha = r, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = f, this.containsPoint = f.containsPoint.bind(f)
        }
      }, u.prototype._calculateCachedBounds = function() {
        this._cacheData.sprite._calculateBounds()
      }, u.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds()
      }, u.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, s.default.removeFromCache(this._cacheData.textureCacheId), o.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
      }, u.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1, this.destroy(t)
      }
    }, {
      "../core": 60,
      "../core/textures/BaseTexture": 100,
      "../core/textures/Texture": 103,
      "../core/utils": 113
    }],
    122: [function(t, e, r) {
      "use strict";
      var i = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e
      }(t("../core"));
      i.DisplayObject.prototype.name = null, i.Container.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++)
          if (this.children[e].name === t) return this.children[e];
        return null
      }
    }, {
      "../core": 60
    }],
    123: [function(t, e, r) {
      "use strict";
      var i = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e
      }(t("../core"));
      i.DisplayObject.prototype.getGlobalPosition = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new i.Point,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
      }
    }, {
      "../core": 60
    }],
    124: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0, r.BitmapText = r.TilingSpriteRenderer = r.TilingSprite = r.AnimatedSprite = void 0;
      var n = t("./AnimatedSprite");
      Object.defineProperty(r, "AnimatedSprite", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./TilingSprite");
      Object.defineProperty(r, "TilingSprite", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      });
      var s = t("./webgl/TilingSpriteRenderer");
      Object.defineProperty(r, "TilingSpriteRenderer", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("./BitmapText");
      Object.defineProperty(r, "BitmapText", {
        enumerable: !0,
        get: function() {
          return i(a).default
        }
      }), t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition")
    }, {
      "./AnimatedSprite": 118,
      "./BitmapText": 119,
      "./TilingSprite": 120,
      "./cacheAsBitmap": 121,
      "./getChildByName": 122,
      "./getGlobalPosition": 123,
      "./webgl/TilingSpriteRenderer": 125
    }],
    125: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        n = t("../../core/const"),
        o = (t("path"), new i.Matrix),
        s = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.shader = null, i.simpleShader = null, i.quad = null, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.shader = new i.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position=vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord=(uTransform*vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\nvoid main(void){\n    vec2 coord=mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord=(uMapCoord * vec3(coord, 1.0)).xy;\n    coord=clamp(coord, uClampFrame.xy, uClampFrame.zw);\n    vec4 sampleTex=texture2D(uSampler, coord);\n    gl_FragColor=sampleTex*uColor;\n}\n"), this.simpleShader = new i.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position=vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord=(uTransform*vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nvoid main(void){\n    vec4 sampleTex=texture2D(uSampler, vTextureCoord);\n    gl_FragColor=sampleTex*uColor;\n}\n"), this.renderer.bindVao(null), this.quad = new i.Quad(t, this.renderer.state.attribState), this.quad.initVao(this.shader)
          }, e.prototype.render = function(t) {
            var e = this.renderer,
              r = this.quad;
            e.bindVao(r.vao);
            var s = r.vertices;
            s[0] = s[6] = t._width * -t.anchor.x, s[1] = s[3] = t._height * -t.anchor.y, s[2] = s[4] = t._width * (1 - t.anchor.x), s[5] = s[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((s = r.uvs)[0] = s[6] = -t.anchor.x, s[1] = s[3] = -t.anchor.y, s[2] = s[4] = 1 - t.anchor.x, s[5] = s[7] = 1 - t.anchor.y), r.upload();
            var a = t._texture,
              u = a.baseTexture,
              h = t.tileTransform.localTransform,
              l = t.uvTransform,
              c = u.isPowerOfTwo && a.frame.width === u.width && a.frame.height === u.height;
            c && (u._glTextures[e.CONTEXT_UID] ? c = u.wrapMode !== n.WRAP_MODES.CLAMP : u.wrapMode === n.WRAP_MODES.CLAMP && (u.wrapMode = n.WRAP_MODES.REPEAT));
            var f = c ? this.simpleShader : this.shader;
            e.bindShader(f);
            var d = a.width,
              p = a.height,
              y = t._width,
              v = t._height;
            o.set(h.a * d / y, h.b * d / v, h.c * p / y, h.d * p / v, h.tx / y, h.ty / v), o.invert(), c ? o.prepend(l.mapCoord) : (f.uniforms.uMapCoord = l.mapCoord.toArray(!0), f.uniforms.uClampFrame = l.uClampFrame, f.uniforms.uClampOffset = l.uClampOffset), f.uniforms.uTransform = o.toArray(!0), f.uniforms.uColor = i.utils.premultiplyTintToRgba(t.tint, t.worldAlpha, f.uniforms.uColor, u.premultipliedAlpha), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = e.bindTexture(a), e.setBlendMode(i.utils.correctBlendMode(t.blendMode, u.premultipliedAlpha)), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
          }, e
        }(i.ObjectRenderer);
      r.default = s, i.WebGLRenderer.registerPlugin("tilingSprite", s)
    }, {
      "../../core": 60,
      "../../core/const": 42,
      path: 7
    }],
    126: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        o = (t("path"), function(t) {
          function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));
            return i.alpha = r, i.glShaderKey = "alpha", i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), i(e, [{
            key: "alpha",
            get: function() {
              return this.uniforms.uAlpha
            },
            set: function(t) {
              this.uniforms.uAlpha = t
            }
          }]), e
        }(n.Filter));
      r.default = o
    }, {
      "../../core": 60,
      path: 7
    }],
    127: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        s = i(t("./BlurXFilter")),
        a = i(t("./BlurYFilter")),
        u = function(t) {
          function e(r, i, n, u) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var h = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return h.blurXFilter = new s.default(r, i, n, u), h.blurYFilter = new a.default(r, i, n, u), h.padding = 0, h.resolution = n || o.settings.RESOLUTION, h.quality = i || 4, h.blur = r || 8, h
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.apply = function(t, e, r) {
            var i = t.getRenderTarget(!0);
            this.blurXFilter.apply(t, e, i, !0), this.blurYFilter.apply(t, i, r, !1), t.returnRenderTarget(i)
          }, n(e, [{
            key: "blur",
            get: function() {
              return this.blurXFilter.blur
            },
            set: function(t) {
              this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
          }, {
            key: "quality",
            get: function() {
              return this.blurXFilter.quality
            },
            set: function(t) {
              this.blurXFilter.quality = this.blurYFilter.quality = t
            }
          }, {
            key: "blurX",
            get: function() {
              return this.blurXFilter.blur
            },
            set: function(t) {
              this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
          }, {
            key: "blurY",
            get: function() {
              return this.blurYFilter.blur
            },
            set: function(t) {
              this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
          }, {
            key: "blendMode",
            get: function() {
              return this.blurYFilter._blendMode
            },
            set: function(t) {
              this.blurYFilter._blendMode = t
            }
          }]), e
        }(o.Filter);
      r.default = u
    }, {
      "../../core": 60,
      "./BlurXFilter": 128,
      "./BlurYFilter": 129
    }],
    128: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        s = i(t("./generateBlurVertSource")),
        a = i(t("./generateBlurFragSource")),
        u = i(t("./getMaxBlurKernelSize")),
        h = function(t) {
          function e(r, i, n, u) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, e), u = u || 5;
            var h = (0, s.default)(u, !0),
              l = (0, a.default)(u),
              c = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, t.call(this, h, l));
            return c.resolution = n || o.settings.RESOLUTION, c._quality = 0, c.quality = i || 4, c.strength = r || 8, c.firstRun = !0, c
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.apply = function(t, e, r, i) {
            if (this.firstRun) {
              var n = t.renderer.gl,
                o = (0, u.default)(n);
              this.vertexSrc = (0, s.default)(o, !0), this.fragmentSrc = (0, a.default)(o), this.firstRun = !1
            }
            if (this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
            else {
              for (var h = t.getRenderTarget(!0), l = e, c = h, f = 0; f < this.passes - 1; f++) {
                t.applyFilter(this, l, c, !0);
                var d = c;
                c = l, l = d
              }
              t.applyFilter(this, l, r, i), t.returnRenderTarget(h)
            }
          }, n(e, [{
            key: "blur",
            get: function() {
              return this.strength
            },
            set: function(t) {
              this.padding = 2 * Math.abs(t), this.strength = t
            }
          }, {
            key: "quality",
            get: function() {
              return this._quality
            },
            set: function(t) {
              this._quality = t, this.passes = t
            }
          }]), e
        }(o.Filter);
      r.default = h
    }, {
      "../../core": 60,
      "./generateBlurFragSource": 130,
      "./generateBlurVertSource": 131,
      "./getMaxBlurKernelSize": 132
    }],
    129: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        o = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        s = i(t("./generateBlurVertSource")),
        a = i(t("./generateBlurFragSource")),
        u = i(t("./getMaxBlurKernelSize")),
        h = function(t) {
          function e(r, i, n, u) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, e), u = u || 5;
            var h = (0, s.default)(u, !1),
              l = (0, a.default)(u),
              c = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, t.call(this, h, l));
            return c.resolution = n || o.settings.RESOLUTION, c._quality = 0, c.quality = i || 4, c.strength = r || 8, c.firstRun = !0, c
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.apply = function(t, e, r, i) {
            if (this.firstRun) {
              var n = t.renderer.gl,
                o = (0, u.default)(n);
              this.vertexSrc = (0, s.default)(o, !1), this.fragmentSrc = (0, a.default)(o), this.firstRun = !1
            }
            if (this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
            else {
              for (var h = t.getRenderTarget(!0), l = e, c = h, f = 0; f < this.passes - 1; f++) {
                t.applyFilter(this, l, c, !0);
                var d = c;
                c = l, l = d
              }
              t.applyFilter(this, l, r, i), t.returnRenderTarget(h)
            }
          }, n(e, [{
            key: "blur",
            get: function() {
              return this.strength
            },
            set: function(t) {
              this.padding = 2 * Math.abs(t), this.strength = t
            }
          }, {
            key: "quality",
            get: function() {
              return this._quality
            },
            set: function(t) {
              this._quality = t, this.passes = t
            }
          }]), e
        }(o.Filter);
      r.default = h
    }, {
      "../../core": 60,
      "./generateBlurFragSource": 130,
      "./generateBlurVertSource": 131,
      "./getMaxBlurKernelSize": 132
    }],
    130: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        for (var e = i[t], r = e.length, o = n, s = "", a = void 0, u = 0; u < t; u++) {
          var h = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", u);
          a = u, u >= r && (a = t - u - 1), s += h = h.replace("%value%", e[a]), s += "\n"
        }
        return (o = o.replace("%blur%", s)).replace("%size%", t)
      };
      var i = {
          5: [.153388, .221461, .250301],
          7: [.071303, .131514, .189879, .214607],
          9: [.028532, .067234, .124009, .179044, .20236],
          11: [.0093, .028002, .065984, .121703, .175713, .198596],
          13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
          15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        n = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
    }, {}],
    131: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t, e) {
        var r = Math.ceil(t / 2),
          n = i,
          o = "",
          s = void 0;
        s = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
        for (var a = 0; a < t; a++) {
          var u = s.replace("%index%", a);
          o += u = u.replace("%sampleIndex%", a - (r - 1) + ".0"), o += "\n"
        }
        return (n = n.replace("%blur%", o)).replace("%size%", t)
      };
      var i = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n")
    }, {}],
    132: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function(t) {
        for (var e = t.getParameter(t.MAX_VARYING_VECTORS), r = 15; r > e;) r -= 2;
        return r
      }
    }, {}],
    133: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        o = (t("path"), function(t) {
          function e() {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\nvoid main(void){\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n    // Premultiply alpha again.\n    rgb *= result.a;\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
            return r.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], r.alpha = 1, r
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._loadMatrix = function(t) {
            var e = t;
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (this._multiply(e, this.uniforms.m, t), e = this._colorMatrix(e)), this.uniforms.m = e
          }, e.prototype._multiply = function(t, e, r) {
            return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t
          }, e.prototype._colorMatrix = function(t) {
            var e = new Float32Array(t);
            return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
          }, e.prototype.brightness = function(t, e) {
            var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
          }, e.prototype.greyscale = function(t, e) {
            var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
          }, e.prototype.blackAndWhite = function(t) {
            this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.hue = function(t, e) {
            t = (t || 0) / 180 * Math.PI;
            var r = Math.cos(t),
              i = Math.sin(t),
              n = 1 / 3,
              o = (0, Math.sqrt)(n),
              s = [r + (1 - r) * n, n * (1 - r) - o * i, n * (1 - r) + o * i, 0, 0, n * (1 - r) + o * i, r + n * (1 - r), n * (1 - r) - o * i, 0, 0, n * (1 - r) - o * i, n * (1 - r) + o * i, r + n * (1 - r), 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(s, e)
          }, e.prototype.contrast = function(t, e) {
            var r = (t || 0) + 1,
              i = -.5 * (r - 1),
              n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
            this._loadMatrix(n, e)
          }, e.prototype.saturate = function() {
            var t = arguments[1],
              e = 2 * (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) / 3 + 1,
              r = -.5 * (e - 1),
              i = [e, r, r, 0, 0, r, e, r, 0, 0, r, r, e, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(i, t)
          }, e.prototype.desaturate = function() {
            this.saturate(-1)
          }, e.prototype.negative = function(t) {
            this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.sepia = function(t) {
            this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.technicolor = function(t) {
            this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
          }, e.prototype.polaroid = function(t) {
            this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.toBGR = function(t) {
            this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.kodachrome = function(t) {
            this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
          }, e.prototype.browni = function(t) {
            this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
          }, e.prototype.vintage = function(t) {
            this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
          }, e.prototype.colorTone = function(t, e, r, i, n) {
            var o = ((r = r || 16770432) >> 16 & 255) / 255,
              s = (r >> 8 & 255) / 255,
              a = (255 & r) / 255,
              u = ((i = i || 3375104) >> 16 & 255) / 255,
              h = (i >> 8 & 255) / 255,
              l = (255 & i) / 255,
              c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, u, h, l, e = e || .15, 0, o - u, s - h, a - l, 0, 0];
            this._loadMatrix(c, n)
          }, e.prototype.night = function(t, e) {
            var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
          }, e.prototype.predator = function(t, e) {
            var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
          }, e.prototype.lsd = function(t) {
            this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
          }, e.prototype.reset = function() {
            this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
          }, i(e, [{
            key: "matrix",
            get: function() {
              return this.uniforms.m
            },
            set: function(t) {
              this.uniforms.m = t
            }
          }, {
            key: "alpha",
            get: function() {
              return this.uniforms.uAlpha
            },
            set: function(t) {
              this.uniforms.uAlpha = t
            }
          }]), e
        }(n.Filter));
      r.default = o, o.prototype.grayscale = o.prototype.greyscale
    }, {
      "../../core": 60,
      path: 7
    }],
    134: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("./noise/NoiseFilter");
      Object.defineProperty(r, "NoiseFilter", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./blur/BlurFilter");
      Object.defineProperty(r, "BlurFilter", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      });
      var s = t("./blur/BlurXFilter");
      Object.defineProperty(r, "BlurXFilter", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("./blur/BlurYFilter");
      Object.defineProperty(r, "BlurYFilter", {
        enumerable: !0,
        get: function() {
          return i(a).default
        }
      });
      var u = t("./colormatrix/ColorMatrixFilter");
      Object.defineProperty(r, "ColorMatrixFilter", {
        enumerable: !0,
        get: function() {
          return i(u).default
        }
      });
      var h = t("./alpha/AlphaFilter");
      Object.defineProperty(r, "AlphaFilter", {
        enumerable: !0,
        get: function() {
          return i(h).default
        }
      })
    }, {
      "./alpha/AlphaFilter": 126,
      "./blur/BlurFilter": 127,
      "./blur/BlurXFilter": 128,
      "./blur/BlurYFilter": 129,
      "./colormatrix/ColorMatrixFilter": 133,
      "./noise/NoiseFilter": 135
    }],
    135: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        o = (t("path"), function(t) {
          function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random();
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n", "precision highp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\nvoid main(){\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n    gl_FragColor = color;\n}\n"));
            return n.noise = r, n.seed = i, n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), i(e, [{
            key: "noise",
            get: function() {
              return this.uniforms.uNoise
            },
            set: function(t) {
              this.uniforms.uNoise = t
            }
          }, {
            key: "seed",
            get: function() {
              return this.uniforms.uSeed
            },
            set: function(t) {
              this.uniforms.uSeed = t
            }
          }]), e
        }(n.Filter));
      r.default = o
    }, {
      "../../core": 60,
      path: 7
    }],
    136: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = function() {
          function t() {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.global = new n.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
          }
          return t.prototype.getLocalPosition = function(t, e, r) {
            return t.worldTransform.applyInverse(r || this.global, e)
          }, t.prototype.copyEvent = function(t) {
            t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
          }, t.prototype.reset = function() {
            this.isPrimary = !1
          }, i(t, [{
            key: "pointerId",
            get: function() {
              return this.identifier
            }
          }]), t
        }();
      r.default = o
    }, {
      "../core": 60
    }],
    137: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
        function t() {
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          })(this, t), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
        }
        return t.prototype.stopPropagation = function() {
          this.stopped = !0
        }, t.prototype.reset = function() {
          this.stopped = !1, this.currentTarget = null, this.target = null
        }, t
      }();
      r.default = i
    }, {}],
    138: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        s = i(t("./InteractionData")),
        a = i(t("./InteractionEvent")),
        u = i(t("./InteractionTrackingData")),
        h = i(t("eventemitter3")),
        l = i(t("./interactiveTarget")),
        c = i(t("../core/settings"));
      o.utils.mixins.delayMixin(o.DisplayObject.prototype, l.default);
      var f = {
          target: null,
          data: {
            global: null
          }
        },
        d = function(t) {
          function e(r, i) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return i = i || {}, n.renderer = r, n.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, n.interactionFrequency = i.interactionFrequency || 10, n.mouse = new s.default, n.mouse.identifier = 1, n.mouse.global.set(-999999), n.activeInteractionData = {}, n.activeInteractionData[1] = n.mouse, n.interactionDataPool = [], n.eventData = new a.default, n.interactionDOMElement = null, n.moveWhenInside = !1, n.eventsAdded = !1, n.mouseOverRenderer = !1, n.supportsTouchEvents = "ontouchstart" in window, n.supportsPointerEvents = !!window.PointerEvent, n.onPointerUp = n.onPointerUp.bind(n), n.processPointerUp = n.processPointerUp.bind(n), n.onPointerCancel = n.onPointerCancel.bind(n), n.processPointerCancel = n.processPointerCancel.bind(n), n.onPointerDown = n.onPointerDown.bind(n), n.processPointerDown = n.processPointerDown.bind(n), n.onPointerMove = n.onPointerMove.bind(n), n.processPointerMove = n.processPointerMove.bind(n), n.onPointerOut = n.onPointerOut.bind(n), n.processPointerOverOut = n.processPointerOverOut.bind(n), n.onPointerOver = n.onPointerOver.bind(n), n.cursorStyles = {
              default: "inherit",
              pointer: "pointer"
            }, n.currentCursorMode = null, n.cursor = null, n._tempPoint = new o.Point, n.resolution = 1, n.setTargetElement(n.renderer.view, n.renderer.resolution), n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.hitTest = function(t, e) {
            return f.target = null, f.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(f, e, null, !0), f.target
          }, e.prototype.setTargetElement = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
          }, e.prototype.addEvents = function() {
            this.interactionDOMElement && (o.ticker.shared.add(this.update, this, o.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : c.default.isLittleGame || (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
          }, e.prototype.removeEvents = function() {
            this.interactionDOMElement && (o.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : c.default.isLittleGame || (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
          }, e.prototype.update = function(t) {
            if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
              if (this.didMove) return void(this.didMove = !1);
              for (var e in this.cursor = null, this.activeInteractionData)
                if (this.activeInteractionData.hasOwnProperty(e)) {
                  var r = this.activeInteractionData[e];
                  if (r.originalEvent && "touch" !== r.pointerType) {
                    var i = this.configureInteractionEventForDOMEvent(this.eventData, r.originalEvent, r);
                    this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                  }
                } this.setCursorMode(this.cursor)
            }
          }, e.prototype.setCursorMode = function(t) {
            if (t = t || "default", this.currentCursorMode !== t) {
              this.currentCursorMode = t;
              var e = this.cursorStyles[t];
              if (e) switch (void 0 === e ? "undefined" : n(e)) {
                case "string":
                  this.interactionDOMElement.style.cursor = e;
                  break;
                case "function":
                  e(t);
                  break;
                case "object":
                  Object.assign(this.interactionDOMElement.style, e)
              } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
            }
          }, e.prototype.dispatchEvent = function(t, e, r) {
            r.stopped || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
          }, e.prototype.mapPositionToPoint = function(t, e, r) {
            var i = void 0,
              n = 1 / this.resolution;
            c.default.isLittleGame ? (t.x = e, t.y = r) : this.interactionDOMElement.parentElement ? (i = this.interactionDOMElement.getBoundingClientRect(), t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n) : (i = {
              x: 0,
              y: 0,
              width: this.interactionDOMElement.width,
              height: this.interactionDOMElement.height
            }, t.x = (e - i.x) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.y) * (this.interactionDOMElement.height / i.height) * n)
          }, e.prototype.processInteractive = function(t, e, r, i, n) {
            if (!e || !e.visible) return !1;
            var o = t.data.global,
              s = !1,
              a = n = e.interactive || n,
              u = !0;
            if (e.hitArea ? (i && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (i = !1, u = !1)), a = !1) : e._mask && i && (e._mask.containsPoint(o) || (i = !1, u = !1)), u && e.interactiveChildren && e.children)
              for (var h = e.children, l = h.length - 1; l >= 0; l--) {
                var c = h[l],
                  f = this.processInteractive(t, c, r, i, a);
                if (f) {
                  if (!c.parent) continue;
                  a = !1, f && (t.target && (i = !1), s = !0)
                }
              }
            return n && (i && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s
          }, e.prototype.onPointerDown = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t);
              this.autoPreventDefault && e[0].isNormalized && t.preventDefault();
              for (var r = e.length, i = 0; i < r; i++) {
                var n = e[i],
                  o = this.getInteractionDataForPointerId(n),
                  s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
                else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                  var a = 2 === n.button;
                  this.emit(a ? "rightdown" : "mousedown", this.eventData)
                }
              }
            }
          }, e.prototype.processPointerDown = function(t, e, r) {
            var i = t.data,
              n = t.data.identifier;
            if (r)
              if (e.trackedPointers[n] || (e.trackedPointers[n] = new u.default(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === i.pointerType) this.dispatchEvent(e, "touchstart", t);
              else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
              var o = 2 === i.button;
              o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
            }
          }, e.prototype.onPointerComplete = function(t, e, r) {
            for (var i = this.normalizeToPointerData(t), n = i.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
              var a = i[s],
                u = this.getInteractionDataForPointerId(a),
                h = this.configureInteractionEventForDOMEvent(this.eventData, a, u);
              if (h.data.originalEvent = t, this.processInteractive(h, this.renderer._lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, h), "mouse" === a.pointerType || "pen" === a.pointerType) {
                var l = 2 === a.button;
                this.emit(l ? "rightup" + o : "mouseup" + o, h)
              } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, h), this.releaseInteractionDataForPointerId(a.pointerId, u))
            }
          }, e.prototype.onPointerCancel = function(t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
          }, e.prototype.processPointerCancel = function(t, e) {
            var r = t.data,
              i = t.data.identifier;
            void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
          }, e.prototype.onPointerUp = function(t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
          }, e.prototype.processPointerUp = function(t, e, r) {
            var i = t.data,
              n = t.data.identifier,
              o = e.trackedPointers[n],
              s = "touch" === i.pointerType,
              a = "mouse" === i.pointerType || "pen" === i.pointerType,
              h = !1;
            if (a) {
              var l = 2 === i.button,
                c = u.default.FLAGS,
                f = l ? c.RIGHT_DOWN : c.LEFT_DOWN,
                d = void 0 !== o && o.flags & f;
              r ? (this.dispatchEvent(e, l ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, l ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, l ? "rightupoutside" : "mouseupoutside", t), o && (l ? o.rightDown = !1 : o.leftDown = !1)
            }
            r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
          }, e.prototype.onPointerMove = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t);
              "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);
              for (var r = e.length, i = 0; i < r; i++) {
                var n = e[i],
                  o = this.getInteractionDataForPointerId(n),
                  s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                s.data.originalEvent = t;
                var a = "touch" !== n.pointerType || this.moveWhenInside;
                this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
              }
              "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
            }
          }, e.prototype.processPointerMove = function(t, e, r) {
            var i = t.data,
              n = "touch" === i.pointerType,
              o = "mouse" === i.pointerType || "pen" === i.pointerType;
            o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
          }, e.prototype.onPointerOut = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t)[0];
              "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
              var r = this.getInteractionDataForPointerId(e),
                i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
              i.data.originalEvent = e, this.processInteractive(i, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(r.identifier)
            }
          }, e.prototype.processPointerOverOut = function(t, e, r) {
            var i = t.data,
              n = t.data.identifier,
              o = "mouse" === i.pointerType || "pen" === i.pointerType,
              s = e.trackedPointers[n];
            r && !s && (s = e.trackedPointers[n] = new u.default(n)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(e, "pointerover", t), o && this.dispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
          }, e.prototype.onPointerOver = function(t) {
            var e = this.normalizeToPointerData(t)[0],
              r = this.getInteractionDataForPointerId(e),
              i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
            i.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", i)
          }, e.prototype.getInteractionDataForPointerId = function(t) {
            var e = t.pointerId,
              r = void 0;
            return 1 === e || "mouse" === t.pointerType ? r = this.mouse : this.activeInteractionData[e] ? r = this.activeInteractionData[e] : ((r = this.interactionDataPool.pop() || new s.default).identifier = e, this.activeInteractionData[e] = r), r.copyEvent(t), r
          }, e.prototype.releaseInteractionDataForPointerId = function(t) {
            var e = this.activeInteractionData[t];
            e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
          }, e.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
            return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t.reset(), t
          }, e.prototype.normalizeToPointerData = function(t) {
            var e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent)
              for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                var n = t.changedTouches[r];
                n && (void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), n.twist = 0, n.tangentialPressure = 0, void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n))
              } else e.push(t);
            return e
          }, e.prototype.destroy = function() {
            this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
          }, e
        }(h.default);
      r.default = d, o.WebGLRenderer.registerPlugin("interaction", d)
    }, {
      "../core": 60,
      "../core/settings": 91,
      "./InteractionData": 136,
      "./InteractionEvent": 137,
      "./InteractionTrackingData": 139,
      "./interactiveTarget": 141,
      eventemitter3: 3
    }],
    139: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function() {
          function t(e) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this._pointerId = e, this._flags = t.FLAGS.NONE
          }
          return t.prototype._doSet = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
          }, i(t, [{
            key: "pointerId",
            get: function() {
              return this._pointerId
            }
          }, {
            key: "flags",
            get: function() {
              return this._flags
            },
            set: function(t) {
              this._flags = t
            }
          }, {
            key: "none",
            get: function() {
              return this._flags === this.constructor.FLAGS.NONE
            }
          }, {
            key: "over",
            get: function() {
              return 0 != (this._flags & this.constructor.FLAGS.OVER)
            },
            set: function(t) {
              this._doSet(this.constructor.FLAGS.OVER, t)
            }
          }, {
            key: "rightDown",
            get: function() {
              return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
            },
            set: function(t) {
              this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
            }
          }, {
            key: "leftDown",
            get: function() {
              return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
            },
            set: function(t) {
              this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
            }
          }]), t
        }();
      r.default = n, n.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
      })
    }, {}],
    140: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("./InteractionData");
      Object.defineProperty(r, "InteractionData", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./InteractionManager");
      Object.defineProperty(r, "InteractionManager", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      });
      var s = t("./interactiveTarget");
      Object.defineProperty(r, "interactiveTarget", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("./InteractionTrackingData");
      Object.defineProperty(r, "InteractionTrackingData", {
        enumerable: !0,
        get: function() {
          return i(a).default
        }
      });
      var u = t("./InteractionEvent");
      Object.defineProperty(r, "InteractionEvent", {
        enumerable: !0,
        get: function() {
          return i(u).default
        }
      })
    }, {
      "./InteractionData": 136,
      "./InteractionEvent": 137,
      "./InteractionManager": 138,
      "./InteractionTrackingData": 139,
      "./interactiveTarget": 141
    }],
    141: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
          return "pointer" === this.cursor
        },
        set buttonMode(t) {
          t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        },
        cursor: null,
        get trackedPointers() {
          return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
        },
        _trackedPointers: void 0
      }
    }, {}],
    142: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        t.type === o.Resource.TYPE.XML ? t.bitmapFont = s.BitmapText.registerFont(t.data, e) : t.type === o.Resource.TYPE.JSON && (t.bitmapFont = s.BitmapText.registerJsonFont(t.data, e))
      }
      r.__esModule = !0, r.parse = i, r.default = function() {
        return function(t, e) {
          if (!t.data || t.type !== o.Resource.TYPE.XML && t.type !== o.Resource.TYPE.JSON) e();
          else if (t.type === o.Resource.TYPE.XML) {
            if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return void e();
            var r = t.isDataUrl ? "" : n.dirname(t.url);
            t.isDataUrl && ("." === r && (r = ""), this.baseUrl && r && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/")), (r = r.replace(this.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/");
            for (var s = t.data.getElementsByTagName("page"), a = {}, u = function(r) {
                a[r.metadata.pageFile] = r.texture, Object.keys(a).length === s.length && (i(t, a), e())
              }, h = 0; h < s.length; ++h) {
              var l = s[h].getAttribute("file"),
                c = r + l,
                f = !1;
              for (var d in this.resources) {
                var p = this.resources[d];
                if (p.url === c) {
                  p.metadata.pageFile = l, p.texture ? u(p) : p.onAfterMiddleware.add(u), f = !0;
                  break
                }
              }
              if (!f) {
                var y = {
                  crossOrigin: t.crossOrigin,
                  loadType: o.Resource.LOAD_TYPE.IMAGE,
                  metadata: Object.assign({
                    pageFile: l
                  }, t.metadata.imageMetadata),
                  parentResource: t
                };
                this.add(c, y, u)
              }
            }
          } else {
            var v = t.data;
            if (!(v && v.font && v.font.pages && v.font.pages.page && v.font.info && v.font.info["@face"])) return void e();
            var g = t.isDataUrl ? "" : n.dirname(t.url);
            t.isDataUrl && ("." === g && (g = ""), this.baseUrl && g && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (g += "/")), (g = g.replace(this.baseUrl, "")) && "/" !== g.charAt(g.length - 1) && (g += "/");
            var _ = v.font.pages.page;
            _ instanceof Array || (_ = [_]);
            for (var m = {}, x = function(r) {
                m[r.metadata.pageFile] = r.texture, Object.keys(m).length === _.length && (i(t, m), e())
              }, b = 0; b < _.length; ++b) {
              var T = _[b]["@file"],
                w = g + T,
                E = !1;
              for (var O in this.resources) {
                var S = this.resources[O];
                if (S.url === w) {
                  S.metadata.pageFile = T, S.texture ? x(S) : S.onAfterMiddleware.add(x), E = !0;
                  break
                }
              }
              if (!E) {
                var M = {
                  crossOrigin: t.crossOrigin,
                  loadType: o.Resource.LOAD_TYPE.IMAGE,
                  metadata: Object.assign({
                    pageFile: T
                  }, t.metadata.imageMetadata),
                  parentResource: t
                };
                this.add(w, M, x)
              }
            }
          }
        }
      };
      var n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("path")),
        o = t("resource-loader"),
        s = t("../extras")
    }, {
      "../extras": 124,
      path: 7,
      "resource-loader": 35
    }],
    143: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0, r.shared = r.Resource = r.textureParser = r.getResourcePath = r.spritesheetParser = r.parseBitmapFontData = r.bitmapFontParser = r.Loader = void 0;
      var n = t("./bitmapFontParser");
      Object.defineProperty(r, "bitmapFontParser", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      }), Object.defineProperty(r, "parseBitmapFontData", {
        enumerable: !0,
        get: function() {
          return n.parse
        }
      });
      var o = t("./spritesheetParser");
      Object.defineProperty(r, "spritesheetParser", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      }), Object.defineProperty(r, "getResourcePath", {
        enumerable: !0,
        get: function() {
          return o.getResourcePath
        }
      });
      var s = t("./textureParser");
      Object.defineProperty(r, "textureParser", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("resource-loader");
      Object.defineProperty(r, "Resource", {
        enumerable: !0,
        get: function() {
          return a.Resource
        }
      });
      var u = i(t("../core/Application")),
        h = i(t("./loader"));
      r.Loader = h.default;
      var l = new h.default;
      l.destroy = function() {}, r.shared = l;
      var c = u.default.prototype;
      c._loader = null, Object.defineProperty(c, "loader", {
        get: function() {
          if (!this._loader) {
            var t = this._options.sharedLoader;
            this._loader = t ? l : new h.default
          }
          return this._loader
        }
      }), c._parentDestroy = c.destroy, c.destroy = function(t, e) {
        this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(t, e)
      }
    }, {
      "../core/Application": 39,
      "./bitmapFontParser": 142,
      "./loader": 144,
      "./spritesheetParser": 145,
      "./textureParser": 146,
      "resource-loader": 35
    }],
    144: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("resource-loader")),
        o = t("resource-loader/lib/middlewares/parsing/blob"),
        s = i(t("eventemitter3")),
        a = i(t("./textureParser")),
        u = i(t("./spritesheetParser")),
        h = i(t("./bitmapFontParser")),
        l = function(t) {
          function e(r, i) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, i));
            s.default.call(n);
            for (var o = 0; o < e._pixiMiddleware.length; ++o) n.use(e._pixiMiddleware[o]());
            return n.onStart.add((function(t) {
              return n.emit("start", t)
            })), n.onProgress.add((function(t, e) {
              return n.emit("progress", t, e)
            })), n.onError.add((function(t, e, r) {
              return n.emit("error", t, e, r)
            })), n.onLoad.add((function(t, e) {
              return n.emit("load", t, e)
            })), n.onComplete.add((function(t, e) {
              return n.emit("complete", t, e)
            })), n
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.addPixiMiddleware = function(t) {
            e._pixiMiddleware.push(t)
          }, e.prototype.destroy = function() {
            this.removeAllListeners(), this.reset()
          }, e
        }(n.default);
      for (var c in r.default = l, s.default.prototype) l.prototype[c] = s.default.prototype[c];
      l._pixiMiddleware = [o.blobMiddlewareFactory, a.default, u.default, h.default];
      var f = n.default.Resource;
      f.setExtensionXhrType("fnt", f.XHR_RESPONSE_TYPE.DOCUMENT)
    }, {
      "./bitmapFontParser": 142,
      "./spritesheetParser": 145,
      "./textureParser": 146,
      eventemitter3: 3,
      "resource-loader": 35,
      "resource-loader/lib/middlewares/parsing/blob": 36
    }],
    145: [function(t, e, r) {
      "use strict";

      function i(t, e) {
        return t.isDataUrl ? t.data.meta.image : o.default.resolve(t.url.replace(e, ""), t.data.meta.image)
      }
      r.__esModule = !0, r.default = function() {
        return function(t, e) {
          var r = t.name + "_image";
          if (t.data && t.type === n.Resource.TYPE.JSON && t.data.frames && !this.resources[r]) {
            var o = {
                crossOrigin: t.crossOrigin,
                metadata: t.metadata.imageMetadata,
                parentResource: t
              },
              a = i(t, this.baseUrl);
            this.add(r, a, o, (function(r) {
              if (r.error) e(r.error);
              else {
                var i = new s.Spritesheet(r.texture.baseTexture, t.data, t.url);
                i.parse((function() {
                  t.spritesheet = i, t.textures = i.textures, e()
                }))
              }
            }))
          } else e()
        }
      }, r.getResourcePath = i;
      var n = t("resource-loader"),
        o = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("url")),
        s = t("../core")
    }, {
      "../core": 60,
      "resource-loader": 35,
      url: 37
    }],
    146: [function(t, e, r) {
      "use strict";
      r.__esModule = !0, r.default = function() {
        return function(t, e) {
          t.data && t.type === i.Resource.TYPE.IMAGE && (t.texture = n.default.fromLoader(t.data, t.url, t.name)), e()
        }
      };
      var i = t("resource-loader"),
        n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../core/textures/Texture"))
    }, {
      "../core/textures/Texture": 103,
      "resource-loader": 35
    }],
    147: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("../core/textures/Texture")),
        s = new n.Point,
        a = new n.Polygon,
        u = function(t) {
          function e(r, i, s, a, u) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var h = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return h._texture = r || o.default.EMPTY, h.uvs = s || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), h.vertices = i || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), h.indices = a || new Uint16Array([0, 1, 3, 2]), h.dirty = 0, h.indexDirty = 0, h.vertexDirty = 0, h.autoUpdate = !0, h.blendMode = n.BLEND_MODES.NORMAL, h.canvasPadding = n.settings.MESH_CANVAS_PADDING, h.drawMode = u || e.DRAW_MODES.TRIANGLE_MESH, h.shader = null, h.tintRgb = new Float32Array([1, 1, 1]), h._glDatas = {}, h._uvTransform = new n.TextureMatrix(h._texture), h.uploadUvTransform = !1, h.pluginName = "mesh", h
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._renderWebGL = function(t) {
            this.refresh(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
          }, e.prototype._onTextureUpdate = function() {
            this._uvTransform.texture = this._texture, this.refresh()
          }, e.prototype.multiplyUvs = function() {
            this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs)
          }, e.prototype.refresh = function(t) {
            this.autoUpdate && this.vertexDirty++, this._uvTransform.update(t) && this._refresh()
          }, e.prototype._refresh = function() {}, e.prototype._calculateBounds = function() {
            this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
          }, e.prototype.containsPoint = function(t) {
            if (!this.getBounds().contains(t.x, t.y)) return !1;
            this.worldTransform.applyInverse(t, s);
            for (var r = this.vertices, i = a.points, n = this.indices, o = this.indices.length, u = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1, h = 0; h + 2 < o; h += u) {
              var l = 2 * n[h],
                c = 2 * n[h + 1],
                f = 2 * n[h + 2];
              if (i[0] = r[l], i[1] = r[l + 1], i[2] = r[c], i[3] = r[c + 1], i[4] = r[f], i[5] = r[f + 1], a.contains(s.x, s.y)) return !0
            }
            return !1
          }, e.prototype.destroy = function(e) {
            for (var r in this._glDatas) {
              var i = this._glDatas[r];
              i.destroy ? i.destroy() : (i.vertexBuffer && (i.vertexBuffer.destroy(), i.vertexBuffer = null), i.indexBuffer && (i.indexBuffer.destroy(), i.indexBuffer = null), i.uvBuffer && (i.uvBuffer.destroy(), i.uvBuffer = null), i.vao && (i.vao.destroy(), i.vao = null))
            }
            this._glDatas = null, t.prototype.destroy.call(this, e)
          }, i(e, [{
            key: "texture",
            get: function() {
              return this._texture
            },
            set: function(t) {
              this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
          }, {
            key: "tint",
            get: function() {
              return n.utils.rgb2hex(this.tintRgb)
            },
            set: function(t) {
              this.tintRgb = n.utils.hex2rgb(t, this.tintRgb)
            }
          }]), e
        }(n.Container);
      r.default = u, u.DRAW_MODES = {
        TRIANGLE_MESH: 0,
        TRIANGLES: 1
      }
    }, {
      "../core": 60,
      "../core/textures/Texture": 103
    }],
    148: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Plane")),
        o = function(t) {
          function e(r, i, n, o, s) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, 4, 4));
            return a._origWidth = r.orig.width, a._origHeight = r.orig.height, a._width = a._origWidth, a._height = a._origHeight, a._leftWidth = void 0 !== i ? i : 10, a._rightWidth = void 0 !== o ? o : 10, a._topHeight = void 0 !== n ? n : 10, a._bottomHeight = void 0 !== s ? s : 10, a.refresh(!0), a
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.updateHorizontalVertices = function() {
            var t = this.vertices,
              e = this._topHeight + this._bottomHeight,
              r = this._height > e ? 1 : this._height / e;
            t[9] = t[11] = t[13] = t[15] = this._topHeight * r, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * r, t[25] = t[27] = t[29] = t[31] = this._height
          }, e.prototype.updateVerticalVertices = function() {
            var t = this.vertices,
              e = this._leftWidth + this._rightWidth,
              r = this._width > e ? 1 : this._width / e;
            t[2] = t[10] = t[18] = t[26] = this._leftWidth * r, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * r, t[6] = t[14] = t[22] = t[30] = this._width
          }, e.prototype._refresh = function() {
            t.prototype._refresh.call(this);
            var e = this.uvs,
              r = this._texture;
            this._origWidth = r.orig.width, this._origHeight = r.orig.height;
            var i = 1 / this._origWidth,
              n = 1 / this._origHeight;
            e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = i * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - i * this._rightWidth, e[9] = e[11] = e[13] = e[15] = n * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty++, this.multiplyUvs()
          }, i(e, [{
            key: "width",
            get: function() {
              return this._width
            },
            set: function(t) {
              this._width = t, this._refresh()
            }
          }, {
            key: "height",
            get: function() {
              return this._height
            },
            set: function(t) {
              this._height = t, this._refresh()
            }
          }, {
            key: "leftWidth",
            get: function() {
              return this._leftWidth
            },
            set: function(t) {
              this._leftWidth = t, this._refresh()
            }
          }, {
            key: "rightWidth",
            get: function() {
              return this._rightWidth
            },
            set: function(t) {
              this._rightWidth = t, this._refresh()
            }
          }, {
            key: "topHeight",
            get: function() {
              return this._topHeight
            },
            set: function(t) {
              this._topHeight = t, this._refresh()
            }
          }, {
            key: "bottomHeight",
            get: function() {
              return this._bottomHeight
            },
            set: function(t) {
              this._bottomHeight = t, this._refresh()
            }
          }]), e
        }(n.default);
      r.default = o
    }, {
      "./Plane": 149
    }],
    149: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(t("./Mesh")),
        n = function(t) {
          function e(r, n, o) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return s._ready = !0, s.verticesX = n || 10, s.verticesY = o || 10, s.drawMode = i.default.DRAW_MODES.TRIANGLES, s.refresh(), s
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype._refresh = function() {
            for (var t = this._texture, e = this.verticesX * this.verticesY, r = [], i = [], n = [], o = this.verticesX - 1, s = this.verticesY - 1, a = t.width / o, u = t.height / s, h = 0; h < e; h++) {
              var l = h % this.verticesX,
                c = h / this.verticesX | 0;
              r.push(l * a, c * u), i.push(l / o, c / s)
            }
            for (var f = o * s, d = 0; d < f; d++) {
              var p = d % o,
                y = d / o | 0,
                v = y * this.verticesX + p,
                g = y * this.verticesX + p + 1,
                _ = (y + 1) * this.verticesX + p,
                m = (y + 1) * this.verticesX + p + 1;
              n.push(v, g, _), n.push(g, m, _)
            }
            this.vertices = new Float32Array(r), this.uvs = new Float32Array(i), this.colors = new Float32Array([]), this.indices = new Uint16Array(n), this.dirty++, this.indexDirty++, this.multiplyUvs()
          }, e.prototype._onTextureUpdate = function() {
            i.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
          }, e
        }(i.default);
      r.default = n
    }, {
      "./Mesh": 147
    }],
    150: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
        function e(r, i) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var n = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, t.call(this, r));
          return n.points = i, n.vertices = new Float32Array(4 * i.length), n.uvs = new Float32Array(4 * i.length), n.colors = new Float32Array(2 * i.length), n.indices = new Uint16Array(2 * i.length), n.autoUpdate = !0, n.refresh(), n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), e.prototype._refresh = function() {
          var t = this.points;
          if (!(t.length < 1) && this._texture._uvs) {
            this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length), this.uvs = new Float32Array(4 * t.length), this.colors = new Float32Array(2 * t.length), this.indices = new Uint16Array(2 * t.length));
            var e = this.uvs,
              r = this.indices,
              i = this.colors;
            e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1;
            for (var n = t.length, o = 1; o < n; o++) {
              var s = 4 * o,
                a = o / (n - 1);
              e[s] = a, e[s + 1] = 0, e[s + 2] = a, e[s + 3] = 1, i[s = 2 * o] = 1, i[s + 1] = 1, r[s = 2 * o] = s, r[s + 1] = s + 1
            }
            this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices()
          }
        }, e.prototype.refreshVertices = function() {
          var t = this.points;
          if (!(t.length < 1))
            for (var e = t[0], r = void 0, i = 0, n = 0, o = this.vertices, s = t.length, a = 0; a < s; a++) {
              var u = t[a],
                h = 4 * a;
              n = -((r = a < t.length - 1 ? t[a + 1] : u).x - e.x), i = r.y - e.y;
              var l = 10 * (1 - a / (s - 1));
              l > 1 && (l = 1);
              var c = Math.sqrt(i * i + n * n),
                f = this._texture.height / 2;
              i /= c, n /= c, i *= f, n *= f, o[h] = u.x + i, o[h + 1] = u.y + n, o[h + 2] = u.x - i, o[h + 3] = u.y - n, e = u
            }
        }, e.prototype.updateTransform = function() {
          this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform()
        }, e
      }(function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("./Mesh")).default);
      r.default = i
    }, {
      "./Mesh": 147
    }],
    151: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("./Mesh");
      Object.defineProperty(r, "Mesh", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./webgl/MeshRenderer");
      Object.defineProperty(r, "MeshRenderer", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      });
      var s = t("./Plane");
      Object.defineProperty(r, "Plane", {
        enumerable: !0,
        get: function() {
          return i(s).default
        }
      });
      var a = t("./NineSlicePlane");
      Object.defineProperty(r, "NineSlicePlane", {
        enumerable: !0,
        get: function() {
          return i(a).default
        }
      });
      var u = t("./Rope");
      Object.defineProperty(r, "Rope", {
        enumerable: !0,
        get: function() {
          return i(u).default
        }
      })
    }, {
      "./Mesh": 147,
      "./NineSlicePlane": 148,
      "./Plane": 149,
      "./Rope": 150,
      "./webgl/MeshRenderer": 152
    }],
    152: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        o = i(t("pixi-gl-core")),
        s = i(t("../Mesh")),
        a = (t("path"), n.Matrix.IDENTITY),
        u = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.shader = null, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.shader = new n.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\nvarying vec2 vTextureCoord;\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\nuniform sampler2D uSampler;\nvoid main(void){\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")
          }, e.prototype.render = function(t) {
            var e = this.renderer,
              r = e.gl,
              i = t._texture;
            if (i.valid) {
              var u = t._glDatas[e.CONTEXT_UID];
              u || (e.bindVao(null), (u = {
                shader: this.shader,
                vertexBuffer: o.default.GLBuffer.createVertexBuffer(r, t.vertices, r.STREAM_DRAW),
                uvBuffer: o.default.GLBuffer.createVertexBuffer(r, t.uvs, r.STREAM_DRAW),
                indexBuffer: o.default.GLBuffer.createIndexBuffer(r, t.indices, r.STATIC_DRAW),
                vao: null,
                dirty: t.dirty,
                indexDirty: t.indexDirty,
                vertexDirty: t.vertexDirty
              }).vao = new o.default.VertexArrayObject(r).addIndex(u.indexBuffer).addAttribute(u.vertexBuffer, u.shader.attributes.aVertexPosition, r.FLOAT, !1, 8, 0).addAttribute(u.uvBuffer, u.shader.attributes.aTextureCoord, r.FLOAT, !1, 8, 0), t._glDatas[e.CONTEXT_UID] = u), e.bindVao(u.vao), t.dirty !== u.dirty && (u.dirty = t.dirty, u.uvBuffer.upload(t.uvs)), t.indexDirty !== u.indexDirty && (u.indexDirty = t.indexDirty, u.indexBuffer.upload(t.indices)), t.vertexDirty !== u.vertexDirty && (u.vertexDirty = t.vertexDirty, u.vertexBuffer.upload(t.vertices)), e.bindShader(u.shader), u.shader.uniforms.uSampler = e.bindTexture(i), e.state.setBlendMode(n.utils.correctBlendMode(t.blendMode, i.baseTexture.premultipliedAlpha)), u.shader.uniforms.uTransform && (t.uploadUvTransform ? u.shader.uniforms.uTransform = t._uvTransform.mapCoord.toArray(!0) : u.shader.uniforms.uTransform = a.toArray(!0)), u.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0), u.shader.uniforms.uColor = n.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, u.shader.uniforms.uColor, i.baseTexture.premultipliedAlpha);
              var h = t.drawMode === s.default.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
              u.vao.draw(h, t.indices.length, 0)
            }
          }, e
        }(n.ObjectRenderer);
      r.default = u, n.WebGLRenderer.registerPlugin("mesh", u)
    }, {
      "../../core": 60,
      "../Mesh": 147,
      path: 7,
      "pixi-gl-core": 14
    }],
    153: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../core")),
        o = t("../core/utils"),
        s = function(t) {
          function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500,
              i = arguments[1],
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
              s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return o > 16384 && (o = 16384), o > r && (o = r), a._properties = [!1, !0, !1, !1, !1], a._maxSize = r, a._batchSize = o, a._glBuffers = {}, a._bufferUpdateIDs = [], a._updateID = 0, a.interactiveChildren = !1, a.blendMode = n.BLEND_MODES.NORMAL, a.autoResize = s, a.roundPixels = !0, a.baseTexture = null, a.setProperties(i), a._tint = 0, a.tintRgb = new Float32Array(4), a.tint = 16777215, a
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.setProperties = function(t) {
            t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
          }, e.prototype.updateTransform = function() {
            this.displayObjectUpdateTransform()
          }, e.prototype.renderWebGL = function(t) {
            var e = this;
            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", (function() {
              return e.onChildrenChange(0)
            }))), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
          }, e.prototype.onChildrenChange = function(t) {
            for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[e] = ++this._updateID
          }, e.prototype.destroy = function(e) {
            if (t.prototype.destroy.call(this, e), this._buffers)
              for (var r = 0; r < this._buffers.length; ++r) this._buffers[r].destroy();
            this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
          }, i(e, [{
            key: "tint",
            get: function() {
              return this._tint
            },
            set: function(t) {
              this._tint = t, (0, o.hex2rgb)(t, this.tintRgb)
            }
          }]), e
        }(n.Container);
      r.default = s
    }, {
      "../core": 60,
      "../core/utils": 113
    }],
    154: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = t("./ParticleContainer");
      Object.defineProperty(r, "ParticleContainer", {
        enumerable: !0,
        get: function() {
          return i(n).default
        }
      });
      var o = t("./webgl/ParticleRenderer");
      Object.defineProperty(r, "ParticleRenderer", {
        enumerable: !0,
        get: function() {
          return i(o).default
        }
      })
    }, {
      "./ParticleContainer": 153,
      "./webgl/ParticleRenderer": 156
    }],
    155: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = i(t("pixi-gl-core")),
        o = i(t("../../core/utils/createIndicesForQuads")),
        s = function() {
          function t(e, r, i, n) {
            (function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, t), this.gl = e, this.size = n, this.dynamicProperties = [], this.staticProperties = [];
            for (var o = 0; o < r.length; ++o) {
              var s = r[o];
              s = {
                attribute: s.attribute,
                size: s.size,
                uploadFunction: s.uploadFunction,
                unsignedByte: s.unsignedByte,
                offset: s.offset
              }, i[o] ? this.dynamicProperties.push(s) : this.staticProperties.push(s)
            }
            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
          }
          return t.prototype.initBuffers = function() {
            var t = this.gl,
              e = 0;
            this.indices = (0, o.default)(this.size), this.indexBuffer = n.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.dynamicStride = 0;
            for (var r = 0; r < this.dynamicProperties.length; ++r) {
              var i = this.dynamicProperties[r];
              i.offset = e, e += i.size, this.dynamicStride += i.size
            }
            var s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
            this.dynamicData = new Float32Array(s), this.dynamicDataUint32 = new Uint32Array(s), this.dynamicBuffer = n.default.GLBuffer.createVertexBuffer(t, s, t.STREAM_DRAW);
            var a = 0;
            this.staticStride = 0;
            for (var u = 0; u < this.staticProperties.length; ++u) {
              var h = this.staticProperties[u];
              h.offset = a, a += h.size, this.staticStride += h.size
            }
            var l = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
            this.staticData = new Float32Array(l), this.staticDataUint32 = new Uint32Array(l), this.staticBuffer = n.default.GLBuffer.createVertexBuffer(t, l, t.STATIC_DRAW), this.vao = new n.default.VertexArrayObject(t).addIndex(this.indexBuffer);
            for (var c = 0; c < this.dynamicProperties.length; ++c) {
              var f = this.dynamicProperties[c];
              f.unsignedByte ? this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.UNSIGNED_BYTE, !0, 4 * this.dynamicStride, 4 * f.offset) : this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * f.offset)
            }
            for (var d = 0; d < this.staticProperties.length; ++d) {
              var p = this.staticProperties[d];
              p.unsignedByte ? this.vao.addAttribute(this.staticBuffer, p.attribute, t.UNSIGNED_BYTE, !0, 4 * this.staticStride, 4 * p.offset) : this.vao.addAttribute(this.staticBuffer, p.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * p.offset)
            }
          }, t.prototype.uploadDynamic = function(t, e, r) {
            for (var i = 0; i < this.dynamicProperties.length; i++) {
              var n = this.dynamicProperties[i];
              n.uploadFunction(t, e, r, n.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
            }
            this.dynamicBuffer.upload()
          }, t.prototype.uploadStatic = function(t, e, r) {
            for (var i = 0; i < this.staticProperties.length; i++) {
              var n = this.staticProperties[i];
              n.uploadFunction(t, e, r, n.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
            }
            this.staticBuffer.upload()
          }, t.prototype.destroy = function() {
            this.dynamicProperties = null, this.dynamicBuffer.destroy(), this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer.destroy(), this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null
          }, t
        }();
      r.default = s
    }, {
      "../../core/utils/createIndicesForQuads": 111,
      "pixi-gl-core": 14
    }],
    156: [function(t, e, r) {
      "use strict";

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      r.__esModule = !0;
      var n = function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }(t("../../core")),
        o = i(t("./ParticleShader")),
        s = i(t("./ParticleBuffer")),
        a = t("../../core/utils"),
        u = function(t) {
          function e(r) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.shader = null, i.indexBuffer = null, i.properties = null, i.tempMatrix = new n.Matrix, i.CONTEXT_UID = 0, i
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(e, t), e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new o.default(t), this.properties = [{
              attribute: this.shader.attributes.aVertexPosition,
              size: 2,
              uploadFunction: this.uploadVertices,
              offset: 0
            }, {
              attribute: this.shader.attributes.aPositionCoord,
              size: 2,
              uploadFunction: this.uploadPosition,
              offset: 0
            }, {
              attribute: this.shader.attributes.aRotation,
              size: 1,
              uploadFunction: this.uploadRotation,
              offset: 0
            }, {
              attribute: this.shader.attributes.aTextureCoord,
              size: 2,
              uploadFunction: this.uploadUvs,
              offset: 0
            }, {
              attribute: this.shader.attributes.aColor,
              size: 1,
              unsignedByte: !0,
              uploadFunction: this.uploadTint,
              offset: 0
            }]
          }, e.prototype.start = function() {
            this.renderer.bindShader(this.shader)
          }, e.prototype.render = function(t) {
            var e = t.children,
              r = t._maxSize,
              i = t._batchSize,
              o = this.renderer,
              s = e.length;
            if (0 !== s) {
              s > r && (s = r);
              var a = t._glBuffers[o.CONTEXT_UID];
              a || (a = t._glBuffers[o.CONTEXT_UID] = this.generateBuffers(t));
              var u = e[0]._texture.baseTexture;
              this.renderer.setBlendMode(n.utils.correctBlendMode(t.blendMode, u.premultipliedAlpha));
              var h = o.gl,
                l = t.worldTransform.copy(this.tempMatrix);
              l.prepend(o._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = l.toArray(!0), this.shader.uniforms.uColor = n.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, u.premultipliedAlpha), this.shader.uniforms.uSampler = o.bindTexture(u);
              for (var c = !1, f = 0, d = 0; f < s; f += i, d += 1) {
                var p = s - f;
                if (p > i && (p = i), d >= a.length) {
                  if (!t.autoResize) break;
                  a.push(this._generateOneMoreBuffer(t))
                }
                var y = a[d];
                y.uploadDynamic(e, f, p);
                var v = t._bufferUpdateIDs[d] || 0;
                (c = c || y._updateID < v) && (y._updateID = t._updateID, y.uploadStatic(e, f, p)), o.bindVao(y.vao), y.vao.draw(h.TRIANGLES, 6 * p)
              }
            }
          }, e.prototype.generateBuffers = function(t) {
            for (var e = this.renderer.gl, r = [], i = t._maxSize, n = t._batchSize, o = t._properties, a = 0; a < i; a += n) r.push(new s.default(e, this.properties, o, n));
            return r
          }, e.prototype._generateOneMoreBuffer = function(t) {
            var e = this.renderer.gl,
              r = t._batchSize,
              i = t._properties;
            return new s.default(e, this.properties, i, r)
          }, e.prototype.uploadVertices = function(t, e, r, i, n, o) {
            for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
              var c = t[e + l],
                f = c._texture,
                d = c.scale.x,
                p = c.scale.y,
                y = f.trim,
                v = f.orig;
              y ? (s = (a = y.x - c.anchor.x * v.width) + y.width, u = (h = y.y - c.anchor.y * v.height) + y.height) : (s = v.width * (1 - c.anchor.x), a = v.width * -c.anchor.x, u = v.height * (1 - c.anchor.y), h = v.height * -c.anchor.y), i[o] = a * d, i[o + 1] = h * p, i[o + n] = s * d, i[o + n + 1] = h * p, i[o + 2 * n] = s * d, i[o + 2 * n + 1] = u * p, i[o + 3 * n] = a * d, i[o + 3 * n + 1] = u * p, o += 4 * n
            }
          }, e.prototype.uploadPosition = function(t, e, r, i, n, o) {
            for (var s = 0; s < r; s++) {
              var a = t[e + s].position;
              i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n
            }
          }, e.prototype.uploadRotation = function(t, e, r, i, n, o) {
            for (var s = 0; s < r; s++) {
              var a = t[e + s].rotation;
              i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
            }
          }, e.prototype.uploadUvs = function(t, e, r, i, n, o) {
            for (var s = 0; s < r; ++s) {
              var a = t[e + s]._texture._uvs;
              a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n)
            }
          }, e.prototype.uploadTint = function(t, e, r, i, n, o) {
            for (var s = 0; s < r; ++s) {
              var u = t[e + s],
                h = u._texture.baseTexture.premultipliedAlpha,
                l = u.alpha,
                c = l < 1 && h ? (0, a.premultiplyTint)(u._tintRGB, l) : u._tintRGB + (255 * l << 24);
              i[o] = c, i[o + n] = c, i[o + 2 * n] = c, i[o + 3 * n] = c, o += 4 * n
            }
          }, e.prototype.destroy = function() {
            this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), t.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
          }, e
        }(n.ObjectRenderer);
      r.default = u, n.WebGLRenderer.registerPlugin("particle", u)
    }, {
      "../../core": 60,
      "../../core/utils": 113,
      "./ParticleBuffer": 155,
      "./ParticleShader": 157
    }],
    157: [function(t, e, r) {
      "use strict";
      r.__esModule = !0;
      var i = function(t) {
        function e(r) {
          return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join("\n")))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), e
      }(function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("../../core/Shader")).default);
      r.default = i
    }, {
      "../../core/Shader": 40
    }],
    158: [function(t, e, r) {
      "use strict";
      Math.sign || (Math.sign = function(t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
      })
    }, {}],
    159: [function(t, e, r) {
      "use strict";
      Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
      })
    }, {}],
    160: [function(t, e, r) {
      "use strict";
      var i = function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(t("object-assign"));
      Object.assign || (Object.assign = i.default)
    }, {
      "object-assign": 5
    }],
    161: [function(t, e, r) {
      "use strict";
      t("./Object.assign"), t("./Math.sign"), t("./Number.isInteger"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
    }, {
      "./Math.sign": 158,
      "./Number.isInteger": 159,
      "./Object.assign": 160
    }],
    162: [function(t, e, r) {
      (function(e) {
        "use strict";

        function i(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e.default = t, e
        }
        r.__esModule = !0, r.loader = r.particles = r.mesh = r.loaders = r.interaction = r.filters = r.extras = void 0;
        var n = t("./polyfill");
        Object.keys(n).forEach((function(t) {
          "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
            enumerable: !0,
            get: function() {
              return n[t]
            }
          })
        }));
        var o = t("./core");
        Object.keys(o).forEach((function(t) {
          "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
            enumerable: !0,
            get: function() {
              return o[t]
            }
          })
        }));
        var s = i(t("./extras")),
          a = i(t("./filters")),
          u = i(t("./interaction")),
          h = i(t("./loaders")),
          l = i(t("./mesh")),
          c = i(t("./particles"));
        o.utils.mixins.performMixins();
        var f = h.shared || null;
        r.extras = s, r.filters = a, r.interaction = u, r.loaders = h, r.mesh = l, r.particles = c, r.loader = f, e.PIXI = r, window.PIXI = r
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
      "./core": 60,
      "./extras": 124,
      "./filters": 134,
      "./interaction": 140,
      "./loaders": 143,
      "./mesh": 151,
      "./particles": 154,
      "./polyfill": 161
    }]
  }, {}, [162])(162)
}));