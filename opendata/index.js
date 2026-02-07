! function() {
  "use strict";
  var t = {
      16: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ONearRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(812),
          i = n(767),
          c = n(89),
          s = n(125),
          u = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return o.context.clearRect(0, 0, 630, 248), n.myName = i.openDataUtils.getMyName(), n.myAvatar = i.openDataUtils.getMyAvatar(), i.openDataUtils.getFriendScores().then((function(t) {
                if (!n._isDestroyed) {
                  t = t.filter((function(t) {
                    return t.KVDataList && t.KVDataList.length > 0
                  }));
                  var e = i.openDataUtils.getScoreKey(0),
                    r = t.map((function(t) {
                      var n = (0, a.convertKVData)(t.KVDataList);
                      return {
                        rank: 0,
                        avatar: t.avatarUrl,
                        name: t.nickname,
                        score: n[e] || 0
                      }
                    })).filter((function(t) {
                      return t.score > 0
                    }));
                  r.sort((function(t, e) {
                    return e.score - t.score
                  })), r.forEach((function(t, e) {
                    return t.rank = e + 1
                  }));
                  var o = [],
                    c = -1;
                  if (r.length > 0)
                    if ((c = r.findIndex((function(t) {
                        return t.avatar === n.myAvatar && t.name === n.myName
                      }))) <= 0)
                      for (var s = 0; s < Math.min(3, r.length); s++) o.push(r[s]);
                    else o.push(r[c - 1]), o.push(r[c]), c < r.length - 1 && o.push(r[c + 1]);
                  for (s = 0; s < o.length; s++) {
                    var u = o[s];
                    if (!u) return;
                    n.drawRankItem(u, s)
                  }
                }
              })), n
            }
            return r.__extends(e, t), e.prototype.drawRankItem = function(t, e) {
              var n = this;
              if (t) {
                var r = 100 + 210 * e,
                  i = this.myName === t.name && this.myAvatar === t.avatar ? "#00FF00" : "white";
                o.context.fillStyle = i, o.context.font = "".concat(36, "px simHei"), o.context.textAlign = "center", o.context.fillText(t.rank.toString(), r, 30);
                var s = 70 + 210 * e,
                  u = (0, c.getOrCreateAvatar)(t.avatar);
                u.loaded ? o.context.drawImage(u.icon, s, 50, 70, 70) : u.addOnceListener(c.AVATAR_LOADED, (function() {
                  n._isDestroyed || o.context.drawImage(u.icon, s, 50, 70, 70)
                }), this), o.context.fillStyle = i, o.context.font = "".concat(28, "px simHei"), o.context.textAlign = "center", o.context.fillText((0, a.fitNameString)(o.context, t.name, 210), r, 170), o.context.fillStyle = i, o.context.font = "".concat(32, "px simHei"), o.context.textAlign = "center", o.context.fillText(t.score.toString(), r, 220)
              }
            }, e
          }(s.ORank);
        e.ONearRank = u
      },
      83: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.EventDispatcher = void 0;
        var n = function() {
          function t() {
            this._listeners = {}
          }
          return t.prototype.addOnceListener = function(t, e, n) {
            e.__once = !0, this.addListener(t, e, n)
          }, t.prototype.addListener = function(t, e, n) {
            n && e.__bindThis !== n && (e.__bindThis = n, e.__bindFunc = e.bind(n));
            var r = this._listeners[t];
            r || (this._listeners[t] = r = []), -1 === r.indexOf(e) && r.push(e)
          }, t.prototype.removeListener = function(t, e) {
            var n = this._listeners[t];
            if (n) {
              var r = n.indexOf(e); - 1 !== r && (n.splice(r, 1), e.__bindThis && delete e.__bindThis, e.__bindFunc && delete e.__bindFunc, e.__once && delete e.__once)
            }
          }, t.prototype.dispatchEvent = function(t, e) {
            var n = this._listeners[t];
            if (n)
              for (var r = 0, o = (n = n.concat()).length; r < o; r++) {
                var a = n[r];
                a && (a.__bindFunc ? a.__bindFunc(e) : a(e), a.__once && this.removeListener(t, a))
              }
          }, t.prototype.removeAllListeners = function() {
            this._listeners = {}
          }, t
        }();
        e.EventDispatcher = n
      },
      89: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AVATAR_ERROR = e.AVATAR_LOADED = void 0, e.getOrCreateAvatar = function(t) {
          null != t && "" != t || (t = "dlc/ui/default_avatar.png");
          var e = a[t];
          e || ((e = new i).src = t, a[t] = e);
          return e
        };
        var r = n(635),
          o = n(83),
          a = {};
        e.AVATAR_LOADED = "avatar_loaded", e.AVATAR_ERROR = "avatar_error";
        var i = function(t) {
          function n() {
            var e = t.call(this) || this;
            return e.icon = wx.createImage(), e._loaded = !1, e
          }
          return r.__extends(n, t), n.prototype.clearOnEvent = function() {
            this.icon.onload = null, this.icon.onerror = null
          }, Object.defineProperty(n.prototype, "src", {
            get: function() {
              return this._url
            },
            set: function(t) {
              var n = this;
              this._url != t && (this._url = t, this._loaded = !1, this.clearOnEvent(), this.icon.onload = function() {
                n._loaded = !0, n.clearOnEvent(), n.dispatchEvent(e.AVATAR_LOADED)
              }, this.icon.onerror = function() {
                n._loaded = !1, n.clearOnEvent(), n.dispatchEvent(e.AVATAR_ERROR)
              }, this.icon.src = t)
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(n.prototype, "loaded", {
            get: function() {
              return this._loaded
            },
            enumerable: !1,
            configurable: !0
          }), n
        }(o.EventDispatcher)
      },
      125: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ORank = void 0;
        var n = function() {
          function t(t) {
            this._isDestroyed = !1, this.type = t.type
          }
          return t.prototype.update = function(t) {}, t.prototype.destroy = function() {
            this._isDestroyed = !0
          }, t
        }();
        e.ORank = n
      },
      220: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OReviveRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(767),
          i = n(812),
          c = n(89),
          s = n(125),
          u = "#FFFFFF",
          l = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return o.context.clearRect(0, 0, 450, 70), a.openDataUtils.getFriendScores().then((function(t) {
                if (!n._isDestroyed) {
                  var r = t.map((function(t) {
                    var e = (0, i.convertKVData)(t.KVDataList);
                    return {
                      rank: 0,
                      avatar: t.avatarUrl,
                      name: t.nickname,
                      score: e[a.openDataUtils.getScoreKey(0)] || 0
                    }
                  })).filter((function(t) {
                    return t.score > 0
                  }));
                  r.sort((function(t, e) {
                    return e.score - t.score
                  }));
                  for (var o = r.length - 1; o >= 0; o--)
                    if (r[o].score > e.score) {
                      n.draw(r[o]);
                      break
                    }
                }
              })), n
            }
            return r.__extends(e, t), e.prototype.draw = function(t) {
              var e = this;
              o.context.clearRect(0, 0, 450, 70), o.context.fillStyle = u, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText("下个即将超越的好友：", 0, 45);
              var n = (0, c.getOrCreateAvatar)(t.avatar);
              n.loaded ? o.context.drawImage(n.icon, 300, 0, 70, 70) : n.addOnceListener(c.AVATAR_LOADED, (function() {
                e._isDestroyed || o.context.drawImage(n.icon, 300, 0, 70, 70)
              }), this), o.context.fillStyle = u, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText(t.score.toString(), 382, 45)
            }, e
          }(s.ORank);
        e.OReviveRank = l
      },
      268: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OExceededOpenRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(767),
          i = n(812),
          c = n(89),
          s = n(125),
          u = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.data = [], n.lastScore = 0, n.currentScore = 0, n.myName = a.openDataUtils.getMyName(), n.score = e.score, n.lastScore = e.score, n.mapId = e.mapId, o.context.clearRect(0, 0, 70, 100), a.openDataUtils.getFriendScores().then((function(t) {
                if (!n._isDestroyed) {
                  var e = t.map((function(t) {
                    var e = (0, i.convertKVData)(t.KVDataList);
                    return {
                      rank: 0,
                      avatar: t.avatarUrl,
                      name: t.nickname,
                      score: e[a.openDataUtils.getScoreKey(0)] || 0
                    }
                  })).filter((function(t) {
                    return t.score > 0
                  }));
                  e.sort((function(t, e) {
                    return e.score - t.score
                  })), e.forEach((function(t, e) {
                    return t.rank = e + 1
                  })), n.data = e
                }
              })), n
            }
            return r.__extends(e, t), e.prototype.update = function(t) {
              this.currentScore = t.score, this._update(), this.lastScore = this.currentScore
            }, e.prototype._update = function() {
              o.context.clearRect(0, 0, 70, 100);
              for (var t = this.data, e = t.length - 1; e >= 0; e--)
                if (t[e].score <= this.lastScore) t.pop();
                else if (t[e].score < this.currentScore) {
                this.draw(t[e]);
                break
              }
            }, e.prototype.draw = function(t) {
              var e = this,
                n = (0, c.getOrCreateAvatar)(t.avatar);
              n.loaded ? (o.context.drawImage(n.icon, 0, 28, 70, 70), this.drawText()) : (n.addOnceListener(c.AVATAR_LOADED, (function() {
                e._isDestroyed || (o.context.drawImage(n.icon, 0, 28, 70, 70), e.drawText())
              }), this), n.addOnceListener(c.AVATAR_ERROR, (function() {
                e._isDestroyed || e.drawText()
              }), this))
            }, e.prototype.drawText = function() {
              o.context.fillStyle = "#000000", o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "left", o.context.fillText("超越", 12, 24)
            }, e
          }(s.ORank);
        e.OExceededOpenRank = u
      },
      306: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OSurpassRank = void 0;
        var r = n(635),
          o = n(767),
          a = n(524),
          i = n(89),
          c = n(125),
          s = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.myName = "", n.oldScore = 0, n.myName = o.openDataUtils.getMyName(), n.oldScore = e.oldScore, a.context.clearRect(0, 0, 476, 98), o.openDataUtils.getFriendScores().then((function(t) {
                n._isDestroyed || n.renderRank(t)
              })), n
            }
            return r.__extends(e, t), e.prototype.renderRank = function(t) {
              var e = this;
              if (t) {
                var n = t;
                a.context.clearRect(0, 0, a.sharedCanvas.width, a.sharedCanvas.height), a.context.fillStyle = "#21232d", a.context.fillRect(0, 0, 476, 98), n.sort((function(t, e) {
                  return t.KVDataList && 0 !== t.KVDataList.length ? e.KVDataList && 0 !== e.KVDataList.length ? e.KVDataList[0].value - t.KVDataList[0].value : -1 : 1
                }));
                var r = [],
                  o = n.findIndex((function(t) {
                    if (t.nickname === e.myName) return !0
                  }));
                if (o <= 0)
                  for (var i = 0; i < Math.min(3, n.length); i++) r.push(n[i]);
                else o > 0 && (r.push(n[o - 1]), r.push(n[o]), o < n.length - 1 && r.push(n[o + 1]));
                for (i = 0; i < r.length; i++) {
                  var c = r[i];
                  this.drawRankItem(i, c, i === o)
                }
                a.context.fillStyle = "white", a.context.font = "28px simHei", a.context.textAlign = "left", a.context.fillText("排名超越2位好友", 10, 140)
              }
            }, e.prototype.drawRankItem = function(t, e, n) {
              var r = this,
                o = e.avatarUrl,
                c = (0, i.getOrCreateAvatar)(o);
              c.loaded ? a.context.drawImage(c.icon, 10 + 80 * t, 16, 70, 70) : c.addOnceListener(i.AVATAR_LOADED, (function() {
                r._isDestroyed || a.context.drawImage(c.icon, 10 + 80 * t, 16, 70, 70)
              }), this)
            }, e
          }(c.ORank);
        e.OSurpassRank = s
      },
      481: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OFriendRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(626),
          i = n(948),
          c = n(767),
          s = n(812),
          u = n(89),
          l = n(125),
          f = ["#1e202a", "#262833"],
          h = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.data = [], n.totalData = [], n.touchScroll = new i.TouchScroll(n), n._scrollV = 0, n.maxScrollV = 0, n._dirty = !0, n.render = function(t) {
                if (!n._isDestroyed) {
                  if (n.touchScroll.onTick(Date.now()), n._loadingMyInfo && (n.myNick = c.openDataUtils.getMyName(), n._loadingMyInfo = 0 === n.myNick.length, n._loadingMyInfo || (n.myAvatar = c.openDataUtils.getMyAvatar(), n._dirty = !0)), n._dirty) {
                    n._dirty = !1, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height);
                    for (var e = 0, r = n.data.length; e < r; e++) n.drawItem(e)
                  }
                  requestAnimationFrame(n.render)
                }
              }, n.onTouchStart = function(t, e) {
                n.touchScroll.start(e)
              }, n.onTouchMove = function(t, e) {
                n.touchScroll.update(e)
              }, n.onTouchEnd = function(t, e) {
                n.touchScroll.finish()
              }, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height), n.myNick = c.openDataUtils.getMyName(), n.myAvatar = c.openDataUtils.getMyAvatar(), n._loadingMyInfo = 0 === n.myNick.length, c.openDataUtils.getFriendScores().then((function(t) {
                if (!n._isDestroyed) {
                  t = t.filter((function(t) {
                    return t.KVDataList && t.KVDataList.length > 0
                  }));
                  var e = c.openDataUtils.getScoreKey(0),
                    r = n.totalData = t.map((function(t) {
                      var n = (0, s.convertKVData)(t.KVDataList);
                      return {
                        rank: 0,
                        name: t.nickname,
                        avatar: t.avatarUrl,
                        score: n[e] || 0
                      }
                    }));
                  (r = r.filter((function(t) {
                    return t.score > 0
                  }))).sort((function(t, e) {
                    return e.score - t.score
                  })), r.forEach((function(t, e) {
                    return t.rank = e + 1
                  })), n.data = r, n._dirty = !0, (0, a.addTouchStart)(n.onTouchStart), (0, a.addTouchMove)(n.onTouchMove), (0, a.addTouchEnd)(n.onTouchEnd), (0, a.addTouchCancel)(n.onTouchEnd), n.maxScrollV = Math.max(0, 90 * n.data.length - o.sharedCanvas.height + 0 + 0), requestAnimationFrame((function(t) {
                    n.touchScroll.previousTime = t, requestAnimationFrame(n.render)
                  }))
                }
              })), n
            }
            return r.__extends(e, t), e.prototype.update = function(t) {
              var e = this.totalData;
              (e = e.filter((function(t) {
                return t.score > 0
              }))).sort((function(t, e) {
                return e.score - t.score
              })), e.forEach((function(t, e) {
                return t.rank = e + 1
              })), this.data = e, this.maxScrollV = Math.max(0, 90 * this.data.length - o.sharedCanvas.height + 0 + 0), this.touchScroll.throwToTop(), this._dirty = !0
            }, Object.defineProperty(e.prototype, "scrollV", {
              get: function() {
                return this._scrollV
              },
              set: function(t) {
                this._scrollV = t, this._dirty || (this._dirty = !0)
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.destroy = function() {
              t.prototype.destroy.call(this), (0, a.removeTouchStart)(this.onTouchStart), (0, a.removeTouchMove)(this.onTouchMove), (0, a.removeTouchEnd)(this.onTouchEnd), (0, a.removeTouchCancel)(this.onTouchEnd)
            }, e.prototype.drawItem = function(t) {
              var e = this,
                n = -this._scrollV + 90 * t + 0;
              if (!(n > o.sharedCanvas.height || n + 90 < 0)) {
                var r = this.data[t];
                o.context.fillStyle = f[t % 2], o.context.fillRect(0, n, 618, 90);
                var a = r.name === this.myNick && r.avatar === this.myAvatar ? "#00FF00" : "white";
                (0, s.drawRankIndex)(r.rank, 20, 16 + n, 36, 60 + n, a, 36), o.context.strokeStyle = "#000000", o.context.strokeRect(85, 10 + n + 1, 68, 68);
                var i = (0, u.getOrCreateAvatar)(r.avatar);
                i.loaded ? o.context.drawImage(i.icon, 84, 10 + n, 70, 70) : i.addOnceListener(u.AVATAR_LOADED, (function() {
                  e._isDestroyed || e._dirty || (e._dirty = !0)
                }), this), o.context.fillStyle = a, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText((0, s.fitNameString)(o.context, r.name, 300), 170, 60 + n), o.context.fillStyle = a, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText(r.score.toString(), 510, 60 + n)
              }
            }, e
          }(l.ORank);
        e.OFriendRank = h
      },
      492: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OpenDataType = void 0;
        e.OpenDataType = {
          FRIEND_RANK: 1,
          GROUP_RANK: 2,
          NEAR_RANK: 3,
          SURPASS_RANK: 4,
          HIDE: 5,
          MY_SCORE: 6,
          EXCEEDED_RANK: 7,
          REVIVE_RANK: 8,
          INIT_SCORE_KEY: 9,
          CHECK_BEST_SCORE: 10,
          EXPERT_RANK: 11,
          EXPERT_VIEW_RANK: 12,
          EXPERT_SCORE: 13,
          SERVER_EXPERT_FLOORS: 14,
          RELAY_RANK: 15,
          RELAY_GROUP_RANK: 16,
          UPDATE_RELAY_DATA: 17,
          UPDATE_MY_INFO: 18
        }
      },
      524: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.context = e.sharedCanvas = e.hasSharedCanvas = void 0, e.hasSharedCanvas = void 0 !== wx.getSharedCanvas, e.sharedCanvas = void 0 !== wx.getSharedCanvas ? wx.getSharedCanvas() : wx.createCanvas(), e.context = e.sharedCanvas.getContext("2d")
      },
      626: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.addTouchStart = function(t) {
          u.add(t)
        }, e.removeTouchStart = function(t) {
          u.delete(t)
        }, e.addTouchMove = function(t) {
          l.add(t)
        }, e.removeTouchMove = function(t) {
          l.delete(t)
        }, e.addTouchEnd = function(t) {
          f.add(t)
        }, e.removeTouchEnd = function(t) {
          f.delete(t)
        }, e.addTouchCancel = function(t) {
          h.add(t)
        }, e.removeTouchCancel = function(t) {
          h.delete(t)
        }, e.updateXY = function(t) {
          o = t.screenX, a = t.screenY, i = r.sharedCanvas.width / s, c = r.sharedCanvas.height / s
        };
        var r = n(524);
        var o = 0,
          a = 0,
          i = 1,
          c = 1;
        var s = 750 / wx.getSystemInfoSync().screenWidth,
          u = new Set,
          l = new Set,
          f = new Set,
          h = new Set;
        wx.onTouchStart((function(t) {
          var e = t.changedTouches[0];
          if (!e) return;
          var n = e.clientX - o;
          if (n < 0 || n > i) return;
          var r = e.clientY - a;
          if (r < 0 || r > c) return;
          d = !0, u.forEach((function(t) {
            t(n * s, r * s)
          }))
        })), wx.onTouchMove((function(t) {
          if (!d) return;
          var e = t.changedTouches[0];
          if (!e) return;
          var n = e.clientX - o,
            r = e.clientY - a;
          l.forEach((function(t) {
            t(n * s, r * s)
          }))
        })), wx.onTouchEnd((function(t) {
          if (!d) return;
          d = !1;
          var e = t.changedTouches[0];
          if (!e) return;
          var n = e.clientX - o,
            r = e.clientY - a;
          f.forEach((function(t) {
            t(n * s, r * s)
          }))
        })), wx.onTouchCancel((function(t) {
          if (!d) return;
          d = !1;
          var e = t.changedTouches[0];
          if (!e) return;
          var n = e.clientX - o,
            r = e.clientY - a;
          h.forEach((function(t) {
            t(n * s, r * s)
          }))
        }));
        var d = !1
      },
      635: function(t, e, n) {
        n.r(e), n.d(e, {
          __addDisposableResource: function() {
            return P
          },
          __assign: function() {
            return a
          },
          __asyncDelegator: function() {
            return R
          },
          __asyncGenerator: function() {
            return w
          },
          __asyncValues: function() {
            return D
          },
          __await: function() {
            return T
          },
          __awaiter: function() {
            return p
          },
          __classPrivateFieldGet: function() {
            return M
          },
          __classPrivateFieldIn: function() {
            return V
          },
          __classPrivateFieldSet: function() {
            return C
          },
          __createBinding: function() {
            return v
          },
          __decorate: function() {
            return c
          },
          __disposeResources: function() {
            return N
          },
          __esDecorate: function() {
            return u
          },
          __exportStar: function() {
            return m
          },
          __extends: function() {
            return o
          },
          __generator: function() {
            return y
          },
          __importDefault: function() {
            return I
          },
          __importStar: function() {
            return E
          },
          __makeTemplateObject: function() {
            return A
          },
          __metadata: function() {
            return d
          },
          __param: function() {
            return s
          },
          __propKey: function() {
            return f
          },
          __read: function() {
            return g
          },
          __rest: function() {
            return i
          },
          __rewriteRelativeImportExtension: function() {
            return j
          },
          __runInitializers: function() {
            return l
          },
          __setFunctionName: function() {
            return h
          },
          __spread: function() {
            return x
          },
          __spreadArray: function() {
            return O
          },
          __spreadArrays: function() {
            return S
          },
          __values: function() {
            return _
          }
        });
        var r = function(t, e) {
          return r = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          }, r(t, e)
        };

        function o(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function n() {
            this.constructor = t
          }
          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }
        var a = function() {
          return a = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, a.apply(this, arguments)
        };

        function i(t, e) {
          var n = {};
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
          }
          return n
        }

        function c(t, e, n, r) {
          var o, a = arguments.length,
            i = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, n, r);
          else
            for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(e, n, i) : o(e, n)) || i);
          return a > 3 && i && Object.defineProperty(e, n, i), i
        }

        function s(t, e) {
          return function(n, r) {
            e(n, r, t)
          }
        }

        function u(t, e, n, r, o, a) {
          function i(t) {
            if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
            return t
          }
          for (var c, s = r.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", l = !e && t ? r.static ? t : t.prototype : null, f = e || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), h = !1, d = n.length - 1; d >= 0; d--) {
            var p = {};
            for (var y in r) p[y] = "access" === y ? {} : r[y];
            for (var y in r.access) p.access[y] = r.access[y];
            p.addInitializer = function(t) {
              if (h) throw new TypeError("Cannot add initializers after decoration has completed");
              a.push(i(t || null))
            };
            var v = (0, n[d])("accessor" === s ? {
              get: f.get,
              set: f.set
            } : f[u], p);
            if ("accessor" === s) {
              if (void 0 === v) continue;
              if (null === v || "object" != typeof v) throw new TypeError("Object expected");
              (c = i(v.get)) && (f.get = c), (c = i(v.set)) && (f.set = c), (c = i(v.init)) && o.unshift(c)
            } else(c = i(v)) && ("field" === s ? o.unshift(c) : f[u] = c)
          }
          l && Object.defineProperty(l, r.name, f), h = !0
        }

        function l(t, e, n) {
          for (var r = arguments.length > 2, o = 0; o < e.length; o++) n = r ? e[o].call(t, n) : e[o].call(t);
          return r ? n : void 0
        }

        function f(t) {
          return "symbol" == typeof t ? t : "".concat(t)
        }

        function h(t, e, n) {
          return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", e) : e
          })
        }

        function d(t, e) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function p(t, e, n, r) {
          return new(n || (n = Promise))((function(o, a) {
            function i(t) {
              try {
                s(r.next(t))
              } catch (t) {
                a(t)
              }
            }

            function c(t) {
              try {
                s(r.throw(t))
              } catch (t) {
                a(t)
              }
            }

            function s(t) {
              var e;
              t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                t(e)
              }))).then(i, c)
            }
            s((r = r.apply(t, e || [])).next())
          }))
        }

        function y(t, e) {
          var n, r, o, a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
              },
              trys: [],
              ops: []
            },
            i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
          return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
          }), i;

          function c(c) {
            return function(s) {
              return function(c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                  if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                  switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return a.label++, {
                        value: c[1],
                        done: !1
                      };
                    case 5:
                      a.label++, r = c[1], c = [0];
                      continue;
                    case 7:
                      c = a.ops.pop(), a.trys.pop();
                      continue;
                    default:
                      if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                        a = 0;
                        continue
                      }
                      if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                        a.label = c[1];
                        break
                      }
                      if (6 === c[0] && a.label < o[1]) {
                        a.label = o[1], o = c;
                        break
                      }
                      if (o && a.label < o[2]) {
                        a.label = o[2], a.ops.push(c);
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue
                  }
                  c = e.call(t, a)
                } catch (t) {
                  c = [6, t], r = 0
                } finally {
                  n = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                  value: c[0] ? c[1] : void 0,
                  done: !0
                }
              }([c, s])
            }
          }
        }
        var v = Object.create ? function(t, e, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          o && !("get" in o ? !e.__esModule : o.writable || o.configurable) || (o = {
            enumerable: !0,
            get: function() {
              return e[n]
            }
          }), Object.defineProperty(t, r, o)
        } : function(t, e, n, r) {
          void 0 === r && (r = n), t[r] = e[n]
        };

        function m(t, e) {
          for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || v(e, t, n)
        }

        function _(t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length) return {
            next: function() {
              return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
              }
            }
          };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function g(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r, o, a = n.call(t),
            i = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(r = a.next()).done;) i.push(r.value)
          } catch (t) {
            o = {
              error: t
            }
          } finally {
            try {
              r && !r.done && (n = a.return) && n.call(a)
            } finally {
              if (o) throw o.error
            }
          }
          return i
        }

        function x() {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
          return t
        }

        function S() {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
          var r = Array(t),
            o = 0;
          for (e = 0; e < n; e++)
            for (var a = arguments[e], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
          return r
        }

        function O(t, e, n) {
          if (n || 2 === arguments.length)
            for (var r, o = 0, a = e.length; o < a; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
          return t.concat(r || Array.prototype.slice.call(e))
        }

        function T(t) {
          return this instanceof T ? (this.v = t, this) : new T(t)
        }

        function w(t, e, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var r, o = n.apply(t, e || []),
            a = [];
          return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(t) {
            return function(e) {
              return Promise.resolve(e).then(t, u)
            }
          })), r[Symbol.asyncIterator] = function() {
            return this
          }, r;

          function i(t, e) {
            o[t] && (r[t] = function(e) {
              return new Promise((function(n, r) {
                a.push([t, e, n, r]) > 1 || c(t, e)
              }))
            }, e && (r[t] = e(r[t])))
          }

          function c(t, e) {
            try {
              (n = o[t](e)).value instanceof T ? Promise.resolve(n.value.v).then(s, u) : l(a[0][2], n)
            } catch (t) {
              l(a[0][3], t)
            }
            var n
          }

          function s(t) {
            c("next", t)
          }

          function u(t) {
            c("throw", t)
          }

          function l(t, e) {
            t(e), a.shift(), a.length && c(a[0][0], a[0][1])
          }
        }

        function R(t) {
          var e, n;
          return e = {}, r("next"), r("throw", (function(t) {
            throw t
          })), r("return"), e[Symbol.iterator] = function() {
            return this
          }, e;

          function r(r, o) {
            e[r] = t[r] ? function(e) {
              return (n = !n) ? {
                value: T(t[r](e)),
                done: !1
              } : o ? o(e) : e
            } : o
          }
        }

        function D(t) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var e, n = t[Symbol.asyncIterator];
          return n ? n.call(t) : (t = _(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
            return this
          }, e);

          function r(n) {
            e[n] = t[n] && function(e) {
              return new Promise((function(r, o) {
                (function(t, e, n, r) {
                  Promise.resolve(r).then((function(e) {
                    t({
                      value: e,
                      done: n
                    })
                  }), e)
                })(r, o, (e = t[n](e)).done, e.value)
              }))
            }
          }
        }

        function A(t, e) {
          return Object.defineProperty ? Object.defineProperty(t, "raw", {
            value: e
          }) : t.raw = e, t
        }
        var b = Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            })
          } : function(t, e) {
            t.default = e
          },
          k = function(t) {
            return k = Object.getOwnPropertyNames || function(t) {
              var e = [];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[e.length] = n);
              return e
            }, k(t)
          };

        function E(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n = k(t), r = 0; r < n.length; r++) "default" !== n[r] && v(e, t, n[r]);
          return b(e, t), e
        }

        function I(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function M(t, e, n, r) {
          if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t)
        }

        function C(t, e, n, r, o) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n
        }

        function V(t, e) {
          if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof t ? e === t : t.has(e)
        }

        function P(t, e, n) {
          if (null != e) {
            if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object expected.");
            var r, o;
            if (n) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              r = e[Symbol.asyncDispose]
            }
            if (void 0 === r) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              r = e[Symbol.dispose], n && (o = r)
            }
            if ("function" != typeof r) throw new TypeError("Object not disposable.");
            o && (r = function() {
              try {
                o.call(this)
              } catch (t) {
                return Promise.reject(t)
              }
            }), t.stack.push({
              value: e,
              dispose: r,
              async: n
            })
          } else n && t.stack.push({
            async: !0
          });
          return e
        }
        var U = "function" == typeof SuppressedError ? SuppressedError : function(t, e, n) {
          var r = new Error(n);
          return r.name = "SuppressedError", r.error = t, r.suppressed = e, r
        };

        function N(t) {
          function e(e) {
            t.error = t.hasError ? new U(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
          }
          var n, r = 0;
          return function o() {
            for (; n = t.stack.pop();) try {
              if (!n.async && 1 === r) return r = 0, t.stack.push(n), Promise.resolve().then(o);
              if (n.dispose) {
                var a = n.dispose.call(n.value);
                if (n.async) return r |= 2, Promise.resolve(a).then(o, (function(t) {
                  return e(t), o()
                }))
              } else r |= 1
            } catch (t) {
              e(t)
            }
            if (1 === r) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error
          }()
        }

        function j(t, e) {
          return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(t, n, r, o, a) {
            return n ? e ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : t
          })) : t
        }
        e.default = {
          __extends: o,
          __assign: a,
          __rest: i,
          __decorate: c,
          __param: s,
          __esDecorate: u,
          __runInitializers: l,
          __propKey: f,
          __setFunctionName: h,
          __metadata: d,
          __awaiter: p,
          __generator: y,
          __createBinding: v,
          __exportStar: m,
          __values: _,
          __read: g,
          __spread: x,
          __spreadArrays: S,
          __spreadArray: O,
          __await: T,
          __asyncGenerator: w,
          __asyncDelegator: R,
          __asyncValues: D,
          __makeTemplateObject: A,
          __importStar: E,
          __importDefault: I,
          __classPrivateFieldGet: M,
          __classPrivateFieldSet: C,
          __classPrivateFieldIn: V,
          __addDisposableResource: P,
          __disposeResources: N,
          __rewriteRelativeImportExtension: j
        }
      },
      712: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ORelayRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(626),
          i = n(948),
          c = n(767),
          s = n(812),
          u = n(89),
          l = n(125),
          f = 120,
          h = 70,
          d = ["#1e202a", "#262833"],
          p = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.data = [], n.totalData = [], n.touchScroll = new i.TouchScroll(n), n._scrollV = 0, n.maxScrollV = 0, n._dirty = !0, n.render = function(t) {
                if (!n._isDestroyed) {
                  if (n.touchScroll.onTick(Date.now()), n._dirty) {
                    n._dirty = !1, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height);
                    for (var e = 0, r = n.data.length; e < r; e++) n.drawItem(e)
                  }
                  requestAnimationFrame(n.render)
                }
              }, n.onTouchStart = function(t, e) {
                n.touchScroll.start(e)
              }, n.onTouchMove = function(t, e) {
                n.touchScroll.update(e)
              }, n.onTouchEnd = function(t, e) {
                n.touchScroll.finish()
              }, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height), n.myNick = c.openDataUtils.getMyName(), c.openDataUtils.getRelayScores((function(t) {
                n.filterRanks(t)
              })), n
            }
            return r.__extends(e, t), e.prototype.filterRanks = function(t) {
              var e = this;
              if (t) {
                for (var n = [], r = 0; r < t.length; r++) {
                  var o = t[r];
                  if (c.openDataUtils.setOpenUserInfo(o.openid, o), o.KVDataList && 0 !== o.KVDataList.length) {
                    var a = JSON.parse(o.KVDataList[0].value);
                    if (a instanceof Array)
                      for (var i = 0; i < a.length; i++) {
                        var s = a[i];
                        s.score <= 0 || n.push({
                          score: s.score,
                          myOpenId: s.myOpenId,
                          otherOpenId: s.otherOpenId,
                          isMaster: s.isMaster
                        })
                      }
                  }
                }
                var u = [];
                for (r = 0; r < n.length; r++) {
                  for (o = n[r], i = r + 1; i < n.length; i++) {
                    var l = n[i];
                    o.myOpenId !== l.otherOpenId || o.otherOpenId !== l.myOpenId || o.isMaster === l.isMaster ? o.myOpenId === l.myOpenId && o.otherOpenId === l.otherOpenId && o.isMaster === l.isMaster && (l.score > o.score && (o = l), n.splice(i, 1), i--) : (l.score > o.score && (o = l), n.splice(i, 1), i--)
                  }
                  u.push(o)
                }
                u.sort((function(t, e) {
                  return e.score - t.score
                })), this.totalData = this.data = u;
                var f = [];
                for (r = 0; r < u.length; r++) {
                  var h = u[r];
                  c.openDataUtils.hasOpenUserInfo(h.myOpenId) || -1 === f.indexOf(h.myOpenId) && f.push(h.myOpenId), c.openDataUtils.hasOpenUserInfo(h.otherOpenId) || -1 === f.indexOf(h.otherOpenId) && f.push(h.otherOpenId)
                }
                f.length > 0 ? wx.getUserInfo({
                  openIdList: f,
                  success: function(t) {
                    if (t && t.data)
                      for (var n = 0; n < t.data.length; n++) {
                        var r = t.data[n];
                        r && c.openDataUtils.setOpenUserInfo(r.openId, r)
                      }
                    e.onRankLoaded()
                  },
                  fail: function() {
                    e.onRankLoaded()
                  }
                }) : this.onRankLoaded()
              }
            }, e.prototype.onRankLoaded = function() {
              var t = this;
              this._isDestroyed || (this._dirty = !0, (0, a.addTouchStart)(this.onTouchStart), (0, a.addTouchMove)(this.onTouchMove), (0, a.addTouchEnd)(this.onTouchEnd), (0, a.addTouchCancel)(this.onTouchEnd), this.maxScrollV = Math.max(0, this.data.length * f - o.sharedCanvas.height + 0 + 0), requestAnimationFrame((function(e) {
                t.touchScroll.previousTime = e, requestAnimationFrame(t.render)
              })))
            }, e.prototype.update = function(t) {
              var e = this.totalData;
              (e = e.filter((function(t) {
                return t.score > 0
              }))).sort((function(t, e) {
                return e.score - t.score
              })), e.forEach((function(t, e) {
                return t.rank = e + 1
              })), this.data = e, this.maxScrollV = Math.max(0, this.data.length * f - o.sharedCanvas.height + 0 + 0), this.touchScroll.throwToTop(), this._dirty = !0
            }, Object.defineProperty(e.prototype, "scrollV", {
              get: function() {
                return this._scrollV
              },
              set: function(t) {
                this._scrollV = t, this._dirty || (this._dirty = !0)
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.destroy = function() {
              t.prototype.destroy.call(this), (0, a.removeTouchStart)(this.onTouchStart), (0, a.removeTouchMove)(this.onTouchMove), (0, a.removeTouchEnd)(this.onTouchEnd), (0, a.removeTouchCancel)(this.onTouchEnd)
            }, e.prototype.drawItem = function(t) {
              var e = this,
                n = -this._scrollV + t * f + 0;
              if (!(n > o.sharedCanvas.height || n + f < 0)) {
                var r = this.data[t],
                  a = t + 1,
                  i = r.myOpenId,
                  l = r.otherOpenId,
                  p = r.isMaster,
                  y = r.score,
                  v = c.openDataUtils.getOpenUserInfo(i),
                  m = c.openDataUtils.getOpenUserInfo(l);
                o.context.fillStyle = d[t % 2], o.context.fillRect(0, n, 618, f);
                var _, g, x = r.name === this.myNick ? "#00FF00" : "white";
                if ((0, s.drawRankIndex)(a, 30, 31 + n, 46, 75 + n, x, 36), p ? (_ = v, g = m) : (_ = m, g = v), o.context.strokeStyle = "#000000", o.context.strokeRect(121, 10 + n + 1, 68, 68), _) {
                  (T = (0, u.getOrCreateAvatar)(_.image)).loaded || T.addOnceListener(u.AVATAR_LOADED, (function() {
                    e._isDestroyed || e._dirty || (e._dirty = !0)
                  }), this), o.context.drawImage(T.icon, 120, 10 + n, h, h);
                  var S = _.nickname === this.myNick ? "#00FF00" : "white",
                    O = (0, s.fitNameString)(o.context, _.nickname, 250);
                  o.context.fillStyle = S, o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText(O, 155, 110 + n)
                } else o.context.fillStyle = "gray", o.context.fillRect(120, 10 + n, h, h), o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText("未知", 155, 110 + n);
                if (o.context.strokeStyle = "#000000", o.context.strokeRect(301, 10 + n + 1, 68, 68), g) {
                  var T;
                  (T = (0, u.getOrCreateAvatar)(g.image)).loaded || T.addOnceListener(u.AVATAR_LOADED, (function() {
                    e._isDestroyed || e._dirty || (e._dirty = !0)
                  }), this), o.context.drawImage(T.icon, 300, 10 + n, h, h);
                  var w = g.nickname === this.myNick ? "#00FF00" : "white",
                    R = (0, s.fitNameString)(o.context, g.nickname, 250);
                  o.context.fillStyle = w, o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText(R, 330, 110 + n)
                } else o.context.fillStyle = "gray", o.context.fillRect(300, 10 + n, h, h), o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText("未知", 330, 110 + n);
                o.context.fillStyle = "white", o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "center", o.context.fillText(y.toString(), 535, 75 + n)
              }
            }, e
          }(l.ORank);
        e.ORelayRank = p
      },
      765: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ORelayGroupRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(626),
          i = n(948),
          c = n(767),
          s = n(812),
          u = n(89),
          l = n(125),
          f = 120,
          h = 70,
          d = ["#1e202a", "#262833"],
          p = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.data = [], n.totalData = [], n.touchScroll = new i.TouchScroll(n), n._scrollV = 0, n.maxScrollV = 0, n._dirty = !0, n.render = function(t) {
                if (!n._isDestroyed) {
                  if (n.touchScroll.onTick(Date.now()), n._dirty) {
                    n._dirty = !1, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height);
                    for (var e = 0, r = n.data.length; e < r; e++) n.drawItem(e)
                  }
                  requestAnimationFrame(n.render)
                }
              }, n.onTouchStart = function(t, e) {
                n.touchScroll.start(e)
              }, n.onTouchMove = function(t, e) {
                n.touchScroll.update(e)
              }, n.onTouchEnd = function(t, e) {
                n.touchScroll.finish()
              }, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height), n.myNick = c.openDataUtils.getMyName(), c.openDataUtils.getRelayGroupScores(e.shareTicket).then((function(t) {
                n._isDestroyed || n.filterRanks(t)
              })), n
            }
            return r.__extends(e, t), e.prototype.filterRanks = function(t) {
              var e = this;
              if (t) {
                for (var n = [], r = 0; r < t.length; r++) {
                  var o = t[r];
                  if (c.openDataUtils.setOpenUserInfo(o.openid, o), o.KVDataList && 0 !== o.KVDataList.length) {
                    var a = JSON.parse(o.KVDataList[0].value);
                    if (a instanceof Array)
                      for (var i = 0; i < a.length; i++) {
                        var s = a[i];
                        s.score <= 0 || n.push({
                          score: s.score,
                          myOpenId: s.myOpenId,
                          otherOpenId: s.otherOpenId,
                          isMaster: s.isMaster
                        })
                      }
                  }
                }
                var u = [];
                for (r = 0; r < n.length; r++) {
                  for (o = n[r], i = r + 1; i < n.length; i++) {
                    var l = n[i];
                    o.myOpenId !== l.otherOpenId || o.otherOpenId !== l.myOpenId || o.isMaster === l.isMaster ? o.myOpenId === l.myOpenId && o.otherOpenId === l.otherOpenId && o.isMaster === l.isMaster && (l.score > o.score && (o = l), n.splice(i, 1), i--) : (l.score > o.score && (o = l), n.splice(i, 1), i--)
                  }
                  u.push(o)
                }
                u.sort((function(t, e) {
                  return e.score - t.score
                })), this.totalData = this.data = u;
                var f = [];
                for (r = 0; r < u.length; r++) {
                  var h = u[r];
                  c.openDataUtils.hasOpenUserInfo(h.myOpenId) || -1 === f.indexOf(h.myOpenId) && f.push(h.myOpenId), c.openDataUtils.hasOpenUserInfo(h.otherOpenId) || -1 === f.indexOf(h.otherOpenId) && f.push(h.otherOpenId)
                }
                f.length > 0 ? wx.getUserInfo({
                  openIdList: f,
                  success: function(t) {
                    if (t && t.data)
                      for (var n = 0; n < t.data.length; n++) {
                        var r = t.data[n];
                        r && c.openDataUtils.setOpenUserInfo(r.openId, r)
                      }
                    e.onRankLoaded()
                  },
                  fail: function() {
                    e.onRankLoaded()
                  }
                }) : this.onRankLoaded()
              }
            }, e.prototype.onRankLoaded = function() {
              var t = this;
              this._isDestroyed || (this._dirty = !0, (0, a.addTouchStart)(this.onTouchStart), (0, a.addTouchMove)(this.onTouchMove), (0, a.addTouchEnd)(this.onTouchEnd), (0, a.addTouchCancel)(this.onTouchEnd), this.maxScrollV = Math.max(0, this.data.length * f - o.sharedCanvas.height + 0 + 0), requestAnimationFrame((function(e) {
                t.touchScroll.previousTime = e, requestAnimationFrame(t.render)
              })))
            }, e.prototype.update = function(t) {
              var e = this.totalData;
              (e = e.filter((function(t) {
                return t.score > 0
              }))).sort((function(t, e) {
                return e.score - t.score
              })), e.forEach((function(t, e) {
                return t.rank = e + 1
              })), this.data = e, this.maxScrollV = Math.max(0, this.data.length * f - o.sharedCanvas.height + 0 + 0), this.touchScroll.throwToTop(), this._dirty = !0
            }, Object.defineProperty(e.prototype, "scrollV", {
              get: function() {
                return this._scrollV
              },
              set: function(t) {
                this._scrollV = t, this._dirty || (this._dirty = !0)
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.destroy = function() {
              t.prototype.destroy.call(this), (0, a.removeTouchStart)(this.onTouchStart), (0, a.removeTouchMove)(this.onTouchMove), (0, a.removeTouchEnd)(this.onTouchEnd), (0, a.removeTouchCancel)(this.onTouchEnd)
            }, e.prototype.drawItem = function(t) {
              var e = this,
                n = -this._scrollV + t * f + 0;
              if (!(n > o.sharedCanvas.height || n + f < 0)) {
                var r = this.data[t],
                  a = t + 1,
                  i = r.myOpenId,
                  l = r.otherOpenId,
                  p = r.isMaster,
                  y = r.score,
                  v = c.openDataUtils.getOpenUserInfo(i),
                  m = c.openDataUtils.getOpenUserInfo(l);
                o.context.fillStyle = d[t % 2], o.context.fillRect(0, n, 618, f);
                var _, g, x = r.name === this.myNick ? "#00FF00" : "white";
                if ((0, s.drawRankIndex)(a, 30, 31 + n, 46, 75 + n, x, 36), p ? (_ = v, g = m) : (_ = m, g = v), o.context.strokeStyle = "#000000", o.context.strokeRect(121, 10 + n + 1, 68, 68), _) {
                  (T = (0, u.getOrCreateAvatar)(_.image)).loaded || T.addOnceListener(u.AVATAR_LOADED, (function() {
                    e._isDestroyed || e._dirty || (e._dirty = !0)
                  }), this), o.context.drawImage(T.icon, 120, 10 + n, h, h);
                  var S = _.nickname === this.myNick ? "#00FF00" : "white",
                    O = (0, s.fitNameString)(o.context, _.nickname, 250);
                  o.context.fillStyle = S, o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText(O, 155, 110 + n)
                } else o.context.fillStyle = "gray", o.context.fillRect(120, 10 + n, h, h), o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText("未知", 155, 110 + n);
                if (o.context.strokeStyle = "#000000", o.context.strokeRect(301, 10 + n + 1, 68, 68), g) {
                  var T;
                  (T = (0, u.getOrCreateAvatar)(g.image)).loaded || T.addOnceListener(u.AVATAR_LOADED, (function() {
                    e._isDestroyed || e._dirty || (e._dirty = !0)
                  }), this), o.context.drawImage(T.icon, 300, 10 + n, h, h);
                  var w = g.nickname === this.myNick ? "#00FF00" : "white",
                    R = (0, s.fitNameString)(o.context, g.nickname, 250);
                  o.context.fillStyle = w, o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText(R, 330, 110 + n)
                } else o.context.fillStyle = "gray", o.context.fillRect(300, 10 + n, h, h), o.context.font = "".concat(24, "px simHei"), o.context.textAlign = "center", o.context.fillText("未知", 330, 110 + n);
                o.context.fillStyle = "white", o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "center", o.context.fillText(y.toString(), 535, 75 + n)
              }
            }, e
          }(l.ORank);
        e.ORelayGroupRank = p
      },
      767: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.openDataUtils = void 0;
        var r = n(635),
          o = "cscore",
          a = new(function() {
            function t() {
              this.lastGetTime = 0, this.scoreKey = "score", this.myOpenId = -1, this.myUserInfo = null, this.myName = "", this.myAvatar = "", this.relayScore = null, this.myRankCenterScore = -1, this.myScore = -1, this.openIdMap = {}
            }
            return t.prototype.loadMyUserInfo = function() {
              var t = this;
              wx.getUserInfo({
                openIdList: ["selfOpenId"],
                success: function(e) {
                  e.data && e.data.length > 0 && (t.myUserInfo = e.data[0], t.myOpenId = t.myUserInfo.openId, t.myName = t.myUserInfo.nickName, t.myAvatar = t.myUserInfo.avatarUrl)
                }
              })
            }, t.prototype.getMyUserInfo = function() {
              return this.myUserInfo
            }, t.prototype.getMyOpenId = function() {
              return this.myOpenId
            }, t.prototype.getMyName = function() {
              return this.myName
            }, t.prototype.getMyAvatar = function() {
              return this.myAvatar
            }, t.prototype.setScoreKey = function(t) {
              this.scoreKey = t, console.log("---opendata key---:", this.scoreKey)
            }, t.prototype.canSaveGameCenter = function(t) {
              return 0 === t && "score" === this.scoreKey
            }, t.prototype.getScoreKey = function(t) {
              return 0 !== t ? this.scoreKey + t : this.scoreKey
            }, t.prototype.getRelayScoreKey = function() {
              return this.scoreKey + "-relay"
            }, t.prototype.getMyScore = function() {
              return r.__awaiter(this, void 0, void 0, (function() {
                var t, e, n = this;
                return r.__generator(this, (function(r) {
                  return this.myScore >= 0 ? [2, this.myScore] : (t = this.getScoreKey(0), e = [t], this.canSaveGameCenter(0) && e.push(o), [2, new Promise((function(t) {
                    wx.getUserCloudStorage({
                      keyList: e,
                      success: function(e) {
                        n.myScore = 0;
                        var r = e.KVDataList;
                        if (r && r.length > 0 && (n.myScore = Number(r[0].value), r.length >= 2)) try {
                          var o = JSON.parse(r[1].value);
                          o && o.wxgame && o.wxgame.score && (n.myRankCenterScore = Number(o.wxgame.score))
                        } catch (t) {
                          n.myRankCenterScore = -1
                        }
                        t(n.myScore)
                      },
                      fail: function(e) {
                        n.myScore = 0, t(n.myScore)
                      }
                    })
                  }))])
                }))
              }))
            }, t.prototype.checkBestScore = function(t) {
              var e = this;
              this.getMyScore().then((function(n) {
                t > n && e.setMyScore(t), e.myRankCenterScore < t && e.canSaveGameCenter(0) && e.saveRankCenterScore(t)
              })).catch((function(t) {
                console.error("opendata getMyScore err:" + t)
              }))
            }, t.prototype.getGroupScore = function(t, e) {
              wx.getGroupCloudStorage({
                shareTicket: t,
                keyList: [this.scoreKey],
                success: function(t) {
                  e(t.data || [])
                },
                fail: function(t) {
                  e([])
                }
              })
            }, t.prototype.getFriendScores = function() {
              return r.__awaiter(this, void 0, void 0, (function() {
                var t = this;
                return r.__generator(this, (function(e) {
                  return !this.friendScores || 0 === this.friendScores.length || Date.now() - this.lastGetTime > 18e4 ? (this.lastGetTime = Date.now(), [2, new Promise((function(e) {
                    wx.getFriendCloudStorage({
                      keyList: [t.getScoreKey(0)],
                      success: function(n) {
                        t.friendScores = n.data || [], e(t.friendScores)
                      },
                      fail: function(n) {
                        t.friendScores = [], e(t.friendScores)
                      }
                    })
                  }))]) : [2, this.friendScores]
                }))
              }))
            }, t.prototype.saveRankCenterScore = function(t) {
              if ((t = Number(t)) > 0 && t > this.myRankCenterScore) {
                this.myRankCenterScore = t;
                var e = {
                    wxgame: {
                      score: this.myRankCenterScore,
                      update_time: Math.floor(Date.now() / 1e3)
                    }
                  },
                  n = JSON.stringify(e);
                wx.setUserCloudStorage({
                  KVDataList: [{
                    key: o,
                    value: n
                  }],
                  success: function(t) {},
                  fail: function(t) {}
                })
              }
            }, t.prototype.setMyScore = function(t) {
              t = Number(t);
              var e = Math.max(this.myScore, t);
              if (this.myRankCenterScore < 0 && e > 0 && this.canSaveGameCenter(0) && this.saveRankCenterScore(e), !(t < this.myScore)) {
                this.myScore = t, this.friendScores = null, this.lastGetTime = 0;
                var n = this.getScoreKey(0);
                wx.setUserCloudStorage({
                  KVDataList: [{
                    key: n,
                    value: this.myScore + ""
                  }],
                  success: function(t) {},
                  fail: function(t) {},
                  complete: function() {}
                }), this.canSaveGameCenter(0) && this.saveRankCenterScore(this.myScore)
              }
            }, t.prototype.setRelayScore = function(t) {
              this.relayScore = t;
              var e = JSON.stringify(this.relayScore),
                n = this.getRelayScoreKey();
              wx.setUserCloudStorage({
                KVDataList: [{
                  key: n,
                  value: e
                }]
              })
            }, t.prototype.updateRelayData = function(t) {
              if (t && t.relayData) {
                var e = JSON.parse(t.relayData);
                e instanceof Array && this.setRelayScore(e)
              }
            }, t.prototype.getRelayScores = function(t) {
              wx.getFriendCloudStorage({
                keyList: [this.getRelayScoreKey()],
                success: function(e) {
                  t(e.data || [])
                },
                fail: function(e) {
                  t([])
                }
              })
            }, t.prototype.getRelayGroupScores = function(t) {
              var e = this;
              return new Promise((function(n) {
                wx.getGroupCloudStorage({
                  shareTicket: t,
                  keyList: [e.getRelayScoreKey()],
                  success: function(t) {
                    n(t.data || [])
                  },
                  fail: function(t) {
                    n([])
                  }
                })
              }))
            }, t.prototype.setOpenUserInfo = function(t, e) {
              this.openIdMap[t] = {
                openId: t,
                nickname: e.nickname || e.nickName,
                image: e.avatarUrl
              }
            }, t.prototype.getOpenUserInfo = function(t) {
              return this.openIdMap[t]
            }, t.prototype.hasOpenUserInfo = function(t) {
              return !!this.openIdMap[t]
            }, t
          }());
        e.openDataUtils = a
      },
      812: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.calFontSize = function(t, e, n, r) {
          if (!n || "" === n) return e;
          try {
            var o = t.measureText(n);
            if (o) {
              var a = o.width;
              a > r && (e = Math.floor(e * r / a))
            }
          } catch (t) {}
          return e
        }, e.fitNameString = function(t, e, n, r) {
          void 0 === r && (r = "...");
          if (!e) return "";
          var a = t.measureText(e);
          if (!a) return e;
          var i = a.width;
          if (i > n) {
            var c = new o.EmojiCharString(e),
              s = c.length;
            do {
              if (s <= 0) {
                e = "";
                break
              }
              e = c.substr(0, --s), i = t.measureText(e + r).width
            } while (i > n);
            e += r
          }
          return e
        }, e.convertKVData = function(t) {
          var e = {};
          return t.forEach((function(t) {
            return e[t.key] = Number(t.value)
          })), e
        }, e.drawRankIndex = function(t, e, n, o, i, c, s) {
          var u = a[t];
          u ? r.context.drawImage(u, e, n, u.width, u.height) : (r.context.fillStyle = c, r.context.font = "".concat(s, "px simHei"), r.context.textAlign = "center", r.context.fillText(t.toString(), o, i))
        };
        for (var r = n(524), o = n(917), a = {}, i = function(t) {
            var e = wx.createImage();
            e.src = "res/rank/rank".concat(t, ".png"), e.onload = function() {
              a[t] = e, e.onload = null
            }
          }, c = 1; c <= 3; c++) i(c)
      },
      917: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.EmojiCharString = void 0;
        var r = n(635),
          o = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g,
          a = function() {
            function t(t) {
              if ("string" != typeof t) throw new Error("Input must be a string");
              this._string = t, this._match = t.match(o) || []
            }
            return Object.defineProperty(t.prototype, "length", {
              get: function() {
                return this._match.length
              },
              enumerable: !1,
              configurable: !0
            }), t.prototype.reverse = function() {
              return this._match.reverse().join("")
            }, t.prototype.substring = function(t, e) {
              var n;
              void 0 === t && (t = 0);
              var o, a = this.length,
                i = (parseInt(t, 10) || 0) < 0 ? 0 : parseInt(t, 10) || 0;
              return i > a && (i = a), (o = void 0 === e ? a : (parseInt(e, 10) || 0) < 0 ? 0 : parseInt(e, 10) || 0) > a && (o = a), i > o && (i = (n = r.__read([o, i], 2))[0], o = n[1]), this._match.slice(i, o).join("")
            }, t.prototype.substr = function(t, e) {
              void 0 === t && (t = 0);
              var n, r = this.length,
                o = parseInt(t, 10) || 0;
              return o >= r || e <= 0 ? "" : (o < 0 && (o = Math.max(0, o + r)), n = void 0 === e ? r : o + (parseInt(e, 10) || 0), this._match.slice(o, n).join(""))
            }, t
          }();
        e.EmojiCharString = a
      },
      948: function(t, e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.TouchScroll = void 0;
        var n = [1, 1.33, 1.66, 2],
          r = .02,
          o = .998,
          a = Math.log(o);
        var i = function() {
          function t(t) {
            this.target = t, this.$scrollFactor = 1, this.previousTime = 0, this.velocity = 0, this.previousVelocity = [], this.currentPosition = 0, this.previousPosition = 0, this.lastPoint = 0, this.started = !0
          }
          return t.prototype.start = function(t) {
            this.started = !0, this.velocity = 0, this.previousVelocity.length = 0, this.previousPosition = this.currentPosition = t, this.lastPoint = t, this.animation = void 0
          }, t.prototype.update = function(t) {
            this.currentPosition = t;
            var e = this.lastPoint - t,
              n = e + this.target.scrollV;
            this.lastPoint = t, (n < 0 || n > this.target.maxScrollV) && (n -= .5 * e), this.target.scrollV = n
          }, t.prototype.finish = function() {
            var t = this.target,
              e = t.scrollV,
              i = t.maxScrollV;
            this.started = !1;
            for (var c = 2.33 * this.velocity, s = this.previousVelocity, u = s.length, l = 2.33, f = 0; f < u; f++) {
              var h = n[f];
              c += s[0] * h, l += h
            }
            var d = c / l,
              p = Math.abs(d);
            if (p > r) {
              var y = 0,
                v = e + (d - r) / a * 2 * this.$scrollFactor;
              if (v < 0 || v > i)
                for (v = e; Math.abs(d) > r;) d *= (v -= d) < 0 || v > i ? .95 * o : o, y++;
              else y = Math.log(r / p) / a;
              this.throwTo(v, y)
            } else this.checkScroll()
          }, t.prototype.checkScroll = function() {
            var t = this.target,
              e = t.scrollV,
              n = t.maxScrollV;
            e < 0 ? this.throwTo(0, 300) : e > n && this.throwTo(n, 300)
          }, t.prototype.onTick = function(t) {
            var e = t - this.previousTime;
            if (this.previousTime = t, this.started) {
              var n = this.previousVelocity;
              n.length >= 4 && n.shift(), this.velocity = (this.currentPosition - this.previousPosition) / e, n.push(this.velocity), this.previousPosition = this.currentPosition
            }
            this.animation && (this.animation.update(e), this.target.scrollV = this.animation.value, this.animation.isEnd && (this.animation = void 0, this.checkScroll()))
          }, t.prototype.throwToTop = function() {
            this.throwTo(0, 300)
          }, t.prototype.throwTo = function(t, e) {
            var n = this.target.scrollV;
            n !== t && (this.animation = new c(n, t, e))
          }, t
        }();
        e.TouchScroll = i;
        var c = function() {
          function t(t, e, n) {
            this.from = t, this.to = e, this.duration = n, this.pass = 0, this.value = 0, this.isEnd = !1, this.distance = e - t, this.value = t
          }
          return t.prototype.update = function(t) {
            var e, n;
            this.pass += t, this.pass > this.duration ? (this.value = this.to, this.isEnd = !0) : this.value = (e = this.pass / this.duration, ((n = e - 1) * n * n + 1) * this.distance + this.from)
          }, t
        }()
      },
      966: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OGroupRank = void 0;
        var r = n(635),
          o = n(524),
          a = n(626),
          i = n(948),
          c = n(767),
          s = n(812),
          u = n(89),
          l = n(125),
          f = ["#1e202a", "#262833"],
          h = function(t) {
            function e(e) {
              var n = t.call(this, e) || this;
              return n.data = [], n.totalData = [], n.touchScroll = new i.TouchScroll(n), n._scrollV = 0, n.maxScrollV = 0, n._dirty = !0, n.render = function(t) {
                if (!n._isDestroyed) {
                  if (n.touchScroll.onTick(Date.now()), n._loadingMyInfo && (n.myNick = c.openDataUtils.getMyName(), n._loadingMyInfo = 0 === n.myNick.length, n._loadingMyInfo || (n.myAvatar = c.openDataUtils.getMyAvatar(), n._dirty = !0)), n._dirty) {
                    n._dirty = !1, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height);
                    for (var e = 0, r = n.data.length; e < r; e++) n.drawItem(e)
                  }
                  requestAnimationFrame(n.render)
                }
              }, n.onTouchStart = function(t, e) {
                n.touchScroll.start(e)
              }, n.onTouchMove = function(t, e) {
                n.touchScroll.update(e)
              }, n.onTouchEnd = function(t, e) {
                n.touchScroll.finish()
              }, o.context.clearRect(0, 0, o.sharedCanvas.width, o.sharedCanvas.height), n.myNick = c.openDataUtils.getMyName(), n.myAvatar = c.openDataUtils.getMyAvatar(), n._loadingMyInfo = 0 === n.myNick.length, c.openDataUtils.getGroupScore(e.shareTicket, (function(t) {
                if (!n._isDestroyed) {
                  var e = n.totalData = t.map((function(t) {
                    var e = (0, s.convertKVData)(t.KVDataList);
                    return {
                      rank: 0,
                      name: t.nickname,
                      avatar: t.avatarUrl,
                      score: e[c.openDataUtils.getScoreKey(0)] || 0
                    }
                  }));
                  (e = e.filter((function(t) {
                    return t.score > 0
                  }))).sort((function(t, e) {
                    return e.score - t.score
                  })), e.forEach((function(t, e) {
                    return t.rank = e + 1
                  })), n.data = e, n._dirty = !0, (0, a.addTouchStart)(n.onTouchStart), (0, a.addTouchMove)(n.onTouchMove), (0, a.addTouchEnd)(n.onTouchEnd), (0, a.addTouchCancel)(n.onTouchEnd), n.maxScrollV = Math.max(0, 90 * n.data.length - o.sharedCanvas.height + 0 + 0), requestAnimationFrame((function(t) {
                    n.touchScroll.previousTime = t, requestAnimationFrame(n.render)
                  }))
                }
              })), n
            }
            return r.__extends(e, t), e.prototype.update = function(t) {
              var e = this.totalData;
              (e = e.filter((function(t) {
                return t.score > 0
              }))).sort((function(t, e) {
                return e.score - t.score
              })), e.forEach((function(t, e) {
                return t.rank = e + 1
              })), this.data = e, this.maxScrollV = Math.max(0, 90 * this.data.length - o.sharedCanvas.height + 0 + 0), this.touchScroll.throwToTop(), this._dirty = !0
            }, Object.defineProperty(e.prototype, "scrollV", {
              get: function() {
                return this._scrollV
              },
              set: function(t) {
                this._scrollV = t, this._dirty || (this._dirty = !0)
              },
              enumerable: !1,
              configurable: !0
            }), e.prototype.destroy = function() {
              t.prototype.destroy.call(this), (0, a.removeTouchStart)(this.onTouchStart), (0, a.removeTouchMove)(this.onTouchMove), (0, a.removeTouchEnd)(this.onTouchEnd), (0, a.removeTouchCancel)(this.onTouchEnd)
            }, e.prototype.drawItem = function(t) {
              var e = this,
                n = -this._scrollV + 90 * t + 0;
              if (!(n > o.sharedCanvas.height || n + 90 < 0)) {
                var r = this.data[t];
                o.context.fillStyle = f[t % 2], o.context.fillRect(0, n, 618, 90);
                var a = r.name === this.myNick && r.avatar === this.myAvatar ? "#00FF00" : "white";
                (0, s.drawRankIndex)(r.rank, 20, 16 + n, 36, 60 + n, a, 36), o.context.strokeStyle = "#000000", o.context.strokeRect(85, 10 + n + 1, 68, 68);
                var i = (0, u.getOrCreateAvatar)(r.avatar);
                i.loaded ? o.context.drawImage(i.icon, 84, 10 + n, 70, 70) : i.addOnceListener(u.AVATAR_LOADED, (function() {
                  e._isDestroyed || e._dirty || (e._dirty = !0)
                }), this), o.context.fillStyle = a, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText((0, s.fitNameString)(o.context, r.name, 300), 170, 60 + n), o.context.fillStyle = a, o.context.font = "".concat(30, "px simHei"), o.context.textAlign = "left", o.context.fillText(r.score.toString(), 510, 60 + n)
              }
            }, e
          }(l.ORank);
        e.OGroupRank = h
      }
    },
    e = {};

  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = e[r] = {
      exports: {}
    };
    return t[r](a, a.exports, n), a.exports
  }
  n.d = function(t, e) {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
      enumerable: !0,
      get: e[r]
    })
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  };
  var r, o, a, i, c, s, u, l, f, h, d, p, y, v;
  r = n(481), o = n(712), a = n(966), i = n(765), c = n(268), s = n(220), u = n(16), l = n(306), f = n(492), h = n(767), d = n(524), p = n(626), y = {}, v = null, d.hasSharedCanvas && (y[f.OpenDataType.FRIEND_RANK] = r.OFriendRank, y[f.OpenDataType.GROUP_RANK] = a.OGroupRank, y[f.OpenDataType.NEAR_RANK] = u.ONearRank, y[f.OpenDataType.SURPASS_RANK] = l.OSurpassRank, y[f.OpenDataType.REVIVE_RANK] = s.OReviveRank, y[f.OpenDataType.EXCEEDED_RANK] = c.OExceededOpenRank, y[f.OpenDataType.RELAY_RANK] = o.ORelayRank, y[f.OpenDataType.RELAY_GROUP_RANK] = i.ORelayGroupRank), wx.onMessage((function(t) {
    if (d.hasSharedCanvas) {
      var e = Number(t.type);
      if (e)
        if (e !== f.OpenDataType.HIDE) {
          var n;
          if (e !== f.OpenDataType.INIT_SCORE_KEY) return e === f.OpenDataType.MY_SCORE ? (n = Number(t.score), void h.openDataUtils.getMyScore().then((function(t) {
            n > t && h.openDataUtils.setMyScore(n)
          }))) : void(e !== f.OpenDataType.CHECK_BEST_SCORE ? e !== f.OpenDataType.SERVER_EXPERT_FLOORS && (e !== f.OpenDataType.UPDATE_RELAY_DATA ? e !== f.OpenDataType.EXPERT_SCORE && (e !== f.OpenDataType.UPDATE_MY_INFO ? (t.screenX && t.screenY && (0, p.updateXY)(t), v && v.type === e ? v.update(t) : (v && v.destroy(), v = new y[e](t))) : h.openDataUtils.loadMyUserInfo()) : h.openDataUtils.updateRelayData(t)) : h.openDataUtils.checkBestScore(Number(t.bestScore)));
          h.openDataUtils.setScoreKey(String(t.scoreKey))
        } else v && (v.destroy(), v = void 0)
    }
  }))
}();