THREE.MTLLoader = function(t) {
  this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
}, THREE.MTLLoader.prototype = {
  constructor: THREE.MTLLoader,
  load: function(t, a, r, e) {
    var s = this,
      i = new THREE.FileLoader(this.manager);
    i.setPath(this.path), i.load(t, (function(t) {
      a(s.parse(t))
    }), r, e)
  },
  setPath: function(t) {
    return this.path = t, this
  },
  setTexturePath: function(t) {
    return this.texturePath = t, this
  },
  setBaseUrl: function(t) {
    return console.warn("THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead."), this.setTexturePath(t)
  },
  setCrossOrigin: function(t) {
    return this.crossOrigin = t, this
  },
  setMaterialOptions: function(t) {
    return this.materialOptions = t, this
  },
  parse: function(t) {
    for (var a = t.split("\n"), r = {}, e = /\s+/, s = {}, i = 0; i < a.length; i++) {
      var o = a[i];
      if (0 !== (o = o.trim()).length && "#" !== o.charAt(0)) {
        var n = o.indexOf(" "),
          p = n >= 0 ? o.substring(0, n) : o;
        p = p.toLowerCase();
        var h = n >= 0 ? o.substring(n + 1) : "";
        if (h = h.trim(), "newmtl" === p) r = {
          name: h
        }, s[h] = r;
        else if ("ka" === p || "kd" === p || "ks" === p) {
          var l = h.split(e, 3);
          r[p] = [parseFloat(l[0]), parseFloat(l[1]), parseFloat(l[2])]
        } else r[p] = h
      }
    }
    var c = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
    return c.setCrossOrigin(this.crossOrigin), c.setManager(this.manager), c.setMaterials(s), c
  }
}, THREE.MTLLoader.MaterialCreator = function(t, a) {
  this.baseUrl = t || "", this.options = a, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping
}, THREE.MTLLoader.MaterialCreator.prototype = {
  constructor: THREE.MTLLoader.MaterialCreator,
  crossOrigin: "anonymous",
  setCrossOrigin: function(t) {
    return this.crossOrigin = t, this
  },
  setManager: function(t) {
    this.manager = t
  },
  setMaterials: function(t) {
    this.materialsInfo = this.convert(t), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
  },
  convert: function(t) {
    if (!this.options) return t;
    var a = {};
    for (var r in t) {
      var e = t[r],
        s = {};
      for (var i in a[r] = s, e) {
        var o = !0,
          n = e[i],
          p = i.toLowerCase();
        switch (p) {
          case "kd":
          case "ka":
          case "ks":
            this.options && this.options.normalizeRGB && (n = [n[0] / 255, n[1] / 255, n[2] / 255]), this.options && this.options.ignoreZeroRGBs && 0 === n[0] && 0 === n[1] && 0 === n[2] && (o = !1)
        }
        o && (s[p] = n)
      }
    }
    return a
  },
  preload: function() {
    for (var t in this.materialsInfo) this.create(t)
  },
  getIndex: function(t) {
    return this.nameLookup[t]
  },
  getAsArray: function() {
    var t = 0;
    for (var a in this.materialsInfo) this.materialsArray[t] = this.create(a), this.nameLookup[a] = t, t++;
    return this.materialsArray
  },
  create: function(t) {
    return void 0 === this.materials[t] && this.createMaterial_(t), this.materials[t]
  },
  createMaterial_: function(t) {
    function a(t, a) {
      if (!s[t]) {
        var e = r.getTextureParams(a, s),
          i = r.loadTexture(function(t, a) {
            return "string" != typeof a || "" === a ? "" : /^https?:\/\//i.test(a) ? a : t + a
          }(r.baseUrl, e.url));
        i.repeat.copy(e.scale), i.offset.copy(e.offset), i.wrapS = r.wrap, i.wrapT = r.wrap, s[t] = i
      }
    }
    var r = this,
      e = this.materialsInfo[t],
      s = {
        name: t,
        side: this.side
      };
    for (var i in e) {
      var o, n = e[i];
      if ("" !== n) switch (i.toLowerCase()) {
        case "kd":
          s.color = (new THREE.Color).fromArray(n);
          break;
        case "ks":
          s.specular = (new THREE.Color).fromArray(n);
          break;
        case "map_kd":
          a("map", n);
          break;
        case "map_ks":
          a("specularMap", n);
          break;
        case "norm":
          a("normalMap", n);
          break;
        case "map_bump":
        case "bump":
          a("bumpMap", n);
          break;
        case "map_d":
          a("alphaMap", n), s.transparent = !0;
          break;
        case "ns":
          s.shininess = parseFloat(n);
          break;
        case "d":
          1 > (o = parseFloat(n)) && (s.opacity = o, s.transparent = !0);
          break;
        case "tr":
          o = parseFloat(n), this.options && this.options.invertTrProperty && (o = 1 - o), o > 0 && (s.opacity = 1 - o, s.transparent = !0)
      }
    }
    return this.materials[t] = new THREE.MeshPhongMaterial(s), this.materials[t]
  },
  getTextureParams: function(t, a) {
    var r, e = {
        scale: new THREE.Vector2(1, 1),
        offset: new THREE.Vector2(0, 0)
      },
      s = t.split(/\s+/);
    return (r = s.indexOf("-bm")) >= 0 && (a.bumpScale = parseFloat(s[r + 1]), s.splice(r, 2)), (r = s.indexOf("-s")) >= 0 && (e.scale.set(parseFloat(s[r + 1]), parseFloat(s[r + 2])), s.splice(r, 4)), (r = s.indexOf("-o")) >= 0 && (e.offset.set(parseFloat(s[r + 1]), parseFloat(s[r + 2])), s.splice(r, 4)), e.url = s.join(" ").trim(), e
  },
  loadTexture: function(t, a, r, e, s) {
    var i, o = THREE.Loader.Handlers.get(t),
      n = void 0 !== this.manager ? this.manager : THREE.DefaultLoadingManager;
    return null === o && (o = new THREE.TextureLoader(n)), o.setCrossOrigin && o.setCrossOrigin(this.crossOrigin), i = o.load(t, r, e, s), void 0 !== a && (i.mapping = a), i
  }
};