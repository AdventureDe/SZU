! function(t) {
	function e(r) {
		if (n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var n = {};
	return e.m = t, e.c = n, e.d = function(t, n, r) {
		e.o(t, n) || Object.defineProperty(t, n, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 12)
}([function(t) {
	var e = t.exports = {
		version: "2.6.3"
	};
	"number" == typeof __e && (__e = e)
}, function(t, e, n) {
	t.exports = !n(4)(function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(t) {
	var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" !=
		typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = e)
}, function(t) {
	t.exports = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t) {
	t.exports = function(t) {
		try {
			return !!t()
		} catch (e) {
			return !0
		}
	}
}, function(t, e, n) {
	var r = n(2),
		o = n(0),
		i = n(17),
		a = n(19),
		s = n(7),
		u = "prototype",
		c = function(t, e, n) {
			var f, l, p, h = t & c.F,
				d = t & c.G,
				m = t & c.S,
				v = t & c.P,
				g = t & c.B,
				y = t & c.W,
				w = d ? o : o[e] || (o[e] = {}),
				b = w[u],
				_ = d ? r : m ? r[e] : (r[e] || {})[u];
			d && (n = e);
			for (f in n) l = !h && _ && void 0 !== _[f], l && s(w, f) || (p = l ? _[f] : n[f], w[f] = d &&
				"function" != typeof _[f] ? n[f] : g && l ? i(p, r) : y && _[f] == p ? function(t) {
					var e = function(e, n, r) {
						if (this instanceof t) {
							switch (arguments.length) {
								case 0:
									return new t;
								case 1:
									return new t(e);
								case 2:
									return new t(e, n)
							}
							return new t(e, n, r)
						}
						return t.apply(this, arguments)
					};
					return e[u] = t[u], e
				}(p) : v && "function" == typeof p ? i(Function.call, p) : p, v && ((w.virtual || (w
					.virtual = {}))[f] = p, t & c.R && b && !b[f] && a(b, f, p)))
		};
	c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
	var r = n(20),
		o = n(21),
		i = n(23),
		a = Object.defineProperty;
	e.f = n(1) ? Object.defineProperty : function(t, e, n) {
		if (r(t), e = i(e, !0), r(n), o) try {
			return a(t, e, n)
		} catch (s) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (t[e] = n.value), t
	}
}, function(t) {
	var e = {}.hasOwnProperty;
	t.exports = function(t, n) {
		return e.call(t, n)
	}
}, function(t, e, n) {
	var r = n(9),
		o = n(10);
	t.exports = function(t) {
		return r(o(t))
	}
}, function(t, e, n) {
	var r = n(28);
	t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
		return "String" == r(t) ? t.split("") : Object(t)
	}
}, function(t) {
	t.exports = function(t) {
		if (void 0 == t) throw TypeError("Can't call method on  " + t);
		return t
	}
}, function(t) {
	var e = Math.ceil,
		n = Math.floor;
	t.exports = function(t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t)
	}
}, function(t, e, n) {
	"use strict";
	n(13), n(45), $(function() {
		window.vpHeaderChangeDeeplinkUrl && window.vpHeaderChangeDeeplinkUrl(
				"space://vivo.com/deeplinkbridge?pageName=main"), vp_frontNoDeepLink || window
			.vpHeaderDeeplinkConfig && window.vpHeaderDeeplinkConfig(
				"space://vivo.com/deeplinkbridge?pageName=main")
	})
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	var i = n(14),
		a = r(i),
		s = n(40),
		u = r(s),
		c = a.default || function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
			}
			return t
		},
		f = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), u
						.default(t, r.key, r)
				}
			}
			return function(e, n, r) {
				return n && t(e.prototype, n), r && t(e, r), e
			}
		}(),
		l = n(43),
		p = r(l),
		h = function() {
			function t() {
				o(this, t), this.animateList = [], this.windowWidth = document.documentElement.clientWidth, this
					.fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
			}
			return f(t, [{
				key: "init",
				value: function() {
					this.lazyLoadImg(), this.getAnimateList(), this.setAnimate(), this
						.addResizeListener(), this.bindEvent()
				}
			}, {
				key: "setAnimate",
				value: function() {
					var t = this;
					if (Array.prototype.find || (Array.prototype.find = function(t) {
							return t && (this.filter(t) || [])[0]
						}), this.animateList) {
						var e = new IntersectionObserver(function(n) {
							n.forEach(function(n) {
								var r = t.animateList.find(function(e) {
									return n.target == e.group && e
										.type == (t.windowWidth > 768 ?
											"pc" : "wap")
								});
								r && n.intersectionRatio > r.observe && (e
									.unobserve(n.target), r.items.forEach(
										function(t) {
											t.item.classList.add(
													"will-change"), p
												.default.animate(t.item, {
														translateY: t.y,
														opacity: t
															.opacity || 0
													}, {
														translateY: 0,
														opacity: 100
													}, t.time, t.start || 0,
													"easeIn",
													function() {
														t.item.classList
															.remove(
																"will-change"
																)
													})
										}))
							})
						}, {
							threshold: [0, .18, .25]
						});
						this.animateList.forEach(function(t) {
							e.observe(t.group)
						})
					}
				}
			}, {
				key: "getAnimateList",
				value: function() {
					var t = document.querySelectorAll("div[data-animate-group]"),
						e = document.querySelectorAll("div[data-animate-pc-group]"),
						n = document.querySelectorAll("[data-animate-wap-group]");
					if (e || n) {
						for (var r = this, o = 0; o < e.length; o++) {
							for (var i = e[o], a = i.getAttribute("data-animate-pc-group"), s =
									i.getAttribute("data-animate-pc-observe") || 0, u = [], f =
									i.querySelectorAll("[data-animate-pc-prop]"), l = 0; l < f
								.length; l++) {
								var p = f[l],
									h = p.getAttribute("data-animate-pc-prop"),
									d = new Function("return " + h)();
								"top-opacity-enter" == a && r.windowWidth > 768 && r
									.windowWidth < 1600 && (d.y = d.y / 1600 * r.windowWidth, p
										.setAttribute("style", "opacity:" + d.opacity / 100 +
											";transform:translateY(" + d.y + "px)")), p
									.removeAttribute("data-animate-pc-prop"), u.push(c({
										item: p
									}, d))
							}
							r.animateList.push({
								type: "pc",
								name: a,
								group: i,
								items: u,
								observe: s
							})
						}
						for (var m = 0; m < n.length; m++) {
							for (var v = n[m], g = v.getAttribute("data-animate-wap-group"), y =
									v.getAttribute("data-animate-wap-observe") || 0, w = [], b =
									v.querySelectorAll("[data-animate-wap-prop]"), _ = 0; _ < b
								.length; _++) {
								var I = b[_],
									O = I.getAttribute("data-animate-wap-prop"),
									x = new Function("return " + O)();
								"top-opacity-enter" == g && r.windowWidth <= 768 && (x.y =
										parseInt(x.y / 100 * r.fontSize), I.setAttribute(
											"style", "opacity:" + x.opacity / 100 +
											";transform:translateY(" + x.y + "px)")), I
									.removeAttribute("data-animate-wap-prop"), w.push(c({
										item: I
									}, x))
							}
							r.animateList.push({
								type: "wap",
								name: g,
								group: v,
								items: w,
								observe: y
							})
						}
						for (var A = 0; A < t.length; A++) {
							for (var E = t[A], T = E.getAttribute("data-animate-group"), R = E
									.getAttribute("data-animate-pc-observe") || 0, k = E
									.getAttribute("data-animate-wap-observe") || 0, F = [],
									S = [], M = E.querySelectorAll("[data-animate-pc-prop]"),
									C = 0; C < M.length; C++) {
								var L = M[C],
									j = L.getAttribute("data-animate-pc-prop"),
									q = new Function("return " + j)();
								"top-opacity-enter" == T && (r.windowWidth > 768 && r
										.windowWidth < 1600 && (q.y = q.y / 1600 * r
											.windowWidth), L.setAttribute("style", "opacity:" +
											q.opacity / 100 + ";transform:translateY(" + q.y +
											"px)")), L.removeAttribute("data-animate-pc-prop"),
									F.push(c({
										item: L
									}, q))
							}
							for (var P = E.querySelectorAll("div[data-animate-wap-prop]"), $ =
								0; $ < P.length; $++) {
								var z = P[$],
									W = z.getAttribute("data-animate-wap-prop"),
									N = new Function("return " + W)();
								"top-opacity-enter" == T && r.windowWidth <= 768 && (N.y =
										parseInt(N.y / 100 * r.fontSize), z.setAttribute(
											"style", "opacity:" + N.opacity / 100 +
											";transform:translateY(" + N.y + "px)")), z
									.removeAttribute("data-animate-wap-prop"), S.push(c({
										item: z
									}, N))
							}
							r.animateList.push({
								type: "pc",
								name: T,
								group: E,
								items: F,
								observe: R
							}), r.animateList.push({
								type: "wap",
								name: T,
								group: E,
								items: S,
								observe: k
							})
						}
					}
				}
			}, {
				key: "addResizeListener",
				value: function() {
					var t = this;
					window.addEventListener("resize", function() {
						t.windowWidth = document.documentElement.clientWidth, t
							.fontSize = parseFloat(getComputedStyle(document
								.documentElement).fontSize)
					})
				}
			}, {
				key: "bindEvent",
				value: function() {
					var t = this,
						e = $(".J-video-control");
					e.on("click", function() {
						var t = $(this).find("video").attr("data-src");
						if (t) {
							var e = $(this).find("video").attr("data-poster"),
								n = $(this).find("video").attr("data-params"),
								r = {
									mount: "#J_video",
									url: t,
									post: e || ""
								};
							n && (r.dataParams = n); {
								new Video(r)
							}
						}
					}), e.hover(function() {
						var e = this,
							n = $(this).find("video")[0],
							r = $(this).find("video").attr("src"),
							o = $(this).find(".coverImg");
						n && r && (t.timer = setTimeout(function() {
							o.addClass("cover-hide"), $(e).hasClass(
									"video-whole") ? $(e).find(
									".banner-sm-content").hide() : "", n
								.play()
						}, 200))
					}, function() {
						if (t.timer) {
							clearTimeout(t.timer);
							var e = $(this).find("video")[0],
								n = $(this).find(".coverImg");
							$(this).hasClass("video-whole") ? $(this).find(
									".banner-sm-content").show() : "", n && n
								.removeClass("cover-hide"), e && (e.currentTime = 0)
						}
					})
				}
			}, {
				key: "lazyLoadImg",
				value: function() {
					setTimeout(function() {
						var t = $(".lazyLoad");
						t.each(function(t, e) {
							var n = $(e).data("src") || $(e).data("srcset");
							$(e).data("src") ? $(e).attr("src", n).removeAttr(
									"data-src") : $(e).attr("srcset", n)
								.removeAttr("data-srcset")
						})
					}, 1e3)
				}
			}]), t
		}();
	$(function() {
		(new h).init()
	})
}, function(t, e, n) {
	t.exports = {
		"default": n(15),
		__esModule: !0
	}
}, function(t, e, n) {
	n(16), t.exports = n(0).Object.assign
}, function(t, e, n) {
	var r = n(5);
	r(r.S + r.F, "Object", {
		assign: n(25)
	})
}, function(t, e, n) {
	var r = n(18);
	t.exports = function(t, e, n) {
		if (r(t), void 0 === e) return t;
		switch (n) {
			case 1:
				return function(n) {
					return t.call(e, n)
				};
			case 2:
				return function(n, r) {
					return t.call(e, n, r)
				};
			case 3:
				return function(n, r, o) {
					return t.call(e, n, r, o)
				}
		}
		return function() {
			return t.apply(e, arguments)
		}
	}
}, function(t) {
	t.exports = function(t) {
		if ("function" != typeof t) throw TypeError(t + " is not a function!");
		return t
	}
}, function(t, e, n) {
	var r = n(6),
		o = n(24);
	t.exports = n(1) ? function(t, e, n) {
		return r.f(t, e, o(1, n))
	} : function(t, e, n) {
		return t[e] = n, t
	}
}, function(t, e, n) {
	var r = n(3);
	t.exports = function(t) {
		if (!r(t)) throw TypeError(t + " is not an object!");
		return t
	}
}, function(t, e, n) {
	t.exports = !n(1) && !n(4)(function() {
		return 7 != Object.defineProperty(n(22)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(t, e, n) {
	var r = n(3),
		o = n(2).document,
		i = r(o) && r(o.createElement);
	t.exports = function(t) {
		return i ? o.createElement(t) : {}
	}
}, function(t, e, n) {
	var r = n(3);
	t.exports = function(t, e) {
		if (!r(t)) return t;
		var n, o;
		if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
		if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t) {
	t.exports = function(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
}, function(t, e, n) {
	"use strict";
	var r = n(26),
		o = n(37),
		i = n(38),
		a = n(39),
		s = n(9),
		u = Object.assign;
	t.exports = !u || n(4)(function() {
		var t = {},
			e = {},
			n = Symbol(),
			r = "abcdefghijklmnopqrst";
		return t[n] = 7, r.split("").forEach(function(t) {
			e[t] = t
		}), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
	}) ? function(t) {
		for (var e = a(t), n = arguments.length, u = 1, c = o.f, f = i.f; n > u;)
			for (var l, p = s(arguments[u++]), h = c ? r(p).concat(c(p)) : r(p), d = h.length, m = 0; d >
				m;) f.call(p, l = h[m++]) && (e[l] = p[l]);
		return e
	} : u
}, function(t, e, n) {
	var r = n(27),
		o = n(36);
	t.exports = Object.keys || function(t) {
		return r(t, o)
	}
}, function(t, e, n) {
	var r = n(7),
		o = n(8),
		i = n(29)(!1),
		a = n(32)("IE_PROTO");
	t.exports = function(t, e) {
		var n, s = o(t),
			u = 0,
			c = [];
		for (n in s) n != a && r(s, n) && c.push(n);
		for (; e.length > u;) r(s, n = e[u++]) && (~i(c, n) || c.push(n));
		return c
	}
}, function(t) {
	var e = {}.toString;
	t.exports = function(t) {
		return e.call(t).slice(8, -1)
	}
}, function(t, e, n) {
	var r = n(8),
		o = n(30),
		i = n(31);
	t.exports = function(t) {
		return function(e, n, a) {
			var s, u = r(e),
				c = o(u.length),
				f = i(a, c);
			if (t && n != n) {
				for (; c > f;)
					if (s = u[f++], s != s) return !0
			} else
				for (; c > f; f++)
					if ((t || f in u) && u[f] === n) return t || f || 0;
			return !t && -1
		}
	}
}, function(t, e, n) {
	var r = n(11),
		o = Math.min;
	t.exports = function(t) {
		return t > 0 ? o(r(t), 9007199254740991) : 0
	}
}, function(t, e, n) {
	var r = n(11),
		o = Math.max,
		i = Math.min;
	t.exports = function(t, e) {
		return t = r(t), 0 > t ? o(t + e, 0) : i(t, e)
	}
}, function(t, e, n) {
	var r = n(33)("keys"),
		o = n(35);
	t.exports = function(t) {
		return r[t] || (r[t] = o(t))
	}
}, function(t, e, n) {
	var r = n(0),
		o = n(2),
		i = "__core-js_shared__",
		a = o[i] || (o[i] = {});
	(t.exports = function(t, e) {
		return a[t] || (a[t] = void 0 !== e ? e : {})
	})("versions", []).push({
		version: r.version,
		mode: n(34) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(t) {
	t.exports = !0
}, function(t) {
	var e = 0,
		n = Math.random();
	t.exports = function(t) {
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
	}
}, function(t) {
	t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"
		.split(",")
}, function(t, e) {
	e.f = Object.getOwnPropertySymbols
}, function(t, e) {
	e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
	var r = n(10);
	t.exports = function(t) {
		return Object(r(t))
	}
}, function(t, e, n) {
	t.exports = {
		"default": n(41),
		__esModule: !0
	}
}, function(t, e, n) {
	n(42);
	var r = n(0).Object;
	t.exports = function(t, e, n) {
		return r.defineProperty(t, e, n)
	}
}, function(t, e, n) {
	var r = n(5);
	r(r.S + r.F * !n(1), "Object", {
		defineProperty: n(6).f
	})
}, function(t, e, n) {
	"use strict";

	function r(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(44),
		i = r(o);
	e.default = {
		Tween: {
			easeInOut: function(t, e, n, r) {
				var o = i.default(.25, .1, .25, 1);
				return o(t / r) * n + e
			},
			easeIn: function(t, e, n, r) {
				var o = i.default(0, 0, .32, 1);
				return o(t / r) * n + e
			},
			easeOut: function(t, e, n, r) {
				var o = i.default(.64, 0, 1, 1);
				return o(t / r) * n + e
			},
			linear: function(t, e, n, r) {
				return n * t / r + e
			}
		},
		changeColor: function(t) {
			var e = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
			if (t = t.toLowerCase(), t && e.test(t)) {
				if (4 === t.length) {
					for (var n = "#", r = 1; 4 > r; r += 1) n += t.slice(r, r + 1).concat(t.slice(r, r +
						1));
					t = n
				}
				for (var o = [], i = 1; 7 > i; i += 2) o.push(parseInt("0x" + t.slice(i, i + 2)));
				return o
			}
			if (/^(rgb|RGB)/.test(t)) {
				var a = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map(Number);
				return a
			}
			return t
		},
		tRequestAnimationFrame: function(t) {
			return window.requestAnimationFrame ? window.requestAnimationFrame(t) : window
				.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(t) : window
				.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(t) : window.setTimeout(t,
					1e3 / 60)
		},
		tCancelAnimationFrame: function(t) {
			return window.cancelAnimationFrame ? window.cancelAnimationFrame(t) : window
				.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t) : window
				.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(t) : window.clearTimeout(t)
		},
		getStyle: function(t, e) {
			return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null)[
				e]
		},
		animate: function(t, e, n, r, o, i, a) {
			function s() {
				var e = +new Date,
					d = "",
					v = void 0,
					g = 0;
				if (e - m >= o) {
					g = Math.min(1, (e - m - o) / r);
					for (var y in n) {
						if (p.indexOf(y) >= 0) {
							v = [];
							for (var w = 0; 3 > w; w++) {
								var b = u.Tween[i](g * r, c[y][w], n[y][w] - c[y][w], r);
								v[w] = parseInt(b)
							}
						} else v = u.Tween[i](g * r, c[y], n[y] - c[y], r);
						"opacity" == y ? (t.style.filter = "alpha(opacity : " + v + " )", t.style
								.opacity = v / 100) : f.indexOf(y) >= 0 ? (d += l.indexOf(y) >= 0 ?
								" " + y + "(" + v + ")" : h.indexOf(y) >= 0 ? " " + y + "(" + v +
								"deg)" : " " + y + "(" + v + "px)", t.style.transform = d, t.style
								.msTransform = d, t.style.webkitTransform = d) : "scrollTop" == y ? t
							.scrollTop = parseInt(v) : t.style[y] = p.indexOf(y) >= 0 ? "rgb(" + v.join(
								",") + ")" : v + "px"
					}
				}
				1 == g ? (u.tCancelAnimationFrame(t.timer), a && a()) : t.timer = u
					.tRequestAnimationFrame(s)
			}
			var u = this,
				c = {};
			t && t.timer && u.tCancelAnimationFrame(t.timer);
			var f =
				"scaleX,scaleY,scaleZ,scale,translateX,translateY,translateZ,skewX,skewY,rotate,rotateX,rotateY"
				.split(","),
				l = "scaleX,scaleY,scaleZ,scale,opacity,color,backgroundColor".split(","),
				p = "color,backgroundColor".split(","),
				h = "skewX,skewY,rotate,rotateX,rotateY".split(",");
			for (var d in n) "opacity" == d ? c[d] = 0 == Math.round(100 * parseFloat(u.getStyle(t,
				d))) ? 0 : Math.round(100 * parseFloat(u.getStyle(t, d))) || 100 : p.indexOf(d) >= 0 ? (
					c[d] = u.changeColor(e[d]), n[d] = u.changeColor(n[d])) : c[d] = f.indexOf(d) >= 0 ?
				e[d] || 0 : "scrollTop" == d ? t.scrollTop : parseInt(u.getStyle(t, d)) || 0;
			var m = +new Date;
			s()
		},
		listAnimate: function(t, e, n, r, o, i) {
			var a = this,
				s = document.querySelectorAll(t),
				u = s.length;
			if (u > 0)
				if (r)
					for (var c = u - 1; c >= 0; c--) a.animate(s[c], o, i, e, n * (u - 1 - c),
						"easeOut");
				else
					for (var f = 0; u > f; f++) a.animate(s[f], o, i, e, n * f, "easeIn")
		},
		listAnimateObj: function(t, e, n, r, o, i) {
			var a = this,
				s = t,
				u = s.length;
			if (u > 0)
				if (r)
					for (var c = u - 1; c >= 0; c--) a.animate(s[c], o, i, e, n * (u - 1 - c),
						"easeOut");
				else
					for (var f = 0; u > f; f++) a.animate(s[f], o, i, e, n * f, "easeIn")
		}
	}
}, function(t) {
	"use strict";

	function e(t, e) {
		return 1 - 3 * e + 3 * t
	}

	function n(t, e) {
		return 3 * e - 6 * t
	}

	function r(t) {
		return 3 * t
	}

	function o(t, o, i) {
		return ((e(o, i) * t + n(o, i)) * t + r(o)) * t
	}

	function i(t, o, i) {
		return 3 * e(o, i) * t * t + 2 * n(o, i) * t + r(o)
	}

	function a(t, e, n, r, i) {
		var a, s, u = 0;
		do s = e + (n - e) / 2, a = o(s, r, i) - t, a > 0 ? n = s : e = s; while (Math.abs(a) > l && ++u < p);
		return s
	}

	function s(t, e, n, r) {
		for (var a = 0; c > a; ++a) {
			var s = i(e, n, r);
			if (0 === s) return e;
			var u = o(e, n, r) - t;
			e -= u / s
		}
		return e
	}

	function u(t) {
		return t
	} {
		var c = 4,
			f = .001,
			l = 1e-7,
			p = 10,
			h = 11,
			d = 1 / (h - 1),
			m = "function" == typeof Float32Array;
		t.exports = function(t, e, n, r) {
			function c(e) {
				for (var r = 0, o = 1, u = h - 1; o !== u && l[o] <= e; ++o) r += d;
				--o;
				var c = (e - l[o]) / (l[o + 1] - l[o]),
					p = r + c * d,
					m = i(p, t, n);
				return m >= f ? s(e, p, t, n) : 0 === m ? p : a(e, r, r + d, t, n)
			}
			if (!(t >= 0 && 1 >= t && n >= 0 && 1 >= n)) throw new Error(
				"bezier x values must be in [0, 1] range");
			if (t === e && n === r) return u;
			for (var l = m ? new Float32Array(h) : new Array(h), p = 0; h > p; ++p) l[p] = o(p * d, t, n);
			return function(t) {
				return 0 === t ? 0 : 1 === t ? 1 : o(c(t), e, r)
			}
		}
	}
}, function() {
	"use strict";
	! function(t, e) {
		function n(t) {
			var e, n, r, o;
			this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this
				.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || f(),
				this.isIntersecting = !!t.intersectionRect, e = this.boundingClientRect, n = e.width * e.height,
				r = this.intersectionRect, o = r.width * r.height, this.intersectionRatio = n ? Number((o / n)
					.toFixed(4)) : this.isIntersecting ? 1 : 0
		}

		function r(t, e) {
			var n = e || {};
			if ("function" != typeof t) throw new Error("callback must be a function");
			if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
			this._checkForIntersections = i(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this
				._callback = t, this._observationTargets = [], this._queuedEntries = [], this
				._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this
				._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this
				._rootMarginValues.map(function(t) {
					return t.value + t.unit
				}).join(" ")
		}

		function o() {
			return t.performance && performance.now && performance.now()
		}

		function i(t, e) {
			var n = null;
			return function() {
				n || (n = setTimeout(function() {
					t(), n = null
				}, e))
			}
		}

		function a(t, e, n, r) {
			"function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t
				.attachEvent && t.attachEvent("on" + e, n)
		}

		function s(t, e, n, r) {
			"function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" ==
				typeof t.detatchEvent && t.detatchEvent("on" + e, n)
		}

		function u(t, e) {
			var n = Math.max(t.top, e.top),
				r = Math.min(t.bottom, e.bottom),
				o = Math.max(t.left, e.left),
				i = Math.min(t.right, e.right),
				a = i - o,
				s = r - n;
			return a >= 0 && s >= 0 && {
				top: n,
				bottom: r,
				left: o,
				right: i,
				width: a,
				height: s
			}
		}

		function c(t) {
			var e;
			try {
				e = t.getBoundingClientRect()
			} catch (n) {}
			return e ? (e.width && e.height || (e = {
				top: e.top,
				right: e.right,
				bottom: e.bottom,
				left: e.left,
				width: e.right - e.left,
				height: e.bottom - e.top
			}), e) : f()
		}

		function f() {
			return {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: 0,
				height: 0
			}
		}

		function l(t, e) {
			for (var n = e; n;) {
				if (n == t) return !0;
				n = p(n)
			}
			return !1
		}

		function p(t) {
			var e = t.parentNode;
			return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode :
				e
		}
		if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t
			.IntersectionObserverEntry.prototype) return void("isIntersecting" in t.IntersectionObserverEntry
			.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype,
			"isIntersecting", {
				get: function() {
					return this.intersectionRatio > 0
				}
			}));
		var h = [];
		r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype
			.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
				var e = this._observationTargets.some(function(e) {
					return e.element == t
				});
				if (!e) {
					if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
					this._registerInstance(), this._observationTargets.push({
						element: t,
						entry: null
					}), this._monitorIntersections(), this._checkForIntersections()
				}
			}, r.prototype.unobserve = function(t) {
				this._observationTargets = this._observationTargets.filter(function(e) {
					return e.element != t
				}), this._observationTargets.length || (this._unmonitorIntersections(), this
					._unregisterInstance())
			}, r.prototype.disconnect = function() {
				this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
			}, r.prototype.takeRecords = function() {
				var t = this._queuedEntries.slice();
				return this._queuedEntries = [], t
			}, r.prototype._initThresholds = function(t) {
				var e = t || [0];
				return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
					if ("number" != typeof t || isNaN(t) || 0 > t || t > 1) throw new Error(
						"threshold must be a number between 0 and 1 inclusively");
					return t !== n[e - 1]
				})
			}, r.prototype._parseRootMargin = function(t) {
				var e = t || "0px",
					n = e.split(/\s+/).map(function(t) {
						var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
						if (!e) throw new Error("rootMargin must be specified in pixels or percent");
						return {
							value: parseFloat(e[1]),
							unit: e[2]
						}
					});
				return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
			}, r.prototype._monitorIntersections = function() {
				this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this
					._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (
						a(t, "resize", this._checkForIntersections, !0), a(e, "scroll", this
							._checkForIntersections, !0), this.USE_MUTATION_OBSERVER &&
						"MutationObserver" in t && (this._domObserver = new MutationObserver(this
							._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
			}, r.prototype._unmonitorIntersections = function() {
				this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this
						._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this
						._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this
					._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
			}, r.prototype._checkForIntersections = function() {
				var t = this._rootIsInDom(),
					e = t ? this._getRootRect() : f();
				this._observationTargets.forEach(function(r) {
					var i = r.element,
						a = c(i),
						s = this._rootContainsTarget(i),
						u = r.entry,
						f = t && s && this._computeTargetAndRootIntersection(i, e),
						l = r.entry = new n({
							time: o(),
							target: i,
							boundingClientRect: a,
							rootBounds: e,
							intersectionRect: f
						});
					u ? t && s ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u
						.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
				}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
			}, r.prototype._computeTargetAndRootIntersection = function(n, r) {
				var o, i, a, s, f, l;
				if ("none" != t.getComputedStyle(n).display) {
					for (o = c(n), i = o, a = p(n), s = !1; !s;) {
						if (f = null, l = 1 == a.nodeType ? t.getComputedStyle(a) : {}, "none" == l.display)
							return;
						if (a == this.root || a == e ? (s = !0, f = r) : a != e.body && a != e
							.documentElement && "visible" != l.overflow && (f = c(a)), f && (i = u(f, i), !i))
							break;
						a = p(a)
					}
					return i
				}
			}, r.prototype._getRootRect = function() {
				var t, n, r;
				return this.root ? t = c(this.root) : (n = e.documentElement, r = e.body, t = {
					top: 0,
					left: 0,
					right: n.clientWidth || r.clientWidth,
					width: n.clientWidth || r.clientWidth,
					bottom: n.clientHeight || r.clientHeight,
					height: n.clientHeight || r.clientHeight
				}), this._expandRectByRootMargin(t)
			}, r.prototype._expandRectByRootMargin = function(t) {
				var e = this._rootMarginValues.map(function(e, n) {
						return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
					}),
					n = {
						top: t.top - e[0],
						right: t.right + e[1],
						bottom: t.bottom + e[2],
						left: t.left - e[3]
					};
				return n.width = n.right - n.left, n.height = n.bottom - n.top, n
			}, r.prototype._hasCrossedThreshold = function(t, e) {
				var n, r, o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
					i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
				if (o !== i)
					for (n = 0; n < this.thresholds.length; n++)
						if (r = this.thresholds[n], r == o || r == i || o > r != i > r) return !0
			}, r.prototype._rootIsInDom = function() {
				return !this.root || l(e, this.root)
			}, r.prototype._rootContainsTarget = function(t) {
				return l(this.root || e, t)
			}, r.prototype._registerInstance = function() {
				h.indexOf(this) < 0 && h.push(this)
			}, r.prototype._unregisterInstance = function() {
				var t = h.indexOf(this); - 1 != t && h.splice(t, 1)
			}, t.IntersectionObserver = r, t.IntersectionObserverEntry = n
	}(window, document)
}]);