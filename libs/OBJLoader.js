THREE.OBJLoader = function() {
  function t() {
    var t = {
      objects: [],
      object: {},
      vertices: [],
      normals: [],
      colors: [],
      uvs: [],
      materialLibraries: [],
      startObject: function(t, e) {
        if (this.object && !1 === this.object.fromDeclaration) return this.object.name = t, void(this.object.fromDeclaration = !1 !== e);
        var r = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
        if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0), this.object = {
            name: t || "",
            fromDeclaration: !1 !== e,
            geometry: {
              vertices: [],
              normals: [],
              colors: [],
              uvs: []
            },
            materials: [],
            smooth: !0,
            startMaterial: function(t, e) {
              var r = this._finalize(!1);
              r && (r.inherited || r.groupCount <= 0) && this.materials.splice(r.index, 1);
              var i = {
                index: this.materials.length,
                name: t || "",
                mtllib: Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "",
                smooth: void 0 !== r ? r.smooth : this.smooth,
                groupStart: void 0 !== r ? r.groupEnd : 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1,
                clone: function(t) {
                  var e = {
                    index: "number" == typeof t ? t : this.index,
                    name: this.name,
                    mtllib: this.mtllib,
                    smooth: this.smooth,
                    groupStart: 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: !1
                  };
                  return e.clone = this.clone.bind(e), e
                }
              };
              return this.materials.push(i), i
            },
            currentMaterial: function() {
              return this.materials.length > 0 ? this.materials[this.materials.length - 1] : void 0
            },
            _finalize: function(t) {
              var e = this.currentMaterial();
              if (e && -1 === e.groupEnd && (e.groupEnd = this.geometry.vertices.length / 3, e.groupCount = e.groupEnd - e.groupStart, e.inherited = !1), t && this.materials.length > 1)
                for (var r = this.materials.length - 1; r >= 0; r--) this.materials[r].groupCount <= 0 && this.materials.splice(r, 1);
              return t && 0 === this.materials.length && this.materials.push({
                name: "",
                smooth: this.smooth
              }), e
            }
          }, r && r.name && "function" == typeof r.clone) {
          var i = r.clone(0);
          i.inherited = !0, this.object.materials.push(i)
        }
        this.objects.push(this.object)
      },
      finalize: function() {
        this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
      },
      parseVertexIndex: function(t, e) {
        var r = parseInt(t, 10);
        return 3 * (r >= 0 ? r - 1 : r + e / 3)
      },
      parseNormalIndex: function(t, e) {
        var r = parseInt(t, 10);
        return 3 * (r >= 0 ? r - 1 : r + e / 3)
      },
      parseUVIndex: function(t, e) {
        var r = parseInt(t, 10);
        return 2 * (r >= 0 ? r - 1 : r + e / 2)
      },
      addVertex: function(t, e, r) {
        var i = this.vertices,
          s = this.object.geometry.vertices;
        s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[r + 0], i[r + 1], i[r + 2])
      },
      addVertexPoint: function(t) {
        var e = this.vertices;
        this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
      },
      addVertexLine: function(t) {
        var e = this.vertices;
        this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
      },
      addNormal: function(t, e, r) {
        var i = this.normals,
          s = this.object.geometry.normals;
        s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[r + 0], i[r + 1], i[r + 2])
      },
      addColor: function(t, e, r) {
        var i = this.colors,
          s = this.object.geometry.colors;
        s.push(i[t + 0], i[t + 1], i[t + 2]), s.push(i[e + 0], i[e + 1], i[e + 2]), s.push(i[r + 0], i[r + 1], i[r + 2])
      },
      addUV: function(t, e, r) {
        var i = this.uvs,
          s = this.object.geometry.uvs;
        s.push(i[t + 0], i[t + 1]), s.push(i[e + 0], i[e + 1]), s.push(i[r + 0], i[r + 1])
      },
      addUVLine: function(t) {
        var e = this.uvs;
        this.object.geometry.uvs.push(e[t + 0], e[t + 1])
      },
      addFace: function(t, e, r, i, s, a, n, o, h) {
        var l = this.vertices.length,
          u = this.parseVertexIndex(t, l),
          c = this.parseVertexIndex(e, l),
          p = this.parseVertexIndex(r, l);
        if (this.addVertex(u, c, p), void 0 !== i && "" !== i) {
          var m = this.uvs.length;
          u = this.parseUVIndex(i, m), c = this.parseUVIndex(s, m), p = this.parseUVIndex(a, m), this.addUV(u, c, p)
        }
        if (void 0 !== n && "" !== n) {
          var f = this.normals.length;
          u = this.parseNormalIndex(n, f), c = n === o ? u : this.parseNormalIndex(o, f), p = n === h ? u : this.parseNormalIndex(h, f), this.addNormal(u, c, p)
        }
        this.colors.length > 0 && this.addColor(u, c, p)
      },
      addPointGeometry: function(t) {
        this.object.geometry.type = "Points";
        for (var e = this.vertices.length, r = 0, i = t.length; i > r; r++) this.addVertexPoint(this.parseVertexIndex(t[r], e))
      },
      addLineGeometry: function(t, e) {
        this.object.geometry.type = "Line";
        for (var r = this.vertices.length, i = this.uvs.length, s = 0, a = t.length; a > s; s++) this.addVertexLine(this.parseVertexIndex(t[s], r));
        var n = 0;
        for (a = e.length; a > n; n++) this.addUVLine(this.parseUVIndex(e[n], i))
      }
    };
    return t.startObject("", !1), t
  }

  function e(t) {
    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.materials = null
  }
  var r = /^[og]\s*(.+)?/,
    i = /^mtllib /,
    s = /^usemtl /;
  return e.prototype = {
    constructor: e,
    load: function(t, e, r, i) {
      var s = this,
        a = new THREE.FileLoader(s.manager);
      a.setPath(this.path), a.load(t, (function(t) {
        e(s.parse(t))
      }), r, i)
    },
    setPath: function(t) {
      this.path = t
    },
    setMaterials: function(t) {
      return this.materials = t, this
    },
    parse: function(e) {
      var a = new t; - 1 !== e.indexOf("\r\n") && (e = e.replace(/\r\n/g, "\n")), -1 !== e.indexOf("\\\n") && (e = e.replace(/\\\n/g, ""));
      for (var n = e.split("\n"), o = "", h = "", l = [], u = "function" == typeof "".trimLeft, c = 0, p = n.length; p > c; c++)
        if (o = n[c], 0 !== (o = u ? o.trimLeft() : o.trim()).length && "#" !== (h = o.charAt(0)))
          if ("v" === h) {
            var m = o.split(/\s+/);
            switch (m[0]) {
              case "v":
                a.vertices.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])), 8 === m.length && a.colors.push(parseFloat(m[4]), parseFloat(m[5]), parseFloat(m[6]));
                break;
              case "vn":
                a.normals.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]));
                break;
              case "vt":
                a.uvs.push(parseFloat(m[1]), parseFloat(m[2]))
            }
          } else if ("f" === h) {
        for (var f = o.substr(1).trim().split(/\s+/), d = [], v = 0, g = f.length; g > v; v++) {
          var b = f[v];
          if (b.length > 0) {
            var E = b.split("/");
            d.push(E)
          }
        }
        var x = d[0];
        for (v = 1, g = d.length - 1; g > v; v++) {
          var j = d[v],
            y = d[v + 1];
          a.addFace(x[0], j[0], y[0], x[1], j[1], y[1], x[2], j[2], y[2])
        }
      } else if ("l" === h) {
        var H = o.substring(1).trim().split(" "),
          L = [],
          R = [];
        if (-1 === o.indexOf("/")) L = H;
        else
          for (var T = 0, w = H.length; w > T; T++) {
            var V = H[T].split("/");
            "" !== V[0] && L.push(V[0]), "" !== V[1] && R.push(V[1])
          }
        a.addLineGeometry(L, R)
      } else if ("p" === h) {
        var M = o.substr(1).trim().split(" ");
        a.addPointGeometry(M)
      } else if (null !== (l = r.exec(o))) {
        var F = (" " + l[0].substr(1).trim()).substr(1);
        a.startObject(F)
      } else if (s.test(o)) a.object.startMaterial(o.substring(7).trim(), a.materialLibraries);
      else if (i.test(o)) a.materialLibraries.push(o.substring(7).trim());
      else {
        if ("s" !== h) {
          if ("\0" === o) continue;
          throw new Error('THREE.OBJLoader: Unexpected line: "' + o + '"')
        }
        if ((l = o.split(" ")).length > 1) {
          var I = l[1].trim().toLowerCase();
          a.object.smooth = "0" !== I && "off" !== I
        } else a.object.smooth = !0;
        (J = a.object.currentMaterial()) && (J.smooth = a.object.smooth)
      }
      a.finalize();
      var P = new THREE.Group;
      P.materialLibraries = [].concat(a.materialLibraries);
      for (c = 0, p = a.objects.length; p > c; c++) {
        var A = a.objects[c],
          z = A.geometry,
          C = A.materials,
          B = "Line" === z.type,
          U = "Points" === z.type,
          N = !1;
        if (0 !== z.vertices.length) {
          var O, G = new THREE.BufferGeometry;
          G.addAttribute("position", new THREE.Float32BufferAttribute(z.vertices, 3)), z.normals.length > 0 ? G.addAttribute("normal", new THREE.Float32BufferAttribute(z.normals, 3)) : G.computeVertexNormals(), z.colors.length > 0 && (N = !0, G.addAttribute("color", new THREE.Float32BufferAttribute(z.colors, 3))), z.uvs.length > 0 && G.addAttribute("uv", new THREE.Float32BufferAttribute(z.uvs, 2));
          for (var S = [], _ = 0, D = C.length; D > _; _++) {
            var k = C[_],
              J = void 0;
            if (null !== this.materials)
              if (J = this.materials.create(k.name), !B || !J || J instanceof THREE.LineBasicMaterial) {
                if (U && J && !(J instanceof THREE.PointsMaterial)) {
                  var q = new THREE.PointsMaterial({
                    size: 10,
                    sizeAttenuation: !1
                  });
                  K.copy(J), J = q
                }
              } else {
                var K = new THREE.LineBasicMaterial;
                K.copy(J), K.lights = !1, J = K
              } J || ((J = B ? new THREE.LineBasicMaterial : U ? new THREE.PointsMaterial({
              size: 1,
              sizeAttenuation: !1
            }) : new THREE.MeshPhongMaterial).name = k.name), J.flatShading = !k.smooth, J.vertexColors = N ? THREE.VertexColors : THREE.NoColors, S.push(J)
          }
          if (S.length > 1) {
            for (_ = 0, D = C.length; D > _; _++) {
              k = C[_];
              G.addGroup(k.groupStart, k.groupCount, _)
            }
            O = B ? new THREE.LineSegments(G, S) : U ? new THREE.Points(G, S) : new THREE.Mesh(G, S)
          } else O = B ? new THREE.LineSegments(G, S[0]) : U ? new THREE.Points(G, S[0]) : new THREE.Mesh(G, S[0]);
          O.name = A.name, P.add(O)
        }
      }
      return P
    }
  }, e
}();