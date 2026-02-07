var SPE = {
  distributions: {
    BOX: 1,
    SPHERE: 2,
    DISC: 3,
    LINE: 4
  },
  valueOverLifetimeLength: 4
};
"function" == typeof define && define.amd ? define("spe", SPE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = SPE), window.SPE = SPE, SPE.TypedArrayHelper = function(e, t, r, i) {
  this.componentSize = r || 1, this.size = t || 1, this.TypedArrayConstructor = e || Float32Array, this.array = new e(t * this.componentSize), this.indexOffset = i || 0
}, SPE.TypedArrayHelper.constructor = SPE.TypedArrayHelper, SPE.TypedArrayHelper.prototype.setSize = function(e, t) {
  var r = this.array.length;
  return t || (e *= this.componentSize), r > e ? this.shrink(e) : e > r ? this.grow(e) : void console.info("TypedArray is already of size:", e + ".", "Will not resize.")
}, SPE.TypedArrayHelper.prototype.shrink = function(e) {
  return this.array = this.array.subarray(0, e), this.size = e, this
}, SPE.TypedArrayHelper.prototype.grow = function(e) {
  var t = this.array,
    r = new this.TypedArrayConstructor(e);
  return r.set(t), this.array = r, this.size = e, this
}, SPE.TypedArrayHelper.prototype.splice = function(e, t) {
  e *= this.componentSize, t *= this.componentSize;
  for (var r = [], i = this.array, a = i.length, o = 0; a > o; ++o)(e > o || o >= t) && r.push(i[o]);
  return this.setFromArray(0, r), this
}, SPE.TypedArrayHelper.prototype.setFromArray = function(e, t) {
  var r = e + t.length;
  return r > this.array.length ? this.grow(r) : r < this.array.length && this.shrink(r), this.array.set(t, this.indexOffset + e), this
}, SPE.TypedArrayHelper.prototype.setVec2 = function(e, t) {
  return this.setVec2Components(e, t.x, t.y)
}, SPE.TypedArrayHelper.prototype.setVec2Components = function(e, t, r) {
  var i = this.array,
    a = this.indexOffset + e * this.componentSize;
  return i[a] = t, i[a + 1] = r, this
}, SPE.TypedArrayHelper.prototype.setVec3 = function(e, t) {
  return this.setVec3Components(e, t.x, t.y, t.z)
}, SPE.TypedArrayHelper.prototype.setVec3Components = function(e, t, r, i) {
  var a = this.array,
    o = this.indexOffset + e * this.componentSize;
  return a[o] = t, a[o + 1] = r, a[o + 2] = i, this
}, SPE.TypedArrayHelper.prototype.setVec4 = function(e, t) {
  return this.setVec4Components(e, t.x, t.y, t.z, t.w)
}, SPE.TypedArrayHelper.prototype.setVec4Components = function(e, t, r, i, a) {
  var o = this.array,
    n = this.indexOffset + e * this.componentSize;
  return o[n] = t, o[n + 1] = r, o[n + 2] = i, o[n + 3] = a, this
}, SPE.TypedArrayHelper.prototype.setMat3 = function(e, t) {
  return this.setFromArray(this.indexOffset + e * this.componentSize, t.elements)
}, SPE.TypedArrayHelper.prototype.setMat4 = function(e, t) {
  return this.setFromArray(this.indexOffset + e * this.componentSize, t.elements)
}, SPE.TypedArrayHelper.prototype.setColor = function(e, t) {
  return this.setVec3Components(e, t.r, t.g, t.b)
}, SPE.TypedArrayHelper.prototype.setNumber = function(e, t) {
  return this.array[this.indexOffset + e * this.componentSize] = t, this
}, SPE.TypedArrayHelper.prototype.getValueAtIndex = function(e) {
  return this.array[this.indexOffset + e]
}, SPE.TypedArrayHelper.prototype.getComponentValueAtIndex = function(e) {
  return this.array.subarray(this.indexOffset + e * this.componentSize)
}, SPE.ShaderAttribute = function(e, t, r) {
  var i = SPE.ShaderAttribute.typeSizeMap;
  this.type = "string" == typeof e && i.hasOwnProperty(e) ? e : "f", this.componentSize = i[this.type], this.arrayType = r || Float32Array, this.typedArray = null, this.bufferAttribute = null, this.dynamicBuffer = !!t, this.updateMin = 0, this.updateMax = 0
}, SPE.ShaderAttribute.constructor = SPE.ShaderAttribute, SPE.ShaderAttribute.typeSizeMap = {
  f: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  c: 3,
  m3: 9,
  m4: 16
}, SPE.ShaderAttribute.prototype.setUpdateRange = function(e, t) {
  this.updateMin > e && (this.updateMin = e), this.updateMax < t && (this.updateMax = t), this.updateMin = this.updateMin * this.componentSize, this.updateMax = this.updateMax * this.componentSize
}, SPE.ShaderAttribute.prototype.flagUpdate = function() {
  var e = this.bufferAttribute,
    t = e.updateRange;
  t.offset = this.updateMin, t.count = this.updateMax - this.updateMin + this.componentSize, t.count > this.typedArray.array.length && (t.count = this.typedArray.array.length), e.needsUpdate = !0
}, SPE.ShaderAttribute.prototype.resetUpdateRange = function() {
  this.updateMin = 0, this.updateMax = 0
}, SPE.ShaderAttribute.prototype.resetDynamic = function() {
  this.bufferAttribute.dynamic = this.dynamicBuffer
}, SPE.ShaderAttribute.prototype.splice = function(e, t) {
  this.typedArray.splice(e, t), this.forceUpdateAll()
}, SPE.ShaderAttribute.prototype.forceUpdateAll = function() {
  this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.updateRange.offset = 0, this.bufferAttribute.updateRange.count = -1, this.bufferAttribute.dynamic = !1, this.bufferAttribute.needsUpdate = !0
}, SPE.ShaderAttribute.prototype._ensureTypedArray = function(e) {
  (null === this.typedArray || this.typedArray.size !== e * this.componentSize) && (null !== this.typedArray && this.typedArray.size !== e ? this.typedArray.setSize(e) : this.typedArray || (this.typedArray = new SPE.TypedArrayHelper(this.arrayType, e, this.componentSize, 0)))
}, SPE.ShaderAttribute.prototype._createBufferAttribute = function(e) {
  return this._ensureTypedArray(e), null !== this.bufferAttribute ? (this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.count = this.bufferAttribute.array.length / this.bufferAttribute.itemSize, void(this.bufferAttribute.needsUpdate = !0)) : (this.bufferAttribute = new THREE.BufferAttribute(this.typedArray.array, this.componentSize), void(this.bufferAttribute.dynamic = this.dynamicBuffer))
}, SPE.ShaderAttribute.prototype.getLength = function() {
  return this.typedArray ? this.typedArray.array.length : 0
}, SPE.shaderChunks = {
  defines: ["#define PACKED_COLOR_SIZE 256.0", "#define PACKED_COLOR_DIVISOR 255.0"].join("\n"),
  uniforms: ["uniform float deltaTime;", "uniform float runTime;", "uniform sampler2D texture;", "uniform vec4 textureAnimation;", "uniform float scale;"].join("\n"),
  attributes: ["attribute vec4 acceleration;", "attribute vec3 velocity;", "attribute vec4 rotation;", "attribute vec3 rotationCenter;", "attribute vec4 params;", "attribute vec4 size;", "attribute vec4 angle;", "attribute vec4 color;", "attribute vec4 opacity;"].join("\n"),
  varyings: ["varying vec4 vColor;", "#ifdef SHOULD_ROTATE_TEXTURE", "    varying float vAngle;", "#endif", "#ifdef SHOULD_CALCULATE_SPRITE", "    varying vec4 vSpriteSheet;", "#endif"].join("\n"),
  branchAvoidanceFunctions: ["float when_gt(float x, float y) {", "    return max(sign(x - y), 0.0);", "}", "float when_lt(float x, float y) {", "    return min( max(1.0 - sign(x - y), 0.0), 1.0 );", "}", "float when_eq( float x, float y ) {", "    return 1.0 - abs( sign( x - y ) );", "}", "float when_ge(float x, float y) {", "  return 1.0 - when_lt(x, y);", "}", "float when_le(float x, float y) {", "  return 1.0 - when_gt(x, y);", "}", "float and(float a, float b) {", "    return a * b;", "}", "float or(float a, float b) {", "    return min(a + b, 1.0);", "}"].join("\n"),
  unpackColor: ["vec3 unpackColor( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   return c;", "}"].join("\n"),
  unpackRotationAxis: ["vec3 unpackRotationAxis( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   c *= vec3( 2.0 );", "   c -= vec3( 1.0 );", "   return c;", "}"].join("\n"),
  floatOverLifetime: ["float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {", "    highp float value = 0.0;", "    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );", "    float fIndex = 0.0;", "    float shouldApplyValue = 0.0;", "    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );", "", "    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {", "       fIndex = float( i );", "       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );", "       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );", "    }", "", "    return value;", "}"].join("\n"),
  colorOverLifetime: ["vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {", "    vec3 value = vec3( 0.0 );", "    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );", "    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );", "    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );", "    return value;", "}"].join("\n"),
  paramFetchingFunctions: ["float getAlive() {", "   return params.x;", "}", "float getAge() {", "   return params.y;", "}", "float getMaxAge() {", "   return params.z;", "}", "float getWiggle() {", "   return params.w;", "}"].join("\n"),
  forceFetchingFunctions: ["vec4 getPosition( in float age ) {", "   return modelViewMatrix * vec4( position, 1.0 );", "}", "vec3 getVelocity( in float age ) {", "   return velocity * age;", "}", "vec3 getAcceleration( in float age ) {", "   return acceleration.xyz * age;", "}"].join("\n"),
  rotationFunctions: ["#ifdef SHOULD_ROTATE_PARTICLES", "   mat4 getRotationMatrix( in vec3 axis, in float angle) {", "       axis = normalize(axis);", "       float s = sin(angle);", "       float c = cos(angle);", "       float oc = 1.0 - c;", "", "       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,", "                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,", "                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,", "                   0.0,                                0.0,                                0.0,                                1.0);", "   }", "", "   vec3 getRotation( in vec3 pos, in float positionInTime ) {", "      if( rotation.y == 0.0 ) {", "           return pos;", "      }", "", "      vec3 axis = unpackRotationAxis( rotation.x );", "      vec3 center = rotationCenter;", "      vec3 translated;", "      mat4 rotationMatrix;", "      float angle = 0.0;", "      angle += when_eq( rotation.z, 0.0 ) * rotation.y;", "      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );", "      translated = rotationCenter - pos;", "      rotationMatrix = getRotationMatrix( axis, angle );", "      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );", "   }", "#endif"].join("\n"),
  rotateTexture: ["    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "", "    #ifdef SHOULD_ROTATE_TEXTURE", "       float x = gl_PointCoord.x - 0.5;", "       float y = 1.0 - gl_PointCoord.y - 0.5;", "       float c = cos( -vAngle );", "       float s = sin( -vAngle );", "       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );", "    #endif", "", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = vSpriteSheet.x;", "        float framesY = vSpriteSheet.y;", "        float columnNorm = vSpriteSheet.z;", "        float rowNorm = vSpriteSheet.w;", "        vUv.x = gl_PointCoord.x * framesX + columnNorm;", "        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);", "    #endif", "", "    vec4 rotatedTexture = texture2D( texture, vUv );"].join("\n")
}, SPE.shaders = {
  vertex: [SPE.shaderChunks.defines, SPE.shaderChunks.uniforms, SPE.shaderChunks.attributes, SPE.shaderChunks.varyings, THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, THREE.ShaderChunk.fog_pars_vertex, SPE.shaderChunks.branchAvoidanceFunctions, SPE.shaderChunks.unpackColor, SPE.shaderChunks.unpackRotationAxis, SPE.shaderChunks.floatOverLifetime, SPE.shaderChunks.colorOverLifetime, SPE.shaderChunks.paramFetchingFunctions, SPE.shaderChunks.forceFetchingFunctions, SPE.shaderChunks.rotationFunctions, "void main() {", "    highp float age = getAge();", "    highp float alive = getAlive();", "    highp float maxAge = getMaxAge();", "    highp float positionInTime = (age / maxAge);", "    highp float isAlive = when_gt( alive, 0.0 );", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        float wiggleAmount = positionInTime * getWiggle();", "        float wiggleSin = isAlive * sin( wiggleAmount );", "        float wiggleCos = isAlive * cos( wiggleAmount );", "    #endif", "    vec3 vel = getVelocity( age );", "    vec3 accel = getAcceleration( age );", "    vec3 force = vec3( 0.0 );", "    vec3 pos = vec3( position );", "    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;", "    force += vel;", "    force *= drag;", "    force += accel * age;", "    pos += force;", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        pos.x += wiggleSin;", "        pos.y += wiggleCos;", "        pos.z += wiggleSin;", "    #endif", "    #ifdef SHOULD_ROTATE_PARTICLES", "        pos = getRotation( pos, positionInTime );", "    #endif", "    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );", "    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;", "    #ifdef HAS_PERSPECTIVE", "        float perspective = scale / length( mvPosition.xyz );", "    #else", "        float perspective = 1.0;", "    #endif", "    float pointSizePerspective = pointSize * perspective;", "    #ifdef COLORIZE", "       vec3 c = isAlive * getColorOverLifetime(", "           positionInTime,", "           unpackColor( color.x ),", "           unpackColor( color.y ),", "           unpackColor( color.z ),", "           unpackColor( color.w )", "       );", "    #else", "       vec3 c = vec3(1.0);", "    #endif", "    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );", "    vColor = vec4( c, o );", "    #ifdef SHOULD_ROTATE_TEXTURE", "        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );", "    #endif", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = textureAnimation.x;", "        float framesY = textureAnimation.y;", "        float loopCount = textureAnimation.w;", "        float totalFrames = textureAnimation.z;", "        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );", "        float column = floor(mod( frameNumber, framesX ));", "        float row = floor( (frameNumber - column) / framesX );", "        float columnNorm = column / framesX;", "        float rowNorm = row / framesY;", "        vSpriteSheet.x = 1.0 / framesX;", "        vSpriteSheet.y = 1.0 / framesY;", "        vSpriteSheet.z = columnNorm;", "        vSpriteSheet.w = rowNorm;", "    #endif", "    gl_PointSize = pointSizePerspective;", "    gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.fog_vertex, "}"].join("\n"),
  fragment: [SPE.shaderChunks.uniforms, THREE.ShaderChunk.common, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, SPE.shaderChunks.varyings, SPE.shaderChunks.branchAvoidanceFunctions, "void main() {", "    vec3 outgoingLight = vColor.xyz;", "    ", "    #ifdef ALPHATEST", "       if ( vColor.w < float(ALPHATEST) ) discard;", "    #endif", SPE.shaderChunks.rotateTexture, THREE.ShaderChunk.logdepthbuf_fragment, "    outgoingLight = vColor.xyz * rotatedTexture.xyz;", "    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );", THREE.ShaderChunk.fog_fragment, "}"].join("\n")
}, SPE.utils = {
  types: {
    BOOLEAN: "boolean",
    STRING: "string",
    NUMBER: "number",
    OBJECT: "object"
  },
  ensureTypedArg: function(e, t, r) {
    return typeof e === t ? e : r
  },
  ensureArrayTypedArg: function(e, t, r) {
    if (Array.isArray(e)) {
      for (var i = e.length - 1; i >= 0; --i)
        if (typeof e[i] !== t) return r;
      return e
    }
    return this.ensureTypedArg(e, t, r)
  },
  ensureInstanceOf: function(e, t, r) {
    return void 0 !== t && e instanceof t ? e : r
  },
  ensureArrayInstanceOf: function(e, t, r) {
    if (Array.isArray(e)) {
      for (var i = e.length - 1; i >= 0; --i)
        if (void 0 !== t && e[i] instanceof t == 0) return r;
      return e
    }
    return this.ensureInstanceOf(e, t, r)
  },
  ensureValueOverLifetimeCompliance: function(e, t, r) {
    t = t || 3, r = r || 3, !1 === Array.isArray(e._value) && (e._value = [e._value]), !1 === Array.isArray(e._spread) && (e._spread = [e._spread]);
    var i = this.clamp(e._value.length, t, r),
      a = this.clamp(e._spread.length, t, r),
      o = Math.max(i, a);
    e._value.length !== o && (e._value = this.interpolateArray(e._value, o)), e._spread.length !== o && (e._spread = this.interpolateArray(e._spread, o))
  },
  interpolateArray: function(e, t) {
    for (var r = e.length, i = ["function" == typeof e[0].clone ? e[0].clone() : e[0]], a = (r - 1) / (t - 1), o = 1; t - 1 > o; ++o) {
      var n = o * a,
        s = Math.floor(n),
        u = Math.ceil(n),
        p = n - s;
      i[o] = this.lerpTypeAgnostic(e[s], e[u], p)
    }
    return i.push("function" == typeof e[r - 1].clone ? e[r - 1].clone() : e[r - 1]), i
  },
  clamp: function(e, t, r) {
    return t > e ? t : e > r ? r : e
  },
  zeroToEpsilon: function(e, t) {
    var r = 1e-5,
      i = e;
    return i = t ? Math.random() * r * 10 : r, 0 > e && e > -r && (i = -i), i
  },
  lerpTypeAgnostic: function(e, t, r) {
    var i, a = this.types;
    return typeof e === a.NUMBER && typeof t === a.NUMBER ? e + (t - e) * r : e instanceof THREE.Vector2 && t instanceof THREE.Vector2 ? ((i = e.clone()).x = this.lerp(e.x, t.x, r), i.y = this.lerp(e.y, t.y, r), i) : e instanceof THREE.Vector3 && t instanceof THREE.Vector3 ? ((i = e.clone()).x = this.lerp(e.x, t.x, r), i.y = this.lerp(e.y, t.y, r), i.z = this.lerp(e.z, t.z, r), i) : e instanceof THREE.Vector4 && t instanceof THREE.Vector4 ? ((i = e.clone()).x = this.lerp(e.x, t.x, r), i.y = this.lerp(e.y, t.y, r), i.z = this.lerp(e.z, t.z, r), i.w = this.lerp(e.w, t.w, r), i) : e instanceof THREE.Color && t instanceof THREE.Color ? ((i = e.clone()).r = this.lerp(e.r, t.r, r), i.g = this.lerp(e.g, t.g, r), i.b = this.lerp(e.b, t.b, r), i) : void console.warn("Invalid argument types, or argument types do not match:", e, t)
  },
  lerp: function(e, t, r) {
    return e + (t - e) * r
  },
  roundToNearestMultiple: function(e, t) {
    if (0 === t) return e;
    var r, i = (r = 0 > e ? -e : e) % t;
    return 0 === i ? e : 0 > e ? -(r - i) : e + t - i
  },
  arrayValuesAreEqual: function(e) {
    for (var t = 0, r = e.length - 1; r > t; ++t)
      if (e[t] !== e[t + 1]) return !1;
    return !0
  },
  randomFloat: function(e, t) {
    return 0 !== t ? e + t * (Math.random() - .5) : e
  },
  randomVector3: function(e, t, r, i, a) {
    var o = r.x + (Math.random() - .5) * i.x,
      n = r.y + (Math.random() - .5) * i.y,
      s = r.z + (Math.random() - .5) * i.z;
    a && (o = .5 * -a.x + this.roundToNearestMultiple(o, a.x), n = .5 * -a.y + this.roundToNearestMultiple(n, a.y), s = .5 * -a.z + this.roundToNearestMultiple(s, a.z)), e.typedArray.setVec3Components(t, o, n, s)
  },
  randomColor: function(e, t, r, i) {
    var a = r.r + Math.random() * i.x,
      o = r.g + Math.random() * i.y,
      n = r.b + Math.random() * i.z;
    a = this.clamp(a, 0, 1), o = this.clamp(o, 0, 1), n = this.clamp(n, 0, 1), e.typedArray.setVec3Components(t, a, o, n)
  },
  randomColorAsHex: function() {
    var e = new THREE.Color;
    return function(t, r, i, a) {
      for (var o = i.length, n = [], s = 0; o > s; ++s) {
        var u = a[s];
        e.copy(i[s]), e.r += (Math.random() - .5) * u.x, e.g += (Math.random() - .5) * u.y, e.b += (Math.random() - .5) * u.z, e.r < 0 && (e.r = 0), e.r > 1 && (e.r = 1), e.g < 0 && (e.g = 0), e.g > 1 && (e.g = 1), e.b < 0 && (e.b = 0), e.b > 1 && (e.b = 1), n.push(e.getHex())
      }
      t.typedArray.setVec4Components(r, n[0], n[1], n[2], n[3])
    }
  }(),
  randomVector3OnLine: function(e, t, r, i) {
    var a = r.clone();
    a.lerp(i, Math.random()), e.typedArray.setVec3Components(t, a.x, a.y, a.z)
  },
  randomVector3OnSphere: function(e, t, r, i, a, o, n) {
    var s = 2 * Math.random() - 1,
      u = 6.2832 * Math.random(),
      p = Math.sqrt(1 - s * s),
      l = this.randomFloat(i, a),
      h = 0,
      c = 0,
      d = 0;
    n && (l = Math.round(l / n) * n), h = p * Math.cos(u) * l, c = p * Math.sin(u) * l, d = s * l, h *= o.x, c *= o.y, d *= o.z, h += r.x, c += r.y, d += r.z, e.typedArray.setVec3Components(t, h, c, d)
  },
  seededRandom: function(e) {
    var t = 1e4 * Math.sin(e);
    return t - (0 | t)
  },
  randomVector3OnDisc: function(e, t, r, i, a, o, n) {
    var s = 6.2832 * Math.random(),
      u = Math.abs(this.randomFloat(i, a)),
      p = 0,
      l = 0,
      h = 0;
    n && (u = Math.round(u / n) * n), p = Math.cos(s) * u, l = Math.sin(s) * u, p *= o.x, l *= o.y, p += r.x, l += r.y, h += r.z, e.typedArray.setVec3Components(t, p, l, h)
  },
  randomDirectionVector3OnSphere: function() {
    var e = new THREE.Vector3;
    return function(t, r, i, a, o, n, s, u) {
      e.copy(n), e.x -= i, e.y -= a, e.z -= o, e.normalize().multiplyScalar(-this.randomFloat(s, u)), t.typedArray.setVec3Components(r, e.x, e.y, e.z)
    }
  }(),
  randomDirectionVector3OnDisc: function() {
    var e = new THREE.Vector3;
    return function(t, r, i, a, o, n, s, u) {
      e.copy(n), e.x -= i, e.y -= a, e.z -= o, e.normalize().multiplyScalar(-this.randomFloat(s, u)), t.typedArray.setVec3Components(r, e.x, e.y, 0)
    }
  }(),
  getPackedRotationAxis: function() {
    var e = new THREE.Vector3,
      t = new THREE.Vector3,
      r = new THREE.Color,
      i = new THREE.Vector3(1, 1, 1);
    return function(a, o) {
      return e.copy(a).normalize(), t.copy(o).normalize(), e.x += .5 * -o.x + Math.random() * o.x, e.y += .5 * -o.y + Math.random() * o.y, e.z += .5 * -o.z + Math.random() * o.z, e.normalize().add(i).multiplyScalar(.5), r.setRGB(e.x, e.y, e.z), r.getHex()
    }
  }()
}, SPE.Group = function(e) {
  var t = SPE.utils,
    r = t.types;
  (e = t.ensureTypedArg(e, r.OBJECT, {})).texture = t.ensureTypedArg(e.texture, r.OBJECT, {}), this.uuid = THREE.Math.generateUUID(), this.fixedTimeStep = t.ensureTypedArg(e.fixedTimeStep, r.NUMBER, .016), this.texture = t.ensureInstanceOf(e.texture.value, THREE.Texture, null), this.textureFrames = t.ensureInstanceOf(e.texture.frames, THREE.Vector2, new THREE.Vector2(1, 1)), this.textureFrameCount = t.ensureTypedArg(e.texture.frameCount, r.NUMBER, this.textureFrames.x * this.textureFrames.y), this.textureLoop = t.ensureTypedArg(e.texture.loop, r.NUMBER, 1), this.textureFrames.max(new THREE.Vector2(1, 1)), this.hasPerspective = t.ensureTypedArg(e.hasPerspective, r.BOOLEAN, !0), this.colorize = t.ensureTypedArg(e.colorize, r.BOOLEAN, !0), this.maxParticleCount = t.ensureTypedArg(e.maxParticleCount, r.NUMBER, null), this.blending = t.ensureTypedArg(e.blending, r.NUMBER, THREE.AdditiveBlending), this.transparent = t.ensureTypedArg(e.transparent, r.BOOLEAN, !0), this.alphaTest = parseFloat(t.ensureTypedArg(e.alphaTest, r.NUMBER, 0)), this.depthWrite = t.ensureTypedArg(e.depthWrite, r.BOOLEAN, !1), this.depthTest = t.ensureTypedArg(e.depthTest, r.BOOLEAN, !0), this.fog = t.ensureTypedArg(e.fog, r.BOOLEAN, !0), this.scale = t.ensureTypedArg(e.scale, r.NUMBER, 300), this.emitters = [], this.emitterIDs = [], this._pool = [], this._poolCreationSettings = null, this._createNewWhenPoolEmpty = 0, this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !1, this.particleCount = 0, this.uniforms = {
    texture: {
      type: "t",
      value: this.texture
    },
    textureAnimation: {
      type: "v4",
      value: new THREE.Vector4(this.textureFrames.x, this.textureFrames.y, this.textureFrameCount, Math.max(Math.abs(this.textureLoop), 1))
    },
    fogColor: {
      type: "c",
      value: this.fog ? new THREE.Color : null
    },
    fogNear: {
      type: "f",
      value: 10
    },
    fogFar: {
      type: "f",
      value: 200
    },
    fogDensity: {
      type: "f",
      value: .5
    },
    deltaTime: {
      type: "f",
      value: 0
    },
    runTime: {
      type: "f",
      value: 0
    },
    scale: {
      type: "f",
      value: this.scale
    }
  }, this.defines = {
    HAS_PERSPECTIVE: this.hasPerspective,
    COLORIZE: this.colorize,
    VALUE_OVER_LIFETIME_LENGTH: SPE.valueOverLifetimeLength,
    SHOULD_ROTATE_TEXTURE: !1,
    SHOULD_ROTATE_PARTICLES: !1,
    SHOULD_WIGGLE_PARTICLES: !1,
    SHOULD_CALCULATE_SPRITE: this.textureFrames.x > 1 || this.textureFrames.y > 1
  }, this.attributes = {
    position: new SPE.ShaderAttribute("v3", !0),
    acceleration: new SPE.ShaderAttribute("v4", !0),
    velocity: new SPE.ShaderAttribute("v3", !0),
    rotation: new SPE.ShaderAttribute("v4", !0),
    rotationCenter: new SPE.ShaderAttribute("v3", !0),
    params: new SPE.ShaderAttribute("v4", !0),
    size: new SPE.ShaderAttribute("v4", !0),
    angle: new SPE.ShaderAttribute("v4", !0),
    color: new SPE.ShaderAttribute("v4", !0),
    opacity: new SPE.ShaderAttribute("v4", !0)
  }, this.attributeKeys = Object.keys(this.attributes), this.attributeCount = this.attributeKeys.length, this.material = new THREE.ShaderMaterial({
    uniforms: this.uniforms,
    vertexShader: SPE.shaders.vertex,
    fragmentShader: SPE.shaders.fragment,
    blending: this.blending,
    transparent: this.transparent,
    alphaTest: this.alphaTest,
    depthWrite: this.depthWrite,
    depthTest: this.depthTest,
    defines: this.defines,
    fog: this.fog
  }), this.geometry = new THREE.BufferGeometry, this.mesh = new THREE.Points(this.geometry, this.material), null === this.maxParticleCount && console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.")
}, SPE.Group.constructor = SPE.Group, SPE.Group.prototype._updateDefines = function() {
  for (var e, t = this.emitters, r = t.length - 1, i = this.defines, a = !1; r >= 0; --r) {
    e = t[r];
    var o = i.SHOULD_ROTATE_TEXTURE,
      n = i.SHOULD_ROTATE_PARTICLES,
      s = i.SHOULD_WIGGLE_PARTICLES;
    i.SHOULD_CALCULATE_SPRITE || (i.SHOULD_ROTATE_TEXTURE = i.SHOULD_ROTATE_TEXTURE || !!Math.max(Math.max.apply(null, e.angle.value), Math.max.apply(null, e.angle.spread))), i.SHOULD_ROTATE_PARTICLES = i.SHOULD_ROTATE_PARTICLES || !!Math.max(e.rotation.angle, e.rotation.angleSpread), i.SHOULD_WIGGLE_PARTICLES = i.SHOULD_WIGGLE_PARTICLES || !!Math.max(e.wiggle.value, e.wiggle.spread), (o !== i.SHOULD_ROTATE_TEXTURE || n !== i.SHOULD_ROTATE_PARTICLES || s !== i.SHOULD_WIGGLE_PARTICLES) && (a = !0)
  }
  a && (this.material.needsUpdate = !0)
}, SPE.Group.prototype._applyAttributesToGeometry = function() {
  var e, t, r = this.attributes,
    i = this.geometry,
    a = i.attributes;
  for (var o in r) r.hasOwnProperty(o) && (e = r[o], (t = a[o]) ? t.array = e.typedArray.array : i.addAttribute(o, e.bufferAttribute), e.bufferAttribute.needsUpdate = !0);
  this.geometry.setDrawRange(0, this.particleCount)
}, SPE.Group.prototype.addEmitter = function(e) {
  if (e instanceof SPE.Emitter == 0) return console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", e), this;
  if (this.emitterIDs.indexOf(e.uuid) > -1) return console.error("Emitter already exists in this group. Will not add again."), this;
  if (null !== e.group) return console.error("Emitter already belongs to another group. Will not add to requested group."), this;
  var t = this.attributes,
    r = this.particleCount,
    i = r + e.particleCount;
  for (var a in this.particleCount = i, null !== this.maxParticleCount && this.particleCount > this.maxParticleCount && console.warn("SPE.Group: maxParticleCount exceeded. Requesting", this.particleCount, "particles, can support only", this.maxParticleCount), e._calculatePPSValue(e.maxAge._value + e.maxAge._spread), e._setBufferUpdateRanges(this.attributeKeys), e._setAttributeOffset(r), e.group = this, e.attributes = this.attributes, t) t.hasOwnProperty(a) && t[a]._createBufferAttribute(null !== this.maxParticleCount ? this.maxParticleCount : this.particleCount);
  for (var o = r; i > o; ++o) e._assignPositionValue(o), e._assignForceValue(o, "velocity"), e._assignForceValue(o, "acceleration"), e._assignAbsLifetimeValue(o, "opacity"), e._assignAbsLifetimeValue(o, "size"), e._assignAngleValue(o), e._assignRotationValue(o), e._assignParamsValue(o), e._assignColorValue(o);
  return this._applyAttributesToGeometry(), this.emitters.push(e), this.emitterIDs.push(e.uuid), this._updateDefines(e), this.material.needsUpdate = !0, this.geometry.needsUpdate = !0, this._attributesNeedRefresh = !0, this
}, SPE.Group.prototype.removeEmitter = function(e) {
  var t = this.emitterIDs.indexOf(e.uuid);
  if (e instanceof SPE.Emitter != 0)
    if (-1 !== t) {
      for (var r = e.attributeOffset, i = r + e.particleCount, a = this.attributes.params.typedArray, o = r; i > o; ++o) a.array[4 * o] = 0, a.array[4 * o + 1] = 0;
      for (var n in this.emitters.splice(t, 1), this.emitterIDs.splice(t, 1), this.attributes) this.attributes.hasOwnProperty(n) && this.attributes[n].splice(r, i);
      this.particleCount -= e.particleCount, e._onRemove(), this._attributesNeedRefresh = !0
    } else console.error("Emitter does not exist in this group. Will not remove.");
  else console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", e)
}, SPE.Group.prototype.getFromPool = function() {
  var e = this._pool,
    t = this._createNewWhenPoolEmpty;
  if (e.length) return e.pop();
  if (t) {
    var r = new SPE.Emitter(this._poolCreationSettings);
    return this.addEmitter(r), r
  }
  return null
}, SPE.Group.prototype.releaseIntoPool = function(e) {
  return e instanceof SPE.Emitter == 0 ? (console.error("Argument is not instanceof SPE.Emitter:", e), this) : (e.reset(), this._pool.unshift(e), this)
}, SPE.Group.prototype.getPool = function() {
  return this._pool
}, SPE.Group.prototype.addPool = function(e, t, r) {
  var i;
  this._poolCreationSettings = t, this._createNewWhenPoolEmpty = !!r;
  for (var a = 0; e > a; ++a) i = Array.isArray(t) ? new SPE.Emitter(t[a]) : new SPE.Emitter(t), this.addEmitter(i), this.releaseIntoPool(i);
  return this
}, SPE.Group.prototype._triggerSingleEmitter = function(e) {
  if (!e) return null;
  var t = this.getFromPool();
  return t ? (e instanceof THREE.Vector3 && (t.position.value.x = e.x, t.position.value.y = e.y, t.position.value.z = e.z, t.position.value = t.position.value), t.enable(), t.isTrigger = !0, t.triggerDuration = Math.max(t.duration, t.maxAge.value + t.maxAge.spread), t.triggerGroup = this, t) : null
}, SPE.Group.prototype.triggerPoolEmitter = function(e, t) {
  var r, i = [];
  if (e > 1)
    for (var a = 0; e > a; ++a)(r = this._triggerSingleEmitter(t)) && i.push(r);
  else(r = this._triggerSingleEmitter(t)) && i.push(r);
  return i
}, SPE.Group.prototype._updateUniforms = function(e) {
  this.uniforms.runTime.value += e, this.uniforms.deltaTime.value = e
}, SPE.Group.prototype._resetBufferRanges = function() {
  for (var e = this.attributeKeys, t = this.attributeCount - 1, r = this.attributes; t >= 0; --t) r[e[t]].resetUpdateRange()
}, SPE.Group.prototype._updateBuffers = function(e) {
  for (var t, r, i, a = this.attributeKeys, o = this.attributeCount - 1, n = this.attributes, s = e.bufferUpdateRanges; o >= 0; --o) r = s[t = a[o]], (i = n[t]).setUpdateRange(r.min, r.max), i.flagUpdate()
}, SPE.Group.prototype.tick = function(e) {
  var t = this.emitters,
    r = t.length,
    i = e || this.fixedTimeStep,
    a = this.attributeKeys,
    o = this.attributes;
  if (this._updateUniforms(i), this._resetBufferRanges(), 0 !== r || !1 !== this._attributesNeedRefresh || !1 !== this._attributesNeedDynamicReset) {
    for (var n, s = 0; r > s; ++s)(n = t[s]).tick(i), this._updateBuffers(n);
    if (!0 === this._attributesNeedDynamicReset) {
      for (s = this.attributeCount - 1; s >= 0; --s) o[a[s]].resetDynamic();
      this._attributesNeedDynamicReset = !1
    }
    if (!0 === this._attributesNeedRefresh) {
      for (s = this.attributeCount - 1; s >= 0; --s) o[a[s]].forceUpdateAll();
      this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !0
    }
  }
}, SPE.Group.prototype.dispose = function() {
  this.geometry && (this.geometry.dispose(), this.geometry = null), this.material && (this.material.dispose(), this.material = null)
}, SPE.Emitter = function(e) {
  var t = SPE.utils,
    r = t.types,
    i = SPE.valueOverLifetimeLength;
  for (var a in (e = t.ensureTypedArg(e, r.OBJECT, {})).position = t.ensureTypedArg(e.position, r.OBJECT, {}), e.velocity = t.ensureTypedArg(e.velocity, r.OBJECT, {}), e.acceleration = t.ensureTypedArg(e.acceleration, r.OBJECT, {}), e.radius = t.ensureTypedArg(e.radius, r.OBJECT, {}), e.drag = t.ensureTypedArg(e.drag, r.OBJECT, {}), e.rotation = t.ensureTypedArg(e.rotation, r.OBJECT, {}), e.color = t.ensureTypedArg(e.color, r.OBJECT, {}), e.opacity = t.ensureTypedArg(e.opacity, r.OBJECT, {}), e.size = t.ensureTypedArg(e.size, r.OBJECT, {}), e.angle = t.ensureTypedArg(e.angle, r.OBJECT, {}), e.wiggle = t.ensureTypedArg(e.wiggle, r.OBJECT, {}), e.maxAge = t.ensureTypedArg(e.maxAge, r.OBJECT, {}), this.uuid = THREE.Math.generateUUID(), this.type = t.ensureTypedArg(e.type, r.NUMBER, SPE.distributions.BOX), this.position = {
      _value: t.ensureInstanceOf(e.position.value, THREE.Vector3, new THREE.Vector3),
      _spread: t.ensureInstanceOf(e.position.spread, THREE.Vector3, new THREE.Vector3),
      _spreadClamp: t.ensureInstanceOf(e.position.spreadClamp, THREE.Vector3, new THREE.Vector3),
      _distribution: t.ensureTypedArg(e.position.distribution, r.NUMBER, this.type),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1),
      _radius: t.ensureTypedArg(e.position.radius, r.NUMBER, 10),
      _radiusScale: t.ensureInstanceOf(e.position.radiusScale, THREE.Vector3, new THREE.Vector3(1, 1, 1)),
      _distributionClamp: t.ensureTypedArg(e.position.distributionClamp, r.NUMBER, 0)
    }, this.velocity = {
      _value: t.ensureInstanceOf(e.velocity.value, THREE.Vector3, new THREE.Vector3),
      _spread: t.ensureInstanceOf(e.velocity.spread, THREE.Vector3, new THREE.Vector3),
      _distribution: t.ensureTypedArg(e.velocity.distribution, r.NUMBER, this.type),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.acceleration = {
      _value: t.ensureInstanceOf(e.acceleration.value, THREE.Vector3, new THREE.Vector3),
      _spread: t.ensureInstanceOf(e.acceleration.spread, THREE.Vector3, new THREE.Vector3),
      _distribution: t.ensureTypedArg(e.acceleration.distribution, r.NUMBER, this.type),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.drag = {
      _value: t.ensureTypedArg(e.drag.value, r.NUMBER, 0),
      _spread: t.ensureTypedArg(e.drag.spread, r.NUMBER, 0),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.wiggle = {
      _value: t.ensureTypedArg(e.wiggle.value, r.NUMBER, 0),
      _spread: t.ensureTypedArg(e.wiggle.spread, r.NUMBER, 0)
    }, this.rotation = {
      _axis: t.ensureInstanceOf(e.rotation.axis, THREE.Vector3, new THREE.Vector3(0, 1, 0)),
      _axisSpread: t.ensureInstanceOf(e.rotation.axisSpread, THREE.Vector3, new THREE.Vector3),
      _angle: t.ensureTypedArg(e.rotation.angle, r.NUMBER, 0),
      _angleSpread: t.ensureTypedArg(e.rotation.angleSpread, r.NUMBER, 0),
      _static: t.ensureTypedArg(e.rotation.static, r.BOOLEAN, !1),
      _center: t.ensureInstanceOf(e.rotation.center, THREE.Vector3, this.position._value.clone()),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.maxAge = {
      _value: t.ensureTypedArg(e.maxAge.value, r.NUMBER, 2),
      _spread: t.ensureTypedArg(e.maxAge.spread, r.NUMBER, 0)
    }, this.color = {
      _value: t.ensureArrayInstanceOf(e.color.value, THREE.Color, new THREE.Color),
      _spread: t.ensureArrayInstanceOf(e.color.spread, THREE.Vector3, new THREE.Vector3),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.opacity = {
      _value: t.ensureArrayTypedArg(e.opacity.value, r.NUMBER, 1),
      _spread: t.ensureArrayTypedArg(e.opacity.spread, r.NUMBER, 0),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.size = {
      _value: t.ensureArrayTypedArg(e.size.value, r.NUMBER, 1),
      _spread: t.ensureArrayTypedArg(e.size.spread, r.NUMBER, 0),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.angle = {
      _value: t.ensureArrayTypedArg(e.angle.value, r.NUMBER, 0),
      _spread: t.ensureArrayTypedArg(e.angle.spread, r.NUMBER, 0),
      _randomise: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1)
    }, this.particleCount = t.ensureTypedArg(e.particleCount, r.NUMBER, 100), this.duration = t.ensureTypedArg(e.duration, r.NUMBER, null), this.isStatic = t.ensureTypedArg(e.isStatic, r.BOOLEAN, !1), this.activeMultiplier = t.ensureTypedArg(e.activeMultiplier, r.NUMBER, 1), this.direction = t.ensureTypedArg(e.direction, r.NUMBER, 1), this.alive = t.ensureTypedArg(e.alive, r.BOOLEAN, !0), this.particlesPerSecond = 0, this.activationIndex = 0, this.attributeOffset = 0, this.attributeEnd = 0, this.age = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.resetFlags = {
      position: t.ensureTypedArg(e.position.randomise, r.BOOLEAN, !1) || t.ensureTypedArg(e.radius.randomise, r.BOOLEAN, !1),
      velocity: t.ensureTypedArg(e.velocity.randomise, r.BOOLEAN, !1),
      acceleration: t.ensureTypedArg(e.acceleration.randomise, r.BOOLEAN, !1) || t.ensureTypedArg(e.drag.randomise, r.BOOLEAN, !1),
      rotation: t.ensureTypedArg(e.rotation.randomise, r.BOOLEAN, !1),
      rotationCenter: t.ensureTypedArg(e.rotation.randomise, r.BOOLEAN, !1),
      size: t.ensureTypedArg(e.size.randomise, r.BOOLEAN, !1),
      color: t.ensureTypedArg(e.color.randomise, r.BOOLEAN, !1),
      opacity: t.ensureTypedArg(e.opacity.randomise, r.BOOLEAN, !1),
      angle: t.ensureTypedArg(e.angle.randomise, r.BOOLEAN, !1)
    }, this.updateFlags = {}, this.updateCounts = {}, this.updateMap = {
      maxAge: "params",
      position: "position",
      velocity: "velocity",
      acceleration: "acceleration",
      drag: "acceleration",
      wiggle: "params",
      rotation: "rotation",
      size: "size",
      color: "color",
      opacity: "opacity",
      angle: "angle"
    }, this.updateMap) this.updateMap.hasOwnProperty(a) && (this.updateCounts[this.updateMap[a]] = 0, this.updateFlags[this.updateMap[a]] = !1, this._createGetterSetters(this[a], a));
  this.bufferUpdateRanges = {}, this.attributeKeys = null, this.attributeCount = 0, t.ensureValueOverLifetimeCompliance(this.color, i, i), t.ensureValueOverLifetimeCompliance(this.opacity, i, i), t.ensureValueOverLifetimeCompliance(this.size, i, i), t.ensureValueOverLifetimeCompliance(this.angle, i, i), this.isTrigger = !1, this.triggerDuration = 0, this.triggerGroup = null
}, SPE.Emitter.constructor = SPE.Emitter, SPE.Emitter.prototype._createGetterSetters = function(e, t) {
  var r = this;
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      var a = i.replace("_", "");
      Object.defineProperty(e, a, {
        get: function(e) {
          return function() {
            return this[e]
          }
        }(i),
        set: function(e) {
          return function(i) {
            var a = r.updateMap[t],
              o = this[e],
              n = SPE.valueOverLifetimeLength;
            "_rotationCenter" === e ? (r.updateFlags.rotationCenter = !0, r.updateCounts.rotationCenter = 0) : "_randomise" === e ? r.resetFlags[a] = i : (r.updateFlags[a] = !0, r.updateCounts[a] = 0), r.group._updateDefines(), this[e] = i, Array.isArray(o) && SPE.utils.ensureValueOverLifetimeCompliance(r[t], n, n)
          }
        }(i)
      })
    }
}, SPE.Emitter.prototype._setBufferUpdateRanges = function(e) {
  this.attributeKeys = e, this.attributeCount = e.length;
  for (var t = this.attributeCount - 1; t >= 0; --t) this.bufferUpdateRanges[e[t]] = {
    min: Number.POSITIVE_INFINITY,
    max: Number.NEGATIVE_INFINITY
  }
}, SPE.Emitter.prototype._calculatePPSValue = function(e) {
  var t = this.particleCount;
  this.particlesPerSecond = this.duration ? t / (e < this.duration ? e : this.duration) : t / e
}, SPE.Emitter.prototype._setAttributeOffset = function(e) {
  this.attributeOffset = e, this.activationIndex = e, this.activationEnd = e + this.particleCount
}, SPE.Emitter.prototype._assignValue = function(e, t) {
  switch (e) {
    case "position":
      this._assignPositionValue(t);
      break;
    case "velocity":
    case "acceleration":
      this._assignForceValue(t, e);
      break;
    case "size":
    case "opacity":
      this._assignAbsLifetimeValue(t, e);
      break;
    case "angle":
      this._assignAngleValue(t);
      break;
    case "params":
      this._assignParamsValue(t);
      break;
    case "rotation":
      this._assignRotationValue(t);
      break;
    case "color":
      this._assignColorValue(t)
  }
}, SPE.Emitter.prototype._assignPositionValue = function(e) {
  var t = SPE.distributions,
    r = SPE.utils,
    i = this.position,
    a = this.attributes.position,
    o = i._value,
    n = i._spread;
  switch (i._distribution) {
    case t.BOX:
      r.randomVector3(a, e, o, n, i._spreadClamp);
      break;
    case t.SPHERE:
      r.randomVector3OnSphere(a, e, o, i._radius, i._spread.x, i._radiusScale, i._spreadClamp.x, i._distributionClamp || this.particleCount);
      break;
    case t.DISC:
      r.randomVector3OnDisc(a, e, o, i._radius, i._spread.x, i._radiusScale, i._spreadClamp.x);
      break;
    case t.LINE:
      r.randomVector3OnLine(a, e, o, n)
  }
}, SPE.Emitter.prototype._assignForceValue = function(e, t) {
  var r, i, a, o, n, s = SPE.distributions,
    u = SPE.utils,
    p = this[t],
    l = p._value,
    h = p._spread;
  switch (p._distribution) {
    case s.BOX:
      u.randomVector3(this.attributes[t], e, l, h);
      break;
    case s.SPHERE:
      i = (r = this.attributes.position.typedArray.array)[n = 3 * e], a = r[n + 1], o = r[n + 2], u.randomDirectionVector3OnSphere(this.attributes[t], e, i, a, o, this.position._value, p._value.x, p._spread.x);
      break;
    case s.DISC:
      i = (r = this.attributes.position.typedArray.array)[n = 3 * e], a = r[n + 1], o = r[n + 2], u.randomDirectionVector3OnDisc(this.attributes[t], e, i, a, o, this.position._value, p._value.x, p._spread.x);
      break;
    case s.LINE:
      u.randomVector3OnLine(this.attributes[t], e, l, h)
  }
  if ("acceleration" === t) {
    var c = u.clamp(u.randomFloat(this.drag._value, this.drag._spread), 0, 1);
    this.attributes.acceleration.typedArray.array[4 * e + 3] = c
  }
}, SPE.Emitter.prototype._assignAbsLifetimeValue = function(e, t) {
  var r, i = this.attributes[t].typedArray,
    a = this[t],
    o = SPE.utils;
  o.arrayValuesAreEqual(a._value) && o.arrayValuesAreEqual(a._spread) ? (r = Math.abs(o.randomFloat(a._value[0], a._spread[0])), i.setVec4Components(e, r, r, r, r)) : i.setVec4Components(e, Math.abs(o.randomFloat(a._value[0], a._spread[0])), Math.abs(o.randomFloat(a._value[1], a._spread[1])), Math.abs(o.randomFloat(a._value[2], a._spread[2])), Math.abs(o.randomFloat(a._value[3], a._spread[3])))
}, SPE.Emitter.prototype._assignAngleValue = function(e) {
  var t, r = this.attributes.angle.typedArray,
    i = this.angle,
    a = SPE.utils;
  a.arrayValuesAreEqual(i._value) && a.arrayValuesAreEqual(i._spread) ? (t = a.randomFloat(i._value[0], i._spread[0]), r.setVec4Components(e, t, t, t, t)) : r.setVec4Components(e, a.randomFloat(i._value[0], i._spread[0]), a.randomFloat(i._value[1], i._spread[1]), a.randomFloat(i._value[2], i._spread[2]), a.randomFloat(i._value[3], i._spread[3]))
}, SPE.Emitter.prototype._assignParamsValue = function(e) {
  this.attributes.params.typedArray.setVec4Components(e, this.isStatic ? 1 : 0, 0, Math.abs(SPE.utils.randomFloat(this.maxAge._value, this.maxAge._spread)), SPE.utils.randomFloat(this.wiggle._value, this.wiggle._spread))
}, SPE.Emitter.prototype._assignRotationValue = function(e) {
  this.attributes.rotation.typedArray.setVec3Components(e, SPE.utils.getPackedRotationAxis(this.rotation._axis, this.rotation._axisSpread), SPE.utils.randomFloat(this.rotation._angle, this.rotation._angleSpread), this.rotation._static ? 0 : 1), this.attributes.rotationCenter.typedArray.setVec3(e, this.rotation._center)
}, SPE.Emitter.prototype._assignColorValue = function(e) {
  SPE.utils.randomColorAsHex(this.attributes.color, e, this.color._value, this.color._spread)
}, SPE.Emitter.prototype._resetParticle = function(e) {
  for (var t, r, i = this.resetFlags, a = this.updateFlags, o = this.updateCounts, n = this.attributeKeys, s = this.attributeCount - 1; s >= 0; --s) r = a[t = n[s]], (!0 === i[t] || !0 === r) && (this._assignValue(t, e), this._updateAttributeUpdateRange(t, e), !0 === r && o[t] === this.particleCount ? (a[t] = !1, o[t] = 0) : !0 === r && ++o[t])
}, SPE.Emitter.prototype._updateAttributeUpdateRange = function(e, t) {
  var r = this.bufferUpdateRanges[e];
  r.min > t && (r.min = t), r.max < t && (r.max = t)
}, SPE.Emitter.prototype._resetBufferRanges = function() {
  for (var e, t = this.bufferUpdateRanges, r = this.bufferUpdateKeys, i = this.bufferUpdateCount - 1; i >= 0; --i) t[e = r[i]].min = Number.POSITIVE_INFINITY, t[e].max = Number.NEGATIVE_INFINITY
}, SPE.Emitter.prototype._onRemove = function() {
  this.particlesPerSecond = 0, this.attributeOffset = 0, this.activationIndex = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.age = 0
}, SPE.Emitter.prototype._checkParticleAges = function(e, t, r, i) {
  for (var a, o, n, s, u = t - 1; u >= e; --u) 0 !== (s = r[a = 4 * u]) && (n = r[a + 1], o = r[a + 2], 1 === this.direction ? (n += i) >= o && (n = 0, s = 0, --this.activeParticleCount) : 0 >= (n -= i) && (n = o, s = 0, --this.activeParticleCount), r[a] = s, r[a + 1] = n, this._updateAttributeUpdateRange("params", u))
}, SPE.Emitter.prototype._activateParticles = function(e, t, r, i) {
  for (var a, o, n = this.direction, s = e; t > s; ++s)(0 === r[a = 4 * s] || 1 === this.particleCount) && (++this.activeParticleCount, r[a] = 1, this._resetParticle(s), o = i * (s - e), r[a + 1] = -1 === n ? r[a + 2] - o : o, this._updateAttributeUpdateRange("params", s))
}, SPE.Emitter.prototype.tick = function(e) {
  if (!this.isStatic) {
    this.isTrigger && (this.triggerDuration -= e, this.triggerDuration <= 0 && (this.disable(), this.triggerDuration = 0, this.triggerGroup.releaseIntoPool(this), this.triggerGroup = null, this.isTrigger = !1)), this.paramsArray || (this.paramsArray = this.attributes.params.typedArray.array);
    var t = this.attributeOffset,
      r = t + this.particleCount,
      i = this.paramsArray,
      a = this.particlesPerSecond * this.activeMultiplier * e,
      o = this.activationIndex;
    if (this._resetBufferRanges(), this._checkParticleAges(t, r, i, e), !1 === this.alive) return void(this.age = 0);
    if (null !== this.duration && this.age > this.duration) return this.alive = !1, void(this.age = 0);
    var n = 1 === this.particleCount ? o : 0 | o,
      s = Math.min(n + a, this.activationEnd),
      u = s - this.activationIndex | 0,
      p = u > 0 ? e / u : 0;
    this._activateParticles(n, s, i, p), this.activationIndex += a, this.activationIndex > r && (this.activationIndex = t), this.age += e
  }
}, SPE.Emitter.prototype.reset = function(e) {
  if (this.age = 0, this.alive = !1, !0 === e) {
    for (var t, r = this.attributeOffset, i = r + this.particleCount, a = this.paramsArray, o = this.attributes.params.bufferAttribute, n = i - 1; n >= r; --n) a[t = 4 * n] = 0, a[t + 1] = 0;
    o.updateRange.offset = 0, o.updateRange.count = -1, o.needsUpdate = !0
  }
  return this
}, SPE.Emitter.prototype.enable = function() {
  return this.alive = !0, this
}, SPE.Emitter.prototype.disable = function() {
  return this.alive = !1, this
}, SPE.Emitter.prototype.remove = function() {
  return null !== this.group && this.group.removeEmitter(this), this
};