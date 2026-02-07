function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}! function(e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }
  var n = {};
  t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
  var o = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(1)),
    r = (function(e) {
      e && e.__esModule
    }(n(4)), GameGlobal);
  GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
    if (o.addEventListener = function(e, t) {
        o.document.addEventListener(e, t)
      }, o.removeEventListener = function(e, t) {
        o.document.removeEventListener(e, t)
      }, o.canvas && (o.canvas.addEventListener = o.addEventListener, o.canvas.removeEventListener = o.removeEventListener), "devtools" === wx.getSystemInfoSync().platform) {
      for (var e in o) {
        var t = Object.getOwnPropertyDescriptor(r, e);
        t && !0 !== t.configurable || Object.defineProperty(window, e, {
          value: o[e]
        })
      }
      for (var n in o.document) {
        var a = Object.getOwnPropertyDescriptor(r.document, n);
        a && !0 !== a.configurable || Object.defineProperty(r.document, n, {
          value: o.document[n]
        })
      }
      window.parent = window
    } else {
      for (var i in o) r[i] = o[i];
      r.window = o, window = r, window.top = window.parent = window
    }
  }())
}, function(e, t, n) {
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.scrollTo = t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.TouchEvent = t.location = t.localStorage = t.HTMLAudioElement = t.HTMLMediaElement = t.HTMLVideoElement = t.HTMLElement = t.Element = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;
  var r = n(2);
  Object.keys(r).forEach((function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function() {
        return r[e]
      }
    })
  }));
  var a = n(3);
  Object.keys(a).forEach((function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0,
      get: function() {
        return a[e]
      }
    })
  }));
  var i = o(n(9)),
    u = o(n(10)),
    c = o(n(17)),
    l = o(n(18)),
    s = o(n(19)),
    f = o(n(11)),
    p = o(n(12)),
    d = o(n(5)),
    h = o(n(4)),
    y = o(n(20)),
    v = o(n(14)),
    b = o(n(13)),
    _ = o(n(21)),
    g = o(n(22)),
    m = o(n(16));
  t.document = u.default, t.navigator = c.default, t.XMLHttpRequest = l.default, t.WebSocket = s.default, t.Image = f.default, t.Audio = p.default, t.Element = d.default, t.HTMLElement = h.default, t.HTMLVideoElement = y.default, t.HTMLMediaElement = v.default, t.HTMLAudioElement = b.default, t.localStorage = _.default, t.location = g.default, t.TouchEvent = m.default;
  var w = new i.default;
  t.canvas = w, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, t.cancelAnimationFrame = cancelAnimationFrame, t.scrollTo = function() {}
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = wx.getSystemInfoSync(),
    o = n.screenWidth,
    r = n.screenHeight,
    a = n.devicePixelRatio,
    i = n.system,
    u = t.innerWidth = o,
    c = t.innerHeight = r;
  t.devicePixelRatio = a, t.screen = {
    availWidth: u,
    availHeight: c
  }, t.performance = wx.getPerformance(), t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null, t.isIOS = i.indexOf("iOS") >= 0, t.isAndroid = i.indexOf("Android") >= 0
}, function(e, t, n) {
  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function r(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
  }

  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.HTMLCanvasElement = t.HTMLImageElement = void 0;
  var i = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(4));
  t.HTMLImageElement = function(e) {
    function t() {
      return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "img"))
    }
    return a(t, e), t
  }(i.default), t.HTMLCanvasElement = function(e) {
    function t() {
      return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "canvas"))
    }
    return a(t, e), t
  }(i.default)
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(5)),
    a = n(8),
    i = n(2),
    u = function(e) {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return n.className = "", n.childern = [], n.style = {
          width: i.innerWidth + "px",
          height: i.innerHeight + "px"
        }, n.insertBefore = a.noop, n.innerHTML = "", n.tagName = e.toUpperCase(), n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), o(t, [{
        key: "setAttribute",
        value: function(e, t) {
          this[e] = t
        }
      }, {
        key: "getAttribute",
        value: function(e) {
          return this[e]
        }
      }, {
        key: "getBoundingClientRect",
        value: function() {
          return {
            top: 0,
            left: 0,
            width: i.innerWidth,
            height: i.innerHeight
          }
        }
      }, {
        key: "focus",
        value: function() {}
      }, {
        key: "clientWidth",
        get: function() {
          var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
          return Number.isNaN(e) ? 0 : e
        }
      }, {
        key: "clientHeight",
        get: function() {
          var e = parseInt(this.style.fontSize, 10);
          return Number.isNaN(e) ? 0 : e
        }
      }]), t
    }(r.default);
  t.default = u
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(6)),
    r = function(e) {
      function t() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.className = "", e.children = [], e
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), t
    }(o.default);
  t.default = r
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(7)),
    a = function(e) {
      function t() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.childNodes = [], e
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), o(t, [{
        key: "appendChild",
        value: function(e) {
          if (!(e instanceof t)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
          this.childNodes.push(e)
        }
      }, {
        key: "cloneNode",
        value: function() {
          var e = Object.create(this);
          return Object.assign(e, this), e
        }
      }, {
        key: "removeChild",
        value: function(e) {
          var t = this.childNodes.findIndex((function(t) {
            return t === e
          }));
          return t > -1 ? this.childNodes.splice(t, 1) : null
        }
      }]), t
    }(r.default);
  t.default = a
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    o = new WeakMap,
    r = function() {
      function e() {
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), o.set(this, {})
      }
      return n(e, [{
        key: "addEventListener",
        value: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = o.get(this);
          r || (r = {}, o.set(this, r)), r[e] || (r[e] = []), r[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.")
        }
      }, {
        key: "removeEventListener",
        value: function(e, t) {
          var n = o.get(this)[e];
          if (n)
            for (var r = n.length - 1; r >= 0; r--)
              if (n[r] === t) {
                n.splice(r, 1);
                break
              }
        }
      }, {
        key: "dispatchEvent",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = o.get(this)[e.type];
          if (t)
            for (var n = 0; n < t.length; n++) t[n] && t[n](e)
        }
      }]), e
    }();
  t.default = r
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.noop = function() {}
}, function(e, t, n) {
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    var e = wx.createCanvas();
    return e.type = "canvas", e.__proto__.__proto__ = new r.default("canvas"), e.getContext, e.getBoundingClientRect = function() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }, e
  };
  var r = o((n(3), n(4)));
  o(n(10))
}, function(e, t, n) {
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(1)),
    a = o(n(4)),
    i = o(n(11)),
    u = o(n(12)),
    c = o(n(9));
  n(15);
  var l = {},
    s = {
      readyState: "complete",
      visibilityState: "visible",
      documentElement: r,
      hidden: !1,
      style: {},
      location: r.location,
      ontouchstart: null,
      ontouchmove: null,
      ontouchend: null,
      head: new a.default("head"),
      body: new a.default("body"),
      createElement: function(e) {
        return "canvas" === e ? new c.default : "audio" === e ? new u.default : "img" === e ? new i.default : new a.default(e)
      },
      getElementById: function(e) {
        return e === r.canvas.id ? r.canvas : null
      },
      getElementsByTagName: function(e) {
        return "head" === e ? [s.head] : "body" === e ? [s.body] : "canvas" === e ? [r.canvas] : []
      },
      getElementsByName: function(e) {
        return "head" === e ? [s.head] : "body" === e ? [s.body] : "canvas" === e ? [r.canvas] : []
      },
      querySelector: function(e) {
        return "head" === e ? s.head : "body" === e ? s.body : "canvas" === e || e === "#" + r.canvas.id ? r.canvas : null
      },
      querySelectorAll: function(e) {
        return "head" === e ? [s.head] : "body" === e ? [s.body] : "canvas" === e ? [r.canvas] : []
      },
      addEventListener: function(e, t) {
        l[e] || (l[e] = []), l[e].push(t)
      },
      removeEventListener: function(e, t) {
        var n = l[e];
        if (n)
          for (var o = n.length - 1; o >= 0; o--)
            if (n[o] === t) {
              n.splice(o, 1);
              break
            }
      },
      dispatchEvent: function(e) {
        var t = l[e.type];
        if (t)
          for (var n = 0; n < t.length; n++) t[n] && t[n](e)
      },
      createElementNS: function(e, t) {
        return this.createElement(t)
      }
    };
  t.default = s
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function() {
    return wx.createImage()
  }
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(13)),
    a = new WeakMap,
    i = new WeakMap,
    u = (new WeakMap, new WeakMap, function(e) {
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        n.HAVE_NOTHING = 0, n.HAVE_METADATA = 1, n.HAVE_CURRENT_DATA = 2, n.HAVE_FUTURE_DATA = 3, n.HAVE_ENOUGH_DATA = 4, n.readyState = 0, i.set(n, "");
        var o = wx.createInnerAudioContext();
        return a.set(n, o), o.onCanplay((function() {
          n.dispatchEvent({
            type: "load"
          }), n.dispatchEvent({
            type: "loadend"
          }), n.dispatchEvent({
            type: "canplay"
          }), n.dispatchEvent({
            type: "canplaythrough"
          }), n.dispatchEvent({
            type: "loadedmetadata"
          }), n.readyState = 2
        })), o.onPlay((function() {
          n.dispatchEvent({
            type: "play"
          })
        })), o.onPause((function() {
          n.dispatchEvent({
            type: "pause"
          })
        })), o.onEnded((function() {
          n.dispatchEvent({
            type: "ended"
          }), n.readyState = 4
        })), o.onError((function() {
          n.dispatchEvent({
            type: "error"
          })
        })), e && (a.get(n).src = e), n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), o(t, [{
        key: "load",
        value: function() {
          console.warn("HTMLAudioElement.load() is not implemented.")
        }
      }, {
        key: "play",
        value: function() {
          a.get(this).play()
        }
      }, {
        key: "pause",
        value: function() {
          a.get(this).pause()
        }
      }, {
        key: "canPlayType",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : ""
        }
      }, {
        key: "cloneNode",
        value: function() {
          var e = new t;
          return e.loop = a.get(this).loop, e.autoplay = a.get(this).autoplay, e.src = this.src, e
        }
      }, {
        key: "currentTime",
        get: function() {
          return a.get(this).currentTime
        },
        set: function(e) {
          a.get(this).seek(e)
        }
      }, {
        key: "src",
        get: function() {
          return i.get(this)
        },
        set: function(e) {
          i.set(this, e), a.get(this).src = e
        }
      }, {
        key: "loop",
        get: function() {
          return a.get(this).loop
        },
        set: function(e) {
          a.get(this).loop = e
        }
      }, {
        key: "autoplay",
        get: function() {
          return a.get(this).autoplay
        },
        set: function(e) {
          a.get(this).autoplay = e
        }
      }, {
        key: "paused",
        get: function() {
          return a.get(this).paused
        }
      }]), t
    }(r.default));
  t.default = u
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(14)),
    r = function(e) {
      function t() {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "audio"))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), t
    }(o.default);
  t.default = r
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(4)),
    a = function(e) {
      function t(e) {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), o(t, [{
        key: "addTextTrack",
        value: function() {}
      }, {
        key: "captureStream",
        value: function() {}
      }, {
        key: "fastSeek",
        value: function() {}
      }, {
        key: "load",
        value: function() {}
      }, {
        key: "pause",
        value: function() {}
      }, {
        key: "play",
        value: function() {}
      }]), t
    }(r.default);
  t.default = a
}, function(e, t, n) {
  n(16)
}, function(e, t, n) {
  function o(e) {
    return function(t) {
      if (t && t.touches) {
        var n = new u(e);
        n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, a.default.dispatchEvent(n)
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(n(1)),
    a = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(10)),
    i = n(8),
    u = function e(t) {
      (function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      })(this, e), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = i.noop, this.stopPropagation = i.noop, this.type = t
    };
  t.default = u, wx.onTouchStart(o("touchstart")), wx.onTouchMove(o("touchmove")), wx.onTouchEnd(o("touchend")), wx.onTouchCancel(o("touchcancel"))
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(8),
    r = {
      platform: wx.getSystemInfoSync().platform,
      language: "zh-cn",
      appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
      onLine: !0,
      geolocation: {
        getCurrentPosition: o.noop,
        watchPosition: o.noop,
        clearWatch: o.noop
      }
    };
  t.default = r
}, function(e, t) {
  function n(e) {
    if ("function" == typeof this["on" + e]) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++) n[o - 1] = arguments[o];
      this["on" + e].apply(this, n)
    }
  }

  function o(e) {
    this.readyState = e, n.call(this, "readystatechange")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    a = new WeakMap,
    i = new WeakMap,
    u = new WeakMap,
    c = new WeakMap,
    l = new WeakMap,
    s = function() {
      function e() {
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, this.withCredentials = !1, u.set(this, {
          "content-type": "application/x-www-form-urlencoded"
        }), c.set(this, {})
      }
      return r(e, [{
        key: "abort",
        value: function() {
          var e = l.get(this);
          e && e.abort()
        }
      }, {
        key: "getAllResponseHeaders",
        value: function() {
          var e = c.get(this);
          return Object.keys(e).map((function(t) {
            return t + ": " + e[t]
          })).join("\n")
        }
      }, {
        key: "getResponseHeader",
        value: function(e) {
          return c.get(this)[e]
        }
      }, {
        key: "open",
        value: function(t, n) {
          i.set(this, t), a.set(this, n), o.call(this, e.OPENED)
        }
      }, {
        key: "overrideMimeType",
        value: function() {}
      }, {
        key: "send",
        value: function() {
          var t = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
          wx.request({
            data: r,
            url: a.get(this),
            method: i.get(this),
            header: u.get(this),
            responseType: this.responseType,
            success: function(r) {
              var a = r.data,
                i = r.statusCode,
                u = r.header;
              if ("string" != typeof a && !(a instanceof ArrayBuffer)) try {
                a = JSON.stringify(a)
              } catch (e) {}
              if (t.status = i, c.set(t, u), n.call(t, "loadstart"), o.call(t, e.HEADERS_RECEIVED), o.call(t, e.LOADING), t.response = a, a instanceof ArrayBuffer) {
                t.responseText = "";
                for (var l = new Uint8Array(a), s = l.byteLength, f = 0; s > f; f++) t.responseText += String.fromCharCode(l[f])
              } else t.responseText = a;
              o.call(t, e.DONE), n.call(t, "load"), n.call(t, "loadend")
            },
            fail: function(e) {
              var o = e.errMsg; - 1 !== o.indexOf("abort") ? n.call(t, "abort") : n.call(t, "error", o), n.call(t, "loadend")
            }
          })
        }
      }, {
        key: "setRequestHeader",
        value: function(e, t) {
          var n = u.get(this);
          n[e] = t, u.set(this, n)
        }
      }, {
        key: "addEventListener",
        value: function(e, t) {
          if ("function" == typeof t) {
            var n = {
                target: this
              },
              o = this;
            this["on" + e] = function() {
              t.call(o, n)
            }
          }
        }
      }]), e
    }();
  s.UNSEND = 0, s.OPENED = 1, s.HEADERS_RECEIVED = 2, s.LOADING = 3, s.DONE = 4, t.default = s
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    o = new WeakMap,
    r = function() {
      function e(t) {
        var n = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + t + "' is invalid");
        this.url = t, this.readyState = e.CONNECTING;
        var a = wx.connectSocket({
          url: t,
          protocols: Array.isArray(r) ? r : [r]
        });
        return o.set(this, a), a.onClose((function(t) {
          n.readyState = e.CLOSED, "function" == typeof n.onclose && n.onclose(t)
        })), a.onMessage((function(e) {
          "function" == typeof n.onmessage && n.onmessage(e)
        })), a.onOpen((function() {
          n.readyState = e.OPEN, "function" == typeof n.onopen && n.onopen()
        })), a.onError((function(e) {
          "function" == typeof n.onerror && n.onerror(new Error(e.errMsg))
        })), this
      }
      return n(e, [{
        key: "close",
        value: function(t, n) {
          this.readyState = e.CLOSING, o.get(this).close({
            code: t,
            reason: n
          })
        }
      }, {
        key: "send",
        value: function(e) {
          if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
          o.get(this).send({
            data: e
          })
        }
      }]), e
    }();
  r.CONNECTING = 0, r.OPEN = 1, r.CLOSING = 2, r.CLOSED = 3, t.default = r
}, function(e, t, n) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(14)),
    r = function(e) {
      function t() {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== _typeof(t) && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "video"))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), t
    }(o.default);
  t.default = r
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = {
    get length() {
      return wx.getStorageInfoSync().keys.length
    },
    key: function(e) {
      return wx.getStorageInfoSync().keys[e]
    },
    getItem: function(e) {
      return wx.getStorageSync(e)
    },
    setItem: function(e, t) {
      return wx.setStorageSync(e, t)
    },
    removeItem: function(e) {
      wx.removeStorageSync(e)
    },
    clear: function() {
      wx.clearStorageSync()
    }
  };
  t.default = n
}, function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = {
    href: "game.js",
    reload: function() {}
  }
}]);