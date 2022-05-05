// threejs.org/license
(function(l, sa) {
    "object" === typeof exports && "undefined" !== typeof module ? sa(exports) : "function" === typeof define && define.amd ? define(["exports"], sa) : sa(l.THREE = l.THREE || {})
})(this, function(l) {
    function sa() {}

    function D(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }

    function X(a, b, c, d, e, f, g, h, k, m) {
        Object.defineProperty(this, "id", {
            value: jf++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.image = void 0 !== a ? a : X.DEFAULT_IMAGE;
        this.mipmaps = [];
        this.mapping = void 0 !== b ? b : X.DEFAULT_MAPPING;
        this.wrapS = void 0 !== c ? c : 1001;
        this.wrapT =
            void 0 !== d ? d : 1001;
        this.magFilter = void 0 !== e ? e : 1006;
        this.minFilter = void 0 !== f ? f : 1008;
        this.anisotropy = void 0 !== k ? k : 1;
        this.format = void 0 !== g ? g : 1023;
        this.type = void 0 !== h ? h : 1009;
        this.offset = new D(0, 0);
        this.repeat = new D(1, 1);
        this.generateMipmaps = !0;
        this.premultiplyAlpha = !1;
        this.flipY = !0;
        this.unpackAlignment = 4;
        this.encoding = void 0 !== m ? m : 3E3;
        this.version = 0;
        this.onUpdate = null
    }

    function ga(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
        this.w = void 0 !== d ? d : 1
    }

    function Db(a, b, c) {
        this.uuid = Y.generateUUID();
        this.width =
            a;
        this.height = b;
        this.scissor = new ga(0, 0, a, b);
        this.scissorTest = !1;
        this.viewport = new ga(0, 0, a, b);
        c = c || {};
        void 0 === c.minFilter && (c.minFilter = 1006);
        this.texture = new X(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
        this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
        this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
        this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null
    }

    function Eb(a, b, c) {
        Db.call(this, a, b, c);
        this.activeMipMapLevel =
            this.activeCubeFace = 0
    }

    function qa(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d : 1
    }

    function p(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }

    function J() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function eb(a, b, c, d, e, f, g, h, k, m, u, q) {
        X.call(this, null, f, g, h, k, m, d, e, u, q);
        this.image = {
            data: a,
            width: b,
            height: c
        };
        this.magFilter = void 0 !== k ? k : 1003;
        this.minFilter = void 0 !==
            m ? m : 1003;
        this.flipY = this.generateMipmaps = !1;
        this.unpackAlignment = 1
    }

    function Za(a, b, c, d, e, f, g, h, k, m) {
        a = void 0 !== a ? a : [];
        X.call(this, a, void 0 !== b ? b : 301, c, d, e, f, g, h, k, m);
        this.flipY = !1
    }

    function Fb(a, b, c) {
        var d = a[0];
        if (0 >= d || 0 < d) return a;
        var e = b * c,
            f = ye[e];
        void 0 === f && (f = new Float32Array(e), ye[e] = f);
        if (0 !== b)
            for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d) e += c, a[d].toArray(f, e);
        return f
    }

    function ze(a, b) {
        var c = Ae[b];
        void 0 === c && (c = new Int32Array(b), Ae[b] = c);
        for (var d = 0; d !== b; ++d) c[d] = a.allocTextureUnit();
        return c
    }

    function kf(a,
        b) {
        a.uniform1f(this.addr, b)
    }

    function lf(a, b) {
        a.uniform1i(this.addr, b)
    }

    function mf(a, b) {
        void 0 === b.x ? a.uniform2fv(this.addr, b) : a.uniform2f(this.addr, b.x, b.y)
    }

    function nf(a, b) {
        void 0 !== b.x ? a.uniform3f(this.addr, b.x, b.y, b.z) : void 0 !== b.r ? a.uniform3f(this.addr, b.r, b.g, b.b) : a.uniform3fv(this.addr, b)
    }

    function of(a, b) {
        void 0 === b.x ? a.uniform4fv(this.addr, b) : a.uniform4f(this.addr, b.x, b.y, b.z, b.w)
    }

    function pf(a, b) {
        a.uniformMatrix2fv(this.addr, !1, b.elements || b)
    }

    function qf(a, b) {
        void 0 === b.elements ? a.uniformMatrix3fv(this.addr, !1, b) : (Be.set(b.elements), a.uniformMatrix3fv(this.addr, !1, Be))
    }

    function rf(a, b) {
        void 0 === b.elements ? a.uniformMatrix4fv(this.addr, !1, b) : (Ce.set(b.elements), a.uniformMatrix4fv(this.addr, !1, Ce))
    }

    function sf(a, b, c) {
        var d = c.allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTexture2D(b || De, d)
    }

    function tf(a, b, c) {
        var d = c.allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTextureCube(b || Ee, d)
    }

    function Fe(a, b) {
        a.uniform2iv(this.addr, b)
    }

    function Ge(a, b) {
        a.uniform3iv(this.addr, b)
    }

    function He(a, b) {
        a.uniform4iv(this.addr,
            b)
    }

    function uf(a) {
        switch (a) {
            case 5126:
                return kf;
            case 35664:
                return mf;
            case 35665:
                return nf;
            case 35666:
                return of;
            case 35674:
                return pf;
            case 35675:
                return qf;
            case 35676:
                return rf;
            case 35678:
                return sf;
            case 35680:
                return tf;
            case 5124:
            case 35670:
                return lf;
            case 35667:
            case 35671:
                return Fe;
            case 35668:
            case 35672:
                return Ge;
            case 35669:
            case 35673:
                return He
        }
    }

    function vf(a, b) {
        a.uniform1fv(this.addr, b)
    }

    function wf(a, b) {
        a.uniform1iv(this.addr, b)
    }

    function xf(a, b) {
        a.uniform2fv(this.addr, Fb(b, this.size, 2))
    }

    function yf(a,
        b) {
        a.uniform3fv(this.addr, Fb(b, this.size, 3))
    }

    function zf(a, b) {
        a.uniform4fv(this.addr, Fb(b, this.size, 4))
    }

    function Af(a, b) {
        a.uniformMatrix2fv(this.addr, !1, Fb(b, this.size, 4))
    }

    function Bf(a, b) {
        a.uniformMatrix3fv(this.addr, !1, Fb(b, this.size, 9))
    }

    function Cf(a, b) {
        a.uniformMatrix4fv(this.addr, !1, Fb(b, this.size, 16))
    }

    function Df(a, b, c) {
        var d = b.length,
            e = ze(c, d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a) c.setTexture2D(b[a] || De, e[a])
    }

    function Ef(a, b, c) {
        var d = b.length,
            e = ze(c, d);
        a.uniform1iv(this.addr, e);
        for (a =
            0; a !== d; ++a) c.setTextureCube(b[a] || Ee, e[a])
    }

    function Ff(a) {
        switch (a) {
            case 5126:
                return vf;
            case 35664:
                return xf;
            case 35665:
                return yf;
            case 35666:
                return zf;
            case 35674:
                return Af;
            case 35675:
                return Bf;
            case 35676:
                return Cf;
            case 35678:
                return Df;
            case 35680:
                return Ef;
            case 5124:
            case 35670:
                return wf;
            case 35667:
            case 35671:
                return Fe;
            case 35668:
            case 35672:
                return Ge;
            case 35669:
            case 35673:
                return He
        }
    }

    function Gf(a, b, c) {
        this.id = a;
        this.addr = c;
        this.setValue = uf(b.type)
    }

    function Hf(a, b, c) {
        this.id = a;
        this.addr = c;
        this.size =
            b.size;
        this.setValue = Ff(b.type)
    }

    function Ie(a) {
        this.id = a;
        this.seq = [];
        this.map = {}
    }

    function fb(a, b, c) {
        this.seq = [];
        this.map = {};
        this.renderer = c;
        c = a.getProgramParameter(b, a.ACTIVE_UNIFORMS);
        for (var d = 0; d < c; ++d) {
            var e = a.getActiveUniform(b, d),
                f = a.getUniformLocation(b, e.name),
                g = this,
                h = e.name,
                k = h.length;
            for (Qd.lastIndex = 0;;) {
                var m = Qd.exec(h),
                    u = Qd.lastIndex,
                    q = m[1],
                    n = m[3];
                "]" === m[2] && (q |= 0);
                if (void 0 === n || "[" === n && u + 2 === k) {
                    h = g;
                    e = void 0 === n ? new Gf(q, e, f) : new Hf(q, e, f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break
                } else n =
                    g.map[q], void 0 === n && (n = new Ie(q), q = g, g = n, q.seq.push(g), q.map[g.id] = g), g = n
            }
        }
    }

    function H(a, b, c) {
        return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c)
    }

    function id(a, b) {
        this.min = void 0 !== a ? a : new D(Infinity, Infinity);
        this.max = void 0 !== b ? b : new D(-Infinity, -Infinity)
    }

    function If(a, b) {
        var c, d, e, f, g, h, k, m, u, q, n = a.context,
            r = a.state,
            l, t, y, x, v, G;
        this.render = function(w, O, S) {
            if (0 !== b.length) {
                w = new p;
                var E = S.w / S.z,
                    F = .5 * S.z,
                    aa = .5 * S.w,
                    R = 16 / S.w,
                    ca = new D(R * E, R),
                    la = new p(1, 1, 0),
                    gb = new D(1, 1),
                    Gb = new id;
                Gb.min.set(S.x,
                    S.y);
                Gb.max.set(S.x + (S.z - 16), S.y + (S.w - 16));
                if (void 0 === x) {
                    var R = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        ja = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    l = n.createBuffer();
                    t = n.createBuffer();
                    n.bindBuffer(n.ARRAY_BUFFER, l);
                    n.bufferData(n.ARRAY_BUFFER, R, n.STATIC_DRAW);
                    n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t);
                    n.bufferData(n.ELEMENT_ARRAY_BUFFER, ja, n.STATIC_DRAW);
                    v = n.createTexture();
                    G = n.createTexture();
                    r.bindTexture(n.TEXTURE_2D, v);
                    n.texImage2D(n.TEXTURE_2D, 0, n.RGB, 16, 16, 0, n.RGB, n.UNSIGNED_BYTE, null);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST);
                    r.bindTexture(n.TEXTURE_2D, G);
                    n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 16, 16, 0, n.RGBA, n.UNSIGNED_BYTE, null);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
                    n.texParameteri(n.TEXTURE_2D,
                        n.TEXTURE_MAG_FILTER, n.NEAREST);
                    n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST);
                    var R = y = {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                            fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        },
                        ja = n.createProgram(),
                        P = n.createShader(n.FRAGMENT_SHADER),
                        K = n.createShader(n.VERTEX_SHADER),
                        W = "precision " + a.getPrecision() + " float;\n";
                    n.shaderSource(P, W + R.fragmentShader);
                    n.shaderSource(K, W + R.vertexShader);
                    n.compileShader(P);
                    n.compileShader(K);
                    n.attachShader(ja, P);
                    n.attachShader(ja, K);
                    n.linkProgram(ja);
                    x = ja;
                    u = n.getAttribLocation(x, "position");
                    q = n.getAttribLocation(x, "uv");
                    c = n.getUniformLocation(x, "renderType");
                    d = n.getUniformLocation(x, "map");
                    e = n.getUniformLocation(x, "occlusionMap");
                    f = n.getUniformLocation(x, "opacity");
                    g = n.getUniformLocation(x, "color");
                    h = n.getUniformLocation(x, "scale");
                    k = n.getUniformLocation(x, "rotation");
                    m = n.getUniformLocation(x, "screenPosition")
                }
                n.useProgram(x);
                r.initAttributes();
                r.enableAttribute(u);
                r.enableAttribute(q);
                r.disableUnusedAttributes();
                n.uniform1i(e, 0);
                n.uniform1i(d, 1);
                n.bindBuffer(n.ARRAY_BUFFER, l);
                n.vertexAttribPointer(u, 2, n.FLOAT, !1, 16, 0);
                n.vertexAttribPointer(q, 2, n.FLOAT, !1, 16, 8);
                n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t);
                r.disable(n.CULL_FACE);
                r.buffers.depth.setMask(!1);
                ja = 0;
                for (P = b.length; ja < P; ja++)
                    if (R = 16 / S.w,
                        ca.set(R * E, R), K = b[ja], w.set(K.matrixWorld.elements[12], K.matrixWorld.elements[13], K.matrixWorld.elements[14]), w.applyMatrix4(O.matrixWorldInverse), w.applyMatrix4(O.projectionMatrix), la.copy(w), gb.x = S.x + la.x * F + F - 8, gb.y = S.y + la.y * aa + aa - 8, !0 === Gb.containsPoint(gb)) {
                        r.activeTexture(n.TEXTURE0);
                        r.bindTexture(n.TEXTURE_2D, null);
                        r.activeTexture(n.TEXTURE1);
                        r.bindTexture(n.TEXTURE_2D, v);
                        n.copyTexImage2D(n.TEXTURE_2D, 0, n.RGB, gb.x, gb.y, 16, 16, 0);
                        n.uniform1i(c, 0);
                        n.uniform2f(h, ca.x, ca.y);
                        n.uniform3f(m, la.x, la.y,
                            la.z);
                        r.disable(n.BLEND);
                        r.enable(n.DEPTH_TEST);
                        n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0);
                        r.activeTexture(n.TEXTURE0);
                        r.bindTexture(n.TEXTURE_2D, G);
                        n.copyTexImage2D(n.TEXTURE_2D, 0, n.RGBA, gb.x, gb.y, 16, 16, 0);
                        n.uniform1i(c, 1);
                        r.disable(n.DEPTH_TEST);
                        r.activeTexture(n.TEXTURE1);
                        r.bindTexture(n.TEXTURE_2D, v);
                        n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0);
                        K.positionScreen.copy(la);
                        K.customUpdateCallback ? K.customUpdateCallback(K) : K.updateLensFlares();
                        n.uniform1i(c, 2);
                        r.enable(n.BLEND);
                        for (var W =
                                0, ba = K.lensFlares.length; W < ba; W++) {
                            var T = K.lensFlares[W];
                            .001 < T.opacity && .001 < T.scale && (la.x = T.x, la.y = T.y, la.z = T.z, R = T.size * T.scale / S.w, ca.x = R * E, ca.y = R, n.uniform3f(m, la.x, la.y, la.z), n.uniform2f(h, ca.x, ca.y), n.uniform1f(k, T.rotation), n.uniform1f(f, T.opacity), n.uniform3f(g, T.color.r, T.color.g, T.color.b), r.setBlending(T.blending, T.blendEquation, T.blendSrc, T.blendDst), a.setTexture2D(T.texture, 1), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0))
                        }
                    }
                r.enable(n.CULL_FACE);
                r.enable(n.DEPTH_TEST);
                r.buffers.depth.setMask(!0);
                a.resetGLState()
            }
        }
    }

    function Jf(a, b) {
        var c, d, e, f, g, h, k, m, u, q, n, r, l, t, y, x, v;

        function G(a, b) {
            return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id
        }
        var w = a.context,
            O = a.state,
            S, E, F, aa, R = new p,
            ca = new qa,
            la = new p;
        this.render = function(p, Gb) {
            if (0 !== b.length) {
                if (void 0 === F) {
                    var ja = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        P = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    S = w.createBuffer();
                    E = w.createBuffer();
                    w.bindBuffer(w.ARRAY_BUFFER, S);
                    w.bufferData(w.ARRAY_BUFFER,
                        ja, w.STATIC_DRAW);
                    w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, E);
                    w.bufferData(w.ELEMENT_ARRAY_BUFFER, P, w.STATIC_DRAW);
                    var ja = w.createProgram(),
                        P = w.createShader(w.VERTEX_SHADER),
                        K = w.createShader(w.FRAGMENT_SHADER);
                    w.shaderSource(P, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
                    w.shaderSource(K, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
                    w.compileShader(P);
                    w.compileShader(K);
                    w.attachShader(ja, P);
                    w.attachShader(ja, K);
                    w.linkProgram(ja);
                    F = ja;
                    x = w.getAttribLocation(F, "position");
                    v = w.getAttribLocation(F, "uv");
                    c = w.getUniformLocation(F, "uvOffset");
                    d = w.getUniformLocation(F, "uvScale");
                    e = w.getUniformLocation(F, "rotation");
                    f = w.getUniformLocation(F, "scale");
                    g = w.getUniformLocation(F, "color");
                    h = w.getUniformLocation(F, "map");
                    k = w.getUniformLocation(F, "opacity");
                    m = w.getUniformLocation(F, "modelViewMatrix");
                    u = w.getUniformLocation(F, "projectionMatrix");
                    q = w.getUniformLocation(F, "fogType");
                    n = w.getUniformLocation(F, "fogDensity");
                    r = w.getUniformLocation(F, "fogNear");
                    l = w.getUniformLocation(F, "fogFar");
                    t = w.getUniformLocation(F, "fogColor");
                    y = w.getUniformLocation(F, "alphaTest");
                    ja = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    ja.width = 8;
                    ja.height = 8;
                    P = ja.getContext("2d");
                    P.fillStyle = "white";
                    P.fillRect(0, 0, 8, 8);
                    aa = new X(ja);
                    aa.needsUpdate = !0
                }
                w.useProgram(F);
                O.initAttributes();
                O.enableAttribute(x);
                O.enableAttribute(v);
                O.disableUnusedAttributes();
                O.disable(w.CULL_FACE);
                O.enable(w.BLEND);
                w.bindBuffer(w.ARRAY_BUFFER, S);
                w.vertexAttribPointer(x, 2, w.FLOAT, !1, 16, 0);
                w.vertexAttribPointer(v, 2, w.FLOAT, !1, 16, 8);
                w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, E);
                w.uniformMatrix4fv(u, !1, Gb.projectionMatrix.elements);
                O.activeTexture(w.TEXTURE0);
                w.uniform1i(h, 0);
                P = ja = 0;
                (K = p.fog) ? (w.uniform3f(t, K.color.r, K.color.g, K.color.b), K.isFog ? (w.uniform1f(r, K.near), w.uniform1f(l, K.far), w.uniform1i(q, 1), P = ja = 1) : K.isFogExp2 && (w.uniform1f(n, K.density), w.uniform1i(q, 2), P = ja = 2)) :
                (w.uniform1i(q, 0), P = ja = 0);
                for (var K = 0, W = b.length; K < W; K++) {
                    var ba = b[K];
                    ba.modelViewMatrix.multiplyMatrices(Gb.matrixWorldInverse, ba.matrixWorld);
                    ba.z = -ba.modelViewMatrix.elements[14]
                }
                b.sort(G);
                for (var T = [], K = 0, W = b.length; K < W; K++) {
                    var ba = b[K],
                        Q = ba.material;
                    !1 !== Q.visible && (w.uniform1f(y, Q.alphaTest), w.uniformMatrix4fv(m, !1, ba.modelViewMatrix.elements), ba.matrixWorld.decompose(R, ca, la), T[0] = la.x, T[1] = la.y, ba = 0, p.fog && Q.fog && (ba = P), ja !== ba && (w.uniform1i(q, ba), ja = ba), null !== Q.map ? (w.uniform2f(c, Q.map.offset.x,
                        Q.map.offset.y), w.uniform2f(d, Q.map.repeat.x, Q.map.repeat.y)) : (w.uniform2f(c, 0, 0), w.uniform2f(d, 1, 1)), w.uniform1f(k, Q.opacity), w.uniform3f(g, Q.color.r, Q.color.g, Q.color.b), w.uniform1f(e, Q.rotation), w.uniform2fv(f, T), O.setBlending(Q.blending, Q.blendEquation, Q.blendSrc, Q.blendDst), O.buffers.depth.setTest(Q.depthTest), O.buffers.depth.setMask(Q.depthWrite), Q.map ? a.setTexture2D(Q.map, 0) : a.setTexture2D(aa, 0), w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0))
                }
                O.enable(w.CULL_FACE);
                a.resetGLState()
            }
        }
    }

    function Z() {
        Object.defineProperty(this,
            "id", {
                value: Kf++
            });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Material";
        this.lights = this.fog = !0;
        this.blending = 1;
        this.side = 0;
        this.shading = 2;
        this.vertexColors = 0;
        this.opacity = 1;
        this.transparent = !1;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
        this.depthFunc = 3;
        this.depthWrite = this.depthTest = !0;
        this.clippingPlanes = null;
        this.clipShadows = this.clipIntersection = !1;
        this.colorWrite = !0;
        this.precision = null;
        this.polygonOffset = !1;
        this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
        this.dithering = !1;
        this.alphaTest = 0;
        this.premultipliedAlpha = !1;
        this.overdraw = 0;
        this.needsUpdate = this.visible = !0
    }

    function Ea(a) {
        Z.call(this);
        this.type = "ShaderMaterial";
        this.defines = {};
        this.uniforms = {};
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth = 1;
        this.wireframe = !1;
        this.wireframeLinewidth =
            1;
        this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        };
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        };
        this.index0AttributeName = void 0;
        void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a))
    }

    function $a(a) {
        Z.call(this);
        this.type = "MeshDepthMaterial";
        this.depthPacking =
            3200;
        this.morphTargets = this.skinning = !1;
        this.displacementMap = this.alphaMap = this.map = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.lights = this.fog = !1;
        this.setValues(a)
    }

    function Ta(a, b) {
        this.min = void 0 !== a ? a : new p(Infinity, Infinity, Infinity);
        this.max = void 0 !== b ? b : new p(-Infinity, -Infinity, -Infinity)
    }

    function Ca(a, b) {
        this.center = void 0 !== a ? a : new p;
        this.radius = void 0 !== b ? b : 0
    }

    function Ga() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    function wa(a, b) {
        this.normal = void 0 !== a ? a : new p(1, 0, 0);
        this.constant = void 0 !== b ? b : 0
    }

    function jd(a, b, c, d, e, f) {
        this.planes = [void 0 !== a ? a : new wa, void 0 !== b ? b : new wa, void 0 !== c ? c : new wa, void 0 !== d ? d : new wa, void 0 !== e ? e : new wa, void 0 !== f ? f : new wa]
    }

    function Je(a, b, c, d) {
        function e(b, c, d, e) {
            var f = b.geometry,
                g;
            g = t;
            var h = b.customDepthMaterial;
            d && (g = y, h = b.customDistanceMaterial);
            h ? g = h : (h = !1, c.morphTargets && (f && f.isBufferGeometry ? h = f.morphAttributes && f.morphAttributes.position && 0 < f.morphAttributes.position.length :
                f && f.isGeometry && (h = f.morphTargets && 0 < f.morphTargets.length)), b.isSkinnedMesh && !1 === c.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b), b = b.isSkinnedMesh && c.skinning, f = 0, h && (f |= 1), b && (f |= 2), g = g[f]);
            a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length && (f = g.uuid, h = c.uuid, b = x[f], void 0 === b && (b = {}, x[f] = b), f = b[h], void 0 === f && (f = g.clone(), b[h] = f), g = f);
            g.visible = c.visible;
            g.wireframe = c.wireframe;
            h = c.side;
            R.renderSingleSided && 2 == h &&
                (h = 0);
            R.renderReverseSided && (0 === h ? h = 1 : 1 === h && (h = 0));
            g.side = h;
            g.clipShadows = c.clipShadows;
            g.clippingPlanes = c.clippingPlanes;
            g.wireframeLinewidth = c.wireframeLinewidth;
            g.linewidth = c.linewidth;
            d && void 0 !== g.uniforms.lightPos && g.uniforms.lightPos.value.copy(e);
            return g
        }

        function f(b, d, g, h) {
            if (!1 !== b.visible) {
                if (b.layers.test(d.layers) && (b.isMesh || b.isLine || b.isPoints) && b.castShadow && (!b.frustumCulled || k.intersectsObject(b))) {
                    b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, b.matrixWorld);
                    var m =
                        c.update(b),
                        n = b.material;
                    if (Array.isArray(n))
                        for (var u = m.groups, q = 0, r = u.length; q < r; q++) {
                            var x = u[q],
                                v = n[x.materialIndex];
                            v && v.visible && (v = e(b, v, h, l), a.renderBufferDirect(g, null, m, v, b, x))
                        } else n.visible && (v = e(b, n, h, l), a.renderBufferDirect(g, null, m, v, b, null))
                }
                b = b.children;
                m = 0;
                for (n = b.length; m < n; m++) f(b[m], d, g, h)
            }
        }
        var g = a.context,
            h = a.state,
            k = new jd,
            m = new J,
            u = b.shadows,
            q = new D,
            n = new D(d.maxTextureSize, d.maxTextureSize),
            r = new p,
            l = new p,
            t = Array(4),
            y = Array(4),
            x = {},
            v = [new p(1, 0, 0), new p(-1, 0, 0), new p(0, 0,
                1), new p(0, 0, -1), new p(0, 1, 0), new p(0, -1, 0)],
            G = [new p(0, 1, 0), new p(0, 1, 0), new p(0, 1, 0), new p(0, 1, 0), new p(0, 0, 1), new p(0, 0, -1)],
            w = [new ga, new ga, new ga, new ga, new ga, new ga];
        b = new $a;
        b.depthPacking = 3201;
        b.clipping = !0;
        d = ab.distanceRGBA;
        for (var O = Ha.clone(d.uniforms), S = 0; 4 !== S; ++S) {
            var E = 0 !== (S & 1),
                F = 0 !== (S & 2),
                aa = b.clone();
            aa.morphTargets = E;
            aa.skinning = F;
            t[S] = aa;
            E = new Ea({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: O,
                vertexShader: d.vertexShader,
                fragmentShader: d.fragmentShader,
                morphTargets: E,
                skinning: F,
                clipping: !0
            });
            y[S] = E
        }
        var R = this;
        this.enabled = !1;
        this.autoUpdate = !0;
        this.needsUpdate = !1;
        this.type = 1;
        this.renderSingleSided = this.renderReverseSided = !0;
        this.render = function(b, c) {
            if (!1 !== R.enabled && (!1 !== R.autoUpdate || !1 !== R.needsUpdate) && 0 !== u.length) {
                h.disable(g.BLEND);
                h.buffers.color.setClear(1, 1, 1, 1);
                h.buffers.depth.setTest(!0);
                h.setScissorTest(!1);
                for (var d, e, x = 0, t = u.length; x < t; x++) {
                    var p = u[x],
                        y = p.shadow;
                    if (void 0 === y) console.warn("THREE.WebGLShadowMap:", p, "has no shadow.");
                    else {
                        var O = y.camera,
                            E = y.matrix;
                        l.setFromMatrixPosition(p.matrixWorld);
                        O.position.copy(l);
                        q.copy(y.mapSize);
                        q.min(n);
                        if (p && p.isPointLight) {
                            d = 6;
                            e = !0;
                            var S = q.x,
                                F = q.y;
                            w[0].set(2 * S, F, S, F);
                            w[1].set(0, F, S, F);
                            w[2].set(3 * S, F, S, F);
                            w[3].set(S, F, S, F);
                            w[4].set(3 * S, 0, S, F);
                            w[5].set(S, 0, S, F);
                            q.x *= 4;
                            q.y *= 2;
                            E.makeTranslation(-l.x, -l.y, -l.z)
                        } else d = 1, e = !1, r.setFromMatrixPosition(p.target.matrixWorld), O.lookAt(r), O.updateMatrixWorld(), O.matrixWorldInverse.getInverse(O.matrixWorld), E.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), E.multiply(O.projectionMatrix), E.multiply(O.matrixWorldInverse);
                        null === y.map && (y.map = new Db(q.x, q.y, {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        }), y.map.texture.name = p.name + ".shadowMap", O.updateProjectionMatrix());
                        y.isSpotLightShadow && y.update(p);
                        a.setRenderTarget(y.map);
                        a.clear();
                        for (p = 0; p < d; p++) e && (r.copy(O.position), r.add(v[p]), O.up.copy(G[p]), O.lookAt(r), O.updateMatrixWorld(), O.matrixWorldInverse.getInverse(O.matrixWorld), h.viewport(w[p])), m.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), k.setFromMatrix(m), f(b, c, O, e)
                    }
                }
                d = a.getClearColor();
                e = a.getClearAlpha();
                a.setClearColor(d, e);
                R.needsUpdate = !1
            }
        }
    }

    function hb(a, b) {
        this.origin = void 0 !== a ? a : new p;
        this.direction = void 0 !== b ? b : new p
    }

    function bb(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || bb.DefaultOrder
    }

    function Rd() {
        this.mask = 1
    }

    function B() {
        Object.defineProperty(this, "id", {
            value: Lf++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = B.DefaultUp.clone();
        var a = new p,
            b = new bb,
            c = new qa,
            d = new p(1, 1, 1);
        b.onChange(function() {
            c.setFromEuler(b, !1)
        });
        c.onChange(function() {
            b.setFromQuaternion(c, void 0, !1)
        });
        Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: a
            },
            rotation: {
                enumerable: !0,
                value: b
            },
            quaternion: {
                enumerable: !0,
                value: c
            },
            scale: {
                enumerable: !0,
                value: d
            },
            modelViewMatrix: {
                value: new J
            },
            normalMatrix: {
                value: new Ga
            }
        });
        this.matrix = new J;
        this.matrixWorld = new J;
        this.matrixAutoUpdate = B.DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = !1;
        this.layers = new Rd;
        this.visible = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this.renderOrder =
            0;
        this.userData = {};
        this.onBeforeRender = function() {};
        this.onAfterRender = function() {}
    }

    function Hb(a, b) {
        this.start = void 0 !== a ? a : new p;
        this.end = void 0 !== b ? b : new p
    }

    function Ua(a, b, c) {
        this.a = void 0 !== a ? a : new p;
        this.b = void 0 !== b ? b : new p;
        this.c = void 0 !== c ? c : new p
    }

    function Va(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = d && d.isVector3 ? d : new p;
        this.vertexNormals = Array.isArray(d) ? d : [];
        this.color = e && e.isColor ? e : new H;
        this.vertexColors = Array.isArray(e) ? e : [];
        this.materialIndex = void 0 !== f ? f : 0
    }

    function Ia(a) {
        Z.call(this);
        this.type = "MeshBasicMaterial";
        this.color = new H(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.lights = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }

    function L(a, b, c) {
        if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = Y.generateUUID();
        this.array = a;
        this.itemSize = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.normalized = !0 === c;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.onUploadCallback = function() {};
        this.version = 0
    }

    function rc(a, b) {
        L.call(this, new Int8Array(a), b)
    }

    function sc(a, b) {
        L.call(this, new Uint8Array(a), b)
    }

    function tc(a, b) {
        L.call(this, new Uint8ClampedArray(a), b)
    }

    function uc(a, b) {
        L.call(this, new Int16Array(a), b)
    }

    function ib(a, b) {
        L.call(this, new Uint16Array(a), b)
    }

    function vc(a, b) {
        L.call(this,
            new Int32Array(a), b)
    }

    function jb(a, b) {
        L.call(this, new Uint32Array(a), b)
    }

    function C(a, b) {
        L.call(this, new Float32Array(a), b)
    }

    function wc(a, b) {
        L.call(this, new Float64Array(a), b)
    }

    function Ke() {
        this.indices = [];
        this.vertices = [];
        this.normals = [];
        this.colors = [];
        this.uvs = [];
        this.uvs2 = [];
        this.groups = [];
        this.morphTargets = {};
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }

    function Sd(a) {
        if (0 === a.length) return -Infinity;
        for (var b = a[0], c = 1, d = a.length; c < d; ++c) a[c] > b && (b = a[c]);
        return b
    }

    function M() {
        Object.defineProperty(this, "id", {
            value: Td++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "Geometry";
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.faceVertexUvs = [
            []
        ];
        this.morphTargets = [];
        this.morphNormals = [];
        this.skinWeights = [];
        this.skinIndices = [];
        this.lineDistances = [];
        this.boundingSphere = this.boundingBox = null;
        this.groupsNeedUpdate = this.lineDistancesNeedUpdate =
            this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }

    function I() {
        Object.defineProperty(this, "id", {
            value: Td++
        });
        this.uuid = Y.generateUUID();
        this.name = "";
        this.type = "BufferGeometry";
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingSphere = this.boundingBox = null;
        this.drawRange = {
            start: 0,
            count: Infinity
        }
    }

    function xa(a, b) {
        B.call(this);
        this.type = "Mesh";
        this.geometry = void 0 !== a ? a : new I;
        this.material = void 0 !== b ?
            b : new Ia({
                color: 16777215 * Math.random()
            });
        this.drawMode = 0;
        this.updateMorphTargets()
    }

    function Ib(a, b, c, d, e, f) {
        M.call(this);
        this.type = "BoxGeometry";
        this.parameters = {
            width: a,
            height: b,
            depth: c,
            widthSegments: d,
            heightSegments: e,
            depthSegments: f
        };
        this.fromBufferGeometry(new kb(a, b, c, d, e, f));
        this.mergeVertices()
    }

    function kb(a, b, c, d, e, f) {
        function g(a, b, c, d, e, f, g, l, S, E, F) {
            var aa = f / S,
                R = g / E,
                ca = f / 2,
                la = g / 2,
                D = l / 2;
            g = S + 1;
            var C = E + 1,
                B = f = 0,
                P, K, W = new p;
            for (K = 0; K < C; K++) {
                var ba = K * R - la;
                for (P = 0; P < g; P++) W[a] = (P * aa - ca) * d, W[b] =
                    ba * e, W[c] = D, m.push(W.x, W.y, W.z), W[a] = 0, W[b] = 0, W[c] = 0 < l ? 1 : -1, u.push(W.x, W.y, W.z), q.push(P / S), q.push(1 - K / E), f += 1
            }
            for (K = 0; K < E; K++)
                for (P = 0; P < S; P++) a = n + P + g * (K + 1), b = n + (P + 1) + g * (K + 1), c = n + (P + 1) + g * K, k.push(n + P + g * K, a, c), k.push(a, b, c), B += 6;
            h.addGroup(r, B, F);
            r += B;
            n += f
        }
        I.call(this);
        this.type = "BoxBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            depth: c,
            widthSegments: d,
            heightSegments: e,
            depthSegments: f
        };
        var h = this;
        d = Math.floor(d) || 1;
        e = Math.floor(e) || 1;
        f = Math.floor(f) || 1;
        var k = [],
            m = [],
            u = [],
            q = [],
            n = 0,
            r = 0;
        g("z", "y",
            "x", -1, -1, c, b, a, f, e, 0);
        g("z", "y", "x", 1, -1, c, b, -a, f, e, 1);
        g("x", "z", "y", 1, 1, a, c, b, d, f, 2);
        g("x", "z", "y", 1, -1, a, c, -b, d, f, 3);
        g("x", "y", "z", 1, -1, a, b, c, d, e, 4);
        g("x", "y", "z", -1, -1, a, b, -c, d, e, 5);
        this.setIndex(k);
        this.addAttribute("position", new C(m, 3));
        this.addAttribute("normal", new C(u, 3));
        this.addAttribute("uv", new C(q, 2))
    }

    function xc(a, b, c, d) {
        M.call(this);
        this.type = "PlaneGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        this.fromBufferGeometry(new lb(a, b, c, d));
        this.mergeVertices()
    }

    function lb(a, b, c, d) {
        I.call(this);
        this.type = "PlaneBufferGeometry";
        this.parameters = {
            width: a,
            height: b,
            widthSegments: c,
            heightSegments: d
        };
        var e = a / 2,
            f = b / 2;
        c = Math.floor(c) || 1;
        d = Math.floor(d) || 1;
        var g = c + 1,
            h = d + 1,
            k = a / c,
            m = b / d,
            u = [],
            q = [],
            n = [],
            r = [];
        for (a = 0; a < h; a++) {
            var l = a * m - f;
            for (b = 0; b < g; b++) q.push(b * k - e, -l, 0), n.push(0, 0, 1), r.push(b / c), r.push(1 - a / d)
        }
        for (a = 0; a < d; a++)
            for (b = 0; b < c; b++) e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, u.push(b + g * a, e, h), u.push(e, f, h);
        this.setIndex(u);
        this.addAttribute("position", new C(q, 3));
        this.addAttribute("normal",
            new C(n, 3));
        this.addAttribute("uv", new C(r, 2))
    }

    function Oa() {
        B.call(this);
        this.type = "Camera";
        this.matrixWorldInverse = new J;
        this.projectionMatrix = new J
    }

    function ya(a, b, c, d) {
        Oa.call(this);
        this.type = "PerspectiveCamera";
        this.fov = void 0 !== a ? a : 50;
        this.zoom = 1;
        this.near = void 0 !== c ? c : .1;
        this.far = void 0 !== d ? d : 2E3;
        this.focus = 10;
        this.aspect = void 0 !== b ? b : 1;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset = 0;
        this.updateProjectionMatrix()
    }

    function Jb(a, b, c, d, e, f) {
        Oa.call(this);
        this.type = "OrthographicCamera";
        this.zoom =
            1;
        this.view = null;
        this.left = a;
        this.right = b;
        this.top = c;
        this.bottom = d;
        this.near = void 0 !== e ? e : .1;
        this.far = void 0 !== f ? f : 2E3;
        this.updateProjectionMatrix()
    }

    function Mf(a) {
        var b = {};
        return {
            get: function(a) {
                a.isInterleavedBufferAttribute && (a = a.data);
                return b[a.uuid]
            },
            remove: function(c) {
                var d = b[c.uuid];
                d && (a.deleteBuffer(d.buffer), delete b[c.uuid])
            },
            update: function(c, d) {
                c.isInterleavedBufferAttribute && (c = c.data);
                var e = b[c.uuid];
                if (void 0 === e) {
                    var e = c.uuid,
                        f = c,
                        g = f.array,
                        h = f.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW,
                        k = a.createBuffer();
                    a.bindBuffer(d, k);
                    a.bufferData(d, g, h);
                    f.onUploadCallback();
                    h = a.FLOAT;
                    g instanceof Float32Array ? h = a.FLOAT : g instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : g instanceof Uint16Array ? h = a.UNSIGNED_SHORT : g instanceof Int16Array ? h = a.SHORT : g instanceof Uint32Array ? h = a.UNSIGNED_INT : g instanceof Int32Array ? h = a.INT : g instanceof Int8Array ? h = a.BYTE : g instanceof Uint8Array && (h = a.UNSIGNED_BYTE);
                    b[e] = {
                        buffer: k,
                        type: h,
                        bytesPerElement: g.BYTES_PER_ELEMENT,
                        version: f.version
                    }
                } else e.version <
                    c.version && (f = c, g = f.array, k = f.updateRange, a.bindBuffer(d, e.buffer), !1 === f.dynamic ? a.bufferData(d, g, a.STATIC_DRAW) : -1 === k.count ? a.bufferSubData(d, 0, g) : 0 === k.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a.bufferSubData(d, k.offset * g.BYTES_PER_ELEMENT, g.subarray(k.offset, k.offset + k.count)), k.count = 0), e.version = c.version)
            }
        }
    }

    function Nf(a, b) {
        return a.renderOrder !==
            b.renderOrder ? a.renderOrder - b.renderOrder : a.program && b.program && a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }

    function Of(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }

    function Pf() {
        var a = [],
            b = -1,
            c = [],
            d = -1;
        return {
            opaque: a,
            transparent: c,
            init: function() {
                d = b = -1
            },
            push: function(e, f, g, h, k) {
                var m, u;
                g.transparent ? (m = c, u = ++d) : (m = a, u = ++b);
                (u = m[u]) ? (u.id = e.id, u.object = e,
                    u.geometry = f, u.material = g, u.program = g.program, u.renderOrder = e.renderOrder, u.z = h, u.group = k) : (u = {
                    id: e.id,
                    object: e,
                    geometry: f,
                    material: g,
                    program: g.program,
                    renderOrder: e.renderOrder,
                    z: h,
                    group: k
                }, m.push(u))
            },
            finish: function() {
                a.length = b + 1;
                c.length = d + 1
            },
            sort: function() {
                a.sort(Nf);
                c.sort(Of)
            }
        }
    }

    function Qf() {
        var a = {};
        return {
            get: function(b, c) {
                var d = b.id + "," + c.id,
                    e = a[d];
                void 0 === e && (e = new Pf, a[d] = e);
                return e
            },
            dispose: function() {
                a = {}
            }
        }
    }

    function Rf(a, b, c) {
        var d, e, f;
        this.setMode = function(a) {
            d = a
        };
        this.setIndex =
            function(c) {
                c.array instanceof Uint32Array && b.get("OES_element_index_uint") ? (e = a.UNSIGNED_INT, f = 4) : c.array instanceof Uint16Array ? (e = a.UNSIGNED_SHORT, f = 2) : (e = a.UNSIGNED_BYTE, f = 1)
            };
        this.render = function(b, h) {
            a.drawElements(d, h, e, b * f);
            c.calls++;
            c.vertices += h;
            d === a.TRIANGLES && (c.faces += h / 3)
        };
        this.renderInstances = function(g, h, k) {
            var m = b.get("ANGLE_instanced_arrays");
            null === m ? console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") :
                (m.drawElementsInstancedANGLE(d, k, e, h * f, g.maxInstancedCount), c.calls++, c.vertices += k * g.maxInstancedCount, d === a.TRIANGLES && (c.faces += g.maxInstancedCount * k / 3))
        }
    }

    function Sf(a, b, c) {
        var d;
        this.setMode = function(a) {
            d = a
        };
        this.render = function(b, f) {
            a.drawArrays(d, b, f);
            c.calls++;
            c.vertices += f;
            d === a.TRIANGLES && (c.faces += f / 3)
        };
        this.renderInstances = function(e, f, g) {
            var h = b.get("ANGLE_instanced_arrays");
            if (null === h) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                var k = e.attributes.position;
                k.isInterleavedBufferAttribute ? (g = k.data.count, h.drawArraysInstancedANGLE(d, 0, g, e.maxInstancedCount)) : h.drawArraysInstancedANGLE(d, f, g, e.maxInstancedCount);
                c.calls++;
                c.vertices += g * e.maxInstancedCount;
                d === a.TRIANGLES && (c.faces += e.maxInstancedCount * g / 3)
            }
        }
    }

    function Tf(a, b, c) {
        function d(a) {
            a = a.target;
            var h = e[a.id];
            null !== h.index && b.remove(h.index);
            for (var k in h.attributes) b.remove(h.attributes[k]);
            a.removeEventListener("dispose", d);
            delete e[a.id];
            if (k = f[a.id]) b.remove(k),
                delete f[a.id];
            if (k = f[h.id]) b.remove(k), delete f[h.id];
            c.geometries--
        }
        var e = {},
            f = {};
        return {
            get: function(a, b) {
                var f = e[b.id];
                if (f) return f;
                b.addEventListener("dispose", d);
                b.isBufferGeometry ? f = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new I).setFromObject(a)), f = b._bufferGeometry);
                e[b.id] = f;
                c.geometries++;
                return f
            },
            update: function(c) {
                var d = c.index,
                    e = c.attributes;
                null !== d && b.update(d, a.ELEMENT_ARRAY_BUFFER);
                for (var f in e) b.update(e[f], a.ARRAY_BUFFER);
                c = c.morphAttributes;
                for (f in c)
                    for (var d =
                            c[f], e = 0, u = d.length; e < u; e++) b.update(d[e], a.ARRAY_BUFFER)
            },
            getWireframeAttribute: function(c) {
                var d = f[c.id];
                if (d) return d;
                var d = [],
                    e = c.index,
                    m = c.attributes;
                if (null !== e)
                    for (var e = e.array, m = 0, u = e.length; m < u; m += 3) {
                        var q = e[m + 0],
                            n = e[m + 1],
                            r = e[m + 2];
                        d.push(q, n, n, r, r, q)
                    } else
                        for (e = m.position.array, m = 0, u = e.length / 3 - 1; m < u; m += 3) q = m + 0, n = m + 1, r = m + 2, d.push(q, n, n, r, r, q);
                d = new(65535 < Sd(d) ? jb : ib)(d, 1);
                b.update(d, a.ELEMENT_ARRAY_BUFFER);
                return f[c.id] = d
            }
        }
    }

    function Uf() {
        var a = {};
        return {
            get: function(b) {
                if (void 0 !== a[b.id]) return a[b.id];
                var c;
                switch (b.type) {
                    case "DirectionalLight":
                        c = {
                            direction: new p,
                            color: new H,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new D
                        };
                        break;
                    case "SpotLight":
                        c = {
                            position: new p,
                            direction: new p,
                            color: new H,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new D
                        };
                        break;
                    case "PointLight":
                        c = {
                            position: new p,
                            color: new H,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new D
                        };
                        break;
                    case "HemisphereLight":
                        c = {
                            direction: new p,
                            skyColor: new H,
                            groundColor: new H
                        };
                        break;
                    case "RectAreaLight":
                        c = {
                            color: new H,
                            position: new p,
                            halfWidth: new p,
                            halfHeight: new p
                        }
                }
                return a[b.id] = c
            }
        }
    }

    function Vf(a, b, c) {
        var d = {};
        return {
            update: function(a) {
                var f = c.frame,
                    g = a.geometry,
                    h = b.get(a, g);
                d[h.id] !== f && (g.isGeometry && h.updateFromObject(a), b.update(h), d[h.id] = f);
                return h
            },
            clear: function() {
                d = {}
            }
        }
    }

    function Wf(a) {
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }

    function Le(a, b, c) {
        var d = a.createShader(b);
        a.shaderSource(d, c);
        a.compileShader(d);
        !1 === a.getShaderParameter(d, a.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
        "" !== a.getShaderInfoLog(d) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b === a.VERTEX_SHADER ? "vertex" : "fragment", a.getShaderInfoLog(d), Wf(c));
        return d
    }

    function Me(a) {
        switch (a) {
            case 3E3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            case 3002:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD",
                    "( value, 256.0 )"
                ];
            case 3007:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw Error("unsupported encoding: " + a);
        }
    }

    function Ud(a, b) {
        var c = Me(b);
        return "vec4 " + a + "( vec4 value ) { return " + c[0] + "ToLinear" + c[1] + "; }"
    }

    function Xf(a, b) {
        var c = Me(b);
        return "vec4 " + a + "( vec4 value ) { return LinearTo" + c[0] + c[1] + "; }"
    }

    function Yf(a, b) {
        var c;
        switch (b) {
            case 1:
                c = "Linear";
                break;
            case 2:
                c = "Reinhard";
                break;
            case 3:
                c = "Uncharted2";
                break;
            case 4:
                c = "OptimizedCineon";
                break;
            default:
                throw Error("unsupported toneMapping: " +
                    b);
        }
        return "vec3 " + a + "( vec3 color ) { return " + c + "ToneMapping( color ); }"
    }

    function Zf(a, b, c) {
        a = a || {};
        return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" :
            ""
        ].filter(yc).join("\n")
    }

    function $f(a) {
        var b = [],
            c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d)
        }
        return b.join("\n")
    }

    function yc(a) {
        return "" !== a
    }

    function Ne(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
    }

    function Vd(a) {
        return a.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function(a, c) {
            var d = U[c];
            if (void 0 === d) throw Error("Can not resolve #include <" + c + ">");
            return Vd(d)
        })
    }

    function Oe(a) {
        return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(a, c, d, e) {
            a = "";
            for (c = parseInt(c); c < parseInt(d); c++) a += e.replace(/\[ i \]/g, "[ " + c + " ]");
            return a
        })
    }

    function ag(a, b, c, d) {
        var e = a.context,
            f = c.extensions,
            g = c.defines,
            h = c.__webglShader.vertexShader,
            k = c.__webglShader.fragmentShader,
            m = "SHADOWMAP_TYPE_BASIC";
        1 === d.shadowMapType ? m = "SHADOWMAP_TYPE_PCF" : 2 === d.shadowMapType &&
            (m = "SHADOWMAP_TYPE_PCF_SOFT");
        var u = "ENVMAP_TYPE_CUBE",
            q = "ENVMAP_MODE_REFLECTION",
            n = "ENVMAP_BLENDING_MULTIPLY";
        if (d.envMap) {
            switch (c.envMap.mapping) {
                case 301:
                case 302:
                    u = "ENVMAP_TYPE_CUBE";
                    break;
                case 306:
                case 307:
                    u = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case 303:
                case 304:
                    u = "ENVMAP_TYPE_EQUIREC";
                    break;
                case 305:
                    u = "ENVMAP_TYPE_SPHERE"
            }
            switch (c.envMap.mapping) {
                case 302:
                case 304:
                    q = "ENVMAP_MODE_REFRACTION"
            }
            switch (c.combine) {
                case 0:
                    n = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    n = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    n = "ENVMAP_BLENDING_ADD"
            }
        }
        var r =
            0 < a.gammaFactor ? a.gammaFactor : 1,
            f = Zf(f, d, a.extensions),
            l = $f(g),
            t = e.createProgram();
        c.isRawShaderMaterial ? (g = [l, "\n"].filter(yc).join("\n"), m = [f, l, "\n"].filter(yc).join("\n")) : (g = ["precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + c.__webglShader.name, l, d.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + r, "#define MAX_BONES " + d.maxBones, d.useFog && d.fog ? "#define USE_FOG" : "", d.useFog && d.fogExp ? "#define FOG_EXP2" : "", d.map ? "#define USE_MAP" :
            "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + q : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" : "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.displacementMap && d.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ?
            "#define USE_COLOR" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.skinning ? "#define USE_SKINNING" : "", d.useVertexTexture ? "#define BONE_TEXTURE" : "", d.morphTargets ? "#define USE_MORPHTARGETS" : "", d.morphNormals && !1 === d.flatShading ? "#define USE_MORPHNORMALS" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + d.numClippingPlanes, d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + m : "", d.sizeAttenuation ? "#define USE_SIZEATTENUATION" :
            "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;",
            "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;",
            "#endif", "\n"
        ].filter(yc).join("\n"), m = [f, "precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + c.__webglShader.name, l, d.alphaTest ? "#define ALPHATEST " + d.alphaTest : "", "#define GAMMA_FACTOR " + r, d.useFog && d.fog ? "#define USE_FOG" : "", d.useFog && d.fogExp ? "#define FOG_EXP2" : "", d.map ? "#define USE_MAP" : "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + u : "", d.envMap ? "#define " + q : "", d.envMap ? "#define " + n : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" :
            "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ? "#define USE_COLOR" : "", d.gradientMap ? "#define USE_GRADIENTMAP" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " +
            d.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (d.numClippingPlanes - d.numClipIntersection), d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + m : "", d.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", d.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", d.envMap && a.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" :
            "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== d.toneMapping ? "#define TONE_MAPPING" : "", 0 !== d.toneMapping ? U.tonemapping_pars_fragment : "", 0 !== d.toneMapping ? Yf("toneMapping", d.toneMapping) : "", d.dithering ? "#define DITHERING" : "", d.outputEncoding || d.mapEncoding || d.envMapEncoding || d.emissiveMapEncoding ? U.encodings_pars_fragment : "", d.mapEncoding ? Ud("mapTexelToLinear", d.mapEncoding) : "", d.envMapEncoding ? Ud("envMapTexelToLinear", d.envMapEncoding) : "", d.emissiveMapEncoding ? Ud("emissiveMapTexelToLinear",
                d.emissiveMapEncoding) : "", d.outputEncoding ? Xf("linearToOutputTexel", d.outputEncoding) : "", d.depthPacking ? "#define DEPTH_PACKING " + c.depthPacking : "", "\n"
        ].filter(yc).join("\n"));
        h = Vd(h, d);
        h = Ne(h, d);
        k = Vd(k, d);
        k = Ne(k, d);
        c.isShaderMaterial || (h = Oe(h), k = Oe(k));
        k = m + k;
        h = Le(e, e.VERTEX_SHADER, g + h);
        k = Le(e, e.FRAGMENT_SHADER, k);
        e.attachShader(t, h);
        e.attachShader(t, k);
        void 0 !== c.index0AttributeName ? e.bindAttribLocation(t, 0, c.index0AttributeName) : !0 === d.morphTargets && e.bindAttribLocation(t, 0, "position");
        e.linkProgram(t);
        d = e.getProgramInfoLog(t);
        u = e.getShaderInfoLog(h);
        q = e.getShaderInfoLog(k);
        r = n = !0;
        if (!1 === e.getProgramParameter(t, e.LINK_STATUS)) n = !1, console.error("THREE.WebGLProgram: shader error: ", e.getError(), "gl.VALIDATE_STATUS", e.getProgramParameter(t, e.VALIDATE_STATUS), "gl.getProgramInfoLog", d, u, q);
        else if ("" !== d) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", d);
        else if ("" === u || "" === q) r = !1;
        r && (this.diagnostics = {
            runnable: n,
            material: c,
            programLog: d,
            vertexShader: {
                log: u,
                prefix: g
            },
            fragmentShader: {
                log: q,
                prefix: m
            }
        });
        e.deleteShader(h);
        e.deleteShader(k);
        var p;
        this.getUniforms = function() {
            void 0 === p && (p = new fb(e, t, a));
            return p
        };
        var x;
        this.getAttributes = function() {
            if (void 0 === x) {
                for (var a = {}, b = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), c = 0; c < b; c++) {
                    var d = e.getActiveAttrib(t, c).name;
                    a[d] = e.getAttribLocation(t, d)
                }
                x = a
            }
            return x
        };
        this.destroy = function() {
            e.deleteProgram(t);
            this.program = void 0
        };
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
                    return this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
                    return this.getAttributes()
                }
            }
        });
        this.id = bg++;
        this.code = b;
        this.usedTimes = 1;
        this.program = t;
        this.vertexShader = h;
        this.fragmentShader = k;
        return this
    }

    function cg(a, b) {
        function c(a, b) {
            var c;
            a ? a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c =
                a.texture.encoding) : c = 3E3;
            3E3 === c && b && (c = 3007);
            return c
        }
        var d = [],
            e = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            },
            f = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
        this.getParameters = function(d, f, k, m, u, q) {
            var n = e[d.type],
                r;
            if (q.isSkinnedMesh)
                if (r = q.skeleton.bones, b.floatVertexTextures) r = 1024;
                else {
                    var l = Math.min(Math.floor((b.maxVertexUniforms - 20) / 4), r.length);
                    l < r.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + r.length + " bones. This GPU supports " + l + "."), r = 0) : r = l
                }
            else r = 0;
            l = a.getPrecision();
            null !== d.precision && (l = b.getMaxPrecision(d.precision), l !== d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", l, "instead."));
            var t = a.getRenderTarget();
            return {
                shaderID: n,
                precision: l,
                supportsVertexTextures: b.vertexTextures,
                outputEncoding: c(t ? t.texture : null, a.gammaOutput),
                map: !!d.map,
                mapEncoding: c(d.map, a.gammaInput),
                envMap: !!d.envMap,
                envMapMode: d.envMap && d.envMap.mapping,
                envMapEncoding: c(d.envMap, a.gammaInput),
                envMapCubeUV: !!d.envMap && (306 === d.envMap.mapping || 307 === d.envMap.mapping),
                lightMap: !!d.lightMap,
                aoMap: !!d.aoMap,
                emissiveMap: !!d.emissiveMap,
                emissiveMapEncoding: c(d.emissiveMap, a.gammaInput),
                bumpMap: !!d.bumpMap,
                normalMap: !!d.normalMap,
                displacementMap: !!d.displacementMap,
                roughnessMap: !!d.roughnessMap,
                metalnessMap: !!d.metalnessMap,
                specularMap: !!d.specularMap,
                alphaMap: !!d.alphaMap,
                gradientMap: !!d.gradientMap,
                combine: d.combine,
                vertexColors: d.vertexColors,
                fog: !!k,
                useFog: d.fog,
                fogExp: k && k.isFogExp2,
                flatShading: 1 === d.shading,
                sizeAttenuation: d.sizeAttenuation,
                logarithmicDepthBuffer: b.logarithmicDepthBuffer,
                skinning: d.skinning && 0 < r,
                maxBones: r,
                useVertexTexture: b.floatVertexTextures,
                morphTargets: d.morphTargets,
                morphNormals: d.morphNormals,
                maxMorphTargets: a.maxMorphTargets,
                maxMorphNormals: a.maxMorphNormals,
                numDirLights: f.directional.length,
                numPointLights: f.point.length,
                numSpotLights: f.spot.length,
                numRectAreaLights: f.rectArea.length,
                numHemiLights: f.hemi.length,
                numClippingPlanes: m,
                numClipIntersection: u,
                dithering: d.dithering,
                shadowMapEnabled: a.shadowMap.enabled && q.receiveShadow && 0 < f.shadows.length,
                shadowMapType: a.shadowMap.type,
                toneMapping: a.toneMapping,
                physicallyCorrectLights: a.physicallyCorrectLights,
                premultipliedAlpha: d.premultipliedAlpha,
                alphaTest: d.alphaTest,
                doubleSided: 2 === d.side,
                flipSided: 1 === d.side,
                depthPacking: void 0 !== d.depthPacking ? d.depthPacking : !1
            }
        };
        this.getProgramCode = function(a, b) {
            var c = [];
            b.shaderID ? c.push(b.shaderID) : (c.push(a.fragmentShader), c.push(a.vertexShader));
            if (void 0 !== a.defines)
                for (var d in a.defines) c.push(d), c.push(a.defines[d]);
            for (d = 0; d < f.length; d++) c.push(b[f[d]]);
            return c.join()
        };
        this.acquireProgram = function(b, c, e) {
            for (var f, u = 0, q = d.length; u < q; u++) {
                var n = d[u];
                if (n.code === e) {
                    f = n;
                    ++f.usedTimes;
                    break
                }
            }
            void 0 ===
                f && (f = new ag(a, e, b, c), d.push(f));
            return f
        };
        this.releaseProgram = function(a) {
            if (0 === --a.usedTimes) {
                var b = d.indexOf(a);
                d[b] = d[d.length - 1];
                d.pop();
                a.destroy()
            }
        };
        this.programs = d
    }

    function dg(a, b, c, d, e, f, g) {
        function h(a, b) {
            if (a.width > b || a.height > b) {
                var c = b / Math.max(a.width, a.height),
                    d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                d.width = Math.floor(a.width * c);
                d.height = Math.floor(a.height * c);
                d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
                console.warn("THREE.WebGLRenderer: image is too big (" +
                    a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a);
                return d
            }
            return a
        }

        function k(a) {
            return Y.isPowerOfTwo(a.width) && Y.isPowerOfTwo(a.height)
        }

        function m(b) {
            return 1003 === b || 1004 === b || 1005 === b ? a.NEAREST : a.LINEAR
        }

        function u(b) {
            b = b.target;
            b.removeEventListener("dispose", u);
            a: {
                var c = d.get(b);
                if (b.image && c.__image__webglTextureCube) a.deleteTexture(c.__image__webglTextureCube);
                else {
                    if (void 0 === c.__webglInit) break a;
                    a.deleteTexture(c.__webglTexture)
                }
                d.remove(b)
            }
            g.textures--
        }

        function q(b) {
            b = b.target;
            b.removeEventListener("dispose", q);
            var c = d.get(b),
                e = d.get(b.texture);
            if (b) {
                void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
                b.depthTexture && b.depthTexture.dispose();
                if (b.isWebGLRenderTargetCube)
                    for (e = 0; 6 > e; e++) a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]);
                else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);
                d.remove(b.texture);
                d.remove(b)
            }
            g.textures--
        }

        function n(b,
            m) {
            var n = d.get(b);
            if (0 < b.version && n.__version !== b.version) {
                var q = b.image;
                if (void 0 === q) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", b);
                else if (!1 === q.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", b);
                else {
                    void 0 === n.__webglInit && (n.__webglInit = !0, b.addEventListener("dispose", u), n.__webglTexture = a.createTexture(), g.textures++);
                    c.activeTexture(a.TEXTURE0 + m);
                    c.bindTexture(a.TEXTURE_2D, n.__webglTexture);
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
                        b.flipY);
                    a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha);
                    a.pixelStorei(a.UNPACK_ALIGNMENT, b.unpackAlignment);
                    var l = h(b.image, e.maxTextureSize);
                    if ((1001 !== b.wrapS || 1001 !== b.wrapT || 1003 !== b.minFilter && 1006 !== b.minFilter) && !1 === k(l))
                        if (q = l, q instanceof HTMLImageElement || q instanceof HTMLCanvasElement) {
                            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                            t.width = Y.nearestPowerOfTwo(q.width);
                            t.height = Y.nearestPowerOfTwo(q.height);
                            t.getContext("2d").drawImage(q, 0, 0,
                                t.width, t.height);
                            console.warn("THREE.WebGLRenderer: image is not power of two (" + q.width + "x" + q.height + "). Resized to " + t.width + "x" + t.height, q);
                            l = t
                        } else l = q;
                    var q = k(l),
                        t = f(b.format),
                        z = f(b.type);
                    r(a.TEXTURE_2D, b, q);
                    var F = b.mipmaps;
                    if (b.isDepthTexture) {
                        F = a.DEPTH_COMPONENT;
                        if (1015 === b.type) {
                            if (!p) throw Error("Float Depth Texture only supported in WebGL2.0");
                            F = a.DEPTH_COMPONENT32F
                        } else p && (F = a.DEPTH_COMPONENT16);
                        1026 === b.format && F === a.DEPTH_COMPONENT && 1012 !== b.type && 1014 !== b.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                            b.type = 1012, z = f(b.type));
                        1027 === b.format && (F = a.DEPTH_STENCIL, 1020 !== b.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), b.type = 1020, z = f(b.type)));
                        c.texImage2D(a.TEXTURE_2D, 0, F, l.width, l.height, 0, t, z, null)
                    } else if (b.isDataTexture)
                        if (0 < F.length && q) {
                            for (var aa = 0, R = F.length; aa < R; aa++) l = F[aa], c.texImage2D(a.TEXTURE_2D, aa, t, l.width, l.height, 0, t, z, l.data);
                            b.generateMipmaps = !1
                        } else c.texImage2D(a.TEXTURE_2D, 0, t, l.width, l.height, 0, t, z, l.data);
                    else if (b.isCompressedTexture)
                        for (aa =
                            0, R = F.length; aa < R; aa++) l = F[aa], 1023 !== b.format && 1022 !== b.format ? -1 < c.getCompressedTextureFormats().indexOf(t) ? c.compressedTexImage2D(a.TEXTURE_2D, aa, t, l.width, l.height, 0, l.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c.texImage2D(a.TEXTURE_2D, aa, t, l.width, l.height, 0, t, z, l.data);
                    else if (0 < F.length && q) {
                        aa = 0;
                        for (R = F.length; aa < R; aa++) l = F[aa], c.texImage2D(a.TEXTURE_2D, aa, t, t, z, l);
                        b.generateMipmaps = !1
                    } else c.texImage2D(a.TEXTURE_2D,
                        0, t, t, z, l);
                    b.generateMipmaps && q && a.generateMipmap(a.TEXTURE_2D);
                    n.__version = b.version;
                    if (b.onUpdate) b.onUpdate(b);
                    return
                }
            }
            c.activeTexture(a.TEXTURE0 + m);
            c.bindTexture(a.TEXTURE_2D, n.__webglTexture)
        }

        function r(c, g, h) {
            h ? (a.texParameteri(c, a.TEXTURE_WRAP_S, f(g.wrapS)), a.texParameteri(c, a.TEXTURE_WRAP_T, f(g.wrapT)), a.texParameteri(c, a.TEXTURE_MAG_FILTER, f(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, f(g.minFilter))) : (a.texParameteri(c, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(c, a.TEXTURE_WRAP_T,
                a.CLAMP_TO_EDGE), 1001 === g.wrapS && 1001 === g.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", g), a.texParameteri(c, a.TEXTURE_MAG_FILTER, m(g.magFilter)), a.texParameteri(c, a.TEXTURE_MIN_FILTER, m(g.minFilter)), 1003 !== g.minFilter && 1006 !== g.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", g));
            !(h = b.get("EXT_texture_filter_anisotropic")) ||
            1015 === g.type && null === b.get("OES_texture_float_linear") || 1016 === g.type && null === b.get("OES_texture_half_float_linear") || !(1 < g.anisotropy || d.get(g).__currentAnisotropy) || (a.texParameterf(c, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, e.getMaxAnisotropy())), d.get(g).__currentAnisotropy = g.anisotropy)
        }

        function l(b, e, g, h) {
            var k = f(e.texture.format),
                m = f(e.texture.type);
            c.texImage2D(h, 0, k, e.width, e.height, 0, k, m, null);
            a.bindFramebuffer(a.FRAMEBUFFER, b);
            a.framebufferTexture2D(a.FRAMEBUFFER, g, h, d.get(e.texture).__webglTexture,
                0);
            a.bindFramebuffer(a.FRAMEBUFFER, null)
        }

        function t(b, c) {
            a.bindRenderbuffer(a.RENDERBUFFER, b);
            c.depthBuffer && !c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b)) : c.depthBuffer && c.stencilBuffer ? (a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, c.width, c.height), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, b)) : a.renderbufferStorage(a.RENDERBUFFER,
                a.RGBA4, c.width, c.height);
            a.bindRenderbuffer(a.RENDERBUFFER, null)
        }
        var p = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext;
        this.setTexture2D = n;
        this.setTextureCube = function(b, m) {
            var n = d.get(b);
            if (6 === b.image.length)
                if (0 < b.version && n.__version !== b.version) {
                    n.__image__webglTextureCube || (b.addEventListener("dispose", u), n.__image__webglTextureCube = a.createTexture(), g.textures++);
                    c.activeTexture(a.TEXTURE0 + m);
                    c.bindTexture(a.TEXTURE_CUBE_MAP, n.__image__webglTextureCube);
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
                        b.flipY);
                    for (var q = b && b.isCompressedTexture, l = b.image[0] && b.image[0].isDataTexture, t = [], z = 0; 6 > z; z++) t[z] = q || l ? l ? b.image[z].image : b.image[z] : h(b.image[z], e.maxCubemapSize);
                    var p = k(t[0]),
                        y = f(b.format),
                        R = f(b.type);
                    r(a.TEXTURE_CUBE_MAP, b, p);
                    for (z = 0; 6 > z; z++)
                        if (q)
                            for (var ca, la = t[z].mipmaps, D = 0, B = la.length; D < B; D++) ca = la[D], 1023 !== b.format && 1022 !== b.format ? -1 < c.getCompressedTextureFormats().indexOf(y) ? c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + z, D, y, ca.width, ca.height, 0, ca.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") :
                                c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + z, D, y, ca.width, ca.height, 0, y, R, ca.data);
                        else l ? c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, y, t[z].width, t[z].height, 0, y, R, t[z].data) : c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, y, y, R, t[z]);
                    b.generateMipmaps && p && a.generateMipmap(a.TEXTURE_CUBE_MAP);
                    n.__version = b.version;
                    if (b.onUpdate) b.onUpdate(b)
                } else c.activeTexture(a.TEXTURE0 + m), c.bindTexture(a.TEXTURE_CUBE_MAP, n.__image__webglTextureCube)
        };
        this.setTextureCubeDynamic = function(b, e) {
            c.activeTexture(a.TEXTURE0 +
                e);
            c.bindTexture(a.TEXTURE_CUBE_MAP, d.get(b).__webglTexture)
        };
        this.setupRenderTarget = function(b) {
            var e = d.get(b),
                f = d.get(b.texture);
            b.addEventListener("dispose", q);
            f.__webglTexture = a.createTexture();
            g.textures++;
            var h = !0 === b.isWebGLRenderTargetCube,
                m = k(b);
            if (h) {
                e.__webglFramebuffer = [];
                for (var u = 0; 6 > u; u++) e.__webglFramebuffer[u] = a.createFramebuffer()
            } else e.__webglFramebuffer = a.createFramebuffer();
            if (h) {
                c.bindTexture(a.TEXTURE_CUBE_MAP, f.__webglTexture);
                r(a.TEXTURE_CUBE_MAP, b.texture, m);
                for (u = 0; 6 > u; u++) l(e.__webglFramebuffer[u],
                    b, a.COLOR_ATTACHMENT0, a.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                b.texture.generateMipmaps && m && a.generateMipmap(a.TEXTURE_CUBE_MAP);
                c.bindTexture(a.TEXTURE_CUBE_MAP, null)
            } else c.bindTexture(a.TEXTURE_2D, f.__webglTexture), r(a.TEXTURE_2D, b.texture, m), l(e.__webglFramebuffer, b, a.COLOR_ATTACHMENT0, a.TEXTURE_2D), b.texture.generateMipmaps && m && a.generateMipmap(a.TEXTURE_2D), c.bindTexture(a.TEXTURE_2D, null);
            if (b.depthBuffer) {
                e = d.get(b);
                f = !0 === b.isWebGLRenderTargetCube;
                if (b.depthTexture) {
                    if (f) throw Error("target.depthTexture not supported in Cube render targets");
                    if (b && b.isWebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported!");
                    a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer);
                    if (!b.depthTexture || !b.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    d.get(b.depthTexture).__webglTexture && b.depthTexture.image.width === b.width && b.depthTexture.image.height === b.height || (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0);
                    n(b.depthTexture, 0);
                    e = d.get(b.depthTexture).__webglTexture;
                    if (1026 === b.depthTexture.format) a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, e, 0);
                    else if (1027 === b.depthTexture.format) a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, e, 0);
                    else throw Error("Unknown depthTexture format");
                } else if (f)
                    for (e.__webglDepthbuffer = [], f = 0; 6 > f; f++) a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer[f]), e.__webglDepthbuffer[f] = a.createRenderbuffer(), t(e.__webglDepthbuffer[f],
                        b);
                else a.bindFramebuffer(a.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = a.createRenderbuffer(), t(e.__webglDepthbuffer, b);
                a.bindFramebuffer(a.FRAMEBUFFER, null)
            }
        };
        this.updateRenderTargetMipmap = function(b) {
            var e = b.texture;
            e.generateMipmaps && k(b) && 1003 !== e.minFilter && 1006 !== e.minFilter && (b = b && b.isWebGLRenderTargetCube ? a.TEXTURE_CUBE_MAP : a.TEXTURE_2D, e = d.get(e).__webglTexture, c.bindTexture(b, e), a.generateMipmap(b), c.bindTexture(b, null))
        }
    }

    function eg() {
        var a = {};
        return {
            get: function(b) {
                b = b.uuid;
                var c = a[b];
                void 0 === c && (c = {}, a[b] = c);
                return c
            },
            remove: function(b) {
                delete a[b.uuid]
            },
            clear: function() {
                a = {}
            }
        }
    }

    function fg(a, b, c) {
        function d(b, c, d) {
            var e = new Uint8Array(4),
                f = a.createTexture();
            a.bindTexture(b, f);
            a.texParameteri(b, a.TEXTURE_MIN_FILTER, a.NEAREST);
            a.texParameteri(b, a.TEXTURE_MAG_FILTER, a.NEAREST);
            for (b = 0; b < d; b++) a.texImage2D(c + b, 0, a.RGBA, 1, 1, 0, a.RGBA, a.UNSIGNED_BYTE, e);
            return f
        }

        function e(b) {
            !0 !== v[b] && (a.enable(b), v[b] = !0)
        }

        function f(b) {
            !1 !== v[b] && (a.disable(b), v[b] = !1)
        }

        function g(b, d,
            g, h, k, m, n, u) {
            0 !== b ? e(a.BLEND) : f(a.BLEND);
            if (b !== w || u !== ca) 2 === b ? u ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.SRC_ALPHA, a.ONE)) : 3 === b ? u ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : 4 === b ? u ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ZERO,
                a.SRC_COLOR, a.ZERO, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.SRC_COLOR)) : u ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)), w = b, ca = u;
            if (5 === b) {
                k = k || d;
                m = m || g;
                n = n || h;
                if (d !== O || k !== F) a.blendEquationSeparate(c(d), c(k)), O = d, F = k;
                if (g !== S || h !== E || m !== aa || n !== R) a.blendFuncSeparate(c(g),
                    c(h), c(m), c(n)), S = g, E = h, aa = m, R = n
            } else R = aa = F = E = S = O = null
        }

        function h(b) {
            la !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW), la = b)
        }

        function k(b) {
            0 !== b ? (e(a.CULL_FACE), b !== D && (1 === b ? a.cullFace(a.BACK) : 2 === b ? a.cullFace(a.FRONT) : a.cullFace(a.FRONT_AND_BACK))) : f(a.CULL_FACE);
            D = b
        }

        function m(b, c, d) {
            if (b) {
                if (e(a.POLYGON_OFFSET_FILL), C !== c || P !== d) a.polygonOffset(c, d), C = c, P = d
            } else f(a.POLYGON_OFFSET_FILL)
        }

        function u(b) {
            void 0 === b && (b = a.TEXTURE0 + W - 1);
            T !== b && (a.activeTexture(b), T = b)
        }
        var q = new function() {
                var b = !1,
                    c =
                    new ga,
                    d = null,
                    e = new ga;
                return {
                    setMask: function(c) {
                        d === c || b || (a.colorMask(c, c, c, c), d = c)
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b, d, f, g, h) {
                        !0 === h && (b *= g, d *= g, f *= g);
                        c.set(b, d, f, g);
                        !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c))
                    },
                    reset: function() {
                        b = !1;
                        d = null;
                        e.set(0, 0, 0, 1)
                    }
                }
            },
            n = new function() {
                var b = !1,
                    c = null,
                    d = null,
                    g = null;
                return {
                    setTest: function(b) {
                        b ? e(a.DEPTH_TEST) : f(a.DEPTH_TEST)
                    },
                    setMask: function(d) {
                        c === d || b || (a.depthMask(d), c = d)
                    },
                    setFunc: function(b) {
                        if (d !== b) {
                            if (b) switch (b) {
                                case 0:
                                    a.depthFunc(a.NEVER);
                                    break;
                                case 1:
                                    a.depthFunc(a.ALWAYS);
                                    break;
                                case 2:
                                    a.depthFunc(a.LESS);
                                    break;
                                case 3:
                                    a.depthFunc(a.LEQUAL);
                                    break;
                                case 4:
                                    a.depthFunc(a.EQUAL);
                                    break;
                                case 5:
                                    a.depthFunc(a.GEQUAL);
                                    break;
                                case 6:
                                    a.depthFunc(a.GREATER);
                                    break;
                                case 7:
                                    a.depthFunc(a.NOTEQUAL);
                                    break;
                                default:
                                    a.depthFunc(a.LEQUAL)
                            } else a.depthFunc(a.LEQUAL);
                            d = b
                        }
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b) {
                        g !== b && (a.clearDepth(b), g = b)
                    },
                    reset: function() {
                        b = !1;
                        g = d = c = null
                    }
                }
            },
            r = new function() {
                var b = !1,
                    c = null,
                    d = null,
                    g = null,
                    h = null,
                    k = null,
                    m = null,
                    n = null,
                    u = null;
                return {
                    setTest: function(b) {
                        b ? e(a.STENCIL_TEST) : f(a.STENCIL_TEST)
                    },
                    setMask: function(d) {
                        c === d || b || (a.stencilMask(d), c = d)
                    },
                    setFunc: function(b, c, e) {
                        if (d !== b || g !== c || h !== e) a.stencilFunc(b, c, e), d = b, g = c, h = e
                    },
                    setOp: function(b, c, d) {
                        if (k !== b || m !== c || n !== d) a.stencilOp(b, c, d), k = b, m = c, n = d
                    },
                    setLocked: function(a) {
                        b = a
                    },
                    setClear: function(b) {
                        u !== b && (a.clearStencil(b), u = b)
                    },
                    reset: function() {
                        b = !1;
                        u = n = m = k = h = g = d = c = null
                    }
                }
            },
            l = a.getParameter(a.MAX_VERTEX_ATTRIBS),
            t = new Uint8Array(l),
            p = new Uint8Array(l),
            x = new Uint8Array(l),
            v = {},
            G = null,
            w = null,
            O = null,
            S = null,
            E = null,
            F = null,
            aa = null,
            R = null,
            ca = !1,
            la = null,
            D = null,
            B = null,
            C = null,
            P = null,
            K = null,
            W = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
            l = parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),
            ba = 1 <= parseFloat(l),
            T = null,
            Q = {},
            I = new ga,
            H = new ga,
            J = {};
        J[a.TEXTURE_2D] = d(a.TEXTURE_2D, a.TEXTURE_2D, 1);
        J[a.TEXTURE_CUBE_MAP] = d(a.TEXTURE_CUBE_MAP, a.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
        return {
            buffers: {
                color: q,
                depth: n,
                stencil: r
            },
            init: function() {
                q.setClear(0, 0, 0, 1);
                n.setClear(1);
                r.setClear(0);
                e(a.DEPTH_TEST);
                n.setFunc(3);
                h(!1);
                k(1);
                e(a.CULL_FACE);
                e(a.BLEND);
                g(1)
            },
            initAttributes: function() {
                for (var a = 0, b = t.length; a < b; a++) t[a] = 0
            },
            enableAttribute: function(c) {
                t[c] = 1;
                0 === p[c] && (a.enableVertexAttribArray(c), p[c] = 1);
                0 !== x[c] && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0), x[c] = 0)
            },
            enableAttributeAndDivisor: function(c, d) {
                t[c] = 1;
                0 === p[c] && (a.enableVertexAttribArray(c), p[c] = 1);
                x[c] !== d && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, d), x[c] = d)
            },
            disableUnusedAttributes: function() {
                for (var b =
                        0, c = p.length; b !== c; ++b) p[b] !== t[b] && (a.disableVertexAttribArray(b), p[b] = 0)
            },
            enable: e,
            disable: f,
            getCompressedTextureFormats: function() {
                if (null === G && (G = [], b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1")))
                    for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++) G.push(c[d]);
                return G
            },
            setBlending: g,
            setMaterial: function(b) {
                2 === b.side ? f(a.CULL_FACE) : e(a.CULL_FACE);
                h(1 === b.side);
                !0 === b.transparent ? g(b.blending, b.blendEquation,
                    b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.premultipliedAlpha) : g(0);
                n.setFunc(b.depthFunc);
                n.setTest(b.depthTest);
                n.setMask(b.depthWrite);
                q.setMask(b.colorWrite);
                m(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits)
            },
            setFlipSided: h,
            setCullFace: k,
            setLineWidth: function(b) {
                b !== B && (ba && a.lineWidth(b), B = b)
            },
            setPolygonOffset: m,
            getScissorTest: function() {
                return K
            },
            setScissorTest: function(b) {
                (K = b) ? e(a.SCISSOR_TEST): f(a.SCISSOR_TEST)
            },
            activeTexture: u,
            bindTexture: function(b,
                c) {
                null === T && u();
                var d = Q[T];
                void 0 === d && (d = {
                    type: void 0,
                    texture: void 0
                }, Q[T] = d);
                if (d.type !== b || d.texture !== c) a.bindTexture(b, c || J[b]), d.type = b, d.texture = c
            },
            compressedTexImage2D: function() {
                try {
                    a.compressedTexImage2D.apply(a, arguments)
                } catch (b) {
                    console.error(b)
                }
            },
            texImage2D: function() {
                try {
                    a.texImage2D.apply(a, arguments)
                } catch (b) {
                    console.error(b)
                }
            },
            scissor: function(b) {
                !1 === I.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), I.copy(b))
            },
            viewport: function(b) {
                !1 === H.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), H.copy(b))
            },
            reset: function() {
                for (var b = 0; b < p.length; b++) 1 === p[b] && (a.disableVertexAttribArray(b), p[b] = 0);
                v = {};
                T = G = null;
                Q = {};
                D = la = w = null;
                q.reset();
                n.reset();
                r.reset()
            }
        }
    }

    function gg(a, b, c) {
        function d(b) {
            if ("highp" === b) {
                if (0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision) return "highp";
                b = "mediump"
            }
            return "mediump" === b && 0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                a.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
        }
        var e, f = void 0 !== c.precision ? c.precision : "highp",
            g = d(f);
        g !== f && (console.warn("THREE.WebGLRenderer:", f, "not supported, using", g, "instead."), f = g);
        c = !0 === c.logarithmicDepthBuffer && !!b.get("EXT_frag_depth");
        var g = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
            h = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            k = a.getParameter(a.MAX_TEXTURE_SIZE),
            m = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
            u = a.getParameter(a.MAX_VERTEX_ATTRIBS),
            q = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),
            n = a.getParameter(a.MAX_VARYING_VECTORS),
            r = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),
            l = 0 < h,
            t = !!b.get("OES_texture_float");
        return {
            getMaxAnisotropy: function() {
                if (void 0 !== e) return e;
                var c = b.get("EXT_texture_filter_anisotropic");
                return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: d,
            precision: f,
            logarithmicDepthBuffer: c,
            maxTextures: g,
            maxVertexTextures: h,
            maxTextureSize: k,
            maxCubemapSize: m,
            maxAttributes: u,
            maxVertexUniforms: q,
            maxVaryings: n,
            maxFragmentUniforms: r,
            vertexTextures: l,
            floatFragmentTextures: t,
            floatVertexTextures: l && t
        }
    }

    function hg(a) {
        var b = {};
        return {
            get: function(c) {
                if (void 0 !== b[c]) return b[c];
                var d;
                switch (c) {
                    case "WEBGL_depth_texture":
                        d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        d = a.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        d = a.getExtension(c)
                }
                null === d && console.warn("THREE.WebGLRenderer: " +
                    c + " extension not supported.");
                return b[c] = d
            }
        }
    }

    function ig() {
        function a() {
            m.value !== d && (m.value = d, m.needsUpdate = 0 < e);
            c.numPlanes = e;
            c.numIntersection = 0
        }

        function b(a, b, d, e) {
            var f = null !== a ? a.length : 0,
                g = null;
            if (0 !== f) {
                g = m.value;
                if (!0 !== e || null === g) {
                    e = d + 4 * f;
                    b = b.matrixWorldInverse;
                    k.getNormalMatrix(b);
                    if (null === g || g.length < e) g = new Float32Array(e);
                    for (e = 0; e !== f; ++e, d += 4) h.copy(a[e]).applyMatrix4(b, k), h.normal.toArray(g, d), g[d + 3] = h.constant
                }
                m.value = g;
                m.needsUpdate = !0
            }
            c.numPlanes = f;
            return g
        }
        var c = this,
            d = null,
            e = 0,
            f = !1,
            g = !1,
            h = new wa,
            k = new Ga,
            m = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = m;
        this.numIntersection = this.numPlanes = 0;
        this.init = function(a, c, g) {
            var h = 0 !== a.length || c || 0 !== e || f;
            f = c;
            d = b(a, g, 0);
            e = a.length;
            return h
        };
        this.beginShadows = function() {
            g = !0;
            b(null)
        };
        this.endShadows = function() {
            g = !1;
            a()
        };
        this.setState = function(c, h, k, r, l, t) {
            if (!f || null === c || 0 === c.length || g && !k) g ? b(null) : a();
            else {
                k = g ? 0 : e;
                var p = 4 * k,
                    x = l.clippingState || null;
                m.value = x;
                x = b(c, r, p, t);
                for (c = 0; c !== p; ++c) x[c] = d[c];
                l.clippingState = x;
                this.numIntersection =
                    h ? this.numPlanes : 0;
                this.numPlanes += k
            }
        }
    }

    function Xd(a) {
        function b() {
            fa.init();
            fa.scissor(Q.copy(ia).multiplyScalar(ka));
            fa.viewport(Z.copy(zc).multiplyScalar(ka));
            fa.buffers.color.setClear(Ja.r, Ja.g, Ja.b, X, E)
        }

        function c() {
            T = M = null;
            ba = "";
            W = -1;
            fa.reset()
        }

        function d(a) {
            a.preventDefault();
            c();
            b();
            ha.clear();
            wa.clear()
        }

        function e(a) {
            a = a.target;
            a.removeEventListener("dispose", e);
            f(a);
            ha.remove(a)
        }

        function f(a) {
            var b = ha.get(a).program;
            a.program = void 0;
            void 0 !== b && Ba.releaseProgram(b)
        }

        function g(a, b, c) {
            a.render(function(a) {
                C.renderBufferImmediate(a,
                    b, c)
            })
        }

        function h(a, b) {
            return Math.abs(b[0]) - Math.abs(a[0])
        }

        function k(a, b, c) {
            if (a.visible) {
                if (a.layers.test(b.layers))
                    if (a.isLight) aa.push(a);
                    else if (a.isSprite) a.frustumCulled && !pa.intersectsSprite(a) || D.push(a);
                else if (a.isLensFlare) B.push(a);
                else if (a.isImmediateRenderObject) c && Qa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ld), R.push(a, null, a.material, Qa.z, null);
                else if (a.isMesh || a.isLine || a.isPoints)
                    if (a.isSkinnedMesh && a.skeleton.update(), !a.frustumCulled || pa.intersectsObject(a)) {
                        c && Qa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ld);
                        var d = wa.update(a),
                            e = a.material;
                        if (Array.isArray(e))
                            for (var f = d.groups, g = 0, h = f.length; g < h; g++) {
                                var m = f[g],
                                    n = e[m.materialIndex];
                                n && n.visible && R.push(a, d, n, Qa.z, m)
                            } else e.visible && R.push(a, d, e, Qa.z, null)
                    }
                a = a.children;
                g = 0;
                for (h = a.length; g < h; g++) k(a[g], b, c)
            }
        }

        function m(a, b, c, d) {
            for (var e = 0, f = a.length; e < f; e++) {
                var g = a[e],
                    h = g.object,
                    k = g.geometry,
                    m = void 0 === d ? g.material : d,
                    g = g.group;
                h.onBeforeRender(C, b, c, k, m, g);
                if (c.isArrayCamera && c.enabled)
                    for (var n = c.cameras, q = 0, r = n.length; q < r; q++) {
                        var l = n[q],
                            t = l.bounds;
                        C.setViewport(t.x * N * ka, t.y * da * ka, t.z * N * ka, t.w * da * ka);
                        C.setScissor(t.x * N * ka, t.y * da * ka, t.z * N * ka, t.w * da * ka);
                        C.setScissorTest(!0);
                        u(h, b, l, k, m, g)
                    } else u(h, b, c, k, m, g);
                h.onAfterRender(C, b, c, k, m, g)
            }
        }

        function u(a, b, c, d, e, f) {
            a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld);
            a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
            a.isImmediateRenderObject ? (fa.setMaterial(e), b = n(c, b.fog, e, a), ba = "", g(a, b, e)) : C.renderBufferDirect(c, b.fog, d, e, a, f)
        }

        function q(a, b, c) {
            var d = ha.get(a);
            c = Ba.getParameters(a,
                ea, b, Pa.numPlanes, Pa.numIntersection, c);
            var g = Ba.getProgramCode(a, c),
                h = d.program,
                k = !0;
            if (void 0 === h) a.addEventListener("dispose", e);
            else if (h.code !== g) f(a);
            else {
                if (void 0 !== c.shaderID) return;
                k = !1
            }
            k && (c.shaderID ? (h = ab[c.shaderID], d.__webglShader = {
                name: a.type,
                uniforms: Ha.clone(h.uniforms),
                vertexShader: h.vertexShader,
                fragmentShader: h.fragmentShader
            }) : d.__webglShader = {
                name: a.type,
                uniforms: a.uniforms,
                vertexShader: a.vertexShader,
                fragmentShader: a.fragmentShader
            }, a.__webglShader = d.__webglShader, h = Ba.acquireProgram(a,
                c, g), d.program = h, a.program = h);
            c = h.getAttributes();
            if (a.morphTargets)
                for (g = a.numSupportedMorphTargets = 0; g < C.maxMorphTargets; g++) 0 <= c["morphTarget" + g] && a.numSupportedMorphTargets++;
            if (a.morphNormals)
                for (g = a.numSupportedMorphNormals = 0; g < C.maxMorphNormals; g++) 0 <= c["morphNormal" + g] && a.numSupportedMorphNormals++;
            c = d.__webglShader.uniforms;
            if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping) d.numClippingPlanes = Pa.numPlanes, d.numIntersection = Pa.numIntersection, c.clippingPlanes = Pa.uniform;
            d.fog =
                b;
            d.lightsHash = ea.hash;
            a.lights && (c.ambientLightColor.value = ea.ambient, c.directionalLights.value = ea.directional, c.spotLights.value = ea.spot, c.rectAreaLights.value = ea.rectArea, c.pointLights.value = ea.point, c.hemisphereLights.value = ea.hemi, c.directionalShadowMap.value = ea.directionalShadowMap, c.directionalShadowMatrix.value = ea.directionalShadowMatrix, c.spotShadowMap.value = ea.spotShadowMap, c.spotShadowMatrix.value = ea.spotShadowMatrix, c.pointShadowMap.value = ea.pointShadowMap, c.pointShadowMatrix.value = ea.pointShadowMatrix);
            a = d.program.getUniforms();
            a = fb.seqWithValue(a.seq, c);
            d.uniformsList = a
        }

        function n(a, b, c, d) {
            U = 0;
            var e = ha.get(c);
            kd && (Wd || a !== T) && Pa.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, a === T && c.id === W);
            !1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : c.lights && e.lightsHash !== ea.hash ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === Pa.numPlanes && e.numIntersection === Pa.numIntersection || (c.needsUpdate = !0));
            c.needsUpdate && (q(c, b, d),
                c.needsUpdate = !1);
            var f = !1,
                g = !1,
                h = !1,
                k = e.program,
                m = k.getUniforms(),
                n = e.__webglShader.uniforms;
            k.id !== M && (A.useProgram(k.program), M = k.id, h = g = f = !0);
            c.id !== W && (W = c.id, g = !0);
            if (f || a !== T) {
                m.setValue(A, "projectionMatrix", a.projectionMatrix);
                ma.logarithmicDepthBuffer && m.setValue(A, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
                a !== T && (T = a, h = g = !0);
                if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap) f = m.map.cameraPosition, void 0 !== f && f.setValue(A, Qa.setFromMatrixPosition(a.matrixWorld));
                (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) && m.setValue(A, "viewMatrix", a.matrixWorldInverse);
                m.setValue(A, "toneMappingExposure", C.toneMappingExposure);
                m.setValue(A, "toneMappingWhitePoint", C.toneMappingWhitePoint)
            }
            if (c.skinning && (m.setOptional(A, d, "bindMatrix"), m.setOptional(A, d, "bindMatrixInverse"), a = d.skeleton))
                if (f = a.bones, ma.floatVertexTextures) {
                    if (void 0 === a.boneTexture) {
                        var f = Math.sqrt(4 * f.length),
                            f = Y.nextPowerOfTwo(Math.ceil(f)),
                            f = Math.max(f, 4),
                            u = new Float32Array(f * f * 4);
                        u.set(a.boneMatrices);
                        var t = new eb(u, f, f, 1023, 1015);
                        a.boneMatrices = u;
                        a.boneTexture = t;
                        a.boneTextureSize = f
                    }
                    m.setValue(A, "boneTexture", a.boneTexture);
                    m.setValue(A, "boneTextureSize", a.boneTextureSize)
                } else m.setOptional(A, a, "boneMatrices");
            if (g) {
                c.lights && (g = h, n.ambientLightColor.needsUpdate = g, n.directionalLights.needsUpdate = g, n.pointLights.needsUpdate = g, n.spotLights.needsUpdate = g, n.rectAreaLights.needsUpdate = g, n.hemisphereLights.needsUpdate = g);
                b && c.fog && (n.fogColor.value =
                    b.color, b.isFog ? (n.fogNear.value = b.near, n.fogFar.value = b.far) : b.isFogExp2 && (n.fogDensity.value = b.density));
                if (c.isMeshBasicMaterial || c.isMeshLambertMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.isMeshNormalMaterial || c.isMeshDepthMaterial) {
                    n.opacity.value = c.opacity;
                    n.diffuse.value = c.color;
                    c.emissive && n.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
                    n.map.value = c.map;
                    n.specularMap.value = c.specularMap;
                    n.alphaMap.value = c.alphaMap;
                    c.lightMap && (n.lightMap.value = c.lightMap,
                        n.lightMapIntensity.value = c.lightMapIntensity);
                    c.aoMap && (n.aoMap.value = c.aoMap, n.aoMapIntensity.value = c.aoMapIntensity);
                    var p;
                    c.map ? p = c.map : c.specularMap ? p = c.specularMap : c.displacementMap ? p = c.displacementMap : c.normalMap ? p = c.normalMap : c.bumpMap ? p = c.bumpMap : c.roughnessMap ? p = c.roughnessMap : c.metalnessMap ? p = c.metalnessMap : c.alphaMap ? p = c.alphaMap : c.emissiveMap && (p = c.emissiveMap);
                    void 0 !== p && (p.isWebGLRenderTarget && (p = p.texture), b = p.offset, p = p.repeat, n.offsetRepeat.value.set(b.x, b.y, p.x, p.y));
                    n.envMap.value =
                        c.envMap;
                    n.flipEnvMap.value = c.envMap && c.envMap.isCubeTexture ? -1 : 1;
                    n.reflectivity.value = c.reflectivity;
                    n.refractionRatio.value = c.refractionRatio
                }
                c.isLineBasicMaterial ? (n.diffuse.value = c.color, n.opacity.value = c.opacity) : c.isLineDashedMaterial ? (n.diffuse.value = c.color, n.opacity.value = c.opacity, n.dashSize.value = c.dashSize, n.totalSize.value = c.dashSize + c.gapSize, n.scale.value = c.scale) : c.isPointsMaterial ? (n.diffuse.value = c.color, n.opacity.value = c.opacity, n.size.value = c.size * ka, n.scale.value = .5 * da, n.map.value =
                    c.map, null !== c.map && (p = c.map.offset, c = c.map.repeat, n.offsetRepeat.value.set(p.x, p.y, c.x, c.y))) : c.isMeshLambertMaterial ? c.emissiveMap && (n.emissiveMap.value = c.emissiveMap) : c.isMeshToonMaterial ? (r(n, c), c.gradientMap && (n.gradientMap.value = c.gradientMap)) : c.isMeshPhongMaterial ? r(n, c) : c.isMeshPhysicalMaterial ? (n.clearCoat.value = c.clearCoat, n.clearCoatRoughness.value = c.clearCoatRoughness, l(n, c)) : c.isMeshStandardMaterial ? l(n, c) : c.isMeshDepthMaterial ? c.displacementMap && (n.displacementMap.value = c.displacementMap,
                    n.displacementScale.value = c.displacementScale, n.displacementBias.value = c.displacementBias) : c.isMeshNormalMaterial && (c.bumpMap && (n.bumpMap.value = c.bumpMap, n.bumpScale.value = c.bumpScale), c.normalMap && (n.normalMap.value = c.normalMap, n.normalScale.value.copy(c.normalScale)), c.displacementMap && (n.displacementMap.value = c.displacementMap, n.displacementScale.value = c.displacementScale, n.displacementBias.value = c.displacementBias));
                void 0 !== n.ltcMat && (n.ltcMat.value = V.LTC_MAT_TEXTURE);
                void 0 !== n.ltcMag && (n.ltcMag.value =
                    V.LTC_MAG_TEXTURE);
                fb.upload(A, e.uniformsList, n, C)
            }
            m.setValue(A, "modelViewMatrix", d.modelViewMatrix);
            m.setValue(A, "normalMatrix", d.normalMatrix);
            m.setValue(A, "modelMatrix", d.matrixWorld);
            return k
        }

        function r(a, b) {
            a.specular.value = b.specular;
            a.shininess.value = Math.max(b.shininess, 1E-4);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale);
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale));
            b.displacementMap &&
                (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias)
        }

        function l(a, b) {
            a.roughness.value = b.roughness;
            a.metalness.value = b.metalness;
            b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
            b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
            b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
            b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale);
            b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale));
            b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
            b.envMap && (a.envMapIntensity.value = b.envMapIntensity)
        }

        function t(a, b) {
            var c, d, e, f, g = 0,
                h = 0,
                k = 0,
                m, n, u, q = b.matrixWorldInverse,
                l = 0,
                r = 0,
                t = 0,
                z = 0,
                p = 0;
            c = 0;
            for (d = a.length; c < d; c++)
                if (e = a[c], f = e.color, m = e.intensity, n = e.distance, u = e.shadow && e.shadow.map ? e.shadow.map.texture : null, e.isAmbientLight) g += f.r * m, h += f.g * m, k += f.b * m;
                else if (e.isDirectionalLight) {
                var v =
                    Ca.get(e);
                v.color.copy(e.color).multiplyScalar(e.intensity);
                v.direction.setFromMatrixPosition(e.matrixWorld);
                Qa.setFromMatrixPosition(e.target.matrixWorld);
                v.direction.sub(Qa);
                v.direction.transformDirection(q);
                if (v.shadow = e.castShadow) f = e.shadow, v.shadowBias = f.bias, v.shadowRadius = f.radius, v.shadowMapSize = f.mapSize;
                ea.directionalShadowMap[l] = u;
                ea.directionalShadowMatrix[l] = e.shadow.matrix;
                ea.directional[l] = v;
                l++
            } else if (e.isSpotLight) {
                v = Ca.get(e);
                v.position.setFromMatrixPosition(e.matrixWorld);
                v.position.applyMatrix4(q);
                v.color.copy(f).multiplyScalar(m);
                v.distance = n;
                v.direction.setFromMatrixPosition(e.matrixWorld);
                Qa.setFromMatrixPosition(e.target.matrixWorld);
                v.direction.sub(Qa);
                v.direction.transformDirection(q);
                v.coneCos = Math.cos(e.angle);
                v.penumbraCos = Math.cos(e.angle * (1 - e.penumbra));
                v.decay = 0 === e.distance ? 0 : e.decay;
                if (v.shadow = e.castShadow) f = e.shadow, v.shadowBias = f.bias, v.shadowRadius = f.radius, v.shadowMapSize = f.mapSize;
                ea.spotShadowMap[t] = u;
                ea.spotShadowMatrix[t] = e.shadow.matrix;
                ea.spot[t] = v;
                t++
            } else if (e.isRectAreaLight) v =
                Ca.get(e), v.color.copy(f).multiplyScalar(m / (e.width * e.height)), v.position.setFromMatrixPosition(e.matrixWorld), v.position.applyMatrix4(q), ra.identity(), qa.copy(e.matrixWorld), qa.premultiply(q), ra.extractRotation(qa), v.halfWidth.set(.5 * e.width, 0, 0), v.halfHeight.set(0, .5 * e.height, 0), v.halfWidth.applyMatrix4(ra), v.halfHeight.applyMatrix4(ra), ea.rectArea[z] = v, z++;
            else if (e.isPointLight) {
                v = Ca.get(e);
                v.position.setFromMatrixPosition(e.matrixWorld);
                v.position.applyMatrix4(q);
                v.color.copy(e.color).multiplyScalar(e.intensity);
                v.distance = e.distance;
                v.decay = 0 === e.distance ? 0 : e.decay;
                if (v.shadow = e.castShadow) f = e.shadow, v.shadowBias = f.bias, v.shadowRadius = f.radius, v.shadowMapSize = f.mapSize;
                ea.pointShadowMap[r] = u;
                ea.pointShadowMatrix[r] = e.shadow.matrix;
                ea.point[r] = v;
                r++
            } else e.isHemisphereLight && (v = Ca.get(e), v.direction.setFromMatrixPosition(e.matrixWorld), v.direction.transformDirection(q), v.direction.normalize(), v.skyColor.copy(e.color).multiplyScalar(m), v.groundColor.copy(e.groundColor).multiplyScalar(m), ea.hemi[p] = v, p++);
            ea.ambient[0] = g;
            ea.ambient[1] = h;
            ea.ambient[2] = k;
            ea.directional.length = l;
            ea.spot.length = t;
            ea.rectArea.length = z;
            ea.point.length = r;
            ea.hemi.length = p;
            ea.hash = l + "," + r + "," + t + "," + z + "," + p + "," + ea.shadows.length
        }

        function y(a) {
            var b;
            if (1E3 === a) return A.REPEAT;
            if (1001 === a) return A.CLAMP_TO_EDGE;
            if (1002 === a) return A.MIRRORED_REPEAT;
            if (1003 === a) return A.NEAREST;
            if (1004 === a) return A.NEAREST_MIPMAP_NEAREST;
            if (1005 === a) return A.NEAREST_MIPMAP_LINEAR;
            if (1006 === a) return A.LINEAR;
            if (1007 === a) return A.LINEAR_MIPMAP_NEAREST;
            if (1008 === a) return A.LINEAR_MIPMAP_LINEAR;
            if (1009 === a) return A.UNSIGNED_BYTE;
            if (1017 === a) return A.UNSIGNED_SHORT_4_4_4_4;
            if (1018 === a) return A.UNSIGNED_SHORT_5_5_5_1;
            if (1019 === a) return A.UNSIGNED_SHORT_5_6_5;
            if (1010 === a) return A.BYTE;
            if (1011 === a) return A.SHORT;
            if (1012 === a) return A.UNSIGNED_SHORT;
            if (1013 === a) return A.INT;
            if (1014 === a) return A.UNSIGNED_INT;
            if (1015 === a) return A.FLOAT;
            if (1016 === a && (b = oa.get("OES_texture_half_float"), null !== b)) return b.HALF_FLOAT_OES;
            if (1021 === a) return A.ALPHA;
            if (1022 ===
                a) return A.RGB;
            if (1023 === a) return A.RGBA;
            if (1024 === a) return A.LUMINANCE;
            if (1025 === a) return A.LUMINANCE_ALPHA;
            if (1026 === a) return A.DEPTH_COMPONENT;
            if (1027 === a) return A.DEPTH_STENCIL;
            if (100 === a) return A.FUNC_ADD;
            if (101 === a) return A.FUNC_SUBTRACT;
            if (102 === a) return A.FUNC_REVERSE_SUBTRACT;
            if (200 === a) return A.ZERO;
            if (201 === a) return A.ONE;
            if (202 === a) return A.SRC_COLOR;
            if (203 === a) return A.ONE_MINUS_SRC_COLOR;
            if (204 === a) return A.SRC_ALPHA;
            if (205 === a) return A.ONE_MINUS_SRC_ALPHA;
            if (206 === a) return A.DST_ALPHA;
            if (207 === a) return A.ONE_MINUS_DST_ALPHA;
            if (208 === a) return A.DST_COLOR;
            if (209 === a) return A.ONE_MINUS_DST_COLOR;
            if (210 === a) return A.SRC_ALPHA_SATURATE;
            if (2001 === a || 2002 === a || 2003 === a || 2004 === a)
                if (b = oa.get("WEBGL_compressed_texture_s3tc"), null !== b) {
                    if (2001 === a) return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (2002 === a) return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (2003 === a) return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (2004 === a) return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
            if (2100 === a || 2101 === a || 2102 === a || 2103 === a)
                if (b = oa.get("WEBGL_compressed_texture_pvrtc"),
                    null !== b) {
                    if (2100 === a) return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (2101 === a) return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (2102 === a) return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (2103 === a) return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
            if (2151 === a && (b = oa.get("WEBGL_compressed_texture_etc1"), null !== b)) return b.COMPRESSED_RGB_ETC1_WEBGL;
            if (103 === a || 104 === a)
                if (b = oa.get("EXT_blend_minmax"), null !== b) {
                    if (103 === a) return b.MIN_EXT;
                    if (104 === a) return b.MAX_EXT
                }
            return 1020 === a && (b = oa.get("WEBGL_depth_texture"), null !== b) ?
                b.UNSIGNED_INT_24_8_WEBGL : 0
        }
        console.log("THREE.WebGLRenderer", "85");
        a = a || {};
        var x = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            v = void 0 !== a.context ? a.context : null,
            G = void 0 !== a.alpha ? a.alpha : !1,
            w = void 0 !== a.depth ? a.depth : !0,
            O = void 0 !== a.stencil ? a.stencil : !0,
            S = void 0 !== a.antialias ? a.antialias : !1,
            E = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
            F = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
            aa = [],
            R = null,
            ca = new Float32Array(8),
            D = [],
            B = [];
        this.domElement = x;
        this.context = null;
        this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
        this.clippingPlanes = [];
        this.localClippingEnabled = !1;
        this.gammaFactor = 2;
        this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
        this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1;
        this.maxMorphTargets = 8;
        this.maxMorphNormals = 4;
        var C = this,
            M = null,
            P = null,
            K = null,
            W = -1,
            ba = "",
            T = null,
            Q = new ga,
            L = null,
            Z = new ga,
            U = 0,
            Ja = new H(0),
            X = 0,
            N = x.width,
            da = x.height,
            ka = 1,
            ia = new ga(0, 0, N, da),
            Pe = !1,
            zc = new ga(0, 0, N, da),
            pa = new jd,
            Pa = new ig,
            kd = !1,
            Wd = !1,
            ld = new J,
            Qa = new p,
            qa = new J,
            ra = new J,
            ea = {
                hash: "",
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
                hemi: [],
                shadows: []
            },
            va = {
                geometries: 0,
                textures: 0
            },
            na = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: na,
            memory: va,
            programs: null
        };
        var A;
        try {
            G = {
                alpha: G,
                depth: w,
                stencil: O,
                antialias: S,
                premultipliedAlpha: E,
                preserveDrawingBuffer: F
            };
            A = v || x.getContext("webgl", G) || x.getContext("experimental-webgl", G);
            if (null === A) {
                if (null !== x.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context.";
            }
            void 0 === A.getShaderPrecisionFormat && (A.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            });
            x.addEventListener("webglcontextlost", d, !1)
        } catch (jg) {
            console.error("THREE.WebGLRenderer: " + jg)
        }
        var oa = new hg(A);
        oa.get("WEBGL_depth_texture");
        oa.get("OES_texture_float");
        oa.get("OES_texture_float_linear");
        oa.get("OES_texture_half_float");
        oa.get("OES_texture_half_float_linear");
        oa.get("OES_standard_derivatives");
        oa.get("ANGLE_instanced_arrays");
        oa.get("OES_element_index_uint") && (I.MaxIndex = 4294967296);
        var ma = new gg(A, oa, a),
            fa = new fg(A, oa, y),
            ha = new eg,
            sa = new dg(A, oa, fa, ha, ma, y, va),
            Aa = new Mf(A),
            Da = new Tf(A, Aa, va),
            wa = new Vf(A, Da, na),
            Ba = new cg(this, ma),
            Ca = new Uf,
            Ga = new Qf;
        this.info.programs = Ba.programs;
        var La = new Sf(A,
                oa, na),
            Ma = new Rf(A, oa, na),
            Fa, za, ta, ua;
        b();
        this.context = A;
        this.capabilities = ma;
        this.extensions = oa;
        this.properties = ha;
        this.state = fa;
        var Ka = new Je(this, ea, wa, ma);
        this.shadowMap = Ka;
        var Na = new Jf(this, D),
            Oa = new If(this, B);
        this.getContext = function() {
            return A
        };
        this.getContextAttributes = function() {
            return A.getContextAttributes()
        };
        this.forceContextLoss = function() {
            var a = oa.get("WEBGL_lose_context");
            a && a.loseContext()
        };
        this.getMaxAnisotropy = function() {
            return ma.getMaxAnisotropy()
        };
        this.getPrecision = function() {
            return ma.precision
        };
        this.getPixelRatio = function() {
            return ka
        };
        this.setPixelRatio = function(a) {
            void 0 !== a && (ka = a, this.setSize(zc.z, zc.w, !1))
        };
        this.getSize = function() {
            return {
                width: N,
                height: da
            }
        };
        this.setSize = function(a, b, c) {
            N = a;
            da = b;
            x.width = a * ka;
            x.height = b * ka;
            !1 !== c && (x.style.width = a + "px", x.style.height = b + "px");
            this.setViewport(0, 0, a, b)
        };
        this.setViewport = function(a, b, c, d) {
            fa.viewport(zc.set(a, b, c, d))
        };
        this.setScissor = function(a, b, c, d) {
            fa.scissor(ia.set(a, b, c, d))
        };
        this.setScissorTest = function(a) {
            fa.setScissorTest(Pe = a)
        };
        this.getClearColor =
            function() {
                return Ja
            };
        this.setClearColor = function(a, b) {
            Ja.set(a);
            X = void 0 !== b ? b : 1;
            fa.buffers.color.setClear(Ja.r, Ja.g, Ja.b, X, E)
        };
        this.getClearAlpha = function() {
            return X
        };
        this.setClearAlpha = function(a) {
            X = a;
            fa.buffers.color.setClear(Ja.r, Ja.g, Ja.b, X, E)
        };
        this.clear = function(a, b, c) {
            var d = 0;
            if (void 0 === a || a) d |= A.COLOR_BUFFER_BIT;
            if (void 0 === b || b) d |= A.DEPTH_BUFFER_BIT;
            if (void 0 === c || c) d |= A.STENCIL_BUFFER_BIT;
            A.clear(d)
        };
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        };
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        };
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        };
        this.clearTarget = function(a, b, c, d) {
            this.setRenderTarget(a);
            this.clear(b, c, d)
        };
        this.resetGLState = c;
        this.dispose = function() {
            x.removeEventListener("webglcontextlost", d, !1);
            Ga.dispose()
        };
        this.renderBufferImmediate = function(a, b, c) {
            fa.initAttributes();
            var d = ha.get(a);
            a.hasPositions && !d.position && (d.position = A.createBuffer());
            a.hasNormals && !d.normal && (d.normal = A.createBuffer());
            a.hasUvs && !d.uv && (d.uv = A.createBuffer());
            a.hasColors && !d.color && (d.color =
                A.createBuffer());
            b = b.getAttributes();
            a.hasPositions && (A.bindBuffer(A.ARRAY_BUFFER, d.position), A.bufferData(A.ARRAY_BUFFER, a.positionArray, A.DYNAMIC_DRAW), fa.enableAttribute(b.position), A.vertexAttribPointer(b.position, 3, A.FLOAT, !1, 0, 0));
            if (a.hasNormals) {
                A.bindBuffer(A.ARRAY_BUFFER, d.normal);
                if (!c.isMeshPhongMaterial && !c.isMeshStandardMaterial && !c.isMeshNormalMaterial && 1 === c.shading)
                    for (var e = 0, f = 3 * a.count; e < f; e += 9) {
                        var g = a.normalArray,
                            h = (g[e + 0] + g[e + 3] + g[e + 6]) / 3,
                            k = (g[e + 1] + g[e + 4] + g[e + 7]) / 3,
                            m = (g[e +
                                2] + g[e + 5] + g[e + 8]) / 3;
                        g[e + 0] = h;
                        g[e + 1] = k;
                        g[e + 2] = m;
                        g[e + 3] = h;
                        g[e + 4] = k;
                        g[e + 5] = m;
                        g[e + 6] = h;
                        g[e + 7] = k;
                        g[e + 8] = m
                    }
                A.bufferData(A.ARRAY_BUFFER, a.normalArray, A.DYNAMIC_DRAW);
                fa.enableAttribute(b.normal);
                A.vertexAttribPointer(b.normal, 3, A.FLOAT, !1, 0, 0)
            }
            a.hasUvs && c.map && (A.bindBuffer(A.ARRAY_BUFFER, d.uv), A.bufferData(A.ARRAY_BUFFER, a.uvArray, A.DYNAMIC_DRAW), fa.enableAttribute(b.uv), A.vertexAttribPointer(Aa.uv, 2, A.FLOAT, !1, 0, 0));
            a.hasColors && 0 !== c.vertexColors && (A.bindBuffer(A.ARRAY_BUFFER, d.color), A.bufferData(A.ARRAY_BUFFER,
                a.colorArray, A.DYNAMIC_DRAW), fa.enableAttribute(b.color), A.vertexAttribPointer(b.color, 3, A.FLOAT, !1, 0, 0));
            fa.disableUnusedAttributes();
            A.drawArrays(A.TRIANGLES, 0, a.count);
            a.count = 0
        };
        this.renderBufferDirect = function(a, b, c, d, e, f) {
            fa.setMaterial(d);
            var g = n(a, b, d, e);
            a = c.id + "_" + g.id + "_" + (!0 === d.wireframe);
            var k = !1;
            a !== ba && (ba = a, k = !0);
            b = e.morphTargetInfluences;
            if (void 0 !== b) {
                var m = [];
                a = 0;
                for (var u = b.length; a < u; a++) k = b[a], m.push([k, a]);
                m.sort(h);
                8 < m.length && (m.length = 8);
                var q = c.morphAttributes;
                a = 0;
                for (u =
                    m.length; a < u; a++) k = m[a], ca[a] = k[0], 0 !== k[0] ? (b = k[1], !0 === d.morphTargets && q.position && c.addAttribute("morphTarget" + a, q.position[b]), !0 === d.morphNormals && q.normal && c.addAttribute("morphNormal" + a, q.normal[b])) : (!0 === d.morphTargets && c.removeAttribute("morphTarget" + a), !0 === d.morphNormals && c.removeAttribute("morphNormal" + a));
                a = m.length;
                for (b = ca.length; a < b; a++) ca[a] = 0;
                g.getUniforms().setValue(A, "morphTargetInfluences", ca);
                k = !0
            }
            b = c.index;
            u = c.attributes.position;
            m = 1;
            !0 === d.wireframe && (b = Da.getWireframeAttribute(c),
                m = 2);
            a = La;
            null !== b && (a = Ma, a.setIndex(b));
            if (k) {
                k = void 0;
                if (c && c.isInstancedBufferGeometry && null === oa.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    void 0 === k && (k = 0);
                    fa.initAttributes();
                    var q = c.attributes,
                        g = g.getAttributes(),
                        l = d.defaultAttributeValues,
                        r;
                    for (r in g) {
                        var t = g[r];
                        if (0 <= t) {
                            var v = q[r];
                            if (void 0 !== v) {
                                var z = v.normalized,
                                    p = v.itemSize,
                                    w = Aa.get(v),
                                    x = w.buffer,
                                    y = w.type,
                                    w = w.bytesPerElement;
                                if (v.isInterleavedBufferAttribute) {
                                    var G = v.data,
                                        O = G.stride,
                                        v = v.offset;
                                    G && G.isInstancedInterleavedBuffer ? (fa.enableAttributeAndDivisor(t, G.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount = G.meshPerAttribute * G.count)) : fa.enableAttribute(t);
                                    A.bindBuffer(A.ARRAY_BUFFER, x);
                                    A.vertexAttribPointer(t, p, y, z, O * w, (k * O + v) * w)
                                } else v.isInstancedBufferAttribute ? (fa.enableAttributeAndDivisor(t, v.meshPerAttribute), void 0 === c.maxInstancedCount && (c.maxInstancedCount =
                                    v.meshPerAttribute * v.count)) : fa.enableAttribute(t), A.bindBuffer(A.ARRAY_BUFFER, x), A.vertexAttribPointer(t, p, y, z, 0, k * p * w)
                            } else if (void 0 !== l && (z = l[r], void 0 !== z)) switch (z.length) {
                                case 2:
                                    A.vertexAttrib2fv(t, z);
                                    break;
                                case 3:
                                    A.vertexAttrib3fv(t, z);
                                    break;
                                case 4:
                                    A.vertexAttrib4fv(t, z);
                                    break;
                                default:
                                    A.vertexAttrib1fv(t, z)
                            }
                        }
                    }
                    fa.disableUnusedAttributes()
                }
                null !== b && A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, Aa.get(b).buffer)
            }
            r = 0;
            null !== b ? r = b.count : void 0 !== u && (r = u.count);
            u = c.drawRange.start * m;
            k = null !== f ? f.start * m :
                0;
            b = Math.max(u, k);
            f = Math.max(0, Math.min(r, u + c.drawRange.count * m, k + (null !== f ? f.count * m : Infinity)) - 1 - b + 1);
            if (0 !== f) {
                if (e.isMesh)
                    if (!0 === d.wireframe) fa.setLineWidth(d.wireframeLinewidth * (null === P ? ka : 1)), a.setMode(A.LINES);
                    else switch (e.drawMode) {
                        case 0:
                            a.setMode(A.TRIANGLES);
                            break;
                        case 1:
                            a.setMode(A.TRIANGLE_STRIP);
                            break;
                        case 2:
                            a.setMode(A.TRIANGLE_FAN)
                    } else e.isLine ? (d = d.linewidth, void 0 === d && (d = 1), fa.setLineWidth(d * (null === P ? ka : 1)), e.isLineSegments ? a.setMode(A.LINES) : e.isLineLoop ? a.setMode(A.LINE_LOOP) :
                        a.setMode(A.LINE_STRIP)) : e.isPoints && a.setMode(A.POINTS);
                c && c.isInstancedBufferGeometry ? 0 < c.maxInstancedCount && a.renderInstances(c, b, f) : a.render(b, f)
            }
        };
        this.compile = function(a, b) {
            aa = [];
            a.traverse(function(a) {
                a.isLight && aa.push(a)
            });
            t(aa, b);
            a.traverse(function(b) {
                if (b.material)
                    if (Array.isArray(b.material))
                        for (var c = 0; c < b.material.length; c++) q(b.material[c], a.fog, b);
                    else q(b.material, a.fog, b)
            })
        };
        this.render = function(a, b, c, d) {
            if (void 0 !== b && !0 !== b.isCamera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            else {
                ba = "";
                W = -1;
                T = null;
                !0 === a.autoUpdate && a.updateMatrixWorld();
                b.onBeforeRender(C);
                null === b.parent && b.updateMatrixWorld();
                b.matrixWorldInverse.getInverse(b.matrixWorld);
                ld.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
                pa.setFromMatrix(ld);
                aa.length = 0;
                D.length = 0;
                B.length = 0;
                Wd = this.localClippingEnabled;
                kd = Pa.init(this.clippingPlanes, Wd, b);
                R = Ga.get(a, b);
                R.init();
                k(a, b, C.sortObjects);
                R.finish();
                !0 === C.sortObjects && R.sort();
                kd && Pa.beginShadows();
                for (var e = aa, f = 0, g = 0, h = e.length; g < h; g++) {
                    var n =
                        e[g];
                    n.castShadow && (ea.shadows[f] = n, f++)
                }
                ea.shadows.length = f;
                Ka.render(a, b);
                t(aa, b);
                kd && Pa.endShadows();
                na.frame++;
                na.calls = 0;
                na.vertices = 0;
                na.faces = 0;
                na.points = 0;
                void 0 === c && (c = null);
                this.setRenderTarget(c);
                e = a.background;
                null === e ? fa.buffers.color.setClear(Ja.r, Ja.g, Ja.b, X, E) : e && e.isColor && (fa.buffers.color.setClear(e.r, e.g, e.b, 1, E), d = !0);
                (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
                e && e.isCubeTexture ? (void 0 === ta && (ta = new ya, ua = new xa(new kb(5, 5,
                    5), new Ea({
                    uniforms: ab.cube.uniforms,
                    vertexShader: ab.cube.vertexShader,
                    fragmentShader: ab.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))), ta.projectionMatrix.copy(b.projectionMatrix), ta.matrixWorld.extractRotation(b.matrixWorld), ta.matrixWorldInverse.getInverse(ta.matrixWorld), ua.material.uniforms.tCube.value = e, ua.modelViewMatrix.multiplyMatrices(ta.matrixWorldInverse, ua.matrixWorld), wa.update(ua), C.renderBufferDirect(ta, null, ua.geometry, ua.material, ua, null)) : e && e.isTexture && (void 0 ===
                    Fa && (Fa = new Jb(-1, 1, 1, -1, 0, 1), za = new xa(new lb(2, 2), new Ia({
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))), za.material.map = e, wa.update(za), C.renderBufferDirect(Fa, null, za.geometry, za.material, za, null));
                d = R.opaque;
                e = R.transparent;
                a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, b, f), e.length && m(e, a, b, f)) : (d.length && m(d, a, b), e.length && m(e, a, b));
                Na.render(a, b);
                Oa.render(a, b, Z);
                c && sa.updateRenderTargetMipmap(c);
                fa.buffers.depth.setTest(!0);
                fa.buffers.depth.setMask(!0);
                fa.buffers.color.setMask(!0);
                b.isArrayCamera &&
                    b.enabled && C.setScissorTest(!1);
                b.onAfterRender(C)
            }
        };
        this.setFaceCulling = function(a, b) {
            fa.setCullFace(a);
            fa.setFlipSided(0 === b)
        };
        this.allocTextureUnit = function() {
            var a = U;
            a >= ma.maxTextures && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + ma.maxTextures);
            U += 1;
            return a
        };
        this.setTexture2D = function() {
            var a = !1;
            return function(b, c) {
                b && b.isWebGLRenderTarget && (a || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
                    a = !0), b = b.texture);
                sa.setTexture2D(b, c)
            }
        }();
        this.setTexture = function() {
            var a = !1;
            return function(b, c) {
                a || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), a = !0);
                sa.setTexture2D(b, c)
            }
        }();
        this.setTextureCube = function() {
            var a = !1;
            return function(b, c) {
                b && b.isWebGLRenderTargetCube && (a || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), a = !0), b = b.texture);
                b && b.isCubeTexture || Array.isArray(b.image) &&
                    6 === b.image.length ? sa.setTextureCube(b, c) : sa.setTextureCubeDynamic(b, c)
            }
        }();
        this.getRenderTarget = function() {
            return P
        };
        this.setRenderTarget = function(a) {
            (P = a) && void 0 === ha.get(a).__webglFramebuffer && sa.setupRenderTarget(a);
            var b = a && a.isWebGLRenderTargetCube,
                c;
            a ? (c = ha.get(a), c = b ? c.__webglFramebuffer[a.activeCubeFace] : c.__webglFramebuffer, Q.copy(a.scissor), L = a.scissorTest, Z.copy(a.viewport)) : (c = null, Q.copy(ia).multiplyScalar(ka), L = Pe, Z.copy(zc).multiplyScalar(ka));
            K !== c && (A.bindFramebuffer(A.FRAMEBUFFER,
                c), K = c);
            fa.scissor(Q);
            fa.setScissorTest(L);
            fa.viewport(Z);
            b && (b = ha.get(a.texture), A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, b.__webglTexture, a.activeMipMapLevel))
        };
        this.readRenderTargetPixels = function(a, b, c, d, e, f) {
            if (!1 === (a && a.isWebGLRenderTarget)) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            else {
                var g = ha.get(a).__webglFramebuffer;
                if (g) {
                    var h = !1;
                    g !== K && (A.bindFramebuffer(A.FRAMEBUFFER,
                        g), h = !0);
                    try {
                        var k = a.texture,
                            m = k.format,
                            n = k.type;
                        1023 !== m && y(m) !== A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === n || y(n) === A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === n && (oa.get("OES_texture_float") || oa.get("WEBGL_color_buffer_float")) || 1016 === n && oa.get("EXT_color_buffer_half_float") ? A.checkFramebufferStatus(A.FRAMEBUFFER) === A.FRAMEBUFFER_COMPLETE ? 0 <= b &&
                            b <= a.width - d && 0 <= c && c <= a.height - e && A.readPixels(b, c, d, e, y(m), y(n), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        h && A.bindFramebuffer(A.FRAMEBUFFER, K)
                    }
                }
            }
        }
    }

    function Kb(a, b) {
        this.name = "";
        this.color = new H(a);
        this.density = void 0 !== b ? b : 2.5E-4
    }

    function Lb(a, b, c) {
        this.name = "";
        this.color =
            new H(a);
        this.near = void 0 !== b ? b : 1;
        this.far = void 0 !== c ? c : 1E3
    }

    function md() {
        B.call(this);
        this.type = "Scene";
        this.overrideMaterial = this.fog = this.background = null;
        this.autoUpdate = !0
    }

    function Yd(a, b, c, d, e) {
        B.call(this);
        this.lensFlares = [];
        this.positionScreen = new p;
        this.customUpdateCallback = void 0;
        void 0 !== a && this.add(a, b, c, d, e)
    }

    function cb(a) {
        Z.call(this);
        this.type = "SpriteMaterial";
        this.color = new H(16777215);
        this.map = null;
        this.rotation = 0;
        this.lights = this.fog = !1;
        this.setValues(a)
    }

    function Ac(a) {
        B.call(this);
        this.type = "Sprite";
        this.material = void 0 !== a ? a : new cb
    }

    function Bc() {
        B.call(this);
        this.type = "LOD";
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function Cc(a, b) {
        a = a || [];
        this.bones = a.slice(0);
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === b) this.calculateInverses();
        else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length.");
            this.boneInverses = [];
            for (var c = 0, d = this.bones.length; c < d; c++) this.boneInverses.push(new J)
        }
    }

    function nd() {
        B.call(this);
        this.type = "Bone"
    }

    function od(a, b) {
        xa.call(this, a, b);
        this.type = "SkinnedMesh";
        this.bindMode = "attached";
        this.bindMatrix = new J;
        this.bindMatrixInverse = new J;
        var c = this.initBones(),
            c = new Cc(c);
        this.bind(c, this.matrixWorld);
        this.normalizeSkinWeights()
    }

    function pa(a) {
        Z.call(this);
        this.type = "LineBasicMaterial";
        this.color = new H(16777215);
        this.linewidth = 1;
        this.linejoin = this.linecap = "round";
        this.lights = !1;
        this.setValues(a)
    }

    function La(a, b, c) {
        if (1 === c) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
            new da(a, b);
        B.call(this);
        this.type = "Line";
        this.geometry = void 0 !== a ? a : new I;
        this.material = void 0 !== b ? b : new pa({
            color: 16777215 * Math.random()
        })
    }

    function da(a, b) {
        La.call(this, a, b);
        this.type = "LineSegments"
    }

    function pd(a, b) {
        La.call(this, a, b);
        this.type = "LineLoop"
    }

    function Ma(a) {
        Z.call(this);
        this.type = "PointsMaterial";
        this.color = new H(16777215);
        this.map = null;
        this.size = 1;
        this.sizeAttenuation = !0;
        this.lights = !1;
        this.setValues(a)
    }

    function Mb(a, b) {
        B.call(this);
        this.type = "Points";
        this.geometry = void 0 !== a ? a : new I;
        this.material = void 0 !== b ? b : new Ma({
            color: 16777215 * Math.random()
        })
    }

    function Dc() {
        B.call(this);
        this.type = "Group"
    }

    function qd(a, b, c, d, e, f, g, h, k) {
        function m() {
            requestAnimationFrame(m);
            a.readyState >= a.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
        }
        X.call(this, a, b, c, d, e, f, g, h, k);
        this.generateMipmaps = !1;
        var u = this;
        m()
    }

    function Nb(a, b, c, d, e, f, g, h, k, m, u, q) {
        X.call(this, null, f, g, h, k, m, d, e, u, q);
        this.image = {
            width: b,
            height: c
        };
        this.mipmaps = a;
        this.generateMipmaps = this.flipY = !1
    }

    function rd(a, b, c, d, e, f, g, h, k) {
        X.call(this, a,
            b, c, d, e, f, g, h, k);
        this.needsUpdate = !0
    }

    function Ec(a, b, c, d, e, f, g, h, k, m) {
        m = void 0 !== m ? m : 1026;
        if (1026 !== m && 1027 !== m) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === c && 1026 === m && (c = 1012);
        void 0 === c && 1027 === m && (c = 1020);
        X.call(this, null, d, e, f, g, h, m, c, k);
        this.image = {
            width: a,
            height: b
        };
        this.magFilter = void 0 !== g ? g : 1003;
        this.minFilter = void 0 !== h ? h : 1003;
        this.generateMipmaps = this.flipY = !1
    }

    function Ob(a) {
        I.call(this);
        this.type = "WireframeGeometry";
        var b = [],
            c, d, e, f, g = [0, 0],
            h = {},
            k, m, u = ["a", "b", "c"];
        if (a && a.isGeometry) {
            var q = a.faces;
            c = 0;
            for (e = q.length; c < e; c++) {
                var n = q[c];
                for (d = 0; 3 > d; d++) k = n[u[d]], m = n[u[(d + 1) % 3]], g[0] = Math.min(k, m), g[1] = Math.max(k, m), k = g[0] + "," + g[1], void 0 === h[k] && (h[k] = {
                    index1: g[0],
                    index2: g[1]
                })
            }
            for (k in h) c = h[k], u = a.vertices[c.index1], b.push(u.x, u.y, u.z), u = a.vertices[c.index2], b.push(u.x, u.y, u.z)
        } else if (a && a.isBufferGeometry) {
            var r, u = new p;
            if (null !== a.index) {
                q = a.attributes.position;
                n = a.index;
                r = a.groups;
                0 === r.length && (r = [{
                    start: 0,
                    count: n.count,
                    materialIndex: 0
                }]);
                a = 0;
                for (f = r.length; a < f; ++a)
                    for (c = r[a], d = c.start, e = c.count, c = d, e = d + e; c < e; c += 3)
                        for (d = 0; 3 > d; d++) k = n.getX(c + d), m = n.getX(c + (d + 1) % 3), g[0] = Math.min(k, m), g[1] = Math.max(k, m), k = g[0] + "," + g[1], void 0 === h[k] && (h[k] = {
                            index1: g[0],
                            index2: g[1]
                        });
                for (k in h) c = h[k], u.fromBufferAttribute(q, c.index1), b.push(u.x, u.y, u.z), u.fromBufferAttribute(q, c.index2), b.push(u.x, u.y, u.z)
            } else
                for (q = a.attributes.position, c = 0, e = q.count / 3; c < e; c++)
                    for (d = 0; 3 > d; d++) h = 3 * c + d, u.fromBufferAttribute(q, h), b.push(u.x, u.y, u.z),
                        h = 3 * c + (d + 1) % 3, u.fromBufferAttribute(q, h), b.push(u.x, u.y, u.z)
        }
        this.addAttribute("position", new C(b, 3))
    }

    function Fc(a, b, c) {
        M.call(this);
        this.type = "ParametricGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        this.fromBufferGeometry(new Pb(a, b, c));
        this.mergeVertices()
    }

    function Pb(a, b, c) {
        I.call(this);
        this.type = "ParametricBufferGeometry";
        this.parameters = {
            func: a,
            slices: b,
            stacks: c
        };
        var d = [],
            e = [],
            f = [],
            g = [],
            h = new p,
            k = new p,
            m = new p,
            u = new p,
            q = new p,
            n, r, l = b + 1;
        for (n = 0; n <= c; n++) {
            var t = n / c;
            for (r = 0; r <= b; r++) {
                var y =
                    r / b,
                    k = a(y, t, k);
                e.push(k.x, k.y, k.z);
                0 <= y - 1E-5 ? (m = a(y - 1E-5, t, m), u.subVectors(k, m)) : (m = a(y + 1E-5, t, m), u.subVectors(m, k));
                0 <= t - 1E-5 ? (m = a(y, t - 1E-5, m), q.subVectors(k, m)) : (m = a(y, t + 1E-5, m), q.subVectors(m, k));
                h.crossVectors(u, q).normalize();
                f.push(h.x, h.y, h.z);
                g.push(y, t)
            }
        }
        for (n = 0; n < c; n++)
            for (r = 0; r < b; r++) a = n * l + r + 1, h = (n + 1) * l + r + 1, k = (n + 1) * l + r, d.push(n * l + r, a, k), d.push(a, h, k);
        this.setIndex(d);
        this.addAttribute("position", new C(e, 3));
        this.addAttribute("normal", new C(f, 3));
        this.addAttribute("uv", new C(g, 2))
    }

    function Gc(a,
        b, c, d) {
        M.call(this);
        this.type = "PolyhedronGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        this.fromBufferGeometry(new ha(a, b, c, d));
        this.mergeVertices()
    }

    function ha(a, b, c, d) {
        function e(a) {
            h.push(a.x, a.y, a.z)
        }

        function f(b, c) {
            var d = 3 * b;
            c.x = a[d + 0];
            c.y = a[d + 1];
            c.z = a[d + 2]
        }

        function g(a, b, c, d) {
            0 > d && 1 === a.x && (k[b] = a.x - 1);
            0 === c.x && 0 === c.z && (k[b] = d / 2 / Math.PI + .5)
        }
        I.call(this);
        this.type = "PolyhedronBufferGeometry";
        this.parameters = {
            vertices: a,
            indices: b,
            radius: c,
            detail: d
        };
        c = c || 1;
        var h = [],
            k = [];
        (function(a) {
            for (var c =
                    new p, d = new p, g = new p, h = 0; h < b.length; h += 3) {
                f(b[h + 0], c);
                f(b[h + 1], d);
                f(b[h + 2], g);
                var k = c,
                    l = d,
                    y = g,
                    x = Math.pow(2, a),
                    v = [],
                    G, w;
                for (G = 0; G <= x; G++) {
                    v[G] = [];
                    var O = k.clone().lerp(y, G / x),
                        S = l.clone().lerp(y, G / x),
                        E = x - G;
                    for (w = 0; w <= E; w++) v[G][w] = 0 === w && G === x ? O : O.clone().lerp(S, w / E)
                }
                for (G = 0; G < x; G++)
                    for (w = 0; w < 2 * (x - G) - 1; w++) k = Math.floor(w / 2), 0 === w % 2 ? (e(v[G][k + 1]), e(v[G + 1][k]), e(v[G][k])) : (e(v[G][k + 1]), e(v[G + 1][k + 1]), e(v[G + 1][k]))
            }
        })(d || 0);
        (function(a) {
            for (var b = new p, c = 0; c < h.length; c += 3) b.x = h[c + 0], b.y = h[c + 1], b.z = h[c +
                2], b.normalize().multiplyScalar(a), h[c + 0] = b.x, h[c + 1] = b.y, h[c + 2] = b.z
        })(c);
        (function() {
            for (var a = new p, b = 0; b < h.length; b += 3) a.x = h[b + 0], a.y = h[b + 1], a.z = h[b + 2], k.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));
            for (var a = new p, b = new p, c = new p, d = new p, e = new D, f = new D, l = new D, y = 0, x = 0; y < h.length; y += 9, x += 6) {
                a.set(h[y + 0], h[y + 1], h[y + 2]);
                b.set(h[y + 3], h[y + 4], h[y + 5]);
                c.set(h[y + 6], h[y + 7], h[y + 8]);
                e.set(k[x + 0], k[x + 1]);
                f.set(k[x + 2], k[x + 3]);
                l.set(k[x + 4], k[x + 5]);
                d.copy(a).add(b).add(c).divideScalar(3);
                var v = Math.atan2(d.z, -d.x);
                g(e, x + 0, a, v);
                g(f, x + 2, b, v);
                g(l, x + 4, c, v)
            }
            for (a = 0; a < k.length; a += 6) b = k[a + 0], c = k[a + 2], d = k[a + 4], e = Math.min(b, c, d), .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (k[a + 0] += 1), .2 > c && (k[a + 2] += 1), .2 > d && (k[a + 4] += 1))
        })();
        this.addAttribute("position", new C(h, 3));
        this.addAttribute("normal", new C(h.slice(), 3));
        this.addAttribute("uv", new C(k, 2));
        this.normalizeNormals()
    }

    function Hc(a, b) {
        M.call(this);
        this.type = "TetrahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Qb(a, b));
        this.mergeVertices()
    }

    function Qb(a, b) {
        ha.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
        this.type = "TetrahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }

    function Ic(a, b) {
        M.call(this);
        this.type = "OctahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new mb(a, b));
        this.mergeVertices()
    }

    function mb(a, b) {
        ha.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
        this.type = "OctahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }

    function Jc(a, b) {
        M.call(this);
        this.type = "IcosahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Rb(a, b));
        this.mergeVertices()
    }

    function Rb(a, b) {
        var c = (1 + Math.sqrt(5)) / 2;
        ha.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
        this.type = "IcosahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }

    function Kc(a, b) {
        M.call(this);
        this.type = "DodecahedronGeometry";
        this.parameters = {
            radius: a,
            detail: b
        };
        this.fromBufferGeometry(new Sb(a, b));
        this.mergeVertices()
    }

    function Sb(a, b) {
        var c = (1 + Math.sqrt(5)) / 2,
            d = 1 / c;
        ha.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
            0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9
        ], a, b);
        this.type = "DodecahedronBufferGeometry";
        this.parameters = {
            radius: a,
            detail: b
        }
    }

    function Lc(a, b, c, d, e, f) {
        M.call(this);
        this.type = "TubeGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
        a = new Tb(a, b, c, d, e);
        this.tangents = a.tangents;
        this.normals = a.normals;
        this.binormals = a.binormals;
        this.fromBufferGeometry(a);
        this.mergeVertices()
    }

    function Tb(a, b, c, d, e) {
        function f(e) {
            var f = a.getPointAt(e / b),
                m = g.normals[e];
            e = g.binormals[e];
            for (q = 0; q <= d; q++) {
                var u = q / d * Math.PI * 2,
                    t = Math.sin(u),
                    u = -Math.cos(u);
                k.x = u * m.x + t * e.x;
                k.y = u * m.y + t * e.y;
                k.z = u * m.z + t * e.z;
                k.normalize();
                l.push(k.x, k.y, k.z);
                h.x = f.x + c * k.x;
                h.y = f.y + c * k.y;
                h.z = f.z + c * k.z;
                n.push(h.x, h.y, h.z)
            }
        }
        I.call(this);
        this.type = "TubeBufferGeometry";
        this.parameters = {
            path: a,
            tubularSegments: b,
            radius: c,
            radialSegments: d,
            closed: e
        };
        b = b || 64;
        c = c || 1;
        d = d || 8;
        e = e || !1;
        var g = a.computeFrenetFrames(b, e);
        this.tangents = g.tangents;
        this.normals = g.normals;
        this.binormals = g.binormals;
        var h = new p,
            k = new p,
            m = new D,
            u, q, n = [],
            l = [],
            z = [],
            t = [];
        for (u = 0; u < b; u++) f(u);
        f(!1 === e ? b : 0);
        for (u = 0; u <= b; u++)
            for (q = 0; q <= d; q++) m.x = u / b, m.y = q / d, z.push(m.x, m.y);
        (function() {
            for (q = 1; q <= b; q++)
                for (u = 1; u <= d; u++) {
                    var a = (d + 1) * q + (u - 1),
                        c = (d + 1) * q + u,
                        e = (d + 1) * (q - 1) + u;
                    t.push((d + 1) * (q - 1) + (u - 1), a, e);
                    t.push(a, c, e)
                }
        })();
        this.setIndex(t);
        this.addAttribute("position", new C(n, 3));
        this.addAttribute("normal", new C(l, 3));
        this.addAttribute("uv", new C(z, 2))
    }

    function Mc(a, b, c, d, e, f, g) {
        M.call(this);
        this.type = "TorusKnotGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
        this.fromBufferGeometry(new Ub(a, b, c, d, e, f));
        this.mergeVertices()
    }

    function Ub(a, b, c, d, e, f) {
        function g(a, b, c, d, e) {
            var f = Math.sin(a);
            b = c / b * a;
            c = Math.cos(b);
            e.x = d * (2 + c) *
                .5 * Math.cos(a);
            e.y = d * (2 + c) * f * .5;
            e.z = d * Math.sin(b) * .5
        }
        I.call(this);
        this.type = "TorusKnotBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            tubularSegments: c,
            radialSegments: d,
            p: e,
            q: f
        };
        a = a || 100;
        b = b || 40;
        c = Math.floor(c) || 64;
        d = Math.floor(d) || 8;
        e = e || 2;
        f = f || 3;
        var h = [],
            k = [],
            m = [],
            u = [],
            q, n, l = new p,
            z = new p,
            t = new p,
            y = new p,
            x = new p,
            v = new p,
            G = new p;
        for (q = 0; q <= c; ++q)
            for (n = q / c * e * Math.PI * 2, g(n, e, f, a, t), g(n + .01, e, f, a, y), v.subVectors(y, t), G.addVectors(y, t), x.crossVectors(v, G), G.crossVectors(x, v), x.normalize(), G.normalize(),
                n = 0; n <= d; ++n) {
                var w = n / d * Math.PI * 2,
                    O = -b * Math.cos(w),
                    w = b * Math.sin(w);
                l.x = t.x + (O * G.x + w * x.x);
                l.y = t.y + (O * G.y + w * x.y);
                l.z = t.z + (O * G.z + w * x.z);
                k.push(l.x, l.y, l.z);
                z.subVectors(l, t).normalize();
                m.push(z.x, z.y, z.z);
                u.push(q / c);
                u.push(n / d)
            }
        for (n = 1; n <= c; n++)
            for (q = 1; q <= d; q++) a = (d + 1) * n + (q - 1), b = (d + 1) * n + q, e = (d + 1) * (n - 1) + q, h.push((d + 1) * (n - 1) + (q - 1), a, e), h.push(a, b, e);
        this.setIndex(h);
        this.addAttribute("position", new C(k, 3));
        this.addAttribute("normal", new C(m, 3));
        this.addAttribute("uv", new C(u, 2))
    }

    function Nc(a, b, c, d,
        e) {
        M.call(this);
        this.type = "TorusGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        this.fromBufferGeometry(new Vb(a, b, c, d, e));
        this.mergeVertices()
    }

    function Vb(a, b, c, d, e) {
        I.call(this);
        this.type = "TorusBufferGeometry";
        this.parameters = {
            radius: a,
            tube: b,
            radialSegments: c,
            tubularSegments: d,
            arc: e
        };
        a = a || 100;
        b = b || 40;
        c = Math.floor(c) || 8;
        d = Math.floor(d) || 6;
        e = e || 2 * Math.PI;
        var f = [],
            g = [],
            h = [],
            k = [],
            m = new p,
            u = new p,
            q = new p,
            n, l;
        for (n = 0; n <= c; n++)
            for (l = 0; l <= d; l++) {
                var z = l / d * e,
                    t = n / c * Math.PI *
                    2;
                u.x = (a + b * Math.cos(t)) * Math.cos(z);
                u.y = (a + b * Math.cos(t)) * Math.sin(z);
                u.z = b * Math.sin(t);
                g.push(u.x, u.y, u.z);
                m.x = a * Math.cos(z);
                m.y = a * Math.sin(z);
                q.subVectors(u, m).normalize();
                h.push(q.x, q.y, q.z);
                k.push(l / d);
                k.push(n / c)
            }
        for (n = 1; n <= c; n++)
            for (l = 1; l <= d; l++) a = (d + 1) * (n - 1) + l - 1, b = (d + 1) * (n - 1) + l, e = (d + 1) * n + l, f.push((d + 1) * n + l - 1, a, e), f.push(a, b, e);
        this.setIndex(f);
        this.addAttribute("position", new C(g, 3));
        this.addAttribute("normal", new C(h, 3));
        this.addAttribute("uv", new C(k, 2))
    }

    function db(a, b) {
        M.call(this);
        this.type =
            "ExtrudeGeometry";
        this.parameters = {
            shapes: a,
            options: b
        };
        this.fromBufferGeometry(new Fa(a, b));
        this.mergeVertices()
    }

    function Fa(a, b) {
        "undefined" !== typeof a && (I.call(this), this.type = "ExtrudeBufferGeometry", a = Array.isArray(a) ? a : [a], this.addShapeList(a, b), this.computeVertexNormals())
    }

    function Oc(a, b) {
        M.call(this);
        this.type = "TextGeometry";
        this.parameters = {
            text: a,
            parameters: b
        };
        this.fromBufferGeometry(new Wb(a, b));
        this.mergeVertices()
    }

    function Wb(a, b) {
        b = b || {};
        var c = b.font;
        if (!1 === (c && c.isFont)) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new M;
        c = c.generateShapes(a, b.size, b.curveSegments);
        b.amount = void 0 !== b.height ? b.height : 50;
        void 0 === b.bevelThickness && (b.bevelThickness = 10);
        void 0 === b.bevelSize && (b.bevelSize = 8);
        void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
        Fa.call(this, c, b);
        this.type = "TextBufferGeometry"
    }

    function Pc(a, b, c, d, e, f, g) {
        M.call(this);
        this.type = "SphereGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        this.fromBufferGeometry(new nb(a, b, c, d, e, f, g));
        this.mergeVertices()
    }

    function nb(a, b, c, d, e, f, g) {
        I.call(this);
        this.type = "SphereBufferGeometry";
        this.parameters = {
            radius: a,
            widthSegments: b,
            heightSegments: c,
            phiStart: d,
            phiLength: e,
            thetaStart: f,
            thetaLength: g
        };
        a = a || 50;
        b = Math.max(3, Math.floor(b) || 8);
        c = Math.max(2, Math.floor(c) || 6);
        d = void 0 !== d ? d : 0;
        e = void 0 !== e ? e : 2 * Math.PI;
        f = void 0 !== f ? f : 0;
        g = void 0 !== g ? g : Math.PI;
        var h = f + g,
            k, m, u = 0,
            q = [],
            n = new p,
            l = new p,
            z = [],
            t = [],
            y = [],
            x = [];
        for (m = 0; m <= c; m++) {
            var v = [],
                G = m / c;
            for (k = 0; k <= b; k++) {
                var w = k / b;
                n.x = -a * Math.cos(d + w * e) * Math.sin(f + G * g);
                n.y = a * Math.cos(f +
                    G * g);
                n.z = a * Math.sin(d + w * e) * Math.sin(f + G * g);
                t.push(n.x, n.y, n.z);
                l.set(n.x, n.y, n.z).normalize();
                y.push(l.x, l.y, l.z);
                x.push(w, 1 - G);
                v.push(u++)
            }
            q.push(v)
        }
        for (m = 0; m < c; m++)
            for (k = 0; k < b; k++) a = q[m][k + 1], d = q[m][k], e = q[m + 1][k], g = q[m + 1][k + 1], (0 !== m || 0 < f) && z.push(a, d, g), (m !== c - 1 || h < Math.PI) && z.push(d, e, g);
        this.setIndex(z);
        this.addAttribute("position", new C(t, 3));
        this.addAttribute("normal", new C(y, 3));
        this.addAttribute("uv", new C(x, 2))
    }

    function Qc(a, b, c, d, e, f) {
        M.call(this);
        this.type = "RingGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        this.fromBufferGeometry(new Xb(a, b, c, d, e, f));
        this.mergeVertices()
    }

    function Xb(a, b, c, d, e, f) {
        I.call(this);
        this.type = "RingBufferGeometry";
        this.parameters = {
            innerRadius: a,
            outerRadius: b,
            thetaSegments: c,
            phiSegments: d,
            thetaStart: e,
            thetaLength: f
        };
        a = a || 20;
        b = b || 50;
        e = void 0 !== e ? e : 0;
        f = void 0 !== f ? f : 2 * Math.PI;
        c = void 0 !== c ? Math.max(3, c) : 8;
        d = void 0 !== d ? Math.max(1, d) : 1;
        var g = [],
            h = [],
            k = [],
            m = [],
            u = a,
            q = (b - a) / d,
            n = new p,
            l = new D,
            z, t;
        for (z =
            0; z <= d; z++) {
            for (t = 0; t <= c; t++) a = e + t / c * f, n.x = u * Math.cos(a), n.y = u * Math.sin(a), h.push(n.x, n.y, n.z), k.push(0, 0, 1), l.x = (n.x / b + 1) / 2, l.y = (n.y / b + 1) / 2, m.push(l.x, l.y);
            u += q
        }
        for (z = 0; z < d; z++)
            for (b = z * (c + 1), t = 0; t < c; t++) a = t + b, e = a + c + 1, f = a + c + 2, u = a + 1, g.push(a, e, u), g.push(e, f, u);
        this.setIndex(g);
        this.addAttribute("position", new C(h, 3));
        this.addAttribute("normal", new C(k, 3));
        this.addAttribute("uv", new C(m, 2))
    }

    function Rc(a, b, c, d) {
        M.call(this);
        this.type = "LatheGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        this.fromBufferGeometry(new Yb(a, b, c, d));
        this.mergeVertices()
    }

    function Yb(a, b, c, d) {
        I.call(this);
        this.type = "LatheBufferGeometry";
        this.parameters = {
            points: a,
            segments: b,
            phiStart: c,
            phiLength: d
        };
        b = Math.floor(b) || 12;
        c = c || 0;
        d = d || 2 * Math.PI;
        d = Y.clamp(d, 0, 2 * Math.PI);
        var e = [],
            f = [],
            g = [],
            h = 1 / b,
            k = new p,
            m = new D,
            u, q;
        for (u = 0; u <= b; u++) {
            q = c + u * h * d;
            var n = Math.sin(q),
                l = Math.cos(q);
            for (q = 0; q <= a.length - 1; q++) k.x = a[q].x * n, k.y = a[q].y, k.z = a[q].x * l, f.push(k.x, k.y, k.z), m.x = u / b, m.y = q / (a.length - 1), g.push(m.x, m.y)
        }
        for (u = 0; u < b; u++)
            for (q =
                0; q < a.length - 1; q++) c = q + u * a.length, h = c + a.length, k = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, k, m);
        this.setIndex(e);
        this.addAttribute("position", new C(f, 3));
        this.addAttribute("uv", new C(g, 2));
        this.computeVertexNormals();
        if (d === 2 * Math.PI)
            for (d = this.attributes.normal.array, e = new p, f = new p, g = new p, c = b * a.length * 3, q = u = 0; u < a.length; u++, q += 3) e.x = d[q + 0], e.y = d[q + 1], e.z = d[q + 2], f.x = d[c + q + 0], f.y = d[c + q + 1], f.z = d[c + q + 2], g.addVectors(e, f).normalize(), d[q + 0] = d[c + q + 0] = g.x, d[q + 1] = d[c + q + 1] = g.y, d[q + 2] = d[c + q + 2] = g.z
    }

    function Zb(a,
        b) {
        M.call(this);
        this.type = "ShapeGeometry";
        "object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), b = b.curveSegments);
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        this.fromBufferGeometry(new $b(a, b));
        this.mergeVertices()
    }

    function $b(a, b) {
        function c(a) {
            var c, h, m = e.length / 3;
            a = a.extractPoints(b);
            var l = a.shape,
                t = a.holes;
            if (!1 === za.isClockWise(l))
                for (l = l.reverse(), a = 0, c = t.length; a < c; a++) h = t[a], !0 === za.isClockWise(h) && (t[a] = h.reverse());
            var p = za.triangulateShape(l, t);
            a = 0;
            for (c = t.length; a < c; a++) h = t[a], l = l.concat(h);
            a = 0;
            for (c = l.length; a < c; a++) h = l[a], e.push(h.x, h.y, 0), f.push(0, 0, 1), g.push(h.x, h.y);
            a = 0;
            for (c = p.length; a < c; a++) l = p[a], d.push(l[0] + m, l[1] + m, l[2] + m), k += 3
        }
        I.call(this);
        this.type = "ShapeBufferGeometry";
        this.parameters = {
            shapes: a,
            curveSegments: b
        };
        b = b || 12;
        var d = [],
            e = [],
            f = [],
            g = [],
            h = 0,
            k = 0;
        if (!1 === Array.isArray(a)) c(a);
        else
            for (var m = 0; m < a.length; m++) c(a[m]), this.addGroup(h, k, m), h += k, k = 0;
        this.setIndex(d);
        this.addAttribute("position", new C(e, 3));
        this.addAttribute("normal",
            new C(f, 3));
        this.addAttribute("uv", new C(g, 2))
    }

    function ac(a, b) {
        I.call(this);
        this.type = "EdgesGeometry";
        this.parameters = {
            thresholdAngle: b
        };
        var c = [],
            d = Math.cos(Y.DEG2RAD * (void 0 !== b ? b : 1)),
            e = [0, 0],
            f = {},
            g, h, k = ["a", "b", "c"],
            m;
        a.isBufferGeometry ? (m = new M, m.fromBufferGeometry(a)) : m = a.clone();
        m.mergeVertices();
        m.computeFaceNormals();
        var u = m.vertices;
        m = m.faces;
        for (var l = 0, n = m.length; l < n; l++)
            for (var r = m[l], p = 0; 3 > p; p++) g = r[k[p]], h = r[k[(p + 1) % 3]], e[0] = Math.min(g, h), e[1] = Math.max(g, h), g = e[0] + "," + e[1], void 0 ===
                f[g] ? f[g] = {
                    index1: e[0],
                    index2: e[1],
                    face1: l,
                    face2: void 0
                } : f[g].face2 = l;
        for (g in f)
            if (e = f[g], void 0 === e.face2 || m[e.face1].normal.dot(m[e.face2].normal) <= d) k = u[e.index1], c.push(k.x, k.y, k.z), k = u[e.index2], c.push(k.x, k.y, k.z);
        this.addAttribute("position", new C(c, 3))
    }

    function ob(a, b, c, d, e, f, g, h) {
        M.call(this);
        this.type = "CylinderGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        this.fromBufferGeometry(new Wa(a, b, c, d, e,
            f, g, h));
        this.mergeVertices()
    }

    function Wa(a, b, c, d, e, f, g, h) {
        function k(c) {
            var e, f, k, t = new D,
                E = new p,
                F = 0,
                aa = !0 === c ? a : b,
                R = !0 === c ? 1 : -1;
            f = z;
            for (e = 1; e <= d; e++) l.push(0, y * R, 0), n.push(0, R, 0), r.push(.5, .5), z++;
            k = z;
            for (e = 0; e <= d; e++) {
                var C = e / d * h + g,
                    B = Math.cos(C),
                    C = Math.sin(C);
                E.x = aa * C;
                E.y = y * R;
                E.z = aa * B;
                l.push(E.x, E.y, E.z);
                n.push(0, R, 0);
                t.x = .5 * B + .5;
                t.y = .5 * C * R + .5;
                r.push(t.x, t.y);
                z++
            }
            for (e = 0; e < d; e++) t = f + e, E = k + e, !0 === c ? u.push(E, E + 1, t) : u.push(E + 1, E, t), F += 3;
            m.addGroup(x, F, !0 === c ? 1 : 2);
            x += F
        }
        I.call(this);
        this.type = "CylinderBufferGeometry";
        this.parameters = {
            radiusTop: a,
            radiusBottom: b,
            height: c,
            radialSegments: d,
            heightSegments: e,
            openEnded: f,
            thetaStart: g,
            thetaLength: h
        };
        var m = this;
        a = void 0 !== a ? a : 20;
        b = void 0 !== b ? b : 20;
        c = void 0 !== c ? c : 100;
        d = Math.floor(d) || 8;
        e = Math.floor(e) || 1;
        f = void 0 !== f ? f : !1;
        g = void 0 !== g ? g : 0;
        h = void 0 !== h ? h : 2 * Math.PI;
        var u = [],
            l = [],
            n = [],
            r = [],
            z = 0,
            t = [],
            y = c / 2,
            x = 0;
        (function() {
            var f, k, w = new p,
                O = new p,
                S = 0,
                E = (b - a) / c;
            for (k = 0; k <= e; k++) {
                var F = [],
                    aa = k / e,
                    C = aa * (b - a) + a;
                for (f = 0; f <= d; f++) {
                    var D = f / d,
                        B = D * h + g,
                        I = Math.sin(B),
                        B = Math.cos(B);
                    O.x = C *
                        I;
                    O.y = -aa * c + y;
                    O.z = C * B;
                    l.push(O.x, O.y, O.z);
                    w.set(I, E, B).normalize();
                    n.push(w.x, w.y, w.z);
                    r.push(D, 1 - aa);
                    F.push(z++)
                }
                t.push(F)
            }
            for (f = 0; f < d; f++)
                for (k = 0; k < e; k++) w = t[k + 1][f], O = t[k + 1][f + 1], E = t[k][f + 1], u.push(t[k][f], w, E), u.push(w, O, E), S += 6;
            m.addGroup(x, S, 0);
            x += S
        })();
        !1 === f && (0 < a && k(!0), 0 < b && k(!1));
        this.setIndex(u);
        this.addAttribute("position", new C(l, 3));
        this.addAttribute("normal", new C(n, 3));
        this.addAttribute("uv", new C(r, 2))
    }

    function Sc(a, b, c, d, e, f, g) {
        ob.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }

    function Tc(a, b, c, d, e, f, g) {
        Wa.call(this, 0, a, b, c, d, e, f, g);
        this.type = "ConeBufferGeometry";
        this.parameters = {
            radius: a,
            height: b,
            radialSegments: c,
            heightSegments: d,
            openEnded: e,
            thetaStart: f,
            thetaLength: g
        }
    }

    function Uc(a, b, c, d) {
        M.call(this);
        this.type = "CircleGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        this.fromBufferGeometry(new bc(a, b, c, d));
        this.mergeVertices()
    }

    function bc(a,
        b, c, d) {
        I.call(this);
        this.type = "CircleBufferGeometry";
        this.parameters = {
            radius: a,
            segments: b,
            thetaStart: c,
            thetaLength: d
        };
        a = a || 50;
        b = void 0 !== b ? Math.max(3, b) : 8;
        c = void 0 !== c ? c : 0;
        d = void 0 !== d ? d : 2 * Math.PI;
        var e = [],
            f = [],
            g = [],
            h = [],
            k, m, u = new p,
            l = new D;
        f.push(0, 0, 0);
        g.push(0, 0, 1);
        h.push(.5, .5);
        m = 0;
        for (k = 3; m <= b; m++, k += 3) {
            var n = c + m / b * d;
            u.x = a * Math.cos(n);
            u.y = a * Math.sin(n);
            f.push(u.x, u.y, u.z);
            g.push(0, 0, 1);
            l.x = (f[k] / a + 1) / 2;
            l.y = (f[k + 1] / a + 1) / 2;
            h.push(l.x, l.y)
        }
        for (k = 1; k <= b; k++) e.push(k, k + 1, 0);
        this.setIndex(e);
        this.addAttribute("position",
            new C(f, 3));
        this.addAttribute("normal", new C(g, 3));
        this.addAttribute("uv", new C(h, 2))
    }

    function cc(a) {
        Ea.call(this, {
            uniforms: Ha.merge([V.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: U.shadow_vert,
            fragmentShader: U.shadow_frag
        });
        this.transparent = this.lights = !0;
        Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(a) {
                    this.uniforms.opacity.value = a
                }
            }
        });
        this.setValues(a)
    }

    function dc(a) {
        Ea.call(this, a);
        this.type = "RawShaderMaterial"
    }

    function Ra(a) {
        Z.call(this);
        this.defines = {
            STANDARD: ""
        };
        this.type = "MeshStandardMaterial";
        this.color = new H(16777215);
        this.metalness = this.roughness = .5;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalScale = new D(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
        this.envMapIntensity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }

    function pb(a) {
        Ra.call(this);
        this.defines = {
            PHYSICAL: ""
        };
        this.type = "MeshPhysicalMaterial";
        this.reflectivity = .5;
        this.clearCoatRoughness = this.clearCoat = 0;
        this.setValues(a)
    }

    function ta(a) {
        Z.call(this);
        this.type = "MeshPhongMaterial";
        this.color = new H(16777215);
        this.specular = new H(1118481);
        this.shininess =
            30;
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H(0);
        this.emissiveIntensity = 1;
        this.bumpMap = this.emissiveMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalScale = new D(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = this.alphaMap = this.specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap =
            "round";
        this.morphNormals = this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }

    function qb(a) {
        ta.call(this);
        this.defines = {
            TOON: ""
        };
        this.type = "MeshToonMaterial";
        this.gradientMap = null;
        this.setValues(a)
    }

    function rb(a) {
        Z.call(this, a);
        this.type = "MeshNormalMaterial";
        this.bumpMap = null;
        this.bumpScale = 1;
        this.normalMap = null;
        this.normalScale = new D(1, 1);
        this.displacementMap = null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this.morphTargets = this.skinning =
            this.lights = this.fog = !1;
        this.setValues(a)
    }

    function sb(a) {
        Z.call(this);
        this.type = "MeshLambertMaterial";
        this.color = new H(16777215);
        this.lightMap = this.map = null;
        this.lightMapIntensity = 1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.emissive = new H(0);
        this.emissiveIntensity = 1;
        this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin = this.wireframeLinecap = "round";
        this.morphNormals =
            this.morphTargets = this.skinning = !1;
        this.setValues(a)
    }

    function tb(a) {
        Z.call(this);
        this.type = "LineDashedMaterial";
        this.color = new H(16777215);
        this.scale = this.linewidth = 1;
        this.dashSize = 3;
        this.gapSize = 1;
        this.lights = !1;
        this.setValues(a)
    }

    function Zd(a, b, c) {
        var d = this,
            e = !1,
            f = 0,
            g = 0;
        this.onStart = void 0;
        this.onLoad = a;
        this.onProgress = b;
        this.onError = c;
        this.itemStart = function(a) {
            g++;
            if (!1 === e && void 0 !== d.onStart) d.onStart(a, f, g);
            e = !0
        };
        this.itemEnd = function(a) {
            f++;
            if (void 0 !== d.onProgress) d.onProgress(a, f, g);
            if (f ===
                g && (e = !1, void 0 !== d.onLoad)) d.onLoad()
        };
        this.itemError = function(a) {
            if (void 0 !== d.onError) d.onError(a)
        }
    }

    function ua(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function Qe(a) {
        this.manager = void 0 !== a ? a : Aa;
        this._parser = null
    }

    function $d(a) {
        this.manager = void 0 !== a ? a : Aa;
        this._parser = null
    }

    function Vc(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function ae(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function sd(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function ia(a, b) {
        B.call(this);
        this.type = "Light";
        this.color = new H(a);
        this.intensity = void 0 !== b ? b : 1;
        this.receiveShadow = void 0
    }

    function td(a, b, c) {
        ia.call(this, a, c);
        this.type = "HemisphereLight";
        this.castShadow = void 0;
        this.position.copy(B.DefaultUp);
        this.updateMatrix();
        this.groundColor = new H(b)
    }

    function ub(a) {
        this.camera = a;
        this.bias = 0;
        this.radius = 1;
        this.mapSize = new D(512, 512);
        this.map = null;
        this.matrix = new J
    }

    function ud() {
        ub.call(this, new ya(50, 1, .5, 500))
    }

    function vd(a, b, c, d, e, f) {
        ia.call(this, a, b);
        this.type = "SpotLight";
        this.position.copy(B.DefaultUp);
        this.updateMatrix();
        this.target = new B;
        Object.defineProperty(this,
            "power", {
                get: function() {
                    return this.intensity * Math.PI
                },
                set: function(a) {
                    this.intensity = a / Math.PI
                }
            });
        this.distance = void 0 !== c ? c : 0;
        this.angle = void 0 !== d ? d : Math.PI / 3;
        this.penumbra = void 0 !== e ? e : 0;
        this.decay = void 0 !== f ? f : 1;
        this.shadow = new ud
    }

    function wd(a, b, c, d) {
        ia.call(this, a, b);
        this.type = "PointLight";
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(a) {
                this.intensity = a / (4 * Math.PI)
            }
        });
        this.distance = void 0 !== c ? c : 0;
        this.decay = void 0 !== d ? d : 1;
        this.shadow = new ub(new ya(90,
            1, .5, 500))
    }

    function xd() {
        ub.call(this, new Jb(-5, 5, 5, -5, .5, 500))
    }

    function yd(a, b) {
        ia.call(this, a, b);
        this.type = "DirectionalLight";
        this.position.copy(B.DefaultUp);
        this.updateMatrix();
        this.target = new B;
        this.shadow = new xd
    }

    function zd(a, b) {
        ia.call(this, a, b);
        this.type = "AmbientLight";
        this.castShadow = void 0
    }

    function Ad(a, b, c, d) {
        ia.call(this, a, b);
        this.type = "RectAreaLight";
        this.position.set(0, 1, 0);
        this.updateMatrix();
        this.width = void 0 !== c ? c : 10;
        this.height = void 0 !== d ? d : 10
    }

    function Da(a, b, c, d) {
        this.parameterPositions =
            a;
        this._cachedIndex = 0;
        this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
        this.sampleValues = b;
        this.valueSize = c
    }

    function Bd(a, b, c, d) {
        Da.call(this, a, b, c, d);
        this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
    }

    function Wc(a, b, c, d) {
        Da.call(this, a, b, c, d)
    }

    function Cd(a, b, c, d) {
        Da.call(this, a, b, c, d)
    }

    function vb(a, b, c, d) {
        if (void 0 === a) throw Error("track name is undefined");
        if (void 0 === b || 0 === b.length) throw Error("no keyframes in track named " + a);
        this.name = a;
        this.times = va.convertArray(b, this.TimeBufferType);
        this.values = va.convertArray(c, this.ValueBufferType);
        this.setInterpolation(d || this.DefaultInterpolation);
        this.validate();
        this.optimize()
    }

    function ec(a, b, c, d) {
        vb.call(this, a, b, c, d)
    }

    function Dd(a, b, c, d) {
        Da.call(this, a, b, c, d)
    }

    function Xc(a, b, c, d) {
        vb.call(this, a, b, c, d)
    }

    function fc(a, b, c, d) {
        vb.call(this, a, b, c, d)
    }

    function Ed(a, b, c, d) {
        vb.call(this, a, b, c, d)
    }

    function Fd(a, b, c) {
        vb.call(this, a, b, c)
    }

    function Gd(a, b, c, d) {
        vb.call(this, a, b, c, d)
    }

    function wb(a, b, c, d) {
        vb.apply(this, arguments)
    }

    function Ba(a, b, c) {
        this.name =
            a;
        this.tracks = c;
        this.duration = void 0 !== b ? b : -1;
        this.uuid = Y.generateUUID();
        0 > this.duration && this.resetDuration();
        this.optimize()
    }

    function Hd(a) {
        this.manager = void 0 !== a ? a : Aa;
        this.textures = {}
    }

    function be(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function gc() {
        this.onLoadStart = function() {};
        this.onLoadProgress = function() {};
        this.onLoadComplete = function() {}
    }

    function ce(a) {
        "boolean" === typeof a && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), a = void 0);
        this.manager = void 0 !==
            a ? a : Aa;
        this.withCredentials = !1
    }

    function Re(a) {
        this.manager = void 0 !== a ? a : Aa;
        this.texturePath = ""
    }

    function Se(a, b, c, d, e) {
        b = .5 * (d - b);
        e = .5 * (e - c);
        var f = a * a;
        return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c
    }

    function xb(a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * (1 - a) * a * c + a * a * d
    }

    function yb(a, b, c, d, e) {
        var f = 1 - a,
            g = 1 - a;
        return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
    }

    function ma() {
        this.arcLengthDivisions = 200
    }

    function Sa(a, b) {
        this.arcLengthDivisions = 200;
        this.v1 = a;
        this.v2 = b
    }

    function Yc() {
        this.arcLengthDivisions = 200;
        this.curves =
            [];
        this.autoClose = !1
    }

    function Xa(a, b, c, d, e, f, g, h) {
        this.arcLengthDivisions = 200;
        this.aX = a;
        this.aY = b;
        this.xRadius = c;
        this.yRadius = d;
        this.aStartAngle = e;
        this.aEndAngle = f;
        this.aClockwise = g;
        this.aRotation = h || 0
    }

    function zb(a) {
        this.arcLengthDivisions = 200;
        this.points = void 0 === a ? [] : a
    }

    function hc(a, b, c, d) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c;
        this.v3 = d
    }

    function ic(a, b, c) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c
    }

    function Zc(a) {
        Yc.call(this);
        this.currentPoint = new D;
        a && this.fromPoints(a)
    }

    function Ab() {
        Zc.apply(this, arguments);
        this.holes = []
    }

    function de() {
        this.subPaths = [];
        this.currentPath = null
    }

    function ee(a) {
        this.data = a
    }

    function Te(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function fe(a) {
        this.manager = void 0 !== a ? a : Aa
    }

    function Ue() {
        this.type = "StereoCamera";
        this.aspect = 1;
        this.eyeSep = .064;
        this.cameraL = new ya;
        this.cameraL.layers.enable(1);
        this.cameraL.matrixAutoUpdate = !1;
        this.cameraR = new ya;
        this.cameraR.layers.enable(2);
        this.cameraR.matrixAutoUpdate = !1
    }

    function Id(a, b, c) {
        B.call(this);
        this.type = "CubeCamera";
        var d = new ya(90, 1, a, b);
        d.up.set(0, -1, 0);
        d.lookAt(new p(1, 0, 0));
        this.add(d);
        var e = new ya(90, 1, a, b);
        e.up.set(0, -1, 0);
        e.lookAt(new p(-1, 0, 0));
        this.add(e);
        var f = new ya(90, 1, a, b);
        f.up.set(0, 0, 1);
        f.lookAt(new p(0, 1, 0));
        this.add(f);
        var g = new ya(90, 1, a, b);
        g.up.set(0, 0, -1);
        g.lookAt(new p(0, -1, 0));
        this.add(g);
        var h = new ya(90, 1, a, b);
        h.up.set(0, -1, 0);
        h.lookAt(new p(0, 0, 1));
        this.add(h);
        var k = new ya(90, 1, a, b);
        k.up.set(0, -1, 0);
        k.lookAt(new p(0, 0, -1));
        this.add(k);
        this.renderTarget = new Eb(c, c, {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        });
        this.renderTarget.texture.name = "CubeCamera";
        this.updateCubeMap = function(a, b) {
            null === this.parent && this.updateMatrixWorld();
            var c = this.renderTarget,
                n = c.texture.generateMipmaps;
            c.texture.generateMipmaps = !1;
            c.activeCubeFace = 0;
            a.render(b, d, c);
            c.activeCubeFace = 1;
            a.render(b, e, c);
            c.activeCubeFace = 2;
            a.render(b, f, c);
            c.activeCubeFace = 3;
            a.render(b, g, c);
            c.activeCubeFace = 4;
            a.render(b, h, c);
            c.texture.generateMipmaps = n;
            c.activeCubeFace = 5;
            a.render(b, k, c);
            a.setRenderTarget(null)
        }
    }

    function ge(a) {
        ya.call(this);
        this.enabled = !1;
        this.cameras = a || []
    }

    function he() {
        B.call(this);
        this.type = "AudioListener";
        this.context = ie.getContext();
        this.gain = this.context.createGain();
        this.gain.connect(this.context.destination);
        this.filter = null
    }

    function jc(a) {
        B.call(this);
        this.type = "Audio";
        this.context = a.context;
        this.gain = this.context.createGain();
        this.gain.connect(a.getInput());
        this.autoplay = !1;
        this.buffer = null;
        this.loop = !1;
        this.startTime = 0;
        this.playbackRate = 1;
        this.isPlaying = !1;
        this.hasPlaybackControl = !0;
        this.sourceType = "empty";
        this.filters = []
    }

    function je(a) {
        jc.call(this, a);
        this.panner = this.context.createPanner();
        this.panner.connect(this.gain)
    }

    function ke(a, b) {
        this.analyser = a.context.createAnalyser();
        this.analyser.fftSize = void 0 !== b ? b : 2048;
        this.data = new Uint8Array(this.analyser.frequencyBinCount);
        a.getOutput().connect(this.analyser)
    }

    function le(a, b, c) {
        this.binding = a;
        this.valueSize = c;
        a = Float64Array;
        switch (b) {
            case "quaternion":
                b = this._slerp;
                break;
            case "string":
            case "bool":
                a = Array;
                b = this._select;
                break;
            default:
                b = this._lerp
        }
        this.buffer =
            new a(4 * c);
        this._mixBufferRegion = b;
        this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }

    function Ve(a, b, c) {
        c = c || na.parseTrackName(b);
        this._targetGroup = a;
        this._bindings = a.subscribe_(b, c)
    }

    function na(a, b, c) {
        this.path = b;
        this.parsedPath = c || na.parseTrackName(b);
        this.node = na.findNode(a, this.parsedPath.nodeName) || a;
        this.rootNode = a
    }

    function We(a) {
        this.uuid = Y.generateUUID();
        this._objects = Array.prototype.slice.call(arguments);
        this.nCachedObjects_ = 0;
        var b = {};
        this._indicesByUUID = b;
        for (var c = 0, d = arguments.length; c !==
            d; ++c) b[arguments[c].uuid] = c;
        this._paths = [];
        this._parsedPaths = [];
        this._bindings = [];
        this._bindingsIndicesByPath = {};
        var e = this;
        this.stats = {
            objects: {get total() {
                    return e._objects.length
                },
                get inUse() {
                    return this.total - e.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return e._bindings.length
            }
        }
    }

    function Xe(a, b, c) {
        this._mixer = a;
        this._clip = b;
        this._localRoot = c || null;
        a = b.tracks;
        b = a.length;
        c = Array(b);
        for (var d = {
                endingStart: 2400,
                endingEnd: 2400
            }, e = 0; e !== b; ++e) {
            var f = a[e].createInterpolant(null);
            c[e] = f;
            f.settings =
                d
        }
        this._interpolantSettings = d;
        this._interpolants = c;
        this._propertyBindings = Array(b);
        this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
        this.loop = 2201;
        this._loopCount = -1;
        this._startTime = null;
        this.time = 0;
        this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
        this.repetitions = Infinity;
        this.paused = !1;
        this.enabled = !0;
        this.clampWhenFinished = !1;
        this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }

    function Ye(a) {
        this._root = a;
        this._initMemoryManager();
        this.time = this._accuIndex = 0;
        this.timeScale = 1
    }

    function Jd(a, b) {
        "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
        this.value = a
    }

    function me() {
        I.call(this);
        this.type = "InstancedBufferGeometry";
        this.maxInstancedCount = void 0
    }

    function ne(a, b, c, d) {
        this.uuid = Y.generateUUID();
        this.data = a;
        this.itemSize = b;
        this.offset = c;
        this.normalized = !0 === d
    }

    function kc(a, b) {
        this.uuid = Y.generateUUID();
        this.array = a;
        this.stride = b;
        this.count = void 0 !== a ? a.length / b : 0;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0,
            count: -1
        };
        this.onUploadCallback = function() {};
        this.version = 0
    }

    function oe(a, b, c) {
        kc.call(this, a, b);
        this.meshPerAttribute = c || 1
    }

    function pe(a, b, c) {
        L.call(this, a, b);
        this.meshPerAttribute = c || 1
    }

    function Ze(a, b, c, d) {
        this.ray = new hb(a, b);
        this.near = c || 0;
        this.far = d || Infinity;
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points
                }
            }
        })
    }

    function $e(a, b) {
        return a.distance - b.distance
    }

    function qe(a, b, c, d) {
        if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
            a = a.children;
            d = 0;
            for (var e = a.length; d < e; d++) qe(a[d], b, c, !0)
        }
    }

    function af(a) {
        this.autoStart = void 0 !== a ? a : !0;
        this.elapsedTime = this.oldTime = this.startTime = 0;
        this.running = !1
    }

    function bf(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.phi = void 0 !== b ? b : 0;
        this.theta = void 0 !== c ? c : 0;
        return this
    }

    function cf(a, b, c) {
        this.radius = void 0 !== a ? a : 1;
        this.theta = void 0 !== b ? b : 0;
        this.y = void 0 !== c ? c : 0;
        return this
    }

    function ra(a,
        b) {
        xa.call(this, a, b);
        this.animationsMap = {};
        this.animationsList = [];
        var c = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, c - 1, c / 1);
        this.setAnimationWeight("__default", 1)
    }

    function $c(a) {
        B.call(this);
        this.material = a;
        this.render = function(a) {}
    }

    function ad(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16711680;
        d = void 0 !== d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = 3 * c.faces.length : c && c.isBufferGeometry && (b = c.attributes.normal.count);
        c = new I;
        b = new C(6 * b, 3);
        c.addAttribute("position",
            b);
        da.call(this, c, new pa({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }

    function lc(a) {
        B.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        a = new I;
        for (var b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], c = 0, d = 1; 32 > c; c++, d++) {
            var e = c / 32 * Math.PI * 2,
                f = d / 32 * Math.PI * 2;
            b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1)
        }
        a.addAttribute("position", new C(b, 3));
        b = new pa({
            fog: !1
        });
        this.cone = new da(a, b);
        this.add(this.cone);
        this.update()
    }

    function mc(a) {
        this.bones = this.getBoneList(a);
        for (var b = new I, c = [], d = [], e = new H(0, 0, 1), f = new H(0, 1, 0), g = 0; g < this.bones.length; g++) {
            var h = this.bones[g];
            h.parent && h.parent.isBone && (c.push(0, 0, 0), c.push(0, 0, 0), d.push(e.r, e.g, e.b), d.push(f.r, f.g, f.b))
        }
        b.addAttribute("position", new C(c, 3));
        b.addAttribute("color", new C(d, 3));
        c = new pa({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        da.call(this, b, c);
        this.root = a;
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.update()
    }

    function nc(a,
        b) {
        this.light = a;
        this.light.updateMatrixWorld();
        var c = new nb(b, 4, 2),
            d = new Ia({
                wireframe: !0,
                fog: !1
            });
        d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
        xa.call(this, c, d);
        this.matrix = this.light.matrixWorld;
        this.matrixAutoUpdate = !1
    }

    function oc(a) {
        B.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        var b = new Ia({
            color: a.color,
            fog: !1
        });
        a = new Ia({
            color: a.color,
            fog: !1,
            wireframe: !0
        });
        var c = new I;
        c.addAttribute("position", new L(new Float32Array(18), 3));
        this.add(new xa(c, b));
        this.add(new xa(c,
            a));
        this.update()
    }

    function pc(a, b) {
        B.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        var c = new mb(b);
        c.rotateY(.5 * Math.PI);
        var d = new Ia({
                vertexColors: 2,
                wireframe: !0
            }),
            e = c.getAttribute("position"),
            e = new Float32Array(3 * e.count);
        c.addAttribute("color", new L(e, 3));
        this.add(new xa(c, d));
        this.update()
    }

    function bd(a, b, c, d) {
        a = a || 10;
        b = b || 10;
        c = new H(void 0 !== c ? c : 4473924);
        d = new H(void 0 !== d ? d : 8947848);
        var e = b / 2,
            f = a / b,
            g = a / 2;
        a = [];
        for (var h = [], k = 0, m = 0, u = -g; k <= b; k++, u += f) {
            a.push(-g, 0, u, g, 0, u);
            a.push(u, 0, -g, u, 0, g);
            var l = k === e ? c : d;
            l.toArray(h, m);
            m += 3;
            l.toArray(h, m);
            m += 3;
            l.toArray(h, m);
            m += 3;
            l.toArray(h, m);
            m += 3
        }
        b = new I;
        b.addAttribute("position", new C(a, 3));
        b.addAttribute("color", new C(h, 3));
        c = new pa({
            vertexColors: 2
        });
        da.call(this, b, c)
    }

    function Kd(a, b, c, d, e, f) {
        a = a || 10;
        b = b || 16;
        c = c || 8;
        d = d || 64;
        e = new H(void 0 !== e ? e : 4473924);
        f = new H(void 0 !== f ? f : 8947848);
        var g = [],
            h = [],
            k, m, u, l, n;
        for (u = 0; u <= b; u++) m = u / b * 2 * Math.PI, k = Math.sin(m) * a, m = Math.cos(m) * a, g.push(0, 0, 0),
            g.push(k, 0, m), n = u & 1 ? e : f, h.push(n.r, n.g, n.b), h.push(n.r, n.g, n.b);
        for (u = 0; u <= c; u++)
            for (n = u & 1 ? e : f, l = a - a / c * u, b = 0; b < d; b++) m = b / d * 2 * Math.PI, k = Math.sin(m) * l, m = Math.cos(m) * l, g.push(k, 0, m), h.push(n.r, n.g, n.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * l, m = Math.cos(m) * l, g.push(k, 0, m), h.push(n.r, n.g, n.b);
        a = new I;
        a.addAttribute("position", new C(g, 3));
        a.addAttribute("color", new C(h, 3));
        g = new pa({
            vertexColors: 2
        });
        da.call(this, a, g)
    }

    function cd(a, b, c, d) {
        this.object = a;
        this.size = void 0 !== b ? b : 1;
        a = void 0 !== c ? c : 16776960;
        d = void 0 !==
            d ? d : 1;
        b = 0;
        (c = this.object.geometry) && c.isGeometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        c = new I;
        b = new C(6 * b, 3);
        c.addAttribute("position", b);
        da.call(this, c, new pa({
            color: a,
            linewidth: d
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }

    function qc(a, b) {
        B.call(this);
        this.light = a;
        this.light.updateMatrixWorld();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        void 0 === b && (b = 1);
        var c = new I;
        c.addAttribute("position", new C([-b,
            b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0
        ], 3));
        var d = new pa({
            fog: !1
        });
        this.add(new La(c, d));
        c = new I;
        c.addAttribute("position", new C([0, 0, 0, 0, 0, 1], 3));
        this.add(new La(c, d));
        this.update()
    }

    function dd(a) {
        function b(a, b, d) {
            c(a, d);
            c(b, d)
        }

        function c(a, b) {
            f.push(0, 0, 0);
            g.push(b.r, b.g, b.b);
            void 0 === h[a] && (h[a] = []);
            h[a].push(f.length / 3 - 1)
        }
        var d = new I,
            e = new pa({
                color: 16777215,
                vertexColors: 1
            }),
            f = [],
            g = [],
            h = {},
            k = new H(16755200),
            m = new H(16711680),
            u = new H(43775),
            l = new H(16777215),
            n = new H(3355443);
        b("n1", "n2", k);
        b("n2", "n4",
            k);
        b("n4", "n3", k);
        b("n3", "n1", k);
        b("f1", "f2", k);
        b("f2", "f4", k);
        b("f4", "f3", k);
        b("f3", "f1", k);
        b("n1", "f1", k);
        b("n2", "f2", k);
        b("n3", "f3", k);
        b("n4", "f4", k);
        b("p", "n1", m);
        b("p", "n2", m);
        b("p", "n3", m);
        b("p", "n4", m);
        b("u1", "u2", u);
        b("u2", "u3", u);
        b("u3", "u1", u);
        b("c", "t", l);
        b("p", "c", n);
        b("cn1", "cn2", n);
        b("cn3", "cn4", n);
        b("cf1", "cf2", n);
        b("cf3", "cf4", n);
        d.addAttribute("position", new C(f, 3));
        d.addAttribute("color", new C(g, 3));
        da.call(this, d, e);
        this.camera = a;
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
        this.matrix = a.matrixWorld;
        this.matrixAutoUpdate = !1;
        this.pointMap = h;
        this.update()
    }

    function Bb(a, b) {
        this.object = a;
        void 0 === b && (b = 16776960);
        var c = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            d = new Float32Array(24),
            e = new I;
        e.setIndex(new L(c, 1));
        e.addAttribute("position", new L(d, 3));
        da.call(this, e, new pa({
            color: b
        }));
        this.matrixAutoUpdate = !1;
        this.update()
    }

    function Cb(a, b, c, d, e, f) {
        B.call(this);
        void 0 === d && (d = 16776960);
        void 0 === c && (c = 1);
        void 0 === e && (e = .2 * c);
        void 0 === f && (f = .2 * e);
        void 0 ===
            Ld && (Ld = new I, Ld.addAttribute("position", new C([0, 0, 0, 0, 1, 0], 3)), re = new Wa(0, .5, 1, 5, 1), re.translate(0, -.5, 0));
        this.position.copy(b);
        this.line = new La(Ld, new pa({
            color: d
        }));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new xa(re, new Ia({
            color: d
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(a);
        this.setLength(c, e, f)
    }

    function Md(a) {
        a = a || 1;
        var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
        a = new I;
        a.addAttribute("position", new C(b, 3));
        a.addAttribute("color", new C([1, 0, 0,
            1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1
        ], 3));
        b = new pa({
            vertexColors: 2
        });
        da.call(this, a, b)
    }

    function se() {
        var a = 0,
            b = 0,
            c = 0,
            d = 0;
        return {
            initCatmullRom: function(e, f, g, h, k) {
                e = k * (g - e);
                h = k * (h - f);
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            initNonuniformCatmullRom: function(e, f, g, h, k, m, u) {
                e = ((f - e) / k - (g - e) / (k + m) + (g - f) / m) * m;
                h = ((g - f) / m - (h - f) / (m + u) + (h - g) / u) * m;
                a = f;
                b = e;
                c = -3 * f + 3 * g - 2 * e - h;
                d = 2 * f - 2 * g + e + h
            },
            calc: function(e) {
                var f = e * e;
                return a + b * e + c * f + d * f * e
            }
        }
    }

    function Ka(a) {
        this.arcLengthDivisions = 200;
        this.points = a || [];
        this.closed = !1
    }

    function ed(a, b, c, d) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c;
        this.v3 = d
    }

    function fd(a, b, c) {
        this.arcLengthDivisions = 200;
        this.v0 = a;
        this.v1 = b;
        this.v2 = c
    }

    function gd(a, b) {
        this.arcLengthDivisions = 200;
        this.v1 = a;
        this.v2 = b
    }

    function Nd(a, b, c, d, e, f) {
        Xa.call(this, a, b, c, c, d, e, f)
    }

    function df(a) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        Ka.call(this, a);
        this.type = "catmullrom";
        this.closed = !0
    }

    function ef(a) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
        Ka.call(this, a);
        this.type = "catmullrom"
    }

    function te(a) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
        Ka.call(this, a);
        this.type = "catmullrom"
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
    void 0 === Number.isInteger && (Number.isInteger = function(a) {
        return "number" === typeof a && isFinite(a) && Math.floor(a) === a
    });
    void 0 === Math.sign && (Math.sign = function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : +a
    });
    void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    });
    void 0 === Object.assign && function() {
        Object.assign = function(a) {
            if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (void 0 !== d && null !== d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e])
            }
            return b
        }
    }();
    Object.assign(sa.prototype, {
        addEventListener: function(a, b) {
            void 0 === this._listeners && (this._listeners = {});
            var c = this._listeners;
            void 0 === c[a] && (c[a] = []); - 1 === c[a].indexOf(b) && c[a].push(b)
        },
        hasEventListener: function(a, b) {
            if (void 0 === this._listeners) return !1;
            var c = this._listeners;
            return void 0 !== c[a] && -1 !== c[a].indexOf(b)
        },
        removeEventListener: function(a, b) {
            if (void 0 !== this._listeners) {
                var c = this._listeners[a];
                if (void 0 !== c) {
                    var d = c.indexOf(b); - 1 !== d && c.splice(d, 1)
                }
            }
        },
        dispatchEvent: function(a) {
            if (void 0 !== this._listeners) {
                var b = this._listeners[a.type];
                if (void 0 !== b) {
                    a.target = this;
                    var c = [],
                        d, e = b.length;
                    for (d = 0; d < e; d++) c[d] = b[d];
                    for (d = 0; d < e; d++) c[d].call(this, a)
                }
            }
        }
    });
    var Y = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                b = Array(36),
                c = 0,
                d;
            return function() {
                for (var e = 0; 36 > e; e++) 8 === e || 13 === e || 18 === e || 23 === e ? b[e] = "-" : 14 === e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 === e ? d & 3 | 8 : d]);
                return b.join("")
            }
        }(),
        clamp: function(a, b, c) {
            return Math.max(b, Math.min(c, a))
        },
        euclideanModulo: function(a,
            b) {
            return (a % b + b) % b
        },
        mapLinear: function(a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b)
        },
        lerp: function(a, b, c) {
            return (1 - c) * a + c * b
        },
        smoothstep: function(a, b, c) {
            if (a <= b) return 0;
            if (a >= c) return 1;
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        },
        smootherstep: function(a, b, c) {
            if (a <= b) return 0;
            if (a >= c) return 1;
            a = (a - b) / (c - b);
            return a * a * a * (a * (6 * a - 15) + 10)
        },
        randInt: function(a, b) {
            return a + Math.floor(Math.random() * (b - a + 1))
        },
        randFloat: function(a, b) {
            return a + Math.random() * (b - a)
        },
        randFloatSpread: function(a) {
            return a * (.5 - Math.random())
        },
        degToRad: function(a) {
            return a *
                Y.DEG2RAD
        },
        radToDeg: function(a) {
            return a * Y.RAD2DEG
        },
        isPowerOfTwo: function(a) {
            return 0 === (a & a - 1) && 0 !== a
        },
        nearestPowerOfTwo: function(a) {
            return Math.pow(2, Math.round(Math.log(a) / Math.LN2))
        },
        nextPowerOfTwo: function(a) {
            a--;
            a |= a >> 1;
            a |= a >> 2;
            a |= a >> 4;
            a |= a >> 8;
            a |= a >> 16;
            a++;
            return a
        }
    };
    Object.defineProperties(D.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(a) {
                this.x = a
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(a) {
                this.y = a
            }
        }
    });
    Object.assign(D.prototype, {
        isVector2: !0,
        set: function(a, b) {
            this.x =
                a;
            this.y = b;
            return this
        },
        setScalar: function(a) {
            this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(a) {
            this.x =
                a.x;
            this.y = a.y;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this
        },
        multiply: function(a) {
            this.x *= a.x;
            this.y *= a.y;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            return this
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            return this
        },
        max: function(a) {
            this.x =
                Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            return this
        },
        clampScalar: function() {
            var a = new D,
                b = new D;
            return function(c, d) {
                a.set(c, c);
                b.set(d, d);
                return this.clamp(a, b)
            }
        }(),
        clampLength: function(a, b) {
            var c = this.length();
            return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c)
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) +
                Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var a = Math.atan2(this.y, this.x);
            0 > a && (a += 2 * Math.PI);
            return a
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x;
            a = this.y - a.y;
            return b * b + a * a
        },
        distanceToManhattan: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y)
        },
        setLength: function(a) {
            return this.multiplyScalar(a / this.length())
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y +=
                (a.y - this.y) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            return this
        },
        rotateAround: function(a, b) {
            var c = Math.cos(b),
                d = Math.sin(b),
                e = this.x - a.x,
                f = this.y - a.y;
            this.x = e * c - f * d + a.x;
            this.y = e * d + f * c + a.y;
            return this
        }
    });
    var jf = 0;
    X.DEFAULT_IMAGE = void 0;
    X.DEFAULT_MAPPING = 300;
    Object.defineProperty(X.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(X.prototype, sa.prototype, {
        constructor: X,
        isTexture: !0,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.image = a.image;
            this.mipmaps = a.mipmaps.slice(0);
            this.mapping = a.mapping;
            this.wrapS = a.wrapS;
            this.wrapT = a.wrapT;
            this.magFilter = a.magFilter;
            this.minFilter = a.minFilter;
            this.anisotropy = a.anisotropy;
            this.format = a.format;
            this.type = a.type;
            this.offset.copy(a.offset);
            this.repeat.copy(a.repeat);
            this.generateMipmaps = a.generateMipmaps;
            this.premultiplyAlpha = a.premultiplyAlpha;
            this.flipY = a.flipY;
            this.unpackAlignment = a.unpackAlignment;
            this.encoding = a.encoding;
            return this
        },
        toJSON: function(a) {
            if (void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
            var b = {
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
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var c = this.image;
                void 0 === c.uuid && (c.uuid = Y.generateUUID());
                if (void 0 === a.images[c.uuid]) {
                    var d = a.images,
                        e = c.uuid,
                        f = c.uuid,
                        g;
                    void 0 !== c.toDataURL ? g = c : (g = document.createElementNS("http://www.w3.org/1999/xhtml",
                        "canvas"), g.width = c.width, g.height = c.height, g.getContext("2d").drawImage(c, 0, 0, c.width, c.height));
                    g = 2048 < g.width || 2048 < g.height ? g.toDataURL("image/jpeg", .6) : g.toDataURL("image/png");
                    d[e] = {
                        uuid: f,
                        url: g
                    }
                }
                b.image = c.uuid
            }
            return a.textures[this.uuid] = b
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(a) {
            if (300 === this.mapping) {
                a.multiply(this.repeat);
                a.add(this.offset);
                if (0 > a.x || 1 < a.x) switch (this.wrapS) {
                    case 1E3:
                        a.x -= Math.floor(a.x);
                        break;
                    case 1001:
                        a.x = 0 > a.x ? 0 : 1;
                        break;
                    case 1002:
                        a.x =
                            1 === Math.abs(Math.floor(a.x) % 2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x)
                }
                if (0 > a.y || 1 < a.y) switch (this.wrapT) {
                    case 1E3:
                        a.y -= Math.floor(a.y);
                        break;
                    case 1001:
                        a.y = 0 > a.y ? 0 : 1;
                        break;
                    case 1002:
                        a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y)
                }
                this.flipY && (a.y = 1 - a.y)
            }
        }
    });
    Object.assign(ga.prototype, {
        isVector4: !0,
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d;
            return this
        },
        setScalar: function(a) {
            this.w = this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setW: function(a) {
            this.w = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                case 2:
                    this.z = b;
                    break;
                case 3:
                    this.w = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x,
                this.y, this.z, this.w)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = void 0 !== a.w ? a.w : 1;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.w += a.w;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            this.w += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            this.w = a.w + b.w;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            this.w += a.w * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.w -= a.w;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            this.w -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            this.w = a.w - b.w;
            return this
        },
        multiplyScalar: function(a) {
            this.x *=
                a;
            this.y *= a;
            this.z *= a;
            this.w *= a;
            return this
        },
        applyMatrix4: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z,
                e = this.w;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        setAxisAngleFromQuaternion: function(a) {
            this.w = 2 * Math.acos(a.w);
            var b = Math.sqrt(1 - a.w * a.w);
            1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z /
                b);
            return this
        },
        setAxisAngleFromRotationMatrix: function(a) {
            var b, c, d;
            a = a.elements;
            var e = a[0];
            d = a[4];
            var f = a[8],
                g = a[1],
                h = a[5],
                k = a[9];
            c = a[2];
            b = a[6];
            var m = a[10];
            if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(k - b)) {
                if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + m - 3)) return this.set(1, 0, 0, 0), this;
                a = Math.PI;
                e = (e + 1) / 2;
                h = (h + 1) / 2;
                m = (m + 1) / 2;
                d = (d + g) / 4;
                f = (f + c) / 4;
                k = (k + b) / 4;
                e > h && e > m ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > m ? .01 > h ? (b = .707106781, c = 0, d = .707106781) :
                    (c = Math.sqrt(h), b = d / c, d = k / c) : .01 > m ? (c = b = .707106781, d = 0) : (d = Math.sqrt(m), b = f / d, c = k / d);
                this.set(b, c, d, a);
                return this
            }
            a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
            .001 > Math.abs(a) && (a = 1);
            this.x = (b - k) / a;
            this.y = (f - c) / a;
            this.z = (g - d) / a;
            this.w = Math.acos((e + h + m - 1) / 2);
            return this
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            this.w = Math.min(this.w, a.w);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z,
                a.z);
            this.w = Math.max(this.w, a.w);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            this.w = Math.max(a.w, Math.min(b.w, this.w));
            return this
        },
        clampScalar: function() {
            var a = new ga,
                b = new ga;
            return function(c, d) {
                a.set(c, c, c, c);
                b.set(d, d, d, d);
                return this.clamp(a, b)
            }
        }(),
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            this.w = Math.floor(this.w);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            this.w = Math.ceil(this.w);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            this.w = Math.round(this.w);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.w = -this.w;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(a) {
            return this.multiplyScalar(a / this.length())
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            this.w += (a.w - this.w) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            this.w = a[b + 3];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a =
                []);
            void 0 === b && (b = 0);
            a[b] = this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            a[b + 3] = this.w;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            this.w = a.getW(b);
            return this
        }
    });
    Object.assign(Db.prototype, sa.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.dispose();
            this.viewport.set(0, 0, a, b);
            this.scissor.set(0,
                0, a, b)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.width = a.width;
            this.height = a.height;
            this.viewport.copy(a.viewport);
            this.texture = a.texture.clone();
            this.depthBuffer = a.depthBuffer;
            this.stencilBuffer = a.stencilBuffer;
            this.depthTexture = a.depthTexture;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Eb.prototype = Object.create(Db.prototype);
    Eb.prototype.constructor = Eb;
    Eb.prototype.isWebGLRenderTargetCube = !0;
    Object.assign(qa, {
        slerp: function(a, b,
            c, d) {
            return c.copy(a).slerp(b, d)
        },
        slerpFlat: function(a, b, c, d, e, f, g) {
            var h = c[d + 0],
                k = c[d + 1],
                m = c[d + 2];
            c = c[d + 3];
            d = e[f + 0];
            var u = e[f + 1],
                l = e[f + 2];
            e = e[f + 3];
            if (c !== e || h !== d || k !== u || m !== l) {
                f = 1 - g;
                var n = h * d + k * u + m * l + c * e,
                    r = 0 <= n ? 1 : -1,
                    p = 1 - n * n;
                p > Number.EPSILON && (p = Math.sqrt(p), n = Math.atan2(p, n * r), f = Math.sin(f * n) / p, g = Math.sin(g * n) / p);
                r *= g;
                h = h * f + d * r;
                k = k * f + u * r;
                m = m * f + l * r;
                c = c * f + e * r;
                f === 1 - g && (g = 1 / Math.sqrt(h * h + k * k + m * m + c * c), h *= g, k *= g, m *= g, c *= g)
            }
            a[b] = h;
            a[b + 1] = k;
            a[b + 2] = m;
            a[b + 3] = c
        }
    });
    Object.defineProperties(qa.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z = a;
                this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(a) {
                this._w = a;
                this.onChangeCallback()
            }
        }
    });
    Object.assign(qa.prototype, {
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._w = d;
            this.onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z,
                this._w)
        },
        copy: function(a) {
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = a.w;
            this.onChangeCallback();
            return this
        },
        setFromEuler: function(a, b) {
            if (!1 === (a && a.isEuler)) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var c = a._x,
                d = a._y,
                e = a._z,
                f = a.order,
                g = Math.cos,
                h = Math.sin,
                k = g(c / 2),
                m = g(d / 2),
                g = g(e / 2),
                c = h(c / 2),
                d = h(d / 2),
                e = h(e / 2);
            "XYZ" === f ? (this._x = c * m * g + k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g - c * d * e) : "YXZ" === f ? (this._x = c * m * g +
                k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g + c * d * e) : "ZXY" === f ? (this._x = c * m * g - k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g - c * d * e) : "ZYX" === f ? (this._x = c * m * g - k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g + c * d * e) : "YZX" === f ? (this._x = c * m * g + k * d * e, this._y = k * d * g + c * m * e, this._z = k * m * e - c * d * g, this._w = k * m * g - c * d * e) : "XZY" === f && (this._x = c * m * g - k * d * e, this._y = k * d * g - c * m * e, this._z = k * m * e + c * d * g, this._w = k * m * g + c * d * e);
            if (!1 !== b) this.onChangeCallback();
            return this
        },
        setFromAxisAngle: function(a,
            b) {
            var c = b / 2,
                d = Math.sin(c);
            this._x = a.x * d;
            this._y = a.y * d;
            this._z = a.z * d;
            this._w = Math.cos(c);
            this.onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a) {
            var b = a.elements,
                c = b[0];
            a = b[4];
            var d = b[8],
                e = b[1],
                f = b[5],
                g = b[9],
                h = b[2],
                k = b[6],
                b = b[10],
                m = c + f + b;
            0 < m ? (c = .5 / Math.sqrt(m + 1), this._w = .25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y =
                .25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = .25 * c);
            this.onChangeCallback();
            return this
        },
        setFromUnitVectors: function() {
            var a = new p,
                b;
            return function(c, d) {
                void 0 === a && (a = new p);
                b = c.dot(d) + 1;
                1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
                this._x = a.x;
                this._y = a.y;
                this._z = a.z;
                this._w = b;
                return this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            this._x *=
                -1;
            this._y *= -1;
            this._z *= -1;
            this.onChangeCallback();
            return this
        },
        dot: function(a) {
            return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
            this.onChangeCallback();
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
        },
        premultiply: function(a) {
            return this.multiplyQuaternions(a, this)
        },
        multiplyQuaternions: function(a, b) {
            var c = a._x,
                d = a._y,
                e = a._z,
                f = a._w,
                g = b._x,
                h = b._y,
                k = b._z,
                m = b._w;
            this._x = c * m + f * g + d * k - e * h;
            this._y = d * m + f * h + e * g - c * k;
            this._z = e * m + f * k + c * h - d * g;
            this._w = f * m - c * g - d * h - e * k;
            this.onChangeCallback();
            return this
        },
        slerp: function(a, b) {
            if (0 === b) return this;
            if (1 === b) return this.copy(a);
            var c = this._x,
                d = this._y,
                e = this._z,
                f = this._w,
                g = f * a._w + c * a._x + d * a._y + e * a._z;
            0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
            if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
            var h = Math.sqrt(1 - g * g);
            if (.001 > Math.abs(h)) return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
            var k = Math.atan2(h, g),
                g = Math.sin((1 - b) * k) / h,
                h = Math.sin(b *
                    k) / h;
            this._w = f * g + this._w * h;
            this._x = c * g + this._x * h;
            this._y = d * g + this._y * h;
            this._z = e * g + this._z * h;
            this.onChangeCallback();
            return this
        },
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this._x = a[b];
            this._y = a[b + 1];
            this._z = a[b + 2];
            this._w = a[b + 3];
            this.onChangeCallback();
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._w;
            return a
        },
        onChange: function(a) {
            this.onChangeCallback =
                a;
            return this
        },
        onChangeCallback: function() {}
    });
    Object.assign(p.prototype, {
        isVector3: !0,
        set: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        },
        setScalar: function(a) {
            this.z = this.y = this.x = a;
            return this
        },
        setX: function(a) {
            this.x = a;
            return this
        },
        setY: function(a) {
            this.y = a;
            return this
        },
        setZ: function(a) {
            this.z = a;
            return this
        },
        setComponent: function(a, b) {
            switch (a) {
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                case 2:
                    this.z = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
            return this
        },
        getComponent: function(a) {
            switch (a) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        },
        addScalar: function(a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this
        },
        addVectors: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this
        },
        addScaledVector: function(a, b) {
            this.x += a.x * b;
            this.y += a.y * b;
            this.z += a.z * b;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        },
        subScalar: function(a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            return this
        },
        subVectors: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z =
                a.z - b.z;
            return this
        },
        multiply: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        },
        multiplyScalar: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return this
        },
        multiplyVectors: function(a, b) {
            this.x = a.x * b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this
        },
        applyEuler: function() {
            var a = new qa;
            return function(b) {
                !1 === (b && b.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
                return this.applyQuaternion(a.setFromEuler(b))
            }
        }(),
        applyAxisAngle: function() {
            var a = new qa;
            return function(b, c) {
                return this.applyQuaternion(a.setFromAxisAngle(b, c))
            }
        }(),
        applyMatrix3: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6] * d;
            this.y = a[1] * b + a[4] * c + a[7] * d;
            this.z = a[2] * b + a[5] * c + a[8] * d;
            return this
        },
        applyMatrix4: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
            return this.divideScalar(a[3] * b + a[7] * c + a[11] * d + a[15])
        },
        applyQuaternion: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z,
                e = a.x,
                f = a.y,
                g = a.z;
            a = a.w;
            var h = a * b + f * d - g * c,
                k = a * c + g * b - e * d,
                m = a * d + e * c - f * b,
                b = -e * b - f * c - g * d;
            this.x = h * a + b * -e + k * -g - m * -f;
            this.y = k * a + b * -f + m * -e - h * -g;
            this.z = m * a + b * -g + h * -f - k * -e;
            return this
        },
        project: function() {
            var a = new J;
            return function(b) {
                a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
                return this.applyMatrix4(a)
            }
        }(),
        unproject: function() {
            var a = new J;
            return function(b) {
                a.multiplyMatrices(b.matrixWorld,
                    a.getInverse(b.projectionMatrix));
                return this.applyMatrix4(a)
            }
        }(),
        transformDirection: function(a) {
            var b = this.x,
                c = this.y,
                d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d;
            this.y = a[1] * b + a[5] * c + a[9] * d;
            this.z = a[2] * b + a[6] * c + a[10] * d;
            return this.normalize()
        },
        divide: function(a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this
        },
        divideScalar: function(a) {
            return this.multiplyScalar(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            return this
        },
        max: function(a) {
            this.x =
                Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            return this
        },
        clamp: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            return this
        },
        clampScalar: function() {
            var a = new p,
                b = new p;
            return function(c, d) {
                a.set(c, c, c);
                b.set(d, d, d);
                return this.clamp(a, b)
            }
        }(),
        clampLength: function(a, b) {
            var c = this.length();
            return this.multiplyScalar(Math.max(a, Math.min(b, c)) / c)
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this
        },
        roundToZero: function() {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            return this
        },
        negate: function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(a) {
            return this.multiplyScalar(a / this.length())
        },
        lerp: function(a, b) {
            this.x += (a.x - this.x) *
                b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            return this
        },
        lerpVectors: function(a, b, c) {
            return this.subVectors(b, a).multiplyScalar(c).add(a)
        },
        cross: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
            var c = this.x,
                d = this.y,
                e = this.z;
            this.x = d * a.z - e * a.y;
            this.y = e * a.x - c * a.z;
            this.z = c * a.y - d * a.x;
            return this
        },
        crossVectors: function(a, b) {
            var c = a.x,
                d = a.y,
                e = a.z,
                f = b.x,
                g = b.y,
                h = b.z;
            this.x = d * h - e * g;
            this.y =
                e * f - c * h;
            this.z = c * g - d * f;
            return this
        },
        projectOnVector: function(a) {
            var b = a.dot(this) / a.lengthSq();
            return this.copy(a).multiplyScalar(b)
        },
        projectOnPlane: function() {
            var a = new p;
            return function(b) {
                a.copy(this).projectOnVector(b);
                return this.sub(a)
            }
        }(),
        reflect: function() {
            var a = new p;
            return function(b) {
                return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
            }
        }(),
        angleTo: function(a) {
            a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());
            return Math.acos(Y.clamp(a, -1, 1))
        },
        distanceTo: function(a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function(a) {
            var b = this.x - a.x,
                c = this.y - a.y;
            a = this.z - a.z;
            return b * b + c * c + a * a
        },
        distanceToManhattan: function(a) {
            return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z)
        },
        setFromSpherical: function(a) {
            var b = Math.sin(a.phi) * a.radius;
            this.x = b * Math.sin(a.theta);
            this.y = Math.cos(a.phi) * a.radius;
            this.z = b * Math.cos(a.theta);
            return this
        },
        setFromCylindrical: function(a) {
            this.x = a.radius * Math.sin(a.theta);
            this.y = a.y;
            this.z = a.radius * Math.cos(a.theta);
            return this
        },
        setFromMatrixPosition: function(a) {
            return this.setFromMatrixColumn(a,
                3)
        },
        setFromMatrixScale: function(a) {
            var b = this.setFromMatrixColumn(a, 0).length(),
                c = this.setFromMatrixColumn(a, 1).length();
            a = this.setFromMatrixColumn(a, 2).length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this
        },
        setFromMatrixColumn: function(a, b) {
            return this.fromArray(a.elements, 4 * b)
        },
        equals: function(a) {
            return a.x === this.x && a.y === this.y && a.z === this.z
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] =
                this.x;
            a[b + 1] = this.y;
            a[b + 2] = this.z;
            return a
        },
        fromBufferAttribute: function(a, b, c) {
            void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
            this.x = a.getX(b);
            this.y = a.getY(b);
            this.z = a.getZ(b);
            return this
        }
    });
    Object.assign(J.prototype, {
        isMatrix4: !0,
        set: function(a, b, c, d, e, f, g, h, k, m, u, l, n, r, p, t) {
            var y = this.elements;
            y[0] = a;
            y[4] = b;
            y[8] = c;
            y[12] = d;
            y[1] = e;
            y[5] = f;
            y[9] = g;
            y[13] = h;
            y[2] = k;
            y[6] = m;
            y[10] = u;
            y[14] = l;
            y[3] = n;
            y[7] = r;
            y[11] = p;
            y[15] = t;
            return this
        },
        identity: function() {
            this.set(1,
                0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new J).fromArray(this.elements)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            b[9] = a[9];
            b[10] = a[10];
            b[11] = a[11];
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            b[15] = a[15];
            return this
        },
        copyPosition: function(a) {
            var b = this.elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this
        },
        extractBasis: function(a, b, c) {
            a.setFromMatrixColumn(this, 0);
            b.setFromMatrixColumn(this, 1);
            c.setFromMatrixColumn(this, 2);
            return this
        },
        makeBasis: function(a, b, c) {
            this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
            return this
        },
        extractRotation: function() {
            var a = new p;
            return function(b) {
                var c = this.elements,
                    d = b.elements,
                    e = 1 / a.setFromMatrixColumn(b, 0).length(),
                    f = 1 / a.setFromMatrixColumn(b, 1).length();
                b = 1 / a.setFromMatrixColumn(b, 2).length();
                c[0] = d[0] * e;
                c[1] = d[1] * e;
                c[2] = d[2] * e;
                c[4] = d[4] * f;
                c[5] = d[5] * f;
                c[6] = d[6] * f;
                c[8] = d[8] * b;
                c[9] = d[9] * b;
                c[10] = d[10] * b;
                return this
            }
        }(),
        makeRotationFromEuler: function(a) {
            !1 === (a && a.isEuler) && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var b = this.elements,
                c = a.x,
                d = a.y,
                e = a.z,
                f = Math.cos(c),
                c = Math.sin(c),
                g = Math.cos(d),
                d = Math.sin(d),
                h = Math.cos(e),
                e = Math.sin(e);
            if ("XYZ" === a.order) {
                a = f * h;
                var k = f * e,
                    m = c * h,
                    u = c * e;
                b[0] = g * h;
                b[4] = -g * e;
                b[8] = d;
                b[1] = k + m * d;
                b[5] = a - u * d;
                b[9] = -c * g;
                b[2] = u - a * d;
                b[6] = m + k * d;
                b[10] = f * g
            } else "YXZ" === a.order ? (a = g * h, k = g * e, m = d * h, u = d * e, b[0] = a + u * c, b[4] = m * c - k, b[8] =
                f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - m, b[6] = u + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, m = d * h, u = d * e, b[0] = a - u * c, b[4] = -f * e, b[8] = m + k * c, b[1] = k + m * c, b[5] = f * h, b[9] = u - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, m = c * h, u = c * e, b[0] = g * h, b[4] = m * d - k, b[8] = a * d + u, b[1] = g * e, b[5] = u * d + a, b[9] = k * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, m = c * g, u = c * d, b[0] = g * h, b[4] = u - a * e, b[8] = m * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + m, b[10] = a - u * e) : "XZY" === a.order && (a = f * g, k = f * d, m = c * g, u = c * d, b[0] =
                g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + u, b[5] = f * h, b[9] = k * e - m, b[2] = m * e - k, b[6] = c * h, b[10] = u * e + a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        makeRotationFromQuaternion: function(a) {
            var b = this.elements,
                c = a._x,
                d = a._y,
                e = a._z,
                f = a._w,
                g = c + c,
                h = d + d,
                k = e + e;
            a = c * g;
            var m = c * h,
                c = c * k,
                u = d * h,
                d = d * k,
                e = e * k,
                g = f * g,
                h = f * h,
                f = f * k;
            b[0] = 1 - (u + e);
            b[4] = m - f;
            b[8] = c + h;
            b[1] = m + f;
            b[5] = 1 - (a + e);
            b[9] = d - g;
            b[2] = c - h;
            b[6] = d + g;
            b[10] = 1 - (a + u);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        lookAt: function() {
            var a = new p,
                b = new p,
                c = new p;
            return function(d, e, f) {
                var g = this.elements;
                c.subVectors(d, e);
                0 === c.lengthSq() && (c.z = 1);
                c.normalize();
                a.crossVectors(f, c);
                0 === a.lengthSq() && (c.z += 1E-4, a.crossVectors(f, c));
                a.normalize();
                b.crossVectors(c, a);
                g[0] = a.x;
                g[4] = b.x;
                g[8] = c.x;
                g[1] = a.y;
                g[5] = b.y;
                g[9] = c.y;
                g[2] = a.z;
                g[6] = b.z;
                g[10] = c.z;
                return this
            }
        }(),
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) :
                this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a, this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements,
                f = c[0],
                g = c[4],
                h = c[8],
                k = c[12],
                m = c[1],
                u = c[5],
                l = c[9],
                n = c[13],
                r = c[2],
                p = c[6],
                t = c[10],
                y = c[14],
                x = c[3],
                v = c[7],
                G = c[11],
                c = c[15],
                w = d[0],
                O = d[4],
                S = d[8],
                E = d[12],
                F = d[1],
                C = d[5],
                R = d[9],
                D = d[13],
                B = d[2],
                I = d[6],
                H = d[10],
                J = d[14],
                P = d[3],
                K = d[7],
                W = d[11],
                d = d[15];
            e[0] = f * w + g * F + h * B + k * P;
            e[4] = f * O + g * C + h * I + k * K;
            e[8] = f * S + g * R + h * H + k * W;
            e[12] = f * E + g * D + h * J + k * d;
            e[1] = m * w + u *
                F + l * B + n * P;
            e[5] = m * O + u * C + l * I + n * K;
            e[9] = m * S + u * R + l * H + n * W;
            e[13] = m * E + u * D + l * J + n * d;
            e[2] = r * w + p * F + t * B + y * P;
            e[6] = r * O + p * C + t * I + y * K;
            e[10] = r * S + p * R + t * H + y * W;
            e[14] = r * E + p * D + t * J + y * d;
            e[3] = x * w + v * F + G * B + c * P;
            e[7] = x * O + v * C + G * I + c * K;
            e[11] = x * S + v * R + G * H + c * W;
            e[15] = x * E + v * D + G * J + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        },
        applyToBufferAttribute: function() {
            var a = new p;
            return function(b) {
                for (var c =
                        0, d = b.count; c < d; c++) a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix4(this), b.setXYZ(c, a.x, a.y, a.z);
                return b
            }
        }(),
        determinant: function() {
            var a = this.elements,
                b = a[0],
                c = a[4],
                d = a[8],
                e = a[12],
                f = a[1],
                g = a[5],
                h = a[9],
                k = a[13],
                m = a[2],
                u = a[6],
                l = a[10],
                n = a[14];
            return a[3] * (+e * h * u - d * k * u - e * g * l + c * k * l + d * g * n - c * h * n) + a[7] * (+b * h * n - b * k * l + e * f * l - d * f * n + d * k * m - e * h * m) + a[11] * (+b * k * u - b * g * n - e * f * u + c * f * n + e * g * m - c * k * m) + a[15] * (-d * g * m - b * h * u + b * g * l + d * f * u - c * f * l + c * h * m)
        },
        transpose: function() {
            var a = this.elements,
                b;
            b = a[1];
            a[1] = a[4];
            a[4] =
                b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        },
        setPosition: function(a) {
            var b = this.elements;
            b[12] = a.x;
            b[13] = a.y;
            b[14] = a.z;
            return this
        },
        getInverse: function(a, b) {
            var c = this.elements,
                d = a.elements,
                e = d[0],
                f = d[1],
                g = d[2],
                h = d[3],
                k = d[4],
                m = d[5],
                l = d[6],
                q = d[7],
                n = d[8],
                r = d[9],
                p = d[10],
                t = d[11],
                y = d[12],
                x = d[13],
                v = d[14],
                d = d[15],
                G = r * v * q - x * p * q + x * l * t - m * v * t - r * l * d + m * p * d,
                w = y * p * q - n * v * q - y * l * t + k * v * t + n * l * d - k * p * d,
                O = n * x * q - y * r * q + y * m * t -
                k * x * t - n * m * d + k * r * d,
                S = y * r * l - n * x * l - y * m * p + k * x * p + n * m * v - k * r * v,
                E = e * G + f * w + g * O + h * S;
            if (0 === E) {
                if (!0 === b) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                return this.identity()
            }
            E = 1 / E;
            c[0] = G * E;
            c[1] = (x * p * h - r * v * h - x * g * t + f * v * t + r * g * d - f * p * d) * E;
            c[2] = (m * v * h - x * l * h + x * g * q - f * v * q - m * g * d + f * l * d) * E;
            c[3] = (r * l * h - m * p * h - r * g * q + f * p * q + m * g * t - f * l * t) * E;
            c[4] = w * E;
            c[5] = (n * v * h - y * p * h + y * g * t - e * v * t - n * g * d + e * p * d) * E;
            c[6] = (y * l * h - k * v * h -
                y * g * q + e * v * q + k * g * d - e * l * d) * E;
            c[7] = (k * p * h - n * l * h + n * g * q - e * p * q - k * g * t + e * l * t) * E;
            c[8] = O * E;
            c[9] = (y * r * h - n * x * h - y * f * t + e * x * t + n * f * d - e * r * d) * E;
            c[10] = (k * x * h - y * m * h + y * f * q - e * x * q - k * f * d + e * m * d) * E;
            c[11] = (n * m * h - k * r * h - n * f * q + e * r * q + k * f * t - e * m * t) * E;
            c[12] = S * E;
            c[13] = (n * x * g - y * r * g + y * f * p - e * x * p - n * f * v + e * r * v) * E;
            c[14] = (y * m * g - k * x * g - y * f * l + e * x * l + k * f * v - e * m * v) * E;
            c[15] = (k * r * g - n * m * g + n * f * l - e * r * l - k * f * p + e * m * p) * E;
            return this
        },
        scale: function(a) {
            var b = this.elements,
                c = a.x,
                d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *=
                a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this
        },
        getMaxScaleOnAxis: function() {
            var a = this.elements;
            return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
        },
        makeTranslation: function(a, b, c) {
            this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
            return this
        },
        makeRotationX: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationY: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b,
                0, 0, 0, 0, 1);
            return this
        },
        makeRotationZ: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationAxis: function(a, b) {
            var c = Math.cos(b),
                d = Math.sin(b),
                e = 1 - c,
                f = a.x,
                g = a.y,
                h = a.z,
                k = e * f,
                m = e * g;
            this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, m * g + c, m * h - d * f, 0, k * h - d * g, m * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
            return this
        },
        makeScale: function(a, b, c) {
            this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
            return this
        },
        makeShear: function(a, b, c) {
            this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
            return this
        },
        compose: function(a, b, c) {
            this.makeRotationFromQuaternion(b);
            this.scale(c);
            this.setPosition(a);
            return this
        },
        decompose: function() {
            var a = new p,
                b = new J;
            return function(c, d, e) {
                var f = this.elements,
                    g = a.set(f[0], f[1], f[2]).length(),
                    h = a.set(f[4], f[5], f[6]).length(),
                    k = a.set(f[8], f[9], f[10]).length();
                0 > this.determinant() && (g = -g);
                c.x = f[12];
                c.y = f[13];
                c.z = f[14];
                b.copy(this);
                c = 1 / g;
                var f = 1 / h,
                    m = 1 / k;
                b.elements[0] *= c;
                b.elements[1] *= c;
                b.elements[2] *= c;
                b.elements[4] *= f;
                b.elements[5] *= f;
                b.elements[6] *= f;
                b.elements[8] *=
                    m;
                b.elements[9] *= m;
                b.elements[10] *= m;
                d.setFromRotationMatrix(b);
                e.x = g;
                e.y = h;
                e.z = k;
                return this
            }
        }(),
        makePerspective: function(a, b, c, d, e, f) {
            void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var g = this.elements;
            g[0] = 2 * e / (b - a);
            g[4] = 0;
            g[8] = (b + a) / (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (c - d);
            g[9] = (c + d) / (c - d);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f + e) / (f - e);
            g[14] = -2 * f * e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this
        },
        makeOrthographic: function(a,
            b, c, d, e, f) {
            var g = this.elements,
                h = 1 / (b - a),
                k = 1 / (c - d),
                m = 1 / (f - e);
            g[0] = 2 * h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b + a) * h);
            g[1] = 0;
            g[5] = 2 * k;
            g[9] = 0;
            g[13] = -((c + d) * k);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 * m;
            g[14] = -((f + e) * m);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 16 > c; c++)
                if (b[c] !== a[c]) return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 16 > c; c++) this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[10];
            a[b + 11] = c[11];
            a[b + 12] = c[12];
            a[b + 13] = c[13];
            a[b + 14] = c[14];
            a[b + 15] = c[15];
            return a
        }
    });
    eb.prototype = Object.create(X.prototype);
    eb.prototype.constructor = eb;
    eb.prototype.isDataTexture = !0;
    Za.prototype = Object.create(X.prototype);
    Za.prototype.constructor = Za;
    Za.prototype.isCubeTexture = !0;
    Object.defineProperty(Za.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(a) {
            this.image =
                a
        }
    });
    var De = new X,
        Ee = new Za,
        ye = [],
        Ae = [],
        Ce = new Float32Array(16),
        Be = new Float32Array(9);
    Ie.prototype.setValue = function(a, b) {
        for (var c = this.seq, d = 0, e = c.length; d !== e; ++d) {
            var f = c[d];
            f.setValue(a, b[f.id])
        }
    };
    var Qd = /([\w\d_]+)(\])?(\[|\.)?/g;
    fb.prototype.setValue = function(a, b, c) {
        b = this.map[b];
        void 0 !== b && b.setValue(a, c, this.renderer)
    };
    fb.prototype.setOptional = function(a, b, c) {
        b = b[c];
        void 0 !== b && this.setValue(a, c, b)
    };
    fb.upload = function(a, b, c, d) {
        for (var e = 0, f = b.length; e !== f; ++e) {
            var g = b[e],
                h = c[g.id];
            !1 !==
                h.needsUpdate && g.setValue(a, h.value, d)
        }
    };
    fb.seqWithValue = function(a, b) {
        for (var c = [], d = 0, e = a.length; d !== e; ++d) {
            var f = a[d];
            f.id in b && c.push(f)
        }
        return c
    };
    var kg = {
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
    Object.assign(H.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(a) {
            a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
            return this
        },
        setScalar: function(a) {
            this.b = this.g = this.r =
                a;
            return this
        },
        setHex: function(a) {
            a = Math.floor(a);
            this.r = (a >> 16 & 255) / 255;
            this.g = (a >> 8 & 255) / 255;
            this.b = (a & 255) / 255;
            return this
        },
        setRGB: function(a, b, c) {
            this.r = a;
            this.g = b;
            this.b = c;
            return this
        },
        setHSL: function() {
            function a(a, c, d) {
                0 > d && (d += 1);
                1 < d && --d;
                return d < 1 / 6 ? a + 6 * (c - a) * d : .5 > d ? c : d < 2 / 3 ? a + 6 * (c - a) * (2 / 3 - d) : a
            }
            return function(b, c, d) {
                b = Y.euclideanModulo(b, 1);
                c = Y.clamp(c, 0, 1);
                d = Y.clamp(d, 0, 1);
                0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c, d = 2 * d - c, this.r = a(d, c, b + 1 / 3), this.g = a(d, c, b), this.b = a(d, c, b - 1 /
                    3));
                return this
            }
        }(),
        setStyle: function(a) {
            function b(b) {
                void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
            }
            var c;
            if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
                var d = c[2];
                switch (c[1]) {
                    case "rgb":
                    case "rgba":
                        if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
                        if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r =
                            Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                            var d = parseFloat(c[1]) / 360,
                                e = parseInt(c[2], 10) / 100,
                                f = parseInt(c[3], 10) / 100;
                            b(c[5]);
                            return this.setHSL(d, e, f)
                        }
                }
            } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
                c = c[1];
                d = c.length;
                if (3 === d) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) +
                    c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                if (6 === d) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
            }
            a && 0 < a.length && (c = kg[a], void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a));
            return this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(a) {
            this.r = a.r;
            this.g = a.g;
            this.b = a.b;
            return this
        },
        copyGammaToLinear: function(a,
            b) {
            void 0 === b && (b = 2);
            this.r = Math.pow(a.r, b);
            this.g = Math.pow(a.g, b);
            this.b = Math.pow(a.b, b);
            return this
        },
        copyLinearToGamma: function(a, b) {
            void 0 === b && (b = 2);
            var c = 0 < b ? 1 / b : 1;
            this.r = Math.pow(a.r, c);
            this.g = Math.pow(a.g, c);
            this.b = Math.pow(a.b, c);
            return this
        },
        convertGammaToLinear: function() {
            var a = this.r,
                b = this.g,
                c = this.b;
            this.r = a * a;
            this.g = b * b;
            this.b = c * c;
            return this
        },
        convertLinearToGamma: function() {
            this.r = Math.sqrt(this.r);
            this.g = Math.sqrt(this.g);
            this.b = Math.sqrt(this.b);
            return this
        },
        getHex: function() {
            return 255 *
                this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(a) {
            a = a || {
                h: 0,
                s: 0,
                l: 0
            };
            var b = this.r,
                c = this.g,
                d = this.b,
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g, h = (f + e) / 2;
            if (f === e) f = g = 0;
            else {
                var k = e - f,
                    f = .5 >= h ? k / (e + f) : k / (2 - e - f);
                switch (e) {
                    case b:
                        g = (c - d) / k + (c < d ? 6 : 0);
                        break;
                    case c:
                        g = (d - b) / k + 2;
                        break;
                    case d:
                        g = (b - c) / k + 4
                }
                g /= 6
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(a, b, c) {
            var d = this.getHSL();
            d.h += a;
            d.s += b;
            d.l += c;
            this.setHSL(d.h, d.s, d.l);
            return this
        },
        add: function(a) {
            this.r += a.r;
            this.g += a.g;
            this.b += a.b;
            return this
        },
        addColors: function(a, b) {
            this.r = a.r + b.r;
            this.g = a.g + b.g;
            this.b = a.b + b.b;
            return this
        },
        addScalar: function(a) {
            this.r += a;
            this.g += a;
            this.b += a;
            return this
        },
        sub: function(a) {
            this.r = Math.max(0, this.r - a.r);
            this.g = Math.max(0, this.g - a.g);
            this.b = Math.max(0, this.b - a.b);
            return this
        },
        multiply: function(a) {
            this.r *= a.r;
            this.g *= a.g;
            this.b *= a.b;
            return this
        },
        multiplyScalar: function(a) {
            this.r *= a;
            this.g *= a;
            this.b *= a;
            return this
        },
        lerp: function(a, b) {
            this.r += (a.r - this.r) * b;
            this.g += (a.g - this.g) * b;
            this.b += (a.b - this.b) * b;
            return this
        },
        equals: function(a) {
            return a.r === this.r && a.g === this.g && a.b === this.b
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            this.r = a[b];
            this.g = a[b + 1];
            this.b = a[b + 2];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this.r;
            a[b + 1] = this.g;
            a[b + 2] = this.b;
            return a
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var V = {
            common: {
                diffuse: {
                    value: new H(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new ga(0, 0, 1, 1)
                },
                specularMap: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
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
                    value: new D(1, 1)
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
                    value: 2.5E-4
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2E3
                },
                fogColor: {
                    value: new H(16777215)
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
                        shadowMapSize: {}
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
                    value: new H(15658734)
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
                offsetRepeat: {
                    value: new ga(0, 0, 1, 1)
                }
            }
        },
        Ha = {
            merge: function(a) {
                for (var b = {}, c = 0; c < a.length; c++) {
                    var d = this.clone(a[c]),
                        e;
                    for (e in d) b[e] = d[e]
                }
                return b
            },
            clone: function(a) {
                var b = {},
                    c;
                for (c in a) {
                    b[c] = {};
                    for (var d in a[c]) {
                        var e = a[c][d];
                        e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() :
                            Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
                    }
                }
                return b
            }
        },
        U = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
            bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i/(2.0 * PI);\n}\nfloat ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length(f);\n\treturn max((l*l + f.z)/(l+1.0), 0.0);\n}\nvec3 EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot(v1, v2);\n\tfloat y = abs(x);\n\tfloat a = 0.86267 + (0.49788 + 0.01436*y)*y;\n\tfloat b = 3.45068 + (4.18814 + y)*y;\n\tfloat v = a/b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5*inversesqrt(1.0 - x*x) - v;\n\treturn cross(v1, v2)*theta_sintheta;\n}\nvec3 integrateLtcBrdfOverRectOptimized( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[4];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tvec3 v1 = clippedRect[1] - clippedRect[0];\n\tvec3 v2 = clippedRect[3] - clippedRect[0];\n\tvec3 lightNormal = cross(v1, v2);\n\tbool bSameSide = dot(lightNormal, clippedRect[0]) > 0.0;\n\tif( !bSameSide )\n\t\treturn vec3(0.0);\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tvec3 edgeVectorFormFactor = vec3(0.0);\n\tedgeVectorFormFactor += EdgeVectorFormFactor( clippedRect[0], clippedRect[1] );\n\tedgeVectorFormFactor += EdgeVectorFormFactor( clippedRect[1], clippedRect[2] );\n\tedgeVectorFormFactor += EdgeVectorFormFactor( clippedRect[2], clippedRect[3] );\n\tedgeVectorFormFactor += EdgeVectorFormFactor( clippedRect[3], clippedRect[0] );\n\tvec3 Lo_i = vec3( ClippedSphereFormFactor( edgeVectorFormFactor ) );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRectOptimized( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRectOptimized( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
            defaultnormal_vertex: "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
            encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
            envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
            gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
            lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
            lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
            logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
            map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
            map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
            normal_flip: "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
            normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
            project_vertex: "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
            dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
            dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
            tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
            uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
            uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
            cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
            distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
            distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
            equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
            equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
            shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
        },
        ab = {
            basic: {
                uniforms: Ha.merge([V.common,
                    V.aomap, V.lightmap, V.fog
                ]),
                vertexShader: U.meshbasic_vert,
                fragmentShader: U.meshbasic_frag
            },
            lambert: {
                uniforms: Ha.merge([V.common, V.aomap, V.lightmap, V.emissivemap, V.fog, V.lights, {
                    emissive: {
                        value: new H(0)
                    }
                }]),
                vertexShader: U.meshlambert_vert,
                fragmentShader: U.meshlambert_frag
            },
            phong: {
                uniforms: Ha.merge([V.common, V.aomap, V.lightmap, V.emissivemap, V.bumpmap, V.normalmap, V.displacementmap, V.gradientmap, V.fog, V.lights, {
                    emissive: {
                        value: new H(0)
                    },
                    specular: {
                        value: new H(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: U.meshphong_vert,
                fragmentShader: U.meshphong_frag
            },
            standard: {
                uniforms: Ha.merge([V.common, V.aomap, V.lightmap, V.emissivemap, V.bumpmap, V.normalmap, V.displacementmap, V.roughnessmap, V.metalnessmap, V.fog, V.lights, {
                    emissive: {
                        value: new H(0)
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
                vertexShader: U.meshphysical_vert,
                fragmentShader: U.meshphysical_frag
            },
            points: {
                uniforms: Ha.merge([V.points, V.fog]),
                vertexShader: U.points_vert,
                fragmentShader: U.points_frag
            },
            dashed: {
                uniforms: Ha.merge([V.common, V.fog, {
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
                vertexShader: U.linedashed_vert,
                fragmentShader: U.linedashed_frag
            },
            depth: {
                uniforms: Ha.merge([V.common, V.displacementmap]),
                vertexShader: U.depth_vert,
                fragmentShader: U.depth_frag
            },
            normal: {
                uniforms: Ha.merge([V.common, V.bumpmap, V.normalmap, V.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: U.normal_vert,
                fragmentShader: U.normal_frag
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
                vertexShader: U.cube_vert,
                fragmentShader: U.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    }
                },
                vertexShader: U.equirect_vert,
                fragmentShader: U.equirect_frag
            },
            distanceRGBA: {
                uniforms: {
                    lightPos: {
                        value: new p
                    }
                },
                vertexShader: U.distanceRGBA_vert,
                fragmentShader: U.distanceRGBA_frag
            }
        };
    ab.physical = {
        uniforms: Ha.merge([ab.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: U.meshphysical_vert,
        fragmentShader: U.meshphysical_frag
    };
    Object.assign(id.prototype, {
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function() {
            var a = new D;
            return function(b, c) {
                var d = a.copy(c).multiplyScalar(.5);
                this.min.copy(b).sub(d);
                this.max.copy(b).add(d);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = Infinity;
            this.max.x = this.max.y = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x ||
                this.max.y < this.min.y
        },
        getCenter: function(a) {
            a = a || new D;
            return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            a = a || new D;
            return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        containsPoint: function(a) {
            return a.x <
                this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y
        },
        getParameter: function(a, b) {
            return (b || new D).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(a, b) {
            return (b || new D).copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var a = new D;
            return function(b) {
                return a.copy(b).clamp(this.min, this.max).sub(b).length()
            }
        }(),
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    var Kf = 0;
    Object.assign(Z.prototype, sa.prototype, {
        isMaterial: !0,
        setValues: function(a) {
            if (void 0 !==
                a)
                for (var b in a) {
                    var c = a[b];
                    if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                    else {
                        var d = this[b];
                        void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c
                    }
                }
        },
        toJSON: function(a) {
            function b(a) {
                var b = [],
                    c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var c = void 0 === a;
            c && (a = {
                textures: {},
                images: {}
            });
            var d = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            d.uuid = this.uuid;
            d.type = this.type;
            "" !== this.name && (d.name = this.name);
            this.color && this.color.isColor && (d.color = this.color.getHex());
            void 0 !== this.roughness && (d.roughness = this.roughness);
            void 0 !== this.metalness && (d.metalness = this.metalness);
            this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex());
            this.specular && this.specular.isColor && (d.specular = this.specular.getHex());
            void 0 !== this.shininess && (d.shininess = this.shininess);
            void 0 !== this.clearCoat && (d.clearCoat =
                this.clearCoat);
            void 0 !== this.clearCoatRoughness && (d.clearCoatRoughness = this.clearCoatRoughness);
            this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
            this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
            this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid);
            this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale);
            this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid,
                d.normalScale = this.normalScale.toArray());
            this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias);
            this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
            this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
            this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
            this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid);
            this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity);
            this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
            void 0 !== this.size && (d.size = this.size);
            void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
            1 !== this.blending && (d.blending = this.blending);
            2 !== this.shading && (d.shading = this.shading);
            0 !== this.side &&
                (d.side = this.side);
            0 !== this.vertexColors && (d.vertexColors = this.vertexColors);
            1 > this.opacity && (d.opacity = this.opacity);
            !0 === this.transparent && (d.transparent = this.transparent);
            d.depthFunc = this.depthFunc;
            d.depthTest = this.depthTest;
            d.depthWrite = this.depthWrite;
            0 < this.alphaTest && (d.alphaTest = this.alphaTest);
            !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
            !0 === this.wireframe && (d.wireframe = this.wireframe);
            1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
            "round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap);
            "round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin);
            d.skinning = this.skinning;
            d.morphTargets = this.morphTargets;
            d.dithering = this.dithering;
            c && (c = b(a.textures), a = b(a.images), 0 < c.length && (d.textures = c), 0 < a.length && (d.images = a));
            return d
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.name = a.name;
            this.fog = a.fog;
            this.lights = a.lights;
            this.blending = a.blending;
            this.side = a.side;
            this.shading = a.shading;
            this.vertexColors = a.vertexColors;
            this.opacity = a.opacity;
            this.transparent = a.transparent;
            this.blendSrc = a.blendSrc;
            this.blendDst = a.blendDst;
            this.blendEquation = a.blendEquation;
            this.blendSrcAlpha = a.blendSrcAlpha;
            this.blendDstAlpha = a.blendDstAlpha;
            this.blendEquationAlpha = a.blendEquationAlpha;
            this.depthFunc = a.depthFunc;
            this.depthTest = a.depthTest;
            this.depthWrite = a.depthWrite;
            this.colorWrite = a.colorWrite;
            this.precision = a.precision;
            this.polygonOffset = a.polygonOffset;
            this.polygonOffsetFactor =
                a.polygonOffsetFactor;
            this.polygonOffsetUnits = a.polygonOffsetUnits;
            this.dithering = a.dithering;
            this.alphaTest = a.alphaTest;
            this.premultipliedAlpha = a.premultipliedAlpha;
            this.overdraw = a.overdraw;
            this.visible = a.visible;
            this.clipShadows = a.clipShadows;
            this.clipIntersection = a.clipIntersection;
            a = a.clippingPlanes;
            var b = null;
            if (null !== a)
                for (var c = a.length, b = Array(c), d = 0; d !== c; ++d) b[d] = a[d].clone();
            this.clippingPlanes = b;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    Ea.prototype = Object.create(Z.prototype);
    Ea.prototype.constructor = Ea;
    Ea.prototype.isShaderMaterial = !0;
    Ea.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.fragmentShader = a.fragmentShader;
        this.vertexShader = a.vertexShader;
        this.uniforms = Ha.clone(a.uniforms);
        this.defines = a.defines;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.lights = a.lights;
        this.clipping = a.clipping;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        this.extensions = a.extensions;
        return this
    };
    Ea.prototype.toJSON =
        function(a) {
            a = Z.prototype.toJSON.call(this, a);
            a.uniforms = this.uniforms;
            a.vertexShader = this.vertexShader;
            a.fragmentShader = this.fragmentShader;
            return a
        };
    $a.prototype = Object.create(Z.prototype);
    $a.prototype.constructor = $a;
    $a.prototype.isMeshDepthMaterial = !0;
    $a.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.depthPacking = a.depthPacking;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.map = a.map;
        this.alphaMap = a.alphaMap;
        this.displacementMap = a.displacementMap;
        this.displacementScale =
            a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        return this
    };
    Object.assign(Ta.prototype, {
        isBox3: !0,
        set: function(a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        setFromArray: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.length; h < k; h += 3) {
                var m = a[h],
                    l = a[h + 1],
                    q = a[h + 2];
                m < b && (b = m);
                l < c && (c = l);
                q < d && (d = q);
                m > e && (e = m);
                l > f && (f = l);
                q > g && (g = q)
            }
            this.min.set(b, c, d);
            this.max.set(e,
                f, g);
            return this
        },
        setFromBufferAttribute: function(a) {
            for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.count; h < k; h++) {
                var m = a.getX(h),
                    l = a.getY(h),
                    q = a.getZ(h);
                m < b && (b = m);
                l < c && (c = l);
                q < d && (d = q);
                m > e && (e = m);
                l > f && (f = l);
                q > g && (g = q)
            }
            this.min.set(b, c, d);
            this.max.set(e, f, g);
            return this
        },
        setFromPoints: function(a) {
            this.makeEmpty();
            for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
            return this
        },
        setFromCenterAndSize: function() {
            var a = new p;
            return function(b, c) {
                var d = a.copy(c).multiplyScalar(.5);
                this.min.copy(b).sub(d);
                this.max.copy(b).add(d);
                return this
            }
        }(),
        setFromObject: function(a) {
            this.makeEmpty();
            return this.expandByObject(a)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function() {
            this.min.x = this.min.y = this.min.z = Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(a) {
            a =
                a || new p;
            return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(a) {
            a = a || new p;
            return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min)
        },
        expandByPoint: function(a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function(a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function(a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        expandByObject: function() {
            var a = new p;
            return function(b) {
                var c = this;
                b.updateMatrixWorld(!0);
                b.traverse(function(b) {
                    var e, f;
                    e = b.geometry;
                    if (void 0 !== e)
                        if (e.isGeometry) {
                            var g = e.vertices;
                            e = 0;
                            for (f = g.length; e < f; e++) a.copy(g[e]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
                        } else if (e.isBufferGeometry && (g = e.attributes.position, void 0 !== g))
                        for (e = 0, f = g.count; e < f; e++) a.fromBufferAttribute(g, e).applyMatrix4(b.matrixWorld), c.expandByPoint(a)
                });
                return this
            }
        }(),
        containsPoint: function(a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
        },
        containsBox: function(a) {
            return this.min.x <=
                a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z
        },
        getParameter: function(a, b) {
            return (b || new p).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function() {
            var a = new p;
            return function(b) {
                this.clampPoint(b.center,
                    a);
                return a.distanceToSquared(b.center) <= b.radius * b.radius
            }
        }(),
        intersectsPlane: function(a) {
            var b, c;
            0 < a.normal.x ? (b = a.normal.x * this.min.x, c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x, c = a.normal.x * this.min.x);
            0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
            0 < a.normal.z ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
            return b <= a.constant && c >= a.constant
        },
        clampPoint: function(a,
            b) {
            return (b || new p).copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var a = new p;
            return function(b) {
                return a.copy(b).clamp(this.min, this.max).sub(b).length()
            }
        }(),
        getBoundingSphere: function() {
            var a = new p;
            return function(b) {
                b = b || new Ca;
                this.getCenter(b.center);
                b.radius = .5 * this.getSize(a).length();
                return b
            }
        }(),
        intersect: function(a) {
            this.min.max(a.min);
            this.max.min(a.max);
            this.isEmpty() && this.makeEmpty();
            return this
        },
        union: function(a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        applyMatrix4: function() {
            var a =
                [new p, new p, new p, new p, new p, new p, new p, new p];
            return function(b) {
                if (this.isEmpty()) return this;
                a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
                a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
                a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
                a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
                a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
                a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
                a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
                a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
                this.setFromPoints(a);
                return this
            }
        }(),
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function(a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        }
    });
    Object.assign(Ca.prototype, {
        set: function(a, b) {
            this.center.copy(a);
            this.radius = b;
            return this
        },
        setFromPoints: function() {
            var a = new Ta;
            return function(b, c) {
                var d = this.center;
                void 0 !== c ? d.copy(c) : a.setFromPoints(b).getCenter(d);
                for (var e = 0, f = 0, g = b.length; f < g; f++) e = Math.max(e,
                    d.distanceToSquared(b[f]));
                this.radius = Math.sqrt(e);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.center.copy(a.center);
            this.radius = a.radius;
            return this
        },
        empty: function() {
            return 0 >= this.radius
        },
        containsPoint: function(a) {
            return a.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(a) {
            return a.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(a) {
            var b = this.radius + a.radius;
            return a.center.distanceToSquared(this.center) <=
                b * b
        },
        intersectsBox: function(a) {
            return a.intersectsSphere(this)
        },
        intersectsPlane: function(a) {
            return Math.abs(this.center.dot(a.normal) - a.constant) <= this.radius
        },
        clampPoint: function(a, b) {
            var c = this.center.distanceToSquared(a),
                d = b || new p;
            d.copy(a);
            c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
            return d
        },
        getBoundingBox: function(a) {
            a = a || new Ta;
            a.set(this.center, this.center);
            a.expandByScalar(this.radius);
            return a
        },
        applyMatrix4: function(a) {
            this.center.applyMatrix4(a);
            this.radius *= a.getMaxScaleOnAxis();
            return this
        },
        translate: function(a) {
            this.center.add(a);
            return this
        },
        equals: function(a) {
            return a.center.equals(this.center) && a.radius === this.radius
        }
    });
    Object.assign(Ga.prototype, {
        isMatrix3: !0,
        set: function(a, b, c, d, e, f, g, h, k) {
            var m = this.elements;
            m[0] = a;
            m[1] = d;
            m[2] = g;
            m[3] = b;
            m[4] = e;
            m[5] = h;
            m[6] = c;
            m[7] = f;
            m[8] = k;
            return this
        },
        identity: function() {
            this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
            return this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(a) {
            var b =
                this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = a[3];
            b[4] = a[4];
            b[5] = a[5];
            b[6] = a[6];
            b[7] = a[7];
            b[8] = a[8];
            return this
        },
        setFromMatrix4: function(a) {
            a = a.elements;
            this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
            return this
        },
        applyToBufferAttribute: function() {
            var a = new p;
            return function(b) {
                for (var c = 0, d = b.count; c < d; c++) a.x = b.getX(c), a.y = b.getY(c), a.z = b.getZ(c), a.applyMatrix3(this), b.setXYZ(c, a.x, a.y, a.z);
                return b
            }
        }(),
        multiply: function(a) {
            return this.multiplyMatrices(this, a)
        },
        premultiply: function(a) {
            return this.multiplyMatrices(a,
                this)
        },
        multiplyMatrices: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements,
                f = c[0],
                g = c[3],
                h = c[6],
                k = c[1],
                m = c[4],
                l = c[7],
                q = c[2],
                n = c[5],
                c = c[8],
                r = d[0],
                p = d[3],
                t = d[6],
                y = d[1],
                x = d[4],
                v = d[7],
                G = d[2],
                w = d[5],
                d = d[8];
            e[0] = f * r + g * y + h * G;
            e[3] = f * p + g * x + h * w;
            e[6] = f * t + g * v + h * d;
            e[1] = k * r + m * y + l * G;
            e[4] = k * p + m * x + l * w;
            e[7] = k * t + m * v + l * d;
            e[2] = q * r + n * y + c * G;
            e[5] = q * p + n * x + c * w;
            e[8] = q * t + n * v + c * d;
            return this
        },
        multiplyScalar: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this
        },
        determinant: function() {
            var a = this.elements,
                b = a[0],
                c = a[1],
                d = a[2],
                e = a[3],
                f = a[4],
                g = a[5],
                h = a[6],
                k = a[7],
                a = a[8];
            return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
        },
        getInverse: function(a, b) {
            a && a.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var c = a.elements,
                d = this.elements,
                e = c[0],
                f = c[1],
                g = c[2],
                h = c[3],
                k = c[4],
                m = c[5],
                l = c[6],
                q = c[7],
                c = c[8],
                n = c * k - m * q,
                r = m * l - c * h,
                p = q * h - k * l,
                t = e * n + f * r + g * p;
            if (0 === t) {
                if (!0 === b) throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                return this.identity()
            }
            t = 1 / t;
            d[0] = n * t;
            d[1] = (g * q - c * f) * t;
            d[2] = (m * f - g * k) * t;
            d[3] = r * t;
            d[4] = (c * e - g * l) * t;
            d[5] = (g * h - m * e) * t;
            d[6] = p * t;
            d[7] = (f * l - q * e) * t;
            d[8] = (k * e - f * h) * t;
            return this
        },
        transpose: function() {
            var a, b = this.elements;
            a = b[1];
            b[1] = b[3];
            b[3] = a;
            a = b[2];
            b[2] = b[6];
            b[6] = a;
            a = b[5];
            b[5] = b[7];
            b[7] = a;
            return this
        },
        getNormalMatrix: function(a) {
            return this.setFromMatrix4(a).getInverse(this).transpose()
        },
        transposeIntoArray: function(a) {
            var b =
                this.elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this
        },
        equals: function(a) {
            var b = this.elements;
            a = a.elements;
            for (var c = 0; 9 > c; c++)
                if (b[c] !== a[c]) return !1;
            return !0
        },
        fromArray: function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0; 9 > c; c++) this.elements[c] = a[c + b];
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] =
                c[8];
            return a
        }
    });
    Object.assign(wa.prototype, {
        set: function(a, b) {
            this.normal.copy(a);
            this.constant = b;
            return this
        },
        setComponents: function(a, b, c, d) {
            this.normal.set(a, b, c);
            this.constant = d;
            return this
        },
        setFromNormalAndCoplanarPoint: function(a, b) {
            this.normal.copy(a);
            this.constant = -b.dot(this.normal);
            return this
        },
        setFromCoplanarPoints: function() {
            var a = new p,
                b = new p;
            return function(c, d, e) {
                d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
                this.setFromNormalAndCoplanarPoint(d, c);
                return this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.normal.copy(a.normal);
            this.constant = a.constant;
            return this
        },
        normalize: function() {
            var a = 1 / this.normal.length();
            this.normal.multiplyScalar(a);
            this.constant *= a;
            return this
        },
        negate: function() {
            this.constant *= -1;
            this.normal.negate();
            return this
        },
        distanceToPoint: function(a) {
            return this.normal.dot(a) + this.constant
        },
        distanceToSphere: function(a) {
            return this.distanceToPoint(a.center) - a.radius
        },
        projectPoint: function(a, b) {
            return this.orthoPoint(a, b).sub(a).negate()
        },
        orthoPoint: function(a,
            b) {
            var c = this.distanceToPoint(a);
            return (b || new p).copy(this.normal).multiplyScalar(c)
        },
        intersectLine: function() {
            var a = new p;
            return function(b, c) {
                var d = c || new p,
                    e = b.delta(a),
                    f = this.normal.dot(e);
                if (0 === f) {
                    if (0 === this.distanceToPoint(b.start)) return d.copy(b.start)
                } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
            }
        }(),
        intersectsLine: function(a) {
            var b = this.distanceToPoint(a.start);
            a = this.distanceToPoint(a.end);
            return 0 > b && 0 < a || 0 > a && 0 < b
        },
        intersectsBox: function(a) {
            return a.intersectsPlane(this)
        },
        intersectsSphere: function(a) {
            return a.intersectsPlane(this)
        },
        coplanarPoint: function(a) {
            return (a || new p).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var a = new p,
                b = new Ga;
            return function(c, d) {
                var e = this.coplanarPoint(a).applyMatrix4(c),
                    f = d || b.getNormalMatrix(c),
                    f = this.normal.applyMatrix3(f).normalize();
                this.constant = -e.dot(f);
                return this
            }
        }(),
        translate: function(a) {
            this.constant -= a.dot(this.normal);
            return this
        },
        equals: function(a) {
            return a.normal.equals(this.normal) &&
                a.constant === this.constant
        }
    });
    Object.assign(jd.prototype, {
        set: function(a, b, c, d, e, f) {
            var g = this.planes;
            g[0].copy(a);
            g[1].copy(b);
            g[2].copy(c);
            g[3].copy(d);
            g[4].copy(e);
            g[5].copy(f);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
            return this
        },
        setFromMatrix: function(a) {
            var b = this.planes,
                c = a.elements;
            a = c[0];
            var d = c[1],
                e = c[2],
                f = c[3],
                g = c[4],
                h = c[5],
                k = c[6],
                m = c[7],
                l = c[8],
                q = c[9],
                n = c[10],
                r = c[11],
                p = c[12],
                t = c[13],
                y = c[14],
                c = c[15];
            b[0].setComponents(f - a, m - g, r - l, c - p).normalize();
            b[1].setComponents(f + a, m + g, r + l, c + p).normalize();
            b[2].setComponents(f + d, m + h, r + q, c + t).normalize();
            b[3].setComponents(f - d, m - h, r - q, c - t).normalize();
            b[4].setComponents(f - e, m - k, r - n, c - y).normalize();
            b[5].setComponents(f + e, m + k, r + n, c + y).normalize();
            return this
        },
        intersectsObject: function() {
            var a = new Ca;
            return function(b) {
                var c = b.geometry;
                null === c.boundingSphere && c.computeBoundingSphere();
                a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);
                return this.intersectsSphere(a)
            }
        }(),
        intersectsSprite: function() {
            var a = new Ca;
            return function(b) {
                a.center.set(0, 0, 0);
                a.radius = .7071067811865476;
                a.applyMatrix4(b.matrixWorld);
                return this.intersectsSphere(a)
            }
        }(),
        intersectsSphere: function(a) {
            var b = this.planes,
                c = a.center;
            a = -a.radius;
            for (var d = 0; 6 > d; d++)
                if (b[d].distanceToPoint(c) < a) return !1;
            return !0
        },
        intersectsBox: function() {
            var a = new p,
                b = new p;
            return function(c) {
                for (var d = this.planes, e = 0; 6 > e; e++) {
                    var f = d[e];
                    a.x = 0 < f.normal.x ? c.min.x : c.max.x;
                    b.x = 0 < f.normal.x ? c.max.x : c.min.x;
                    a.y = 0 < f.normal.y ?
                        c.min.y : c.max.y;
                    b.y = 0 < f.normal.y ? c.max.y : c.min.y;
                    a.z = 0 < f.normal.z ? c.min.z : c.max.z;
                    b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                    var g = f.distanceToPoint(a),
                        f = f.distanceToPoint(b);
                    if (0 > g && 0 > f) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(a) {
            for (var b = this.planes, c = 0; 6 > c; c++)
                if (0 > b[c].distanceToPoint(a)) return !1;
            return !0
        }
    });
    Object.assign(hb.prototype, {
        set: function(a, b) {
            this.origin.copy(a);
            this.direction.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.origin.copy(a.origin);
            this.direction.copy(a.direction);
            return this
        },
        at: function(a, b) {
            return (b || new p).copy(this.direction).multiplyScalar(a).add(this.origin)
        },
        lookAt: function(a) {
            this.direction.copy(a).sub(this.origin).normalize();
            return this
        },
        recast: function() {
            var a = new p;
            return function(b) {
                this.origin.copy(this.at(b, a));
                return this
            }
        }(),
        closestPointToPoint: function(a, b) {
            var c = b || new p;
            c.subVectors(a, this.origin);
            var d = c.dot(this.direction);
            return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
        },
        distanceToPoint: function(a) {
            return Math.sqrt(this.distanceSqToPoint(a))
        },
        distanceSqToPoint: function() {
            var a = new p;
            return function(b) {
                var c = a.subVectors(b, this.origin).dot(this.direction);
                if (0 > c) return this.origin.distanceToSquared(b);
                a.copy(this.direction).multiplyScalar(c).add(this.origin);
                return a.distanceToSquared(b)
            }
        }(),
        distanceSqToSegment: function() {
            var a = new p,
                b = new p,
                c = new p;
            return function(d, e, f, g) {
                a.copy(d).add(e).multiplyScalar(.5);
                b.copy(e).sub(d).normalize();
                c.copy(this.origin).sub(a);
                var h = .5 * d.distanceTo(e),
                    k = -this.direction.dot(b),
                    m = c.dot(this.direction),
                    l = -c.dot(b),
                    q = c.lengthSq(),
                    n = Math.abs(1 - k * k),
                    r;
                0 < n ? (d = k * l - m, e = k * m - l, r = h * n, 0 <= d ? e >= -r ? e <= r ? (h = 1 / n, d *= h, e *= h, k = d * (d + k * e + 2 * m) + e * (k * d + e + 2 * l) + q) : (e = h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * l) + q) : (e = -h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * l) + q) : e <= -r ? (d = Math.max(0, -(-k * h + m)), e = 0 < d ? -h : Math.min(Math.max(-h, -l), h), k = -d * d + e * (e + 2 * l) + q) : e <= r ? (d = 0, e = Math.min(Math.max(-h, -l), h), k = e * (e + 2 * l) + q) : (d = Math.max(0, -(k * h + m)), e = 0 < d ? h : Math.min(Math.max(-h, -l), h), k = -d * d + e * (e + 2 * l) + q)) : (e = 0 < k ? -h : h, d = Math.max(0, -(k * e + m)), k = -d * d + e * (e + 2 * l) + q);
                f && f.copy(this.direction).multiplyScalar(d).add(this.origin);
                g && g.copy(b).multiplyScalar(e).add(a);
                return k
            }
        }(),
        intersectSphere: function() {
            var a = new p;
            return function(b, c) {
                a.subVectors(b.center, this.origin);
                var d = a.dot(this.direction),
                    e = a.dot(a) - d * d,
                    f = b.radius * b.radius;
                if (e > f) return null;
                f = Math.sqrt(f - e);
                e = d - f;
                d += f;
                return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
            }
        }(),
        intersectsSphere: function(a) {
            return this.distanceToPoint(a.center) <=
                a.radius
        },
        distanceToPlane: function(a) {
            var b = a.normal.dot(this.direction);
            if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
            a = -(this.origin.dot(a.normal) + a.constant) / b;
            return 0 <= a ? a : null
        },
        intersectPlane: function(a, b) {
            var c = this.distanceToPlane(a);
            return null === c ? null : this.at(c, b)
        },
        intersectsPlane: function(a) {
            var b = a.distanceToPoint(this.origin);
            return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
        },
        intersectBox: function(a, b) {
            var c, d, e, f, g;
            d = 1 / this.direction.x;
            f = 1 / this.direction.y;
            g = 1 / this.direction.z;
            var h = this.origin;
            0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
            0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
            if (c > f || e > d) return null;
            if (e > c || c !== c) c = e;
            if (f < d || d !== d) d = f;
            0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
            if (c > g || e > d) return null;
            if (e > c || c !== c) c = e;
            if (g < d || d !== d) d = g;
            return 0 > d ? null : this.at(0 <= c ? c : d, b)
        },
        intersectsBox: function() {
            var a = new p;
            return function(b) {
                return null !== this.intersectBox(b, a)
            }
        }(),
        intersectTriangle: function() {
            var a =
                new p,
                b = new p,
                c = new p,
                d = new p;
            return function(e, f, g, h, k) {
                b.subVectors(f, e);
                c.subVectors(g, e);
                d.crossVectors(b, c);
                f = this.direction.dot(d);
                if (0 < f) {
                    if (h) return null;
                    h = 1
                } else if (0 > f) h = -1, f = -f;
                else return null;
                a.subVectors(this.origin, e);
                e = h * this.direction.dot(c.crossVectors(a, c));
                if (0 > e) return null;
                g = h * this.direction.dot(b.cross(a));
                if (0 > g || e + g > f) return null;
                e = -h * a.dot(d);
                return 0 > e ? null : this.at(e / f, k)
            }
        }(),
        applyMatrix4: function(a) {
            this.direction.add(this.origin).applyMatrix4(a);
            this.origin.applyMatrix4(a);
            this.direction.sub(this.origin);
            this.direction.normalize();
            return this
        },
        equals: function(a) {
            return a.origin.equals(this.origin) && a.direction.equals(this.direction)
        }
    });
    bb.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    bb.DefaultOrder = "XYZ";
    Object.defineProperties(bb.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._x = a;
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._y = a;
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(a) {
                this._z =
                    a;
                this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(a) {
                this._order = a;
                this.onChangeCallback()
            }
        }
    });
    Object.assign(bb.prototype, {
        isEuler: !0,
        set: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order = d || this._order;
            this.onChangeCallback();
            return this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a._order;
            this.onChangeCallback();
            return this
        },
        setFromRotationMatrix: function(a,
            b, c) {
            var d = Y.clamp,
                e = a.elements;
            a = e[0];
            var f = e[4],
                g = e[8],
                h = e[1],
                k = e[5],
                m = e[9],
                l = e[2],
                q = e[6],
                e = e[10];
            b = b || this._order;
            "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(q, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(m, -1, 1)), .99999 > Math.abs(m) ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-l, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(q, -1, 1)), .99999 > Math.abs(q) ? (this._y = Math.atan2(-l, e), this._z =
                Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(q, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-m, k), this._y = Math.atan2(-l, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(q, k), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
                b);
            this._order = b;
            if (!1 !== c) this.onChangeCallback();
            return this
        },
        setFromQuaternion: function() {
            var a = new J;
            return function(b, c, d) {
                a.makeRotationFromQuaternion(b);
                return this.setFromRotationMatrix(a, c, d)
            }
        }(),
        setFromVector3: function(a, b) {
            return this.set(a.x, a.y, a.z, b || this._order)
        },
        reorder: function() {
            var a = new qa;
            return function(b) {
                a.setFromEuler(this);
                return this.setFromQuaternion(a, b)
            }
        }(),
        equals: function(a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
        },
        fromArray: function(a) {
            this._x =
                a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[3] && (this._order = a[3]);
            this.onChangeCallback();
            return this
        },
        toArray: function(a, b) {
            void 0 === a && (a = []);
            void 0 === b && (b = 0);
            a[b] = this._x;
            a[b + 1] = this._y;
            a[b + 2] = this._z;
            a[b + 3] = this._order;
            return a
        },
        toVector3: function(a) {
            return a ? a.set(this._x, this._y, this._z) : new p(this._x, this._y, this._z)
        },
        onChange: function(a) {
            this.onChangeCallback = a;
            return this
        },
        onChangeCallback: function() {}
    });
    Object.assign(Rd.prototype, {
        set: function(a) {
            this.mask = 1 << a | 0
        },
        enable: function(a) {
            this.mask =
                this.mask | 1 << a | 0
        },
        toggle: function(a) {
            this.mask ^= 1 << a | 0
        },
        disable: function(a) {
            this.mask &= ~(1 << a | 0)
        },
        test: function(a) {
            return 0 !== (this.mask & a.mask)
        }
    });
    var Lf = 0;
    B.DefaultUp = new p(0, 1, 0);
    B.DefaultMatrixAutoUpdate = !0;
    Object.assign(B.prototype, sa.prototype, {
        isObject3D: !0,
        applyMatrix: function(a) {
            this.matrix.multiplyMatrices(a, this.matrix);
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(a, b) {
            this.quaternion.setFromAxisAngle(a, b)
        },
        setRotationFromEuler: function(a) {
            this.quaternion.setFromEuler(a, !0)
        },
        setRotationFromMatrix: function(a) {
            this.quaternion.setFromRotationMatrix(a)
        },
        setRotationFromQuaternion: function(a) {
            this.quaternion.copy(a)
        },
        rotateOnAxis: function() {
            var a = new qa;
            return function(b, c) {
                a.setFromAxisAngle(b, c);
                this.quaternion.multiply(a);
                return this
            }
        }(),
        rotateX: function() {
            var a = new p(1, 0, 0);
            return function(b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        rotateY: function() {
            var a = new p(0, 1, 0);
            return function(b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        rotateZ: function() {
            var a = new p(0, 0, 1);
            return function(b) {
                return this.rotateOnAxis(a,
                    b)
            }
        }(),
        translateOnAxis: function() {
            var a = new p;
            return function(b, c) {
                a.copy(b).applyQuaternion(this.quaternion);
                this.position.add(a.multiplyScalar(c));
                return this
            }
        }(),
        translateX: function() {
            var a = new p(1, 0, 0);
            return function(b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        translateY: function() {
            var a = new p(0, 1, 0);
            return function(b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        translateZ: function() {
            var a = new p(0, 0, 1);
            return function(b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        localToWorld: function(a) {
            return a.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var a = new J;
            return function(b) {
                return b.applyMatrix4(a.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var a = new J;
            return function(b) {
                this.isCamera ? a.lookAt(this.position, b, this.up) : a.lookAt(b, this.position, this.up);
                this.quaternion.setFromRotationMatrix(a)
            }
        }(),
        add: function(a) {
            if (1 < arguments.length) {
                for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
                return this
            }
            if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
            a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({
                type: "added"
            }), this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
            return this
        },
        remove: function(a) {
            if (1 < arguments.length)
                for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
            b = this.children.indexOf(a); - 1 !== b && (a.parent = null, a.dispatchEvent({
                type: "removed"
            }), this.children.splice(b, 1))
        },
        getObjectById: function(a) {
            return this.getObjectByProperty("id", a)
        },
        getObjectByName: function(a) {
            return this.getObjectByProperty("name",
                a)
        },
        getObjectByProperty: function(a, b) {
            if (this[a] === b) return this;
            for (var c = 0, d = this.children.length; c < d; c++) {
                var e = this.children[c].getObjectByProperty(a, b);
                if (void 0 !== e) return e
            }
        },
        getWorldPosition: function(a) {
            a = a || new p;
            this.updateMatrixWorld(!0);
            return a.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var a = new p,
                b = new p;
            return function(c) {
                c = c || new qa;
                this.updateMatrixWorld(!0);
                this.matrixWorld.decompose(a, c, b);
                return c
            }
        }(),
        getWorldRotation: function() {
            var a = new qa;
            return function(b) {
                b =
                    b || new bb;
                this.getWorldQuaternion(a);
                return b.setFromQuaternion(a, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var a = new p,
                b = new qa;
            return function(c) {
                c = c || new p;
                this.updateMatrixWorld(!0);
                this.matrixWorld.decompose(a, b, c);
                return c
            }
        }(),
        getWorldDirection: function() {
            var a = new qa;
            return function(b) {
                b = b || new p;
                this.getWorldQuaternion(a);
                return b.set(0, 0, 1).applyQuaternion(a)
            }
        }(),
        raycast: function() {},
        traverse: function(a) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverse(a)
        },
        traverseVisible: function(a) {
            if (!1 !== this.visible) {
                a(this);
                for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverseVisible(a)
            }
        },
        traverseAncestors: function(a) {
            var b = this.parent;
            null !== b && (a(b), b.traverseAncestors(a))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale);
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(a) {
            this.matrixAutoUpdate && this.updateMatrix();
            if (this.matrixWorldNeedsUpdate || a) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
                this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
            for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].updateMatrixWorld(a)
        },
        toJSON: function(a) {
            function b(b, c) {
                void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
                return c.uuid
            }

            function c(a) {
                var b = [],
                    c;
                for (c in a) {
                    var d = a[c];
                    delete d.metadata;
                    b.push(d)
                }
                return b
            }
            var d = void 0 === a || "" === a,
                e = {};
            d && (a = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            }, e.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var f = {};
            f.uuid = this.uuid;
            f.type = this.type;
            "" !==
            this.name && (f.name = this.name);
            "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
            !0 === this.castShadow && (f.castShadow = !0);
            !0 === this.receiveShadow && (f.receiveShadow = !0);
            !1 === this.visible && (f.visible = !1);
            f.matrix = this.matrix.toArray();
            void 0 !== this.geometry && (f.geometry = b(a.geometries, this.geometry));
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (var g = [], h = 0, k = this.material.length; h < k; h++) g.push(b(a.materials, this.material[h]));
                    f.material = g
                } else f.material = b(a.materials,
                    this.material);
            if (0 < this.children.length)
                for (f.children = [], h = 0; h < this.children.length; h++) f.children.push(this.children[h].toJSON(a).object);
            d && (d = c(a.geometries), g = c(a.materials), h = c(a.textures), k = c(a.images), 0 < d.length && (e.geometries = d), 0 < g.length && (e.materials = g), 0 < h.length && (e.textures = h), 0 < k.length && (e.images = k));
            e.object = f;
            return e
        },
        clone: function(a) {
            return (new this.constructor).copy(this, a)
        },
        copy: function(a, b) {
            void 0 === b && (b = !0);
            this.name = a.name;
            this.up.copy(a.up);
            this.position.copy(a.position);
            this.quaternion.copy(a.quaternion);
            this.scale.copy(a.scale);
            this.matrix.copy(a.matrix);
            this.matrixWorld.copy(a.matrixWorld);
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
            this.layers.mask = a.layers.mask;
            this.visible = a.visible;
            this.castShadow = a.castShadow;
            this.receiveShadow = a.receiveShadow;
            this.frustumCulled = a.frustumCulled;
            this.renderOrder = a.renderOrder;
            this.userData = JSON.parse(JSON.stringify(a.userData));
            if (!0 === b)
                for (var c = 0; c < a.children.length; c++) this.add(a.children[c].clone());
            return this
        }
    });
    Object.assign(Hb.prototype, {
        set: function(a, b) {
            this.start.copy(a);
            this.end.copy(b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.start.copy(a.start);
            this.end.copy(a.end);
            return this
        },
        getCenter: function(a) {
            return (a || new p).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(a) {
            return (a || new p).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(a, b) {
            var c = b || new p;
            return this.delta(c).multiplyScalar(a).add(this.start)
        },
        closestPointToPointParameter: function() {
            var a = new p,
                b = new p;
            return function(c, d) {
                a.subVectors(c, this.start);
                b.subVectors(this.end, this.start);
                var e = b.dot(b),
                    e = b.dot(a) / e;
                d && (e = Y.clamp(e, 0, 1));
                return e
            }
        }(),
        closestPointToPoint: function(a, b, c) {
            a = this.closestPointToPointParameter(a, b);
            c = c || new p;
            return this.delta(c).multiplyScalar(a).add(this.start)
        },
        applyMatrix4: function(a) {
            this.start.applyMatrix4(a);
            this.end.applyMatrix4(a);
            return this
        },
        equals: function(a) {
            return a.start.equals(this.start) && a.end.equals(this.end)
        }
    });
    Object.assign(Ua, {
        normal: function() {
            var a = new p;
            return function(b, c, d, e) {
                e = e || new p;
                e.subVectors(d, c);
                a.subVectors(b, c);
                e.cross(a);
                b = e.lengthSq();
                return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
            }
        }(),
        barycoordFromPoint: function() {
            var a = new p,
                b = new p,
                c = new p;
            return function(d, e, f, g, h) {
                a.subVectors(g, e);
                b.subVectors(f, e);
                c.subVectors(d, e);
                d = a.dot(a);
                e = a.dot(b);
                f = a.dot(c);
                var k = b.dot(b);
                g = b.dot(c);
                var m =
                    d * k - e * e;
                h = h || new p;
                if (0 === m) return h.set(-2, -1, -1);
                m = 1 / m;
                k = (k * f - e * g) * m;
                d = (d * g - e * f) * m;
                return h.set(1 - k - d, d, k)
            }
        }(),
        containsPoint: function() {
            var a = new p;
            return function(b, c, d, e) {
                b = Ua.barycoordFromPoint(b, c, d, e, a);
                return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
            }
        }()
    });
    Object.assign(Ua.prototype, {
        set: function(a, b, c) {
            this.a.copy(a);
            this.b.copy(b);
            this.c.copy(c);
            return this
        },
        setFromPointsAndIndices: function(a, b, c, d) {
            this.a.copy(a[b]);
            this.b.copy(a[c]);
            this.c.copy(a[d]);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a.copy(a.a);
            this.b.copy(a.b);
            this.c.copy(a.c);
            return this
        },
        area: function() {
            var a = new p,
                b = new p;
            return function() {
                a.subVectors(this.c, this.b);
                b.subVectors(this.a, this.b);
                return .5 * a.cross(b).length()
            }
        }(),
        midpoint: function(a) {
            return (a || new p).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(a) {
            return Ua.normal(this.a, this.b, this.c, a)
        },
        plane: function(a) {
            return (a || new wa).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(a, b) {
            return Ua.barycoordFromPoint(a,
                this.a, this.b, this.c, b)
        },
        containsPoint: function(a) {
            return Ua.containsPoint(a, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var a = new wa,
                b = [new Hb, new Hb, new Hb],
                c = new p,
                d = new p;
            return function(e, f) {
                var g = f || new p,
                    h = Infinity;
                a.setFromCoplanarPoints(this.a, this.b, this.c);
                a.projectPoint(e, c);
                if (!0 === this.containsPoint(c)) g.copy(c);
                else {
                    b[0].set(this.a, this.b);
                    b[1].set(this.b, this.c);
                    b[2].set(this.c, this.a);
                    for (var k = 0; k < b.length; k++) {
                        b[k].closestPointToPoint(c, !0, d);
                        var m = c.distanceToSquared(d);
                        m < h && (h = m, g.copy(d))
                    }
                }
                return g
            }
        }(),
        equals: function(a) {
            return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
        }
    });
    Object.assign(Va.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.normal.copy(a.normal);
            this.color.copy(a.color);
            this.materialIndex = a.materialIndex;
            for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone();
            b = 0;
            for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] =
                a.vertexColors[b].clone();
            return this
        }
    });
    Ia.prototype = Object.create(Z.prototype);
    Ia.prototype.constructor = Ia;
    Ia.prototype.isMeshBasicMaterial = !0;
    Ia.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        return this
    };
    Object.defineProperty(L.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(L.prototype, {
        isBufferAttribute: !0,
        setArray: function(a) {
            if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== a ? a.length / this.itemSize : 0;
            this.array = a
        },
        setDynamic: function(a) {
            this.dynamic = a;
            return this
        },
        copy: function(a) {
            this.array = new a.array.constructor(a.array);
            this.itemSize = a.itemSize;
            this.count = a.count;
            this.normalized = a.normalized;
            this.dynamic = a.dynamic;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.itemSize;
            c *= b.itemSize;
            for (var d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d];
            return this
        },
        copyArray: function(a) {
            this.array.set(a);
            return this
        },
        copyColorsArray: function(a) {
            for (var b =
                    this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new H);
                b[c++] = f.r;
                b[c++] = f.g;
                b[c++] = f.b
            }
            return this
        },
        copyIndicesArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                b[c++] = f.a;
                b[c++] = f.b;
                b[c++] = f.c
            }
            return this
        },
        copyVector2sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
                    d), f = new D);
                b[c++] = f.x;
                b[c++] = f.y
            }
            return this
        },
        copyVector3sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new p);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z
            }
            return this
        },
        copyVector4sArray: function(a) {
            for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new ga);
                b[c++] = f.x;
                b[c++] = f.y;
                b[c++] = f.z;
                b[c++] = f.w
            }
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        getX: function(a) {
            return this.array[a * this.itemSize]
        },
        setX: function(a, b) {
            this.array[a * this.itemSize] = b;
            return this
        },
        getY: function(a) {
            return this.array[a * this.itemSize + 1]
        },
        setY: function(a, b) {
            this.array[a * this.itemSize + 1] = b;
            return this
        },
        getZ: function(a) {
            return this.array[a * this.itemSize + 2]
        },
        setZ: function(a, b) {
            this.array[a * this.itemSize + 2] = b;
            return this
        },
        getW: function(a) {
            return this.array[a * this.itemSize +
                3]
        },
        setW: function(a, b) {
            this.array[a * this.itemSize + 3] = b;
            return this
        },
        setXY: function(a, b, c) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a *= this.itemSize;
            this.array[a + 0] = b;
            this.array[a + 1] = c;
            this.array[a + 2] = d;
            this.array[a + 3] = e;
            return this
        },
        onUpload: function(a) {
            this.onUploadCallback = a;
            return this
        },
        clone: function() {
            return (new this.constructor(this.array,
                this.itemSize)).copy(this)
        }
    });
    rc.prototype = Object.create(L.prototype);
    rc.prototype.constructor = rc;
    sc.prototype = Object.create(L.prototype);
    sc.prototype.constructor = sc;
    tc.prototype = Object.create(L.prototype);
    tc.prototype.constructor = tc;
    uc.prototype = Object.create(L.prototype);
    uc.prototype.constructor = uc;
    ib.prototype = Object.create(L.prototype);
    ib.prototype.constructor = ib;
    vc.prototype = Object.create(L.prototype);
    vc.prototype.constructor = vc;
    jb.prototype = Object.create(L.prototype);
    jb.prototype.constructor =
        jb;
    C.prototype = Object.create(L.prototype);
    C.prototype.constructor = C;
    wc.prototype = Object.create(L.prototype);
    wc.prototype.constructor = wc;
    Object.assign(Ke.prototype, {
        computeGroups: function(a) {
            var b, c = [],
                d = void 0;
            a = a.faces;
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                f.materialIndex !== d && (d = f.materialIndex, void 0 !== b && (b.count = 3 * e - b.start, c.push(b)), b = {
                    start: 3 * e,
                    materialIndex: d
                })
            }
            void 0 !== b && (b.count = 3 * e - b.start, c.push(b));
            this.groups = c
        },
        fromGeometry: function(a) {
            var b = a.faces,
                c = a.vertices,
                d = a.faceVertexUvs,
                e = d[0] && 0 < d[0].length,
                f = d[1] && 0 < d[1].length,
                g = a.morphTargets,
                h = g.length,
                k;
            if (0 < h) {
                k = [];
                for (var m = 0; m < h; m++) k[m] = [];
                this.morphTargets.position = k
            }
            var l = a.morphNormals,
                q = l.length,
                n;
            if (0 < q) {
                n = [];
                for (m = 0; m < q; m++) n[m] = [];
                this.morphTargets.normal = n
            }
            for (var r = a.skinIndices, p = a.skinWeights, t = r.length === c.length, y = p.length === c.length, m = 0; m < b.length; m++) {
                var x = b[m];
                this.vertices.push(c[x.a], c[x.b], c[x.c]);
                var v = x.vertexNormals;
                3 === v.length ? this.normals.push(v[0], v[1], v[2]) : (v = x.normal, this.normals.push(v, v,
                    v));
                v = x.vertexColors;
                3 === v.length ? this.colors.push(v[0], v[1], v[2]) : (v = x.color, this.colors.push(v, v, v));
                !0 === e && (v = d[0][m], void 0 !== v ? this.uvs.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m), this.uvs.push(new D, new D, new D)));
                !0 === f && (v = d[1][m], void 0 !== v ? this.uvs2.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m), this.uvs2.push(new D, new D, new D)));
                for (v = 0; v < h; v++) {
                    var G = g[v].vertices;
                    k[v].push(G[x.a],
                        G[x.b], G[x.c])
                }
                for (v = 0; v < q; v++) G = l[v].vertexNormals[m], n[v].push(G.a, G.b, G.c);
                t && this.skinIndices.push(r[x.a], r[x.b], r[x.c]);
                y && this.skinWeights.push(p[x.a], p[x.b], p[x.c])
            }
            this.computeGroups(a);
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this
        }
    });
    var Td = 0;
    Object.assign(M.prototype, sa.prototype, {
        isGeometry: !0,
        applyMatrix: function(a) {
            for (var b =
                    (new Ga).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
            c = 0;
            for (d = this.faces.length; c < d; c++) {
                a = this.faces[c];
                a.normal.applyMatrix3(b).normalize();
                for (var e = 0, f = a.vertexNormals.length; e < f; e++) a.vertexNormals[e].applyMatrix3(b).normalize()
            }
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
            return this
        },
        rotateX: function() {
            var a = new J;
            return function(b) {
                a.makeRotationX(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateY: function() {
            var a = new J;
            return function(b) {
                a.makeRotationY(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateZ: function() {
            var a = new J;
            return function(b) {
                a.makeRotationZ(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        translate: function() {
            var a = new J;
            return function(b, c, d) {
                a.makeTranslation(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        scale: function() {
            var a = new J;
            return function(b, c, d) {
                a.makeScale(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        lookAt: function() {
            var a = new B;
            return function(b) {
                a.lookAt(b);
                a.updateMatrix();
                this.applyMatrix(a.matrix)
            }
        }(),
        fromBufferGeometry: function(a) {
            function b(a, b, d, e) {
                var f = void 0 !== g ? [l[a].clone(), l[b].clone(), l[d].clone()] : [],
                    r = void 0 !== h ? [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()] : [];
                e = new Va(a, b, d, f, r, e);
                c.faces.push(e);
                void 0 !== k && c.faceVertexUvs[0].push([q[a].clone(), q[b].clone(), q[d].clone()]);
                void 0 !== m && c.faceVertexUvs[1].push([n[a].clone(), n[b].clone(), n[d].clone()])
            }
            var c = this,
                d = null !== a.index ? a.index.array : void 0,
                e = a.attributes,
                f = e.position.array,
                g = void 0 !== e.normal ? e.normal.array : void 0,
                h = void 0 !== e.color ? e.color.array : void 0,
                k = void 0 !== e.uv ? e.uv.array : void 0,
                m = void 0 !== e.uv2 ? e.uv2.array : void 0;
            void 0 !== m && (this.faceVertexUvs[1] = []);
            for (var l = [], q = [], n = [], r = e = 0; e < f.length; e += 3, r += 2) c.vertices.push(new p(f[e], f[e + 1], f[e + 2])), void 0 !== g && l.push(new p(g[e], g[e + 1], g[e + 2])), void 0 !== h && c.colors.push(new H(h[e], h[e + 1], h[e + 2])), void 0 !== k && q.push(new D(k[r], k[r + 1])), void 0 !== m && n.push(new D(m[r], m[r + 1]));
            var z = a.groups;
            if (0 < z.length)
                for (e = 0; e < z.length; e++)
                    for (var f =
                            z[e], t = f.start, y = f.count, r = t, t = t + y; r < t; r += 3) void 0 !== d ? b(d[r], d[r + 1], d[r + 2], f.materialIndex) : b(r, r + 1, r + 2, f.materialIndex);
            else if (void 0 !== d)
                for (e = 0; e < d.length; e += 3) b(d[e], d[e + 1], d[e + 2]);
            else
                for (e = 0; e < f.length / 3; e += 3) b(e, e + 1, e + 2);
            this.computeFaceNormals();
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            return this
        },
        center: function() {
            this.computeBoundingBox();
            var a = this.boundingBox.getCenter().negate();
            this.translate(a.x,
                a.y, a.z);
            return a
        },
        normalize: function() {
            this.computeBoundingSphere();
            var a = this.boundingSphere.center,
                b = this.boundingSphere.radius,
                b = 0 === b ? 1 : 1 / b,
                c = new J;
            c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
            this.applyMatrix(c);
            return this
        },
        computeFaceNormals: function() {
            for (var a = new p, b = new p, c = 0, d = this.faces.length; c < d; c++) {
                var e = this.faces[c],
                    f = this.vertices[e.a],
                    g = this.vertices[e.b];
                a.subVectors(this.vertices[e.c], g);
                b.subVectors(f, g);
                a.cross(b);
                a.normalize();
                e.normal.copy(a)
            }
        },
        computeVertexNormals: function(a) {
            void 0 ===
                a && (a = !0);
            var b, c, d;
            d = Array(this.vertices.length);
            b = 0;
            for (c = this.vertices.length; b < c; b++) d[b] = new p;
            if (a) {
                var e, f, g, h = new p,
                    k = new p;
                a = 0;
                for (b = this.faces.length; a < b; a++) c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h)
            } else
                for (this.computeFaceNormals(), a = 0, b = this.faces.length; a < b; a++) c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
            b = 0;
            for (c = this.vertices.length; b <
                c; b++) d[b].normalize();
            a = 0;
            for (b = this.faces.length; a < b; a++) c = this.faces[a], e = c.vertexNormals, 3 === e.length ? (e[0].copy(d[c.a]), e[1].copy(d[c.b]), e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(), e[1] = d[c.b].clone(), e[2] = d[c.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var a, b, c;
            this.computeFaceNormals();
            a = 0;
            for (b = this.faces.length; a < b; a++) {
                c = this.faces[a];
                var d = c.vertexNormals;
                3 === d.length ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] =
                    c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var a, b, c, d, e;
            c = 0;
            for (d = this.faces.length; c < d; c++)
                for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] =
                    e.vertexNormals[a].clone();
            var f = new M;
            f.faces = this.faces;
            a = 0;
            for (b = this.morphTargets.length; a < b; a++) {
                if (!this.morphNormals[a]) {
                    this.morphNormals[a] = {};
                    this.morphNormals[a].faceNormals = [];
                    this.morphNormals[a].vertexNormals = [];
                    e = this.morphNormals[a].faceNormals;
                    var g = this.morphNormals[a].vertexNormals,
                        h, k;
                    c = 0;
                    for (d = this.faces.length; c < d; c++) h = new p, k = {
                        a: new p,
                        b: new p,
                        c: new p
                    }, e.push(h), g.push(k)
                }
                g = this.morphNormals[a];
                f.vertices = this.morphTargets[a].vertices;
                f.computeFaceNormals();
                f.computeVertexNormals();
                c = 0;
                for (d = this.faces.length; c < d; c++) e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])
            }
            c = 0;
            for (d = this.faces.length; c < d; c++) e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
        },
        computeBoundingBox: function() {
            null ===
                this.boundingBox && (this.boundingBox = new Ta);
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new Ca);
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(a, b, c) {
            if (!1 === (a && a.isGeometry)) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
            else {
                var d, e = this.vertices.length,
                    f = this.vertices,
                    g = a.vertices,
                    h = this.faces,
                    k = a.faces,
                    m = this.faceVertexUvs[0],
                    l = a.faceVertexUvs[0],
                    q = this.colors,
                    n = a.colors;
                void 0 === c && (c = 0);
                void 0 !== b && (d = (new Ga).getNormalMatrix(b));
                a = 0;
                for (var r = g.length; a < r; a++) {
                    var p = g[a].clone();
                    void 0 !== b && p.applyMatrix4(b);
                    f.push(p)
                }
                a = 0;
                for (r = n.length; a < r; a++) q.push(n[a].clone());
                a = 0;
                for (r = k.length; a < r; a++) {
                    var g = k[a],
                        t = g.vertexNormals,
                        n = g.vertexColors,
                        q = new Va(g.a + e, g.b + e, g.c + e);
                    q.normal.copy(g.normal);
                    void 0 !== d && q.normal.applyMatrix3(d).normalize();
                    b = 0;
                    for (f = t.length; b < f; b++) p = t[b].clone(), void 0 !== d && p.applyMatrix3(d).normalize(), q.vertexNormals.push(p);
                    q.color.copy(g.color);
                    b = 0;
                    for (f = n.length; b < f; b++) p = n[b], q.vertexColors.push(p.clone());
                    q.materialIndex = g.materialIndex + c;
                    h.push(q)
                }
                a = 0;
                for (r = l.length; a < r; a++)
                    if (c = l[a], d = [], void 0 !== c) {
                        b = 0;
                        for (f = c.length; b < f; b++) d.push(c[b].clone());
                        m.push(d)
                    }
            }
        },
        mergeMesh: function(a) {
            !1 === (a && a.isMesh) ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a) : (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix))
        },
        mergeVertices: function() {
            var a = {},
                b = [],
                c = [],
                d, e = Math.pow(10, 4),
                f, g;
            f = 0;
            for (g = this.vertices.length; f <
                g; f++) d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
            a = [];
            f = 0;
            for (g = this.faces.length; f < g; f++)
                for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++)
                    if (e[d] === e[(d + 1) % 3]) {
                        a.push(f);
                        break
                    }
            for (f = a.length - 1; 0 <= f; f--)
                for (e = a[f], this.faces.splice(e, 1), c = 0, g = this.faceVertexUvs.length; c < g; c++) this.faceVertexUvs[c].splice(e, 1);
            f = this.vertices.length - b.length;
            this.vertices =
                b;
            return f
        },
        sortFacesByMaterialIndex: function() {
            for (var a = this.faces, b = a.length, c = 0; c < b; c++) a[c]._id = c;
            a.sort(function(a, b) {
                return a.materialIndex - b.materialIndex
            });
            var d = this.faceVertexUvs[0],
                e = this.faceVertexUvs[1],
                f, g;
            d && d.length === b && (f = []);
            e && e.length === b && (g = []);
            for (c = 0; c < b; c++) {
                var h = a[c]._id;
                f && f.push(d[h]);
                g && g.push(e[h])
            }
            f && (this.faceVertexUvs[0] = f);
            g && (this.faceVertexUvs[1] = g)
        },
        toJSON: function() {
            function a(a, b, c) {
                return c ? a | 1 << b : a & ~(1 << b)
            }

            function b(a) {
                var b = a.x.toString() + a.y.toString() +
                    a.z.toString();
                if (void 0 !== m[b]) return m[b];
                m[b] = k.length / 3;
                k.push(a.x, a.y, a.z);
                return m[b]
            }

            function c(a) {
                var b = a.r.toString() + a.g.toString() + a.b.toString();
                if (void 0 !== q[b]) return q[b];
                q[b] = l.length;
                l.push(a.getHex());
                return q[b]
            }

            function d(a) {
                var b = a.x.toString() + a.y.toString();
                if (void 0 !== r[b]) return r[b];
                r[b] = n.length / 2;
                n.push(a.x, a.y);
                return r[b]
            }
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            e.uuid = this.uuid;
            e.type = this.type;
            "" !== this.name && (e.name = this.name);
            if (void 0 !==
                this.parameters) {
                var f = this.parameters,
                    g;
                for (g in f) void 0 !== f[g] && (e[g] = f[g]);
                return e
            }
            f = [];
            for (g = 0; g < this.vertices.length; g++) {
                var h = this.vertices[g];
                f.push(h.x, h.y, h.z)
            }
            var h = [],
                k = [],
                m = {},
                l = [],
                q = {},
                n = [],
                r = {};
            for (g = 0; g < this.faces.length; g++) {
                var p = this.faces[g],
                    t = void 0 !== this.faceVertexUvs[0][g],
                    y = 0 < p.normal.length(),
                    x = 0 < p.vertexNormals.length,
                    v = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b,
                    G = 0 < p.vertexColors.length,
                    w = 0,
                    w = a(w, 0, 0),
                    w = a(w, 1, !0),
                    w = a(w, 2, !1),
                    w = a(w, 3, t),
                    w = a(w, 4, y),
                    w = a(w, 5, x),
                    w = a(w, 6,
                        v),
                    w = a(w, 7, G);
                h.push(w);
                h.push(p.a, p.b, p.c);
                h.push(p.materialIndex);
                t && (t = this.faceVertexUvs[0][g], h.push(d(t[0]), d(t[1]), d(t[2])));
                y && h.push(b(p.normal));
                x && (y = p.vertexNormals, h.push(b(y[0]), b(y[1]), b(y[2])));
                v && h.push(c(p.color));
                G && (p = p.vertexColors, h.push(c(p[0]), c(p[1]), c(p[2])))
            }
            e.data = {};
            e.data.vertices = f;
            e.data.normals = k;
            0 < l.length && (e.data.colors = l);
            0 < n.length && (e.data.uvs = [n]);
            e.data.faces = h;
            return e
        },
        clone: function() {
            return (new M).copy(this)
        },
        copy: function(a) {
            var b, c, d, e, f, g;
            this.vertices =
                [];
            this.colors = [];
            this.faces = [];
            this.faceVertexUvs = [
                []
            ];
            this.morphTargets = [];
            this.morphNormals = [];
            this.skinWeights = [];
            this.skinIndices = [];
            this.lineDistances = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            d = a.vertices;
            b = 0;
            for (c = d.length; b < c; b++) this.vertices.push(d[b].clone());
            d = a.colors;
            b = 0;
            for (c = d.length; b < c; b++) this.colors.push(d[b].clone());
            d = a.faces;
            b = 0;
            for (c = d.length; b < c; b++) this.faces.push(d[b].clone());
            b = 0;
            for (c = a.faceVertexUvs.length; b < c; b++) {
                var h = a.faceVertexUvs[b];
                void 0 ===
                    this.faceVertexUvs[b] && (this.faceVertexUvs[b] = []);
                d = 0;
                for (e = h.length; d < e; d++) {
                    var k = h[d],
                        m = [];
                    f = 0;
                    for (g = k.length; f < g; f++) m.push(k[f].clone());
                    this.faceVertexUvs[b].push(m)
                }
            }
            f = a.morphTargets;
            b = 0;
            for (c = f.length; b < c; b++) {
                g = {};
                g.name = f[b].name;
                if (void 0 !== f[b].vertices)
                    for (g.vertices = [], d = 0, e = f[b].vertices.length; d < e; d++) g.vertices.push(f[b].vertices[d].clone());
                if (void 0 !== f[b].normals)
                    for (g.normals = [], d = 0, e = f[b].normals.length; d < e; d++) g.normals.push(f[b].normals[d].clone());
                this.morphTargets.push(g)
            }
            f =
                a.morphNormals;
            b = 0;
            for (c = f.length; b < c; b++) {
                g = {};
                if (void 0 !== f[b].vertexNormals)
                    for (g.vertexNormals = [], d = 0, e = f[b].vertexNormals.length; d < e; d++) h = f[b].vertexNormals[d], k = {}, k.a = h.a.clone(), k.b = h.b.clone(), k.c = h.c.clone(), g.vertexNormals.push(k);
                if (void 0 !== f[b].faceNormals)
                    for (g.faceNormals = [], d = 0, e = f[b].faceNormals.length; d < e; d++) g.faceNormals.push(f[b].faceNormals[d].clone());
                this.morphNormals.push(g)
            }
            d = a.skinWeights;
            b = 0;
            for (c = d.length; b < c; b++) this.skinWeights.push(d[b].clone());
            d = a.skinIndices;
            b =
                0;
            for (c = d.length; b < c; b++) this.skinIndices.push(d[b].clone());
            d = a.lineDistances;
            b = 0;
            for (c = d.length; b < c; b++) this.lineDistances.push(d[b]);
            b = a.boundingBox;
            null !== b && (this.boundingBox = b.clone());
            b = a.boundingSphere;
            null !== b && (this.boundingSphere = b.clone());
            this.elementsNeedUpdate = a.elementsNeedUpdate;
            this.verticesNeedUpdate = a.verticesNeedUpdate;
            this.uvsNeedUpdate = a.uvsNeedUpdate;
            this.normalsNeedUpdate = a.normalsNeedUpdate;
            this.colorsNeedUpdate = a.colorsNeedUpdate;
            this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
            this.groupsNeedUpdate = a.groupsNeedUpdate;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    I.MaxIndex = 65535;
    Object.assign(I.prototype, sa.prototype, {
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(a) {
            Array.isArray(a) ? this.index = new(65535 < Sd(a) ? jb : ib)(a, 1) : this.index = a
        },
        addAttribute: function(a, b, c) {
            if (!1 === (b && b.isBufferAttribute) && !1 === (b && b.isInterleavedBufferAttribute)) console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
                this.addAttribute(a, new L(b, c));
            else if ("index" === a) console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(b);
            else return this.attributes[a] = b, this
        },
        getAttribute: function(a) {
            return this.attributes[a]
        },
        removeAttribute: function(a) {
            delete this.attributes[a];
            return this
        },
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: void 0 !== c ? c : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(a, b) {
            this.drawRange.start = a;
            this.drawRange.count =
                b
        },
        applyMatrix: function(a) {
            var b = this.attributes.position;
            void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0);
            b = this.attributes.normal;
            void 0 !== b && ((new Ga).getNormalMatrix(a).applyToBufferAttribute(b), b.needsUpdate = !0);
            null !== this.boundingBox && this.computeBoundingBox();
            null !== this.boundingSphere && this.computeBoundingSphere();
            return this
        },
        rotateX: function() {
            var a = new J;
            return function(b) {
                a.makeRotationX(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateY: function() {
            var a = new J;
            return function(b) {
                a.makeRotationY(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        rotateZ: function() {
            var a = new J;
            return function(b) {
                a.makeRotationZ(b);
                this.applyMatrix(a);
                return this
            }
        }(),
        translate: function() {
            var a = new J;
            return function(b, c, d) {
                a.makeTranslation(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        scale: function() {
            var a = new J;
            return function(b, c, d) {
                a.makeScale(b, c, d);
                this.applyMatrix(a);
                return this
            }
        }(),
        lookAt: function() {
            var a = new B;
            return function(b) {
                a.lookAt(b);
                a.updateMatrix();
                this.applyMatrix(a.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var a = this.boundingBox.getCenter().negate();
            this.translate(a.x, a.y, a.z);
            return a
        },
        setFromObject: function(a) {
            var b = a.geometry;
            if (a.isPoints || a.isLine) {
                a = new C(3 * b.vertices.length, 3);
                var c = new C(3 * b.colors.length, 3);
                this.addAttribute("position", a.copyVector3sArray(b.vertices));
                this.addAttribute("color", c.copyColorsArray(b.colors));
                b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new C(b.lineDistances.length, 1), this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
                null !== b.boundingSphere &&
                    (this.boundingSphere = b.boundingSphere.clone());
                null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
            } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);
            return this
        },
        updateFromObject: function(a) {
            var b = a.geometry;
            if (a.isMesh) {
                var c = b.__directGeometry;
                !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1);
                if (void 0 === c) return this.fromGeometry(b);
                c.verticesNeedUpdate = b.verticesNeedUpdate;
                c.normalsNeedUpdate = b.normalsNeedUpdate;
                c.colorsNeedUpdate = b.colorsNeedUpdate;
                c.uvsNeedUpdate = b.uvsNeedUpdate;
                c.groupsNeedUpdate = b.groupsNeedUpdate;
                b.verticesNeedUpdate = !1;
                b.normalsNeedUpdate = !1;
                b.colorsNeedUpdate = !1;
                b.uvsNeedUpdate = !1;
                b.groupsNeedUpdate = !1;
                b = c
            }!0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
            !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1);
            !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors),
                c.needsUpdate = !0), b.colorsNeedUpdate = !1);
            b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
            b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
            b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
            return this
        },
        fromGeometry: function(a) {
            a.__directGeometry = (new Ke).fromGeometry(a);
            return this.fromDirectGeometry(a.__directGeometry)
        },
        fromDirectGeometry: function(a) {
            var b = new Float32Array(3 * a.vertices.length);
            this.addAttribute("position", (new L(b, 3)).copyVector3sArray(a.vertices));
            0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.addAttribute("normal", (new L(b, 3)).copyVector3sArray(a.normals)));
            0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.addAttribute("color", (new L(b, 3)).copyColorsArray(a.colors)));
            0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.addAttribute("uv", (new L(b, 2)).copyVector2sArray(a.uvs)));
            0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length), this.addAttribute("uv2", (new L(b, 2)).copyVector2sArray(a.uvs2)));
            0 < a.indices.length && (b = new(65535 < Sd(a.indices) ? Uint32Array : Uint16Array)(3 * a.indices.length), this.setIndex((new L(b, 1)).copyIndicesArray(a.indices)));
            this.groups = a.groups;
            for (var c in a.morphTargets) {
                for (var b = [], d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
                    var g = d[e],
                        h = new C(3 * g.length, 3);
                    b.push(h.copyVector3sArray(g))
                }
                this.morphAttributes[c] = b
            }
            0 < a.skinIndices.length && (c = new C(4 *
                a.skinIndices.length, 4), this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
            0 < a.skinWeights.length && (c = new C(4 * a.skinWeights.length, 4), this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
            null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
            null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
            return this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new Ta);
            var a = this.attributes.position;
            void 0 !== a ? this.boundingBox.setFromBufferAttribute(a) :
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var a = new Ta,
                b = new p;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new Ca);
                var c = this.attributes.position;
                if (c) {
                    var d = this.boundingSphere.center;
                    a.setFromBufferAttribute(c);
                    a.getCenter(d);
                    for (var e = 0, f = 0, g = c.count; f < g; f++) b.x = c.getX(f), b.y = c.getY(f), b.z = c.getZ(f), e = Math.max(e, d.distanceToSquared(b));
                    this.boundingSphere.radius = Math.sqrt(e);
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var a = this.index,
                b = this.attributes,
                c = this.groups;
            if (b.position) {
                var d = b.position.array;
                if (void 0 === b.normal) this.addAttribute("normal", new L(new Float32Array(d.length), 3));
                else
                    for (var e = b.normal.array, f = 0, g = e.length; f < g; f++) e[f] = 0;
                var e = b.normal.array,
                    h, k, m, l = new p,
                    q = new p,
                    n = new p,
                    r = new p,
                    z = new p;
                if (a) {
                    a = a.array;
                    0 === c.length && this.addGroup(0, a.length);
                    for (var t = 0, y = c.length; t < y; ++t)
                        for (f = c[t], g = f.start, h = f.count, f = g, g += h; f < g; f += 3) h = 3 * a[f + 0], k = 3 * a[f + 1], m = 3 * a[f + 2], l.fromArray(d, h), q.fromArray(d, k), n.fromArray(d, m), r.subVectors(n, q), z.subVectors(l, q), r.cross(z), e[h] += r.x, e[h + 1] += r.y,
                            e[h + 2] += r.z, e[k] += r.x, e[k + 1] += r.y, e[k + 2] += r.z, e[m] += r.x, e[m + 1] += r.y, e[m + 2] += r.z
                } else
                    for (f = 0, g = d.length; f < g; f += 9) l.fromArray(d, f), q.fromArray(d, f + 3), n.fromArray(d, f + 6), r.subVectors(n, q), z.subVectors(l, q), r.cross(z), e[f] = r.x, e[f + 1] = r.y, e[f + 2] = r.z, e[f + 3] = r.x, e[f + 4] = r.y, e[f + 5] = r.z, e[f + 6] = r.x, e[f + 7] = r.y, e[f + 8] = r.z;
                this.normalizeNormals();
                b.normal.needsUpdate = !0
            }
        },
        merge: function(a, b) {
            if (!1 === (a && a.isBufferGeometry)) console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
                a);
            else {
                void 0 === b && (b = 0);
                var c = this.attributes,
                    d;
                for (d in c)
                    if (void 0 !== a.attributes[d])
                        for (var e = c[d].array, f = a.attributes[d], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++, f++) e[f] = g[h];
                return this
            }
        },
        normalizeNormals: function() {
            for (var a = this.attributes.normal, b, c, d, e, f = 0, g = a.count; f < g; f++) b = a.getX(f), c = a.getY(f), d = a.getZ(f), e = 1 / Math.sqrt(b * b + c * c + d * d), a.setXYZ(f, b * e, c * e, d * e)
        },
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var a = new I,
                b = this.index.array,
                c = this.attributes,
                d;
            for (d in c) {
                for (var e = c[d], f = e.array, e = e.itemSize, g = new f.constructor(b.length * e), h, k = 0, m = 0, l = b.length; m < l; m++) {
                    h = b[m] * e;
                    for (var q = 0; q < e; q++) g[k++] = f[h++]
                }
                a.addAttribute(d, new L(g, e))
            }
            return a
        },
        toJSON: function() {
            var a = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            a.uuid = this.uuid;
            a.type = this.type;
            "" !== this.name && (a.name = this.name);
            if (void 0 !== this.parameters) {
                var b = this.parameters,
                    c;
                for (c in b) void 0 !== b[c] &&
                    (a[c] = b[c]);
                return a
            }
            a.data = {
                attributes: {}
            };
            var d = this.index;
            null !== d && (b = Array.prototype.slice.call(d.array), a.data.index = {
                type: d.array.constructor.name,
                array: b
            });
            d = this.attributes;
            for (c in d) {
                var e = d[c],
                    b = Array.prototype.slice.call(e.array);
                a.data.attributes[c] = {
                    itemSize: e.itemSize,
                    type: e.array.constructor.name,
                    array: b,
                    normalized: e.normalized
                }
            }
            c = this.groups;
            0 < c.length && (a.data.groups = JSON.parse(JSON.stringify(c)));
            c = this.boundingSphere;
            null !== c && (a.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            });
            return a
        },
        clone: function() {
            return (new I).copy(this)
        },
        copy: function(a) {
            var b, c, d;
            this.index = null;
            this.attributes = {};
            this.morphAttributes = {};
            this.groups = [];
            this.boundingSphere = this.boundingBox = null;
            this.name = a.name;
            c = a.index;
            null !== c && this.setIndex(c.clone());
            c = a.attributes;
            for (b in c) this.addAttribute(b, c[b].clone());
            var e = a.morphAttributes;
            for (b in e) {
                var f = [],
                    g = e[b];
                c = 0;
                for (d = g.length; c < d; c++) f.push(g[c].clone());
                this.morphAttributes[b] = f
            }
            b = a.groups;
            c = 0;
            for (d = b.length; c < d; c++) e =
                b[c], this.addGroup(e.start, e.count, e.materialIndex);
            b = a.boundingBox;
            null !== b && (this.boundingBox = b.clone());
            b = a.boundingSphere;
            null !== b && (this.boundingSphere = b.clone());
            this.drawRange.start = a.drawRange.start;
            this.drawRange.count = a.drawRange.count;
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    xa.prototype = Object.assign(Object.create(B.prototype), {
        constructor: xa,
        isMesh: !0,
        setDrawMode: function(a) {
            this.drawMode = a
        },
        copy: function(a) {
            B.prototype.copy.call(this, a);
            this.drawMode = a.drawMode;
            return this
        },
        updateMorphTargets: function() {
            var a = this.geometry.morphTargets;
            if (void 0 !== a && 0 < a.length) {
                this.morphTargetInfluences = [];
                this.morphTargetDictionary = {};
                for (var b = 0, c = a.length; b < c; b++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[a[b].name] = b
            }
        },
        raycast: function() {
            function a(a, b, c, d, e, f, g) {
                Ua.barycoordFromPoint(a, b, c, d, t);
                e.multiplyScalar(t.x);
                f.multiplyScalar(t.y);
                g.multiplyScalar(t.z);
                e.add(f).add(g);
                return e.clone()
            }

            function b(a, b, c, d, e, f, g) {
                var h = a.material;
                if (null ===
                    (1 === h.side ? c.intersectTriangle(f, e, d, !0, g) : c.intersectTriangle(d, e, f, 2 !== h.side, g))) return null;
                x.copy(g);
                x.applyMatrix4(a.matrixWorld);
                c = b.ray.origin.distanceTo(x);
                return c < b.near || c > b.far ? null : {
                    distance: c,
                    point: x.clone(),
                    object: a
                }
            }

            function c(c, d, e, f, m, l, u, q) {
                g.fromBufferAttribute(f, l);
                h.fromBufferAttribute(f, u);
                k.fromBufferAttribute(f, q);
                if (c = b(c, d, e, g, h, k, y)) m && (n.fromBufferAttribute(m, l), r.fromBufferAttribute(m, u), z.fromBufferAttribute(m, q), c.uv = a(y, g, h, k, n, r, z)), c.face = new Va(l, u, q, Ua.normal(g,
                    h, k)), c.faceIndex = l;
                return c
            }
            var d = new J,
                e = new hb,
                f = new Ca,
                g = new p,
                h = new p,
                k = new p,
                m = new p,
                l = new p,
                q = new p,
                n = new D,
                r = new D,
                z = new D,
                t = new p,
                y = new p,
                x = new p;
            return function(p, t) {
                var w = this.geometry,
                    x = this.material,
                    C = this.matrixWorld;
                if (void 0 !== x && (null === w.boundingSphere && w.computeBoundingSphere(), f.copy(w.boundingSphere), f.applyMatrix4(C), !1 !== p.ray.intersectsSphere(f) && (d.getInverse(C), e.copy(p.ray).applyMatrix4(d), null === w.boundingBox || !1 !== e.intersectsBox(w.boundingBox)))) {
                    var E;
                    if (w.isBufferGeometry) {
                        var F,
                            D, x = w.index,
                            B = w.attributes.position,
                            C = w.attributes.uv,
                            ca, I;
                        if (null !== x)
                            for (ca = 0, I = x.count; ca < I; ca += 3) {
                                if (w = x.getX(ca), F = x.getX(ca + 1), D = x.getX(ca + 2), E = c(this, p, e, B, C, w, F, D)) E.faceIndex = Math.floor(ca / 3), t.push(E)
                            } else
                                for (ca = 0, I = B.count; ca < I; ca += 3)
                                    if (w = ca, F = ca + 1, D = ca + 2, E = c(this, p, e, B, C, w, F, D)) E.index = w, t.push(E)
                    } else if (w.isGeometry) {
                        var H, C = Array.isArray(x);
                        ca = w.vertices;
                        I = w.faces;
                        F = w.faceVertexUvs[0];
                        0 < F.length && (B = F);
                        for (var J = 0, M = I.length; J < M; J++) {
                            var P = I[J];
                            E = C ? x[P.materialIndex] : x;
                            if (void 0 !==
                                E) {
                                F = ca[P.a];
                                D = ca[P.b];
                                H = ca[P.c];
                                if (!0 === E.morphTargets) {
                                    E = w.morphTargets;
                                    var K = this.morphTargetInfluences;
                                    g.set(0, 0, 0);
                                    h.set(0, 0, 0);
                                    k.set(0, 0, 0);
                                    for (var W = 0, ba = E.length; W < ba; W++) {
                                        var T = K[W];
                                        if (0 !== T) {
                                            var Q = E[W].vertices;
                                            g.addScaledVector(m.subVectors(Q[P.a], F), T);
                                            h.addScaledVector(l.subVectors(Q[P.b], D), T);
                                            k.addScaledVector(q.subVectors(Q[P.c], H), T)
                                        }
                                    }
                                    g.add(F);
                                    h.add(D);
                                    k.add(H);
                                    F = g;
                                    D = h;
                                    H = k
                                }
                                if (E = b(this, p, e, F, D, H, y)) B && B[J] && (K = B[J], n.copy(K[0]), r.copy(K[1]), z.copy(K[2]), E.uv = a(y, F, D, H, n, r, z)), E.face =
                                    P, E.faceIndex = J, t.push(E)
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    Ib.prototype = Object.create(M.prototype);
    Ib.prototype.constructor = Ib;
    kb.prototype = Object.create(I.prototype);
    kb.prototype.constructor = kb;
    xc.prototype = Object.create(M.prototype);
    xc.prototype.constructor = xc;
    lb.prototype = Object.create(I.prototype);
    lb.prototype.constructor = lb;
    Oa.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Oa,
        isCamera: !0,
        copy: function(a) {
            B.prototype.copy.call(this,
                a);
            this.matrixWorldInverse.copy(a.matrixWorldInverse);
            this.projectionMatrix.copy(a.projectionMatrix);
            return this
        },
        getWorldDirection: function() {
            var a = new qa;
            return function(b) {
                b = b || new p;
                this.getWorldQuaternion(a);
                return b.set(0, 0, -1).applyQuaternion(a)
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        }
    });
    ya.prototype = Object.assign(Object.create(Oa.prototype), {
        constructor: ya,
        isPerspectiveCamera: !0,
        copy: function(a) {
            Oa.prototype.copy.call(this, a);
            this.fov = a.fov;
            this.zoom = a.zoom;
            this.near =
                a.near;
            this.far = a.far;
            this.focus = a.focus;
            this.aspect = a.aspect;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            this.filmGauge = a.filmGauge;
            this.filmOffset = a.filmOffset;
            return this
        },
        setFocalLength: function(a) {
            a = .5 * this.getFilmHeight() / a;
            this.fov = 2 * Y.RAD2DEG * Math.atan(a);
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var a = Math.tan(.5 * Y.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / a
        },
        getEffectiveFOV: function() {
            return 2 * Y.RAD2DEG * Math.atan(Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.aspect = a / b;
            this.view = {
                fullWidth: a,
                fullHeight: b,
                offsetX: c,
                offsetY: d,
                width: e,
                height: f
            };
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null;
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = this.near,
                b = a * Math.tan(.5 * Y.DEG2RAD * this.fov) / this.zoom,
                c = 2 * b,
                d = this.aspect * c,
                e = -.5 * d,
                f =
                this.view;
            if (null !== f) var g = f.fullWidth,
                h = f.fullHeight,
                e = e + f.offsetX * d / g,
                b = b - f.offsetY * c / h,
                d = f.width / g * d,
                c = f.height / h * c;
            f = this.filmOffset;
            0 !== f && (e += a * f / this.getFilmWidth());
            this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far)
        },
        toJSON: function(a) {
            a = B.prototype.toJSON.call(this, a);
            a.object.fov = this.fov;
            a.object.zoom = this.zoom;
            a.object.near = this.near;
            a.object.far = this.far;
            a.object.focus = this.focus;
            a.object.aspect = this.aspect;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            a.object.filmGauge =
                this.filmGauge;
            a.object.filmOffset = this.filmOffset;
            return a
        }
    });
    Jb.prototype = Object.assign(Object.create(Oa.prototype), {
        constructor: Jb,
        isOrthographicCamera: !0,
        copy: function(a) {
            Oa.prototype.copy.call(this, a);
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom;
            this.near = a.near;
            this.far = a.far;
            this.zoom = a.zoom;
            this.view = null === a.view ? null : Object.assign({}, a.view);
            return this
        },
        setViewOffset: function(a, b, c, d, e, f) {
            this.view = {
                fullWidth: a,
                fullHeight: b,
                offsetX: c,
                offsetY: d,
                width: e,
                height: f
            };
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null;
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var a = (this.right - this.left) / (2 * this.zoom),
                b = (this.top - this.bottom) / (2 * this.zoom),
                c = (this.right + this.left) / 2,
                d = (this.top + this.bottom) / 2,
                e = c - a,
                c = c + a,
                a = d + b,
                b = d - b;
            if (null !== this.view) var c = this.zoom / (this.view.width / this.view.fullWidth),
                b = this.zoom / (this.view.height / this.view.fullHeight),
                f = (this.right - this.left) / this.view.width,
                d = (this.top - this.bottom) / this.view.height,
                e = e + this.view.offsetX / c * f,
                c = e + this.view.width / c * f,
                a = a - this.view.offsetY / b * d,
                b = a - this.view.height / b * d;
            this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far)
        },
        toJSON: function(a) {
            a = B.prototype.toJSON.call(this, a);
            a.object.zoom = this.zoom;
            a.object.left = this.left;
            a.object.right = this.right;
            a.object.top = this.top;
            a.object.bottom = this.bottom;
            a.object.near = this.near;
            a.object.far = this.far;
            null !== this.view && (a.object.view = Object.assign({}, this.view));
            return a
        }
    });
    var bg = 0;
    Kb.prototype.isFogExp2 = !0;
    Kb.prototype.clone = function() {
        return new Kb(this.color.getHex(), this.density)
    };
    Kb.prototype.toJSON = function(a) {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    };
    Lb.prototype.isFog = !0;
    Lb.prototype.clone = function() {
        return new Lb(this.color.getHex(), this.near, this.far)
    };
    Lb.prototype.toJSON = function(a) {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    };
    md.prototype = Object.assign(Object.create(B.prototype), {
        constructor: md,
        copy: function(a, b) {
            B.prototype.copy.call(this,
                a, b);
            null !== a.background && (this.background = a.background.clone());
            null !== a.fog && (this.fog = a.fog.clone());
            null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
            this.autoUpdate = a.autoUpdate;
            this.matrixAutoUpdate = a.matrixAutoUpdate;
            return this
        },
        toJSON: function(a) {
            var b = B.prototype.toJSON.call(this, a);
            null !== this.background && (b.object.background = this.background.toJSON(a));
            null !== this.fog && (b.object.fog = this.fog.toJSON());
            return b
        }
    });
    Yd.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Yd,
        isLensFlare: !0,
        copy: function(a) {
            B.prototype.copy.call(this, a);
            this.positionScreen.copy(a.positionScreen);
            this.customUpdateCallback = a.customUpdateCallback;
            for (var b = 0, c = a.lensFlares.length; b < c; b++) this.lensFlares.push(a.lensFlares[b]);
            return this
        },
        add: function(a, b, c, d, e, f) {
            void 0 === b && (b = -1);
            void 0 === c && (c = 0);
            void 0 === f && (f = 1);
            void 0 === e && (e = new H(16777215));
            void 0 === d && (d = 1);
            c = Math.min(c, Math.max(0, c));
            this.lensFlares.push({
                texture: a,
                size: b,
                distance: c,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: f,
                color: e,
                blending: d
            })
        },
        updateLensFlares: function() {
            var a, b = this.lensFlares.length,
                c, d = 2 * -this.positionScreen.x,
                e = 2 * -this.positionScreen.y;
            for (a = 0; a < b; a++) c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation)
        }
    });
    cb.prototype = Object.create(Z.prototype);
    cb.prototype.constructor = cb;
    cb.prototype.isSpriteMaterial = !0;
    cb.prototype.copy = function(a) {
        Z.prototype.copy.call(this,
            a);
        this.color.copy(a.color);
        this.map = a.map;
        this.rotation = a.rotation;
        return this
    };
    Ac.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Ac,
        isSprite: !0,
        raycast: function() {
            var a = new p,
                b = new p,
                c = new p;
            return function(d, e) {
                b.setFromMatrixPosition(this.matrixWorld);
                d.ray.closestPointToPoint(b, a);
                c.setFromMatrixScale(this.matrixWorld);
                var f = c.x * c.y / 4;
                b.distanceToSquared(a) > f || (f = d.ray.origin.distanceTo(a), f < d.near || f > d.far || e.push({
                    distance: f,
                    point: a.clone(),
                    face: null,
                    object: this
                }))
            }
        }(),
        clone: function() {
            return (new this.constructor(this.material)).copy(this)
        }
    });
    Bc.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Bc,
        copy: function(a) {
            B.prototype.copy.call(this, a, !1);
            a = a.levels;
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                this.addLevel(d.object.clone(), d.distance)
            }
            return this
        },
        addLevel: function(a, b) {
            void 0 === b && (b = 0);
            b = Math.abs(b);
            for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);
            c.splice(d, 0, {
                distance: b,
                object: a
            });
            this.add(a)
        },
        getObjectForDistance: function(a) {
            for (var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++);
            return b[c -
                1].object
        },
        raycast: function() {
            var a = new p;
            return function(b, c) {
                a.setFromMatrixPosition(this.matrixWorld);
                var d = b.ray.origin.distanceTo(a);
                this.getObjectForDistance(d).raycast(b, c)
            }
        }(),
        update: function() {
            var a = new p,
                b = new p;
            return function(c) {
                var d = this.levels;
                if (1 < d.length) {
                    a.setFromMatrixPosition(c.matrixWorld);
                    b.setFromMatrixPosition(this.matrixWorld);
                    c = a.distanceTo(b);
                    d[0].object.visible = !0;
                    for (var e = 1, f = d.length; e < f; e++)
                        if (c >= d[e].distance) d[e - 1].object.visible = !1, d[e].object.visible = !0;
                        else break;
                    for (; e < f; e++) d[e].object.visible = !1
                }
            }
        }(),
        toJSON: function(a) {
            a = B.prototype.toJSON.call(this, a);
            a.object.levels = [];
            for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                a.object.levels.push({
                    object: e.object.uuid,
                    distance: e.distance
                })
            }
            return a
        }
    });
    Object.assign(Cc.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var a = 0, b = this.bones.length; a < b; a++) {
                var c = new J;
                this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
                this.boneInverses.push(c)
            }
        },
        pose: function() {
            var a, b, c;
            b = 0;
            for (c = this.bones.length; b <
                c; b++)(a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
            b = 0;
            for (c = this.bones.length; b < c; b++)
                if (a = this.bones[b]) a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
        },
        update: function() {
            var a = new J,
                b = new J;
            return function() {
                for (var c = this.bones, d = this.boneInverses, e = this.boneMatrices, f = this.boneTexture, g = 0, h = c.length; g < h; g++) a.multiplyMatrices(c[g] ? c[g].matrixWorld :
                    b, d[g]), a.toArray(e, 16 * g);
                void 0 !== f && (f.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new Cc(this.bones, this.boneInverses)
        }
    });
    nd.prototype = Object.assign(Object.create(B.prototype), {
        constructor: nd,
        isBone: !0
    });
    od.prototype = Object.assign(Object.create(xa.prototype), {
        constructor: od,
        isSkinnedMesh: !0,
        initBones: function() {
            var a = [],
                b, c, d, e;
            if (this.geometry && void 0 !== this.geometry.bones) {
                d = 0;
                for (e = this.geometry.bones.length; d < e; d++) c = this.geometry.bones[d], b = new nd, a.push(b), b.name = c.name, b.position.fromArray(c.pos),
                    b.quaternion.fromArray(c.rotq), void 0 !== c.scl && b.scale.fromArray(c.scl);
                d = 0;
                for (e = this.geometry.bones.length; d < e; d++) c = this.geometry.bones[d], -1 !== c.parent && null !== c.parent && void 0 !== a[c.parent] ? a[c.parent].add(a[d]) : this.add(a[d])
            }
            this.updateMatrixWorld(!0);
            return a
        },
        bind: function(a, b) {
            this.skeleton = a;
            void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
            this.bindMatrix.copy(b);
            this.bindMatrixInverse.getInverse(b)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            var a,
                b;
            if (this.geometry && this.geometry.isGeometry)
                for (b = 0; b < this.geometry.skinWeights.length; b++) {
                    var c = this.geometry.skinWeights[b];
                    a = 1 / c.lengthManhattan();
                    Infinity !== a ? c.multiplyScalar(a) : c.set(1, 0, 0, 0)
                } else if (this.geometry && this.geometry.isBufferGeometry) {
                    var c = new ga,
                        d = this.geometry.attributes.skinWeight;
                    for (b = 0; b < d.count; b++) c.x = d.getX(b), c.y = d.getY(b), c.z = d.getZ(b), c.w = d.getW(b), a = 1 / c.lengthManhattan(), Infinity !== a ? c.multiplyScalar(a) : c.set(1, 0, 0, 0), d.setXYZW(b, c.x, c.y, c.z, c.w)
                }
        },
        updateMatrixWorld: function(a) {
            xa.prototype.updateMatrixWorld.call(this,
                a);
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    pa.prototype = Object.create(Z.prototype);
    pa.prototype.constructor = pa;
    pa.prototype.isLineBasicMaterial = !0;
    pa.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.linecap = a.linecap;
        this.linejoin = a.linejoin;
        return this
    };
    La.prototype = Object.assign(Object.create(B.prototype), {
        constructor: La,
        isLine: !0,
        raycast: function() {
            var a = new J,
                b = new hb,
                c = new Ca;
            return function(d, e) {
                var f = d.linePrecision,
                    f = f * f,
                    g = this.geometry,
                    h = this.matrixWorld;
                null === g.boundingSphere && g.computeBoundingSphere();
                c.copy(g.boundingSphere);
                c.applyMatrix4(h);
                if (!1 !== d.ray.intersectsSphere(c)) {
                    a.getInverse(h);
                    b.copy(d.ray).applyMatrix4(a);
                    var k = new p,
                        m = new p,
                        h = new p,
                        l = new p,
                        q = this && this.isLineSegments ? 2 : 1;
                    if (g.isBufferGeometry) {
                        var n = g.index,
                            r = g.attributes.position.array;
                        if (null !== n)
                            for (var n = n.array, g = 0, z = n.length - 1; g < z; g += q) {
                                var t = n[g + 1];
                                k.fromArray(r, 3 * n[g]);
                                m.fromArray(r, 3 * t);
                                t = b.distanceSqToSegment(k, m, l, h);
                                t > f || (l.applyMatrix4(this.matrixWorld), t = d.ray.origin.distanceTo(l), t < d.near || t > d.far || e.push({
                                    distance: t,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                            } else
                                for (g = 0, z = r.length / 3 - 1; g < z; g += q) k.fromArray(r,
                                    3 * g), m.fromArray(r, 3 * g + 3), t = b.distanceSqToSegment(k, m, l, h), t > f || (l.applyMatrix4(this.matrixWorld), t = d.ray.origin.distanceTo(l), t < d.near || t > d.far || e.push({
                                    distance: t,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                    } else if (g.isGeometry)
                        for (k = g.vertices, m = k.length, g = 0; g < m - 1; g += q) t = b.distanceSqToSegment(k[g], k[g + 1], l, h), t > f || (l.applyMatrix4(this.matrixWorld), t = d.ray.origin.distanceTo(l), t < d.near || t > d.far || e.push({
                            distance: t,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    da.prototype = Object.assign(Object.create(La.prototype), {
        constructor: da,
        isLineSegments: !0
    });
    pd.prototype = Object.assign(Object.create(La.prototype), {
        constructor: pd,
        isLineLoop: !0
    });
    Ma.prototype = Object.create(Z.prototype);
    Ma.prototype.constructor = Ma;
    Ma.prototype.isPointsMaterial = !0;
    Ma.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.size = a.size;
        this.sizeAttenuation = a.sizeAttenuation;
        return this
    };
    Mb.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Mb,
        isPoints: !0,
        raycast: function() {
            var a = new J,
                b = new hb,
                c = new Ca;
            return function(d, e) {
                function f(a, c) {
                    var f = b.distanceSqToPoint(a);
                    if (f < l) {
                        var h = b.closestPointToPoint(a);
                        h.applyMatrix4(k);
                        var m = d.ray.origin.distanceTo(h);
                        m < d.near || m > d.far || e.push({
                            distance: m,
                            distanceToRay: Math.sqrt(f),
                            point: h.clone(),
                            index: c,
                            face: null,
                            object: g
                        })
                    }
                }
                var g = this,
                    h = this.geometry,
                    k = this.matrixWorld,
                    m = d.params.Points.threshold;
                null === h.boundingSphere && h.computeBoundingSphere();
                c.copy(h.boundingSphere);
                c.applyMatrix4(k);
                c.radius += m;
                if (!1 !== d.ray.intersectsSphere(c)) {
                    a.getInverse(k);
                    b.copy(d.ray).applyMatrix4(a);
                    var m = m / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = m * m,
                        m = new p;
                    if (h.isBufferGeometry) {
                        var q = h.index,
                            h = h.attributes.position.array;
                        if (null !== q)
                            for (var n = q.array, q = 0, r = n.length; q < r; q++) {
                                var z = n[q];
                                m.fromArray(h, 3 * z);
                                f(m, z)
                            } else
                                for (q = 0, n = h.length / 3; q < n; q++) m.fromArray(h,
                                    3 * q), f(m, q)
                    } else
                        for (m = h.vertices, q = 0, n = m.length; q < n; q++) f(m[q], q)
                }
            }
        }(),
        clone: function() {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    });
    Dc.prototype = Object.assign(Object.create(B.prototype), {
        constructor: Dc
    });
    qd.prototype = Object.create(X.prototype);
    qd.prototype.constructor = qd;
    Nb.prototype = Object.create(X.prototype);
    Nb.prototype.constructor = Nb;
    Nb.prototype.isCompressedTexture = !0;
    rd.prototype = Object.create(X.prototype);
    rd.prototype.constructor = rd;
    Ec.prototype = Object.create(X.prototype);
    Ec.prototype.constructor = Ec;
    Ec.prototype.isDepthTexture = !0;
    Ob.prototype = Object.create(I.prototype);
    Ob.prototype.constructor = Ob;
    Fc.prototype = Object.create(M.prototype);
    Fc.prototype.constructor = Fc;
    Pb.prototype = Object.create(I.prototype);
    Pb.prototype.constructor = Pb;
    Gc.prototype = Object.create(M.prototype);
    Gc.prototype.constructor = Gc;
    ha.prototype = Object.create(I.prototype);
    ha.prototype.constructor = ha;
    Hc.prototype = Object.create(M.prototype);
    Hc.prototype.constructor = Hc;
    Qb.prototype = Object.create(ha.prototype);
    Qb.prototype.constructor = Qb;
    Ic.prototype = Object.create(M.prototype);
    Ic.prototype.constructor = Ic;
    mb.prototype = Object.create(ha.prototype);
    mb.prototype.constructor = mb;
    Jc.prototype = Object.create(M.prototype);
    Jc.prototype.constructor = Jc;
    Rb.prototype = Object.create(ha.prototype);
    Rb.prototype.constructor = Rb;
    Kc.prototype = Object.create(M.prototype);
    Kc.prototype.constructor = Kc;
    Sb.prototype = Object.create(ha.prototype);
    Sb.prototype.constructor = Sb;
    Lc.prototype = Object.create(M.prototype);
    Lc.prototype.constructor =
        Lc;
    Tb.prototype = Object.create(I.prototype);
    Tb.prototype.constructor = Tb;
    Mc.prototype = Object.create(M.prototype);
    Mc.prototype.constructor = Mc;
    Ub.prototype = Object.create(I.prototype);
    Ub.prototype.constructor = Ub;
    Nc.prototype = Object.create(M.prototype);
    Nc.prototype.constructor = Nc;
    Vb.prototype = Object.create(I.prototype);
    Vb.prototype.constructor = Vb;
    var za = {
        area: function(a) {
            for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++) c += a[d].x * a[e].y - a[e].x * a[d].y;
            return .5 * c
        },
        triangulate: function() {
            return function(a, b) {
                var c =
                    a.length;
                if (3 > c) return null;
                var d = [],
                    e = [],
                    f = [],
                    g, h, k;
                if (0 < za.area(a))
                    for (h = 0; h < c; h++) e[h] = h;
                else
                    for (h = 0; h < c; h++) e[h] = c - 1 - h;
                var m = 2 * c;
                for (h = c - 1; 2 < c;) {
                    if (0 >= m--) {
                        console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                        break
                    }
                    g = h;
                    c <= g && (g = 0);
                    h = g + 1;
                    c <= h && (h = 0);
                    k = h + 1;
                    c <= k && (k = 0);
                    var l;
                    a: {
                        var q, n, r, p, t, y, x, v;q = a[e[g]].x;n = a[e[g]].y;r = a[e[h]].x;p = a[e[h]].y;t = a[e[k]].x;y = a[e[k]].y;
                        if (0 >= (r - q) * (y - n) - (p - n) * (t - q)) l = !1;
                        else {
                            var G, w, O, C, E, F, D, B, I, H;
                            G = t - r;
                            w = y - p;
                            O = q - t;
                            C = n - y;
                            E = r - q;
                            F = p - n;
                            for (l = 0; l < c; l++)
                                if (x = a[e[l]].x, v = a[e[l]].y, !(x === q && v === n || x === r && v === p || x === t && v === y) && (D = x - q, B = v - n, I = x - r, H = v - p, x -= t, v -= y, I = G * H - w * I, D = E * B - F * D, B = O * v - C * x, I >= -Number.EPSILON && B >= -Number.EPSILON && D >= -Number.EPSILON)) {
                                    l = !1;
                                    break a
                                }
                            l = !0
                        }
                    }
                    if (l) {
                        d.push([a[e[g]], a[e[h]], a[e[k]]]);
                        f.push([e[g], e[h], e[k]]);
                        g = h;
                        for (k = h + 1; k < c; g++, k++) e[g] = e[k];
                        c--;
                        m = 2 * c
                    }
                }
                return b ? f : d
            }
        }(),
        triangulateShape: function(a, b) {
            function c(a) {
                var b = a.length;
                2 < b && a[b - 1].equals(a[0]) && a.pop()
            }

            function d(a, b, c) {
                return a.x !== b.x ? a.x < b.x ? a.x <=
                    c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
            }

            function e(a, b, c, e, f) {
                var g = b.x - a.x,
                    h = b.y - a.y,
                    k = e.x - c.x,
                    m = e.y - c.y,
                    l = a.x - c.x,
                    n = a.y - c.y,
                    q = h * k - g * m,
                    u = h * l - g * n;
                if (Math.abs(q) > Number.EPSILON) {
                    if (0 < q) {
                        if (0 > u || u > q) return [];
                        k = m * l - k * n;
                        if (0 > k || k > q) return []
                    } else {
                        if (0 < u || u < q) return [];
                        k = m * l - k * n;
                        if (0 < k || k < q) return []
                    }
                    if (0 === k) return !f || 0 !== u && u !== q ? [a] : [];
                    if (k === q) return !f || 0 !== u && u !== q ? [b] : [];
                    if (0 === u) return [c];
                    if (u === q) return [e];
                    f = k / q;
                    return [{
                        x: a.x + f * g,
                        y: a.y + f * h
                    }]
                }
                if (0 !== u || m * l !==
                    k * n) return [];
                h = 0 === g && 0 === h;
                k = 0 === k && 0 === m;
                if (h && k) return a.x !== c.x || a.y !== c.y ? [] : [a];
                if (h) return d(c, e, a) ? [a] : [];
                if (k) return d(a, b, c) ? [c] : [];
                0 !== g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), c.x < e.x ? (b = c, q = c.x, m = e, c = e.x) : (b = e, q = e.x, m = c, c = c.x)) : (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), c.y < e.y ? (b = c, q = c.y, m = e, c = e.y) : (b = e, q = e.y, m = c, c = c.y));
                return k <= q ? a < q ? [] : a === q ? f ? [] : [b] : a <= c ? [b, h] : [b, m] : k > c ? [] : k === c ? f ? [] : [g] : a <= c ? [g, h] : [g, m]
            }

            function f(a, b, c, d) {
                var e = b.x - a.x,
                    f = b.y - a.y;
                b = c.x - a.x;
                c = c.y - a.y;
                var g = d.x - a.x;
                d = d.y - a.y;
                a = e * c - f * b;
                e = e * d - f * g;
                return Math.abs(a) > Number.EPSILON ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
            }
            c(a);
            b.forEach(c);
            var g, h, k, m, l, q = {};
            k = a.concat();
            g = 0;
            for (h = b.length; g < h; g++) Array.prototype.push.apply(k, b[g]);
            g = 0;
            for (h = k.length; g < h; g++) l = k[g].x + ":" + k[g].y, void 0 !== q[l] && console.warn("THREE.ShapeUtils: Duplicate point", l, g), q[l] = g;
            g = function(a, b) {
                function c(a, b) {
                    var d = h.length - 1,
                        e = a - 1;
                    0 > e && (e = d);
                    var g = a + 1;
                    g > d && (g = 0);
                    d = f(h[a], h[e], h[g], k[b]);
                    if (!d) return !1;
                    d = k.length -
                        1;
                    e = b - 1;
                    0 > e && (e = d);
                    g = b + 1;
                    g > d && (g = 0);
                    return (d = f(k[b], k[e], k[g], h[a])) ? !0 : !1
                }

                function d(a, b) {
                    var c, f;
                    for (c = 0; c < h.length; c++)
                        if (f = c + 1, f %= h.length, f = e(a, b, h[c], h[f], !0), 0 < f.length) return !0;
                    return !1
                }

                function g(a, c) {
                    var d, f, h, k;
                    for (d = 0; d < m.length; d++)
                        for (f = b[m[d]], h = 0; h < f.length; h++)
                            if (k = h + 1, k %= f.length, k = e(a, c, f[h], f[k], !0), 0 < k.length) return !0;
                    return !1
                }
                var h = a.concat(),
                    k, m = [],
                    l, n, q, u, p, C = [],
                    D, B, I, H = 0;
                for (l = b.length; H < l; H++) m.push(H);
                D = 0;
                for (var J = 2 * m.length; 0 < m.length;) {
                    J--;
                    if (0 > J) {
                        console.log("Infinite Loop! Holes left:" +
                            m.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (n = D; n < h.length; n++) {
                        q = h[n];
                        l = -1;
                        for (H = 0; H < m.length; H++)
                            if (u = m[H], p = q.x + ":" + q.y + ":" + u, void 0 === C[p]) {
                                k = b[u];
                                for (B = 0; B < k.length; B++)
                                    if (u = k[B], c(n, B) && !d(q, u) && !g(q, u)) {
                                        l = B;
                                        m.splice(H, 1);
                                        D = h.slice(0, n + 1);
                                        u = h.slice(n);
                                        B = k.slice(l);
                                        I = k.slice(0, l + 1);
                                        h = D.concat(B).concat(I).concat(u);
                                        D = n;
                                        break
                                    }
                                if (0 <= l) break;
                                C[p] = !0
                            }
                        if (0 <= l) break
                    }
                }
                return h
            }(a, b);
            var n = za.triangulate(g, !1);
            g = 0;
            for (h = n.length; g < h; g++)
                for (m = n[g], k = 0; 3 > k; k++) l = m[k].x + ":" + m[k].y, l = q[l], void 0 !==
                    l && (m[k] = l);
            return n.concat()
        },
        isClockWise: function(a) {
            return 0 > za.area(a)
        }
    };
    db.prototype = Object.create(M.prototype);
    db.prototype.constructor = db;
    Fa.prototype = Object.create(I.prototype);
    Fa.prototype.constructor = Fa;
    Fa.prototype.getArrays = function() {
        var a = this.getAttribute("position"),
            a = a ? Array.prototype.slice.call(a.array) : [],
            b = this.getAttribute("uv"),
            b = b ? Array.prototype.slice.call(b.array) : [],
            c = this.index,
            c = c ? Array.prototype.slice.call(c.array) : [];
        return {
            position: a,
            uv: b,
            index: c
        }
    };
    Fa.prototype.addShapeList =
        function(a, b) {
            var c = a.length;
            b.arrays = this.getArrays();
            for (var d = 0; d < c; d++) this.addShape(a[d], b);
            this.setIndex(b.arrays.index);
            this.addAttribute("position", new C(b.arrays.position, 3));
            this.addAttribute("uv", new C(b.arrays.uv, 2))
        };
    Fa.prototype.addShape = function(a, b) {
        function c(a, b, c) {
            b || console.error("THREE.ExtrudeGeometry: vec does not exist");
            return b.clone().multiplyScalar(c).add(a)
        }

        function d(a, b, c) {
            var d, e, f;
            e = a.x - b.x;
            f = a.y - b.y;
            d = c.x - a.x;
            var g = c.y - a.y,
                h = e * e + f * f;
            if (Math.abs(e * g - f * d) > Number.EPSILON) {
                var k =
                    Math.sqrt(h),
                    m = Math.sqrt(d * d + g * g),
                    h = b.x - f / k;
                b = b.y + e / k;
                g = ((c.x - g / m - h) * g - (c.y + d / m - b) * d) / (e * g - f * d);
                d = h + e * g - a.x;
                e = b + f * g - a.y;
                f = d * d + e * e;
                if (2 >= f) return new D(d, e);
                f = Math.sqrt(f / 2)
            } else a = !1, e > Number.EPSILON ? d > Number.EPSILON && (a = !0) : e < -Number.EPSILON ? d < -Number.EPSILON && (a = !0) : Math.sign(f) === Math.sign(g) && (a = !0), a ? (d = -f, f = Math.sqrt(h)) : (d = e, e = f, f = Math.sqrt(h / 2));
            return new D(d / f, e / f)
        }

        function e(a, b) {
            var c, d;
            for (N = a.length; 0 <= --N;) {
                c = N;
                d = N - 1;
                0 > d && (d = a.length - 1);
                var e, f = G + 2 * y;
                for (e = 0; e < f; e++) {
                    var g = da * e,
                        m = da *
                        (e + 1),
                        n = b + d + g,
                        q = b + d + m,
                        m = b + c + m;
                    h(b + c + g);
                    h(n);
                    h(m);
                    h(n);
                    h(q);
                    h(m);
                    g = l.length / 3;
                    g = E.generateSideWallUV(Z, l, g - 6, g - 3, g - 2, g - 1);
                    k(g[0]);
                    k(g[1]);
                    k(g[3]);
                    k(g[1]);
                    k(g[2]);
                    k(g[3])
                }
            }
        }

        function f(a, b, c) {
            r.push(a);
            r.push(b);
            r.push(c)
        }

        function g(a, b, c) {
            h(a);
            h(b);
            h(c);
            a = l.length / 3;
            a = E.generateTopUV(Z, l, a - 3, a - 2, a - 1);
            k(a[0]);
            k(a[1]);
            k(a[2])
        }

        function h(a) {
            q.push(l.length / 3);
            l.push(r[3 * a + 0]);
            l.push(r[3 * a + 1]);
            l.push(r[3 * a + 2])
        }

        function k(a) {
            n.push(a.x);
            n.push(a.y)
        }
        var m = b.arrays ? b.arrays : this.getArrays(),
            l = m.position,
            q =
            m.index,
            n = m.uv,
            r = [],
            m = void 0 !== b.amount ? b.amount : 100,
            z = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
            t = void 0 !== b.bevelSize ? b.bevelSize : z - 2,
            y = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
            x = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
            v = void 0 !== b.curveSegments ? b.curveSegments : 12,
            G = void 0 !== b.steps ? b.steps : 1,
            w = b.extrudePath,
            B, I = !1,
            E = void 0 !== b.UVGenerator ? b.UVGenerator : db.WorldUVGenerator,
            F, H, R, J;
        w && (B = w.getSpacedPoints(G), I = !0, x = !1, F = void 0 !== b.frames ? b.frames : w.computeFrenetFrames(G, !1), H = new p, R = new p,
            J = new p);
        x || (t = z = y = 0);
        var M, L, V, Z = this,
            w = a.extractPoints(v),
            v = w.shape,
            P = w.holes;
        if (w = !za.isClockWise(v)) {
            v = v.reverse();
            L = 0;
            for (V = P.length; L < V; L++) M = P[L], za.isClockWise(M) && (P[L] = M.reverse());
            w = !1
        }
        var K = za.triangulateShape(v, P),
            W = v;
        L = 0;
        for (V = P.length; L < V; L++) M = P[L], v = v.concat(M);
        var ba, T, Q, Y, U, da = v.length,
            X, ga = K.length,
            w = [],
            N = 0;
        Q = W.length;
        ba = Q - 1;
        for (T = N + 1; N < Q; N++, ba++, T++) ba === Q && (ba = 0), T === Q && (T = 0), w[N] = d(W[N], W[ba], W[T]);
        var ha = [],
            ka, ia = w.concat();
        L = 0;
        for (V = P.length; L < V; L++) {
            M = P[L];
            ka = [];
            N = 0;
            Q = M.length;
            ba = Q - 1;
            for (T = N + 1; N < Q; N++, ba++, T++) ba === Q && (ba = 0), T === Q && (T = 0), ka[N] = d(M[N], M[ba], M[T]);
            ha.push(ka);
            ia = ia.concat(ka)
        }
        for (ba = 0; ba < y; ba++) {
            Q = ba / y;
            Y = z * Math.cos(Q * Math.PI / 2);
            T = t * Math.sin(Q * Math.PI / 2);
            N = 0;
            for (Q = W.length; N < Q; N++) U = c(W[N], w[N], T), f(U.x, U.y, -Y);
            L = 0;
            for (V = P.length; L < V; L++)
                for (M = P[L], ka = ha[L], N = 0, Q = M.length; N < Q; N++) U = c(M[N], ka[N], T), f(U.x, U.y, -Y)
        }
        T = t;
        for (N = 0; N < da; N++) U = x ? c(v[N], ia[N], T) : v[N], I ? (R.copy(F.normals[0]).multiplyScalar(U.x), H.copy(F.binormals[0]).multiplyScalar(U.y), J.copy(B[0]).add(R).add(H),
            f(J.x, J.y, J.z)) : f(U.x, U.y, 0);
        for (Q = 1; Q <= G; Q++)
            for (N = 0; N < da; N++) U = x ? c(v[N], ia[N], T) : v[N], I ? (R.copy(F.normals[Q]).multiplyScalar(U.x), H.copy(F.binormals[Q]).multiplyScalar(U.y), J.copy(B[Q]).add(R).add(H), f(J.x, J.y, J.z)) : f(U.x, U.y, m / G * Q);
        for (ba = y - 1; 0 <= ba; ba--) {
            Q = ba / y;
            Y = z * Math.cos(Q * Math.PI / 2);
            T = t * Math.sin(Q * Math.PI / 2);
            N = 0;
            for (Q = W.length; N < Q; N++) U = c(W[N], w[N], T), f(U.x, U.y, m + Y);
            L = 0;
            for (V = P.length; L < V; L++)
                for (M = P[L], ka = ha[L], N = 0, Q = M.length; N < Q; N++) U = c(M[N], ka[N], T), I ? f(U.x, U.y + B[G - 1].y, B[G - 1].x + Y) : f(U.x,
                    U.y, m + Y)
        }(function() {
            var a = l.length / 3;
            if (x) {
                var c = 0 * da;
                for (N = 0; N < ga; N++) X = K[N], g(X[2] + c, X[1] + c, X[0] + c);
                c = da * (G + 2 * y);
                for (N = 0; N < ga; N++) X = K[N], g(X[0] + c, X[1] + c, X[2] + c)
            } else {
                for (N = 0; N < ga; N++) X = K[N], g(X[2], X[1], X[0]);
                for (N = 0; N < ga; N++) X = K[N], g(X[0] + da * G, X[1] + da * G, X[2] + da * G)
            }
            Z.addGroup(a, l.length / 3 - a, void 0 !== b.material ? b.material : 0)
        })();
        (function() {
            var a = l.length / 3,
                c = 0;
            e(W, c);
            c += W.length;
            L = 0;
            for (V = P.length; L < V; L++) M = P[L], e(M, c), c += M.length;
            Z.addGroup(a, l.length / 3 - a, void 0 !== b.extrudeMaterial ? b.extrudeMaterial :
                1)
        })();
        b.arrays || (this.setIndex(q), this.addAttribute("position", new C(l, 3)), this.addAttribute("uv", new C(b.arrays.uv, 2)))
    };
    db.WorldUVGenerator = {
        generateTopUV: function(a, b, c, d, e) {
            a = b[3 * d];
            d = b[3 * d + 1];
            var f = b[3 * e];
            e = b[3 * e + 1];
            return [new D(b[3 * c], b[3 * c + 1]), new D(a, d), new D(f, e)]
        },
        generateSideWallUV: function(a, b, c, d, e, f) {
            a = b[3 * c];
            var g = b[3 * c + 1];
            c = b[3 * c + 2];
            var h = b[3 * d],
                k = b[3 * d + 1];
            d = b[3 * d + 2];
            var m = b[3 * e],
                l = b[3 * e + 1];
            e = b[3 * e + 2];
            var q = b[3 * f],
                n = b[3 * f + 1];
            b = b[3 * f + 2];
            return .01 > Math.abs(g - k) ? [new D(a, 1 - c), new D(h,
                1 - d), new D(m, 1 - e), new D(q, 1 - b)] : [new D(g, 1 - c), new D(k, 1 - d), new D(l, 1 - e), new D(n, 1 - b)]
        }
    };
    Oc.prototype = Object.create(M.prototype);
    Oc.prototype.constructor = Oc;
    Wb.prototype = Object.create(Fa.prototype);
    Wb.prototype.constructor = Wb;
    Pc.prototype = Object.create(M.prototype);
    Pc.prototype.constructor = Pc;
    nb.prototype = Object.create(I.prototype);
    nb.prototype.constructor = nb;
    Qc.prototype = Object.create(M.prototype);
    Qc.prototype.constructor = Qc;
    Xb.prototype = Object.create(I.prototype);
    Xb.prototype.constructor = Xb;
    Rc.prototype =
        Object.create(M.prototype);
    Rc.prototype.constructor = Rc;
    Yb.prototype = Object.create(I.prototype);
    Yb.prototype.constructor = Yb;
    Zb.prototype = Object.create(M.prototype);
    Zb.prototype.constructor = Zb;
    $b.prototype = Object.create(I.prototype);
    $b.prototype.constructor = $b;
    ac.prototype = Object.create(I.prototype);
    ac.prototype.constructor = ac;
    ob.prototype = Object.create(M.prototype);
    ob.prototype.constructor = ob;
    Wa.prototype = Object.create(I.prototype);
    Wa.prototype.constructor = Wa;
    Sc.prototype = Object.create(ob.prototype);
    Sc.prototype.constructor = Sc;
    Tc.prototype = Object.create(Wa.prototype);
    Tc.prototype.constructor = Tc;
    Uc.prototype = Object.create(M.prototype);
    Uc.prototype.constructor = Uc;
    bc.prototype = Object.create(I.prototype);
    bc.prototype.constructor = bc;
    var Na = Object.freeze({
        WireframeGeometry: Ob,
        ParametricGeometry: Fc,
        ParametricBufferGeometry: Pb,
        TetrahedronGeometry: Hc,
        TetrahedronBufferGeometry: Qb,
        OctahedronGeometry: Ic,
        OctahedronBufferGeometry: mb,
        IcosahedronGeometry: Jc,
        IcosahedronBufferGeometry: Rb,
        DodecahedronGeometry: Kc,
        DodecahedronBufferGeometry: Sb,
        PolyhedronGeometry: Gc,
        PolyhedronBufferGeometry: ha,
        TubeGeometry: Lc,
        TubeBufferGeometry: Tb,
        TorusKnotGeometry: Mc,
        TorusKnotBufferGeometry: Ub,
        TorusGeometry: Nc,
        TorusBufferGeometry: Vb,
        TextGeometry: Oc,
        TextBufferGeometry: Wb,
        SphereGeometry: Pc,
        SphereBufferGeometry: nb,
        RingGeometry: Qc,
        RingBufferGeometry: Xb,
        PlaneGeometry: xc,
        PlaneBufferGeometry: lb,
        LatheGeometry: Rc,
        LatheBufferGeometry: Yb,
        ShapeGeometry: Zb,
        ShapeBufferGeometry: $b,
        ExtrudeGeometry: db,
        ExtrudeBufferGeometry: Fa,
        EdgesGeometry: ac,
        ConeGeometry: Sc,
        ConeBufferGeometry: Tc,
        CylinderGeometry: ob,
        CylinderBufferGeometry: Wa,
        CircleGeometry: Uc,
        CircleBufferGeometry: bc,
        BoxGeometry: Ib,
        BoxBufferGeometry: kb
    });
    cc.prototype = Object.create(Ea.prototype);
    cc.prototype.constructor = cc;
    cc.prototype.isShadowMaterial = !0;
    dc.prototype = Object.create(Ea.prototype);
    dc.prototype.constructor = dc;
    dc.prototype.isRawShaderMaterial = !0;
    Ra.prototype = Object.create(Z.prototype);
    Ra.prototype.constructor = Ra;
    Ra.prototype.isMeshStandardMaterial = !0;
    Ra.prototype.copy = function(a) {
        Z.prototype.copy.call(this,
            a);
        this.defines = {
            STANDARD: ""
        };
        this.color.copy(a.color);
        this.roughness = a.roughness;
        this.metalness = a.metalness;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.roughnessMap = a.roughnessMap;
        this.metalnessMap = a.metalnessMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.envMapIntensity = a.envMapIntensity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals =
            a.morphNormals;
        return this
    };
    pb.prototype = Object.create(Ra.prototype);
    pb.prototype.constructor = pb;
    pb.prototype.isMeshPhysicalMaterial = !0;
    pb.prototype.copy = function(a) {
        Ra.prototype.copy.call(this, a);
        this.defines = {
            PHYSICAL: ""
        };
        this.reflectivity = a.reflectivity;
        this.clearCoat = a.clearCoat;
        this.clearCoatRoughness = a.clearCoatRoughness;
        return this
    };
    ta.prototype = Object.create(Z.prototype);
    ta.prototype.constructor = ta;
    ta.prototype.isMeshPhongMaterial = !0;
    ta.prototype.copy = function(a) {
        Z.prototype.copy.call(this,
            a);
        this.color.copy(a.color);
        this.specular.copy(a.specular);
        this.shininess = a.shininess;
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity = a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale =
            a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    qb.prototype =
        Object.create(ta.prototype);
    qb.prototype.constructor = qb;
    qb.prototype.isMeshToonMaterial = !0;
    qb.prototype.copy = function(a) {
        ta.prototype.copy.call(this, a);
        this.gradientMap = a.gradientMap;
        return this
    };
    rb.prototype = Object.create(Z.prototype);
    rb.prototype.constructor = rb;
    rb.prototype.isMeshNormalMaterial = !0;
    rb.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.bumpMap = a.bumpMap;
        this.bumpScale = a.bumpScale;
        this.normalMap = a.normalMap;
        this.normalScale.copy(a.normalScale);
        this.displacementMap = a.displacementMap;
        this.displacementScale = a.displacementScale;
        this.displacementBias = a.displacementBias;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    sb.prototype = Object.create(Z.prototype);
    sb.prototype.constructor = sb;
    sb.prototype.isMeshLambertMaterial = !0;
    sb.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.map = a.map;
        this.lightMap = a.lightMap;
        this.lightMapIntensity =
            a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a.aoMapIntensity;
        this.emissive.copy(a.emissive);
        this.emissiveMap = a.emissiveMap;
        this.emissiveIntensity = a.emissiveIntensity;
        this.specularMap = a.specularMap;
        this.alphaMap = a.alphaMap;
        this.envMap = a.envMap;
        this.combine = a.combine;
        this.reflectivity = a.reflectivity;
        this.refractionRatio = a.refractionRatio;
        this.wireframe = a.wireframe;
        this.wireframeLinewidth = a.wireframeLinewidth;
        this.wireframeLinecap = a.wireframeLinecap;
        this.wireframeLinejoin = a.wireframeLinejoin;
        this.skinning = a.skinning;
        this.morphTargets = a.morphTargets;
        this.morphNormals = a.morphNormals;
        return this
    };
    tb.prototype = Object.create(Z.prototype);
    tb.prototype.constructor = tb;
    tb.prototype.isLineDashedMaterial = !0;
    tb.prototype.copy = function(a) {
        Z.prototype.copy.call(this, a);
        this.color.copy(a.color);
        this.linewidth = a.linewidth;
        this.scale = a.scale;
        this.dashSize = a.dashSize;
        this.gapSize = a.gapSize;
        return this
    };
    var lg = Object.freeze({
            ShadowMaterial: cc,
            SpriteMaterial: cb,
            RawShaderMaterial: dc,
            ShaderMaterial: Ea,
            PointsMaterial: Ma,
            MeshPhysicalMaterial: pb,
            MeshStandardMaterial: Ra,
            MeshPhongMaterial: ta,
            MeshToonMaterial: qb,
            MeshNormalMaterial: rb,
            MeshLambertMaterial: sb,
            MeshDepthMaterial: $a,
            MeshBasicMaterial: Ia,
            LineDashedMaterial: tb,
            LineBasicMaterial: pa,
            Material: Z
        }),
        hd = {
            enabled: !1,
            files: {},
            add: function(a, b) {
                !1 !== this.enabled && (this.files[a] = b)
            },
            get: function(a) {
                if (!1 !== this.enabled) return this.files[a]
            },
            remove: function(a) {
                delete this.files[a]
            },
            clear: function() {
                this.files = {}
            }
        },
        Aa = new Zd;
    Object.assign(ua.prototype, {
        load: function(a, b,
            c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            var e = this,
                f = hd.get(a);
            if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function() {
                b && b(f);
                e.manager.itemEnd(a)
            }, 0), f;
            var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);
            if (g) {
                var h = g[1],
                    k = !!g[2],
                    g = g[3],
                    g = window.decodeURIComponent(g);
                k && (g = window.atob(g));
                try {
                    var m, l = (this.responseType || "").toLowerCase();
                    switch (l) {
                        case "arraybuffer":
                        case "blob":
                            m = new ArrayBuffer(g.length);
                            for (var q = new Uint8Array(m), k = 0; k < g.length; k++) q[k] = g.charCodeAt(k);
                            "blob" === l && (m = new Blob([m], {
                                type: h
                            }));
                            break;
                        case "document":
                            m = (new DOMParser).parseFromString(g, h);
                            break;
                        case "json":
                            m = JSON.parse(g);
                            break;
                        default:
                            m = g
                    }
                    window.setTimeout(function() {
                        b && b(m);
                        e.manager.itemEnd(a)
                    }, 0)
                } catch (p) {
                    window.setTimeout(function() {
                        d && d(p);
                        e.manager.itemEnd(a);
                        e.manager.itemError(a)
                    }, 0)
                }
            } else {
                var n = new XMLHttpRequest;
                n.open("GET", a, !0);
                n.addEventListener("load", function(c) {
                    var f = c.target.response;
                    hd.add(a, f);
                    200 === this.status ? (b && b(f), e.manager.itemEnd(a)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."),
                        b && b(f), e.manager.itemEnd(a)) : (d && d(c), e.manager.itemEnd(a), e.manager.itemError(a))
                }, !1);
                void 0 !== c && n.addEventListener("progress", function(a) {
                    c(a)
                }, !1);
                n.addEventListener("error", function(b) {
                    d && d(b);
                    e.manager.itemEnd(a);
                    e.manager.itemError(a)
                }, !1);
                void 0 !== this.responseType && (n.responseType = this.responseType);
                void 0 !== this.withCredentials && (n.withCredentials = this.withCredentials);
                n.overrideMimeType && n.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (h in this.requestHeader) n.setRequestHeader(h,
                    this.requestHeader[h]);
                n.send(null)
            }
            e.manager.itemStart(a);
            return n
        },
        setPath: function(a) {
            this.path = a;
            return this
        },
        setResponseType: function(a) {
            this.responseType = a;
            return this
        },
        setWithCredentials: function(a) {
            this.withCredentials = a;
            return this
        },
        setMimeType: function(a) {
            this.mimeType = a;
            return this
        },
        setRequestHeader: function(a) {
            this.requestHeader = a;
            return this
        }
    });
    Object.assign(Qe.prototype, {
        load: function(a, b, c, d) {
            function e(e) {
                k.load(a[e], function(a) {
                    a = f._parser(a, !0);
                    g[e] = {
                        width: a.width,
                        height: a.height,
                        format: a.format,
                        mipmaps: a.mipmaps
                    };
                    m += 1;
                    6 === m && (1 === a.mipmapCount && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h))
                }, c, d)
            }
            var f = this,
                g = [],
                h = new Nb;
            h.image = g;
            var k = new ua(this.manager);
            k.setPath(this.path);
            k.setResponseType("arraybuffer");
            if (Array.isArray(a))
                for (var m = 0, l = 0, q = a.length; l < q; ++l) e(l);
            else k.load(a, function(a) {
                a = f._parser(a, !0);
                if (a.isCubemap)
                    for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
                        g[d] = {
                            mipmaps: []
                        };
                        for (var e = 0; e < a.mipmapCount; e++) g[d].mipmaps.push(a.mipmaps[d *
                            a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height
                    } else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
                1 === a.mipmapCount && (h.minFilter = 1006);
                h.format = a.format;
                h.needsUpdate = !0;
                b && b(h)
            }, c, d);
            return h
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    Object.assign($d.prototype, {
        load: function(a, b, c, d) {
            var e = this,
                f = new eb,
                g = new ua(this.manager);
            g.setResponseType("arraybuffer");
            g.load(a, function(a) {
                if (a = e._parser(a)) void 0 !== a.image ? f.image = a.image : void 0 !==
                    a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1008, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), 1 === a.mipmapCount && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a)
            }, c, d);
            return f
        }
    });
    Object.assign(Vc.prototype, {
        load: function(a, b, c, d) {
            void 0 === a && (a = "");
            void 0 !== this.path && (a = this.path + a);
            var e = this,
                f = hd.get(a);
            if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function() {
                b && b(f);
                e.manager.itemEnd(a)
            }, 0), f;
            c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            c.addEventListener("load", function() {
                hd.add(a, this);
                b && b(this);
                e.manager.itemEnd(a)
            }, !1);
            c.addEventListener("error", function(b) {
                d && d(b);
                e.manager.itemEnd(a);
                e.manager.itemError(a)
            }, !1);
            "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin &&
                (c.crossOrigin = this.crossOrigin);
            e.manager.itemStart(a);
            c.src = a;
            return c
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    Object.assign(ae.prototype, {
        load: function(a, b, c, d) {
            function e(c) {
                g.load(a[c], function(a) {
                    f.images[c] = a;
                    h++;
                    6 === h && (f.needsUpdate = !0, b && b(f))
                }, void 0, d)
            }
            var f = new Za,
                g = new Vc(this.manager);
            g.setCrossOrigin(this.crossOrigin);
            g.setPath(this.path);
            var h = 0;
            for (c = 0; c < a.length; ++c) e(c);
            return f
        },
        setCrossOrigin: function(a) {
            this.crossOrigin =
                a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    Object.assign(sd.prototype, {
        load: function(a, b, c, d) {
            var e = new Vc(this.manager);
            e.setCrossOrigin(this.crossOrigin);
            e.setPath(this.path);
            var f = new X;
            f.image = e.load(a, function() {
                var c = 0 < a.search(/\.(jpg|jpeg)$/) || 0 === a.search(/^data\:image\/jpeg/);
                f.format = c ? 1022 : 1023;
                f.needsUpdate = !0;
                void 0 !== b && b(f)
            }, c, d);
            return f
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        setPath: function(a) {
            this.path = a;
            return this
        }
    });
    ia.prototype = Object.assign(Object.create(B.prototype), {
        constructor: ia,
        isLight: !0,
        copy: function(a) {
            B.prototype.copy.call(this, a);
            this.color.copy(a.color);
            this.intensity = a.intensity;
            return this
        },
        toJSON: function(a) {
            a = B.prototype.toJSON.call(this, a);
            a.object.color = this.color.getHex();
            a.object.intensity = this.intensity;
            void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
            void 0 !== this.distance && (a.object.distance = this.distance);
            void 0 !== this.angle && (a.object.angle = this.angle);
            void 0 !== this.decay && (a.object.decay = this.decay);
            void 0 !==
                this.penumbra && (a.object.penumbra = this.penumbra);
            void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
            return a
        }
    });
    td.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: td,
        isHemisphereLight: !0,
        copy: function(a) {
            ia.prototype.copy.call(this, a);
            this.groundColor.copy(a.groundColor);
            return this
        }
    });
    Object.assign(ub.prototype, {
        copy: function(a) {
            this.camera = a.camera.clone();
            this.bias = a.bias;
            this.radius = a.radius;
            this.mapSize.copy(a.mapSize);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var a = {};
            0 !== this.bias && (a.bias = this.bias);
            1 !== this.radius && (a.radius = this.radius);
            if (512 !== this.mapSize.x || 512 !== this.mapSize.y) a.mapSize = this.mapSize.toArray();
            a.camera = this.camera.toJSON(!1).object;
            delete a.camera.matrix;
            return a
        }
    });
    ud.prototype = Object.assign(Object.create(ub.prototype), {
        constructor: ud,
        isSpotLightShadow: !0,
        update: function(a) {
            var b = this.camera,
                c = 2 * Y.RAD2DEG * a.angle,
                d = this.mapSize.width / this.mapSize.height;
            a = a.distance || b.far;
            if (c !== b.fov || d !== b.aspect || a !== b.far) b.fov =
                c, b.aspect = d, b.far = a, b.updateProjectionMatrix()
        }
    });
    vd.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: vd,
        isSpotLight: !0,
        copy: function(a) {
            ia.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.angle = a.angle;
            this.penumbra = a.penumbra;
            this.decay = a.decay;
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    wd.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: wd,
        isPointLight: !0,
        copy: function(a) {
            ia.prototype.copy.call(this, a);
            this.distance = a.distance;
            this.decay = a.decay;
            this.shadow = a.shadow.clone();
            return this
        }
    });
    xd.prototype = Object.assign(Object.create(ub.prototype), {
        constructor: xd
    });
    yd.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: yd,
        isDirectionalLight: !0,
        copy: function(a) {
            ia.prototype.copy.call(this, a);
            this.target = a.target.clone();
            this.shadow = a.shadow.clone();
            return this
        }
    });
    zd.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: zd,
        isAmbientLight: !0
    });
    Ad.prototype = Object.assign(Object.create(ia.prototype), {
        constructor: Ad,
        isRectAreaLight: !0,
        copy: function(a) {
            ia.prototype.copy.call(this, a);
            this.width = a.width;
            this.height = a.height;
            return this
        },
        toJSON: function(a) {
            a = ia.prototype.toJSON.call(this, a);
            a.object.width = this.width;
            a.object.height = this.height;
            return a
        }
    });
    var va = {
        arraySlice: function(a, b, c) {
            return va.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c)
        },
        convertArray: function(a, b, c) {
            return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
        },
        isTypedArray: function(a) {
            return ArrayBuffer.isView(a) && !(a instanceof DataView)
        },
        getKeyframeOrder: function(a) {
            for (var b = a.length, c = Array(b), d = 0; d !== b; ++d) c[d] = d;
            c.sort(function(b, c) {
                return a[b] - a[c]
            });
            return c
        },
        sortedArray: function(a, b, c) {
            for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f)
                for (var h = c[f] * b, k = 0; k !== b; ++k) e[g++] = a[h + k];
            return e
        },
        flattenJSON: function(a, b, c, d) {
            for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];) f = a[e++];
            if (void 0 !== f) {
                var g = f[d];
                if (void 0 !== g)
                    if (Array.isArray(g)) {
                        do g =
                            f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++]; while (void 0 !== f)
                    } else if (void 0 !== g.toArray) {
                    do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f)
                } else {
                    do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++]; while (void 0 !== f)
                }
            }
        }
    };
    Object.assign(Da.prototype, {
        evaluate: function(a) {
            var b = this.parameterPositions,
                c = this._cachedIndex,
                d = b[c],
                e = b[c - 1];
            a: {
                b: {
                    c: {
                        d: if (!(a < d)) {
                            for (var f = c + 2;;) {
                                if (void 0 === d) {
                                    if (a < e) break d;
                                    this._cachedIndex = c = b.length;
                                    return this.afterEnd_(c -
                                        1, a, e)
                                }
                                if (c === f) break;
                                e = d;
                                d = b[++c];
                                if (a < d) break b
                            }
                            d = b.length;
                            break c
                        }if (a >= e) break a;
                        else {
                            f = b[1];
                            a < f && (c = 2, e = f);
                            for (f = c - 2;;) {
                                if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                                if (c === f) break;
                                d = e;
                                e = b[--c - 1];
                                if (a >= e) break b
                            }
                            d = c;
                            c = 0
                        }
                    }
                    for (; c < d;) e = c + d >>> 1,
                    a < b[e] ? d = e : c = e + 1;d = b[c];e = b[c - 1];
                    if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                    if (void 0 === d) return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a)
                }
                this._cachedIndex = c;this.intervalChanged_(c, e, d)
            }
            return this.interpolate_(c,
                e, a, d)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(a) {
            var b = this.resultBuffer,
                c = this.sampleValues,
                d = this.valueSize;
            a *= d;
            for (var e = 0; e !== d; ++e) b[e] = c[a + e];
            return b
        },
        interpolate_: function(a, b, c, d) {
            throw Error("call to abstract method");
        },
        intervalChanged_: function(a, b, c) {}
    });
    Object.assign(Da.prototype, {
        beforeStart_: Da.prototype.copySampleValue_,
        afterEnd_: Da.prototype.copySampleValue_
    });
    Bd.prototype = Object.assign(Object.create(Da.prototype), {
        constructor: Bd,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(a, b, c) {
            var d = this.parameterPositions,
                e = a - 2,
                f = a + 1,
                g = d[e],
                h = d[f];
            if (void 0 === g) switch (this.getSettings_().endingStart) {
                case 2401:
                    e = a;
                    g = 2 * b - c;
                    break;
                case 2402:
                    e = d.length - 2;
                    g = b + d[e] - d[e + 1];
                    break;
                default:
                    e = a, g = c
            }
            if (void 0 === h) switch (this.getSettings_().endingEnd) {
                case 2401:
                    f = a;
                    h = 2 * c - b;
                    break;
                case 2402:
                    f = 1;
                    h = c + d[1] - d[0];
                    break;
                default:
                    f = a - 1, h = b
            }
            a = .5 * (c - b);
            d = this.valueSize;
            this._weightPrev = a / (b - g);
            this._weightNext =
                a / (h - c);
            this._offsetPrev = e * d;
            this._offsetNext = f * d
        },
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            var h = a - g,
                k = this._offsetPrev,
                m = this._offsetNext,
                l = this._weightPrev,
                q = this._weightNext,
                n = (c - b) / (d - b);
            c = n * n;
            d = c * n;
            b = -l * d + 2 * l * c - l * n;
            l = (1 + l) * d + (-1.5 - 2 * l) * c + (-.5 + l) * n + 1;
            n = (-1 - q) * d + (1.5 + q) * c + .5 * n;
            q = q * d - q * c;
            for (c = 0; c !== g; ++c) e[c] = b * f[k + c] + l * f[h + c] + n * f[a + c] + q * f[m + c];
            return e
        }
    });
    Wc.prototype = Object.assign(Object.create(Da.prototype), {
        constructor: Wc,
        interpolate_: function(a,
            b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            var h = a - g;
            b = (c - b) / (d - b);
            c = 1 - b;
            for (d = 0; d !== g; ++d) e[d] = f[h + d] * c + f[a + d] * b;
            return e
        }
    });
    Cd.prototype = Object.assign(Object.create(Da.prototype), {
        constructor: Cd,
        interpolate_: function(a, b, c, d) {
            return this.copySampleValue_(a - 1)
        }
    });
    var Ya;
    Ya = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(a) {
            return new Cd(this.times, this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodLinear: function(a) {
            return new Wc(this.times,
                this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodSmooth: function(a) {
            return new Bd(this.times, this.values, this.getValueSize(), a)
        },
        setInterpolation: function(a) {
            var b;
            switch (a) {
                case 2300:
                    b = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    b = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    b = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === b) {
                b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant)
                    if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                    else throw Error(b);
                console.warn(b)
            } else this.createInterpolant = b
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(a) {
            if (0 !== a)
                for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] += a;
            return this
        },
        scale: function(a) {
            if (1 !== a)
                for (var b = this.times, c =
                        0, d = b.length; c !== d; ++c) b[c] *= a;
            return this
        },
        trim: function(a, b) {
            for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;) ++e;
            for (; - 1 !== f && c[f] > b;) --f;
            ++f;
            if (0 !== e || f !== d) e >= f && (f = Math.max(f, 1), e = f - 1), d = this.getValueSize(), this.times = va.arraySlice(c, e, f), this.values = va.arraySlice(this.values, e * d, f * d);
            return this
        },
        validate: function() {
            var a = !0,
                b = this.getValueSize();
            0 !== b - Math.floor(b) && (console.error("invalid value size in track", this), a = !1);
            var c = this.times,
                b = this.values,
                d = c.length;
            0 === d && (console.error("track is empty",
                this), a = !1);
            for (var e = null, f = 0; f !== d; f++) {
                var g = c[f];
                if ("number" === typeof g && isNaN(g)) {
                    console.error("time is not a valid number", this, f, g);
                    a = !1;
                    break
                }
                if (null !== e && e > g) {
                    console.error("out of order keys", this, f, g, e);
                    a = !1;
                    break
                }
                e = g
            }
            if (void 0 !== b && va.isTypedArray(b))
                for (f = 0, c = b.length; f !== c; ++f)
                    if (d = b[f], isNaN(d)) {
                        console.error("value is not a valid number", this, f, d);
                        a = !1;
                        break
                    }
            return a
        },
        optimize: function() {
            for (var a = this.times, b = this.values, c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1,
                    f = a.length - 1, g = 1; g < f; ++g) {
                var h = !1,
                    k = a[g];
                if (k !== a[g + 1] && (1 !== g || k !== k[0]))
                    if (d) h = !0;
                    else
                        for (var m = g * c, l = m - c, q = m + c, k = 0; k !== c; ++k) {
                            var n = b[m + k];
                            if (n !== b[l + k] || n !== b[q + k]) {
                                h = !0;
                                break
                            }
                        }
                    if (h) {
                        if (g !== e)
                            for (a[e] = a[g], h = g * c, m = e * c, k = 0; k !== c; ++k) b[m + k] = b[h + k];
                        ++e
                    }
            }
            if (0 < f) {
                a[e] = a[f];
                h = f * c;
                m = e * c;
                for (k = 0; k !== c; ++k) b[m + k] = b[h + k];
                ++e
            }
            e !== a.length && (this.times = va.arraySlice(a, 0, e), this.values = va.arraySlice(b, 0, e * c));
            return this
        }
    };
    ec.prototype = Object.assign(Object.create(Ya), {
        constructor: ec,
        ValueTypeName: "vector"
    });
    Dd.prototype = Object.assign(Object.create(Da.prototype), {
        constructor: Dd,
        interpolate_: function(a, b, c, d) {
            var e = this.resultBuffer,
                f = this.sampleValues,
                g = this.valueSize;
            a *= g;
            b = (c - b) / (d - b);
            for (c = a + g; a !== c; a += 4) qa.slerpFlat(e, 0, f, a - g, f, a, b);
            return e
        }
    });
    Xc.prototype = Object.assign(Object.create(Ya), {
        constructor: Xc,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(a) {
            return new Dd(this.times, this.values, this.getValueSize(), a)
        },
        InterpolantFactoryMethodSmooth: void 0
    });
    fc.prototype = Object.assign(Object.create(Ya), {
        constructor: fc,
        ValueTypeName: "number"
    });
    Ed.prototype = Object.assign(Object.create(Ya), {
        constructor: Ed,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Fd.prototype = Object.assign(Object.create(Ya), {
        constructor: Fd,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    });
    Gd.prototype = Object.assign(Object.create(Ya), {
        constructor: Gd,
        ValueTypeName: "color"
    });
    wb.prototype = Ya;
    Ya.constructor = wb;
    Object.assign(wb, {
        parse: function(a) {
            if (void 0 === a.type) throw Error("track type undefined, can not parse");
            var b = wb._getTrackTypeForValueTypeName(a.type);
            if (void 0 === a.times) {
                var c = [],
                    d = [];
                va.flattenJSON(a.keys, c, d, "value");
                a.times = c;
                a.values = d
            }
            return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation)
        },
        toJSON: function(a) {
            var b = a.constructor;
            if (void 0 !== b.toJSON) b =
                b.toJSON(a);
            else {
                var b = {
                        name: a.name,
                        times: va.convertArray(a.times, Array),
                        values: va.convertArray(a.values, Array)
                    },
                    c = a.getInterpolation();
                c !== a.DefaultInterpolation && (b.interpolation = c)
            }
            b.type = a.ValueTypeName;
            return b
        },
        _getTrackTypeForValueTypeName: function(a) {
            switch (a.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return fc;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return ec;
                case "color":
                    return Gd;
                case "quaternion":
                    return Xc;
                case "bool":
                case "boolean":
                    return Fd;
                case "string":
                    return Ed
            }
            throw Error("Unsupported typeName: " + a);
        }
    });
    Object.assign(Ba, {
        parse: function(a) {
            for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e) b.push(wb.parse(c[e]).scale(d));
            return new Ba(a.name, a.duration, b)
        },
        toJSON: function(a) {
            var b = [],
                c = a.tracks;
            a = {
                name: a.name,
                duration: a.duration,
                tracks: b
            };
            for (var d = 0, e = c.length; d !== e; ++d) b.push(wb.toJSON(c[d]));
            return a
        },
        CreateFromMorphTargetSequence: function(a, b, c, d) {
            for (var e = b.length, f = [], g = 0; g < e; g++) {
                var h = [],
                    k = [];
                h.push((g + e - 1) %
                    e, g, (g + 1) % e);
                k.push(0, 1, 0);
                var m = va.getKeyframeOrder(h),
                    h = va.sortedArray(h, 1, m),
                    k = va.sortedArray(k, 1, m);
                d || 0 !== h[0] || (h.push(e), k.push(k[0]));
                f.push((new fc(".morphTargetInfluences[" + b[g].name + "]", h, k)).scale(1 / c))
            }
            return new Ba(a, -1, f)
        },
        findByName: function(a, b) {
            var c = a;
            Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);
            for (var d = 0; d < c.length; d++)
                if (c[d].name === b) return c[d];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(a, b, c) {
            for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0,
                    g = a.length; f < g; f++) {
                var h = a[f],
                    k = h.name.match(e);
                if (k && 1 < k.length) {
                    var m = k[1];
                    (k = d[m]) || (d[m] = k = []);
                    k.push(h)
                }
            }
            a = [];
            for (m in d) a.push(Ba.CreateFromMorphTargetSequence(m, d[m], b, c));
            return a
        },
        parseAnimation: function(a, b) {
            if (!a) return console.error("  no animation in JSONLoader data"), null;
            for (var c = function(a, b, c, d, e) {
                    if (0 !== c.length) {
                        var f = [],
                            g = [];
                        va.flattenJSON(c, f, g, d);
                        0 !== f.length && e.push(new a(b, f, g))
                    }
                }, d = [], e = a.name || "default", f = a.length || -1, g = a.fps || 30, h = a.hierarchy || [], k = 0; k < h.length; k++) {
                var m =
                    h[k].keys;
                if (m && 0 !== m.length)
                    if (m[0].morphTargets) {
                        for (var f = {}, l = 0; l < m.length; l++)
                            if (m[l].morphTargets)
                                for (var q = 0; q < m[l].morphTargets.length; q++) f[m[l].morphTargets[q]] = -1;
                        for (var n in f) {
                            for (var p = [], z = [], q = 0; q !== m[l].morphTargets.length; ++q) {
                                var t = m[l];
                                p.push(t.time);
                                z.push(t.morphTarget === n ? 1 : 0)
                            }
                            d.push(new fc(".morphTargetInfluence[" + n + "]", p, z))
                        }
                        f = f.length * (g || 1)
                    } else l = ".bones[" + b[k].name + "]", c(ec, l + ".position", m, "pos", d), c(Xc, l + ".quaternion", m, "rot", d), c(ec, l + ".scale", m, "scl", d)
            }
            return 0 ===
                d.length ? null : new Ba(e, f, d)
        }
    });
    Object.assign(Ba.prototype, {
        resetDuration: function() {
            for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) var d = this.tracks[b],
                a = Math.max(a, d.times[d.times.length - 1]);
            this.duration = a
        },
        trim: function() {
            for (var a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();
            return this
        }
    });
    Object.assign(Hd.prototype, {
        load: function(a, b, c, d) {
            var e = this,
                f = new ua(e.manager);
            f.setResponseType("json");
            f.load(a, function(a) {
                b(e.parse(a))
            }, c, d)
        },
        setTextures: function(a) {
            this.textures = a
        },
        parse: function(a) {
            function b(a) {
                void 0 === c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
                return c[a]
            }
            var c = this.textures,
                d = new lg[a.type];
            void 0 !== a.uuid && (d.uuid = a.uuid);
            void 0 !== a.name && (d.name = a.name);
            void 0 !== a.color && d.color.setHex(a.color);
            void 0 !== a.roughness && (d.roughness = a.roughness);
            void 0 !== a.metalness && (d.metalness = a.metalness);
            void 0 !== a.emissive && d.emissive.setHex(a.emissive);
            void 0 !==
                a.specular && d.specular.setHex(a.specular);
            void 0 !== a.shininess && (d.shininess = a.shininess);
            void 0 !== a.clearCoat && (d.clearCoat = a.clearCoat);
            void 0 !== a.clearCoatRoughness && (d.clearCoatRoughness = a.clearCoatRoughness);
            void 0 !== a.uniforms && (d.uniforms = a.uniforms);
            void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
            void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
            void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors);
            void 0 !== a.fog && (d.fog = a.fog);
            void 0 !== a.shading && (d.shading = a.shading);
            void 0 !== a.blending && (d.blending = a.blending);
            void 0 !== a.side && (d.side = a.side);
            void 0 !== a.opacity && (d.opacity = a.opacity);
            void 0 !== a.transparent && (d.transparent = a.transparent);
            void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
            void 0 !== a.depthTest && (d.depthTest = a.depthTest);
            void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
            void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
            void 0 !== a.wireframe && (d.wireframe = a.wireframe);
            void 0 !== a.wireframeLinewidth && (d.wireframeLinewidth = a.wireframeLinewidth);
            void 0 !==
                a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap);
            void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin);
            void 0 !== a.skinning && (d.skinning = a.skinning);
            void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
            void 0 !== a.size && (d.size = a.size);
            void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
            void 0 !== a.map && (d.map = b(a.map));
            void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap), d.transparent = !0);
            void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap));
            void 0 !== a.bumpScale && (d.bumpScale =
                a.bumpScale);
            void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
            if (void 0 !== a.normalScale) {
                var e = a.normalScale;
                !1 === Array.isArray(e) && (e = [e, e]);
                d.normalScale = (new D).fromArray(e)
            }
            void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap));
            void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale);
            void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias);
            void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
            void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
            void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
            void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity);
            void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
            void 0 !== a.envMap && (d.envMap = b(a.envMap));
            void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
            void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
            void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity);
            void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
            void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
            void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
            if (void 0 !== a.materials)
                for (var e = 0, f = a.materials.length; e < f; e++) d.materials.push(this.parse(a.materials[e]));
            return d
        }
    });
    Object.assign(be.prototype, {
        load: function(a, b, c, d) {
            var e = this,
                f = new ua(e.manager);
            f.setResponseType("json");
            f.load(a, function(a) {
                b(e.parse(a))
            }, c, d)
        },
        parse: function(a) {
            var b = new I,
                c = a.data.index;
            void 0 !== c && (c = new ff[c.type](c.array), b.setIndex(new L(c, 1)));
            var d = a.data.attributes,
                e;
            for (e in d) {
                var f = d[e],
                    c = new ff[f.type](f.array);
                b.addAttribute(e, new L(c, f.itemSize, f.normalized))
            }
            e = a.data.groups || a.data.drawcalls || a.data.offsets;
            if (void 0 !== e)
                for (c = 0, d = e.length; c !== d; ++c) f = e[c], b.addGroup(f.start, f.count, f.materialIndex);
            a = a.data.boundingSphere;
            void 0 !== a && (e = new p, void 0 !== a.center && e.fromArray(a.center), b.boundingSphere = new Ca(e, a.radius));
            return b
        }
    });
    var ff = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    gc.Handlers = {
        handlers: [],
        add: function(a, b) {
            this.handlers.push(a, b)
        },
        get: function(a) {
            for (var b = this.handlers, c = 0, d = b.length; c < d; c += 2) {
                var e = b[c + 1];
                if (b[c].test(a)) return e
            }
            return null
        }
    };
    Object.assign(gc.prototype, {
        crossOrigin: void 0,
        extractUrlBase: function(a) {
            a = a.split("/");
            if (1 === a.length) return "./";
            a.pop();
            return a.join("/") + "/"
        },
        initMaterials: function(a, b, c) {
            for (var d = [], e = 0; e < a.length; ++e) d[e] = this.createMaterial(a[e], b, c);
            return d
        },
        createMaterial: function() {
            var a = {
                    NoBlending: 0,
                    NormalBlending: 1,
                    AdditiveBlending: 2,
                    SubtractiveBlending: 3,
                    MultiplyBlending: 4,
                    CustomBlending: 5
                },
                b = new H,
                c = new sd,
                d = new Hd;
            return function(e, f, g) {
                function h(a, b, d, e, h) {
                    a = f + a;
                    var m = gc.Handlers.get(a);
                    null !== m ? a = m.load(a) : (c.setCrossOrigin(g), a = c.load(a));
                    void 0 !== b && (a.repeat.fromArray(b), 1 !== b[0] && (a.wrapS = 1E3), 1 !== b[1] && (a.wrapT = 1E3));
                    void 0 !== d && a.offset.fromArray(d);
                    void 0 !== e && ("repeat" === e[0] && (a.wrapS = 1E3), "mirror" === e[0] && (a.wrapS = 1002), "repeat" === e[1] && (a.wrapT = 1E3), "mirror" ===
                        e[1] && (a.wrapT = 1002));
                    void 0 !== h && (a.anisotropy = h);
                    b = Y.generateUUID();
                    k[b] = a;
                    return b
                }
                var k = {},
                    m = {
                        uuid: Y.generateUUID(),
                        type: "MeshLambertMaterial"
                    },
                    l;
                for (l in e) {
                    var q = e[l];
                    switch (l) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            m.name = q;
                            break;
                        case "blending":
                            m.blending = a[q];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            m.color = b.fromArray(q).getHex();
                            break;
                        case "colorSpecular":
                            m.specular = b.fromArray(q).getHex();
                            break;
                        case "colorEmissive":
                            m.emissive = b.fromArray(q).getHex();
                            break;
                        case "specularCoef":
                            m.shininess = q;
                            break;
                        case "shading":
                            "basic" === q.toLowerCase() && (m.type = "MeshBasicMaterial");
                            "phong" === q.toLowerCase() && (m.type = "MeshPhongMaterial");
                            "standard" === q.toLowerCase() && (m.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            m.map = h(q, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            m.emissiveMap = h(q, e.mapEmissiveRepeat, e.mapEmissiveOffset, e.mapEmissiveWrap, e.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            m.lightMap = h(q, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            m.aoMap = h(q, e.mapAORepeat, e.mapAOOffset, e.mapAOWrap,
                                e.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            m.bumpMap = h(q, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            m.bumpScale = q;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            m.normalMap = h(q, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            m.normalScale = [q, q];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            m.specularMap = h(q, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            m.metalnessMap = h(q, e.mapMetalnessRepeat, e.mapMetalnessOffset, e.mapMetalnessWrap, e.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            m.roughnessMap = h(q, e.mapRoughnessRepeat, e.mapRoughnessOffset, e.mapRoughnessWrap, e.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            m.alphaMap = h(q, e.mapAlphaRepeat, e.mapAlphaOffset, e.mapAlphaWrap, e.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            m.side = 1;
                            break;
                        case "doubleSided":
                            m.side =
                                2;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
                            m.opacity = q;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            m[l] = q;
                            break;
                        case "vertexColors":
                            !0 === q && (m.vertexColors = 2);
                            "face" === q && (m.vertexColors = 1);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", l, q)
                    }
                }
                "MeshBasicMaterial" === m.type && delete m.emissive;
                "MeshPhongMaterial" !==
                m.type && delete m.specular;
                1 > m.opacity && (m.transparent = !0);
                d.setTextures(k);
                return d.parse(m)
            }
        }()
    });
    Object.assign(ce.prototype, {
        load: function(a, b, c, d) {
            var e = this,
                f = this.texturePath && "string" === typeof this.texturePath ? this.texturePath : gc.prototype.extractUrlBase(a),
                g = new ua(this.manager);
            g.setResponseType("json");
            g.setWithCredentials(this.withCredentials);
            g.load(a, function(c) {
                var d = c.metadata;
                if (void 0 !== d && (d = d.type, void 0 !== d)) {
                    if ("object" === d.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.");
                        return
                    }
                    if ("scene" === d.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.SceneLoader instead.");
                        return
                    }
                }
                c = e.parse(c, f);
                b(c.geometry, c.materials)
            }, c, d)
        },
        setTexturePath: function(a) {
            this.texturePath = a
        },
        parse: function() {
            return function(a, b) {
                void 0 !== a.data && (a = a.data);
                a.scale = void 0 !== a.scale ? 1 / a.scale : 1;
                var c = new M,
                    d = a,
                    e, f, g, h, k, m, l, q, n, r, z, t, y, x, v = d.faces;
                n = d.vertices;
                var G = d.normals,
                    w = d.colors;
                m = d.scale;
                var B = 0;
                if (void 0 !== d.uvs) {
                    for (e = 0; e < d.uvs.length; e++) d.uvs[e].length &&
                        B++;
                    for (e = 0; e < B; e++) c.faceVertexUvs[e] = []
                }
                h = 0;
                for (k = n.length; h < k;) e = new p, e.x = n[h++] * m, e.y = n[h++] * m, e.z = n[h++] * m, c.vertices.push(e);
                h = 0;
                for (k = v.length; h < k;)
                    if (n = v[h++], r = n & 1, g = n & 2, e = n & 8, l = n & 16, z = n & 32, m = n & 64, n &= 128, r) {
                        r = new Va;
                        r.a = v[h];
                        r.b = v[h + 1];
                        r.c = v[h + 3];
                        t = new Va;
                        t.a = v[h + 1];
                        t.b = v[h + 2];
                        t.c = v[h + 3];
                        h += 4;
                        g && (g = v[h++], r.materialIndex = g, t.materialIndex = g);
                        g = c.faces.length;
                        if (e)
                            for (e = 0; e < B; e++)
                                for (y = d.uvs[e], c.faceVertexUvs[e][g] = [], c.faceVertexUvs[e][g + 1] = [], f = 0; 4 > f; f++) q = v[h++], x = y[2 * q], q = y[2 * q + 1], x =
                                    new D(x, q), 2 !== f && c.faceVertexUvs[e][g].push(x), 0 !== f && c.faceVertexUvs[e][g + 1].push(x);
                        l && (l = 3 * v[h++], r.normal.set(G[l++], G[l++], G[l]), t.normal.copy(r.normal));
                        if (z)
                            for (e = 0; 4 > e; e++) l = 3 * v[h++], z = new p(G[l++], G[l++], G[l]), 2 !== e && r.vertexNormals.push(z), 0 !== e && t.vertexNormals.push(z);
                        m && (m = v[h++], m = w[m], r.color.setHex(m), t.color.setHex(m));
                        if (n)
                            for (e = 0; 4 > e; e++) m = v[h++], m = w[m], 2 !== e && r.vertexColors.push(new H(m)), 0 !== e && t.vertexColors.push(new H(m));
                        c.faces.push(r);
                        c.faces.push(t)
                    } else {
                        r = new Va;
                        r.a = v[h++];
                        r.b = v[h++];
                        r.c = v[h++];
                        g && (g = v[h++], r.materialIndex = g);
                        g = c.faces.length;
                        if (e)
                            for (e = 0; e < B; e++)
                                for (y = d.uvs[e], c.faceVertexUvs[e][g] = [], f = 0; 3 > f; f++) q = v[h++], x = y[2 * q], q = y[2 * q + 1], x = new D(x, q), c.faceVertexUvs[e][g].push(x);
                        l && (l = 3 * v[h++], r.normal.set(G[l++], G[l++], G[l]));
                        if (z)
                            for (e = 0; 3 > e; e++) l = 3 * v[h++], z = new p(G[l++], G[l++], G[l]), r.vertexNormals.push(z);
                        m && (m = v[h++], r.color.setHex(w[m]));
                        if (n)
                            for (e = 0; 3 > e; e++) m = v[h++], r.vertexColors.push(new H(w[m]));
                        c.faces.push(r)
                    }
                d = a;
                h = void 0 !== d.influencesPerVertex ? d.influencesPerVertex :
                    2;
                if (d.skinWeights)
                    for (k = 0, v = d.skinWeights.length; k < v; k += h) c.skinWeights.push(new ga(d.skinWeights[k], 1 < h ? d.skinWeights[k + 1] : 0, 2 < h ? d.skinWeights[k + 2] : 0, 3 < h ? d.skinWeights[k + 3] : 0));
                if (d.skinIndices)
                    for (k = 0, v = d.skinIndices.length; k < v; k += h) c.skinIndices.push(new ga(d.skinIndices[k], 1 < h ? d.skinIndices[k + 1] : 0, 2 < h ? d.skinIndices[k + 2] : 0, 3 < h ? d.skinIndices[k + 3] : 0));
                c.bones = d.bones;
                c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" +
                    c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.");
                k = a;
                v = k.scale;
                if (void 0 !== k.morphTargets)
                    for (d = 0, h = k.morphTargets.length; d < h; d++)
                        for (c.morphTargets[d] = {}, c.morphTargets[d].name = k.morphTargets[d].name, c.morphTargets[d].vertices = [], G = c.morphTargets[d].vertices, w = k.morphTargets[d].vertices, B = 0, n = w.length; B < n; B += 3) m = new p, m.x = w[B] * v, m.y = w[B + 1] * v, m.z = w[B + 2] * v, G.push(m);
                if (void 0 !== k.morphColors && 0 < k.morphColors.length)
                    for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
                        v = c.faces, k = k.morphColors[0].colors, d = 0, h = v.length; d < h; d++) v[d].color.fromArray(k, 3 * d);
                k = a;
                d = [];
                h = [];
                void 0 !== k.animation && h.push(k.animation);
                void 0 !== k.animations && (k.animations.length ? h = h.concat(k.animations) : h.push(k.animations));
                for (k = 0; k < h.length; k++)(v = Ba.parseAnimation(h[k], c.bones)) && d.push(v);
                c.morphTargets && (h = Ba.CreateClipsFromMorphTargetSequences(c.morphTargets, 10), d = d.concat(h));
                0 < d.length && (c.animations = d);
                c.computeFaceNormals();
                c.computeBoundingSphere();
                if (void 0 === a.materials || 0 ===
                    a.materials.length) return {
                    geometry: c
                };
                d = gc.prototype.initMaterials(a.materials, b, this.crossOrigin);
                return {
                    geometry: c,
                    materials: d
                }
            }
        }()
    });
    Object.assign(Re.prototype, {
        load: function(a, b, c, d) {
            "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
            var e = this;
            (new ua(e.manager)).load(a, function(c) {
                var g = null;
                try {
                    g = JSON.parse(c)
                } catch (h) {
                    void 0 !== d && d(h);
                    console.error("THREE:ObjectLoader: Can't parse " + a + ".", h.message);
                    return
                }
                c = g.metadata;
                void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ?
                    console.error("THREE.ObjectLoader: Can't load " + a + ". Use THREE.JSONLoader instead.") : e.parse(g, b)
            }, c, d)
        },
        setTexturePath: function(a) {
            this.texturePath = a
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a
        },
        parse: function(a, b) {
            var c = this.parseGeometries(a.geometries),
                d = this.parseImages(a.images, function() {
                    void 0 !== b && b(e)
                }),
                d = this.parseTextures(a.textures, d),
                d = this.parseMaterials(a.materials, d),
                e = this.parseObject(a.object, c, d);
            a.animations && (e.animations = this.parseAnimations(a.animations));
            void 0 !== a.images &&
                0 !== a.images.length || void 0 === b || b(e);
            return e
        },
        parseGeometries: function(a) {
            var b = {};
            if (void 0 !== a)
                for (var c = new ce, d = new be, e = 0, f = a.length; e < f; e++) {
                    var g, h = a[e];
                    switch (h.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            g = new Na[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            g = new Na[h.type](h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            g =
                                new Na[h.type](h.radius, h.segments, h.thetaStart, h.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            g = new Na[h.type](h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            g = new Na[h.type](h.radius, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            g = new Na[h.type](h.radius, h.widthSegments,
                                h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "IcosahedronGeometry":
                        case "OctahedronGeometry":
                        case "TetrahedronGeometry":
                            g = new Na[h.type](h.radius, h.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            g = new Na[h.type](h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            g = new Na[h.type](h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            g = new Na[h.type](h.radius, h.tube, h.tubularSegments, h.radialSegments, h.p, h.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            g = new Na[h.type](h.points, h.segments, h.phiStart, h.phiLength);
                            break;
                        case "BufferGeometry":
                            g = d.parse(h);
                            break;
                        case "Geometry":
                            g = c.parse(h, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                            continue
                    }
                    g.uuid = h.uuid;
                    void 0 !== h.name && (g.name = h.name);
                    b[h.uuid] = g
                }
            return b
        },
        parseMaterials: function(a, b) {
            var c = {};
            if (void 0 !== a) {
                var d = new Hd;
                d.setTextures(b);
                for (var e = 0, f = a.length; e < f; e++) {
                    var g = d.parse(a[e]);
                    c[g.uuid] = g
                }
            }
            return c
        },
        parseAnimations: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = Ba.parse(a[c]);
                b.push(d)
            }
            return b
        },
        parseImages: function(a, b) {
            function c(a) {
                d.manager.itemStart(a);
                return g.load(a, function() {
                    d.manager.itemEnd(a)
                }, void 0, function() {
                    d.manager.itemEnd(a);
                    d.manager.itemError(a)
                })
            }
            var d = this,
                e = {};
            if (void 0 !== a && 0 < a.length) {
                var f =
                    new Zd(b),
                    g = new Vc(f);
                g.setCrossOrigin(this.crossOrigin);
                for (var f = 0, h = a.length; f < h; f++) {
                    var k = a[f],
                        l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : d.texturePath + k.url;
                    e[k.uuid] = c(l)
                }
            }
            return e
        },
        parseTextures: function(a, b) {
            function c(a, b) {
                if ("number" === typeof a) return a;
                console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
                return b[a]
            }
            var d = {};
            if (void 0 !== a)
                for (var e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for',
                        g.uuid);
                    void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                    var h = new X(b[g.image]);
                    h.needsUpdate = !0;
                    h.uuid = g.uuid;
                    void 0 !== g.name && (h.name = g.name);
                    void 0 !== g.mapping && (h.mapping = c(g.mapping, mg));
                    void 0 !== g.offset && h.offset.fromArray(g.offset);
                    void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
                    void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], gf), h.wrapT = c(g.wrap[1], gf));
                    void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, hf));
                    void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, hf));
                    void 0 !==
                        g.anisotropy && (h.anisotropy = g.anisotropy);
                    void 0 !== g.flipY && (h.flipY = g.flipY);
                    d[g.uuid] = h
                }
            return d
        },
        parseObject: function() {
            var a = new J;
            return function(b, c, d) {
                function e(a) {
                    void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                    return c[a]
                }

                function f(a) {
                    if (void 0 !== a) {
                        if (Array.isArray(a)) {
                            for (var b = [], c = 0, e = a.length; c < e; c++) {
                                var f = a[c];
                                void 0 === d[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
                                b.push(d[f])
                            }
                            return b
                        }
                        void 0 === d[a] && console.warn("THREE.ObjectLoader: Undefined material",
                            a);
                        return d[a]
                    }
                }
                var g;
                switch (b.type) {
                    case "Scene":
                        g = new md;
                        void 0 !== b.background && Number.isInteger(b.background) && (g.background = new H(b.background));
                        void 0 !== b.fog && ("Fog" === b.fog.type ? g.fog = new Lb(b.fog.color, b.fog.near, b.fog.far) : "FogExp2" === b.fog.type && (g.fog = new Kb(b.fog.color, b.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        g = new ya(b.fov, b.aspect, b.near, b.far);
                        void 0 !== b.focus && (g.focus = b.focus);
                        void 0 !== b.zoom && (g.zoom = b.zoom);
                        void 0 !== b.filmGauge && (g.filmGauge = b.filmGauge);
                        void 0 !== b.filmOffset &&
                            (g.filmOffset = b.filmOffset);
                        void 0 !== b.view && (g.view = Object.assign({}, b.view));
                        break;
                    case "OrthographicCamera":
                        g = new Jb(b.left, b.right, b.top, b.bottom, b.near, b.far);
                        break;
                    case "AmbientLight":
                        g = new zd(b.color, b.intensity);
                        break;
                    case "DirectionalLight":
                        g = new yd(b.color, b.intensity);
                        break;
                    case "PointLight":
                        g = new wd(b.color, b.intensity, b.distance, b.decay);
                        break;
                    case "RectAreaLight":
                        g = new Ad(b.color, b.intensity, b.width, b.height);
                        break;
                    case "SpotLight":
                        g = new vd(b.color, b.intensity, b.distance, b.angle, b.penumbra,
                            b.decay);
                        break;
                    case "HemisphereLight":
                        g = new td(b.color, b.groundColor, b.intensity);
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case "Mesh":
                        g = e(b.geometry);
                        var h = f(b.material);
                        g = g.bones && 0 < g.bones.length ? new od(g, h) : new xa(g, h);
                        break;
                    case "LOD":
                        g = new Bc;
                        break;
                    case "Line":
                        g = new La(e(b.geometry), f(b.material), b.mode);
                        break;
                    case "LineLoop":
                        g = new pd(e(b.geometry), f(b.material));
                        break;
                    case "LineSegments":
                        g = new da(e(b.geometry), f(b.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        g = new Mb(e(b.geometry), f(b.material));
                        break;
                    case "Sprite":
                        g = new Ac(f(b.material));
                        break;
                    case "Group":
                        g = new Dc;
                        break;
                    default:
                        g = new B
                }
                g.uuid = b.uuid;
                void 0 !== b.name && (g.name = b.name);
                void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(g.position, g.quaternion, g.scale)) : (void 0 !== b.position && g.position.fromArray(b.position), void 0 !== b.rotation && g.rotation.fromArray(b.rotation), void 0 !== b.quaternion && g.quaternion.fromArray(b.quaternion), void 0 !== b.scale && g.scale.fromArray(b.scale));
                void 0 !== b.castShadow && (g.castShadow = b.castShadow);
                void 0 !== b.receiveShadow && (g.receiveShadow = b.receiveShadow);
                b.shadow && (void 0 !== b.shadow.bias && (g.shadow.bias = b.shadow.bias), void 0 !== b.shadow.radius && (g.shadow.radius = b.shadow.radius), void 0 !== b.shadow.mapSize && g.shadow.mapSize.fromArray(b.shadow.mapSize), void 0 !== b.shadow.camera && (g.shadow.camera = this.parseObject(b.shadow.camera)));
                void 0 !== b.visible && (g.visible = b.visible);
                void 0 !== b.userData && (g.userData = b.userData);
                if (void 0 !== b.children)
                    for (var k in b.children) g.add(this.parseObject(b.children[k],
                        c, d));
                if ("LOD" === b.type)
                    for (b = b.levels, h = 0; h < b.length; h++) {
                        var l = b[h];
                        k = g.getObjectByProperty("uuid", l.object);
                        void 0 !== k && g.addLevel(k, l.distance)
                    }
                return g
            }
        }()
    });
    var mg = {
            UVMapping: 300,
            CubeReflectionMapping: 301,
            CubeRefractionMapping: 302,
            EquirectangularReflectionMapping: 303,
            EquirectangularRefractionMapping: 304,
            SphericalReflectionMapping: 305,
            CubeUVReflectionMapping: 306,
            CubeUVRefractionMapping: 307
        },
        gf = {
            RepeatWrapping: 1E3,
            ClampToEdgeWrapping: 1001,
            MirroredRepeatWrapping: 1002
        },
        hf = {
            NearestFilter: 1003,
            NearestMipMapNearestFilter: 1004,
            NearestMipMapLinearFilter: 1005,
            LinearFilter: 1006,
            LinearMipMapNearestFilter: 1007,
            LinearMipMapLinearFilter: 1008
        };
    Object.assign(ma.prototype, {
        getPoint: function() {
            console.warn("THREE.Curve: .getPoint() not implemented.");
            return null
        },
        getPointAt: function(a) {
            a = this.getUtoTmapping(a);
            return this.getPoint(a)
        },
        getPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));
            return b
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 5);
            for (var b = [], c = 0; c <= a; c++) b.push(this.getPointAt(c /
                a));
            return b
        },
        getLength: function() {
            var a = this.getLengths();
            return a[a.length - 1]
        },
        getLengths: function(a) {
            void 0 === a && (a = this.arcLengthDivisions);
            if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var b = [],
                c, d = this.getPoint(0),
                e, f = 0;
            b.push(0);
            for (e = 1; e <= a; e++) c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
            return this.cacheArcLengths = b
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.getLengths()
        },
        getUtoTmapping: function(a,
            b) {
            var c = this.getLengths(),
                d, e = c.length,
                f;
            f = b ? b : a * c[e - 1];
            for (var g = 0, h = e - 1, k; g <= h;)
                if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k) g = d + 1;
                else if (0 < k) h = d - 1;
            else {
                h = d;
                break
            }
            d = h;
            if (c[d] === f) return d / (e - 1);
            g = c[d];
            return (d + (f - g) / (c[d + 1] - g)) / (e - 1)
        },
        getTangent: function(a) {
            var b = a - 1E-4;
            a += 1E-4;
            0 > b && (b = 0);
            1 < a && (a = 1);
            b = this.getPoint(b);
            return this.getPoint(a).clone().sub(b).normalize()
        },
        getTangentAt: function(a) {
            a = this.getUtoTmapping(a);
            return this.getTangent(a)
        },
        computeFrenetFrames: function(a, b) {
            var c = new p,
                d = [],
                e =
                [],
                f = [],
                g = new p,
                h = new J,
                k, l;
            for (k = 0; k <= a; k++) l = k / a, d[k] = this.getTangentAt(l), d[k].normalize();
            e[0] = new p;
            f[0] = new p;
            k = Number.MAX_VALUE;
            l = Math.abs(d[0].x);
            var u = Math.abs(d[0].y),
                q = Math.abs(d[0].z);
            l <= k && (k = l, c.set(1, 0, 0));
            u <= k && (k = u, c.set(0, 1, 0));
            q <= k && c.set(0, 0, 1);
            g.crossVectors(d[0], c).normalize();
            e[0].crossVectors(d[0], g);
            f[0].crossVectors(d[0], e[0]);
            for (k = 1; k <= a; k++) e[k] = e[k - 1].clone(), f[k] = f[k - 1].clone(), g.crossVectors(d[k - 1], d[k]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(Y.clamp(d[k -
                1].dot(d[k]), -1, 1)), e[k].applyMatrix4(h.makeRotationAxis(g, c))), f[k].crossVectors(d[k], e[k]);
            if (!0 === b)
                for (c = Math.acos(Y.clamp(e[0].dot(e[a]), -1, 1)), c /= a, 0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c), k = 1; k <= a; k++) e[k].applyMatrix4(h.makeRotationAxis(d[k], c * k)), f[k].crossVectors(d[k], e[k]);
            return {
                tangents: d,
                normals: e,
                binormals: f
            }
        }
    });
    Sa.prototype = Object.create(ma.prototype);
    Sa.prototype.constructor = Sa;
    Sa.prototype.isLineCurve = !0;
    Sa.prototype.getPoint = function(a) {
        if (1 === a) return this.v2.clone();
        var b =
            this.v2.clone().sub(this.v1);
        b.multiplyScalar(a).add(this.v1);
        return b
    };
    Sa.prototype.getPointAt = function(a) {
        return this.getPoint(a)
    };
    Sa.prototype.getTangent = function(a) {
        return this.v2.clone().sub(this.v1).normalize()
    };
    Yc.prototype = Object.assign(Object.create(ma.prototype), {
        constructor: Yc,
        add: function(a) {
            this.curves.push(a)
        },
        closePath: function() {
            var a = this.curves[0].getPoint(0),
                b = this.curves[this.curves.length - 1].getPoint(1);
            a.equals(b) || this.curves.push(new Sa(b, a))
        },
        getPoint: function(a) {
            var b = a *
                this.getLength(),
                c = this.getCurveLengths();
            for (a = 0; a < c.length;) {
                if (c[a] >= b) return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(0 === c ? 0 : 1 - b / c);
                a++
            }
            return null
        },
        getLength: function() {
            var a = this.getCurveLengths();
            return a[a.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0;
            this.cacheLengths = null;
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++) b +=
                this.curves[c].getLength(), a.push(b);
            return this.cacheLengths = a
        },
        getSpacedPoints: function(a) {
            void 0 === a && (a = 40);
            for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));
            this.autoClose && b.push(b[0]);
            return b
        },
        getPoints: function(a) {
            a = a || 12;
            for (var b = [], c, d = 0, e = this.curves; d < e.length; d++)
                for (var f = e[d], f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && f.isLineCurve ? 1 : f && f.isSplineCurve ? a * f.points.length : a), g = 0; g < f.length; g++) {
                    var h = f[g];
                    c && c.equals(h) || (b.push(h), c = h)
                }
            this.autoClose && 1 < b.length && !b[b.length - 1].equals(b[0]) &&
                b.push(b[0]);
            return b
        },
        createPointsGeometry: function(a) {
            a = this.getPoints(a);
            return this.createGeometry(a)
        },
        createSpacedPointsGeometry: function(a) {
            a = this.getSpacedPoints(a);
            return this.createGeometry(a)
        },
        createGeometry: function(a) {
            for (var b = new M, c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                b.vertices.push(new p(e.x, e.y, e.z || 0))
            }
            return b
        }
    });
    Xa.prototype = Object.create(ma.prototype);
    Xa.prototype.constructor = Xa;
    Xa.prototype.isEllipseCurve = !0;
    Xa.prototype.getPoint = function(a) {
        for (var b = 2 * Math.PI, c = this.aEndAngle -
                this.aStartAngle, d = Math.abs(c) < Number.EPSILON; 0 > c;) c += b;
        for (; c > b;) c -= b;
        c < Number.EPSILON && (c = d ? 0 : b);
        !0 !== this.aClockwise || d || (c = c === b ? -b : c - b);
        b = this.aStartAngle + a * c;
        a = this.aX + this.xRadius * Math.cos(b);
        var e = this.aY + this.yRadius * Math.sin(b);
        0 !== this.aRotation && (b = Math.cos(this.aRotation), c = Math.sin(this.aRotation), d = a - this.aX, e -= this.aY, a = d * b - e * c + this.aX, e = d * c + e * b + this.aY);
        return new D(a, e)
    };
    zb.prototype = Object.create(ma.prototype);
    zb.prototype.constructor = zb;
    zb.prototype.isSplineCurve = !0;
    zb.prototype.getPoint =
        function(a) {
            var b = this.points,
                c = (b.length - 1) * a;
            a = Math.floor(c);
            var c = c - a,
                d = b[0 === a ? a : a - 1],
                e = b[a],
                f = b[a > b.length - 2 ? b.length - 1 : a + 1],
                b = b[a > b.length - 3 ? b.length - 1 : a + 2];
            return new D(Se(c, d.x, e.x, f.x, b.x), Se(c, d.y, e.y, f.y, b.y))
        };
    hc.prototype = Object.create(ma.prototype);
    hc.prototype.constructor = hc;
    hc.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2,
            e = this.v3;
        return new D(yb(a, b.x, c.x, d.x, e.x), yb(a, b.y, c.y, d.y, e.y))
    };
    ic.prototype = Object.create(ma.prototype);
    ic.prototype.constructor = ic;
    ic.prototype.getPoint =
        function(a) {
            var b = this.v0,
                c = this.v1,
                d = this.v2;
            return new D(xb(a, b.x, c.x, d.x), xb(a, b.y, c.y, d.y))
        };
    var ue = Object.assign(Object.create(Yc.prototype), {
        fromPoints: function(a) {
            this.moveTo(a[0].x, a[0].y);
            for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
        },
        moveTo: function(a, b) {
            this.currentPoint.set(a, b)
        },
        lineTo: function(a, b) {
            var c = new Sa(this.currentPoint.clone(), new D(a, b));
            this.curves.push(c);
            this.currentPoint.set(a, b)
        },
        quadraticCurveTo: function(a, b, c, d) {
            a = new ic(this.currentPoint.clone(), new D(a,
                b), new D(c, d));
            this.curves.push(a);
            this.currentPoint.set(c, d)
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            a = new hc(this.currentPoint.clone(), new D(a, b), new D(c, d), new D(e, f));
            this.curves.push(a);
            this.currentPoint.set(e, f)
        },
        splineThru: function(a) {
            var b = [this.currentPoint.clone()].concat(a),
                b = new zb(b);
            this.curves.push(b);
            this.currentPoint.copy(a[a.length - 1])
        },
        arc: function(a, b, c, d, e, f) {
            this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f)
        },
        absarc: function(a, b, c, d, e, f) {
            this.absellipse(a, b, c, c, d,
                e, f)
        },
        ellipse: function(a, b, c, d, e, f, g, h) {
            this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h)
        },
        absellipse: function(a, b, c, d, e, f, g, h) {
            a = new Xa(a, b, c, d, e, f, g, h);
            0 < this.curves.length && (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
            this.curves.push(a);
            a = a.getPoint(1);
            this.currentPoint.copy(a)
        }
    });
    Zc.prototype = ue;
    ue.constructor = Zc;
    Ab.prototype = Object.assign(Object.create(ue), {
        constructor: Ab,
        getPointsHoles: function(a) {
            for (var b = [], c = 0, d = this.holes.length; c < d; c++) b[c] =
                this.holes[c].getPoints(a);
            return b
        },
        extractAllPoints: function(a) {
            return {
                shape: this.getPoints(a),
                holes: this.getPointsHoles(a)
            }
        },
        extractPoints: function(a) {
            return this.extractAllPoints(a)
        }
    });
    Object.assign(de.prototype, {
        moveTo: function(a, b) {
            this.currentPath = new Zc;
            this.subPaths.push(this.currentPath);
            this.currentPath.moveTo(a, b)
        },
        lineTo: function(a, b) {
            this.currentPath.lineTo(a, b)
        },
        quadraticCurveTo: function(a, b, c, d) {
            this.currentPath.quadraticCurveTo(a, b, c, d)
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            this.currentPath.bezierCurveTo(a,
                b, c, d, e, f)
        },
        splineThru: function(a) {
            this.currentPath.splineThru(a)
        },
        toShapes: function(a, b) {
            function c(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c],
                        f = new Ab;
                    f.curves = e.curves;
                    b.push(f)
                }
                return b
            }

            function d(a, b) {
                for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
                    var g = b[e],
                        h = b[f],
                        k = h.x - g.x,
                        l = h.y - g.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (0 > l && (g = b[f], k = -k, h = b[e], l = -l), !(a.y < g.y || a.y > h.y))
                            if (a.y === g.y) {
                                if (a.x === g.x) return !0
                            } else {
                                e = l * (a.x - g.x) - k * (a.y - g.y);
                                if (0 === e) return !0;
                                0 > e || (d = !d)
                            }
                    } else if (a.y === g.y && (h.x <=
                            a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0
                }
                return d
            }
            var e = za.isClockWise,
                f = this.subPaths;
            if (0 === f.length) return [];
            if (!0 === b) return c(f);
            var g, h, k, l = [];
            if (1 === f.length) return h = f[0], k = new Ab, k.curves = h.curves, l.push(k), l;
            var p = !e(f[0].getPoints()),
                p = a ? !p : p;
            k = [];
            var q = [],
                n = [],
                r = 0,
                z;
            q[r] = void 0;
            n[r] = [];
            for (var t = 0, y = f.length; t < y; t++) h = f[t], z = h.getPoints(), g = e(z), (g = a ? !g : g) ? (!p && q[r] && r++, q[r] = {
                s: new Ab,
                p: z
            }, q[r].s.curves = h.curves, p && r++, n[r] = []) : n[r].push({
                h: h,
                p: z[0]
            });
            if (!q[0]) return c(f);
            if (1 < q.length) {
                t = !1;
                h = [];
                e = 0;
                for (f = q.length; e < f; e++) k[e] = [];
                e = 0;
                for (f = q.length; e < f; e++)
                    for (g = n[e], p = 0; p < g.length; p++) {
                        r = g[p];
                        z = !0;
                        for (y = 0; y < q.length; y++) d(r.p, q[y].p) && (e !== y && h.push({
                            froms: e,
                            tos: y,
                            hole: p
                        }), z ? (z = !1, k[y].push(r)) : t = !0);
                        z && k[e].push(r)
                    }
                0 < h.length && (t || (n = k))
            }
            t = 0;
            for (e = q.length; t < e; t++)
                for (k = q[t].s, l.push(k), h = n[t], f = 0, g = h.length; f < g; f++) k.holes.push(h[f].h);
            return l
        }
    });
    Object.assign(ee.prototype, {
        isFont: !0,
        generateShapes: function(a, b, c) {
            void 0 === b && (b = 100);
            void 0 === c && (c = 4);
            var d = this.data;
            a = String(a).split("");
            var e = b / d.resolution,
                f = (d.boundingBox.yMax - d.boundingBox.yMin + d.underlineThickness) * e,
                g = 0,
                h = 0;
            b = [];
            for (var k = 0; k < a.length; k++) {
                var l = a[k];
                if ("\n" === l) g = 0, h -= f;
                else {
                    var p;
                    p = e;
                    var q = g,
                        n = h;
                    if (l = d.glyphs[l] || d.glyphs["?"]) {
                        var r = new de,
                            z = [],
                            t, y, x, v, B, w, C, D;
                        if (l.o)
                            for (var E = l._cachedOutline || (l._cachedOutline = l.o.split(" ")), F = 0, I = E.length; F < I;) switch (E[F++]) {
                                case "m":
                                    t = E[F++] * p + q;
                                    y = E[F++] * p + n;
                                    r.moveTo(t, y);
                                    break;
                                case "l":
                                    t = E[F++] * p + q;
                                    y = E[F++] * p + n;
                                    r.lineTo(t, y);
                                    break;
                                case "q":
                                    t = E[F++] * p + q;
                                    y = E[F++] * p + n;
                                    B = E[F++] * p + q;
                                    w = E[F++] * p + n;
                                    r.quadraticCurveTo(B, w, t, y);
                                    if (v = z[z.length - 1]) {
                                        x = v.x;
                                        v = v.y;
                                        for (var H = 1; H <= c; H++) {
                                            var J = H / c;
                                            xb(J, x, B, t);
                                            xb(J, v, w, y)
                                        }
                                    }
                                    break;
                                case "b":
                                    if (t = E[F++] * p + q, y = E[F++] * p + n, B = E[F++] * p + q, w = E[F++] * p + n, C = E[F++] * p + q, D = E[F++] * p + n, r.bezierCurveTo(B, w, C, D, t, y), v = z[z.length - 1])
                                        for (x = v.x, v = v.y, H = 1; H <= c; H++) J = H / c, yb(J, x, B, C, t), yb(J, v, w, D, y)
                            }
                        p = {
                            offsetX: l.ha * p,
                            path: r
                        }
                    } else p = void 0;
                    g += p.offsetX;
                    b.push(p.path)
                }
            }
            c = [];
            d = 0;
            for (a = b.length; d < a; d++) Array.prototype.push.apply(c, b[d].toShapes());
            return c
        }
    });
    Object.assign(Te.prototype, {
        load: function(a, b, c, d) {
            var e = this;
            (new ua(this.manager)).load(a, function(a) {
                var c;
                try {
                    c = JSON.parse(a)
                } catch (d) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2))
                }
                a = e.parse(c);
                b && b(a)
            }, c, d)
        },
        parse: function(a) {
            return new ee(a)
        }
    });
    var Od, ie = {
        getContext: function() {
            void 0 === Od && (Od = new(window.AudioContext || window.webkitAudioContext));
            return Od
        },
        setContext: function(a) {
            Od = a
        }
    };
    Object.assign(fe.prototype, {
        load: function(a, b, c, d) {
            var e = new ua(this.manager);
            e.setResponseType("arraybuffer");
            e.load(a, function(a) {
                ie.getContext().decodeAudioData(a, function(a) {
                    b(a)
                })
            }, c, d)
        }
    });
    Object.assign(Ue.prototype, {
        update: function() {
            var a, b, c, d, e, f, g, h, k = new J,
                l = new J;
            return function(p) {
                if (a !== this || b !== p.focus || c !== p.fov || d !== p.aspect * this.aspect || e !== p.near || f !== p.far || g !== p.zoom || h !== this.eyeSep) {
                    a = this;
                    b = p.focus;
                    c = p.fov;
                    d = p.aspect * this.aspect;
                    e = p.near;
                    f = p.far;
                    g = p.zoom;
                    var q = p.projectionMatrix.clone();
                    h = this.eyeSep /
                        2;
                    var n = h * e / b,
                        r = e * Math.tan(Y.DEG2RAD * c * .5) / g,
                        z, t;
                    l.elements[12] = -h;
                    k.elements[12] = h;
                    z = -r * d + n;
                    t = r * d + n;
                    q.elements[0] = 2 * e / (t - z);
                    q.elements[8] = (t + z) / (t - z);
                    this.cameraL.projectionMatrix.copy(q);
                    z = -r * d - n;
                    t = r * d - n;
                    q.elements[0] = 2 * e / (t - z);
                    q.elements[8] = (t + z) / (t - z);
                    this.cameraR.projectionMatrix.copy(q)
                }
                this.cameraL.matrixWorld.copy(p.matrixWorld).multiply(l);
                this.cameraR.matrixWorld.copy(p.matrixWorld).multiply(k)
            }
        }()
    });
    Id.prototype = Object.create(B.prototype);
    Id.prototype.constructor = Id;
    ge.prototype = Object.assign(Object.create(ya.prototype), {
        constructor: ge,
        isArrayCamera: !0
    });
    he.prototype = Object.assign(Object.create(B.prototype), {
        constructor: he,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(a) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) :
                this.gain.disconnect(this.context.destination);
            this.filter = a;
            this.gain.connect(this.filter);
            this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(a) {
            this.gain.gain.value = a
        },
        updateMatrixWorld: function() {
            var a = new p,
                b = new qa,
                c = new p,
                d = new p;
            return function(e) {
                B.prototype.updateMatrixWorld.call(this, e);
                e = this.context.listener;
                var f = this.up;
                this.matrixWorld.decompose(a, b, c);
                d.set(0, 0, -1).applyQuaternion(b);
                e.positionX ? (e.positionX.setValueAtTime(a.x,
                    this.context.currentTime), e.positionY.setValueAtTime(a.y, this.context.currentTime), e.positionZ.setValueAtTime(a.z, this.context.currentTime), e.forwardX.setValueAtTime(d.x, this.context.currentTime), e.forwardY.setValueAtTime(d.y, this.context.currentTime), e.forwardZ.setValueAtTime(d.z, this.context.currentTime), e.upX.setValueAtTime(f.x, this.context.currentTime), e.upY.setValueAtTime(f.y, this.context.currentTime), e.upZ.setValueAtTime(f.z, this.context.currentTime)) : (e.setPosition(a.x, a.y, a.z), e.setOrientation(d.x,
                    d.y, d.z, f.x, f.y, f.z))
            }
        }()
    });
    jc.prototype = Object.assign(Object.create(B.prototype), {
        constructor: jc,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(a) {
            this.hasPlaybackControl = !1;
            this.sourceType = "audioNode";
            this.source = a;
            this.connect();
            return this
        },
        setBuffer: function(a) {
            this.buffer = a;
            this.sourceType = "buffer";
            this.autoplay && this.play();
            return this
        },
        play: function() {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
            else if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else {
                var a = this.context.createBufferSource();
                a.buffer = this.buffer;
                a.loop = this.loop;
                a.onended = this.onEnded.bind(this);
                a.playbackRate.setValueAtTime(this.playbackRate, this.startTime);
                a.start(0, this.startTime);
                this.isPlaying = !0;
                this.source = a;
                return this.connect()
            }
        },
        pause: function() {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this
        },
        stop: function() {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].connect(this.filters[a]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a -
                    1].disconnect(this.filters[a]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(a) {
            a || (a = []);
            !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a;
            return this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(a) {
            return this.setFilters(a ? [a] : [])
        },
        setPlaybackRate: function(a) {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(a) {
            if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");
            else return this.loop =
                a, !0 === this.isPlaying && (this.source.loop = this.loop), this
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(a) {
            this.gain.gain.value = a;
            return this
        }
    });
    je.prototype = Object.assign(Object.create(jc.prototype), {
        constructor: je,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(a) {
            this.panner.refDistance = a
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(a) {
            this.panner.rolloffFactor =
                a
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(a) {
            this.panner.distanceModel = a
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(a) {
            this.panner.maxDistance = a
        },
        updateMatrixWorld: function() {
            var a = new p;
            return function(b) {
                B.prototype.updateMatrixWorld.call(this, b);
                a.setFromMatrixPosition(this.matrixWorld);
                this.panner.setPosition(a.x, a.y, a.z)
            }
        }()
    });
    Object.assign(ke.prototype, {
        getFrequencyData: function() {
            this.analyser.getByteFrequencyData(this.data);
            return this.data
        },
        getAverageFrequency: function() {
            for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++) a += b[c];
            return a / b.length
        }
    });
    Object.assign(le.prototype, {
        accumulate: function(a, b) {
            var c = this.buffer,
                d = this.valueSize,
                e = a * d + d,
                f = this.cumulativeWeight;
            if (0 === f) {
                for (f = 0; f !== d; ++f) c[e + f] = c[f];
                f = b
            } else f += b, this._mixBufferRegion(c, e, 0, b / f, d);
            this.cumulativeWeight = f
        },
        apply: function(a) {
            var b = this.valueSize,
                c = this.buffer;
            a = a * b + b;
            var d = this.cumulativeWeight,
                e = this.binding;
            this.cumulativeWeight = 0;
            1 > d &&
                this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
            for (var d = b, f = b + b; d !== f; ++d)
                if (c[d] !== c[d + b]) {
                    e.setValue(c, a);
                    break
                }
        },
        saveOriginalState: function() {
            var a = this.buffer,
                b = this.valueSize,
                c = 3 * b;
            this.binding.getValue(a, c);
            for (var d = b; d !== c; ++d) a[d] = a[c + d % b];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _select: function(a, b, c, d, e) {
            if (.5 <= d)
                for (d = 0; d !== e; ++d) a[b + d] = a[c + d]
        },
        _slerp: function(a, b, c, d) {
            qa.slerpFlat(a, b, a, b, a, c, d)
        },
        _lerp: function(a, b, c, d, e) {
            for (var f =
                    1 - d, g = 0; g !== e; ++g) {
                var h = b + g;
                a[h] = a[h] * f + a[c + g] * d
            }
        }
    });
    Object.assign(Ve.prototype, {
        getValue: function(a, b) {
            this.bind();
            var c = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== c && c.getValue(a, b)
        },
        setValue: function(a, b) {
            for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d) c[d].setValue(a, b)
        },
        bind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b) a[b].bind()
        },
        unbind: function() {
            for (var a = this._bindings, b = this._targetGroup.nCachedObjects_,
                    c = a.length; b !== c; ++b) a[b].unbind()
        }
    });
    Object.assign(na, {
        Composite: Ve,
        create: function(a, b, c) {
            return a && a.isAnimationObjectGroup ? new na.Composite(a, b, c) : new na(a, b, c)
        },
        parseTrackName: function() {
            var a = new RegExp("^" + /((?:[\w-]+[\/:])*)/.source + /([\w-\.]+)?/.source + /(?:\.([\w-]+)(?:\[(.+)\])?)?/.source + /\.([\w-]+)(?:\[(.+)\])?/.source + "$"),
                b = ["material", "materials", "bones"];
            return function(c) {
                var d = a.exec(c);
                if (!d) throw Error("PropertyBinding: Cannot parse trackName: " + c);
                var d = {
                        nodeName: d[2],
                        objectName: d[3],
                        objectIndex: d[4],
                        propertyName: d[5],
                        propertyIndex: d[6]
                    },
                    e = d.nodeName && d.nodeName.lastIndexOf(".");
                if (void 0 !== e && -1 !== e) {
                    var f = d.nodeName.substring(e + 1); - 1 !== b.indexOf(f) && (d.nodeName = d.nodeName.substring(0, e), d.objectName = f)
                }
                if (null === d.propertyName || 0 === d.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + c);
                return d
            }
        }(),
        findNode: function(a, b) {
            if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid) return a;
            if (a.skeleton) {
                var c = function(a) {
                    for (var c =
                            0; c < a.bones.length; c++) {
                        var d = a.bones[c];
                        if (d.name === b) return d
                    }
                    return null
                }(a.skeleton);
                if (c) return c
            }
            if (a.children) {
                var d = function(a) {
                    for (var c = 0; c < a.length; c++) {
                        var g = a[c];
                        if (g.name === b || g.uuid === b || (g = d(g.children))) return g
                    }
                    return null
                };
                if (c = d(a.children)) return c
            }
            return null
        }
    });
    Object.assign(na.prototype, {
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
        GetterByBindingType: [function(a, b) {
            a[b] = this.node[this.propertyName]
        }, function(a, b) {
            for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) a[b++] = c[d]
        }, function(a, b) {
            a[b] = this.resolvedProperty[this.propertyIndex]
        }, function(a, b) {
            this.resolvedProperty.toArray(a, b)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(a, b) {
                this.node[this.propertyName] = a[b]
            }, function(a, b) {
                this.node[this.propertyName] = a[b];
                this.targetObject.needsUpdate = !0
            }, function(a, b) {
                this.node[this.propertyName] = a[b];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(a, b) {
                for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++]
            }, function(a, b) {
                for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];
                this.targetObject.needsUpdate = !0
            }, function(a, b) {
                for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(a, b) {
                this.resolvedProperty[this.propertyIndex] = a[b]
            }, function(a, b) {
                this.resolvedProperty[this.propertyIndex] = a[b];
                this.targetObject.needsUpdate = !0
            }, function(a,
                b) {
                this.resolvedProperty[this.propertyIndex] = a[b];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(a, b) {
                this.resolvedProperty.fromArray(a, b)
            }, function(a, b) {
                this.resolvedProperty.fromArray(a, b);
                this.targetObject.needsUpdate = !0
            }, function(a, b) {
                this.resolvedProperty.fromArray(a, b);
                this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function(a, b) {
            this.bind();
            this.getValue(a, b)
        },
        setValue: function(a, b) {
            this.bind();
            this.setValue(a, b)
        },
        bind: function() {
            var a = this.node,
                b = this.parsedPath,
                c = b.objectName,
                d = b.propertyName,
                e = b.propertyIndex;
            a || (this.node = a = na.findNode(this.rootNode, b.nodeName) || this.rootNode);
            this.getValue = this._getValue_unavailable;
            this.setValue = this._setValue_unavailable;
            if (a) {
                if (c) {
                    var f = b.objectIndex;
                    switch (c) {
                        case "materials":
                            if (!a.material) {
                                console.error("  can not bind to material as node does not have a material", this);
                                return
                            }
                            if (!a.material.materials) {
                                console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                                return
                            }
                            a = a.material.materials;
                            break;
                        case "bones":
                            if (!a.skeleton) {
                                console.error("  can not bind to bones as node does not have a skeleton", this);
                                return
                            }
                            a = a.skeleton.bones;
                            for (c = 0; c < a.length; c++)
                                if (a[c].name === f) {
                                    f = c;
                                    break
                                }
                            break;
                        default:
                            if (void 0 === a[c]) {
                                console.error("  can not bind to objectName of node, undefined", this);
                                return
                            }
                            a = a[c]
                    }
                    if (void 0 !== f) {
                        if (void 0 === a[f]) {
                            console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, a);
                            return
                        }
                        a = a[f]
                    }
                }
                f = a[d];
                if (void 0 === f) console.error("  trying to update property for track: " +
                    b.nodeName + "." + d + " but it wasn't found.", a);
                else {
                    b = this.Versioning.None;
                    void 0 !== a.needsUpdate ? (b = this.Versioning.NeedsUpdate, this.targetObject = a) : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = a);
                    c = this.BindingType.Direct;
                    if (void 0 !== e) {
                        if ("morphTargetInfluences" === d) {
                            if (!a.geometry) {
                                console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                                return
                            }
                            if (!a.geometry.morphTargets) {
                                console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",
                                    this);
                                return
                            }
                            for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                                if (a.geometry.morphTargets[c].name === e) {
                                    e = c;
                                    break
                                }
                        }
                        c = this.BindingType.ArrayElement;
                        this.resolvedProperty = f;
                        this.propertyIndex = e
                    } else void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d;
                    this.getValue = this.GetterByBindingType[c];
                    this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
                }
            } else console.error("  trying to update node for track: " +
                this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null;
            this.getValue = this._getValue_unbound;
            this.setValue = this._setValue_unbound
        }
    });
    Object.assign(na.prototype, {
        _getValue_unbound: na.prototype.getValue,
        _setValue_unbound: na.prototype.setValue
    });
    Object.assign(We.prototype, {
        isAnimationObjectGroup: !0,
        add: function(a) {
            for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._paths, g = this._parsedPaths, h = this._bindings, k = h.length, l = 0, p = arguments.length; l !== p; ++l) {
                var q =
                    arguments[l],
                    n = q.uuid,
                    r = e[n];
                if (void 0 === r) {
                    r = c++;
                    e[n] = r;
                    b.push(q);
                    for (var n = 0, z = k; n !== z; ++n) h[n].push(new na(q, f[n], g[n]))
                } else if (r < d) {
                    var t = --d,
                        z = b[t];
                    e[z.uuid] = r;
                    b[r] = z;
                    e[n] = t;
                    b[t] = q;
                    n = 0;
                    for (z = k; n !== z; ++n) {
                        var y = h[n],
                            x = y[r];
                        y[r] = y[t];
                        void 0 === x && (x = new na(q, f[n], g[n]));
                        y[t] = x
                    }
                } else void 0 !== b[r] && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = d
        },
        remove: function(a) {
            for (var b = this._objects,
                    c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
                var k = arguments[g],
                    l = k.uuid,
                    p = d[l];
                if (void 0 !== p && p >= c) {
                    var q = c++,
                        n = b[q];
                    d[n.uuid] = p;
                    b[p] = n;
                    d[l] = q;
                    b[q] = k;
                    k = 0;
                    for (l = f; k !== l; ++k) {
                        var n = e[k],
                            r = n[p];
                        n[p] = n[q];
                        n[q] = r
                    }
                }
            }
            this.nCachedObjects_ = c
        },
        uncache: function(a) {
            for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._bindings, g = f.length, h = 0, k = arguments.length; h !== k; ++h) {
                var l = arguments[h].uuid,
                    p = e[l];
                if (void 0 !==
                    p)
                    if (delete e[l], p < d) {
                        var l = --d,
                            q = b[l],
                            n = --c,
                            r = b[n];
                        e[q.uuid] = p;
                        b[p] = q;
                        e[r.uuid] = l;
                        b[l] = r;
                        b.pop();
                        q = 0;
                        for (r = g; q !== r; ++q) {
                            var z = f[q],
                                t = z[n];
                            z[p] = z[l];
                            z[l] = t;
                            z.pop()
                        }
                    } else
                        for (n = --c, r = b[n], e[r.uuid] = p, b[p] = r, b.pop(), q = 0, r = g; q !== r; ++q) z = f[q], z[p] = z[n], z.pop()
            }
            this.nCachedObjects_ = d
        },
        subscribe_: function(a, b) {
            var c = this._bindingsIndicesByPath,
                d = c[a],
                e = this._bindings;
            if (void 0 !== d) return e[d];
            var f = this._paths,
                g = this._parsedPaths,
                h = this._objects,
                k = this.nCachedObjects_,
                l = Array(h.length),
                d = e.length;
            c[a] =
                d;
            f.push(a);
            g.push(b);
            e.push(l);
            c = k;
            for (d = h.length; c !== d; ++c) l[c] = new na(h[c], a, b);
            return l
        },
        unsubscribe_: function(a) {
            var b = this._bindingsIndicesByPath,
                c = b[a];
            if (void 0 !== c) {
                var d = this._paths,
                    e = this._parsedPaths,
                    f = this._bindings,
                    g = f.length - 1,
                    h = f[g];
                b[a[g]] = c;
                f[c] = h;
                f.pop();
                e[c] = e[g];
                e.pop();
                d[c] = d[g];
                d.pop()
            }
        }
    });
    Object.assign(Xe.prototype, {
        play: function() {
            this._mixer._activateAction(this);
            return this
        },
        stop: function() {
            this._mixer._deactivateAction(this);
            return this.reset()
        },
        reset: function() {
            this.paused = !1;
            this.enabled = !0;
            this.time = 0;
            this._loopCount = -1;
            this._startTime = null;
            return this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(a) {
            this._startTime = a;
            return this
        },
        setLoop: function(a, b) {
            this.loop = a;
            this.repetitions = b;
            return this
        },
        setEffectiveWeight: function(a) {
            this.weight = a;
            this._effectiveWeight = this.enabled ?
                a : 0;
            return this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(a) {
            return this._scheduleFading(a, 0, 1)
        },
        fadeOut: function(a) {
            return this._scheduleFading(a, 1, 0)
        },
        crossFadeFrom: function(a, b, c) {
            a.fadeOut(b);
            this.fadeIn(b);
            if (c) {
                c = this._clip.duration;
                var d = a._clip.duration,
                    e = c / d;
                a.warp(1, d / c, b);
                this.warp(e, 1, b)
            }
            return this
        },
        crossFadeTo: function(a, b, c) {
            return a.crossFadeFrom(this, b, c)
        },
        stopFading: function() {
            var a = this._weightInterpolant;
            null !== a && (this._weightInterpolant =
                null, this._mixer._takeBackControlInterpolant(a));
            return this
        },
        setEffectiveTimeScale: function(a) {
            this.timeScale = a;
            this._effectiveTimeScale = this.paused ? 0 : a;
            return this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(a) {
            this.timeScale = this._clip.duration / a;
            return this.stopWarping()
        },
        syncWith: function(a) {
            this.time = a.time;
            this.timeScale = a.timeScale;
            return this.stopWarping()
        },
        halt: function(a) {
            return this.warp(this._effectiveTimeScale, 0, a)
        },
        warp: function(a,
            b, c) {
            var d = this._mixer,
                e = d.time,
                f = this._timeScaleInterpolant,
                g = this.timeScale;
            null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            d[1] = e + c;
            f[0] = a / g;
            f[1] = b / g;
            return this
        },
        stopWarping: function() {
            var a = this._timeScaleInterpolant;
            null !== a && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a));
            return this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot ||
                this._mixer._root
        },
        _update: function(a, b, c, d) {
            if (this.enabled) {
                var e = this._startTime;
                if (null !== e) {
                    b = (a - e) * c;
                    if (0 > b || 0 === c) return;
                    this._startTime = null;
                    b *= c
                }
                b *= this._updateTimeScale(a);
                c = this._updateTime(b);
                a = this._updateWeight(a);
                if (0 < a) {
                    b = this._interpolants;
                    for (var e = this._propertyBindings, f = 0, g = b.length; f !== g; ++f) b[f].evaluate(c), e[f].accumulate(d, a)
                }
            } else this._updateWeight(a)
        },
        _updateWeight: function(a) {
            var b = 0;
            if (this.enabled) {
                var b = this.weight,
                    c = this._weightInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0],
                        b = b * d;
                    a > c.parameterPositions[1] && (this.stopFading(), 0 === d && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = b
        },
        _updateTimeScale: function(a) {
            var b = 0;
            if (!this.paused) {
                var b = this.timeScale,
                    c = this._timeScaleInterpolant;
                if (null !== c) {
                    var d = c.evaluate(a)[0],
                        b = b * d;
                    a > c.parameterPositions[1] && (this.stopWarping(), 0 === b ? this.paused = !0 : this.timeScale = b)
                }
            }
            return this._effectiveTimeScale = b
        },
        _updateTime: function(a) {
            var b = this.time + a;
            if (0 === a) return b;
            var c = this._clip.duration,
                d = this.loop,
                e = this._loopCount;
            if (2200 ===
                d) a: {
                if (-1 === e && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c) b = c;
                else if (0 > b) b = 0;
                else break a;this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 > a ? -1 : 1
                })
            }
            else {
                d = 2202 === d; - 1 === e && (0 <= a ? (e = 0, this._setEndings(!0, 0 === this.repetitions, d)) : this._setEndings(0 === this.repetitions, !0, d));
                if (b >= c || 0 > b) {
                    var f = Math.floor(b / c),
                        b = b - c * f,
                        e = e + Math.abs(f),
                        g = this.repetitions - e;
                    0 > g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, b = 0 < a ?
                        c : 0, this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: 0 < a ? 1 : -1
                        })) : (0 === g ? (a = 0 > a, this._setEndings(a, !a, d)) : this._setEndings(!1, !1, d), this._loopCount = e, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: f
                    }))
                }
                if (d && 1 === (e & 1)) return this.time = b, c - b
            }
            return this.time = b
        },
        _setEndings: function(a, b, c) {
            var d = this._interpolantSettings;
            c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(a,
            b, c) {
            var d = this._mixer,
                e = d.time,
                f = this._weightInterpolant;
            null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
            d = f.parameterPositions;
            f = f.sampleValues;
            d[0] = e;
            f[0] = b;
            d[1] = e + a;
            f[1] = c;
            return this
        }
    });
    Object.assign(Ye.prototype, sa.prototype, {
        _bindAction: function(a, b) {
            var c = a._localRoot || this._root,
                d = a._clip.tracks,
                e = d.length,
                f = a._propertyBindings,
                g = a._interpolants,
                h = c.uuid,
                k = this._bindingsByRootAndName,
                l = k[h];
            void 0 === l && (l = {}, k[h] = l);
            for (k = 0; k !== e; ++k) {
                var p = d[k],
                    q = p.name,
                    n = l[q];
                if (void 0 ===
                    n) {
                    n = f[k];
                    if (void 0 !== n) {
                        null === n._cacheIndex && (++n.referenceCount, this._addInactiveBinding(n, h, q));
                        continue
                    }
                    n = new le(na.create(c, q, b && b._propertyBindings[k].binding.parsedPath), p.ValueTypeName, p.getValueSize());
                    ++n.referenceCount;
                    this._addInactiveBinding(n, h, q)
                }
                f[k] = n;
                g[k].resultBuffer = n.buffer
            }
        },
        _activateAction: function(a) {
            if (!this._isActiveAction(a)) {
                if (null === a._cacheIndex) {
                    var b = (a._localRoot || this._root).uuid,
                        c = a._clip.uuid,
                        d = this._actionsByClip[c];
                    this._bindAction(a, d && d.knownActions[0]);
                    this._addInactiveAction(a,
                        c, b)
                }
                b = a._propertyBindings;
                c = 0;
                for (d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState())
                }
                this._lendAction(a)
            }
        },
        _deactivateAction: function(a) {
            if (this._isActiveAction(a)) {
                for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                    var e = b[c];
                    0 === --e.useCount && (e.restoreOriginalState(), this._takeBackBinding(e))
                }
                this._takeBackAction(a)
            }
        },
        _initMemoryManager: function() {
            this._actions = [];
            this._nActiveActions = 0;
            this._actionsByClip = {};
            this._bindings = [];
            this._nActiveBindings =
                0;
            this._bindingsByRootAndName = {};
            this._controlInterpolants = [];
            this._nActiveControlInterpolants = 0;
            var a = this;
            this.stats = {
                actions: {get total() {
                        return a._actions.length
                    },
                    get inUse() {
                        return a._nActiveActions
                    }
                },
                bindings: {get total() {
                        return a._bindings.length
                    },
                    get inUse() {
                        return a._nActiveBindings
                    }
                },
                controlInterpolants: {get total() {
                        return a._controlInterpolants.length
                    },
                    get inUse() {
                        return a._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(a) {
            a = a._cacheIndex;
            return null !== a && a < this._nActiveActions
        },
        _addInactiveAction: function(a, b, c) {
            var d = this._actions,
                e = this._actionsByClip,
                f = e[b];
            void 0 === f ? (f = {
                knownActions: [a],
                actionByRoot: {}
            }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a));
            a._cacheIndex = d.length;
            d.push(a);
            f.actionByRoot[c] = a
        },
        _removeInactiveAction: function(a) {
            var b = this._actions,
                c = b[b.length - 1],
                d = a._cacheIndex;
            c._cacheIndex = d;
            b[d] = c;
            b.pop();
            a._cacheIndex = null;
            var b = a._clip.uuid,
                c = this._actionsByClip,
                d = c[b],
                e = d.knownActions,
                f = e[e.length - 1],
                g = a._byClipCacheIndex;
            f._byClipCacheIndex = g;
            e[g] = f;
            e.pop();
            a._byClipCacheIndex = null;
            delete d.actionByRoot[(a._localRoot || this._root).uuid];
            0 === e.length && delete c[b];
            this._removeInactiveBindingsForAction(a)
        },
        _removeInactiveBindingsForAction: function(a) {
            a = a._propertyBindings;
            for (var b = 0, c = a.length; b !== c; ++b) {
                var d = a[b];
                0 === --d.referenceCount && this._removeInactiveBinding(d)
            }
        },
        _lendAction: function(a) {
            var b = this._actions,
                c = a._cacheIndex,
                d = this._nActiveActions++,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackAction: function(a) {
            var b =
                this._actions,
                c = a._cacheIndex,
                d = --this._nActiveActions,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _addInactiveBinding: function(a, b, c) {
            var d = this._bindingsByRootAndName,
                e = d[b],
                f = this._bindings;
            void 0 === e && (e = {}, d[b] = e);
            e[c] = a;
            a._cacheIndex = f.length;
            f.push(a)
        },
        _removeInactiveBinding: function(a) {
            var b = this._bindings,
                c = a.binding,
                d = c.rootNode.uuid,
                c = c.path,
                e = this._bindingsByRootAndName,
                f = e[d],
                g = b[b.length - 1];
            a = a._cacheIndex;
            g._cacheIndex = a;
            b[a] = g;
            b.pop();
            delete f[c];
            a: {
                for (var h in f) break a;
                delete e[d]
            }
        },
        _lendBinding: function(a) {
            var b = this._bindings,
                c = a._cacheIndex,
                d = this._nActiveBindings++,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _takeBackBinding: function(a) {
            var b = this._bindings,
                c = a._cacheIndex,
                d = --this._nActiveBindings,
                e = b[d];
            a._cacheIndex = d;
            b[d] = a;
            e._cacheIndex = c;
            b[c] = e
        },
        _lendControlInterpolant: function() {
            var a = this._controlInterpolants,
                b = this._nActiveControlInterpolants++,
                c = a[b];
            void 0 === c && (c = new Wc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer),
                c.__cacheIndex = b, a[b] = c);
            return c
        },
        _takeBackControlInterpolant: function(a) {
            var b = this._controlInterpolants,
                c = a.__cacheIndex,
                d = --this._nActiveControlInterpolants,
                e = b[d];
            a.__cacheIndex = d;
            b[d] = a;
            e.__cacheIndex = c;
            b[c] = e
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(a, b) {
            var c = b || this._root,
                d = c.uuid,
                e = "string" === typeof a ? Ba.findByName(c, a) : a,
                c = null !== e ? e.uuid : a,
                f = this._actionsByClip[c],
                g = null;
            if (void 0 !== f) {
                g = f.actionByRoot[d];
                if (void 0 !== g) return g;
                g = f.knownActions[0];
                null ===
                    e && (e = g._clip)
            }
            if (null === e) return null;
            e = new Xe(this, e, b);
            this._bindAction(e, g);
            this._addInactiveAction(e, c, d);
            return e
        },
        existingAction: function(a, b) {
            var c = b || this._root,
                d = c.uuid,
                c = "string" === typeof a ? Ba.findByName(c, a) : a,
                c = this._actionsByClip[c ? c.uuid : a];
            return void 0 !== c ? c.actionByRoot[d] || null : null
        },
        stopAllAction: function() {
            for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e) a[e].reset();
            for (e = 0; e !== d; ++e) c[e].useCount =
                0;
            return this
        },
        update: function(a) {
            a *= this.timeScale;
            for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g) b[g]._update(d, a, e, f);
            a = this._bindings;
            b = this._nActiveBindings;
            for (g = 0; g !== b; ++g) a[g].apply(f);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(a) {
            var b = this._actions;
            a = a.uuid;
            var c = this._actionsByClip,
                d = c[a];
            if (void 0 !== d) {
                for (var d = d.knownActions, e = 0, f = d.length; e !== f; ++e) {
                    var g = d[e];
                    this._deactivateAction(g);
                    var h =
                        g._cacheIndex,
                        k = b[b.length - 1];
                    g._cacheIndex = null;
                    g._byClipCacheIndex = null;
                    k._cacheIndex = h;
                    b[h] = k;
                    b.pop();
                    this._removeInactiveBindingsForAction(g)
                }
                delete c[a]
            }
        },
        uncacheRoot: function(a) {
            a = a.uuid;
            var b = this._actionsByClip,
                c;
            for (c in b) {
                var d = b[c].actionByRoot[a];
                void 0 !== d && (this._deactivateAction(d), this._removeInactiveAction(d))
            }
            c = this._bindingsByRootAndName[a];
            if (void 0 !== c)
                for (var e in c) a = c[e], a.restoreOriginalState(), this._removeInactiveBinding(a)
        },
        uncacheAction: function(a, b) {
            var c = this.existingAction(a,
                b);
            null !== c && (this._deactivateAction(c), this._removeInactiveAction(c))
        }
    });
    Jd.prototype.clone = function() {
        return new Jd(void 0 === this.value.clone ? this.value : this.value.clone())
    };
    me.prototype = Object.assign(Object.create(I.prototype), {
        constructor: me,
        isInstancedBufferGeometry: !0,
        addGroup: function(a, b, c) {
            this.groups.push({
                start: a,
                count: b,
                materialIndex: c
            })
        },
        copy: function(a) {
            var b = a.index;
            null !== b && this.setIndex(b.clone());
            var b = a.attributes,
                c;
            for (c in b) this.addAttribute(c, b[c].clone());
            a = a.groups;
            c = 0;
            for (b =
                a.length; c < b; c++) {
                var d = a[c];
                this.addGroup(d.start, d.count, d.materialIndex)
            }
            return this
        }
    });
    Object.defineProperties(ne.prototype, {
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
    });
    Object.assign(ne.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(a, b) {
            this.data.array[a * this.data.stride + this.offset] = b;
            return this
        },
        setY: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 1] = b;
            return this
        },
        setZ: function(a, b) {
            this.data.array[a * this.data.stride +
                this.offset + 2] = b;
            return this
        },
        setW: function(a, b) {
            this.data.array[a * this.data.stride + this.offset + 3] = b;
            return this
        },
        getX: function(a) {
            return this.data.array[a * this.data.stride + this.offset]
        },
        getY: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 1]
        },
        getZ: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 2]
        },
        getW: function(a) {
            return this.data.array[a * this.data.stride + this.offset + 3]
        },
        setXY: function(a, b, c) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a +
                1] = c;
            return this
        },
        setXYZ: function(a, b, c, d) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            return this
        },
        setXYZW: function(a, b, c, d, e) {
            a = a * this.data.stride + this.offset;
            this.data.array[a + 0] = b;
            this.data.array[a + 1] = c;
            this.data.array[a + 2] = d;
            this.data.array[a + 3] = e;
            return this
        }
    });
    Object.defineProperty(kc.prototype, "needsUpdate", {
        set: function(a) {
            !0 === a && this.version++
        }
    });
    Object.assign(kc.prototype, {
        isInterleavedBuffer: !0,
        setArray: function(a) {
            if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== a ? a.length / this.stride : 0;
            this.array = a
        },
        setDynamic: function(a) {
            this.dynamic = a;
            return this
        },
        copy: function(a) {
            this.array = new a.array.constructor(a.array);
            this.count = a.count;
            this.stride = a.stride;
            this.dynamic = a.dynamic;
            return this
        },
        copyAt: function(a, b, c) {
            a *= this.stride;
            c *= b.stride;
            for (var d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d];
            return this
        },
        set: function(a, b) {
            void 0 === b && (b = 0);
            this.array.set(a, b);
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(a) {
            this.onUploadCallback =
                a;
            return this
        }
    });
    oe.prototype = Object.assign(Object.create(kc.prototype), {
        constructor: oe,
        isInstancedInterleavedBuffer: !0,
        copy: function(a) {
            kc.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        }
    });
    pe.prototype = Object.assign(Object.create(L.prototype), {
        constructor: pe,
        isInstancedBufferAttribute: !0,
        copy: function(a) {
            L.prototype.copy.call(this, a);
            this.meshPerAttribute = a.meshPerAttribute;
            return this
        }
    });
    Object.assign(Ze.prototype, {
        linePrecision: 1,
        set: function(a, b) {
            this.ray.set(a,
                b)
        },
        setFromCamera: function(a, b) {
            b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, .5).unproject(b).sub(this.ray.origin).normalize()) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(a, b) {
            var c = [];
            qe(a, this, c, b);
            c.sort($e);
            return c
        },
        intersectObjects: function(a,
            b) {
            var c = [];
            if (!1 === Array.isArray(a)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), c;
            for (var d = 0, e = a.length; d < e; d++) qe(a[d], this, c, b);
            c.sort($e);
            return c
        }
    });
    Object.assign(af.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" === typeof performance ? Date : performance).now();
            this.elapsedTime = 0;
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime();
            this.running = !1
        },
        getElapsedTime: function() {
            this.getDelta();
            return this.elapsedTime
        },
        getDelta: function() {
            var a =
                0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var b = ("undefined" === typeof performance ? Date : performance).now(),
                    a = (b - this.oldTime) / 1E3;
                this.oldTime = b;
                this.elapsedTime += a
            }
            return a
        }
    });
    Object.assign(bf.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.phi = b;
            this.theta = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.phi = a.phi;
            this.theta = a.theta;
            return this
        },
        makeSafe: function() {
            this.phi = Math.max(1E-6, Math.min(Math.PI -
                1E-6, this.phi));
            return this
        },
        setFromVector3: function(a) {
            this.radius = a.length();
            0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a.x, a.z), this.phi = Math.acos(Y.clamp(a.y / this.radius, -1, 1)));
            return this
        }
    });
    Object.assign(cf.prototype, {
        set: function(a, b, c) {
            this.radius = a;
            this.theta = b;
            this.y = c;
            return this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(a) {
            this.radius = a.radius;
            this.theta = a.theta;
            this.y = a.y;
            return this
        },
        setFromVector3: function(a) {
            this.radius = Math.sqrt(a.x *
                a.x + a.z * a.z);
            this.theta = Math.atan2(a.x, a.z);
            this.y = a.y;
            return this
        }
    });
    ra.prototype = Object.create(xa.prototype);
    ra.prototype.constructor = ra;
    ra.prototype.createAnimation = function(a, b, c, d) {
        b = {
            start: b,
            end: c,
            length: c - b + 1,
            fps: d,
            duration: (c - b) / d,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[a] = b;
        this.animationsList.push(b)
    };
    ra.prototype.autoCreateAnimations = function(a) {
        for (var b = /([a-z]+)_?(\d+)/i, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f <
            g; f++) {
            var h = e.morphTargets[f].name.match(b);
            if (h && 1 < h.length) {
                var k = h[1];
                d[k] || (d[k] = {
                    start: Infinity,
                    end: -Infinity
                });
                h = d[k];
                f < h.start && (h.start = f);
                f > h.end && (h.end = f);
                c || (c = k)
            }
        }
        for (k in d) h = d[k], this.createAnimation(k, h.start, h.end, a);
        this.firstAnimation = c
    };
    ra.prototype.setAnimationDirectionForward = function(a) {
        if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1
    };
    ra.prototype.setAnimationDirectionBackward = function(a) {
        if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0
    };
    ra.prototype.setAnimationFPS =
        function(a, b) {
            var c = this.animationsMap[a];
            c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
        };
    ra.prototype.setAnimationDuration = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
    };
    ra.prototype.setAnimationWeight = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.weight = b)
    };
    ra.prototype.setAnimationTime = function(a, b) {
        var c = this.animationsMap[a];
        c && (c.time = b)
    };
    ra.prototype.getAnimationTime = function(a) {
        var b = 0;
        if (a = this.animationsMap[a]) b = a.time;
        return b
    };
    ra.prototype.getAnimationDuration =
        function(a) {
            var b = -1;
            if (a = this.animationsMap[a]) b = a.duration;
            return b
        };
    ra.prototype.playAnimation = function(a) {
        var b = this.animationsMap[a];
        b ? (b.time = 0, b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()")
    };
    ra.prototype.stopAnimation = function(a) {
        if (a = this.animationsMap[a]) a.active = !1
    };
    ra.prototype.update = function(a) {
        for (var b = 0, c = this.animationsList.length; b < c; b++) {
            var d = this.animationsList[b];
            if (d.active) {
                var e = d.duration / d.length;
                d.time += d.direction * a;
                if (d.mirroredLoop) {
                    if (d.time >
                        d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
                } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
                var f = d.start + Y.clamp(Math.floor(d.time / e), 0, d.length - 1),
                    g = d.weight;
                f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
                e = d.time % e / e;
                d.directionBackwards && (e = 1 - e);
                d.currentFrame !==
                    d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * g, this.morphTargetInfluences[d.lastFrame] = (1 - e) * g) : this.morphTargetInfluences[d.currentFrame] = g
            }
        }
    };
    $c.prototype = Object.create(B.prototype);
    $c.prototype.constructor = $c;
    $c.prototype.isImmediateRenderObject = !0;
    ad.prototype = Object.create(da.prototype);
    ad.prototype.constructor = ad;
    ad.prototype.update = function() {
        var a = new p,
            b = new p,
            c = new Ga;
        return function() {
            var d = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0);
            c.getNormalMatrix(this.object.matrixWorld);
            var e = this.object.matrixWorld,
                f = this.geometry.attributes.position,
                g = this.object.geometry;
            if (g && g.isGeometry)
                for (var h = g.vertices, k = g.faces, l = g = 0, p = k.length; l < p; l++)
                    for (var q = k[l], n = 0, r = q.vertexNormals.length; n < r; n++) {
                        var z = q.vertexNormals[n];
                        a.copy(h[q[d[n]]]).applyMatrix4(e);
                        b.copy(z).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
                        f.setXYZ(g, a.x, a.y, a.z);
                        g += 1;
                        f.setXYZ(g, b.x, b.y, b.z);
                        g += 1
                    } else if (g && g.isBufferGeometry)
                        for (d = g.attributes.position, h = g.attributes.normal, n = g = 0, r = d.count; n <
                            r; n++) a.set(d.getX(n), d.getY(n), d.getZ(n)).applyMatrix4(e), b.set(h.getX(n), h.getY(n), h.getZ(n)), b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a), f.setXYZ(g, a.x, a.y, a.z), g += 1, f.setXYZ(g, b.x, b.y, b.z), g += 1;
            f.needsUpdate = !0
        }
    }();
    lc.prototype = Object.create(B.prototype);
    lc.prototype.constructor = lc;
    lc.prototype.dispose = function() {
        this.cone.geometry.dispose();
        this.cone.material.dispose()
    };
    lc.prototype.update = function() {
        var a = new p,
            b = new p;
        return function() {
            var c = this.light.distance ? this.light.distance :
                1E3,
                d = c * Math.tan(this.light.angle);
            this.cone.scale.set(d, d, c);
            a.setFromMatrixPosition(this.light.matrixWorld);
            b.setFromMatrixPosition(this.light.target.matrixWorld);
            this.cone.lookAt(b.sub(a));
            this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }();
    mc.prototype = Object.create(da.prototype);
    mc.prototype.constructor = mc;
    mc.prototype.getBoneList = function(a) {
        var b = [];
        a && a.isBone && b.push(a);
        for (var c = 0; c < a.children.length; c++) b.push.apply(b, this.getBoneList(a.children[c]));
        return b
    };
    mc.prototype.update = function() {
        var a = new p,
            b = new J,
            c = new J;
        return function() {
            var d = this.geometry,
                e = d.getAttribute("position");
            c.getInverse(this.root.matrixWorld);
            for (var f = 0, g = 0; f < this.bones.length; f++) {
                var h = this.bones[f];
                h.parent && h.parent.isBone && (b.multiplyMatrices(c, h.matrixWorld), a.setFromMatrixPosition(b), e.setXYZ(g, a.x, a.y, a.z), b.multiplyMatrices(c, h.parent.matrixWorld), a.setFromMatrixPosition(b), e.setXYZ(g + 1, a.x, a.y, a.z), g += 2)
            }
            d.getAttribute("position").needsUpdate = !0
        }
    }();
    nc.prototype =
        Object.create(xa.prototype);
    nc.prototype.constructor = nc;
    nc.prototype.dispose = function() {
        this.geometry.dispose();
        this.material.dispose()
    };
    nc.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    };
    oc.prototype = Object.create(B.prototype);
    oc.prototype.constructor = oc;
    oc.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose();
        this.children[1].geometry.dispose();
        this.children[1].material.dispose()
    };
    oc.prototype.update =
        function() {
            var a = new p,
                b = new p;
            return function() {
                var c = this.children[0],
                    d = this.children[1];
                if (this.light.target) {
                    a.setFromMatrixPosition(this.light.matrixWorld);
                    b.setFromMatrixPosition(this.light.target.matrixWorld);
                    var e = b.clone().sub(a);
                    c.lookAt(e);
                    d.lookAt(e)
                }
                c.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
                d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
                var d = .5 * this.light.width,
                    e = .5 * this.light.height,
                    c = c.geometry.getAttribute("position"),
                    f = c.array;
                f[0] = d;
                f[1] = -e;
                f[2] = 0;
                f[3] = d;
                f[4] = e;
                f[5] = 0;
                f[6] = -d;
                f[7] = e;
                f[8] = 0;
                f[9] = -d;
                f[10] = e;
                f[11] = 0;
                f[12] = -d;
                f[13] = -e;
                f[14] = 0;
                f[15] = d;
                f[16] = -e;
                f[17] = 0;
                c.needsUpdate = !0
            }
        }();
    pc.prototype = Object.create(B.prototype);
    pc.prototype.constructor = pc;
    pc.prototype.dispose = function() {
        this.children[0].geometry.dispose();
        this.children[0].material.dispose()
    };
    pc.prototype.update = function() {
        var a = new p,
            b = new H,
            c = new H;
        return function() {
            var d = this.children[0],
                e = d.geometry.getAttribute("color");
            b.copy(this.light.color).multiplyScalar(this.light.intensity);
            c.copy(this.light.groundColor).multiplyScalar(this.light.intensity);
            for (var f = 0, g = e.count; f < g; f++) {
                var h = f < g / 2 ? b : c;
                e.setXYZ(f, h.r, h.g, h.b)
            }
            d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
            e.needsUpdate = !0
        }
    }();
    bd.prototype = Object.create(da.prototype);
    bd.prototype.constructor = bd;
    Kd.prototype = Object.create(da.prototype);
    Kd.prototype.constructor = Kd;
    cd.prototype = Object.create(da.prototype);
    cd.prototype.constructor = cd;
    cd.prototype.update = function() {
        var a = new p,
            b = new p,
            c = new Ga;
        return function() {
            this.object.updateMatrixWorld(!0);
            c.getNormalMatrix(this.object.matrixWorld);
            for (var d = this.object.matrixWorld, e = this.geometry.attributes.position, f = this.object.geometry, g = f.vertices, f = f.faces, h = 0, k = 0, l = f.length; k < l; k++) {
                var p = f[k],
                    q = p.normal;
                a.copy(g[p.a]).add(g[p.b]).add(g[p.c]).divideScalar(3).applyMatrix4(d);
                b.copy(q).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
                e.setXYZ(h, a.x, a.y, a.z);
                h += 1;
                e.setXYZ(h, b.x, b.y, b.z);
                h += 1
            }
            e.needsUpdate = !0
        }
    }();
    qc.prototype = Object.create(B.prototype);
    qc.prototype.constructor = qc;
    qc.prototype.dispose =
        function() {
            var a = this.children[0],
                b = this.children[1];
            a.geometry.dispose();
            a.material.dispose();
            b.geometry.dispose();
            b.material.dispose()
        };
    qc.prototype.update = function() {
        var a = new p,
            b = new p,
            c = new p;
        return function() {
            a.setFromMatrixPosition(this.light.matrixWorld);
            b.setFromMatrixPosition(this.light.target.matrixWorld);
            c.subVectors(b, a);
            var d = this.children[0],
                e = this.children[1];
            d.lookAt(c);
            d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            e.lookAt(c);
            e.scale.z = c.length()
        }
    }();
    dd.prototype = Object.create(da.prototype);
    dd.prototype.constructor = dd;
    dd.prototype.update = function() {
        function a(a, g, h, k) {
            d.set(g, h, k).unproject(e);
            a = c[a];
            if (void 0 !== a)
                for (g = b.getAttribute("position"), h = 0, k = a.length; h < k; h++) g.setXYZ(a[h], d.x, d.y, d.z)
        }
        var b, c, d = new p,
            e = new Oa;
        return function() {
            b = this.geometry;
            c = this.pointMap;
            e.projectionMatrix.copy(this.camera.projectionMatrix);
            a("c", 0, 0, -1);
            a("t", 0, 0, 1);
            a("n1", -1, -1, -1);
            a("n2", 1, -1, -1);
            a("n3", -1, 1, -1);
            a("n4", 1, 1, -1);
            a("f1", -1, -1, 1);
            a("f2", 1, -1, 1);
            a("f3", -1, 1, 1);
            a("f4", 1, 1, 1);
            a("u1", .7, 1.1, -1);
            a("u2", -.7, 1.1, -1);
            a("u3", 0, 2, -1);
            a("cf1", -1, 0, 1);
            a("cf2", 1, 0, 1);
            a("cf3", 0, -1, 1);
            a("cf4", 0, 1, 1);
            a("cn1", -1, 0, -1);
            a("cn2", 1, 0, -1);
            a("cn3", 0, -1, -1);
            a("cn4", 0, 1, -1);
            b.getAttribute("position").needsUpdate = !0
        }
    }();
    Bb.prototype = Object.create(da.prototype);
    Bb.prototype.constructor = Bb;
    Bb.prototype.update = function() {
        var a = new Ta;
        return function(b) {
            void 0 !== b && console.warn("THREE.BoxHelper: .update() has no longer arguments.");
            void 0 !== this.object && a.setFromObject(this.object);
            if (!a.isEmpty()) {
                b = a.min;
                var c = a.max,
                    d = this.geometry.attributes.position,
                    e = d.array;
                e[0] = c.x;
                e[1] = c.y;
                e[2] = c.z;
                e[3] = b.x;
                e[4] = c.y;
                e[5] = c.z;
                e[6] = b.x;
                e[7] = b.y;
                e[8] = c.z;
                e[9] = c.x;
                e[10] = b.y;
                e[11] = c.z;
                e[12] = c.x;
                e[13] = c.y;
                e[14] = b.z;
                e[15] = b.x;
                e[16] = c.y;
                e[17] = b.z;
                e[18] = b.x;
                e[19] = b.y;
                e[20] = b.z;
                e[21] = c.x;
                e[22] = b.y;
                e[23] = b.z;
                d.needsUpdate = !0;
                this.geometry.computeBoundingSphere()
            }
        }
    }();
    Bb.prototype.setFromObject = function(a) {
        this.object = a;
        this.update();
        return this
    };
    var Ld, re;
    Cb.prototype = Object.create(B.prototype);
    Cb.prototype.constructor = Cb;
    Cb.prototype.setDirection = function() {
        var a = new p,
            b;
        return function(c) {
            .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b))
        }
    }();
    Cb.prototype.setLength = function(a, b, c) {
        void 0 === b && (b = .2 * a);
        void 0 === c && (c = .2 * b);
        this.line.scale.set(1, Math.max(0, a - b), 1);
        this.line.updateMatrix();
        this.cone.scale.set(c, b, c);
        this.cone.position.y = a;
        this.cone.updateMatrix()
    };
    Cb.prototype.setColor =
        function(a) {
            this.line.material.color.copy(a);
            this.cone.material.color.copy(a)
        };
    Md.prototype = Object.create(da.prototype);
    Md.prototype.constructor = Md;
    var Pd = new p,
        ve = new se,
        we = new se,
        xe = new se;
    Ka.prototype = Object.create(ma.prototype);
    Ka.prototype.constructor = Ka;
    Ka.prototype.getPoint = function(a) {
        var b = this.points,
            c = b.length;
        2 > c && console.log("duh, you need at least 2 points");
        a *= c - (this.closed ? 0 : 1);
        var d = Math.floor(a);
        a -= d;
        this.closed ? d += 0 < d ? 0 : (Math.floor(Math.abs(d) / b.length) + 1) * b.length : 0 === a && d ===
            c - 1 && (d = c - 2, a = 1);
        var e, f, g;
        this.closed || 0 < d ? e = b[(d - 1) % c] : (Pd.subVectors(b[0], b[1]).add(b[0]), e = Pd);
        f = b[d % c];
        g = b[(d + 1) % c];
        this.closed || d + 2 < c ? b = b[(d + 2) % c] : (Pd.subVectors(b[c - 1], b[c - 2]).add(b[c - 1]), b = Pd);
        if (void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var h = "chordal" === this.type ? .5 : .25,
                c = Math.pow(e.distanceToSquared(f), h),
                d = Math.pow(f.distanceToSquared(g), h),
                h = Math.pow(g.distanceToSquared(b), h);
            1E-4 > d && (d = 1);
            1E-4 > c && (c = d);
            1E-4 > h && (h = d);
            ve.initNonuniformCatmullRom(e.x, f.x, g.x,
                b.x, c, d, h);
            we.initNonuniformCatmullRom(e.y, f.y, g.y, b.y, c, d, h);
            xe.initNonuniformCatmullRom(e.z, f.z, g.z, b.z, c, d, h)
        } else "catmullrom" === this.type && (c = void 0 !== this.tension ? this.tension : .5, ve.initCatmullRom(e.x, f.x, g.x, b.x, c), we.initCatmullRom(e.y, f.y, g.y, b.y, c), xe.initCatmullRom(e.z, f.z, g.z, b.z, c));
        return new p(ve.calc(a), we.calc(a), xe.calc(a))
    };
    ed.prototype = Object.create(ma.prototype);
    ed.prototype.constructor = ed;
    ed.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2,
            e = this.v3;
        return new p(yb(a,
            b.x, c.x, d.x, e.x), yb(a, b.y, c.y, d.y, e.y), yb(a, b.z, c.z, d.z, e.z))
    };
    fd.prototype = Object.create(ma.prototype);
    fd.prototype.constructor = fd;
    fd.prototype.getPoint = function(a) {
        var b = this.v0,
            c = this.v1,
            d = this.v2;
        return new p(xb(a, b.x, c.x, d.x), xb(a, b.y, c.y, d.y), xb(a, b.z, c.z, d.z))
    };
    gd.prototype = Object.create(ma.prototype);
    gd.prototype.constructor = gd;
    gd.prototype.getPoint = function(a) {
        if (1 === a) return this.v2.clone();
        var b = new p;
        b.subVectors(this.v2, this.v1);
        b.multiplyScalar(a);
        b.add(this.v1);
        return b
    };
    Nd.prototype =
        Object.create(Xa.prototype);
    Nd.prototype.constructor = Nd;
    ma.create = function(a, b) {
        console.log("THREE.Curve.create() has been deprecated");
        a.prototype = Object.create(ma.prototype);
        a.prototype.constructor = a;
        a.prototype.getPoint = b;
        return a
    };
    df.prototype = Object.create(Ka.prototype);
    ef.prototype = Object.create(Ka.prototype);
    te.prototype = Object.create(Ka.prototype);
    Object.assign(te.prototype, {
        initFromArray: function(a) {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function(a) {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function(a) {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    });
    bd.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    };
    Object.assign(id.prototype, {
        center: function(a) {
            console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        size: function(a) {
            console.warn("THREE.Box2: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Object.assign(Ta.prototype, {
        center: function(a) {
            console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
            return this.getCenter(a)
        },
        empty: function() {
            console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        },
        isIntersectionBox: function(a) {
            console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        },
        size: function(a) {
            console.warn("THREE.Box3: .size() has been renamed to .getSize().");
            return this.getSize(a)
        }
    });
    Hb.prototype.center = function(a) {
        console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
        return this.getCenter(a)
    };
    Y.random16 = function() {
        console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");
        return Math.random()
    };
    Object.assign(Ga.prototype, {
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        },
        multiplyVector3Array: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
            return this.applyToVector3Array(a)
        },
        applyToBuffer: function(a, b, c) {
            console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a)
        },
        applyToVector3Array: function(a, b, c) {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    });
    Object.assign(J.prototype, {
        extractPosition: function(a) {
            console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a)
        },
        flattenToArrayOffset: function(a, b) {
            console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
            return this.toArray(a, b)
        },
        getPosition: function() {
            var a;
            return function() {
                void 0 === a && (a = new p);
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                return a.setFromMatrixColumn(this,
                    3)
            }
        }(),
        setRotationFromQuaternion: function(a) {
            console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
            return this.makeRotationFromQuaternion(a)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector4: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector3Array: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
            return this.applyToVector3Array(a)
        },
        rotateAxis: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this)
        },
        crossVector: function(a) {
            console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(a, b, c) {
            console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
            return this.applyToBufferAttribute(a)
        },
        applyToVector3Array: function(a, b, c) {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(a, b, c, d, e, f) {
            console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
            return this.makePerspective(a, b, d, c, e, f)
        }
    });
    wa.prototype.isIntersectionLine = function(a) {
        console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
        return this.intersectsLine(a)
    };
    qa.prototype.multiplyVector3 = function(a) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    };
    Object.assign(hb.prototype, {
        isIntersectionBox: function(a) {
            console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        },
        isIntersectionPlane: function(a) {
            console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
            return this.intersectsPlane(a)
        },
        isIntersectionSphere: function(a) {
            console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        }
    });
    Object.assign(Ab.prototype, {
        extrude: function(a) {
            console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
            return new db(this, a)
        },
        makeGeometry: function(a) {
            console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
            return new Zb(this, a)
        }
    });
    Object.assign(D.prototype, {
        fromAttribute: function(a,
            b, c) {
            console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        }
    });
    Object.assign(p.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
            return this.setFromMatrixPosition(a)
        },
        getScaleFromMatrix: function(a) {
            console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
            return this.setFromMatrixScale(a)
        },
        getColumnFromMatrix: function(a, b) {
            console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
            return this.setFromMatrixColumn(b, a)
        },
        applyProjection: function(a) {
            console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
            return this.applyMatrix4(a)
        },
        fromAttribute: function(a, b, c) {
            console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        }
    });
    Object.assign(ga.prototype, {
        fromAttribute: function(a, b, c) {
            console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
            return this.fromBufferAttribute(a, b, c)
        }
    });
    M.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    };
    Object.assign(B.prototype, {
        getChildByName: function(a) {
            console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(a, b) {
            console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
            return this.translateOnAxis(b, a)
        }
    });
    Object.defineProperties(B.prototype, {
        eulerOrder: {
            get: function() {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                return this.rotation.order
            },
            set: function(a) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
                this.rotation.order = a
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    });
    Object.defineProperties(Bc.prototype, {
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels
            }
        }
    });
    Object.defineProperty(Cc.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    });
    Object.defineProperty(ma.prototype, "__arcLengthDivisions", {
        get: function() {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            return this.arcLengthDivisions
        },
        set: function(a) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
            this.arcLengthDivisions = a
        }
    });
    ya.prototype.setLens = function(a, b) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
        void 0 !== b && (this.filmGauge = b);
        this.setFocalLength(a)
    };
    Object.defineProperties(ia.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
                this.shadow.camera.fov = a
            }
        },
        shadowCameraLeft: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
                this.shadow.camera.left = a
            }
        },
        shadowCameraRight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
                this.shadow.camera.right = a
            }
        },
        shadowCameraTop: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
                this.shadow.camera.top = a
            }
        },
        shadowCameraBottom: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
                this.shadow.camera.bottom = a
            }
        },
        shadowCameraNear: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
                this.shadow.camera.near = a
            }
        },
        shadowCameraFar: {
            set: function(a) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
                this.shadow.camera.far = a
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(a) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
                this.shadow.bias = a
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
                this.shadow.mapSize.width = a
            }
        },
        shadowMapHeight: {
            set: function(a) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
                this.shadow.mapSize.height = a
            }
        }
    });
    Object.defineProperties(L.prototype, {
        length: {
            get: function() {
                console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
                return this.array.length
            }
        }
    });
    Object.assign(I.prototype, {
        addIndex: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
            this.setIndex(a)
        },
        addDrawCall: function(a,
            b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
            this.addGroup(a, b)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    });
    Object.defineProperties(I.prototype, {
        drawcalls: {
            get: function() {
                console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
                return this.groups
            }
        },
        offsets: {
            get: function() {
                console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
                return this.groups
            }
        }
    });
    Object.defineProperties(Jd.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
                return this
            }
        }
    });
    Object.defineProperties(Z.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                console.warn("THREE.Material: .wrapRGB has been removed.");
                return new H
            }
        }
    });
    Object.defineProperties(ta.prototype, {
        metal: {
            get: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
                return !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    });
    Object.defineProperties(Ea.prototype, {
        derivatives: {
            get: function() {
                console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                return this.extensions.derivatives
            },
            set: function(a) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
                this.extensions.derivatives = a
            }
        }
    });
    Object.assign(Xd.prototype, {
        getCurrentRenderTarget: function() {
            console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
            return this.getRenderTarget()
        },
        supportsFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
            return this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
            return this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
            return this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
            return this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
            return this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
            this.setScissorTest(a)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    });
    Object.defineProperties(Xd.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
                this.shadowMap.enabled = a
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
                this.shadowMap.type = a
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
                this.shadowMap.cullFace = a
            }
        }
    });
    Object.defineProperties(Je.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? 2 : 1
            },
            set: function(a) {
                a = 1 !== a;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + a + ".");
                this.renderReverseSided = a
            }
        }
    });
    Object.defineProperties(Db.prototype, {
        wrapS: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                return this.texture.wrapS
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
                this.texture.wrapS = a
            }
        },
        wrapT: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                return this.texture.wrapT
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
                this.texture.wrapT = a
            }
        },
        magFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                return this.texture.magFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
                this.texture.magFilter =
                    a
            }
        },
        minFilter: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                return this.texture.minFilter
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
                this.texture.minFilter = a
            }
        },
        anisotropy: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                return this.texture.anisotropy
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
                this.texture.anisotropy =
                    a
            }
        },
        offset: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                return this.texture.offset
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
                this.texture.offset = a
            }
        },
        repeat: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                return this.texture.repeat
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
                this.texture.repeat = a
            }
        },
        format: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                return this.texture.format
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
                this.texture.format = a
            }
        },
        type: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                return this.texture.type
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
                this.texture.type = a
            }
        },
        generateMipmaps: {
            get: function() {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                return this.texture.generateMipmaps
            },
            set: function(a) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
                this.texture.generateMipmaps = a
            }
        }
    });
    jc.prototype.load = function(a) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var b = this;
        (new fe).load(a, function(a) {
            b.setBuffer(a)
        });
        return this
    };
    ke.prototype.getData = function() {
        console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
        return this.getFrequencyData()
    };
    l.WebGLRenderTargetCube = Eb;
    l.WebGLRenderTarget =
        Db;
    l.WebGLRenderer = Xd;
    l.ShaderLib = ab;
    l.UniformsLib = V;
    l.UniformsUtils = Ha;
    l.ShaderChunk = U;
    l.FogExp2 = Kb;
    l.Fog = Lb;
    l.Scene = md;
    l.LensFlare = Yd;
    l.Sprite = Ac;
    l.LOD = Bc;
    l.SkinnedMesh = od;
    l.Skeleton = Cc;
    l.Bone = nd;
    l.Mesh = xa;
    l.LineSegments = da;
    l.LineLoop = pd;
    l.Line = La;
    l.Points = Mb;
    l.Group = Dc;
    l.VideoTexture = qd;
    l.DataTexture = eb;
    l.CompressedTexture = Nb;
    l.CubeTexture = Za;
    l.CanvasTexture = rd;
    l.DepthTexture = Ec;
    l.Texture = X;
    l.CompressedTextureLoader = Qe;
    l.DataTextureLoader = $d;
    l.CubeTextureLoader = ae;
    l.TextureLoader = sd;
    l.ObjectLoader =
        Re;
    l.MaterialLoader = Hd;
    l.BufferGeometryLoader = be;
    l.DefaultLoadingManager = Aa;
    l.LoadingManager = Zd;
    l.JSONLoader = ce;
    l.ImageLoader = Vc;
    l.FontLoader = Te;
    l.FileLoader = ua;
    l.Loader = gc;
    l.Cache = hd;
    l.AudioLoader = fe;
    l.SpotLightShadow = ud;
    l.SpotLight = vd;
    l.PointLight = wd;
    l.RectAreaLight = Ad;
    l.HemisphereLight = td;
    l.DirectionalLightShadow = xd;
    l.DirectionalLight = yd;
    l.AmbientLight = zd;
    l.LightShadow = ub;
    l.Light = ia;
    l.StereoCamera = Ue;
    l.PerspectiveCamera = ya;
    l.OrthographicCamera = Jb;
    l.CubeCamera = Id;
    l.ArrayCamera = ge;
    l.Camera = Oa;
    l.AudioListener =
        he;
    l.PositionalAudio = je;
    l.AudioContext = ie;
    l.AudioAnalyser = ke;
    l.Audio = jc;
    l.VectorKeyframeTrack = ec;
    l.StringKeyframeTrack = Ed;
    l.QuaternionKeyframeTrack = Xc;
    l.NumberKeyframeTrack = fc;
    l.ColorKeyframeTrack = Gd;
    l.BooleanKeyframeTrack = Fd;
    l.PropertyMixer = le;
    l.PropertyBinding = na;
    l.KeyframeTrack = wb;
    l.AnimationUtils = va;
    l.AnimationObjectGroup = We;
    l.AnimationMixer = Ye;
    l.AnimationClip = Ba;
    l.Uniform = Jd;
    l.InstancedBufferGeometry = me;
    l.BufferGeometry = I;
    l.GeometryIdCount = function() {
        return Td++
    };
    l.Geometry = M;
    l.InterleavedBufferAttribute =
        ne;
    l.InstancedInterleavedBuffer = oe;
    l.InterleavedBuffer = kc;
    l.InstancedBufferAttribute = pe;
    l.Face3 = Va;
    l.Object3D = B;
    l.Raycaster = Ze;
    l.Layers = Rd;
    l.EventDispatcher = sa;
    l.Clock = af;
    l.QuaternionLinearInterpolant = Dd;
    l.LinearInterpolant = Wc;
    l.DiscreteInterpolant = Cd;
    l.CubicInterpolant = Bd;
    l.Interpolant = Da;
    l.Triangle = Ua;
    l.Math = Y;
    l.Spherical = bf;
    l.Cylindrical = cf;
    l.Plane = wa;
    l.Frustum = jd;
    l.Sphere = Ca;
    l.Ray = hb;
    l.Matrix4 = J;
    l.Matrix3 = Ga;
    l.Box3 = Ta;
    l.Box2 = id;
    l.Line3 = Hb;
    l.Euler = bb;
    l.Vector4 = ga;
    l.Vector3 = p;
    l.Vector2 = D;
    l.Quaternion =
        qa;
    l.Color = H;
    l.MorphBlendMesh = ra;
    l.ImmediateRenderObject = $c;
    l.VertexNormalsHelper = ad;
    l.SpotLightHelper = lc;
    l.SkeletonHelper = mc;
    l.PointLightHelper = nc;
    l.RectAreaLightHelper = oc;
    l.HemisphereLightHelper = pc;
    l.GridHelper = bd;
    l.PolarGridHelper = Kd;
    l.FaceNormalsHelper = cd;
    l.DirectionalLightHelper = qc;
    l.CameraHelper = dd;
    l.BoxHelper = Bb;
    l.ArrowHelper = Cb;
    l.AxisHelper = Md;
    l.CatmullRomCurve3 = Ka;
    l.CubicBezierCurve3 = ed;
    l.QuadraticBezierCurve3 = fd;
    l.LineCurve3 = gd;
    l.ArcCurve = Nd;
    l.EllipseCurve = Xa;
    l.SplineCurve = zb;
    l.CubicBezierCurve =
        hc;
    l.QuadraticBezierCurve = ic;
    l.LineCurve = Sa;
    l.Shape = Ab;
    l.Path = Zc;
    l.ShapePath = de;
    l.Font = ee;
    l.CurvePath = Yc;
    l.Curve = ma;
    l.ShapeUtils = za;
    l.SceneUtils = {
        createMultiMaterialObject: function(a, b) {
            for (var c = new Dc, d = 0, e = b.length; d < e; d++) c.add(new xa(a, b[d]));
            return c
        },
        detach: function(a, b, c) {
            a.applyMatrix(b.matrixWorld);
            b.remove(a);
            c.add(a)
        },
        attach: function(a, b, c) {
            var d = new J;
            d.getInverse(c.matrixWorld);
            a.applyMatrix(d);
            b.remove(a);
            c.add(a)
        }
    };
    l.WireframeGeometry = Ob;
    l.ParametricGeometry = Fc;
    l.ParametricBufferGeometry =
        Pb;
    l.TetrahedronGeometry = Hc;
    l.TetrahedronBufferGeometry = Qb;
    l.OctahedronGeometry = Ic;
    l.OctahedronBufferGeometry = mb;
    l.IcosahedronGeometry = Jc;
    l.IcosahedronBufferGeometry = Rb;
    l.DodecahedronGeometry = Kc;
    l.DodecahedronBufferGeometry = Sb;
    l.PolyhedronGeometry = Gc;
    l.PolyhedronBufferGeometry = ha;
    l.TubeGeometry = Lc;
    l.TubeBufferGeometry = Tb;
    l.TorusKnotGeometry = Mc;
    l.TorusKnotBufferGeometry = Ub;
    l.TorusGeometry = Nc;
    l.TorusBufferGeometry = Vb;
    l.TextGeometry = Oc;
    l.TextBufferGeometry = Wb;
    l.SphereGeometry = Pc;
    l.SphereBufferGeometry =
        nb;
    l.RingGeometry = Qc;
    l.RingBufferGeometry = Xb;
    l.PlaneGeometry = xc;
    l.PlaneBufferGeometry = lb;
    l.LatheGeometry = Rc;
    l.LatheBufferGeometry = Yb;
    l.ShapeGeometry = Zb;
    l.ShapeBufferGeometry = $b;
    l.ExtrudeGeometry = db;
    l.ExtrudeBufferGeometry = Fa;
    l.EdgesGeometry = ac;
    l.ConeGeometry = Sc;
    l.ConeBufferGeometry = Tc;
    l.CylinderGeometry = ob;
    l.CylinderBufferGeometry = Wa;
    l.CircleGeometry = Uc;
    l.CircleBufferGeometry = bc;
    l.BoxGeometry = Ib;
    l.BoxBufferGeometry = kb;
    l.ShadowMaterial = cc;
    l.SpriteMaterial = cb;
    l.RawShaderMaterial = dc;
    l.ShaderMaterial =
        Ea;
    l.PointsMaterial = Ma;
    l.MeshPhysicalMaterial = pb;
    l.MeshStandardMaterial = Ra;
    l.MeshPhongMaterial = ta;
    l.MeshToonMaterial = qb;
    l.MeshNormalMaterial = rb;
    l.MeshLambertMaterial = sb;
    l.MeshDepthMaterial = $a;
    l.MeshBasicMaterial = Ia;
    l.LineDashedMaterial = tb;
    l.LineBasicMaterial = pa;
    l.Material = Z;
    l.Float64BufferAttribute = wc;
    l.Float32BufferAttribute = C;
    l.Uint32BufferAttribute = jb;
    l.Int32BufferAttribute = vc;
    l.Uint16BufferAttribute = ib;
    l.Int16BufferAttribute = uc;
    l.Uint8ClampedBufferAttribute = tc;
    l.Uint8BufferAttribute = sc;
    l.Int8BufferAttribute =
        rc;
    l.BufferAttribute = L;
    l.REVISION = "85";
    l.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    };
    l.CullFaceNone = 0;
    l.CullFaceBack = 1;
    l.CullFaceFront = 2;
    l.CullFaceFrontBack = 3;
    l.FrontFaceDirectionCW = 0;
    l.FrontFaceDirectionCCW = 1;
    l.BasicShadowMap = 0;
    l.PCFShadowMap = 1;
    l.PCFSoftShadowMap = 2;
    l.FrontSide = 0;
    l.BackSide = 1;
    l.DoubleSide = 2;
    l.FlatShading = 1;
    l.SmoothShading = 2;
    l.NoColors = 0;
    l.FaceColors = 1;
    l.VertexColors = 2;
    l.NoBlending = 0;
    l.NormalBlending = 1;
    l.AdditiveBlending = 2;
    l.SubtractiveBlending = 3;
    l.MultiplyBlending = 4;
    l.CustomBlending = 5;
    l.AddEquation =
        100;
    l.SubtractEquation = 101;
    l.ReverseSubtractEquation = 102;
    l.MinEquation = 103;
    l.MaxEquation = 104;
    l.ZeroFactor = 200;
    l.OneFactor = 201;
    l.SrcColorFactor = 202;
    l.OneMinusSrcColorFactor = 203;
    l.SrcAlphaFactor = 204;
    l.OneMinusSrcAlphaFactor = 205;
    l.DstAlphaFactor = 206;
    l.OneMinusDstAlphaFactor = 207;
    l.DstColorFactor = 208;
    l.OneMinusDstColorFactor = 209;
    l.SrcAlphaSaturateFactor = 210;
    l.NeverDepth = 0;
    l.AlwaysDepth = 1;
    l.LessDepth = 2;
    l.LessEqualDepth = 3;
    l.EqualDepth = 4;
    l.GreaterEqualDepth = 5;
    l.GreaterDepth = 6;
    l.NotEqualDepth = 7;
    l.MultiplyOperation =
        0;
    l.MixOperation = 1;
    l.AddOperation = 2;
    l.NoToneMapping = 0;
    l.LinearToneMapping = 1;
    l.ReinhardToneMapping = 2;
    l.Uncharted2ToneMapping = 3;
    l.CineonToneMapping = 4;
    l.UVMapping = 300;
    l.CubeReflectionMapping = 301;
    l.CubeRefractionMapping = 302;
    l.EquirectangularReflectionMapping = 303;
    l.EquirectangularRefractionMapping = 304;
    l.SphericalReflectionMapping = 305;
    l.CubeUVReflectionMapping = 306;
    l.CubeUVRefractionMapping = 307;
    l.RepeatWrapping = 1E3;
    l.ClampToEdgeWrapping = 1001;
    l.MirroredRepeatWrapping = 1002;
    l.NearestFilter = 1003;
    l.NearestMipMapNearestFilter =
        1004;
    l.NearestMipMapLinearFilter = 1005;
    l.LinearFilter = 1006;
    l.LinearMipMapNearestFilter = 1007;
    l.LinearMipMapLinearFilter = 1008;
    l.UnsignedByteType = 1009;
    l.ByteType = 1010;
    l.ShortType = 1011;
    l.UnsignedShortType = 1012;
    l.IntType = 1013;
    l.UnsignedIntType = 1014;
    l.FloatType = 1015;
    l.HalfFloatType = 1016;
    l.UnsignedShort4444Type = 1017;
    l.UnsignedShort5551Type = 1018;
    l.UnsignedShort565Type = 1019;
    l.UnsignedInt248Type = 1020;
    l.AlphaFormat = 1021;
    l.RGBFormat = 1022;
    l.RGBAFormat = 1023;
    l.LuminanceFormat = 1024;
    l.LuminanceAlphaFormat = 1025;
    l.RGBEFormat =
        1023;
    l.DepthFormat = 1026;
    l.DepthStencilFormat = 1027;
    l.RGB_S3TC_DXT1_Format = 2001;
    l.RGBA_S3TC_DXT1_Format = 2002;
    l.RGBA_S3TC_DXT3_Format = 2003;
    l.RGBA_S3TC_DXT5_Format = 2004;
    l.RGB_PVRTC_4BPPV1_Format = 2100;
    l.RGB_PVRTC_2BPPV1_Format = 2101;
    l.RGBA_PVRTC_4BPPV1_Format = 2102;
    l.RGBA_PVRTC_2BPPV1_Format = 2103;
    l.RGB_ETC1_Format = 2151;
    l.LoopOnce = 2200;
    l.LoopRepeat = 2201;
    l.LoopPingPong = 2202;
    l.InterpolateDiscrete = 2300;
    l.InterpolateLinear = 2301;
    l.InterpolateSmooth = 2302;
    l.ZeroCurvatureEnding = 2400;
    l.ZeroSlopeEnding = 2401;
    l.WrapAroundEnding =
        2402;
    l.TrianglesDrawMode = 0;
    l.TriangleStripDrawMode = 1;
    l.TriangleFanDrawMode = 2;
    l.LinearEncoding = 3E3;
    l.sRGBEncoding = 3001;
    l.GammaEncoding = 3007;
    l.RGBEEncoding = 3002;
    l.LogLuvEncoding = 3003;
    l.RGBM7Encoding = 3004;
    l.RGBM16Encoding = 3005;
    l.RGBDEncoding = 3006;
    l.BasicDepthPacking = 3200;
    l.RGBADepthPacking = 3201;
    l.CubeGeometry = Ib;
    l.Face4 = function(a, b, c, d, e, f, g) {
        console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
        return new Va(a, b, c, e, f, g)
    };
    l.LineStrip = 0;
    l.LinePieces = 1;
    l.MeshFaceMaterial =
        function(a) {
            console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
            return a
        };
    l.MultiMaterial = function(a) {
        void 0 === a && (a = []);
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
        a.isMultiMaterial = !0;
        a.materials = a;
        a.clone = function() {
            return a.slice()
        };
        return a
    };
    l.PointCloud = function(a, b) {
        console.warn("THREE.PointCloud has been renamed to THREE.Points.");
        return new Mb(a, b)
    };
    l.Particle = function(a) {
        console.warn("THREE.Particle has been renamed to THREE.Sprite.");
        return new Ac(a)
    };
    l.ParticleSystem = function(a, b) {
        console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
        return new Mb(a, b)
    };
    l.PointCloudMaterial = function(a) {
        console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
        return new Ma(a)
    };
    l.ParticleBasicMaterial = function(a) {
        console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
        return new Ma(a)
    };
    l.ParticleSystemMaterial = function(a) {
        console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
        return new Ma(a)
    };
    l.Vertex = function(a, b, c) {
        console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
        return new p(a, b, c)
    };
    l.DynamicBufferAttribute = function(a, b) {
        console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
        return (new L(a, b)).setDynamic(!0)
    };
    l.Int8Attribute = function(a, b) {
        console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
        return new rc(a, b)
    };
    l.Uint8Attribute =
        function(a, b) {
            console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
            return new sc(a, b)
        };
    l.Uint8ClampedAttribute = function(a, b) {
        console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
        return new tc(a, b)
    };
    l.Int16Attribute = function(a, b) {
        console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
        return new uc(a, b)
    };
    l.Uint16Attribute = function(a, b) {
        console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
        return new ib(a, b)
    };
    l.Int32Attribute = function(a, b) {
        console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
        return new vc(a, b)
    };
    l.Uint32Attribute = function(a, b) {
        console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
        return new jb(a, b)
    };
    l.Float32Attribute = function(a, b) {
        console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
        return new C(a, b)
    };
    l.Float64Attribute =
        function(a, b) {
            console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
            return new wc(a, b)
        };
    l.ClosedSplineCurve3 = df;
    l.SplineCurve3 = ef;
    l.Spline = te;
    l.BoundingBoxHelper = function(a, b) {
        console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
        return new Bb(a, b)
    };
    l.EdgesHelper = function(a, b) {
        console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
        return new da(new ac(a.geometry), new pa({
            color: void 0 !==
                b ? b : 16777215
        }))
    };
    l.WireframeHelper = function(a, b) {
        console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
        return new da(new Ob(a.geometry), new pa({
            color: void 0 !== b ? b : 16777215
        }))
    };
    l.XHRLoader = function(a) {
        console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
        return new ua(a)
    };
    l.BinaryTextureLoader = function(a) {
        console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
        return new $d(a)
    };
    l.GeometryUtils = {
        merge: function(a, b,
            c) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var d;
            b.isMesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
            a.merge(b, d, c)
        },
        center: function(a) {
            console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
            return a.center()
        }
    };
    l.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(a, b, c, d) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var e = new sd;
            e.setCrossOrigin(this.crossOrigin);
            a = e.load(a, c, void 0, d);
            b && (a.mapping = b);
            return a
        },
        loadTextureCube: function(a, b, c, d) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var e = new ae;
            e.setCrossOrigin(this.crossOrigin);
            a = e.load(a, c, void 0, d);
            b && (a.mapping = b);
            return a
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    };
    l.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
        this.projectVector = function(a, b) {
            console.warn("THREE.Projector: .projectVector() is now vector.project().");
            a.project(b)
        };
        this.unprojectVector = function(a, b) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
            a.unproject(b)
        };
        this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    };
    l.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        this.clear = function() {};
        this.render = function() {};
        this.setClearColor = function() {};
        this.setSize = function() {}
    };
    Object.defineProperty(l, "__esModule", {
        value: !0
    })
});