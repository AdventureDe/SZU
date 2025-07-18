! function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var r = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
	}
	var i = {};
	return e.m = t, e.c = i, e.p = "script/", e(0)
}([function(t, e, i) {
	function n() {
		var t =
			"(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
		return window.devicePixelRatio > 1 ? !0 : window.matchMedia && window.matchMedia(t).matches ? !0 : !1
	}
	i(16), i(18), i(19), i(20), i(21), $(function() {
		var t, e, i = window.navigator.userAgent,
			r = {
				ios: !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: i.indexOf("Android") > -1 || i.indexOf("Linux") > -1,
				mobile: !!i.match(/AppleWebKit.*Mobile.*/) || !!i.match(
					/\(i[^;]+;( U;)? CPU.+Mac OS X/) || i.indexOf("Android") > -1 || !!i.match(
						/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)
			},
			s = 999,
			a = !1,
			o = !1;
		i.indexOf("Edge") > -1 && (t = "edge", s = i.match(/Edge\/([\d.]+)/)), i.indexOf("Safari") > -
			1 && (t = "safari", s = i.match(/Version\/([\d.]+).*Safari/)), i.indexOf("Chrome") > -1 && (
				t = "chrome", s = i.match(/Chrome\/([\d.]+)/)), i.indexOf("Firefox") > -1 && (t =
				"firefox", s = i.match(/Firefox\/([\d.]+)/)), i.indexOf("Opera") > -1 && (t = "opera",
				s = i.match(/Opera.([\d.]+)/)), i.indexOf("UBrowser") > -1 && (t = "uc", s = i.match(
				/UBrowser\/([\d.]+)/)), i.indexOf("UCBrowser") > -1 && (t = "uc", s = i.match(
				/UCBrowser\/([\d.]+)/)), i.indexOf("Windows") > -1 && (e = "windows"), i.indexOf(
				"Mac OS") > -1 && (e = "macos"), i.indexOf("Linux") > -1 && (e = "linux"), i.indexOf(
				"MSIE") > -1 && (a = !0, s = i.match(/MSIE (\d+)./), t = "ie"), i.indexOf("Trident/7") >
			-1 && (o = !0, t = "ie");
		for (var l in r) Modernizr.addTest(l, function() {
			return r[l]
		});
		Modernizr.addTest("lt8", function() {
			return "ie" == t && s[1] <= 8
		}), Modernizr.addTest(t, function() {
			return t
		}), Modernizr.addTest(e, function() {
			return e
		}), Modernizr.addTest("retina", function() {
			return n()
		})
	}), Modernizr.addTest("wxbrowser", function() {
		return self.wxbrowser = "micromessenger" == window.navigator.userAgent.toLowerCase().match(
			/MicroMessenger/i), self.wxbrowser
	})
}, , , , , , , , , , , , , , , , function(t, e, i) {
	var n, r;
	! function(s, a) {
		function o(t) {
			var e = ye[t] = {};
			return ne.each(t.split(ae), function(t, i) {
				e[i] = !0
			}), e
		}

		function l(t, e, i) {
			if (i === a && 1 === t.nodeType) {
				var n = "data-" + e.replace(be, "-$1").toLowerCase();
				if (i = t.getAttribute(n), "string" == typeof i) {
					try {
						i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i :
							xe.test(i) ? ne.parseJSON(i) : i
					} catch (r) {}
					ne.data(t, e, i)
				} else i = a
			}
			return i
		}

		function h(t) {
			var e;
			for (e in t)
				if (("data" !== e || !ne.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
			return !0
		}

		function u() {
			return !1
		}

		function c() {
			return !0
		}

		function f(t) {
			return !t || !t.parentNode || 11 === t.parentNode.nodeType
		}

		function p(t, e) {
			do t = t[e]; while (t && 1 !== t.nodeType);
			return t
		}

		function d(t, e, i) {
			if (e = e || 0, ne.isFunction(e)) return ne.grep(t, function(t, n) {
				var r = !!e.call(t, n, t);
				return r === i
			});
			if (e.nodeType) return ne.grep(t, function(t) {
				return t === e === i
			});
			if ("string" == typeof e) {
				var n = ne.grep(t, function(t) {
					return 1 === t.nodeType
				});
				if (Xe.test(e)) return ne.filter(e, n, !i);
				e = ne.filter(e, n)
			}
			return ne.grep(t, function(t) {
				return ne.inArray(t, e) >= 0 === i
			})
		}

		function m(t) {
			var e = We.split("|"),
				i = t.createDocumentFragment();
			if (i.createElement)
				for (; e.length;) i.createElement(e.pop());
			return i
		}

		function g(t, e) {
			return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
		}

		function _(t, e) {
			if (1 === e.nodeType && ne.hasData(t)) {
				var i, n, r, s = ne._data(t),
					a = ne._data(e, s),
					o = s.events;
				if (o) {
					delete a.handle, a.events = {};
					for (i in o)
						for (n = 0, r = o[i].length; r > n; n++) ne.event.add(e, i, o[i][n])
				}
				a.data && (a.data = ne.extend({}, a.data))
			}
		}

		function v(t, e) {
			var i;
			1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e
				.mergeAttributes(t), i = e.nodeName.toLowerCase(), "object" === i ? (e.parentNode && (e
					.outerHTML = t.outerHTML), ne.support.html5Clone && t.innerHTML && !ne.trim(e
					.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ti.test(t.type) ? (e
					.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) :
				"option" === i ? e.selected = t.defaultSelected : "input" === i || "textarea" === i ? e
				.defaultValue = t.defaultValue : "script" === i && e.text !== t.text && (e.text = t.text), e
				.removeAttribute(ne.expando))
		}

		function y(t) {
			return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : "undefined" !=
				typeof t.querySelectorAll ? t.querySelectorAll("*") : []
		}

		function x(t) {
			ti.test(t.type) && (t.defaultChecked = t.checked)
		}

		function b(t, e) {
			if (e in t) return e;
			for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = wi.length; r--;)
				if (e = wi[r] + i, e in t) return e;
			return n
		}

		function w(t, e) {
			return t = e || t, "none" === ne.css(t, "display") || !ne.contains(t.ownerDocument, t)
		}

		function T(t, e) {
			for (var i, n, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ne._data(i,
				"olddisplay"), e ? (!r[s] && "none" === i.style.display && (i.style.display = ""),
				"" === i.style.display && w(i) && (r[s] = ne._data(i, "olddisplay", k(i.nodeName)))) : (
				n = oi(i, "display"), !r[s] && "none" !== n && ne._data(i, "olddisplay", n)));
			for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style
				.display || (i.style.display = e ? r[s] || "" : "none"));
			return t
		}

		function S(t, e, i) {
			var n = mi.exec(e);
			return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
		}

		function C(t, e, i, n) {
			for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
				"margin" === i && (s += ne.css(t, i + bi[r], !0)), n ? ("content" === i && (s -= parseFloat(oi(
					t, "padding" + bi[r])) || 0), "margin" !== i && (s -= parseFloat(oi(t, "border" + bi[
					r] + "Width")) || 0)) : (s += parseFloat(oi(t, "padding" + bi[r])) || 0, "padding" !== i &&
					(s += parseFloat(oi(t, "border" + bi[r] + "Width")) || 0));
			return s
		}

		function P(t, e, i) {
			var n = "width" === e ? t.offsetWidth : t.offsetHeight,
				r = !0,
				s = ne.support.boxSizing && "border-box" === ne.css(t, "boxSizing");
			if (0 >= n || null == n) {
				if (n = oi(t, e), (0 > n || null == n) && (n = t.style[e]), gi.test(n)) return n;
				r = s && (ne.support.boxSizingReliable || n === t.style[e]), n = parseFloat(n) || 0
			}
			return n + C(t, e, i || (s ? "border" : "content"), r) + "px"
		}

		function k(t) {
			if (vi[t]) return vi[t];
			var e = ne("<" + t + ">").appendTo(U.body),
				i = e.css("display");
			return e.remove(), ("none" === i || "" === i) && (li = U.body.appendChild(li || ne.extend(U
				.createElement("iframe"), {
					frameBorder: 0,
					width: 0,
					height: 0
				})), hi && li.createElement || (hi = (li.contentWindow || li.contentDocument).document,
				hi.write("<!doctype html><html><body>"), hi.close()), e = hi.body.appendChild(hi
				.createElement(t)), i = oi(e, "display"), U.body.removeChild(li)), vi[t] = i, i
		}

		function E(t, e, i, n) {
			var r;
			if (ne.isArray(e)) ne.each(e, function(e, r) {
				i || Ci.test(t) ? n(t, r) : E(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
			});
			else if (i || "object" !== ne.type(e)) n(t, e);
			else
				for (r in e) E(t + "[" + r + "]", e[r], i, n)
		}

		function A(t) {
			return function(e, i) {
				"string" != typeof e && (i = e, e = "*");
				var n, r, s, a = e.toLowerCase().split(ae),
					o = 0,
					l = a.length;
				if (ne.isFunction(i))
					for (; l > o; o++) n = a[o], s = /^\+/.test(n), s && (n = n.substr(1) || "*"), r = t[
						n] = t[n] || [], r[s ? "unshift" : "push"](i)
			}
		}

		function O(t, e, i, n, r, s) {
			r = r || e.dataTypes[0], s = s || {}, s[r] = !0;
			for (var o, l = t[r], h = 0, u = l ? l.length : 0, c = t === Xi; u > h && (c || !o); h++) o = l[h](
				e, i, n), "string" == typeof o && (!c || s[o] ? o = a : (e.dataTypes.unshift(o), o = O(t, e,
				i, n, o, s)));
			return (c || !o) && !s["*"] && (o = O(t, e, i, n, "*", s)), o
		}

		function D(t, e) {
			var i, n, r = ne.ajaxSettings.flatOptions || {};
			for (i in e) e[i] !== a && ((r[i] ? t : n || (n = {}))[i] = e[i]);
			n && ne.extend(!0, t, n)
		}

		function M(t, e, i) {
			var n, r, s, o, l = t.contents,
				h = t.dataTypes,
				u = t.responseFields;
			for (r in u) r in i && (e[u[r]] = i[r]);
			for (;
				"*" === h[0];) h.shift(), n === a && (n = t.mimeType || e.getResponseHeader("content-type"));
			if (n)
				for (r in l)
					if (l[r] && l[r].test(n)) {
						h.unshift(r);
						break
					} if (h[0] in i) s = h[0];
			else {
				for (r in i) {
					if (!h[0] || t.converters[r + " " + h[0]]) {
						s = r;
						break
					}
					o || (o = r)
				}
				s = s || o
			}
			return s ? (s !== h[0] && h.unshift(s), i[s]) : void 0
		}

		function j(t, e) {
			var i, n, r, s, a = t.dataTypes.slice(),
				o = a[0],
				l = {},
				h = 0;
			if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), a[1])
				for (i in t.converters) l[i.toLowerCase()] = t.converters[i];
			for (; r = a[++h];)
				if ("*" !== r) {
					if ("*" !== o && o !== r) {
						if (i = l[o + " " + r] || l["* " + r], !i)
							for (n in l)
								if (s = n.split(" "), s[1] === r && (i = l[o + " " + s[0]] || l["* " + s[0]])) {
									i === !0 ? i = l[n] : l[n] !== !0 && (r = s[0], a.splice(h--, 0, r));
									break
								} if (i !== !0)
							if (i && t["throws"]) e = i(e);
							else try {
								e = i(e)
							} catch (u) {
								return {
									state: "parsererror",
									error: i ? u : "No conversion from " + o + " to " + r
								}
							}
					}
					o = r
				} return {
				state: "success",
				data: e
			}
		}

		function N() {
			try {
				return new s.XMLHttpRequest
			} catch (t) {}
		}

		function R() {
			try {
				return new s.ActiveXObject("Microsoft.XMLHTTP")
			} catch (t) {}
		}

		function L() {
			return setTimeout(function() {
				Ji = a
			}, 0), Ji = ne.now()
		}

		function F(t, e) {
			ne.each(e, function(e, i) {
				for (var n = (sn[e] || []).concat(sn["*"]), r = 0, s = n.length; s > r; r++)
					if (n[r].call(t, e, i)) return
			})
		}

		function I(t, e, i) {
			var n, r = 0,
				s = rn.length,
				a = ne.Deferred().always(function() {
					delete o.elem
				}),
				o = function() {
					for (var e = Ji || L(), i = Math.max(0, l.startTime + l.duration - e), n = 1 - (i / l
							.duration || 0), r = 0, s = l.tweens.length; s > r; r++) l.tweens[r].run(n);
					return a.notifyWith(t, [l, n, i]), 1 > n && s ? i : (a.resolveWith(t, [l]), !1)
				},
				l = a.promise({
					elem: t,
					props: ne.extend({}, e),
					opts: ne.extend(!0, {
						specialEasing: {}
					}, i),
					originalProperties: e,
					originalOptions: i,
					startTime: Ji || L(),
					duration: i.duration,
					tweens: [],
					createTween: function(e, i) {
						var n = ne.Tween(t, l.opts, e, i, l.opts.specialEasing[e] || l.opts.easing);
						return l.tweens.push(n), n
					},
					stop: function(e) {
						for (var i = 0, n = e ? l.tweens.length : 0; n > i; i++) l.tweens[i].run(1);
						return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
					}
				}),
				h = l.props;
			for (B(h, l.opts.specialEasing); s > r; r++)
				if (n = rn[r].call(l, t, h, l.opts)) return n;
			return F(l, h), ne.isFunction(l.opts.start) && l.opts.start.call(t, l), ne.fx.timer(ne.extend(o, {
				anim: l,
				queue: l.opts.queue,
				elem: t
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l
				.opts.always)
		}

		function B(t, e) {
			var i, n, r, s, a;
			for (i in t)
				if (n = ne.camelCase(i), r = e[n], s = t[i], ne.isArray(s) && (r = s[1], s = t[i] = s[0]), i !==
					n && (t[n] = s, delete t[i]), a = ne.cssHooks[n], a && "expand" in a) {
					s = a.expand(s), delete t[n];
					for (i in s) i in t || (t[i] = s[i], e[i] = r)
				} else e[n] = r
		}

		function z(t, e, i) {
			var n, r, s, a, o, l, h, u, c = this,
				f = t.style,
				p = {},
				d = [],
				m = t.nodeType && w(t);
			i.queue || (h = ne._queueHooks(t, "fx"), null == h.unqueued && (h.unqueued = 0, u = h.empty.fire, h
				.empty.fire = function() {
					h.unqueued || u()
				}), h.unqueued++, c.always(function() {
				c.always(function() {
					h.unqueued--, ne.queue(t, "fx").length || h.empty.fire()
				})
			})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f
				.overflowX, f.overflowY
			], "inline" === ne.css(t, "display") && "none" === ne.css(t, "float") && (ne.support
				.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? f.zoom = 1 : f.display =
				"inline-block")), i.overflow && (f.overflow = "hidden", ne.support.shrinkWrapBlocks || c
				.done(function() {
					f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
				}));
			for (n in e)
				if (s = e[n], tn.exec(s)) {
					if (delete e[n], s === (m ? "hide" : "show")) continue;
					d.push(n)
				} if (a = d.length)
				for (o = ne._data(t, "fxshow") || ne._data(t, "fxshow", {}), m ? ne(t).show() : c.done(
					function() {
						ne(t).hide()
					}), c.done(function() {
						var e;
						ne.removeData(t, "fxshow", !0);
						for (e in p) ne.style(t, e, p[e])
					}), n = 0; a > n; n++) r = d[n], l = c.createTween(r, m ? o[r] : 0), p[r] = o[r] || ne
					.style(t, r), r in o || (o[r] = l.start, m && (l.end = l.start, l.start = "width" === r ||
						"height" === r ? 1 : 0))
		}

		function X(t, e, i, n, r) {
			return new X.prototype.init(t, e, i, n, r)
		}

		function H(t, e) {
			var i, n = {
					height: t
				},
				r = 0;
			for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = bi[r], n["margin" + i] = n["padding" + i] = t;
			return e && (n.opacity = n.width = t), n
		}

		function Y(t) {
			return ne.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
		}
		var W, q, U = s.document,
			$ = s.location,
			G = s.navigator,
			V = s.jQuery,
			Q = s.$,
			Z = Array.prototype.push,
			J = Array.prototype.slice,
			K = Array.prototype.indexOf,
			te = Object.prototype.toString,
			ee = Object.prototype.hasOwnProperty,
			ie = String.prototype.trim,
			ne = function(t, e) {
				return new ne.fn.init(t, e, W)
			},
			re = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
			se = /\S/,
			ae = /\s+/,
			oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			le = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
			he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ue = /^[\],:{}\s]*$/,
			ce = /(?:^|:|,)(?:\s*\[)+/g,
			fe = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			pe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
			de = /^-ms-/,
			me = /-([\da-z])/gi,
			ge = function(t, e) {
				return (e + "").toUpperCase()
			},
			_e = function() {
				U.addEventListener ? (U.removeEventListener("DOMContentLoaded", _e, !1), ne.ready()) :
					"complete" === U.readyState && (U.detachEvent("onreadystatechange", _e), ne.ready())
			},
			ve = {};
		ne.fn = ne.prototype = {
			constructor: ne,
			init: function(t, e, i) {
				var n, r, s;
				if (!t) return this;
				if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
				if ("string" == typeof t) {
					if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [
							null, t, null
						] : le.exec(t), n && (n[1] || !e)) {
						if (n[1]) return e = e instanceof ne ? e[0] : e, s = e && e.nodeType ? e
							.ownerDocument || e : U, t = ne.parseHTML(n[1], s, !0), he.test(n[1]) &&
							ne.isPlainObject(e) && this.attr.call(t, e, !0), ne.merge(this, t);
						if (r = U.getElementById(n[2]), r && r.parentNode) {
							if (r.id !== n[2]) return i.find(t);
							this.length = 1, this[0] = r
						}
						return this.context = U, this.selector = t, this
					}
					return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t)
				}
				return ne.isFunction(t) ? i.ready(t) : (t.selector !== a && (this.selector = t.selector,
					this.context = t.context), ne.makeArray(t, this))
			},
			selector: "",
			jquery: "1.8.2",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return J.call(this)
			},
			get: function(t) {
				return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
			},
			pushStack: function(t, e, i) {
				var n = ne.merge(this.constructor(), t);
				return n.prevObject = this, n.context = this.context, "find" === e ? n.selector = this
					.selector + (this.selector ? " " : "") + i : e && (n.selector = this.selector +
						"." + e + "(" + i + ")"), n
			},
			each: function(t, e) {
				return ne.each(this, t, e)
			},
			ready: function(t) {
				return ne.ready.promise().done(t), this
			},
			eq: function(t) {
				return t = +t, -1 === t ? this.slice(t) : this.slice(t, t + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			slice: function() {
				return this.pushStack(J.apply(this, arguments), "slice", J.call(arguments).join(","))
			},
			map: function(t) {
				return this.pushStack(ne.map(this, function(e, i) {
					return t.call(e, i, e)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: Z,
			sort: [].sort,
			splice: [].splice
		}, ne.fn.init.prototype = ne.fn, ne.extend = ne.fn.extend = function() {
			var t, e, i, n, r, s, o = arguments[0] || {},
				l = 1,
				h = arguments.length,
				u = !1;
			for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, l = 2), "object" != typeof o && !
				ne.isFunction(o) && (o = {}), h === l && (o = this, --l); h > l; l++)
				if (null != (t = arguments[l]))
					for (e in t) i = o[e], n = t[e], o !== n && (u && n && (ne.isPlainObject(n) || (r = ne
						.isArray(n))) ? (r ? (r = !1, s = i && ne.isArray(i) ? i : []) : s = i && ne
						.isPlainObject(i) ? i : {}, o[e] = ne.extend(u, s, n)) : n !== a && (o[e] =
						n));
			return o
		}, ne.extend({
			noConflict: function(t) {
				return s.$ === ne && (s.$ = Q), t && s.jQuery === ne && (s.jQuery = V), ne
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(t) {
				t ? ne.readyWait++ : ne.ready(!0)
			},
			ready: function(t) {
				if (t === !0 ? !--ne.readyWait : !ne.isReady) {
					if (!U.body) return setTimeout(ne.ready, 1);
					ne.isReady = !0, t !== !0 && --ne.readyWait > 0 || (q.resolveWith(U, [ne]), ne
						.fn.trigger && ne(U).trigger("ready").off("ready"))
				}
			},
			isFunction: function(t) {
				return "function" === ne.type(t)
			},
			isArray: Array.isArray || function(t) {
				return "array" === ne.type(t)
			},
			isWindow: function(t) {
				return null != t && t == t.window
			},
			isNumeric: function(t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			},
			type: function(t) {
				return null == t ? String(t) : ve[te.call(t)] || "object"
			},
			isPlainObject: function(t) {
				if (!t || "object" !== ne.type(t) || t.nodeType || ne.isWindow(t)) return !1;
				try {
					if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor
							.prototype, "isPrototypeOf")) return !1
				} catch (e) {
					return !1
				}
				var i;
				for (i in t);
				return i === a || ee.call(t, i)
			},
			isEmptyObject: function(t) {
				var e;
				for (e in t) return !1;
				return !0
			},
			error: function(t) {
				throw new Error(t)
			},
			parseHTML: function(t, e, i) {
				var n;
				return t && "string" == typeof t ? ("boolean" == typeof e && (i = e, e = 0), e =
					e || U, (n = he.exec(t)) ? [e.createElement(n[1])] : (n = ne.buildFragment([
						t
					], e, i ? null : []), ne.merge([], (n.cacheable ? ne.clone(n.fragment) :
						n.fragment).childNodes))) : null
			},
			parseJSON: function(t) {
				return t && "string" == typeof t ? (t = ne.trim(t), s.JSON && s.JSON.parse ? s.JSON
					.parse(t) : ue.test(t.replace(fe, "@").replace(pe, "]").replace(ce, "")) ?
					new Function("return " + t)() : void ne.error("Invalid JSON: " + t)) : null
			},
			parseXML: function(t) {
				var e, i;
				if (!t || "string" != typeof t) return null;
				try {
					s.DOMParser ? (i = new DOMParser, e = i.parseFromString(t, "text/xml")) : (e =
						new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
				} catch (n) {
					e = a
				}
				return (!e || !e.documentElement || e.getElementsByTagName("parsererror").length) &&
					ne.error("Invalid XML: " + t), e
			},
			noop: function() {},
			globalEval: function(t) {
				t && se.test(t) && (s.execScript || function(t) {
					s.eval.call(s, t)
				})(t)
			},
			camelCase: function(t) {
				return t.replace(de, "ms-").replace(me, ge)
			},
			nodeName: function(t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function(t, e, i) {
				var n, r = 0,
					s = t.length,
					o = s === a || ne.isFunction(t);
				if (i)
					if (o) {
						for (n in t)
							if (e.apply(t[n], i) === !1) break
					} else
						for (; s > r && e.apply(t[r++], i) !== !1;);
				else if (o) {
					for (n in t)
						if (e.call(t[n], n, t[n]) === !1) break
				} else
					for (; s > r && e.call(t[r], r, t[r++]) !== !1;);
				return t
			},
			trim: ie && !ie.call(" ") ? function(t) {
				return null == t ? "" : ie.call(t)
			} : function(t) {
				return null == t ? "" : (t + "").replace(oe, "")
			},
			makeArray: function(t, e) {
				var i, n = e || [];
				return null != t && (i = ne.type(t), null == t.length || "string" === i ||
					"function" === i || "regexp" === i || ne.isWindow(t) ? Z.call(n, t) : ne
					.merge(n, t)), n
			},
			inArray: function(t, e, i) {
				var n;
				if (e) {
					if (K) return K.call(e, t, i);
					for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
						if (i in e && e[i] === t) return i
				}
				return -1
			},
			merge: function(t, e) {
				var i = e.length,
					n = t.length,
					r = 0;
				if ("number" == typeof i)
					for (; i > r; r++) t[n++] = e[r];
				else
					for (; e[r] !== a;) t[n++] = e[r++];
				return t.length = n, t
			},
			grep: function(t, e, i) {
				var n, r = [],
					s = 0,
					a = t.length;
				for (i = !!i; a > s; s++) n = !!e(t[s], s), i !== n && r.push(t[s]);
				return r
			},
			map: function(t, e, i) {
				var n, r, s = [],
					o = 0,
					l = t.length,
					h = t instanceof ne || l !== a && "number" == typeof l && (l > 0 && t[0] && t[
						l - 1] || 0 === l || ne.isArray(t));
				if (h)
					for (; l > o; o++) n = e(t[o], o, i), null != n && (s[s.length] = n);
				else
					for (r in t) n = e(t[r], r, i), null != n && (s[s.length] = n);
				return s.concat.apply([], s)
			},
			guid: 1,
			proxy: function(t, e) {
				var i, n, r;
				return "string" == typeof e && (i = t[e], e = t, t = i), ne.isFunction(t) ? (n = J
					.call(arguments, 2), r = function() {
						return t.apply(e, n.concat(J.call(arguments)))
					}, r.guid = t.guid = t.guid || ne.guid++, r) : a
			},
			access: function(t, e, i, n, r, s, o) {
				var l, h = null == i,
					u = 0,
					c = t.length;
				if (i && "object" == typeof i) {
					for (u in i) ne.access(t, e, u, i[u], 1, s, n);
					r = 1
				} else if (n !== a) {
					if (l = o === a && ne.isFunction(n), h && (l ? (l = e, e = function(t, e, i) {
							return l.call(ne(t), i)
						}) : (e.call(t, n), e = null)), e)
						for (; c > u; u++) e(t[u], i, l ? n.call(t[u], u, e(t[u], i)) : n, o);
					r = 1
				}
				return r ? t : h ? e.call(t) : c ? e(t[0], i) : s
			},
			now: function() {
				return (new Date).getTime()
			}
		}), ne.ready.promise = function(t) {
			if (!q)
				if (q = ne.Deferred(), "complete" === U.readyState) setTimeout(ne.ready, 1);
				else if (U.addEventListener) U.addEventListener("DOMContentLoaded", _e, !1), s
				.addEventListener("load", ne.ready, !1);
			else {
				U.attachEvent("onreadystatechange", _e), s.attachEvent("onload", ne.ready);
				var e = !1;
				try {
					e = null == s.frameElement && U.documentElement
				} catch (i) {}
				e && e.doScroll && function n() {
					if (!ne.isReady) {
						try {
							e.doScroll("left")
						} catch (t) {
							return setTimeout(n, 50)
						}
						ne.ready()
					}
				}()
			}
			return q.promise(t)
		}, ne.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
			ve["[object " + e + "]"] = e.toLowerCase()
		}), W = ne(U);
		var ye = {};
		ne.Callbacks = function(t) {
			t = "string" == typeof t ? ye[t] || o(t) : ne.extend({}, t);
			var e, i, n, r, s, l, h = [],
				u = !t.once && [],
				c = function(a) {
					for (e = t.memory && a, i = !0, l = r || 0, r = 0, s = h.length, n = !0; h && s >
						l; l++)
						if (h[l].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
							e = !1;
							break
						} n = !1, h && (u ? u.length && c(u.shift()) : e ? h = [] : f.disable())
				},
				f = {
					add: function() {
						if (h) {
							var i = h.length;
							! function a(e) {
								ne.each(e, function(e, i) {
									var n = ne.type(i);
									"function" !== n || t.unique && f.has(i) ? i && i.length &&
										"string" !== n && a(i) : h.push(i)
								})
							}(arguments), n ? s = h.length : e && (r = i, c(e))
						}
						return this
					},
					remove: function() {
						return h && ne.each(arguments, function(t, e) {
							for (var i;
								(i = ne.inArray(e, h, i)) > -1;) h.splice(i, 1), n && (s >= i &&
								s--, l >= i && l--)
						}), this
					},
					has: function(t) {
						return ne.inArray(t, h) > -1
					},
					empty: function() {
						return h = [], this
					},
					disable: function() {
						return h = u = e = a, this
					},
					disabled: function() {
						return !h
					},
					lock: function() {
						return u = a, e || f.disable(), this
					},
					locked: function() {
						return !u
					},
					fireWith: function(t, e) {
						return e = e || [], e = [t, e.slice ? e.slice() : e], h && (!i || u) && (n ? u
							.push(e) : c(e)), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!i
					}
				};
			return f
		}, ne.extend({
			Deferred: function(t) {
				var e = [
						["resolve", "done", ne.Callbacks("once memory"), "resolved"],
						["reject", "fail", ne.Callbacks("once memory"), "rejected"],
						["notify", "progress", ne.Callbacks("memory")]
					],
					i = "pending",
					n = {
						state: function() {
							return i
						},
						always: function() {
							return r.done(arguments).fail(arguments), this
						},
						then: function() {
							var t = arguments;
							return ne.Deferred(function(i) {
								ne.each(e, function(e, n) {
									var s = n[0],
										a = t[e];
									r[n[1]](ne.isFunction(a) ? function() {
										var t = a.apply(this,
										arguments);
										t && ne.isFunction(t.promise) ?
											t.promise().done(i.resolve)
											.fail(i.reject).progress(i
												.notify) : i[s + "With"]
											(this === r ? i : this, [t])
									} : i[s])
								}), t = null
							}).promise()
						},
						promise: function(t) {
							return null != t ? ne.extend(t, n) : n
						}
					},
					r = {};
				return n.pipe = n.then, ne.each(e, function(t, s) {
					var a = s[2],
						o = s[3];
					n[s[1]] = a.add, o && a.add(function() {
						i = o
					}, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = a.fire, r[s[0] +
						"With"] = a.fireWith
				}), n.promise(r), t && t.call(r, r), r
			},
			when: function(t) {
				var e, i, n, r = 0,
					s = J.call(arguments),
					a = s.length,
					o = 1 !== a || t && ne.isFunction(t.promise) ? a : 0,
					l = 1 === o ? t : ne.Deferred(),
					h = function(t, i, n) {
						return function(r) {
							i[t] = this, n[t] = arguments.length > 1 ? J.call(arguments) : r,
								n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
						}
					};
				if (a > 1)
					for (e = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] &&
						ne.isFunction(s[r].promise) ? s[r].promise().done(h(r, n, s)).fail(l.reject)
						.progress(h(r, i, e)) : --o;
				return o || l.resolveWith(n, s), l.promise()
			}
		}), ne.support = function() {
			var t, e, i, n, r, a, o, l, h, u, c, f = U.createElement("div");
			if (f.setAttribute("className", "t"), f.innerHTML =
				"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = f
				.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], i.style.cssText =
				"top:1px;float:left;opacity:.5", !e || !e.length) return {};
			n = U.createElement("select"), r = n.appendChild(U.createElement("option")), a = f
				.getElementsByTagName("input")[0], t = {
					leadingWhitespace: 3 === f.firstChild.nodeType,
					tbody: !f.getElementsByTagName("tbody").length,
					htmlSerialize: !!f.getElementsByTagName("link").length,
					style: /top/.test(i.getAttribute("style")),
					hrefNormalized: "/a" === i.getAttribute("href"),
					opacity: /^0.5/.test(i.style.opacity),
					cssFloat: !!i.style.cssFloat,
					checkOn: "on" === a.value,
					optSelected: r.selected,
					getSetAttribute: "t" !== f.className,
					enctype: !!U.createElement("form").enctype,
					html5Clone: "<:nav></:nav>" !== U.createElement("nav").cloneNode(!0).outerHTML,
					boxModel: "CSS1Compat" === U.compatMode,
					submitBubbles: !0,
					changeBubbles: !0,
					focusinBubbles: !1,
					deleteExpando: !0,
					noCloneEvent: !0,
					inlineBlockNeedsLayout: !1,
					shrinkWrapBlocks: !1,
					reliableMarginRight: !0,
					boxSizingReliable: !0,
					pixelPosition: !1
				}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, n.disabled = !0, t
				.optDisabled = !r.disabled;
			try {
				delete f.test
			} catch (p) {
				t.deleteExpando = !1
			}
			if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", c =
					function() {
						t.noCloneEvent = !1
					}), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", c)), a = U
				.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue =
				"t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), f
				.appendChild(a), o = U.createDocumentFragment(), o.appendChild(f.lastChild), t.checkClone =
				o.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, o.removeChild(
					a), o.appendChild(f), f.attachEvent)
				for (h in {
						submit: !0,
						change: !0,
						focusin: !0
					}) l = "on" + h, u = l in f, u || (f.setAttribute(l, "return;"), u = "function" ==
					typeof f[l]), t[h + "Bubbles"] = u;
			return ne(function() {
				var e, i, n, r, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
					o = U.getElementsByTagName("body")[0];
				o && (e = U.createElement("div"), e.style.cssText =
					"visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
					o.insertBefore(e, o.firstChild), i = U.createElement("div"), e.appendChild(
						i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = i
					.getElementsByTagName("td"), n[0].style.cssText =
					"padding:0;margin:0;border:0;display:none", u = 0 === n[0].offsetHeight, n[
						0].style.display = "", n[1].style.display = "none", t
					.reliableHiddenOffsets = u && 0 === n[0].offsetHeight, i.innerHTML = "", i
					.style.cssText =
					"box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
					t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset =
					1 !== o.offsetTop, s.getComputedStyle && (t.pixelPosition = "1%" !== (s
							.getComputedStyle(i, null) || {}).top, t.boxSizingReliable =
						"4px" === (s.getComputedStyle(i, null) || {
							width: "4px"
						}).width, r = U.createElement("div"), r.style.cssText = i.style
						.cssText = a, r.style.marginRight = r.style.width = "0", i.style.width =
						"1px", i.appendChild(r), t.reliableMarginRight = !parseFloat((s
							.getComputedStyle(r, null) || {}).marginRight)), "undefined" !=
					typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a +
						"width:1px;padding:1px;display:inline;zoom:1", t
						.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display =
						"block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i
						.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i
						.offsetWidth, e.style.zoom = 1), o.removeChild(e), e = i = n = r = null)
			}), o.removeChild(f), e = i = n = r = a = o = f = null, t
		}();
		var xe = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			be = /([A-Z])/g;
		ne.extend({
			cache: {},
			deletedIds: [],
			uuid: 0,
			expando: "jQuery" + (ne.fn.jquery + Math.random()).replace(/\D/g, ""),
			noData: {
				embed: !0,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet: !0
			},
			hasData: function(t) {
				return t = t.nodeType ? ne.cache[t[ne.expando]] : t[ne.expando], !!t && !h(t)
			},
			data: function(t, e, i, n) {
				if (ne.acceptData(t)) {
					var r, s, o = ne.expando,
						l = "string" == typeof e,
						h = t.nodeType,
						u = h ? ne.cache : t,
						c = h ? t[o] : t[o] && o;
					if (c && u[c] && (n || u[c].data) || !l || i !== a) return c || (h ? t[o] = c =
							ne.deletedIds.pop() || ne.guid++ : c = o), u[c] || (u[c] = {}, h ||
							(u[c].toJSON = ne.noop)), ("object" == typeof e || "function" ==
							typeof e) && (n ? u[c] = ne.extend(u[c], e) : u[c].data = ne.extend(
							u[c].data, e)), r = u[c], n || (r.data || (r.data = {}), r = r
						.data), i !== a && (r[ne.camelCase(e)] = i), l ? (s = r[e], null == s &&
							(s = r[ne.camelCase(e)])) : s = r, s
				}
			},
			removeData: function(t, e, i) {
				if (ne.acceptData(t)) {
					var n, r, s, a = t.nodeType,
						o = a ? ne.cache : t,
						l = a ? t[ne.expando] : ne.expando;
					if (o[l]) {
						if (e && (n = i ? o[l] : o[l].data)) {
							ne.isArray(e) || (e in n ? e = [e] : (e = ne.camelCase(e), e = e in n ?
								[e] : e.split(" ")));
							for (r = 0, s = e.length; s > r; r++) delete n[e[r]];
							if (!(i ? h : ne.isEmptyObject)(n)) return
						}(i || (delete o[l].data, h(o[l]))) && (a ? ne.cleanData([t], !0) : ne
							.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
					}
				}
			},
			_data: function(t, e, i) {
				return ne.data(t, e, i, !0)
			},
			acceptData: function(t) {
				var e = t.nodeName && ne.noData[t.nodeName.toLowerCase()];
				return !e || e !== !0 && t.getAttribute("classid") === e
			}
		}), ne.fn.extend({
			data: function(t, e) {
				var i, n, r, s, o, h = this[0],
					u = 0,
					c = null;
				if (t === a) {
					if (this.length && (c = ne.data(h), 1 === h.nodeType && !ne._data(h,
							"parsedAttrs"))) {
						for (r = h.attributes, o = r.length; o > u; u++) s = r[u].name, s.indexOf(
							"data-") || (s = ne.camelCase(s.substring(5)), l(h, s, c[s]));
						ne._data(h, "parsedAttrs", !0)
					}
					return c
				}
				return "object" == typeof t ? this.each(function() {
					ne.data(this, t)
				}) : (i = t.split(".", 2), i[1] = i[1] ? "." + i[1] : "", n = i[1] + "!", ne
					.access(this, function(e) {
						return e === a ? (c = this.triggerHandler("getData" + n, [i[0]]),
							c === a && h && (c = ne.data(h, t), c = l(h, t, c)), c ===
							a && i[1] ? this.data(i[0]) : c) : (i[1] = e, void this
							.each(function() {
								var r = ne(this);
								r.triggerHandler("setData" + n, i), ne.data(this, t,
									e), r.triggerHandler("changeData" + n, i)
							}))
					}, null, e, arguments.length > 1, null, !1))
			},
			removeData: function(t) {
				return this.each(function() {
					ne.removeData(this, t)
				})
			}
		}), ne.extend({
			queue: function(t, e, i) {
				var n;
				return t ? (e = (e || "fx") + "queue", n = ne._data(t, e), i && (!n || ne.isArray(
					i) ? n = ne._data(t, e, ne.makeArray(i)) : n.push(i)), n || []) : void 0
			},
			dequeue: function(t, e) {
				e = e || "fx";
				var i = ne.queue(t, e),
					n = i.length,
					r = i.shift(),
					s = ne._queueHooks(t, e),
					a = function() {
						ne.dequeue(t, e)
					};
				"inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift(
					"inprogress"), delete s.stop, r.call(t, a, s)), !n && s && s.empty.fire()
			},
			_queueHooks: function(t, e) {
				var i = e + "queueHooks";
				return ne._data(t, i) || ne._data(t, i, {
					empty: ne.Callbacks("once memory").add(function() {
						ne.removeData(t, e + "queue", !0), ne.removeData(t, i, !0)
					})
				})
			}
		}), ne.fn.extend({
			queue: function(t, e) {
				var i = 2;
				return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ne
					.queue(this[0], t) : e === a ? this : this.each(function() {
						var i = ne.queue(this, t, e);
						ne._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ne
							.dequeue(this, t)
					})
			},
			dequeue: function(t) {
				return this.each(function() {
					ne.dequeue(this, t)
				})
			},
			delay: function(t, e) {
				return t = ne.fx ? ne.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(
					e, i) {
					var n = setTimeout(e, t);
					i.stop = function() {
						clearTimeout(n)
					}
				})
			},
			clearQueue: function(t) {
				return this.queue(t || "fx", [])
			},
			promise: function(t, e) {
				var i, n = 1,
					r = ne.Deferred(),
					s = this,
					o = this.length,
					l = function() {
						--n || r.resolveWith(s, [s])
					};
				for ("string" != typeof t && (e = t, t = a), t = t || "fx"; o--;) i = ne._data(s[o],
					t + "queueHooks"), i && i.empty && (n++, i.empty.add(l));
				return l(), r.promise(e)
			}
		});
		var we, Te, Se, Ce = /[\t\r\n]/g,
			Pe = /\r/g,
			ke = /^(?:button|input)$/i,
			Ee = /^(?:button|input|object|select|textarea)$/i,
			Ae = /^a(?:rea|)$/i,
			Oe =
			/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			De = ne.support.getSetAttribute;
		ne.fn.extend({
			attr: function(t, e) {
				return ne.access(this, ne.attr, t, e, arguments.length > 1)
			},
			removeAttr: function(t) {
				return this.each(function() {
					ne.removeAttr(this, t)
				})
			},
			prop: function(t, e) {
				return ne.access(this, ne.prop, t, e, arguments.length > 1)
			},
			removeProp: function(t) {
				return t = ne.propFix[t] || t, this.each(function() {
					try {
						this[t] = a, delete this[t]
					} catch (e) {}
				})
			},
			addClass: function(t) {
				var e, i, n, r, s, a, o;
				if (ne.isFunction(t)) return this.each(function(e) {
					ne(this).addClass(t.call(this, e, this.className))
				});
				if (t && "string" == typeof t)
					for (e = t.split(ae), i = 0, n = this.length; n > i; i++)
						if (r = this[i], 1 === r.nodeType)
							if (r.className || 1 !== e.length) {
								for (s = " " + r.className + " ", a = 0, o = e.length; o > a; a++) s
									.indexOf(" " + e[a] + " ") < 0 && (s += e[a] + " ");
								r.className = ne.trim(s)
							} else r.className = t;
				return this
			},
			removeClass: function(t) {
				var e, i, n, r, s, o, l;
				if (ne.isFunction(t)) return this.each(function(e) {
					ne(this).removeClass(t.call(this, e, this.className))
				});
				if (t && "string" == typeof t || t === a)
					for (e = (t || "").split(ae), o = 0, l = this.length; l > o; o++)
						if (n = this[o], 1 === n.nodeType && n.className) {
							for (i = (" " + n.className + " ").replace(Ce, " "), r = 0, s = e
								.length; s > r; r++)
								for (; i.indexOf(" " + e[r] + " ") >= 0;) i = i.replace(" " + e[r] +
									" ", " ");
							n.className = t ? ne.trim(i) : ""
						} return this
			},
			toggleClass: function(t, e) {
				var i = typeof t,
					n = "boolean" == typeof e;
				return this.each(ne.isFunction(t) ? function(i) {
					ne(this).toggleClass(t.call(this, i, this.className, e), e)
				} : function() {
					if ("string" === i)
						for (var r, s = 0, a = ne(this), o = e, l = t.split(ae); r = l[
							s++];) o = n ? o : !a.hasClass(r), a[o ? "addClass" :
							"removeClass"](r);
					else("undefined" === i || "boolean" === i) && (this.className && ne
						._data(this, "__className__", this.className), this.className =
						this.className || t === !1 ? "" : ne._data(this,
							"__className__") || "")
				})
			},
			hasClass: function(t) {
				for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
					if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ce, " ")
						.indexOf(e) >= 0) return !0;
				return !1
			},
			val: function(t) {
				var e, i, n, r = this[0]; {
					if (arguments.length) return n = ne.isFunction(t), this.each(function(i) {
						var r, s = ne(this);
						1 === this.nodeType && (r = n ? t.call(this, i, s.val()) : t,
							null == r ? r = "" : "number" == typeof r ? r += "" : ne
							.isArray(r) && (r = ne.map(r, function(t) {
								return null == t ? "" : t + ""
							})), e = ne.valHooks[this.type] || ne.valHooks[this
								.nodeName.toLowerCase()], e && "set" in e && e.set(
								this, r, "value") !== a || (this.value = r))
					});
					if (r) return e = ne.valHooks[r.type] || ne.valHooks[r.nodeName.toLowerCase()],
						e && "get" in e && (i = e.get(r, "value")) !== a ? i : (i = r.value,
							"string" == typeof i ? i.replace(Pe, "") : null == i ? "" : i)
				}
			}
		}), ne.extend({
			valHooks: {
				option: {
					get: function(t) {
						var e = t.attributes.value;
						return !e || e.specified ? t.value : t.text
					}
				},
				select: {
					get: function(t) {
						var e, i, n, r, s = t.selectedIndex,
							a = [],
							o = t.options,
							l = "select-one" === t.type;
						if (0 > s) return null;
						for (i = l ? s : 0, n = l ? s + 1 : o.length; n > i; i++)
							if (r = o[i], !(!r.selected || (ne.support.optDisabled ? r.disabled :
										null !== r.getAttribute("disabled")) || r.parentNode
									.disabled && ne.nodeName(r.parentNode, "optgroup"))) {
								if (e = ne(r).val(), l) return e;
								a.push(e)
							} return l && !a.length && o.length ? ne(o[s]).val() : a
					},
					set: function(t, e) {
						var i = ne.makeArray(e);
						return ne(t).find("option").each(function() {
							this.selected = ne.inArray(ne(this).val(), i) >= 0
						}), i.length || (t.selectedIndex = -1), i
					}
				}
			},
			attrFn: {},
			attr: function(t, e, i, n) {
				var r, s, o, l = t.nodeType;
				if (t && 3 !== l && 8 !== l && 2 !== l) return n && ne.isFunction(ne.fn[e]) ? ne(t)[
					e](i) : "undefined" == typeof t.getAttribute ? ne.prop(t, e, i) : (o =
					1 !== l || !ne.isXMLDoc(t), o && (e = e.toLowerCase(), s = ne.attrHooks[
						e] || (Oe.test(e) ? Te : we)), i !== a ? null === i ? void ne
					.removeAttr(t, e) : s && "set" in s && o && (r = s.set(t, i, e)) !== a ?
					r : (t.setAttribute(e, i + ""), i) : s && "get" in s && o && null !== (
						r = s.get(t, e)) ? r : (r = t.getAttribute(e), null === r ? a : r))
			},
			removeAttr: function(t, e) {
				var i, n, r, s, a = 0;
				if (e && 1 === t.nodeType)
					for (n = e.split(ae); a < n.length; a++) r = n[a], r && (i = ne.propFix[r] || r,
						s = Oe.test(r), s || ne.attr(t, r, ""), t.removeAttribute(De ? r : i),
						s && i in t && (t[i] = !1))
			},
			attrHooks: {
				type: {
					set: function(t, e) {
						if (ke.test(t.nodeName) && t.parentNode) ne.error(
							"type property can't be changed");
						else if (!ne.support.radioValue && "radio" === e && ne.nodeName(t,
							"input")) {
							var i = t.value;
							return t.setAttribute("type", e), i && (t.value = i), e
						}
					}
				},
				value: {
					get: function(t, e) {
						return we && ne.nodeName(t, "button") ? we.get(t, e) : e in t ? t.value :
							null
					},
					set: function(t, e, i) {
						return we && ne.nodeName(t, "button") ? we.set(t, e, i) : void(t.value = e)
					}
				}
			},
			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			prop: function(t, e, i) {
				var n, r, s, o = t.nodeType;
				if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !ne.isXMLDoc(t), s &&
					(e = ne.propFix[e] || e, r = ne.propHooks[e]), i !== a ? r && "set" in r &&
					(n = r.set(t, i, e)) !== a ? n : t[e] = i : r && "get" in r && null !== (n =
						r.get(t, e)) ? n : t[e]
			},
			propHooks: {
				tabIndex: {
					get: function(t) {
						var e = t.getAttributeNode("tabindex");
						return e && e.specified ? parseInt(e.value, 10) : Ee.test(t.nodeName) || Ae
							.test(t.nodeName) && t.href ? 0 : a
					}
				}
			}
		}), Te = {
			get: function(t, e) {
				var i, n = ne.prop(t, e);
				return n === !0 || "boolean" != typeof n && (i = t.getAttributeNode(e)) && i
					.nodeValue !== !1 ? e.toLowerCase() : a
			},
			set: function(t, e, i) {
				var n;
				return e === !1 ? ne.removeAttr(t, i) : (n = ne.propFix[i] || i, n in t && (t[n] = !0),
					t.setAttribute(i, i.toLowerCase())), i
			}
		}, De || (Se = {
			name: !0,
			id: !0,
			coords: !0
		}, we = ne.valHooks.button = {
			get: function(t, e) {
				var i;
				return i = t.getAttributeNode(e), i && (Se[e] ? "" !== i.value : i.specified) ? i
					.value : a
			},
			set: function(t, e, i) {
				var n = t.getAttributeNode(i);
				return n || (n = U.createAttribute(i), t.setAttributeNode(n)), n.value = e + ""
			}
		}, ne.each(["width", "height"], function(t, e) {
			ne.attrHooks[e] = ne.extend(ne.attrHooks[e], {
				set: function(t, i) {
					return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
				}
			})
		}), ne.attrHooks.contenteditable = {
			get: we.get,
			set: function(t, e, i) {
				"" === e && (e = "false"), we.set(t, e, i)
			}
		}), ne.support.hrefNormalized || ne.each(["href", "src", "width", "height"], function(t, e) {
			ne.attrHooks[e] = ne.extend(ne.attrHooks[e], {
				get: function(t) {
					var i = t.getAttribute(e, 2);
					return null === i ? a : i
				}
			})
		}), ne.support.style || (ne.attrHooks.style = {
			get: function(t) {
				return t.style.cssText.toLowerCase() || a
			},
			set: function(t, e) {
				return t.style.cssText = e + ""
			}
		}), ne.support.optSelected || (ne.propHooks.selected = ne.extend(ne.propHooks.selected, {
			get: function(t) {
				var e = t.parentNode;
				return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
			}
		})), ne.support.enctype || (ne.propFix.enctype = "encoding"), ne.support.checkOn || ne.each([
			"radio", "checkbox"
		], function() {
			ne.valHooks[this] = {
				get: function(t) {
					return null === t.getAttribute("value") ? "on" : t.value
				}
			}
		}), ne.each(["radio", "checkbox"], function() {
			ne.valHooks[this] = ne.extend(ne.valHooks[this], {
				set: function(t, e) {
					return ne.isArray(e) ? t.checked = ne.inArray(ne(t).val(), e) >= 0 :
						void 0
				}
			})
		});
		var Me = /^(?:textarea|input|select)$/i,
			je = /^([^\.]*|)(?:\.(.+)|)$/,
			Ne = /(?:^|\s)hover(\.\S+|)\b/,
			Re = /^key/,
			Le = /^(?:mouse|contextmenu)|click/,
			Fe = /^(?:focusinfocus|focusoutblur)$/,
			Ie = function(t) {
				return ne.event.special.hover ? t : t.replace(Ne, "mouseenter$1 mouseleave$1")
			};
		ne.event = {
				add: function(t, e, i, n, r) {
					var s, o, l, h, u, c, f, p, d, m, g;
					if (3 !== t.nodeType && 8 !== t.nodeType && e && i && (s = ne._data(t))) {
						for (i.handler && (d = i, i = d.handler, r = d.selector), i.guid || (i.guid = ne
								.guid++), l = s.events, l || (s.events = l = {}), o = s.handle, o || (s
								.handle = o = function(t) {
									return "undefined" == typeof ne || t && ne.event.triggered === t.type ?
										a : ne.event.dispatch.apply(o.elem, arguments)
								}, o.elem = t), e = ne.trim(Ie(e)).split(" "), h = 0; h < e.length; h++) u =
							je.exec(e[h]) || [], c = u[1], f = (u[2] || "").split(".").sort(), g = ne.event
							.special[c] || {}, c = (r ? g.delegateType : g.bindType) || c, g = ne.event
							.special[c] || {}, p = ne.extend({
								type: c,
								origType: u[1],
								data: n,
								handler: i,
								guid: i.guid,
								selector: r,
								needsContext: r && ne.expr.match.needsContext.test(r),
								namespace: f.join(".")
							}, d), m = l[c], m || (m = l[c] = [], m.delegateCount = 0, g.setup && g.setup
								.call(t, n, f, o) !== !1 || (t.addEventListener ? t.addEventListener(c, o, !
									1) : t.attachEvent && t.attachEvent("on" + c, o))), g.add && (g.add
								.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), r ? m.splice(m
								.delegateCount++, 0, p) : m.push(p), ne.event.global[c] = !0;
						t = null
					}
				},
				global: {},
				remove: function(t, e, i, n, r) {
					var s, a, o, l, h, u, c, f, p, d, m, g = ne.hasData(t) && ne._data(t);
					if (g && (f = g.events)) {
						for (e = ne.trim(Ie(e || "")).split(" "), s = 0; s < e.length; s++)
							if (a = je.exec(e[s]) || [], o = l = a[1], h = a[2], o) {
								for (p = ne.event.special[o] || {}, o = (n ? p.delegateType : p.bindType) ||
									o, d = f[o] || [], u = d.length, h = h ? new RegExp("(^|\\.)" + h.split(
										".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c = 0; c < d
									.length; c++) m = d[c], !(!r && l !== m.origType || i && i.guid !== m
									.guid || h && !h.test(m.namespace) || n && n !== m.selector && (
										"**" !== n || !m.selector) || (d.splice(c--, 1), m.selector && d
										.delegateCount--, !p.remove || !p.remove.call(t, m)));
								0 === d.length && u !== d.length && ((!p.teardown || p.teardown.call(t, h, g
									.handle) === !1) && ne.removeEvent(t, o, g.handle), delete f[o])
							} else
								for (o in f) ne.event.remove(t, o + e[s], i, n, !0);
						ne.isEmptyObject(f) && (delete g.handle, ne.removeData(t, "events", !0))
					}
				},
				customEvent: {
					getData: !0,
					setData: !0,
					changeData: !0
				},
				trigger: function(t, e, i, n) {
					if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
						var r, o, l, h, u, c, f, p, d, m, g = t.type || t,
							_ = [];
						if (Fe.test(g + ne.event.triggered)) return;
						if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), o = !0), g.indexOf(".") >= 0 && (_ =
								g.split("."), g = _.shift(), _.sort()), (!i || ne.event.customEvent[g]) && !
							ne.event.global[g]) return;
						if (t = "object" == typeof t ? t[ne.expando] ? t : new ne.Event(g, t) : new ne
							.Event(g), t.type = g, t.isTrigger = !0, t.exclusive = o, t.namespace = _.join(
								"."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + _.join(
								"\\.(?:.*\\.|)") + "(\\.|$)") : null, c = g.indexOf(":") < 0 ? "on" + g :
							"", !i) {
							r = ne.cache;
							for (l in r) r[l].events && r[l].events[g] && ne.event.trigger(t, e, r[l].handle
								.elem, !0);
							return
						}
						if (t.result = a, t.target || (t.target = i), e = null != e ? ne.makeArray(e) : [],
							e.unshift(t), f = ne.event.special[g] || {}, f.trigger && f.trigger.apply(i,
							e) === !1) return;
						if (d = [
								[i, f.bindType || g]
							], !n && !f.noBubble && !ne.isWindow(i)) {
							for (m = f.delegateType || g, h = Fe.test(m + g) ? i : i.parentNode, u =
								i; h; h = h.parentNode) d.push([h, m]), u = h;
							u === (i.ownerDocument || U) && d.push([u.defaultView || u.parentWindow || s,
								m])
						}
						for (l = 0; l < d.length && !t.isPropagationStopped(); l++) h = d[l][0], t.type = d[
								l][1], p = (ne._data(h, "events") || {})[t.type] && ne._data(h, "handle"),
							p && p.apply(h, e), p = c && h[c], p && ne.acceptData(h) && p.apply && p.apply(
								h, e) === !1 && t.preventDefault();
						return t.type = g, !(n || t.isDefaultPrevented() || f._default && f._default.apply(i
								.ownerDocument, e) !== !1 || "click" === g && ne.nodeName(i, "a") || !ne
							.acceptData(i) || !c || !i[g] || ("focus" === g || "blur" === g) && 0 === t
							.target.offsetWidth || ne.isWindow(i) || (u = i[c], u && (i[c] = null), ne
								.event.triggered = g, i[g](), ne.event.triggered = a, !u || !(i[c] = u))
							), t.result
					}
				},
				dispatch: function(t) {
					t = ne.event.fix(t || s.event);
					var e, i, n, r, o, l, h, u, c, f = (ne._data(this, "events") || {})[t.type] || [],
						p = f.delegateCount,
						d = J.call(arguments),
						m = !t.exclusive && !t.namespace,
						g = ne.event.special[t.type] || {},
						_ = [];
					if (d[0] = t, t.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, t) !==
						!1) {
						if (p && (!t.button || "click" !== t.type))
							for (n = t.target; n != this; n = n.parentNode || this)
								if (n.disabled !== !0 || "click" !== t.type) {
									for (o = {}, h = [], e = 0; p > e; e++) u = f[e], c = u.selector, o[
										c] === a && (o[c] = u.needsContext ? ne(c, this).index(n) >= 0 : ne
											.find(c, this, null, [n]).length), o[c] && h.push(u);
									h.length && _.push({
										elem: n,
										matches: h
									})
								} for (f.length > p && _.push({
								elem: this,
								matches: f.slice(p)
							}), e = 0; e < _.length && !t.isPropagationStopped(); e++)
							for (l = _[e], t.currentTarget = l.elem, i = 0; i < l.matches.length && !t
								.isImmediatePropagationStopped(); i++) u = l.matches[i], (m || !t
								.namespace && !u.namespace || t.namespace_re && t.namespace_re.test(u
									.namespace)) && (t.data = u.data, t.handleObj = u, r = ((ne.event
									.special[u.origType] || {}).handle || u.handler).apply(l.elem, d),
								r !== a && (t.result = r, r === !1 && (t.preventDefault(), t
									.stopPropagation())));
						return g.postDispatch && g.postDispatch.call(this, t), t.result
					}
				},
				props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
					.split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(t, e) {
						return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
						.split(" "),
					filter: function(t, e) {
						var i, n, r, s = e.button,
							o = e.fromElement;
						return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || U, n =
							i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft ||
								r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0),
							t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n
								.clientTop || r && r.clientTop || 0)), !t.relatedTarget && o && (t
							.relatedTarget = o === t.target ? e.toElement : o), !t.which && s !== a && (
							t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
					}
				},
				fix: function(t) {
					if (t[ne.expando]) return t;
					var e, i, n = t,
						r = ne.event.fixHooks[t.type] || {},
						s = r.props ? this.props.concat(r.props) : this.props;
					for (t = ne.Event(n), e = s.length; e;) i = s[--e], t[i] = n[i];
					return t.target || (t.target = n.srcElement || U), 3 === t.target.nodeType && (t
						.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t,
						n) : t
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						delegateType: "focusin"
					},
					blur: {
						delegateType: "focusout"
					},
					beforeunload: {
						setup: function(t, e, i) {
							ne.isWindow(this) && (this.onbeforeunload = i)
						},
						teardown: function(t, e) {
							this.onbeforeunload === e && (this.onbeforeunload = null)
						}
					}
				},
				simulate: function(t, e, i, n) {
					var r = ne.extend(new ne.Event, i, {
						type: t,
						isSimulated: !0,
						originalEvent: {}
					});
					n ? ne.event.trigger(r, null, e) : ne.event.dispatch.call(e, r), r
					.isDefaultPrevented() && i.preventDefault()
				}
			}, ne.event.handle = ne.event.dispatch, ne.removeEvent = U.removeEventListener ? function(t, e, i) {
				t.removeEventListener && t.removeEventListener(e, i, !1)
			} : function(t, e, i) {
				var n = "on" + e;
				t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i))
			}, ne.Event = function(t, e) {
				return this instanceof ne.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type,
						this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t
						.getPreventDefault && t.getPreventDefault() ? c : u) : this.type = t, e && ne
					.extend(this, e), this.timeStamp = t && t.timeStamp || ne.now(), this[ne.expando] = !0,
					void 0) : new ne.Event(t, e)
			}, ne.Event.prototype = {
				preventDefault: function() {
					this.isDefaultPrevented = c;
					var t = this.originalEvent;
					t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
				},
				stopPropagation: function() {
					this.isPropagationStopped = c;
					var t = this.originalEvent;
					t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
				},
				stopImmediatePropagation: function() {
					this.isImmediatePropagationStopped = c, this.stopPropagation()
				},
				isDefaultPrevented: u,
				isPropagationStopped: u,
				isImmediatePropagationStopped: u
			}, ne.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, function(t, e) {
				ne.event.special[t] = {
					delegateType: e,
					bindType: e,
					handle: function(t) {
						{
							var i, n = this,
								r = t.relatedTarget,
								s = t.handleObj;
							s.selector
						}
						return (!r || r !== n && !ne.contains(n, r)) && (t.type = s.origType, i = s
							.handler.apply(this, arguments), t.type = e), i
					}
				}
			}), ne.support.submitBubbles || (ne.event.special.submit = {
				setup: function() {
					return ne.nodeName(this, "form") ? !1 : void ne.event.add(this,
						"click._submit keypress._submit",
						function(t) {
							var e = t.target,
								i = ne.nodeName(e, "input") || ne.nodeName(e, "button") ? e.form :
								a;
							i && !ne._data(i, "_submit_attached") && (ne.event.add(i,
								"submit._submit",
								function(t) {
									t._submit_bubble = !0
								}), ne._data(i, "_submit_attached", !0))
						})
				},
				postDispatch: function(t) {
					t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ne
						.event.simulate("submit", this.parentNode, t, !0))
				},
				teardown: function() {
					return ne.nodeName(this, "form") ? !1 : void ne.event.remove(this, "._submit")
				}
			}), ne.support.changeBubbles || (ne.event.special.change = {
				setup: function() {
					return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this
						.type) && (ne.event.add(this, "propertychange._change", function(t) {
							"checked" === t.originalEvent.propertyName && (this
								._just_changed = !0)
						}), ne.event.add(this, "click._change", function(t) {
							this._just_changed && !t.isTrigger && (this._just_changed = !1),
								ne.event.simulate("change", this, t, !0)
						})), !1) : void ne.event.add(this, "beforeactivate._change", function(t) {
						var e = t.target;
						Me.test(e.nodeName) && !ne._data(e, "_change_attached") && (ne.event
							.add(e, "change._change", function(t) {
								this.parentNode && !t.isSimulated && !t.isTrigger && ne
									.event.simulate("change", this.parentNode, t, !0)
							}), ne._data(e, "_change_attached", !0))
					})
				},
				handle: function(t) {
					var e = t.target;
					return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type &&
						"checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
				},
				teardown: function() {
					return ne.event.remove(this, "._change"), !Me.test(this.nodeName)
				}
			}), ne.support.focusinBubbles || ne.each({
				focus: "focusin",
				blur: "focusout"
			}, function(t, e) {
				var i = 0,
					n = function(t) {
						ne.event.simulate(e, t.target, ne.event.fix(t), !0)
					};
				ne.event.special[e] = {
					setup: function() {
						0 === i++ && U.addEventListener(t, n, !0)
					},
					teardown: function() {
						0 === --i && U.removeEventListener(t, n, !0)
					}
				}
			}), ne.fn.extend({
				on: function(t, e, i, n, r) {
					var s, o;
					if ("object" == typeof t) {
						"string" != typeof e && (i = i || e, e = a);
						for (o in t) this.on(o, e, i, t[o], r);
						return this
					}
					if (null == i && null == n ? (n = e, i = e = a) : null == n && ("string" ==
							typeof e ? (n = i, i = a) : (n = i, i = e, e = a)), n === !1) n = u;
					else if (!n) return this;
					return 1 === r && (s = n, n = function(t) {
						return ne().off(t), s.apply(this, arguments)
					}, n.guid = s.guid || (s.guid = ne.guid++)), this.each(function() {
						ne.event.add(this, t, n, i, e)
					})
				},
				one: function(t, e, i, n) {
					return this.on(t, e, i, n, 1)
				},
				off: function(t, e, i) {
					var n, r;
					if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ne(t
						.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n
						.origType, n.selector, n.handler), this;
					if ("object" == typeof t) {
						for (r in t) this.off(r, e, t[r]);
						return this
					}
					return (e === !1 || "function" == typeof e) && (i = e, e = a), i === !1 && (i = u),
						this.each(function() {
							ne.event.remove(this, t, i, e)
						})
				},
				bind: function(t, e, i) {
					return this.on(t, null, e, i)
				},
				unbind: function(t, e) {
					return this.off(t, null, e)
				},
				live: function(t, e, i) {
					return ne(this.context).on(t, this.selector, e, i), this
				},
				die: function(t, e) {
					return ne(this.context).off(t, this.selector || "**", e), this
				},
				delegate: function(t, e, i, n) {
					return this.on(e, t, i, n)
				},
				undelegate: function(t, e, i) {
					return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
				},
				trigger: function(t, e) {
					return this.each(function() {
						ne.event.trigger(t, e, this)
					})
				},
				triggerHandler: function(t, e) {
					return this[0] ? ne.event.trigger(t, e, this[0], !0) : void 0
				},
				toggle: function(t) {
					var e = arguments,
						i = t.guid || ne.guid++,
						n = 0,
						r = function(i) {
							var r = (ne._data(this, "lastToggle" + t.guid) || 0) % n;
							return ne._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), e[
								r].apply(this, arguments) || !1
						};
					for (r.guid = i; n < e.length;) e[n++].guid = i;
					return this.click(r)
				},
				hover: function(t, e) {
					return this.mouseenter(t).mouseleave(e || t)
				}
			}), ne.each(
				"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
				.split(" "),
				function(t, e) {
					ne.fn[e] = function(t, i) {
						return null == i && (i = t, t = null), arguments.length > 0 ? this.on(e, null, t,
							i) : this.trigger(e)
					}, Re.test(e) && (ne.event.fixHooks[e] = ne.event.keyHooks), Le.test(e) && (ne.event
						.fixHooks[e] = ne.event.mouseHooks)
				}),
			function(t, e) {
				function i(t, e, i, n) {
					i = i || [], e = e || D;
					var r, s, a, o, l = e.nodeType;
					if (!t || "string" != typeof t) return i;
					if (1 !== l && 9 !== l) return [];
					if (a = b(e), !a && !n && (r = ee.exec(t)))
						if (o = r[1]) {
							if (9 === l) {
								if (s = e.getElementById(o), !s || !s.parentNode) return i;
								if (s.id === o) return i.push(s), i
							} else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && w(e, s) &&
								s.id === o) return i.push(s), i
						} else {
							if (r[2]) return L.apply(i, F.call(e.getElementsByTagName(t), 0)), i;
							if ((o = r[3]) && fe && e.getElementsByClassName) return L.apply(i, F.call(e
								.getElementsByClassName(o), 0)), i
						} return m(t.replace(Z, "$1"), e, i, n, a)
				}

				function n(t) {
					return function(e) {
						var i = e.nodeName.toLowerCase();
						return "input" === i && e.type === t
					}
				}

				function r(t) {
					return function(e) {
						var i = e.nodeName.toLowerCase();
						return ("input" === i || "button" === i) && e.type === t
					}
				}

				function s(t) {
					return B(function(e) {
						return e = +e, B(function(i, n) {
							for (var r, s = t([], i.length, e), a = s.length; a--;) i[r = s[
								a]] && (i[r] = !(n[r] = i[r]))
						})
					})
				}

				function a(t, e, i) {
					if (t === e) return i;
					for (var n = t.nextSibling; n;) {
						if (n === e) return -1;
						n = n.nextSibling
					}
					return 1
				}

				function o(t, e) {
					var n, r, s, a, o, l, h, u = H[A][t];
					if (u) return e ? 0 : u.slice(0);
					for (o = t, l = [], h = y.preFilter; o;) {
						(!n || (r = J.exec(o))) && (r && (o = o.slice(r[0].length)), l.push(s = [])), n = !1, (
							r = K.exec(o)) && (s.push(n = new O(r.shift())), o = o.slice(n.length), n.type =
							r[0].replace(Z, " "));
						for (a in y.filter)(r = oe[a].exec(o)) && (!h[a] || (r = h[a](r, D, !0))) && (s.push(n =
							new O(r.shift())), o = o.slice(n.length), n.type = a, n.matches = r);
						if (!n) break
					}
					return e ? o.length : o ? i.error(t) : H(t, l).slice(0)
				}

				function l(t, e, i) {
					var n = e.dir,
						r = i && "parentNode" === e.dir,
						s = N++;
					return e.first ? function(e, i, s) {
						for (; e = e[n];)
							if (r || 1 === e.nodeType) return t(e, i, s)
					} : function(e, i, a) {
						if (a) {
							for (; e = e[n];)
								if ((r || 1 === e.nodeType) && t(e, i, a)) return e
						} else
							for (var o, l = j + " " + s + " ", h = l + _; e = e[n];)
								if (r || 1 === e.nodeType) {
									if ((o = e[A]) === h) return e.sizset;
									if ("string" == typeof o && 0 === o.indexOf(l)) {
										if (e.sizset) return e
									} else {
										if (e[A] = h, t(e, i, a)) return e.sizset = !0, e;
										e.sizset = !1
									}
								}
					}
				}

				function h(t) {
					return t.length > 1 ? function(e, i, n) {
						for (var r = t.length; r--;)
							if (!t[r](e, i, n)) return !1;
						return !0
					} : t[0]
				}

				function u(t, e, i, n, r) {
					for (var s, a = [], o = 0, l = t.length, h = null != e; l > o; o++)(s = t[o]) && (!i || i(s,
						n, r)) && (a.push(s), h && e.push(o));
					return a
				}

				function c(t, e, i, n, r, s) {
					return n && !n[A] && (n = c(n)), r && !r[A] && (r = c(r, s)), B(function(s, a, o, l) {
						if (!s || !r) {
							var h, c, f, p = [],
								m = [],
								g = a.length,
								_ = s || d(e || "*", o.nodeType ? [o] : o, [], s),
								v = !t || !s && e ? _ : u(_, p, t, o, l),
								y = i ? r || (s ? t : g || n) ? [] : a : v;
							if (i && i(v, y, o, l), n)
								for (f = u(y, m), n(f, [], o, l), h = f.length; h--;)(c = f[h]) && (y[m[
									h]] = !(v[m[h]] = c));
							if (s)
								for (h = t && y.length; h--;)(c = y[h]) && (s[p[h]] = !(a[p[h]] = c));
							else y = u(y === a ? y.splice(g, y.length) : y), r ? r(null, a, y, l) : L
								.apply(a, y)
						}
					})
				}

				function f(t) {
					for (var e, i, n, r = t.length, s = y.relative[t[0].type], a = s || y.relative[" "], o = s ?
							1 : 0, u = l(function(t) {
								return t === e
							}, a, !0), p = l(function(t) {
								return I.call(e, t) > -1
							}, a, !0), d = [function(t, i, n) {
								return !s && (n || i !== P) || ((e = i).nodeType ? u(t, i, n) : p(t, i, n))
							}]; r > o; o++)
						if (i = y.relative[t[o].type]) d = [l(h(d), i)];
						else {
							if (i = y.filter[t[o].type].apply(null, t[o].matches), i[A]) {
								for (n = ++o; r > n && !y.relative[t[n].type]; n++);
								return c(o > 1 && h(d), o > 1 && t.slice(0, o - 1).join("").replace(Z, "$1"), i,
									n > o && f(t.slice(o, n)), r > n && f(t = t.slice(n)), r > n && t.join(
										""))
							}
							d.push(i)
						} return h(d)
				}

				function p(t, e) {
					var n = e.length > 0,
						r = t.length > 0,
						s = function(a, o, l, h, c) {
							var f, p, d, m = [],
								g = 0,
								v = "0",
								x = a && [],
								b = null != c,
								w = P,
								T = a || r && y.find.TAG("*", c && o.parentNode || o),
								S = j += null == w ? 1 : Math.E;
							for (b && (P = o !== D && o, _ = s.el); null != (f = T[v]); v++) {
								if (r && f) {
									for (p = 0; d = t[p]; p++)
										if (d(f, o, l)) {
											h.push(f);
											break
										} b && (j = S, _ = ++s.el)
								}
								n && ((f = !d && f) && g--, a && x.push(f))
							}
							if (g += v, n && v !== g) {
								for (p = 0; d = e[p]; p++) d(x, m, o, l);
								if (a) {
									if (g > 0)
										for (; v--;) !x[v] && !m[v] && (m[v] = R.call(h));
									m = u(m)
								}
								L.apply(h, m), b && !a && m.length > 0 && g + e.length > 1 && i.uniqueSort(h)
							}
							return b && (j = S, P = w), x
						};
					return s.el = 0, n ? B(s) : s
				}

				function d(t, e, n, r) {
					for (var s = 0, a = e.length; a > s; s++) i(t, e[s], n, r);
					return n
				}

				function m(t, e, i, n, r) {
					{
						var s, a, l, h, u, c = o(t);
						c.length
					}
					if (!n && 1 === c.length) {
						if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === e
							.nodeType && !r && y.relative[a[1].type]) {
							if (e = y.find.ID(l.matches[0].replace(ae, ""), e, r)[0], !e) return i;
							t = t.slice(a.shift().length)
						}
						for (s = oe.POS.test(t) ? -1 : a.length - 1; s >= 0 && (l = a[s], !y.relative[h = l
								.type]); s--)
							if ((u = y.find[h]) && (n = u(l.matches[0].replace(ae, ""), ie.test(a[0].type) && e
									.parentNode || e, r))) {
								if (a.splice(s, 1), t = n.length && a.join(""), !t) return L.apply(i, F.call(n,
									0)), i;
								break
							}
					}
					return T(t, c)(n, e, r, i, ie.test(t)), i
				}

				function g() {}
				var _, v, y, x, b, w, T, S, C, P, k = !0,
					E = "undefined",
					A = ("sizcache" + Math.random()).replace(".", ""),
					O = String,
					D = t.document,
					M = D.documentElement,
					j = 0,
					N = 0,
					R = [].pop,
					L = [].push,
					F = [].slice,
					I = [].indexOf || function(t) {
						for (var e = 0, i = this.length; i > e; e++)
							if (this[e] === t) return e;
						return -1
					},
					B = function(t, e) {
						return t[A] = null == e || e, t
					},
					z = function() {
						var t = {},
							e = [];
						return B(function(i, n) {
							return e.push(i) > y.cacheLength && delete t[e.shift()], t[i] = n
						}, t)
					},
					X = z(),
					H = z(),
					Y = z(),
					W = "[\\x20\\t\\r\\n\\f]",
					q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
					U = q.replace("w", "w#"),
					$ = "([*^$|!~]?=)",
					G = "\\[" + W + "*(" + q + ")" + W + "*(?:" + $ + W +
					"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + W + "*\\]",
					V = ":(" + q + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G +
					")|[^:]|\\\\.)*|.*))\\)|)",
					Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W +
					"*\\)|)(?=[^-]|$)",
					Z = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
					J = new RegExp("^" + W + "*," + W + "*"),
					K = new RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"),
					te = new RegExp(V),
					ee = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
					ie = /[\x20\t\r\n\f]*[+~]/,
					re = /h\d/i,
					se = /input|select|textarea|button/i,
					ae = /\\(?!\\)/g,
					oe = {
						ID: new RegExp("^#(" + q + ")"),
						CLASS: new RegExp("^\\.(" + q + ")"),
						NAME: new RegExp("^\\[name=['\"]?(" + q + ")['\"]?\\]"),
						TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
						ATTR: new RegExp("^" + G),
						PSEUDO: new RegExp("^" + V),
						POS: new RegExp(Q, "i"),
						CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + W +
							"*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W +
							"*\\)|)", "i"),
						needsContext: new RegExp("^" + W + "*[>+~]|" + Q, "i")
					},
					le = function(t) {
						var e = D.createElement("div");
						try {
							return t(e)
						} catch (i) {
							return !1
						} finally {
							e = null
						}
					},
					he = le(function(t) {
						return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
					}),
					ue = le(function(t) {
						return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild
							.getAttribute !== E && "#" === t.firstChild.getAttribute("href")
					}),
					ce = le(function(t) {
						t.innerHTML = "<select></select>";
						var e = typeof t.lastChild.getAttribute("multiple");
						return "boolean" !== e && "string" !== e
					}),
					fe = le(function(t) {
						return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t
							.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild
								.className = "e", 2 === t.getElementsByClassName("e").length) : !1
					}),
					pe = le(function(t) {
						t.id = A + 0, t.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>",
							M.insertBefore(t, M.firstChild);
						var e = D.getElementsByName && D.getElementsByName(A).length === 2 + D
							.getElementsByName(A + 0).length;
						return v = !D.getElementById(A), M.removeChild(t), e
					});
				try {
					F.call(M.childNodes, 0)[0].nodeType
				} catch (de) {
					F = function(t) {
						for (var e, i = []; e = this[t]; t++) i.push(e);
						return i
					}
				}
				i.matches = function(t, e) {
						return i(t, null, null, e)
					}, i.matchesSelector = function(t, e) {
						return i(e, null, null, [t]).length > 0
					}, x = i.getText = function(t) {
						var e, i = "",
							n = 0,
							r = t.nodeType;
						if (r) {
							if (1 === r || 9 === r || 11 === r) {
								if ("string" == typeof t.textContent) return t.textContent;
								for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
							} else if (3 === r || 4 === r) return t.nodeValue
						} else
							for (; e = t[n]; n++) i += x(e);
						return i
					}, b = i.isXML = function(t) {
						var e = t && (t.ownerDocument || t).documentElement;
						return e ? "HTML" !== e.nodeName : !1
					}, w = i.contains = M.contains ? function(t, e) {
						var i = 9 === t.nodeType ? t.documentElement : t,
							n = e && e.parentNode;
						return t === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
					} : M.compareDocumentPosition ? function(t, e) {
						return e && !!(16 & t.compareDocumentPosition(e))
					} : function(t, e) {
						for (; e = e.parentNode;)
							if (e === t) return !0;
						return !1
					}, i.attr = function(t, e) {
						var i, n = b(t);
						return n || (e = e.toLowerCase()), (i = y.attrHandle[e]) ? i(t) : n || ce ? t
							.getAttribute(e) : (i = t.getAttributeNode(e), i ? "boolean" == typeof t[e] ? t[e] ?
								e : null : i.specified ? i.value : null : null)
					}, y = i.selectors = {
						cacheLength: 50,
						createPseudo: B,
						match: oe,
						attrHandle: ue ? {} : {
							href: function(t) {
								return t.getAttribute("href", 2)
							},
							type: function(t) {
								return t.getAttribute("type")
							}
						},
						find: {
							ID: v ? function(t, e, i) {
								if (typeof e.getElementById !== E && !i) {
									var n = e.getElementById(t);
									return n && n.parentNode ? [n] : []
								}
							} : function(t, i, n) {
								if (typeof i.getElementById !== E && !n) {
									var r = i.getElementById(t);
									return r ? r.id === t || typeof r.getAttributeNode !== E && r
										.getAttributeNode("id").value === t ? [r] : e : []
								}
							},
							TAG: he ? function(t, e) {
								return typeof e.getElementsByTagName !== E ? e.getElementsByTagName(t) :
									void 0
							} : function(t, e) {
								var i = e.getElementsByTagName(t);
								if ("*" === t) {
									for (var n, r = [], s = 0; n = i[s]; s++) 1 === n.nodeType && r.push(n);
									return r
								}
								return i
							},
							NAME: pe && function(t, e) {
								return typeof e.getElementsByName !== E ? e.getElementsByName(name) : void 0
							},
							CLASS: fe && function(t, e, i) {
								return typeof e.getElementsByClassName === E || i ? void 0 : e
									.getElementsByClassName(t)
							}
						},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function(t) {
								return t[1] = t[1].replace(ae, ""), t[3] = (t[4] || t[5] || "").replace(ae,
									""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
							},
							CHILD: function(t) {
								return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || i.error(t[0]),
									t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] ||
										"odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[
									2] && i.error(t[0]), t
							},
							PSEUDO: function(t) {
								var e, i;
								return oe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (te
									.test(e) && (i = o(e, !0)) && (i = e.indexOf(")", e.length -
										i) - e.length) && (e = e.slice(0, i), t[0] = t[0].slice(0,
										i)), t[2] = e), t.slice(0, 3))
							}
						},
						filter: {
							ID: v ? function(t) {
								return t = t.replace(ae, ""),
									function(e) {
										return e.getAttribute("id") === t
									}
							} : function(t) {
								return t = t.replace(ae, ""),
									function(e) {
										var i = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
										return i && i.value === t
									}
							},
							TAG: function(t) {
								return "*" === t ? function() {
									return !0
								} : (t = t.replace(ae, "").toLowerCase(), function(e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
								})
							},
							CLASS: function(t) {
								var e = X[A][t];
								return e || (e = X(t, new RegExp("(^|" + W + ")" + t + "(" + W + "|$)"))),
									function(t) {
										return e.test(t.className || typeof t.getAttribute !== E && t
											.getAttribute("class") || "")
									}
							},
							ATTR: function(t, e, n) {
								return function(r) {
									var s = i.attr(r, t);
									return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === n :
										"!=" === e ? s !== n : "^=" === e ? n && 0 === s.indexOf(
										n) : "*=" === e ? n && s.indexOf(n) > -1 : "$=" === e ? n &&
										s.substr(s.length - n.length) === n : "~=" === e ? (" " +
											s + " ").indexOf(n) > -1 : "|=" === e ? s === n || s
										.substr(0, n.length + 1) === n + "-" : !1) : !0
								}
							},
							CHILD: function(t, e, i, n) {
								return "nth" === t ? function(t) {
									var e, r, s = t.parentNode;
									if (1 === i && 0 === n) return !0;
									if (s)
										for (r = 0, e = s.firstChild; e && (1 !== e.nodeType || (r++,
												t !== e)); e = e.nextSibling);
									return r -= n, r === i || r % i === 0 && r / i >= 0
								} : function(e) {
									var i = e;
									switch (t) {
										case "only":
										case "first":
											for (; i = i.previousSibling;)
												if (1 === i.nodeType) return !1;
											if ("first" === t) return !0;
											i = e;
										case "last":
											for (; i = i.nextSibling;)
												if (1 === i.nodeType) return !1;
											return !0
									}
								}
							},
							PSEUDO: function(t, e) {
								var n, r = y.pseudos[t] || y.setFilters[t.toLowerCase()] || i.error(
									"unsupported pseudo: " + t);
								return r[A] ? r(e) : r.length > 1 ? (n = [t, t, "", e], y.setFilters
									.hasOwnProperty(t.toLowerCase()) ? B(function(t, i) {
										for (var n, s = r(t, e), a = s.length; a--;) n = I.call(t,
											s[a]), t[n] = !(i[n] = s[a])
									}) : function(t) {
										return r(t, 0, n)
									}) : r
							}
						},
						pseudos: {
							not: B(function(t) {
								var e = [],
									i = [],
									n = T(t.replace(Z, "$1"));
								return n[A] ? B(function(t, e, i, r) {
									for (var s, a = n(t, null, r, []), o = t.length; o--;)(s =
										a[o]) && (t[o] = !(e[o] = s))
								}) : function(t, r, s) {
									return e[0] = t, n(e, null, s, i), !i.pop()
								}
							}),
							has: B(function(t) {
								return function(e) {
									return i(t, e).length > 0
								}
							}),
							contains: B(function(t) {
								return function(e) {
									return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
								}
							}),
							enabled: function(t) {
								return t.disabled === !1
							},
							disabled: function(t) {
								return t.disabled === !0
							},
							checked: function(t) {
								var e = t.nodeName.toLowerCase();
								return "input" === e && !!t.checked || "option" === e && !!t.selected
							},
							selected: function(t) {
								return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
							},
							parent: function(t) {
								return !y.pseudos.empty(t)
							},
							empty: function(t) {
								var e;
								for (t = t.firstChild; t;) {
									if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
									t = t.nextSibling
								}
								return !0
							},
							header: function(t) {
								return re.test(t.nodeName)
							},
							text: function(t) {
								var e, i;
								return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (
									null == (i = t.getAttribute("type")) || i.toLowerCase() === e)
							},
							radio: n("radio"),
							checkbox: n("checkbox"),
							file: n("file"),
							password: n("password"),
							image: n("image"),
							submit: r("submit"),
							reset: r("reset"),
							button: function(t) {
								var e = t.nodeName.toLowerCase();
								return "input" === e && "button" === t.type || "button" === e
							},
							input: function(t) {
								return se.test(t.nodeName)
							},
							focus: function(t) {
								var e = t.ownerDocument;
								return !(t !== e.activeElement || e.hasFocus && !e.hasFocus() || !t.type &&
									!t.href)
							},
							active: function(t) {
								return t === t.ownerDocument.activeElement
							},
							first: s(function() {
								return [0]
							}),
							last: s(function(t, e) {
								return [e - 1]
							}),
							eq: s(function(t, e, i) {
								return [0 > i ? i + e : i]
							}),
							even: s(function(t, e) {
								for (var i = 0; e > i; i += 2) t.push(i);
								return t
							}),
							odd: s(function(t, e) {
								for (var i = 1; e > i; i += 2) t.push(i);
								return t
							}),
							lt: s(function(t, e, i) {
								for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
								return t
							}),
							gt: s(function(t, e, i) {
								for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
								return t
							})
						}
					}, S = M.compareDocumentPosition ? function(t, e) {
						return t === e ? (C = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ?
							4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
					} : function(t, e) {
						if (t === e) return C = !0, 0;
						if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
						var i, n, r = [],
							s = [],
							o = t.parentNode,
							l = e.parentNode,
							h = o;
						if (o === l) return a(t, e);
						if (!o) return -1;
						if (!l) return 1;
						for (; h;) r.unshift(h), h = h.parentNode;
						for (h = l; h;) s.unshift(h), h = h.parentNode;
						i = r.length, n = s.length;
						for (var u = 0; i > u && n > u; u++)
							if (r[u] !== s[u]) return a(r[u], s[u]);
						return u === i ? a(t, s[u], -1) : a(r[u], e, 1)
					}, [0, 0].sort(S), k = !C, i.uniqueSort = function(t) {
						var e, i = 1;
						if (C = k, t.sort(S), C)
							for (; e = t[i]; i++) e === t[i - 1] && t.splice(i--, 1);
						return t
					}, i.error = function(t) {
						throw new Error("Syntax error, unrecognized expression: " + t)
					}, T = i.compile = function(t, e) {
						var i, n = [],
							r = [],
							s = Y[A][t];
						if (!s) {
							for (e || (e = o(t)), i = e.length; i--;) s = f(e[i]), s[A] ? n.push(s) : r.push(s);
							s = Y(t, p(r, n))
						}
						return s
					}, D.querySelectorAll && function() {
						var t, e = m,
							n = /'|\\/g,
							r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
							s = [":focus"],
							a = [":active", ":focus"],
							l = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M
							.oMatchesSelector || M.msMatchesSelector;
						le(function(t) {
							t.innerHTML = "<select><option selected=''></option></select>", t
								.querySelectorAll("[selected]").length || s.push("\\[" + W +
									"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t
								.querySelectorAll(":checked").length || s.push(":checked")
						}), le(function(t) {
							t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length &&
								s.push("[*^$]=" + W + "*(?:\"\"|'')"), t.innerHTML =
								"<input type='hidden'/>", t.querySelectorAll(":enabled").length || s
								.push(":enabled", ":disabled")
						}), s = new RegExp(s.join("|")), m = function(t, i, r, a, l) {
							if (!(a || l || s && s.test(t))) {
								var h, u, c = !0,
									f = A,
									p = i,
									d = 9 === i.nodeType && t;
								if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
									for (h = o(t), (c = i.getAttribute("id")) ? f = c.replace(n, "\\$&") : i
										.setAttribute("id", f), f = "[id='" + f + "'] ", u = h.length; u--;)
										h[u] = f + h[u].join("");
									p = ie.test(t) && i.parentNode || i, d = h.join(",")
								}
								if (d) try {
									return L.apply(r, F.call(p.querySelectorAll(d), 0)), r
								} catch (m) {} finally {
									c || i.removeAttribute("id")
								}
							}
							return e(t, i, r, a, l)
						}, l && (le(function(e) {
							t = l.call(e, "div");
							try {
								l.call(e, "[test!='']:sizzle"), a.push("!=", V)
							} catch (i) {}
						}), a = new RegExp(a.join("|")), i.matchesSelector = function(e, n) {
							if (n = n.replace(r, "='$1']"), !(b(e) || a.test(n) || s && s.test(n)))
							try {
								var o = l.call(e, n);
								if (o || t || e.document && 11 !== e.document.nodeType) return o
							} catch (h) {}
							return i(n, null, null, [e]).length > 0
						})
					}(), y.pseudos.nth = y.pseudos.eq, y.filters = g.prototype = y.pseudos, y.setFilters =
					new g, i.attr = ne.attr, ne.find = i, ne.expr = i.selectors, ne.expr[":"] = ne.expr.pseudos,
					ne.unique = i.uniqueSort, ne.text = i.getText, ne.isXMLDoc = i.isXML, ne.contains = i
					.contains
			}(s);
		var Be = /Until$/,
			ze = /^(?:parents|prev(?:Until|All))/,
			Xe = /^.[^:#\[\.,]*$/,
			He = ne.expr.match.needsContext,
			Ye = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ne.fn.extend({
			find: function(t) {
				var e, i, n, r, s, a, o = this;
				if ("string" != typeof t) return ne(t).filter(function() {
					for (e = 0, i = o.length; i > e; e++)
						if (ne.contains(o[e], this)) return !0
				});
				for (a = this.pushStack("", "find", t), e = 0, i = this.length; i > e; e++)
					if (n = a.length, ne.find(t, this[e], a), e > 0)
						for (r = n; r < a.length; r++)
							for (s = 0; n > s; s++)
								if (a[s] === a[r]) {
									a.splice(r--, 1);
									break
								} return a
			},
			has: function(t) {
				var e, i = ne(t, this),
					n = i.length;
				return this.filter(function() {
					for (e = 0; n > e; e++)
						if (ne.contains(this, i[e])) return !0
				})
			},
			not: function(t) {
				return this.pushStack(d(this, t, !1), "not", t)
			},
			filter: function(t) {
				return this.pushStack(d(this, t, !0), "filter", t)
			},
			is: function(t) {
				return !!t && ("string" == typeof t ? He.test(t) ? ne(t, this.context).index(this[
					0]) >= 0 : ne.filter(t, this).length > 0 : this.filter(t).length > 0)
			},
			closest: function(t, e) {
				for (var i, n = 0, r = this.length, s = [], a = He.test(t) || "string" != typeof t ?
						ne(t, e || this.context) : 0; r > n; n++)
					for (i = this[n]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
						if (a ? a.index(i) > -1 : ne.find.matchesSelector(i, t)) {
							s.push(i);
							break
						}
						i = i.parentNode
					}
				return s = s.length > 1 ? ne.unique(s) : s, this.pushStack(s, "closest", t)
			},
			index: function(t) {
				return t ? "string" == typeof t ? ne.inArray(this[0], ne(t)) : ne.inArray(t.jquery ?
					t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
			},
			add: function(t, e) {
				var i = "string" == typeof t ? ne(t, e) : ne.makeArray(t && t.nodeType ? [t] : t),
					n = ne.merge(this.get(), i);
				return this.pushStack(f(i[0]) || f(n[0]) ? n : ne.unique(n))
			},
			addBack: function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), ne.fn.andSelf = ne.fn.addBack, ne.each({
			parent: function(t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			parents: function(t) {
				return ne.dir(t, "parentNode")
			},
			parentsUntil: function(t, e, i) {
				return ne.dir(t, "parentNode", i)
			},
			next: function(t) {
				return p(t, "nextSibling")
			},
			prev: function(t) {
				return p(t, "previousSibling")
			},
			nextAll: function(t) {
				return ne.dir(t, "nextSibling")
			},
			prevAll: function(t) {
				return ne.dir(t, "previousSibling")
			},
			nextUntil: function(t, e, i) {
				return ne.dir(t, "nextSibling", i)
			},
			prevUntil: function(t, e, i) {
				return ne.dir(t, "previousSibling", i)
			},
			siblings: function(t) {
				return ne.sibling((t.parentNode || {}).firstChild, t)
			},
			children: function(t) {
				return ne.sibling(t.firstChild)
			},
			contents: function(t) {
				return ne.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ne
					.merge([], t.childNodes)
			}
		}, function(t, e) {
			ne.fn[t] = function(i, n) {
				var r = ne.map(this, e, i);
				return Be.test(t) || (n = i), n && "string" == typeof n && (r = ne.filter(n, r)),
					r = this.length > 1 && !Ye[t] ? ne.unique(r) : r, this.length > 1 && ze.test(
					t) && (r = r.reverse()), this.pushStack(r, t, J.call(arguments).join(","))
			}
		}), ne.extend({
			filter: function(t, e, i) {
				return i && (t = ":not(" + t + ")"), 1 === e.length ? ne.find.matchesSelector(e[0],
					t) ? [e[0]] : [] : ne.find.matches(t, e)
			},
			dir: function(t, e, i) {
				for (var n = [], r = t[e]; r && 9 !== r.nodeType && (i === a || 1 !== r.nodeType ||
						!ne(r).is(i));) 1 === r.nodeType && n.push(r), r = r[e];
				return n
			},
			sibling: function(t, e) {
				for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
				return i
			}
		});
		var We =
			"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			qe = / jQuery\d+="(?:null|\d+)"/g,
			Ue = /^\s+/,
			$e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Ge = /<([\w:]+)/,
			Ve = /<tbody/i,
			Qe = /<|&#?\w+;/,
			Ze = /<(?:script|style|link)/i,
			Je = /<(?:script|object|embed|option|style)/i,
			Ke = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
			ti = /^(?:checkbox|radio)$/,
			ei = /checked\s*(?:[^=]|=\s*.checked.)/i,
			ii = /\/(java|ecma)script/i,
			ni = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
			ri = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				area: [1, "<map>", "</map>"],
				_default: [0, "", ""]
			},
			si = m(U),
			ai = si.appendChild(U.createElement("div"));
		ri.optgroup = ri.option, ri.tbody = ri.tfoot = ri.colgroup = ri.caption = ri.thead, ri.th = ri.td, ne
			.support.htmlSerialize || (ri._default = [1, "X<div>", "</div>"]), ne.fn.extend({
				text: function(t) {
					return ne.access(this, function(t) {
						return t === a ? ne.text(this) : this.empty().append((this[0] && this[0]
							.ownerDocument || U).createTextNode(t))
					}, null, t, arguments.length)
				},
				wrapAll: function(t) {
					if (ne.isFunction(t)) return this.each(function(e) {
						ne(this).wrapAll(t.call(this, e))
					});
					if (this[0]) {
						var e = ne(t, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
							for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t =
								t.firstChild;
							return t
						}).append(this)
					}
					return this
				},
				wrapInner: function(t) {
					return this.each(ne.isFunction(t) ? function(e) {
						ne(this).wrapInner(t.call(this, e))
					} : function() {
						var e = ne(this),
							i = e.contents();
						i.length ? i.wrapAll(t) : e.append(t)
					})
				},
				wrap: function(t) {
					var e = ne.isFunction(t);
					return this.each(function(i) {
						ne(this).wrapAll(e ? t.call(this, i) : t)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
					}).end()
				},
				append: function() {
					return this.domManip(arguments, !0, function(t) {
						(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t)
					})
				},
				prepend: function() {
					return this.domManip(arguments, !0, function(t) {
						(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t,
							this.firstChild)
					})
				},
				before: function() {
					if (!f(this[0])) return this.domManip(arguments, !1, function(t) {
						this.parentNode.insertBefore(t, this)
					});
					if (arguments.length) {
						var t = ne.clean(arguments);
						return this.pushStack(ne.merge(t, this), "before", this.selector)
					}
				},
				after: function() {
					if (!f(this[0])) return this.domManip(arguments, !1, function(t) {
						this.parentNode.insertBefore(t, this.nextSibling)
					});
					if (arguments.length) {
						var t = ne.clean(arguments);
						return this.pushStack(ne.merge(this, t), "after", this.selector)
					}
				},
				remove: function(t, e) {
					for (var i, n = 0; null != (i = this[n]); n++)(!t || ne.filter(t, [i]).length) && (!
						e && 1 === i.nodeType && (ne.cleanData(i.getElementsByTagName("*")), ne
							.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
					return this
				},
				empty: function() {
					for (var t, e = 0; null != (t = this[e]); e++)
						for (1 === t.nodeType && ne.cleanData(t.getElementsByTagName("*")); t
							.firstChild;) t.removeChild(t.firstChild);
					return this
				},
				clone: function(t, e) {
					return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
						return ne.clone(this, t, e)
					})
				},
				html: function(t) {
					return ne.access(this, function(t) {
						var e = this[0] || {},
							i = 0,
							n = this.length;
						if (t === a) return 1 === e.nodeType ? e.innerHTML.replace(qe, "") : a;
						if (!("string" != typeof t || Ze.test(t) || !ne.support.htmlSerialize &&
								Ke.test(t) || !ne.support.leadingWhitespace && Ue.test(t) || ri[
									(Ge.exec(t) || ["", ""])[1].toLowerCase()])) {
							t = t.replace($e, "<$1></$2>");
							try {
								for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (ne
									.cleanData(e.getElementsByTagName("*")), e.innerHTML = t
									);
								e = 0
							} catch (r) {}
						}
						e && this.empty().append(t)
					}, null, t, arguments.length)
				},
				replaceWith: function(t) {
					return f(this[0]) ? this.length ? this.pushStack(ne(ne.isFunction(t) ? t() : t),
						"replaceWith", t) : this : ne.isFunction(t) ? this.each(function(e) {
						var i = ne(this),
							n = i.html();
						i.replaceWith(t.call(this, e, n))
					}) : ("string" != typeof t && (t = ne(t).detach()), this.each(function() {
						var e = this.nextSibling,
							i = this.parentNode;
						ne(this).remove(), e ? ne(e).before(t) : ne(i).append(t)
					}))
				},
				detach: function(t) {
					return this.remove(t, !0)
				},
				domManip: function(t, e, i) {
					t = [].concat.apply([], t);
					var n, r, s, o, l = 0,
						h = t[0],
						u = [],
						c = this.length;
					if (!ne.support.checkClone && c > 1 && "string" == typeof h && ei.test(h))
					return this.each(function() {
							ne(this).domManip(t, e, i)
						});
					if (ne.isFunction(h)) return this.each(function(n) {
						var r = ne(this);
						t[0] = h.call(this, n, e ? r.html() : a), r.domManip(t, e, i)
					});
					if (this[0]) {
						if (n = ne.buildFragment(t, this, u), s = n.fragment, r = s.firstChild, 1 === s
							.childNodes.length && (s = r), r)
							for (e = e && ne.nodeName(r, "tr"), o = n.cacheable || c - 1; c > l; l++) i
								.call(e && ne.nodeName(this[l], "table") ? g(this[l], "tbody") : this[
									l], l === o ? s : ne.clone(s, !0, !0));
						s = r = null, u.length && ne.each(u, function(t, e) {
							e.src ? ne.ajax ? ne.ajax({
									url: e.src,
									type: "GET",
									dataType: "script",
									async: !1,
									global: !1,
									"throws": !0
								}) : ne.error("no ajax") : ne.globalEval((e.text || e
									.textContent || e.innerHTML || "").replace(ni, "")), e
								.parentNode && e.parentNode.removeChild(e)
						})
					}
					return this
				}
			}), ne.buildFragment = function(t, e, i) {
				var n, r, s, o = t[0];
				return e = e || U, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, 1 === t.length &&
					"string" == typeof o && o.length < 512 && e === U && "<" === o.charAt(0) && !Je.test(o) && (
						ne.support.checkClone || !ei.test(o)) && (ne.support.html5Clone || !Ke.test(o)) && (
						r = !0, n = ne.fragments[o], s = n !== a), n || (n = e.createDocumentFragment(), ne
						.clean(t, e, n, i), r && (ne.fragments[o] = s && n)), {
						fragment: n,
						cacheable: r
					}
			}, ne.fragments = {}, ne.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(t, e) {
				ne.fn[t] = function(i) {
					var n, r = 0,
						s = [],
						a = ne(i),
						o = a.length,
						l = 1 === this.length && this[0].parentNode;
					if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === o)
						return a[e](this[0]), this;
					for (; o > r; r++) n = (r > 0 ? this.clone(!0) : this).get(), ne(a[r])[e](n), s = s
						.concat(n);
					return this.pushStack(s, t, a.selector)
				}
			}), ne.extend({
				clone: function(t, e, i) {
					var n, r, s, a;
					if (ne.support.html5Clone || ne.isXMLDoc(t) || !Ke.test("<" + t.nodeName + ">") ?
						a = t.cloneNode(!0) : (ai.innerHTML = t.outerHTML, ai.removeChild(a = ai
							.firstChild)), !(ne.support.noCloneEvent && ne.support.noCloneChecked ||
							1 !== t.nodeType && 11 !== t.nodeType || ne.isXMLDoc(t)))
						for (v(t, a), n = y(t), r = y(a), s = 0; n[s]; ++s) r[s] && v(n[s], r[s]);
					if (e && (_(t, a), i))
						for (n = y(t), r = y(a), s = 0; n[s]; ++s) _(n[s], r[s]);
					return n = r = null, a
				},
				clean: function(t, e, i, n) {
					var r, s, a, o, l, h, u, c, f, p, d, g = e === U && si,
						_ = [];
					for (e && "undefined" != typeof e.createDocumentFragment || (e = U), r = 0; null !=
						(a = t[r]); r++)
						if ("number" == typeof a && (a += ""), a) {
							if ("string" == typeof a)
								if (Qe.test(a)) {
									for (g = g || m(e), u = e.createElement("div"), g.appendChild(u),
										a = a.replace($e, "<$1></$2>"), o = (Ge.exec(a) || ["", ""])[1]
										.toLowerCase(), l = ri[o] || ri._default, h = l[0], u
										.innerHTML = l[1] + a + l[2]; h--;) u = u.lastChild;
									if (!ne.support.tbody)
										for (c = Ve.test(a), f = "table" !== o || c ? "<table>" !== l[
											1] || c ? [] : u.childNodes : u.firstChild && u.firstChild
											.childNodes, s = f.length - 1; s >= 0; --s) ne.nodeName(f[
												s], "tbody") && !f[s].childNodes.length && f[s]
											.parentNode.removeChild(f[s]);
									!ne.support.leadingWhitespace && Ue.test(a) && u.insertBefore(e
											.createTextNode(Ue.exec(a)[0]), u.firstChild), a = u
										.childNodes, u.parentNode.removeChild(u)
								} else a = e.createTextNode(a);
							a.nodeType ? _.push(a) : ne.merge(_, a)
						} if (u && (a = u = g = null), !ne.support.appendChecked)
						for (r = 0; null != (a = _[r]); r++) ne.nodeName(a, "input") ? x(a) :
							"undefined" != typeof a.getElementsByTagName && ne.grep(a
								.getElementsByTagName("input"), x);
					if (i)
						for (p = function(t) {
								return !t.type || ii.test(t.type) ? n ? n.push(t.parentNode ? t
									.parentNode.removeChild(t) : t) : i.appendChild(t) : void 0
							}, r = 0; null != (a = _[r]); r++) ne.nodeName(a, "script") && p(a) || (i
							.appendChild(a), "undefined" != typeof a.getElementsByTagName && (d = ne
								.grep(ne.merge([], a.getElementsByTagName("script")), p), _.splice
								.apply(_, [r + 1, 0].concat(d)), r += d.length));
					return _
				},
				cleanData: function(t, e) {
					for (var i, n, r, s, a = 0, o = ne.expando, l = ne.cache, h = ne.support
							.deleteExpando, u = ne.event.special; null != (r = t[a]); a++)
						if ((e || ne.acceptData(r)) && (n = r[o], i = n && l[n])) {
							if (i.events)
								for (s in i.events) u[s] ? ne.event.remove(r, s) : ne.removeEvent(r, s,
									i.handle);
							l[n] && (delete l[n], h ? delete r[o] : r.removeAttribute ? r
								.removeAttribute(o) : r[o] = null, ne.deletedIds.push(n))
						}
				}
			}),
			function() {
				var t, e;
				ne.uaMatch = function(t) {
						t = t.toLowerCase();
						var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) ||
							/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t
							.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
						return {
							browser: e[1] || "",
							version: e[2] || "0"
						}
					}, t = ne.uaMatch(G.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t
						.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), ne.browser = e, ne
					.sub = function() {
						function t(e, i) {
							return new t.fn.init(e, i)
						}
						ne.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn
							.constructor = t, t.sub = this.sub, t.fn.init = function i(i, n) {
								return n && n instanceof ne && !(n instanceof t) && (n = t(n)), ne.fn.init.call(
									this, i, n, e)
							}, t.fn.init.prototype = t.fn;
						var e = t(U);
						return t
					}
			}();
		var oi, li, hi, ui = /alpha\([^)]*\)/i,
			ci = /opacity=([^)]*)/,
			fi = /^(top|right|bottom|left)$/,
			pi = /^(none|table(?!-c[ea]).+)/,
			di = /^margin/,
			mi = new RegExp("^(" + re + ")(.*)$", "i"),
			gi = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
			_i = new RegExp("^([-+])=(" + re + ")", "i"),
			vi = {},
			yi = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			xi = {
				letterSpacing: 0,
				fontWeight: 400
			},
			bi = ["Top", "Right", "Bottom", "Left"],
			wi = ["Webkit", "O", "Moz", "ms"],
			Ti = ne.fn.toggle;
		ne.fn.extend({
			css: function(t, e) {
				return ne.access(this, function(t, e, i) {
					return i !== a ? ne.style(t, e, i) : ne.css(t, e)
				}, t, e, arguments.length > 1)
			},
			show: function() {
				return T(this, !0)
			},
			hide: function() {
				return T(this)
			},
			toggle: function(t, e) {
				var i = "boolean" == typeof t;
				return ne.isFunction(t) && ne.isFunction(e) ? Ti.apply(this, arguments) : this.each(
					function() {
						(i ? t : w(this)) ? ne(this).show(): ne(this).hide()
					})
			}
		}), ne.extend({
			cssHooks: {
				opacity: {
					get: function(t, e) {
						if (e) {
							var i = oi(t, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber: {
				fillOpacity: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ne.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(t, e, i, n) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var r, s, o, l = ne.camelCase(e),
						h = t.style;
					if (e = ne.cssProps[l] || (ne.cssProps[l] = b(h, l)), o = ne.cssHooks[e] || ne
						.cssHooks[l], i === a) return o && "get" in o && (r = o.get(t, !1, n)) !==
						a ? r : h[e];
					if (s = typeof i, "string" === s && (r = _i.exec(i)) && (i = (r[1] + 1) * r[2] +
							parseFloat(ne.css(t, e)), s = "number"), !(null == i || "number" ===
							s && isNaN(i) || ("number" === s && !ne.cssNumber[l] && (i += "px"),
								o && "set" in o && (i = o.set(t, i, n)) === a))) try {
						h[e] = i
					} catch (u) {}
				}
			},
			css: function(t, e, i, n) {
				var r, s, o, l = ne.camelCase(e);
				return e = ne.cssProps[l] || (ne.cssProps[l] = b(t.style, l)), o = ne.cssHooks[e] ||
					ne.cssHooks[l], o && "get" in o && (r = o.get(t, !0, n)), r === a && (r = oi(t,
						e)), "normal" === r && e in xi && (r = xi[e]), i || n !== a ? (s =
						parseFloat(r), i || ne.isNumeric(s) ? s || 0 : r) : r
			},
			swap: function(t, e, i) {
				var n, r, s = {};
				for (r in e) s[r] = t.style[r], t.style[r] = e[r];
				n = i.call(t);
				for (r in e) t.style[r] = s[r];
				return n
			}
		}), s.getComputedStyle ? oi = function(t, e) {
			var i, n, r, a, o = s.getComputedStyle(t, null),
				l = t.style;
			return o && (i = o[e], "" === i && !ne.contains(t.ownerDocument, t) && (i = ne.style(t, e)), gi
					.test(i) && di.test(e) && (n = l.width, r = l.minWidth, a = l.maxWidth, l.minWidth = l
						.maxWidth = l.width = i, i = o.width, l.width = n, l.minWidth = r, l.maxWidth = a)),
				i
		} : U.documentElement.currentStyle && (oi = function(t, e) {
			var i, n, r = t.currentStyle && t.currentStyle[e],
				s = t.style;
			return null == r && s && s[e] && (r = s[e]), gi.test(r) && !fi.test(e) && (i = s.left, n = t
				.runtimeStyle && t.runtimeStyle.left, n && (t.runtimeStyle.left = t.currentStyle
					.left), s.left = "fontSize" === e ? "1em" : r, r = s.pixelLeft + "px", s.left =
				i, n && (t.runtimeStyle.left = n)), "" === r ? "auto" : r
		}), ne.each(["height", "width"], function(t, e) {
			ne.cssHooks[e] = {
				get: function(t, i, n) {
					return i ? 0 === t.offsetWidth && pi.test(oi(t, "display")) ? ne.swap(t, yi,
						function() {
							return P(t, e, n)
						}) : P(t, e, n) : void 0
				},
				set: function(t, i, n) {
					return S(t, i, n ? C(t, e, n, ne.support.boxSizing && "border-box" === ne
						.css(t, "boxSizing")) : 0)
				}
			}
		}), ne.support.opacity || (ne.cssHooks.opacity = {
			get: function(t, e) {
				return ci.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
					"") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
			},
			set: function(t, e) {
				var i = t.style,
					n = t.currentStyle,
					r = ne.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
					s = n && n.filter || i.filter || "";
				i.zoom = 1, e >= 1 && "" === ne.trim(s.replace(ui, "")) && i.removeAttribute && (i
					.removeAttribute("filter"), n && !n.filter) || (i.filter = ui.test(s) ? s
					.replace(ui, r) : s + " " + r)
			}
		}), ne(function() {
			ne.support.reliableMarginRight || (ne.cssHooks.marginRight = {
				get: function(t, e) {
					return ne.swap(t, {
						display: "inline-block"
					}, function() {
						return e ? oi(t, "marginRight") : void 0
					})
				}
			}), !ne.support.pixelPosition && ne.fn.position && ne.each(["top", "left"], function(t,
				e) {
				ne.cssHooks[e] = {
					get: function(t, i) {
						if (i) {
							var n = oi(t, e);
							return gi.test(n) ? ne(t).position()[e] + "px" : n
						}
					}
				}
			})
		}), ne.expr && ne.expr.filters && (ne.expr.filters.hidden = function(t) {
			return 0 === t.offsetWidth && 0 === t.offsetHeight || !ne.support.reliableHiddenOffsets &&
				"none" === (t.style && t.style.display || oi(t, "display"))
		}, ne.expr.filters.visible = function(t) {
			return !ne.expr.filters.hidden(t)
		}), ne.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(t, e) {
			ne.cssHooks[t + e] = {
				expand: function(i) {
					var n, r = "string" == typeof i ? i.split(" ") : [i],
						s = {};
					for (n = 0; 4 > n; n++) s[t + bi[n] + e] = r[n] || r[n - 2] || r[0];
					return s
				}
			}, di.test(t) || (ne.cssHooks[t + e].set = S)
		});
		var Si = /%20/g,
			Ci = /\[\]$/,
			Pi = /\r?\n/g,
			ki =
			/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
			Ei = /^(?:select|textarea)/i;
		ne.fn.extend({
			serialize: function() {
				return ne.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					return this.elements ? ne.makeArray(this.elements) : this
				}).filter(function() {
					return this.name && !this.disabled && (this.checked || Ei.test(this
						.nodeName) || ki.test(this.type))
				}).map(function(t, e) {
					var i = ne(this).val();
					return null == i ? null : ne.isArray(i) ? ne.map(i, function(t) {
						return {
							name: e.name,
							value: t.replace(Pi, "\r\n")
						}
					}) : {
						name: e.name,
						value: i.replace(Pi, "\r\n")
					}
				}).get()
			}
		}), ne.param = function(t, e) {
			var i, n = [],
				r = function(t, e) {
					e = ne.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) +
						"=" + encodeURIComponent(e)
				};
			if (e === a && (e = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(t) || t
				.jquery && !ne.isPlainObject(t)) ne.each(t, function() {
				r(this.name, this.value)
			});
			else
				for (i in t) E(i, t[i], e, r);
			return n.join("&").replace(Si, "+")
		};
		var Ai, Oi, Di = /#.*$/,
			Mi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			ji = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
			Ni = /^(?:GET|HEAD)$/,
			Ri = /^\/\//,
			Li = /\?/,
			Fi = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			Ii = /([?&])_=[^&]*/,
			Bi = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			zi = ne.fn.load,
			Xi = {},
			Hi = {},
			Yi = ["*/"] + ["*"];
		try {
			Oi = $.href
		} catch (Wi) {
			Oi = U.createElement("a"), Oi.href = "", Oi = Oi.href
		}
		Ai = Bi.exec(Oi.toLowerCase()) || [], ne.fn.load = function(t, e, i) {
			if ("string" != typeof t && zi) return zi.apply(this, arguments);
			if (!this.length) return this;
			var n, r, s, o = this,
				l = t.indexOf(" ");
			return l >= 0 && (n = t.slice(l, t.length), t = t.slice(0, l)), ne.isFunction(e) ? (i = e, e =
				a) : e && "object" == typeof e && (r = "POST"), ne.ajax({
				url: t,
				type: r,
				dataType: "html",
				data: e,
				complete: function(t, e) {
					i && o.each(i, s || [t.responseText, e, t])
				}
			}).done(function(t) {
				s = arguments, o.html(n ? ne("<div>").append(t.replace(Fi, "")).find(n) : t)
			}), this
		}, ne.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t,
			e) {
			ne.fn[e] = function(t) {
				return this.on(e, t)
			}
		}), ne.each(["get", "post"], function(t, e) {
			ne[e] = function(t, i, n, r) {
				return ne.isFunction(i) && (r = r || n, n = i, i = a), ne.ajax({
					type: e,
					url: t,
					data: i,
					success: n,
					dataType: r
				})
			}
		}), ne.extend({
			getScript: function(t, e) {
				return ne.get(t, a, e, "script")
			},
			getJSON: function(t, e, i) {
				return ne.get(t, e, i, "json")
			},
			ajaxSetup: function(t, e) {
				return e ? D(t, ne.ajaxSettings) : (e = t, t = ne.ajaxSettings), D(t, e), t
			},
			ajaxSettings: {
				url: Oi,
				isLocal: ji.test(Ai[1]),
				global: !0,
				type: "GET",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				processData: !0,
				async: !0,
				accepts: {
					xml: "application/xml, text/xml",
					html: "text/html",
					text: "text/plain",
					json: "application/json, text/javascript",
					"*": Yi
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText"
				},
				converters: {
					"* text": s.String,
					"text html": !0,
					"text json": ne.parseJSON,
					"text xml": ne.parseXML
				},
				flatOptions: {
					context: !0,
					url: !0
				}
			},
			ajaxPrefilter: A(Xi),
			ajaxTransport: A(Hi),
			ajax: function(t, e) {
				function i(t, e, i, s) {
					var h, c, v, y, b, T = e;
					2 !== x && (x = 2, l && clearTimeout(l), o = a, r = s || "", w.readyState = t >
						0 ? 4 : 0, i && (y = M(f, w, i)), t >= 200 && 300 > t || 304 === t ? (f
							.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ne
									.lastModified[n] = b), b = w.getResponseHeader("Etag"), b &&
								(ne.etag[n] = b)), 304 === t ? (T = "notmodified", h = !0) : (
								h = j(f, y), T = h.state, c = h.data, v = h.error, h = !v)) : (
							v = T, (!T || t) && (T = "error", 0 > t && (t = 0))), w.status = t,
						w.statusText = (e || T) + "", h ? m.resolveWith(p, [c, T, w]) : m
						.rejectWith(p, [w, T, v]), w.statusCode(_), _ = a, u && d.trigger(
							"ajax" + (h ? "Success" : "Error"), [w, f, h ? c : v]), g.fireWith(
							p, [w, T]), u && (d.trigger("ajaxComplete", [w, f]), --ne.active ||
							ne.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (e = t, t = a), e = e || {};
				var n, r, s, o, l, h, u, c, f = ne.ajaxSetup({}, e),
					p = f.context || f,
					d = p !== f && (p.nodeType || p instanceof ne) ? ne(p) : ne.event,
					m = ne.Deferred(),
					g = ne.Callbacks("once memory"),
					_ = f.statusCode || {},
					v = {},
					y = {},
					x = 0,
					b = "canceled",
					w = {
						readyState: 0,
						setRequestHeader: function(t, e) {
							if (!x) {
								var i = t.toLowerCase();
								t = y[i] = y[i] || t, v[t] = e
							}
							return this
						},
						getAllResponseHeaders: function() {
							return 2 === x ? r : null
						},
						getResponseHeader: function(t) {
							var e;
							if (2 === x) {
								if (!s)
									for (s = {}; e = Mi.exec(r);) s[e[1].toLowerCase()] = e[2];
								e = s[t.toLowerCase()]
							}
							return e === a ? null : e
						},
						overrideMimeType: function(t) {
							return x || (f.mimeType = t), this
						},
						abort: function(t) {
							return t = t || b, o && o.abort(t), i(0, t), this
						}
					};
				if (m.promise(w), w.success = w.done, w.error = w.fail, w.complete = g.add, w
					.statusCode = function(t) {
						if (t) {
							var e;
							if (2 > x)
								for (e in t) _[e] = [_[e], t[e]];
							else e = t[w.status], w.always(e)
						}
						return this
					}, f.url = ((t || f.url) + "").replace(Di, "").replace(Ri, Ai[1] + "//"), f
					.dataTypes = ne.trim(f.dataType || "*").toLowerCase().split(ae), null == f
					.crossDomain && (h = Bi.exec(f.url.toLowerCase()) || !1, f.crossDomain = h && h
						.join(":") + (h[3] ? "" : "http:" === h[1] ? 80 : 443) !== Ai.join(":") + (
							Ai[3] ? "" : "http:" === Ai[1] ? 80 : 443)), f.data && f.processData &&
					"string" != typeof f.data && (f.data = ne.param(f.data, f.traditional)), O(Xi,
						f, e, w), 2 === x) return w;
				if (u = f.global, f.type = f.type.toUpperCase(), f.hasContent = !Ni.test(f.type),
					u && 0 === ne.active++ && ne.event.trigger("ajaxStart"), !f.hasContent && (f
						.data && (f.url += (Li.test(f.url) ? "&" : "?") + f.data, delete f.data),
						n = f.url, f.cache === !1)) {
					var T = ne.now(),
						S = f.url.replace(Ii, "$1_=" + T);
					f.url = S + (S === f.url ? (Li.test(f.url) ? "&" : "?") + "_=" + T : "")
				}(f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w
					.setRequestHeader("Content-Type", f.contentType), f.ifModified && (n = n || f
						.url, ne.lastModified[n] && w.setRequestHeader("If-Modified-Since", ne
							.lastModified[n]), ne.etag[n] && w.setRequestHeader("If-None-Match", ne
							.etag[n])), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f
						.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ?
						", " + Yi + "; q=0.01" : "") : f.accepts["*"]);
				for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
				if (!f.beforeSend || f.beforeSend.call(p, w, f) !== !1 && 2 !== x) {
					b = "abort";
					for (c in {
							success: 1,
							error: 1,
							complete: 1
						}) w[c](f[c]);
					if (o = O(Hi, f, e, w)) {
						w.readyState = 1, u && d.trigger("ajaxSend", [w, f]), f.async && f.timeout >
							0 && (l = setTimeout(function() {
								w.abort("timeout")
							}, f.timeout));
						try {
							x = 1, o.send(v, i)
						} catch (C) {
							if (!(2 > x)) throw C;
							i(-1, C)
						}
					} else i(-1, "No Transport");
					return w
				}
				return w.abort()
			},
			active: 0,
			lastModified: {},
			etag: {}
		});
		var qi = [],
			Ui = /\?/,
			$i = /(=)\?(?=&|$)|\?\?/,
			Gi = ne.now();
		ne.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var t = qi.pop() || ne.expando + "_" + Gi++;
				return this[t] = !0, t
			}
		}), ne.ajaxPrefilter("json jsonp", function(t, e, i) {
			var n, r, o, l = t.data,
				h = t.url,
				u = t.jsonp !== !1,
				c = u && $i.test(h),
				f = u && !c && "string" == typeof l && !(t.contentType || "").indexOf(
					"application/x-www-form-urlencoded") && $i.test(l);
			return "jsonp" === t.dataTypes[0] || c || f ? (n = t.jsonpCallback = ne.isFunction(t
					.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r = s[n], c ? t.url = h
				.replace($i, "$1" + n) : f ? t.data = l.replace($i, "$1" + n) : u && (t.url += (Ui
					.test(h) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] =
				function() {
					return o || ne.error(n + " was not called"), o[0]
				}, t.dataTypes[0] = "json", s[n] = function() {
					o = arguments
				}, i.always(function() {
					s[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, qi.push(n)), o && ne
						.isFunction(r) && r(o[0]), o = r = a
				}), "script") : void 0
		}), ne.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /javascript|ecmascript/
			},
			converters: {
				"text script": function(t) {
					return ne.globalEval(t), t
				}
			}
		}), ne.ajaxPrefilter("script", function(t) {
			t.cache === a && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
		}), ne.ajaxTransport("script", function(t) {
			if (t.crossDomain) {
				var e, i = U.head || U.getElementsByTagName("head")[0] || U.documentElement;
				return {
					send: function(n, r) {
						e = U.createElement("script"), e.async = "async", t.scriptCharset && (e
								.charset = t.scriptCharset), e.src = t.url, e.onload = e
							.onreadystatechange = function(t, n) {
								(n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e
									.onload = e.onreadystatechange = null, i && e.parentNode && i
									.removeChild(e), e = a, n || r(200, "success"))
							}, i.insertBefore(e, i.firstChild)
					},
					abort: function() {
						e && e.onload(0, 1)
					}
				}
			}
		});
		var Vi, Qi = s.ActiveXObject ? function() {
				for (var t in Vi) Vi[t](0, 1)
			} : !1,
			Zi = 0;
		ne.ajaxSettings.xhr = s.ActiveXObject ? function() {
				return !this.isLocal && N() || R()
			} : N,
			function(t) {
				ne.extend(ne.support, {
					ajax: !!t,
					cors: !!t && "withCredentials" in t
				})
			}(ne.ajaxSettings.xhr()), ne.support.ajax && ne.ajaxTransport(function(t) {
				if (!t.crossDomain || ne.support.cors) {
					var e;
					return {
						send: function(i, n) {
							var r, o, l = t.xhr();
							if (t.username ? l.open(t.type, t.url, t.async, t.username, t.password) : l
								.open(t.type, t.url, t.async), t.xhrFields)
								for (o in t.xhrFields) l[o] = t.xhrFields[o];
							t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), !t
								.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] =
									"XMLHttpRequest");
							try {
								for (o in i) l.setRequestHeader(o, i[o])
							} catch (h) {}
							l.send(t.hasContent && t.data || null), e = function(i, s) {
								var o, h, u, c, f;
								try {
									if (e && (s || 4 === l.readyState))
										if (e = a, r && (l.onreadystatechange = ne.noop, Qi &&
												delete Vi[r]), s) 4 !== l.readyState && l.abort();
										else {
											o = l.status, u = l.getAllResponseHeaders(), c = {}, f =
												l.responseXML, f && f.documentElement && (c.xml =
												f);
											try {
												c.text = l.responseText
											} catch (i) {}
											try {
												h = l.statusText
											} catch (p) {
												h = ""
											}
											o || !t.isLocal || t.crossDomain ? 1223 === o && (o =
												204) : o = c.text ? 200 : 404
										}
								} catch (d) {
									s || n(-1, d)
								}
								c && n(o, h, c, u)
							}, t.async ? 4 === l.readyState ? setTimeout(e, 0) : (r = ++Zi, Qi && (
									Vi || (Vi = {}, ne(s).unload(Qi)), Vi[r] = e), l
								.onreadystatechange = e) : e()
						},
						abort: function() {
							e && e(0, 1)
						}
					}
				}
			});
		var Ji, Ki, tn = /^(?:toggle|show|hide)$/,
			en = new RegExp("^(?:([-+])=|)(" + re + ")([a-z%]*)$", "i"),
			nn = /queueHooks$/,
			rn = [z],
			sn = {
				"*": [function(t, e) {
					var i, n, r = this.createTween(t, e),
						s = en.exec(e),
						a = r.cur(),
						o = +a || 0,
						l = 1,
						h = 20;
					if (s) {
						if (i = +s[2], n = s[3] || (ne.cssNumber[t] ? "" : "px"), "px" !== n && o) {
							o = ne.css(r.elem, t, !0) || i || 1;
							do l = l || ".5", o /= l, ne.style(r.elem, t, o + n); while (l !== (l = r
									.cur() / a) && 1 !== l && --h)
						}
						r.unit = n, r.start = o, r.end = s[1] ? o + (s[1] + 1) * i : i
					}
					return r
				}]
			};
		ne.Animation = ne.extend(I, {
			tweener: function(t, e) {
				ne.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var i, n = 0, r = t.length; r > n; n++) i = t[n], sn[i] = sn[i] || [], sn[i]
					.unshift(e)
			},
			prefilter: function(t, e) {
				e ? rn.unshift(t) : rn.push(t)
			}
		}), ne.Tween = X, X.prototype = {
			constructor: X,
			init: function(t, e, i, n, r, s) {
				this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start =
					this.now = this.cur(), this.end = n, this.unit = s || (ne.cssNumber[i] ? "" : "px")
			},
			cur: function() {
				var t = X.propHooks[this.prop];
				return t && t.get ? t.get(this) : X.propHooks._default.get(this)
			},
			run: function(t) {
				var e, i = X.propHooks[this.prop];
				return this.pos = e = this.options.duration ? ne.easing[this.easing](t, this.options
					.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this
					.start) * e + this.start, this.options.step && this.options.step.call(this.elem,
					this.now, this), i && i.set ? i.set(this) : X.propHooks._default.set(this), this
			}
		}, X.prototype.init.prototype = X.prototype, X.propHooks = {
			_default: {
				get: function(t) {
					var e;
					return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e =
						ne.css(t.elem, t.prop, !1, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
				},
				set: function(t) {
					ne.fx.step[t.prop] ? ne.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[
						ne.cssProps[t.prop]] || ne.cssHooks[t.prop]) ? ne.style(t.elem, t.prop, t
						.now + t.unit) : t.elem[t.prop] = t.now
				}
			}
		}, X.propHooks.scrollTop = X.propHooks.scrollLeft = {
			set: function(t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, ne.each(["toggle", "show", "hide"], function(t, e) {
			var i = ne.fn[e];
			ne.fn[e] = function(n, r, s) {
				return null == n || "boolean" == typeof n || !t && ne.isFunction(n) && ne
					.isFunction(r) ? i.apply(this, arguments) : this.animate(H(e, !0), n, r, s)
			}
		}), ne.fn.extend({
			fadeTo: function(t, e, i, n) {
				return this.filter(w).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, i, n)
			},
			animate: function(t, e, i, n) {
				var r = ne.isEmptyObject(t),
					s = ne.speed(e, i, n),
					a = function() {
						var e = I(this, ne.extend({}, t), s);
						r && e.stop(!0)
					};
				return r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
			},
			stop: function(t, e, i) {
				var n = function(t) {
					var e = t.stop;
					delete t.stop, e(i)
				};
				return "string" != typeof t && (i = e, e = t, t = a), e && t !== !1 && this.queue(
					t || "fx", []), this.each(function() {
					var e = !0,
						r = null != t && t + "queueHooks",
						s = ne.timers,
						a = ne._data(this);
					if (r) a[r] && a[r].stop && n(a[r]);
					else
						for (r in a) a[r] && a[r].stop && nn.test(r) && n(a[r]);
					for (r = s.length; r--;) s[r].elem === this && (null == t || s[r]
						.queue === t) && (s[r].anim.stop(i), e = !1, s.splice(r, 1));
					(e || !i) && ne.dequeue(this, t)
				})
			}
		}), ne.each({
			slideDown: H("show"),
			slideUp: H("hide"),
			slideToggle: H("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			ne.fn[t] = function(t, i, n) {
				return this.animate(e, t, i, n)
			}
		}), ne.speed = function(t, e, i) {
			var n = t && "object" == typeof t ? ne.extend({}, t) : {
				complete: i || !i && e || ne.isFunction(t) && t,
				duration: t,
				easing: i && e || e && !ne.isFunction(e) && e
			};
			return n.duration = ne.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in
				ne.fx.speeds ? ne.fx.speeds[n.duration] : ne.fx.speeds._default, (null == n.queue || n
					.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
					ne.isFunction(n.old) && n.old.call(this), n.queue && ne.dequeue(this, n.queue)
				}, n
		}, ne.easing = {
			linear: function(t) {
				return t
			},
			swing: function(t) {
				return .5 - Math.cos(t * Math.PI) / 2
			}
		}, ne.timers = [], ne.fx = X.prototype.init, ne.fx.tick = function() {
			for (var t, e = ne.timers, i = 0; i < e.length; i++) t = e[i], !t() && e[i] === t && e.splice(
				i--, 1);
			e.length || ne.fx.stop()
		}, ne.fx.timer = function(t) {
			t() && ne.timers.push(t) && !Ki && (Ki = setInterval(ne.fx.tick, ne.fx.interval))
		}, ne.fx.interval = 13, ne.fx.stop = function() {
			clearInterval(Ki), Ki = null
		}, ne.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ne.fx.step = {}, ne.expr && ne.expr.filters && (ne.expr.filters.animated = function(t) {
			return ne.grep(ne.timers, function(e) {
				return t === e.elem
			}).length
		});
		var an = /^(?:body|html)$/i;
		ne.fn.offset = function(t) {
			if (arguments.length) return t === a ? this : this.each(function(e) {
				ne.offset.setOffset(this, t, e)
			});
			var e, i, n, r, s, o, l, h = {
					top: 0,
					left: 0
				},
				u = this[0],
				c = u && u.ownerDocument;
			if (c) return (i = c.body) === u ? ne.offset.bodyOffset(u) : (e = c.documentElement, ne
				.contains(e, u) ? ("undefined" != typeof u.getBoundingClientRect && (h = u
						.getBoundingClientRect()), n = Y(c), r = e.clientTop || i.clientTop || 0,
					s = e.clientLeft || i.clientLeft || 0, o = n.pageYOffset || e.scrollTop, l = n
					.pageXOffset || e.scrollLeft, {
						top: h.top + o - r,
						left: h.left + l - s
					}) : h)
		}, ne.offset = {
			bodyOffset: function(t) {
				var e = t.offsetTop,
					i = t.offsetLeft;
				return ne.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(ne.css(t,
					"marginTop")) || 0, i += parseFloat(ne.css(t, "marginLeft")) || 0), {
					top: e,
					left: i
				}
			},
			setOffset: function(t, e, i) {
				var n = ne.css(t, "position");
				"static" === n && (t.style.position = "relative");
				var r, s, a = ne(t),
					o = a.offset(),
					l = ne.css(t, "top"),
					h = ne.css(t, "left"),
					u = ("absolute" === n || "fixed" === n) && ne.inArray("auto", [l, h]) > -1,
					c = {},
					f = {};
				u ? (f = a.position(), r = f.top, s = f.left) : (r = parseFloat(l) || 0, s = parseFloat(
						h) || 0), ne.isFunction(e) && (e = e.call(t, i, o)), null != e.top && (c.top = e
						.top - o.top + r), null != e.left && (c.left = e.left - o.left + s), "using" in
					e ? e.using.call(t, c) : a.css(c)
			}
		}, ne.fn.extend({
			position: function() {
				if (this[0]) {
					var t = this[0],
						e = this.offsetParent(),
						i = this.offset(),
						n = an.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return i.top -= parseFloat(ne.css(t, "marginTop")) || 0, i.left -= parseFloat(ne
						.css(t, "marginLeft")) || 0, n.top += parseFloat(ne.css(e[0],
						"borderTopWidth")) || 0, n.left += parseFloat(ne.css(e[0],
						"borderLeftWidth")) || 0, {
						top: i.top - n.top,
						left: i.left - n.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || U.body; t && !an.test(t.nodeName) &&
						"static" === ne.css(t, "position");) t = t.offsetParent;
					return t || U.body
				})
			}
		}), ne.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, e) {
			var i = /Y/.test(e);
			ne.fn[t] = function(n) {
				return ne.access(this, function(t, n, r) {
					var s = Y(t);
					return r === a ? s ? e in s ? s[e] : s.document.documentElement[n] : t[
						n] : void(s ? s.scrollTo(i ? ne(s).scrollLeft() : r, i ? r : ne(
						s).scrollTop()) : t[n] = r)
				}, t, n, arguments.length, null)
			}
		}), ne.each({
			Height: "height",
			Width: "width"
		}, function(t, e) {
			ne.each({
				padding: "inner" + t,
				content: e,
				"": "outer" + t
			}, function(i, n) {
				ne.fn[n] = function(n, r) {
					var s = arguments.length && (i || "boolean" != typeof n),
						o = i || (n === !0 || r === !0 ? "margin" : "border");
					return ne.access(this, function(e, i, n) {
						var r;
						return ne.isWindow(e) ? e.document.documentElement[
								"client" + t] : 9 === e.nodeType ? (r = e
								.documentElement, Math.max(e.body["scroll" + t], r[
									"scroll" + t], e.body["offset" + t], r[
									"offset" + t], r["client" + t])) : n === a ? ne
							.css(e, i, n, o) : ne.style(e, i, n, o)
					}, e, s ? n : a, s, null)
				}
			})
		}), s.jQuery = s.$ = ne, !0 && i(17) && i(17).jQuery && (n = [], r = function() {
			return ne
		}.apply(e, n), !(void 0 !== r && (t.exports = r)))
	}(window)
}, function(t, e) {
	(function(e) {
		t.exports = e
	}).call(e, {})
}, function(t, e, i) {
	var n, r;
	(function(s) {
		var a = "undefined" != typeof t && t.exports && "undefineTimelineLited" != typeof s ? s : this ||
			window;
		(a._gsQueue || (a._gsQueue = [])).push(function() {
				"use strict";
				a._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
						function(t, e, i) {
							var n = function(t) {
									var e, i = [],
										n = t.length;
									for (e = 0; e !== n; i.push(t[e++]));
									return i
								},
								r = function(t, e, i) {
									var n, r, s = t.cycle;
									for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) :
										r[i % r.length];
									delete t.cycle
								},
								s = function(t, e, n) {
									i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars
										.yoyo === !0, this._repeat = this.vars.repeat || 0, this
										._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0,
										this.render = s.prototype.render
								},
								a = 1e-10,
								o = i._internals,
								l = o.isSelector,
								h = o.isArray,
								u = s.prototype = i.to({}, .1, {}),
								c = [];
							s.version = "1.19.0", u.constructor = s, u.kill()._gc = !1, s.killTweensOf =
								s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s
								.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i
								.render, u.invalidate = function() {
									return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars
										.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0,
										this._uncache(!0), i.prototype.invalidate.call(this)
								}, u.updateTo = function(t, e) {
									var n, r = this.ratio,
										s = this.vars.immediateRender || t.immediateRender;
									e && this._startTime < this._timeline._time && (this._startTime =
										this._timeline._time, this._uncache(!1), this._gc ? this
										._enabled(!0, !1) : this._timeline.insert(this, this
											._startTime - this._delay));
									for (n in t) this.vars[n] = t[n];
									if (this._initted || s)
										if (e) this._initted = !1, s && this.render(0, !0, !0);
										else if (this._gc && this._enabled(!0, !1), this
										._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent(
											"_onDisable", this), this._time / this._duration > .998) {
										var a = this._totalTime;
										this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !
											1)
									} else if (this._initted = !1, this._init(), this._time > 0 || s)
										for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h
											.c, h.c *= l, h.s = o - h.c, h = h._next;
									return this
								}, u.render = function(t, e, i) {
									this._initted || 0 === this._duration && this.vars.repeat && this
										.invalidate();
									var n, r, s, l, h, u, c, f, p = this._dirty ? this.totalDuration() :
										this._totalDuration,
										d = this._time,
										m = this._totalTime,
										g = this._cycle,
										_ = this._duration,
										v = this._rawPrevTime;
									if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this
											._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this
												._time = 0, this.ratio = this._ease._calcEnd ? this
												._ease.getRatio(0) : 0) : (this._time = _, this.ratio =
												this._ease._calcEnd ? this._ease.getRatio(1) : 1), this
											._reversed || (n = !0, r = "onComplete", i = i || this
												._timeline.autoRemoveChildren), 0 === _ && (this
												._initted || !this.vars.lazy || i) && (this
												._startTime === this._timeline._duration && (t = 0), (
													0 > v || 0 >= t && t >= -1e-7 || v === a &&
													"isPause" !== this.data) && v !== t && (i = !0, v >
													a && (r = "onReverseComplete")), this._rawPrevTime =
												f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this
											._totalTime = this._time = this._cycle = 0, this.ratio =
											this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !==
												m || 0 === _ && v > 0) && (r = "onReverseComplete", n =
												this._reversed), 0 > t && (this._active = !1, 0 === _ &&
												(this._initted || !this.vars.lazy || i) && (v >= 0 && (
														i = !0), this._rawPrevTime = f = !e || t ||
													v === t ? t : a)), this._initted || (i = !0)) : (
											this._totalTime = this._time = t, 0 !== this._repeat && (l =
												_ + this._repeatDelay, this._cycle = this._totalTime /
												l >> 0, 0 !== this._cycle && this._cycle === this
												._totalTime / l && t >= m && this._cycle--, this._time =
												this._totalTime - this._cycle * l, this._yoyo && 0 !== (
													1 & this._cycle) && (this._time = _ - this._time),
												this._time > _ ? this._time = _ : this._time < 0 && (
													this._time = 0)), this._easeType ? (h = this._time /
												_, u = this._easeType, c = this._easePower, (1 === u ||
													3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *=
													2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 ===
												c ? h *= h * h * h : 4 === c && (h *= h * h * h * h),
												this.ratio = 1 === u ? 1 - h : 2 === u ? h : this
												._time / _ < .5 ? h / 2 : 1 - h / 2) : this.ratio = this
											._ease.getRatio(this._time / _)), d === this._time && !i &&
										g === this._cycle) return void(m !== this._totalTime && this
										._onUpdate && (e || this._callback("onUpdate")));
									if (!this._initted) {
										if (this._init(), !this._initted || this._gc) return;
										if (!i && this._firstPT && (this.vars.lazy !== !1 && this
												._duration || this.vars.lazy && !this._duration))
										return this._time = d, this._totalTime = m, this
											._rawPrevTime = v, this._cycle = g, o.lazyTweens.push(
												this), void(this._lazy = [t, e]);
										this._time && !n ? this.ratio = this._ease.getRatio(this._time /
											_) : n && this._ease._calcEnd && (this.ratio = this
											._ease.getRatio(0 === this._time ? 0 : 1))
									}
									for (this._lazy !== !1 && (this._lazy = !1), this._active || !this
										._paused && this._time !== d && t >= 0 && (this._active = !0),
										0 === m && (2 === this._initted && t > 0 && this._init(), this
											._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r ||
												(r = "_dummyGS")), this.vars.onStart && (0 !== this
												._totalTime || 0 === _) && (e || this._callback(
												"onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s
											.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
										s = s._next;
									this._onUpdate && (0 > t && this._startAt && this._startTime && this
										._startAt.render(t, e, i), e || (this._totalTime !== m ||
										r) && this._callback("onUpdate")), this._cycle !== g && (
										e || this._gc || this.vars.onRepeat && this._callback(
											"onRepeat")), r && (!this._gc || i) && (0 > t && this
										._startAt && !this._onUpdate && this._startTime && this
										._startAt.render(t, e, i), n && (this._timeline
											.autoRemoveChildren && this._enabled(!1, !1), this
											._active = !1), !e && this.vars[r] && this._callback(r),
										0 === _ && this._rawPrevTime === a && f !== a && (this
											._rawPrevTime = 0))
								}, s.to = function(t, e, i) {
									return new s(t, e, i)
								}, s.from = function(t, e, i) {
									return i.runBackwards = !0, i.immediateRender = 0 != i
										.immediateRender, new s(t, e, i)
								}, s.fromTo = function(t, e, i, n) {
									return n.startAt = i, n.immediateRender = 0 != n.immediateRender &&
										0 != i.immediateRender, new s(t, e, n)
								}, s.staggerTo = s.allTo = function(t, e, a, o, u, f, p) {
									o = o || 0;
									var d, m, g, _, v = 0,
										y = [],
										x = function() {
											a.onComplete && a.onComplete.apply(a.onCompleteScope ||
												this, arguments), u.apply(p || a.callbackScope ||
												this, f || c)
										},
										b = a.cycle,
										w = a.startAt && a.startAt.cycle;
									for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(
											t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t
											.reverse(), o *= -1), d = t.length - 1, g = 0; d >=
										g; g++) {
										m = {};
										for (_ in a) m[_] = a[_];
										if (b && (r(m, t, g), null != m.duration && (e = m.duration,
												delete m.duration)), w) {
											w = m.startAt = {};
											for (_ in a.startAt) w[_] = a.startAt[_];
											r(m.startAt, t, g)
										}
										m.delay = v + (m.delay || 0), g === d && u && (m.onComplete =
											x), y[g] = new s(t[g], e, m), v += o
									}
									return y
								}, s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) {
									return i.runBackwards = !0, i.immediateRender = 0 != i
										.immediateRender, s.staggerTo(t, e, i, n, r, a, o)
								}, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) {
									return n.startAt = i, n.immediateRender = 0 != n.immediateRender &&
										0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l)
								}, s.delayedCall = function(t, e, i, n, r) {
									return new s(e, 0, {
										delay: t,
										onComplete: e,
										onCompleteParams: i,
										callbackScope: n,
										onReverseComplete: e,
										onReverseCompleteParams: i,
										immediateRender: !1,
										useFrames: r,
										overwrite: 0
									})
								}, s.set = function(t, e) {
									return new s(t, 0, e)
								}, s.isTweening = function(t) {
									return i.getTweensOf(t, !0).length > 0
								};
							var f = function(t, e) {
									for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] =
										s : (e && (n[r++] = s), n = n.concat(f(s, e)), r = n.length),
										s = s._next;
									return n
								},
								p = s.getAllTweens = function(e) {
									return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
								};
							s.killAll = function(t, i, n, r) {
								null == i && (i = !0), null == n && (n = !0);
								var s, a, o, l = p(0 != r),
									h = l.length,
									u = i && n && r;
								for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (s = a
									.target === a.vars.onComplete) && n || i && !s) && (t ? a
									.totalTime(a._reversed ? 0 : a.totalDuration()) : a
									._enabled(!1, !1))
							}, s.killChildTweensOf = function(t, e) {
								if (null != t) {
									var r, a, u, c, f, p = o.tweenLookup;
									if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (
											t = n(t)), h(t))
										for (c = t.length; --c > -1;) s.killChildTweensOf(t[c], e);
									else {
										r = [];
										for (u in p)
											for (a = p[u].target.parentNode; a;) a === t && (r = r
												.concat(p[u].tweens)), a = a.parentNode;
										for (f = r.length, c = 0; f > c; c++) e && r[c].totalTime(r[
											c].totalDuration()), r[c]._enabled(!1, !1)
									}
								}
							};
							var d = function(t, i, n, r) {
								i = i !== !1, n = n !== !1, r = r !== !1;
								for (var s, a, o = p(r), l = i && n && r, h = o.length; --h > -1;)
									a = o[h], (l || a instanceof e || (s = a.target === a.vars
										.onComplete) && n || i && !s) && a.paused(t)
							};
							return s.pauseAll = function(t, e, i) {
								d(!0, t, e, i)
							}, s.resumeAll = function(t, e, i) {
								d(!1, t, e, i)
							}, s.globalTimeScale = function(e) {
								var n = t._rootTimeline,
									r = i.ticker.time;
								return arguments.length ? (e = e || a, n._startTime = r - (r - n
										._startTime) * n._timeScale / e, n = t
									._rootFramesTimeline, r = i.ticker.frame, n._startTime = r -
									(r - n._startTime) * n._timeScale / e, n._timeScale = t
									._rootTimeline._timeScale = e, e) : n._timeScale
							}, u.progress = function(t, e) {
								return arguments.length ? this.totalTime(this.duration() * (this
											._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this
										._cycle * (this._duration + this._repeatDelay), e) : this
									._time / this.duration()
							}, u.totalProgress = function(t, e) {
								return arguments.length ? this.totalTime(this.totalDuration() * t,
									e) : this._totalTime / this.totalDuration()
							}, u.time = function(t, e) {
								return arguments.length ? (this._dirty && this.totalDuration(), t >
									this._duration && (t = this._duration), this._yoyo && 0 !==
									(1 & this._cycle) ? t = this._duration - t + this._cycle * (
										this._duration + this._repeatDelay) : 0 !== this
									._repeat && (t += this._cycle * (this._duration + this
										._repeatDelay)), this.totalTime(t, e)) : this._time
							}, u.duration = function(e) {
								return arguments.length ? t.prototype.duration.call(this, e) : this
									._duration
							}, u.totalDuration = function(t) {
								return arguments.length ? -1 === this._repeat ? this : this
									.duration((t - this._repeat * this._repeatDelay) / (this
										._repeat + 1)) : (this._dirty && (this._totalDuration = -
										1 === this._repeat ? 999999999999 : this._duration * (
											this._repeat + 1) + this._repeatDelay * this
										._repeat, this._dirty = !1), this._totalDuration)
							}, u.repeat = function(t) {
								return arguments.length ? (this._repeat = t, this._uncache(!0)) :
									this._repeat
							}, u.repeatDelay = function(t) {
								return arguments.length ? (this._repeatDelay = t, this._uncache(!
									0)) : this._repeatDelay
							}, u.yoyo = function(t) {
								return arguments.length ? (this._yoyo = t, this) : this._yoyo
							}, s
						}, !0), a._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline",
						"TweenLite"
					], function(t, e, i) {
						var n = function(t) {
								e.call(this, t), this._labels = {}, this.autoRemoveChildren = this
									.vars.autoRemoveChildren === !0, this.smoothChildTiming = this
									.vars.smoothChildTiming === !0, this._sortChildren = !0, this
									._onUpdate = this.vars.onUpdate;
								var i, n, r = this.vars;
								for (n in r) i = r[n], h(i) && -1 !== i.join("").indexOf(
									"{self}") && (r[n] = this._swapSelfInParams(i));
								h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
							},
							r = 1e-10,
							s = i._internals,
							o = n._internals = {},
							l = s.isSelector,
							h = s.isArray,
							u = s.lazyTweens,
							c = s.lazyRender,
							f = a._gsDefine.globals,
							p = function(t) {
								var e, i = {};
								for (e in t) i[e] = t[e];
								return i
							},
							d = function(t, e, i) {
								var n, r, s = t.cycle;
								for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i],
									i) : r[i % r.length];
								delete t.cycle
							},
							m = o.pauseCallback = function() {},
							g = function(t) {
								var e, i = [],
									n = t.length;
								for (e = 0; e !== n; i.push(t[e++]));
								return i
							},
							_ = n.prototype = new e;
						return n.version = "1.19.0", _.constructor = n, _.kill()._gc = _
							._forcingPlayhead = _._hasPause = !1, _.to = function(t, e, n, r) {
								var s = n.repeat && f.TweenMax || i;
								return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
							}, _.from = function(t, e, n, r) {
								return this.add((n.repeat && f.TweenMax || i).from(t, e, n), r)
							}, _.fromTo = function(t, e, n, r, s) {
								var a = r.repeat && f.TweenMax || i;
								return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
							}, _.staggerTo = function(t, e, r, s, a, o, h, u) {
								var c, f, m = new n({
										onComplete: o,
										onCompleteParams: h,
										callbackScope: u,
										smoothChildTiming: this.smoothChildTiming
									}),
									_ = r.cycle;
								for ("string" == typeof t && (t = i.selector(t) || t), t = t || [],
									l(t) && (t = g(t)), s = s || 0, 0 > s && (t = g(t), t.reverse(),
										s *= -1), f = 0; f < t.length; f++) c = p(r), c.startAt && (
									c.startAt = p(c.startAt), c.startAt.cycle && d(c.startAt, t,
										f)), _ && (d(c, t, f), null != c.duration && (e = c
									.duration, delete c.duration)), m.to(t[f], e, c, f * s);
								return this.add(m, a)
							}, _.staggerFrom = function(t, e, i, n, r, s, a, o) {
								return i.immediateRender = 0 != i.immediateRender, i
									.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, a, o)
							}, _.staggerFromTo = function(t, e, i, n, r, s, a, o, l) {
								return n.startAt = i, n.immediateRender = 0 != n.immediateRender &&
									0 != i.immediateRender, this.staggerTo(t, e, n, r, s, a, o, l)
							}, _.call = function(t, e, n, r) {
								return this.add(i.delayedCall(0, t, e, n), r)
							}, _.set = function(t, e, n) {
								return n = this._parseTimeOrLabel(n, 0, !0), null == e
									.immediateRender && (e.immediateRender = n === this._time && !
										this._paused), this.add(new i(t, 0, e), n)
							}, n.exportRoot = function(t, e) {
								t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !
									0);
								var r, s, a = new n(t),
									o = a._timeline;
								for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a
									._rawPrevTime = a._time = a._totalTime = o._time, r = o
									._first; r;) s = r._next, e && r instanceof i && r.target === r
									.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
								return o.add(a, 0), a
							}, _.add = function(r, s, a, o) {
								var l, u, c, f, p, d;
								if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0,
										r)), !(r instanceof t)) {
									if (r instanceof Array || r && r.push && h(r)) {
										for (a = a || "normal", o = o || 0, l = s, u = r.length, c =
											0; u > c; c++) h(f = r[c]) && (f = new n({
												tweens: f
											})), this.add(f, l), "string" != typeof f &&
											"function" != typeof f && ("sequence" === a ? l = f
												._startTime + f.totalDuration() / f._timeScale :
												"start" === a && (f._startTime -= f.delay())), l +=
											o;
										return this._uncache(!0)
									}
									if ("string" == typeof r) return this.addLabel(r, s);
									if ("function" != typeof r) throw "Cannot add " + r +
										" into the timeline; it is not a tween, timeline, function, or string.";
									r = i.delayedCall(0, r)
								}
								if (e.prototype.add.call(this, r, s), (this._gc || this._time ===
										this._duration) && !this._paused && this._duration < this
									.duration())
									for (p = this, d = p.rawTime() > r._startTime; p._timeline;)
										d && p._timeline.smoothChildTiming ? p.totalTime(p
											._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p
										._timeline;
								return this
							}, _.remove = function(e) {
								if (e instanceof t) {
									this._remove(e, !1);
									var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline :
										t._rootTimeline;
									return e._startTime = (e._paused ? e._pauseTime : i._time) - (e
										._reversed ? e.totalDuration() - e._totalTime : e
										._totalTime) / e._timeScale, this
								}
								if (e instanceof Array || e && e.push && h(e)) {
									for (var n = e.length; --n > -1;) this.remove(e[n]);
									return this
								}
								return "string" == typeof e ? this.removeLabel(e) : this.kill(null,
									e)
							}, _._remove = function(t, i) {
								e.prototype._remove.call(this, t, i);
								var n = this._last;
								return n ? this._time > n._startTime + n._totalDuration / n
									._timeScale && (this._time = this.duration(), this._totalTime =
										this._totalDuration) : this._time = this._totalTime = this
									._duration = this._totalDuration = 0, this
							}, _.append = function(t, e) {
								return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
							}, _.insert = _.insertMultiple = function(t, e, i, n) {
								return this.add(t, e || 0, i, n)
							}, _.appendMultiple = function(t, e, i, n) {
								return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
							}, _.addLabel = function(t, e) {
								return this._labels[t] = this._parseTimeOrLabel(e), this
							}, _.addPause = function(t, e, n, r) {
								var s = i.delayedCall(0, m, n, r || this);
								return s.vars.onComplete = s.vars.onReverseComplete = e, s.data =
									"isPause", this._hasPause = !0, this.add(s, t)
							}, _.removeLabel = function(t) {
								return delete this._labels[t], this
							}, _.getLabelTime = function(t) {
								return null != this._labels[t] ? this._labels[t] : -1
							}, _._parseTimeOrLabel = function(e, i, n, r) {
								var s;
								if (r instanceof t && r.timeline === this) this.remove(r);
								else if (r && (r instanceof Array || r.push && h(r)))
									for (s = r.length; --s > -1;) r[s] instanceof t && r[s]
										.timeline === this && this.remove(r[s]);
								if ("string" == typeof i) return this._parseTimeOrLabel(i, n &&
									"number" == typeof e && null == this._labels[i] ? e -
									this.duration() : 0, n);
								if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this
									._labels[e]) null == e && (e = this.duration());
								else {
									if (s = e.indexOf("="), -1 === s) return null == this._labels[
										e] ? n ? this._labels[e] = this.duration() + i : i :
										this._labels[e] + i;
									i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s +
										1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s -
										1), 0, n) : this.duration()
								}
								return Number(e) + i
							}, _.seek = function(t, e) {
								return this.totalTime("number" == typeof t ? t : this
									._parseTimeOrLabel(t), e !== !1)
							}, _.stop = function() {
								return this.paused(!0)
							}, _.gotoAndPlay = function(t, e) {
								return this.play(t, e)
							}, _.gotoAndStop = function(t, e) {
								return this.pause(t, e)
							}, _.render = function(t, e, i) {
								this._gc && this._enabled(!0, !1);
								var n, s, a, o, l, h, f, p = this._dirty ? this.totalDuration() :
									this._totalDuration,
									d = this._time,
									m = this._startTime,
									g = this._timeScale,
									_ = this._paused;
								if (t >= p - 1e-7) this._totalTime = this._time = p, this
									._reversed || this._hasPausedChild() || (s = !0, o =
										"onComplete", l = !!this._timeline.autoRemoveChildren, 0 ===
										this._duration && (0 >= t && t >= -1e-7 || this
											._rawPrevTime < 0 || this._rawPrevTime === r) && this
										._rawPrevTime !== t && this._first && (l = !0, this
											._rawPrevTime > r && (o = "onReverseComplete"))), this
									._rawPrevTime = this._duration || !e || t || this
									._rawPrevTime === t ? t : r, t = p + 1e-4;
								else if (1e-7 > t)
									if (this._totalTime = this._time = 0, (0 !== d || 0 === this
											._duration && this._rawPrevTime !== r && (this
												._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0
												)) && (o = "onReverseComplete", s = this._reversed),
										0 > t) this._active = !1, this._timeline
										.autoRemoveChildren && this._reversed ? (l = s = !0, o =
											"onReverseComplete") : this._rawPrevTime >= 0 && this
										._first && (l = !0), this._rawPrevTime = t;
									else {
										if (this._rawPrevTime = this._duration || !e || t || this
											._rawPrevTime === t ? t : r, 0 === t && s)
											for (n = this._first; n && 0 === n._startTime;) n
												._duration || (s = !1), n = n._next;
										t = 0, this._initted || (l = !0)
									}
								else {
									if (this._hasPause && !this._forcingPlayhead && !e) {
										if (t >= d)
											for (n = this._first; n && n._startTime <= t && !h;) n
												._duration || "isPause" !== n.data || n.ratio ||
												0 === n._startTime && 0 === this._rawPrevTime || (
													h = n), n = n._next;
										else
											for (n = this._last; n && n._startTime >= t && !h;) n
												._duration || "isPause" === n.data && n
												._rawPrevTime > 0 && (h = n), n = n._prev;
										h && (this._time = t = h._startTime, this._totalTime = t +
											this._cycle * (this._totalDuration + this
												._repeatDelay))
									}
									this._totalTime = this._time = this._rawPrevTime = t
								}
								if (this._time !== d && this._first || i || l || h) {
									if (this._initted || (this._initted = !0), this._active || !this
										._paused && this._time !== d && t > 0 && (this._active = !
										0), 0 === d && this.vars.onStart && (0 === this._time &&
											this._duration || e || this._callback("onStart")), f =
										this._time, f >= d)
										for (n = this._first; n && (a = n._next, f === this._time &&
												(!this._paused || _));)(n._active || n._startTime <=
											f && !n._paused && !n._gc) && (h === n && this
											.pause(), n._reversed ? n.render((n._dirty ? n
												.totalDuration() : n._totalDuration) - (t -
												n._startTime) * n._timeScale, e, i) : n.render((
												t - n._startTime) * n._timeScale, e, i)), n = a;
									else
										for (n = this._last; n && (a = n._prev, f === this._time &&
												(!this._paused || _));) {
											if (n._active || n._startTime <= d && !n._paused && !n
												._gc) {
												if (h === n) {
													for (h = n._prev; h && h.endTime() > this
														._time;) h.render(h._reversed ? h
														.totalDuration() - (t - h._startTime) *
														h._timeScale : (t - h._startTime) * h
														._timeScale, e, i), h = h._prev;
													h = null, this.pause()
												}
												n._reversed ? n.render((n._dirty ? n
													.totalDuration() : n._totalDuration) - (t -
														n._startTime) * n._timeScale, e, i) : n
													.render((t - n._startTime) * n._timeScale, e, i)
											}
											n = a
										}
									this._onUpdate && (e || (u.length && c(), this._callback(
										"onUpdate"))), o && (this._gc || (m === this
										._startTime || g !== this._timeScale) && (0 === this
										._time || p >= this.totalDuration()) && (s && (u
											.length && c(), this._timeline
											.autoRemoveChildren && this._enabled(!1, !1),
											this._active = !1), !e && this.vars[o] && this
										._callback(o)))
								}
							}, _._hasPausedChild = function() {
								for (var t = this._first; t;) {
									if (t._paused || t instanceof n && t._hasPausedChild()) return !
										0;
									t = t._next
								}
								return !1
							}, _.getChildren = function(t, e, n, r) {
								r = r || -9999999999;
								for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (
									a instanceof i ? e !== !1 && (s[o++] = a) : (n !== !1 && (s[
										o++] = a), t !== !1 && (s = s.concat(a.getChildren(!
										0, e, n)), o = s.length))), a = a._next;
								return s
							}, _.getTweensOf = function(t, e) {
								var n, r, s = this._gc,
									a = [],
									o = 0;
								for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n
									.length; --r > -1;)(n[r].timeline === this || e && this
									._contains(n[r])) && (a[o++] = n[r]);
								return s && this._enabled(!1, !0), a
							}, _.recent = function() {
								return this._recent
							}, _._contains = function(t) {
								for (var e = t.timeline; e;) {
									if (e === this) return !0;
									e = e.timeline
								}
								return !1
							}, _.shiftChildren = function(t, e, i) {
								i = i || 0;
								for (var n, r = this._first, s = this._labels; r;) r._startTime >=
									i && (r._startTime += t), r = r._next;
								if (e)
									for (n in s) s[n] >= i && (s[n] += t);
								return this._uncache(!0)
							}, _._kill = function(t, e) {
								if (!t && !e) return this._enabled(!1, !1);
								for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
										n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !
									0);
								return r
							}, _.clear = function(t) {
								var e = this.getChildren(!1, !0, !0),
									i = e.length;
								for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1,
									!1);
								return t !== !1 && (this._labels = {}), this._uncache(!0)
							}, _.invalidate = function() {
								for (var e = this._first; e;) e.invalidate(), e = e._next;
								return t.prototype.invalidate.call(this)
							}, _._enabled = function(t, i) {
								if (t === this._gc)
									for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
								return e.prototype._enabled.call(this, t, i)
							}, _.totalTime = function() {
								this._forcingPlayhead = !0;
								var e = t.prototype.totalTime.apply(this, arguments);
								return this._forcingPlayhead = !1, e
							}, _.duration = function(t) {
								return arguments.length ? (0 !== this.duration() && 0 !== t && this
									.timeScale(this._duration / t), this) : (this._dirty && this
									.totalDuration(), this._duration)
							}, _.totalDuration = function(t) {
								if (!arguments.length) {
									if (this._dirty) {
										for (var e, i, n = 0, r = this._last, s = 999999999999; r;)
											e = r._prev, r._dirty && r.totalDuration(), r
											._startTime > s && this._sortChildren && !r._paused ?
											this.add(r, r._startTime - r._delay) : s = r._startTime,
											r._startTime < 0 && !r._paused && (n -= r._startTime,
												this._timeline.smoothChildTiming && (this
													._startTime += r._startTime / this._timeScale),
												this.shiftChildren(-r._startTime, !1, -9999999999),
												s = 0), i = r._startTime + r._totalDuration / r
											._timeScale, i > n && (n = i), r = e;
										this._duration = this._totalDuration = n, this._dirty = !1
									}
									return this._totalDuration
								}
								return t && this.totalDuration() ? this.timeScale(this
									._totalDuration / t) : this
							}, _.paused = function(e) {
								if (!e)
									for (var i = this._first, n = this._time; i;) i._startTime ===
										n && "isPause" === i.data && (i._rawPrevTime = 0), i = i
										._next;
								return t.prototype.paused.apply(this, arguments)
							}, _.usesFrames = function() {
								for (var e = this._timeline; e._timeline;) e = e._timeline;
								return e === t._rootFramesTimeline
							}, _.rawTime = function() {
								return this._paused ? this._totalTime : (this._timeline.rawTime() -
									this._startTime) * this._timeScale
							}, n
					}, !0), a._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
						function(t, e, i) {
							var n = function(e) {
									t.call(this, e), this._repeat = this.vars.repeat || 0, this
										._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0,
										this._yoyo = this.vars.yoyo === !0, this._dirty = !0
								},
								r = 1e-10,
								s = e._internals,
								o = s.lazyTweens,
								l = s.lazyRender,
								h = a._gsDefine.globals,
								u = new i(null, null, 1, 0),
								c = n.prototype = new t;
							return c.constructor = n, c.kill()._gc = !1, n.version = "1.19.0", c
								.invalidate = function() {
									return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars
										.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0,
										this._uncache(!0), t.prototype.invalidate.call(this)
								}, c.addCallback = function(t, i, n, r) {
									return this.add(e.delayedCall(0, t, n, r), i)
								}, c.removeCallback = function(t, e) {
									if (t)
										if (null == e) this._kill(null, t);
										else
											for (var i = this.getTweensOf(t, !1), n = i.length, r = this
													._parseTimeOrLabel(e); --n > -1;) i[n]
												._startTime === r && i[n]._enabled(!1, !1);
									return this
								}, c.removePause = function(e) {
									return this.removeCallback(t._internals.pauseCallback, e)
								}, c.tweenTo = function(t, i) {
									i = i || {};
									var n, r, s, a = {
											ease: u,
											useFrames: this.usesFrames(),
											immediateRender: !1
										},
										o = i.repeat && h.TweenMax || e;
									for (r in i) a[r] = i[r];
									return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a
										.time) - this._time) / this._timeScale || .001, s = new o(
										this, n, a), a.onStart = function() {
										s.target.paused(!0), s.vars.time !== s.target.time() &&
											n === s.duration() && s.duration(Math.abs(s.vars.time -
												s.target.time()) / s.target._timeScale), i
											.onStart && s._callback("onStart")
									}, s
								}, c.tweenFromTo = function(t, e, i) {
									i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
										onComplete: this.seek,
										onCompleteParams: [t],
										callbackScope: this
									}, i.immediateRender = i.immediateRender !== !1;
									var n = this.tweenTo(e, i);
									return n.duration(Math.abs(n.vars.time - t) / this._timeScale ||
										.001)
								}, c.render = function(t, e, i) {
									this._gc && this._enabled(!0, !1);
									var n, s, a, h, u, c, f, p, d = this._dirty ? this.totalDuration() :
										this._totalDuration,
										m = this._duration,
										g = this._time,
										_ = this._totalTime,
										v = this._startTime,
										y = this._timeScale,
										x = this._rawPrevTime,
										b = this._paused,
										w = this._cycle;
									if (t >= d - 1e-7) this._locked || (this._totalTime = d, this
											._cycle = this._repeat), this._reversed || this
										._hasPausedChild() || (s = !0, h = "onComplete", u = !!this
											._timeline.autoRemoveChildren, 0 === this._duration && (0 >=
												t && t >= -1e-7 || 0 > x || x === r) && x !== t && this
											._first && (u = !0, x > r && (h = "onReverseComplete"))),
										this._rawPrevTime = this._duration || !e || t || this
										._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this
											._cycle) ? this._time = t = 0 : (this._time = m, t = m +
											1e-4);
									else if (1e-7 > t)
										if (this._locked || (this._totalTime = this._cycle = 0), this
											._time = 0, (0 !== g || 0 === m && x !== r && (x > 0 || 0 >
												t && x >= 0) && !this._locked) && (h =
												"onReverseComplete", s = this._reversed), 0 > t) this
											._active = !1, this._timeline.autoRemoveChildren && this
											._reversed ? (u = s = !0, h = "onReverseComplete") : x >=
											0 && this._first && (u = !0), this._rawPrevTime = t;
										else {
											if (this._rawPrevTime = m || !e || t || this
												._rawPrevTime === t ? t : r, 0 === t && s)
												for (n = this._first; n && 0 === n._startTime;) n
													._duration || (s = !1), n = n._next;
											t = 0, this._initted || (u = !0)
										}
									else if (0 === m && 0 > x && (u = !0), this._time = this
										._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !==
											this._repeat && (c = m + this._repeatDelay, this._cycle =
												this._totalTime / c >> 0, 0 !== this._cycle && this
												._cycle === this._totalTime / c && t >= _ && this
												._cycle--, this._time = this._totalTime - this._cycle *
												c, this._yoyo && 0 !== (1 & this._cycle) && (this
													._time = m - this._time), this._time > m ? (this
													._time = m, t = m + 1e-4) : this._time < 0 ? this
												._time = t = 0 : t = this._time)), this._hasPause && !
										this._forcingPlayhead && !e) {
										if (t = this._time, t >= g)
											for (n = this._first; n && n._startTime <= t && !f;) n
												._duration || "isPause" !== n.data || n.ratio || 0 === n
												._startTime && 0 === this._rawPrevTime || (f = n), n = n
												._next;
										else
											for (n = this._last; n && n._startTime >= t && !f;) n
												._duration || "isPause" === n.data && n._rawPrevTime >
												0 && (f = n), n = n._prev;
										f && (this._time = t = f._startTime, this._totalTime = t + this
											._cycle * (this._totalDuration + this._repeatDelay))
									}
									if (this._cycle !== w && !this._locked) {
										var T = this._yoyo && 0 !== (1 & w),
											S = T === (this._yoyo && 0 !== (1 & this._cycle)),
											C = this._totalTime,
											P = this._cycle,
											k = this._rawPrevTime,
											E = this._time;
										if (this._totalTime = w * m, this._cycle < w ? T = !T : this
											._totalTime += m, this._time = g, this._rawPrevTime = 0 ===
											m ? x - 1e-4 : x, this._cycle = w, this._locked = !0, g =
											T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this
											.vars.onRepeat && this._callback("onRepeat"), g !== this
											._time) return;
										if (S && (g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)),
											this._locked = !1, this._paused && !b) return;
										this._time = E, this._totalTime = C, this._cycle = P, this
											._rawPrevTime = k
									}
									if (!(this._time !== g && this._first || i || u || f)) return void(
										_ !== this._totalTime && this._onUpdate && (e || this
											._callback("onUpdate")));
									if (this._initted || (this._initted = !0), this._active || !this
										._paused && this._totalTime !== _ && t > 0 && (this._active = !
											0), 0 === _ && this.vars.onStart && (0 === this
											._totalTime && this._totalDuration || e || this._callback(
												"onStart")), p = this._time, p >= g)
										for (n = this._first; n && (a = n._next, p === this._time && (!
												this._paused || b));)(n._active || n._startTime <= this
											._time && !n._paused && !n._gc) && (f === n && this
											.pause(), n._reversed ? n.render((n._dirty ? n
												.totalDuration() : n._totalDuration) - (t - n
												._startTime) * n._timeScale, e, i) : n.render((t - n
												._startTime) * n._timeScale, e, i)), n = a;
									else
										for (n = this._last; n && (a = n._prev, p === this._time && (!
												this._paused || b));) {
											if (n._active || n._startTime <= g && !n._paused && !n
												._gc) {
												if (f === n) {
													for (f = n._prev; f && f.endTime() > this._time;) f
														.render(f._reversed ? f.totalDuration() - (t - f
															._startTime) * f._timeScale : (t - f
															._startTime) * f._timeScale, e, i), f = f
														._prev;
													f = null, this.pause()
												}
												n._reversed ? n.render((n._dirty ? n.totalDuration() : n
														._totalDuration) - (t - n._startTime) * n
													._timeScale, e, i) : n.render((t - n
													._startTime) * n._timeScale, e, i)
											}
											n = a
										}
									this._onUpdate && (e || (o.length && l(), this._callback(
										"onUpdate"))), h && (this._locked || this._gc || (v === this
										._startTime || y !== this._timeScale) && (0 === this
										._time || d >= this.totalDuration()) && (s && (o
											.length && l(), this._timeline.autoRemoveChildren &&
											this._enabled(!1, !1), this._active = !1), !e &&
										this.vars[h] && this._callback(h)))
								}, c.getActive = function(t, e, i) {
									null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
									var n, r, s = [],
										a = this.getChildren(t, e, i),
										o = 0,
										l = a.length;
									for (n = 0; l > n; n++) r = a[n], r.isActive() && (s[o++] = r);
									return s
								}, c.getLabelAfter = function(t) {
									t || 0 !== t && (t = this._time);
									var e, i = this.getLabelsArray(),
										n = i.length;
									for (e = 0; n > e; e++)
										if (i[e].time > t) return i[e].name;
									return null
								}, c.getLabelBefore = function(t) {
									null == t && (t = this._time);
									for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
										if (e[i].time < t) return e[i].name;
									return null
								}, c.getLabelsArray = function() {
									var t, e = [],
										i = 0;
									for (t in this._labels) e[i++] = {
										time: this._labels[t],
										name: t
									};
									return e.sort(function(t, e) {
										return t.time - e.time
									}), e
								}, c.progress = function(t, e) {
									return arguments.length ? this.totalTime(this.duration() * (this
												._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this
											._cycle * (this._duration + this._repeatDelay), e) : this
										._time / this.duration()
								}, c.totalProgress = function(t, e) {
									return arguments.length ? this.totalTime(this.totalDuration() * t,
										e) : this._totalTime / this.totalDuration()
								}, c.totalDuration = function(e) {
									return arguments.length ? -1 !== this._repeat && e ? this.timeScale(
										this.totalDuration() / e) : this : (this._dirty && (t
										.prototype.totalDuration.call(this), this
										._totalDuration = -1 === this._repeat ? 999999999999 :
										this._duration * (this._repeat + 1) + this
										._repeatDelay * this._repeat), this._totalDuration)
								}, c.time = function(t, e) {
									return arguments.length ? (this._dirty && this.totalDuration(), t >
										this._duration && (t = this._duration), this._yoyo && 0 !==
										(1 & this._cycle) ? t = this._duration - t + this._cycle * (
											this._duration + this._repeatDelay) : 0 !== this
										._repeat && (t += this._cycle * (this._duration + this
											._repeatDelay)), this.totalTime(t, e)) : this._time
								}, c.repeat = function(t) {
									return arguments.length ? (this._repeat = t, this._uncache(!0)) :
										this._repeat
								}, c.repeatDelay = function(t) {
									return arguments.length ? (this._repeatDelay = t, this._uncache(!
										0)) : this._repeatDelay
								}, c.yoyo = function(t) {
									return arguments.length ? (this._yoyo = t, this) : this._yoyo
								}, c.currentLabel = function(t) {
									return arguments.length ? this.seek(t, !0) : this.getLabelBefore(
										this._time + 1e-8)
								}, n
						}, !0),
					function() {
						var t = 180 / Math.PI,
							e = [],
							i = [],
							n = [],
							r = {},
							s = a._gsDefine.globals,
							o = function(t, e, i, n) {
								i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6),
									this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t,
									this.ca = i - t, this.ba = e - t
							},
							l =
							",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
							h = function(t, e, i, n) {
								var r = {
										a: t
									},
									s = {},
									a = {},
									o = {
										c: n
									},
									l = (t + e) / 2,
									h = (e + i) / 2,
									u = (i + n) / 2,
									c = (l + h) / 2,
									f = (h + u) / 2,
									p = (f - c) / 8;
								return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2,
									s.c = a.a = (c + f) / 2, a.b = f - p, o.b = u + (n - u) / 4, a.c = o
									.a = (a.b + o.b) / 2, [r, s, a, o]
							},
							u = function(t, r, s, a, o) {
								var l, u, c, f, p, d, m, g, _, v, y, x, b, w = t.length - 1,
									T = 0,
									S = t[0].a;
								for (l = 0; w > l; l++) p = t[T], u = p.a, c = p.d, f = t[T + 1].d, o ?
									(y = e[l], x = i[l], b = (x + y) * r * .25 / (a ? .5 : n[l] || .5),
										d = c - (c - u) * (a ? .5 * r : 0 !== y ? b / y : 0), m = c + (
											f - c) * (a ? .5 * r : 0 !== x ? b / x : 0), g = c - (d + ((
											m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = c - (c -
										u) * r * .5, m = c + (f - c) * r * .5, g = c - (d + m) / 2),
									d += g, m += g, p.c = _ = d, p.b = 0 !== l ? S : S = p.a + .6 * (p
										.c - p.a), p.da = c - u, p.ca = _ - u, p.ba = S - u, s ? (v = h(
										u, S, _, c), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) :
									T++, S = m;
								p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p
									.c - p.a, p.ba = S - p.a, s && (v = h(p.a, S, p.c, p.d), t.splice(T,
										1, v[0], v[1], v[2], v[3]))
							},
							c = function(t, n, r, s) {
								var a, l, h, u, c, f, p = [];
								if (s)
									for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(
										f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] +
										Number(f.charAt(0) + f.substr(2)));
								if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 >
									a ? 0 : 1][n]), p;
								for (l = 0; a > l; l++) h = t[l][n], u = t[l + 1][n], p[l] = new o(h, 0,
									0, u), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (
									u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
								return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
							},
							f = function(t, s, a, o, h, f) {
								var p, d, m, g, _, v, y, x, b = {},
									w = [],
									T = f || t[0];
								h = "string" == typeof h ? "," + h + "," : l, null == s && (s = 1);
								for (d in t[0]) w.push(d);
								if (t.length > 1) {
									for (x = t[t.length - 1], y = !0, p = w.length; --p > -1;)
										if (d = w[p], Math.abs(T[d] - x[d]) > .05) {
											y = !1;
											break
										} y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t
										.length - 3])
								}
								for (e.length = i.length = n.length = 0, p = w.length; --p > -1;) d = w[
									p], r[d] = -1 !== h.indexOf("," + d + ","), b[d] = c(t, d, r[d],
									f);
								for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(
									i[p]);
								if (!o) {
									for (p = w.length; --p > -1;)
										if (r[d])
											for (m = b[w[p]], v = m.length - 1, g = 0; v > g; g++) _ =
												m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[
													g] || 0) + _ * _;
									for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
								}
								for (p = w.length, g = a ? 4 : 1; --p > -1;) d = w[p], m = b[d], u(m, s,
									a, o, r[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
								return b
							},
							p = function(t, e, i) {
								e = e || "soft";
								var n, r, s, a, l, h, u, c, f, p, d, m = {},
									g = "cubic" === e ? 3 : 2,
									_ = "soft" === e,
									v = [];
								if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1)
								throw "invalid Bezier data";
								for (f in t[0]) v.push(f);
								for (h = v.length; --h > -1;) {
									for (f = v[h], m[f] = l = [], p = 0, c = t.length, u = 0; c >
										u; u++) n = null == i ? t[u][f] : "string" == typeof(d = t[u][
										f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d
										.substr(2)) : Number(d), _ && u > 1 && c - 1 > u && (l[
										p++] = (n + l[p - 2]) / 2), l[p++] = n;
									for (c = p - g + 1, p = 0, u = 0; c > u; u += g) n = l[u], r = l[u +
											1], s = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[p++] = d =
										3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r +
											s) / 3, s);
									l.length = p
								}
								return m
							},
							d = function(t, e, i) {
								for (var n, r, s, a, o, l, h, u, c, f, p, d = 1 / i, m = t.length; --m >
									-1;)
									for (f = t[m], s = f.a, a = f.d - s, o = f.c - s, l = f.b - s, n =
										r = 0, u = 1; i >= u; u++) h = d * u, c = 1 - h, n = r - (r = (
											h * h * a + 3 * c * (h * o + c * l)) * h), p = m * i + u -
										1, e[p] = (e[p] || 0) + n * n
							},
							m = function(t, e) {
								e = e >> 0 || 6;
								var i, n, r, s, a = [],
									o = [],
									l = 0,
									h = 0,
									u = e - 1,
									c = [],
									f = [];
								for (i in t) d(t[i], a, e);
								for (r = a.length, n = 0; r > n; n++) l += Math.sqrt(a[n]), s = n % e,
									f[s] = l, s === u && (h += l, s = n / e >> 0, c[s] = f, o[s] = h,
										l = 0, f = []);
								return {
									length: h,
									lengths: o,
									segments: c
								}
							},
							g = a._gsDefine.plugin({
								propName: "bezier",
								priority: -1,
								version: "1.3.7",
								API: 2,
								global: !0,
								init: function(t, e, i) {
									this._target = t, e instanceof Array && (e = {
											values: e
										}), this._func = {}, this._mod = {}, this._props = [],
										this._timeRes = null == e.timeResolution ? 6 : parseInt(
											e.timeResolution, 10);
									var n, r, s, a, o, l = e.values || [],
										h = {},
										u = l[0],
										c = e.autoRotate || i.vars.orientToBezier;
									this._autoRotate = c ? c instanceof Array ? c : [
										["x", "y", "rotation", c === !0 ? 0 : Number(c) ||
											0]
									] : null;
									for (n in u) this._props.push(n);
									for (s = this._props.length; --s > -1;) n = this._props[s],
										this._overwriteProps.push(n), r = this._func[n] =
										"function" == typeof t[n], h[n] = r ? t[n.indexOf(
											"set") || "function" != typeof t["get" + n.substr(
												3)] ? n : "get" + n.substr(3)]() : parseFloat(t[
											n]), o || h[n] !== l[0][n] && (o = h);
									if (this._beziers = "cubic" !== e.type && "quadratic" !== e
										.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ?
											1 : e.curviness, !1, "thruBasic" === e.type, e
											.correlate, o) : p(l, e.type, h), this._segCount =
										this._beziers[n].length, this._timeRes) {
										var d = m(this._beziers, this._timeRes);
										this._length = d.length, this._lengths = d.lengths, this
											._segments = d.segments, this._l1 = this._li = this
											._s1 = this._si = 0, this._l2 = this._lengths[0],
											this._curSeg = this._segments[0], this._s2 = this
											._curSeg[0], this._prec = 1 / this._curSeg.length
									}
									if (c = this._autoRotate)
										for (this._initialRotations = [], c[
											0] instanceof Array || (this._autoRotate = c = [c]),
											s = c.length; --s > -1;) {
											for (a = 0; 3 > a; a++) n = c[s][a], this._func[n] =
												"function" == typeof t[n] ? t[n.indexOf(
													"set") || "function" != typeof t["get" + n
														.substr(3)] ? n : "get" + n.substr(3)] :
												!1;
											n = c[s][2], this._initialRotations[s] = (this
													._func[n] ? this._func[n].call(this
													._target) : this._target[n]) || 0, this
												._overwriteProps.push(n)
										}
									return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
								},
								set: function(e) {
									var i, n, r, s, a, o, l, h, u, c, f = this._segCount,
										p = this._func,
										d = this._target,
										m = e !== this._startRatio;
									if (this._timeRes) {
										if (u = this._lengths, c = this._curSeg, e *= this
											._length, r = this._li, e > this._l2 && f - 1 > r) {
											for (h = f - 1; h > r && (this._l2 = u[++r]) <= e;);
											this._l1 = u[r - 1], this._li = r, this._curSeg =
												c = this._segments[r], this._s2 = c[this._s1 =
													this._si = 0]
										} else if (e < this._l1 && r > 0) {
											for (; r > 0 && (this._l1 = u[--r]) >= e;);
											0 === r && e < this._l1 ? this._l1 = 0 : r++, this
												._l2 = u[r], this._li = r, this._curSeg = c =
												this._segments[r], this._s1 = c[(this._si = c
													.length - 1) - 1] || 0, this._s2 = c[this
													._si]
										}
										if (i = r, e -= this._l1, r = this._si, e > this._s2 &&
											r < c.length - 1) {
											for (h = c.length - 1; h > r && (this._s2 = c[++
												r]) <= e;);
											this._s1 = c[r - 1], this._si = r
										} else if (e < this._s1 && r > 0) {
											for (; r > 0 && (this._s1 = c[--r]) >= e;);
											0 === r && e < this._s1 ? this._s1 = 0 : r++, this
												._s2 = c[r], this._si = r
										}
										o = (r + (e - this._s1) / (this._s2 - this._s1)) * this
											._prec || 0
									} else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e -
										i * (1 / f)) * f;
									for (n = 1 - o, r = this._props.length; --r > -1;) s = this
										._props[r], a = this._beziers[s][i], l = (o * o * a.da +
											3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._mod[
											s] && (l = this._mod[s](l, d)), p[s] ? d[s](l) : d[
											s] = l;
									if (this._autoRotate) {
										var g, _, v, y, x, b, w, T = this._autoRotate;
										for (r = T.length; --r > -1;) s = T[r][2], b = T[r][
											3] || 0, w = T[r][4] === !0 ? 1 : t, a = this
											._beziers[T[r][0]], g = this._beziers[T[r][1]], a &&
											g && (a = a[i], g = g[i], _ = a.a + (a.b - a.a) * o,
												y = a.b + (a.c - a.b) * o, _ += (y - _) * o,
												y += (a.c + (a.d - a.c) * o - y) * o, v = g.a +
												(g.b - g.a) * o, x = g.b + (g.c - g.b) * o, v +=
												(x - v) * o, x += (g.c + (g.d - g.c) * o - x) *
												o, l = m ? Math.atan2(x - v, y - _) * w + b :
												this._initialRotations[r], this._mod[s] && (l =
													this._mod[s](l, d)), p[s] ? d[s](l) : d[s] =
												l)
									}
								}
							}),
							_ = g.prototype;
						g.bezierThrough = f, g.cubicToQuadratic = h, g._autoCSS = !0, g
							.quadraticToCubic = function(t, e, i) {
								return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
							}, g._cssRegister = function() {
								var t = s.CSSPlugin;
								if (t) {
									var e = t._internals,
										i = e._parseToProxy,
										n = e._setPluginRatio,
										r = e.CSSPropTween;
									e._registerComplexSpecialProp("bezier", {
										parser: function(t, e, s, a, o, l) {
											e instanceof Array && (e = {
												values: e
											}), l = new g;
											var h, u, c, f = e.values,
												p = f.length - 1,
												d = [],
												m = {};
											if (0 > p) return o;
											for (h = 0; p >= h; h++) c = i(t, f[h], a, o, l,
												p !== h), d[h] = c.end;
											for (u in e) m[u] = e[u];
											return m.values = d, o = new r(t, "bezier", 0,
													0, c.pt, 2), o.data = c, o.plugin = l, o
												.setRatio = n, 0 === m.autoRotate && (m
													.autoRotate = !0), !m.autoRotate || m
												.autoRotate instanceof Array || (h = m
													.autoRotate === !0 ? 0 : Number(m
														.autoRotate), m.autoRotate = null !=
													c.end.left ? [
														["left", "top", "rotation", h, !1]
													] : null != c.end.x ? [
														["x", "y", "rotation", h, !1]
													] : !1), m.autoRotate && (a
													._transform || a._enableTransforms(!1),
													c.autoRotate = a._target._gsTransform, c
													.proxy.rotation = c.autoRotate
													.rotation || 0, a._overwriteProps.push(
														"rotation")), l._onInitTween(c
													.proxy, m, a._tween), o
										}
									})
								}
							}, _._mod = function(t) {
								for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[
									n]], e && "function" == typeof e && (this._mod[i[n]] = e)
							}, _._kill = function(t) {
								var e, i, n = this._props;
								for (e in this._beziers)
									if (e in t)
										for (delete this._beziers[e], delete this._func[e], i = n
											.length; --i > -1;) n[i] === e && n.splice(i, 1);
								if (n = this._autoRotate)
									for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
								return this._super._kill.call(this, t)
							}
					}(), a._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
						function(t, e) {
							var i, n, r, s, o = function() {
									t.call(this, "css"), this._overwriteProps.length = 0, this
										.setRatio = o.prototype.setRatio
								},
								l = a._gsDefine.globals,
								h = {},
								u = o.prototype = new t("css");
							u.constructor = o, o.version = "1.19.0", o.API = 2, o
								.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o
								.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
									top: u,
									right: u,
									bottom: u,
									left: u,
									width: u,
									height: u,
									fontSize: u,
									padding: u,
									margin: u,
									perspective: u,
									lineHeight: ""
								};
							var c, f, p, d, m, g, _, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
								x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
								b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
								w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
								T = /(?:\d|\-|\+|=|#|\.)*/g,
								S = /opacity *= *([^)]*)/i,
								C = /opacity:([^;]*)/i,
								P = /alpha\(opacity *=.+?\)/i,
								k = /^(rgb|hsl)/,
								E = /([A-Z])/g,
								A = /-([a-z])/gi,
								O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
								D = function(t, e) {
									return e.toUpperCase()
								},
								M = /(?:Left|Right|Width)/i,
								j = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
								N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
								R = /,(?=[^\)]*(?:\(|$))/gi,
								L = /[\s,\(]/i,
								F = Math.PI / 180,
								I = 180 / Math.PI,
								B = {},
								z = document,
								X = function(t) {
									return z.createElementNS ? z.createElementNS(
										"http://www.w3.org/1999/xhtml", t) : z.createElement(t)
								},
								H = X("div"),
								Y = X("img"),
								W = o._internals = {
									_specialProps: h
								},
								q = navigator.userAgent,
								U = function() {
									var t = q.indexOf("Android"),
										e = X("a");
									return p = -1 !== q.indexOf("Safari") && -1 === q.indexOf(
										"Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), m =
										p && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, d = -
										1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
											q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (
											g = parseFloat(RegExp.$1)), e ? (e.style.cssText =
											"top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
								}(),
								$ = function(t) {
									return S.test("string" == typeof t ? t : (t.currentStyle ? t
										.currentStyle.filter : t.style.filter) || "") ? parseFloat(
										RegExp.$1) / 100 : 1
								},
								G = function(t) {
									window.console && console.log(t)
								},
								V = "",
								Q = "",
								Z = function(t, e) {
									e = e || H;
									var i, n, r = e.style;
									if (void 0 !== r[t]) return t;
									for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz",
											"ms", "Ms", "Webkit"
										], n = 5; --n > -1 && void 0 === r[i[n] + t];);
									return n >= 0 ? (Q = 3 === n ? "ms" : i[n], V = "-" + Q
									.toLowerCase() + "-", Q + t) : null
								},
								J = z.defaultView ? z.defaultView.getComputedStyle : function() {},
								K = o.getStyle = function(t, e, i, n, r) {
									var s;
									return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (
												i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i
											.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t
											.currentStyle && (s = t.currentStyle[e]), null == r || s &&
											"none" !== s && "auto" !== s && "auto auto" !== s ? s : r) :
										$(t)
								},
								te = W.convertToPixels = function(t, i, n, r, s) {
									if ("px" === r || !r) return n;
									if ("auto" === r || !n) return 0;
									var a, l, h, u = M.test(i),
										c = t,
										f = H.style,
										p = 0 > n,
										d = 1 === n;
									if (p && (n = -n), d && (n *= 100), "%" === r && -1 !== i.indexOf(
											"border")) a = n / 100 * (u ? t.clientWidth : t
										.clientHeight);
									else {
										if (f.cssText = "border:0 solid red;position:" + K(t,
												"position") + ";line-height:0;", "%" !== r && c
											.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ?
											"borderLeftWidth" : "borderTopWidth"] = n + r;
										else {
											if (c = t.parentNode || z.body, l = c._gsCache, h = e.ticker
												.frame, l && u && l.time === h) return l.width * n /
											100;
											f[u ? "width" : "height"] = n + r
										}
										c.appendChild(H), a = parseFloat(H[u ? "offsetWidth" :
												"offsetHeight"]), c.removeChild(H), u && "%" === r && o
											.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l
												.time = h, l.width = a / n * 100), 0 !== a || s || (a =
												te(t, i, n, r, !0))
									}
									return d && (a /= 100), p ? -a : a
								},
								ee = W.calculateOffset = function(t, e, i) {
									if ("absolute" !== K(t, "position", i)) return 0;
									var n = "left" === e ? "Left" : "Top",
										r = K(t, "margin" + n, i);
									return t["offset" + n] - (te(t, e, parseFloat(r), r.replace(T,
										"")) || 0)
								},
								ie = function(t, e) {
									var i, n, r, s = {};
									if (e = e || J(t, null))
										if (i = e.length)
											for (; --i > -1;) r = e[i], (-1 === r.indexOf(
												"-transform") || Ae === r) && (s[r.replace(A, D)] =
												e.getPropertyValue(r));
										else
											for (i in e)(-1 === i.indexOf("Transform") || Ee === i) && (
												s[i] = e[i]);
									else if (e = t.currentStyle || t.style)
										for (i in e) "string" == typeof i && void 0 === s[i] && (s[i
											.replace(A, D)] = e[i]);
									return U || (s.opacity = $(t)), n = He(t, e, !1), s.rotation = n
										.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n
										.scaleY, s.x = n.x, s.y = n.y, De && (s.z = n.z, s.rotationX = n
											.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ),
										s.filters && delete s.filters, s
								},
								ne = function(t, e, i, n, r) {
									var s, a, o, l = {},
										h = t.style;
									for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[
											a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf(
											"Origin") && ("number" == typeof s || "string" ==
										typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !==
											a ? "" !== s && "auto" !== s && "none" !== s || "string" !=
											typeof e[a] || "" === e[a].replace(w, "") ? s : 0 : ee(t,
											a), void 0 !== h[a] && (o = new ve(h, a, h[a], o)));
									if (n)
										for (a in n) "className" !== a && (l[a] = n[a]);
									return {
										difs: l,
										firstMPT: o
									}
								},
								re = {
									width: ["Left", "Right"],
									height: ["Top", "Bottom"]
								},
								se = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
								ae = function(t, e, i) {
									if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[
										e] || 0;
									if (t.getBBox && Be(t)) return t.getBBox()[e] || 0;
									var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
										r = re[e],
										s = r.length;
									for (i = i || J(t, null); --s > -1;) n -= parseFloat(K(t,
										"padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t,
										"border" + r[s] + "Width", i, !0)) || 0;
									return n
								},
								oe = function(t, e) {
									if ("contain" === t || "auto" === t || "auto auto" === t) return t +
										" ";
									(null == t || "" === t) && (t = "0 0");
									var i, n = t.split(" "),
										r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf(
										"right") ? "100%" : n[0],
										s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf(
										"bottom") ? "100%" : n[1];
									if (n.length > 3 && !e) {
										for (n = t.split(", ").join(",").split(","), t = [], i = 0; i <
											n.length; i++) t.push(oe(n[i]));
										return t.join(",")
									}
									return null == s ? s = "center" === r ? "50%" : "0" : "center" ===
										s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -
											1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " +
										s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r
											.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr =
											"=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox =
											parseFloat(r.replace(w, "")), e.oy = parseFloat(s.replace(w,
												"")), e.v = t), e || t
								},
								le = function(t, e) {
									return "function" == typeof t && (t = t(v, _)), "string" ==
										typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1",
											10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(
											e) || 0
								},
								he = function(t, e) {
									return "function" == typeof t && (t = t(v, _)), null == t ? e :
										"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(
											0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(
										t) || 0
								},
								ue = function(t, e, i, n) {
									var r, s, a, o, l, h = 1e-6;
									return "function" == typeof t && (t = t(v, _)), null == t ? o = e :
										"number" == typeof t ? o = t : (r = 360, s = t.split("_"), l =
											"=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1",
												10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (
												-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), s
											.length && (n && (n[i] = e + a), -1 !== t.indexOf(
												"short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ?
													a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ?
												a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !==
												t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) %
													r - (a / r | 0) * r)), o = e + a), h > o && o > -
										h && (o = 0), o
								},
								ce = {
									aqua: [0, 255, 255],
									lime: [0, 255, 0],
									silver: [192, 192, 192],
									black: [0, 0, 0],
									maroon: [128, 0, 0],
									teal: [0, 128, 128],
									blue: [0, 0, 255],
									navy: [0, 0, 128],
									white: [255, 255, 255],
									fuchsia: [255, 0, 255],
									olive: [128, 128, 0],
									yellow: [255, 255, 0],
									orange: [255, 165, 0],
									gray: [128, 128, 128],
									purple: [128, 0, 128],
									green: [0, 128, 0],
									red: [255, 0, 0],
									pink: [255, 192, 203],
									cyan: [0, 255, 255],
									transparent: [255, 255, 255, 0]
								},
								fe = function(t, e, i) {
									return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e +
										(i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (
											2 / 3 - t) * 6 : e) + .5 | 0
								},
								pe = o.parseColor = function(t, e) {
									var i, n, r, s, a, o, l, h, u, c, f;
									if (t)
										if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
										else {
											if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t
													.length - 1)), ce[t]) i = ce[t];
											else if ("#" === t.charAt(0)) 4 === t.length && (n = t
												.charAt(1), r = t.charAt(2), s = t.charAt(3), t =
												"#" + n + n + r + r + s + s), t = parseInt(t.substr(
												1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
											else if ("hsl" === t.substr(0, 3))
												if (i = f = t.match(y), e) {
													if (-1 !== t.indexOf("=")) return t.match(x)
												} else a = Number(i[0]) % 360 / 360, o = Number(i[1]) /
													100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o +
														1) : l + o - l * o, n = 2 * l - r, i.length >
													3 && (i[3] = Number(t[3])), i[0] = fe(a + 1 / 3, n,
														r), i[1] = fe(a, n, r), i[2] = fe(a - 1 / 3, n,
														r);
											else i = t.match(y) || ce.transparent;
											i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[
												2]), i.length > 3 && (i[3] = Number(i[3]))
										}
									else i = ce.black;
									return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255,
										h = Math.max(n, r, s), u = Math.min(n, r, s), l = (h + u) /
										2, h === u ? a = o = 0 : (c = h - u, o = l > .5 ? c / (2 -
												h - u) : c / (h + u), a = h === n ? (r - s) / c + (
												s > r ? 6 : 0) : h === r ? (s - n) / c + 2 : (n -
											r) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 *
										o + .5 | 0, i[2] = 100 * l + .5 | 0), i
								},
								de = function(t, e) {
									var i, n, r, s = t.match(me) || [],
										a = 0,
										o = s.length ? "" : t;
									for (i = 0; i < s.length; i++) n = s[i], r = t.substr(a, t.indexOf(
											n, a) - a), a += r.length + n.length, n = pe(n, e), 3 === n
										.length && n.push(1), o += r + (e ? "hsla(" + n[0] + "," + n[
											1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) +
										")";
									return o + t.substr(a)
								},
								me =
								"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
							for (u in ce) me += "|" + u + "\\b";
							me = new RegExp(me + ")", "gi"), o.colorStringFilter = function(t) {
								var e, i = t[0] + t[1];
								me.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf(
										"hsla("), t[0] = de(t[0], e), t[1] = de(t[1], e)), me
									.lastIndex = 0
							}, e.defaultStringFilter || (e.defaultStringFilter = o
								.colorStringFilter);
							var ge = function(t, e, i, n) {
									if (null == t) return function(t) {
										return t
									};
									var r, s = e ? (t.match(me) || [""])[0] : "",
										a = t.split(s).join("").match(b) || [],
										o = t.substr(0, t.indexOf(a[0])),
										l = ")" === t.charAt(t.length - 1) ? ")" : "",
										h = -1 !== t.indexOf(" ") ? " " : ",",
										u = a.length,
										c = u > 0 ? a[0].replace(y, "") : "";
									return u ? r = e ? function(t) {
										var e, f, p, d;
										if ("number" == typeof t) t += c;
										else if (n && R.test(t)) {
											for (d = t.replace(R, "|").split("|"), p = 0; p < d
												.length; p++) d[p] = r(d[p]);
											return d.join(",")
										}
										if (e = (t.match(me) || [s])[0], f = t.split(e).join("")
											.match(b) || [], p = f.length, u > p--)
											for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : a[p];
										return o + f.join(h) + h + e + l + (-1 !== t.indexOf(
											"inset") ? " inset" : "")
									} : function(t) {
										var e, s, f;
										if ("number" == typeof t) t += c;
										else if (n && R.test(t)) {
											for (s = t.replace(R, "|").split("|"), f = 0; f < s
												.length; f++) s[f] = r(s[f]);
											return s.join(",")
										}
										if (e = t.match(b) || [], f = e.length, u > f--)
											for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
										return o + e.join(h) + l
									} : function(t) {
										return t
									}
								},
								_e = function(t) {
									return t = t.split(","),
										function(e, i, n, r, s, a, o) {
											var l, h = (i + "").split(" ");
											for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(
												l - 1) / 2 >> 0];
											return r.parse(e, o, s, a)
										}
								},
								ve = (W._setPluginRatio = function(t) {
									this.plugin.setRatio(t);
									for (var e, i, n, r, s, a = this.data, o = a.proxy, l = a
											.firstMPT, h = 1e-6; l;) e = o[l.v], l.r ? e = Math
										.round(e) : h > e && e > -h && (e = 0), l.t[l.p] = e, l = l
										._next;
									if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o
											.rotation, this.t) : o.rotation), 1 === t || 0 === t)
										for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l;) {
											if (i = l.t, i.type) {
												if (1 === i.type) {
													for (r = i.xs0 + i.s + i.xs1, n = 1; n < i
														.l; n++) r += i["xn" + n] + i["xs" + (n +
														1)];
													i[s] = r
												}
											} else i[s] = i.s + i.xs0;
											l = l._next
										}
								}, function(t, e, i, n, r) {
									this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev =
										this, this._next = n)
								}),
								ye = (W._parseToProxy = function(t, e, i, n, r, s) {
									var a, o, l, h, u, c = n,
										f = {},
										p = {},
										d = i._transform,
										m = B;
									for (i._transform = null, B = e, n = u = i.parse(t, e, n, r),
										B = m, s && (i._transform = d, c && (c._prev = null, c
											._prev && (c._prev._next = null))); n && n !== c;) {
										if (n.type <= 1 && (o = n.p, p[o] = n.s + n.c, f[o] = n.s,
												s || (h = new ve(n, "s", o, h, n.r), n.c = 0), 1 ===
												n.type))
											for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l,
												p[o] = n.data[l], f[o] = n[l], s || (h = new ve(n,
													l, o, h, n.rxp[l]));
										n = n._next
									}
									return {
										proxy: f,
										end: p,
										firstMPT: h,
										pt: u
									}
								}, W.CSSPropTween = function(t, e, n, r, a, o, l, h, u, c, f) {
									this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e,
										t instanceof ye || s.push(this.n), this.r = h, this.type =
										o || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ?
										n : c, this.e = void 0 === f ? n + r : f, a && (this._next =
											a, a._prev = this)
								}),
								xe = function(t, e, i, n, r, s) {
									var a = new ye(t, e, i, n - i, r, -1, s);
									return a.b = i, a.e = a.xs0 = n, a
								},
								be = o.parseComplex = function(t, e, i, n, r, s, a, l, h, u) {
									i = i || s || "", "function" == typeof n && (n = n(v, _)), a =
										new ye(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n), n += "",
										r && me.test(n + i) && (n = [i, n], o.colorStringFilter(n), i =
											n[0], n = n[1]);
									var f, p, d, m, g, b, w, T, S, C, P, k, E, A = i.split(", ").join(
											",").split(" "),
										O = n.split(", ").join(",").split(" "),
										D = A.length,
										M = c !== !1;
									for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A
											.join(" ").replace(R, ", ").split(" "), O = O.join(" ")
											.replace(R, ", ").split(" "), D = A.length), D !== O
										.length && (A = (s || "").split(" "), D = A.length), a.plugin =
										h, a.setRatio = u, me.lastIndex = 0, f = 0; D > f; f++)
										if (m = A[f], g = O[f], T = parseFloat(m), T || 0 === T) a
											.appendXtra("", T, le(g, T), g.replace(x, ""), M && -1 !== g
												.indexOf("px"), !0);
										else if (r && me.test(m)) k = g.indexOf(")") + 1, k = ")" + (k ?
											g.substr(k) : ""), E = -1 !== g.indexOf("hsl") && U, m = pe(
											m, E), g = pe(g, E), S = m.length + g.length > 6, S && !U &&
										0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" :
											"transparent", a.e = a.e.split(O[f]).join("transparent")) :
										(U || (S = !1), E ? a.appendXtra(S ? "hsla(" : "hsl(", m[0], le(
											g[0], m[0]), ",", !1, !0).appendXtra("", m[1], le(g[1],
											m[1]), "%,", !1).appendXtra("", m[2], le(g[2], m[2]),
											S ? "%," : "%" + k, !1) : a.appendXtra(S ? "rgba(" :
											"rgb(", m[0], g[0] - m[0], ",", !0, !0).appendXtra("",
											m[1], g[1] - m[1], ",", !0).appendXtra("", m[2], g[2] -
											m[2], S ? "," : k, !0), S && (m = m.length < 4 ? 1 : m[
											3], a.appendXtra("", m, (g.length < 4 ? 1 : g[3]) -
											m, k, !1))), me.lastIndex = 0;
									else if (b = m.match(y)) {
										if (w = g.match(x), !w || w.length !== b.length) return a;
										for (d = 0, p = 0; p < b.length; p++) P = b[p], C = m.indexOf(P,
											d), a.appendXtra(m.substr(d, C - d), Number(P), le(w[p],
												P), "", M && "px" === m.substr(C + P.length, 2),
											0 === p), d = C + P.length;
										a["xs" + a.l] += m.substr(d)
									} else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + g : g;
									if (-1 !== n.indexOf("=") && a.data) {
										for (k = a.xs0 + a.data.s, f = 1; f < a.l; f++) k += a["xs" +
											f] + a.data["xn" + f];
										a.e = k + a["xs" + f]
									}
									return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
								},
								we = 9;
							for (u = ye.prototype, u.l = u.pr = 0; --we > 0;) u["xn" + we] = 0, u["xs" +
								we] = "";
							u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio =
								u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
									var a = this,
										o = a.l;
									return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "",
										i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1,
											a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i,
												a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a
													.xfirst = new ye(a, "xn" + o, e, i, a.xfirst || a,
														0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a
												.data = {
													s: e + i
												}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a[
											"xs" + o] += e + (n || ""), a)
								};
							var Te = function(t, e) {
									e = e || {}, this.p = e.prefix ? Z(t) || t : t, h[t] = h[this.p] =
										this, this.format = e.formatter || ge(e.defaultValue, e.color, e
											.collapsible, e.multi), e.parser && (this.parse = e.parser),
										this.clrs = e.color, this.multi = e.multi, this.keyword = e
										.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
								},
								Se = W._registerComplexSpecialProp = function(t, e, i) {
									"object" != typeof e && (e = {
										parser: i
									});
									var n, r, s = t.split(","),
										a = e.defaultValue;
									for (i = i || [a], n = 0; n < s.length; n++) e.prefix = 0 === n && e
										.prefix, e.defaultValue = i[n] || a, r = new Te(s[n], e)
								},
								Ce = W._registerPluginProp = function(t) {
									if (!h[t]) {
										var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
										Se(t, {
											parser: function(t, i, n, r, s, a, o) {
												var u = l.com.greensock.plugins[e];
												return u ? (u._cssRegister(), h[n].parse(t,
													i, n, r, s, a, o)) : (G("Error: " +
													e + " js file not loaded."), s)
											}
										})
									}
								};
							u = Te.prototype, u.parseComplex = function(t, e, i, n, r, s) {
								var a, o, l, h, u, c, f = this.keyword;
								if (this.multi && (R.test(i) || R.test(e) ? (o = e.replace(R, "|")
										.split("|"), l = i.replace(R, "|").split("|")) : f && (
										o = [e], l = [i])), l) {
									for (h = l.length > o.length ? l.length : o.length, a = 0; h >
										a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] ||
										this.dflt, f && (u = e.indexOf(f), c = i.indexOf(f), u !==
											c && (-1 === c ? o[a] = o[a].split(f).join("") : -1 ===
												u && (o[a] += " " + f)));
									e = o.join(", "), i = l.join(", ")
								}
								return be(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
							}, u.parse = function(t, e, i, n, s, a) {
								return this.parseComplex(t.style, this.format(K(t, this.p, r, !1,
									this.dflt)), this.format(e), s, a)
							}, o.registerSpecialProp = function(t, e, i) {
								Se(t, {
									parser: function(t, n, r, s, a, o) {
										var l = new ye(t, r, 0, 0, a, 2, r, !1, i);
										return l.plugin = o, l.setRatio = e(t, n, s
											._tween, r), l
									},
									priority: i
								})
							}, o.useSVGTransformAttr = p || d;
							var Pe, ke =
								"scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent"
								.split(","),
								Ee = Z("transform"),
								Ae = V + "transform",
								Oe = Z("transformOrigin"),
								De = null !== Z("perspective"),
								Me = W.Transform = function() {
									this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
										this.force3D = o.defaultForce3D !== !1 && De ? o
										.defaultForce3D || "auto" : !1
								},
								je = window.SVGElement,
								Ne = function(t, e, i) {
									var n, r = z.createElementNS("http://www.w3.org/2000/svg", t),
										s = /([a-z])([A-Z])/g;
									for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2")
										.toLowerCase(), i[n]);
									return e.appendChild(r), r
								},
								Re = z.documentElement,
								Le = function() {
									var t, e, i, n = g || /Android/i.test(q) && !window.chrome;
									return z.createElementNS && !n && (t = Ne("svg", Re), e = Ne("rect",
											t, {
												width: 100,
												height: 50,
												x: 100
											}), i = e.getBoundingClientRect().width, e.style[Oe] =
										"50% 50%", e.style[Ee] = "scaleX(0.5)", n = i === e
										.getBoundingClientRect().width && !(d && De), Re
										.removeChild(t)), n
								}(),
								Fe = function(t, e, i, n, r, s) {
									var a, l, h, u, c, f, p, d, m, g, _, v, y, x, b = t._gsTransform,
										w = Xe(t, !0);
									b && (y = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" "))
											.length < 2) && (p = t.getBBox(), e = oe(e).split(" "),
											a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p
												.width : parseFloat(e[0])) + p.x, (-1 !== e[1]
												.indexOf("%") ? parseFloat(e[1]) / 100 * p.height :
												parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(a[
											0]), i.yOrigin = c = parseFloat(a[1]), n && w !== ze && (f =
											w[0], p = w[1], d = w[2], m = w[3], g = w[4], _ = w[5], v =
											f * m - p * d, l = u * (m / v) + c * (-d / v) + (d * _ - m *
												g) / v, h = u * (-p / v) + c * (f / v) - (f * _ - p *
											g) / v, u = i.xOrigin = a[0] = l, c = i.yOrigin = a[1] = h),
										b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b =
											i), r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (l = u -
												y, h = c - x, b.xOffset += l * w[0] + h * w[2] - l, b
												.yOffset += l * w[1] + h * w[3] - h) : b.xOffset = b
											.yOffset = 0), s || t.setAttribute("data-svg-origin", a
											.join(" "))
								},
								Ie = function(t) {
									try {
										return t.getBBox()
									} catch (t) {}
								},
								Be = function(t) {
									return !!(je && t.getBBox && t.getCTM && Ie(t) && (!t.parentNode ||
										t.parentNode.getBBox && t.parentNode.getCTM))
								},
								ze = [1, 0, 0, 1, 0, 0],
								Xe = function(t, e) {
									var i, n, r, s, a, o, l = t._gsTransform || new Me,
										h = 1e5,
										u = t.style;
									if (Ee ? n = K(t, Ae, null, !0) : t.currentStyle && (n = t
											.currentStyle.filter.match(j), n = n && 4 === n.length ? [n[
												0].substr(4), Number(n[2].substr(4)), Number(n[1]
												.substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(
												",") : ""), i = !n || "none" === n ||
										"matrix(1, 0, 0, 1, 0, 0)" === n, i && Ee && ((o = "none" === J(
											t).display) || !t.parentNode) && (o && (s = u.display, u
												.display = "block"), t.parentNode || (a = 1, Re
												.appendChild(t)), n = K(t, Ae, null, !0), i = !n ||
											"none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? u
											.display = s : o && Ue(u, "display"), a && Re.removeChild(t)
											), (l.svg || t.getBBox && Be(t)) && (i && -1 !== (u[Ee] +
												"").indexOf("matrix") && (n = u[Ee], i = 0), r = t
											.getAttribute("transform"), i && r && (-1 !== r.indexOf(
												"matrix") ? (n = r, i = 0) : -1 !== r.indexOf(
												"translate") && (n = "matrix(1,0,0,1," + r.match(
													/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i =
												0))), i) return ze;
									for (r = (n || "").match(y) || [], we = r.length; --we > -1;) s =
										Number(r[we]), r[we] = (a = s - (s |= 0)) ? (a * h + (0 > a ? -
											.5 : .5) | 0) / h + s : s;
									return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] :
										r
								},
								He = W.getTransform = function(t, i, n, r) {
									if (t._gsTransform && n && !r) return t._gsTransform;
									var s, a, l, h, u, c, f = n ? t._gsTransform || new Me : new Me,
										p = f.scaleX < 0,
										d = 2e-5,
										m = 1e5,
										g = De ? parseFloat(K(t, Oe, i, !1, "0 0 0").split(" ")[2]) || f
										.zOrigin || 0 : 0,
										_ = parseFloat(o.defaultTransformPerspective) || 0;
									if (f.svg = !(!t.getBBox || !Be(t)), f.svg && (Fe(t, K(t, Oe, i, !1,
											"50% 50%") + "", f, t.getAttribute(
											"data-svg-origin")), Pe = o.useSVGTransformAttr || Le), s =
										Xe(t), s !== ze) {
										if (16 === s.length) {
											var v, y, x, b, w, T = s[0],
												S = s[1],
												C = s[2],
												P = s[3],
												k = s[4],
												E = s[5],
												A = s[6],
												O = s[7],
												D = s[8],
												M = s[9],
												j = s[10],
												N = s[12],
												R = s[13],
												L = s[14],
												F = s[11],
												B = Math.atan2(A, j);
											f.zOrigin && (L = -f.zOrigin, N = D * L - s[12], R = M * L -
													s[13], L = j * L + f.zOrigin - s[14]), f.rotationX =
												B * I, B && (b = Math.cos(-B), w = Math.sin(-B), v = k *
													b + D * w, y = E * b + M * w, x = A * b + j * w, D =
													k * -w + D * b, M = E * -w + M * b, j = A * -w + j *
													b, F = O * -w + F * b, k = v, E = y, A = x), B =
												Math.atan2(-C, j), f.rotationY = B * I, B && (b = Math
													.cos(-B), w = Math.sin(-B), v = T * b - D * w, y =
													S * b - M * w, x = C * b - j * w, M = S * w + M * b,
													j = C * w + j * b, F = P * w + F * b, T = v, S = y,
													C = x), B = Math.atan2(S, T), f.rotation = B * I,
												B && (b = Math.cos(-B), w = Math.sin(-B), T = T * b +
													k * w, y = S * b + E * w, E = S * -w + E * b, A =
													C * -w + A * b, S = y), f.rotationX && Math.abs(f
													.rotationX) + Math.abs(f.rotation) > 359.9 && (f
													.rotationX = f.rotation = 0, f.rotationY = 180 - f
													.rotationY), f.scaleX = (Math.sqrt(T * T + S * S) *
													m + .5 | 0) / m, f.scaleY = (Math.sqrt(E * E + M *
													M) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(A * A +
													j * j) * m + .5 | 0) / m, f.rotationX || f
												.rotationY ? f.skewX = 0 : (f.skewX = k || E ? Math
													.atan2(k, E) * I + f.rotation : f.skewX || 0, Math
													.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (
														p ? (f.scaleX *= -1, f.skewX += f.rotation <=
															0 ? 180 : -180, f.rotation += f.rotation <=
															0 ? 180 : -180) : (f.scaleY *= -1, f
															.skewX += f.skewX <= 0 ? 180 : -180))), f
												.perspective = F ? 1 / (0 > F ? -F : F) : 0, f.x = N, f
												.y = R, f.z = L, f.svg && (f.x -= f.xOrigin - (f
														.xOrigin * T - f.yOrigin * k), f.y -= f
													.yOrigin - (f.yOrigin * S - f.xOrigin * E))
										} else if (!De || r || !s.length || f.x !== s[4] || f.y !== s[
											5] || !f.rotationX && !f.rotationY) {
											var z = s.length >= 6,
												X = z ? s[0] : 1,
												H = s[1] || 0,
												Y = s[2] || 0,
												W = z ? s[3] : 1;
											f.x = s[4] || 0, f.y = s[5] || 0, l = Math.sqrt(X * X + H *
													H), h = Math.sqrt(W * W + Y * Y), u = X || H ? Math
												.atan2(H, X) * I : f.rotation || 0, c = Y || W ? Math
												.atan2(Y, W) * I + u : f.skewX || 0, Math.abs(c) > 90 &&
												Math.abs(c) < 270 && (p ? (l *= -1, c += 0 >= u ? 180 :
													-180, u += 0 >= u ? 180 : -180) : (h *= -1, c +=
													0 >= c ? 180 : -180)), f.scaleX = l, f.scaleY = h, f
												.rotation = u, f.skewX = c, De && (f.rotationX = f
													.rotationY = f.z = 0, f.perspective = _, f.scaleZ =
													1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * X + f
													.yOrigin * Y), f.y -= f.yOrigin - (f.xOrigin *
													H + f.yOrigin * W))
										}
										f.zOrigin = g;
										for (a in f) f[a] < d && f[a] > -d && (f[a] = 0)
									}
									return n && (t._gsTransform = f, f.svg && (Pe && t.style[Ee] ? e
										.delayedCall(.001, function() {
											Ue(t.style, Ee)
										}) : !Pe && t.getAttribute("transform") && e
										.delayedCall(.001, function() {
											t.removeAttribute("transform")
										}))), f
								},
								Ye = function(t) {
									var e, i, n = this.data,
										r = -n.rotation * F,
										s = r + n.skewX * F,
										a = 1e5,
										o = (Math.cos(r) * n.scaleX * a | 0) / a,
										l = (Math.sin(r) * n.scaleX * a | 0) / a,
										h = (Math.sin(s) * -n.scaleY * a | 0) / a,
										u = (Math.cos(s) * n.scaleY * a | 0) / a,
										c = this.t.style,
										f = this.t.currentStyle;
									if (f) {
										i = l, l = -h, h = -i, e = f.filter, c.filter = "";
										var p, d, m = this.t.offsetWidth,
											_ = this.t.offsetHeight,
											v = "absolute" !== f.position,
											y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o +
											", M12=" + l + ", M21=" + h + ", M22=" + u,
											x = n.x + m * n.xPercent / 100,
											b = n.y + _ * n.yPercent / 100;
										if (null != n.ox && (p = (n.oxp ? m * n.ox * .01 : n.ox) - m /
												2, d = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2, x += p -
												(p * o + d * l), b += d - (p * h + d * u)), v ? (p = m /
												2, d = _ / 2, y += ", Dx=" + (p - (p * o + d * l) + x) +
												", Dy=" + (d - (p * h + d * u) + b) + ")") : y +=
											", sizingMethod='auto expand')", c.filter = -1 !== e
											.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(
												N, y) : y + " " + e, (0 === t || 1 === t) && 1 === o &&
											0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf(
													"Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(
													RegExp.$1) || -1 === e.indexOf(e.indexOf(
												"Alpha")) && c.removeAttribute("filter")), !v) {
											var w, C, P, k = 8 > g ? 1 : -1;
											for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n
												.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (
													0 > l ? -l : l) * _)) / 2 + x), n.ieOffsetY = Math
												.round((_ - ((0 > u ? -u : u) * _ + (0 > h ? -h : h) *
													m)) / 2 + b), we = 0; 4 > we; we++) C = se[we], w =
												f[C], i = -1 !== w.indexOf("px") ? parseFloat(w) : te(
													this.t, C, parseFloat(w), w.replace(T, "")) || 0,
												P = i !== n[C] ? 2 > we ? -n.ieOffsetX : -n.ieOffsetY :
												2 > we ? p - n.ieOffsetX : d - n.ieOffsetY, c[C] = (n[
													C] = Math.round(i - P * (0 === we || 2 === we ? 1 :
														k))) + "px"
										}
									}
								},
								We = W.set3DTransformRatio = W.setTransformRatio = function(t) {
									var e, i, n, r, s, a, o, l, h, u, c, f, p, m, g, _, v, y, x, b, w,
										T, S, C = this.data,
										P = this.t.style,
										k = C.rotation,
										E = C.rotationX,
										A = C.rotationY,
										O = C.scaleX,
										D = C.scaleY,
										M = C.scaleZ,
										j = C.x,
										N = C.y,
										R = C.z,
										L = C.svg,
										I = C.perspective,
										B = C.force3D;
									if (!(((1 !== t && 0 !== t || "auto" !== B || this.tween
												._totalTime !== this.tween._totalDuration && this
												.tween._totalTime) && B || R || I || A || E || 1 !==
											M) && (!Pe || !L) && De)) return void(k || C.skewX || L ? (
											k *= F, T = C.skewX * F, S = 1e5, e = Math.cos(k) *
											O, r = Math.sin(k) * O, i = Math.sin(k - T) * -D,
											s = Math.cos(k - T) * D, T && "simple" === C
											.skewType && (v = Math.tan(T - C.skewY * F), v =
												Math.sqrt(1 + v * v), i *= v, s *= v, C.skewY &&
												(v = Math.tan(C.skewY * F), v = Math.sqrt(1 +
													v * v), e *= v, r *= v)), L && (j += C
												.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C
												.xOffset, N += C.yOrigin - (C.xOrigin * r + C
													.yOrigin * s) + C.yOffset, Pe && (C
													.xPercent || C.yPercent) && (m = this.t
													.getBBox(), j += .01 * C.xPercent * m.width,
													N += .01 * C.yPercent * m.height), m = 1e-6,
												m > j && j > -m && (j = 0), m > N && N > -m && (
													N = 0)), x = (e * S | 0) / S + "," + (r *
												S | 0) / S + "," + (i * S | 0) / S + "," + (s *
												S | 0) / S + "," + j + "," + N + ")", L && Pe ?
											this.t.setAttribute("transform", "matrix(" + x) : P[
												Ee] = (C.xPercent || C.yPercent ? "translate(" +
												C.xPercent + "%," + C.yPercent + "%) matrix(" :
												"matrix(") + x) : P[Ee] = (C.xPercent || C
											.yPercent ? "translate(" + C.xPercent + "%," + C
											.yPercent + "%) matrix(" : "matrix(") + O +
										",0,0," + D + "," + j + "," + N + ")");
									if (d && (m = 1e-4, m > O && O > -m && (O = M = 2e-5), m > D && D >
											-m && (D = M = 2e-5), !I || C.z || C.rotationX || C
											.rotationY || (I = 0)), k || C.skewX) k *= F, g = e = Math
										.cos(k), _ = r = Math.sin(k), C.skewX && (k -= C.skewX * F, g =
											Math.cos(k), _ = Math.sin(k), "simple" === C.skewType && (
												v = Math.tan((C.skewX - C.skewY) * F), v = Math.sqrt(1 +
													v * v), g *= v, _ *= v, C.skewY && (v = Math.tan(C
														.skewY * F), v = Math.sqrt(1 + v * v), e *= v,
													r *= v))), i = -_, s = g;
									else {
										if (!(A || E || 1 !== M || I || L)) return void(P[Ee] = (C
												.xPercent || C.yPercent ? "translate(" + C
												.xPercent + "%," + C.yPercent +
												"%) translate3d(" : "translate3d(") + j +
											"px," + N + "px," + R + "px)" + (1 !== O || 1 !==
												D ? " scale(" + O + "," + D + ")" : ""));
										e = s = 1, i = r = 0
									}
									h = 1, n = a = o = l = u = c = 0, f = I ? -1 / I : 0, p = C.zOrigin,
										m = 1e-6, b = ",", w = "0", k = A * F, k && (g = Math.cos(k),
											_ = Math.sin(k), o = -_, u = f * -_, n = e * _, a = r * _,
											h = g, f *= g, e *= g, r *= g), k = E * F, k && (g = Math
											.cos(k), _ = Math.sin(k), v = i * g + n * _, y = s * g + a *
											_, l = h * _, c = f * _, n = i * -_ + n * g, a = s * -_ +
											a * g, h *= g, f *= g, i = v, s = y), 1 !== M && (n *= M,
											a *= M, h *= M, f *= M), 1 !== D && (i *= D, s *= D, l *= D,
											c *= D), 1 !== O && (e *= O, r *= O, o *= O, u *= O), (p ||
											L) && (p && (j += n * -p, N += a * -p, R += h * -p + p),
											L && (j += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C
												.xOffset, N += C.yOrigin - (C.xOrigin * r + C.yOrigin *
													s) + C.yOffset), m > j && j > -m && (j = w), m >
											N && N > -m && (N = w), m > R && R > -m && (R = 0)), x = C
										.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C
										.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -
											m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > o &&
											o > -m ? w : o), x += b + (m > u && u > -m ? w : u) + b + (
											m > i && i > -m ? w : i) + b + (m > s && s > -m ? w : s),
										E || A || 1 !== M ? (x += b + (m > l && l > -m ? w : l) + b + (
												m > c && c > -m ? w : c) + b + (m > n && n > -m ? w :
											n), x += b + (m > a && a > -m ? w : a) + b + (m > h && h > -
												m ? w : h) + b + (m > f && f > -m ? w : f) + b) : x +=
										",0,0,0,0,1,0,", x += j + b + N + b + R + b + (I ? 1 + -R / I :
											1) + ")", P[Ee] = x
								};
							u = Me.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u
								.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u
								.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, Se(
									"transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
										parser: function(t, e, i, n, s, a, l) {
											if (n._lastParsedTransform === l) return s;
											n._lastParsedTransform = l;
											var h;
											"function" == typeof l[i] && (h = l[i], l[i] = e);
											var u, c, f, p, d, m, g, y, x, b = t._gsTransform,
												w = t.style,
												T = 1e-6,
												S = ke.length,
												C = l,
												P = {},
												k = "transformOrigin",
												E = He(t, r, !0, C.parseTransform),
												A = C.transform && ("function" == typeof C
													.transform ? C.transform(v, _) : C.transform);
											if (n._transform = E, A && "string" == typeof A && Ee)
												c = H.style, c[Ee] = A, c.display = "block", c
												.position = "absolute", z.body.appendChild(H), u =
												He(H, null, !1), E.svg && (m = E.xOrigin, g = E
													.yOrigin, u.x -= E.xOffset, u.y -= E.yOffset, (C
														.transformOrigin || C.svgOrigin) && (A = {},
														Fe(t, oe(C.transformOrigin), A, C.svgOrigin,
															C.smoothOrigin, !0), m = A.xOrigin, g =
														A.yOrigin, u.x -= A.xOffset - E.xOffset, u
														.y -= A.yOffset - E.yOffset), (m || g) && (
														y = Xe(H, !0), u.x -= m - (m * y[0] + g * y[
															2]), u.y -= g - (m * y[1] + g * y[3]))),
												z.body.removeChild(H), u.perspective || (u
													.perspective = E.perspective), null != C
												.xPercent && (u.xPercent = he(C.xPercent, E
													.xPercent)), null != C.yPercent && (u.yPercent =
													he(C.yPercent, E.yPercent));
											else if ("object" == typeof C) {
												if (u = {
														scaleX: he(null != C.scaleX ? C.scaleX : C
															.scale, E.scaleX),
														scaleY: he(null != C.scaleY ? C.scaleY : C
															.scale, E.scaleY),
														scaleZ: he(C.scaleZ, E.scaleZ),
														x: he(C.x, E.x),
														y: he(C.y, E.y),
														z: he(C.z, E.z),
														xPercent: he(C.xPercent, E.xPercent),
														yPercent: he(C.yPercent, E.yPercent),
														perspective: he(C.transformPerspective, E
															.perspective)
													}, d = C.directionalRotation, null != d)
													if ("object" == typeof d)
														for (c in d) C[c] = d[c];
													else C.rotation = d;
												"string" == typeof C.x && -1 !== C.x.indexOf("%") &&
													(u.x = 0, u.xPercent = he(C.x, E.xPercent)),
													"string" == typeof C.y && -1 !== C.y.indexOf(
														"%") && (u.y = 0, u.yPercent = he(C.y, E
														.yPercent)), u.rotation = ue("rotation" in
														C ? C.rotation : "shortRotation" in C ? C
														.shortRotation + "_short" : "rotationZ" in
														C ? C.rotationZ : E.rotation - E.skewY, E
														.rotation - E.skewY, "rotation", P), De && (
														u.rotationX = ue("rotationX" in C ? C
															.rotationX : "shortRotationX" in C ? C
															.shortRotationX + "_short" : E
															.rotationX || 0, E.rotationX,
															"rotationX", P), u.rotationY = ue(
															"rotationY" in C ? C.rotationY :
															"shortRotationY" in C ? C
															.shortRotationY + "_short" : E
															.rotationY || 0, E.rotationY,
															"rotationY", P)), u.skewX = ue(C.skewX,
														E.skewX - E.skewY), (u.skewY = ue(C.skewY, E
														.skewY)) && (u.skewX += u.skewY, u
														.rotation += u.skewY)
											}
											for (De && null != C.force3D && (E.force3D = C.force3D,
													p = !0), E.skewType = C.skewType || E
												.skewType || o.defaultSkewType, f = E.force3D || E
												.z || E.rotationX || E.rotationY || u.z || u
												.rotationX || u.rotationY || u.perspective, f ||
												null == C.scale || (u.scaleZ = 1); --S > -1;) x =
												ke[S], A = u[x] - E[x], (A > T || -T > A || null !=
													C[x] || null != B[x]) && (p = !0, s = new ye(E,
														x, E[x], A, s), x in P && (s.e = P[x]), s
													.xs0 = 0, s.plugin = a, n._overwriteProps.push(s
														.n));
											return A = C.transformOrigin, E.svg && (A || C
												.svgOrigin) && (m = E.xOffset, g = E.yOffset,
												Fe(t, oe(A), u, C.svgOrigin, C.smoothOrigin),
												s = xe(E, "xOrigin", (b ? E : u).xOrigin, u
													.xOrigin, s, k), s = xe(E, "yOrigin", (b ?
													E : u).yOrigin, u.yOrigin, s, k), (m !== E
													.xOffset || g !== E.yOffset) && (s = xe(E,
													"xOffset", b ? m : E.xOffset, E.xOffset,
													s, k), s = xe(E, "yOffset", b ? g : E
													.yOffset, E.yOffset, s, k)), A = Pe ? null :
												"0px 0px"), (A || De && f && E.zOrigin) && (Ee ?
												(p = !0, x = Oe, A = (A || K(t, x, r, !1,
														"50% 50%")) + "", s = new ye(w, x, 0, 0,
														s, -1, k), s.b = w[x], s.plugin = a,
													De ? (c = E.zOrigin, A = A.split(" "), E
														.zOrigin = (A.length > 2 && (0 === c ||
															"0px" !== A[2]) ? parseFloat(A[
															2]) : c) || 0, s.xs0 = s.e = A[0] +
														" " + (A[1] || "50%") + " 0px", s =
														new ye(E, "zOrigin", 0, 0, s, -1, s.n),
														s.b = c, s.xs0 = s.e = E.zOrigin) : s
													.xs0 = s.e = A) : oe(A + "", E)), p && (n
												._transformType = E.svg && Pe || !f && 3 !==
												this._transformType ? 2 : 3), h && (l[i] = h), s
										},
										prefix: !0
									}), Se("boxShadow", {
									defaultValue: "0px 0px 0px 0px #999",
									prefix: !0,
									color: !0,
									multi: !0,
									keyword: "inset"
								}), Se("borderRadius", {
									defaultValue: "0px",
									parser: function(t, e, i, s, a) {
										e = this.format(e);
										var o, l, h, u, c, f, p, d, m, g, _, v, y, x, b, w,
											T = ["borderTopLeftRadius", "borderTopRightRadius",
												"borderBottomRightRadius",
												"borderBottomLeftRadius"
											],
											S = t.style;
										for (m = parseFloat(t.offsetWidth), g = parseFloat(t
												.offsetHeight), o = e.split(" "), l = 0; l < T
											.length; l++) this.p.indexOf("border") && (T[l] = Z(
												T[l])), c = u = K(t, T[l], r, !1, "0px"), -1 !==
											c.indexOf(" ") && (u = c.split(" "), c = u[0], u =
												u[1]), f = h = o[l], p = parseFloat(c), v = c
											.substr((p + "").length), y = "=" === f.charAt(1),
											y ? (d = parseInt(f.charAt(0) + "1", 10), f = f
												.substr(2), d *= parseFloat(f), _ = f.substr((
													d + "").length - (0 > d ? 1 : 0)) || "") : (
												d = parseFloat(f), _ = f.substr((d + "").length)
												), "" === _ && (_ = n[i] || v), _ !== v && (x =
												te(t, "borderLeft", p, v), b = te(t,
													"borderTop", p, v), "%" === _ ? (c = x / m *
													100 + "%", u = b / g * 100 + "%") : "em" ===
												_ ? (w = te(t, "borderLeft", 1, "em"), c = x /
													w + "em", u = b / w + "em") : (c = x + "px",
													u = b + "px"), y && (f = parseFloat(c) + d +
													_, h = parseFloat(u) + d + _)), a = be(S, T[
												l], c + " " + u, f + " " + h, !1, "0px", a);
										return a
									},
									prefix: !0,
									formatter: ge("0px 0px 0px 0px", !1, !0)
								}), Se(
									"borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
										defaultValue: "0px",
										parser: function(t, e, i, n, s) {
											return be(t.style, i, this.format(K(t, i, r, !1,
												"0px 0px")), this.format(e), !1, "0px", s)
										},
										prefix: !0,
										formatter: ge("0px 0px", !1, !0)
									}), Se("backgroundPosition", {
									defaultValue: "0 0",
									parser: function(t, e, i, n, s, a) {
										var o, l, h, u, c, f, p = "background-position",
											d = r || J(t, null),
											m = this.format((d ? g ? d.getPropertyValue(p +
													"-x") + " " + d.getPropertyValue(p +
													"-y") : d.getPropertyValue(p) : t
												.currentStyle.backgroundPositionX + " " + t
												.currentStyle.backgroundPositionY) || "0 0"),
											_ = this.format(e);
										if (-1 !== m.indexOf("%") != (-1 !== _.indexOf("%")) &&
											_.split(",").length < 2 && (f = K(t,
													"backgroundImage").replace(O, ""), f &&
												"none" !== f)) {
											for (o = m.split(" "), l = _.split(" "), Y
												.setAttribute("src", f), h = 2; --h > -1;) m =
												o[h], u = -1 !== m.indexOf("%"), u !== (-1 !==
													l[h].indexOf("%")) && (c = 0 === h ? t
													.offsetWidth - Y.width : t.offsetHeight - Y
													.height, o[h] = u ? parseFloat(m) / 100 *
													c + "px" : parseFloat(m) / c * 100 + "%");
											m = o.join(" ")
										}
										return this.parseComplex(t.style, m, _, s, a)
									},
									formatter: oe
								}), Se("backgroundSize", {
									defaultValue: "0 0",
									formatter: function(t) {
										return t += "", oe(-1 === t.indexOf(" ") ? t + " " + t :
											t)
									}
								}), Se("perspective", {
									defaultValue: "0px",
									prefix: !0
								}), Se("perspectiveOrigin", {
									defaultValue: "50% 50%",
									prefix: !0
								}), Se("transformStyle", {
									prefix: !0
								}), Se("backfaceVisibility", {
									prefix: !0
								}), Se("userSelect", {
									prefix: !0
								}), Se("margin", {
									parser: _e("marginTop,marginRight,marginBottom,marginLeft")
								}), Se("padding", {
									parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
								}), Se("clip", {
									defaultValue: "rect(0px,0px,0px,0px)",
									parser: function(t, e, i, n, s, a) {
										var o, l, h;
										return 9 > g ? (l = t.currentStyle, h = 8 > g ? " " :
											",", o = "rect(" + l.clipTop + h + l.clipRight +
											h + l.clipBottom + h + l.clipLeft + ")", e =
											this.format(e).split(",").join(h)) : (o = this
											.format(K(t, this.p, r, !1, this.dflt)), e =
											this.format(e)), this.parseComplex(t.style, o,
											e, s, a)
									}
								}), Se("textShadow", {
									defaultValue: "0px 0px 0px #999",
									color: !0,
									multi: !0
								}), Se("autoRound,strictUnits", {
									parser: function(t, e, i, n, r) {
										return r
									}
								}), Se("border", {
									defaultValue: "0px solid #000",
									parser: function(t, e, i, n, s, a) {
										var o = K(t, "borderTopWidth", r, !1, "0px"),
											l = this.format(e).split(" "),
											h = l[0].replace(T, "");
										return "px" !== h && (o = parseFloat(o) / te(t,
											"borderTopWidth", 1, h) + h), this.parseComplex(
											t.style, this.format(o + " " + K(t,
													"borderTopStyle", r, !1, "solid") +
												" " + K(t, "borderTopColor", r, !1, "#000")
												), l.join(" "), s, a)
									},
									color: !0,
									formatter: function(t) {
										var e = t.split(" ");
										return e[0] + " " + (e[1] || "solid") + " " + (t.match(
											me) || ["#000"])[0]
									}
								}), Se("borderWidth", {
									parser: _e(
										"borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
										)
								}), Se("float,cssFloat,styleFloat", {
									parser: function(t, e, i, n, r) {
										var s = t.style,
											a = "cssFloat" in s ? "cssFloat" : "styleFloat";
										return new ye(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
									}
								});
							var qe = function(t) {
								var e, i = this.t,
									n = i.filter || K(this.data, "filter") || "",
									r = this.s + this.c * t | 0;
								100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf(
										"radient(") && -1 === n.indexOf("oader(") ? (i
										.removeAttribute("filter"), e = !K(this.data, "filter")
										) : (i.filter = n.replace(P, ""), e = !0)), e || (this
									.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -
									1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i
										.filter = n + " alpha(opacity=" + r + ")") : i.filter =
									n.replace(S, "opacity=" + r))
							};
							Se("opacity,alpha,autoAlpha", {
								defaultValue: "1",
								parser: function(t, e, i, n, s, a) {
									var o = parseFloat(K(t, "opacity", r, !1, "1")),
										l = t.style,
										h = "autoAlpha" === i;
									return "string" == typeof e && "=" === e.charAt(1) && (
											e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(
												e.substr(2)) + o), h && 1 === o &&
										"hidden" === K(t, "visibility", r) && 0 !== e && (
											o = 0), U ? s = new ye(l, "opacity", o, e - o,
											s) : (s = new ye(l, "opacity", 100 * o, 100 * (
												e - o), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s
											.type = 2, s.b = "alpha(opacity=" + s.s + ")", s
											.e = "alpha(opacity=" + (s.s + s.c) + ")", s
											.data = t, s.plugin = a, s.setRatio = qe), h &&
										(s = new ye(l, "visibility", 0, 0, s, -1, null, !1,
												0, 0 !== o ? "inherit" : "hidden", 0 === e ?
												"hidden" : "inherit"), s.xs0 = "inherit", n
											._overwriteProps.push(s.n), n._overwriteProps
											.push(i)), s
								}
							});
							var Ue = function(t, e) {
									e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e
										.substr(0, 6)) && (e = "-" + e), t.removeProperty(e
										.replace(E, "-$1").toLowerCase())) : t.removeAttribute(
										e))
								},
								$e = function(t) {
									if (this.t._gsClassPT = this, 1 === t || 0 === t) {
										this.t.setAttribute("class", 0 === t ? this.b : this.e);
										for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e
											.v : Ue(i, e.p), e = e._next;
										1 === t && this.t._gsClassPT === this && (this.t._gsClassPT =
											null)
									} else this.t.getAttribute("class") !== this.e && this.t
										.setAttribute("class", this.e)
								};
							Se("className", {
								parser: function(t, e, n, s, a, o, l) {
									var h, u, c, f, p, d = t.getAttribute("class") || "",
										m = t.style.cssText;
									if (a = s._classNamePT = new ye(t, n, 0, 0, a, 2), a
										.setRatio = $e, a.pr = -11, i = !0, a.b = d, u = ie(
											t, r), c = t._gsClassPT) {
										for (f = {}, p = c.data; p;) f[p.p] = 1, p = p
										._next;
										c.setRatio(1)
									}
									return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e :
										d.replace(new RegExp("(?:\\s|^)" + e.substr(2) +
											"(?![\\w-])"), "") + ("+" === e.charAt(0) ?
											" " + e.substr(2) : ""), t.setAttribute("class",
											a.e), h = ne(t, u, ie(t), l, f), t.setAttribute(
											"class", d), a.data = h.firstMPT, t.style
										.cssText = m, a = a.xfirst = s.parse(t, h.difs, a,
											o)
								}
							});
							var Ge = function(t) {
								if ((1 === t || 0 === t) && this.data._totalTime === this.data
									._totalDuration && "isFromStart" !== this.data.data) {
									var e, i, n, r, s, a = this.t.style,
										o = h.transform.parse;
									if ("all" === this.e) a.cssText = "", r = !0;
									else
										for (e = this.e.split(" ").join("").split(","), n = e
											.length; --n > -1;) i = e[n], h[i] && (h[i].parse ===
											o ? r = !0 : i = "transformOrigin" === i ? Oe : h[i]
											.p), Ue(a, i);
									r && (Ue(a, Ee), s = this.t._gsTransform, s && (s.svg && (this.t
											.removeAttribute("data-svg-origin"), this.t
											.removeAttribute("transform")), delete this.t
										._gsTransform))
								}
							};
							for (Se("clearProps", {
									parser: function(t, e, n, r, s) {
										return s = new ye(t, n, 0, 0, s, 2), s.setRatio = Ge, s
											.e = e, s.pr = -10, s.data = r._tween, i = !0, s
									}
								}), u = "bezier,throwProps,physicsProps,physics2D".split(","), we = u
								.length; we--;) Ce(u[we]);
							u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null,
								u._onInitTween = function(t, e, a, l) {
									if (!t.nodeType) return !1;
									this._target = _ = t, this._tween = a, this._vars = e, v = l, c = e
										.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = J(t,
										""), s = this._overwriteProps;
									var u, d, g, y, x, b, w, T, S, P = t.style;
									if (f && "" === P.zIndex && (u = K(t, "zIndex", r), ("auto" === u ||
											"" === u) && this._addLazySet(P, "zIndex", 0)), "string" ==
										typeof e && (y = P.cssText, u = ie(t, r), P.cssText = y + ";" +
											e, u = ne(t, u, ie(t)).difs, !U && C.test(e) && (u.opacity =
												parseFloat(RegExp.$1)), e = u, P.cssText = y), this
										._firstPT = d = e.className ? h.className.parse(t, e.className,
											"className", this, null, null, e) : this.parse(t, e, null),
										this._transformType) {
										for (S = 3 === this._transformType, Ee ? p && (f = !0, "" === P
												.zIndex && (w = K(t, "zIndex", r), ("auto" === w ||
													"" === w) && this._addLazySet(P, "zIndex", 0)), m &&
												this._addLazySet(P, "WebkitBackfaceVisibility", this
													._vars.WebkitBackfaceVisibility || (S ? "visible" :
														"hidden"))) : P.zoom = 1, g = d; g && g._next;)
											g = g._next;
										T = new ye(t, "transform", 0, 0, null, 2), this._linkCSSP(T,
												null, g), T.setRatio = Ee ? We : Ye, T.data = this
											._transform || He(t, r, !0), T.tween = a, T.pr = -1, s.pop()
									}
									if (i) {
										for (; d;) {
											for (b = d._next, g = y; g && g.pr > d.pr;) g = g._next;
											(d._prev = g ? g._prev : x) ? d._prev._next = d: y = d, (d
												._next = g) ? g._prev = d : x = d, d = b
										}
										this._firstPT = y
									}
									return !0
								}, u.parse = function(t, e, i, s) {
									var a, o, l, u, f, p, d, m, g, y, x = t.style;
									for (a in e) p = e[a], "function" == typeof p && (p = p(v, _)), o =
										h[a], o ? i = o.parse(t, p, a, this, i, s, e) : (f = K(t, a,
											r) + "", g = "string" == typeof p, "color" === a ||
											"fill" === a || "stroke" === a || -1 !== a.indexOf(
											"Color") || g && k.test(p) ? (g || (p = pe(p), p = (p
														.length > 3 ? "rgba(" : "rgb(") + p.join(",") +
													")"), i = be(x, a, f, p, !0, "transparent", i, 0,
												s)) : g && L.test(p) ? i = be(x, a, f, p, !0, null, i,
												0, s) : (l = parseFloat(f), d = l || 0 === l ? f.substr(
													(l + "").length) : "", ("" === f || "auto" === f) &&
												("width" === a || "height" === a ? (l = ae(t, a, r), d =
													"px") : "left" === a || "top" === a ? (l = ee(t,
													a, r), d = "px") : (l = "opacity" !== a ? 0 : 1,
													d = "")), y = g && "=" === p.charAt(1), y ? (u =
													parseInt(p.charAt(0) + "1", 10), p = p.substr(2),
													u *= parseFloat(p), m = p.replace(T, "")) : (u =
													parseFloat(p), m = g ? p.replace(T, "") : ""),
												"" === m && (m = a in n ? n[a] : d), p = u || 0 === u ?
												(y ? u + l : u) + m : e[a], d !== m && "" !== m && (u ||
													0 === u) && l && (l = te(t, a, l, d), "%" === m ? (
														l /= te(t, a, 100, "%") / 100, e.strictUnits !==
														!0 && (f = l + "%")) : "em" === m || "rem" ===
													m || "vw" === m || "vh" === m ? l /= te(t, a, 1,
													m) : "px" !== m && (u = te(t, a, u, m), m = "px"),
													y && (u || 0 === u) && (p = u + l + m)), y && (u +=
													l), !l && 0 !== l || !u && 0 !== u ? void 0 !== x[
												a] && (p || p + "" != "NaN" && null != p) ? (i = new ye(
														x, a, u || l || 0, 0, i, -1, a, !1, 0, f, p), i
													.xs0 = "none" !== p || "display" !== a && -1 === a
													.indexOf("Style") ? p : f) : G("invalid " + a +
													" tween value: " + e[a]) : (i = new ye(x, a, l, u -
													l, i, 0, a, c !== !1 && ("px" === m ||
														"zIndex" === a), 0, f, p), i.xs0 = m))), s &&
										i && !i.plugin && (i.plugin = s);
									return i
								}, u.setRatio = function(t) {
									var e, i, n, r = this._firstPT,
										s = 1e-6;
									if (1 !== t || this._tween._time !== this._tween._duration && 0 !==
										this._tween._time)
										if (t || this._tween._time !== this._tween._duration && 0 !==
											this._tween._time || this._tween._rawPrevTime === -1e-6)
											for (; r;) {
												if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s >
													e && e > -s && (e = 0), r.type)
													if (1 === r.type)
														if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r
															.xs1 + r.xn1 + r.xs2;
														else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 +
													r.xn1 + r.xs2 + r.xn2 + r.xs3;
												else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 +
													r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
												else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 +
													r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r
													.xs5;
												else {
													for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
														i += r["xn" + n] + r["xs" + (n + 1)];
													r.t[r.p] = i
												} else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio &&
													r.setRatio(t);
												else r.t[r.p] = e + r.xs0;
												r = r._next
											} else
												for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(
													t), r = r._next;
										else
											for (; r;) {
												if (2 !== r.type)
													if (r.r && -1 !== r.type)
														if (e = Math.round(r.s + r.c), r.type) {
															if (1 === r.type) {
																for (n = r.l, i = r.xs0 + e + r.xs1, n =
																	1; n < r.l; n++) i += r["xn" + n] +
																	r["xs" + (n + 1)];
																r.t[r.p] = i
															}
														} else r.t[r.p] = e + r.xs0;
												else r.t[r.p] = r.e;
												else r.setRatio(t);
												r = r._next
											}
								}, u._enableTransforms = function(t) {
									this._transform = this._transform || He(this._target, r, !0), this
										._transformType = this._transform.svg && Pe || !t && 3 !== this
										._transformType ? 2 : 3
								};
							var Ve = function() {
								this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null,
									!0)
							};
							u._addLazySet = function(t, e, i) {
								var n = this._firstPT = new ye(t, e, 0, 0, this._firstPT, 2);
								n.e = i, n.setRatio = Ve, n.data = this
							}, u._linkCSSP = function(t, e, i, n) {
								return t && (e && (e._prev = t), t._next && (t._next._prev = t
										._prev), t._prev ? t._prev._next = t._next : this
									._firstPT === t && (this._firstPT = t._next, n = !0), i ? i
									._next = t : n || null !== this._firstPT || (this._firstPT =
										t), t._next = e, t._prev = i), t
							}, u._mod = function(t) {
								for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e
									.p] === Math.round && (e.r = 1), e = e._next
							}, u._kill = function(e) {
								var i, n, r, s = e;
								if (e.autoAlpha || e.alpha) {
									s = {};
									for (n in e) s[n] = e[n];
									s.opacity = 1, s.autoAlpha && (s.visibility = 1)
								}
								for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r
										._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) :
										r === this._firstPT && (this._firstPT = i._next), i._next &&
										this._linkCSSP(i._next, i._next._next, r._prev), this
										._classNamePT = null), i = this._firstPT; i;) i.plugin && i
									.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i
										.plugin), i = i._next;
								return t.prototype._kill.call(this, s)
							};
							var Qe = function(t, e, i) {
								var n, r, s, a;
								if (t.slice)
									for (r = t.length; --r > -1;) Qe(t[r], e, i);
								else
									for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], a = s
										.type, s.style && (e.push(ie(s)), i && i.push(s)), 1 !==
										a && 9 !== a && 11 !== a || !s.childNodes.length || Qe(s, e,
											i)
							};
							return o.cascadeTo = function(t, i, n) {
								var r, s, a, o, l = e.to(t, i, n),
									h = [l],
									u = [],
									c = [],
									f = [],
									p = e._internals.reservedProps;
								for (t = l._targets || l.target, Qe(t, u, f), l.render(i, !0, !0),
									Qe(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --
									r > -1;)
									if (s = ne(f[r], u[r], c[r]), s.firstMPT) {
										s = s.difs;
										for (a in n) p[a] && (s[a] = n[a]);
										o = {};
										for (a in s) o[a] = u[r][a];
										h.push(e.fromTo(f[r], i, o, s))
									} return h
							}, t.activate([o]), o
						}, !0),
					function() {
						var t = a._gsDefine.plugin({
								propName: "roundProps",
								version: "1.6.0",
								priority: -1,
								API: 2,
								init: function(t, e, i) {
									return this._tween = i, !0
								}
							}),
							e = function(t) {
								for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
							},
							i = t.prototype;
						i._onInitAllProps = function() {
							for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars
									.roundProps : r.vars.roundProps.split(","), a = s.length,
									o = {}, l = r._propLookup.roundProps; --a > -1;) o[s[a]] = Math
								.round;
							for (a = s.length; --a > -1;)
								for (t = s[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(o) :
									i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i
											.t, t, i.s, i.c), n && (n._prev = i._prev), i
										._prev ? i._prev._next = n : r._firstPT === i && (r
											._firstPT = n), i._next = i._prev = null, r
										._propLookup[t] = l)), i = n;
							return !1
						}, i._add = function(t, e, i, n) {
							this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps
								.push(e)
						}
					}(),
					function() {
						a._gsDefine.plugin({
							propName: "attr",
							API: 2,
							version: "0.6.0",
							init: function(t, e, i, n) {
								var r, s;
								if ("function" != typeof t.setAttribute) return !1;
								for (r in e) s = e[r], "function" == typeof s && (s = s(n,
										t)), this._addTween(t, "setAttribute", t
										.getAttribute(r) + "", s + "", r, !1, r), this
									._overwriteProps.push(r);
								return !0
							}
						})
					}(), a._gsDefine.plugin({
						propName: "directionalRotation",
						version: "0.3.0",
						API: 2,
						init: function(t, e, i, n) {
							"object" != typeof e && (e = {
								rotation: e
							}), this.finals = {};
							var r, s, a, o, l, h, u = e.useRadians === !0 ? 2 * Math.PI : 360,
								c = 1e-6;
							for (r in e) "useRadians" !== r && (o = e[r], "function" ==
								typeof o && (o = o(n, t)), h = (o + "").split("_"), s = h[
								0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r
									.indexOf("set") || "function" != typeof t["get" + r
										.substr(3)] ? r : "get" + r.substr(3)]()), o = this
								.finals[r] = "string" == typeof s && "=" === s.charAt(1) ?
								a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) :
								Number(s) || 0, l = o - a, h.length && (s = h.join("_"), -
									1 !== s.indexOf("short") && (l %= u, l !== l % (u /
										2) && (l = 0 > l ? l + u : l - u)), -1 !== s
									.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) %
									u - (l / u | 0) * u : -1 !== s.indexOf("ccw") && l >
									0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)),
								(l > c || -c > l) && (this._addTween(t, r, a, a + l, r),
									this._overwriteProps.push(r)));
							return !0
						},
						set: function(t) {
							var e;
							if (1 !== t) this._super.setRatio.call(this, t);
							else
								for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e
									.t[e.p] = this.finals[e.p], e = e._next
						}
					})._autoCSS = !0, a._gsDefine("easing.Back", ["easing.Ease"], function(t) {
						var e, i, n, r = a.GreenSockGlobals || a,
							s = r.com.greensock,
							o = 2 * Math.PI,
							l = Math.PI / 2,
							h = s._class,
							u = function(e, i) {
								var n = h("easing." + e, function() {}, !0),
									r = n.prototype = new t;
								return r.constructor = n, r.getRatio = i, n
							},
							c = t.register || function() {},
							f = function(t, e, i, n) {
								var r = h("easing." + t, {
									easeOut: new e,
									easeIn: new i,
									easeInOut: new n
								}, !0);
								return c(r, t), r
							},
							p = function(t, e, i) {
								this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c =
									i.v - e, this.gap = i.t - t)
							},
							d = function(e, i) {
								var n = h("easing." + e, function(t) {
										this._p1 = t || 0 === t ? t : 1.70158, this._p2 =
											1.525 * this._p1
									}, !0),
									r = n.prototype = new t;
								return r.constructor = n, r.getRatio = i, r.config = function(t) {
									return new n(t)
								}, n
							},
							m = f("Back", d("BackOut", function(t) {
								return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
							}), d("BackIn", function(t) {
								return t * t * ((this._p1 + 1) * t - this._p1)
							}), d("BackInOut", function(t) {
								return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t -
									this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) *
									t + this._p2) + 2)
							})),
							g = h("easing.SlowMo", function(t, e, i) {
								e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t =
									1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this
									._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd =
									i === !0
							}, !0),
							_ = g.prototype = new t;
						return _.constructor = g, _.getRatio = function(t) {
								var e = t + (.5 - t) * this._p;
								return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) *
									t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ?
									this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (
										t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this
									._calcEnd ? 1 : e
							}, g.ease = new g(.7, .7), _.config = g.config = function(t, e, i) {
								return new g(t, e, i)
							}, e = h("easing.SteppedEase", function(t) {
								t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
							}, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio =
							function(t) {
								return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >>
									0) * this._p1
							}, _.config = e.config = function(t) {
								return new e(t)
							}, i = h("easing.RoughEase", function(e) {
								e = e || {};
								for (var i, n, r, s, a, o, l = e.taper || "none", h = [], u = 0,
										c = 0 | (e.points || 20), f = c, d = e.randomize !== !1,
										m = e.clamp === !0, g = e.template instanceof t ? e
										.template : null, _ = "number" == typeof e.strength ?
										.4 * e.strength : .4; --f > -1;) i = d ? Math.random() :
									1 / c * f, n = g ? g.getRatio(i) : i, "none" === l ? r = _ :
									"out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r =
									i * i * _ : .5 > i ? (s = 2 * i, r = s * s * .5 * _) : (s =
										2 * (1 - i), r = s * s * .5 * _), d ? n += Math
								.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m &&
									(n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
										x: i,
										y: n
									};
								for (h.sort(function(t, e) {
										return t.x - e.x
									}), o = new p(1, 1, null), f = c; --f > -1;) a = h[f], o =
									new p(a.x, a.y, o);
								this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
							}, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio =
							function(t) {
								var e = this._prev;
								if (t > e.t) {
									for (; e.next && t >= e.t;) e = e.next;
									e = e.prev
								} else
									for (; e.prev && t <= e.t;) e = e.prev;
								return this._prev = e, e.v + (t - e.t) / e.gap * e.c
							}, _.config = function(t) {
								return new i(t)
							}, i.ease = new i, f("Bounce", u("BounceOut", function(t) {
								return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ?
									7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ?
									7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -=
										2.625 / 2.75) * t + .984375
							}), u("BounceIn", function(t) {
								return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 /
									2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) :
									2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t +
										.9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t +
										.984375)
							}), u("BounceInOut", function(t) {
								var e = .5 > t;
								return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ?
									7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 /
										2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -=
										2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 /
										2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
							})), f("Circ", u("CircOut", function(t) {
								return Math.sqrt(1 - (t -= 1) * t)
							}), u("CircIn", function(t) {
								return -(Math.sqrt(1 - t * t) - 1)
							}), u("CircInOut", function(t) {
								return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) :
									.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
							})), n = function(e, i, n) {
								var r = h("easing." + e, function(t, e) {
										this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 >
												t ? t : 1), this._p3 = this._p2 / o * (Math
												.asin(1 / this._p1) || 0), this._p2 = o / this
											._p2
									}, !0),
									s = r.prototype = new t;
								return s.constructor = r, s.getRatio = i, s.config = function(t,
								e) {
									return new r(t, e)
								}, r
							}, f("Elastic", n("ElasticOut", function(t) {
								return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this
									._p3) * this._p2) + 1
							}, .3), n("ElasticIn", function(t) {
								return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((
									t - this._p3) * this._p2))
							}, .3), n("ElasticInOut", function(t) {
								return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (
										t -= 1)) * Math.sin((t - this._p3) * this._p2) :
									this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t -
										this._p3) * this._p2) * .5 + 1
							}, .45)), f("Expo", u("ExpoOut", function(t) {
								return 1 - Math.pow(2, -10 * t)
							}), u("ExpoIn", function(t) {
								return Math.pow(2, 10 * (t - 1)) - .001
							}), u("ExpoInOut", function(t) {
								return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 *
									(2 - Math.pow(2, -10 * (t - 1)))
							})), f("Sine", u("SineOut", function(t) {
								return Math.sin(t * l)
							}), u("SineIn", function(t) {
								return -Math.cos(t * l) + 1
							}), u("SineInOut", function(t) {
								return -.5 * (Math.cos(Math.PI * t) - 1)
							})), h("easing.EaseLookup", {
								find: function(e) {
									return t.map[e]
								}
							}, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e,
								"SteppedEase", "ease,"), m
					}, !0)
			}), a._gsDefine && a._gsQueue.pop()(),
			function(s, a) {
				"use strict";
				var o = {},
					l = s.GreenSockGlobals = s.GreenSockGlobals || s;
				if (!l.TweenLite) {
					var h, u, c, f, p, d = function(t) {
							var e, i = t.split("."),
								n = l;
							for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
							return n
						},
						m = d("com.greensock"),
						g = 1e-10,
						_ = function(t) {
							var e, i = [],
								n = t.length;
							for (e = 0; e !== n; i.push(t[e++]));
							return i
						},
						v = function() {},
						y = function() {
							var t = Object.prototype.toString,
								e = t.call([]);
							return function(i) {
								return null != i && (i instanceof Array || "object" == typeof i && !!i
									.push && t.call(i) === e)
							}
						}(),
						x = {},
						b = function(s, h, u, c) {
							this.sc = x[s] ? x[s].sc : [], x[s] = this, this.gsClass = null, this.func = u;
							var f = [];
							this.check = function(p) {
								for (var m, g, _, v, y, w = h.length, T = w; --w > -1;)(m = x[h[w]] ||
										new b(h[w], [])).gsClass ? (f[w] = m.gsClass, T--) : p && m.sc
									.push(this);
								if (0 === T && u) {
									if (g = ("com.greensock." + s).split("."), _ = g.pop(), v = d(g
											.join("."))[_] = this.gsClass = u.apply(u, f), c)
										if (l[_] = o[_] = v, y = "undefined" != typeof t && t.exports,
											y || 0 || !i(17)) {
											if (y)
												if (s === a) {
													t.exports = o[a] = v;
													for (w in o) v[w] = o[w]
												} else o[a] && (o[a][_] = v)
										} else n = [], r = function() {
											return v
										}.apply(e, n), !(void 0 !== r && (t.exports = r));
									for (w = 0; w < this.sc.length; w++) this.sc[w].check()
								}
							}, this.check(!0)
						},
						w = s._gsDefine = function(t, e, i, n) {
							return new b(t, e, i, n)
						},
						T = m._class = function(t, e, i) {
							return e = e || function() {}, w(t, [], function() {
								return e
							}, i), e
						};
					w.globals = l;
					var S = [0, 0, 1, 1],
						C = T("easing.Ease", function(t, e, i, n) {
							this._func = t, this._type = i || 0, this._power = n || 0, this._params =
								e ? S.concat(e) : S
						}, !0),
						P = C.map = {},
						k = C.register = function(t, e, i, n) {
							for (var r, s, a, o, l = e.split(","), h = l.length, u = (i ||
									"easeIn,easeOut,easeInOut").split(","); --h > -1;)
								for (s = l[h], r = n ? T("easing." + s, null, !0) : m.easing[s] || {}, a = u
									.length; --a > -1;) o = u[a], P[s + "." + o] = P[o + s] = r[o] = t
									.getRatio ? t : t[o] || new t
						};
					for (c = C.prototype, c._calcEnd = !1, c.getRatio = function(t) {
							if (this._func) return this._params[0] = t, this._func.apply(null, this
							._params);
							var e = this._type,
								i = this._power,
								n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
							return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n :
								4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ?
								n / 2 : 1 - n / 2
						}, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = h.length; --u > -
						1;) c = h[u] + ",Power" + u, k(new C(null, null, 1, u), c, "easeOut", !0), k(new C(
						null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), k(new C(null,
						null, 3, u), c, "easeInOut");
					P.linear = m.easing.Linear.easeIn, P.swing = m.easing.Quad.easeInOut;
					var E = T("events.EventDispatcher", function(t) {
						this._listeners = {}, this._eventTarget = t || this
					});
					c = E.prototype, c.addEventListener = function(t, e, i, n, r) {
						r = r || 0;
						var s, a, o = this._listeners[t],
							l = 0;
						for (this !== f || p || f.wake(), null == o && (this._listeners[t] = o = []),
							a = o.length; --a > -1;) s = o[a], s.c === e && s.s === i ? o.splice(a, 1) :
							0 === l && s.pr < r && (l = a + 1);
						o.splice(l, 0, {
							c: e,
							s: i,
							up: n,
							pr: r
						})
					}, c.removeEventListener = function(t, e) {
						var i, n = this._listeners[t];
						if (n)
							for (i = n.length; --i > -1;)
								if (n[i].c === e) return void n.splice(i, 1)
					}, c.dispatchEvent = function(t) {
						var e, i, n, r = this._listeners[t];
						if (r)
							for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -
								1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
								type: t,
								target: i
							}) : n.c.call(n.s || i))
					};
					var A = s.requestAnimationFrame,
						O = s.cancelAnimationFrame,
						D = Date.now || function() {
							return (new Date).getTime()
						},
						M = D();
					for (h = ["ms", "moz", "webkit", "o"], u = h.length; --u > -1 && !A;) A = s[h[u] +
						"RequestAnimationFrame"], O = s[h[u] + "CancelAnimationFrame"] || s[h[u] +
						"CancelRequestAnimationFrame"];
					T("Ticker", function(t, e) {
						var i, n, r, s, a, o = this,
							l = D(),
							h = e !== !1 && A ? "auto" : !1,
							u = 500,
							c = 33,
							d = "tick",
							m = function(t) {
								var e, h, f = D() - M;
								f > u && (l += f - c), M += f, o.time = (M - l) / 1e3, e = o.time -
									a, (!i || e > 0 || t === !0) && (o.frame++, a += e + (e >= s ?
										.004 : s - e), h = !0), t !== !0 && (r = n(m)), h && o
									.dispatchEvent(d)
							};
						E.call(o), o.time = o.frame = 0, o.tick = function() {
							m(!0)
						}, o.lagSmoothing = function(t, e) {
							u = t || 1 / g, c = Math.min(e, u, 0)
						}, o.sleep = function() {
							null != r && (h && O ? O(r) : clearTimeout(r), n = v, r = null,
								o === f && (p = !1))
						}, o.wake = function(t) {
							null !== r ? o.sleep() : t ? l += -M + (M = D()) : o.frame > 10 && (
								M = D() - u + 5), n = 0 === i ? v : h && A ? A : function(
							t) {
								return setTimeout(t, 1e3 * (a - o.time) + 1 | 0)
							}, o === f && (p = !0), m(2)
						}, o.fps = function(t) {
							return arguments.length ? (i = t, s = 1 / (i || 60), a = this.time +
								s, void o.wake()) : i
						}, o.useRAF = function(t) {
							return arguments.length ? (o.sleep(), h = t, void o.fps(i)) : h
						}, o.fps(t), setTimeout(function() {
							"auto" === h && o.frame < 5 && "hidden" !== document
								.visibilityState && o.useRAF(!1)
						}, 1500)
					}), c = m.Ticker.prototype = new m.events.EventDispatcher, c.constructor = m.Ticker;
					var j = T("core.Animation", function(t, e) {
						if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0,
							this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active =
							e.immediateRender === !0, this.data = e.data, this._reversed = e
							.reversed === !0, J) {
							p || f.wake();
							var i = this.vars.useFrames ? Z : J;
							i.add(this, i._time), this.vars.paused && this.paused(!0)
						}
					});
					f = j.ticker = new m.Ticker, c = j.prototype, c._dirty = c._gc = c._initted = c
						._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last =
						c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
					var N = function() {
						p && D() - M > 2e3 && f.wake(), setTimeout(N, 2e3)
					};
					N(), c.play = function(t, e) {
						return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
					}, c.pause = function(t, e) {
						return null != t && this.seek(t, e), this.paused(!0)
					}, c.resume = function(t, e) {
						return null != t && this.seek(t, e), this.paused(!1)
					}, c.seek = function(t, e) {
						return this.totalTime(Number(t), e !== !1)
					}, c.restart = function(t, e) {
						return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !
							0)
					}, c.reverse = function(t, e) {
						return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0)
							.paused(!1)
					}, c.render = function() {}, c.invalidate = function() {
						return this._time = this._totalTime = 0, this._initted = this._gc = !1, this
							._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
					}, c.isActive = function() {
						var t, e = this._timeline,
							i = this._startTime;
						return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >=
							i && t < i + this.totalDuration() / this._timeScale
					}, c._enabled = function(t, e) {
						return p || f.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 &&
							(t && !this.timeline ? this._timeline.add(this, this._startTime - this
								._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
					}, c._kill = function() {
						return this._enabled(!1, !1)
					}, c.kill = function(t, e) {
						return this._kill(t, e), this
					}, c._uncache = function(t) {
						for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
						return this
					}, c._swapSelfInParams = function(t) {
						for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] =
							this);
						return i
					}, c._callback = function(t) {
						var e = this.vars,
							i = e[t],
							n = e[t + "Params"],
							r = e[t + "Scope"] || e.callbackScope || this,
							s = n ? n.length : 0;
						switch (s) {
							case 0:
								i.call(r);
								break;
							case 1:
								i.call(r, n[0]);
								break;
							case 2:
								i.call(r, n[0], n[1]);
								break;
							default:
								i.apply(r, n)
						}
					}, c.eventCallback = function(t, e, i, n) {
						if ("on" === (t || "").substr(0, 2)) {
							var r = this.vars;
							if (1 === arguments.length) return r[t];
							null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(i) && -1 !== i
								.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t +
									"Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
						}
						return this
					}, c.delay = function(t) {
						return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(
							this._startTime + t - this._delay), this._delay = t, this) : this._delay
					}, c.duration = function(t) {
						return arguments.length ? (this._duration = this._totalDuration = t, this
							._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 &&
							this._time < this._duration && 0 !== t && this.totalTime(this
								._totalTime * (t / this._duration), !0), this) : (this._dirty = !1,
							this._duration)
					}, c.totalDuration = function(t) {
						return this._dirty = !1, arguments.length ? this.duration(t) : this
							._totalDuration
					}, c.time = function(t, e) {
						return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(
							t > this._duration ? this._duration : t, e)) : this._time
					}, c.totalTime = function(t, e, i) {
						if (p || f.wake(), !arguments.length) return this._totalTime;
						if (this._timeline) {
							if (0 > t && !i && (t += this.totalDuration()), this._timeline
								.smoothChildTiming) {
								this._dirty && this.totalDuration();
								var n = this._totalDuration,
									r = this._timeline;
								if (t > n && !i && (t = n), this._startTime = (this._paused ? this
										._pauseTime : r._time) - (this._reversed ? n - t : t) / this
									._timeScale, r._dirty || this._uncache(!1), r._timeline)
									for (; r._timeline;) r._timeline._time !== (r._startTime + r
											._totalTime) / r._timeScale && r.totalTime(r._totalTime, !
										0), r = r._timeline
							}
							this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this
								._duration) && (B.length && te(), this.render(t, e, !1), B.length &&
								te())
						}
						return this
					}, c.progress = c.totalProgress = function(t, e) {
						var i = this.duration();
						return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this
							.ratio
					}, c.startTime = function(t) {
						return arguments.length ? (t !== this._startTime && (this._startTime = t, this
							.timeline && this.timeline._sortChildren && this.timeline.add(this,
								t - this._delay)), this) : this._startTime
					}, c.endTime = function(t) {
						return this._startTime + (0 != t ? this.totalDuration() : this.duration()) /
							this._timeScale
					}, c.timeScale = function(t) {
						if (!arguments.length) return this._timeScale;
						if (t = t || g, this._timeline && this._timeline.smoothChildTiming) {
							var e = this._pauseTime,
								i = e || 0 === e ? e : this._timeline.totalTime();
							this._startTime = i - (i - this._startTime) * this._timeScale / t
						}
						return this._timeScale = t, this._uncache(!1)
					}, c.reversed = function(t) {
						return arguments.length ? (t != this._reversed && (this._reversed = t, this
								.totalTime(this._timeline && !this._timeline.smoothChildTiming ?
									this.totalDuration() - this._totalTime : this._totalTime, !0)),
							this) : this._reversed
					}, c.paused = function(t) {
						if (!arguments.length) return this._paused;
						var e, i, n = this._timeline;
						return t != this._paused && n && (p || t || f.wake(), e = n.rawTime(), i = e -
							this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i,
								this._uncache(!1)), this._pauseTime = t ? e : null, this._paused =
							t, this._active = this.isActive(), !t && 0 !== i && this._initted &&
							this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e -
								this._startTime) / this._timeScale, this.render(e, e === this
								._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
					};
					var R = T("core.SimpleTimeline", function(t) {
						j.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
					});
					c = R.prototype = new j, c.constructor = R, c.kill()._gc = !1, c._first = c._last = c
						._recent = null, c._sortChildren = !1, c.add = c.insert = function(t, e) {
							var i, n;
							if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t
								._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t
									._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t
								.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last,
								this._sortChildren)
								for (n = t._startTime; i && i._startTime > n;) i = i._prev;
							return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this
									._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i,
								this._recent = t, this._timeline && this._uncache(!0), this
						}, c._remove = function(t, e) {
							return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev
								._next = t._next : this._first === t && (this._first = t._next), t
								._next ? t._next._prev = t._prev : this._last === t && (this._last = t
									._prev), t._next = t._prev = t.timeline = null, t === this
								._recent && (this._recent = this._last), this._timeline && this
								._uncache(!0)), this
						}, c.render = function(t, e, i) {
							var n, r = this._first;
							for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r
								._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render(
								(r._dirty ? r.totalDuration() : r._totalDuration) - (t - r
									._startTime) * r._timeScale, e, i) : r.render((t - r
								._startTime) * r._timeScale, e, i)), r = n
						}, c.rawTime = function() {
							return p || f.wake(), this._totalTime
						};
					var L = T("TweenLite", function(t, e, i) {
							if (j.call(this, e, i), this.render = L.prototype.render, null == t)
							throw "Cannot tween a null target.";
							this.target = t = "string" != typeof t ? t : L.selector(t) || t;
							var n, r, a, o = t.jquery || t.length && t !== s && t[0] && (t[0] === s ||
									t[0].nodeType && t[0].style && !t.nodeType),
								l = this.vars.overwrite;
							if (this._overwrite = l = null == l ? Q[L.defaultOverwrite] : "number" ==
								typeof l ? l >> 0 : Q[l], (o || t instanceof Array || t.push && y(t)) &&
								"number" != typeof t[0])
								for (this._targets = a = _(t), this._propLookup = [], this
									._siblings = [], n = 0; n < a.length; n++) r = a[n], r ? "string" !=
									typeof r ? r.length && r !== s && r[0] && (r[0] === s || r[0]
										.nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1),
										this._targets = a = a.concat(_(r))) : (this._siblings[n] = ee(r,
										this, !1), 1 === l && this._siblings[n].length > 1 && ne(r,
										this, null, 1, this._siblings[n])) : (r = a[n--] = L.selector(
										r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--,
										1);
							else this._propLookup = {}, this._siblings = ee(t, this, !1), 1 === l &&
								this._siblings.length > 1 && ne(t, this, null, 1, this._siblings);
							(this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars
								.immediateRender !== !1) && (this._time = -g, this.render(Math.min(0, -
								this._delay)))
						}, !0),
						F = function(t) {
							return t && t.length && t !== s && t[0] && (t[0] === s || t[0].nodeType && t[0]
								.style && !t.nodeType)
						},
						I = function(t, e) {
							var i, n = {};
							for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i &&
								"width" !== i && "height" !== i && "className" !== i && "border" !== i || !(
									!U[i] || U[i] && U[i]._autoCSS) || (n[i] = t[i], delete t[i]);
							t.css = n
						};
					c = L.prototype = new j, c.constructor = L, c.kill()._gc = !1, c.ratio = 0, c._firstPT =
						c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c
						._lazy = !1, L.version = "1.19.0", L.defaultEase = c._ease = new C(null, null, 1,
						1), L.defaultOverwrite = "auto", L.ticker = f, L.autoSleep = 120, L.lagSmoothing =
						function(t, e) {
							f.lagSmoothing(t, e)
						}, L.selector = s.$ || s.jQuery || function(t) {
							var e = s.$ || s.jQuery;
							return e ? (L.selector = e, e(t)) : "undefined" == typeof document ? t :
								document.querySelectorAll ? document.querySelectorAll(t) : document
								.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
						};
					var B = [],
						z = {},
						X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
						H = function(t) {
							for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") :
								this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : n > e &&
								e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] =
								e, i = i._next
						},
						Y = function(t, e, i, n) {
							var r, s, a, o, l, h, u, c = [t, e],
								f = 0,
								p = "",
								d = 0;
							for (c.start = t, i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(
								X) || [], s = e.match(X) || [], n && (n._next = null, n.blob = 1, c
									._firstPT = c._applyPT = n), l = s.length, o = 0; l > o; o++) u = s[o],
								h = e.substr(f, e.indexOf(u, f) - f), p += h || !o ? h : ",", f += h.length,
								d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === r[o] || r
								.length <= o ? p += u : (p && (c.push(p), p = ""), a = parseFloat(r[o]), c
									.push(a), c._firstPT = {
										_next: c._firstPT,
										t: c,
										p: c.length - 1,
										s: a,
										c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) *
											parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
										f: 0,
										m: d && 4 > d ? Math.round : 0
									}), f += u.length;
							return p += e.substr(f), p && c.push(p), c.setRatio = H, c
						},
						W = function(t, e, i, n, r, s, a, o, l) {
							"function" == typeof n && (n = n(l || 0, t));
							var h, u, c = "get" === i ? t[e] : i,
								f = typeof t[e],
								p = "string" == typeof n && "=" === n.charAt(1),
								d = {
									t: t,
									p: e,
									s: c,
									f: "function" === f,
									pg: 0,
									n: r || e,
									m: s ? "function" == typeof s ? s : Math.round : 0,
									pr: 0,
									c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) :
										parseFloat(n) - c || 0
								};
							return "number" !== f && ("function" === f && "get" === i && (u = e.indexOf(
											"set") || "function" != typeof t["get" + e.substr(3)] ? e :
										"get" + e.substr(3), d.s = c = a ? t[u](a) : t[u]()), "string" ==
									typeof c && (a || isNaN(c)) ? (d.fp = a, h = Y(c, n, o || L
										.defaultStringFilter, d), d = {
										t: h,
										p: "setRatio",
										s: 0,
										c: 1,
										f: 2,
										pg: 0,
										n: r || e,
										pr: 0,
										m: 0
									}) : p || (d.s = parseFloat(c), d.c = parseFloat(n) - d.s || 0)), d.c ?
								((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) :
								void 0
						},
						q = L._internals = {
							isArray: y,
							isSelector: F,
							lazyTweens: B,
							blobDif: Y
						},
						U = L._plugins = {},
						$ = q.tweenLookup = {},
						G = 0,
						V = q.reservedProps = {
							ease: 1,
							delay: 1,
							overwrite: 1,
							onComplete: 1,
							onCompleteParams: 1,
							onCompleteScope: 1,
							useFrames: 1,
							runBackwards: 1,
							startAt: 1,
							onUpdate: 1,
							onUpdateParams: 1,
							onUpdateScope: 1,
							onStart: 1,
							onStartParams: 1,
							onStartScope: 1,
							onReverseComplete: 1,
							onReverseCompleteParams: 1,
							onReverseCompleteScope: 1,
							onRepeat: 1,
							onRepeatParams: 1,
							onRepeatScope: 1,
							easeParams: 1,
							yoyo: 1,
							immediateRender: 1,
							repeat: 1,
							repeatDelay: 1,
							data: 1,
							paused: 1,
							reversed: 1,
							autoCSS: 1,
							lazy: 1,
							onOverwrite: 1,
							callbackScope: 1,
							stringFilter: 1,
							id: 1
						},
						Q = {
							none: 0,
							all: 1,
							auto: 2,
							concurrent: 3,
							allOnStart: 4,
							preexisting: 5,
							"true": 1,
							"false": 0
						},
						Z = j._rootFramesTimeline = new R,
						J = j._rootTimeline = new R,
						K = 30,
						te = q.lazyRender = function() {
							var t, e = B.length;
							for (z = {}; --e > -1;) t = B[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t
								._lazy[1], !0), t._lazy = !1);
							B.length = 0
						};
					J._startTime = f.time, Z._startTime = f.frame, J._active = Z._active = !0, setTimeout(
						te, 1), j._updateRoot = L.render = function() {
						var t, e, i;
						if (B.length && te(), J.render((f.time - J._startTime) * J._timeScale, !1, !1),
							Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), B.length && te(),
							f.frame >= K) {
							K = f.frame + (parseInt(L.autoSleep, 10) || 120);
							for (i in $) {
								for (e = $[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t,
									1);
								0 === e.length && delete $[i]
							}
							if (i = J._first, (!i || i._paused) && L.autoSleep && !Z._first && 1 === f
								._listeners.tick.length) {
								for (; i && i._paused;) i = i._next;
								i || f.sleep()
							}
						}
					}, f.addEventListener("tick", j._updateRoot);
					var ee = function(t, e, i) {
							var n, r, s = t._gsTweenID;
							if ($[s || (t._gsTweenID = s = "t" + G++)] || ($[s] = {
									target: t,
									tweens: []
								}), e && (n = $[s].tweens, n[r = n.length] = e, i))
								for (; --r > -1;) n[r] === e && n.splice(r, 1);
							return $[s].tweens
						},
						ie = function(t, e, i, n) {
							var r, s, a = t.vars.onOverwrite;
							return a && (r = a(t, e, i, n)), a = L.onOverwrite, a && (s = a(t, e, i, n)),
								r !== !1 && s !== !1
						},
						ne = function(t, e, i, n, r) {
							var s, a, o, l;
							if (1 === n || n >= 4) {
								for (l = r.length, s = 0; l > s; s++)
									if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
									else if (5 === n) break;
								return a
							}
							var h, u = e._startTime + g,
								c = [],
								f = 0,
								p = 0 === e._duration;
							for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o
								._timeline !== e._timeline ? (h = h || re(e, 0, p), 0 === re(o, h, p) &&
									(c[f++] = o)) : o._startTime <= u && o._startTime + o
								.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o
									._startTime <= 2e-10 || (c[f++] = o)));
							for (s = f; --s > -1;)
								if (o = c[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o
									._firstPT && o._initted) {
									if (2 !== n && !ie(o, e)) continue;
									o._enabled(!1, !1) && (a = !0)
								} return a
						},
						re = function(t, e, i) {
							for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
								if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
								n = n._timeline
							}
							return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * g > s - e ?
								g : (s += t.totalDuration() / t._timeScale / r) > e + g ? 0 : s - e - g
						};
					c._init = function() {
						var t, e, i, n, r, s, a = this.vars,
							o = this._overwrittenProps,
							l = this._duration,
							h = !!a.immediateRender,
							u = a.ease;
						if (a.startAt) {
							this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
								r = {};
							for (n in a.startAt) r[n] = a.startAt[n];
							if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && a.lazy !== !1, r
								.startAt = r.delay = null, this._startAt = L.to(this.target, 0, r), h)
								if (this._time > 0) this._startAt = null;
								else if (0 !== l) return
						} else if (a.runBackwards && 0 !== l)
							if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this
								._startAt = null;
							else {
								0 !== this._time && (h = !1), i = {};
								for (n in a) V[n] && "autoCSS" !== n || (i[n] = a[n]);
								if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !
									1, i.immediateRender = h, this._startAt = L.to(this.target, 0, i), h
									) {
									if (0 === this._time) return
								} else this._startAt._init(), this._startAt._enabled(!1), this.vars
									.immediateRender && (this._startAt = null)
							} if (this._ease = u = u ? u instanceof C ? u : "function" == typeof u ?
							new C(u, a.easeParams) : P[u] || L.defaultEase : L.defaultEase, a
							.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u,
								a.easeParams)), this._easeType = this._ease._type, this._easePower =
							this._ease._power, this._firstPT = null, this._targets)
							for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this
								._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[
								t] : null, t) && (e = !0);
						else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
						if (e && L._onPluginEvent("_onInitAllProps", this), o && (this._firstPT ||
								"function" != typeof this.target && this._enabled(!1, !1)), a
							.runBackwards)
							for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
						this._onUpdate = a.onUpdate, this._initted = !0
					}, c._initProps = function(t, e, i, n, r) {
						var a, o, l, h, u, c;
						if (null == t) return !1;
						z[t._gsTweenID] && te(), this.vars.css || t.style && t !== s && t.nodeType && U
							.css && this.vars.autoCSS !== !1 && I(this.vars, t);
						for (a in this.vars)
							if (c = this.vars[a], V[a]) c && (c instanceof Array || c.push && y(c)) && -
								1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this
									._swapSelfInParams(c, this));
							else if (U[a] && (h = new U[a])._onInitTween(t, this.vars[a], this, r)) {
							for (this._firstPT = u = {
									_next: this._firstPT,
									t: h,
									p: "setRatio",
									s: 0,
									c: 1,
									f: 1,
									n: a,
									pg: 1,
									pr: h._priority,
									m: 0
								}, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] =
								this._firstPT;
							(h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h
								._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next
								._prev = u)
						} else e[a] = W.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter,
							r);
						return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : this
							._overwrite > 1 && this._firstPT && i.length > 1 && ne(t, this, e, this
								._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, r)) : (
								this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars
									.lazy && !this._duration) && (z[t._gsTweenID] = !0), l)
					}, c.render = function(t, e, i) {
						var n, r, s, a, o = this._time,
							l = this._duration,
							h = this._rawPrevTime;
						if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease
							._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r =
								"onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (
								this._initted || !this.vars.lazy || i) && (this._startTime === this
								._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h ===
									g && "isPause" !== this.data) && h !== t && (i = !0, h > g && (r =
									"onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ?
								t : g);
						else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease
							._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (
								r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !
								1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (
										h !== g || "isPause" !== this.data) && (i = !0), this
									._rawPrevTime = a = !e || t || h === t ? t : g)), this._initted || (
								i = !0);
						else if (this._totalTime = this._time = t, this._easeType) {
							var u = t / l,
								c = this._easeType,
								f = this._easePower;
							(1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 ===
								f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 ===
								f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u :
								.5 > t / l ? u / 2 : 1 - u / 2
						} else this.ratio = this._ease.getRatio(t / l);
						if (this._time !== o || i) {
							if (!this._initted) {
								if (this._init(), !this._initted || this._gc) return;
								if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration ||
										this.vars.lazy && !this._duration)) return this._time = this
									._totalTime = o, this._rawPrevTime = h, B.push(this), void(this
										._lazy = [t, e]);
								this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) :
									n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 ===
										this._time ? 0 : 1))
							}
							for (this._lazy !== !1 && (this._lazy = !1), this._active || !this
								._paused && this._time !== o && t >= 0 && (this._active = !0), 0 ===
								o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (
									r = "_dummyGS")), this.vars.onStart && (0 !== this._time ||
									0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;
								) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio +
								s.s, s = s._next;
							this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt
								.render(t, e, i), e || (this._time !== o || n || i) && this
								._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this
								._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(
									t, e, i), n && (this._timeline.autoRemoveChildren && this
									._enabled(!1, !1), this._active = !1), !e && this.vars[r] &&
								this._callback(r), 0 === l && this._rawPrevTime === g && a !== g &&
								(this._rawPrevTime = 0))
						}
					}, c._kill = function(t, e, i) {
						if ("all" === t && (t = null), null == t && (null == e || e === this.target))
							return this._lazy = !1, this._enabled(!1, !1);
						e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) ||
							e;
						var n, r, s, a, o, l, h, u, c, f = i && this._time && i._startTime === this
							._startTime && this._timeline === i._timeline;
						if ((y(e) || F(e)) && "number" != typeof e[0])
							for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
						else {
							if (this._targets) {
								for (n = this._targets.length; --n > -1;)
									if (e === this._targets[n]) {
										o = this._propLookup[n] || {}, this._overwrittenProps = this
											._overwrittenProps || [], r = this._overwrittenProps[n] =
											t ? this._overwrittenProps[n] || {} : "all";
										break
									}
							} else {
								if (e !== this.target) return !1;
								o = this._propLookup, r = this._overwrittenProps = t ? this
									._overwrittenProps || {} : "all"
							}
							if (o) {
								if (h = t || o, u = t !== r && "all" !== r && t !== o && ("object" !=
										typeof t || !t._tempKill), i && (L.onOverwrite || this.vars
										.onOverwrite)) {
									for (s in h) o[s] && (c || (c = []), c.push(s));
									if ((c || !t) && !ie(this, i, e, c)) return !1
								}
								for (s in h)(a = o[s]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
										l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t
									._overwriteProps.length || (a._prev ? a._prev._next = a._next :
										a === this._firstPT && (this._firstPT = a._next), a._next &&
										(a._next._prev = a._prev), a._next = a._prev = null),
									delete o[s]), u && (r[s] = 1);
								!this._firstPT && this._initted && this._enabled(!1, !1)
							}
						}
						return l
					}, c.invalidate = function() {
						return this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this),
							this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate =
							null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this
							._propLookup = this._targets ? {} : [], j.prototype.invalidate.call(this),
							this.vars.immediateRender && (this._time = -g, this.render(Math.min(0, -this
								._delay))), this
					}, c._enabled = function(t, e) {
						if (p || f.wake(), t && this._gc) {
							var i, n = this._targets;
							if (n)
								for (i = n.length; --i > -1;) this._siblings[i] = ee(n[i], this, !0);
							else this._siblings = ee(this.target, this, !0)
						}
						return j.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled &&
							this._firstPT ? L._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
					}, L.to = function(t, e, i) {
						return new L(t, e, i)
					}, L.from = function(t, e, i) {
						return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t,
							e, i)
					}, L.fromTo = function(t, e, i, n) {
						return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i
							.immediateRender, new L(t, e, n)
					}, L.delayedCall = function(t, e, i, n, r) {
						return new L(e, 0, {
							delay: t,
							onComplete: e,
							onCompleteParams: i,
							callbackScope: n,
							onReverseComplete: e,
							onReverseCompleteParams: i,
							immediateRender: !1,
							lazy: !1,
							useFrames: r,
							overwrite: 0
						})
					}, L.set = function(t, e) {
						return new L(t, 0, e)
					}, L.getTweensOf = function(t, e) {
						if (null == t) return [];
						t = "string" != typeof t ? t : L.selector(t) || t;
						var i, n, r, s;
						if ((y(t) || F(t)) && "number" != typeof t[0]) {
							for (i = t.length, n = []; --i > -1;) n = n.concat(L.getTweensOf(t[i], e));
							for (i = n.length; --i > -1;)
								for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
						} else
							for (n = ee(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i]
								.isActive()) && n.splice(i, 1);
						return n
					}, L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
						"object" == typeof e && (i = e, e = !1);
						for (var n = L.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
					};
					var se = T("plugins.TweenPlugin", function(t, e) {
						this._overwriteProps = (t || "").split(","), this._propName = this
							._overwriteProps[0], this._priority = e || 0, this._super = se.prototype
					}, !0);
					if (c = se.prototype, se.version = "1.19.0", se.API = 2, c._firstPT = null, c
						._addTween = W, c.setRatio = H, c._kill = function(t) {
							var e, i = this._overwriteProps,
								n = this._firstPT;
							if (null != t[this._propName]) this._overwriteProps = [];
							else
								for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
							for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n
								._prev._next = n._next, n._prev = null) : this._firstPT === n && (
								this._firstPT = n._next)), n = n._next;
							return !1
						}, c._mod = c._roundProps = function(t) {
							for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n
								.split(this._propName + "_").join("")], e && "function" == typeof e && (
								2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
						}, L._onPluginEvent = function(t, e) {
							var i, n, r, s, a, o = e._firstPT;
							if ("_onInitAllProps" === t) {
								for (; o;) {
									for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
									(o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ?
										n._prev = o : s = o, o = a
								}
								o = e._firstPT = r
							}
							for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o
								._next;
							return i
						}, se.activate = function(t) {
							for (var e = t.length; --e > -1;) t[e].API === se.API && (U[(new t[e])
								._propName] = t[e]);
							return !0
						}, w.plugin = function(t) {
							if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
							var e, i = t.propName,
								n = t.priority || 0,
								r = t.overwriteProps,
								s = {
									init: "_onInitTween",
									set: "setRatio",
									kill: "_kill",
									round: "_mod",
									mod: "_mod",
									initAll: "_onInitAllProps"
								},
								a = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
									function() {
										se.call(this, i, n), this._overwriteProps = r || []
									}, t.global === !0),
								o = a.prototype = new se(i);
							o.constructor = a, a.API = t.API;
							for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
							return a.version = t.version, se.activate([a]), a
						}, h = s._gsQueue) {
						for (u = 0; u < h.length; u++) h[u]();
						for (c in x) x[c].func || s.console.log("GSAP encountered missing dependency: " + c)
					}
					p = !1
				}
			}("undefined" != typeof t && t.exports && "undefined" != typeof s ? s : this || window,
				"TweenMax")
	}).call(e, function() {
		return this
	}())
}, function() {
	window.createjs = window.createjs || {}, createjs.extend = function(t, e) {
			"use strict";

			function i() {
				this.constructor = t
			}
			return i.prototype = e.prototype, t.prototype = new i
		}, this.createjs = this.createjs || {}, createjs.promote = function(t, e) {
			"use strict";
			var i = t.prototype,
				n = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
			if (n) {
				i[(e += "_") + "constructor"] = n.constructor;
				for (var r in n) i.hasOwnProperty(r) && "function" == typeof n[r] && (i[e + r] = n[r])
			}
			return t
		}, this.createjs = this.createjs || {}, createjs.indexOf = function(t, e) {
			"use strict";
			for (var i = 0, n = t.length; n > i; i++)
				if (e === t[i]) return i;
			return -1
		}, this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i) {
				this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this
					.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this
					.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1,
					this.removed = !1
			}
			var e = t.prototype;
			e.preventDefault = function() {
				this.defaultPrevented = this.cancelable && !0
			}, e.stopPropagation = function() {
				this.propagationStopped = !0
			}, e.stopImmediatePropagation = function() {
				this.immediatePropagationStopped = this.propagationStopped = !0
			}, e.remove = function() {
				this.removed = !0
			}, e.clone = function() {
				return new t(this.type, this.bubbles, this.cancelable)
			}, e.set = function(t) {
				for (var e in t) this[e] = t[e];
				return this
			}, e.toString = function() {
				return "[Event (type=" + this.type + ")]"
			}, createjs.Event = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				this._listeners = null, this._captureListeners = null
			}
			var e = t.prototype;
			t.initialize = function(t) {
				t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e
					.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t
					.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t
					._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
			}, e.addEventListener = function(t, e, i) {
				var n;
				n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this
					._listeners || {};
				var r = n[t];
				return r && this.removeEventListener(t, e, i), r = n[t], r ? r.push(e) : n[t] = [e], e
			}, e.on = function(t, e, i, n, r, s) {
				return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this
					.addEventListener(t, function(t) {
						e.call(i, t, r), n && t.remove()
					}, s)
			}, e.removeEventListener = function(t, e, i) {
				var n = i ? this._captureListeners : this._listeners;
				if (n) {
					var r = n[t];
					if (r)
						for (var s = 0, a = r.length; a > s; s++)
							if (r[s] == e) {
								1 == a ? delete n[t] : r.splice(s, 1);
								break
							}
				}
			}, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
				t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this
					._captureListeners[t]) : this._listeners = this._captureListeners = null
			}, e.dispatchEvent = function(t, e, i) {
				if ("string" == typeof t) {
					var n = this._listeners;
					if (!(e || n && n[t])) return !0;
					t = new createjs.Event(t, e, i)
				} else t.target && t.clone && (t = t.clone());
				try {
					t.target = this
				} catch (r) {}
				if (t.bubbles && this.parent) {
					for (var s = this, a = [s]; s.parent;) a.push(s = s.parent);
					var o, l = a.length;
					for (o = l - 1; o >= 0 && !t.propagationStopped; o--) a[o]._dispatchEvent(t, 1 + (0 ==
						o));
					for (o = 1; l > o && !t.propagationStopped; o++) a[o]._dispatchEvent(t, 3)
				} else this._dispatchEvent(t, 2);
				return !t.defaultPrevented
			}, e.hasEventListener = function(t) {
				var e = this._listeners,
					i = this._captureListeners;
				return !!(e && e[t] || i && i[t])
			}, e.willTrigger = function(t) {
				for (var e = this; e;) {
					if (e.hasEventListener(t)) return !0;
					e = e.parent
				}
				return !1
			}, e.toString = function() {
				return "[EventDispatcher]"
			}, e._dispatchEvent = function(t, e) {
				var i, n = 1 == e ? this._captureListeners : this._listeners;
				if (t && n) {
					var r = n[t.type];
					if (!r || !(i = r.length)) return;
					try {
						t.currentTarget = this
					} catch (s) {}
					try {
						t.eventPhase = e
					} catch (s) {}
					t.removed = !1, r = r.slice();
					for (var a = 0; i > a && !t.immediatePropagationStopped; a++) {
						var o = r[a];
						o.handleEvent ? o.handleEvent(t) : o(t), t.removed && (this.off(t.type, o, 1 == e),
							t.removed = !1)
					}
				}
			}, createjs.EventDispatcher = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				throw "Ticker cannot be instantiated."
			}
			t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null,
				t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t
				.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher
				.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function() {
					return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
				}, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t
				._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t
				._raf = !0, t.setInterval = function(e) {
					t._interval = e, t._inited && t._setupTick()
				}, t.getInterval = function() {
					return t._interval
				}, t.setFPS = function(e) {
					t.setInterval(1e3 / e)
				}, t.getFPS = function() {
					return 1e3 / t._interval
				};
			try {
				Object.defineProperties(t, {
					interval: {
						get: t.getInterval,
						set: t.setInterval
					},
					framerate: {
						get: t.getFPS,
						set: t.setFPS
					}
				})
			} catch (e) {
				console.log(e)
			}
			t.init = function() {
				t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(),
					t._times.push(t._lastTime = 0), t.interval = t._interval)
			}, t.reset = function() {
				if (t._raf) {
					var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window
						.mozCancelAnimationFrame || window.oCancelAnimationFrame || window
						.msCancelAnimationFrame;
					e && e(t._timerId)
				} else clearTimeout(t._timerId);
				t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t
					._startTime = t._lastTime = t._ticks = 0, t._inited = !1
			}, t.getMeasuredTickTime = function(e) {
				var i = 0,
					n = t._tickTimes;
				if (!n || n.length < 1) return -1;
				e = Math.min(n.length, e || 0 | t.getFPS());
				for (var r = 0; e > r; r++) i += n[r];
				return i / e
			}, t.getMeasuredFPS = function(e) {
				var i = t._times;
				return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | t.getFPS()), 1e3 / ((
					i[0] - i[e]) / e))
			}, t.setPaused = function(e) {
				t.paused = e
			}, t.getPaused = function() {
				return t.paused
			}, t.getTime = function(e) {
				return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
			}, t.getEventTime = function(e) {
				return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
			}, t.getTicks = function(e) {
				return t._ticks - (e ? t._pausedTicks : 0)
			}, t._handleSynch = function() {
				t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) &&
					t._tick()
			}, t._handleRAF = function() {
				t._timerId = null, t._setupTick(), t._tick()
			}, t._handleTimeout = function() {
				t._timerId = null, t._setupTick(), t._tick()
			}, t._setupTick = function() {
				if (null == t._timerId) {
					var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
					if (e == t.RAF_SYNCHED || e == t.RAF) {
						var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
							.mozRequestAnimationFrame || window.oRequestAnimationFrame || window
							.msRequestAnimationFrame;
						if (i) return t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch), void(t
							._raf = !0)
					}
					t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
				}
			}, t._tick = function() {
				var e = t.paused,
					i = t._getTime(),
					n = i - t._lastTime;
				if (t._lastTime = i, t._ticks++, e && (t._pausedTicks++, t._pausedTime += n), t
					.hasEventListener("tick")) {
					var r = new createjs.Event("tick"),
						s = t.maxDelta;
					r.delta = s && n > s ? s : n, r.paused = e, r.time = i, r.runTime = i - t._pausedTime, t
						.dispatchEvent(r)
				}
				for (t._tickTimes.unshift(t._getTime() - i); t._tickTimes.length > 100;) t._tickTimes.pop();
				for (t._times.unshift(i); t._times.length > 100;) t._times.pop()
			};
			var i = window.performance && (performance.now || performance.mozNow || performance.msNow ||
				performance.oNow || performance.webkitNow);
			t._getTime = function() {
				return (i && i.call(performance) || (new Date).getTime()) - t._startTime
			}, createjs.Ticker = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				throw "UID cannot be instantiated"
			}
			t._nextID = 0, t.get = function() {
				return t._nextID++
			}, createjs.UID = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n, r, s, a, o, l, h, u) {
				this.Event_constructor(t, e, i), this.stageX = n, this.stageY = r, this.rawX = null == l ? n :
					l, this.rawY = null == h ? r : h, this.nativeEvent = s, this.pointerID = a, this.primary = !
					!o, this.relatedTarget = u
			}
			var e = createjs.extend(t, createjs.Event);
			e._get_localX = function() {
				return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
			}, e._get_localY = function() {
				return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
			}, e._get_isTouch = function() {
				return -1 !== this.pointerID
			};
			try {
				Object.defineProperties(e, {
					localX: {
						get: e._get_localX
					},
					localY: {
						get: e._get_localY
					},
					isTouch: {
						get: e._get_isTouch
					}
				})
			} catch (i) {}
			e.clone = function() {
				return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this
					.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
			}, e.toString = function() {
				return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this
					.stageY + ")]"
			}, createjs.MouseEvent = createjs.promote(t, "Event")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n, r, s) {
				this.setValues(t, e, i, n, r, s)
			}
			var e = t.prototype;
			t.DEG_TO_RAD = Math.PI / 180, t.identity = null, e.setValues = function(t, e, i, n, r, s) {
				return this.a = null == t ? 1 : t, this.b = e || 0, this.c = i || 0, this.d = null == n ?
					1 : n, this.tx = r || 0, this.ty = s || 0, this
			}, e.append = function(t, e, i, n, r, s) {
				var a = this.a,
					o = this.b,
					l = this.c,
					h = this.d;
				return (1 != t || 0 != e || 0 != i || 1 != n) && (this.a = a * t + l * e, this.b = o * t +
						h * e, this.c = a * i + l * n, this.d = o * i + h * n), this.tx = a * r + l * s +
					this.tx, this.ty = o * r + h * s + this.ty, this
			}, e.prepend = function(t, e, i, n, r, s) {
				var a = this.a,
					o = this.c,
					l = this.tx;
				return this.a = t * a + i * this.b, this.b = e * a + n * this.b, this.c = t * o + i * this
					.d, this.d = e * o + n * this.d, this.tx = t * l + i * this.ty + r, this.ty = e * l +
					n * this.ty + s, this
			}, e.appendMatrix = function(t) {
				return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
			}, e.prependMatrix = function(t) {
				return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
			}, e.appendTransform = function(e, i, n, r, s, a, o, l, h) {
				if (s % 360) var u = s * t.DEG_TO_RAD,
					c = Math.cos(u),
					f = Math.sin(u);
				else c = 1, f = 0;
				return a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.append(Math.cos(o), Math.sin(o),
						-Math.sin(a), Math.cos(a), e, i), this.append(c * n, f * n, -f * r, c * r, 0,
					0)) : this.append(c * n, f * n, -f * r, c * r, e, i), (l || h) && (this.tx -= l *
					this.a + h * this.c, this.ty -= l * this.b + h * this.d), this
			}, e.prependTransform = function(e, i, n, r, s, a, o, l, h) {
				if (s % 360) var u = s * t.DEG_TO_RAD,
					c = Math.cos(u),
					f = Math.sin(u);
				else c = 1, f = 0;
				return (l || h) && (this.tx -= l, this.ty -= h), a || o ? (a *= t.DEG_TO_RAD, o *= t
					.DEG_TO_RAD, this.prepend(c * n, f * n, -f * r, c * r, 0, 0), this.prepend(Math.cos(
						o), Math.sin(o), -Math.sin(a), Math.cos(a), e, i)) : this.prepend(c * n, f * n,
					-f * r, c * r, e, i), this
			}, e.rotate = function(e) {
				e *= t.DEG_TO_RAD;
				var i = Math.cos(e),
					n = Math.sin(e),
					r = this.a,
					s = this.b;
				return this.a = r * i + this.c * n, this.b = s * i + this.d * n, this.c = -r * n + this.c *
					i, this.d = -s * n + this.d * i, this
			}, e.skew = function(e, i) {
				return e *= t.DEG_TO_RAD, i *= t.DEG_TO_RAD, this.append(Math.cos(i), Math.sin(i), -Math
					.sin(e), Math.cos(e), 0, 0), this
			}, e.scale = function(t, e) {
				return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this
			}, e.translate = function(t, e) {
				return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this
			}, e.identity = function() {
				return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
			}, e.invert = function() {
				var t = this.a,
					e = this.b,
					i = this.c,
					n = this.d,
					r = this.tx,
					s = t * n - e * i;
				return this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this
					.ty - n * r) / s, this.ty = -(t * this.ty - e * r) / s, this
			}, e.isIdentity = function() {
				return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c &&
					1 === this.d
			}, e.equals = function(t) {
				return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this
					.c === t.c && this.d === t.d
			}, e.transformPoint = function(t, e, i) {
				return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d +
					this.ty, i
			}, e.decompose = function(e) {
				null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a +
					this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
				var i = Math.atan2(-this.c, this.d),
					n = Math.atan2(this.b, this.a),
					r = Math.abs(1 - i / n);
				return 1e-5 > r ? (e.rotation = n / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e
					.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = i /
					t.DEG_TO_RAD, e.skewY = n / t.DEG_TO_RAD), e
			}, e.copy = function(t) {
				return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
			}, e.clone = function() {
				return new t(this.a, this.b, this.c, this.d, this.tx, this.ty)
			}, e.toString = function() {
				return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d +
					" tx=" + this.tx + " ty=" + this.ty + ")]"
			}, t.identity = new t, createjs.Matrix2D = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n, r) {
				this.setValues(t, e, i, n, r)
			}
			var e = t.prototype;
			e.setValues = function(t, e, i, n, r) {
				return this.visible = null == t ? !0 : !!t, this.alpha = null == e ? 1 : e, this.shadow = i,
					this.compositeOperation = n, this.matrix = r || this.matrix && this.matrix.identity() ||
					new createjs.Matrix2D, this
			}, e.append = function(t, e, i, n, r) {
				return this.alpha *= e, this.shadow = i || this.shadow, this.compositeOperation = n || this
					.compositeOperation, this.visible = this.visible && t, r && this.matrix.appendMatrix(r),
					this
			}, e.prepend = function(t, e, i, n, r) {
				return this.alpha *= e, this.shadow = this.shadow || i, this.compositeOperation = this
					.compositeOperation || n, this.visible = this.visible && t, r && this.matrix
					.prependMatrix(r), this
			}, e.identity = function() {
				return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this
					.matrix.identity(), this
			}, e.clone = function() {
				return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix
					.clone())
			}, createjs.DisplayProps = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e) {
				this.setValues(t, e)
			}
			var e = t.prototype;
			e.setValues = function(t, e) {
				return this.x = t || 0, this.y = e || 0, this
			}, e.copy = function(t) {
				return this.x = t.x, this.y = t.y, this
			}, e.clone = function() {
				return new t(this.x, this.y)
			}, e.toString = function() {
				return "[Point (x=" + this.x + " y=" + this.y + ")]"
			}, createjs.Point = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n) {
				this.setValues(t, e, i, n)
			}
			var e = t.prototype;
			e.setValues = function(t, e, i, n) {
				return this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0, this
			}, e.extend = function(t, e, i, n) {
				return i = i || 0, n = n || 0, t + i > this.x + this.width && (this.width = t + i - this.x),
					e + n > this.y + this.height && (this.height = e + n - this.y), t < this.x && (this
						.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this
						.y = e), this
			}, e.pad = function(t, e, i, n) {
				return this.x -= e, this.y -= t, this.width += e + n, this.height += t + i, this
			}, e.copy = function(t) {
				return this.setValues(t.x, t.y, t.width, t.height)
			}, e.contains = function(t, e, i, n) {
				return i = i || 0, n = n || 0, t >= this.x && t + i <= this.x + this.width && e >= this.y &&
					e + n <= this.y + this.height
			}, e.union = function(t) {
				return this.clone().extend(t.x, t.y, t.width, t.height)
			}, e.intersection = function(e) {
				var i = e.x,
					n = e.y,
					r = i + e.width,
					s = n + e.height;
				return this.x > i && (i = this.x), this.y > n && (n = this.y), this.x + this.width < r && (
						r = this.x + this.width), this.y + this.height < s && (s = this.y + this.height),
					i >= r || n >= s ? null : new t(i, n, r - i, s - n)
			}, e.intersects = function(t) {
				return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this
					.height && this.y <= t.y + t.height
			}, e.isEmpty = function() {
				return this.width <= 0 || this.height <= 0
			}, e.clone = function() {
				return new t(this.x, this.y, this.width, this.height)
			}, e.toString = function() {
				return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" +
					this.height + ")]"
			}, createjs.Rectangle = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n, r, s, a) {
				t.addEventListener && (this.target = t, this.overLabel = null == i ? "over" : i, this.outLabel =
					null == e ? "out" : e, this.downLabel = null == n ? "down" : n, this.play = r, this
					._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this
					.enabled = !0, this.handleEvent({}), s && (a && (s.actionsEnabled = !1, s.gotoAndStop &&
						s.gotoAndStop(a)), t.hitArea = s))
			}
			var e = t.prototype;
			e.setEnabled = function(t) {
				if (t != this._enabled) {
					var e = this.target;
					this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e
						.addEventListener("rollout", this), e.addEventListener("mousedown", this), e
						.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e
							._reset = this._reset)) : (e.cursor = null, e.removeEventListener(
							"rollover", this), e.removeEventListener("rollout", this), e
						.removeEventListener("mousedown", this), e.removeEventListener("pressup", this),
						e.__reset && (e._reset = e.__reset, delete e.__reset))
				}
			}, e.getEnabled = function() {
				return this._enabled
			};
			try {
				Object.defineProperties(e, {
					enabled: {
						get: e.getEnabled,
						set: e.setEnabled
					}
				})
			} catch (i) {}
			e.toString = function() {
				return "[ButtonHelper]"
			}, e.handleEvent = function(t) {
				var e, i = this.target,
					n = t.type;
				"mousedown" == n ? (this._isPressed = !0, e = this.downLabel) : "pressup" == n ? (this
						._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" ==
					n ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this
						._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? i
					.gotoAndPlay && i.gotoAndPlay(e) : i.gotoAndStop && i.gotoAndStop(e)
			}, e._reset = function() {
				var t = this.paused;
				this.__reset(), this.paused = t
			}, createjs.ButtonHelper = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n) {
				this.color = t || "black", this.offsetX = e || 0, this.offsetY = i || 0, this.blur = n || 0
			}
			var e = t.prototype;
			t.identity = new t("transparent", 0, 0, 0), e.toString = function() {
				return "[Shadow]"
			}, e.clone = function() {
				return new t(this.color, this.offsetX, this.offsetY, this.blur)
			}, createjs.Shadow = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations =
					null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this
					._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY =
					0, this._spacing = 0, this._margin = 0, this._parseData(t)
			}
			var e = createjs.extend(t, createjs.EventDispatcher);
			e.getAnimations = function() {
				return this._animations.slice()
			};
			try {
				Object.defineProperties(e, {
					animations: {
						get: e.getAnimations
					}
				})
			} catch (i) {}
			e.getNumFrames = function(t) {
				if (null == t) return this._frames ? this._frames.length : this._numFrames || 0;
				var e = this._data[t];
				return null == e ? 0 : e.frames.length
			}, e.getAnimation = function(t) {
				return this._data[t]
			}, e.getFrame = function(t) {
				var e;
				return this._frames && (e = this._frames[t]) ? e : null
			}, e.getFrameBounds = function(t, e) {
				var i = this.getFrame(t);
				return i ? (e || new createjs.Rectangle).setValues(-i.regX, -i.regY, i.rect.width, i.rect
					.height) : null
			}, e.toString = function() {
				return "[SpriteSheet]"
			}, e.clone = function() {
				throw "SpriteSheet cannot be cloned."
			}, e._parseData = function(t) {
				var e, i, n, r;
				if (null != t) {
					if (this.framerate = t.framerate || 0, t.images && (i = t.images.length) > 0)
						for (r = this._images = [], e = 0; i > e; e++) {
							var s = t.images[e];
							if ("string" == typeof s) {
								var a = s;
								s = document.createElement("img"), s.src = a
							}
							r.push(s), s.getContext || s.naturalWidth || (this._loadCount++, this
								.complete = !1,
								function(t, e) {
									s.onload = function() {
										t._handleImageLoad(e)
									}
								}(this, a),
								function(t, e) {
									s.onerror = function() {
										t._handleImageError(e)
									}
								}(this, a))
						}
					if (null == t.frames);
					else if (Array.isArray(t.frames))
						for (this._frames = [], r = t.frames, e = 0, i = r.length; i > e; e++) {
							var o = r[e];
							this._frames.push({
								image: this._images[o[4] ? o[4] : 0],
								rect: new createjs.Rectangle(o[0], o[1], o[2], o[3]),
								regX: o[5] || 0,
								regY: o[6] || 0
							})
						} else n = t.frames, this._frameWidth = n.width, this._frameHeight = n.height, this
							._regX = n.regX || 0, this._regY = n.regY || 0, this._spacing = n.spacing || 0,
							this._margin = n.margin || 0, this._numFrames = n.count, 0 == this._loadCount &&
							this._calculateFrames();
					if (this._animations = [], null != (n = t.animations)) {
						this._data = {};
						var l;
						for (l in n) {
							var h = {
									name: l
								},
								u = n[l];
							if ("number" == typeof u) r = h.frames = [u];
							else if (Array.isArray(u))
								if (1 == u.length) h.frames = [u[0]];
								else
									for (h.speed = u[3], h.next = u[2], r = h.frames = [], e = u[0]; e <= u[
											1]; e++) r.push(e);
							else {
								h.speed = u.speed, h.next = u.next;
								var c = u.frames;
								r = h.frames = "number" == typeof c ? [c] : c.slice(0)
							}(h.next === !0 || void 0 === h.next) && (h.next = l), (h.next === !1 || r
								.length < 2 && h.next == l) && (h.next = null), h.speed || (h.speed = 1),
								this._animations.push(l), this._data[l] = h
						}
					}
				}
			}, e._handleImageLoad = function() {
				0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent(
					"complete"))
			}, e._handleImageError = function(t) {
				var e = new createjs.Event("error");
				e.src = t, this.dispatchEvent(e), 0 == --this._loadCount && this.dispatchEvent("complete")
			}, e._calculateFrames = function() {
				if (!this._frames && 0 != this._frameWidth) {
					this._frames = [];
					var t = this._numFrames || 1e5,
						e = 0,
						i = this._frameWidth,
						n = this._frameHeight,
						r = this._spacing,
						s = this._margin;
					t: for (var a = 0, o = this._images; a < o.length; a++)
						for (var l = o[a], h = l.width, u = l.height, c = s; u - s - n >= c;) {
							for (var f = s; h - s - i >= f;) {
								if (e >= t) break t;
								e++, this._frames.push({
									image: l,
									rect: new createjs.Rectangle(f, c, i, n),
									regX: this._regX,
									regY: this._regY
								}), f += i + r
							}
							c += n + r
						}
					this._numFrames = e
				}
			}, createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null,
					this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this
					._fill = null, this._instructions = [], this._commitIndex = 0, this
				._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
			}
			var e = t.prototype,
				i = t;
			t.getRGB = function(t, e, i, n) {
				return null != t && null == i && (n = e, i = 255 & t, e = t >> 8 & 255, t = t >> 16 & 255),
					null == n ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i +
					"," + n + ")"
			}, t.getHSL = function(t, e, i, n) {
				return null == n ? "hsl(" + t % 360 + "," + e + "%," + i + "%)" : "hsla(" + t % 360 + "," +
					e + "%," + i + "%," + n + ")"
			}, t.BASE_64 = {
				A: 0,
				B: 1,
				C: 2,
				D: 3,
				E: 4,
				F: 5,
				G: 6,
				H: 7,
				I: 8,
				J: 9,
				K: 10,
				L: 11,
				M: 12,
				N: 13,
				O: 14,
				P: 15,
				Q: 16,
				R: 17,
				S: 18,
				T: 19,
				U: 20,
				V: 21,
				W: 22,
				X: 23,
				Y: 24,
				Z: 25,
				a: 26,
				b: 27,
				c: 28,
				d: 29,
				e: 30,
				f: 31,
				g: 32,
				h: 33,
				i: 34,
				j: 35,
				k: 36,
				l: 37,
				m: 38,
				n: 39,
				o: 40,
				p: 41,
				q: 42,
				r: 43,
				s: 44,
				t: 45,
				u: 46,
				v: 47,
				w: 48,
				x: 49,
				y: 50,
				z: 51,
				0: 52,
				1: 53,
				2: 54,
				3: 55,
				4: 56,
				5: 57,
				6: 58,
				7: 59,
				8: 60,
				9: 61,
				"+": 62,
				"/": 63
			}, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round",
				"bevel"
			];
			var n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			n.getContext && (t._ctx = n.getContext("2d"), n.width = n.height = 1), e.getInstructions =
			function() {
				return this._updateInstructions(), this._instructions
			};
			try {
				Object.defineProperties(e, {
					instructions: {
						get: e.getInstructions
					}
				})
			} catch (r) {}
			e.isEmpty = function() {
					return !(this._instructions.length || this._activeInstructions.length)
				}, e.draw = function(t, e) {
					this._updateInstructions();
					for (var i = this._instructions, n = this._storeIndex, r = i.length; r > n; n++) i[n].exec(
						t, e)
				}, e.drawAsPath = function(t) {
					this._updateInstructions();
					for (var e, i = this._instructions, n = this._storeIndex, r = i.length; r > n; n++)(e = i[
						n]).path !== !1 && e.exec(t)
				}, e.moveTo = function(t, e) {
					return this.append(new i.MoveTo(t, e), !0)
				}, e.lineTo = function(t, e) {
					return this.append(new i.LineTo(t, e))
				}, e.arcTo = function(t, e, n, r, s) {
					return this.append(new i.ArcTo(t, e, n, r, s))
				}, e.arc = function(t, e, n, r, s, a) {
					return this.append(new i.Arc(t, e, n, r, s, a))
				}, e.quadraticCurveTo = function(t, e, n, r) {
					return this.append(new i.QuadraticCurveTo(t, e, n, r))
				}, e.bezierCurveTo = function(t, e, n, r, s, a) {
					return this.append(new i.BezierCurveTo(t, e, n, r, s, a))
				}, e.rect = function(t, e, n, r) {
					return this.append(new i.Rect(t, e, n, r))
				}, e.closePath = function() {
					return this._activeInstructions.length ? this.append(new i.ClosePath) : this
				}, e.clear = function() {
					return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0,
						this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this
						._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1,
						this
				}, e.beginFill = function(t) {
					return this._setFill(t ? new i.Fill(t) : null)
				}, e.beginLinearGradientFill = function(t, e, n, r, s, a) {
					return this._setFill((new i.Fill).linearGradient(t, e, n, r, s, a))
				}, e.beginRadialGradientFill = function(t, e, n, r, s, a, o, l) {
					return this._setFill((new i.Fill).radialGradient(t, e, n, r, s, a, o, l))
				}, e.beginBitmapFill = function(t, e, n) {
					return this._setFill(new i.Fill(null, n).bitmap(t, e))
				}, e.endFill = function() {
					return this.beginFill()
				}, e.setStrokeStyle = function(t, e, n, r, s) {
					return this._updateInstructions(!0), this._strokeStyle = this.command = new i.StrokeStyle(t,
							e, n, r, s), this._stroke && (this._stroke.ignoreScale = s), this
						._strokeIgnoreScale = s, this
				}, e.setStrokeDash = function(t, e) {
					return this._updateInstructions(!0), this._strokeDash = this.command = new i.StrokeDash(t,
						e), this
				}, e.beginStroke = function(t) {
					return this._setStroke(t ? new i.Stroke(t) : null)
				}, e.beginLinearGradientStroke = function(t, e, n, r, s, a) {
					return this._setStroke((new i.Stroke).linearGradient(t, e, n, r, s, a))
				}, e.beginRadialGradientStroke = function(t, e, n, r, s, a, o, l) {
					return this._setStroke((new i.Stroke).radialGradient(t, e, n, r, s, a, o, l))
				}, e.beginBitmapStroke = function(t, e) {
					return this._setStroke((new i.Stroke).bitmap(t, e))
				}, e.endStroke = function() {
					return this.beginStroke()
				}, e.curveTo = e.quadraticCurveTo, e.drawRect = e.rect, e.drawRoundRect = function(t, e, i, n,
					r) {
					return this.drawRoundRectComplex(t, e, i, n, r, r, r, r)
				}, e.drawRoundRectComplex = function(t, e, n, r, s, a, o, l) {
					return this.append(new i.RoundRect(t, e, n, r, s, a, o, l))
				}, e.drawCircle = function(t, e, n) {
					return this.append(new i.Circle(t, e, n))
				}, e.drawEllipse = function(t, e, n, r) {
					return this.append(new i.Ellipse(t, e, n, r))
				}, e.drawPolyStar = function(t, e, n, r, s, a) {
					return this.append(new i.PolyStar(t, e, n, r, s, a))
				}, e.append = function(t, e) {
					return this._activeInstructions.push(t), this.command = t, e || (this._dirty = !0), this
				}, e.decodePath = function(e) {
					for (var i = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this
							.closePath
						], n = [2, 2, 4, 6, 0], r = 0, s = e.length, a = [], o = 0, l = 0, h = t.BASE_64; s >
						r;) {
						var u = e.charAt(r),
							c = h[u],
							f = c >> 3,
							p = i[f];
						if (!p || 3 & c) throw "bad path data (@" + r + "): " + u;
						var d = n[f];
						f || (o = l = 0), a.length = 0, r++;
						for (var m = (c >> 2 & 1) + 2, g = 0; d > g; g++) {
							var _ = h[e.charAt(r)],
								v = _ >> 5 ? -1 : 1;
							_ = (31 & _) << 6 | h[e.charAt(r + 1)], 3 == m && (_ = _ << 6 | h[e.charAt(r + 2)]),
								_ = v * _ / 10, g % 2 ? o = _ += o : l = _ += l, a[g] = _, r += m
						}
						p.apply(this, a)
					}
					return this
				}, e.store = function() {
					return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
				}, e.unstore = function() {
					return this._storeIndex = 0, this
				}, e.clone = function() {
					var e = new t;
					return e.command = this.command, e._stroke = this._stroke, e._strokeStyle = this
						._strokeStyle, e._strokeDash = this._strokeDash, e._strokeIgnoreScale = this
						._strokeIgnoreScale, e._fill = this._fill, e._instructions = this._instructions.slice(),
						e._commitIndex = this._commitIndex, e._activeInstructions = this._activeInstructions
						.slice(), e._dirty = this._dirty, e._storeIndex = this._storeIndex, e
				}, e.toString = function() {
					return "[Graphics]"
				}, e.mt = e.moveTo, e.lt = e.lineTo, e.at = e.arcTo, e.bt = e.bezierCurveTo, e.qt = e
				.quadraticCurveTo, e.a = e.arc, e.r = e.rect, e.cp = e.closePath, e.c = e.clear, e.f = e
				.beginFill, e.lf = e.beginLinearGradientFill, e.rf = e.beginRadialGradientFill, e.bf = e
				.beginBitmapFill, e.ef = e.endFill, e.ss = e.setStrokeStyle, e.sd = e.setStrokeDash, e.s = e
				.beginStroke, e.ls = e.beginLinearGradientStroke, e.rs = e.beginRadialGradientStroke, e.bs = e
				.beginBitmapStroke, e.es = e.endStroke, e.dr = e.drawRect, e.rr = e.drawRoundRect, e.rc = e
				.drawRoundRectComplex, e.dc = e.drawCircle, e.de = e.drawEllipse, e.dp = e.drawPolyStar, e.p = e
				.decodePath, e._updateInstructions = function(e) {
					var i = this._instructions,
						n = this._activeInstructions,
						r = this._commitIndex;
					if (this._dirty && n.length) {
						i.length = r, i.push(t.beginCmd);
						var s = n.length,
							a = i.length;
						i.length = a + s;
						for (var o = 0; s > o; o++) i[o + a] = n[o];
						this._fill && i.push(this._fill), this._stroke && (this._strokeDash !== this
							._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, i.push(this
								._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this
								._oldStrokeStyle = this._strokeStyle, i.push(this._strokeStyle)), i.push(
								this._stroke)), this._dirty = !1
					}
					e && (n.length = 0, this._commitIndex = i.length)
				}, e._setFill = function(t) {
					return this._updateInstructions(!0), this.command = this._fill = t, this
				}, e._setStroke = function(t) {
					return this._updateInstructions(!0), (this.command = this._stroke = t) && (t.ignoreScale =
						this._strokeIgnoreScale), this
				}, (i.LineTo = function(t, e) {
					this.x = t, this.y = e
				}).prototype.exec = function(t) {
					t.lineTo(this.x, this.y)
				}, (i.MoveTo = function(t, e) {
					this.x = t, this.y = e
				}).prototype.exec = function(t) {
					t.moveTo(this.x, this.y)
				}, (i.ArcTo = function(t, e, i, n, r) {
					this.x1 = t, this.y1 = e, this.x2 = i, this.y2 = n, this.radius = r
				}).prototype.exec = function(t) {
					t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
				}, (i.Arc = function(t, e, i, n, r, s) {
					this.x = t, this.y = e, this.radius = i, this.startAngle = n, this.endAngle = r, this
						.anticlockwise = !!s
				}).prototype.exec = function(t) {
					t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
				}, (i.QuadraticCurveTo = function(t, e, i, n) {
					this.cpx = t, this.cpy = e, this.x = i, this.y = n
				}).prototype.exec = function(t) {
					t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
				}, (i.BezierCurveTo = function(t, e, i, n, r, s) {
					this.cp1x = t, this.cp1y = e, this.cp2x = i, this.cp2y = n, this.x = r, this.y = s
				}).prototype.exec = function(t) {
					t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
				}, (i.Rect = function(t, e, i, n) {
					this.x = t, this.y = e, this.w = i, this.h = n
				}).prototype.exec = function(t) {
					t.rect(this.x, this.y, this.w, this.h)
				}, (i.ClosePath = function() {}).prototype.exec = function(t) {
					t.closePath()
				}, (i.BeginPath = function() {}).prototype.exec = function(t) {
					t.beginPath()
				}, e = (i.Fill = function(t, e) {
					this.style = t, this.matrix = e
				}).prototype, e.exec = function(t) {
					if (this.style) {
						t.fillStyle = this.style;
						var e = this.matrix;
						e && (t.save(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), t.fill(), e && t.restore()
					}
				}, e.linearGradient = function(e, i, n, r, s, a) {
					for (var o = this.style = t._ctx.createLinearGradient(n, r, s, a), l = 0, h = e.length; h >
						l; l++) o.addColorStop(i[l], e[l]);
					return o.props = {
						colors: e,
						ratios: i,
						x0: n,
						y0: r,
						x1: s,
						y1: a,
						type: "linear"
					}, this
				}, e.radialGradient = function(e, i, n, r, s, a, o, l) {
					for (var h = this.style = t._ctx.createRadialGradient(n, r, s, a, o, l), u = 0, c = e
						.length; c > u; u++) h.addColorStop(i[u], e[u]);
					return h.props = {
						colors: e,
						ratios: i,
						x0: n,
						y0: r,
						r0: s,
						x1: a,
						y1: o,
						r1: l,
						type: "radial"
					}, this
				}, e.bitmap = function(e, i) {
					if (e.naturalWidth || e.getContext || e.readyState >= 2) {
						var n = this.style = t._ctx.createPattern(e, i || "");
						n.props = {
							image: e,
							repetition: i,
							type: "bitmap"
						}
					}
					return this
				}, e.path = !1, e = (i.Stroke = function(t, e) {
					this.style = t, this.ignoreScale = e
				}).prototype, e.exec = function(t) {
					this.style && (t.strokeStyle = this.style, this.ignoreScale && (t.save(), t.setTransform(1,
						0, 0, 1, 0, 0)), t.stroke(), this.ignoreScale && t.restore())
				}, e.linearGradient = i.Fill.prototype.linearGradient, e.radialGradient = i.Fill.prototype
				.radialGradient, e.bitmap = i.Fill.prototype.bitmap, e.path = !1, e = (i.StrokeStyle = function(
					t, e, i, n, r) {
					this.width = t, this.caps = e, this.joints = i, this.miterLimit = n, this.ignoreScale =
						r
				}).prototype, e.exec = function(e) {
					e.lineWidth = null == this.width ? "1" : this.width, e.lineCap = null == this.caps ?
						"butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps], e.lineJoin =
						null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[
							this.joints], e.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, e
						.ignoreScale = null == this.ignoreScale ? !1 : this.ignoreScale
				}, e.path = !1, (i.StrokeDash = function(t, e) {
					this.segments = t, this.offset = e || 0
				}).prototype.exec = function(t) {
					t.setLineDash && (t.setLineDash(this.segments || i.StrokeDash.EMPTY_SEGMENTS), t
						.lineDashOffset = this.offset || 0)
				}, i.StrokeDash.EMPTY_SEGMENTS = [], (i.RoundRect = function(t, e, i, n, r, s, a, o) {
					this.x = t, this.y = e, this.w = i, this.h = n, this.radiusTL = r, this.radiusTR = s,
						this.radiusBR = a, this.radiusBL = o
				}).prototype.exec = function(t) {
					var e = (h > l ? l : h) / 2,
						i = 0,
						n = 0,
						r = 0,
						s = 0,
						a = this.x,
						o = this.y,
						l = this.w,
						h = this.h,
						u = this.radiusTL,
						c = this.radiusTR,
						f = this.radiusBR,
						p = this.radiusBL;
					0 > u && (u *= i = -1), u > e && (u = e), 0 > c && (c *= n = -1), c > e && (c = e), 0 > f &&
						(f *= r = -1), f > e && (f = e), 0 > p && (p *= s = -1), p > e && (p = e), t.moveTo(a +
							l - c, o), t.arcTo(a + l + c * n, o - c * n, a + l, o + c, c), t.lineTo(a + l, o +
							h - f), t.arcTo(a + l + f * r, o + h + f * r, a + l - f, o + h, f), t.lineTo(a + p,
							o + h), t.arcTo(a - p * s, o + h + p * s, a, o + h - p, p), t.lineTo(a, o + u), t
						.arcTo(a - u * i, o - u * i, a + u, o, u), t.closePath()
				}, (i.Circle = function(t, e, i) {
					this.x = t, this.y = e, this.radius = i
				}).prototype.exec = function(t) {
					t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
				}, (i.Ellipse = function(t, e, i, n) {
					this.x = t, this.y = e, this.w = i, this.h = n
				}).prototype.exec = function(t) {
					var e = this.x,
						i = this.y,
						n = this.w,
						r = this.h,
						s = .5522848,
						a = n / 2 * s,
						o = r / 2 * s,
						l = e + n,
						h = i + r,
						u = e + n / 2,
						c = i + r / 2;
					t.moveTo(e, c), t.bezierCurveTo(e, c - o, u - a, i, u, i), t.bezierCurveTo(u + a, i, l, c -
						o, l, c), t.bezierCurveTo(l, c + o, u + a, h, u, h), t.bezierCurveTo(u - a, h, e,
						c + o, e, c)
				}, (i.PolyStar = function(t, e, i, n, r, s) {
					this.x = t, this.y = e, this.radius = i, this.sides = n, this.pointSize = r, this
						.angle = s
				}).prototype.exec = function(t) {
					var e = this.x,
						i = this.y,
						n = this.radius,
						r = (this.angle || 0) / 180 * Math.PI,
						s = this.sides,
						a = 1 - (this.pointSize || 0),
						o = Math.PI / s;
					t.moveTo(e + Math.cos(r) * n, i + Math.sin(r) * n);
					for (var l = 0; s > l; l++) r += o, 1 != a && t.lineTo(e + Math.cos(r) * n * a, i + Math
						.sin(r) * n * a), r += o, t.lineTo(e + Math.cos(r) * n, i + Math.sin(r) * n);
					t.closePath()
				}, t.beginCmd = new i.BeginPath, createjs.Graphics = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0,
					this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name =
					null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1,
					this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this
					.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this
					.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor =
					null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this
					._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL =
					null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle,
					this._bounds = null
			}
			var e = createjs.extend(t, createjs.EventDispatcher);
			t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove",
				"pressup", "rollout", "rollover"
			], t.suppressCrossDomainErrors = !1, t._snapToPixelEnabled = !1;
			var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			i.getContext && (t._hitTestCanvas = i, t._hitTestContext = i.getContext("2d"), i.width = i.height =
				1), t._nextCacheID = 1, e.getStage = function() {
				for (var t = this, e = createjs.Stage; t.parent;) t = t.parent;
				return t instanceof e ? t : null
			};
			try {
				Object.defineProperties(e, {
					stage: {
						get: e.getStage
					}
				})
			} catch (n) {}
			e.isVisible = function() {
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
			}, e.draw = function(t, e) {
				var i = this.cacheCanvas;
				if (e || !i) return !1;
				var n = this._cacheScale;
				return t.drawImage(i, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this
					._filterOffsetY, i.width / n, i.height / n), !0
			}, e.updateContext = function(e) {
				var i = this,
					n = i.mask,
					r = i._props.matrix;
				n && n.graphics && !n.graphics.isEmpty() && (n.getMatrix(r), e.transform(r.a, r.b, r.c, r.d,
					r.tx, r.ty), n.graphics.drawAsPath(e), e.clip(), r.invert(), e.transform(r.a, r
					.b, r.c, r.d, r.tx, r.ty)), this.getMatrix(r);
				var s = r.tx,
					a = r.ty;
				t._snapToPixelEnabled && i.snapToPixel && (s = s + (0 > s ? -.5 : .5) | 0, a = a + (0 > a ?
						-.5 : .5) | 0), e.transform(r.a, r.b, r.c, r.d, s, a), e.globalAlpha *= i.alpha, i
					.compositeOperation && (e.globalCompositeOperation = i.compositeOperation), i.shadow &&
					this._applyShadow(e, i.shadow)
			}, e.cache = function(t, e, i, n, r) {
				r = r || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs
						.createCanvas() : document.createElement("canvas")), this._cacheWidth = i, this
					._cacheHeight = n, this._cacheOffsetX = t, this._cacheOffsetY = e, this._cacheScale = r,
					this.updateCache()
			}, e.updateCache = function(e) {
				var i = this.cacheCanvas;
				if (!i) throw "cache() must be called before updateCache()";
				var n = this._cacheScale,
					r = this._cacheOffsetX * n,
					s = this._cacheOffsetY * n,
					a = this._cacheWidth,
					o = this._cacheHeight,
					l = i.getContext("2d"),
					h = this._getFilterBounds();
				r += this._filterOffsetX = h.x, s += this._filterOffsetY = h.y, a = Math.ceil(a * n) + h
					.width, o = Math.ceil(o * n) + h.height, a != i.width || o != i.height ? (i.width = a, i
						.height = o) : e || l.clearRect(0, 0, a + 1, o + 1), l.save(), l
					.globalCompositeOperation = e, l.setTransform(n, 0, 0, n, -r, -s), this.draw(l, !0),
					this._applyFilters(), l.restore(), this.cacheID = t._nextCacheID++
			}, e.uncache = function() {
				this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this
					._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
			}, e.getCacheDataURL = function() {
				return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL =
					this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
			}, e.localToGlobal = function(t, e, i) {
				return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, i || new createjs
					.Point)
			}, e.globalToLocal = function(t, e, i) {
				return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, i ||
					new createjs.Point)
			}, e.localToLocal = function(t, e, i, n) {
				return n = this.localToGlobal(t, e, n), i.globalToLocal(n.x, n.y, n)
			}, e.setTransform = function(t, e, i, n, r, s, a, o, l) {
				return this.x = t || 0, this.y = e || 0, this.scaleX = null == i ? 1 : i, this.scaleY =
					null == n ? 1 : n, this.rotation = r || 0, this.skewX = s || 0, this.skewY = a || 0,
					this.regX = o || 0, this.regY = l || 0, this
			}, e.getMatrix = function(t) {
				var e = this,
					i = t && t.identity() || new createjs.Matrix2D;
				return e.transformMatrix ? i.copy(e.transformMatrix) : i.appendTransform(e.x, e.y, e.scaleX,
					e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
			}, e.getConcatenatedMatrix = function(t) {
				for (var e = this, i = this.getMatrix(t); e = e.parent;) i.prependMatrix(e.getMatrix(e
					._props.matrix));
				return i
			}, e.getConcatenatedDisplayProps = function(t) {
				t = t ? t.identity() : new createjs.DisplayProps;
				var e = this,
					i = e.getMatrix(t.matrix);
				do t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation), e != this && i
					.prependMatrix(e.getMatrix(e._props.matrix)); while (e = e.parent);
				return t
			}, e.hitTest = function(e, i) {
				var n = t._hitTestContext;
				n.setTransform(1, 0, 0, 1, -e, -i), this.draw(n);
				var r = this._testHit(n);
				return n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, 2, 2), r
			}, e.set = function(t) {
				for (var e in t) this[e] = t[e];
				return this
			}, e.getBounds = function() {
				if (this._bounds) return this._rectangle.copy(this._bounds);
				var t = this.cacheCanvas;
				if (t) {
					var e = this._cacheScale;
					return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t
						.height / e)
				}
				return null
			}, e.getTransformedBounds = function() {
				return this._getBounds()
			}, e.setBounds = function(t, e, i, n) {
				null == t && (this._bounds = t), this._bounds = (this._bounds || new createjs.Rectangle)
					.setValues(t, e, i, n)
			}, e.clone = function() {
				return this._cloneProps(new t)
			}, e.toString = function() {
				return "[DisplayObject (name=" + this.name + ")]"
			}, e._cloneProps = function(t) {
				return t.alpha = this.alpha, t.mouseEnabled = this.mouseEnabled, t.tickEnabled = this
					.tickEnabled, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation =
					this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t
					.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y =
					this.y, t.compositeOperation = this.compositeOperation, t.snapToPixel = this
					.snapToPixel, t.filters = null == this.filters ? null : this.filters.slice(0), t.mask =
					this.mask, t.hitArea = this.hitArea, t.cursor = this.cursor, t._bounds = this._bounds, t
			}, e._applyShadow = function(t, e) {
				e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t
					.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur
			}, e._tick = function(t) {
				var e = this._listeners;
				e && e.tick && (t.target = null, t.propagationStopped = t.immediatePropagationStopped = !1,
					this.dispatchEvent(t))
			}, e._testHit = function(e) {
				try {
					var i = e.getImageData(0, 0, 1, 1).data[3] > 1
				} catch (n) {
					if (!t.suppressCrossDomainErrors)
					throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
				}
				return i
			}, e._applyFilters = function() {
				if (this.filters && 0 != this.filters.length && this.cacheCanvas)
					for (var t = this.filters.length, e = this.cacheCanvas.getContext("2d"), i = this
							.cacheCanvas.width, n = this.cacheCanvas.height, r = 0; t > r; r++) this
						.filters[r].applyFilter(e, 0, 0, i, n)
			}, e._getFilterBounds = function() {
				var t, e = this.filters,
					i = this._rectangle.setValues(0, 0, 0, 0);
				if (!e || !(t = e.length)) return i;
				for (var n = 0; t > n; n++) {
					var r = this.filters[n];
					r.getBounds && r.getBounds(i)
				}
				return i
			}, e._getBounds = function(t, e) {
				return this._transformBounds(this.getBounds(), t, e)
			}, e._transformBounds = function(t, e, i) {
				if (!t) return t;
				var n = t.x,
					r = t.y,
					s = t.width,
					a = t.height,
					o = this._props.matrix;
				o = i ? o.identity() : this.getMatrix(o), (n || r) && o.appendTransform(0, 0, 1, 1, 0, 0, 0,
					-n, -r), e && o.prependMatrix(e);
				var l = s * o.a,
					h = s * o.b,
					u = a * o.c,
					c = a * o.d,
					f = o.tx,
					p = o.ty,
					d = f,
					m = f,
					g = p,
					_ = p;
				return (n = l + f) < d ? d = n : n > m && (m = n), (n = l + u + f) < d ? d = n : n > m && (
						m = n), (n = u + f) < d ? d = n : n > m && (m = n), (r = h + p) < g ? g = r : r >
					_ && (_ = r), (r = h + c + p) < g ? g = r : r > _ && (_ = r), (r = c + p) < g ? g = r :
					r > _ && (_ = r), t.setValues(d, g, m - d, _ - g)
			}, e._hasMouseEventListener = function() {
				for (var e = t._MOUSE_EVENTS, i = 0, n = e.length; n > i; i++)
					if (this.hasEventListener(e[i])) return !0;
				return !!this.cursor
			}, createjs.DisplayObject = createjs.promote(t, "EventDispatcher")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this
					.tickChildren = !0
			}
			var e = createjs.extend(t, createjs.DisplayObject);
			e.getNumChildren = function() {
				return this.children.length
			};
			try {
				Object.defineProperties(e, {
					numChildren: {
						get: e.getNumChildren
					}
				})
			} catch (i) {}
			e.initialize = t, e.isVisible = function() {
				var t = this.cacheCanvas || this.children.length;
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
			}, e.draw = function(t, e) {
				if (this.DisplayObject_draw(t, e)) return !0;
				for (var i = this.children.slice(), n = 0, r = i.length; r > n; n++) {
					var s = i[n];
					s.isVisible() && (t.save(), s.updateContext(t), s.draw(t), t.restore())
				}
				return !0
			}, e.addChild = function(t) {
				if (null == t) return t;
				var e = arguments.length;
				if (e > 1) {
					for (var i = 0; e > i; i++) this.addChild(arguments[i]);
					return arguments[e - 1]
				}
				return t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), t
					.dispatchEvent("added"), t
			}, e.addChildAt = function(t, e) {
				var i = arguments.length,
					n = arguments[i - 1];
				if (0 > n || n > this.children.length) return arguments[i - 2];
				if (i > 2) {
					for (var r = 0; i - 1 > r; r++) this.addChildAt(arguments[r], n + r);
					return arguments[i - 2]
				}
				return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t),
					t.dispatchEvent("added"), t
			}, e.removeChild = function(t) {
				var e = arguments.length;
				if (e > 1) {
					for (var i = !0, n = 0; e > n; n++) i = i && this.removeChild(arguments[n]);
					return i
				}
				return this.removeChildAt(createjs.indexOf(this.children, t))
			}, e.removeChildAt = function(t) {
				var e = arguments.length;
				if (e > 1) {
					for (var i = [], n = 0; e > n; n++) i[n] = arguments[n];
					i.sort(function(t, e) {
						return e - t
					});
					for (var r = !0, n = 0; e > n; n++) r = r && this.removeChildAt(i[n]);
					return r
				}
				if (0 > t || t > this.children.length - 1) return !1;
				var s = this.children[t];
				return s && (s.parent = null), this.children.splice(t, 1), s.dispatchEvent("removed"), !0
			}, e.removeAllChildren = function() {
				for (var t = this.children; t.length;) this.removeChildAt(0)
			}, e.getChildAt = function(t) {
				return this.children[t]
			}, e.getChildByName = function(t) {
				for (var e = this.children, i = 0, n = e.length; n > i; i++)
					if (e[i].name == t) return e[i];
				return null
			}, e.sortChildren = function(t) {
				this.children.sort(t)
			}, e.getChildIndex = function(t) {
				return createjs.indexOf(this.children, t)
			}, e.swapChildrenAt = function(t, e) {
				var i = this.children,
					n = i[t],
					r = i[e];
				n && r && (i[t] = r, i[e] = n)
			}, e.swapChildren = function(t, e) {
				for (var i, n, r = this.children, s = 0, a = r.length; a > s && (r[s] == t && (i = s), r[
						s] == e && (n = s), null == i || null == n); s++);
				s != a && (r[i] = e, r[n] = t)
			}, e.setChildIndex = function(t, e) {
				var i = this.children,
					n = i.length;
				if (!(t.parent != this || 0 > e || e >= n)) {
					for (var r = 0; n > r && i[r] != t; r++);
					r != n && r != e && (i.splice(r, 1), i.splice(e, 0, t))
				}
			}, e.contains = function(t) {
				for (; t;) {
					if (t == this) return !0;
					t = t.parent
				}
				return !1
			}, e.hitTest = function(t, e) {
				return null != this.getObjectUnderPoint(t, e)
			}, e.getObjectsUnderPoint = function(t, e, i) {
				var n = [],
					r = this.localToGlobal(t, e);
				return this._getObjectsUnderPoint(r.x, r.y, n, i > 0, 1 == i), n
			}, e.getObjectUnderPoint = function(t, e, i) {
				var n = this.localToGlobal(t, e);
				return this._getObjectsUnderPoint(n.x, n.y, null, i > 0, 1 == i)
			}, e.getBounds = function() {
				return this._getBounds(null, !0)
			}, e.getTransformedBounds = function() {
				return this._getBounds()
			}, e.clone = function(e) {
				var i = this._cloneProps(new t);
				return e && this._cloneChildren(i), i
			}, e.toString = function() {
				return "[Container (name=" + this.name + ")]"
			}, e._tick = function(t) {
				if (this.tickChildren)
					for (var e = this.children.length - 1; e >= 0; e--) {
						var i = this.children[e];
						i.tickEnabled && i._tick && i._tick(t)
					}
				this.DisplayObject__tick(t)
			}, e._cloneChildren = function(t) {
				t.children.length && t.removeAllChildren();
				for (var e = t.children, i = 0, n = this.children.length; n > i; i++) {
					var r = this.children[i].clone(!0);
					r.parent = t, e.push(r)
				}
			}, e._getObjectsUnderPoint = function(e, i, n, r, s, a) {
				if (a = a || 0, !a && !this._testMask(this, e, i)) return null;
				var o, l = createjs.DisplayObject._hitTestContext;
				s = s || r && this._hasMouseEventListener();
				for (var h = this.children, u = h.length, c = u - 1; c >= 0; c--) {
					var f = h[c],
						p = f.hitArea;
					if (f.visible && (p || f.isVisible()) && (!r || f.mouseEnabled) && (p || this._testMask(
							f, e, i)))
						if (!p && f instanceof t) {
							var d = f._getObjectsUnderPoint(e, i, n, r, s, a + 1);
							if (!n && d) return r && !this.mouseChildren ? this : d
						} else {
							if (r && !s && !f._hasMouseEventListener()) continue;
							var m = f.getConcatenatedDisplayProps(f._props);
							if (o = m.matrix, p && (o.appendMatrix(p.getMatrix(p._props.matrix)), m.alpha =
									p.alpha), l.globalAlpha = m.alpha, l.setTransform(o.a, o.b, o.c, o.d, o
									.tx - e, o.ty - i), (p || f).draw(l), !this._testHit(l)) continue;
							if (l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, 2, 2), !n) return r && !
								this.mouseChildren ? this : f;
							n.push(f)
						}
				}
				return null
			}, e._testMask = function(t, e, i) {
				var n = t.mask;
				if (!n || !n.graphics || n.graphics.isEmpty()) return !0;
				var r = this._props.matrix,
					s = t.parent;
				r = s ? s.getConcatenatedMatrix(r) : r.identity(), r = n.getMatrix(n._props.matrix)
					.prependMatrix(r);
				var a = createjs.DisplayObject._hitTestContext;
				return a.setTransform(r.a, r.b, r.c, r.d, r.tx - e, r.ty - i), n.graphics.drawAsPath(a), a
					.fillStyle = "#000", a.fill(), this._testHit(a) ? (a.setTransform(1, 0, 0, 1, 0, 0), a
						.clearRect(0, 0, 2, 2), !0) : !1
			}, e._getBounds = function(t, e) {
				var i = this.DisplayObject_getBounds();
				if (i) return this._transformBounds(i, t, e);
				var n = this._props.matrix;
				n = e ? n.identity() : this.getMatrix(n), t && n.prependMatrix(t);
				for (var r = this.children.length, s = null, a = 0; r > a; a++) {
					var o = this.children[a];
					o.visible && (i = o._getBounds(n)) && (s ? s.extend(i.x, i.y, i.width, i.height) : s = i
						.clone())
				}
				return s
			}, createjs.Container = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof t ? document
					.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this
					.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this
					.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this
					._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this
					._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
			}
			var e = createjs.extend(t, createjs.Container);
			e._get_nextStage = function() {
				return this._nextStage
			}, e._set_nextStage = function(t) {
				this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this
					._nextStage = t
			};
			try {
				Object.defineProperties(e, {
					nextStage: {
						get: e._get_nextStage,
						set: e._set_nextStage
					}
				})
			} catch (i) {}
			e.update = function(t) {
				if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", !1, !
						0) !== !1)) {
					createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
					var e = this.drawRect,
						i = this.canvas.getContext("2d");
					i.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? i.clearRect(e.x, e.y, e.width,
								e.height) : i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height +
							1)), i.save(), this.drawRect && (i.beginPath(), i.rect(e.x, e.y, e.width, e
							.height), i.clip()), this.updateContext(i), this.draw(i, !1), i.restore(), this
						.dispatchEvent("drawend")
				}
			}, e.tick = function(t) {
				if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
					var e = new createjs.Event("tick");
					if (t)
						for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
					this._tick(e), this.dispatchEvent("tickend")
				}
			}, e.handleEvent = function(t) {
				"tick" == t.type && this.update(t)
			}, e.clear = function() {
				if (this.canvas) {
					var t = this.canvas.getContext("2d");
					t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas
						.height + 1)
				}
			}, e.toDataURL = function(t, e) {
				var i, n = this.canvas.getContext("2d"),
					r = this.canvas.width,
					s = this.canvas.height;
				if (t) {
					i = n.getImageData(0, 0, r, s);
					var a = n.globalCompositeOperation;
					n.globalCompositeOperation = "destination-over", n.fillStyle = t, n.fillRect(0, 0, r, s)
				}
				var o = this.canvas.toDataURL(e || "image/png");
				return t && (n.putImageData(i, 0, 0), n.globalCompositeOperation = a), o
			}, e.enableMouseOver = function(t) {
				if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this
						._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20;
				else if (0 >= t) return;
				var e = this;
				this._mouseOverIntervalID = setInterval(function() {
					e._testMouseOver()
				}, 1e3 / Math.min(50, t))
			}, e.enableDOMEvents = function(t) {
				null == t && (t = !0);
				var e, i, n = this._eventListeners;
				if (!t && n) {
					for (e in n) i = n[e], i.t.removeEventListener(e, i.f, !1);
					this._eventListeners = null
				} else if (t && !n && this.canvas) {
					var r = window.addEventListener ? window : document,
						s = this;
					n = this._eventListeners = {}, n.mouseup = {
						t: r,
						f: function(t) {
							s._handleMouseUp(t)
						}
					}, n.mousemove = {
						t: r,
						f: function(t) {
							s._handleMouseMove(t)
						}
					}, n.dblclick = {
						t: this.canvas,
						f: function(t) {
							s._handleDoubleClick(t)
						}
					}, n.mousedown = {
						t: this.canvas,
						f: function(t) {
							s._handleMouseDown(t)
						}
					};
					for (e in n) i = n[e], i.t.addEventListener(e, i.f, !1)
				}
			}, e.clone = function() {
				throw "Stage cannot be cloned."
			}, e.toString = function() {
				return "[Stage (name=" + this.name + ")]"
			}, e._getElementRect = function(t) {
				var e;
				try {
					e = t.getBoundingClientRect()
				} catch (i) {
					e = {
						top: t.offsetTop,
						left: t.offsetLeft,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}
				var n = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document
						.body.clientLeft || 0),
					r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document
						.body.clientTop || 0),
					s = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle,
					a = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth),
					o = parseInt(s.paddingTop) + parseInt(s.borderTopWidth),
					l = parseInt(s.paddingRight) + parseInt(s.borderRightWidth),
					h = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
				return {
					left: e.left + n + a,
					right: e.right + n - l,
					top: e.top + r + o,
					bottom: e.bottom + r - h
				}
			}, e._getPointerData = function(t) {
				var e = this._pointerData[t];
				return e || (e = this._pointerData[t] = {
					x: 0,
					y: 0
				}), e
			}, e._handleMouseMove = function(t) {
				t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY)
			}, e._handlePointerMove = function(t, e, i, n, r) {
				if ((!this._prevStage || void 0 !== r) && this.canvas) {
					var s = this._nextStage,
						a = this._getPointerData(t),
						o = a.inBounds;
					this._updatePointerPosition(t, e, i, n), (o || a.inBounds || this.mouseMoveOutside) && (
						-1 === t && a.inBounds == !o && this._dispatchMouseEvent(this, o ?
							"mouseleave" : "mouseenter", !1, t, a, e), this._dispatchMouseEvent(this,
							"stagemousemove", !1, t, a, e), this._dispatchMouseEvent(a.target,
							"pressmove", !0, t, a, e)), s && s._handlePointerMove(t, e, i, n, null)
				}
			}, e._updatePointerPosition = function(t, e, i, n) {
				var r = this._getElementRect(this.canvas);
				i -= r.left, n -= r.top;
				var s = this.canvas.width,
					a = this.canvas.height;
				i /= (r.right - r.left) / s, n /= (r.bottom - r.top) / a;
				var o = this._getPointerData(t);
				(o.inBounds = i >= 0 && n >= 0 && s - 1 >= i && a - 1 >= n) ? (o.x = i, o.y = n) : this
					.mouseMoveOutside && (o.x = 0 > i ? 0 : i > s - 1 ? s - 1 : i, o.y = 0 > n ? 0 : n > a -
						1 ? a - 1 : n), o.posEvtObj = e, o.rawX = i, o.rawY = n, (t === this
						._primaryPointerID || -1 === t) && (this.mouseX = o.x, this.mouseY = o.y, this
						.mouseInBounds = o.inBounds)
			}, e._handleMouseUp = function(t) {
				this._handlePointerUp(-1, t, !1)
			}, e._handlePointerUp = function(t, e, i, n) {
				var r = this._nextStage,
					s = this._getPointerData(t);
				if (!this._prevStage || void 0 !== n) {
					var a = null,
						o = s.target;
					n || !o && !r || (a = this._getObjectsUnderPoint(s.x, s.y, null, !0)), s.down && (this
							._dispatchMouseEvent(this, "stagemouseup", !1, t, s, e, a), s.down = !1), a ==
						o && this._dispatchMouseEvent(o, "click", !0, t, s, e), this._dispatchMouseEvent(o,
							"pressup", !0, t, s, e), i ? (t == this._primaryPointerID && (this
							._primaryPointerID = null), delete this._pointerData[t]) : s.target = null, r &&
						r._handlePointerUp(t, e, i, n || a && this)
				}
			}, e._handleMouseDown = function(t) {
				this._handlePointerDown(-1, t, t.pageX, t.pageY)
			}, e._handlePointerDown = function(t, e, i, n, r) {
				this.preventSelection && e.preventDefault(), (null == this._primaryPointerID || -1 === t) &&
					(this._primaryPointerID = t), null != n && this._updatePointerPosition(t, e, i, n);
				var s = null,
					a = this._nextStage,
					o = this._getPointerData(t);
				r || (s = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.inBounds && (this
						._dispatchMouseEvent(this, "stagemousedown", !1, t, o, e, s), o.down = !0), this
					._dispatchMouseEvent(s, "mousedown", !0, t, o, e), a && a._handlePointerDown(t, e, i, n,
						r || s && this)
			}, e._testMouseOver = function(t, e, i) {
				if (!this._prevStage || void 0 !== e) {
					var n = this._nextStage;
					if (!this._mouseOverIntervalID) return void(n && n._testMouseOver(t, e, i));
					var r = this._getPointerData(-1);
					if (r && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !
							this.mouseInBounds)) {
						var s, a, o, l = r.posEvtObj,
							h = i || l && l.target == this.canvas,
							u = null,
							c = -1,
							f = "";
						!e && (t || this.mouseInBounds && h) && (u = this._getObjectsUnderPoint(this.mouseX,
								this.mouseY, null, !0), this._mouseOverX = this.mouseX, this
							._mouseOverY = this.mouseY);
						var p = this._mouseOverTarget || [],
							d = p[p.length - 1],
							m = this._mouseOverTarget = [];
						for (s = u; s;) m.unshift(s), f || (f = s.cursor), s = s.parent;
						for (this.canvas.style.cursor = f, !e && i && (i.canvas.style.cursor = f), a = 0,
							o = m.length; o > a && m[a] == p[a]; a++) c = a;
						for (d != u && this._dispatchMouseEvent(d, "mouseout", !0, -1, r, l, u), a = p
							.length - 1; a > c; a--) this._dispatchMouseEvent(p[a], "rollout", !1, -1, r, l,
							u);
						for (a = m.length - 1; a > c; a--) this._dispatchMouseEvent(m[a], "rollover", !1, -
							1, r, l, d);
						d != u && this._dispatchMouseEvent(u, "mouseover", !0, -1, r, l, d), n && n
							._testMouseOver(t, e || u && this, i || h && this)
					}
				}
			}, e._handleDoubleClick = function(t, e) {
				var i = null,
					n = this._nextStage,
					r = this._getPointerData(-1);
				e || (i = this._getObjectsUnderPoint(r.x, r.y, null, !0), this._dispatchMouseEvent(i,
					"dblclick", !0, -1, r, t)), n && n._handleDoubleClick(t, e || i && this)
			}, e._dispatchMouseEvent = function(t, e, i, n, r, s, a) {
				if (t && (i || t.hasEventListener(e))) {
					var o = new createjs.MouseEvent(e, i, !1, r.x, r.y, s, n, n === this
						._primaryPointerID || -1 === n, r.rawX, r.rawY, a);
					t.dispatchEvent(o)
				}
			}, createjs.Stage = createjs.promote(t, "Container")
		}(), this.createjs = this.createjs || {},
		function() {
			function t(t) {
				this.DisplayObject_constructor(), "string" == typeof t ? (this.image = document.createElement(
					"img"), this.image.src = t) : this.image = t, this.sourceRect = null
			}
			var e = createjs.extend(t, createjs.DisplayObject);
			e.initialize = t, e.isVisible = function() {
				var t = this.image,
					e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
			}, e.draw = function(t, e) {
				if (this.DisplayObject_draw(t, e) || !this.image) return !0;
				var i = this.image,
					n = this.sourceRect;
				if (n) {
					var r = n.x,
						s = n.y,
						a = r + n.width,
						o = s + n.height,
						l = 0,
						h = 0,
						u = i.width,
						c = i.height;
					0 > r && (l -= r, r = 0), a > u && (a = u), 0 > s && (h -= s, s = 0), o > c && (o = c),
						t.drawImage(i, r, s, a - r, o - s, l, h, a - r, o - s)
				} else t.drawImage(i, 0, 0);
				return !0
			}, e.getBounds = function() {
				var t = this.DisplayObject_getBounds();
				if (t) return t;
				var e = this.image,
					i = this.sourceRect || e,
					n = e && (e.naturalWidth || e.getContext || e.readyState >= 2);
				return n ? this._rectangle.setValues(0, 0, i.width, i.height) : null
			}, e.clone = function() {
				var e = new t(this.image);
				return this.sourceRect && (e.sourceRect = this.sourceRect.clone()), this._cloneProps(e), e
			}, e.toString = function() {
				return "[Bitmap (name=" + this.name + ")]"
			}, createjs.Bitmap = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e) {
				this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this
					.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this
					._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != e && this
					.gotoAndPlay(e)
			}
			var e = createjs.extend(t, createjs.DisplayObject);
			e.initialize = t, e.isVisible = function() {
				var t = this.cacheCanvas || this.spriteSheet.complete;
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
			}, e.draw = function(t, e) {
				if (this.DisplayObject_draw(t, e)) return !0;
				this._normalizeFrame();
				var i = this.spriteSheet.getFrame(0 | this._currentFrame);
				if (!i) return !1;
				var n = i.rect;
				return n.width && n.height && t.drawImage(i.image, n.x, n.y, n.width, n.height, -i.regX, -i
					.regY, n.width, n.height), !0
			}, e.play = function() {
				this.paused = !1
			}, e.stop = function() {
				this.paused = !0
			}, e.gotoAndPlay = function(t) {
				this.paused = !1, this._skipAdvance = !0, this._goto(t)
			}, e.gotoAndStop = function(t) {
				this.paused = !0, this._goto(t)
			}, e.advance = function(t) {
				var e = this.framerate || this.spriteSheet.framerate,
					i = e && null != t ? t / (1e3 / e) : 1;
				this._normalizeFrame(i)
			}, e.getBounds = function() {
				return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame,
					this._rectangle)
			}, e.clone = function() {
				return this._cloneProps(new t(this.spriteSheet))
			}, e.toString = function() {
				return "[Sprite (name=" + this.name + ")]"
			}, e._cloneProps = function(t) {
				return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t
					.currentAnimation = this.currentAnimation, t.paused = this.paused, t
					.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t
					._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance =
					this._skipAdvance, t
			}, e._tick = function(t) {
				this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1),
					this.DisplayObject__tick(t)
			}, e._normalizeFrame = function(t) {
				t = t || 0;
				var e, i = this._animation,
					n = this.paused,
					r = this._currentFrame;
				if (i) {
					var s = i.speed || 1,
						a = this.currentAnimationFrame;
					if (e = i.frames.length, a + t * s >= e) {
						var o = i.next;
						if (this._dispatchAnimationEnd(i, r, n, o, e - 1)) return;
						if (o) return this._goto(o, t - (e - a) / s);
						this.paused = !0, a = i.frames.length - 1
					} else a += t * s;
					this.currentAnimationFrame = a, this._currentFrame = i.frames[0 | a]
				} else if (r = this._currentFrame += t, e = this.spriteSheet.getNumFrames(), r >= e && e >
					0 && !this._dispatchAnimationEnd(i, r, n, e - 1) && (this._currentFrame -= e) >= e)
					return this._normalizeFrame();
				r = 0 | this._currentFrame, this.currentFrame != r && (this.currentFrame = r, this
					.dispatchEvent("change"))
			}, e._dispatchAnimationEnd = function(t, e, i, n, r) {
				var s = t ? t.name : null;
				if (this.hasEventListener("animationend")) {
					var a = new createjs.Event("animationend");
					a.name = s, a.next = n, this.dispatchEvent(a)
				}
				var o = this._animation != t || this._currentFrame != e;
				return o || i || !this.paused || (this.currentAnimationFrame = r, o = !0), o
			}, e._goto = function(t, e) {
				if (this.currentAnimationFrame = 0, isNaN(t)) {
					var i = this.spriteSheet.getAnimation(t);
					i && (this._animation = i, this.currentAnimation = t, this._normalizeFrame(e))
				} else this.currentAnimation = this._animation = null, this._currentFrame = t, this
					._normalizeFrame()
			}, createjs.Sprite = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.DisplayObject_constructor(), this.graphics = t ? t : new createjs.Graphics
			}
			var e = createjs.extend(t, createjs.DisplayObject);
			e.isVisible = function() {
				var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
			}, e.draw = function(t, e) {
				return this.DisplayObject_draw(t, e) ? !0 : (this.graphics.draw(t, this), !0)
			}, e.clone = function(e) {
				var i = e && this.graphics ? this.graphics.clone() : this.graphics;
				return this._cloneProps(new t(i))
			}, e.toString = function() {
				return "[Shape (name=" + this.name + ")]"
			}, createjs.Shape = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i) {
				this.DisplayObject_constructor(), this.text = t, this.font = e, this.color = i, this.textAlign =
					"left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight =
					0, this.lineWidth = null
			}
			var e = createjs.extend(t, createjs.DisplayObject),
				i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			i.getContext && (t._workingContext = i.getContext("2d"), i.width = i.height = 1), t.H_OFFSETS = {
				start: 0,
				left: 0,
				center: -.5,
				end: -1,
				right: -1
			}, t.V_OFFSETS = {
				top: 0,
				hanging: -.01,
				middle: -.4,
				alphabetic: -.8,
				ideographic: -.85,
				bottom: -1
			}, e.isVisible = function() {
				var t = this.cacheCanvas || null != this.text && "" !== this.text;
				return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
			}, e.draw = function(t, e) {
				if (this.DisplayObject_draw(t, e)) return !0;
				var i = this.color || "#000";
				return this.outline ? (t.strokeStyle = i, t.lineWidth = 1 * this.outline) : t.fillStyle = i,
					this._drawText(this._prepContext(t)), !0
			}, e.getMeasuredWidth = function() {
				return this._getMeasuredWidth(this.text)
			}, e.getMeasuredLineHeight = function() {
				return 1.2 * this._getMeasuredWidth("M")
			}, e.getMeasuredHeight = function() {
				return this._drawText(null, {}).height
			}, e.getBounds = function() {
				var e = this.DisplayObject_getBounds();
				if (e) return e;
				if (null == this.text || "" === this.text) return null;
				var i = this._drawText(null, {}),
					n = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width,
					r = n * t.H_OFFSETS[this.textAlign || "left"],
					s = this.lineHeight || this.getMeasuredLineHeight(),
					a = s * t.V_OFFSETS[this.textBaseline || "top"];
				return this._rectangle.setValues(r, a, n, i.height)
			}, e.getMetrics = function() {
				var e = {
					lines: []
				};
				return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e
					.lineHeight * t.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines)
			}, e.clone = function() {
				return this._cloneProps(new t(this.text, this.font, this.color))
			}, e.toString = function() {
				return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this
					.text) + ")]"
			}, e._cloneProps = function(t) {
				return this.DisplayObject__cloneProps(t), t.textAlign = this.textAlign, t.textBaseline =
					this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight =
					this.lineHeight, t.lineWidth = this.lineWidth, t
			}, e._prepContext = function(t) {
				return t.font = this.font || "10px sans-serif", t.textAlign = this.textAlign || "left", t
					.textBaseline = this.textBaseline || "top", t
			}, e._drawText = function(e, i, n) {
				var r = !!e;
				r || (e = t._workingContext, e.save(), this._prepContext(e));
				for (var s = this.lineHeight || this.getMeasuredLineHeight(), a = 0, o = 0, l = String(this
						.text).split(/(?:\r\n|\r|\n)/), h = 0, u = l.length; u > h; h++) {
					var c = l[h],
						f = null;
					if (null != this.lineWidth && (f = e.measureText(c).width) > this.lineWidth) {
						var p = c.split(/(\s)/);
						c = p[0], f = e.measureText(c).width;
						for (var d = 1, m = p.length; m > d; d += 2) {
							var g = e.measureText(p[d] + p[d + 1]).width;
							f + g > this.lineWidth ? (r && this._drawTextLine(e, c, o * s), n && n.push(c),
								f > a && (a = f), c = p[d + 1], f = e.measureText(c).width, o++) : (c +=
								p[d] + p[d + 1], f += g)
						}
					}
					r && this._drawTextLine(e, c, o * s), n && n.push(c), i && null == f && (f = e
						.measureText(c).width), f > a && (a = f), o++
				}
				return i && (i.width = a, i.height = o * s), r || e.restore(), i
			}, e._drawTextLine = function(t, e, i) {
				this.outline ? t.strokeText(e, 0, i, this.maxWidth || 65535) : t.fillText(e, 0, i, this
					.maxWidth || 65535)
			}, e._getMeasuredWidth = function(e) {
				var i = t._workingContext;
				i.save();
				var n = this._prepContext(i).measureText(e).width;
				return i.restore(), n
			}, createjs.Text = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e) {
				this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0,
					this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
						text: 0,
						spriteSheet: 0,
						lineHeight: 0,
						letterSpacing: 0,
						spaceWidth: 0
					}
			}
			var e = createjs.extend(t, createjs.Container);
			t.maxPoolSize = 100, t._spritePool = [], e.draw = function(t, e) {
				this.DisplayObject_draw(t, e) || (this._updateText(), this.Container_draw(t, e))
			}, e.getBounds = function() {
				return this._updateText(), this.Container_getBounds()
			}, e.isVisible = function() {
				var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
				return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && t)
			}, e.clone = function() {
				return this._cloneProps(new t(this.text, this.spriteSheet))
			}, e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren =
			function() {}, e._cloneProps = function(t) {
				return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this
					.letterSpacing, t.spaceWidth = this.spaceWidth, t
			}, e._getFrameIndex = function(t, e) {
				var i, n = e.getAnimation(t);
				return n || (t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null), i && (
					n = e.getAnimation(i))), n && n.frames[0]
			}, e._getFrame = function(t, e) {
				var i = this._getFrameIndex(t, e);
				return null == i ? i : e.getFrame(i)
			}, e._getLineHeight = function(t) {
				var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t
					.getFrame(0);
				return e ? e.rect.height : 1
			}, e._getSpaceWidth = function(t) {
				var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this
					._getFrame("a", t) || t.getFrame(0);
				return e ? e.rect.width : 1
			}, e._updateText = function() {
				var e, i = 0,
					n = 0,
					r = this._oldProps,
					s = !1,
					a = this.spaceWidth,
					o = this.lineHeight,
					l = this.spriteSheet,
					h = t._spritePool,
					u = this.children,
					c = 0,
					f = u.length;
				for (var p in r) r[p] != this[p] && (r[p] = this[p], s = !0);
				if (s) {
					var d = !!this._getFrame(" ", l);
					d || a || (a = this._getSpaceWidth(l)), o || (o = this._getLineHeight(l));
					for (var m = 0, g = this.text.length; g > m; m++) {
						var _ = this.text.charAt(m);
						if (" " != _ || d)
							if ("\n" != _ && "\r" != _) {
								var v = this._getFrameIndex(_, l);
								null != v && (f > c ? e = u[c] : (u.push(e = h.length ? h.pop() :
										new createjs.Sprite), e.parent = this, f++), e.spriteSheet = l,
									e.gotoAndStop(v), e.x = i, e.y = n, c++, i += e.getBounds().width +
									this.letterSpacing)
							} else "\r" == _ && "\n" == this.text.charAt(m + 1) && m++, i = 0, n += o;
						else i += a
					}
					for (; f > c;) h.push(e = u.pop()), e.parent = null, f--;
					h.length > t.maxPoolSize && (h.length = t.maxPoolSize)
				}
			}, createjs.BitmapText = createjs.promote(t, "Container")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(e, i, n, r) {
				this.Container_constructor(), !t.inited && t.init(), this.mode = e || t.INDEPENDENT, this
					.startPosition = i || 0, this.loop = n, this.currentFrame = 0, this.timeline = new createjs
					.Timeline(null, r, {
						paused: !0,
						position: i,
						useTicks: !0
					}), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this
					.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this
					._prevPosition = 0, this._t = 0, this._managed = {}
			}

			function e() {
				throw "MovieClipPlugin cannot be instantiated."
			}
			var i = createjs.extend(t, createjs.Container);
			t.INDEPENDENT = "independent", t.SINGLE_FRAME = "single", t.SYNCHED = "synched", t.inited = !1, t
				.init = function() {
					t.inited || (e.install(), t.inited = !0)
				}, i.getLabels = function() {
					return this.timeline.getLabels()
				}, i.getCurrentLabel = function() {
					return this._updateTimeline(), this.timeline.getCurrentLabel()
				}, i.getDuration = function() {
					return this.timeline.duration
				};
			try {
				Object.defineProperties(i, {
					labels: {
						get: i.getLabels
					},
					currentLabel: {
						get: i.getCurrentLabel
					},
					totalFrames: {
						get: i.getDuration
					},
					duration: {
						get: i.getDuration
					}
				})
			} catch (n) {}
			i.initialize = t, i.isVisible = function() {
					return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
				}, i.draw = function(t, e) {
					return this.DisplayObject_draw(t, e) ? !0 : (this._updateTimeline(), this.Container_draw(t,
						e), !0)
				}, i.play = function() {
					this.paused = !1
				}, i.stop = function() {
					this.paused = !0
				}, i.gotoAndPlay = function(t) {
					this.paused = !1, this._goto(t)
				}, i.gotoAndStop = function(t) {
					this.paused = !0, this._goto(t)
				}, i.advance = function(e) {
					var i = t.INDEPENDENT;
					if (this.mode == i) {
						for (var n = this, r = n.framerate;
							(n = n.parent) && null == r;) n.mode == i && (r = n._framerate);
						this._framerate = r;
						var s = null != r && -1 != r && null != e ? e / (1e3 / r) + this._t : 1,
							a = 0 | s;
						for (this._t = s - a; !this.paused && a--;) this._prevPosition = this._prevPos < 0 ? 0 :
							this._prevPosition + 1, this._updateTimeline()
					}
				}, i.clone = function() {
					throw "MovieClip cannot be cloned."
				}, i.toString = function() {
					return "[MovieClip (name=" + this.name + ")]"
				}, i._tick = function(t) {
					this.advance(t && t.delta), this.Container__tick(t)
				}, i._goto = function(t) {
					var e = this.timeline.resolve(t);
					null != e && (-1 == this._prevPos && (this._prevPos = 0 / 0), this._prevPosition = e, this
						._t = 0, this._updateTimeline())
				}, i._reset = function() {
					this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
				}, i._updateTimeline = function() {
					var e = this.timeline,
						i = this.mode != t.INDEPENDENT;
					e.loop = null == this.loop ? !0 : this.loop;
					var n = i ? this.startPosition + (this.mode == t.SINGLE_FRAME ? 0 : this._synchOffset) :
						this._prevPos < 0 ? 0 : this._prevPosition,
						r = i || !this.actionsEnabled ? createjs.Tween.NONE : null;
					if (this.currentFrame = e._calcPosition(n), e.setPosition(n, r), this._prevPosition = e
						._prevPosition, this._prevPos != e._prevPos) {
						this.currentFrame = this._prevPos = e._prevPos;
						for (var s in this._managed) this._managed[s] = 1;
						for (var a = e._tweens, o = 0, l = a.length; l > o; o++) {
							var h = a[o],
								u = h._target;
							if (u != this && !h.passive) {
								var c = h._stepPosition;
								u instanceof createjs.DisplayObject ? this._addManagedChild(u, c) : this
									._setState(u.state, c)
							}
						}
						var f = this.children;
						for (o = f.length - 1; o >= 0; o--) {
							var p = f[o].id;
							1 == this._managed[p] && (this.removeChildAt(o), delete this._managed[p])
						}
					}
				}, i._setState = function(t, e) {
					if (t)
						for (var i = t.length - 1; i >= 0; i--) {
							var n = t[i],
								r = n.t,
								s = n.p;
							for (var a in s) r[a] = s[a];
							this._addManagedChild(r, e)
						}
				}, i._addManagedChild = function(e, i) {
					e._off || (this.addChildAt(e, 0), e instanceof t && (e._synchOffset = i, e.mode == t
							.INDEPENDENT && e.autoReset && !this._managed[e.id] && e._reset()), this
						._managed[e.id] = 2)
				}, i._getBounds = function(t, e) {
					var i = this.DisplayObject_getBounds();
					return i || (this._updateTimeline(), this.frameBounds && (i = this._rectangle.copy(this
							.frameBounds[this.currentFrame]))), i ? this._transformBounds(i, t, e) : this
						.Container__getBounds(t, e)
				}, createjs.MovieClip = createjs.promote(t, "Container"), e.priority = 100, e.install =
				function() {
					createjs.Tween.installPlugin(e, ["startPosition"])
				}, e.init = function(t, e, i) {
					return i
				}, e.step = function() {}, e.tween = function(e, i, n, r, s, a) {
					return e.target instanceof t ? 1 == a ? s[i] : r[i] : n
				}
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				throw "SpriteSheetUtils cannot be instantiated"
			}
			var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height =
				1), t.addFlippedFrames = function(e, i, n, r) {
				if (i || n || r) {
					var s = 0;
					i && t._flip(e, ++s, !0, !1), n && t._flip(e, ++s, !1, !0), r && t._flip(e, ++s, !0, !0)
				}
			}, t.extractFrame = function(e, i) {
				isNaN(i) && (i = e.getAnimation(i).frames[0]);
				var n = e.getFrame(i);
				if (!n) return null;
				var r = n.rect,
					s = t._workingCanvas;
				s.width = r.width, s.height = r.height, t._workingContext.drawImage(n.image, r.x, r.y, r
					.width, r.height, 0, 0, r.width, r.height);
				var a = document.createElement("img");
				return a.src = s.toDataURL("image/png"), a
			}, t.mergeAlpha = function(t, e, i) {
				i || (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement(
					"canvas")), i.width = Math.max(e.width, t.width), i.height = Math.max(e.height, t
					.height);
				var n = i.getContext("2d");
				return n.save(), n.drawImage(t, 0, 0), n.globalCompositeOperation = "destination-in", n
					.drawImage(e, 0, 0), n.restore(), i
			}, t._flip = function(e, i, n, r) {
				for (var s = e._images, a = t._workingCanvas, o = t._workingContext, l = s.length / i, h =
					0; l > h; h++) {
					var u = s[h];
					u.__tmp = h, o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, a.width + 1, a.height +
						1), a.width = u.width, a.height = u.height, o.setTransform(n ? -1 : 1, 0, 0, r ?
						-1 : 1, n ? u.width : 0, r ? u.height : 0), o.drawImage(u, 0, 0);
					var c = document.createElement("img");
					c.src = a.toDataURL("image/png"), c.width = u.width, c.height = u.height, s.push(c)
				}
				var f = e._frames,
					p = f.length / i;
				for (h = 0; p > h; h++) {
					u = f[h];
					var d = u.rect.clone();
					c = s[u.image.__tmp + l * i];
					var m = {
						image: c,
						rect: d,
						regX: u.regX,
						regY: u.regY
					};
					n && (d.x = c.width - d.x - d.width, m.regX = d.width - u.regX), r && (d.y = c.height -
						d.y - d.height, m.regY = d.height - u.regY), f.push(m)
				}
				var g = "_" + (n ? "h" : "") + (r ? "v" : ""),
					_ = e._animations,
					v = e._data,
					y = _.length / i;
				for (h = 0; y > h; h++) {
					var x = _[h];
					u = v[x];
					var b = {
						name: x + g,
						speed: u.speed,
						next: u.next,
						frames: []
					};
					u.next && (b.next += g), f = u.frames;
					for (var w = 0, T = f.length; T > w; w++) b.frames.push(f[w] + p * i);
					v[b.name] = b, _.push(b.name)
				}
			}, createjs.SpriteSheetUtils = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this
					.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this
					.progress = -1, this.framerate = t || 0, this._frames = [], this._animations = {}, this
					._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this
					._scale = 1
			}
			var e = createjs.extend(t, createjs.EventDispatcher);
			t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING =
				"a build is already running", e.addFrame = function(e, i, n, r, s) {
					if (this._data) throw t.ERR_RUNNING;
					var a = i || e.bounds || e.nominalBounds;
					return !a && e.getBounds && (a = e.getBounds()), a ? (n = n || 1, this._frames.push({
						source: e,
						sourceRect: a,
						scale: n,
						funct: r,
						data: s,
						index: this._frames.length,
						height: a.height * n
					}) - 1) : null
				}, e.addAnimation = function(e, i, n, r) {
					if (this._data) throw t.ERR_RUNNING;
					this._animations[e] = {
						frames: i,
						next: n,
						speed: r
					}
				}, e.addMovieClip = function(e, i, n, r, s, a) {
					if (this._data) throw t.ERR_RUNNING;
					var o = e.frameBounds,
						l = i || e.bounds || e.nominalBounds;
					if (!l && e.getBounds && (l = e.getBounds()), l || o) {
						var h, u, c = this._frames.length,
							f = e.timeline.duration;
						for (h = 0; f > h; h++) {
							var p = o && o[h] ? o[h] : l;
							this.addFrame(e, p, n, this._setupMovieClipFrame, {
								i: h,
								f: r,
								d: s
							})
						}
						var d = e.timeline._labels,
							m = [];
						for (var g in d) m.push({
							index: d[g],
							label: g
						});
						if (m.length)
							for (m.sort(function(t, e) {
									return t.index - e.index
								}), h = 0, u = m.length; u > h; h++) {
								for (var _ = m[h].label, v = c + m[h].index, y = c + (h == u - 1 ? f : m[h + 1]
										.index), x = [], b = v; y > b; b++) x.push(b);
								(!a || (_ = a(_, e, v, y))) && this.addAnimation(_, x, !0)
							}
					}
				}, e.build = function() {
					if (this._data) throw t.ERR_RUNNING;
					for (this._startBuild(); this._drawNext(););
					return this._endBuild(), this.spriteSheet
				}, e.buildAsync = function(e) {
					if (this._data) throw t.ERR_RUNNING;
					this.timeSlice = e, this._startBuild();
					var i = this;
					this._timerID = setTimeout(function() {
						i._run()
					}, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
				}, e.stopAsync = function() {
					clearTimeout(this._timerID), this._data = null
				}, e.clone = function() {
					throw "SpriteSheetBuilder cannot be cloned."
				}, e.toString = function() {
					return "[SpriteSheetBuilder]"
				}, e._startBuild = function() {
					var e = this.padding || 0;
					this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
					var i = [];
					this._data = {
						images: [],
						frames: i,
						framerate: this.framerate,
						animations: this._animations
					};
					var n = this._frames.slice();
					if (n.sort(function(t, e) {
							return t.height <= e.height ? -1 : 1
						}), n[n.length - 1].height + 2 * e > this.maxHeight) throw t.ERR_DIMENSIONS;
					for (var r = 0, s = 0, a = 0; n.length;) {
						var o = this._fillRow(n, r, a, i, e);
						if (o.w > s && (s = o.w), r += o.h, !o.h || !n.length) {
							var l = createjs.createCanvas ? createjs.createCanvas() : document.createElement(
								"canvas");
							l.width = this._getSize(s, this.maxWidth), l.height = this._getSize(r, this
								.maxHeight), this._data.images[a] = l, o.h || (s = r = 0, a++)
						}
					}
				}, e._setupMovieClipFrame = function(t, e) {
					var i = t.actionsEnabled;
					t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = i, e.f && e.f(t, e.d, e.i)
				}, e._getSize = function(t, e) {
					for (var i = 4; Math.pow(2, ++i) < t;);
					return Math.min(e, Math.pow(2, i))
				}, e._fillRow = function(e, i, n, r, s) {
					var a = this.maxWidth,
						o = this.maxHeight;
					i += s;
					for (var l = o - i, h = s, u = 0, c = e.length - 1; c >= 0; c--) {
						var f = e[c],
							p = this._scale * f.scale,
							d = f.sourceRect,
							m = f.source,
							g = Math.floor(p * d.x - s),
							_ = Math.floor(p * d.y - s),
							v = Math.ceil(p * d.height + 2 * s),
							y = Math.ceil(p * d.width + 2 * s);
						if (y > a) throw t.ERR_DIMENSIONS;
						v > l || h + y > a || (f.img = n, f.rect = new createjs.Rectangle(h, i, y, v), u = u ||
							v, e.splice(c, 1), r[f.index] = [h, i, y, v, n, Math.round(-g + p * m.regX - s),
								Math.round(-_ + p * m.regY - s)
							], h += y)
					}
					return {
						w: h,
						h: u
					}
				}, e._endBuild = function() {
					this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress =
						1, this.dispatchEvent("complete")
				}, e._run = function() {
					for (var t = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), e = (new Date)
							.getTime() + t, i = !1; e > (new Date).getTime();)
						if (!this._drawNext()) {
							i = !0;
							break
						} if (i) this._endBuild();
					else {
						var n = this;
						this._timerID = setTimeout(function() {
							n._run()
						}, 50 - t)
					}
					var r = this.progress = this._index / this._frames.length;
					if (this.hasEventListener("progress")) {
						var s = new createjs.Event("progress");
						s.progress = r, this.dispatchEvent(s)
					}
				}, e._drawNext = function() {
					var t = this._frames[this._index],
						e = t.scale * this._scale,
						i = t.rect,
						n = t.sourceRect,
						r = this._data.images[t.img],
						s = r.getContext("2d");
					return t.funct && t.funct(t.source, t.data), s.save(), s.beginPath(), s.rect(i.x, i.y, i
							.width, i.height), s.clip(), s.translate(Math.ceil(i.x - n.x * e), Math.ceil(i.y - n
							.y * e)), s.scale(e, e), t.source.draw(s), s.restore(), ++this._index < this._frames
						.length
				}, createjs.SpriteSheetBuilder = createjs.promote(t, "EventDispatcher")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.DisplayObject_constructor(), "string" == typeof t && (t = document.getElementById(t)), this
					.mouseEnabled = !1;
				var e = t.style;
				e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e
					.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps =
					null
			}
			var e = createjs.extend(t, createjs.DisplayObject);
			e.isVisible = function() {
					return null != this.htmlElement
				}, e.draw = function() {
					return !0
				}, e.cache = function() {}, e.uncache = function() {}, e.updateCache = function() {}, e
				.hitTest = function() {}, e.localToGlobal = function() {}, e.globalToLocal = function() {}, e
				.localToLocal = function() {}, e.clone = function() {
					throw "DOMElement cannot be cloned."
				}, e.toString = function() {
					return "[DOMElement (name=" + this.name + ")]"
				}, e._tick = function(t) {
					var e = this.getStage();
					e && e.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(t)
				}, e._handleDrawEnd = function() {
					var t = this.htmlElement;
					if (t) {
						var e = t.style,
							i = this.getConcatenatedDisplayProps(this._props),
							n = i.matrix,
							r = i.visible ? "visible" : "hidden";
						if (r != e.visibility && (e.visibility = r), i.visible) {
							var s = this._oldProps,
								a = s && s.matrix,
								o = 1e4;
							if (!a || !a.equals(n)) {
								var l = "matrix(" + (n.a * o | 0) / o + "," + (n.b * o | 0) / o + "," + (n.c *
									o | 0) / o + "," + (n.d * o | 0) / o + "," + (n.tx + .5 | 0);
								e.transform = e.WebkitTransform = e.OTransform = e.msTransform = l + "," + (n
										.ty + .5 | 0) + ")", e.MozTransform = l + "px," + (n.ty + .5 | 0) +
									"px)", s || (s = this._oldProps = new createjs.DisplayProps(!0, 0 / 0)), s
									.matrix.copy(n)
							}
							s.alpha != i.alpha && (e.opacity = "" + (i.alpha * o | 0) / o, s.alpha = i.alpha)
						}
					}
				}, createjs.DOMElement = createjs.promote(t, "DisplayObject")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {}
			var e = t.prototype;
			e.getBounds = function(t) {
				return t
			}, e.applyFilter = function(t, e, i, n, r, s, a, o) {
				s = s || t, null == a && (a = e), null == o && (o = i);
				try {
					var l = t.getImageData(e, i, n, r)
				} catch (h) {
					return !1
				}
				return this._applyFilter(l) ? (s.putImageData(l, a, o), !0) : !1
			}, e.toString = function() {
				return "[Filter]"
			}, e.clone = function() {
				return new t
			}, e._applyFilter = function() {
				return !0
			}, createjs.Filter = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i) {
				(isNaN(t) || 0 > t) && (t = 0), (isNaN(e) || 0 > e) && (e = 0), (isNaN(i) || 1 > i) && (i = 1),
				this.blurX = 0 | t, this.blurY = 0 | e, this.quality = 0 | i
			}
			var e = createjs.extend(t, createjs.Filter);
			t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469,
				443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449,
				437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301,
				37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446,
				55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355,
				351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73,
				289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499,
				495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218,
				433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389,
				387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87,
				173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79,
				315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145,
				289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267,
				133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1
			], t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10,
				13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15,
				15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16,
				15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16,
				16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14,
				16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15,
				17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16,
				17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16,
				14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17,
				17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17,
				17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16,
				17, 16, 17, 16, 17, 9
			], e.getBounds = function(t) {
				var e = 0 | this.blurX,
					i = 0 | this.blurY;
				if (0 >= e && 0 >= i) return t;
				var n = Math.pow(this.quality, .2);
				return (t || new createjs.Rectangle).pad(e * n + 1, i * n + 1, e * n + 1, i * n + 1)
			}, e.clone = function() {
				return new t(this.blurX, this.blurY, this.quality)
			}, e.toString = function() {
				return "[BlurFilter]"
			}, e._applyFilter = function(e) {
				var i = this.blurX >> 1;
				if (isNaN(i) || 0 > i) return !1;
				var n = this.blurY >> 1;
				if (isNaN(n) || 0 > n) return !1;
				if (0 == i && 0 == n) return !1;
				var r = this.quality;
				(isNaN(r) || 1 > r) && (r = 1), r |= 0, r > 3 && (r = 3), 1 > r && (r = 1);
				var s = e.data,
					a = 0,
					o = 0,
					l = 0,
					h = 0,
					u = 0,
					c = 0,
					f = 0,
					p = 0,
					d = 0,
					m = 0,
					g = 0,
					_ = 0,
					v = 0,
					y = 0,
					x = 0,
					b = i + i + 1 | 0,
					w = n + n + 1 | 0,
					T = 0 | e.width,
					S = 0 | e.height,
					C = T - 1 | 0,
					P = S - 1 | 0,
					k = i + 1 | 0,
					E = n + 1 | 0,
					A = {
						r: 0,
						b: 0,
						g: 0,
						a: 0
					},
					O = A;
				for (l = 1; b > l; l++) O = O.n = {
					r: 0,
					b: 0,
					g: 0,
					a: 0
				};
				O.n = A;
				var D = {
						r: 0,
						b: 0,
						g: 0,
						a: 0
					},
					M = D;
				for (l = 1; w > l; l++) M = M.n = {
					r: 0,
					b: 0,
					g: 0,
					a: 0
				};
				M.n = D;
				for (var j = null, N = 0 | t.MUL_TABLE[i], R = 0 | t.SHG_TABLE[i], L = 0 | t.MUL_TABLE[n],
						F = 0 | t.SHG_TABLE[n]; r-- > 0;) {
					f = c = 0;
					var I = N,
						B = R;
					for (o = S; --o > -1;) {
						for (p = k * (_ = s[0 | c]), d = k * (v = s[c + 1 | 0]), m = k * (y = s[c + 2 | 0]),
							g = k * (x = s[c + 3 | 0]), O = A, l = k; --l > -1;) O.r = _, O.g = v, O.b = y,
							O.a = x, O = O.n;
						for (l = 1; k > l; l++) h = c + ((l > C ? C : l) << 2) | 0, p += O.r = s[h], d += O
							.g = s[h + 1], m += O.b = s[h + 2], g += O.a = s[h + 3], O = O.n;
						for (j = A, a = 0; T > a; a++) s[c++] = p * I >>> B, s[c++] = d * I >>> B, s[c++] =
							m * I >>> B, s[c++] = g * I >>> B, h = f + ((h = a + i + 1) < C ? h : C) << 2,
							p -= j.r - (j.r = s[h]), d -= j.g - (j.g = s[h + 1]), m -= j.b - (j.b = s[h +
								2]), g -= j.a - (j.a = s[h + 3]), j = j.n;
						f += T
					}
					for (I = L, B = F, a = 0; T > a; a++) {
						for (c = a << 2 | 0, p = E * (_ = s[c]) | 0, d = E * (v = s[c + 1 | 0]) | 0, m = E *
							(y = s[c + 2 | 0]) | 0, g = E * (x = s[c + 3 | 0]) | 0, M = D, l = 0; E > l; l++
							) M.r = _, M.g = v, M.b = y, M.a = x, M = M.n;
						for (u = T, l = 1; n >= l; l++) c = u + a << 2, p += M.r = s[c], d += M.g = s[c +
							1], m += M.b = s[c + 2], g += M.a = s[c + 3], M = M.n, P > l && (u += T);
						if (c = a, j = D, r > 0)
							for (o = 0; S > o; o++) h = c << 2, s[h + 3] = x = g * I >>> B, x > 0 ? (s[h] =
									p * I >>> B, s[h + 1] = d * I >>> B, s[h + 2] = m * I >>> B) : s[h] = s[
									h + 1] = s[h + 2] = 0, h = a + ((h = o + E) < P ? h : P) * T << 2, p -=
								j.r - (j.r = s[h]), d -= j.g - (j.g = s[h + 1]), m -= j.b - (j.b = s[h +
								2]), g -= j.a - (j.a = s[h + 3]), j = j.n, c += T;
						else
							for (o = 0; S > o; o++) h = c << 2, s[h + 3] = x = g * I >>> B, x > 0 ? (x =
									255 / x, s[h] = (p * I >>> B) * x, s[h + 1] = (d * I >>> B) * x, s[h +
										2] = (m * I >>> B) * x) : s[h] = s[h + 1] = s[h + 2] = 0, h = a + ((
									h = o + E) < P ? h : P) * T << 2, p -= j.r - (j.r = s[h]), d -= j.g - (j
									.g = s[h + 1]), m -= j.b - (j.b = s[h + 2]), g -= j.a - (j.a = s[h +
								3]), j = j.n, c += T
					}
				}
				return !0
			}, createjs.BlurFilter = createjs.promote(t, "Filter")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.alphaMap = t, this._alphaMap = null, this._mapData = null
			}
			var e = createjs.extend(t, createjs.Filter);
			e.clone = function() {
				var e = new t(this.alphaMap);
				return e._alphaMap = this._alphaMap, e._mapData = this._mapData, e
			}, e.toString = function() {
				return "[AlphaMapFilter]"
			}, e._applyFilter = function(t) {
				if (!this.alphaMap) return !0;
				if (!this._prepAlphaMap()) return !1;
				for (var e = t.data, i = this._mapData, n = 0, r = e.length; r > n; n += 4) e[n + 3] = i[
					n] || 0;
				return !0
			}, e._prepAlphaMap = function() {
				if (!this.alphaMap) return !1;
				if (this.alphaMap == this._alphaMap && this._mapData) return !0;
				this._mapData = null;
				var t, e = this._alphaMap = this.alphaMap,
					i = e;
				e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = createjs.createCanvas ?
					createjs.createCanvas() : document.createElement("canvas"), i.width = e.width, i
					.height = e.height, t = i.getContext("2d"), t.drawImage(e, 0, 0));
				try {
					var n = t.getImageData(0, 0, e.width, e.height)
				} catch (r) {
					return !1
				}
				return this._mapData = n.data, !0
			}, createjs.AlphaMapFilter = createjs.promote(t, "Filter")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.mask = t
			}
			var e = createjs.extend(t, createjs.Filter);
			e.applyFilter = function(t, e, i, n, r, s, a, o) {
				return this.mask ? (s = s || t, null == a && (a = e), null == o && (o = i), s.save(), t !=
					s ? !1 : (s.globalCompositeOperation = "destination-in", s.drawImage(this.mask, a,
						o), s.restore(), !0)) : !0
			}, e.clone = function() {
				return new t(this.mask)
			}, e.toString = function() {
				return "[AlphaMaskFilter]"
			}, createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n, r, s, a, o) {
				this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this
					.blueMultiplier = null != i ? i : 1, this.alphaMultiplier = null != n ? n : 1, this
					.redOffset = r || 0, this.greenOffset = s || 0, this.blueOffset = a || 0, this.alphaOffset =
					o || 0
			}
			var e = createjs.extend(t, createjs.Filter);
			e.toString = function() {
				return "[ColorFilter]"
			}, e.clone = function() {
				return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this
					.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this
					.alphaOffset)
			}, e._applyFilter = function(t) {
				for (var e = t.data, i = e.length, n = 0; i > n; n += 4) e[n] = e[n] * this.redMultiplier +
					this.redOffset, e[n + 1] = e[n + 1] * this.greenMultiplier + this.greenOffset, e[n +
					2] = e[n + 2] * this.blueMultiplier + this.blueOffset, e[n + 3] = e[n + 3] * this
					.alphaMultiplier + this.alphaOffset;
				return !0
			}, createjs.ColorFilter = createjs.promote(t, "Filter")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t, e, i, n) {
				this.setColor(t, e, i, n)
			}
			var e = t.prototype;
			t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2,
				.21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56,
				.59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18,
				1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25,
				2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8,
				7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10
			], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
				1
			], t.LENGTH = t.IDENTITY_MATRIX.length, e.setColor = function(t, e, i, n) {
				return this.reset().adjustColor(t, e, i, n)
			}, e.reset = function() {
				return this.copy(t.IDENTITY_MATRIX)
			}, e.adjustColor = function(t, e, i, n) {
				return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this
					.adjustSaturation(i)
			}, e.adjustBrightness = function(t) {
				return 0 == t || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1,
					0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1
				]), this)
			}, e.adjustContrast = function(e) {
				if (0 == e || isNaN(e)) return this;
				e = this._cleanValue(e, 100);
				var i;
				return 0 > e ? i = 127 + e / 100 * 127 : (i = e % 1, i = 0 == i ? t.DELTA_INDEX[e] : t
						.DELTA_INDEX[e << 0] * (1 - i) + t.DELTA_INDEX[(e << 0) + 1] * i, i = 127 * i + 127
						), this._multiplyMatrix([i / 127, 0, 0, 0, .5 * (127 - i), 0, i / 127, 0, 0, .5 * (
						127 - i), 0, 0, i / 127, 0, .5 * (127 - i), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
			}, e.adjustSaturation = function(t) {
				if (0 == t || isNaN(t)) return this;
				t = this._cleanValue(t, 100);
				var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
					i = .3086,
					n = .6094,
					r = .082;
				return this._multiplyMatrix([i * (1 - e) + e, n * (1 - e), r * (1 - e), 0, 0, i * (1 - e),
					n * (1 - e) + e, r * (1 - e), 0, 0, i * (1 - e), n * (1 - e), r * (1 - e) + e,
					0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1
				]), this
			}, e.adjustHue = function(t) {
				if (0 == t || isNaN(t)) return this;
				t = this._cleanValue(t, 180) / 180 * Math.PI;
				var e = Math.cos(t),
					i = Math.sin(t),
					n = .213,
					r = .715,
					s = .072;
				return this._multiplyMatrix([n + e * (1 - n) + i * -n, r + e * -r + i * -r, s + e * -s + i *
					(1 - s), 0, 0, n + e * -n + .143 * i, r + e * (1 - r) + .14 * i, s + e * -s +
					i * -.283, 0, 0, n + e * -n + i * -(1 - n), r + e * -r + i * r, s + e * (1 -
					s) + i * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1
				]), this
			}, e.concat = function(e) {
				return e = this._fixMatrix(e), e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
			}, e.clone = function() {
				return (new t).copy(this)
			}, e.toArray = function() {
				for (var e = [], i = 0, n = t.LENGTH; n > i; i++) e[i] = this[i];
				return e
			}, e.copy = function(e) {
				for (var i = t.LENGTH, n = 0; i > n; n++) this[n] = e[n];
				return this
			}, e.toString = function() {
				return "[ColorMatrix]"
			}, e._multiplyMatrix = function(t) {
				var e, i, n, r = [];
				for (e = 0; 5 > e; e++) {
					for (i = 0; 5 > i; i++) r[i] = this[i + 5 * e];
					for (i = 0; 5 > i; i++) {
						var s = 0;
						for (n = 0; 5 > n; n++) s += t[i + 5 * n] * r[n];
						this[i + 5 * e] = s
					}
				}
			}, e._cleanValue = function(t, e) {
				return Math.min(e, Math.max(-e, t))
			}, e._fixMatrix = function(e) {
				return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length)
					.concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e
						.slice(0, t.LENGTH)), e
			}, createjs.ColorMatrix = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t(t) {
				this.matrix = t
			}
			var e = createjs.extend(t, createjs.Filter);
			e.toString = function() {
				return "[ColorMatrixFilter]"
			}, e.clone = function() {
				return new t(this.matrix)
			}, e._applyFilter = function(t) {
				for (var e, i, n, r, s = t.data, a = s.length, o = this.matrix, l = o[0], h = o[1], u = o[
						2], c = o[3], f = o[4], p = o[5], d = o[6], m = o[7], g = o[8], _ = o[9], v = o[10],
						y = o[11], x = o[12], b = o[13], w = o[14], T = o[15], S = o[16], C = o[17], P = o[
							18], k = o[19], E = 0; a > E; E += 4) e = s[E], i = s[E + 1], n = s[E + 2], r =
					s[E + 3], s[E] = e * l + i * h + n * u + r * c + f, s[E + 1] = e * p + i * d + n * m +
					r * g + _, s[E + 2] = e * v + i * y + n * x + r * b + w, s[E + 3] = e * T + i * S + n *
					C + r * P + k;
				return !0
			}, createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";

			function t() {
				throw "Touch cannot be instantiated"
			}
			t.isSupported = function() {
				return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator
					.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator
					.maxTouchPoints > 0)
			}, t.enable = function(e, i, n) {
				return e && e.canvas && t.isSupported() ? e.__touch ? !0 : (e.__touch = {
					pointers: {},
					multitouch: !i,
					preventDefault: !n,
					count: 0
				}, "ontouchstart" in window ? t._IOS_enable(e) : (window.navigator
					.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_enable(e), !0) : !1
			}, t.disable = function(e) {
				e && ("ontouchstart" in window ? t._IOS_disable(e) : (window.navigator.msPointerEnabled ||
					window.navigator.pointerEnabled) && t._IE_disable(e), delete e.__touch)
			}, t._IOS_enable = function(e) {
				var i = e.canvas,
					n = e.__touch.f = function(i) {
						t._IOS_handleEvent(e, i)
					};
				i.addEventListener("touchstart", n, !1), i.addEventListener("touchmove", n, !1), i
					.addEventListener("touchend", n, !1), i.addEventListener("touchcancel", n, !1)
			}, t._IOS_disable = function(t) {
				var e = t.canvas;
				if (e) {
					var i = t.__touch.f;
					e.removeEventListener("touchstart", i, !1), e.removeEventListener("touchmove", i, !1), e
						.removeEventListener("touchend", i, !1), e.removeEventListener("touchcancel", i, !1)
				}
			}, t._IOS_handleEvent = function(t, e) {
				if (t) {
					t.__touch.preventDefault && e.preventDefault && e.preventDefault();
					for (var i = e.changedTouches, n = e.type, r = 0, s = i.length; s > r; r++) {
						var a = i[r],
							o = a.identifier;
						a.target == t.canvas && ("touchstart" == n ? this._handleStart(t, o, e, a.pageX, a
								.pageY) : "touchmove" == n ? this._handleMove(t, o, e, a.pageX, a
							.pageY) : ("touchend" == n || "touchcancel" == n) && this._handleEnd(t, o,
								e))
					}
				}
			}, t._IE_enable = function(e) {
				var i = e.canvas,
					n = e.__touch.f = function(i) {
						t._IE_handleEvent(e, i)
					};
				void 0 === window.navigator.pointerEnabled ? (i.addEventListener("MSPointerDown", n, !1),
						window.addEventListener("MSPointerMove", n, !1), window.addEventListener(
							"MSPointerUp", n, !1), window.addEventListener("MSPointerCancel", n, !1), e
						.__touch.preventDefault && (i.style.msTouchAction = "none")) : (i.addEventListener(
							"pointerdown", n, !1), window.addEventListener("pointermove", n, !1), window
						.addEventListener("pointerup", n, !1), window.addEventListener("pointercancel", n, !
							1), e.__touch.preventDefault && (i.style.touchAction = "none")), e.__touch
					.activeIDs = {}
			}, t._IE_disable = function(t) {
				var e = t.__touch.f;
				void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e,
						!1), window.removeEventListener("MSPointerUp", e, !1), window
					.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas
					.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener(
						"pointermove", e, !1), window.removeEventListener("pointerup", e, !1), window
					.removeEventListener("pointercancel", e, !1), t.canvas && t.canvas
					.removeEventListener("pointerdown", e, !1))
			}, t._IE_handleEvent = function(t, e) {
				if (t) {
					t.__touch.preventDefault && e.preventDefault && e.preventDefault();
					var i = e.type,
						n = e.pointerId,
						r = t.__touch.activeIDs;
					if ("MSPointerDown" == i || "pointerdown" == i) {
						if (e.srcElement != t.canvas) return;
						r[n] = !0, this._handleStart(t, n, e, e.pageX, e.pageY)
					} else r[n] && ("MSPointerMove" == i || "pointermove" == i ? this._handleMove(t, n, e, e
						.pageX, e.pageY) : ("MSPointerUp" == i || "MSPointerCancel" == i ||
						"pointerup" == i || "pointercancel" == i) && (delete r[n], this._handleEnd(
						t, n, e)))
				}
			}, t._handleStart = function(t, e, i, n, r) {
				var s = t.__touch;
				if (s.multitouch || !s.count) {
					var a = s.pointers;
					a[e] || (a[e] = !0, s.count++, t._handlePointerDown(e, i, n, r))
				}
			}, t._handleMove = function(t, e, i, n, r) {
				t.__touch.pointers[e] && t._handlePointerMove(e, i, n, r)
			}, t._handleEnd = function(t, e, i) {
				var n = t.__touch,
					r = n.pointers;
				r[e] && (n.count--, t._handlePointerUp(e, i, !0), delete r[e])
			}, createjs.Touch = t
		}(), this.createjs = this.createjs || {},
		function() {
			"use strict";
			var t = createjs.EaselJS = createjs.EaselJS || {};
			t.version = "0.8.2", t.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
		}()
}, function() {
	! function(t, e, i) {
		function n(t, e) {
			return typeof t === e
		}

		function r() {
			var t, e, i, r, s, a, o;
			for (var l in x)
				if (x.hasOwnProperty(l)) {
					if (t = [], e = x[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options
							.aliases && e.options.aliases.length))
						for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i]
						.toLowerCase());
					for (r = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) a = t[s], o = a
						.split("."), 1 === o.length ? w[o[0]] = r : (!w[o[0]] || w[o[0]] instanceof Boolean || (
							w[o[0]] = new Boolean(w[o[0]])), w[o[0]][o[1]] = r), S.push((r ? "" : "no-") + o
							.join("-"))
				}
		}

		function s(t) {
			var e = C.className,
				i = w._config.classPrefix || "";
			if (P && (e = e.baseVal), w._config.enableJSClass) {
				var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
				e = e.replace(n, "$1" + i + "js$2")
			}
			w._config.enableClasses && (e += " " + i + t.join(" " + i), P ? C.className.baseVal = e : C
				.className = e)
		}

		function a(t, e) {
			if ("object" == typeof t)
				for (var i in t) T(t, i) && a(i, t[i]);
			else if (t) {
				t = t.toLowerCase();
				var n = t.split("."),
					r = w[n[0]];
				if (2 == n.length && (r = r[n[1]]), "undefined" != typeof r) return w;
				e = "function" == typeof e ? e() : e, 1 == n.length ? w[n[0]] = e : (!w[n[0]] || w[n[
					0]] instanceof Boolean || (w[n[0]] = new Boolean(w[n[0]])), w[n[0]][n[1]] = e), s([(e &&
					0 != e ? "" : "no-") + n.join("-")]), w._trigger(t, e)
			}
			return w
		}

		function o() {
			return "function" != typeof e.createElement ? e.createElement(arguments[0]) : P ? e.createElementNS
				.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
		}

		function l(t, e) {
			return !!~("" + t).indexOf(e)
		}

		function h() {
			var t = e.body;
			return t || (t = o(P ? "svg" : "body"), t.fake = !0), t
		}

		function u(t, i, n, r) {
			var s, a, l, u, c = "modernizr",
				f = o("div"),
				p = h();
			if (parseInt(n, 10))
				for (; n--;) l = o("div"), l.id = r ? r[n] : c + (n + 1), f.appendChild(l);
			return s = o("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : f).appendChild(s), p
				.appendChild(f), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), f
				.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = C.style.overflow,
					C.style.overflow = "hidden", C.appendChild(p)), a = i(f, t), p.fake ? (p.parentNode
					.removeChild(p), C.style.overflow = u, C.offsetHeight) : f.parentNode.removeChild(f), !!a
		}

		function c(t) {
			return t.replace(/([A-Z])/g, function(t, e) {
				return "-" + e.toLowerCase()
			}).replace(/^ms-/, "-ms-")
		}

		function f(e, i, n) {
			var r;
			if ("getComputedStyle" in t) {
				r = getComputedStyle.call(t, e, i);
				var s = t.console;
				if (null !== r) n && (r = r.getPropertyValue(n));
				else if (s) {
					var a = s.error ? "error" : "log";
					s[a].call(s,
						"getComputedStyle returning null, its possible modernizr test results are inaccurate"
						)
				}
			} else r = !i && e.currentStyle && e.currentStyle[n];
			return r
		}

		function p(e, n) {
			var r = e.length;
			if ("CSS" in t && "supports" in t.CSS) {
				for (; r--;)
					if (t.CSS.supports(c(e[r]), n)) return !0;
				return !1
			}
			if ("CSSSupportsRule" in t) {
				for (var s = []; r--;) s.push("(" + c(e[r]) + ":" + n + ")");
				return s = s.join(" or "), u("@supports (" + s + ") { #modernizr { position: absolute; } }",
					function(t) {
						return "absolute" == f(t, null, "position")
					})
			}
			return i
		}

		function d(t) {
			return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
				return e + i.toUpperCase()
			}).replace(/^-/, "")
		}

		function m(t, e, r, s) {
			function a() {
				u && (delete A.style, delete A.modElem)
			}
			if (s = n(s, "undefined") ? !1 : s, !n(r, "undefined")) {
				var h = p(t, r);
				if (!n(h, "undefined")) return h
			}
			for (var u, c, f, m, g, _ = ["modernizr", "tspan", "samp"]; !A.style && _.length;) u = !0, A
				.modElem = o(_.shift()), A.style = A.modElem.style;
			for (f = t.length, c = 0; f > c; c++)
				if (m = t[c], g = A.style[m], l(m, "-") && (m = d(m)), A.style[m] !== i) {
					if (s || n(r, "undefined")) return a(), "pfx" == e ? m : !0;
					try {
						A.style[m] = r
					} catch (v) {}
					if (A.style[m] != g) return a(), "pfx" == e ? m : !0
				} return a(), !1
		}

		function g(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}

		function _(t, e, i) {
			var r;
			for (var s in t)
				if (t[s] in e) return i === !1 ? t[s] : (r = e[t[s]], n(r, "function") ? g(r, i || e) : r);
			return !1
		}

		function v(t, e, i, r, s) {
			var a = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + j.join(a + " ") + a).split(" ");
			return n(e, "string") || n(e, "undefined") ? m(o, e, r, s) : (o = (t + " " + N.join(a + " ") + a)
				.split(" "), _(o, e, i))
		}

		function y(t, e, n) {
			return v(t, i, i, e, n)
		}
		var x = [],
			b = {
				_version: "3.4.0",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function(t, e) {
					var i = this;
					setTimeout(function() {
						e(i[t])
					}, 0)
				},
				addTest: function(t, e, i) {
					x.push({
						name: t,
						fn: e,
						options: i
					})
				},
				addAsyncTest: function(t) {
					x.push({
						name: null,
						fn: t
					})
				}
			},
			w = function() {};
		w.prototype = b, w = new w;
		var T, S = [],
			C = e.documentElement,
			P = "svg" === C.nodeName.toLowerCase();
		! function() {
			var t = {}.hasOwnProperty;
			T = n(t, "undefined") || n(t.call, "undefined") ? function(t, e) {
				return e in t && n(t.constructor.prototype[e], "undefined")
			} : function(e, i) {
				return t.call(e, i)
			}
		}(), b._l = {}, b.on = function(t, e) {
			this._l[t] || (this._l[t] = []), this._l[t].push(e), w.hasOwnProperty(t) && setTimeout(
			function() {
				w._trigger(t, w[t])
			}, 0)
		}, b._trigger = function(t, e) {
			if (this._l[t]) {
				var i = this._l[t];
				setTimeout(function() {
					var t, n;
					for (t = 0; t < i.length; t++)(n = i[t])(e)
				}, 0), delete this._l[t]
			}
		}, w._q.push(function() {
			b.addTest = a
		});
		var k = function() {
			function t(t, e) {
				var r;
				return t ? (e && "string" != typeof e || (e = o(e || "div")), t = "on" + t, r = t in e, !
						r && n && (e.setAttribute || (e = o("div")), e.setAttribute(t, ""), r =
							"function" == typeof e[t], e[t] !== i && (e[t] = i), e.removeAttribute(t)), r) :
					!1
			}
			var n = !("onblur" in e.documentElement);
			return t
		}();
		b.hasEvent = k;
		var E = {
			elem: o("modernizr")
		};
		w._q.push(function() {
			delete E.elem
		});
		var A = {
			style: E.elem.style
		};
		w._q.unshift(function() {
			delete A.style
		});
		var O = (b.testProp = function(t, e, n) {
				return m([t], i, e, n)
			}, b.testStyles = u),
			D = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
		b._prefixes = D, w.addTest("touchevents", function() {
			var i;
			if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
			else {
				var n = ["@media (", D.join("touch-enabled),("), "heartz", ")",
					"{#modernizr{top:9px;position:absolute}}"
				].join("");
				O(n, function(t) {
					i = 9 === t.offsetTop
				})
			}
			return i
		}), w.addTest("audio", function() {
			var t = o("audio"),
				e = !1;
			try {
				e = !!t.canPlayType, e && (e = new Boolean(e), e.ogg = t.canPlayType(
						'audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType(
						'audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = t.canPlayType(
						'audio/ogg; codecs="opus"') || t.canPlayType('audio/webm; codecs="opus"')
					.replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(
						/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType(
						"audio/aac;")).replace(/^no$/, ""))
			} catch (i) {}
			return e
		}), w.addTest("canvas", function() {
			var t = o("canvas");
			return !(!t.getContext || !t.getContext("2d"))
		}), w.addTest("cookies", function() {
			try {
				e.cookie = "cookietest=1";
				var t = -1 != e.cookie.indexOf("cookietest=");
				return e.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
			} catch (i) {
				return !1
			}
		});
		var M = "Moz O ms Webkit",
			j = b._config.usePrefixes ? M.split(" ") : [];
		b._cssomPrefixes = j;
		var N = b._config.usePrefixes ? M.toLowerCase().split(" ") : [];
		b._domPrefixes = N, b.testAllProps = v, b.testAllProps = y, w.addTest("cssanimations", y(
				"animationName", "a", !0)), w.addTest("backgroundsize", y("backgroundSize", "100%", !0)), w
			.addTest("bgsizecover", y("backgroundSize", "cover")), w.addTest("boxsizing", y("boxSizing",
				"border-box", !0) && (e.documentMode === i || e.documentMode > 7)), w.addTest("flexbox", y(
				"flexBasis", "1px", !0)), w.addTest("cssgradients", function() {
				for (var t, e = "background-image:", i =
						"gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "", r = 0, s = D
						.length - 1; s > r; r++) t = 0 === r ? "to " : "", n += e + D[r] +
					"linear-gradient(" + t + "left top, #9f9, white);";
				w._config.usePrefixes && (n += e + "-webkit-" + i);
				var a = o("a"),
					l = a.style;
				return l.cssText = n, ("" + l.backgroundImage).indexOf("gradient") > -1
			});
		var R = function() {
			var t = navigator.userAgent,
				e = t.match(/w(eb)?osbrowser/gi),
				i = t.match(/windows phone/gi) && t.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp
				.$1) >= 9;
			return e || i
		}();
		R ? w.addTest("fontface", !1) : O('@font-face {font-family:"font";src:url("https://")}', function(t,
		i) {
			var n = e.getElementById("smodernizr"),
				r = n.sheet || n.styleSheet,
				s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
				a = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
			w.addTest("fontface", a)
		}), w.addTest("cssmask", y("maskRepeat", "repeat-x", !0)), w.addTest("csstransforms", function() {
			return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
		});
		var L = "CSS" in t && "supports" in t.CSS,
			F = "supportsCSS" in t;
		w.addTest("supports", L || F), w.addTest("csstransforms3d", function() {
			var t = !!y("perspective", "1px", !0),
				e = w._config.usePrefixes;
			if (t && (!e || "webkitPerspective" in C.style)) {
				var i, n = "#modernizr{width:0;height:0}";
				w.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (
						i += ",(-webkit-transform-3d)")), i +=
					"{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", O(n + i,
						function(e) {
							t = 7 === e.offsetWidth && 18 === e.offsetHeight
						})
			}
			return t
		}), w.addTest("preserve3d", function() {
			var e, i, n = t.CSS,
				r = !1;
			return n && n.supports && n.supports("(transform-style: preserve-3d)") ? !0 : (e = o("a"),
				i = o("a"), e.style.cssText =
				"display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",
				i.style.cssText =
				"display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",
				e.appendChild(i), C.appendChild(e), r = i.getBoundingClientRect(), C.removeChild(e),
				r = r.width && r.width < 4)
		}), w.addTest("csstransitions", y("transition", "all", !0)), w.addTest("willchange", "willChange" in
			C.style), w.addTest("customevent", "CustomEvent" in t && "function" == typeof t.CustomEvent);
		var I = function(e) {
			var n, r = D.length,
				s = t.CSSRule;
			if ("undefined" == typeof s) return i;
			if (!e) return !1;
			if (e = e.replace(/^@/, ""), n = e.replace(/-/g, "_").toUpperCase() + "_RULE", n in s)
			return "@" + e;
			for (var a = 0; r > a; a++) {
				var o = D[a],
					l = o.toUpperCase() + "_" + n;
				if (l in s) return "@-" + o.toLowerCase() + "-" + e
			}
			return !1
		};
		b.atRule = I;
		var B = b.prefixed = function(t, e, i) {
			return 0 === t.indexOf("@") ? I(t) : (-1 != t.indexOf("-") && (t = d(t)), e ? v(t, e, i) : v(t,
				"pfx"))
		};
		w.addTest("fullscreen", !(!B("exitFullscreen", e, !1) && !B("cancelFullScreen", e, !1))), w.addTest(
				"hashchange",
				function() {
					return k("hashchange", t) === !1 ? !1 : e.documentMode === i || e.documentMode > 7
				}), w.addTest("history", function() {
				var e = navigator.userAgent;
				return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e
					.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf(
						"Windows Phone") || "file:" === location.protocol ? t.history && "pushState" in t
					.history : !1
			}), w.addTest("ie8compat", !t.addEventListener && !!e.documentMode && 7 === e.documentMode), w
			.addAsyncTest(function() {
				if (!w.canvas) return !1;
				var t = new Image,
					e = o("canvas"),
					i = e.getContext("2d");
				t.onload = function() {
						a("apng", function() {
							return "undefined" == typeof e.getContext ? !1 : (i.drawImage(t, 0, 0),
								0 === i.getImageData(0, 0, 1, 1).data[3])
						})
					}, t.src =
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
			}), w.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg")
				.createSVGRect), w.addTest("video", function() {
				var t = o("video"),
					e = !1;
				try {
					e = !!t.canPlayType, e && (e = new Boolean(e), e.ogg = t.canPlayType(
							'video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType(
							'video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t
						.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = t
						.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = t
						.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
				} catch (i) {}
				return e
			}), w.addTest("webgl", function() {
				var e = o("canvas"),
					i = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
				return i in e ? e[i]("webgl") || e[i]("experimental-webgl") : "WebGLRenderingContext" in t
			}), r(), s(S), delete b.addTest, delete b.addAsyncTest;
		for (var z = 0; z < w._q.length; z++) w._q[z]();
		t.Modernizr = w
	}(window, document)
}, function() {
	! function(t, e, i) {
		function n(i, n) {
			a.autoresize = !1, t.extend(this, a, n), s = this, this.ele = i, this.eles = t("img"), this
				.elements = [], this.$win = t(e), this.ww = null, this.wh = null, this.reg =
				/(\S+)(\.)(jpg|png|gif|jpeg)(\S*)$/, this.curLevelName = null, this.root = e, this.isRetina =
				this.supportRetina(), this.initialise()
		}
		var r = "resizeImage",
			s = null,
			a = {
				levelName: ["big", "normal", "small", "mini"],
				dimensions: [
					[2560, 1600],
					[1920, 1080],
					[1440, 880],
					[1280, 720]
				],
				autoresize: !1,
				exclude: "nochange"
			};
		n.prototype.initialise = function() {
			for (var e = 0, i = this.ele.length; i > e; e++) this.autoresize && t(this.ele[e]).data({
				resize: !0
			});
			for (var e = 0, i = this.eles.length; i > e; e++) this.elements.push(this.eles[e]);
			this.$win.on("resize", this.onWinResize), this.onWinResize()
		}, n.prototype.supportRetina = function() {
			var t =
				"(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
			return this.root.devicePixelRatio > 1 ? !0 : this.root.matchMedia && this.root.matchMedia(t)
				.matches ? !0 : !1
		}, n.prototype.addmark = function() {
			if (this.curLevelName = this.getLevelName(), !t("html").hasClass(this.curLevelName)) {
				for (var i = 0, n = this.levelName.length; n > i; i++) t("html").hasClass(this.levelName[
					i]) && t("html").removeClass(this.levelName[i]);
				t("html").addClass(this.curLevelName), e.ResizeLevelName = this.curLevelName
			}
			this.changeImages()
		}, n.prototype.getImageName = function(t) {
			for (var e = !1, i = null, n = 0, r = this.levelName.length; r > n; n++)
				if (t.indexOf(this.levelName[n]) > -1) {
					i = t.replace("normal" === this.curLevelName ? "-" + this.levelName[n] : this.levelName[
						n], "normal" === this.curLevelName ? "" : this.curLevelName), e = !0;
					break
				} return e || (this.reg.test(t.replace("-x2", "")), i = RegExp.$1 + ("normal" === this
					.curLevelName ? "" : "-" + this.curLevelName) + (this.isRetina ? "-x2" : "") +
				RegExp.$2 + RegExp.$3 + RegExp.$4), i
		}, n.prototype.changeImages = function() {
			for (var e = 0, i = this.elements.length; i > e; e++)
				if (!t(this.elements[e]).data("pass") || t(this.elements[e]).data("resize")) {
					var n = null;
					if (!t(this.elements[e]).hasClass(this.exclude) && t(this.elements[e]).data("resize") &&
						this.autoresize) {
						var r = t(this.elements[e]).data("x2") || this.elements[e].src;
						n = this.getImageName(this.isRetina ? r : this.elements[e].src)
					} else n = this.isRetina ? t(this.elements[e]).data("x2") || this.elements[e].src : this
						.elements[e].src;
					t(this.elements[e]).attr("src", n).removeAttr("data-x2").data({
						pass: !0
					})
				}
		}, n.prototype.getLevelName = function() {
			this.updateDimensions();
			for (var t = null, e = 0, i = this.levelName.length; i > e; e++)(this.dimensions[e][0] > this
				.ww || this.dimensions[e][1] > this.wh) && (t = this.levelName[e]);
			return t || this.levelName[0]
		}, n.prototype.updateDimensions = function() {
			this.ww = this.$win.width(), this.wh = this.$win.height()
		}, n.prototype.onWinResize = function() {
			s.addmark()
		}, t.fn[r] = function(t) {
			return plugin = new n(this, t)
		}, t(i).ready(function() {
			t("img").resizeImage({
				autoresize: !1
			})
		})
	}(jQuery, window, document)
}]);