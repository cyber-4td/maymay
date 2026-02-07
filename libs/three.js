! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {})
}(this, (function(t) {
  "use strict";

  function e() {}

  function i(t, e) {
    this.x = t || 0, this.y = e || 0
  }

  function n() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
  }

  function r(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
  }

  function a(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0
  }

  function o() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
  }

  function s(t, e, n, r, a, h, c, l, u, p) {
    Object.defineProperty(this, "id", {
      value: vs++
    }), this.uuid = us.generateUUID(), this.name = "", this.image = void 0 !== t ? t : s.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : s.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : Xa, this.wrapT = void 0 !== r ? r : Xa, this.magFilter = void 0 !== a ? a : Ka, this.minFilter = void 0 !== h ? h : $a, this.anisotropy = void 0 !== u ? u : 1, this.format = void 0 !== c ? c : mo, this.type = void 0 !== l ? l : to, this.offset = new i(0, 0), this.repeat = new i(1, 1), this.center = new i(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new o, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== p ? p : ts, this.version = 0, this.onUpdate = null
  }

  function h(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
  }

  function c(t, e, i) {
    this.width = t, this.height = e, this.scissor = new h(0, 0, t, e), this.scissorTest = !1, this.viewport = new h(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = Ka), this.texture = new s(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 === i.generateMipmaps || i.generateMipmaps, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
  }

  function l(t, e, i) {
    c.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
  }

  function u(t, e, i, n, r, a, o, h, c, l, u, p) {
    s.call(this, null, a, o, h, c, l, n, r, u, p), this.image = {
      data: t,
      width: e,
      height: i
    }, this.magFilter = void 0 !== c ? c : Ya, this.minFilter = void 0 !== l ? l : Ya, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
  }

  function p(t, e) {
    this.min = void 0 !== t ? t : new a(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new a(-1 / 0, -1 / 0, -1 / 0)
  }

  function d(t, e) {
    this.center = void 0 !== t ? t : new a, this.radius = void 0 !== e ? e : 0
  }

  function f(t, e) {
    this.normal = void 0 !== t ? t : new a(1, 0, 0), this.constant = void 0 !== e ? e : 0
  }

  function m(t, e, i, n, r, a) {
    this.planes = [void 0 !== t ? t : new f, void 0 !== e ? e : new f, void 0 !== i ? i : new f, void 0 !== n ? n : new f, void 0 !== r ? r : new f, void 0 !== a ? a : new f]
  }

  function v(t, e, i) {
    return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
  }

  function g() {
    function t(r, a) {
      !1 !== i && (n(r, a), e.requestAnimationFrame(t))
    }
    var e = null,
      i = !1,
      n = null;
    return {
      start: function() {
        !0 !== i && null !== n && (e.requestAnimationFrame(t), i = !0)
      },
      stop: function() {
        i = !1
      },
      setAnimationLoop: function(t) {
        n = t
      },
      setContext: function(t) {
        e = t
      }
    }
  }

  function y(t) {
    function e(e, i) {
      var n = e.array,
        r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
        a = t.createBuffer();
      t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
      var o = t.FLOAT;
      return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT : n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT : n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && (o = t.UNSIGNED_BYTE), {
        buffer: a,
        type: o,
        bytesPerElement: n.BYTES_PER_ELEMENT,
        version: e.version
      }
    }

    function i(e, i, n) {
      var r = i.array,
        a = i.updateRange;
      t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, t.STATIC_DRAW) : -1 === a.count ? t.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
    }
    var n = new WeakMap;
    return {
      get: function(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
      },
      remove: function(e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var i = n.get(e);
        i && (t.deleteBuffer(i.buffer), n.delete(e))
      },
      update: function(t, r) {
        t.isInterleavedBufferAttribute && (t = t.data);
        var a = n.get(t);
        void 0 === a ? n.set(t, e(t, r)) : a.version < t.version && (i(a.buffer, t, r), a.version = t.version)
      }
    }
  }

  function x(t, e, i, n, r, o) {
    this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new a, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new v, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0
  }

  function _(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || _.DefaultOrder
  }

  function b() {
    this.mask = 1
  }

  function M() {
    Object.defineProperty(this, "id", {
      value: Ss++
    }), this.uuid = us.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = M.DefaultUp.clone();
    var t = new a,
      e = new _,
      i = new r,
      s = new a(1, 1, 1);
    e.onChange((function() {
      i.setFromEuler(e, !1)
    })), i.onChange((function() {
      e.setFromQuaternion(i, void 0, !1)
    })), Object.defineProperties(this, {
      position: {
        enumerable: !0,
        value: t
      },
      rotation: {
        enumerable: !0,
        value: e
      },
      quaternion: {
        enumerable: !0,
        value: i
      },
      scale: {
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new n
      },
      normalMatrix: {
        value: new o
      }
    }), this.matrix = new n, this.matrixWorld = new n, this.matrixAutoUpdate = M.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new b, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
  }

  function w() {
    Object.defineProperty(this, "id", {
      value: Ns += 2
    }), this.uuid = us.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function S(t, e, i) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function E(t, e, i) {
    S.call(this, new Int8Array(t), e, i)
  }

  function T(t, e, i) {
    S.call(this, new Uint8Array(t), e, i)
  }

  function A(t, e, i) {
    S.call(this, new Uint8ClampedArray(t), e, i)
  }

  function L(t, e, i) {
    S.call(this, new Int16Array(t), e, i)
  }

  function C(t, e, i) {
    S.call(this, new Uint16Array(t), e, i)
  }

  function P(t, e, i) {
    S.call(this, new Int32Array(t), e, i)
  }

  function R(t, e, i) {
    S.call(this, new Uint32Array(t), e, i)
  }

  function I(t, e, i) {
    S.call(this, new Float32Array(t), e, i)
  }

  function N(t, e, i) {
    S.call(this, new Float64Array(t), e, i)
  }

  function O() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function D(t) {
    if (0 === t.length) return -1 / 0;
    for (var e = t[0], i = 1, n = t.length; n > i; ++i) t[i] > e && (e = t[i]);
    return e
  }

  function U() {
    Object.defineProperty(this, "id", {
      value: Os += 2
    }), this.uuid = us.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}
  }

  function z(t, e, i, n, r, a) {
    w.call(this), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: a
    }, this.fromBufferGeometry(new B(t, e, i, n, r, a)), this.mergeVertices()
  }

  function B(t, e, i, n, r, o) {
    function s(t, e, i, n, r, o, s, m, v, g, y) {
      var x, _, b = o / v,
        M = s / g,
        w = o / 2,
        S = s / 2,
        E = m / 2,
        T = v + 1,
        A = g + 1,
        L = 0,
        C = 0,
        P = new a;
      for (_ = 0; A > _; _++) {
        var R = _ * M - S;
        for (x = 0; T > x; x++) {
          var I = x * b - w;
          P[t] = I * n, P[e] = R * r, P[i] = E, l.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[i] = m > 0 ? 1 : -1, u.push(P.x, P.y, P.z), p.push(x / v), p.push(1 - _ / g), L += 1
        }
      }
      for (_ = 0; g > _; _++)
        for (x = 0; v > x; x++) {
          var N = d + x + T * _,
            O = d + x + T * (_ + 1),
            D = d + (x + 1) + T * (_ + 1),
            U = d + (x + 1) + T * _;
          c.push(N, O, U), c.push(O, D, U), C += 6
        }
      h.addGroup(f, C, y), f += C, d += L
    }
    U.call(this), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: o
    };
    var h = this;
    t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
    var c = [],
      l = [],
      u = [],
      p = [],
      d = 0,
      f = 0;
    s("z", "y", "x", -1, -1, i, e, t, o, r, 0), s("z", "y", "x", 1, -1, i, e, -t, o, r, 1), s("x", "z", "y", 1, 1, t, i, e, n, o, 2), s("x", "z", "y", 1, -1, t, i, -e, n, o, 3), s("x", "y", "z", 1, -1, t, e, i, n, r, 4), s("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(c), this.addAttribute("position", new I(l, 3)), this.addAttribute("normal", new I(u, 3)), this.addAttribute("uv", new I(p, 2))
  }

  function F(t, e, i, n) {
    w.call(this), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    }, this.fromBufferGeometry(new G(t, e, i, n)), this.mergeVertices()
  }

  function G(t, e, i, n) {
    U.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    };
    var r, a, o = (t = t || 1) / 2,
      s = (e = e || 1) / 2,
      h = Math.floor(i) || 1,
      c = Math.floor(n) || 1,
      l = h + 1,
      u = c + 1,
      p = t / h,
      d = e / c,
      f = [],
      m = [],
      v = [],
      g = [];
    for (a = 0; u > a; a++) {
      var y = a * d - s;
      for (r = 0; l > r; r++) {
        var x = r * p - o;
        m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / h), g.push(1 - a / c)
      }
    }
    for (a = 0; c > a; a++)
      for (r = 0; h > r; r++) {
        var _ = r + l * a,
          b = r + l * (a + 1),
          M = r + 1 + l * (a + 1),
          w = r + 1 + l * a;
        f.push(_, b, w), f.push(b, M, w)
      }
    this.setIndex(f), this.addAttribute("position", new I(m, 3)), this.addAttribute("normal", new I(v, 3)), this.addAttribute("uv", new I(g, 2))
  }

  function k() {
    Object.defineProperty(this, "id", {
      value: Ds++
    }), this.uuid = us.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = ta, this.side = qr, this.flatShading = !1, this.vertexColors = Zr, this.opacity = 1, this.transparent = !1, this.blendSrc = fa, this.blendDst = ma, this.blendEquation = aa, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Sa, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
  }

  function V(t) {
    k.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
  }

  function H(t, e) {
    this.origin = void 0 !== t ? t : new a, this.direction = void 0 !== e ? e : new a
  }

  function j(t, e, i) {
    this.a = void 0 !== t ? t : new a, this.b = void 0 !== e ? e : new a, this.c = void 0 !== i ? i : new a
  }

  function W(t) {
    k.call(this), this.type = "MeshBasicMaterial", this.color = new v(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ca, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function X(t, e) {
    M.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new U, this.material = void 0 !== e ? e : new W({
      color: 16777215 * Math.random()
    }), this.drawMode = Ko, this.updateMorphTargets()
  }

  function q(t, e, i, n) {
    function r(t, i) {
      e.buffers.color.setClear(t.r, t.g, t.b, i, n)
    }
    var a, o, s = new v(0),
      h = 0;
    return {
      getClearColor: function() {
        return s
      },
      setClearColor: function(t, e) {
        s.set(t), r(s, h = void 0 !== e ? e : 1)
      },
      getClearAlpha: function() {
        return h
      },
      setClearAlpha: function(t) {
        r(s, h = t)
      },
      render: function(e, n, c, l) {
        var u = n.background;
        null === u ? r(s, h) : u && u.isColor && (r(u, 1), l = !0), (t.autoClear || l) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), u && u.isCubeTexture ? (void 0 === o && ((o = new X(new B(1, 1, 1), new V({
          uniforms: xs.clone(Ms.cube.uniforms),
          vertexShader: Ms.cube.vertexShader,
          fragmentShader: Ms.cube.fragmentShader,
          side: Yr,
          depthTest: !0,
          depthWrite: !1,
          fog: !1
        }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e, i) {
          this.matrixWorld.copyPosition(i.matrixWorld)
        }, i.update(o)), o.material.uniforms.tCube.value = u, e.push(o, o.geometry, o.material, 0, null)) : u && u.isTexture && (void 0 === a && ((a = new X(new G(2, 2), new V({
          uniforms: xs.clone(Ms.background.uniforms),
          vertexShader: Ms.background.vertexShader,
          fragmentShader: Ms.background.fragmentShader,
          side: qr,
          depthTest: !0,
          depthWrite: !1,
          fog: !1
        }))).geometry.removeAttribute("normal"), i.update(a)), a.material.uniforms.t2D.value = u, e.push(a, a.geometry, a.material, 0, null))
      }
    }
  }

  function Y(t, e, i, n) {
    var r;
    this.setMode = function(t) {
      r = t
    }, this.render = function(e, n) {
      t.drawArrays(r, e, n), i.update(n, r)
    }, this.renderInstances = function(a, o, s) {
      var h;
      if (n.isWebGL2) h = t;
      else if (null === (h = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h[n.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), i.update(s, r, a.maxInstancedCount)
    }
  }

  function J(t, e, i) {
    function n(e) {
      if ("highp" === e) {
        var i = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT),
          n = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
        if (i && i.precision > 0 && n && n.precision > 0) return "highp";
        e = "mediump"
      }
      if ("mediump" === e) {
        var r = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT),
          a = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT);
        if (r && r.precision > 0 && a && a.precision > 0) return "mediump"
      }
      return "lowp"
    }
    var r, a = void 0 !== i.precision ? i.precision : "highp",
      o = n(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    var s = !0 === i.logarithmicDepthBuffer,
      h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
      c = (t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), !1);
    return {
      isWebGL2: !1,
      getMaxAnisotropy: function() {
        if (void 0 !== r) return r;
        var i = e.get("EXT_texture_filter_anisotropic");
        return r = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
      },
      getMaxPrecision: n,
      precision: a,
      logarithmicDepthBuffer: s,
      maxTextures: h,
      maxVertexTextures: 0,
      maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
      maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
      maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
      maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
      maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
      maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
      vertexTextures: c,
      floatFragmentTextures: !1,
      floatVertexTextures: false,
      maxVertexAttribs: 16
    }
  }

  function Z() {
    function t() {
      l.value !== n && (l.value = n, l.needsUpdate = r > 0), i.numPlanes = r, i.numIntersection = 0
    }

    function e(t, e, n, r) {
      var a = null !== t ? t.length : 0,
        o = null;
      if (0 !== a) {
        if (o = l.value, !0 !== r || null === o) {
          var s = n + 4 * a,
            u = e.matrixWorldInverse;
          c.getNormalMatrix(u), (null === o || o.length < s) && (o = new Float32Array(s));
          for (var p = 0, d = n; p !== a; ++p, d += 4) h.copy(t[p]).applyMatrix4(u, c), h.normal.toArray(o, d), o[d + 3] = h.constant
        }
        l.value = o, l.needsUpdate = !0
      }
      return i.numPlanes = a, o
    }
    var i = this,
      n = null,
      r = 0,
      a = !1,
      s = !1,
      h = new f,
      c = new o,
      l = {
        value: null,
        needsUpdate: !1
      };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, i, o) {
      var s = 0 !== t.length || i || 0 !== r || a;
      return a = i, n = e(t, o, 0), r = t.length, s
    }, this.beginShadows = function() {
      s = !0, e(null)
    }, this.endShadows = function() {
      s = !1, t()
    }, this.setState = function(i, o, h, c, u, p) {
      if (!a || null === i || 0 === i.length || s && !h) s ? e(null) : t();
      else {
        var d = s ? 0 : r,
          f = 4 * d,
          m = u.clippingState || null;
        l.value = m, m = e(i, c, f, p);
        for (var v = 0; v !== f; ++v) m[v] = n[v];
        u.clippingState = m, this.numIntersection = o ? this.numPlanes : 0, this.numPlanes += d
      }
    }
  }

  function K(t) {
    var e = {};
    return {
      get: function(i) {
        if (void 0 !== e[i]) return e[i];
        var n;
        switch (i) {
          case "WEBGL_depth_texture":
            n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            n = t.getExtension(i)
        }
        return e[i] = n, n
      }
    }
  }

  function Q(t, e, i) {
    function n(t) {
      var o = t.target,
        s = r[o.id];
      for (var h in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[h]);
      o.removeEventListener("dispose", n), delete r[o.id];
      var c = a[s.id];
      c && (e.remove(c), delete a[s.id]), i.memory.geometries--
    }
    var r = {},
      a = {};
    return {
      get: function(t, e) {
        var a = r[e.id];
        return a || (e.addEventListener("dispose", n), e.isBufferGeometry ? a = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new U).setFromObject(t)), a = e._bufferGeometry), r[e.id] = a, i.memory.geometries++, a)
      },
      update: function(i) {
        var n = i.index,
          r = i.attributes;
        for (var a in null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER), r) e.update(r[a], t.ARRAY_BUFFER);
        var o = i.morphAttributes;
        for (var a in o)
          for (var s = o[a], h = 0, c = s.length; c > h; h++) e.update(s[h], t.ARRAY_BUFFER)
      },
      getWireframeAttribute: function(i) {
        var n = a[i.id];
        if (n) return n;
        var r, o = [],
          s = i.index,
          h = i.attributes;
        if (null !== s)
          for (var c = 0, l = (r = s.array).length; l > c; c += 3) {
            var u = r[c + 0],
              p = r[c + 1],
              d = r[c + 2];
            o.push(u, p, p, d, d, u)
          } else
            for (c = 0, l = (r = h.position.array).length / 3 - 1; l > c; c += 3) {
              u = c + 0, p = c + 1, d = c + 2;
              o.push(u, p, p, d, d, u)
            }
        return n = new(D(o) > 65535 ? R : C)(o, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), a[i.id] = n, n
      }
    }
  }

  function $(t, e, i, n) {
    var r, a, o;
    this.setMode = function(t) {
      r = t
    }, this.setIndex = function(t) {
      a = t.type, o = t.bytesPerElement
    }, this.render = function(e, n) {
      t.drawElements(r, n, a, e * o), i.update(n, r)
    }, this.renderInstances = function(s, h, c) {
      var l;
      if (n.isWebGL2) l = t;
      else if (null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[n.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, c, a, h * o, s.maxInstancedCount), i.update(c, r, s.maxInstancedCount)
    }
  }

  function tt(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
      },
      update: function(i, n, r) {
        switch (r = r || 1, e.calls++, n) {
          case t.TRIANGLES:
            e.triangles += r * (i / 3);
            break;
          case t.TRIANGLE_STRIP:
          case t.TRIANGLE_FAN:
            e.triangles += r * (i - 2);
            break;
          case t.LINES:
            e.lines += r * (i / 2);
            break;
          case t.LINE_STRIP:
            e.lines += r * (i - 1);
            break;
          case t.LINE_LOOP:
            e.lines += r * i;
            break;
          case t.POINTS:
            e.points += r * i;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
        }
      }
    }
  }

  function et(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
  }

  function it(t) {
    var e = {},
      i = new Float32Array(8);
    return {
      update: function(n, r, a, o) {
        var s = n.morphTargetInfluences,
          h = s.length,
          c = e[r.id];
        if (void 0 === c) {
          c = [];
          for (var l = 0; h > l; l++) c[l] = [l, 0];
          e[r.id] = c
        }
        var u = a.morphTargets && r.morphAttributes.position,
          p = a.morphNormals && r.morphAttributes.normal;
        for (l = 0; h > l; l++) {
          0 !== (d = c[l])[1] && (u && r.removeAttribute("morphTarget" + l), p && r.removeAttribute("morphNormal" + l))
        }
        for (l = 0; h > l; l++) {
          (d = c[l])[0] = l, d[1] = s[l]
        }
        for (c.sort(et), l = 0; 8 > l; l++) {
          var d;
          if (d = c[l]) {
            var f = d[0],
              m = d[1];
            if (m) {
              u && r.addAttribute("morphTarget" + l, u[f]), p && r.addAttribute("morphNormal" + l, p[f]), i[l] = m;
              continue
            }
          }
          i[l] = 0
        }
        o.getUniforms().setValue(t, "morphTargetInfluences", i)
      }
    }
  }

  function nt(t, e) {
    var i = {};
    return {
      update: function(n) {
        var r = e.render.frame,
          a = n.geometry,
          o = t.get(n, a);
        return i[o.id] !== r && (a.isGeometry && o.updateFromObject(n), t.update(o), i[o.id] = r), o
      },
      dispose: function() {
        i = {}
      }
    }
  }

  function rt(t, e, i, n, r, a, o, h, c, l) {
    t = void 0 !== t ? t : [], e = void 0 !== e ? e : Ba, s.call(this, t, e, i, n, r, a, o, h, c, l), this.flipY = !1
  }

  function at() {
    this.seq = [], this.map = {}
  }

  function ot(t, e, i) {
    var n = t[0];
    if (0 >= n || n > 0) return t;
    var r = e * i,
      a = Bs[r];
    if (void 0 === a && (a = new Float32Array(r), Bs[r] = a), 0 !== e) {
      n.toArray(a, 0);
      for (var o = 1, s = 0; o !== e; ++o) s += i, t[o].toArray(a, s)
    }
    return a
  }

  function st(t, e) {
    if (t.length !== e.length) return !1;
    for (var i = 0, n = t.length; n > i; i++)
      if (t[i] !== e[i]) return !1;
    return !0
  }

  function ht(t, e) {
    for (var i = 0, n = e.length; n > i; i++) t[i] = e[i]
  }

  function ct(t, e) {
    var i = Fs[e];
    void 0 === i && (i = new Int32Array(e), Fs[e] = i);
    for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
    return i
  }

  function lt(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
  }

  function ut(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
  }

  function pt(t, e) {
    var i = this.cache;
    void 0 !== e.x ? (i[0] !== e.x || i[1] !== e.y) && (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y) : (i[0] !== e[0] || i[1] !== e[1]) && (t.uniform2fv(this.addr, e), i[0] = e[0], i[1] = e[1])
  }

  function dt(t, e) {
    var i = this.cache;
    void 0 !== e.x ? (i[0] !== e.x || i[1] !== e.y || i[2] !== e.z) && (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z) : void 0 !== e.r ? (i[0] !== e.r || i[1] !== e.g || i[2] !== e.b) && (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b) : (i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2]) && (t.uniform3fv(this.addr, e), i[0] = e[0], i[1] = e[1], i[2] = e[2])
  }

  function ft(t, e) {
    var i = this.cache;
    void 0 !== e.x ? (i[0] !== e.x || i[1] !== e.y || i[2] !== e.z || i[3] !== e.w) && (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w) : (i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3]) && (t.uniform4fv(this.addr, e), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3])
  }

  function mt(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (st(i, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), ht(i, e)
    } else {
      if (st(i, n)) return;
      Vs.set(n), t.uniformMatrix2fv(this.addr, !1, Vs), ht(i, n)
    }
  }

  function vt(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (st(i, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), ht(i, e)
    } else {
      if (st(i, n)) return;
      ks.set(n), t.uniformMatrix3fv(this.addr, !1, ks), ht(i, n)
    }
  }

  function gt(t, e) {
    var i = this.cache,
      n = e.elements;
    if (void 0 === n) {
      if (st(i, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), ht(i, e)
    } else {
      if (st(i, n)) return;
      Gs.set(n), t.uniformMatrix4fv(this.addr, !1, Gs), ht(i, n)
    }
  }

  function yt(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || Us, r)
  }

  function xt(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || zs, r)
  }

  function _t(t, e) {
    var i = this.cache;
    st(i, e) || (t.uniform2iv(this.addr, e), ht(i, e))
  }

  function bt(t, e) {
    var i = this.cache;
    st(i, e) || (t.uniform3iv(this.addr, e), ht(i, e))
  }

  function Mt(t, e) {
    var i = this.cache;
    st(i, e) || (t.uniform4iv(this.addr, e), ht(i, e))
  }

  function wt(t, e) {
    var i = this.cache;
    st(i, e) || (t.uniform1fv(this.addr, e), ht(i, e))
  }

  function St(t, e) {
    var i = this.cache;
    st(i, e) || (t.uniform1iv(this.addr, e), ht(i, e))
  }

  function Et(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 2);
    st(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n))
  }

  function Tt(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 3);
    st(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n))
  }

  function At(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 4);
    st(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n))
  }

  function Lt(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 4);
    st(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
  }

  function Ct(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 9);
    st(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
  }

  function Pt(t, e) {
    var i = this.cache,
      n = ot(e, this.size, 16);
    st(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
  }

  function Rt(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = ct(i, r);
    !1 === st(n, a) && (t.uniform1iv(this.addr, a), ht(n, a));
    for (var o = 0; o !== r; ++o) i.setTexture2D(e[o] || Us, a[o])
  }

  function It(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = ct(i, r);
    !1 === st(n, a) && (t.uniform1iv(this.addr, a), ht(n, a));
    for (var o = 0; o !== r; ++o) i.setTextureCube(e[o] || zs, a[o])
  }

  function Nt(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
      switch (t) {
        case 5126:
          return lt;
        case 35664:
          return pt;
        case 35665:
          return dt;
        case 35666:
          return ft;
        case 35674:
          return mt;
        case 35675:
          return vt;
        case 35676:
          return gt;
        case 35678:
        case 36198:
          return yt;
        case 35680:
          return xt;
        case 5124:
        case 35670:
          return ut;
        case 35667:
        case 35671:
          return _t;
        case 35668:
        case 35672:
          return bt;
        case 35669:
        case 35673:
          return Mt
      }
    }(e.type)
  }

  function Ot(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
      switch (t) {
        case 5126:
          return wt;
        case 35664:
          return Et;
        case 35665:
          return Tt;
        case 35666:
          return At;
        case 35674:
          return Lt;
        case 35675:
          return Ct;
        case 35676:
          return Pt;
        case 35678:
          return Rt;
        case 35680:
          return It;
        case 5124:
        case 35670:
          return St;
        case 35667:
        case 35671:
          return _t;
        case 35668:
        case 35672:
          return bt;
        case 35669:
        case 35673:
          return Mt
      }
    }(e.type)
  }

  function Dt(t) {
    this.id = t, at.call(this)
  }

  function Ut(t, e) {
    t.seq.push(e), t.map[e.id] = e
  }

  function zt(t, e, i) {
    var n = t.name,
      r = n.length;
    for (Hs.lastIndex = 0;;) {
      var a = Hs.exec(n);
      if (!a) break;
      var o = Hs.lastIndex,
        s = a[1],
        h = "]" === a[2],
        c = a[3];
      if (h && (s |= 0), void 0 === c || "[" === c && o + 2 === r) {
        Ut(i, void 0 === c ? new Nt(s, t, e) : new Ot(s, t, e));
        break
      }
      var l = i.map[s];
      void 0 === l && Ut(i, l = new Dt(s)), i = l
    }
  }

  function Bt(t, e, i) {
    at.call(this), this.renderer = i;
    for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; n > r; ++r) {
      var a = t.getActiveUniform(e, r);
      zt(a, t.getUniformLocation(e, a.name), this)
    }
  }

  function Ft(t, e, i) {
    var n = t.createShader(e);
    return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), n
  }

  function Gt(t) {
    switch (t) {
      case ts:
        return ["Linear", "( value )"];
      case es:
        return ["sRGB", "( value )"];
      case ns:
        return ["RGBE", "( value )"];
      case rs:
        return ["RGBM", "( value, 7.0 )"];
      case as:
        return ["RGBM", "( value, 16.0 )"];
      case os:
        return ["RGBD", "( value, 256.0 )"];
      case is:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw new Error("unsupported encoding: " + t)
    }
  }

  function kt(t, e) {
    var i = Gt(e);
    return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
  }

  function Vt(t, e) {
    var i = Gt(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
  }

  function Ht(t, e) {
    var i;
    switch (e) {
      case Na:
        i = "Linear";
        break;
      case Oa:
        i = "Reinhard";
        break;
      case Da:
        i = "Uncharted2";
        break;
      case Ua:
        i = "OptimizedCineon";
        break;
      default:
        throw new Error("unsupported toneMapping: " + e)
    }
    return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
  }

  function jt(t) {
    return "" !== t
  }

  function Wt(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
  }

  function Xt(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
  }

  function qt(t) {
    return t.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, (function(t, e) {
      var i = ys[e];
      if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
      return qt(i)
    }))
  }

  function Yt(t) {
    return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, (function(t, e, i, n) {
      for (var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
      return r
    }))
  }

  function Jt(t) {
    return t = (t = (t = (t = t.replace(/\r/g, "")).replace(/    /g, "\t")).replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")).split("\n").map((function(t) {
      return t.trimEnd()
    })).join("\n"), (t += "\n").replace(/\n{2,}/g, "\n")
  }

  function Zt(t, e, i, n, r, a, o) {
    var s = t.context,
      h = n.defines,
      c = r.vertexShader,
      l = r.fragmentShader,
      u = "SHADOWMAP_TYPE_BASIC";
    a.shadowMapType === Wr ? u = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === Xr && (u = "SHADOWMAP_TYPE_PCF_SOFT");
    var p = "ENVMAP_TYPE_CUBE",
      d = "ENVMAP_MODE_REFLECTION",
      f = "ENVMAP_BLENDING_MULTIPLY";
    if (a.envMap) {
      switch (n.envMap.mapping) {
        case Ba:
        case Fa:
          p = "ENVMAP_TYPE_CUBE";
          break;
        case Ha:
        case ja:
          p = "ENVMAP_TYPE_CUBE_UV";
          break;
        case Ga:
        case ka:
          p = "ENVMAP_TYPE_EQUIREC";
          break;
        case Va:
          p = "ENVMAP_TYPE_SPHERE"
      }
      switch (n.envMap.mapping) {
        case Fa:
        case ka:
          d = "ENVMAP_MODE_REFRACTION"
      }
      switch (n.combine) {
        case Ca:
          f = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case Pa:
          f = "ENVMAP_BLENDING_MIX";
          break;
        case Ra:
          f = "ENVMAP_BLENDING_ADD"
      }
    }
    var m, v, g = t.gammaFactor > 0 ? t.gammaFactor : 1,
      y = o.isWebGL2 ? "" : function(t, e, i) {
        return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(jt).join("\n")
      }(n.extensions, a, e),
      x = function(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          !1 !== n && e.push("#define " + i + " " + n)
        }
        return e.join("\n")
      }(h),
      _ = s.createProgram();
    if (n.isRawShaderMaterial ? ((m = [x].filter(jt).join("\n")).length > 0 && (m += "\n"), (v = [y, x].filter(jt).join("\n")).length > 0 && (v += "\n")) : (m = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, x, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(jt).join("\n"), v = [y, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, x, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== Ia ? "#define TONE_MAPPING" : "", a.toneMapping !== Ia ? ys.tonemapping_pars_fragment : "", a.toneMapping !== Ia ? Ht("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? ys.encodings_pars_fragment : "", a.mapEncoding ? kt("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? kt("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? kt("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? kt("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? Vt("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(jt).join("\n")), c = Xt(c = Wt(c = qt(c), a), a), l = Xt(l = Wt(l = qt(l), a), a), c = Yt(c), l = Yt(l), o.isWebGL2 && !n.isRawShaderMaterial) {
      var b = !1,
        M = /^\s*#version\s+300\s+es\s*\n/;
      n.isShaderMaterial && null !== c.match(M) && null !== l.match(M) && (b = !0, c = c.replace(M, ""), l = l.replace(M, "")), m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, v = ["#version 300 es\n", "#define varying in", b ? "" : "out highp vec4 pc_fragColor;", b ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v
    }
    var w = m + c,
      S = v + l;
    w = Jt(w), S = Jt(S);
    var E, T, A = Ft(s, s.VERTEX_SHADER, w),
      L = Ft(s, s.FRAGMENT_SHADER, S);
    return s.attachShader(_, A), s.attachShader(_, L), void 0 !== n.index0AttributeName ? s.bindAttribLocation(_, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_), s.deleteShader(A), s.deleteShader(L), this.getUniforms = function() {
      return void 0 === E && (E = new Bt(s, _, t)), E
    }, this.getAttributes = function() {
      return void 0 === T && (T = function(t, e) {
        for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; n > r; r++) {
          var a = t.getActiveAttrib(e, r).name;
          i[a] = t.getAttribLocation(e, a)
        }
        return i
      }(s, _)), T
    }, this.destroy = function() {
      s.deleteProgram(_), this.program = void 0
    }, Object.defineProperties(this, {
      uniforms: {
        get: function() {
          return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
        }
      },
      attributes: {
        get: function() {
          return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
        }
      }
    }), this.name = r.name, this.id = Ws++, this.code = i, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = L, this
  }

  function Kt(t, e, i) {
    function n(t, e) {
      var i;
      return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = ts, i === ts && e && (i = is), i
    }
    var r = [],
      a = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
      },
      o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
    this.getParameters = function(e, r, o, s, h, c, l) {
      var u = a[e.type],
        p = l.isSkinnedMesh ? function(t) {
          var e = t.skeleton.bones;
          if (i.floatVertexTextures) return 1024;
          var n = i.maxVertexUniforms,
            r = Math.floor((n - 20) / 4),
            a = Math.min(r, e.length);
          return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."), 0) : a
        }(l) : 0,
        d = i.precision;
      null !== e.precision && ((d = i.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", d, "instead."));
      var f = t.getRenderTarget();
      return {
        shaderID: u,
        precision: d,
        supportsVertexTextures: i.vertexTextures,
        outputEncoding: n(f ? f.texture : null, t.gammaOutput),
        map: !!e.map,
        mapEncoding: n(e.map, t.gammaInput),
        matcap: !!e.matcap,
        matcapEncoding: n(e.matcap, t.gammaInput),
        envMap: !!e.envMap,
        envMapMode: e.envMap && e.envMap.mapping,
        envMapEncoding: n(e.envMap, t.gammaInput),
        envMapCubeUV: !!e.envMap && (e.envMap.mapping === Ha || e.envMap.mapping === ja),
        lightMap: !!e.lightMap,
        aoMap: !!e.aoMap,
        emissiveMap: !!e.emissiveMap,
        emissiveMapEncoding: n(e.emissiveMap, t.gammaInput),
        bumpMap: !!e.bumpMap,
        normalMap: !!e.normalMap,
        objectSpaceNormalMap: e.normalMapType === ls,
        displacementMap: !!e.displacementMap,
        roughnessMap: !!e.roughnessMap,
        metalnessMap: !!e.metalnessMap,
        specularMap: !!e.specularMap,
        alphaMap: !!e.alphaMap,
        gradientMap: !!e.gradientMap,
        combine: e.combine,
        vertexColors: e.vertexColors,
        fog: !!s,
        useFog: e.fog,
        fogExp: s && s.isFogExp2,
        flatShading: e.flatShading,
        sizeAttenuation: e.sizeAttenuation,
        logarithmicDepthBuffer: i.logarithmicDepthBuffer,
        skinning: e.skinning && p > 0,
        maxBones: p,
        useVertexTexture: i.floatVertexTextures,
        morphTargets: e.morphTargets,
        morphNormals: e.morphNormals,
        maxMorphTargets: t.maxMorphTargets,
        maxMorphNormals: t.maxMorphNormals,
        numDirLights: r.directional.length,
        numPointLights: r.point.length,
        numSpotLights: r.spot.length,
        numRectAreaLights: r.rectArea.length,
        numHemiLights: r.hemi.length,
        numClippingPlanes: h,
        numClipIntersection: c,
        dithering: e.dithering,
        shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && o.length > 0,
        shadowMapType: t.shadowMap.type,
        toneMapping: t.toneMapping,
        physicallyCorrectLights: t.physicallyCorrectLights,
        premultipliedAlpha: e.premultipliedAlpha,
        alphaTest: e.alphaTest,
        doubleSided: e.side === Jr,
        flipSided: e.side === Yr,
        depthPacking: void 0 !== e.depthPacking && e.depthPacking
      }
    }, this.getProgramCode = function(e, i) {
      var n = [];
      if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
        for (var r in e.defines) n.push(r), n.push(e.defines[r]);
      for (var a = 0; a < o.length; a++) n.push(i[o[a]]);
      return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join()
    }, this.acquireProgram = function(n, a, o, s) {
      for (var h, c = 0, l = r.length; l > c; c++) {
        var u = r[c];
        if (u.code === s) {
          ++(h = u).usedTimes;
          break
        }
      }
      return void 0 === h && (h = new Zt(t, e, s, n, a, o, i), r.push(h)), h
    }, this.releaseProgram = function(t) {
      if (0 === --t.usedTimes) {
        var e = r.indexOf(t);
        r[e] = r[r.length - 1], r.pop(), t.destroy()
      }
    }, this.programs = r
  }

  function Qt() {
    var t = new WeakMap;
    return {
      get: function(e) {
        var i = t.get(e);
        return void 0 === i && (i = {}, t.set(e, i)), i
      },
      remove: function(e) {
        t.delete(e)
      },
      update: function(e, i, n) {
        t.get(e)[i] = n
      },
      dispose: function() {
        t = new WeakMap
      }
    }
  }

  function $t(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
  }

  function te(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
  }

  function ee() {
    var t = [],
      e = 0,
      i = [],
      n = [];
    return {
      opaque: i,
      transparent: n,
      init: function() {
        e = 0, i.length = 0, n.length = 0
      },
      push: function(r, a, o, s, h) {
        var c = t[e];
        void 0 === c ? (c = {
          id: r.id,
          object: r,
          geometry: a,
          material: o,
          program: o.program,
          renderOrder: r.renderOrder,
          z: s,
          group: h
        }, t[e] = c) : (c.id = r.id, c.object = r, c.geometry = a, c.material = o, c.program = o.program, c.renderOrder = r.renderOrder, c.z = s, c.group = h), (!0 === o.transparent ? n : i).push(c), e++
      },
      sort: function() {
        i.length > 1 && i.sort($t), n.length > 1 && n.sort(te)
      }
    }
  }

  function ie() {
    var t = {};
    return {
      get: function(e, i) {
        var n = e.id + "," + i.id,
          r = t[n];
        return void 0 === r && (r = new ee, t[n] = r), r
      },
      dispose: function() {
        t = {}
      }
    }
  }

  function ne() {
    var t = {};
    return {
      get: function(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;
        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new a,
              color: new v,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i
            };
            break;
          case "SpotLight":
            n = {
              position: new a,
              direction: new a,
              color: new v,
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i
            };
            break;
          case "PointLight":
            n = {
              position: new a,
              color: new v,
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new i,
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
          case "HemisphereLight":
            n = {
              direction: new a,
              skyColor: new v,
              groundColor: new v
            };
            break;
          case "RectAreaLight":
            n = {
              color: new v,
              position: new a,
              halfWidth: new a,
              halfHeight: new a
            }
        }
        return t[e.id] = n, n
      }
    }
  }

  function re() {
    var t = new ne,
      e = {
        id: Xs++,
        hash: {
          stateID: -1,
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          shadowsLength: -1
        },
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
      },
      i = new a,
      r = new n,
      o = new n;
    return {
      setup: function(n, a, s) {
        for (var h = 0, c = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = n.length; y > g; g++) {
          var x = n[g],
            _ = x.color,
            b = x.intensity,
            M = x.distance,
            w = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
          if (x.isAmbientLight) h += _.r * b, c += _.g * b, l += _.b * b;
          else if (x.isDirectionalLight) {
            if ((E = t.get(x)).color.copy(x.color).multiplyScalar(x.intensity), E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(v), E.shadow = x.castShadow, x.castShadow) {
              var S = x.shadow;
              E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
            }
            e.directionalShadowMap[u] = w, e.directionalShadowMatrix[u] = x.shadow.matrix, e.directional[u] = E, u++
          } else if (x.isSpotLight) {
            if ((E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), E.color.copy(_).multiplyScalar(b), E.distance = M, E.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(v), E.coneCos = Math.cos(x.angle), E.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow) {
              S = x.shadow;
              E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize
            }
            e.spotShadowMap[d] = w, e.spotShadowMatrix[d] = x.shadow.matrix, e.spot[d] = E, d++
          } else if (x.isRectAreaLight) {
            (E = t.get(x)).color.copy(_).multiplyScalar(b), E.position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), o.identity(), r.copy(x.matrixWorld), r.premultiply(v), o.extractRotation(r), E.halfWidth.set(.5 * x.width, 0, 0), E.halfHeight.set(0, .5 * x.height, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), e.rectArea[f] = E, f++
          } else if (x.isPointLight) {
            if ((E = t.get(x)).position.setFromMatrixPosition(x.matrixWorld), E.position.applyMatrix4(v), E.color.copy(x.color).multiplyScalar(x.intensity), E.distance = x.distance, E.decay = 0 === x.distance ? 0 : x.decay, E.shadow = x.castShadow, x.castShadow) {
              S = x.shadow;
              E.shadowBias = S.bias, E.shadowRadius = S.radius, E.shadowMapSize = S.mapSize, E.shadowCameraNear = S.camera.near, E.shadowCameraFar = S.camera.far
            }
            e.pointShadowMap[p] = w, e.pointShadowMatrix[p] = x.shadow.matrix, e.point[p] = E, p++
          } else if (x.isHemisphereLight) {
            var E;
            (E = t.get(x)).direction.setFromMatrixPosition(x.matrixWorld), E.direction.transformDirection(v), E.direction.normalize(), E.skyColor.copy(x.color).multiplyScalar(b), E.groundColor.copy(x.groundColor).multiplyScalar(b), e.hemi[m] = E, m++
          }
        }
        e.ambient[0] = h, e.ambient[1] = c, e.ambient[2] = l, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = a.length
      },
      state: e
    }
  }

  function ae() {
    var t = new re,
      e = [],
      i = [];
    return {
      init: function() {
        e.length = 0, i.length = 0
      },
      state: {
        lightsArray: e,
        shadowsArray: i,
        lights: t
      },
      setupLights: function(n) {
        t.setup(e, i, n)
      },
      pushLight: function(t) {
        e.push(t)
      },
      pushShadow: function(t) {
        i.push(t)
      }
    }
  }

  function oe() {
    var t = {};
    return {
      get: function(e, i) {
        var n;
        return void 0 === t[e.id] ? (n = new ae, t[e.id] = {}, t[e.id][i.id] = n) : void 0 === t[e.id][i.id] ? (n = new ae, t[e.id][i.id] = n) : n = t[e.id][i.id], n
      },
      dispose: function() {
        t = {}
      }
    }
  }

  function se(t) {
    k.call(this), this.type = "MeshDepthMaterial", this.depthPacking = ss, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function he(t) {
    k.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new a, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function ce(t, e, r) {
    function o(e, i, n, r, a, o) {
      var s = e.geometry,
        h = null,
        c = _,
        l = e.customDepthMaterial;
      if (n && (c = b, l = e.customDistanceMaterial), l) h = l;
      else {
        var u = !1;
        i.morphTargets && (s && s.isBufferGeometry ? u = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (u = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
        var p = e.isSkinnedMesh && i.skinning,
          d = 0;
        u && (d |= g), p && (d |= y), h = c[d]
      }
      if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var f = h.uuid,
          m = i.uuid,
          v = M[f];
        void 0 === v && (v = {}, M[f] = v);
        var x = v[m];
        void 0 === x && (x = h.clone(), v[m] = x), h = x
      }
      return h.visible = i.visible, h.wireframe = i.wireframe, h.side = null != i.shadowSide ? i.shadowSide : w[i.side], h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, n && h.isMeshDistanceMaterial && (h.referencePosition.copy(r), h.nearDistance = a, h.farDistance = o), h
    }

    function s(i, n, r, a) {
      if (!1 !== i.visible) {
        if (i.layers.test(n.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || l.intersectsObject(i))) {
          i.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, i.matrixWorld);
          var h = e.update(i),
            c = i.material;
          if (Array.isArray(c))
            for (var u = h.groups, p = 0, d = u.length; d > p; p++) {
              var f = u[p],
                m = c[f.materialIndex];
              if (m && m.visible) {
                var g = o(i, m, a, v, r.near, r.far);
                t.renderBufferDirect(r, null, h, g, i, f)
              }
            } else if (c.visible) {
              g = o(i, c, a, v, r.near, r.far);
              t.renderBufferDirect(r, null, h, g, i, null)
            }
        }
        for (var y = i.children, x = 0, _ = y.length; _ > x; x++) s(y[x], n, r, a)
      }
    }
    for (var l = new m, u = new n, p = new i, d = new i(r, r), f = new a, v = new a, g = 1, y = 2, x = 1 + (g | y), _ = new Array(x), b = new Array(x), M = {}, w = {
        0: Yr,
        1: qr,
        2: Jr
      }, S = [new a(1, 0, 0), new a(-1, 0, 0), new a(0, 0, 1), new a(0, 0, -1), new a(0, 1, 0), new a(0, -1, 0)], E = [new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 0, 1), new a(0, 0, -1)], T = [new h, new h, new h, new h, new h, new h], A = 0; A !== x; ++A) {
      var L = 0 !== (A & g),
        C = 0 !== (A & y),
        P = new se({
          depthPacking: hs,
          morphTargets: L,
          skinning: C
        });
      _[A] = P;
      var R = new he({
        morphTargets: L,
        skinning: C
      });
      b[A] = R
    }
    var I = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Wr, this.render = function(e, i, n) {
      if (!1 !== I.enabled && (!1 !== I.autoUpdate || !1 !== I.needsUpdate) && 0 !== e.length) {
        var r = t.context,
          a = t.state;
        a.disable(r.BLEND), a.buffers.color.setClear(1, 1, 1, 1), a.buffers.depth.setTest(!0), a.setScissorTest(!1);
        for (var o, h = 0, m = e.length; m > h; h++) {
          var g = e[h],
            y = g.shadow,
            x = g && g.isPointLight;
          if (void 0 !== y) {
            var _ = y.camera;
            if (p.copy(y.mapSize), p.min(d), x) {
              var b = p.x,
                M = p.y;
              T[0].set(2 * b, M, b, M), T[1].set(0, M, b, M), T[2].set(3 * b, M, b, M), T[3].set(b, M, b, M), T[4].set(3 * b, 0, b, M), T[5].set(b, 0, b, M), p.x *= 4, p.y *= 2
            }
            if (null === y.map) {
              var w = {
                minFilter: Ya,
                magFilter: Ya,
                format: mo
              };
              y.map = new c(p.x, p.y, w), y.map.texture.name = g.name + ".shadowMap", _.updateProjectionMatrix()
            }
            y.isSpotLightShadow && y.update(g);
            var A = y.map,
              L = y.matrix;
            v.setFromMatrixPosition(g.matrixWorld), _.position.copy(v), x ? (o = 6, L.makeTranslation(-v.x, -v.y, -v.z)) : (o = 1, f.setFromMatrixPosition(g.target.matrixWorld), _.lookAt(f), _.updateMatrixWorld(), L.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), L.multiply(_.projectionMatrix), L.multiply(_.matrixWorldInverse)), t.setRenderTarget(A), t.clear();
            for (var C = 0; o > C; C++) {
              if (x) {
                f.copy(_.position), f.add(S[C]), _.up.copy(E[C]), _.lookAt(f), _.updateMatrixWorld();
                var P = T[C];
                a.viewport(P)
              }
              u.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), l.setFromMatrix(u), s(i, n, _, x)
            }
          } else console.warn("THREE.WebGLShadowMap:", g, "has no shadow.")
        }
        I.needsUpdate = !1
      }
    }
  }

  function le(t, e, i, n) {
    function r(e, i, n) {
      var r = new Uint8Array(4),
        a = t.createTexture();
      t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
      for (var o = 0; n > o; o++) t.texImage2D(i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
      return a
    }

    function a(i, r) {
      (y[i] = 1, 0 === x[i] && (t.enableVertexAttribArray(i), x[i] = 1), _[i] !== r) && ((n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), _[i] = r)
    }

    function o(e) {
      !0 !== b[e] && (t.enable(e), b[e] = !0)
    }

    function s(e) {
      !1 !== b[e] && (t.disable(e), b[e] = !1)
    }

    function c(e, n, r, a, h, c, l, u) {
      if (e !== $r) {
        if (S || (o(t.BLEND), S = !0), e === ra) h = h || n, c = c || r, l = l || a, (n !== T || h !== C) && (t.blendEquationSeparate(i.convert(n), i.convert(h)), T = n, C = h), (r !== A || a !== L || c !== P || l !== R) && (t.blendFuncSeparate(i.convert(r), i.convert(a), i.convert(c), i.convert(l)), A = r, L = a, P = c, R = l), E = e, I = null;
        else if (e !== E || u !== I) {
          if ((T !== aa || C !== aa) && (t.blendEquation(t.FUNC_ADD), T = aa, C = aa), u) switch (e) {
            case ta:
              t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case ea:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case ia:
              t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA);
              break;
            case na:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          } else switch (e) {
            case ta:
              t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case ea:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case ia:
              t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR);
              break;
            case na:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e)
          }
          A = null, L = null, P = null, R = null, E = e, I = u
        }
      } else S && (s(t.BLEND), S = !1)
    }

    function l(e) {
      N !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), N = e)
    }

    function u(e) {
      e !== Vr ? (o(t.CULL_FACE), e !== O && (e === Hr ? t.cullFace(t.BACK) : e === jr ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : s(t.CULL_FACE), O = e
    }

    function p(e, i, n) {
      e ? (o(t.POLYGON_OFFSET_FILL), (U !== i || z !== n) && (t.polygonOffset(i, n), U = i, z = n)) : s(t.POLYGON_OFFSET_FILL)
    }

    function d(e) {
      void 0 === e && (e = t.TEXTURE0 + B - 1), V !== e && (t.activeTexture(e), V = e)
    }
    var f = new function() {
        var e = !1,
          i = new h,
          n = null,
          r = new h(0, 0, 0, 0);
        return {
          setMask: function(i) {
            n === i || e || (t.colorMask(i, i, i, i), n = i)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e, n, a, o, s) {
            !0 === s && (e *= o, n *= o, a *= o), i.set(e, n, a, o), !1 === r.equals(i) && (t.clearColor(e, n, a, o), r.copy(i))
          },
          reset: function() {
            e = !1, n = null, r.set(-1, 0, 0, 0)
          }
        }
      },
      m = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null;
        return {
          setTest: function(e) {
            e ? o(t.DEPTH_TEST) : s(t.DEPTH_TEST)
          },
          setMask: function(n) {
            i === n || e || (t.depthMask(n), i = n)
          },
          setFunc: function(e) {
            if (n !== e) {
              if (e) switch (e) {
                case ba:
                  t.depthFunc(t.NEVER);
                  break;
                case Ma:
                  t.depthFunc(t.ALWAYS);
                  break;
                case wa:
                  t.depthFunc(t.LESS);
                  break;
                case Sa:
                  t.depthFunc(t.LEQUAL);
                  break;
                case Ea:
                  t.depthFunc(t.EQUAL);
                  break;
                case Ta:
                  t.depthFunc(t.GEQUAL);
                  break;
                case Aa:
                  t.depthFunc(t.GREATER);
                  break;
                case La:
                  t.depthFunc(t.NOTEQUAL);
                  break;
                default:
                  t.depthFunc(t.LEQUAL)
              } else t.depthFunc(t.LEQUAL);
              n = e
            }
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e) {
            r !== e && (t.clearDepth(e), r = e)
          },
          reset: function() {
            e = !1, i = null, n = null, r = null
          }
        }
      },
      v = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null,
          a = null,
          h = null,
          c = null,
          l = null,
          u = null;
        return {
          setTest: function(e) {
            e ? o(t.STENCIL_TEST) : s(t.STENCIL_TEST)
          },
          setMask: function(n) {
            i === n || e || (t.stencilMask(n), i = n)
          },
          setFunc: function(e, i, o) {
            (n !== e || r !== i || a !== o) && (t.stencilFunc(e, i, o), n = e, r = i, a = o)
          },
          setOp: function(e, i, n) {
            (h !== e || c !== i || l !== n) && (t.stencilOp(e, i, n), h = e, c = i, l = n)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(e) {
            u !== e && (t.clearStencil(e), u = e)
          },
          reset: function() {
            e = !1, i = null, n = null, r = null, a = null, h = null, c = null, l = null, u = null
          }
        }
      },
      g = t.getParameter(t.MAX_VERTEX_ATTRIBS);
    8 > g && (g = 8), g > n.maxVertexAttribs && (g = n.maxVertexAttribs);
    var y = new Uint8Array(g),
      x = new Uint8Array(g),
      _ = new Uint8Array(g),
      b = {},
      M = null,
      w = null,
      S = null,
      E = null,
      T = null,
      A = null,
      L = null,
      C = null,
      P = null,
      R = null,
      I = !1,
      N = null,
      O = null,
      D = null,
      U = null,
      z = null,
      B = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      F = !1,
      G = 0,
      k = t.getParameter(t.VERSION);
    k ? k.indexOf && -1 !== k.indexOf("WebGL") ? (G = parseFloat(/^WebGL\ ([0-9])/.exec(k)[1]), F = G >= 1) : k.indexOf && -1 !== k.indexOf("OpenGL ES") && (G = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(k)[1]), F = G >= 2) : F = "function" == typeof t.lineWidth;
    var V = null,
      H = {},
      j = new h,
      W = new h,
      X = {};
    return X[t.TEXTURE_2D] = r(t.TEXTURE_2D, t.TEXTURE_2D, 1), X[t.TEXTURE_CUBE_MAP] = r(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), f.setClear(0, 0, 0, 1), m.setClear(1), v.setClear(0), o(t.DEPTH_TEST), m.setFunc(Sa), l(!1), u(Hr), o(t.CULL_FACE), c($r), {
      buffers: {
        color: f,
        depth: m,
        stencil: v
      },
      initAttributes: function() {
        for (var t = 0, e = y.length; e > t; t++) y[t] = 0
      },
      enableAttribute: function(t) {
        a(t, 0)
      },
      enableAttributeAndDivisor: a,
      disableUnusedAttributes: function() {
        for (var e = 0, i = x.length; e !== i; ++e) x[e] !== y[e] && (t.disableVertexAttribArray(e), x[e] = 0)
      },
      enable: o,
      disable: s,
      getCompressedTextureFormats: function() {
        if (null === M && (M = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
          for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) M.push(i[n]);
        return M
      },
      useProgram: function(e) {
        return w !== e && (t.useProgram(e), w = e, !0)
      },
      setBlending: c,
      setMaterial: function(e, i) {
        e.side === Jr ? s(t.CULL_FACE) : o(t.CULL_FACE);
        var n = e.side === Yr;
        i && (n = !n), l(n), e.blending === ta && !1 === e.transparent ? c($r) : c(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), m.setFunc(e.depthFunc), m.setTest(e.depthTest), m.setMask(e.depthWrite), f.setMask(e.colorWrite), p(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
      },
      setFlipSided: l,
      setCullFace: u,
      setLineWidth: function(e) {
        e !== D && (F && t.lineWidth(e), D = e)
      },
      setPolygonOffset: p,
      setScissorTest: function(e) {
        e ? o(t.SCISSOR_TEST) : s(t.SCISSOR_TEST)
      },
      activeTexture: d,
      bindTexture: function(e, i) {
        null === V && d();
        var n = H[V];
        void 0 === n && (n = {
          type: void 0,
          texture: void 0
        }, H[V] = n), (n.type !== e || n.texture !== i) && (t.bindTexture(e, i || X[e]), n.type = e, n.texture = i)
      },
      compressedTexImage2D: function() {
        try {
          t.compressedTexImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      texImage2D: function() {
        try {
          t.texImage2D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      texImage3D: function() {
        try {
          t.texImage3D.apply(t, arguments)
        } catch (t) {
          console.error("THREE.WebGLState:", t)
        }
      },
      scissor: function(e) {
        !1 === j.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), j.copy(e))
      },
      viewport: function(e) {
        !1 === W.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), W.copy(e))
      },
      reset: function() {
        for (var e = 0; e < x.length; e++) 1 === x[e] && (t.disableVertexAttribArray(e), x[e] = 0);
        b = {}, M = null, V = null, H = {}, w = null, E = null, I = null, S = !1, s(t.BLEND), N = null, O = null, f.reset(), m.reset(), v.reset()
      }
    }
  }

  function ue(t, e, i, n, r, a, o) {
    function s(t, e) {
      if (t.width > e || t.height > e) {
        if ("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ").");
        var i = e / Math.max(t.width, t.height),
          n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height), n
      }
      return t
    }

    function h(t) {
      return us.isPowerOfTwo(t.width) && us.isPowerOfTwo(t.height)
    }

    function c(t, e) {
      return t.generateMipmaps && e && t.minFilter !== Ya && t.minFilter !== Ka
    }

    function l(e, i, r, a) {
      t.generateMipmap(e), n.get(i).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
    }

    function u(e, i) {
      if (!r.isWebGL2) return e;
      if (e === t.RGB) {
        if (i === t.FLOAT) return t.RGB32F;
        if (i === t.HALF_FLOAT) return t.RGB16F;
        if (i === t.UNSIGNED_BYTE) return t.RGB8
      }
      if (e === t.RGBA) {
        if (i === t.FLOAT) return t.RGBA32F;
        if (i === t.HALF_FLOAT) return t.RGBA16F;
        if (i === t.UNSIGNED_BYTE) return t.RGBA8
      }
      return e
    }

    function p(e) {
      return e === Ya || e === Ja || e === Za ? t.NEAREST : t.LINEAR
    }

    function d(t) {
      var e = t.target;
      e.removeEventListener("dispose", d), m(e), e.isVideoTexture && delete E[e.id], o.memory.textures--
    }

    function f(t) {
      var e = t.target;
      e.removeEventListener("dispose", f), v(e), o.memory.textures--
    }

    function m(e) {
      var i = n.get(e);
      if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
      else {
        if (void 0 === i.__webglInit) return;
        t.deleteTexture(i.__webglTexture)
      }
      n.remove(e)
    }

    function v(e) {
      var i = n.get(e),
        r = n.get(e.texture);
      if (e) {
        if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
          for (var a = 0; 6 > a; a++) t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a]);
        else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
        n.remove(e.texture), n.remove(e)
      }
    }

    function g(e, r) {
      var a = n.get(e);
      if (e.isVideoTexture && w(e), e.version > 0 && a.__version !== e.version) {
        var o = e.image;
        if (void 0 === o) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
        else {
          if (!1 !== o.complete) return void x(a, e, r);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
        }
      }
      i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_2D, a.__webglTexture)
    }

    function y(i, o, s) {
      var h;
      if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a.convert(o.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, a.convert(o.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), (o.wrapS !== Xa || o.wrapT !== Xa) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, t.TEXTURE_MAG_FILTER, p(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, p(o.minFilter)), o.minFilter !== Ya && o.minFilter !== Ka && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), h = e.get("EXT_texture_filter_anisotropic")) {
        if (o.type === oo && null === e.get("OES_texture_float_linear")) return;
        if (o.type === so && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
        (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
      }
    }

    function x(e, n, p) {
      var f = t.TEXTURE_2D;
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", d), e.__webglTexture = t.createTexture(), o.memory.textures++), i.activeTexture(t.TEXTURE0 + p), i.bindTexture(f, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
      var m = s(n.image, r.maxTextureSize);
      (function(t) {
        return !r.isWebGL2 && (t.wrapS !== Xa || t.wrapT !== Xa || t.minFilter !== Ya && t.minFilter !== Ka)
      })(n) && !1 === h(m) && (m = function(t) {
        return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement ? (void 0 === S && (S = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), S.width = us.floorPowerOfTwo(t.width), S.height = us.floorPowerOfTwo(t.height), S.getContext("2d").drawImage(t, 0, 0, S.width, S.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + S.width + "x" + S.height), S) : t
      }(m));
      var v = h(m),
        g = a.convert(n.format),
        x = a.convert(n.type),
        _ = u(g, x);
      y(f, n, v);
      var b, M = n.mipmaps;
      if (n.isDepthTexture) {
        if (_ = t.DEPTH_COMPONENT, n.type === oo) {
          if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
          _ = t.DEPTH_COMPONENT32F
        } else r.isWebGL2 && (_ = t.DEPTH_COMPONENT16);
        n.format === xo && _ === t.DEPTH_COMPONENT && n.type !== no && n.type !== ao && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = no, x = a.convert(n.type)), n.format === _o && (_ = t.DEPTH_STENCIL, n.type !== uo && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = uo, x = a.convert(n.type))), i.texImage2D(t.TEXTURE_2D, 0, _, m.width, m.height, 0, g, x, null)
      } else if (n.isDataTexture)
        if (M.length > 0 && v) {
          for (var w = 0, E = M.length; E > w; w++) b = M[w], i.texImage2D(t.TEXTURE_2D, w, _, b.width, b.height, 0, g, x, b.data);
          n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
        } else i.texImage2D(t.TEXTURE_2D, 0, _, m.width, m.height, 0, g, x, m.data), e.__maxMipLevel = 0;
      else if (n.isCompressedTexture) {
        for (w = 0, E = M.length; E > w; w++) b = M[w], n.format !== mo && n.format !== fo ? i.getCompressedTextureFormats().indexOf(g) > -1 ? i.compressedTexImage2D(t.TEXTURE_2D, w, _, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(t.TEXTURE_2D, w, _, b.width, b.height, 0, g, x, b.data);
        e.__maxMipLevel = M.length - 1
      } else if (M.length > 0 && v) {
        for (w = 0, E = M.length; E > w; w++) b = M[w], i.texImage2D(t.TEXTURE_2D, w, _, g, x, b);
        n.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
      } else i.texImage2D(t.TEXTURE_2D, 0, _, g, x, m), e.__maxMipLevel = 0;
      c(n, v) && l(t.TEXTURE_2D, n, m.width, m.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
    }

    function _(e, r, o, s) {
      var h = a.convert(r.texture.format),
        c = a.convert(r.texture.type),
        l = u(h, c);
      i.texImage2D(s, 0, l, r.width, r.height, 0, h, c, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
    }

    function b(e, i) {
      t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
    }

    function M(e) {
      var i = n.get(e),
        r = !0 === e.isWebGLRenderTargetCube;
      if (e.depthTexture) {
        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
        ! function(e, i) {
          if (i && i.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
          if (t.bindFramebuffer(t.FRAMEBUFFER, e), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), g(i.depthTexture, 0);
          var r = n.get(i.depthTexture).__webglTexture;
          if (i.depthTexture.format === xo) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
          else {
            if (i.depthTexture.format !== _o) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
          }
        }(i.__webglFramebuffer, e)
      } else if (r) {
        i.__webglDepthbuffer = [];
        for (var a = 0; 6 > a; a++) t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), b(i.__webglDepthbuffer[a], e)
      } else t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), b(i.__webglDepthbuffer, e);
      t.bindFramebuffer(t.FRAMEBUFFER, null)
    }

    function w(t) {
      var e = t.id,
        i = o.render.frame;
      E[e] !== i && (E[e] = i, t.update())
    }
    var S, E = {};
    this.setTexture2D = g, this.setTextureCube = function(e, p) {
      var f = n.get(e);
      if (6 === e.image.length)
        if (e.version > 0 && f.__version !== e.version) {
          f.__image__webglTextureCube || (e.addEventListener("dispose", d), f.__image__webglTextureCube = t.createTexture(), o.memory.textures++), i.activeTexture(t.TEXTURE0 + p), i.bindTexture(t.TEXTURE_CUBE_MAP, f.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
          for (var m = e && e.isCompressedTexture, v = e.image[0] && e.image[0].isDataTexture, g = [], x = 0; 6 > x; x++) g[x] = m || v ? v ? e.image[x].image : e.image[x] : s(e.image[x], r.maxCubemapSize);
          var _ = g[0],
            b = h(_),
            M = a.convert(e.format),
            w = a.convert(e.type),
            S = u(M, w);
          y(t.TEXTURE_CUBE_MAP, e, b);
          for (x = 0; 6 > x; x++)
            if (m)
              for (var E, T = g[x].mipmaps, A = 0, L = T.length; L > A; A++) E = T[A], e.format !== mo && e.format !== fo ? i.getCompressedTextureFormats().indexOf(M) > -1 ? i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + x, A, S, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + x, A, S, E.width, E.height, 0, M, w, E.data);
            else v ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + x, 0, S, g[x].width, g[x].height, 0, M, w, g[x].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + x, 0, S, M, w, g[x]);
          f.__maxMipLevel = m ? T.length - 1 : 0, c(e, b) && l(t.TEXTURE_CUBE_MAP, e, _.width, _.height), f.__version = e.version, e.onUpdate && e.onUpdate(e)
        } else i.activeTexture(t.TEXTURE0 + p), i.bindTexture(t.TEXTURE_CUBE_MAP, f.__image__webglTextureCube)
    }, this.setTextureCubeDynamic = function(e, r) {
      i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
    }, this.setupRenderTarget = function(e) {
      var r = n.get(e),
        a = n.get(e.texture);
      e.addEventListener("dispose", f), a.__webglTexture = t.createTexture(), o.memory.textures++;
      var s = !0 === e.isWebGLRenderTargetCube,
        u = h(e);
      if (s) {
        r.__webglFramebuffer = [];
        for (var p = 0; 6 > p; p++) r.__webglFramebuffer[p] = t.createFramebuffer()
      } else r.__webglFramebuffer = t.createFramebuffer();
      if (s) {
        i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), y(t.TEXTURE_CUBE_MAP, e.texture, u);
        for (p = 0; 6 > p; p++) _(r.__webglFramebuffer[p], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + p);
        c(e.texture, u) && l(t.TEXTURE_CUBE_MAP, e.texture, e.width, e.height), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
      } else i.bindTexture(t.TEXTURE_2D, a.__webglTexture), y(t.TEXTURE_2D, e.texture, u), _(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), c(e.texture, u) && l(t.TEXTURE_2D, e.texture, e.width, e.height), i.bindTexture(t.TEXTURE_2D, null);
      e.depthBuffer && M(e)
    }, this.updateRenderTargetMipmap = function(e) {
      var r = e.texture;
      if (c(r, h(e))) {
        var a = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
          o = n.get(r).__webglTexture;
        i.bindTexture(a, o), l(a, r, e.width, e.height), i.bindTexture(a, null)
      }
    }
  }

  function pe(t, e, i) {
    return {
      convert: function(n) {
        var r;
        if (n === Wa) return t.REPEAT;
        if (n === Xa) return t.CLAMP_TO_EDGE;
        if (n === qa) return t.MIRRORED_REPEAT;
        if (n === Ya) return t.NEAREST;
        if (n === Ja) return t.NEAREST_MIPMAP_NEAREST;
        if (n === Za) return t.NEAREST_MIPMAP_LINEAR;
        if (n === Ka) return t.LINEAR;
        if (n === Qa) return t.LINEAR_MIPMAP_NEAREST;
        if (n === $a) return t.LINEAR_MIPMAP_LINEAR;
        if (n === to) return t.UNSIGNED_BYTE;
        if (n === ho) return t.UNSIGNED_SHORT_4_4_4_4;
        if (n === co) return t.UNSIGNED_SHORT_5_5_5_1;
        if (n === lo) return t.UNSIGNED_SHORT_5_6_5;
        if (n === eo) return t.BYTE;
        if (n === io) return t.SHORT;
        if (n === no) return t.UNSIGNED_SHORT;
        if (n === ro) return t.INT;
        if (n === ao) return t.UNSIGNED_INT;
        if (n === oo) return t.FLOAT;
        if (n === so) {
          if (i.isWebGL2) return t.HALF_FLOAT;
          if (null !== (r = e.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES
        }
        if (n === po) return t.ALPHA;
        if (n === fo) return t.RGB;
        if (n === mo) return t.RGBA;
        if (n === vo) return t.LUMINANCE;
        if (n === go) return t.LUMINANCE_ALPHA;
        if (n === xo) return t.DEPTH_COMPONENT;
        if (n === _o) return t.DEPTH_STENCIL;
        if (n === aa) return t.FUNC_ADD;
        if (n === oa) return t.FUNC_SUBTRACT;
        if (n === sa) return t.FUNC_REVERSE_SUBTRACT;
        if (n === la) return t.ZERO;
        if (n === ua) return t.ONE;
        if (n === pa) return t.SRC_COLOR;
        if (n === da) return t.ONE_MINUS_SRC_COLOR;
        if (n === fa) return t.SRC_ALPHA;
        if (n === ma) return t.ONE_MINUS_SRC_ALPHA;
        if (n === va) return t.DST_ALPHA;
        if (n === ga) return t.ONE_MINUS_DST_ALPHA;
        if (n === ya) return t.DST_COLOR;
        if (n === xa) return t.ONE_MINUS_DST_COLOR;
        if (n === _a) return t.SRC_ALPHA_SATURATE;
        if ((n === bo || n === Mo || n === wo || n === So) && null !== (r = e.get("WEBGL_compressed_texture_s3tc"))) {
          if (n === bo) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === Mo) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === wo) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === So) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if ((n === Eo || n === To || n === Ao || n === Lo) && null !== (r = e.get("WEBGL_compressed_texture_pvrtc"))) {
          if (n === Eo) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (n === To) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (n === Ao) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (n === Lo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (n === Co && null !== (r = e.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
        if ((n === Po || n === Ro || n === Io || n === No || n === Oo || n === Do || n === Uo || n === zo || n === Bo || n === Fo || n === Go || n === ko || n === Vo || n === Ho) && null !== (r = e.get("WEBGL_compressed_texture_astc"))) return n;
        if (n === ha || n === ca) {
          if (i.isWebGL2) {
            if (n === ha) return t.MIN;
            if (n === ca) return t.MAX
          }
          if (null !== (r = e.get("EXT_blend_minmax"))) {
            if (n === ha) return r.MIN_EXT;
            if (n === ca) return r.MAX_EXT
          }
        }
        if (n === uo) {
          if (i.isWebGL2) return t.UNSIGNED_INT_24_8;
          if (null !== (r = e.get("WEBGL_depth_texture"))) return r.UNSIGNED_INT_24_8_WEBGL
        }
        return 0
      }
    }
  }

  function de(t, e) {
    this.name = "", this.color = new v(t), this.density = void 0 !== e ? e : 25e-5
  }

  function fe(t, e, i) {
    this.name = "", this.color = new v(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
  }

  function me() {
    M.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
  }

  function ve(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function ge(t, e, i, n) {
    this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
  }

  function ye(t) {
    k.call(this), this.type = "SpriteMaterial", this.color = new v(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t)
  }

  function xe(t) {
    if (M.call(this), this.type = "Sprite", void 0 === js) {
      js = new U;
      var e = new ve(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
      js.setIndex([0, 1, 2, 0, 2, 3]), js.addAttribute("position", new ge(e, 3, 0, !1)), js.addAttribute("uv", new ge(e, 2, 3, !1))
    }
    this.geometry = js, this.material = void 0 !== t ? t : new ye, this.center = new i(.5, .5)
  }

  function _e() {
    M.call(this), this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    })
  }

  function be(t, e) {
    if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
    else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
    else {
      console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
      for (var i = 0, r = this.bones.length; r > i; i++) this.boneInverses.push(new n)
    }
  }

  function Me() {
    M.call(this), this.type = "Bone"
  }

  function we(t, e) {
    X.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new n, this.bindMatrixInverse = new n;
    var i = new be(this.initBones());
    this.bind(i, this.matrixWorld), this.normalizeSkinWeights()
  }

  function Se(t) {
    k.call(this), this.type = "LineBasicMaterial", this.color = new v(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
  }

  function Ee(t, e, i) {
    1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), M.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new U, this.material = void 0 !== e ? e : new Se({
      color: 16777215 * Math.random()
    })
  }

  function Te(t, e) {
    Ee.call(this, t, e), this.type = "LineSegments"
  }

  function Ae(t, e) {
    Ee.call(this, t, e), this.type = "LineLoop"
  }

  function Le(t) {
    k.call(this), this.type = "PointsMaterial", this.color = new v(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function Ce(t, e) {
    M.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new U, this.material = void 0 !== e ? e : new Le({
      color: 16777215 * Math.random()
    })
  }

  function Pe() {
    M.call(this), this.type = "Group"
  }

  function Re(t, e, i, n, r, a, o, h, c) {
    s.call(this, t, e, i, n, r, a, o, h, c), this.generateMipmaps = !1
  }

  function Ie(t, e, i, n, r, a, o, h, c, l, u, p) {
    s.call(this, null, a, o, h, c, l, n, r, u, p), this.image = {
      width: e,
      height: i
    }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
  }

  function Ne(t, e, i, n, r, a, o, h, c) {
    s.call(this, t, e, i, n, r, a, o, h, c), this.needsUpdate = !0
  }

  function Oe(t, e, i, n, r, a, o, h, c, l) {
    if ((l = void 0 !== l ? l : xo) !== xo && l !== _o) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === i && l === xo && (i = no), void 0 === i && l === _o && (i = uo), s.call(this, null, n, r, a, o, h, l, i, c), this.image = {
      width: t,
      height: e
    }, this.magFilter = void 0 !== o ? o : Ya, this.minFilter = void 0 !== h ? h : Ya, this.flipY = !1, this.generateMipmaps = !1
  }

  function De(t) {
    U.call(this), this.type = "WireframeGeometry";
    var e, i, n, r, o, s, h, c, l, u, p = [],
      d = [0, 0],
      f = {},
      m = ["a", "b", "c"];
    if (t && t.isGeometry) {
      var v = t.faces;
      for (e = 0, n = v.length; n > e; e++) {
        var g = v[e];
        for (i = 0; 3 > i; i++) h = g[m[i]], c = g[m[(i + 1) % 3]], d[0] = Math.min(h, c), d[1] = Math.max(h, c), void 0 === f[l = d[0] + "," + d[1]] && (f[l] = {
          index1: d[0],
          index2: d[1]
        })
      }
      for (l in f) s = f[l], u = t.vertices[s.index1], p.push(u.x, u.y, u.z), u = t.vertices[s.index2], p.push(u.x, u.y, u.z)
    } else if (t && t.isBufferGeometry) {
      var y, x, _, b, M, w, S;
      if (u = new a, null !== t.index) {
        for (y = t.attributes.position, x = t.index, 0 === (_ = t.groups).length && (_ = [{
            start: 0,
            count: x.count,
            materialIndex: 0
          }]), r = 0, o = _.length; o > r; ++r)
          for (e = M = (b = _[r]).start, n = M + b.count; n > e; e += 3)
            for (i = 0; 3 > i; i++) h = x.getX(e + i), c = x.getX(e + (i + 1) % 3), d[0] = Math.min(h, c), d[1] = Math.max(h, c), void 0 === f[l = d[0] + "," + d[1]] && (f[l] = {
              index1: d[0],
              index2: d[1]
            });
        for (l in f) s = f[l], u.fromBufferAttribute(y, s.index1), p.push(u.x, u.y, u.z), u.fromBufferAttribute(y, s.index2), p.push(u.x, u.y, u.z)
      } else
        for (e = 0, n = (y = t.attributes.position).count / 3; n > e; e++)
          for (i = 0; 3 > i; i++) w = 3 * e + i, u.fromBufferAttribute(y, w), p.push(u.x, u.y, u.z), S = 3 * e + (i + 1) % 3, u.fromBufferAttribute(y, S), p.push(u.x, u.y, u.z)
    }
    this.addAttribute("position", new I(p, 3))
  }

  function Ue(t, e, i) {
    w.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    }, this.fromBufferGeometry(new ze(t, e, i)), this.mergeVertices()
  }

  function ze(t, e, i) {
    U.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    };
    var n, r, o = [],
      s = [],
      h = [],
      c = [],
      l = 1e-5,
      u = new a,
      p = new a,
      d = new a,
      f = new a,
      m = new a;
    t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var v = e + 1;
    for (n = 0; i >= n; n++) {
      var g = n / i;
      for (r = 0; e >= r; r++) {
        var y = r / e;
        t(y, g, p), s.push(p.x, p.y, p.z), y - l >= 0 ? (t(y - l, g, d), f.subVectors(p, d)) : (t(y + l, g, d), f.subVectors(d, p)), g - l >= 0 ? (t(y, g - l, d), m.subVectors(p, d)) : (t(y, g + l, d), m.subVectors(d, p)), u.crossVectors(f, m).normalize(), h.push(u.x, u.y, u.z), c.push(y, g)
      }
    }
    for (n = 0; i > n; n++)
      for (r = 0; e > r; r++) {
        var x = n * v + r,
          _ = n * v + r + 1,
          b = (n + 1) * v + r + 1,
          M = (n + 1) * v + r;
        o.push(x, _, M), o.push(_, b, M)
      }
    this.setIndex(o), this.addAttribute("position", new I(s, 3)), this.addAttribute("normal", new I(h, 3)), this.addAttribute("uv", new I(c, 2))
  }

  function Be(t, e, i, n) {
    w.call(this), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: i,
      detail: n
    }, this.fromBufferGeometry(new Fe(t, e, i, n)), this.mergeVertices()
  }

  function Fe(t, e, n, r) {
    function o(t, e, i, n) {
      var r, a, o = Math.pow(2, n),
        h = [];
      for (r = 0; o >= r; r++) {
        h[r] = [];
        var c = t.clone().lerp(i, r / o),
          l = e.clone().lerp(i, r / o),
          u = o - r;
        for (a = 0; u >= a; a++) h[r][a] = 0 === a && r === o ? c : c.clone().lerp(l, a / u)
      }
      for (r = 0; o > r; r++)
        for (a = 0; 2 * (o - r) - 1 > a; a++) {
          var p = Math.floor(a / 2);
          a % 2 == 0 ? (s(h[r][p + 1]), s(h[r + 1][p]), s(h[r][p])) : (s(h[r][p + 1]), s(h[r + 1][p + 1]), s(h[r + 1][p]))
        }
    }

    function s(t) {
      d.push(t.x, t.y, t.z)
    }

    function h(e, i) {
      var n = 3 * e;
      i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
    }

    function c() {
      for (var t = new a, e = new a, n = new a, r = new a, o = new i, s = new i, h = new i, c = 0, p = 0; c < d.length; c += 9, p += 6) {
        t.set(d[c + 0], d[c + 1], d[c + 2]), e.set(d[c + 3], d[c + 4], d[c + 5]), n.set(d[c + 6], d[c + 7], d[c + 8]), o.set(f[p + 0], f[p + 1]), s.set(f[p + 2], f[p + 3]), h.set(f[p + 4], f[p + 5]), r.copy(t).add(e).add(n).divideScalar(3);
        var m = u(r);
        l(o, p + 0, t, m), l(s, p + 2, e, m), l(h, p + 4, n, m)
      }
    }

    function l(t, e, i, n) {
      0 > n && 1 === t.x && (f[e] = t.x - 1), 0 === i.x && 0 === i.z && (f[e] = n / 2 / Math.PI + .5)
    }

    function u(t) {
      return Math.atan2(t.z, -t.x)
    }

    function p(t) {
      return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
    }
    U.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: n,
      detail: r
    }, n = n || 1;
    var d = [],
      f = [];
    (function(t) {
      for (var i = new a, n = new a, r = new a, s = 0; s < e.length; s += 3) h(e[s + 0], i), h(e[s + 1], n), h(e[s + 2], r), o(i, n, r, t)
    })(r = r || 0),
    function(t) {
      for (var e = new a, i = 0; i < d.length; i += 3) e.x = d[i + 0], e.y = d[i + 1], e.z = d[i + 2], e.normalize().multiplyScalar(t), d[i + 0] = e.x, d[i + 1] = e.y, d[i + 2] = e.z
    }(n),
    function() {
      for (var t = new a, e = 0; e < d.length; e += 3) {
        t.x = d[e + 0], t.y = d[e + 1], t.z = d[e + 2];
        var i = u(t) / 2 / Math.PI + .5,
          n = p(t) / Math.PI + .5;
        f.push(i, 1 - n)
      }
      c(),
        function() {
          for (var t = 0; t < f.length; t += 6) {
            var e = f[t + 0],
              i = f[t + 2],
              n = f[t + 4],
              r = Math.max(e, i, n),
              a = Math.min(e, i, n);
            r > .9 && .1 > a && (.2 > e && (f[t + 0] += 1), .2 > i && (f[t + 2] += 1), .2 > n && (f[t + 4] += 1))
          }
        }()
    }(), this.addAttribute("position", new I(d, 3)), this.addAttribute("normal", new I(d.slice(), 3)), this.addAttribute("uv", new I(f, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
  }

  function Ge(t, e) {
    w.call(this), this.type = "TetrahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new ke(t, e)), this.mergeVertices()
  }

  function ke(t, e) {
    Fe.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function Ve(t, e) {
    w.call(this), this.type = "OctahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new He(t, e)), this.mergeVertices()
  }

  function He(t, e) {
    Fe.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function je(t, e) {
    w.call(this), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new We(t, e)), this.mergeVertices()
  }

  function We(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
    Fe.call(this, n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function Xe(t, e) {
    w.call(this), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new qe(t, e)), this.mergeVertices()
  }

  function qe(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i,
      r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
    Fe.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function Ye(t, e, i, n, r, a) {
    w.call(this), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: i,
      radialSegments: n,
      closed: r
    }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
    var o = new Je(t, e, i, n, r);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
  }

  function Je(t, e, n, r, o) {
    function s(i) {
      f = t.getPointAt(i / e, f);
      var a = h.normals[i],
        o = h.binormals[i];
      for (l = 0; r >= l; l++) {
        var s = l / r * Math.PI * 2,
          c = Math.sin(s),
          d = -Math.cos(s);
        p.x = d * a.x + c * o.x, p.y = d * a.y + c * o.y, p.z = d * a.z + c * o.z, p.normalize(), v.push(p.x, p.y, p.z), u.x = f.x + n * p.x, u.y = f.y + n * p.y, u.z = f.z + n * p.z, m.push(u.x, u.y, u.z)
      }
    }
    U.call(this), this.type = "TubeBufferGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: n,
      radialSegments: r,
      closed: o
    }, e = e || 64, n = n || 1, r = r || 8, o = o || !1;
    var h = t.computeFrenetFrames(e, o);
    this.tangents = h.tangents, this.normals = h.normals, this.binormals = h.binormals;
    var c, l, u = new a,
      p = new a,
      d = new i,
      f = new a,
      m = [],
      v = [],
      g = [],
      y = [];
    (function() {
      for (c = 0; e > c; c++) s(c);
      s(!1 === o ? e : 0),
        function() {
          for (c = 0; e >= c; c++)
            for (l = 0; r >= l; l++) d.x = c / e, d.y = l / r, g.push(d.x, d.y)
        }(),
        function() {
          for (l = 1; e >= l; l++)
            for (c = 1; r >= c; c++) {
              var t = (r + 1) * (l - 1) + (c - 1),
                i = (r + 1) * l + (c - 1),
                n = (r + 1) * l + c,
                a = (r + 1) * (l - 1) + c;
              y.push(t, i, a), y.push(i, n, a)
            }
        }()
    })(), this.setIndex(y), this.addAttribute("position", new I(m, 3)), this.addAttribute("normal", new I(v, 3)), this.addAttribute("uv", new I(g, 2))
  }

  function Ze(t, e, i, n, r, a, o) {
    w.call(this), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: a
    }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Ke(t, e, i, n, r, a)), this.mergeVertices()
  }

  function Ke(t, e, i, n, r, o) {
    function s(t, e, i, n, r) {
      var a = Math.cos(t),
        o = Math.sin(t),
        s = i / e * t,
        h = Math.cos(s);
      r.x = n * (2 + h) * .5 * a, r.y = n * (2 + h) * o * .5, r.z = n * Math.sin(s) * .5
    }
    U.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: o
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, o = o || 3;
    var h, c, l = [],
      u = [],
      p = [],
      d = [],
      f = new a,
      m = new a,
      v = new a,
      g = new a,
      y = new a,
      x = new a,
      _ = new a;
    for (h = 0; i >= h; ++h) {
      var b = h / i * r * Math.PI * 2;
      for (s(b, r, o, t, v), s(b + .01, r, o, t, g), x.subVectors(g, v), _.addVectors(g, v), y.crossVectors(x, _), _.crossVectors(y, x), y.normalize(), _.normalize(), c = 0; n >= c; ++c) {
        var M = c / n * Math.PI * 2,
          w = -e * Math.cos(M),
          S = e * Math.sin(M);
        f.x = v.x + (w * _.x + S * y.x), f.y = v.y + (w * _.y + S * y.y), f.z = v.z + (w * _.z + S * y.z), u.push(f.x, f.y, f.z), m.subVectors(f, v).normalize(), p.push(m.x, m.y, m.z), d.push(h / i), d.push(c / n)
      }
    }
    for (c = 1; i >= c; c++)
      for (h = 1; n >= h; h++) {
        var E = (n + 1) * (c - 1) + (h - 1),
          T = (n + 1) * c + (h - 1),
          A = (n + 1) * c + h,
          L = (n + 1) * (c - 1) + h;
        l.push(E, T, L), l.push(T, A, L)
      }
    this.setIndex(l), this.addAttribute("position", new I(u, 3)), this.addAttribute("normal", new I(p, 3)), this.addAttribute("uv", new I(d, 2))
  }

  function Qe(t, e, i, n, r) {
    w.call(this), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, this.fromBufferGeometry(new $e(t, e, i, n, r)), this.mergeVertices()
  }

  function $e(t, e, i, n, r) {
    U.call(this), this.type = "TorusBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
    var o, s, h = [],
      c = [],
      l = [],
      u = [],
      p = new a,
      d = new a,
      f = new a;
    for (o = 0; i >= o; o++)
      for (s = 0; n >= s; s++) {
        var m = s / n * r,
          v = o / i * Math.PI * 2;
        d.x = (t + e * Math.cos(v)) * Math.cos(m), d.y = (t + e * Math.cos(v)) * Math.sin(m), d.z = e * Math.sin(v), c.push(d.x, d.y, d.z), p.x = t * Math.cos(m), p.y = t * Math.sin(m), f.subVectors(d, p).normalize(), l.push(f.x, f.y, f.z), u.push(s / n), u.push(o / i)
      }
    for (o = 1; i >= o; o++)
      for (s = 1; n >= s; s++) {
        var g = (n + 1) * o + s - 1,
          y = (n + 1) * (o - 1) + s - 1,
          x = (n + 1) * (o - 1) + s,
          _ = (n + 1) * o + s;
        h.push(g, y, _), h.push(y, x, _)
      }
    this.setIndex(h), this.addAttribute("position", new I(c, 3)), this.addAttribute("normal", new I(l, 3)), this.addAttribute("uv", new I(u, 2))
  }

  function ti(t, e, i, n, r) {
    var a, o;
    if (r === function(t, e, i, n) {
        for (var r = 0, a = e, o = i - n; i > a; a += n) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
        return r
      }(t, e, i, n) > 0)
      for (a = e; i > a; a += n) o = yi(a, t[a], t[a + 1], o);
    else
      for (a = i - n; a >= e; a -= n) o = yi(a, t[a], t[a + 1], o);
    return o && fi(o, o.next) && (xi(o), o = o.next), o
  }

  function ei(t, e) {
    if (!t) return t;
    e || (e = t);
    var i, n = t;
    do {
      if (i = !1, n.steiner || !fi(n, n.next) && 0 !== di(n.prev, n, n.next)) n = n.next;
      else {
        if (xi(n), (n = e = n.prev) === n.next) break;
        i = !0
      }
    } while (i || n !== e);
    return e
  }

  function ii(t, e, i, n, r, a, o) {
    if (t) {
      !o && a && function(t, e, i, n) {
        var r = t;
        do {
          null === r.z && (r.z = ci(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
        } while (r !== t);
        r.prevZ.nextZ = null, r.prevZ = null,
          function(t) {
            var e, i, n, r, a, o, s, h, c = 1;
            do {
              for (i = t, t = null, a = null, o = 0; i;) {
                for (o++, n = i, s = 0, e = 0; c > e && (s++, n = n.nextZ); e++);
                for (h = c; s > 0 || h > 0 && n;) 0 !== s && (0 === h || !n || i.z <= n.z) ? (r = i, i = i.nextZ, s--) : (r = n, n = n.nextZ, h--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                i = n
              }
              a.nextZ = null, c *= 2
            } while (o > 1)
          }(r)
      }(t, n, r, a);
      for (var s, h, c = t; t.prev !== t.next;)
        if (s = t.prev, h = t.next, a ? ri(t, n, r, a) : ni(t)) e.push(s.i / i), e.push(t.i / i), e.push(h.i / i), xi(t), t = h.next, c = h.next;
        else if ((t = h) === c) {
        o ? 1 === o ? ii(t = ai(t, e, i), e, i, n, r, a, 2) : 2 === o && oi(t, e, i, n, r, a) : ii(ei(t), e, i, n, r, a, 1);
        break
      }
    }
  }

  function ni(t) {
    var e = t.prev,
      i = t,
      n = t.next;
    if (di(e, i, n) >= 0) return !1;
    for (var r = t.next.next; r !== t.prev;) {
      if (ui(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && di(r.prev, r, r.next) >= 0) return !1;
      r = r.next
    }
    return !0
  }

  function ri(t, e, i, n) {
    var r = t.prev,
      a = t,
      o = t.next;
    if (di(r, a, o) >= 0) return !1;
    for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, h = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, c = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = ci(s, h, e, i, n), p = ci(c, l, e, i, n), d = t.nextZ; d && d.z <= p;) {
      if (d !== t.prev && d !== t.next && ui(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && di(d.prev, d, d.next) >= 0) return !1;
      d = d.nextZ
    }
    for (d = t.prevZ; d && d.z >= u;) {
      if (d !== t.prev && d !== t.next && ui(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && di(d.prev, d, d.next) >= 0) return !1;
      d = d.prevZ
    }
    return !0
  }

  function ai(t, e, i) {
    var n = t;
    do {
      var r = n.prev,
        a = n.next.next;
      !fi(r, a) && mi(r, n, n.next, a) && vi(r, a) && vi(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), xi(n), xi(n.next), n = t = a), n = n.next
    } while (n !== t);
    return n
  }

  function oi(t, e, i, n, r, a) {
    var o = t;
    do {
      for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && pi(o, s)) {
          var h = gi(o, s);
          return o = ei(o, o.next), h = ei(h, h.next), ii(o, e, i, n, r, a), void ii(h, e, i, n, r, a)
        }
        s = s.next
      }
      o = o.next
    } while (o !== t)
  }

  function si(t, e) {
    return t.x - e.x
  }

  function hi(t, e) {
    if (e = function(t, e) {
        var i, n = e,
          r = t.x,
          a = t.y,
          o = -1 / 0;
        do {
          if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
            var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (r >= s && s > o) {
              if (o = s, s === r) {
                if (a === n.y) return n;
                if (a === n.next.y) return n.next
              }
              i = n.x < n.next.x ? n : n.next
            }
          }
          n = n.next
        } while (n !== e);
        if (!i) return null;
        if (r === o) return i.prev;
        var h, c = i,
          l = i.x,
          u = i.y,
          p = 1 / 0;
        for (n = i.next; n !== c;) r >= n.x && n.x >= l && r !== n.x && ui(u > a ? r : o, a, l, u, u > a ? o : r, a, n.x, n.y) && (h = Math.abs(a - n.y) / (r - n.x), (p > h || h === p && n.x > i.x) && vi(n, t) && (i = n, p = h)), n = n.next;
        return i
      }(t, e)) {
      var i = gi(e, t);
      ei(i, i.next)
    }
  }

  function ci(t, e, i, n, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function li(t) {
    var e = t,
      i = t;
    do {
      e.x < i.x && (i = e), e = e.next
    } while (e !== t);
    return i
  }

  function ui(t, e, i, n, r, a, o, s) {
    return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (n - s) - (i - o) * (e - s) >= 0 && (i - o) * (a - s) - (r - o) * (n - s) >= 0
  }

  function pi(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
      var i = t;
      do {
        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && mi(i, i.next, t, e)) return !0;
        i = i.next
      } while (i !== t);
      return !1
    }(t, e) && vi(t, e) && vi(e, t) && function(t, e) {
      var i = t,
        n = !1,
        r = (t.x + e.x) / 2,
        a = (t.y + e.y) / 2;
      do {
        i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
      } while (i !== t);
      return n
    }(t, e)
  }

  function di(t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
  }

  function fi(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function mi(t, e, i, n) {
    return !!(fi(t, e) && fi(i, n) || fi(t, n) && fi(i, e)) || di(t, e, i) > 0 != di(t, e, n) > 0 && di(i, n, t) > 0 != di(i, n, e) > 0
  }

  function vi(t, e) {
    return di(t.prev, t, t.next) < 0 ? di(t, e, t.next) >= 0 && di(t, t.prev, e) >= 0 : di(t, e, t.prev) < 0 || di(t, t.next, e) < 0
  }

  function gi(t, e) {
    var i = new _i(t.i, t.x, t.y),
      n = new _i(e.i, e.x, e.y),
      r = t.next,
      a = e.prev;
    return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
  }

  function yi(t, e, i, n) {
    var r = new _i(t, e, i);
    return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
  }

  function xi(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function _i(t, e, i) {
    this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }

  function bi(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop()
  }

  function Mi(t, e) {
    for (var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
  }

  function wi(t, e) {
    w.call(this), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, this.fromBufferGeometry(new Si(t, e)), this.mergeVertices()
  }

  function Si(t, e) {
    function n(t) {
      function n(t, e, i) {
        return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
      }

      function h(t, e, n) {
        var r, a, o, s = t.x - e.x,
          h = t.y - e.y,
          c = n.x - t.x,
          l = n.y - t.y,
          u = s * s + h * h,
          p = s * l - h * c;
        if (Math.abs(p) > Number.EPSILON) {
          var d = Math.sqrt(u),
            f = Math.sqrt(c * c + l * l),
            m = e.x - h / d,
            v = e.y + s / d,
            g = ((n.x - l / f - m) * l - (n.y + c / f - v) * c) / (s * l - h * c),
            y = (r = m + s * g - t.x) * r + (a = v + h * g - t.y) * a;
          if (2 >= y) return new i(r, a);
          o = Math.sqrt(y / 2)
        } else {
          var x = !1;
          s > Number.EPSILON ? c > Number.EPSILON && (x = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (x = !0) : Math.sign(h) === Math.sign(l) && (x = !0), x ? (r = -h, a = s, o = Math.sqrt(u)) : (r = s, a = h, o = Math.sqrt(u / 2))
        }
        return new i(r / o, a / o)
      }

      function c(t, e) {
        var i, n;
        for (Y = t.length; --Y >= 0;) {
          i = Y, 0 > (n = Y - 1) && (n = t.length - 1);
          var r = 0,
            a = g + 2 * M;
          for (r = 0; a > r; r++) {
            var o = W * r,
              s = W * (r + 1);
            p(e + i + o, e + n + o, e + n + s, e + i + s)
          }
        }
      }

      function l(t, e, i) {
        m.push(t), m.push(e), m.push(i)
      }

      function u(t, e, i) {
        d(t), d(e), d(i);
        var n = o.length / 3,
          a = S.generateTopUV(r, o, n - 3, n - 2, n - 1);
        f(a[0]), f(a[1]), f(a[2])
      }

      function p(t, e, i, n) {
        d(t), d(e), d(n), d(e), d(i), d(n);
        var a = o.length / 3,
          s = S.generateSideWallUV(r, o, a - 6, a - 3, a - 2, a - 1);
        f(s[0]), f(s[1]), f(s[3]), f(s[1]), f(s[2]), f(s[3])
      }

      function d(t) {
        var e = 3 * t;
        o.push(m[e + 0], m[e + 1], m[e + 2])
      }

      function f(t) {
        s.push(t.x, t.y)
      }
      var m = [],
        v = void 0 !== e.curveSegments ? e.curveSegments : 12,
        g = void 0 !== e.steps ? e.steps : 1,
        y = void 0 !== e.depth ? e.depth : 100,
        x = void 0 === e.bevelEnabled || e.bevelEnabled,
        _ = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
        b = void 0 !== e.bevelSize ? e.bevelSize : _ - 2,
        M = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
        w = e.extrudePath,
        S = void 0 !== e.UVGenerator ? e.UVGenerator : Js;
      void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), y = e.amount);
      var E, T, A, L, C, P = !1;
      w && (E = w.getSpacedPoints(g), P = !0, x = !1, T = w.computeFrenetFrames(g, !1), A = new a, L = new a, C = new a), x || (M = 0, _ = 0, b = 0);
      var R, I, N, O = t.extractPoints(v),
        D = O.shape,
        U = O.holes;
      if (!Ys.isClockWise(D))
        for (D = D.reverse(), I = 0, N = U.length; N > I; I++) R = U[I], Ys.isClockWise(R) && (U[I] = R.reverse());
      var z = Ys.triangulateShape(D, U),
        B = D;
      for (I = 0, N = U.length; N > I; I++) R = U[I], D = D.concat(R);
      for (var F, G, k, V, H, j, W = D.length, X = z.length, q = [], Y = 0, J = B.length, Z = J - 1, K = Y + 1; J > Y; Y++, Z++, K++) Z === J && (Z = 0), K === J && (K = 0), q[Y] = h(B[Y], B[Z], B[K]);
      var Q, $, tt = [],
        et = q.concat();
      for (I = 0, N = U.length; N > I; I++) {
        for (R = U[I], Q = [], Y = 0, Z = (J = R.length) - 1, K = Y + 1; J > Y; Y++, Z++, K++) Z === J && (Z = 0), K === J && (K = 0), Q[Y] = h(R[Y], R[Z], R[K]);
        tt.push(Q), et = et.concat(Q)
      }
      for (F = 0; M > F; F++) {
        for (k = F / M, V = _ * Math.cos(k * Math.PI / 2), G = b * Math.sin(k * Math.PI / 2), Y = 0, J = B.length; J > Y; Y++) l((H = n(B[Y], q[Y], G)).x, H.y, -V);
        for (I = 0, N = U.length; N > I; I++)
          for (R = U[I], Q = tt[I], Y = 0, J = R.length; J > Y; Y++) l((H = n(R[Y], Q[Y], G)).x, H.y, -V)
      }
      for (G = b, Y = 0; W > Y; Y++) H = x ? n(D[Y], et[Y], G) : D[Y], P ? (L.copy(T.normals[0]).multiplyScalar(H.x), A.copy(T.binormals[0]).multiplyScalar(H.y), C.copy(E[0]).add(L).add(A), l(C.x, C.y, C.z)) : l(H.x, H.y, 0);
      for ($ = 1; g >= $; $++)
        for (Y = 0; W > Y; Y++) H = x ? n(D[Y], et[Y], G) : D[Y], P ? (L.copy(T.normals[$]).multiplyScalar(H.x), A.copy(T.binormals[$]).multiplyScalar(H.y), C.copy(E[$]).add(L).add(A), l(C.x, C.y, C.z)) : l(H.x, H.y, y / g * $);
      for (F = M - 1; F >= 0; F--) {
        for (k = F / M, V = _ * Math.cos(k * Math.PI / 2), G = b * Math.sin(k * Math.PI / 2), Y = 0, J = B.length; J > Y; Y++) l((H = n(B[Y], q[Y], G)).x, H.y, y + V);
        for (I = 0, N = U.length; N > I; I++)
          for (R = U[I], Q = tt[I], Y = 0, J = R.length; J > Y; Y++) H = n(R[Y], Q[Y], G), P ? l(H.x, H.y + E[g - 1].y, E[g - 1].x + V) : l(H.x, H.y, y + V)
      }(function() {
        var t = o.length / 3;
        if (x) {
          var e = 0,
            i = W * e;
          for (Y = 0; X > Y; Y++) u((j = z[Y])[2] + i, j[1] + i, j[0] + i);
          for (i = W * (e = g + 2 * M), Y = 0; X > Y; Y++) u((j = z[Y])[0] + i, j[1] + i, j[2] + i)
        } else {
          for (Y = 0; X > Y; Y++) u((j = z[Y])[2], j[1], j[0]);
          for (Y = 0; X > Y; Y++) u((j = z[Y])[0] + W * g, j[1] + W * g, j[2] + W * g)
        }
        r.addGroup(t, o.length / 3 - t, 0)
      })(),
      function() {
        var t = o.length / 3,
          e = 0;
        for (c(B, e), e += B.length, I = 0, N = U.length; N > I; I++) c(R = U[I], e), e += R.length;
        r.addGroup(t, o.length / 3 - t, 1)
      }()
    }
    U.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    for (var r = this, o = [], s = [], h = 0, c = t.length; c > h; h++) {
      n(t[h])
    }
    this.addAttribute("position", new I(o, 3)), this.addAttribute("uv", new I(s, 2)), this.computeVertexNormals()
  }

  function Ei(t, e, i) {
    if (i.shapes = [], Array.isArray(t))
      for (var n = 0, r = t.length; r > n; n++) {
        var a = t[n];
        i.shapes.push(a.uuid)
      } else i.shapes.push(t.uuid);
    return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
  }

  function Ti(t, e) {
    w.call(this), this.type = "TextGeometry", this.parameters = {
      text: t,
      parameters: e
    }, this.fromBufferGeometry(new Ai(t, e)), this.mergeVertices()
  }

  function Ai(t, e) {
    var i = (e = e || {}).font;
    if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new w;
    var n = i.generateShapes(t, e.size);
    e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Si.call(this, n, e), this.type = "TextBufferGeometry"
  }

  function Li(t, e, i, n, r, a, o) {
    w.call(this), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, this.fromBufferGeometry(new Ci(t, e, i, n, r, a, o)), this.mergeVertices()
  }

  function Ci(t, e, i, n, r, o, s) {
    U.call(this), this.type = "SphereBufferGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: o,
      thetaLength: s
    }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
    var h, c, l = (o = void 0 !== o ? o : 0) + (s = void 0 !== s ? s : Math.PI),
      u = 0,
      p = [],
      d = new a,
      f = new a,
      m = [],
      v = [],
      g = [],
      y = [];
    for (c = 0; i >= c; c++) {
      var x = [],
        _ = c / i;
      for (h = 0; e >= h; h++) {
        var b = h / e;
        d.x = -t * Math.cos(n + b * r) * Math.sin(o + _ * s), d.y = t * Math.cos(o + _ * s), d.z = t * Math.sin(n + b * r) * Math.sin(o + _ * s), v.push(d.x, d.y, d.z), f.set(d.x, d.y, d.z).normalize(), g.push(f.x, f.y, f.z), y.push(b, 1 - _), x.push(u++)
      }
      p.push(x)
    }
    for (c = 0; i > c; c++)
      for (h = 0; e > h; h++) {
        var M = p[c][h + 1],
          w = p[c][h],
          S = p[c + 1][h],
          E = p[c + 1][h + 1];
        (0 !== c || o > 0) && m.push(M, w, E), (c !== i - 1 || l < Math.PI) && m.push(w, S, E)
      }
    this.setIndex(m), this.addAttribute("position", new I(v, 3)), this.addAttribute("normal", new I(g, 3)), this.addAttribute("uv", new I(y, 2))
  }

  function Pi(t, e, i, n, r, a) {
    w.call(this), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: i,
      phiSegments: n,
      thetaStart: r,
      thetaLength: a
    }, this.fromBufferGeometry(new Ri(t, e, i, n, r, a)), this.mergeVertices()
  }

  function Ri(t, e, n, r, o, s) {
    U.call(this), this.type = "RingBufferGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: r,
      thetaStart: o,
      thetaLength: s
    }, t = t || .5, e = e || 1, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
    var h, c, l, u = [],
      p = [],
      d = [],
      f = [],
      m = t,
      v = (e - t) / (r = void 0 !== r ? Math.max(1, r) : 1),
      g = new a,
      y = new i;
    for (c = 0; r >= c; c++) {
      for (l = 0; n >= l; l++) h = o + l / n * s, g.x = m * Math.cos(h), g.y = m * Math.sin(h), p.push(g.x, g.y, g.z), d.push(0, 0, 1), y.x = (g.x / e + 1) / 2, y.y = (g.y / e + 1) / 2, f.push(y.x, y.y);
      m += v
    }
    for (c = 0; r > c; c++) {
      var x = c * (n + 1);
      for (l = 0; n > l; l++) {
        var _ = h = l + x,
          b = h + n + 1,
          M = h + n + 2,
          w = h + 1;
        u.push(_, b, w), u.push(b, M, w)
      }
    }
    this.setIndex(u), this.addAttribute("position", new I(p, 3)), this.addAttribute("normal", new I(d, 3)), this.addAttribute("uv", new I(f, 2))
  }

  function Ii(t, e, i, n) {
    w.call(this), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: n
    }, this.fromBufferGeometry(new Ni(t, e, i, n)), this.mergeVertices()
  }

  function Ni(t, e, n, r) {
    U.call(this), this.type = "LatheBufferGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: r
    }, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = us.clamp(r, 0, 2 * Math.PI);
    var o, s, h, c = [],
      l = [],
      u = [],
      p = 1 / e,
      d = new a,
      f = new i;
    for (s = 0; e >= s; s++) {
      var m = n + s * p * r,
        v = Math.sin(m),
        g = Math.cos(m);
      for (h = 0; h <= t.length - 1; h++) d.x = t[h].x * v, d.y = t[h].y, d.z = t[h].x * g, l.push(d.x, d.y, d.z), f.x = s / e, f.y = h / (t.length - 1), u.push(f.x, f.y)
    }
    for (s = 0; e > s; s++)
      for (h = 0; h < t.length - 1; h++) {
        var y = o = h + s * t.length,
          x = o + t.length,
          _ = o + t.length + 1,
          b = o + 1;
        c.push(y, x, b), c.push(x, _, b)
      }
    if (this.setIndex(c), this.addAttribute("position", new I(l, 3)), this.addAttribute("uv", new I(u, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
      var M = this.attributes.normal.array,
        w = new a,
        S = new a,
        E = new a;
      for (o = e * t.length * 3, s = 0, h = 0; s < t.length; s++, h += 3) w.x = M[h + 0], w.y = M[h + 1], w.z = M[h + 2], S.x = M[o + h + 0], S.y = M[o + h + 1], S.z = M[o + h + 2], E.addVectors(w, S).normalize(), M[h + 0] = M[o + h + 0] = E.x, M[h + 1] = M[o + h + 1] = E.y, M[h + 2] = M[o + h + 2] = E.z
    }
  }

  function Oi(t, e) {
    w.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
      shapes: t,
      curveSegments: e
    }, this.fromBufferGeometry(new Di(t, e)), this.mergeVertices()
  }

  function Di(t, e) {
    function i(t) {
      var i, s, c, l = r.length / 3,
        u = t.extractPoints(e),
        p = u.shape,
        d = u.holes;
      if (!1 === Ys.isClockWise(p))
        for (p = p.reverse(), i = 0, s = d.length; s > i; i++) c = d[i], !0 === Ys.isClockWise(c) && (d[i] = c.reverse());
      var f = Ys.triangulateShape(p, d);
      for (i = 0, s = d.length; s > i; i++) c = d[i], p = p.concat(c);
      for (i = 0, s = p.length; s > i; i++) {
        var m = p[i];
        r.push(m.x, m.y, 0), a.push(0, 0, 1), o.push(m.x, m.y)
      }
      for (i = 0, s = f.length; s > i; i++) {
        var v = f[i],
          g = v[0] + l,
          y = v[1] + l,
          x = v[2] + l;
        n.push(g, y, x), h += 3
      }
    }
    U.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    }, e = e || 12;
    var n = [],
      r = [],
      a = [],
      o = [],
      s = 0,
      h = 0;
    if (!1 === Array.isArray(t)) i(t);
    else
      for (var c = 0; c < t.length; c++) i(t[c]), this.addGroup(s, h, c), s += h, h = 0;
    this.setIndex(n), this.addAttribute("position", new I(r, 3)), this.addAttribute("normal", new I(a, 3)), this.addAttribute("uv", new I(o, 2))
  }

  function Ui(t, e) {
    if (e.shapes = [], Array.isArray(t))
      for (var i = 0, n = t.length; n > i; i++) {
        var r = t[i];
        e.shapes.push(r.uuid)
      } else e.shapes.push(t.uuid);
    return e
  }

  function zi(t, e) {
    U.call(this), this.type = "EdgesGeometry", this.parameters = {
      thresholdAngle: e
    }, e = void 0 !== e ? e : 1;
    var i, n, r, a, o = [],
      s = Math.cos(us.DEG2RAD * e),
      h = [0, 0],
      c = {},
      l = ["a", "b", "c"];
    t.isBufferGeometry ? (a = new w).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
    for (var u = a.vertices, p = a.faces, d = 0, f = p.length; f > d; d++)
      for (var m = p[d], v = 0; 3 > v; v++) i = m[l[v]], n = m[l[(v + 1) % 3]], h[0] = Math.min(i, n), h[1] = Math.max(i, n), void 0 === c[r = h[0] + "," + h[1]] ? c[r] = {
        index1: h[0],
        index2: h[1],
        face1: d,
        face2: void 0
      } : c[r].face2 = d;
    for (r in c) {
      var g = c[r];
      if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
        var y = u[g.index1];
        o.push(y.x, y.y, y.z), y = u[g.index2], o.push(y.x, y.y, y.z)
      }
    }
    this.addAttribute("position", new I(o, 3))
  }

  function Bi(t, e, i, n, r, a, o, s) {
    w.call(this), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: i,
      radialSegments: n,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: s
    }, this.fromBufferGeometry(new Fi(t, e, i, n, r, a, o, s)), this.mergeVertices()
  }

  function Fi(t, e, n, r, o, s, h, c) {
    function l(n) {
      var o, s, l, g = new i,
        _ = new a,
        b = 0,
        M = !0 === n ? t : e,
        w = !0 === n ? 1 : -1;
      for (s = v, o = 1; r >= o; o++) d.push(0, y * w, 0), f.push(0, w, 0), m.push(.5, .5), v++;
      for (l = v, o = 0; r >= o; o++) {
        var S = o / r * c + h,
          E = Math.cos(S),
          T = Math.sin(S);
        _.x = M * T, _.y = y * w, _.z = M * E, d.push(_.x, _.y, _.z), f.push(0, w, 0), g.x = .5 * E + .5, g.y = .5 * T * w + .5, m.push(g.x, g.y), v++
      }
      for (o = 0; r > o; o++) {
        var A = s + o,
          L = l + o;
        !0 === n ? p.push(L, L + 1, A) : p.push(L + 1, L, A), b += 3
      }
      u.addGroup(x, b, !0 === n ? 1 : 2), x += b
    }
    U.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: r,
      heightSegments: o,
      openEnded: s,
      thetaStart: h,
      thetaLength: c
    };
    var u = this;
    t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, r = Math.floor(r) || 8, o = Math.floor(o) || 1, s = void 0 !== s && s, h = void 0 !== h ? h : 0, c = void 0 !== c ? c : 2 * Math.PI;
    var p = [],
      d = [],
      f = [],
      m = [],
      v = 0,
      g = [],
      y = n / 2,
      x = 0;
    (function() {
      var i, s, l = new a,
        _ = new a,
        b = 0,
        M = (e - t) / n;
      for (s = 0; o >= s; s++) {
        var w = [],
          S = s / o,
          E = S * (e - t) + t;
        for (i = 0; r >= i; i++) {
          var T = i / r,
            A = T * c + h,
            L = Math.sin(A),
            C = Math.cos(A);
          _.x = E * L, _.y = -S * n + y, _.z = E * C, d.push(_.x, _.y, _.z), l.set(L, M, C).normalize(), f.push(l.x, l.y, l.z), m.push(T, 1 - S), w.push(v++)
        }
        g.push(w)
      }
      for (i = 0; r > i; i++)
        for (s = 0; o > s; s++) {
          var P = g[s][i],
            R = g[s + 1][i],
            I = g[s + 1][i + 1],
            N = g[s][i + 1];
          p.push(P, R, N), p.push(R, I, N), b += 6
        }
      u.addGroup(x, b, 0), x += b
    })(), !1 === s && (t > 0 && l(!0), e > 0 && l(!1)), this.setIndex(p), this.addAttribute("position", new I(d, 3)), this.addAttribute("normal", new I(f, 3)), this.addAttribute("uv", new I(m, 2))
  }

  function Gi(t, e, i, n, r, a, o) {
    Bi.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function ki(t, e, i, n, r, a, o) {
    Fi.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    }
  }

  function Vi(t, e, i, n) {
    w.call(this), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: i,
      thetaLength: n
    }, this.fromBufferGeometry(new Hi(t, e, i, n)), this.mergeVertices()
  }

  function Hi(t, e, n, r) {
    U.call(this), this.type = "CircleBufferGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: n,
      thetaLength: r
    }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
    var o, s, h = [],
      c = [],
      l = [],
      u = [],
      p = new a,
      d = new i;
    for (c.push(0, 0, 0), l.push(0, 0, 1), u.push(.5, .5), s = 0, o = 3; e >= s; s++, o += 3) {
      var f = n + s / e * r;
      p.x = t * Math.cos(f), p.y = t * Math.sin(f), c.push(p.x, p.y, p.z), l.push(0, 0, 1), d.x = (c[o] / t + 1) / 2, d.y = (c[o + 1] / t + 1) / 2, u.push(d.x, d.y)
    }
    for (o = 1; e >= o; o++) h.push(o, o + 1, 0);
    this.setIndex(h), this.addAttribute("position", new I(c, 3)), this.addAttribute("normal", new I(l, 3)), this.addAttribute("uv", new I(u, 2))
  }

  function ji(t) {
    k.call(this), this.type = "ShadowMaterial", this.color = new v(0), this.transparent = !0, this.setValues(t)
  }

  function Wi(t) {
    V.call(this, t), this.type = "RawShaderMaterial"
  }

  function Xi(t) {
    k.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new v(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new v(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = cs, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function qi(t) {
    Xi.call(this), this.defines = {
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
  }

  function Yi(t) {
    k.call(this), this.type = "MeshPhongMaterial", this.color = new v(16777215), this.specular = new v(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new v(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = cs, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ca, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Ji(t) {
    Yi.call(this), this.defines = {
      TOON: ""
    }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
  }

  function Zi(t) {
    k.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = cs, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Ki(t) {
    k.call(this), this.type = "MeshLambertMaterial", this.color = new v(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new v(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ca, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Qi(t) {
    if (k.call(this), this.defines = {
        MATCAP: ""
      }, this.type = "MeshMatcapMaterial", this.color = new v(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = cs, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t), null === this.matcap) {
      var e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      var n = e.getContext("2d");
      n.fillStyle = "#fff", n.fillRect(0, 0, 1, 1), this.matcap = new THREE.CanvasTexture(e)
    }
  }

  function $i(t) {
    Se.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
  }

  function tn(t, e, i) {
    var n = this,
      r = !1,
      a = 0,
      o = 0,
      s = void 0;
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
      o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
    }, this.itemEnd = function(t) {
      a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
    }, this.itemError = function(t) {
      void 0 !== n.onError && n.onError(t)
    }, this.resolveURL = function(t) {
      return s ? s(t) : t
    }, this.setURLModifier = function(t) {
      return s = t, this
    }
  }

  function en(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function nn(t) {
    this.manager = void 0 !== t ? t : $s, this._parser = null
  }

  function rn(t) {
    this.manager = void 0 !== t ? t : $s, this._parser = null
  }

  function an(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function on(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function sn(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function hn() {
    this.type = "Curve", this.arcLengthDivisions = 200
  }

  function cn(t, e, i, n, r, a, o, s) {
    hn.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
  }

  function ln(t, e, i, n, r, a) {
    cn.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
  }

  function un() {
    function t(t, a, o, s) {
      e = t, i = o, n = -3 * t + 3 * a - 2 * o - s, r = 2 * t - 2 * a + o + s
    }
    var e = 0,
      i = 0,
      n = 0,
      r = 0;
    return {
      initCatmullRom: function(e, i, n, r, a) {
        t(i, n, a * (n - e), a * (r - i))
      },
      initNonuniformCatmullRom: function(e, i, n, r, a, o, s) {
        var h = (i - e) / a - (n - e) / (a + o) + (n - i) / o,
          c = (n - i) / o - (r - i) / (o + s) + (r - n) / s;
        t(i, n, h *= o, c *= o)
      },
      calc: function(t) {
        var a = t * t;
        return e + i * t + n * a + r * (a * t)
      }
    }
  }

  function pn(t, e, i, n) {
    hn.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
  }

  function dn(t, e, i, n, r) {
    var a = .5 * (n - e),
      o = .5 * (r - i),
      s = t * t;
    return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
  }

  function fn(t, e, i, n) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * e
    }(t, e) + function(t, e) {
      return 2 * (1 - t) * t * e
    }(t, i) + function(t, e) {
      return t * t * e
    }(t, n)
  }

  function mn(t, e, i, n, r) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * i * e
    }(t, e) + function(t, e) {
      var i = 1 - t;
      return 3 * i * i * t * e
    }(t, i) + function(t, e) {
      return 3 * (1 - t) * t * t * e
    }(t, n) + function(t, e) {
      return t * t * t * e
    }(t, r)
  }

  function vn(t, e, n, r) {
    hn.call(this), this.type = "CubicBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 = n || new i, this.v3 = r || new i
  }

  function gn(t, e, i, n) {
    hn.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 = i || new a, this.v3 = n || new a
  }

  function yn(t, e) {
    hn.call(this), this.type = "LineCurve", this.v1 = t || new i, this.v2 = e || new i
  }

  function xn(t, e) {
    hn.call(this), this.type = "LineCurve3", this.v1 = t || new a, this.v2 = e || new a
  }

  function _n(t, e, n) {
    hn.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new i, this.v1 = e || new i, this.v2 = n || new i
  }

  function bn(t, e, i) {
    hn.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new a, this.v1 = e || new a, this.v2 = i || new a
  }

  function Mn(t) {
    hn.call(this), this.type = "SplineCurve", this.points = t || []
  }

  function wn() {
    hn.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
  }

  function Sn(t) {
    wn.call(this), this.type = "Path", this.currentPoint = new i, t && this.setFromPoints(t)
  }

  function En(t) {
    Sn.call(this, t), this.uuid = us.generateUUID(), this.type = "Shape", this.holes = []
  }

  function Tn(t, e) {
    M.call(this), this.type = "Light", this.color = new v(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
  }

  function An(t) {
    this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this.matrix = new n
  }

  function Ln() {
    M.call(this), this.type = "Camera", this.matrixWorldInverse = new n, this.projectionMatrix = new n, this.projectionMatrixInverse = new n
  }

  function Cn(t, e, i, n) {
    Ln.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
  }

  function Pn() {
    An.call(this, new Cn(50, 1, .5, 500))
  }

  function Rn(t, e, i, n, r, a) {
    Tn.call(this, t, e), this.type = "SpotLight", this.position.copy(M.DefaultUp), this.updateMatrix(), this.target = new M, Object.defineProperty(this, "power", {
      get: function() {
        return this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / Math.PI
      }
    }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Pn
  }

  function In(t, e, i, n) {
    Tn.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
      get: function() {
        return 4 * this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / (4 * Math.PI)
      }
    }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new An(new Cn(90, 1, .5, 500))
  }

  function Nn(t, e, i, n, r, a) {
    Ln.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
  }

  function On() {
    An.call(this, new Nn(-5, 5, 5, -5, .5, 500))
  }

  function Dn(t, e) {
    Tn.call(this, t, e), this.type = "DirectionalLight", this.position.copy(M.DefaultUp), this.updateMatrix(), this.target = new M, this.shadow = new On
  }

  function Un(t, e) {
    Tn.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
  }

  function zn(t, e, i, n) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
  }

  function Bn(t, e, i, n) {
    zn.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
  }

  function Fn(t, e, i, n) {
    zn.call(this, t, e, i, n)
  }

  function Gn(t, e, i, n) {
    zn.call(this, t, e, i, n)
  }

  function kn(t, e, i, n) {
    if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = oh.convertArray(e, this.TimeBufferType), this.values = oh.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
  }

  function Vn(t, e, i) {
    kn.call(this, t, e, i)
  }

  function Hn(t, e, i, n) {
    kn.call(this, t, e, i, n)
  }

  function jn(t, e, i, n) {
    kn.call(this, t, e, i, n)
  }

  function Wn(t, e, i, n) {
    zn.call(this, t, e, i, n)
  }

  function Xn(t, e, i, n) {
    kn.call(this, t, e, i, n)
  }

  function qn(t, e, i, n) {
    kn.call(this, t, e, i, n)
  }

  function Yn(t, e, i, n) {
    kn.call(this, t, e, i, n)
  }

  function Jn(t, e, i) {
    this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = us.generateUUID(), this.duration < 0 && this.resetDuration()
  }

  function Zn(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var e = function(t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return jn;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return Yn;
        case "color":
          return Hn;
        case "quaternion":
          return Xn;
        case "bool":
        case "boolean":
          return Vn;
        case "string":
          return qn
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }(t.type);
    if (void 0 === t.times) {
      var i = [],
        n = [];
      oh.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
  }

  function Kn(t) {
    this.manager = void 0 !== t ? t : $s, this.textures = {}
  }

  function Qn(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function $n() {}

  function tr(t) {
    "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : $s, this.withCredentials = !1
  }

  function er(t) {
    this.manager = void 0 !== t ? t : $s, this.texturePath = ""
  }

  function ir() {
    this.type = "ShapePath", this.color = new v, this.subPaths = [], this.currentPath = null
  }

  function nr(t) {
    this.type = "Font", this.data = t
  }

  function rr(t, e, i, n, r) {
    var a = r.glyphs[t] || r.glyphs["?"];
    if (a) {
      var o, s, h, c, l, u, p, d, f = new ir;
      if (a.o)
        for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; g > v;) {
          switch (m[v++]) {
            case "m":
              o = m[v++] * e + i, s = m[v++] * e + n, f.moveTo(o, s);
              break;
            case "l":
              o = m[v++] * e + i, s = m[v++] * e + n, f.lineTo(o, s);
              break;
            case "q":
              h = m[v++] * e + i, c = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, f.quadraticCurveTo(l, u, h, c);
              break;
            case "b":
              h = m[v++] * e + i, c = m[v++] * e + n, l = m[v++] * e + i, u = m[v++] * e + n, p = m[v++] * e + i, d = m[v++] * e + n, f.bezierCurveTo(l, u, p, d, h, c)
          }
        }
      return {
        offsetX: a.ha * e,
        path: f
      }
    }
  }

  function ar(t) {
    this.manager = void 0 !== t ? t : $s
  }

  function or(t, e, i) {
    M.call(this), this.type = "CubeCamera";
    var n = 90,
      r = new Cn(n, 1, t, e);
    r.up.set(0, -1, 0), r.lookAt(new a(1, 0, 0)), this.add(r);
    var o = new Cn(n, 1, t, e);
    o.up.set(0, -1, 0), o.lookAt(new a(-1, 0, 0)), this.add(o);
    var s = new Cn(n, 1, t, e);
    s.up.set(0, 0, 1), s.lookAt(new a(0, 1, 0)), this.add(s);
    var h = new Cn(n, 1, t, e);
    h.up.set(0, 0, -1), h.lookAt(new a(0, -1, 0)), this.add(h);
    var c = new Cn(n, 1, t, e);
    c.up.set(0, -1, 0), c.lookAt(new a(0, 0, 1)), this.add(c);
    var u = new Cn(n, 1, t, e);
    u.up.set(0, -1, 0), u.lookAt(new a(0, 0, -1)), this.add(u);
    var p = {
      format: fo,
      magFilter: Ka,
      minFilter: Ka
    };
    this.renderTarget = new l(i, i, p), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
      null === this.parent && this.updateMatrixWorld();
      var i = this.renderTarget,
        n = i.texture.generateMipmaps;
      i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, r, i), i.activeCubeFace = 1, t.render(e, o, i), i.activeCubeFace = 2, t.render(e, s, i), i.activeCubeFace = 3, t.render(e, h, i), i.activeCubeFace = 4, t.render(e, c, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, u, i), t.setRenderTarget(null)
    }, this.clear = function(t, e, i, n) {
      for (var r = this.renderTarget, a = 0; 6 > a; a++) r.activeCubeFace = a, t.setRenderTarget(r), t.clear(e, i, n);
      t.setRenderTarget(null)
    }
  }

  function sr(t) {
    Cn.call(this), this.cameras = t || []
  }

  function hr(t, e, i) {
    this.binding = t, this.valueSize = i;
    var n, r = Float64Array;
    switch (e) {
      case "quaternion":
        n = this._slerp;
        break;
      case "string":
      case "bool":
        r = Array, n = this._select;
        break;
      default:
        n = this._lerp
    }
    this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
  }

  function cr(t, e, i) {
    var n = i || lr.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, n)
  }

  function lr(t, e, i) {
    this.path = e, this.parsedPath = i || lr.parseTrackName(e), this.node = lr.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
  }

  function ur() {
    this.uuid = us.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    var n = this;
    this.stats = {
      objects: {
        get total() {
          return n._objects.length
        },
        get inUse() {
          return this.total - n.nCachedObjects_
        }
      },
      get bindingsPerObject() {
        return n._bindings.length
      }
    }
  }

  function pr(t, e, i) {
    this._mixer = t, this._clip = e, this._localRoot = i || null;
    for (var n = e.tracks, r = n.length, a = new Array(r), o = {
        endingStart: Yo,
        endingEnd: Yo
      }, s = 0; s !== r; ++s) {
      var h = n[s].createInterpolant(null);
      a[s] = h, h.settings = o
    }
    this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = jo, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
  }

  function dr(t) {
    this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
  }

  function fr(t) {
    "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
  }

  function mr() {
    U.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
  }

  function vr(t, e, i) {
    ve.call(this, t, e), this.meshPerAttribute = i || 1
  }

  function gr(t, e, i, n) {
    "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), S.call(this, t, e, i), this.meshPerAttribute = n || 1
  }

  function yr(t, e, i, n) {
    this.ray = new H(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
      Mesh: {},
      Line: {},
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    }, Object.defineProperties(this.params, {
      PointCloud: {
        get: function() {
          return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
        }
      }
    })
  }

  function xr(t, e) {
    return t.distance - e.distance
  }

  function _r(t, e, i, n) {
    if (!1 !== t.visible && (t.raycast(e, i), !0 === n))
      for (var r = t.children, a = 0, o = r.length; o > a; a++) _r(r[a], e, i, !0)
  }

  function br(t) {
    this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
  }

  function Mr(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
  }

  function wr(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
  }

  function Sr(t, e) {
    this.min = void 0 !== t ? t : new i(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new i(-1 / 0, -1 / 0)
  }

  function Er(t, e) {
    this.start = void 0 !== t ? t : new a, this.end = void 0 !== e ? e : new a
  }

  function Tr(t) {
    M.call(this), this.material = t, this.render = function() {}
  }

  function Ar(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16711680,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
    var h = new U,
      c = new I(2 * o * 3, 3);
    h.addAttribute("position", c), Te.call(this, h, new Se({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Lr(t, e) {
    M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
    for (var i = new U, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; 32 > r; r++, a++) {
      var o = r / 32 * Math.PI * 2,
        s = a / 32 * Math.PI * 2;
      n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
    }
    i.addAttribute("position", new I(n, 3));
    var h = new Se({
      fog: !1
    });
    this.cone = new Te(i, h), this.add(this.cone), this.update()
  }

  function Cr(t) {
    var e = [];
    t && t.isBone && e.push(t);
    for (var i = 0; i < t.children.length; i++) e.push.apply(e, Cr(t.children[i]));
    return e
  }

  function Pr(t) {
    for (var e = Cr(t), i = new U, n = [], r = [], a = new v(0, 0, 1), o = new v(0, 1, 0), s = 0; s < e.length; s++) {
      var h = e[s];
      h.parent && h.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
    }
    i.addAttribute("position", new I(n, 3)), i.addAttribute("color", new I(r, 3));
    var c = new Se({
      vertexColors: Qr,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    Te.call(this, i, c), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
  }

  function Rr(t, e, i) {
    this.light = t, this.light.updateMatrixWorld(), this.color = i;
    var n = new Ci(e, 4, 2),
      r = new W({
        wireframe: !0,
        fog: !1
      });
    X.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
  }

  function Ir(t, e, i, n) {
    t = t || 10, e = e || 10, i = new v(void 0 !== i ? i : 4473924), n = new v(void 0 !== n ? n : 8947848);
    for (var r = e / 2, a = t / e, o = t / 2, s = [], h = [], c = 0, l = 0, u = -o; e >= c; c++, u += a) {
      s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
      var p = c === r ? i : n;
      p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3, p.toArray(h, l), l += 3
    }
    var d = new U;
    d.addAttribute("position", new I(s, 3)), d.addAttribute("color", new I(h, 3));
    var f = new Se({
      vertexColors: Qr
    });
    Te.call(this, d, f)
  }

  function Nr(t, e, i, n, r, a) {
    t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new v(void 0 !== r ? r : 4473924), a = new v(void 0 !== a ? a : 8947848);
    var o, s, h, c, l, u, p, d = [],
      f = [];
    for (c = 0; e >= c; c++) h = c / e * 2 * Math.PI, o = Math.sin(h) * t, s = Math.cos(h) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & c ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
    for (c = 0; i >= c; c++)
      for (p = 1 & c ? r : a, u = t - t / i * c, l = 0; n > l; l++) h = l / n * 2 * Math.PI, o = Math.sin(h) * u, s = Math.cos(h) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), h = (l + 1) / n * 2 * Math.PI, o = Math.sin(h) * u, s = Math.cos(h) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
    var m = new U;
    m.addAttribute("position", new I(d, 3)), m.addAttribute("color", new I(f, 3));
    var g = new Se({
      vertexColors: Qr
    });
    Te.call(this, m, g)
  }

  function Or(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16776960,
      a = void 0 !== n ? n : 1,
      o = 0,
      s = this.object.geometry;
    s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    var h = new U,
      c = new I(2 * o * 3, 3);
    h.addAttribute("position", c), Te.call(this, h, new Se({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Dr(t, e, i) {
    M.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
    var n = new U;
    n.addAttribute("position", new I([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
    var r = new Se({
      fog: !1
    });
    this.lightPlane = new Ee(n, r), this.add(this.lightPlane), (n = new U).addAttribute("position", new I([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ee(n, r), this.add(this.targetLine), this.update()
  }

  function Ur(t) {
    function e(t, e, n) {
      i(t, n), i(e, n)
    }

    function i(t, e) {
      a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1)
    }
    var n = new U,
      r = new Se({
        color: 16777215,
        vertexColors: Kr
      }),
      a = [],
      o = [],
      s = {},
      h = new v(16755200),
      c = new v(16711680),
      l = new v(43775),
      u = new v(16777215),
      p = new v(3355443);
    e("n1", "n2", h), e("n2", "n4", h), e("n4", "n3", h), e("n3", "n1", h), e("f1", "f2", h), e("f2", "f4", h), e("f4", "f3", h), e("f3", "f1", h), e("n1", "f1", h), e("n2", "f2", h), e("n3", "f3", h), e("n4", "f4", h), e("p", "n1", c), e("p", "n2", c), e("p", "n3", c), e("p", "n4", c), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", u), e("p", "c", p), e("cn1", "cn2", p), e("cn3", "cn4", p), e("cf1", "cf2", p), e("cf3", "cf4", p), n.addAttribute("position", new I(a, 3)), n.addAttribute("color", new I(o, 3)), Te.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
  }

  function zr(t, e) {
    this.object = t, void 0 === e && (e = 16776960);
    var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      n = new Float32Array(24),
      r = new U;
    r.setIndex(new S(i, 1)), r.addAttribute("position", new S(n, 3)), Te.call(this, r, new Se({
      color: e
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Br(t, e) {
    this.type = "Box3Helper", this.box = t;
    var i = void 0 !== e ? e : 16776960,
      n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      r = new U;
    r.setIndex(new S(n, 1)), r.addAttribute("position", new I([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Te.call(this, r, new Se({
      color: i
    })), this.geometry.computeBoundingSphere()
  }

  function Fr(t, e, i) {
    this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
    var n = void 0 !== i ? i : 16776960,
      r = new U;
    r.addAttribute("position", new I([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Ee.call(this, r, new Se({
      color: n
    }));
    var a = new U;
    a.addAttribute("position", new I([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new X(a, new W({
      color: n,
      opacity: .2,
      transparent: !0,
      depthWrite: !1
    })))
  }

  function Gr(t, e, i, n, r, a) {
    M.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === ph && ((ph = new U).addAttribute("position", new I([0, 0, 0, 0, 1, 0], 3)), (dh = new Fi(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Ee(ph, new Se({
      color: n
    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new X(dh, new W({
      color: n
    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
  }

  function kr(t) {
    var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      i = new U;
    i.addAttribute("position", new I(e, 3)), i.addAttribute("color", new I([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    var n = new Se({
      vertexColors: Qr
    });
    Te.call(this, i, n)
  }
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
  }), void 0 === Math.sign && (Math.sign = function(t) {
    return 0 > t ? -1 : t > 0 ? 1 : +t
  }), "name" in Function.prototype == 0 && Object.defineProperty(Function.prototype, "name", {
    get: function() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
    }
  }), String.prototype.trimEnd || (String.prototype.trimEnd = function() {
    return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + "$", "g"), "")
  }), void 0 === Object.assign && (Object.assign = function(t) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(t), i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      if (null != n)
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }), Object.assign(e.prototype, {
    addEventListener: function(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var i = this._listeners;
      void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
    },
    hasEventListener: function(t, e) {
      if (void 0 === this._listeners) return !1;
      var i = this._listeners;
      return void 0 !== i[t] && -1 !== i[t].indexOf(e)
    },
    removeEventListener: function(t, e) {
      if (void 0 !== this._listeners) {
        var i = this._listeners[t];
        if (void 0 !== i) {
          var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
        }
      }
    },
    dispatchEvent: function(t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (var i = e.slice(0), n = 0, r = i.length; r > n; n++) i[n].call(this, t)
        }
      }
    }
  });
  var Vr = 0,
    Hr = 1,
    jr = 2,
    Wr = 1,
    Xr = 2,
    qr = 0,
    Yr = 1,
    Jr = 2,
    Zr = 0,
    Kr = 1,
    Qr = 2,
    $r = 0,
    ta = 1,
    ea = 2,
    ia = 3,
    na = 4,
    ra = 5,
    aa = 100,
    oa = 101,
    sa = 102,
    ha = 103,
    ca = 104,
    la = 200,
    ua = 201,
    pa = 202,
    da = 203,
    fa = 204,
    ma = 205,
    va = 206,
    ga = 207,
    ya = 208,
    xa = 209,
    _a = 210,
    ba = 0,
    Ma = 1,
    wa = 2,
    Sa = 3,
    Ea = 4,
    Ta = 5,
    Aa = 6,
    La = 7,
    Ca = 0,
    Pa = 1,
    Ra = 2,
    Ia = 0,
    Na = 1,
    Oa = 2,
    Da = 3,
    Ua = 4,
    za = 300,
    Ba = 301,
    Fa = 302,
    Ga = 303,
    ka = 304,
    Va = 305,
    Ha = 306,
    ja = 307,
    Wa = 1e3,
    Xa = 1001,
    qa = 1002,
    Ya = 1003,
    Ja = 1004,
    Za = 1005,
    Ka = 1006,
    Qa = 1007,
    $a = 1008,
    to = 1009,
    eo = 1010,
    io = 1011,
    no = 1012,
    ro = 1013,
    ao = 1014,
    oo = 1015,
    so = 1016,
    ho = 1017,
    co = 1018,
    lo = 1019,
    uo = 1020,
    po = 1021,
    fo = 1022,
    mo = 1023,
    vo = 1024,
    go = 1025,
    yo = mo,
    xo = 1026,
    _o = 1027,
    bo = 33776,
    Mo = 33777,
    wo = 33778,
    So = 33779,
    Eo = 35840,
    To = 35841,
    Ao = 35842,
    Lo = 35843,
    Co = 36196,
    Po = 37808,
    Ro = 37809,
    Io = 37810,
    No = 37811,
    Oo = 37812,
    Do = 37813,
    Uo = 37814,
    zo = 37815,
    Bo = 37816,
    Fo = 37817,
    Go = 37818,
    ko = 37819,
    Vo = 37820,
    Ho = 37821,
    jo = 2201,
    Wo = 2300,
    Xo = 2301,
    qo = 2302,
    Yo = 2400,
    Jo = 2401,
    Zo = 2402,
    Ko = 0,
    Qo = 1,
    $o = 2,
    ts = 3e3,
    es = 3001,
    is = 3007,
    ns = 3002,
    rs = 3004,
    as = 3005,
    os = 3006,
    ss = 3200,
    hs = 3201,
    cs = 0,
    ls = 1,
    us = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function() {
        for (var t = [], e = 0; 256 > e; e++) t[e] = (16 > e ? "0" : "") + e.toString(16);
        return function() {
          var e = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0,
            r = 4294967295 * Math.random() | 0;
          return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
        }
      }(),
      clamp: function(t, e, i) {
        return e > t ? e : t > i ? i : t
      },
      euclideanModulo: function(t, e) {
        return (t % e + e) % e
      },
      mapLinear: function(t, e, i, n, r) {
        return n + (t - e) * (r - n) / (i - e)
      },
      lerp: function(t, e, i) {
        return (1 - i) * t + i * e
      },
      smoothstep: function(t, e, i) {
        return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
      },
      smootherstep: function(t, e, i) {
        return e >= t ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
      },
      randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
      },
      randFloat: function(t, e) {
        return t + Math.random() * (e - t)
      },
      randFloatSpread: function(t) {
        return t * (.5 - Math.random())
      },
      degToRad: function(t) {
        return t * us.DEG2RAD
      },
      radToDeg: function(t) {
        return t * us.RAD2DEG
      },
      isPowerOfTwo: function(t) {
        return !(t & t - 1) && 0 !== t
      },
      ceilPowerOfTwo: function(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      },
      floorPowerOfTwo: function(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }
    };
  Object.defineProperties(i.prototype, {
    width: {
      get: function() {
        return this.x
      },
      set: function(t) {
        this.x = t
      }
    },
    height: {
      get: function() {
        return this.y
      },
      set: function(t) {
        this.y = t
      }
    }
  }), Object.assign(i.prototype, {
    isVector2: !0,
    set: function(t, e) {
      return this.x = t, this.y = e, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this
    },
    multiply: function(t) {
      return this.x *= t.x, this.y *= t.y, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = t.elements;
      return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    },
    clampScalar: function() {
      var t = new i,
        e = new i;
      return function(i, n) {
        return t.set(i, i), e.set(n, n), this.clamp(t, e)
      }
    }(),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y
    },
    cross: function(t) {
      return this.x * t.y - this.y * t.x
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    angle: function() {
      var t = Math.atan2(this.y, this.x);
      return 0 > t && (t += 2 * Math.PI), t
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
    },
    rotateAround: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
    }
  });
  var ps = new a,
    ds = new a,
    fs = new a;
  Object.assign(n.prototype, {
    isMatrix4: !0,
    set: function(t, e, i, n, r, a, o, s, h, c, l, u, p, d, f, m) {
      var v = this.elements;
      return v[0] = t, v[4] = e, v[8] = i, v[12] = n, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = h, v[6] = c, v[10] = l, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new n).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    },
    copyPosition: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
    },
    extractBasis: function(t, e, i) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
    },
    makeBasis: function(t, e, i) {
      return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: function() {
      var t = new a;
      return function(e) {
        var i = this.elements,
          n = e.elements,
          r = 1 / t.setFromMatrixColumn(e, 0).length(),
          a = 1 / t.setFromMatrixColumn(e, 1).length(),
          o = 1 / t.setFromMatrixColumn(e, 2).length();
        return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[3] = 0, i[4] = n[4] * a, i[5] = n[5] * a, i[6] = n[6] * a, i[7] = 0, i[8] = n[8] * o, i[9] = n[9] * o, i[10] = n[10] * o, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this
      }
    }(),
    makeRotationFromEuler: function(t) {
      t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z,
        a = Math.cos(i),
        o = Math.sin(i),
        s = Math.cos(n),
        h = Math.sin(n),
        c = Math.cos(r),
        l = Math.sin(r);
      if ("XYZ" === t.order) {
        var u = a * c,
          p = a * l,
          d = o * c,
          f = o * l;
        e[0] = s * c, e[4] = -s * l, e[8] = h, e[1] = p + d * h, e[5] = u - f * h, e[9] = -o * s, e[2] = f - u * h, e[6] = d + p * h, e[10] = a * s
      } else if ("YXZ" === t.order) {
        var m = s * c,
          v = s * l,
          g = h * c,
          y = h * l;
        e[0] = m + y * o, e[4] = g * o - v, e[8] = a * h, e[1] = a * l, e[5] = a * c, e[9] = -o, e[2] = v * o - g, e[6] = y + m * o, e[10] = a * s
      } else if ("ZXY" === t.order) {
        m = s * c, v = s * l, g = h * c, y = h * l;
        e[0] = m - y * o, e[4] = -a * l, e[8] = g + v * o, e[1] = v + g * o, e[5] = a * c, e[9] = y - m * o, e[2] = -a * h, e[6] = o, e[10] = a * s
      } else if ("ZYX" === t.order) {
        u = a * c, p = a * l, d = o * c, f = o * l;
        e[0] = s * c, e[4] = d * h - p, e[8] = u * h + f, e[1] = s * l, e[5] = f * h + u, e[9] = p * h - d, e[2] = -h, e[6] = o * s, e[10] = a * s
      } else if ("YZX" === t.order) {
        var x = a * s,
          _ = a * h,
          b = o * s,
          M = o * h;
        e[0] = s * c, e[4] = M - x * l, e[8] = b * l + _, e[1] = l, e[5] = a * c, e[9] = -o * c, e[2] = -h * c, e[6] = _ * l + b, e[10] = x - M * l
      } else if ("XZY" === t.order) {
        x = a * s, _ = a * h, b = o * s, M = o * h;
        e[0] = s * c, e[4] = -l, e[8] = h * c, e[1] = x * l + M, e[5] = a * c, e[9] = _ * l - b, e[2] = b * l - _, e[6] = o * c, e[10] = M * l + x
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    makeRotationFromQuaternion: function(t) {
      var e = this.elements,
        i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        o = i + i,
        s = n + n,
        h = r + r,
        c = i * o,
        l = i * s,
        u = i * h,
        p = n * s,
        d = n * h,
        f = r * h,
        m = a * o,
        v = a * s,
        g = a * h;
      return e[0] = 1 - (p + f), e[4] = l - g, e[8] = u + v, e[1] = l + g, e[5] = 1 - (c + f), e[9] = d - m, e[2] = u - v, e[6] = d + m, e[10] = 1 - (c + p), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    lookAt: function(t, e, i) {
      var n = this.elements,
        r = ps,
        a = ds,
        o = fs;
      return o.subVectors(t, e), 0 === o.lengthSq() && (o.z = 1), o.normalize(), r.crossVectors(i, o), 0 === r.lengthSq() && (1 === Math.abs(i.z) ? o.x += 1e-4 : o.z += 1e-4, o.normalize(), r.crossVectors(i, o)), r.normalize(), a.crossVectors(o, r), n[0] = r.x, n[4] = a.x, n[8] = o.x, n[1] = r.y, n[5] = a.y, n[9] = o.y, n[2] = r.z, n[6] = a.z, n[10] = o.z, this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[4],
        s = i[8],
        h = i[12],
        c = i[1],
        l = i[5],
        u = i[9],
        p = i[13],
        d = i[2],
        f = i[6],
        m = i[10],
        v = i[14],
        g = i[3],
        y = i[7],
        x = i[11],
        _ = i[15],
        b = n[0],
        M = n[4],
        w = n[8],
        S = n[12],
        E = n[1],
        T = n[5],
        A = n[9],
        L = n[13],
        C = n[2],
        P = n[6],
        R = n[10],
        I = n[14],
        N = n[3],
        O = n[7],
        D = n[11],
        U = n[15];
      return r[0] = a * b + o * E + s * C + h * N, r[4] = a * M + o * T + s * P + h * O, r[8] = a * w + o * A + s * R + h * D, r[12] = a * S + o * L + s * I + h * U, r[1] = c * b + l * E + u * C + p * N, r[5] = c * M + l * T + u * P + p * O, r[9] = c * w + l * A + u * R + p * D, r[13] = c * S + l * L + u * I + p * U, r[2] = d * b + f * E + m * C + v * N, r[6] = d * M + f * T + m * P + v * O, r[10] = d * w + f * A + m * R + v * D, r[14] = d * S + f * L + m * I + v * U, r[3] = g * b + y * E + x * C + _ * N, r[7] = g * M + y * T + x * P + _ * O, r[11] = g * w + y * A + x * R + _ * D, r[15] = g * S + y * L + x * I + _ * U, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    },
    applyToBufferAttribute: function() {
      var t = new a;
      return function(e) {
        for (var i = 0, n = e.count; n > i; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
        return e
      }
    }(),
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[4],
        n = t[8],
        r = t[12],
        a = t[1],
        o = t[5],
        s = t[9],
        h = t[13],
        c = t[2],
        l = t[6],
        u = t[10],
        p = t[14];
      return t[3] * (+r * s * l - n * h * l - r * o * u + i * h * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * h * u + r * a * u - n * a * p + n * h * c - r * s * c) + t[11] * (+e * h * l - e * o * p - r * a * l + i * a * p + r * o * c - i * h * c) + t[15] * (-n * o * c - e * s * l + e * o * u + n * a * l - i * a * u + i * s * c)
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    },
    setPosition: function(t) {
      var e = this.elements;
      return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
    },
    getInverse: function(t, e) {
      var i = this.elements,
        n = t.elements,
        r = n[0],
        a = n[1],
        o = n[2],
        s = n[3],
        h = n[4],
        c = n[5],
        l = n[6],
        u = n[7],
        p = n[8],
        d = n[9],
        f = n[10],
        m = n[11],
        v = n[12],
        g = n[13],
        y = n[14],
        x = n[15],
        _ = d * y * u - g * f * u + g * l * m - c * y * m - d * l * x + c * f * x,
        b = v * f * u - p * y * u - v * l * m + h * y * m + p * l * x - h * f * x,
        M = p * g * u - v * d * u + v * c * m - h * g * m - p * c * x + h * d * x,
        w = v * d * l - p * g * l - v * c * f + h * g * f + p * c * y - h * d * y,
        S = r * _ + a * b + o * M + s * w;
      if (0 === S) {
        var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === e) throw new Error(E);
        return console.warn(E), this.identity()
      }
      var T = 1 / S;
      return i[0] = _ * T, i[1] = (g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x) * T, i[2] = (c * y * s - g * l * s + g * o * u - a * y * u - c * o * x + a * l * x) * T, i[3] = (d * l * s - c * f * s - d * o * u + a * f * u + c * o * m - a * l * m) * T, i[4] = b * T, i[5] = (p * y * s - v * f * s + v * o * m - r * y * m - p * o * x + r * f * x) * T, i[6] = (v * l * s - h * y * s - v * o * u + r * y * u + h * o * x - r * l * x) * T, i[7] = (h * f * s - p * l * s + p * o * u - r * f * u - h * o * m + r * l * m) * T, i[8] = M * T, i[9] = (v * d * s - p * g * s - v * a * m + r * g * m + p * a * x - r * d * x) * T, i[10] = (h * g * s - v * c * s + v * a * u - r * g * u - h * a * x + r * c * x) * T, i[11] = (p * c * s - h * d * s - p * a * u + r * d * u + h * a * m - r * c * m) * T, i[12] = w * T, i[13] = (p * g * o - v * d * o + v * a * f - r * g * f - p * a * y + r * d * y) * T, i[14] = (v * c * o - h * g * o - v * a * l + r * g * l + h * a * y - r * c * y) * T, i[15] = (h * d * o - p * c * o + p * a * l - r * d * l - h * a * f + r * c * f) * T, this
    },
    scale: function(t) {
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z;
      return 1 === i && 1 === n && 1 === r || (e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r), this
    },
    getMaxScaleOnAxis: function() {
      var t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, i, n))
    },
    makeTranslation: function(t, e, i) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    },
    makeRotationX: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = 1 - i,
        a = t.x,
        o = t.y,
        s = t.z,
        h = r * a,
        c = r * o;
      return this.set(h * a + i, h * o - n * s, h * s + n * o, 0, h * o + n * s, c * o + i, c * s - n * a, 0, h * s - n * o, c * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
    },
    makeScale: function(t, e, i) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    },
    makeShear: function(t, e, i) {
      return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
    },
    compose: function(t, e, i) {
      var n = this.elements,
        r = e._x,
        a = e._y,
        o = e._z,
        s = e._w,
        h = r + r,
        c = a + a,
        l = o + o,
        u = r * h,
        p = r * c,
        d = r * l,
        f = a * c,
        m = a * l,
        v = o * l,
        g = s * h,
        y = s * c,
        x = s * l,
        _ = i.x,
        b = i.y,
        M = i.z;
      return n[0] = (1 - (f + v)) * _, n[1] = (p + x) * _, n[2] = (d - y) * _, n[3] = 0, n[4] = (p - x) * b, n[5] = (1 - (u + v)) * b, n[6] = (m + g) * b, n[7] = 0, n[8] = (d + y) * M, n[9] = (m - g) * M, n[10] = (1 - (u + f)) * M, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
    },
    decompose: function() {
      var t = new a,
        e = new n;
      return function(i, n, r) {
        var a = this.elements,
          o = t.set(a[0], a[1], a[2]).length(),
          s = t.set(a[4], a[5], a[6]).length(),
          h = t.set(a[8], a[9], a[10]).length();
        0 > this.determinant() && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], e.copy(this);
        var c = 1 / o,
          l = 1 / s,
          u = 1 / h;
        return e.elements[0] *= c, e.elements[1] *= c, e.elements[2] *= c, e.elements[4] *= l, e.elements[5] *= l, e.elements[6] *= l, e.elements[8] *= u, e.elements[9] *= u, e.elements[10] *= u, n.setFromRotationMatrix(e), r.x = o, r.y = s, r.z = h, this
      }
    }(),
    makePerspective: function(t, e, i, n, r, a) {
      void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var o = this.elements,
        s = 2 * r / (e - t),
        h = 2 * r / (i - n),
        c = (e + t) / (e - t),
        l = (i + n) / (i - n),
        u = -(a + r) / (a - r),
        p = -2 * a * r / (a - r);
      return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = h, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makeOrthographic: function(t, e, i, n, r, a) {
      var o = this.elements,
        s = 1 / (e - t),
        h = 1 / (i - n),
        c = 1 / (a - r),
        l = (e + t) * s,
        u = (i + n) * h,
        p = (a + r) * c;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * h, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    equals: function(t) {
      for (var e = this.elements, i = t.elements, n = 0; 16 > n; n++)
        if (e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; 16 > i; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
    }
  }), Object.assign(r, {
    slerp: function(t, e, i, n) {
      return i.copy(t).slerp(e, n)
    },
    slerpFlat: function(t, e, i, n, r, a, o) {
      var s = i[n + 0],
        h = i[n + 1],
        c = i[n + 2],
        l = i[n + 3],
        u = r[a + 0],
        p = r[a + 1],
        d = r[a + 2],
        f = r[a + 3];
      if (l !== f || s !== u || h !== p || c !== d) {
        var m = 1 - o,
          v = s * u + h * p + c * d + l * f,
          g = v >= 0 ? 1 : -1,
          y = 1 - v * v;
        if (y > Number.EPSILON) {
          var x = Math.sqrt(y),
            _ = Math.atan2(x, v * g);
          m = Math.sin(m * _) / x, o = Math.sin(o * _) / x
        }
        var b = o * g;
        if (s = s * m + u * b, h = h * m + p * b, c = c * m + d * b, l = l * m + f * b, m === 1 - o) {
          var M = 1 / Math.sqrt(s * s + h * h + c * c + l * l);
          s *= M, h *= M, c *= M, l *= M
        }
      }
      t[e] = s, t[e + 1] = h, t[e + 2] = c, t[e + 3] = l
    }
  }), Object.defineProperties(r.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    w: {
      get: function() {
        return this._w
      },
      set: function(t) {
        this._w = t, this.onChangeCallback()
      }
    }
  }), Object.assign(r.prototype, {
    isQuaternion: !0,
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
    },
    setFromEuler: function(t, e) {
      if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t.order,
        o = Math.cos,
        s = Math.sin,
        h = o(.5 * i),
        c = o(.5 * n),
        l = o(.5 * r),
        u = s(.5 * i),
        p = s(.5 * n),
        d = s(.5 * r);
      return "XYZ" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l - u * p * d) : "YXZ" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l + u * p * d) : "ZXY" === a ? (this._x = u * c * l - h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l - u * p * d) : "ZYX" === a ? (this._x = u * c * l - h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l + u * p * d) : "YZX" === a ? (this._x = u * c * l + h * p * d, this._y = h * p * l + u * c * d, this._z = h * c * d - u * p * l, this._w = h * c * l - u * p * d) : "XZY" === a && (this._x = u * c * l - h * p * d, this._y = h * p * l - u * c * d, this._z = h * c * d + u * p * l, this._w = h * c * l + u * p * d), !1 !== e && this.onChangeCallback(), this
    },
    setFromAxisAngle: function(t, e) {
      var i = .5 * e,
        n = Math.sin(i);
      return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t) {
      var e, i = t.elements,
        n = i[0],
        r = i[4],
        a = i[8],
        o = i[1],
        s = i[5],
        h = i[9],
        c = i[2],
        l = i[6],
        u = i[10],
        p = n + s + u;
      return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (l - h) * e, this._y = (a - c) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - h) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + c) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - c) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (h + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + c) / e, this._y = (h + l) / e, this._z = .25 * e), this.onChangeCallback(), this
    },
    setFromUnitVectors: function() {
      var t, e = new a;
      return function(i, n) {
        return void 0 === e && (e = new a), 1e-6 > (t = i.dot(n) + 1) ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
      }
    }(),
    angleTo: function(t) {
      return 2 * Math.acos(Math.abs(us.clamp(this.dot(t), -1, 1)))
    },
    rotateTowards: function(t, e) {
      var i = this.angleTo(t);
      if (0 === i) return this;
      var n = Math.min(1, e / i);
      return this.slerp(t, n), this
    },
    inverse: function() {
      return this.conjugate()
    },
    conjugate: function() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    },
    dot: function(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    },
    lengthSq: function() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
      var t = this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / Math.sqrt(t), this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
    },
    premultiply: function(t) {
      return this.multiplyQuaternions(t, this)
    },
    multiplyQuaternions: function(t, e) {
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        o = e._x,
        s = e._y,
        h = e._z,
        c = e._w;
      return this._x = i * c + a * o + n * h - r * s, this._y = n * c + a * s + r * o - i * h, this._z = r * c + a * h + i * s - n * o, this._w = a * c - i * o - n * s - r * h, this.onChangeCallback(), this
    },
    slerp: function(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var i = this._x,
        n = this._y,
        r = this._z,
        a = this._w,
        o = a * t._w + i * t._x + n * t._y + r * t._z;
      if (0 > o ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
      var s = 1 - o * o;
      if (s <= Number.EPSILON) {
        var h = 1 - e;
        return this._w = h * a + e * this._w, this._x = h * i + e * this._x, this._y = h * n + e * this._y, this._z = h * r + e * this._z, this.normalize()
      }
      var c = Math.sqrt(s),
        l = Math.atan2(c, o),
        u = Math.sin((1 - e) * l) / c,
        p = Math.sin(e * l) / c;
      return this._w = a * u + this._w * p, this._x = i * u + this._x * p, this._y = n * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this
    },
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(a.prototype, {
    isVector3: !0,
    set: function(t, e, i) {
      return this.x = t, this.y = e, this.z = i, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    },
    multiply: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this
    },
    multiplyVectors: function(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    },
    applyEuler: function() {
      var t = new r;
      return function(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
      }
    }(),
    applyAxisAngle: function() {
      var t = new r;
      return function(e, i) {
        return this.applyQuaternion(t.setFromAxisAngle(e, i))
      }
    }(),
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
      return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
    },
    applyQuaternion: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.x,
        a = t.y,
        o = t.z,
        s = t.w,
        h = s * e + a * n - o * i,
        c = s * i + o * e - r * n,
        l = s * n + r * i - a * e,
        u = -r * e - a * i - o * n;
      return this.x = h * s + u * -r + c * -o - l * -a, this.y = c * s + u * -a + l * -r - h * -o, this.z = l * s + u * -o + h * -a - c * -r, this
    },
    project: function(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    },
    unproject: function() {
      var t = new n;
      return function(e) {
        return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld)
      }
    }(),
    transformDirection: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    },
    divideScalar: function(t) {
      var e = 1 / t;
      return this.x *= e, this.y *= e, this.z *= e, this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    },
    clampScalar: function() {
      var t = new a,
        e = new a;
      return function(i, n) {
        return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
      }
    }(),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
      var t = this.x * this.x + this.y * this.y + this.z * this.z,
        e = 0 === t ? 1 : 1 / Math.sqrt(t);
      return this.x *= e, this.y *= e, this.z *= e, this
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    cross: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
    },
    crossVectors: function(t, e) {
      var i = t.x,
        n = t.y,
        r = t.z,
        a = e.x,
        o = e.y,
        s = e.z;
      return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
    },
    projectOnVector: function(t) {
      var e = t.dot(this) / t.lengthSq();
      return this.copy(t).multiplyScalar(e)
    },
    projectOnPlane: function() {
      var t = new a;
      return function(e) {
        return t.copy(this).projectOnVector(e), this.sub(t)
      }
    }(),
    reflect: function() {
      var t = new a;
      return function(e) {
        return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
      }
    }(),
    angleTo: function(t) {
      var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
      return Math.acos(us.clamp(e, -1, 1))
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y,
        n = this.z - t.z;
      return e * e + i * i + n * n
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    },
    setFromSpherical: function(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    },
    setFromSphericalCoords: function(t, e, i) {
      var n = Math.sin(e) * t;
      return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
    },
    setFromCylindrical: function(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    },
    setFromCylindricalCoords: function(t, e, i) {
      return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
    },
    setFromMatrixPosition: function(t) {
      var e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this
    },
    setFromMatrixScale: function(t) {
      var e = this.setFromMatrixColumn(t, 0).length(),
        i = this.setFromMatrixColumn(t, 1).length(),
        n = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = i, this.z = n, this
    },
    setFromMatrixColumn: function(t, e) {
      return this.fromArray(t.elements, 4 * e)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }
  }), Object.assign(o.prototype, {
    isMatrix3: !0,
    set: function(t, e, i, n, r, a, o, s, h) {
      var c = this.elements;
      return c[0] = t, c[1] = n, c[2] = o, c[3] = e, c[4] = r, c[5] = s, c[6] = i, c[7] = a, c[8] = h, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new this.constructor).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    },
    setFromMatrix4: function(t) {
      var e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    },
    applyToBufferAttribute: function() {
      var t = new a;
      return function(e) {
        for (var i = 0, n = e.count; n > i; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
        return e
      }
    }(),
    multiply: function(t) {
      return this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        o = i[3],
        s = i[6],
        h = i[1],
        c = i[4],
        l = i[7],
        u = i[2],
        p = i[5],
        d = i[8],
        f = n[0],
        m = n[3],
        v = n[6],
        g = n[1],
        y = n[4],
        x = n[7],
        _ = n[2],
        b = n[5],
        M = n[8];
      return r[0] = a * f + o * g + s * _, r[3] = a * m + o * y + s * b, r[6] = a * v + o * x + s * M, r[1] = h * f + c * g + l * _, r[4] = h * m + c * y + l * b, r[7] = h * v + c * x + l * M, r[2] = u * f + p * g + d * _, r[5] = u * m + p * y + d * b, r[8] = u * v + p * x + d * M, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    },
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        s = t[6],
        h = t[7],
        c = t[8];
      return e * a * c - e * o * h - i * r * c + i * o * s + n * r * h - n * a * s
    },
    getInverse: function(t, e) {
      t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
      var i = t.elements,
        n = this.elements,
        r = i[0],
        a = i[1],
        o = i[2],
        s = i[3],
        h = i[4],
        c = i[5],
        l = i[6],
        u = i[7],
        p = i[8],
        d = p * h - c * u,
        f = c * l - p * s,
        m = u * s - h * l,
        v = r * d + a * f + o * m;
      if (0 === v) {
        var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
        if (!0 === e) throw new Error(g);
        return console.warn(g), this.identity()
      }
      var y = 1 / v;
      return n[0] = d * y, n[1] = (o * u - p * a) * y, n[2] = (c * a - o * h) * y, n[3] = f * y, n[4] = (p * r - o * l) * y, n[5] = (o * s - c * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (h * r - a * s) * y, this
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    },
    getNormalMatrix: function(t) {
      return this.setFromMatrix4(t).getInverse(this).transpose()
    },
    transposeIntoArray: function(t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    },
    setUvTransform: function(t, e, i, n, r, a, o) {
      var s = Math.cos(r),
        h = Math.sin(r);
      this.set(i * s, i * h, -i * (s * a + h * o) + a + t, -n * h, n * s, -n * (-h * a + s * o) + o + e, 0, 0, 1)
    },
    scale: function(t, e) {
      var i = this.elements;
      return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
    },
    rotate: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t),
        n = this.elements,
        r = n[0],
        a = n[3],
        o = n[6],
        s = n[1],
        h = n[4],
        c = n[7];
      return n[0] = e * r + i * s, n[3] = e * a + i * h, n[6] = e * o + i * c, n[1] = -i * r + e * s, n[4] = -i * a + e * h, n[7] = -i * o + e * c, this
    },
    translate: function(t, e) {
      var i = this.elements;
      return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
    },
    equals: function(t) {
      for (var e = this.elements, i = t.elements, n = 0; 9 > n; n++)
        if (e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; 9 > i; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
    }
  });
  var ms = {
      getDataURL: function(t) {
        var e;
        if (t instanceof HTMLCanvasElement) e = t;
        else {
          (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height;
          var i = e.getContext("2d");
          t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height)
        }
        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
      }
    },
    vs = 0;
  s.DEFAULT_IMAGE = void 0, s.DEFAULT_MAPPING = za, s.prototype = Object.assign(Object.create(e.prototype), {
    constructor: s,
    isTexture: !0,
    updateMatrix: function() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
    },
    toJSON: function(t) {
      var e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var i = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY
      };
      if (void 0 !== this.image) {
        var n = this.image;
        if (void 0 === n.uuid && (n.uuid = us.generateUUID()), !e && void 0 === t.images[n.uuid]) {
          var r;
          if (Array.isArray(n)) {
            r = [];
            for (var a = 0, o = n.length; o > a; a++) r.push(ms.getDataURL(n[a]))
          } else r = ms.getDataURL(n);
          t.images[n.uuid] = {
            uuid: n.uuid,
            url: r
          }
        }
        i.image = n.uuid
      }
      return e || (t.textures[this.uuid] = i), i
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    },
    transformUv: function(t) {
      if (this.mapping !== za) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case Wa:
          t.x = t.x - Math.floor(t.x);
          break;
        case Xa:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case qa:
          t.x = 1 === Math.abs(Math.floor(t.x) % 2) ? Math.ceil(t.x) - t.x : t.x - Math.floor(t.x)
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case Wa:
          t.y = t.y - Math.floor(t.y);
          break;
        case Xa:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case qa:
          t.y = 1 === Math.abs(Math.floor(t.y) % 2) ? Math.ceil(t.y) - t.y : t.y - Math.floor(t.y)
      }
      return this.flipY && (t.y = 1 - t.y), t
    }
  }), Object.defineProperty(s.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(h.prototype, {
    isVector4: !0,
    set: function(t, e, i, n) {
      return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setW: function(t) {
      return this.w = t, this
    },
    setComponent: function(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    },
    add: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = this.w,
        a = t.elements;
      return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    setAxisAngleFromQuaternion: function(t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return 1e-4 > e ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    },
    setAxisAngleFromRotationMatrix: function(t) {
      var e, i, n, r, a = .01,
        o = .1,
        s = t.elements,
        h = s[0],
        c = s[4],
        l = s[8],
        u = s[1],
        p = s[5],
        d = s[9],
        f = s[2],
        m = s[6],
        v = s[10];
      if (Math.abs(c - u) < a && Math.abs(l - f) < a && Math.abs(d - m) < a) {
        if (Math.abs(c + u) < o && Math.abs(l + f) < o && Math.abs(d + m) < o && Math.abs(h + p + v - 3) < o) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        var g = (h + 1) / 2,
          y = (p + 1) / 2,
          x = (v + 1) / 2,
          _ = (c + u) / 4,
          b = (l + f) / 4,
          M = (d + m) / 4;
        return g > y && g > x ? a > g ? (i = 0, n = .707106781, r = .707106781) : (n = _ / (i = Math.sqrt(g)), r = b / i) : y > x ? a > y ? (i = .707106781, n = 0, r = .707106781) : (i = _ / (n = Math.sqrt(y)), r = M / n) : a > x ? (i = .707106781, n = .707106781, r = 0) : (i = b / (r = Math.sqrt(x)), n = M / r), this.set(i, n, r, e), this
      }
      var w = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (u - c) * (u - c));
      return Math.abs(w) < .001 && (w = 1), this.x = (m - d) / w, this.y = (l - f) / w, this.z = (u - c) / w, this.w = Math.acos((h + p + v - 1) / 2), this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    },
    clampScalar: function() {
      var t, e;
      return function(i, n) {
        return void 0 === t && (t = new h, e = new h), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
      }
    }(),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    },
    fromBufferAttribute: function(t, e, i) {
      return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }
  }), c.prototype = Object.assign(Object.create(e.prototype), {
    constructor: c,
    isWebGLRenderTarget: !0,
    setSize: function(t, e) {
      (this.width !== t || this.height !== e) && (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), l.prototype = Object.create(c.prototype), l.prototype.constructor = l, l.prototype.isWebGLRenderTargetCube = !0, u.prototype = Object.create(s.prototype), u.prototype.constructor = u, u.prototype.isDataTexture = !0, Object.assign(p.prototype, {
    isBox3: !0,
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromArray: function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, h = t.length; h > s; s += 3) {
        var c = t[s],
          l = t[s + 1],
          u = t[s + 2];
        e > c && (e = c), i > l && (i = l), n > u && (n = u), c > r && (r = c), l > a && (a = l), u > o && (o = u)
      }
      return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromBufferAttribute: function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, h = t.count; h > s; s++) {
        var c = t.getX(s),
          l = t.getY(s),
          u = t.getZ(s);
        e > c && (e = c), i > l && (i = l), n > u && (n = u), c > r && (r = c), l > a && (a = l), u > o && (o = u)
      }
      return this.min.set(e, i, n), this.max.set(r, a, o), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; i > e; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: function() {
      var t = new a;
      return function(e, i) {
        var n = t.copy(i).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
      }
    }(),
    setFromObject: function(t) {
      return this.makeEmpty(), this.expandByObject(t)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new a), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new a), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    expandByObject: function() {
      function t(t) {
        var a = t.geometry;
        if (void 0 !== a)
          if (a.isGeometry) {
            var o = a.vertices;
            for (i = 0, n = o.length; n > i; i++) r.copy(o[i]), r.applyMatrix4(t.matrixWorld), e.expandByPoint(r)
          } else if (a.isBufferGeometry) {
          var s = a.attributes.position;
          if (void 0 !== s)
            for (i = 0, n = s.count; n > i; i++) r.fromBufferAttribute(s, i).applyMatrix4(t.matrixWorld), e.expandByPoint(r)
        }
      }
      var e, i, n, r = new a;
      return function(i) {
        return e = this, i.updateMatrixWorld(!0), i.traverse(t), this
      }
    }(),
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    },
    getParameter: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new a), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    },
    intersectsSphere: function() {
      var t = new a;
      return function(e) {
        return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
      }
    }(),
    intersectsPlane: function(t) {
      var e, i;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
    },
    intersectsTriangle: function() {
      function t(t) {
        var r, a;
        for (r = 0, a = t.length - 3; a >= r; r += 3) {
          h.fromArray(t, r);
          var o = l.x * Math.abs(h.x) + l.y * Math.abs(h.y) + l.z * Math.abs(h.z),
            s = e.dot(h),
            c = i.dot(h),
            u = n.dot(h);
          if (Math.max(-Math.max(s, c, u), Math.min(s, c, u)) > o) return !1
        }
        return !0
      }
      var e = new a,
        i = new a,
        n = new a,
        r = new a,
        o = new a,
        s = new a,
        h = new a,
        c = new a,
        l = new a,
        u = new a;
      return function(a) {
        if (this.isEmpty()) return !1;
        this.getCenter(c), l.subVectors(this.max, c), e.subVectors(a.a, c), i.subVectors(a.b, c), n.subVectors(a.c, c), r.subVectors(i, e), o.subVectors(n, i), s.subVectors(e, n);
        var h = [0, -r.z, r.y, 0, -o.z, o.y, 0, -s.z, s.y, r.z, 0, -r.x, o.z, 0, -o.x, s.z, 0, -s.x, -r.y, r.x, 0, -o.y, o.x, 0, -s.y, s.x, 0];
        return !!t(h) && (!!t(h = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (u.crossVectors(r, o), t(h = [u.x, u.y, u.z])))
      }
    }(),
    clampPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new a), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
      var t = new a;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length()
      }
    }(),
    getBoundingSphere: function() {
      var t = new a;
      return function(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new d), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
      }
    }(),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    applyMatrix4: function() {
      var t = [new a, new a, new a, new a, new a, new a, new a, new a];
      return function(e) {
        return this.isEmpty() || (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t)), this
      }
    }(),
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), Object.assign(d.prototype, {
    set: function(t, e) {
      return this.center.copy(t), this.radius = e, this
    },
    setFromPoints: function() {
      var t = new p;
      return function(e, i) {
        var n = this.center;
        void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
        for (var r = 0, a = 0, o = e.length; o > a; a++) r = Math.max(r, n.distanceToSquared(e[a]));
        return this.radius = Math.sqrt(r), this
      }
    }(),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.center.x = t.center.x, this.center.y = t.center.y, this.center.z = t.center.z, this.radius = t.radius, this
    },
    empty: function() {
      return this.radius <= 0
    },
    containsPoint: function(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(t) {
      return t.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e
    },
    intersectsBox: function(t) {
      return t.intersectsSphere(this)
    },
    intersectsPlane: function(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    },
    clampPoint: function(t, e) {
      var i = this.center.distanceToSquared(t);
      return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new a), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    },
    getBoundingBox: function(t) {
      return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new p), t.set(this.center, this.center), t.expandByScalar(this.radius), t
    },
    applyMatrix4: function(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    },
    translate: function(t) {
      return this.center.add(t), this
    },
    equals: function(t) {
      return t.center.equals(this.center) && t.radius === this.radius
    }
  }), Object.assign(f.prototype, {
    set: function(t, e) {
      return this.normal.copy(t), this.constant = e, this
    },
    setComponents: function(t, e, i, n) {
      return this.normal.set(t, e, i), this.constant = n, this
    },
    setFromNormalAndCoplanarPoint: function(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    },
    setFromCoplanarPoints: function() {
      var t = new a,
        e = new a;
      return function(i, n, r) {
        var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
        return this.setFromNormalAndCoplanarPoint(a, i), this
      }
    }(),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this
    },
    normalize: function() {
      var t = 1 / this.normal.length();
      return this.normal.x *= t, this.normal.y *= t, this.normal.z *= t, this.constant *= t, this
    },
    negate: function() {
      return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(t) {
      return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.constant
    },
    distanceToSphere: function(t) {
      return this.distanceToPoint(t.center) - t.radius
    },
    projectPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new a), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    },
    intersectLine: function() {
      var t = new a;
      return function(e, i) {
        void 0 === i && (console.warn("THREE.Plane: .intersectLine() target is now required"), i = new a);
        var n = e.delta(t),
          r = this.normal.dot(n);
        if (0 === r) return 0 === this.distanceToPoint(e.start) ? i.copy(e.start) : void 0;
        var o = -(e.start.dot(this.normal) + this.constant) / r;
        return 0 > o || o > 1 ? void 0 : i.copy(n).multiplyScalar(o).add(e.start)
      }
    }(),
    intersectsLine: function(t) {
      var e = this.distanceToPoint(t.start),
        i = this.distanceToPoint(t.end);
      return 0 > e && i > 0 || 0 > i && e > 0
    },
    intersectsBox: function(t) {
      return t.intersectsPlane(this)
    },
    intersectsSphere: function(t) {
      return t.intersectsPlane(this)
    },
    coplanarPoint: function(t) {
      return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new a), t.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
      var t = new a,
        e = new o;
      return function(i, n) {
        var r = n || e.getNormalMatrix(i),
          a = this.coplanarPoint(t).applyMatrix4(i),
          o = this.normal.applyMatrix3(r).normalize();
        return this.constant = -a.dot(o), this
      }
    }(),
    translate: function(t) {
      return this.constant -= t.dot(this.normal), this
    },
    equals: function(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant
    }
  });
  var gs = new d;
  Object.assign(m.prototype, {
    set: function(t, e, i, n, r, a) {
      var o = this.planes;
      return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      for (var e = this.planes, i = 0; 6 > i; i++) e[i].copy(t.planes[i]);
      return this
    },
    setFromMatrix: function(t) {
      var e = this.planes,
        i = t.elements,
        n = i[0],
        r = i[1],
        a = i[2],
        o = i[3],
        s = i[4],
        h = i[5],
        c = i[6],
        l = i[7],
        u = i[8],
        p = i[9],
        d = i[10],
        f = i[11],
        m = i[12],
        v = i[13],
        g = i[14],
        y = i[15];
      return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + h, f + p, y + v).normalize(), e[3].setComponents(o - r, l - h, f - p, y - v).normalize(), e[4].setComponents(o - a, l - c, f - d, y - g).normalize(), e[5].setComponents(o + a, l + c, f + d, y + g).normalize(), this
    },
    intersectsObject: function(t) {
      var e = t.geometry;
      if (!e) return !1;
      null === e.boundingSphere && e.computeBoundingSphere();
      var i = gs;
      return i.center.x = e.boundingSphere.center.x, i.center.y = e.boundingSphere.center.y, i.center.z = e.boundingSphere.center.z, i.radius = e.boundingSphere.radius, i.applyMatrix4(t.matrixWorld), this.intersectsSphere(i)
    },
    intersectsSprite: function(t) {
      var e = gs;
      return e.center.x = 0, e.center.y = 0, e.center.z = 0, e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
    },
    intersectsSphere: function(t) {
      for (var e = this.planes, i = t.center, n = -t.radius, r = 0; 6 > r; r++) {
        if (n > e[r].distanceToPoint(i)) return !1
      }
      return !0
    },
    intersectsBox: function() {
      var t = new a;
      return function(e) {
        for (var i = this.planes, n = 0; 6 > n; n++) {
          var r = i[n];
          if (t.x = r.normal.x > 0 ? e.max.x : e.min.x, t.y = r.normal.y > 0 ? e.max.y : e.min.y, t.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(t) < 0) return !1
        }
        return !0
      }
    }(),
    containsPoint: function(t) {
      for (var e = this.planes, i = 0; 6 > i; i++)
        if (e[i].distanceToPoint(t) < 0) return !1;
      return !0
    }
  });
  var ys = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
      alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif\n",
      begin_vertex: "\nvec3 transformed = vec3( position );\n",
      beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
      bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit(  ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit(  );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif\n",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif\n",
      common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
      defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
      encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
      envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
      envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
      envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance(  const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance(  const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
      envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
      fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
      gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif\n",
      lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
      lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\n\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t0, 1,\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
      lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance(  geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance(  geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance(  geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
      lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif\n",
      logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
      map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
      map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif\n",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif\n",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
      normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
      normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;\nconst float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\n\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
      dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
      dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif\n",
      shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\n\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
      shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
      shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
      skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif\n",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
      skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
      skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif\n",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif\n",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif\n",
      uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
      uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif\n",
      uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif\n",
      uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif\n",
      uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif\n",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
      background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
      background_vert: "varying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
      cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
      depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
      equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
      shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
      shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
    },
    xs = {
      merge: function(t) {
        for (var e = {}, i = 0, n = t.length; n > i; i++) {
          var r = this.clone(t[i]);
          for (var a in r) e[a] = r[a]
        }
        return e
      },
      clone: function(t) {
        var e = {};
        for (var i in t) {
          var n = e[i] = {},
            r = t[i];
          for (var a in r) {
            var o = r[a];
            n[a] = o && (o.isColor || o.isMatrix3 || o.isMatrix4 || o.isVector2 || o.isVector3 || o.isVector4 || o.isTexture) ? o.clone() : Array.isArray(o) ? o.slice() : o
          }
        }
        return e
      }
    },
    _s = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
  Object.assign(v.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    },
    setScalar: function(t) {
      return this.r = t, this.g = t, this.b = t, this
    },
    setHex: function(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    },
    setRGB: function(t, e, i) {
      return this.r = t, this.g = e, this.b = i, this
    },
    setHSL: function() {
      function t(t, e, i) {
        return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      return function(e, i, n) {
        if (e = us.euclideanModulo(e, 1), i = us.clamp(i, 0, 1), n = us.clamp(n, 0, 1), 0 === i) this.r = this.g = this.b = n;
        else {
          var r = .5 >= n ? n * (1 + i) : n + i - n * i,
            a = 2 * n - r;
          this.r = t(a, r, e + 1 / 3), this.g = t(a, r, e), this.b = t(a, r, e - 1 / 3)
        }
        return this
      }
    }(),
    setStyle: function(t) {
      function e(e) {
        void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
      }
      var i;
      if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var n, r = i[1],
          a = i[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
            if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
            break;
          case "hsl":
          case "hsla":
            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(n[1]) / 360,
                s = parseInt(n[2], 10) / 100,
                h = parseInt(n[3], 10) / 100;
              return e(n[5]), this.setHSL(o, s, h)
            }
        }
      } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var c, l = (c = i[1]).length;
        if (3 === l) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
        if (6 === l) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
      }
      t && t.length > 0 && (void 0 !== (c = _s[t]) ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + t));
      return this
    },
    clone: function() {
      return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this
    },
    copyGammaToLinear: function(t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
    },
    copyLinearToGamma: function(t, e) {
      void 0 === e && (e = 2);
      var i = e > 0 ? 1 / e : 1;
      return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
    },
    convertGammaToLinear: function(t) {
      return this.copyGammaToLinear(this, t), this
    },
    convertLinearToGamma: function(t) {
      return this.copyLinearToGamma(this, t), this
    },
    copySRGBToLinear: function() {
      function t(t) {
        return .04045 > t ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
      }
      return function(e) {
        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
      }
    }(),
    copyLinearToSRGB: function() {
      function t(t) {
        return .0031308 > t ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
      }
      return function(e) {
        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
      }
    }(),
    convertSRGBToLinear: function() {
      return this.copySRGBToLinear(this), this
    },
    convertLinearToSRGB: function() {
      return this.copyLinearToSRGB(this), this
    },
    getHex: function() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b
    },
    getHexString: function() {
      return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(t) {
      void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
        h: 0,
        s: 0,
        l: 0
      });
      var e, i, n = this.r,
        r = this.g,
        a = this.b,
        o = Math.max(n, r, a),
        s = Math.min(n, r, a),
        h = (s + o) / 2;
      if (s === o) e = 0, i = 0;
      else {
        var c = o - s;
        switch (i = .5 >= h ? c / (o + s) : c / (2 - o - s), o) {
          case n:
            e = (r - a) / c + (a > r ? 6 : 0);
            break;
          case r:
            e = (a - n) / c + 2;
            break;
          case a:
            e = (n - r) / c + 4
        }
        e /= 6
      }
      return t.h = e, t.s = i, t.l = h, t
    },
    getStyle: function() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function() {
      var t = {};
      return function(e, i, n) {
        return this.getHSL(t), t.h += e, t.s += i, t.l += n, this.setHSL(t.h, t.s, t.l), this
      }
    }(),
    add: function(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this
    },
    addColors: function(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    },
    addScalar: function(t) {
      return this.r += t, this.g += t, this.b += t, this
    },
    sub: function(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    },
    multiply: function(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    },
    multiplyScalar: function(t) {
      return this.r *= t, this.g *= t, this.b *= t, this
    },
    lerp: function(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    },
    lerpHSL: function() {
      var t = {
          h: 0,
          s: 0,
          l: 0
        },
        e = {
          h: 0,
          s: 0,
          l: 0
        };
      return function(i, n) {
        this.getHSL(t), i.getHSL(e);
        var r = us.lerp(t.h, e.h, n),
          a = us.lerp(t.s, e.s, n),
          o = us.lerp(t.l, e.l, n);
        return this.setHSL(r, a, o), this
      }
    }(),
    equals: function(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    },
    toJSON: function() {
      return this.getHex()
    }
  });
  var bs = {
      common: {
        diffuse: {
          value: new v(15658734)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new o
        },
        alphaMap: {
          value: null
        }
      },
      specularmap: {
        specularMap: {
          value: null
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        refractionRatio: {
          value: .98
        },
        maxMipLevel: {
          value: 0
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalScale: {
          value: new i(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 2e3
        },
        fogColor: {
          value: new v(16777215)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotShadowMap: {
          value: []
        },
        spotShadowMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        }
      },
      points: {
        diffuse: {
          value: new v(15658734)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new o
        }
      },
      sprite: {
        diffuse: {
          value: new v(15658734)
        },
        opacity: {
          value: 1
        },
        center: {
          value: new i(.5, .5)
        },
        rotation: {
          value: 0
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new o
        }
      }
    },
    Ms = {
      basic: {
        uniforms: xs.merge([bs.common, bs.specularmap, bs.envmap, bs.aomap, bs.lightmap, bs.fog]),
        vertexShader: ys.meshbasic_vert,
        fragmentShader: ys.meshbasic_frag
      },
      lambert: {
        uniforms: xs.merge([bs.common, bs.specularmap, bs.envmap, bs.aomap, bs.lightmap, bs.emissivemap, bs.fog, bs.lights, {
          emissive: {
            value: new v(0)
          }
        }]),
        vertexShader: ys.meshlambert_vert,
        fragmentShader: ys.meshlambert_frag
      },
      phong: {
        uniforms: xs.merge([bs.common, bs.specularmap, bs.envmap, bs.aomap, bs.lightmap, bs.emissivemap, bs.bumpmap, bs.normalmap, bs.displacementmap, bs.gradientmap, bs.fog, bs.lights, {
          emissive: {
            value: new v(0)
          },
          specular: {
            value: new v(1118481)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: ys.meshphong_vert,
        fragmentShader: ys.meshphong_frag
      },
      standard: {
        uniforms: xs.merge([bs.common, bs.envmap, bs.aomap, bs.lightmap, bs.emissivemap, bs.bumpmap, bs.normalmap, bs.displacementmap, bs.roughnessmap, bs.metalnessmap, bs.fog, bs.lights, {
          emissive: {
            value: new v(0)
          },
          roughness: {
            value: .5
          },
          metalness: {
            value: .5
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: ys.meshphysical_vert,
        fragmentShader: ys.meshphysical_frag
      },
      matcap: {
        uniforms: xs.merge([bs.common, bs.bumpmap, bs.normalmap, bs.displacementmap, bs.fog, {
          matcap: {
            value: null
          }
        }]),
        vertexShader: ys.meshmatcap_vert,
        fragmentShader: ys.meshmatcap_frag
      },
      points: {
        uniforms: xs.merge([bs.points, bs.fog]),
        vertexShader: ys.points_vert,
        fragmentShader: ys.points_frag
      },
      dashed: {
        uniforms: xs.merge([bs.common, bs.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: ys.linedashed_vert,
        fragmentShader: ys.linedashed_frag
      },
      depth: {
        uniforms: xs.merge([bs.common, bs.displacementmap]),
        vertexShader: ys.depth_vert,
        fragmentShader: ys.depth_frag
      },
      normal: {
        uniforms: xs.merge([bs.common, bs.bumpmap, bs.normalmap, bs.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: ys.normal_vert,
        fragmentShader: ys.normal_frag
      },
      sprite: {
        uniforms: xs.merge([bs.sprite, bs.fog]),
        vertexShader: ys.sprite_vert,
        fragmentShader: ys.sprite_frag
      },
      background: {
        uniforms: {
          t2D: {
            value: null
          }
        },
        vertexShader: ys.background_vert,
        fragmentShader: ys.background_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: ys.cube_vert,
        fragmentShader: ys.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: ys.equirect_vert,
        fragmentShader: ys.equirect_frag
      },
      distanceRGBA: {
        uniforms: xs.merge([bs.common, bs.displacementmap, {
          referencePosition: {
            value: new a
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }]),
        vertexShader: ys.distanceRGBA_vert,
        fragmentShader: ys.distanceRGBA_frag
      },
      shadow: {
        uniforms: xs.merge([bs.lights, bs.fog, {
          color: {
            value: new v(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: ys.shadow_vert,
        fragmentShader: ys.shadow_frag
      }
    };
  Ms.physical = {
    uniforms: xs.merge([Ms.standard.uniforms, {
      clearCoat: {
        value: 0
      },
      clearCoatRoughness: {
        value: 0
      }
    }]),
    vertexShader: ys.meshphysical_vert,
    fragmentShader: ys.meshphysical_frag
  }, Object.assign(x.prototype, {
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
      for (var e = 0, i = t.vertexNormals.length; i > e; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
      for (e = 0, i = t.vertexColors.length; i > e; e++) this.vertexColors[e] = t.vertexColors[e].clone();
      return this
    }
  });
  var ws = new n;
  _.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], _.DefaultOrder = "XYZ", Object.defineProperties(_.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    order: {
      get: function() {
        return this._order
      },
      set: function(t) {
        this._order = t, this.onChangeCallback()
      }
    }
  }), Object.assign(_.prototype, {
    isEuler: !0,
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t, e, i) {
      var n = us.clamp,
        r = t.elements,
        a = r[0],
        o = r[4],
        s = r[8],
        h = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        p = r[6],
        d = r[10];
      return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-o, c))) : "YZX" === e ? (this._z = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this
    },
    setFromQuaternion: function(t, e, i) {
      return ws.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ws, e, i)
    },
    setFromVector3: function(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order)
    },
    reorder: function() {
      var t = new r;
      return function(e) {
        return t.setFromEuler(this), this.setFromQuaternion(t, e)
      }
    }(),
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    },
    fromArray: function(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    },
    toVector3: function(t) {
      return t ? t.set(this._x, this._y, this._z) : new a(this._x, this._y, this._z)
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(b.prototype, {
    set: function(t) {
      this.mask = 1 << t
    },
    enable: function(t) {
      this.mask |= 1 << t
    },
    toggle: function(t) {
      this.mask ^= 1 << t
    },
    disable: function(t) {
      this.mask &= ~(1 << t)
    },
    test: function(t) {
      return 0 !== (this.mask & t.mask)
    }
  });
  var Ss = 0,
    Es = new r,
    Ts = new a(1, 0, 0),
    As = new a(0, 1, 0),
    Ls = new a(0, 0, 1),
    Cs = new r,
    Ps = new n,
    Rs = new a,
    Is = new a;
  M.DefaultUp = new a(0, 1, 0), M.DefaultMatrixAutoUpdate = !0, M.prototype = Object.assign(Object.create(e.prototype), {
    constructor: M,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix: function(t) {
      this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    applyQuaternion: function(t) {
      return this.quaternion.premultiply(t), this
    },
    setRotationFromAxisAngle: function(t, e) {
      this.quaternion.setFromAxisAngle(t, e)
    },
    setRotationFromEuler: function(t) {
      this.quaternion.setFromEuler(t, !0)
    },
    setRotationFromMatrix: function(t) {
      this.quaternion.setFromRotationMatrix(t)
    },
    setRotationFromQuaternion: function(t) {
      this.quaternion.copy(t)
    },
    rotateOnAxis: function(t, e) {
      return Es.setFromAxisAngle(t, e), this.quaternion.multiply(Es), this
    },
    rotateOnWorldAxis: function(t, e) {
      return Es.setFromAxisAngle(t, e), this.quaternion.premultiply(Es), this
    },
    rotateX: function(t) {
      return this.rotateOnAxis(Ts, t)
    },
    rotateY: function(t) {
      return this.rotateOnAxis(As, t)
    },
    rotateZ: function(t) {
      return this.rotateOnAxis(Ls, t)
    },
    translateOnAxis: function() {
      var t = new a;
      return function(e, i) {
        return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
      }
    }(),
    translateX: function() {
      var t = new a(1, 0, 0);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    translateY: function() {
      var t = new a(0, 1, 0);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    translateZ: function() {
      var t = new a(0, 0, 1);
      return function(e) {
        return this.translateOnAxis(t, e)
      }
    }(),
    localToWorld: function(t) {
      return t.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
      var t = new n;
      return function(e) {
        return e.applyMatrix4(t.getInverse(this.matrixWorld))
      }
    }(),
    lookAt: function(t, e, i) {
      var n = Cs,
        r = Ps,
        a = Rs,
        o = Is;
      t.isVector3 ? a.copy(t) : a.set(t, e, i);
      var s = this.parent;
      this.updateWorldMatrix(!0, !1), o.setFromMatrixPosition(this.matrixWorld), this.isCamera ? r.lookAt(o, a, this.up) : r.lookAt(a, o, this.up), this.quaternion.setFromRotationMatrix(r), s && (r.extractRotation(s.matrixWorld), n.setFromRotationMatrix(r), this.quaternion.premultiply(n.inverse()))
    },
    add: function(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this
      }
      return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
        type: "added"
      }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
    },
    remove: function(t) {
      if (arguments.length > 1) {
        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this
      }
      var i = this.children.indexOf(t);
      return -1 !== i && (t.parent = null, t.dispatchEvent({
        type: "removed"
      }), this.children.splice(i, 1)), this
    },
    getObjectById: function(t) {
      return this.getObjectByProperty("id", t)
    },
    getObjectByName: function(t) {
      return this.getObjectByProperty("name", t)
    },
    getObjectByProperty: function(t, e) {
      if (this[t] === e) return this;
      for (var i = 0, n = this.children.length; n > i; i++) {
        var r = this.children[i].getObjectByProperty(t, e);
        if (void 0 !== r) return r
      }
    },
    getWorldPosition: function(t) {
      return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new a), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
      var t = new a,
        e = new a;
      return function(i) {
        return void 0 === i && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), i = new r), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, i, e), i
      }
    }(),
    getWorldScale: function() {
      var t = new a,
        e = new r;
      return function(i) {
        return void 0 === i && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), i = new a), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
      }
    }(),
    getWorldDirection: function(t) {
      void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new a), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize()
    },
    raycast: function() {},
    traverse: function(t) {
      t(this);
      for (var e = this.children, i = 0, n = e.length; n > i; i++) e[i].traverse(t)
    },
    traverseVisible: function(t) {
      if (!1 !== this.visible) {
        t(this);
        for (var e = this.children, i = 0, n = e.length; n > i; i++) e[i].traverseVisible(t)
      }
    },
    traverseAncestors: function(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t))
    },
    updateMatrix: function() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      for (var e = this.children, i = 0, n = e.length; n > i; i++) e[i].updateMatrixWorld(t)
    },
    updateWorldMatrix: function(t, e) {
      var i = this.parent;
      if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
        for (var n = this.children, r = 0, a = n.length; a > r; r++) n[r].updateWorldMatrix(!1, !0)
    },
    toJSON: function(t) {
      function e(e, i) {
        return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
      }

      function i(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
      var n = void 0 === t || "string" == typeof t,
        r = {};
      n && (t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, r.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var a = {};
      if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), !0 === this.castShadow && (a.castShadow = !0), !0 === this.receiveShadow && (a.receiveShadow = !0), !1 === this.visible && (a.visible = !1), !1 === this.frustumCulled && (a.frustumCulled = !1), 0 !== this.renderOrder && (a.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData), a.layers = this.layers.mask, a.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (a.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
        a.geometry = e(t.geometries, this.geometry);
        var o = this.geometry.parameters;
        if (void 0 !== o && void 0 !== o.shapes) {
          var s = o.shapes;
          if (Array.isArray(s))
            for (var h = 0, c = s.length; c > h; h++) {
              var l = s[h];
              e(t.shapes, l)
            } else e(t.shapes, s)
        }
      }
      if (void 0 !== this.material)
        if (Array.isArray(this.material)) {
          var u = [];
          for (h = 0, c = this.material.length; c > h; h++) u.push(e(t.materials, this.material[h]));
          a.material = u
        } else a.material = e(t.materials, this.material);
      if (this.children.length > 0) {
        a.children = [];
        for (h = 0; h < this.children.length; h++) a.children.push(this.children[h].toJSON(t).object)
      }
      if (n) {
        var p = i(t.geometries),
          d = i(t.materials),
          f = i(t.textures),
          m = i(t.images);
        s = i(t.shapes);
        p.length > 0 && (r.geometries = p), d.length > 0 && (r.materials = d), f.length > 0 && (r.textures = f), m.length > 0 && (r.images = m), s.length > 0 && (r.shapes = s)
      }
      return r.object = a, r
    },
    clone: function(t) {
      return (new this.constructor).copy(this, t)
    },
    copy: function(t, e) {
      if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
        for (var i = 0; i < t.children.length; i++) {
          var n = t.children[i];
          this.add(n.clone())
        }
      return this
    }
  });
  var Ns = 0;
  w.prototype = Object.assign(Object.create(e.prototype), {
    constructor: w,
    isGeometry: !0,
    applyMatrix: function(t) {
      for (var e = (new o).getNormalMatrix(t), i = 0, n = this.vertices.length; n > i; i++) {
        this.vertices[i].applyMatrix4(t)
      }
      for (i = 0, n = this.faces.length; n > i; i++) {
        var r = this.faces[i];
        r.normal.applyMatrix3(e).normalize();
        for (var a = 0, s = r.vertexNormals.length; s > a; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
      }
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
    },
    rotateX: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this
      }
    }(),
    rotateY: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this
      }
    }(),
    rotateZ: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this
      }
    }(),
    translate: function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this
      }
    }(),
    scale: function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this
      }
    }(),
    lookAt: function() {
      var t = new M;
      return function(e) {
        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
      }
    }(),
    fromBufferGeometry: function(t) {
      function e(t, e, i, r) {
        var a = new x(t, e, i, void 0 !== h ? [p[t].clone(), p[e].clone(), p[i].clone()] : [], void 0 !== c ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] : [], r);
        n.faces.push(a), void 0 !== l && n.faceVertexUvs[0].push([d[t].clone(), d[e].clone(), d[i].clone()]), void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[i].clone()])
      }
      var n = this,
        r = null !== t.index ? t.index.array : void 0,
        o = t.attributes,
        s = o.position.array,
        h = void 0 !== o.normal ? o.normal.array : void 0,
        c = void 0 !== o.color ? o.color.array : void 0,
        l = void 0 !== o.uv ? o.uv.array : void 0,
        u = void 0 !== o.uv2 ? o.uv2.array : void 0;
      void 0 !== u && (this.faceVertexUvs[1] = []);
      for (var p = [], d = [], f = [], m = 0, g = 0; m < s.length; m += 3, g += 2) n.vertices.push(new a(s[m], s[m + 1], s[m + 2])), void 0 !== h && p.push(new a(h[m], h[m + 1], h[m + 2])), void 0 !== c && n.colors.push(new v(c[m], c[m + 1], c[m + 2])), void 0 !== l && d.push(new i(l[g], l[g + 1])), void 0 !== u && f.push(new i(u[g], u[g + 1]));
      var y = t.groups;
      if (y.length > 0)
        for (m = 0; m < y.length; m++)
          for (var _ = y[m], b = _.start, M = (g = b, b + _.count); M > g; g += 3) void 0 !== r ? e(r[g], r[g + 1], r[g + 2], _.materialIndex) : e(g, g + 1, g + 2, _.materialIndex);
      else if (void 0 !== r)
        for (m = 0; m < r.length; m += 3) e(r[m], r[m + 1], r[m + 2]);
      else
        for (m = 0; m < s.length / 3; m += 3) e(m, m + 1, m + 2);
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
    },
    center: function() {
      var t = new a;
      return function() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
      }
    }(),
    normalize: function() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center,
        e = this.boundingSphere.radius,
        i = 0 === e ? 1 : 1 / e,
        r = new n;
      return r.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
    },
    computeFaceNormals: function() {
      for (var t = new a, e = new a, i = 0, n = this.faces.length; n > i; i++) {
        var r = this.faces[i],
          o = this.vertices[r.a],
          s = this.vertices[r.b],
          h = this.vertices[r.c];
        t.subVectors(h, s), e.subVectors(o, s), t.cross(e), t.normalize(), r.normal.copy(t)
      }
    },
    computeVertexNormals: function(t) {
      var e, i, n, r, o, s;
      for (void 0 === t && (t = !0), s = new Array(this.vertices.length), e = 0, i = this.vertices.length; i > e; e++) s[e] = new a;
      if (t) {
        var h, c, l, u = new a,
          p = new a;
        for (n = 0, r = this.faces.length; r > n; n++) o = this.faces[n], h = this.vertices[o.a], c = this.vertices[o.b], l = this.vertices[o.c], u.subVectors(l, c), p.subVectors(h, c), u.cross(p), s[o.a].add(u), s[o.b].add(u), s[o.c].add(u)
      } else
        for (this.computeFaceNormals(), n = 0, r = this.faces.length; r > n; n++) s[(o = this.faces[n]).a].add(o.normal), s[o.b].add(o.normal), s[o.c].add(o.normal);
      for (e = 0, i = this.vertices.length; i > e; e++) s[e].normalize();
      for (n = 0, r = this.faces.length; r > n; n++) {
        var d = (o = this.faces[n]).vertexNormals;
        3 === d.length ? (d[0].copy(s[o.a]), d[1].copy(s[o.b]), d[2].copy(s[o.c])) : (d[0] = s[o.a].clone(), d[1] = s[o.b].clone(), d[2] = s[o.c].clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeFlatVertexNormals: function() {
      var t, e, i;
      for (this.computeFaceNormals(), t = 0, e = this.faces.length; e > t; t++) {
        var n = (i = this.faces[t]).vertexNormals;
        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
      }
      this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
      var t, e, i, n, r;
      for (i = 0, n = this.faces.length; n > i; i++)
        for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; e > t; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
      var o = new w;
      for (o.faces = this.faces, t = 0, e = this.morphTargets.length; e > t; t++) {
        if (!this.morphNormals[t]) {
          this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
          var s = this.morphNormals[t].faceNormals,
            h = this.morphNormals[t].vertexNormals;
          for (i = 0, n = this.faces.length; n > i; i++) c = new a, l = {
            a: new a,
            b: new a,
            c: new a
          }, s.push(c), h.push(l)
        }
        var c, l, u = this.morphNormals[t];
        for (o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals(), i = 0, n = this.faces.length; n > i; i++) r = this.faces[i], c = u.faceNormals[i], l = u.vertexNormals[i], c.copy(r.normal), l.a.copy(r.vertexNormals[0]), l.b.copy(r.vertexNormals[1]), l.c.copy(r.vertexNormals[2])
      }
      for (i = 0, n = this.faces.length; n > i; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new p), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new d), this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(t, e, i) {
      if (t && t.isGeometry) {
        var n, r = this.vertices.length,
          a = this.vertices,
          s = t.vertices,
          h = this.faces,
          c = t.faces,
          l = this.faceVertexUvs[0],
          u = t.faceVertexUvs[0],
          p = this.colors,
          d = t.colors;
        void 0 === i && (i = 0), void 0 !== e && (n = (new o).getNormalMatrix(e));
        for (var f = 0, m = s.length; m > f; f++) {
          var v = s[f].clone();
          void 0 !== e && v.applyMatrix4(e), a.push(v)
        }
        for (f = 0, m = d.length; m > f; f++) p.push(d[f].clone());
        for (f = 0, m = c.length; m > f; f++) {
          var g, y, _, b = c[f],
            M = b.vertexNormals,
            w = b.vertexColors;
          (g = new x(b.a + r, b.b + r, b.c + r)).normal.copy(b.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
          for (var S = 0, E = M.length; E > S; S++) y = M[S].clone(), void 0 !== n && y.applyMatrix3(n).normalize(), g.vertexNormals.push(y);
          g.color.copy(b.color);
          for (S = 0, E = w.length; E > S; S++) _ = w[S], g.vertexColors.push(_.clone());
          g.materialIndex = b.materialIndex + i, h.push(g)
        }
        for (f = 0, m = u.length; m > f; f++) {
          var T = u[f],
            A = [];
          if (void 0 !== T) {
            for (S = 0, E = T.length; E > S; S++) A.push(T[S].clone());
            l.push(A)
          }
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
    },
    mergeMesh: function(t) {
      return t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), void this.merge(t.geometry, t.matrix)) : void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
    },
    mergeVertices: function() {
      var t, e, i, n, r, a, o, s, h = {},
        c = [],
        l = [],
        u = Math.pow(10, 4);
      for (i = 0, n = this.vertices.length; n > i; i++) t = this.vertices[i], void 0 === h[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (h[e] = i, c.push(this.vertices[i]), l[i] = c.length - 1) : l[i] = l[h[e]];
      var p = [];
      for (i = 0, n = this.faces.length; n > i; i++) {
        (r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
        for (var d = 0; 3 > d; d++)
          if (a[d] === a[(d + 1) % 3]) {
            p.push(i);
            break
          }
      }
      for (i = p.length - 1; i >= 0; i--) {
        var f = p[i];
        for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; s > o; o++) this.faceVertexUvs[o].splice(f, 1)
      }
      var m = this.vertices.length - c.length;
      return this.vertices = c, m
    },
    setFromPoints: function(t) {
      this.vertices = [];
      for (var e = 0, i = t.length; i > e; e++) {
        var n = t[e];
        this.vertices.push(new a(n.x, n.y, n.z || 0))
      }
      return this
    },
    sortFacesByMaterialIndex: function() {
      for (var t = this.faces, e = t.length, i = 0; e > i; i++) t[i]._id = i;
      t.sort((function(t, e) {
        return t.materialIndex - e.materialIndex
      }));
      var n, r, a = this.faceVertexUvs[0],
        o = this.faceVertexUvs[1];
      a && a.length === e && (n = []), o && o.length === e && (r = []);
      for (i = 0; e > i; i++) {
        var s = t[i]._id;
        n && n.push(a[s]), r && r.push(o[s])
      }
      n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
    },
    toJSON: function() {
      function t(t, e, i) {
        return i ? t | 1 << e : t & ~(1 << e)
      }

      function e(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return void 0 !== p[e] || (p[e] = u.length / 3, u.push(t.x, t.y, t.z)), p[e]
      }

      function i(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== f[e] || (f[e] = d.length, d.push(t.getHex())), f[e]
      }

      function n(t) {
        var e = t.x.toString() + t.y.toString();
        return void 0 !== v[e] || (v[e] = m.length / 2, m.push(t.x, t.y)), v[e]
      }
      var r = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
        var a = this.parameters;
        for (var o in a) void 0 !== a[o] && (r[o] = a[o]);
        return r
      }
      for (var s = [], h = 0; h < this.vertices.length; h++) {
        var c = this.vertices[h];
        s.push(c.x, c.y, c.z)
      }
      var l = [],
        u = [],
        p = {},
        d = [],
        f = {},
        m = [],
        v = {};
      for (h = 0; h < this.faces.length; h++) {
        var g = this.faces[h],
          y = void 0 !== this.faceVertexUvs[0][h],
          x = g.normal.length() > 0,
          _ = g.vertexNormals.length > 0,
          b = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
          M = g.vertexColors.length > 0,
          w = 0;
        if (w = t(w, 0, 0), w = t(w, 1, !0), w = t(w, 2, !1), w = t(w, 3, y), w = t(w, 4, x), w = t(w, 5, _), w = t(w, 6, b), w = t(w, 7, M), l.push(w), l.push(g.a, g.b, g.c), l.push(g.materialIndex), y) {
          var S = this.faceVertexUvs[0][h];
          l.push(n(S[0]), n(S[1]), n(S[2]))
        }
        if (x && l.push(e(g.normal)), _) {
          var E = g.vertexNormals;
          l.push(e(E[0]), e(E[1]), e(E[2]))
        }
        if (b && l.push(i(g.color)), M) {
          var T = g.vertexColors;
          l.push(i(T[0]), i(T[1]), i(T[2]))
        }
      }
      return r.data = {}, r.data.vertices = s, r.data.normals = u, d.length > 0 && (r.data.colors = d), m.length > 0 && (r.data.uvs = [m]), r.data.faces = l, r
    },
    clone: function() {
      return (new w).copy(this)
    },
    copy: function(t) {
      var e, i, n, r, a, o;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var s = t.vertices;
      for (e = 0, i = s.length; i > e; e++) this.vertices.push(s[e].clone());
      var h = t.colors;
      for (e = 0, i = h.length; i > e; e++) this.colors.push(h[e].clone());
      var c = t.faces;
      for (e = 0, i = c.length; i > e; e++) this.faces.push(c[e].clone());
      for (e = 0, i = t.faceVertexUvs.length; i > e; e++) {
        var l = t.faceVertexUvs[e];
        for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; r > n; n++) {
          var u = l[n],
            p = [];
          for (a = 0, o = u.length; o > a; a++) {
            var d = u[a];
            p.push(d.clone())
          }
          this.faceVertexUvs[e].push(p)
        }
      }
      var f = t.morphTargets;
      for (e = 0, i = f.length; i > e; e++) {
        var m = {};
        if (m.name = f[e].name, void 0 !== f[e].vertices)
          for (m.vertices = [], n = 0, r = f[e].vertices.length; r > n; n++) m.vertices.push(f[e].vertices[n].clone());
        if (void 0 !== f[e].normals)
          for (m.normals = [], n = 0, r = f[e].normals.length; r > n; n++) m.normals.push(f[e].normals[n].clone());
        this.morphTargets.push(m)
      }
      var v = t.morphNormals;
      for (e = 0, i = v.length; i > e; e++) {
        var g = {};
        if (void 0 !== v[e].vertexNormals)
          for (g.vertexNormals = [], n = 0, r = v[e].vertexNormals.length; r > n; n++) {
            var y = v[e].vertexNormals[n],
              x = {};
            x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
          }
        if (void 0 !== v[e].faceNormals)
          for (g.faceNormals = [], n = 0, r = v[e].faceNormals.length; r > n; n++) g.faceNormals.push(v[e].faceNormals[n].clone());
        this.morphNormals.push(g)
      }
      var _ = t.skinWeights;
      for (e = 0, i = _.length; i > e; e++) this.skinWeights.push(_[e].clone());
      var b = t.skinIndices;
      for (e = 0, i = b.length; i > e; e++) this.skinIndices.push(b[e].clone());
      var M = t.lineDistances;
      for (e = 0, i = M.length; i > e; e++) this.lineDistances.push(M[e]);
      var w = t.boundingBox;
      null !== w && (this.boundingBox = w.clone());
      var S = t.boundingSphere;
      return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), Object.defineProperty(S.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(S.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.itemSize, i *= e.itemSize;
      for (var n = 0, r = this.itemSize; r > n; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    copyArray: function(t) {
      return this.array.set(t), this
    },
    copyColorsArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; r > n; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new v), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
      }
      return this
    },
    copyVector2sArray: function(t) {
      for (var e = this.array, n = 0, r = 0, a = t.length; a > r; r++) {
        var o = t[r];
        void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o = new i), e[n++] = o.x, e[n++] = o.y
      }
      return this
    },
    copyVector3sArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; r > n; n++) {
        var o = t[n];
        void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), o = new a), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z
      }
      return this
    },
    copyVector4sArray: function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; r > n; n++) {
        var a = t[n];
        void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), a = new h), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
      }
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    getX: function(t) {
      return this.array[t * this.itemSize]
    },
    setX: function(t, e) {
      return this.array[t * this.itemSize] = e, this
    },
    getY: function(t) {
      return this.array[t * this.itemSize + 1]
    },
    setY: function(t, e) {
      return this.array[t * this.itemSize + 1] = e, this
    },
    getZ: function(t) {
      return this.array[t * this.itemSize + 2]
    },
    setZ: function(t, e) {
      return this.array[t * this.itemSize + 2] = e, this
    },
    getW: function(t) {
      return this.array[t * this.itemSize + 3]
    },
    setW: function(t, e) {
      return this.array[t * this.itemSize + 3] = e, this
    },
    setXY: function(t, e, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    },
    clone: function() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    }
  }), E.prototype = Object.create(S.prototype), E.prototype.constructor = E, T.prototype = Object.create(S.prototype), T.prototype.constructor = T, A.prototype = Object.create(S.prototype), A.prototype.constructor = A, L.prototype = Object.create(S.prototype), L.prototype.constructor = L, C.prototype = Object.create(S.prototype), C.prototype.constructor = C, P.prototype = Object.create(S.prototype), P.prototype.constructor = P, R.prototype = Object.create(S.prototype), R.prototype.constructor = R, I.prototype = Object.create(S.prototype), I.prototype.constructor = I, N.prototype = Object.create(S.prototype), N.prototype.constructor = N, Object.assign(O.prototype, {
    computeGroups: function(t) {
      for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
        var o = r[a];
        o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
          start: 3 * a,
          materialIndex: n
        })
      }
      void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
    },
    fromGeometry: function(t) {
      var e, n = t.faces,
        r = t.vertices,
        a = t.faceVertexUvs,
        o = a[0] && a[0].length > 0,
        s = a[1] && a[1].length > 0,
        h = t.morphTargets,
        c = h.length;
      if (c > 0) {
        e = [];
        for (var l = 0; c > l; l++) e[l] = {
          name: h[l].name,
          data: []
        };
        this.morphTargets.position = e
      }
      var u, p = t.morphNormals,
        d = p.length;
      if (d > 0) {
        u = [];
        for (l = 0; d > l; l++) u[l] = {
          name: p[l].name,
          data: []
        };
        this.morphTargets.normal = u
      }
      var f = t.skinIndices,
        m = t.skinWeights,
        v = f.length === r.length,
        g = m.length === r.length;
      r.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
      for (l = 0; l < n.length; l++) {
        var y = n[l];
        this.vertices.push(r[y.a], r[y.b], r[y.c]);
        var x = y.vertexNormals;
        if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
        else {
          var _ = y.normal;
          this.normals.push(_, _, _)
        }
        var b, M = y.vertexColors;
        if (3 === M.length) this.colors.push(M[0], M[1], M[2]);
        else {
          var w = y.color;
          this.colors.push(w, w, w)
        }
        if (!0 === o) void 0 !== (b = a[0][l]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new i, new i, new i));
        if (!0 === s) void 0 !== (b = a[1][l]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new i, new i, new i));
        for (var S = 0; c > S; S++) {
          var E = h[S].vertices;
          e[S].data.push(E[y.a], E[y.b], E[y.c])
        }
        for (S = 0; d > S; S++) {
          var T = p[S].vertexNormals[l];
          u[S].data.push(T.a, T.b, T.c)
        }
        v && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
      }
      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    }
  });
  var Os = 1;
  U.prototype = Object.assign(Object.create(e.prototype), {
    constructor: U,
    isBufferGeometry: !0,
    getIndex: function() {
      return this.index
    },
    setIndex: function(t) {
      this.index = Array.isArray(t) ? new(D(t) > 65535 ? R : C)(t, 1) : t
    },
    addAttribute: function(t, e) {
      return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new S(arguments[1], arguments[2])))
    },
    getAttribute: function(t) {
      return this.attributes[t]
    },
    removeAttribute: function(t) {
      return delete this.attributes[t], this
    },
    addGroup: function(t, e, i) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: void 0 !== i ? i : 0
      })
    },
    clearGroups: function() {
      this.groups = []
    },
    setDrawRange: function(t, e) {
      this.drawRange.start = t, this.drawRange.count = e
    },
    applyMatrix: function(t) {
      var e = this.attributes.position;
      void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
      var i = this.attributes.normal;
      void 0 !== i && ((new o).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0);
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    },
    rotateX: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this
      }
    }(),
    rotateY: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this
      }
    }(),
    rotateZ: function() {
      var t = new n;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this
      }
    }(),
    translate: function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this
      }
    }(),
    scale: function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this
      }
    }(),
    lookAt: function() {
      var t = new M;
      return function(e) {
        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
      }
    }(),
    center: function() {
      var t = new a;
      return function() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
      }
    }(),
    setFromObject: function(t) {
      var e = t.geometry;
      if (t.isPoints || t.isLine) {
        var i = new I(3 * e.vertices.length, 3),
          n = new I(3 * e.colors.length, 3);
        if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var r = new I(e.lineDistances.length, 1);
          this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
        }
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
      } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
      return this
    },
    setFromPoints: function(t) {
      for (var e = [], i = 0, n = t.length; n > i; i++) {
        var r = t[i];
        e.push(r.x, r.y, r.z || 0)
      }
      return this.addAttribute("position", new I(e, 3)), this
    },
    updateFromObject: function(t) {
      var e, i = t.geometry;
      if (t.isMesh) {
        var n = i.__directGeometry;
        if (!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
        n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
      }
      return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
    },
    fromGeometry: function(t) {
      return t.__directGeometry = (new O).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
    },
    fromDirectGeometry: function(t) {
      var e = new Float32Array(3 * t.vertices.length);
      if (this.addAttribute("position", new S(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
        var i = new Float32Array(3 * t.normals.length);
        this.addAttribute("normal", new S(i, 3).copyVector3sArray(t.normals))
      }
      if (t.colors.length > 0) {
        var n = new Float32Array(3 * t.colors.length);
        this.addAttribute("color", new S(n, 3).copyColorsArray(t.colors))
      }
      if (t.uvs.length > 0) {
        var r = new Float32Array(2 * t.uvs.length);
        this.addAttribute("uv", new S(r, 2).copyVector2sArray(t.uvs))
      }
      if (t.uvs2.length > 0) {
        var a = new Float32Array(2 * t.uvs2.length);
        this.addAttribute("uv2", new S(a, 2).copyVector2sArray(t.uvs2))
      }
      for (var o in this.groups = t.groups, t.morphTargets) {
        for (var s = [], h = t.morphTargets[o], c = 0, l = h.length; l > c; c++) {
          var u = h[c],
            p = new I(3 * u.data.length, 3);
          p.name = u.name, s.push(p.copyVector3sArray(u.data))
        }
        this.morphAttributes[o] = s
      }
      if (t.skinIndices.length > 0) {
        var d = new I(4 * t.skinIndices.length, 4);
        this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
      }
      if (t.skinWeights.length > 0) {
        var f = new I(4 * t.skinWeights.length, 4);
        this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
      }
      return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new p);
      var t = this.attributes.position;
      void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
      var t = new p,
        e = new a;
      return function() {
        null === this.boundingSphere && (this.boundingSphere = new d);
        var i = this.attributes.position;
        if (i) {
          var n = this.boundingSphere.center;
          t.setFromBufferAttribute(i), t.getCenter(n);
          for (var r = 0, a = 0, o = i.count; o > a; a++) e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
          this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
      }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
      var t = this.index,
        e = this.attributes;
      if (e.position) {
        var i = e.position.array;
        if (void 0 === e.normal) this.addAttribute("normal", new S(new Float32Array(i.length), 3));
        else
          for (var n = e.normal.array, r = 0, o = n.length; o > r; r++) n[r] = 0;
        var s, h, c, l = e.normal.array,
          u = new a,
          p = new a,
          d = new a,
          f = new a,
          m = new a;
        if (t) {
          var v = t.array;
          for (r = 0, o = t.count; o > r; r += 3) s = 3 * v[r + 0], h = 3 * v[r + 1], c = 3 * v[r + 2], u.fromArray(i, s), p.fromArray(i, h), d.fromArray(i, c), f.x = d.x - p.x, f.y = d.y - p.y, f.z = d.z - p.z, m.x = u.x - p.x, m.y = u.y - p.y, m.z = u.z - p.z, f.crossVectors(f, m), l[s] += f.x, l[s + 1] += f.y, l[s + 2] += f.z, l[h] += f.x, l[h + 1] += f.y, l[h + 2] += f.z, l[c] += f.x, l[c + 1] += f.y, l[c + 2] += f.z
        } else
          for (r = 0, o = i.length; o > r; r += 9) u.fromArray(i, r), p.fromArray(i, r + 3), d.fromArray(i, r + 6), f.x = d.x - p.x, f.y = d.y - p.y, f.z = d.z - p.z, m.x = u.x - p.x, m.y = u.y - p.y, m.z = u.z - p.z, f.crossVectors(f, m), l[r] = f.x, l[r + 1] = f.y, l[r + 2] = f.z, l[r + 3] = f.x, l[r + 4] = f.y, l[r + 5] = f.z, l[r + 6] = f.x, l[r + 7] = f.y, l[r + 8] = f.z;
        this.normalizeNormals(), e.normal.needsUpdate = !0
      }
    },
    merge: function(t, e) {
      if (t && t.isBufferGeometry) {
        void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var i = this.attributes;
        for (var n in i)
          if (void 0 !== t.attributes[n])
            for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, h = a.itemSize * e; s < o.length; s++, h++) r[h] = o[s];
        return this
      }
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
    },
    normalizeNormals: function() {
      for (var t = this.attributes.normal, e = t.array, i = t.itemSize, n = 0, r = t.count; r > n; n++) {
        var a = i * n,
          o = e[a],
          s = e[a + 1],
          h = e[a + 2],
          c = Math.sqrt(o * o + s * s + h * h),
          l = 0 === c ? 1 : 1 / c;
        o *= l, s *= l, h *= l, t.setXYZ(n, o, s, h)
      }
    },
    toNonIndexed: function() {
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var t = new U,
        e = this.index.array,
        i = this.attributes;
      for (var n in i) {
        for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), h = 0, c = 0, l = 0, u = e.length; u > l; l++) {
          h = e[l] * o;
          for (var p = 0; o > p; p++) s[c++] = a[h++]
        }
        t.addAttribute(n, new S(s, o))
      }
      var d = this.groups;
      for (l = 0, u = d.length; u > l; l++) {
        var f = d[l];
        t.addGroup(f.start, f.count, f.materialIndex)
      }
      return t
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
        var e = this.parameters;
        for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
        return t
      }
      t.data = {
        attributes: {}
      };
      var n = this.index;
      if (null !== n) {
        var r = Array.prototype.slice.call(n.array);
        t.data.index = {
          type: n.array.constructor.name,
          array: r
        }
      }
      var a = this.attributes;
      for (var i in a) {
        var o = a[i];
        r = Array.prototype.slice.call(o.array);
        t.data.attributes[i] = {
          itemSize: o.itemSize,
          type: o.array.constructor.name,
          array: r,
          normalized: o.normalized
        }
      }
      var s = this.groups;
      s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
      var h = this.boundingSphere;
      return null !== h && (t.data.boundingSphere = {
        center: h.center.toArray(),
        radius: h.radius
      }), t
    },
    clone: function() {
      return (new U).copy(this)
    },
    copy: function(t) {
      var e, i, n;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var r = t.index;
      null !== r && this.setIndex(r.clone());
      var a = t.attributes;
      for (e in a) {
        var o = a[e];
        this.addAttribute(e, o.clone())
      }
      var s = t.morphAttributes;
      for (e in s) {
        var h = [],
          c = s[e];
        for (i = 0, n = c.length; n > i; i++) h.push(c[i].clone());
        this.morphAttributes[e] = h
      }
      var l = t.groups;
      for (i = 0, n = l.length; n > i; i++) {
        var u = l[i];
        this.addGroup(u.start, u.count, u.materialIndex)
      }
      var p = t.boundingBox;
      null !== p && (this.boundingBox = p.clone());
      var d = t.boundingSphere;
      return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), z.prototype = Object.create(w.prototype), z.prototype.constructor = z, B.prototype = Object.create(U.prototype), B.prototype.constructor = B, F.prototype = Object.create(w.prototype), F.prototype.constructor = F, G.prototype = Object.create(U.prototype), G.prototype.constructor = G;
  var Ds = 0;
  k.prototype = Object.assign(Object.create(e.prototype), {
    constructor: k,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(t) {
      if (void 0 !== t)
        for (var e in t) {
          var i = t[e];
          if (void 0 !== i)
            if ("shading" !== e) {
              var n = this[e];
              void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
          else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
        }
    },
    toJSON: function(t) {
      function e(t) {
        var e = [];
        for (var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
      var i = void 0 === t || "string" == typeof t;
      i && (t = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ta && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== qr && (n.side = this.side), this.vertexColors !== Zr && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), i) {
        var r = e(t.textures),
          a = e(t.images);
        r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
      }
      return n
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
      var e = t.clippingPlanes,
        i = null;
      if (null !== e) {
        var n = e.length;
        i = new Array(n);
        for (var r = 0; r !== n; ++r) i[r] = e[r].clone()
      }
      return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), V.prototype = Object.create(k.prototype), V.prototype.constructor = V, V.prototype.isShaderMaterial = !0, V.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = xs.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
  }, V.prototype.toJSON = function(t) {
    var e = k.prototype.toJSON.call(this, t);
    for (var i in e.uniforms = {}, this.uniforms) {
      var n = this.uniforms[i].value;
      e.uniforms[i] = n.isTexture ? {
        type: "t",
        value: n.toJSON(t).uuid
      } : n.isColor ? {
        type: "c",
        value: n.getHex()
      } : n.isVector2 ? {
        type: "v2",
        value: n.toArray()
      } : n.isVector3 ? {
        type: "v3",
        value: n.toArray()
      } : n.isVector4 ? {
        type: "v4",
        value: n.toArray()
      } : n.isMatrix4 ? {
        type: "m4",
        value: n.toArray()
      } : {
        value: n
      }
    }
    return Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
  }, Object.assign(H.prototype, {
    set: function(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    },
    at: function(t, e) {
      return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new a), e.copy(this.direction).multiplyScalar(t).add(this.origin)
    },
    lookAt: function(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this
    },
    recast: function() {
      var t = new a;
      return function(e) {
        return this.origin.copy(this.at(e, t)), this
      }
    }(),
    closestPointToPoint: function(t, e) {
      void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new a), e.subVectors(t, this.origin);
      var i = e.dot(this.direction);
      return 0 > i ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(t) {
      return Math.sqrt(this.distanceSqToPoint(t))
    },
    distanceSqToPoint: function() {
      var t = new a;
      return function(e) {
        var i = t.subVectors(e, this.origin).dot(this.direction);
        return 0 > i ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
      }
    }(),
    distanceSqToSegment: function() {
      var t = new a,
        e = new a,
        i = new a;
      return function(n, r, a, o) {
        t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
        var s, h, c, l, u = .5 * n.distanceTo(r),
          p = -this.direction.dot(e),
          d = i.dot(this.direction),
          f = -i.dot(e),
          m = i.lengthSq(),
          v = Math.abs(1 - p * p);
        if (v > 0)
          if (h = p * d - f, l = u * v, (s = p * f - d) >= 0)
            if (h >= -l)
              if (l >= h) {
                var g = 1 / v;
                c = (s *= g) * (s + p * (h *= g) + 2 * d) + h * (p * s + h + 2 * f) + m
              } else h = u, c = -(s = Math.max(0, -(p * h + d))) * s + h * (h + 2 * f) + m;
        else h = -u, c = -(s = Math.max(0, -(p * h + d))) * s + h * (h + 2 * f) + m;
        else - l >= h ? c = -(s = Math.max(0, -(-p * u + d))) * s + (h = s > 0 ? -u : Math.min(Math.max(-u, -f), u)) * (h + 2 * f) + m : l >= h ? (s = 0, c = (h = Math.min(Math.max(-u, -f), u)) * (h + 2 * f) + m) : c = -(s = Math.max(0, -(p * u + d))) * s + (h = s > 0 ? u : Math.min(Math.max(-u, -f), u)) * (h + 2 * f) + m;
        else h = p > 0 ? -u : u, c = -(s = Math.max(0, -(p * h + d))) * s + h * (h + 2 * f) + m;
        return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(e).multiplyScalar(h).add(t), c
      }
    }(),
    intersectSphere: function() {
      var t = new a;
      return function(e, i) {
        t.subVectors(e.center, this.origin);
        var n = t.dot(this.direction),
          r = t.dot(t) - n * n,
          a = e.radius * e.radius;
        if (r > a) return null;
        var o = Math.sqrt(a - r),
          s = n - o,
          h = n + o;
        return 0 > s && 0 > h ? null : 0 > s ? this.at(h, i) : this.at(s, i)
      }
    }(),
    intersectsSphere: function(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    },
    distanceToPlane: function(t) {
      var e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var i = -(this.origin.dot(t.normal) + t.constant) / e;
      return i >= 0 ? i : null
    },
    intersectPlane: function(t, e) {
      var i = this.distanceToPlane(t);
      return null === i ? null : this.at(i, e)
    },
    intersectsPlane: function(t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || 0 > t.normal.dot(this.direction) * e
    },
    intersectBox: function(t, e) {
      var i, n, r, a, o, s, h = 1 / this.direction.x,
        c = 1 / this.direction.y,
        l = 1 / this.direction.z,
        u = this.origin;
      return h >= 0 ? (i = (t.min.x - u.x) * h, n = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, n = (t.min.x - u.x) * h), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, a = (t.min.y - u.y) * c), i > a || r > n ? null : ((r > i || i != i) && (i = r), (n > a || n != n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i != i) && (i = o), (n > s || n != n) && (n = s), 0 > n ? null : this.at(i >= 0 ? i : n, e)))
    },
    intersectsBox: function() {
      var t = new a;
      return function(e) {
        return null !== this.intersectBox(e, t)
      }
    }(),
    intersectTriangle: function() {
      var t = new a,
        e = new a,
        i = new a,
        n = new a;
      return function(r, a, o, s, h) {
        e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i);
        var c, l = this.direction.dot(n);
        if (l > 0) {
          if (s) return null;
          c = 1
        } else {
          if (!(0 > l)) return null;
          c = -1, l = -l
        }
        t.subVectors(this.origin, r);
        var u = c * this.direction.dot(i.crossVectors(t, i));
        if (0 > u) return null;
        var p = c * this.direction.dot(e.cross(t));
        if (0 > p) return null;
        if (u + p > l) return null;
        var d = -c * t.dot(n);
        return 0 > d ? null : this.at(d / l, h)
      }
    }(),
    applyMatrix4: function(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    },
    equals: function(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
  }), Object.assign(j, {
    getNormal: function() {
      var t = new a;
      return function(e, i, n, r) {
        void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new a), r.subVectors(n, i), t.subVectors(e, i), r.cross(t);
        var o = r.lengthSq();
        return o > 0 ? r.multiplyScalar(1 / Math.sqrt(o)) : r.set(0, 0, 0)
      }
    }(),
    getBarycoord: function() {
      var t = new a,
        e = new a,
        i = new a;
      return function(n, r, o, s, h) {
        t.subVectors(s, r), e.subVectors(o, r), i.subVectors(n, r);
        var c = t.dot(t),
          l = t.dot(e),
          u = t.dot(i),
          p = e.dot(e),
          d = e.dot(i),
          f = c * p - l * l;
        if (void 0 === h && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), h = new a), 0 === f) return h.set(-2, -1, -1);
        var m = 1 / f,
          v = (p * u - l * d) * m,
          g = (c * d - l * u) * m;
        return h.set(1 - v - g, g, v)
      }
    }(),
    containsPoint: function() {
      var t = new a;
      return function(e, i, n, r) {
        return j.getBarycoord(e, i, n, r, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
      }
    }(),
    getUV: function() {
      var t = new a;
      return function(e, i, n, r, a, o, s, h) {
        return this.getBarycoord(e, i, n, r, t), h.set(0, 0), h.addScaledVector(a, t.x), h.addScaledVector(o, t.y), h.addScaledVector(s, t.z), h
      }
    }()
  }), Object.assign(j.prototype, {
    set: function(t, e, i) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
    },
    setFromPointsAndIndices: function(t, e, i, n) {
      return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    },
    getArea: function() {
      var t = new a,
        e = new a;
      return function() {
        return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
      }
    }(),
    getMidpoint: function(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new a), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    getNormal: function(t) {
      return j.getNormal(this.a, this.b, this.c, t)
    },
    getPlane: function(t) {
      return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new a), t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    getBarycoord: function(t, e) {
      return j.getBarycoord(t, this.a, this.b, this.c, e)
    },
    containsPoint: function(t) {
      return j.containsPoint(t, this.a, this.b, this.c)
    },
    getUV: function(t, e, i, n, r) {
      return j.getUV(t, this.a, this.b, this.c, e, i, n, r)
    },
    intersectsBox: function(t) {
      return t.intersectsTriangle(this)
    },
    closestPointToPoint: function() {
      var t = new a,
        e = new a,
        i = new a,
        n = new a,
        r = new a,
        o = new a;
      return function(s, h) {
        void 0 === h && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), h = new a);
        var c, l, u = this.a,
          p = this.b,
          d = this.c;
        t.subVectors(p, u), e.subVectors(d, u), n.subVectors(s, u);
        var f = t.dot(n),
          m = e.dot(n);
        if (0 >= f && 0 >= m) return h.copy(u);
        r.subVectors(s, p);
        var v = t.dot(r),
          g = e.dot(r);
        if (v >= 0 && v >= g) return h.copy(p);
        var y = f * g - v * m;
        if (0 >= y && f >= 0 && 0 >= v) return c = f / (f - v), h.copy(u).addScaledVector(t, c);
        o.subVectors(s, d);
        var x = t.dot(o),
          _ = e.dot(o);
        if (_ >= 0 && _ >= x) return h.copy(d);
        var b = x * m - f * _;
        if (0 >= b && m >= 0 && 0 >= _) return l = m / (m - _), h.copy(u).addScaledVector(e, l);
        var M = v * _ - x * g;
        if (0 >= M && g - v >= 0 && x - _ >= 0) return i.subVectors(d, p), l = (g - v) / (g - v + (x - _)), h.copy(p).addScaledVector(i, l);
        var w = 1 / (M + b + y);
        return c = b * w, l = y * w, h.copy(u).addScaledVector(t, c).addScaledVector(e, l)
      }
    }(),
    equals: function(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
  }), W.prototype = Object.create(k.prototype), W.prototype.constructor = W, W.prototype.isMeshBasicMaterial = !0, W.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
  }, X.prototype = Object.assign(Object.create(M.prototype), {
    constructor: X,
    isMesh: !0,
    setDrawMode: function(t) {
      this.drawMode = t
    },
    copy: function(t) {
      return M.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
    },
    updateMorphTargets: function() {
      var t, e, i, n = this.geometry;
      if (n.isBufferGeometry) {
        var r = n.morphAttributes,
          a = Object.keys(r);
        if (a.length > 0) {
          var o = r[a[0]];
          if (void 0 !== o)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; e > t; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
        }
      } else {
        var s = n.morphTargets;
        if (void 0 !== s && s.length > 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; e > t; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
      }
    },
    raycast: function() {
      function t(t, e, i, n, r, a, o, s) {
        if (null === (e.side === Yr ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, e.side !== Jr, s))) return null;
        _.copy(s), _.applyMatrix4(t.matrixWorld);
        var h = i.ray.origin.distanceTo(_);
        return h < i.near || h > i.far ? null : {
          distance: h,
          point: _.clone(),
          object: t
        }
      }

      function e(e, n, r, a, o, s, u, p, d) {
        h.fromBufferAttribute(o, u), c.fromBufferAttribute(o, p), l.fromBufferAttribute(o, d);
        var f = t(e, n, r, a, h, c, l, y);
        if (f) {
          s && (m.fromBufferAttribute(s, u), v.fromBufferAttribute(s, p), g.fromBufferAttribute(s, d), f.uv = j.getUV(y, h, c, l, m, v, g, new i));
          var _ = new x(u, p, d);
          j.getNormal(h, c, l, _.normal), f.face = _
        }
        return f
      }
      var r = new n,
        o = new H,
        s = new d,
        h = new a,
        c = new a,
        l = new a,
        u = new a,
        p = new a,
        f = new a,
        m = new i,
        v = new i,
        g = new i,
        y = new a,
        _ = new a;
      return function(n, a) {
        var d, x = this.geometry,
          _ = this.material,
          b = this.matrixWorld;
        if (void 0 !== _ && (null === x.boundingSphere && x.computeBoundingSphere(), s.copy(x.boundingSphere), s.applyMatrix4(b), !1 !== n.ray.intersectsSphere(s) && (r.getInverse(b), o.copy(n.ray).applyMatrix4(r), null === x.boundingBox || !1 !== o.intersectsBox(x.boundingBox))))
          if (x.isBufferGeometry) {
            var M, w, S, E, T, A, L, C, P, R = x.index,
              I = x.attributes.position,
              N = x.attributes.uv,
              O = x.groups,
              D = x.drawRange;
            if (null !== R)
              if (Array.isArray(_))
                for (E = 0, A = O.length; A > E; E++)
                  for (P = _[(C = O[E]).materialIndex], T = Math.max(C.start, D.start), L = Math.min(C.start + C.count, D.start + D.count); L > T; T += 3) M = R.getX(T), w = R.getX(T + 1), S = R.getX(T + 2), (d = e(this, P, n, o, I, N, M, w, S)) && (d.faceIndex = Math.floor(T / 3), a.push(d));
              else
                for (E = Math.max(0, D.start), A = Math.min(R.count, D.start + D.count); A > E; E += 3) M = R.getX(E), w = R.getX(E + 1), S = R.getX(E + 2), (d = e(this, _, n, o, I, N, M, w, S)) && (d.faceIndex = Math.floor(E / 3), a.push(d));
            else if (void 0 !== I)
              if (Array.isArray(_))
                for (E = 0, A = O.length; A > E; E++)
                  for (P = _[(C = O[E]).materialIndex], T = Math.max(C.start, D.start), L = Math.min(C.start + C.count, D.start + D.count); L > T; T += 3)(d = e(this, P, n, o, I, N, M = T, w = T + 1, S = T + 2)) && (d.faceIndex = Math.floor(T / 3), a.push(d));
              else
                for (E = Math.max(0, D.start), A = Math.min(I.count, D.start + D.count); A > E; E += 3)(d = e(this, _, n, o, I, N, M = E, w = E + 1, S = E + 2)) && (d.faceIndex = Math.floor(E / 3), a.push(d))
          } else if (x.isGeometry) {
          var U, z, B, F, G = Array.isArray(_),
            k = x.vertices,
            V = x.faces,
            H = x.faceVertexUvs[0];
          H.length > 0 && (F = H);
          for (var W = 0, X = V.length; X > W; W++) {
            var q = V[W],
              Y = G ? _[q.materialIndex] : _;
            if (void 0 !== Y) {
              if (U = k[q.a], z = k[q.b], B = k[q.c], !0 === Y.morphTargets) {
                var J = x.morphTargets,
                  Z = this.morphTargetInfluences;
                h.set(0, 0, 0), c.set(0, 0, 0), l.set(0, 0, 0);
                for (var K = 0, Q = J.length; Q > K; K++) {
                  var $ = Z[K];
                  if (0 !== $) {
                    var tt = J[K].vertices;
                    h.addScaledVector(u.subVectors(tt[q.a], U), $), c.addScaledVector(p.subVectors(tt[q.b], z), $), l.addScaledVector(f.subVectors(tt[q.c], B), $)
                  }
                }
                h.add(U), c.add(z), l.add(B), U = h, z = c, B = l
              }
              if (d = t(this, Y, n, o, U, z, B, y)) {
                if (F && F[W]) {
                  var et = F[W];
                  m.copy(et[0]), v.copy(et[1]), g.copy(et[2]), d.uv = j.getUV(y, U, z, B, m, v, g, new i)
                }
                d.face = q, d.faceIndex = W, a.push(d)
              }
            }
          }
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), rt.prototype = Object.create(s.prototype), rt.prototype.constructor = rt, rt.prototype.isCubeTexture = !0, Object.defineProperty(rt.prototype, "images", {
    get: function() {
      return this.image
    },
    set: function(t) {
      this.image = t
    }
  });
  var Us = new s,
    zs = new rt,
    Bs = [],
    Fs = [],
    Gs = new Float32Array(16),
    ks = new Float32Array(9),
    Vs = new Float32Array(4);
  Ot.prototype.updateCache = function(t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), ht(e, t)
  }, Dt.prototype.setValue = function(t, e, i) {
    for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
      var o = n[r];
      o.setValue(t, e[o.id], i)
    }
  };
  var Hs = /([\w\d_]+)(\])?(\[|\.)?/g;
  Bt.prototype.setValue = function(t, e, i) {
    var n = this.map[e];
    void 0 !== n && n.setValue(t, i, this.renderer)
  }, Bt.prototype.setOptional = function(t, e, i) {
    var n = e[i];
    void 0 !== n && this.setValue(t, i, n)
  }, Bt.upload = function(t, e, i, n) {
    for (var r = 0, a = e.length; r !== a; ++r) {
      var o = e[r],
        s = i[o.id];
      !1 !== s.needsUpdate && o.setValue(t, s.value, n)
    }
  }, Bt.seqWithValue = function(t, e) {
    for (var i = [], n = 0, r = t.length; n !== r; ++n) {
      var a = t[n];
      a.id in e && i.push(a)
    }
    return i
  };
  var js, Ws = 0,
    Xs = 0;
  se.prototype = Object.create(k.prototype), se.prototype.constructor = se, se.prototype.isMeshDepthMaterial = !0, se.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
  }, he.prototype = Object.create(k.prototype), he.prototype.constructor = he, he.prototype.isMeshDistanceMaterial = !0, he.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
  }, de.prototype.isFogExp2 = !0, de.prototype.clone = function() {
    return new de(this.color, this.density)
  }, de.prototype.toJSON = function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    }
  }, fe.prototype.isFog = !0, fe.prototype.clone = function() {
    return new fe(this.color, this.near, this.far)
  }, fe.prototype.toJSON = function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    }
  }, me.prototype = Object.assign(Object.create(M.prototype), {
    constructor: me,
    copy: function(t, e) {
      return M.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    },
    toJSON: function(t) {
      var e = M.prototype.toJSON.call(this, t);
      return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    }
  }), Object.defineProperty(ve.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(ve.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.stride, i *= e.stride;
      for (var n = 0, r = this.stride; r > n; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    }
  }), Object.defineProperties(ge.prototype, {
    count: {
      get: function() {
        return this.data.count
      }
    },
    array: {
      get: function() {
        return this.data.array
      }
    }
  }), Object.assign(ge.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this
    },
    setY: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this
    },
    setZ: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this
    },
    setW: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this
    },
    getX: function(t) {
      return this.data.array[t * this.data.stride + this.offset]
    },
    getY: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 1]
    },
    getZ: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 2]
    },
    getW: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 3]
    },
    setXY: function(t, e, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
    }
  }), ye.prototype = Object.create(k.prototype), ye.prototype.constructor = ye, ye.prototype.isSpriteMaterial = !0, ye.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
  }, xe.prototype = Object.assign(Object.create(M.prototype), {
    constructor: xe,
    isSprite: !0,
    raycast: function() {
      function t(t, e, i, n, r, a) {
        s.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (h.x = a * s.x - r * s.y, h.y = r * s.x + a * s.y) : h.copy(s), t.copy(e), t.x += h.x, t.y += h.y, t.applyMatrix4(c)
      }
      var e = new a,
        r = new a,
        o = new a,
        s = new i,
        h = new i,
        c = new n,
        l = new a,
        u = new a,
        p = new a,
        d = new i,
        f = new i,
        m = new i;
      return function(n, a) {
        r.setFromMatrixScale(this.matrixWorld), c.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), o.setFromMatrixPosition(this.modelViewMatrix);
        var s, h, v = this.material.rotation;
        0 !== v && (h = Math.cos(v), s = Math.sin(v));
        var g = this.center;
        t(l.set(-.5, -.5, 0), o, g, r, s, h), t(u.set(.5, -.5, 0), o, g, r, s, h), t(p.set(.5, .5, 0), o, g, r, s, h), d.set(0, 0), f.set(1, 0), m.set(1, 1);
        var y = n.ray.intersectTriangle(l, u, p, !1, e);
        if (null !== y || (t(u.set(-.5, .5, 0), o, g, r, s, h), f.set(0, 1), null !== (y = n.ray.intersectTriangle(l, p, u, !1, e)))) {
          var x = n.ray.origin.distanceTo(e);
          x < n.near || x > n.far || a.push({
            distance: x,
            point: e.clone(),
            uv: j.getUV(e, l, u, p, d, f, m, new i),
            face: null,
            object: this
          })
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.material).copy(this)
    },
    copy: function(t) {
      return M.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
    }
  }), _e.prototype = Object.assign(Object.create(M.prototype), {
    constructor: _e,
    copy: function(t) {
      M.prototype.copy.call(this, t, !1);
      for (var e = t.levels, i = 0, n = e.length; n > i; i++) {
        var r = e[i];
        this.addLevel(r.object.clone(), r.distance)
      }
      return this
    },
    addLevel: function(t, e) {
      void 0 === e && (e = 0), e = Math.abs(e);
      for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
      i.splice(n, 0, {
        distance: e,
        object: t
      }), this.add(t)
    },
    getObjectForDistance: function(t) {
      for (var e = this.levels, i = 1, n = e.length; n > i && !(t < e[i].distance); i++);
      return e[i - 1].object
    },
    raycast: function() {
      var t = new a;
      return function(e, i) {
        t.setFromMatrixPosition(this.matrixWorld);
        var n = e.ray.origin.distanceTo(t);
        this.getObjectForDistance(n).raycast(e, i)
      }
    }(),
    update: function() {
      var t = new a,
        e = new a;
      return function(i) {
        var n = this.levels;
        if (n.length > 1) {
          t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
          var r = t.distanceTo(e);
          n[0].object.visible = !0;
          for (var a = 1, o = n.length; o > a && r >= n[a].distance; a++) n[a - 1].object.visible = !1, n[a].object.visible = !0;
          for (; o > a; a++) n[a].object.visible = !1
        }
      }
    }(),
    toJSON: function(t) {
      var e = M.prototype.toJSON.call(this, t);
      e.object.levels = [];
      for (var i = this.levels, n = 0, r = i.length; r > n; n++) {
        var a = i[n];
        e.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        })
      }
      return e
    }
  }), Object.assign(be.prototype, {
    calculateInverses: function() {
      this.boneInverses = [];
      for (var t = 0, e = this.bones.length; e > t; t++) {
        var i = new n;
        this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
      }
    },
    pose: function() {
      var t, e, i;
      for (e = 0, i = this.bones.length; i > e; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
      for (e = 0, i = this.bones.length; i > e; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    },
    update: function() {
      var t = new n,
        e = new n;
      return function() {
        for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = i.length; s > o; o++) {
          var h = i[o] ? i[o].matrixWorld : e;
          t.multiplyMatrices(h, n[o]), t.toArray(r, 16 * o)
        }
        void 0 !== a && (a.needsUpdate = !0)
      }
    }(),
    clone: function() {
      return new be(this.bones, this.boneInverses)
    },
    getBoneByName: function(t) {
      for (var e = 0, i = this.bones.length; i > e; e++) {
        var n = this.bones[e];
        if (n.name === t) return n
      }
    }
  }), Me.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Me,
    isBone: !0
  }), we.prototype = Object.assign(Object.create(X.prototype), {
    constructor: we,
    isSkinnedMesh: !0,
    initBones: function() {
      var t, e, i, n, r = [];
      if (this.geometry && void 0 !== this.geometry.bones) {
        for (i = 0, n = this.geometry.bones.length; n > i; i++) e = this.geometry.bones[i], t = new Me, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
        for (i = 0, n = this.geometry.bones.length; n > i; i++) - 1 !== (e = this.geometry.bones[i]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
      }
      return this.updateMatrixWorld(!0), r
    },
    bind: function(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    },
    pose: function() {
      this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
      var t, e;
      if (this.geometry && this.geometry.isGeometry)
        for (e = 0; e < this.geometry.skinWeights.length; e++) {
          var i = this.geometry.skinWeights[e];
          1 / 0 !== (t = 1 / i.manhattanLength()) ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
        } else if (this.geometry && this.geometry.isBufferGeometry) {
          var n = new h,
            r = this.geometry.attributes.skinWeight;
          for (e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n.w = r.getW(e), 1 / 0 !== (t = 1 / n.manhattanLength()) ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w)
        }
    },
    updateMatrixWorld: function(t) {
      X.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Se.prototype = Object.create(k.prototype), Se.prototype.constructor = Se, Se.prototype.isLineBasicMaterial = !0, Se.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
  }, Ee.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Ee,
    isLine: !0,
    computeLineDistances: function() {
      var t = new a,
        e = new a;
      return function() {
        var i = this.geometry;
        if (i.isBufferGeometry)
          if (null === i.index) {
            for (var n = i.attributes.position, r = [0], a = 1, o = n.count; o > a; a++) t.fromBufferAttribute(n, a - 1), e.fromBufferAttribute(n, a), r[a] = r[a - 1], r[a] += t.distanceTo(e);
            i.addAttribute("lineDistance", new I(r, 1))
          } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else if (i.isGeometry) {
          var s = i.vertices;
          (r = i.lineDistances)[0] = 0;
          for (a = 1, o = s.length; o > a; a++) r[a] = r[a - 1], r[a] += s[a - 1].distanceTo(s[a])
        }
        return this
      }
    }(),
    raycast: function() {
      var t = new n,
        e = new H,
        i = new d;
      return function(n, r) {
        var o = n.linePrecision,
          s = this.geometry,
          h = this.matrixWorld;
        if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), i.radius += o, !1 !== n.ray.intersectsSphere(i)) {
          t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
          var c = o / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = c * c,
            u = new a,
            p = new a,
            d = new a,
            f = new a,
            m = this && this.isLineSegments ? 2 : 1;
          if (s.isBufferGeometry) {
            var v = s.index,
              g = s.attributes.position.array;
            if (null !== v)
              for (var y = v.array, x = 0, _ = y.length - 1; _ > x; x += m) {
                var b = y[x],
                  M = y[x + 1];
                if (u.fromArray(g, 3 * b), p.fromArray(g, 3 * M), !(e.distanceSqToSegment(u, p, f, d) > l)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({
                  distance: E,
                  point: d.clone().applyMatrix4(this.matrixWorld),
                  index: x,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              } else
                for (x = 0, _ = g.length / 3 - 1; _ > x; x += m) {
                  if (u.fromArray(g, 3 * x), p.fromArray(g, 3 * x + 3), !(e.distanceSqToSegment(u, p, f, d) > l)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({
                    distance: E,
                    point: d.clone().applyMatrix4(this.matrixWorld),
                    index: x,
                    face: null,
                    faceIndex: null,
                    object: this
                  })
                }
          } else if (s.isGeometry) {
            var w = s.vertices,
              S = w.length;
            for (x = 0; S - 1 > x; x += m) {
              var E;
              if (!(e.distanceSqToSegment(w[x], w[x + 1], f, d) > l)) f.applyMatrix4(this.matrixWorld), (E = n.ray.origin.distanceTo(f)) < n.near || E > n.far || r.push({
                distance: E,
                point: d.clone().applyMatrix4(this.matrixWorld),
                index: x,
                face: null,
                faceIndex: null,
                object: this
              })
            }
          }
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Te.prototype = Object.assign(Object.create(Ee.prototype), {
    constructor: Te,
    isLineSegments: !0,
    computeLineDistances: function() {
      var t = new a,
        e = new a;
      return function() {
        var i = this.geometry;
        if (i.isBufferGeometry)
          if (null === i.index) {
            for (var n = i.attributes.position, r = [], a = 0, o = n.count; o > a; a += 2) t.fromBufferAttribute(n, a), e.fromBufferAttribute(n, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e);
            i.addAttribute("lineDistance", new I(r, 1))
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else if (i.isGeometry) {
          var s = i.vertices;
          for (r = i.lineDistances, a = 0, o = s.length; o > a; a += 2) t.copy(s[a]), e.copy(s[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + t.distanceTo(e)
        }
        return this
      }
    }()
  }), Ae.prototype = Object.assign(Object.create(Ee.prototype), {
    constructor: Ae,
    isLineLoop: !0
  }), Le.prototype = Object.create(k.prototype), Le.prototype.constructor = Le, Le.prototype.isPointsMaterial = !0, Le.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
  }, Ce.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Ce,
    isPoints: !0,
    raycast: function() {
      var t = new n,
        e = new H,
        i = new d;
      return function(n, r) {
        function o(t, i) {
          var a = e.distanceSqToPoint(t);
          if (p > a) {
            e.closestPointToPoint(t, f), f.applyMatrix4(c);
            var o = n.ray.origin.distanceTo(f);
            if (o < n.near || o > n.far) return;
            r.push({
              distance: o,
              distanceToRay: Math.sqrt(a),
              point: f.clone(),
              index: i,
              face: null,
              object: s
            })
          }
        }
        var s = this,
          h = this.geometry,
          c = this.matrixWorld,
          l = n.params.Points.threshold;
        if (null === h.boundingSphere && h.computeBoundingSphere(), i.copy(h.boundingSphere), i.applyMatrix4(c), i.radius += l, !1 !== n.ray.intersectsSphere(i)) {
          t.getInverse(c), e.copy(n.ray).applyMatrix4(t);
          var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            p = u * u,
            d = new a,
            f = new a;
          if (h.isBufferGeometry) {
            var m = h.index,
              v = h.attributes.position.array;
            if (null !== m)
              for (var g = m.array, y = 0, x = g.length; x > y; y++) {
                var _ = g[y];
                d.fromArray(v, 3 * _), o(d, _)
              } else {
                y = 0;
                for (var b = v.length / 3; b > y; y++) d.fromArray(v, 3 * y), o(d, y)
              }
          } else {
            var M = h.vertices;
            for (y = 0, b = M.length; b > y; y++) o(M[y], y)
          }
        }
      }
    }(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), Pe.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Pe,
    isGroup: !0
  }), Re.prototype = Object.assign(Object.create(s.prototype), {
    constructor: Re,
    isVideoTexture: !0,
    update: function() {
      var t = this.image;
      t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }), Ie.prototype = Object.create(s.prototype), Ie.prototype.constructor = Ie, Ie.prototype.isCompressedTexture = !0, Ne.prototype = Object.create(s.prototype), Ne.prototype.constructor = Ne, Ne.prototype.isCanvasTexture = !0, Oe.prototype = Object.create(s.prototype), Oe.prototype.constructor = Oe, Oe.prototype.isDepthTexture = !0, De.prototype = Object.create(U.prototype), De.prototype.constructor = De, Ue.prototype = Object.create(w.prototype), Ue.prototype.constructor = Ue, ze.prototype = Object.create(U.prototype), ze.prototype.constructor = ze, Be.prototype = Object.create(w.prototype), Be.prototype.constructor = Be, Fe.prototype = Object.create(U.prototype), Fe.prototype.constructor = Fe, Ge.prototype = Object.create(w.prototype), Ge.prototype.constructor = Ge, ke.prototype = Object.create(Fe.prototype), ke.prototype.constructor = ke, Ve.prototype = Object.create(w.prototype), Ve.prototype.constructor = Ve, He.prototype = Object.create(Fe.prototype), He.prototype.constructor = He, je.prototype = Object.create(w.prototype), je.prototype.constructor = je, We.prototype = Object.create(Fe.prototype), We.prototype.constructor = We, Xe.prototype = Object.create(w.prototype), Xe.prototype.constructor = Xe, qe.prototype = Object.create(Fe.prototype), qe.prototype.constructor = qe, Ye.prototype = Object.create(w.prototype), Ye.prototype.constructor = Ye, Je.prototype = Object.create(U.prototype), Je.prototype.constructor = Je, Ze.prototype = Object.create(w.prototype), Ze.prototype.constructor = Ze, Ke.prototype = Object.create(U.prototype), Ke.prototype.constructor = Ke, Qe.prototype = Object.create(w.prototype), Qe.prototype.constructor = Qe, $e.prototype = Object.create(U.prototype), $e.prototype.constructor = $e;
  var qs = function(t, e, i) {
      i = i || 2;
      var n, r, a, o, s, h, c, l = e && e.length,
        u = l ? e[0] * i : t.length,
        p = ti(t, 0, u, i, !0),
        d = [];
      if (!p) return d;
      if (l && (p = function(t, e, i, n) {
          var r, a, o, s = [];
          for (r = 0, a = e.length; a > r; r++)(o = ti(t, e[r] * n, a - 1 > r ? e[r + 1] * n : t.length, n, !1)) === o.next && (o.steiner = !0), s.push(li(o));
          for (s.sort(si), r = 0; r < s.length; r++) hi(s[r], i), i = ei(i, i.next);
          return i
        }(t, e, p, i)), t.length > 80 * i) {
        n = a = t[0], r = o = t[1];
        for (var f = i; u > f; f += i) n > (s = t[f]) && (n = s), r > (h = t[f + 1]) && (r = h), s > a && (a = s), h > o && (o = h);
        c = 0 !== (c = Math.max(a - n, o - r)) ? 1 / c : 0
      }
      return ii(p, d, i, n, r, c), d
    },
    Ys = {
      area: function(t) {
        for (var e = t.length, i = 0, n = e - 1, r = 0; e > r; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
        return .5 * i
      },
      isClockWise: function(t) {
        return Ys.area(t) < 0
      },
      triangulateShape: function(t, e) {
        var i = [],
          n = [],
          r = [];
        bi(t), Mi(i, t);
        var a = t.length;
        e.forEach(bi);
        for (var o = 0; o < e.length; o++) n.push(a), a += e[o].length, Mi(i, e[o]);
        var s = qs(i, n);
        for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
        return r
      }
    };
  wi.prototype = Object.create(w.prototype), wi.prototype.constructor = wi, wi.prototype.toJSON = function() {
    var t = w.prototype.toJSON.call(this);
    return Ei(this.parameters.shapes, this.parameters.options, t)
  }, Si.prototype = Object.create(U.prototype), Si.prototype.constructor = Si, Si.prototype.toJSON = function() {
    var t = U.prototype.toJSON.call(this);
    return Ei(this.parameters.shapes, this.parameters.options, t)
  };
  var Js = {
    generateTopUV: function(t, e, n, r, a) {
      var o = e[3 * n],
        s = e[3 * n + 1],
        h = e[3 * r],
        c = e[3 * r + 1],
        l = e[3 * a],
        u = e[3 * a + 1];
      return [new i(o, s), new i(h, c), new i(l, u)]
    },
    generateSideWallUV: function(t, e, n, r, a, o) {
      var s = e[3 * n],
        h = e[3 * n + 1],
        c = e[3 * n + 2],
        l = e[3 * r],
        u = e[3 * r + 1],
        p = e[3 * r + 2],
        d = e[3 * a],
        f = e[3 * a + 1],
        m = e[3 * a + 2],
        v = e[3 * o],
        g = e[3 * o + 1],
        y = e[3 * o + 2];
      return Math.abs(h - u) < .01 ? [new i(s, 1 - c), new i(l, 1 - p), new i(d, 1 - m), new i(v, 1 - y)] : [new i(h, 1 - c), new i(u, 1 - p), new i(f, 1 - m), new i(g, 1 - y)]
    }
  };
  Ti.prototype = Object.create(w.prototype), Ti.prototype.constructor = Ti, Ai.prototype = Object.create(Si.prototype), Ai.prototype.constructor = Ai, Li.prototype = Object.create(w.prototype), Li.prototype.constructor = Li, Ci.prototype = Object.create(U.prototype), Ci.prototype.constructor = Ci, Pi.prototype = Object.create(w.prototype), Pi.prototype.constructor = Pi, Ri.prototype = Object.create(U.prototype), Ri.prototype.constructor = Ri, Ii.prototype = Object.create(w.prototype), Ii.prototype.constructor = Ii, Ni.prototype = Object.create(U.prototype), Ni.prototype.constructor = Ni, Oi.prototype = Object.create(w.prototype), Oi.prototype.constructor = Oi, Oi.prototype.toJSON = function() {
    var t = w.prototype.toJSON.call(this);
    return Ui(this.parameters.shapes, t)
  }, Di.prototype = Object.create(U.prototype), Di.prototype.constructor = Di, Di.prototype.toJSON = function() {
    var t = U.prototype.toJSON.call(this);
    return Ui(this.parameters.shapes, t)
  }, zi.prototype = Object.create(U.prototype), zi.prototype.constructor = zi, Bi.prototype = Object.create(w.prototype), Bi.prototype.constructor = Bi, Fi.prototype = Object.create(U.prototype), Fi.prototype.constructor = Fi, Gi.prototype = Object.create(Bi.prototype), Gi.prototype.constructor = Gi, ki.prototype = Object.create(Fi.prototype), ki.prototype.constructor = ki, Vi.prototype = Object.create(w.prototype), Vi.prototype.constructor = Vi, Hi.prototype = Object.create(U.prototype), Hi.prototype.constructor = Hi;
  var Zs = Object.freeze({
    __proto__: null,
    WireframeGeometry: De,
    ParametricGeometry: Ue,
    ParametricBufferGeometry: ze,
    TetrahedronGeometry: Ge,
    TetrahedronBufferGeometry: ke,
    OctahedronGeometry: Ve,
    OctahedronBufferGeometry: He,
    IcosahedronGeometry: je,
    IcosahedronBufferGeometry: We,
    DodecahedronGeometry: Xe,
    DodecahedronBufferGeometry: qe,
    PolyhedronGeometry: Be,
    PolyhedronBufferGeometry: Fe,
    TubeGeometry: Ye,
    TubeBufferGeometry: Je,
    TorusKnotGeometry: Ze,
    TorusKnotBufferGeometry: Ke,
    TorusGeometry: Qe,
    TorusBufferGeometry: $e,
    TextGeometry: Ti,
    TextBufferGeometry: Ai,
    SphereGeometry: Li,
    SphereBufferGeometry: Ci,
    RingGeometry: Pi,
    RingBufferGeometry: Ri,
    PlaneGeometry: F,
    PlaneBufferGeometry: G,
    LatheGeometry: Ii,
    LatheBufferGeometry: Ni,
    ShapeGeometry: Oi,
    ShapeBufferGeometry: Di,
    ExtrudeGeometry: wi,
    ExtrudeBufferGeometry: Si,
    EdgesGeometry: zi,
    ConeGeometry: Gi,
    ConeBufferGeometry: ki,
    CylinderGeometry: Bi,
    CylinderBufferGeometry: Fi,
    CircleGeometry: Vi,
    CircleBufferGeometry: Hi,
    BoxGeometry: z,
    BoxBufferGeometry: B
  });
  ji.prototype = Object.create(k.prototype), ji.prototype.constructor = ji, ji.prototype.isShadowMaterial = !0, ji.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this
  }, Wi.prototype = Object.create(V.prototype), Wi.prototype.constructor = Wi, Wi.prototype.isRawShaderMaterial = !0, Xi.prototype = Object.create(k.prototype), Xi.prototype.constructor = Xi, Xi.prototype.isMeshStandardMaterial = !0, Xi.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.defines = {
      STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, qi.prototype = Object.create(Xi.prototype), qi.prototype.constructor = qi, qi.prototype.isMeshPhysicalMaterial = !0, qi.prototype.copy = function(t) {
    return Xi.prototype.copy.call(this, t), this.defines = {
      PHYSICAL: ""
    }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
  }, Yi.prototype = Object.create(k.prototype), Yi.prototype.constructor = Yi, Yi.prototype.isMeshPhongMaterial = !0, Yi.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Ji.prototype = Object.create(Yi.prototype), Ji.prototype.constructor = Ji, Ji.prototype.isMeshToonMaterial = !0, Ji.prototype.copy = function(t) {
    return Yi.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
  }, Zi.prototype = Object.create(k.prototype), Zi.prototype.constructor = Zi, Zi.prototype.isMeshNormalMaterial = !0, Zi.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Ki.prototype = Object.create(k.prototype), Ki.prototype.constructor = Ki, Ki.prototype.isMeshLambertMaterial = !0, Ki.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Qi.prototype = Object.create(k.prototype), Qi.prototype.constructor = Qi, Qi.prototype.isMeshMatcapMaterial = !0, Qi.prototype.copy = function(t) {
    return k.prototype.copy.call(this, t), this.defines = {
      MATCAP: ""
    }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, $i.prototype = Object.create(Se.prototype), $i.prototype.constructor = $i, $i.prototype.isLineDashedMaterial = !0, $i.prototype.copy = function(t) {
    return Se.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
  };
  var Ks = Object.freeze({
      __proto__: null,
      ShadowMaterial: ji,
      SpriteMaterial: ye,
      RawShaderMaterial: Wi,
      ShaderMaterial: V,
      PointsMaterial: Le,
      MeshPhysicalMaterial: qi,
      MeshStandardMaterial: Xi,
      MeshPhongMaterial: Yi,
      MeshToonMaterial: Ji,
      MeshNormalMaterial: Zi,
      MeshLambertMaterial: Ki,
      MeshDepthMaterial: se,
      MeshDistanceMaterial: he,
      MeshBasicMaterial: W,
      MeshMatcapMaterial: Qi,
      LineDashedMaterial: $i,
      LineBasicMaterial: Se,
      Material: k
    }),
    Qs = {
      enabled: !1,
      files: {},
      add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e)
      },
      get: function(t) {
        return !1 !== this.enabled ? this.files[t] : void 0
      },
      remove: function(t) {
        delete this.files[t]
      },
      clear: function() {
        this.files = {}
      }
    },
    $s = new tn,
    th = {};
  Object.assign(en.prototype, {
    load: function(t, e, i, n) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this,
        a = Qs.get(t);
      if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
        e && e(a), r.manager.itemEnd(t)
      }), 0), a;
      if (void 0 === th[t]) {
        var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (o) {
          var s = o[1],
            h = !!o[2],
            c = o[3];
          c = window.decodeURIComponent(c), h && (c = window.atob(c));
          try {
            var l, u = (this.responseType || "").toLowerCase();
            switch (u) {
              case "arraybuffer":
              case "blob":
                for (var p = new Uint8Array(c.length), d = 0; d < c.length; d++) p[d] = c.charCodeAt(d);
                l = "blob" === u ? new Blob([p.buffer], {
                  type: s
                }) : p.buffer;
                break;
              case "document":
                var f = new DOMParser;
                l = f.parseFromString(c, s);
                break;
              case "json":
                l = JSON.parse(c);
                break;
              default:
                l = c
            }
            window.setTimeout((function() {
              e && e(l), r.manager.itemEnd(t)
            }), 0)
          } catch (e) {
            window.setTimeout((function() {
              n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
            }), 0)
          }
        } else {
          th[t] = [], th[t].push({
            onLoad: e,
            onProgress: i,
            onError: n
          });
          var m = new XMLHttpRequest;
          for (var v in m.open("GET", t, !0), m.addEventListener("load", (function(e) {
              var i = this.response;
              Qs.add(t, i);
              var n = th[t];
              if (delete th[t], 200 === this.status || 0 === this.status) {
                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                for (var a = 0, o = n.length; o > a; a++) {
                  (s = n[a]).onLoad && s.onLoad(i)
                }
                r.manager.itemEnd(t)
              } else {
                for (a = 0, o = n.length; o > a; a++) {
                  var s;
                  (s = n[a]).onError && s.onError(e)
                }
                r.manager.itemEnd(t), r.manager.itemError(t)
              }
            }), !1), m.addEventListener("progress", (function(e) {
              for (var i = th[t], n = 0, r = i.length; r > n; n++) {
                var a = i[n];
                a.onProgress && a.onProgress(e)
              }
            }), !1), m.addEventListener("error", (function(e) {
              var i = th[t];
              delete th[t];
              for (var n = 0, a = i.length; a > n; n++) {
                var o = i[n];
                o.onError && o.onError(e)
              }
              r.manager.itemEnd(t), r.manager.itemError(t)
            }), !1), m.addEventListener("abort", (function(e) {
              var i = th[t];
              delete th[t];
              for (var n = 0, a = i.length; a > n; n++) {
                var o = i[n];
                o.onError && o.onError(e)
              }
              r.manager.itemEnd(t), r.manager.itemError(t)
            }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
          m.send(null)
        }
        return r.manager.itemStart(t), m
      }
      th[t].push({
        onLoad: e,
        onProgress: i,
        onError: n
      })
    },
    setPath: function(t) {
      return this.path = t, this
    },
    setResponseType: function(t) {
      return this.responseType = t, this
    },
    setWithCredentials: function(t) {
      return this.withCredentials = t, this
    },
    setMimeType: function(t) {
      return this.mimeType = t, this
    },
    setRequestHeader: function(t) {
      return this.requestHeader = t, this
    }
  }), Object.assign(nn.prototype, {
    load: function(t, e, i, n) {
      function r(r) {
        h.load(t[r], (function(t) {
          var i = a._parser(t, !0);
          o[r] = {
            width: i.width,
            height: i.height,
            format: i.format,
            mipmaps: i.mipmaps
          }, 6 === (c += 1) && (1 === i.mipmapCount && (s.minFilter = Ka), s.format = i.format, s.needsUpdate = !0, e && e(s))
        }), i, n)
      }
      var a = this,
        o = [],
        s = new Ie;
      s.image = o;
      var h = new en(this.manager);
      if (h.setPath(this.path), h.setResponseType("arraybuffer"), Array.isArray(t))
        for (var c = 0, l = 0, u = t.length; u > l; ++l) r(l);
      else h.load(t, (function(t) {
        var i = a._parser(t, !0);
        if (i.isCubemap)
          for (var n = i.mipmaps.length / i.mipmapCount, r = 0; n > r; r++) {
            o[r] = {
              mipmaps: []
            };
            for (var h = 0; h < i.mipmapCount; h++) o[r].mipmaps.push(i.mipmaps[r * i.mipmapCount + h]), o[r].format = i.format, o[r].width = i.width, o[r].height = i.height
          } else s.image.width = i.width, s.image.height = i.height, s.mipmaps = i.mipmaps;
        1 === i.mipmapCount && (s.minFilter = Ka), s.format = i.format, s.needsUpdate = !0, e && e(s)
      }), i, n);
      return s
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(rn.prototype, {
    load: function(t, e, i, n) {
      var r = this,
        a = new u,
        o = new en(this.manager);
      return o.setResponseType("arraybuffer"), o.load(t, (function(t) {
        var i = r._parser(t);
        i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : Xa, a.wrapT = void 0 !== i.wrapT ? i.wrapT : Xa, a.magFilter = void 0 !== i.magFilter ? i.magFilter : Ka, a.minFilter = void 0 !== i.minFilter ? i.minFilter : $a, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = Ka), a.needsUpdate = !0, e && e(a, i))
      }), i, n), a
    }
  }), Object.assign(an.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      function r() {
        h.removeEventListener("load", r, !1), h.removeEventListener("error", a, !1), Qs.add(t, this), e && e(this), o.manager.itemEnd(t)
      }

      function a(e) {
        h.removeEventListener("load", r, !1), h.removeEventListener("error", a, !1), n && n(e), o.manager.itemEnd(t), o.manager.itemError(t)
      }
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var o = this,
        s = Qs.get(t);
      if (void 0 !== s) return o.manager.itemStart(t), setTimeout((function() {
        e && e(s), o.manager.itemEnd(t)
      }), 0), s;
      var h = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      return h.addEventListener("load", r, !1), h.addEventListener("error", a, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (h.crossOrigin = this.crossOrigin), o.manager.itemStart(t), h.src = t, h
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(on.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      function r(i) {
        o.load(t[i], (function(t) {
          a.images[i] = t, 6 === ++s && (a.needsUpdate = !0, e && e(a))
        }), void 0, n)
      }
      var a = new rt,
        o = new an(this.manager);
      o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
      for (var s = 0, h = 0; h < t.length; ++h) r(h);
      return a
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(sn.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      var r = new s,
        a = new an(this.manager);
      return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(i) {
        r.image = i;
        var n = t.search(/\.jpe?g$/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
        r.format = n ? fo : mo, r.needsUpdate = !0, void 0 !== e && e(r)
      }), i, n), r
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(hn.prototype, {
    getPoint: function() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null
    },
    getPointAt: function(t, e) {
      var i = this.getUtoTmapping(t);
      return this.getPoint(i, e)
    },
    getPoints: function(t, e) {
      void 0 === t && (t = 5), e = e || [];
      for (var i = 0; t >= i; i++) e.push(this.getPoint(i / t));
      return e
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 5);
      for (var e = [], i = 0; t >= i; i++) e.push(this.getPointAt(i / t));
      return e
    },
    getLength: function() {
      var t = this.getLengths();
      return t[t.length - 1]
    },
    getLengths: function(t) {
      if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e, i, n = [],
        r = this.getPoint(0),
        a = 0;
      for (n.push(0), i = 1; t >= i; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
      return this.cacheArcLengths = n, n
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.getLengths()
    },
    getUtoTmapping: function(t, e) {
      var i, n = this.getLengths(),
        r = 0,
        a = n.length;
      i = e || t * n[a - 1];
      for (var o, s = 0, h = a - 1; h >= s;)
        if (0 > (o = n[r = Math.floor(s + (h - s) / 2)] - i)) s = r + 1;
        else {
          if (!(o > 0)) {
            h = r;
            break
          }
          h = r - 1
        } if (n[r = h] === i) return r / (a - 1);
      var c = n[r];
      return (r + (i - c) / (n[r + 1] - c)) / (a - 1)
    },
    getTangent: function(t) {
      var e = 1e-4,
        i = t - e,
        n = t + e;
      0 > i && (i = 0), n > 1 && (n = 1);
      var r = this.getPoint(i);
      return this.getPoint(n).clone().sub(r).normalize()
    },
    getTangentAt: function(t) {
      var e = this.getUtoTmapping(t);
      return this.getTangent(e)
    },
    computeFrenetFrames: function(t, e) {
      var i, r, o, s = new a,
        h = [],
        c = [],
        l = [],
        u = new a,
        p = new n;
      for (i = 0; t >= i; i++) r = i / t, h[i] = this.getTangentAt(r), h[i].normalize();
      c[0] = new a, l[0] = new a;
      var d = Number.MAX_VALUE,
        f = Math.abs(h[0].x),
        m = Math.abs(h[0].y),
        v = Math.abs(h[0].z);
      for (d >= f && (d = f, s.set(1, 0, 0)), d >= m && (d = m, s.set(0, 1, 0)), d >= v && s.set(0, 0, 1), u.crossVectors(h[0], s).normalize(), c[0].crossVectors(h[0], u), l[0].crossVectors(h[0], c[0]), i = 1; t >= i; i++) c[i] = c[i - 1].clone(), l[i] = l[i - 1].clone(), u.crossVectors(h[i - 1], h[i]), u.length() > Number.EPSILON && (u.normalize(), o = Math.acos(us.clamp(h[i - 1].dot(h[i]), -1, 1)), c[i].applyMatrix4(p.makeRotationAxis(u, o))), l[i].crossVectors(h[i], c[i]);
      if (!0 === e)
        for (o = Math.acos(us.clamp(c[0].dot(c[t]), -1, 1)), o /= t, h[0].dot(u.crossVectors(c[0], c[t])) > 0 && (o = -o), i = 1; t >= i; i++) c[i].applyMatrix4(p.makeRotationAxis(h[i], o * i)), l[i].crossVectors(h[i], c[i]);
      return {
        tangents: h,
        normals: c,
        binormals: l
      }
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    },
    fromJSON: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
  }), cn.prototype = Object.create(hn.prototype), cn.prototype.constructor = cn, cn.prototype.isEllipseCurve = !0, cn.prototype.getPoint = function(t, e) {
    for (var n = e || new i, r = 2 * Math.PI, a = this.aEndAngle - this.aStartAngle, o = Math.abs(a) < Number.EPSILON; 0 > a;) a += r;
    for (; a > r;) a -= r;
    a < Number.EPSILON && (a = o ? 0 : r), !0 !== this.aClockwise || o || (a === r ? a = -r : a -= r);
    var s = this.aStartAngle + t * a,
      h = this.aX + this.xRadius * Math.cos(s),
      c = this.aY + this.yRadius * Math.sin(s);
    if (0 !== this.aRotation) {
      var l = Math.cos(this.aRotation),
        u = Math.sin(this.aRotation),
        p = h - this.aX,
        d = c - this.aY;
      h = p * l - d * u + this.aX, c = p * u + d * l + this.aY
    }
    return n.set(h, c)
  }, cn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, cn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
  }, cn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, ln.prototype = Object.create(cn.prototype), ln.prototype.constructor = ln, ln.prototype.isArcCurve = !0;
  var eh = new a,
    ih = new un,
    nh = new un,
    rh = new un;
  pn.prototype = Object.create(hn.prototype), pn.prototype.constructor = pn, pn.prototype.isCatmullRomCurve3 = !0, pn.prototype.getPoint = function(t, e) {
    var i, n, r, o, s = e || new a,
      h = this.points,
      c = h.length,
      l = (c - (this.closed ? 0 : 1)) * t,
      u = Math.floor(l),
      p = l - u;
    if (this.closed ? u += u > 0 ? 0 : (Math.floor(Math.abs(u) / c) + 1) * c : 0 === p && u === c - 1 && (u = c - 2, p = 1), this.closed || u > 0 ? i = h[(u - 1) % c] : (eh.subVectors(h[0], h[1]).add(h[0]), i = eh), n = h[u % c], r = h[(u + 1) % c], this.closed || c > u + 2 ? o = h[(u + 2) % c] : (eh.subVectors(h[c - 1], h[c - 2]).add(h[c - 1]), o = eh), "centripetal" === this.curveType || "chordal" === this.curveType) {
      var d = "chordal" === this.curveType ? .5 : .25,
        f = Math.pow(i.distanceToSquared(n), d),
        m = Math.pow(n.distanceToSquared(r), d),
        v = Math.pow(r.distanceToSquared(o), d);
      1e-4 > m && (m = 1), 1e-4 > f && (f = m), 1e-4 > v && (v = m), ih.initNonuniformCatmullRom(i.x, n.x, r.x, o.x, f, m, v), nh.initNonuniformCatmullRom(i.y, n.y, r.y, o.y, f, m, v), rh.initNonuniformCatmullRom(i.z, n.z, r.z, o.z, f, m, v)
    } else "catmullrom" === this.curveType && (ih.initCatmullRom(i.x, n.x, r.x, o.x, this.tension), nh.initCatmullRom(i.y, n.y, r.y, o.y, this.tension), rh.initCatmullRom(i.z, n.z, r.z, o.z, this.tension));
    return s.set(ih.calc(p), nh.calc(p), rh.calc(p)), s
  }, pn.prototype.copy = function(t) {
    hn.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; i > e; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, pn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; i > e; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
  }, pn.prototype.fromJSON = function(t) {
    hn.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; i > e; e++) {
      var n = t.points[e];
      this.points.push((new a).fromArray(n))
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, vn.prototype = Object.create(hn.prototype), vn.prototype.constructor = vn, vn.prototype.isCubicBezierCurve = !0, vn.prototype.getPoint = function(t, e) {
    var n = e || new i,
      r = this.v0,
      a = this.v1,
      o = this.v2,
      s = this.v3;
    return n.set(mn(t, r.x, a.x, o.x, s.x), mn(t, r.y, a.y, o.y, s.y)), n
  }, vn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, vn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, vn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, gn.prototype = Object.create(hn.prototype), gn.prototype.constructor = gn, gn.prototype.isCubicBezierCurve3 = !0, gn.prototype.getPoint = function(t, e) {
    var i = e || new a,
      n = this.v0,
      r = this.v1,
      o = this.v2,
      s = this.v3;
    return i.set(mn(t, n.x, r.x, o.x, s.x), mn(t, n.y, r.y, o.y, s.y), mn(t, n.z, r.z, o.z, s.z)), i
  }, gn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, gn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, gn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, yn.prototype = Object.create(hn.prototype), yn.prototype.constructor = yn, yn.prototype.isLineCurve = !0, yn.prototype.getPoint = function(t, e) {
    var n = e || new i;
    return 1 === t ? (n.x = this.v2.x, n.y = this.v2.y) : (n.x = (this.v2.x - this.v1.x) * t + this.v1.x, n.y = (this.v2.y - this.v1.y) * t + this.v1.y), n
  }, yn.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, yn.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
  }, yn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, yn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, yn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, xn.prototype = Object.create(hn.prototype), xn.prototype.constructor = xn, xn.prototype.isLineCurve3 = !0, xn.prototype.getPoint = function(t, e) {
    var i = e || new a;
    return 1 === t ? (i.x = this.v2.x, i.y = this.v2.y, i.z = this.v2.z) : (i.x = (this.v2.x - this.v1.x) * t + this.v1.x, i.y = (this.v2.y - this.v1.y) * t + this.v1.y, i.z = (this.v2.z - this.v1.z) * t + this.v1.z), i
  }, xn.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, xn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, xn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, xn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, _n.prototype = Object.create(hn.prototype), _n.prototype.constructor = _n, _n.prototype.isQuadraticBezierCurve = !0, _n.prototype.getPoint = function(t, e) {
    var n = e || new i,
      r = this.v0,
      a = this.v1,
      o = this.v2;
    return n.set(fn(t, r.x, a.x, o.x), fn(t, r.y, a.y, o.y)), n
  }, _n.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, _n.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, _n.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, bn.prototype = Object.create(hn.prototype), bn.prototype.constructor = bn, bn.prototype.isQuadraticBezierCurve3 = !0, bn.prototype.getPoint = function(t, e) {
    var i = e || new a,
      n = this.v0,
      r = this.v1,
      o = this.v2;
    return i.set(fn(t, n.x, r.x, o.x), fn(t, n.y, r.y, o.y), fn(t, n.z, r.z, o.z)), i
  }, bn.prototype.copy = function(t) {
    return hn.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, bn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, bn.prototype.fromJSON = function(t) {
    return hn.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Mn.prototype = Object.create(hn.prototype), Mn.prototype.constructor = Mn, Mn.prototype.isSplineCurve = !0, Mn.prototype.getPoint = function(t, e) {
    var n = e || new i,
      r = this.points,
      a = (r.length - 1) * t,
      o = Math.floor(a),
      s = a - o,
      h = r[0 === o ? o : o - 1],
      c = r[o],
      l = r[o > r.length - 2 ? r.length - 1 : o + 1],
      u = r[o > r.length - 3 ? r.length - 1 : o + 2];
    return n.set(dn(s, h.x, c.x, l.x, u.x), dn(s, h.y, c.y, l.y, u.y)), n
  }, Mn.prototype.copy = function(t) {
    hn.prototype.copy.call(this, t), this.points = [];
    for (var e = 0, i = t.points.length; i > e; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this
  }, Mn.prototype.toJSON = function() {
    var t = hn.prototype.toJSON.call(this);
    t.points = [];
    for (var e = 0, i = this.points.length; i > e; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t
  }, Mn.prototype.fromJSON = function(t) {
    hn.prototype.fromJSON.call(this, t), this.points = [];
    for (var e = 0, n = t.points.length; n > e; e++) {
      var r = t.points[e];
      this.points.push((new i).fromArray(r))
    }
    return this
  };
  var ah = Object.freeze({
    __proto__: null,
    ArcCurve: ln,
    CatmullRomCurve3: pn,
    CubicBezierCurve: vn,
    CubicBezierCurve3: gn,
    EllipseCurve: cn,
    LineCurve: yn,
    LineCurve3: xn,
    QuadraticBezierCurve: _n,
    QuadraticBezierCurve3: bn,
    SplineCurve: Mn
  });
  wn.prototype = Object.assign(Object.create(hn.prototype), {
    constructor: wn,
    add: function(t) {
      this.curves.push(t)
    },
    closePath: function() {
      var t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new yn(e, t))
    },
    getPoint: function(t) {
      for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
        if (i[n] >= e) {
          var r = i[n] - e,
            a = this.curves[n],
            o = a.getLength(),
            s = 0 === o ? 0 : 1 - r / o;
          return a.getPointAt(s)
        }
        n++
      }
      return null
    },
    getLength: function() {
      var t = this.getCurveLengths();
      return t[t.length - 1]
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    },
    getCurveLengths: function() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      for (var t = [], e = 0, i = 0, n = this.curves.length; n > i; i++) e += this.curves[i].getLength(), t.push(e);
      return this.cacheLengths = t, t
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 40);
      for (var e = [], i = 0; t >= i; i++) e.push(this.getPoint(i / t));
      return this.autoClose && e.push(e[0]), e
    },
    getPoints: function(t) {
      t = t || 12;
      for (var e, i = [], n = [], r = 0, a = this.curves; r < a.length; r++) {
        var o = a[r],
          s = o && o.isEllipseCurve ? 2 * t : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? t * o.points.length : t;
        n.length = 0, n = o.getPoints(s, n);
        for (var h = 0; h < n.length; h++) {
          var c = n[h];
          e && e.equals(c) || (i.push(c), e = c)
        }
      }
      return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
    },
    copy: function(t) {
      hn.prototype.copy.call(this, t), this.curves = [];
      for (var e = 0, i = t.curves.length; i > e; e++) {
        var n = t.curves[e];
        this.curves.push(n.clone())
      }
      return this.autoClose = t.autoClose, this
    },
    toJSON: function() {
      var t = hn.prototype.toJSON.call(this);
      t.autoClose = this.autoClose, t.curves = [];
      for (var e = 0, i = this.curves.length; i > e; e++) {
        var n = this.curves[e];
        t.curves.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      hn.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
      for (var e = 0, i = t.curves.length; i > e; e++) {
        var n = t.curves[e];
        this.curves.push((new ah[n.type]).fromJSON(n))
      }
      return this
    }
  }), Sn.prototype = Object.assign(Object.create(wn.prototype), {
    constructor: Sn,
    setFromPoints: function(t) {
      this.moveTo(t[0].x, t[0].y);
      for (var e = 1, i = t.length; i > e; e++) this.lineTo(t[e].x, t[e].y)
    },
    moveTo: function(t, e) {
      this.currentPoint.set(t, e)
    },
    lineTo: function(t, e) {
      var n = new yn(this.currentPoint.clone(), new i(t, e));
      this.curves.push(n), this.currentPoint.set(t, e)
    },
    quadraticCurveTo: function(t, e, n, r) {
      var a = new _n(this.currentPoint.clone(), new i(t, e), new i(n, r));
      this.curves.push(a), this.currentPoint.set(n, r)
    },
    bezierCurveTo: function(t, e, n, r, a, o) {
      var s = new vn(this.currentPoint.clone(), new i(t, e), new i(n, r), new i(a, o));
      this.curves.push(s), this.currentPoint.set(a, o)
    },
    splineThru: function(t) {
      var e = new Mn([this.currentPoint.clone()].concat(t));
      this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
    },
    arc: function(t, e, i, n, r, a) {
      var o = this.currentPoint.x,
        s = this.currentPoint.y;
      this.absarc(t + o, e + s, i, n, r, a)
    },
    absarc: function(t, e, i, n, r, a) {
      this.absellipse(t, e, i, i, n, r, a)
    },
    ellipse: function(t, e, i, n, r, a, o, s) {
      var h = this.currentPoint.x,
        c = this.currentPoint.y;
      this.absellipse(t + h, e + c, i, n, r, a, o, s)
    },
    absellipse: function(t, e, i, n, r, a, o, s) {
      var h = new cn(t, e, i, n, r, a, o, s);
      if (this.curves.length > 0) {
        var c = h.getPoint(0);
        c.equals(this.currentPoint) || this.lineTo(c.x, c.y)
      }
      this.curves.push(h);
      var l = h.getPoint(1);
      this.currentPoint.copy(l)
    },
    copy: function(t) {
      return wn.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
    },
    toJSON: function() {
      var t = wn.prototype.toJSON.call(this);
      return t.currentPoint = this.currentPoint.toArray(), t
    },
    fromJSON: function(t) {
      return wn.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
    }
  }), En.prototype = Object.assign(Object.create(Sn.prototype), {
    constructor: En,
    getPointsHoles: function(t) {
      for (var e = [], i = 0, n = this.holes.length; n > i; i++) e[i] = this.holes[i].getPoints(t);
      return e
    },
    extractPoints: function(t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      }
    },
    copy: function(t) {
      Sn.prototype.copy.call(this, t), this.holes = [];
      for (var e = 0, i = t.holes.length; i > e; e++) {
        var n = t.holes[e];
        this.holes.push(n.clone())
      }
      return this
    },
    toJSON: function() {
      var t = Sn.prototype.toJSON.call(this);
      t.uuid = this.uuid, t.holes = [];
      for (var e = 0, i = this.holes.length; i > e; e++) {
        var n = this.holes[e];
        t.holes.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      Sn.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
      for (var e = 0, i = t.holes.length; i > e; e++) {
        var n = t.holes[e];
        this.holes.push((new Sn).fromJSON(n))
      }
      return this
    }
  }), Tn.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Tn,
    isLight: !0,
    copy: function(t) {
      return M.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
    },
    toJSON: function(t) {
      var e = M.prototype.toJSON.call(this, t);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
  }), Object.assign(An.prototype, {
    copy: function(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    toJSON: function() {
      var t = {};
      return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), (512 !== this.mapSize.x || 512 !== this.mapSize.y) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
  }), Ln.prototype = Object.assign(Object.create(M.prototype), {
    constructor: Ln,
    isCamera: !0,
    copy: function(t, e) {
      return M.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    },
    getWorldDirection: function(t) {
      void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new a), this.updateMatrixWorld(!0);
      var e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize()
    },
    updateMatrixWorld: function(t) {
      M.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), Cn.prototype = Object.assign(Object.create(Ln.prototype), {
    constructor: Cn,
    isPerspectiveCamera: !0,
    copy: function(t, e) {
      return Ln.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    },
    setFocalLength: function(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * us.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
    },
    getFocalLength: function() {
      var t = Math.tan(.5 * us.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t
    },
    getEffectiveFOV: function() {
      return 2 * us.RAD2DEG * Math.atan(Math.tan(.5 * us.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
      return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
      return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(t, e, i, n, r, a) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = this.near,
        e = t * Math.tan(.5 * us.DEG2RAD * this.fov) / this.zoom,
        i = 2 * e,
        n = this.aspect * i,
        r = -.5 * n,
        a = this.view;
      if (null !== this.view && this.view.enabled) {
        var o = a.fullWidth,
          s = a.fullHeight;
        r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
      }
      var h = this.filmOffset;
      0 !== h && (r += t * h / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
      var e = M.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
  }), Pn.prototype = Object.assign(Object.create(An.prototype), {
    constructor: Pn,
    isSpotLightShadow: !0,
    update: function(t) {
      var e = this.camera,
        i = 2 * us.RAD2DEG * t.angle,
        n = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      (i !== e.fov || n !== e.aspect || r !== e.far) && (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
    }
  }), Rn.prototype = Object.assign(Object.create(Tn.prototype), {
    constructor: Rn,
    isSpotLight: !0,
    copy: function(t) {
      return Tn.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), In.prototype = Object.assign(Object.create(Tn.prototype), {
    constructor: In,
    isPointLight: !0,
    copy: function(t) {
      return Tn.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
  }), Nn.prototype = Object.assign(Object.create(Ln.prototype), {
    constructor: Nn,
    isOrthographicCamera: !0,
    copy: function(t, e) {
      return Ln.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    },
    setViewOffset: function(t, e, i, n, r, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        i = (this.right + this.left) / 2,
        n = (this.top + this.bottom) / 2,
        r = i - t,
        a = i + t,
        o = n + e,
        s = n - e;
      if (null !== this.view && this.view.enabled) {
        var h = this.zoom / (this.view.width / this.view.fullWidth),
          c = this.zoom / (this.view.height / this.view.fullHeight),
          l = (this.right - this.left) / this.view.width,
          u = (this.top - this.bottom) / this.view.height;
        a = (r += l * (this.view.offsetX / h)) + l * (this.view.width / h), s = (o -= u * (this.view.offsetY / c)) - u * (this.view.height / c)
      }
      this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
    },
    toJSON: function(t) {
      var e = M.prototype.toJSON.call(this, t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
  }), On.prototype = Object.assign(Object.create(An.prototype), {
    constructor: On
  }), Dn.prototype = Object.assign(Object.create(Tn.prototype), {
    constructor: Dn,
    isDirectionalLight: !0,
    copy: function(t) {
      return Tn.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), Un.prototype = Object.assign(Object.create(Tn.prototype), {
    constructor: Un,
    isAmbientLight: !0
  });
  var oh = {
    arraySlice: function(t, e, i) {
      return oh.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
    },
    convertArray: function(t, e, i) {
      return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
    },
    isTypedArray: function(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
    },
    getKeyframeOrder: function(t) {
      for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) i[n] = n;
      return i.sort((function(e, i) {
        return t[e] - t[i]
      })), i
    },
    sortedArray: function(t, e, i) {
      for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
        for (var s = i[a] * e, h = 0; h !== e; ++h) r[o++] = t[s + h];
      return r
    },
    flattenJSON: function(t, e, i, n) {
      for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
      if (void 0 !== a) {
        var o = a[n];
        if (void 0 !== o)
          if (Array.isArray(o))
            do {
              void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
            } while (void 0 !== a);
          else if (void 0 !== o.toArray)
          do {
            void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
          } while (void 0 !== a);
        else
          do {
            void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
          } while (void 0 !== a)
      }
    }
  };
  Object.assign(zn.prototype, {
    evaluate: function(t) {
      var e = this.parameterPositions,
        i = this._cachedIndex,
        n = e[i],
        r = e[i - 1];
      t: {
        e: {
          var a;i: {
            n: if (!(n > t)) {
              for (var o = i + 2;;) {
                if (void 0 === n) {
                  if (r > t) break n;
                  return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                }
                if (i === o) break;
                if (r = n, (n = e[++i]) > t) break e
              }
              a = e.length;
              break i
            }if (t >= r) break t;
            var s = e[1];s > t && (i = 2, r = s);
            for (o = i - 2;;) {
              if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
              if (i === o) break;
              if (n = r, t >= (r = e[--i - 1])) break e
            }
            a = i,
            i = 0
          }
          for (; a > i;) {
            var h = i + a >>> 1;
            t < e[h] ? a = h : i = h + 1
          }
          if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0,
          this.beforeStart_(0, t, n);
          if (void 0 === n) return i = e.length,
          this._cachedIndex = i,
          this.afterEnd_(i - 1, r, t)
        }
        this._cachedIndex = i,
        this.intervalChanged_(i, r, n)
      }
      return this.interpolate_(i, r, t, n)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
      return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(t) {
      for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
      return e
    },
    interpolate_: function() {
      throw new Error("call to abstract method")
    },
    intervalChanged_: function() {}
  }), Object.assign(zn.prototype, {
    beforeStart_: zn.prototype.copySampleValue_,
    afterEnd_: zn.prototype.copySampleValue_
  }), Bn.prototype = Object.assign(Object.create(zn.prototype), {
    constructor: Bn,
    DefaultSettings_: {
      endingStart: Yo,
      endingEnd: Yo
    },
    intervalChanged_: function(t, e, i) {
      var n = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        o = n[r],
        s = n[a];
      if (void 0 === o) switch (this.getSettings_().endingStart) {
        case Jo:
          r = t, o = 2 * e - i;
          break;
        case Zo:
          o = e + n[r = n.length - 2] - n[r + 1];
          break;
        default:
          r = t, o = i
      }
      if (void 0 === s) switch (this.getSettings_().endingEnd) {
        case Jo:
          a = t, s = 2 * i - e;
          break;
        case Zo:
          a = 1, s = i + n[1] - n[0];
          break;
        default:
          a = t - 1, s = e
      }
      var h = .5 * (i - e),
        c = this.valueSize;
      this._weightPrev = h / (e - o), this._weightNext = h / (s - i), this._offsetPrev = r * c, this._offsetNext = a * c
    },
    interpolate_: function(t, e, i, n) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = s - o, c = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - e) / (n - e), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, _ = 0; _ !== o; ++_) r[_] = v * a[c + _] + g * a[h + _] + y * a[s + _] + x * a[l + _];
      return r
    }
  }), Fn.prototype = Object.assign(Object.create(zn.prototype), {
    constructor: Fn,
    interpolate_: function(t, e, i, n) {
      for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, h = s - o, c = (i - e) / (n - e), l = 1 - c, u = 0; u !== o; ++u) r[u] = a[h + u] * l + a[s + u] * c;
      return r
    }
  }), Gn.prototype = Object.assign(Object.create(zn.prototype), {
    constructor: Gn,
    interpolate_: function(t) {
      return this.copySampleValue_(t - 1)
    }
  }), Object.assign(kn, {
    toJSON: function(t) {
      var e, i = t.constructor;
      if (void 0 !== i.toJSON) e = i.toJSON(t);
      else {
        e = {
          name: t.name,
          times: oh.convertArray(t.times, Array),
          values: oh.convertArray(t.values, Array)
        };
        var n = t.getInterpolation();
        n !== t.DefaultInterpolation && (e.interpolation = n)
      }
      return e.type = t.ValueTypeName, e
    }
  }), Object.assign(kn.prototype, {
    constructor: kn,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: Xo,
    InterpolantFactoryMethodDiscrete: function(t) {
      return new Gn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodLinear: function(t) {
      return new Fn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: function(t) {
      return new Bn(this.times, this.values, this.getValueSize(), t)
    },
    setInterpolation: function(t) {
      var e;
      switch (t) {
        case Wo:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Xo:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case qo:
          e = this.InterpolantFactoryMethodSmooth
      }
      if (void 0 === e) {
        var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(i);
          this.setInterpolation(this.DefaultInterpolation)
        }
        return console.warn("THREE.KeyframeTrack:", i), this
      }
      return this.createInterpolant = e, this
    },
    getInterpolation: function() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Wo;
        case this.InterpolantFactoryMethodLinear:
          return Xo;
        case this.InterpolantFactoryMethodSmooth:
          return qo
      }
    },
    getValueSize: function() {
      return this.values.length / this.times.length
    },
    shift: function(t) {
      if (0 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
      return this
    },
    scale: function(t) {
      if (1 !== t)
        for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
      return this
    },
    trim: function(t, e) {
      for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
      for (; - 1 !== a && i[a] > e;) --a;
      if (++a, 0 !== r || a !== n) {
        r >= a && (r = (a = Math.max(a, 1)) - 1);
        var o = this.getValueSize();
        this.times = oh.arraySlice(i, r, a), this.values = oh.arraySlice(this.values, r * o, a * o)
      }
      return this
    },
    validate: function() {
      var t = !0,
        e = this.getValueSize();
      e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
      var i = this.times,
        n = this.values,
        r = i.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
      for (var a = null, o = 0; o !== r; o++) {
        var s = i[o];
        if ("number" == typeof s && isNaN(s)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
          break
        }
        if (null !== a && a > s) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
          break
        }
        a = s
      }
      if (void 0 !== n && oh.isTypedArray(n)) {
        o = 0;
        for (var h = n.length; o !== h; ++o) {
          var c = n[o];
          if (isNaN(c)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = !1;
            break
          }
        }
      }
      return t
    },
    optimize: function() {
      for (var t = this.times, e = this.values, i = this.getValueSize(), n = this.getInterpolation() === qo, r = 1, a = t.length - 1, o = 1; a > o; ++o) {
        var s = !1,
          h = t[o];
        if (h !== t[o + 1] && (1 !== o || h !== h[0]))
          if (n) s = !0;
          else
            for (var c = o * i, l = c - i, u = c + i, p = 0; p !== i; ++p) {
              var d = e[c + p];
              if (d !== e[l + p] || d !== e[u + p]) {
                s = !0;
                break
              }
            }
        if (s) {
          if (o !== r) {
            t[r] = t[o];
            var f = o * i,
              m = r * i;
            for (p = 0; p !== i; ++p) e[m + p] = e[f + p]
          }++r
        }
      }
      if (a > 0) {
        t[r] = t[a];
        for (f = a * i, m = r * i, p = 0; p !== i; ++p) e[m + p] = e[f + p];
        ++r
      }
      return r !== t.length && (this.times = oh.arraySlice(t, 0, r), this.values = oh.arraySlice(e, 0, r * i)), this
    }
  }), Vn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: Vn,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: Wo,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), Hn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: Hn,
    ValueTypeName: "color"
  }), jn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: jn,
    ValueTypeName: "number"
  }), Wn.prototype = Object.assign(Object.create(zn.prototype), {
    constructor: Wn,
    interpolate_: function(t, e, i, n) {
      for (var a = this.resultBuffer, o = this.sampleValues, s = this.valueSize, h = t * s, c = (i - e) / (n - e), l = h + s; h !== l; h += 4) r.slerpFlat(a, 0, o, h - s, o, h, c);
      return a
    }
  }), Xn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: Xn,
    ValueTypeName: "quaternion",
    DefaultInterpolation: Xo,
    InterpolantFactoryMethodLinear: function(t) {
      return new Wn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: void 0
  }), qn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: qn,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: Wo,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), Yn.prototype = Object.assign(Object.create(kn.prototype), {
    constructor: Yn,
    ValueTypeName: "vector"
  }), Object.assign(Jn, {
    parse: function(t) {
      for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(Zn(i[r]).scale(n));
      return new Jn(t.name, t.duration, e)
    },
    toJSON: function(t) {
      for (var e = [], i = t.tracks, n = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid
        }, r = 0, a = i.length; r !== a; ++r) e.push(kn.toJSON(i[r]));
      return n
    },
    CreateFromMorphTargetSequence: function(t, e, i, n) {
      for (var r = e.length, a = [], o = 0; r > o; o++) {
        var s = [],
          h = [];
        s.push((o + r - 1) % r, o, (o + 1) % r), h.push(0, 1, 0);
        var c = oh.getKeyframeOrder(s);
        s = oh.sortedArray(s, 1, c), h = oh.sortedArray(h, 1, c), n || 0 !== s[0] || (s.push(r), h.push(h[0])), a.push(new jn(".morphTargetInfluences[" + e[o].name + "]", s, h).scale(1 / i))
      }
      return new Jn(t, -1, a)
    },
    findByName: function(t, e) {
      var i = t;
      if (!Array.isArray(t)) {
        var n = t;
        i = n.geometry && n.geometry.animations || n.animations
      }
      for (var r = 0; r < i.length; r++)
        if (i[r].name === e) return i[r];
      return null
    },
    CreateClipsFromMorphTargetSequences: function(t, e, i) {
      for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; o > a; a++) {
        var s = t[a],
          h = s.name.match(r);
        if (h && h.length > 1) {
          var c = n[u = h[1]];
          c || (n[u] = c = []), c.push(s)
        }
      }
      var l = [];
      for (var u in n) l.push(Jn.CreateFromMorphTargetSequence(u, n[u], e, i));
      return l
    },
    parseAnimation: function(t, e) {
      if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      for (var i = function(t, e, i, n, r) {
          if (0 !== i.length) {
            var a = [],
              o = [];
            oh.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
          }
        }, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], h = 0; h < s.length; h++) {
        var c = s[h].keys;
        if (c && 0 !== c.length)
          if (c[0].morphTargets) {
            for (var l = {}, u = 0; u < c.length; u++)
              if (c[u].morphTargets)
                for (var p = 0; p < c[u].morphTargets.length; p++) l[c[u].morphTargets[p]] = -1;
            for (var d in l) {
              var f = [],
                m = [];
              for (p = 0; p !== c[u].morphTargets.length; ++p) {
                var v = c[u];
                f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
              }
              n.push(new jn(".morphTargetInfluence[" + d + "]", f, m))
            }
            a = l.length * (o || 1)
          } else {
            var g = ".bones[" + e[h].name + "]";
            i(Yn, g + ".position", c, "pos", n), i(Xn, g + ".quaternion", c, "rot", n), i(Yn, g + ".scale", c, "scl", n)
          }
      }
      return 0 === n.length ? null : new Jn(r, a, n)
    }
  }), Object.assign(Jn.prototype, {
    resetDuration: function() {
      for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
        var n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1])
      }
      return this.duration = t, this
    },
    trim: function() {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
      return this
    },
    validate: function() {
      for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
      return t
    },
    optimize: function() {
      for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this
    }
  }), Object.assign(Kn.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new en(r.manager).load(t, (function(t) {
        e(r.parse(JSON.parse(t)))
      }), i, n)
    },
    setTextures: function(t) {
      this.textures = t
    },
    parse: function(t) {
      function e(t) {
        return void 0 === r[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), r[t]
      }
      var r = this.textures,
        o = new Ks[t.type];
      if (void 0 !== t.uuid && (o.uuid = t.uuid), void 0 !== t.name && (o.name = t.name), void 0 !== t.color && o.color.setHex(t.color), void 0 !== t.roughness && (o.roughness = t.roughness), void 0 !== t.metalness && (o.metalness = t.metalness), void 0 !== t.emissive && o.emissive.setHex(t.emissive), void 0 !== t.specular && o.specular.setHex(t.specular), void 0 !== t.shininess && (o.shininess = t.shininess), void 0 !== t.clearCoat && (o.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (o.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (o.vertexColors = t.vertexColors), void 0 !== t.fog && (o.fog = t.fog), void 0 !== t.flatShading && (o.flatShading = t.flatShading), void 0 !== t.blending && (o.blending = t.blending), void 0 !== t.combine && (o.combine = t.combine), void 0 !== t.side && (o.side = t.side), void 0 !== t.opacity && (o.opacity = t.opacity), void 0 !== t.transparent && (o.transparent = t.transparent), void 0 !== t.alphaTest && (o.alphaTest = t.alphaTest), void 0 !== t.depthTest && (o.depthTest = t.depthTest), void 0 !== t.depthWrite && (o.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (o.colorWrite = t.colorWrite), void 0 !== t.wireframe && (o.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (o.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (o.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (o.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (o.rotation = t.rotation), 1 !== t.linewidth && (o.linewidth = t.linewidth), void 0 !== t.dashSize && (o.dashSize = t.dashSize), void 0 !== t.gapSize && (o.gapSize = t.gapSize), void 0 !== t.scale && (o.scale = t.scale), void 0 !== t.polygonOffset && (o.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (o.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (o.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (o.skinning = t.skinning), void 0 !== t.morphTargets && (o.morphTargets = t.morphTargets), void 0 !== t.dithering && (o.dithering = t.dithering), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.uniforms)
        for (var s in t.uniforms) {
          var c = t.uniforms[s];
          switch (o.uniforms[s] = {}, c.type) {
            case "t":
              o.uniforms[s].value = e(c.value);
              break;
            case "c":
              o.uniforms[s].value = (new v).setHex(c.value);
              break;
            case "v2":
              o.uniforms[s].value = (new i).fromArray(c.value);
              break;
            case "v3":
              o.uniforms[s].value = (new a).fromArray(c.value);
              break;
            case "v4":
              o.uniforms[s].value = (new h).fromArray(c.value);
              break;
            case "m4":
              o.uniforms[s].value = (new n).fromArray(c.value);
              break;
            default:
              o.uniforms[s].value = c.value
          }
        }
      if (void 0 !== t.defines && (o.defines = t.defines), void 0 !== t.vertexShader && (o.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (o.fragmentShader = t.fragmentShader), void 0 !== t.shading && (o.flatShading = 1 === t.shading), void 0 !== t.size && (o.size = t.size), void 0 !== t.sizeAttenuation && (o.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (o.map = e(t.map)), void 0 !== t.alphaMap && (o.alphaMap = e(t.alphaMap), o.transparent = !0), void 0 !== t.bumpMap && (o.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (o.bumpScale = t.bumpScale), void 0 !== t.normalMap && (o.normalMap = e(t.normalMap)), void 0 !== t.normalMapType && (o.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
        var l = t.normalScale;
        !1 === Array.isArray(l) && (l = [l, l]), o.normalScale = (new i).fromArray(l)
      }
      return void 0 !== t.displacementMap && (o.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (o.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (o.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (o.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (o.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (o.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (o.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (o.specularMap = e(t.specularMap)), void 0 !== t.envMap && (o.envMap = e(t.envMap)), void 0 !== t.envMapIntensity && (o.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (o.reflectivity = t.reflectivity), void 0 !== t.lightMap && (o.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (o.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (o.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (o.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (o.gradientMap = e(t.gradientMap)), o
    }
  }), Object.assign(Qn.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new en(r.manager).load(t, (function(t) {
        e(r.parse(JSON.parse(t)))
      }), i, n)
    },
    parse: function(t) {
      var e = new U,
        i = t.data.index;
      if (void 0 !== i) {
        var n = new sh[i.type](i.array);
        e.setIndex(new S(n, 1))
      }
      var r = t.data.attributes;
      for (var o in r) {
        var s = r[o];
        n = new sh[s.type](s.array);
        e.addAttribute(o, new S(n, s.itemSize, s.normalized))
      }
      var h = t.data.groups || t.data.drawcalls || t.data.offsets;
      if (void 0 !== h)
        for (var c = 0, l = h.length; c !== l; ++c) {
          var u = h[c];
          e.addGroup(u.start, u.count, u.materialIndex)
        }
      var p = t.data.boundingSphere;
      if (void 0 !== p) {
        var f = new a;
        void 0 !== p.center && f.fromArray(p.center), e.boundingSphere = new d(f, p.radius)
      }
      return e
    }
  });
  var sh = {
    Int8Array,
    Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  };
  $n.Handlers = {
    handlers: [],
    add: function(t, e) {
      this.handlers.push(t, e)
    },
    get: function(t) {
      for (var e = this.handlers, i = 0, n = e.length; n > i; i += 2) {
        var r = e[i],
          a = e[i + 1];
        if (r.test(t)) return a
      }
      return null
    }
  }, Object.assign($n.prototype, {
    crossOrigin: "anonymous",
    onLoadStart: function() {},
    onLoadProgress: function() {},
    onLoadComplete: function() {},
    initMaterials: function(t, e, i) {
      for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
      return n
    },
    createMaterial: function() {
      var t = {
          NoBlending: $r,
          NormalBlending: ta,
          AdditiveBlending: ea,
          SubtractiveBlending: ia,
          MultiplyBlending: na,
          CustomBlending: ra
        },
        e = new v,
        i = new sn,
        n = new Kn;
      return function(r, a, o) {
        function s(t, e, n, r, s) {
          var c, l = a + t,
            u = $n.Handlers.get(l);
          null !== u ? c = u.load(l) : (i.setCrossOrigin(o), c = i.load(l)), void 0 !== e && (c.repeat.fromArray(e), 1 !== e[0] && (c.wrapS = Wa), 1 !== e[1] && (c.wrapT = Wa)), void 0 !== n && c.offset.fromArray(n), void 0 !== r && ("repeat" === r[0] && (c.wrapS = Wa), "mirror" === r[0] && (c.wrapS = qa), "repeat" === r[1] && (c.wrapT = Wa), "mirror" === r[1] && (c.wrapT = qa)), void 0 !== s && (c.anisotropy = s);
          var p = us.generateUUID();
          return h[p] = c, p
        }
        var h = {},
          c = {
            uuid: us.generateUUID(),
            type: "MeshLambertMaterial"
          };
        for (var l in r) {
          var u = r[l];
          switch (l) {
            case "DbgColor":
            case "DbgIndex":
            case "opticalDensity":
            case "illumination":
            case "mapDiffuseRepeat":
            case "mapDiffuseOffset":
            case "mapDiffuseWrap":
            case "mapDiffuseAnisotropy":
            case "mapEmissiveRepeat":
            case "mapEmissiveOffset":
            case "mapEmissiveWrap":
            case "mapEmissiveAnisotropy":
            case "mapLightRepeat":
            case "mapLightOffset":
            case "mapLightWrap":
            case "mapLightAnisotropy":
            case "mapAORepeat":
            case "mapAOOffset":
            case "mapAOWrap":
            case "mapAOAnisotropy":
            case "mapBumpRepeat":
            case "mapBumpOffset":
            case "mapBumpWrap":
            case "mapBumpAnisotropy":
            case "mapNormalRepeat":
            case "mapNormalOffset":
            case "mapNormalWrap":
            case "mapNormalAnisotropy":
            case "mapSpecularRepeat":
            case "mapSpecularOffset":
            case "mapSpecularWrap":
            case "mapSpecularAnisotropy":
            case "mapMetalnessRepeat":
            case "mapMetalnessOffset":
            case "mapMetalnessWrap":
            case "mapMetalnessAnisotropy":
            case "mapRoughnessRepeat":
            case "mapRoughnessOffset":
            case "mapRoughnessWrap":
            case "mapRoughnessAnisotropy":
            case "mapAlphaRepeat":
            case "mapAlphaOffset":
            case "mapAlphaWrap":
            case "mapAlphaAnisotropy":
              break;
            case "DbgName":
              c.name = u;
              break;
            case "blending":
              c.blending = t[u];
              break;
            case "colorAmbient":
            case "mapAmbient":
              console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
              break;
            case "colorDiffuse":
              c.color = e.fromArray(u).getHex();
              break;
            case "colorSpecular":
              c.specular = e.fromArray(u).getHex();
              break;
            case "colorEmissive":
              c.emissive = e.fromArray(u).getHex();
              break;
            case "specularCoef":
              c.shininess = u;
              break;
            case "shading":
              "basic" === u.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (c.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (c.type = "MeshStandardMaterial");
              break;
            case "mapDiffuse":
              c.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
              break;
            case "mapEmissive":
              c.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
              break;
            case "mapLight":
              c.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
              break;
            case "mapAO":
              c.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
              break;
            case "mapBump":
              c.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
              break;
            case "mapBumpScale":
              c.bumpScale = u;
              break;
            case "mapNormal":
              c.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
              break;
            case "mapNormalFactor":
              c.normalScale = u;
              break;
            case "mapSpecular":
              c.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
              break;
            case "mapMetalness":
              c.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
              break;
            case "mapRoughness":
              c.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
              break;
            case "mapAlpha":
              c.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
              break;
            case "flipSided":
              c.side = Yr;
              break;
            case "doubleSided":
              c.side = Jr;
              break;
            case "transparency":
              console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), c.opacity = u;
              break;
            case "depthTest":
            case "depthWrite":
            case "colorWrite":
            case "opacity":
            case "reflectivity":
            case "transparent":
            case "visible":
            case "wireframe":
              c[l] = u;
              break;
            case "vertexColors":
              !0 === u && (c.vertexColors = Qr), "face" === u && (c.vertexColors = Kr);
              break;
            default:
              console.error("THREE.Loader.createMaterial: Unsupported", l, u)
          }
        }
        return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), n.setTextures(h), n.parse(c)
      }
    }()
  });
  var hh = {
    decodeText: function(t) {
      if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
      for (var e = "", i = 0, n = t.length; n > i; i++) e += String.fromCharCode(t[i]);
      return decodeURIComponent(escape(e))
    },
    extractUrlBase: function(t) {
      var e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1)
    }
  };
  Object.assign(tr.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      var r = this,
        a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : hh.extractUrlBase(t),
        o = new en(this.manager);
      o.setWithCredentials(this.withCredentials), o.load(t, (function(i) {
        var n = JSON.parse(i),
          o = n.metadata;
        if (void 0 !== o) {
          var s = o.type;
          if (void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.")
        }
        var h = r.parse(n, a);
        e(h.geometry, h.materials)
      }), i, n)
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setTexturePath: function(t) {
      return this.texturePath = t, this
    },
    parse: function() {
      function t(t, e) {
        function n(t, e) {
          return t & 1 << e
        }
        var r, o, s, h, c, l, u, p, d, f, m, g, y, _, b, M, w, S, E, T, A, L, C, P, R, I = t.faces,
          N = t.vertices,
          O = t.normals,
          D = t.colors,
          U = t.scale,
          z = 0;
        if (void 0 !== t.uvs) {
          for (r = 0; r < t.uvs.length; r++) t.uvs[r].length && z++;
          for (r = 0; z > r; r++) e.faceVertexUvs[r] = []
        }
        for (h = 0, c = N.length; c > h;)(S = new a).x = N[h++] * U, S.y = N[h++] * U, S.z = N[h++] * U, e.vertices.push(S);
        for (h = 0, c = I.length; c > h;)
          if (m = n(f = I[h++], 0), g = n(f, 1), y = n(f, 3), _ = n(f, 4), b = n(f, 5), M = n(f, 6), w = n(f, 7), m) {
            if ((T = new x).a = I[h], T.b = I[h + 1], T.c = I[h + 3], (A = new x).a = I[h + 1], A.b = I[h + 2], A.c = I[h + 3], h += 4, g && (d = I[h++], T.materialIndex = d, A.materialIndex = d), s = e.faces.length, y)
              for (r = 0; z > r; r++)
                for (P = t.uvs[r], e.faceVertexUvs[r][s] = [], e.faceVertexUvs[r][s + 1] = [], o = 0; 4 > o; o++) R = new i(P[2 * (p = I[h++])], P[2 * p + 1]), 2 !== o && e.faceVertexUvs[r][s].push(R), 0 !== o && e.faceVertexUvs[r][s + 1].push(R);
            if (_ && (u = 3 * I[h++], T.normal.set(O[u++], O[u++], O[u]), A.normal.copy(T.normal)), b)
              for (r = 0; 4 > r; r++) u = 3 * I[h++], C = new a(O[u++], O[u++], O[u]), 2 !== r && T.vertexNormals.push(C), 0 !== r && A.vertexNormals.push(C);
            if (M && (L = D[l = I[h++]], T.color.setHex(L), A.color.setHex(L)), w)
              for (r = 0; 4 > r; r++) L = D[l = I[h++]], 2 !== r && T.vertexColors.push(new v(L)), 0 !== r && A.vertexColors.push(new v(L));
            e.faces.push(T), e.faces.push(A)
          } else {
            if ((E = new x).a = I[h++], E.b = I[h++], E.c = I[h++], g && (d = I[h++], E.materialIndex = d), s = e.faces.length, y)
              for (r = 0; z > r; r++)
                for (P = t.uvs[r], e.faceVertexUvs[r][s] = [], o = 0; 3 > o; o++) R = new i(P[2 * (p = I[h++])], P[2 * p + 1]), e.faceVertexUvs[r][s].push(R);
            if (_ && (u = 3 * I[h++], E.normal.set(O[u++], O[u++], O[u])), b)
              for (r = 0; 3 > r; r++) u = 3 * I[h++], C = new a(O[u++], O[u++], O[u]), E.vertexNormals.push(C);
            if (M && (l = I[h++], E.color.setHex(D[l])), w)
              for (r = 0; 3 > r; r++) l = I[h++], E.vertexColors.push(new v(D[l]));
            e.faces.push(E)
          }
      }

      function e(t, e) {
        var i = t.scale;
        if (void 0 !== t.morphTargets)
          for (var n = 0, r = t.morphTargets.length; r > n; n++) {
            e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
            for (var o = e.morphTargets[n].vertices, s = t.morphTargets[n].vertices, h = 0, c = s.length; c > h; h += 3) {
              var l = new a;
              l.x = s[h] * i, l.y = s[h + 1] * i, l.z = s[h + 2] * i, o.push(l)
            }
          }
        if (void 0 !== t.morphColors && t.morphColors.length > 0) {
          console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
          var u = e.faces,
            p = t.morphColors[0].colors;
          for (n = 0, r = u.length; r > n; n++) u[n].color.fromArray(p, 3 * n)
        }
      }
      return function(i, n) {
        void 0 !== i.data && (i = i.data), i.scale = void 0 !== i.scale ? 1 / i.scale : 1;
        var r = new w;
        return t(i, r),
          function(t, e) {
            var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
            if (t.skinWeights)
              for (var n = 0, r = t.skinWeights.length; r > n; n += i) {
                var a = t.skinWeights[n],
                  o = i > 1 ? t.skinWeights[n + 1] : 0,
                  s = i > 2 ? t.skinWeights[n + 2] : 0,
                  c = i > 3 ? t.skinWeights[n + 3] : 0;
                e.skinWeights.push(new h(a, o, s, c))
              }
            if (t.skinIndices)
              for (n = 0, r = t.skinIndices.length; r > n; n += i) {
                var l = t.skinIndices[n],
                  u = i > 1 ? t.skinIndices[n + 1] : 0,
                  p = i > 2 ? t.skinIndices[n + 2] : 0,
                  d = i > 3 ? t.skinIndices[n + 3] : 0;
                e.skinIndices.push(new h(l, u, p, d))
              }
            e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
          }(i, r), e(i, r),
          function(t, e) {
            var i = [],
              n = [];
            void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
            for (var r = 0; r < n.length; r++) {
              var a = Jn.parseAnimation(n[r], e.bones);
              a && i.push(a)
            }
            if (e.morphTargets) {
              var o = Jn.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
              i = i.concat(o)
            }
            i.length > 0 && (e.animations = i)
          }(i, r), r.computeFaceNormals(), r.computeBoundingSphere(), void 0 === i.materials || 0 === i.materials.length ? {
            geometry: r
          } : {
            geometry: r,
            materials: $n.prototype.initMaterials(i.materials, n, this.crossOrigin)
          }
      }
    }()
  }), Object.assign(er.prototype, {
    crossOrigin: "anonymous",
    load: function(t, e, i, n) {
      "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
      var r = this;
      new en(r.manager).load(t, (function(i) {
        var a = null;
        try {
          a = JSON.parse(i)
        } catch (e) {
          return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
        }
        var o = a.metadata;
        return void 0 === o || void 0 === o.type || "geometry" === o.type.toLowerCase() ? void console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.") : void r.parse(a, e)
      }), i, n)
    },
    setTexturePath: function(t) {
      return this.texturePath = t, this
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    parse: function(t, e) {
      var i = this.parseShape(t.shapes),
        n = this.parseGeometries(t.geometries, i),
        r = this.parseImages(t.images, (function() {
          void 0 !== e && e(s)
        })),
        a = this.parseTextures(t.textures, r),
        o = this.parseMaterials(t.materials, a),
        s = this.parseObject(t.object, n, o);
      return t.animations && (s.animations = this.parseAnimations(t.animations)), (void 0 === t.images || 0 === t.images.length) && void 0 !== e && e(s), s
    },
    parseShape: function(t) {
      var e = {};
      if (void 0 !== t)
        for (var i = 0, n = t.length; n > i; i++) {
          var r = (new En).fromJSON(t[i]);
          e[r.uuid] = r
        }
      return e
    },
    parseGeometries: function(t, e) {
      var i = {};
      if (void 0 !== t)
        for (var n = new tr, r = new Qn, a = 0, o = t.length; o > a; a++) {
          var s, h = t[a];
          switch (h.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              s = new Zs[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              s = new Zs[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              s = new Zs[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              s = new Zs[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              s = new Zs[h.type](h.radius, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              s = new Zs[h.type](h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              s = new Zs[h.type](h.radius, h.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              s = new Zs[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              s = new Zs[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              s = new Zs[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              s = new Zs[h.type](h.points, h.segments, h.phiStart, h.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              s = new Zs[h.type](h.vertices, h.indices, h.radius, h.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              for (var c = [], l = 0, u = h.shapes.length; u > l; l++) {
                var p = e[h.shapes[l]];
                c.push(p)
              }
              s = new Zs[h.type](c, h.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for (c = [], l = 0, u = h.shapes.length; u > l; l++) {
                p = e[h.shapes[l]];
                c.push(p)
              }
              var d = h.options.extrudePath;
              void 0 !== d && (h.options.extrudePath = (new ah[d.type]).fromJSON(d)), s = new Zs[h.type](c, h.options);
              break;
            case "BufferGeometry":
              s = r.parse(h);
              break;
            case "Geometry":
              s = n.parse(h, this.texturePath).geometry;
              break;
            default:
              console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
              continue
          }
          s.uuid = h.uuid, void 0 !== h.name && (s.name = h.name), !0 === s.isBufferGeometry && void 0 !== h.userData && (s.userData = h.userData), i[h.uuid] = s
        }
      return i
    },
    parseMaterials: function(t, e) {
      var i = {};
      if (void 0 !== t) {
        var n = new Kn;
        n.setTextures(e);
        for (var r = 0, a = t.length; a > r; r++) {
          var o = t[r];
          if ("MultiMaterial" === o.type) {
            for (var s = [], h = 0; h < o.materials.length; h++) s.push(n.parse(o.materials[h]));
            i[o.uuid] = s
          } else i[o.uuid] = n.parse(o)
        }
      }
      return i
    },
    parseAnimations: function(t) {
      for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i],
          r = Jn.parse(n);
        void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
      }
      return e
    },
    parseImages: function(t, e) {
      function i(t) {
        return n.manager.itemStart(t), a.load(t, (function() {
          n.manager.itemEnd(t)
        }), void 0, (function() {
          n.manager.itemEnd(t), n.manager.itemError(t)
        }))
      }
      var n = this,
        r = {};
      if (void 0 !== t && t.length > 0) {
        var a = new an(new tn(e));
        a.setCrossOrigin(this.crossOrigin);
        for (var o = 0, s = t.length; s > o; o++) {
          var h = t[o],
            c = h.url;
          if (Array.isArray(c)) {
            r[h.uuid] = [];
            for (var l = 0, u = c.length; u > l; l++) {
              var p = c[l],
                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.texturePath + p;
              r[h.uuid].push(i(d))
            }
          } else {
            d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
            r[h.uuid] = i(d)
          }
        }
      }
      return r
    },
    parseTextures: function(t, e) {
      function i(t, e) {
        return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
      }
      var n = {};
      if (void 0 !== t)
        for (var r = 0, a = t.length; a > r; r++) {
          var o, h = t[r];
          void 0 === h.image && console.warn('THREE.ObjectLoader: No "image" specified for', h.uuid), void 0 === e[h.image] && console.warn("THREE.ObjectLoader: Undefined image", h.image), (o = Array.isArray(e[h.image]) ? new rt(e[h.image]) : new s(e[h.image])).needsUpdate = !0, o.uuid = h.uuid, void 0 !== h.name && (o.name = h.name), void 0 !== h.mapping && (o.mapping = i(h.mapping, ch)), void 0 !== h.offset && o.offset.fromArray(h.offset), void 0 !== h.repeat && o.repeat.fromArray(h.repeat), void 0 !== h.center && o.center.fromArray(h.center), void 0 !== h.rotation && (o.rotation = h.rotation), void 0 !== h.wrap && (o.wrapS = i(h.wrap[0], lh), o.wrapT = i(h.wrap[1], lh)), void 0 !== h.format && (o.format = h.format), void 0 !== h.minFilter && (o.minFilter = i(h.minFilter, uh)), void 0 !== h.magFilter && (o.magFilter = i(h.magFilter, uh)), void 0 !== h.anisotropy && (o.anisotropy = h.anisotropy), void 0 !== h.flipY && (o.flipY = h.flipY), n[h.uuid] = o
        }
      return n
    },
    parseObject: function(t, e, i) {
      function n(t) {
        return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
      }

      function r(t) {
        if (void 0 !== t) {
          if (Array.isArray(t)) {
            for (var e = [], n = 0, r = t.length; r > n; n++) {
              var a = t[n];
              void 0 === i[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(i[a])
            }
            return e
          }
          return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
        }
      }
      var a;
      switch (t.type) {
        case "Scene":
          a = new me, void 0 !== t.background && Number.isInteger(t.background) && (a.background = new v(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? a.fog = new fe(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (a.fog = new de(t.fog.color, t.fog.density)));
          break;
        case "PerspectiveCamera":
          a = new Cn(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (a.focus = t.focus), void 0 !== t.zoom && (a.zoom = t.zoom), void 0 !== t.filmGauge && (a.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (a.filmOffset = t.filmOffset), void 0 !== t.view && (a.view = Object.assign({}, t.view));
          break;
        case "OrthographicCamera":
          a = new Nn(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (a.zoom = t.zoom), void 0 !== t.view && (a.view = Object.assign({}, t.view));
          break;
        case "AmbientLight":
          a = new Un(t.color, t.intensity);
          break;
        case "DirectionalLight":
          a = new Dn(t.color, t.intensity);
          break;
        case "PointLight":
          a = new In(t.color, t.intensity, t.distance, t.decay);
          break;
        case "SpotLight":
          a = new Rn(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
          break;
        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
          var o = n(t.geometry),
            s = r(t.material);
          a = o.bones && o.bones.length > 0 ? new we(o, s) : new X(o, s);
          break;
        case "LOD":
          a = new _e;
          break;
        case "Line":
          a = new Ee(n(t.geometry), r(t.material), t.mode);
          break;
        case "LineLoop":
          a = new Ae(n(t.geometry), r(t.material));
          break;
        case "LineSegments":
          a = new Te(n(t.geometry), r(t.material));
          break;
        case "PointCloud":
        case "Points":
          a = new Ce(n(t.geometry), r(t.material));
          break;
        case "Sprite":
          a = new xe(r(t.material));
          break;
        case "Group":
          a = new Pe;
          break;
        default:
          a = new M
      }
      if (a.uuid = t.uuid, void 0 !== t.name && (a.name = t.name), void 0 !== t.matrix ? (a.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (a.matrixAutoUpdate = t.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position), void 0 !== t.rotation && a.rotation.fromArray(t.rotation), void 0 !== t.quaternion && a.quaternion.fromArray(t.quaternion), void 0 !== t.scale && a.scale.fromArray(t.scale)), void 0 !== t.castShadow && (a.castShadow = t.castShadow), void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (a.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (a.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && a.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (a.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.frustumCulled && (a.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (a.renderOrder = t.renderOrder), void 0 !== t.userData && (a.userData = t.userData), void 0 !== t.layers && (a.layers.mask = t.layers), void 0 !== t.children)
        for (var h = t.children, c = 0; c < h.length; c++) a.add(this.parseObject(h[c], e, i));
      if ("LOD" === t.type)
        for (var l = t.levels, u = 0; u < l.length; u++) {
          var p = l[u],
            d = a.getObjectByProperty("uuid", p.object);
          void 0 !== d && a.addLevel(d, p.distance)
        }
      return a
    }
  });
  var ch = {
      UVMapping: za,
      CubeReflectionMapping: Ba,
      CubeRefractionMapping: Fa,
      EquirectangularReflectionMapping: Ga,
      EquirectangularRefractionMapping: ka,
      SphericalReflectionMapping: Va,
      CubeUVReflectionMapping: Ha,
      CubeUVRefractionMapping: ja
    },
    lh = {
      RepeatWrapping: Wa,
      ClampToEdgeWrapping: Xa,
      MirroredRepeatWrapping: qa
    },
    uh = {
      NearestFilter: Ya,
      NearestMipMapNearestFilter: Ja,
      NearestMipMapLinearFilter: Za,
      LinearFilter: Ka,
      LinearMipMapNearestFilter: Qa,
      LinearMipMapLinearFilter: $a
    };
  Object.assign(ir.prototype, {
    moveTo: function(t, e) {
      this.currentPath = new Sn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
    },
    lineTo: function(t, e) {
      this.currentPath.lineTo(t, e)
    },
    quadraticCurveTo: function(t, e, i, n) {
      this.currentPath.quadraticCurveTo(t, e, i, n)
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
      this.currentPath.bezierCurveTo(t, e, i, n, r, a)
    },
    splineThru: function(t) {
      this.currentPath.splineThru(t)
    },
    toShapes: function(t, e) {
      function i(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
          var r = t[i],
            a = new En;
          a.curves = r.curves, e.push(a)
        }
        return e
      }

      function n(t, e) {
        for (var i = e.length, n = !1, r = i - 1, a = 0; i > a; r = a++) {
          var o = e[r],
            s = e[a],
            h = s.x - o.x,
            c = s.y - o.y;
          if (Math.abs(c) > Number.EPSILON) {
            if (0 > c && (o = e[a], h = -h, s = e[r], c = -c), t.y < o.y || t.y > s.y) continue;
            if (t.y === o.y) {
              if (t.x === o.x) return !0
            } else {
              var l = c * (t.x - o.x) - h * (t.y - o.y);
              if (0 === l) return !0;
              if (0 > l) continue;
              n = !n
            }
          } else {
            if (t.y !== o.y) continue;
            if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
          }
        }
        return n
      }
      var r = Ys.isClockWise,
        a = this.subPaths;
      if (0 === a.length) return [];
      if (!0 === e) return i(a);
      var o, s, h, c = [];
      if (1 === a.length) return s = a[0], (h = new En).curves = s.curves, c.push(h), c;
      var l = !r(a[0].getPoints());
      l = t ? !l : l;
      var u, p = [],
        d = [],
        f = [],
        m = 0;
      d[m] = void 0, f[m] = [];
      for (var v = 0, g = a.length; g > v; v++) o = r(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!l && d[m] && m++, d[m] = {
        s: new En,
        p: u
      }, d[m].s.curves = s.curves, l && m++, f[m] = []) : f[m].push({
        h: s,
        p: u[0]
      });
      if (!d[0]) return i(a);
      if (d.length > 1) {
        for (var y = !1, x = [], _ = 0, b = d.length; b > _; _++) p[_] = [];
        for (_ = 0, b = d.length; b > _; _++)
          for (var M = f[_], w = 0; w < M.length; w++) {
            for (var S = M[w], E = !0, T = 0; T < d.length; T++) n(S.p, d[T].p) && (_ !== T && x.push({
              froms: _,
              tos: T,
              hole: w
            }), E ? (E = !1, p[T].push(S)) : y = !0);
            E && p[_].push(S)
          }
        x.length > 0 && (y || (f = p))
      }
      v = 0;
      for (var A, L = d.length; L > v; v++) {
        h = d[v].s, c.push(h);
        for (var C = 0, P = (A = f[v]).length; P > C; C++) h.holes.push(A[C].h)
      }
      return c
    }
  }), Object.assign(nr.prototype, {
    isFont: !0,
    generateShapes: function(t, e) {
      void 0 === e && (e = 100);
      for (var i = [], n = function(t, e, i) {
          for (var n = Array.from ? Array.from(t) : String(t).split(""), r = e / i.resolution, a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r, o = [], s = 0, h = 0, c = 0; c < n.length; c++) {
            var l = n[c];
            if ("\n" === l) s = 0, h -= a;
            else {
              var u = rr(l, r, s, h, i);
              s += u.offsetX, o.push(u.path)
            }
          }
          return o
        }(t, e, this.data), r = 0, a = n.length; a > r; r++) Array.prototype.push.apply(i, n[r].toShapes());
      return i
    }
  }), Object.assign(ar.prototype, {
    load: function(t, e, i, n) {
      var r = this,
        a = new en(this.manager);
      a.setPath(this.path), a.load(t, (function(t) {
        var i;
        try {
          i = JSON.parse(t)
        } catch (e) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
        }
        var n = r.parse(i);
        e && e(n)
      }), i, n)
    },
    parse: function(t) {
      return new nr(t)
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), or.prototype = Object.create(M.prototype), or.prototype.constructor = or, sr.prototype = Object.assign(Object.create(Cn.prototype), {
    constructor: sr,
    isArrayCamera: !0
  }), Object.assign(hr.prototype, {
    accumulate: function(t, e) {
      var i = this.buffer,
        n = this.valueSize,
        r = t * n + n,
        a = this.cumulativeWeight;
      if (0 === a) {
        for (var o = 0; o !== n; ++o) i[r + o] = i[o];
        a = e
      } else {
        var s = e / (a += e);
        this._mixBufferRegion(i, r, 0, s, n)
      }
      this.cumulativeWeight = a
    },
    apply: function(t) {
      var e = this.valueSize,
        i = this.buffer,
        n = t * e + e,
        r = this.cumulativeWeight,
        a = this.binding;
      if (this.cumulativeWeight = 0, 1 > r) {
        var o = 3 * e;
        this._mixBufferRegion(i, n, o, 1 - r, e)
      }
      for (var s = e, h = e + e; s !== h; ++s)
        if (i[s] !== i[s + e]) {
          a.setValue(i, n);
          break
        }
    },
    saveOriginalState: function() {
      var t = this.binding,
        e = this.buffer,
        i = this.valueSize,
        n = 3 * i;
      t.getValue(e, n);
      for (var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
      this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
      var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t)
    },
    _select: function(t, e, i, n, r) {
      if (n >= .5)
        for (var a = 0; a !== r; ++a) t[e + a] = t[i + a]
    },
    _slerp: function(t, e, i, n) {
      r.slerpFlat(t, e, t, e, t, i, n)
    },
    _lerp: function(t, e, i, n, r) {
      for (var a = 1 - n, o = 0; o !== r; ++o) {
        var s = e + o;
        t[s] = t[s] * a + t[i + o] * n
      }
    }
  });
  var ph, dh, fh = "\\[\\]\\.:\\/";
  Object.assign(cr.prototype, {
    getValue: function(t, e) {
      this.bind();
      var i = this._targetGroup.nCachedObjects_,
        n = this._bindings[i];
      void 0 !== n && n.getValue(t, e)
    },
    setValue: function(t, e) {
      for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
    },
    bind: function() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
    },
    unbind: function() {
      for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
    }
  }), Object.assign(lr, {
    Composite: cr,
    create: function(t, e, i) {
      return t && t.isAnimationObjectGroup ? new lr.Composite(t, e, i) : new lr(t, e, i)
    },
    sanitizeNodeName: function() {
      var t = new RegExp("[" + fh + "]", "g");
      return function(e) {
        return e.replace(/\s/g, "_").replace(t, "")
      }
    }(),
    parseTrackName: function() {
      var t = "[^" + fh + "]",
        e = "[^" + fh.replace("\\.", "") + "]",
        i = /((?:WC+[\/:])*)/.source.replace("WC", t),
        n = /(WCOD+)?/.source.replace("WCOD", e),
        r = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", t),
        a = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", t),
        o = new RegExp("^" + i + n + r + a + "$"),
        s = ["material", "materials", "bones"];
      return function(t) {
        var e = o.exec(t);
        if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        var i = {
            nodeName: e[2],
            objectName: e[3],
            objectIndex: e[4],
            propertyName: e[5],
            propertyIndex: e[6]
          },
          n = i.nodeName && i.nodeName.lastIndexOf(".");
        if (void 0 !== n && -1 !== n) {
          var r = i.nodeName.substring(n + 1); - 1 !== s.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
        }
        if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return i
      }
    }(),
    findNode: function(t, e) {
      if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
      if (t.skeleton) {
        var i = t.skeleton.getBoneByName(e);
        if (void 0 !== i) return i
      }
      if (t.children) {
        var n = function(t) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              if (r.name === e || r.uuid === e) return r;
              var a = n(r.children);
              if (a) return a
            }
            return null
          },
          r = n(t.children);
        if (r) return r
      }
      return null
    }
  }), Object.assign(lr.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(t, e) {
      t[e] = this.node[this.propertyName]
    }, function(t, e) {
      for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
    }, function(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex]
    }, function(t, e) {
      this.resolvedProperty.toArray(t, e)
    }],
    SetterByBindingTypeAndVersioning: [
      [function(t, e) {
        this.targetObject[this.propertyName] = t[e]
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
      }, function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.needsUpdate = !0
      }, function(t, e) {
        for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e]
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty.fromArray(t, e)
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
      }]
    ],
    getValue: function(t, e) {
      this.bind(), this.getValue(t, e)
    },
    setValue: function(t, e) {
      this.bind(), this.setValue(t, e)
    },
    bind: function() {
      var t = this.node,
        e = this.parsedPath,
        i = e.objectName,
        n = e.propertyName,
        r = e.propertyIndex;
      if (t || (t = lr.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
        if (i) {
          var a = e.objectIndex;
          switch (i) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials;
              break;
            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones;
              for (var o = 0; o < t.length; o++)
                if (t[o].name === a) {
                  a = o;
                  break
                } break;
            default:
              if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[i]
          }
          if (void 0 !== a) {
            if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[a]
          }
        }
        var s = t[n];
        if (void 0 !== s) {
          var h = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? h = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate);
          var c = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === n) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (t.geometry.isBufferGeometry) {
                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                  if (t.geometry.morphAttributes.position[o].name === r) {
                    r = o;
                    break
                  }
              } else {
                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                  if (t.geometry.morphTargets[o].name === r) {
                    r = o;
                    break
                  }
              }
            }
            c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
          this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][h]
        } else {
          var l = e.nodeName;
          console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
        }
      } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
    },
    unbind: function() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
  }), Object.assign(lr.prototype, {
    _getValue_unbound: lr.prototype.getValue,
    _setValue_unbound: lr.prototype.setValue
  }), Object.assign(ur.prototype, {
    isAnimationObjectGroup: !0,
    add: function() {
      for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, h = void 0, c = 0, l = arguments.length; c !== l; ++c) {
        var u = arguments[c],
          p = u.uuid,
          d = n[p];
        if (void 0 === d) {
          d = e++, n[p] = d, t.push(u);
          for (var f = 0, m = s; f !== m; ++f) o[f].push(new lr(u, r[f], a[f]))
        } else if (i > d) {
          h = t[d];
          var v = --i,
            g = t[v];
          n[g.uuid] = d, t[d] = g, n[p] = v, t[v] = u;
          for (f = 0, m = s; f !== m; ++f) {
            var y = o[f],
              x = y[v],
              _ = y[d];
            y[d] = x, void 0 === _ && (_ = new lr(u, r[f], a[f])), y[v] = _
          }
        } else t[d] !== h && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
      }
      this.nCachedObjects_ = i
    },
    remove: function() {
      for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
        var s = arguments[a],
          h = s.uuid,
          c = i[h];
        if (void 0 !== c && c >= e) {
          var l = e++,
            u = t[l];
          i[u.uuid] = c, t[c] = u, i[h] = l, t[l] = s;
          for (var p = 0, d = r; p !== d; ++p) {
            var f = n[p],
              m = f[l],
              v = f[c];
            f[c] = m, f[l] = v
          }
        }
      }
      this.nCachedObjects_ = e
    },
    uncache: function() {
      for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
        var h = arguments[o].uuid,
          c = n[h];
        if (void 0 !== c)
          if (delete n[h], i > c) {
            var l = --i,
              u = t[l],
              p = t[g = --e];
            n[u.uuid] = c, t[c] = u, n[p.uuid] = l, t[l] = p, t.pop();
            for (var d = 0, f = a; d !== f; ++d) {
              var m = (y = r[d])[l],
                v = y[g];
              y[c] = m, y[l] = v, y.pop()
            }
          } else {
            var g;
            n[(p = t[g = --e]).uuid] = c, t[c] = p, t.pop();
            for (d = 0, f = a; d !== f; ++d) {
              var y;
              (y = r[d])[c] = y[g], y.pop()
            }
          }
      }
      this.nCachedObjects_ = i
    },
    subscribe_: function(t, e) {
      var i = this._bindingsIndicesByPath,
        n = i[t],
        r = this._bindings;
      if (void 0 !== n) return r[n];
      var a = this._paths,
        o = this._parsedPaths,
        s = this._objects,
        h = s.length,
        c = this.nCachedObjects_,
        l = new Array(h);
      n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
      for (var u = c, p = s.length; u !== p; ++u) {
        var d = s[u];
        l[u] = new lr(d, t, e)
      }
      return l
    },
    unsubscribe_: function(t) {
      var e = this._bindingsIndicesByPath,
        i = e[t];
      if (void 0 !== i) {
        var n = this._paths,
          r = this._parsedPaths,
          a = this._bindings,
          o = a.length - 1,
          s = a[o];
        e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
      }
    }
  }), Object.assign(pr.prototype, {
    play: function() {
      return this._mixer._activateAction(this), this
    },
    stop: function() {
      return this._mixer._deactivateAction(this), this.reset()
    },
    reset: function() {
      return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    },
    isRunning: function() {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
      return this._mixer._isActiveAction(this)
    },
    startAt: function(t) {
      return this._startTime = t, this
    },
    setLoop: function(t, e) {
      return this.loop = t, this.repetitions = e, this
    },
    setEffectiveWeight: function(t) {
      return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
    },
    getEffectiveWeight: function() {
      return this._effectiveWeight
    },
    fadeIn: function(t) {
      return this._scheduleFading(t, 0, 1)
    },
    fadeOut: function(t) {
      return this._scheduleFading(t, 1, 0)
    },
    crossFadeFrom: function(t, e, i) {
      if (t.fadeOut(e), this.fadeIn(e), i) {
        var n = this._clip.duration,
          r = t._clip.duration,
          a = r / n,
          o = n / r;
        t.warp(1, a, e), this.warp(o, 1, e)
      }
      return this
    },
    crossFadeTo: function(t, e, i) {
      return t.crossFadeFrom(this, e, i)
    },
    stopFading: function() {
      var t = this._weightInterpolant;
      return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    setEffectiveTimeScale: function(t) {
      return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
    },
    getEffectiveTimeScale: function() {
      return this._effectiveTimeScale
    },
    setDuration: function(t) {
      return this.timeScale = this._clip.duration / t, this.stopWarping()
    },
    syncWith: function(t) {
      return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
    },
    halt: function(t) {
      return this.warp(this._effectiveTimeScale, 0, t)
    },
    warp: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._timeScaleInterpolant,
        o = this.timeScale;
      null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
      var s = a.parameterPositions,
        h = a.sampleValues;
      return s[0] = r, s[1] = r + i, h[0] = t / o, h[1] = e / o, this
    },
    stopWarping: function() {
      var t = this._timeScaleInterpolant;
      return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    getMixer: function() {
      return this._mixer
    },
    getClip: function() {
      return this._clip
    },
    getRoot: function() {
      return this._localRoot || this._mixer._root
    },
    _update: function(t, e, i, n) {
      if (this.enabled) {
        var r = this._startTime;
        if (null !== r) {
          var a = (t - r) * i;
          if (0 > a || 0 === i) return;
          this._startTime = null, e = i * a
        }
        e *= this._updateTimeScale(t);
        var o = this._updateTime(e),
          s = this._updateWeight(t);
        if (s > 0)
          for (var h = this._interpolants, c = this._propertyBindings, l = 0, u = h.length; l !== u; ++l) h[l].evaluate(o), c[l].accumulate(n, s)
      } else this._updateWeight(t)
    },
    _updateWeight: function(t) {
      var e = 0;
      if (this.enabled) {
        e = this.weight;
        var i = this._weightInterpolant;
        if (null !== i) {
          var n = i.evaluate(t)[0];
          e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
        }
      }
      return this._effectiveWeight = e, e
    },
    _updateTimeScale: function(t) {
      var e = 0;
      if (!this.paused) {
        e = this.timeScale;
        var i = this._timeScaleInterpolant;
        if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
      }
      return this._effectiveTimeScale = e, e
    },
    _updateTime: function(t) {
      var e = this.time + t,
        i = this._clip.duration,
        n = this.loop,
        r = this._loopCount,
        a = 2202 === n;
      if (0 === t) return -1 === r || !a || 1 & ~r ? e : i - e;
      if (2200 === n) {
        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        t: {
          if (e >= i) e = i;
          else {
            if (!(0 > e)) break t;
            e = 0
          }
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 0 > t ? -1 : 1
          })
        }
      } else {
        if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || 0 > e) {
          var o = Math.floor(e / i);
          e -= i * o, r += Math.abs(o);
          var s = this.repetitions - r;
          if (0 >= s) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
          else {
            if (1 === s) {
              var h = 0 > t;
              this._setEndings(h, !h, a)
            } else this._setEndings(!1, !1, a);
            this._loopCount = r, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o
            })
          }
        }
        if (a && !(1 & ~r)) return this.time = e, i - e
      }
      return this.time = e, e
    },
    _setEndings: function(t, e, i) {
      var n = this._interpolantSettings;
      i ? (n.endingStart = Jo, n.endingEnd = Jo) : (n.endingStart = t ? this.zeroSlopeAtStart ? Jo : Yo : Zo, n.endingEnd = e ? this.zeroSlopeAtEnd ? Jo : Yo : Zo)
    },
    _scheduleFading: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._weightInterpolant;
      null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
      var o = a.parameterPositions,
        s = a.sampleValues;
      return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
    }
  }), dr.prototype = Object.assign(Object.create(e.prototype), {
    constructor: dr,
    _bindAction: function(t, e) {
      var i = t._localRoot || this._root,
        n = t._clip.tracks,
        r = n.length,
        a = t._propertyBindings,
        o = t._interpolants,
        s = i.uuid,
        h = this._bindingsByRootAndName,
        c = h[s];
      void 0 === c && (c = {}, h[s] = c);
      for (var l = 0; l !== r; ++l) {
        var u = n[l],
          p = u.name,
          d = c[p];
        if (void 0 !== d) a[l] = d;
        else {
          if (void 0 !== (d = a[l])) {
            null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
            continue
          }
          var f = e && e._propertyBindings[l].binding.parsedPath;
          ++(d = new hr(lr.create(i, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[l] = d
        }
        o[l].resultBuffer = d.buffer
      }
    },
    _activateAction: function(t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          var e = (t._localRoot || this._root).uuid,
            i = t._clip.uuid,
            n = this._actionsByClip[i];
          this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
        }
        for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
          var s = r[a];
          0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
        }
        this._lendAction(t)
      }
    },
    _deactivateAction: function(t) {
      if (this._isActiveAction(t)) {
        for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
          var r = e[i];
          0 === --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
        }
        this._takeBackAction(t)
      }
    },
    _initMemoryManager: function() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      var t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length
          },
          get inUse() {
            return t._nActiveActions
          }
        },
        bindings: {
          get total() {
            return t._bindings.length
          },
          get inUse() {
            return t._nActiveBindings
          }
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length
          },
          get inUse() {
            return t._nActiveControlInterpolants
          }
        }
      }
    },
    _isActiveAction: function(t) {
      var e = t._cacheIndex;
      return null !== e && e < this._nActiveActions
    },
    _addInactiveAction: function(t, e, i) {
      var n = this._actions,
        r = this._actionsByClip,
        a = r[e];
      if (void 0 === a) a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, r[e] = a;
      else {
        var o = a.knownActions;
        t._byClipCacheIndex = o.length, o.push(t)
      }
      t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
    },
    _removeInactiveAction: function(t) {
      var e = this._actions,
        i = e[e.length - 1],
        n = t._cacheIndex;
      i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
      var r = t._clip.uuid,
        a = this._actionsByClip,
        o = a[r],
        s = o.knownActions,
        h = s[s.length - 1],
        c = t._byClipCacheIndex;
      h._byClipCacheIndex = c, s[c] = h, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
    },
    _removeInactiveBindingsForAction: function(t) {
      for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
        var r = e[i];
        0 === --r.referenceCount && this._removeInactiveBinding(r)
      }
    },
    _lendAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = this._nActiveActions++,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = --this._nActiveActions,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _addInactiveBinding: function(t, e, i) {
      var n = this._bindingsByRootAndName,
        r = n[e],
        a = this._bindings;
      void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
    },
    _removeInactiveBinding: function(t) {
      var e = this._bindings,
        i = t.binding,
        n = i.rootNode.uuid,
        r = i.path,
        a = this._bindingsByRootAndName,
        o = a[n],
        s = e[e.length - 1],
        h = t._cacheIndex;
      s._cacheIndex = h, e[h] = s, e.pop(), delete o[r];
      t: {
        for (var c in o) break t;delete a[n]
      }
    },
    _lendBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = this._nActiveBindings++,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _takeBackBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = --this._nActiveBindings,
        r = e[n];
      t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
    },
    _lendControlInterpolant: function() {
      var t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++,
        i = t[e];
      return void 0 === i && ((i = new Fn(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
    },
    _takeBackControlInterpolant: function(t) {
      var e = this._controlInterpolants,
        i = t.__cacheIndex,
        n = --this._nActiveControlInterpolants,
        r = e[n];
      t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? Jn.findByName(i, t) : t,
        a = null !== r ? r.uuid : t,
        o = this._actionsByClip[a],
        s = null;
      if (void 0 !== o) {
        var h = o.actionByRoot[n];
        if (void 0 !== h) return h;
        s = o.knownActions[0], null === r && (r = s._clip)
      }
      if (null === r) return null;
      var c = new pr(this, r, e);
      return this._bindAction(c, s), this._addInactiveAction(c, a, n), c
    },
    existingAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? Jn.findByName(i, t) : t,
        a = r ? r.uuid : t,
        o = this._actionsByClip[a];
      return void 0 !== o && o.actionByRoot[n] || null
    },
    stopAllAction: function() {
      var t = this._actions,
        e = this._nActiveActions,
        i = this._bindings,
        n = this._nActiveBindings;
      this._nActiveActions = 0, this._nActiveBindings = 0;
      for (var r = 0; r !== e; ++r) t[r].reset();
      for (r = 0; r !== n; ++r) i[r].useCount = 0;
      return this
    },
    update: function(t) {
      t *= this.timeScale;
      for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
        e[o]._update(n, t, r, a)
      }
      var s = this._bindings,
        h = this._nActiveBindings;
      for (o = 0; o !== h; ++o) s[o].apply(a);
      return this
    },
    getRoot: function() {
      return this._root
    },
    uncacheClip: function(t) {
      var e = this._actions,
        i = t.uuid,
        n = this._actionsByClip,
        r = n[i];
      if (void 0 !== r) {
        for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
          var h = a[o];
          this._deactivateAction(h);
          var c = h._cacheIndex,
            l = e[e.length - 1];
          h._cacheIndex = null, h._byClipCacheIndex = null, l._cacheIndex = c, e[c] = l, e.pop(), this._removeInactiveBindingsForAction(h)
        }
        delete n[i]
      }
    },
    uncacheRoot: function(t) {
      var e = t.uuid,
        i = this._actionsByClip;
      for (var n in i) {
        var r = i[n].actionByRoot[e];
        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
      }
      var a = this._bindingsByRootAndName[e];
      if (void 0 !== a)
        for (var o in a) {
          var s = a[o];
          s.restoreOriginalState(), this._removeInactiveBinding(s)
        }
    },
    uncacheAction: function(t, e) {
      var i = this.existingAction(t, e);
      null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
    }
  }), fr.prototype.clone = function() {
    return new fr(void 0 === this.value.clone ? this.value : this.value.clone())
  }, mr.prototype = Object.assign(Object.create(U.prototype), {
    constructor: mr,
    isInstancedBufferGeometry: !0,
    copy: function(t) {
      return U.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), vr.prototype = Object.assign(Object.create(ve.prototype), {
    constructor: vr,
    isInstancedInterleavedBuffer: !0,
    copy: function(t) {
      return ve.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), gr.prototype = Object.assign(Object.create(S.prototype), {
    constructor: gr,
    isInstancedBufferAttribute: !0,
    copy: function(t) {
      return S.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), Object.assign(yr.prototype, {
    linePrecision: 1,
    set: function(t, e) {
      this.ray.set(t, e)
    },
    setFromCamera: function(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
    },
    intersectObject: function(t, e, i) {
      var n = i || [];
      return _r(t, this, n, e), n.sort(xr), n
    },
    intersectObjects: function(t, e, i) {
      var n = i || [];
      if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
      for (var r = 0, a = t.length; a > r; r++) _r(t[r], this, n, e);
      return n.sort(xr), n
    }
  }), Object.assign(br.prototype, {
    start: function() {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    },
    stop: function() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1
    },
    getElapsedTime: function() {
      return this.getDelta(), this.elapsedTime
    },
    getDelta: function() {
      var t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        var e = ("undefined" == typeof performance ? Date : performance).now();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
      }
      return t
    }
  }), Object.assign(Mr.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.phi = e, this.theta = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    },
    makeSafe: function() {
      var t = 1e-6;
      return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
    },
    setFromVector3: function(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
      return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(us.clamp(e / this.radius, -1, 1))), this
    }
  }), Object.assign(wr.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.theta = e, this.y = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
    },
    setFromVector3: function(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z)
    },
    setFromCartesianCoords: function(t, e, i) {
      return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
    }
  }), Object.assign(Sr.prototype, {
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; i > e; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: function() {
      var t = new i;
      return function(e, i) {
        var n = t.copy(i).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
      }
    }(),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new i), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new i), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    },
    getParameter: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new i), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    },
    clampPoint: function(t, e) {
      return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new i), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
      var t = new i;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length()
      }
    }(),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), Object.assign(Er.prototype, {
    set: function(t, e) {
      return this.start.copy(t), this.end.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.start.copy(t.start), this.end.copy(t.end), this
    },
    getCenter: function(t) {
      return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new a), t.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(t) {
      return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new a), t.subVectors(this.end, this.start)
    },
    distanceSq: function() {
      return this.start.distanceToSquared(this.end)
    },
    distance: function() {
      return this.start.distanceTo(this.end)
    },
    at: function(t, e) {
      return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new a), this.delta(e).multiplyScalar(t).add(this.start)
    },
    closestPointToPointParameter: function() {
      var t = new a,
        e = new a;
      return function(i, n) {
        t.subVectors(i, this.start), e.subVectors(this.end, this.start);
        var r = e.dot(e),
          a = e.dot(t) / r;
        return n && (a = us.clamp(a, 0, 1)), a
      }
    }(),
    closestPointToPoint: function(t, e, i) {
      var n = this.closestPointToPointParameter(t, e);
      return void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), i = new a), this.delta(i).multiplyScalar(n).add(this.start)
    },
    applyMatrix4: function(t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
    },
    equals: function(t) {
      return t.start.equals(this.start) && t.end.equals(this.end)
    }
  }), Tr.prototype = Object.create(M.prototype), Tr.prototype.constructor = Tr, Tr.prototype.isImmediateRenderObject = !0, Ar.prototype = Object.create(Te.prototype), Ar.prototype.constructor = Ar, Ar.prototype.update = function() {
    var t = new a,
      e = new a,
      i = new o;
    return function() {
      var n = ["a", "b", "c"];
      this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
      var r = this.object.matrixWorld,
        a = this.geometry.attributes.position,
        o = this.object.geometry;
      if (o && o.isGeometry)
        for (var s = o.vertices, h = o.faces, c = 0, l = 0, u = h.length; u > l; l++)
          for (var p = h[l], d = 0, f = p.vertexNormals.length; f > d; d++) {
            var m = s[p[n[d]]],
              v = p.vertexNormals[d];
            t.copy(m).applyMatrix4(r), e.copy(v).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(c, t.x, t.y, t.z), c += 1, a.setXYZ(c, e.x, e.y, e.z), c += 1
          } else if (o && o.isBufferGeometry) {
            var g = o.attributes.position,
              y = o.attributes.normal;
            for (c = 0, d = 0, f = g.count; f > d; d++) t.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(r), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(c, t.x, t.y, t.z), c += 1, a.setXYZ(c, e.x, e.y, e.z), c += 1
          } a.needsUpdate = !0
    }
  }(), Lr.prototype = Object.create(M.prototype), Lr.prototype.constructor = Lr, Lr.prototype.dispose = function() {
    this.cone.geometry.dispose(), this.cone.material.dispose()
  }, Lr.prototype.update = function() {
    var t = new a,
      e = new a;
    return function() {
      this.light.updateMatrixWorld();
      var i = this.light.distance ? this.light.distance : 1e3,
        n = i * Math.tan(this.light.angle);
      this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
  }(), Pr.prototype = Object.create(Te.prototype), Pr.prototype.constructor = Pr, Pr.prototype.updateMatrixWorld = function() {
    var t = new a,
      e = new n,
      i = new n;
    return function(n) {
      var r = this.bones,
        a = this.geometry,
        o = a.getAttribute("position");
      i.getInverse(this.root.matrixWorld);
      for (var s = 0, h = 0; s < r.length; s++) {
        var c = r[s];
        c.parent && c.parent.isBone && (e.multiplyMatrices(i, c.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(h, t.x, t.y, t.z), e.multiplyMatrices(i, c.parent.matrixWorld), t.setFromMatrixPosition(e), o.setXYZ(h + 1, t.x, t.y, t.z), h += 2)
      }
      a.getAttribute("position").needsUpdate = !0, M.prototype.updateMatrixWorld.call(this, n)
    }
  }(), Rr.prototype = Object.create(X.prototype), Rr.prototype.constructor = Rr, Rr.prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
  }, Rr.prototype.update = function() {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
  }, Ir.prototype = Object.create(Te.prototype), Ir.prototype.constructor = Ir, Nr.prototype = Object.create(Te.prototype), Nr.prototype.constructor = Nr, Or.prototype = Object.create(Te.prototype), Or.prototype.constructor = Or, Or.prototype.update = function() {
    var t = new a,
      e = new a,
      i = new o;
    return function() {
      this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
      for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, h = 0, c = 0, l = s.length; l > c; c++) {
        var u = s[c],
          p = u.normal;
        t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(h, t.x, t.y, t.z), h += 1, r.setXYZ(h, e.x, e.y, e.z), h += 1
      }
      r.needsUpdate = !0
    }
  }(), Dr.prototype = Object.create(M.prototype), Dr.prototype.constructor = Dr, Dr.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
  }, Dr.prototype.update = function() {
    var t = new a,
      e = new a,
      i = new a;
    return function() {
      t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(i), this.targetLine.scale.z = i.length()
    }
  }(), Ur.prototype = Object.create(Te.prototype), Ur.prototype.constructor = Ur, Ur.prototype.update = function() {
    function t(t, a, o, s) {
      n.set(a, o, s).unproject(r);
      var h = i[t];
      if (void 0 !== h)
        for (var c = e.getAttribute("position"), l = 0, u = h.length; u > l; l++) c.setXYZ(h[l], n.x, n.y, n.z)
    }
    var e, i, n = new a,
      r = new Ln;
    return function() {
      e = this.geometry, i = this.pointMap;
      r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
    }
  }(), zr.prototype = Object.create(Te.prototype), zr.prototype.constructor = zr, zr.prototype.update = function() {
    var t = new p;
    return function(e) {
      if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
        var i = t.min,
          n = t.max,
          r = this.geometry.attributes.position,
          a = r.array;
        a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
      }
    }
  }(), zr.prototype.setFromObject = function(t) {
    return this.object = t, this.update(), this
  }, Br.prototype = Object.create(Te.prototype), Br.prototype.constructor = Br, Br.prototype.updateMatrixWorld = function(t) {
    var e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), M.prototype.updateMatrixWorld.call(this, t))
  }, Fr.prototype = Object.create(Ee.prototype), Fr.prototype.constructor = Fr, Fr.prototype.updateMatrixWorld = function(t) {
    var e = -this.plane.constant;
    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = 0 > e ? Yr : qr, this.lookAt(this.plane.normal), M.prototype.updateMatrixWorld.call(this, t)
  }, Gr.prototype = Object.create(M.prototype), Gr.prototype.constructor = Gr, Gr.prototype.setDirection = function() {
    var t, e = new a;
    return function(i) {
      i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
    }
  }(), Gr.prototype.setLength = function(t, e, i) {
    void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
  }, Gr.prototype.setColor = function(t) {
    this.line.material.color.copy(t), this.cone.material.color.copy(t)
  }, kr.prototype = Object.create(Te.prototype), kr.prototype.constructor = kr, window.THREE = t, t.AddEquation = aa, t.AddOperation = Ra, t.AdditiveBlending = ea, t.AlphaFormat = po, t.AlwaysDepth = Ma, t.AmbientLight = Un, t.AnimationClip = Jn, t.AnimationMixer = dr, t.AnimationObjectGroup = ur, t.AnimationUtils = oh, t.ArcCurve = ln, t.ArrayCamera = sr, t.ArrowHelper = Gr, t.AxesHelper = kr, t.BackSide = Yr, t.BasicDepthPacking = ss, t.BasicShadowMap = 0, t.Bone = Me, t.BooleanKeyframeTrack = Vn, t.Box2 = Sr, t.Box3 = p, t.Box3Helper = Br, t.BoxBufferGeometry = B, t.BoxGeometry = z, t.BoxHelper = zr, t.BufferAttribute = S, t.BufferGeometry = U, t.BufferGeometryLoader = Qn, t.ByteType = eo, t.Cache = Qs, t.Camera = Ln, t.CameraHelper = Ur, t.CanvasTexture = Ne, t.CatmullRomCurve3 = pn, t.CineonToneMapping = Ua, t.CircleBufferGeometry = Hi, t.CircleGeometry = Vi, t.ClampToEdgeWrapping = Xa, t.Clock = br, t.Color = v, t.ColorKeyframeTrack = Hn, t.CompressedTexture = Ie, t.CompressedTextureLoader = nn, t.ConeBufferGeometry = ki, t.ConeGeometry = Gi, t.CubeCamera = or, t.CubeReflectionMapping = Ba, t.CubeRefractionMapping = Fa, t.CubeTexture = rt, t.CubeTextureLoader = on, t.CubeUVReflectionMapping = Ha, t.CubeUVRefractionMapping = ja, t.CubicBezierCurve = vn, t.CubicBezierCurve3 = gn, t.CubicInterpolant = Bn, t.CullFaceBack = Hr, t.CullFaceFront = jr, t.CullFaceFrontBack = 3, t.CullFaceNone = Vr, t.Curve = hn, t.CurvePath = wn, t.CustomBlending = ra, t.CylinderBufferGeometry = Fi, t.CylinderGeometry = Bi, t.Cylindrical = wr, t.DataTexture = u, t.DataTextureLoader = rn, t.DefaultLoadingManager = $s, t.DepthFormat = xo, t.DepthStencilFormat = _o, t.DepthTexture = Oe, t.DirectionalLight = Dn, t.DirectionalLightHelper = Dr, t.DirectionalLightShadow = On, t.DiscreteInterpolant = Gn, t.DodecahedronBufferGeometry = qe, t.DodecahedronGeometry = Xe, t.DoubleSide = Jr, t.DstAlphaFactor = va, t.DstColorFactor = ya, t.EdgesGeometry = zi, t.EllipseCurve = cn, t.EqualDepth = Ea, t.EquirectangularReflectionMapping = Ga, t.EquirectangularRefractionMapping = ka, t.Euler = _, t.EventDispatcher = e, t.ExtrudeBufferGeometry = Si, t.ExtrudeGeometry = wi, t.Face3 = x, t.FaceColors = Kr, t.FaceNormalsHelper = Or, t.FileLoader = en, t.FlatShading = 1, t.Float32BufferAttribute = I, t.Float64BufferAttribute = N, t.FloatType = oo, t.Fog = fe, t.FogExp2 = de, t.Font = nr, t.FontLoader = ar, t.FrontFaceDirectionCCW = 1, t.FrontFaceDirectionCW = 0, t.FrontSide = qr, t.Frustum = m, t.GammaEncoding = is, t.Geometry = w, t.GreaterDepth = Aa, t.GreaterEqualDepth = Ta, t.GridHelper = Ir, t.Group = Pe, t.HalfFloatType = so, t.IcosahedronBufferGeometry = We, t.IcosahedronGeometry = je, t.ImageLoader = an, t.ImageUtils = ms, t.ImmediateRenderObject = Tr, t.InstancedBufferAttribute = gr, t.InstancedBufferGeometry = mr, t.InstancedInterleavedBuffer = vr, t.Int16BufferAttribute = L, t.Int32BufferAttribute = P, t.Int8BufferAttribute = E, t.IntType = ro, t.InterleavedBuffer = ve, t.InterleavedBufferAttribute = ge, t.Interpolant = zn, t.InterpolateDiscrete = Wo, t.InterpolateLinear = Xo, t.InterpolateSmooth = qo, t.JSONLoader = tr, t.KeyframeTrack = kn, t.LOD = _e, t.LatheBufferGeometry = Ni, t.LatheGeometry = Ii, t.Layers = b, t.LessDepth = wa, t.LessEqualDepth = Sa, t.Light = Tn, t.LightShadow = An, t.Line = Ee, t.Line3 = Er, t.LineBasicMaterial = Se, t.LineCurve = yn, t.LineCurve3 = xn, t.LineDashedMaterial = $i, t.LineLoop = Ae, t.LineSegments = Te, t.LinearEncoding = ts, t.LinearFilter = Ka, t.LinearInterpolant = Fn, t.LinearMipMapLinearFilter = $a, t.LinearMipMapNearestFilter = Qa, t.LinearToneMapping = Na, t.Loader = $n, t.LoaderUtils = hh, t.LoadingManager = tn, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = jo, t.LuminanceAlphaFormat = go, t.LuminanceFormat = vo, t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
  }, t.Material = k, t.MaterialLoader = Kn, t.Math = us, t.Matrix3 = o, t.Matrix4 = n, t.MaxEquation = ca, t.Mesh = X, t.MeshBasicMaterial = W, t.MeshDepthMaterial = se, t.MeshDistanceMaterial = he, t.MeshLambertMaterial = Ki, t.MeshMatcapMaterial = Qi, t.MeshNormalMaterial = Zi, t.MeshPhongMaterial = Yi, t.MeshPhysicalMaterial = qi, t.MeshStandardMaterial = Xi, t.MeshToonMaterial = Ji, t.MinEquation = ha, t.MirroredRepeatWrapping = qa, t.MixOperation = Pa, t.MultiplyBlending = na, t.MultiplyOperation = Ca, t.NearestFilter = Ya, t.NearestMipMapLinearFilter = Za, t.NearestMipMapNearestFilter = Ja, t.NeverDepth = ba, t.NoBlending = $r, t.NoColors = Zr, t.NoToneMapping = Ia, t.NormalBlending = ta, t.NotEqualDepth = La, t.NumberKeyframeTrack = jn, t.Object3D = M, t.ObjectLoader = er, t.ObjectSpaceNormalMap = ls, t.OctahedronBufferGeometry = He, t.OctahedronGeometry = Ve, t.OneFactor = ua, t.OneMinusDstAlphaFactor = ga, t.OneMinusDstColorFactor = xa, t.OneMinusSrcAlphaFactor = ma, t.OneMinusSrcColorFactor = da, t.OrthographicCamera = Nn, t.PCFShadowMap = Wr, t.PCFSoftShadowMap = Xr, t.ParametricBufferGeometry = ze, t.ParametricGeometry = Ue, t.Path = Sn, t.PerspectiveCamera = Cn, t.Plane = f, t.PlaneBufferGeometry = G, t.PlaneGeometry = F, t.PlaneHelper = Fr, t.PointLight = In, t.PointLightHelper = Rr, t.Points = Ce, t.PointsMaterial = Le, t.PolarGridHelper = Nr, t.PolyhedronBufferGeometry = Fe, t.PolyhedronGeometry = Be, t.PropertyBinding = lr, t.PropertyMixer = hr, t.QuadraticBezierCurve = _n, t.QuadraticBezierCurve3 = bn, t.Quaternion = r, t.QuaternionKeyframeTrack = Xn, t.QuaternionLinearInterpolant = Wn, t.REVISION = "97dev", t.RGBADepthPacking = hs, t.RGBAFormat = mo, t.RGBA_ASTC_10x10_Format = ko, t.RGBA_ASTC_10x5_Format = Bo, t.RGBA_ASTC_10x6_Format = Fo, t.RGBA_ASTC_10x8_Format = Go, t.RGBA_ASTC_12x10_Format = Vo, t.RGBA_ASTC_12x12_Format = Ho, t.RGBA_ASTC_4x4_Format = Po, t.RGBA_ASTC_5x4_Format = Ro, t.RGBA_ASTC_5x5_Format = Io, t.RGBA_ASTC_6x5_Format = No, t.RGBA_ASTC_6x6_Format = Oo, t.RGBA_ASTC_8x5_Format = Do, t.RGBA_ASTC_8x6_Format = Uo, t.RGBA_ASTC_8x8_Format = zo, t.RGBA_PVRTC_2BPPV1_Format = Lo, t.RGBA_PVRTC_4BPPV1_Format = Ao, t.RGBA_S3TC_DXT1_Format = Mo, t.RGBA_S3TC_DXT3_Format = wo, t.RGBA_S3TC_DXT5_Format = So, t.RGBDEncoding = os, t.RGBEEncoding = ns, t.RGBEFormat = yo, t.RGBFormat = fo, t.RGBM16Encoding = as, t.RGBM7Encoding = rs, t.RGB_ETC1_Format = Co, t.RGB_PVRTC_2BPPV1_Format = To, t.RGB_PVRTC_4BPPV1_Format = Eo, t.RGB_S3TC_DXT1_Format = bo, t.RawShaderMaterial = Wi, t.Ray = H, t.Raycaster = yr, t.RedFormat = 1028, t.ReinhardToneMapping = Oa, t.RepeatWrapping = Wa, t.ReverseSubtractEquation = sa, t.RingBufferGeometry = Ri, t.RingGeometry = Pi, t.Scene = me, t.ShaderChunk = ys, t.ShaderLib = Ms, t.ShaderMaterial = V, t.ShadowMaterial = ji, t.Shape = En, t.ShapeBufferGeometry = Di, t.ShapeGeometry = Oi, t.ShapePath = ir, t.ShapeUtils = Ys, t.ShortType = io, t.Skeleton = be, t.SkeletonHelper = Pr, t.SkinnedMesh = we, t.SmoothShading = 2, t.Sphere = d, t.SphereBufferGeometry = Ci, t.SphereGeometry = Li, t.Spherical = Mr, t.SphericalReflectionMapping = Va, t.SplineCurve = Mn, t.SpotLight = Rn, t.SpotLightHelper = Lr, t.SpotLightShadow = Pn, t.Sprite = xe, t.SpriteMaterial = ye, t.SrcAlphaFactor = fa, t.SrcAlphaSaturateFactor = _a, t.SrcColorFactor = pa, t.StringKeyframeTrack = qn, t.SubtractEquation = oa, t.SubtractiveBlending = ia, t.TangentSpaceNormalMap = cs, t.TetrahedronBufferGeometry = ke, t.TetrahedronGeometry = Ge, t.TextBufferGeometry = Ai, t.TextGeometry = Ti, t.Texture = s, t.TextureLoader = sn, t.TorusBufferGeometry = $e, t.TorusGeometry = Qe, t.TorusKnotBufferGeometry = Ke, t.TorusKnotGeometry = Ze, t.Triangle = j, t.TriangleFanDrawMode = $o, t.TriangleStripDrawMode = Qo, t.TrianglesDrawMode = Ko, t.TubeBufferGeometry = Je, t.TubeGeometry = Ye, t.UVMapping = za, t.Uint16BufferAttribute = C, t.Uint32BufferAttribute = R, t.Uint8BufferAttribute = T, t.Uint8ClampedBufferAttribute = A, t.Uncharted2ToneMapping = Da, t.Uniform = fr, t.UniformsLib = bs, t.UniformsUtils = xs, t.UnsignedByteType = to, t.UnsignedInt248Type = uo, t.UnsignedIntType = ao, t.UnsignedShort4444Type = ho, t.UnsignedShort5551Type = co, t.UnsignedShort565Type = lo, t.UnsignedShortType = no, t.Vector2 = i, t.Vector3 = a, t.Vector4 = h, t.VectorKeyframeTrack = Yn, t.VertexColors = Qr, t.VertexNormalsHelper = Ar, t.VideoTexture = Re, t.WebGLRenderTarget = c, t.WebGLRenderTargetCube = l, t.WebGLRenderer = function(t) {
    function e() {
      return null === lt ? Mt : 1
    }

    function i() {
      O = new K(N), (D = new J(N, O, t)).isWebGL2 || (O.get("WEBGL_depth_texture"), O.get("OES_texture_float"), O.get("OES_texture_half_float"), O.get("OES_texture_half_float_linear"), O.get("OES_standard_derivatives"), O.get("OES_element_index_uint"), O.get("ANGLE_instanced_arrays")), O.get("OES_texture_float_linear"), ot = new pe(N, O, D), (U = new le(N, O, ot, D)).scissor(gt.copy(St).multiplyScalar(Mt)), U.viewport(vt.copy(wt).multiplyScalar(Mt)), z = new tt(N), B = new Qt, F = new ue(N, O, U, B, D, ot, z), G = new y(N), k = new Q(N, G, z), V = new nt(k, z), et = new it(N), H = new Kt(st, O, D), j = new ie, W = new oe, X = new q(st, U, V, L), rt = new Y(N, O, z, D), at = new $(N, O, z, D), z.programs = H.programs, st.context = N, st.capabilities = D, st.extensions = O, st.properties = B, st.renderLists = j, st.state = U, st.info = z
    }

    function r(t) {
      t.preventDefault(), ht = !0
    }

    function o() {
      ht = !1, i()
    }

    function s(t) {
      var e = t.target;
      e.removeEventListener("dispose", s),
        function(t) {
          c(t), B.remove(t)
        }(e)
    }

    function c(t) {
      var e = B.get(t).program;
      t.program = void 0, void 0 !== e && H.releaseProgram(e)
    }

    function l(t, e, i) {
      if (!1 !== t.visible) {
        if (t.layers.test(e.layers))
          if (t.isLight) I.pushLight(t), t.castShadow && I.pushShadow(t);
          else if (t.isSprite) {
          if (!t.frustumCulled || Tt.intersectsSprite(t)) {
            i && Rt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Pt);
            var n = V.update(t),
              r = t.material;
            R.push(t, n, r, Rt.z, null)
          }
        } else if (t.isImmediateRenderObject) i && Rt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Pt), R.push(t, null, t.material, Rt.z, null);
        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || Tt.intersectsObject(t))) {
          i && Rt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Pt);
          n = V.update(t), r = t.material;
          if (Array.isArray(r))
            for (var a = n.groups, o = 0, s = a.length; s > o; o++) {
              var h = a[o],
                c = r[h.materialIndex];
              c && c.visible && R.push(t, n, c, Rt.z, h)
            } else r.visible && R.push(t, n, r, Rt.z, null)
        }
        var u = t.children;
        for (o = 0, s = u.length; s > o; o++) l(u[o], e, i)
      }
    }

    function p(t, e, i, n) {
      for (var r = 0, a = t.length; a > r; r++) {
        var o = t[r],
          s = o.object,
          h = o.geometry,
          c = void 0 === n ? o.material : n,
          l = o.group;
        if (i.isArrayCamera) {
          mt = i;
          for (var u = i.cameras, p = 0, f = u.length; f > p; p++) {
            var m = u[p];
            if (s.layers.test(m.layers)) {
              if ("viewport" in m) U.viewport(vt.copy(m.viewport));
              else {
                var v = m.bounds,
                  g = v.x * _t,
                  y = v.y * bt,
                  x = v.z * _t,
                  _ = v.w * bt;
                U.viewport(vt.set(g, y, x, _).multiplyScalar(Mt))
              }
              I.setupLights(m), d(s, e, m, h, c, l)
            }
          }
        } else mt = null, d(s, e, i, h, c, l)
      }
    }

    function d(t, e, i, n, r, a) {
      if (t.onBeforeRender(st, e, i, n, r, a), I = W.get(e, mt || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        U.setMaterial(r);
        var o = v(i, e.fog, r, t);
        dt.geometry = null, dt.program = null, dt.wireframe = !1,
          function(t, e) {
            t.render((function(t) {
              st.renderBufferImmediate(t, e)
            }))
          }(t, o)
      } else st.renderBufferDirect(i, e.fog, n, r, t, a);
      t.onAfterRender(st, e, i, n, r, a), I = W.get(e, mt || i)
    }

    function f(t, e, i) {
      var n = B.get(t),
        r = I.state.lights,
        a = I.state.shadowsArray,
        o = n.lightsHash,
        h = r.state.hash,
        l = H.getParameters(t, r.state, a, e, At.numPlanes, At.numIntersection, i),
        u = H.getProgramCode(t, l),
        p = n.program,
        d = !0;
      if (void 0 === p) t.addEventListener("dispose", s);
      else if (p.code !== u) c(t);
      else if (o.stateID !== h.stateID || o.directionalLength !== h.directionalLength || o.pointLength !== h.pointLength || o.spotLength !== h.spotLength || o.rectAreaLength !== h.rectAreaLength || o.hemiLength !== h.hemiLength || o.shadowsLength !== h.shadowsLength) o.stateID = h.stateID, o.directionalLength = h.directionalLength, o.pointLength = h.pointLength, o.spotLength = h.spotLength, o.rectAreaLength = h.rectAreaLength, o.hemiLength = h.hemiLength, o.shadowsLength = h.shadowsLength, d = !1;
      else {
        if (void 0 !== l.shaderID) return;
        d = !1
      }
      if (d) {
        if (l.shaderID) {
          var f = Ms[l.shaderID];
          n.shader = {
            name: t.type,
            uniforms: xs.clone(f.uniforms),
            vertexShader: f.vertexShader,
            fragmentShader: f.fragmentShader
          }
        } else n.shader = {
          name: t.type,
          uniforms: t.uniforms,
          vertexShader: t.vertexShader,
          fragmentShader: t.fragmentShader
        };
        t.onBeforeCompile(n.shader, st), u = H.getProgramCode(t, l), p = H.acquireProgram(t, n.shader, l, u), n.program = p, t.program = p
      }
      var m = p.getAttributes();
      if (t.morphTargets) {
        t.numSupportedMorphTargets = 0;
        for (var v = 0; v < st.maxMorphTargets; v++) m["morphTarget" + v] >= 0 && t.numSupportedMorphTargets++
      }
      if (t.morphNormals) {
        t.numSupportedMorphNormals = 0;
        for (v = 0; v < st.maxMorphNormals; v++) m["morphNormal" + v] >= 0 && t.numSupportedMorphNormals++
      }
      var g = n.shader.uniforms;
      (!t.isShaderMaterial && !t.isRawShaderMaterial || !0 === t.clipping) && (n.numClippingPlanes = At.numPlanes, n.numIntersection = At.numIntersection, g.clippingPlanes = At.uniform), n.fog = e, void 0 === o && (n.lightsHash = o = {}), o.stateID = h.stateID, o.directionalLength = h.directionalLength, o.pointLength = h.pointLength, o.spotLength = h.spotLength, o.rectAreaLength = h.rectAreaLength, o.hemiLength = h.hemiLength, o.shadowsLength = h.shadowsLength, t.lights && (g.ambientLightColor.value = r.state.ambient, g.directionalLights.value = r.state.directional, g.spotLights.value = r.state.spot, g.rectAreaLights.value = r.state.rectArea, g.pointLights.value = r.state.point, g.hemisphereLights.value = r.state.hemi, g.directionalShadowMap.value = r.state.directionalShadowMap, g.directionalShadowMatrix.value = r.state.directionalShadowMatrix, g.spotShadowMap.value = r.state.spotShadowMap, g.spotShadowMatrix.value = r.state.spotShadowMatrix, g.pointShadowMap.value = r.state.pointShadowMap, g.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var y = n.program.getUniforms(),
        x = Bt.seqWithValue(y.seq, g);
      n.uniformsList = x
    }

    function v(t, e, i, n) {
      xt = 0;
      var r = B.get(i),
        a = I.state.lights,
        o = r.lightsHash,
        s = a.state.hash;
      if (Lt && (Ct || t !== ft)) {
        var h = t === ft && i.id === pt;
        At.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, h)
      }!1 === i.needsUpdate && (void 0 === r.program || i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === At.numPlanes && r.numIntersection === At.numIntersection) || (i.needsUpdate = !0)), i.needsUpdate && (f(i, e, n), i.needsUpdate = !1);
      var c = !1,
        l = !1,
        p = !1,
        d = r.program,
        m = d.getUniforms(),
        v = r.shader.uniforms;
      if (U.useProgram(d.program) && (c = !0, l = !0, p = !0), i.id !== pt && (pt = i.id, l = !0), c || ft !== t) {
        if (m.setValue(N, "projectionMatrix", t.projectionMatrix), D.logarithmicDepthBuffer && m.setValue(N, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), ft !== t && (ft = t, l = !0, p = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
          var g = m.map.cameraPosition;
          void 0 !== g && g.setValue(N, Rt.setFromMatrixPosition(t.matrixWorld))
        }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && m.setValue(N, "viewMatrix", t.matrixWorldInverse)
      }
      if (i.skinning) {
        m.setOptional(N, n, "bindMatrix"), m.setOptional(N, n, "bindMatrixInverse");
        var y = n.skeleton;
        if (y) {
          var M = y.bones;
          if (D.floatVertexTextures) {
            if (void 0 === y.boneTexture) {
              var w = Math.sqrt(4 * M.length);
              w = us.ceilPowerOfTwo(w), w = Math.max(w, 4);
              var S = new Float32Array(w * w * 4);
              S.set(y.boneMatrices);
              var E = new u(S, w, w, mo, oo);
              E.needsUpdate = !0, y.boneMatrices = S, y.boneTexture = E, y.boneTextureSize = w
            }
            m.setValue(N, "boneTexture", y.boneTexture), m.setValue(N, "boneTextureSize", y.boneTextureSize)
          } else m.setOptional(N, y, "boneMatrices")
        }
      }
      return l && (m.setValue(N, "toneMappingExposure", st.toneMappingExposure), m.setValue(N, "toneMappingWhitePoint", st.toneMappingWhitePoint), i.lights && function(t, e) {
        t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
      }(v, p), e && i.fog && function(t, e) {
        t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
      }(v, e), i.isMeshBasicMaterial ? x(v, i) : i.isMeshLambertMaterial ? (x(v, i), function(t, e) {
        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
      }(v, i)) : i.isMeshPhongMaterial ? (x(v, i), i.isMeshToonMaterial ? function(t, e) {
        _(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
      }(v, i) : _(v, i)) : i.isMeshStandardMaterial ? (x(v, i), i.isMeshPhysicalMaterial ? function(t, e) {
        b(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness
      }(v, i) : b(v, i)) : i.isMeshMatcapMaterial ? (x(v, i), function(t, e) {
        e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Yr && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Yr && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(v, i)) : i.isMeshDepthMaterial ? (x(v, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(v, i)) : i.isMeshDistanceMaterial ? (x(v, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
      }(v, i)) : i.isMeshNormalMaterial ? (x(v, i), function(t, e) {
        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Yr && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Yr && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(v, i)) : i.isLineBasicMaterial ? (function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity
      }(v, i), i.isLineDashedMaterial && function(t, e) {
        t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
      }(v, i)) : i.isPointsMaterial ? function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * Mt, t.scale.value = .5 * bt, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
      }(v, i) : i.isSpriteMaterial ? function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
      }(v, i) : i.isShadowMaterial && (v.color.value = i.color, v.opacity.value = i.opacity), void 0 !== v.ltc_1 && (v.ltc_1.value = bs.LTC_1), void 0 !== v.ltc_2 && (v.ltc_2.value = bs.LTC_2), Bt.upload(N, r.uniformsList, v, st)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Bt.upload(N, r.uniformsList, v, st), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && m.setValue(N, "center", n.center), m.setValue(N, "modelViewMatrix", n.modelViewMatrix), m.setValue(N, "normalMatrix", n.normalMatrix), m.setValue(N, "modelMatrix", n.matrixWorld), d
    }

    function x(t, e) {
      var i;
      t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = B.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
    }

    function _(t, e) {
      t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Yr && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Yr && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
    }

    function b(t, e) {
      t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Yr && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Yr && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
    }
    var M = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      w = void 0 !== t.context ? t.context : null,
      S = void 0 !== t.alpha && t.alpha,
      E = void 0 === t.depth || t.depth,
      T = void 0 === t.stencil || t.stencil,
      A = void 0 !== t.antialias && t.antialias,
      L = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      C = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      P = void 0 !== t.powerPreference ? t.powerPreference : "default",
      R = null,
      I = null;
    this.domElement = M, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Na, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var N, O, D, U, z, B, F, G, k, V, H, j, W, X, et, rt, at, ot, st = this,
      ht = !1,
      ct = null,
      lt = null,
      ut = null,
      pt = -1,
      dt = {
        geometry: null,
        program: null,
        wireframe: !1
      },
      ft = null,
      mt = null,
      vt = new h,
      gt = new h,
      yt = null,
      xt = 0,
      _t = M.width,
      bt = M.height,
      Mt = 1,
      wt = new h(0, 0, _t, bt),
      St = new h(0, 0, _t, bt),
      Et = !1,
      Tt = new m,
      At = new Z,
      Lt = !1,
      Ct = !1,
      Pt = new n,
      Rt = new a;
    try {
      var It = {
        alpha: S,
        depth: E,
        stencil: T,
        antialias: A,
        premultipliedAlpha: L,
        preserveDrawingBuffer: C,
        powerPreference: P
      };
      if (M.addEventListener("webglcontextlost", r, !1), M.addEventListener("webglcontextrestored", o, !1), null === (N = w || M.getContext("webgl", It) || M.getContext("experimental-webgl", It))) throw null !== M.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      void 0 === N.getShaderPrecisionFormat && (N.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      })
    } catch (t) {
      console.error("THREE.WebGLRenderer: " + t.message)
    }
    i();
    var Nt = new ce(st, V, D.maxTextureSize);
    this.shadowMap = Nt, this.getContext = function() {
      return N
    }, this.getContextAttributes = function() {
      return N.getContextAttributes()
    }, this.forceContextLoss = function() {
      var t = O.get("WEBGL_lose_context");
      t && t.loseContext()
    }, this.forceContextRestore = function() {
      var t = O.get("WEBGL_lose_context");
      t && t.restoreContext()
    }, this.getPixelRatio = function() {
      return Mt
    }, this.setPixelRatio = function(t) {
      void 0 !== t && (Mt = t, this.setSize(_t, bt, !1))
    }, this.getSize = function() {
      return {
        width: _t,
        height: bt
      }
    }, this.setSize = function(t, e, i) {
      _t = t, bt = e, M.width = t * Mt, M.height = e * Mt, !1 !== i && (M.style.width = t + "px", M.style.height = e + "px"), this.setViewport(0, 0, t, e)
    }, this.getDrawingBufferSize = function() {
      return {
        width: _t * Mt,
        height: bt * Mt
      }
    }, this.setDrawingBufferSize = function(t, e, i) {
      _t = t, bt = e, Mt = i, M.width = t * i, M.height = e * i, this.setViewport(0, 0, t, e)
    }, this.getCurrentViewport = function() {
      return vt
    }, this.setViewport = function(t, e, i, n) {
      wt.set(t, bt - e - n, i, n), U.viewport(vt.copy(wt).multiplyScalar(Mt))
    }, this.setScissor = function(t, e, i, n) {
      St.set(t, bt - e - n, i, n), U.scissor(gt.copy(St).multiplyScalar(Mt))
    }, this.setScissorTest = function(t) {
      U.setScissorTest(Et = t)
    }, this.getClearColor = function() {
      return X.getClearColor()
    }, this.setClearColor = function() {
      X.setClearColor.apply(X, arguments)
    }, this.getClearAlpha = function() {
      return X.getClearAlpha()
    }, this.setClearAlpha = function() {
      X.setClearAlpha.apply(X, arguments)
    }, this.clear = function(t, e, i) {
      var n = 0;
      (void 0 === t || t) && (n |= N.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= N.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= N.STENCIL_BUFFER_BIT), N.clear(n)
    }, this.clearColor = function() {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0)
    }, this.dispose = function() {
      M.removeEventListener("webglcontextlost", r, !1), M.removeEventListener("webglcontextrestored", o, !1), j.dispose(), W.dispose(), B.dispose(), V.dispose(), Dt.stop()
    }, this.renderBufferImmediate = function(t, e) {
      U.initAttributes();
      var i = B.get(t);
      t.hasPositions && !i.position && (i.position = N.createBuffer()), t.hasNormals && !i.normal && (i.normal = N.createBuffer()), t.hasUvs && !i.uv && (i.uv = N.createBuffer()), t.hasColors && !i.color && (i.color = N.createBuffer());
      var n = e.getAttributes();
      t.hasPositions && (N.bindBuffer(N.ARRAY_BUFFER, i.position), N.bufferData(N.ARRAY_BUFFER, t.positionArray, N.DYNAMIC_DRAW), U.enableAttribute(n.position), N.vertexAttribPointer(n.position, 3, N.FLOAT, !1, 0, 0)), t.hasNormals && (N.bindBuffer(N.ARRAY_BUFFER, i.normal), N.bufferData(N.ARRAY_BUFFER, t.normalArray, N.DYNAMIC_DRAW), U.enableAttribute(n.normal), N.vertexAttribPointer(n.normal, 3, N.FLOAT, !1, 0, 0)), t.hasUvs && (N.bindBuffer(N.ARRAY_BUFFER, i.uv), N.bufferData(N.ARRAY_BUFFER, t.uvArray, N.DYNAMIC_DRAW), U.enableAttribute(n.uv), N.vertexAttribPointer(n.uv, 2, N.FLOAT, !1, 0, 0)), t.hasColors && (N.bindBuffer(N.ARRAY_BUFFER, i.color), N.bufferData(N.ARRAY_BUFFER, t.colorArray, N.DYNAMIC_DRAW), U.enableAttribute(n.color), N.vertexAttribPointer(n.color, 3, N.FLOAT, !1, 0, 0)), U.disableUnusedAttributes(), N.drawArrays(N.TRIANGLES, 0, t.count), t.count = 0
    }, this.renderBufferDirect = function(t, i, n, r, a, o) {
      var s = a.isMesh && a.normalMatrix.determinant() < 0;
      U.setMaterial(r, s);
      var h = v(t, i, r, a),
        c = !1;
      (dt.geometry !== n.id || dt.program !== h.id || dt.wireframe !== (!0 === r.wireframe)) && (dt.geometry = n.id, dt.program = h.id, dt.wireframe = !0 === r.wireframe, c = !0), a.morphTargetInfluences && (et.update(a, n, r, h), c = !0);
      var l = n.index,
        u = n.attributes.position,
        p = 1;
      !0 === r.wireframe && (l = k.getWireframeAttribute(n), p = 2);
      var d, f = rt;
      null !== l && (d = G.get(l), (f = at).setIndex(d)), c && (function(t, e, i) {
        if (i && i.isInstancedBufferGeometry & !D.isWebGL2 && null === O.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
          U.initAttributes();
          var n = i.attributes,
            r = e.getAttributes(),
            a = t.defaultAttributeValues;
          for (var o in r) {
            var s = r[o];
            if (s >= 0) {
              var h = n[o];
              if (void 0 !== h) {
                var c = h.normalized,
                  l = h.itemSize,
                  u = G.get(h);
                if (void 0 === u) continue;
                var p = u.buffer,
                  d = u.type,
                  f = u.bytesPerElement;
                if (h.isInterleavedBufferAttribute) {
                  var m = h.data,
                    v = m.stride,
                    g = h.offset;
                  m && m.isInstancedInterleavedBuffer ? (U.enableAttributeAndDivisor(s, m.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = m.meshPerAttribute * m.count)) : U.enableAttribute(s), N.bindBuffer(N.ARRAY_BUFFER, p), N.vertexAttribPointer(s, l, d, c, v * f, g * f)
                } else h.isInstancedBufferAttribute ? (U.enableAttributeAndDivisor(s, h.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h.count)) : U.enableAttribute(s), N.bindBuffer(N.ARRAY_BUFFER, p), N.vertexAttribPointer(s, l, d, c, 0, 0)
              } else if (void 0 !== a) {
                var y = a[o];
                if (void 0 !== y) switch (y.length) {
                  case 2:
                    N.vertexAttrib2fv(s, y);
                    break;
                  case 3:
                    N.vertexAttrib3fv(s, y);
                    break;
                  case 4:
                    N.vertexAttrib4fv(s, y);
                    break;
                  default:
                    N.vertexAttrib1fv(s, y)
                }
              }
            }
          }
          U.disableUnusedAttributes()
        }
      }(r, h, n), null !== l && N.bindBuffer(N.ELEMENT_ARRAY_BUFFER, d.buffer));
      var m = 1 / 0;
      null !== l ? m = l.count : void 0 !== u && (m = u.count);
      var g = n.drawRange.start * p,
        y = n.drawRange.count * p,
        x = null !== o ? o.start * p : 0,
        _ = null !== o ? o.count * p : 1 / 0,
        b = Math.max(g, x),
        M = Math.min(m, g + y, x + _) - 1,
        w = Math.max(0, M - b + 1);
      if (0 !== w) {
        if (a.isMesh)
          if (!0 === r.wireframe) U.setLineWidth(r.wireframeLinewidth * e()), f.setMode(N.LINES);
          else switch (a.drawMode) {
            case Ko:
              f.setMode(N.TRIANGLES);
              break;
            case Qo:
              f.setMode(N.TRIANGLE_STRIP);
              break;
            case $o:
              f.setMode(N.TRIANGLE_FAN)
          } else if (a.isLine) {
            var S = r.linewidth;
            void 0 === S && (S = 1), U.setLineWidth(S * e()), a.isLineSegments ? f.setMode(N.LINES) : a.isLineLoop ? f.setMode(N.LINE_LOOP) : f.setMode(N.LINE_STRIP)
          } else a.isPoints ? f.setMode(N.POINTS) : a.isSprite && f.setMode(N.TRIANGLES);
        n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && f.renderInstances(n, b, w) : f.render(b, w)
      }
    }, this.compile = function(t, e) {
      (I = W.get(t, e)).init(), t.traverse((function(t) {
        t.isLight && (I.pushLight(t), t.castShadow && I.pushShadow(t))
      })), I.setupLights(e), t.traverse((function(e) {
        if (e.material)
          if (Array.isArray(e.material))
            for (var i = 0; i < e.material.length; i++) f(e.material[i], t.fog, e);
          else f(e.material, t.fog, e)
      }))
    };
    var Ot = null,
      Dt = new g;
    Dt.setAnimationLoop((function(t) {
      Ot && Ot(t)
    })), "undefined" != typeof window && Dt.setContext(window), this.setAnimationLoop = function(t) {
      Ot = t, Dt.start()
    }, this.render = function(t, e, i, n) {
      if (e && e.isCamera) {
        if (!ht) {
          dt.geometry = null, dt.program = null, dt.wireframe = !1, pt = -1, ft = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), (I = W.get(t, e)).init(), t.onBeforeRender(st, t, e, i), Pt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Tt.setFromMatrix(Pt), Ct = this.localClippingEnabled, Lt = At.init(this.clippingPlanes, Ct, e), (R = j.get(t, e)).init(), l(t, e, st.sortObjects), !0 === st.sortObjects && R.sort(), Lt && At.beginShadows();
          var r = I.state.shadowsArray;
          Nt.render(r, t, e), I.setupLights(e), Lt && At.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), X.render(R, t, e, n);
          var a = R.opaque,
            o = R.transparent;
          if (t.overrideMaterial) {
            var s = t.overrideMaterial;
            a.length && p(a, t, e, s), o.length && p(o, t, e, s)
          } else a.length && p(a, t, e), o.length && p(o, t, e);
          i && F.updateRenderTargetMipmap(i), U.buffers.depth.setTest(!0), U.buffers.depth.setMask(!0), U.buffers.color.setMask(!0), U.setPolygonOffset(!1), t.onAfterRender(st, t, e), R = null, I = null
        }
      } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
    }, this.allocTextureUnit = function() {
      var t = xt;
      return t >= D.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + D.maxTextures), xt += 1, t
    }, this.setTexture2D = function() {
      var t = !1;
      return function(e, i) {
        e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), F.setTexture2D(e, i)
      }
    }(), this.setTexture = function() {
      var t = !1;
      return function(e, i) {
        t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), F.setTexture2D(e, i)
      }
    }(), this.setTextureCube = function() {
      var t = !1;
      return function(e, i) {
        e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? F.setTextureCube(e, i) : F.setTextureCubeDynamic(e, i)
      }
    }(), this.setFramebuffer = function(t) {
      ct = t
    }, this.getRenderTarget = function() {
      return lt
    }, this.setRenderTarget = function(t) {
      lt = t, t && void 0 === B.get(t).__webglFramebuffer && F.setupRenderTarget(t);
      var e = ct,
        i = !1;
      if (t) {
        var n = B.get(t).__webglFramebuffer;
        t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, vt.copy(t.viewport), gt.copy(t.scissor), yt = t.scissorTest
      } else vt.copy(wt).multiplyScalar(Mt), gt.copy(St).multiplyScalar(Mt), yt = Et;
      if (ut !== e && (N.bindFramebuffer(N.FRAMEBUFFER, e), ut = e), U.viewport(vt), U.scissor(gt), U.setScissorTest(yt), i) {
        var r = B.get(t.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
      }
    }, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
      if (t && t.isWebGLRenderTarget) {
        var o = B.get(t).__webglFramebuffer;
        if (o) {
          var s = !1;
          o !== ut && (N.bindFramebuffer(N.FRAMEBUFFER, o), s = !0);
          try {
            var h = t.texture,
              c = h.format,
              l = h.type;
            if (c !== mo && ot.convert(c) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!(l === to || ot.convert(l) === N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) || l === oo && (D.isWebGL2 || O.get("OES_texture_float") || O.get("WEBGL_color_buffer_float")) || l === so && (D.isWebGL2 ? O.get("EXT_color_buffer_float") : O.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            N.checkFramebufferStatus(N.FRAMEBUFFER) === N.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && N.readPixels(e, i, n, r, ot.convert(c), ot.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
          } finally {
            s && N.bindFramebuffer(N.FRAMEBUFFER, ut)
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
    }, this.copyFramebufferToTexture = function(t, e, i) {
      var n = e.image.width,
        r = e.image.height,
        a = ot.convert(e.format);
      this.setTexture2D(e, 0), N.copyTexImage2D(N.TEXTURE_2D, i || 0, a, t.x, t.y, n, r, 0)
    }, this.copyTextureToTexture = function(t, e, i, n) {
      var r = e.image.width,
        a = e.image.height,
        o = ot.convert(i.format),
        s = ot.convert(i.type);
      this.setTexture2D(i, 0), e.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, n || 0, t.x, t.y, r, a, o, s, e.image.data) : N.texSubImage2D(N.TEXTURE_2D, n || 0, t.x, t.y, o, s, e.image)
    }
  }, t.WebGLUtils = pe, t.WireframeGeometry = De, t.WrapAroundEnding = Zo, t.ZeroCurvatureEnding = Yo, t.ZeroFactor = la, t.ZeroSlopeEnding = Jo, t.sRGBEncoding = es, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}));