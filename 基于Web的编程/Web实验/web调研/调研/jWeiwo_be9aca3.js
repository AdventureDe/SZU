! function(e) {
	function n(e) {
		var n = document.cookie.match(new RegExp("(?:^|;\\s)" + encodeURIComponent(e) + "=(.*?)(?:;\\s|$)"));
		return n = n ? decodeURIComponent(n[1]) : ""
	}

	function t() {
		l = document.createElement("iframe"), l.style.display = "none", document.documentElement.appendChild(l)
	}

	function o(e, n) {
		g.push({
			msg: e,
			action: n
		}), v || a()
	}

	function a() {
		var e = g.shift();
		if (void 0 === e) v = !1;
		else {
			v = !0;
			var n = e.msg,
				t = e.action,
				o = n.funName,
				a = n.params,
				c = n.callbackID;
			l.src = h + "://" + S[t] + "/" + o + "?callback=" + encodeURIComponent(c) + "&data=" + encodeURIComponent(
				JSON.stringify(a))
		}
	}

	function c(e) {
		var n, t, o;
		try {
			n = JSON.parse(e) || {}
		} catch (a) {
			n = {}
		}
		o = n.handlerjsName, "request" === n.msgtype ? t = B[o] : "response" === n.msgtype && (t = k[o], o in k &&
			delete k[o]), "function" == typeof t && t(n.requestdata, n.responsecallback)
	}

	function i(e, n, t, a) {
		if (e && "string" == typeof e) {
			n && "object" == typeof n || (n = {});
			var c, i = String(y++);
			"function" == typeof t && (k[i] = t), c = {
				funName: e,
				params: n,
				callbackID: i
			}, o(c, a)
		}
	}

	function r(e, n, t) {
		i(e, n, t, "common")
	}

	function s(e, n, t) {
		i(e, n, t, "call")
	}

	function p(e, n) {
		"string" == typeof e && "function" == typeof n && (B[e] = n)
	}
	if (!e.WeiwoJSBridge) {
		var l, f = navigator.userAgent,
			u = /vivospace/i.test(f),
			d = parseInt(n("vvc_app_version"), 10),
			m = 170,
			g = (!u || isNaN(d) || m > d, []),
			v = !1,
			y = 1e3,
			k = {},
			B = {},
			h = "jsBridge",
			N = "javacall",
			w = "javacommon",
			I = "javaresponse",
			S = {
				call: N,
				common: w,
				result: I
			},
			b = ["toast", "copy", "isPackageInstall", "openAppByPackage", "openAppByDeepLink", "download", "getNetType",
				"registerBack", "unregisterBack", "webBackPress", "hideSoftKeyBoard", "requestedOrientation", "exit"
			];
		e.WeiwoJSBridge = {
			call: s,
			callCommon: r,
			registHandler: p,
			_continueSendMsg: a,
			_handleMessageFromNative: c
		};
		for (var j = e.WeiwoJSBridge, C = 0, J = b.length; J > C; C++) {
			var R = b[C];
			j[R] = function(e) {
				return function(n, t) {
					r(e, n, t)
				}
			}(R)
		}
		t()
	}
}(window);