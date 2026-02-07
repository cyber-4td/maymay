var _Group = function() {
  this._tweens = {}, this._tweensAddedDuringUpdate = {}
};
_Group.prototype = {
  getAll: function() {
    return Object.keys(this._tweens).map(function(t) {
      return this._tweens[t]
    }.bind(this))
  },
  removeAll: function() {
    this._tweens = {}
  },
  killTweensOf: function(t) {
    for (var n in this._tweens)(n = this._tweens[n]) && n._object === t && this.remove(n)
  },
  add: function(t) {
    this._tweens[t._id] = t, this._tweensAddedDuringUpdate[t._id] = t
  },
  remove: function(t) {
    delete this._tweens[t._id], delete this._tweensAddedDuringUpdate[t._id]
  },
  update: function(t, n) {
    var i = Object.keys(this._tweens);
    if (0 === i.length) return !1;
    for (t = void 0 !== t ? t : TWEEN.now(); 0 < i.length;) {
      this._tweensAddedDuringUpdate = {};
      for (var e = 0; e < i.length; e++) {
        var r = i[e],
          a = this._tweens[r];
        a && !1 === a.update(t) && (a._isPlaying = !1, n || delete this._tweens[r])
      }
      i = Object.keys(this._tweensAddedDuringUpdate)
    }
    return !0
  }
};
var TWEEN = new _Group;
TWEEN.Group = _Group, TWEEN._nextId = 0, TWEEN.nextId = function() {
    return TWEEN._nextId++
  }, TWEEN.now = Date.now, TWEEN.Easing = {
    Linear: {
      None: function(t) {
        return t
      }
    },
    Quadratic: {
      In: function(t) {
        return t * t
      },
      Out: function(t) {
        return t * (2 - t)
      },
      InOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      }
    },
    Cubic: {
      In: function(t) {
        return t * t * t
      },
      Out: function(t) {
        return --t * t * t + 1
      },
      InOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      }
    },
    Quartic: {
      In: function(t) {
        return t * t * t * t
      },
      Out: function(t) {
        return 1 - --t * t * t * t
      },
      InOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
      }
    },
    Quintic: {
      In: function(t) {
        return t * t * t * t * t
      },
      Out: function(t) {
        return --t * t * t * t * t + 1
      },
      InOut: function(t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      }
    },
    Sinusoidal: {
      In: function(t) {
        return 1 - Math.cos(t * Math.PI / 2)
      },
      Out: function(t) {
        return Math.sin(t * Math.PI / 2)
      },
      InOut: function(t) {
        return .5 * (1 - Math.cos(Math.PI * t))
      }
    },
    Exponential: {
      In: function(t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1)
      },
      Out: function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
      },
      InOut: function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      }
    },
    Circular: {
      In: function(t) {
        return 1 - Math.sqrt(1 - t * t)
      },
      Out: function(t) {
        return Math.sqrt(1 - --t * t)
      },
      InOut: function(t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      }
    },
    Elastic: {
      In: function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
      },
      Out: function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
      },
      InOut: function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1
      }
    },
    Back: {
      In: function(t) {
        var n = 1.70158;
        return t * t * ((1 + n) * t - n)
      },
      Out: function(t) {
        var n = 1.70158;
        return --t * t * ((1 + n) * t + n) + 1
      },
      InOut: function(t) {
        var n = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((1 + n) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + n) * t + n) + 2)
      }
    },
    Bounce: {
      In: function(t) {
        return 1 - TWEEN.Easing.Bounce.Out(1 - t)
      },
      Out: function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      },
      InOut: function(t) {
        return t < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * t) : .5 * TWEEN.Easing.Bounce.Out(2 * t - 1) + .5
      }
    }
  }, TWEEN.Interpolation = {
    Linear: function(t, n) {
      var i = t.length - 1,
        e = i * n,
        r = Math.floor(e),
        a = TWEEN.Interpolation.Utils.Linear;
      return n < 0 ? a(t[0], t[1], e) : 1 < n ? a(t[i], t[i - 1], i - e) : a(t[r], t[i < r + 1 ? i : r + 1], e - r)
    },
    Bezier: function(t, n) {
      for (var i = 0, e = t.length - 1, r = Math.pow, a = TWEEN.Interpolation.Utils.Bernstein, s = 0; s <= e; s++) i += r(1 - n, e - s) * r(n, s) * t[s] * a(e, s);
      return i
    },
    CatmullRom: function(t, n) {
      var i = t.length - 1,
        e = i * n,
        r = Math.floor(e),
        a = TWEEN.Interpolation.Utils.CatmullRom;
      return t[0] === t[i] ? a(t[((r = n < 0 ? Math.floor(e = i * (1 + n)) : r) - 1 + i) % i], t[r], t[(r + 1) % i], t[(r + 2) % i], e - r) : n < 0 ? t[0] - (a(t[0], t[0], t[1], t[1], -e) - t[0]) : 1 < n ? t[i] - (a(t[i], t[i], t[i - 1], t[i - 1], e - i) - t[i]) : a(t[r ? r - 1 : 0], t[r], t[i < r + 1 ? i : r + 1], t[i < r + 2 ? i : r + 2], e - r)
    },
    Utils: {
      Linear: function(t, n, i) {
        return (n - t) * i + t
      },
      Bernstein: function(t, n) {
        var i = TWEEN.Interpolation.Utils.Factorial;
        return i(t) / i(n) / i(t - n)
      },
      Factorial: function() {
        var t = [1];
        return function(n) {
          var i = 1;
          if (t[n]) return t[n];
          for (var e = n; 1 < e; e--) i *= e;
          return t[n] = i
        }
      }(),
      CatmullRom: function(t, n, i, e, r) {
        var a = .5 * (i - t);
        return (2 * n - 2 * i + a + (t = .5 * (e - n))) * (r * (e = r * r)) + (-3 * n + 3 * i - 2 * a - t) * e + a * r + n
      }
    }
  }, TWEEN.Tween = function(t, n) {
    this._object = t, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._repeat = 0, this._repeatDelayTime = void 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, this._easingFunction = TWEEN.Easing.Linear.None, this._interpolationFunction = TWEEN.Interpolation.Linear, this._chainedTweens = [], this._onStartCallback = null, this._onStartCallbackFired = !1, this._onUpdateCallback = null, this._onCompleteCallback = null, this._onStopCallback = null, this._group = n || TWEEN, this._id = TWEEN.nextId()
  }, TWEEN.Tween.prototype = {
    getId: function() {
      return this._id
    },
    isPlaying: function() {
      return this._isPlaying
    },
    to: function(t, n) {
      return this._valuesEnd = t, void 0 !== n && (this._duration = n), this
    },
    start: function(t) {
      for (var n in this._group.add(this), this._isPlaying = !0, this._onStartCallbackFired = !1, this._startTime = void 0 !== t ? "string" == typeof t ? TWEEN.now() + parseFloat(t) : t : TWEEN.now(), this._startTime += this._delayTime, this._valuesEnd) {
        if (this._valuesEnd[n] instanceof Array) {
          if (0 === this._valuesEnd[n].length) continue;
          this._valuesEnd[n] = [this._object[n]].concat(this._valuesEnd[n])
        }
        void 0 !== this._object[n] && (this._valuesStart[n] = this._object[n], this._valuesStart[n] instanceof Array == 0 && (this._valuesStart[n] *= 1), this._valuesStartRepeat[n] = this._valuesStart[n] || 0)
      }
      return this
    },
    stop: function() {
      return this._isPlaying && (this._group.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback(this._object), this.stopChainedTweens()), this
    },
    end: function() {
      return this.update(this._startTime + this._duration), this
    },
    stopChainedTweens: function() {
      for (var t = 0, n = this._chainedTweens.length; t < n; t++) this._chainedTweens[t].stop()
    },
    group: function(t) {
      return this._group = t, this
    },
    delay: function(t) {
      return this._delayTime = t, this
    },
    repeat: function(t) {
      return this._repeat = t, this
    },
    repeatDelay: function(t) {
      return this._repeatDelayTime = t, this
    },
    yoyo: function(t) {
      return this._yoyo = t, this
    },
    easing: function(t) {
      return this._easingFunction = t, this
    },
    interpolation: function(t) {
      return this._interpolationFunction = t, this
    },
    chain: function() {
      return this._chainedTweens = arguments, this
    },
    onStart: function(t) {
      return this._onStartCallback = t, this
    },
    onUpdate: function(t) {
      return this._onUpdateCallback = t, this
    },
    onComplete: function(t) {
      return this._onCompleteCallback = t, this
    },
    onStop: function(t) {
      return this._onStopCallback = t, this
    },
    update: function(t) {
      var n, i, e, r, a, s;
      if (t < this._startTime) return !0;
      for (n in !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), i = (t - this._startTime) / this._duration, i = 0 === this._duration || 1 < i ? 1 : i, this._easingFunction || (this._easingFunction = Tween.Easing.Linear.None), e = this._easingFunction(i), this._valuesEnd) void 0 !== this._valuesStart[n] && (r = this._valuesStart[n] || 0, (a = this._valuesEnd[n]) instanceof Array ? this._object[n] = this._interpolationFunction(a, e) : "number" == typeof(a = "string" == typeof a ? "+" === a.charAt(0) || "-" === a.charAt(0) ? r + parseFloat(a) : parseFloat(a) : a) && (this._object[n] = r + (a - r) * e));
      if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object), 1 !== i) return !0;
      if (0 < this._repeat) {
        for (n in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) "string" == typeof this._valuesEnd[n] && (this._valuesStartRepeat[n] = this._valuesStartRepeat[n] + parseFloat(this._valuesEnd[n])), this._yoyo && (s = this._valuesStartRepeat[n], this._valuesStartRepeat[n] = this._valuesEnd[n], this._valuesEnd[n] = s), this._valuesStart[n] = this._valuesStartRepeat[n];
        return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, !0
      }
      null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
      for (var o = 0, u = this._chainedTweens.length; o < u; o++) this._chainedTweens[o].start(this._startTime + this._duration);
      return !1
    }
  },
  function(t) {
    "function" == typeof define && define.amd ? define([], (function() {
      return TWEEN
    })) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== t && (t.TWEEN = TWEEN)
  }(this), window.TWEEN = TWEEN;