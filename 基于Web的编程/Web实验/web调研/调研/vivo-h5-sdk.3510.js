'use strict';
var e, t;
e = this;
t = function() {
	function da(a) {
		return (da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
			return typeof a
		} : function(a) {
			return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ?
				"symbol" : typeof a
		})(a)
	}

	function y(a, b, c) {
		return b in a ? Object.defineProperty(a, b, {
			value: c,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : a[b] = c, a
	}

	function v(a, b) {
		return Object.prototype.toString.call(a) === "[object " + b + "]"
	}

	function K(a, b, c) {
		if (v(a, "Array"))
			for (var d = 0; d < a.length; d++) a[d] &&
				a[d](b);
		else v(a, "Function") && a(b);
		c && c()
	}

	function ea(a) {
		return /^(http|https):\/\//.test(a) ? a : "https://" + a
	}

	function X(a, b) {
		return Object.assign({
			unique_id: a.unique_id ? a.unique_id : "",
			topic_id: a.topic_id ? a.topic_id : "",
			page_url: window.location && window.location.href ? window.location.href : ""
		}, b, {
			current_env: a.current_env && S[a.current_env] ? S[a.current_env] : S.prod
		})
	}

	function L(a, b, c, d, f, l) {
		a = {
			data: {
				event_id: d || b + "|" + a,
				params: c
			}
		};
		return f && v(f, "Function") && (a.successFn = f), l && v(l, "Function") && (a.errorFn = l),
			a
	}

	function M(a, b) {
		for (var c = 0; c < a.length; c++) {
			var d = a[c],
				f = d[0];
			d = d[1];
			var l = b ? window.addEventListener : window.removeEventListener;
			"visibilitychange" === f && (l = b ? document.addEventListener : document.removeEventListener);
			l(f, d)
		}
	}

	function Y(a) {
		var b = window.history[a];
		return function() {
			var c = b.apply(this, arguments),
				d = new Event(a.toLocaleLowerCase());
			return d.arguments = arguments, window.dispatchEvent(d), c
		}
	}

	function pa(a) {
		for (var b = document.querySelectorAll("[data-xy-exposure]"), c = 0; c < b.length; c++) {
			var d = b[c];
			d.dataset && !d.dataset.xyExpoListen && (a.observe(d), d.dataset.xyExpoListen = "1")
		}
	}

	function Aa(a, b) {
		ka = a || ka;
		T = b || T;
		!0
	}

	function N(a, b, c, d, f, l) {
		var r = new XMLHttpRequest;
		a = ea(a);
		if (1 === b) {
			var p = [];
			for (w in c) p.push(w + "=" + c[w]);
			var w = p.length ? "?" + p.join("&") : "";
			a += w
		}
		r.open(Ba[b], a, !0);
		r.withCredentials = !1;
		r.send(c);
		r.onreadystatechange = Ca.bind(r, d, f, l)
	}

	function Ca(a, b, c) {
		var d = null;
		200 !== this.status && (a = b, d = c);
		4 === this.readyState && K(a, this.responseText, d)
	}

	function qa(a, b) {
		a.set = [];
		a.kv = {};
		a.setItem = function(c,
			d, f) {
			b && b.setItem && b.setItem(c, d);
			a.kv[c] = d; - 1 === a.set.indexOf(c) && a.set.push(c);
			f && f(0)
		};
		a.getItem = function(c, d) {
			d(b && b.getItem ? b.getItem(c) : a.kv[c])
		};
		a.removeItem = function(c) {
			b && b.setItem && b.removeItem(c);
			delete a.kv[c];
			c = a.set.indexOf(c); - 1 !== c && a.set.splice(c, 1)
		};
		a.clear = function() {
			for (; a.set.length;) b && b.setItem && b.removeItem(a.set.pop());
			a.kv = {}
		}
	}

	function Da() {
		if (A.match(/AppleWebKit.*Mobile.*/)) {
			for (var a = [/Alipay/i, /MicroMessenger/i, /(UCBrowser)|(ucweb)/i, /WeiBo/i, /QQ\//i, /MQQBrowser/i,
					/baiduboxapp/i,
					/baidubrowser/i, /vivo/i, /\(i[^;]+;( U;)? CPU.+Mac OS X/, /(Android)|(Linux)/
				], b = "alipay weixin ucbrowser weibo qq qqbrowser baidu baidubrowser vivo ios android".split(
					" "), c = -1; ++c < a.length;)
				if (A.match(a[c])) return b[c];
			return "other"
		}
		return "pc"
	}

	function ra(a) {
		var b = A.toLowerCase(),
			c = "",
			d = a ? /android [\d._]+/gi : /os [\d._]+/gi;
		0 < b.indexOf(a ? "android" : "like mac os x") && (c = (b.match(d) + "").replace(/[^0-9|_.]/gi, "").replace(
			/_/gi, "."));
		return c
	}
	var la = ["native-single-h5sdk.vivo.com.cn", "native-trace-h5sdk.vivo.com.cn",
			"single-h5sdk.vivo.com.cn", "trace-h5sdk.vivo.com.cn"
		],
		O = {
			atob: function(a) {
				if (0 == (a = (a = String(a)).replace(/[ \t\n\f\r]/g, "")).length % 4 && /==?$/.test(a) && (a =
						a.replace(/==?$/, "")), 1 == a.length % 4 || !/^[+/0-9A-Za-z]*$/.test(a)) return null;
				for (var b = "", c = 0, d = 0, f = 0; f < a.length; f++) c <<= 6, c |= O.atobLookup(a[f]), 24 ==
					(d += 6) && (b += String.fromCharCode((16711680 & c) >> 16), b += String.fromCharCode((
						65280 & c) >> 8), b += String.fromCharCode(255 & c), c = d = 0);
				return 12 == d ? (c >>= 4, b += String.fromCharCode(c)) : 18 == d && (c >>= 2, b += String
					.fromCharCode((65280 &
						c) >> 8), b += String.fromCharCode(255 & c)), b
			},
			atobLookup: function(a) {
				return /[A-Z]/.test(a) ? a.charCodeAt(0) - 65 : /[a-z]/.test(a) ? a.charCodeAt(0) - 97 + 26 :
					/[0-9]/.test(a) ? a.charCodeAt(0) - 48 + 52 : "+" == a ? 62 : "/" == a ? 63 : void 0
			},
			btoa: function(a) {
				var b;
				a = String(a);
				for (b = 0; b < a.length; b++)
					if (255 < a.charCodeAt(b)) return null;
				var c = "";
				for (b = 0; b < a.length; b += 3) {
					var d = [void 0, void 0, void 0, void 0];
					d[0] = a.charCodeAt(b) >> 2;
					d[1] = (3 & a.charCodeAt(b)) << 4;
					a.length > b + 1 && (d[1] |= a.charCodeAt(b + 1) >> 4, d[2] = (15 & a.charCodeAt(b + 1)) <<
						2);
					a.length >
						b + 2 && (d[2] |= a.charCodeAt(b + 2) >> 6, d[3] = 63 & a.charCodeAt(b + 2));
					for (var f = 0; f < d.length; f++) void 0 === d[f] ? c += "=" : c += O.btoaLookup(d[f])
				}
				return c
			},
			btoaLookup: function(a) {
				return 26 > a ? String.fromCharCode(a + 65) : 52 > a ? String.fromCharCode(a - 26 + 97) : 62 >
					a ? String.fromCharCode(a - 52 + 48) : 62 == a ? "+" : 63 == a ? "/" : void 0
			}
		},
		Ea = O.atob,
		Fa = O.btoa,
		Ba = ["POST", "GET"],
		ka = "cfg-stsdk.vivo.com.cn/",
		T = [],
		U = {},
		Ga = ["/client/upload/reportSingleImd", "/client/upload/reportTraceImd", "/h5/reportSingle",
			"/h5/reportTrace"
		],
		fa =
		"dsn oaid vaid aaid udid imei e userid gaid guid id_limited cm model product elapsedtime terminal sysversion app_package app_version_code app_version_name android_version st1 st2 sn1 sn2 ms os_type dev_type"
		.split(" "),
		sa = [0, 8],
		ta = [5, 10],
		S = {
			prod: "prod",
			gray: "gray",
			pre: "pre",
			test: "test",
			dev: "dev"
		},
		ua = {
			WIFI: 1,
			"2G": 2,
			"3G": 3,
			"4G": 4,
			UNKNOWN: 5
		},
		G = function() {},
		B = function() {
			return {
				setItem: G,
				getItem: G,
				removeItem: G,
				clear: G
			}
		},
		Ha = {
			readyCB: G,
			errorCB: G,
			successCB: G
		},
		Ia = window.navigator && window.navigator.sendBeacon ? function(a, b, c, d, f, l) {
			window.navigator.onLine ? window.navigator.sendBeacon(ea(a), c) ? K(d, "send beacon success") : N(a, b,
				c, d, f, l) : K(f, "application offline", l)
		} : N,
		va = B();
	B = B();
	var P = window.navigator,
		A = P.userAgent,
		Ja = window.self !==
		window.top;
	return qa(va, window.sessionStorage || null), qa(B, window.localStorage || null),
		function(a, b, c, d, f, l, r, p, w, m) {
			function n(a, b) {
				return function(g) {
					"success" === b && h();
					ha--;
					(a[b + "Fn"] || Z[b + "CB"])(g)
				}
			}

			function q(a, b, c) {
				var g = [],
					d = [],
					f = [],
					wa = [],
					z = void 0;
				! function I(J) {
					if (!(J >= a.length)) {
						for (var k = a[J], u = "", h = k.data.event_id.split("|").pop();
							"0" === h[0];) h = h.slice(1);
						if (V[h] && (u = h), !u) return x("event_id error:: event_id does not match appId"),
							function(a, b) {
								2 > a.refresh++ && setTimeout(function() {
									H([a],
										b)
								}, 300)
							}(k, b), I(++J);
						if (!ma || !0 !== ma[u]) {
							if (function(a, b) {
									b = V[b].event.filter(function(b) {
										return b.id === a.data.event_id
									});
									return !!b && !!b[0] && 1 === b[0].switch
								}(k, u)) return I(++J);
							if (z && u !== z) return H([k], b), I(++J);
							z = u;
							l(function(u, h) {
								ha++;
								k.data.nt = h;
								k.data.nn = u;
								"N" === D && (k.data.userid = Q[z] && Q[z].userid ? Q[z].userid : "");
								k.data.event_time = k.data.event_time || Date.now().toString();
								k.data.ext = {
									nativeOrWeb: A
								};
								h = z;
								u = k.data;
								if (u.params = u.params || {}, v(u.params, "Object"))
									if (h = S[h])
										for (var C in h) u.params[C] =
											u.params[C] || h[C];
								(k.data = u, g.push(k.data), wa.push(k.data.event_id), f.push(n(k,
									"error")), d.push(n(k, "success")), ++J >= a.length) ? ("N" === D ? (C =
									ya(z, []), C = {
										common: Object.assign({}, K[z], C)
									}) : C = {
									common: K[z]
								}, C.common.cookie_id = B, C.common.dtype = b ? "101" : "102", C["N" ===
									D ? da[b] : "sen"] = g, c({
									d: C,
									i: wa,
									s: d,
									e: f
								}, b)) : I(J)
							})
						}
					}
				}(0)
			}

			function za(a, c) {
				try {
					if (0 !== a.i.length) {
						a.r || (a.r = -1);
						++a.r;
						var g = JSON.stringify(a.d),
							d = A,
							f = a.d.common.appId;
						if (w) try {
							top ? top.postMessage(g, "*") : x("iframe not exist, top=", top)
						} catch (xa) {
							x("iframe error::")
						}
						if (2 ===
							d) {
							var u = window.reportCommand.processEvent(g, c + 1, !0, !0, JSON.stringify(y({
									pt_v: "N" === D ? 1 : 2,
									id_transform: !(!N[f] || !N[f].id_transform)
								}, "h5_sdk_version", 3510))),
								k = Ea(u),
								z = new Uint8Array(new ArrayBuffer(k.length));
							g = 0;
							for (var h = k.length; g < h; g++) z[g] = k.charCodeAt(g);
							var n = z
						} else n = Fa(unescape(encodeURIComponent(g)));
						var I = ["idList=" + encodeURIComponent(a.i.join("-")), "sdkversion=1600", "appId=" + a.d
								.common.appId, "len=" + n.length, "pt_v=" + ("N" === D ? "1" : 2 === A ? "2" : "3"),
								"h5_sdk_version=3510"
							],
							E = a.d.common.appId;
						k = A + c - 2;
						z = T;
						h = [];
						for (var m in U) h.push(m);
						var q = (1 < h.length && (z = U[E]), (z[k] ? z[k] + "/" : la[k] + "/").replace(
							/(http(s)?:\/\/)?([^/]*)(\/.*)/, "$1$3") + Ga[k]) + "?" + I.join("&");
						b(q, 0, n, a.s, a.e, ia.bind(null, a, c))
					}
				} catch (xa) {
					ha--, x(xa)
				}
			}

			function ia(a, b) {
				f.getItem("@_vtg_cache_data", function(c) {
					(c = E(c)).push([a, b]);
					f.setItem("@_vtg_cache_data", JSON.stringify(c));
					(function C() {
						clearTimeout(X);
						X = setTimeout(function() {
							l(function(a, b) {
								5 > b ? aa("@_vtg_cache_data") : C()
							})
						}, 1E4)
					})()
				})
			}

			function aa(a) {
				f.getItem(a, function(b) {
					b =
						E(b);
					f.setItem(a, "[]");
					for (var c = [], g = 0; g < b.length; g++) "@_vtg_next_time" === a && (b[g][0].r = 1),
						2 > b[g][0].r ? za(b[g][0], b[g][1]) : c.push(b[g]);
					c.length && f.getItem("@_vtg_next_time", function(a) {
						a = E(a);
						for (var b = 0; b < c.length; b++) a.push(a[b]);
						f.setItem("@_vtg_next_time", JSON.stringify(a))
					})
				})
			}

			function E(a) {
				return a && (a = JSON.parse(a)), a || (a = []), a
			}

			function h() {
				var a, b, c = (a = ba[0].length ? 0 : 1, b = ba[a], ba[a] = [], {
					t: b,
					p: a
				});
				c.t.length && q(c.t, c.p, za)
			}

			function ja(a, b) {
				d.setItem("@_vtg_pene_pre_" + a.event_id, JSON.stringify(a.preparams || {}), function() {
					d.getItem("@_vtg_trace_ids", function(c) {
						var g = c ? c.split("-") : [],
							f = g.indexOf(a.event_id); - 1 !== f && (g.splice(f), c = g.join("-"));
						5 === g.length && d.removeItem("@_vtg_pene_pre_" + g.shift());
						g.push(a.event_id);
						d.setItem("@_vtg_trace_ids", g.join("-"), function() {
							b({
								r: {},
								t: c
							})
						})
					})
				})
			}

			function na(a, b) {
				ja(a, function(a) {
					var c = (a = a ? a.t : "") ? a.split("-") : [],
						g = {},
						f = "",
						k = [],
						h = c.length;
					! function I(a) {
						if (a)
							for (var u in f += "@", k.unshift(c[h]), a = JSON.parse(a)) g[f + u] = a[u];
						0 <= --h ? d.getItem("@_vtg_pene_pre_" + c[h],
							I) : b({
							r: g,
							t: k.join("-")
						})
					}(null)
				})
			}

			function Ka(a, b) {
				f.getItem("@_vtg_unique_one", function(c) {
					r(a, A, D, function(g, d) {
						K[a.appId] = g;
						Q[a.appId] = d;
						"{}" === JSON.stringify(M) && (M = d);
						c || (c = Date.now() + "_" + function(a, b) {
							var c, g, d =
								"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
								.split(""),
								f = [];
							if (b = b || d.length, a)
								for (c = 0; c < a; c++) f[c] = d[0 | Math.random() * b];
							else
								for (f[8] = f[13] = f[18] = f[23] = "-", f[14] = "4", c =
									0; 36 > c; c++) f[c] || (g = 0 | 16 * Math.random(), f[
									c] = d[19 == c ? 3 & g | 8 : g]);
							return f.join("")
						}(13, 16), f.setItem("@_vtg_unique_one",
							c,
							function() {}));
						B = c;
						b()
					})
				})
			}

			function L(a) {
				P--;
				Ka(a, function() {
					h();
					O = !0;
					Z.readyCB();
					ca[a.appId].isOpenCommonSdk && m.OpenCommonSdkHandle(a.appId, ca, F, x, R, D);
					var b = Y[a.appId] || null;
					b && b.heatMap && !0 === b.heatMap.isEnable && m.HeatMapHandle(a.appId, ca, F, x, R, D,
						b.heatMap);
					b && b.exposure && !0 === b.exposure.isEnable && m.ExposoureHandle && v(m
						.ExposoureHandle, "Function") && m.ExposoureHandle(F, x, b.exposure)
				})
			}

			function ya(a, b) {
				var c = {},
					d = "N" === D ? sa : ta;
				b = "N" === D ? R[a] ? R[a] : [] : b || (R[a] ? R[a] : []);
				for (var f = d[0]; f <= d[1]; f++) {
					var g =
						fa[f]; - 1 < b.indexOf(g) && (c[g] = "N" === D ? Q[a] && Q[a][g] ? Q[a][g] : "" : M[g] ||
						"")
				}
				return c
			}

			function H(a, b) {
				try {
					for (var c = 0; c < a.length; c++) {
						var d = a[c] || {};
						var f = void 0,
							g = d.data;
						if (v(g, "Object")) {
							var k = {};
							k.event_id = g.event_id;
							k.start_time = g.start_time || Date.now().toString();
							k.duration = g.duration || "0";
							k.report_type = g.report_type || 0;
							k.params = g.params || {};
							k.index = g.index || ea++;
							g.trace_id && (k.trace_id = g.trace_id);
							g.tr && (k.tr = g.tr);
							g.preparams && (k.preparams = g.preparams);
							g.intercept_pierce && (k.intercept_pierce = g.intercept_pierce);
							if ("N" !== D) {
								for (var n = g.event_id.split("|").pop();
									"0" === n[0];) n = n.slice(1);
								f = n;
								k.v_com = ya(f, g.v_com)
							}
							var E = k
						} else E = x("data is not an Object");
						var m = {
							data: E,
							successFn: d.successFn,
							errorFn: d.errorFn,
							refresh: d.refresh || 0
						};
						500 > ba[b].length ? ba[b].push(m) : x("task stack reach stack threshold")
					}
					3 > ha && O && !P && h()
				} catch (I) {
					x(I)
				}
			}

			function F(a) {
				if (!a) return x("tasks not exist");
				v(a, "Array") || (a = [a]);
				(function u(b, c, d) {
					if (b < a.length) {
						var g = a[b];
						if (g.data && g.data.event_id) switch (function(a) {
								a = a.split("|");
								if (a[0]) {
									if (5 ===
										a[0].length) return 0;
									if (3 === a[0].length) return 1
								}
								return 2
							}(g.data.event_id)) {
							case 0:
								c.push(g);
								u(++b, c, d);
								break;
							case 1:
								g.data.intercept_pierce = g.data.intercept_pierce || 0;
								(0, [ja, na][g.data.intercept_pierce])(g.data, function(a) {
									g.data.preparams = a.r;
									g.data["N" === D ? "trace_id" : "tr"] = a.t || "";
									d.push(g);
									u(++b, c, d)
								});
								break;
							default:
								u(++b, c, d)
						} else x("task data or event_id not exist"), u(++b, c, d)
					} else c.length && H(c, 0), d.length && H(d, 1)
				})(0, [], [])
			}

			function W(a) {
				return v(a, "Function") ? a : G
			}

			function x(a) {
				return Z.errorCB(Error(a)),
					!1
			}
			var D = a || "N",
				A = p() ? 2 : 4,
				B = void 0,
				O = !1,
				V = {},
				K = {},
				S = {},
				M = {},
				Q = {},
				R = {},
				N = {},
				ba = [
					[],
					[]
				],
				ha = 0,
				P = 0,
				Z = Ha,
				da = ["tasks", "session"],
				ea = 1,
				X = null,
				oa = null,
				ma = {},
				ca = {},
				Y = {};
			return aa("@_vtg_cache_data"), aa("@_vtg_next_time"), {
				clear: function() {
					d.clear()
				},
				setUrl: Aa,
				config: function(a, b) {
					if (!a.appId) return x("appId not exist");
					try {
						P++;
						ca[a.appId] = a;
						Y[a.appId] = v(b, "Object") ? b : null;
						var d = L.bind(null, a);
						! function(a, b, d) {
							function g(b, c) {
								ma[a.appId] = !(!c || !c.h5_forbid) && c.h5_forbid;
								V[a.appId] = b;
								b = V[a.appId].conf;
								c = ["singleImd",
									"traceImd", "singleDelay", "traceDelay"
								];
								var d = ["nativesingle", "nativetrace", "websingle", "webtrace"];
								b = b || {};
								U[a.appId] = [];
								for (var g = 0; 4 > g; g++) b[c[g]] ? (T[g] = b[c[g]], U[a.appId][g] = b[c[
										g]]) : a[d[g]] ? (T[g] = a[d[g]], U[a.appId][g] = a[d[g]]) : "" !==
									b[c[g]] && "{}" !== JSON.stringify(b) || (T[g] = la[g], U[a.appId][g] =
										la[g])
							}

							function h(h) {
								c(n, 1, {}, function(c) {
									g({
										event: (c = c ? JSON.parse(c) : {}).event || [],
										conf: c.conf || {}
									}, c);
									h || b && b();
									f.setItem("@_vtg_fetch_config", JSON.stringify(y({}, a.appId,
										c)))
								}, function(a) {
									g({
										event: [],
										conf: {}
									}, {
										h5_forbid: !1
									});
									h || d && d(a)
								})
							}
							var n = ka + a.appId + "_1600.json";
							ca[a.appId].isOpenCahceConfig ? (oa && clearTimeout(oa), f.getItem(
								"@_vtg_fetch_config",
								function(c) {
									(c = c ? JSON.parse(c) : c) && c[a.appId] ? (c = c[a.appId] ||
										{}, g({
											event: c.event || [],
											conf: c.conf || {}
										}, c), b && b(), oa = setTimeout(function() {
											h(!0)
										}, 3E3)) : h(!1)
								})) : h(!1)
						}(a, d, d)
					} catch (J) {
						x(J)
					}
				},
				onReady: function(a) {
					Z.readyCB = W(a)
				},
				onError: function(a) {
					Z.errorCB = W(a)
				},
				push: F,
				trace: F,
				setParams: function(a, b) {
					return v(a, "String") ? v(b, "Object") ? void(S["" + a] = b) : x(
							"common set needs Object params cParams") :
						x("common set needs String params appId")
				},
				extraReport: function(a, b) {
					return a ? v(b, "Array") ? void(R[a] = b || []) : x(
						"second param must be an Array for setting extra report id symbols") : x(
						"appId is needed for setting extra report id symbols")
				},
				isInitialized: function(a) {
					return a ? !!V[a] : Object.keys(V)
				},
				setExtraConfig: function(a, b) {
					return a ? v(b, "Object") ? void(N[a] = b) : x(
						"second param must be an Object for setting extra config") : x(
						"appId is needed for setting extra config")
				}
			}
		}("", Ia, N, va, B, function(a) {
				var b =
					"UNKNOWN";
				if (P.onLine) {
					var c = "";
					if (/NetType/.test(A)) {
						var d = A.match(/NetType\/(\S*)/);
						d && d[1] && (c = d[1])
					}
					c = c.toUpperCase();
					if (ua[c]) b = c;
					else if (c = P.connection) b = (b = c.type) && -1 < ["wifi", "unknown", "none"].indexOf(b) ? b
						.toUpperCase() : c.effectiveType ? c.effectiveType.toUpperCase() : "UNKNOWN";
					b = "NONE" === b ? "UNKNOW" : b
				}
				a(b, ua[b])
			}, function(a, b, c, d) {
				var f, l;
				c = (y(l = {}, "N" === c ? "session_id" : "se", Date.now().toString()), y(l, "appId", a.appId), y(l,
					"ext_com", (y(f = {}, "h5_sdk_version", 3510), y(f, "os_name", ""), y(f,
						"selected_country",
						""), y(f, "sim_card_country", ""), y(f, "station_based_country", ""), f)), l);
				f = {};
				if (4 === b)
					for (c = Object.assign(c, {
							pixel: window.screen.width + "*" + window.screen.height,
							sdkversion: "1600",
							android_version: ra(1) || ra(0),
							terminal: Da()
						}), b = 0; b < fa.length; b++) {
						l = fa[b];
						var r;
						if (!(r = a[l])) {
							var p = "";
							r = new RegExp("vvc_" + l + "=([^;]+);?s*");
							r = (document && document.cookie && (p = r.exec(document.cookie)), p ? p[1] : "")
						}
						p = r || "";
						"id_limited" === l && (p = p || "false");
						p && ((11 > b ? f : c)[l] = p)
					} else 2 === b && a.userid && (f.userid = a.userid || "");
				d(c, f)
			},
			function() {
				return window.reportCommand && window.reportCommand.processEvent
			}, Ja, {
				OpenCommonSdkHandle: function(a, b, c, d, f, l) {
					try {
						var r = function(b) {
								n || m(a, "90001", b.type)
							},
							p = function(b) {
								0 !== n && m(a, "90002", b.type)
							},
							w = function h(a) {
								"popstate" === a.type && window.removeEventListener("hashchange", h);
								"visibilitychange" === a.type ? document.hidden ? p(a) : r(a) : (p(a), r(a))
							},
							m = function(a, b, d) {
								d = {};
								var f = X(v[a], Object.assign({
									last_page_url: q
								}, d));
								f = L(a, b, f);
								"90002" === b ? (f = Date.now() - n, f = L(a, b, X(v[a], Object.assign({
									duration: f.toString(),
									last_page_url: q
								}, d))), n = 0) : "90001" === b && (n = Date.now(), q = window.location &&
									window.location.href ? window.location.href : "");
								c(f)
							},
							n = 0,
							q = document && document.referrer ? document.referrer : "",
							v = y({}, a, function(a, b, c, d) {
								b = Object.assign({}, b[a]);
								d = "N" === d ? sa : ta;
								a = c[a] && c[a].length ? c[a] : [];
								for (c = d[0]; c <= d[1]; c++) {
									var f = fa[c]; - 1 === a.indexOf(f) ? b[f] = void 0 : b[f] = b[f] ? b[
										f] : ""
								}
								return JSON.parse(JSON.stringify(b))
							}(a, b, f, l));
						if (r({
								type: "firstEvent"
							}), window.history ? (window.history.pushState = Y("pushState"), window.history
								.replaceState =
								Y("replaceState")) : p({
								type: "historyError"
							}), window.addEventListener) {
							var ia = [
								["focus", r],
								["blur", p],
								["hashchange", w],
								["popstate", w],
								["pushstate", w],
								["replacestate", w],
								["visibilitychange", w],
								["beforeunload", function() {
									p({
										type: "lastEvent"
									});
									M(ia, !1)
								}]
							];
							M(ia, !0)
						} else p({
							type: "listenerError"
						})
					} catch (aa) {
						d("commonError:" + aa)
					}
				},
				HeatMapHandle: function(a, b, c, d, f, l, r) {
					! function() {
						(function(a, b, c) {
							var d = !1;
							"click" === b && (d = !0);
							a.addEventListener(b, function(a) {
								c.call(this, a)
							}, d)
						}).apply(null, arguments)
					}(document,
						"click",
						function(b) {
							try {
								var f = b || window.event;
								if (!f) return !1;
								var m = f.target || f.srcElement;
								if ("object" !== da(m) || "string" != typeof m.tagName) var n = null;
								else {
									var q = m.tagName.toLowerCase();
									if ("body" !== q.toLowerCase() && "html" !== q.toLowerCase() && m && m
										.parentNode && m.parentNode.children) {
										var l = m.parentNode;
										b = [];
										for (var p in r.collect_tags) r.collect_tags[p] && "div" !== p &&
											"span" !== p && b.push(p);
										n = "a" === q || "button" === q || "input" === q || "textarea" === q ||
											(m.hasAttribute ? m.hasAttribute("data-xy-click") : m.attributes[
													"data-xy-click"] &&
												m.attributes["data-xy-click"].specified) ? m : "button" === l
											.tagName.toLowerCase() || "a" === l.tagName.toLowerCase() ? l :
											"div" === q && r.collect_tags.div && 0 === m.children.length ||
											"span" === q && r.collect_tags.span && 0 === m.children.length || -
											1 < b.indexOf(q) ? m : null
									} else n = null
								}
								if (n) {
									m = "";
									var v = n.tagName.toLowerCase(),
										E = n.children;
									(0 === E.length || 1 === E.length && E[0].children && 0 === E[0].children
										.length) && (m = n.innerText ? n.innerText : "");
									var h = {
											page_url: window.location && window.location.href ? window.location
												.href : "",
											screen_width: window.screen.width,
											screen_height: window.screen.height,
											pos_w: f.clientX,
											pos_h: f.clientY,
											widget_state: 0,
											tag_name: v,
											tag_text: m.slice(0, 32)
										},
										ja = L(a, "90003", h);
									c(ja)
								}
							} catch (na) {
								d("clickError:" + na)
							}
						})
				},
				ExposoureHandle: function(a, b, c) {
					if ("IntersectionObserver" in window && "intersectionRatio" in window
						.IntersectionObserverEntry.prototype) try {
						var d = function(c, d) {
								if (d.length) {
									var f = {},
										n = [],
										l = 0;
									r && (l = +d[0].expoTime || 0, l = Date.now() - l);
									for (var p = 0; p < d.length; p++) {
										var h = d[p],
											q = h.xyUniId;
										f[q] = q;
										h = h.dom;
										q = void 0;
										var y = h.dataset.xyParams,
											A = l,
											G = b,
											B = {
												count: 1
											};
										if (y && v(y, "String")) try {
											var H = (new Function("return " + y))();
											if (v(H, "Object"))
												for (q in H) B[q] = B[q] ? B[q] : H[q];
											else G("data-xy-params is error")
										} catch (W) {
											G("data-xy-params is error:" + W)
										}
										q = (B.dur = A, B);
										y = L("", "", q, h.dataset.xyExposure);
										if ((A = h.dataset.xyCallback) && v(A, "String")) try {
											var F = (new Function("return " + A))();
											v(F, "Function") && (y = L("", "", q, h.dataset.xyExposure,
												F, F))
										} catch (W) {
											b("exCb:" + W)
										}
										n.push(y);
										"1" === h.dataset.xyCycle ? delete h.dataset.xyExpoId : m.unobserve(
											h)
									}
									d = w;
									H = [];
									if ("deExpo" ===
										c.type)
										for (c = 0; c < d.length; c++) F = d[c], f[F.xyUniId] || H.push(F);
									w = H;
									a(n)
								}
							},
							f = c.option || null,
							l = f && f.ratio && "number" == typeof f.ratio && 0 < f.ratio && 1 >= f.ratio ?
							f.ratio : .5,
							r = !(!f || !0 !== f.isEnableDur),
							p = 0,
							w = [],
							m = new IntersectionObserver(function(a) {
								for (var b = [], c = Date.now(), f = 0; f < a.length; f++) {
									var n = a[f],
										m = n.target,
										h = m.dataset;
									!h.xyExpoId && n.intersectionRatio >= l ? (n = c + "_" + ++p, h
										.xyExpoId = n, h.xyExpoTime = c, w.push({
											dom: m,
											xyUniId: h.xyExpoId,
											expoTime: h.xyExpoTime
										})) : h.xyExpoId && 0 >= n.intersectionRatio && b.push({
										dom: m,
										xyUniId: h.xyExpoId,
										expoTime: h.xyExpoTime
									})
								}
								r ? d({
									type: "deExpo"
								}, b) : d({
									type: "imExpo"
								}, w)
							}, {
								root: null,
								rootMargin: "0px",
								threshold: [0, l]
							});
						(new MutationObserver(function(a) {
							for (var b = 0; b < a.length; b++) "childList" === a[b].type && pa(m)
						})).observe(document, {
							childList: !0,
							subtree: !0
						});
						pa(m);
						r && M([
							["blur", function(a) {
								d(a, w)
							}],
							["visibilitychange", function(a) {
								"visibilitychange" === a.type && "hidden" === document
									.visibilityState && d(a, w)
							}],
							["beforeunload", function(a) {
								d(a, w)
							}]
						], !0)
					} catch (n) {
						b("expoError:" + n)
					} else b("io is undefined")
				}
			})
};
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
	define.amd ? define(t) : (e = e || self).vTgSDK = t()