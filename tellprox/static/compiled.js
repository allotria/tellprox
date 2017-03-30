!function (c, k) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = c.document ? k(c, !0) : function (c) {
    if (!c.document)throw Error("jQuery requires a window with a document");
    return k(c)
  } : k(c)
}("undefined" != typeof window ? window : this, function (c, k) {
  function p(e) {
    var r = e.length, b = g.type(e);
    return "function" === b || g.isWindow(e) ? !1 : 1 === e.nodeType && r ? !0 : "array" === b || 0 === r || "number" == typeof r && 0 < r && r - 1 in e
  }

  function d(e, r, b) {
    if (g.isFunction(r))return g.grep(e, function (e, g) {
      return !!r.call(e, g,
          e) !== b
    });
    if (r.nodeType)return g.grep(e, function (e) {
      return e === r !== b
    });
    if ("string" == typeof r) {
      if (kb.test(r))return g.filter(r, e, b);
      r = g.filter(r, e)
    }
    return g.grep(e, function (e) {
      return 0 <= ga.call(r, e) !== b
    })
  }

  function f(e, r) {
    for (; (e = e[r]) && 1 !== e.nodeType;);
    return e
  }

  function n(e) {
    var r = Oa[e] = {};
    return g.each(e.match(Z) || [], function (e, b) {
      r[b] = !0
    }), r
  }

  function u() {
    K.removeEventListener("DOMContentLoaded", u, !1);
    c.removeEventListener("load", u, !1);
    g.ready()
  }

  function z() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    });
    this.expando = g.expando + Math.random()
  }

  function A(e, r, b) {
    var B;
    if (void 0 === b && 1 === e.nodeType)if (B = "data-" + r.replace(lb, "-$1").toLowerCase(), b = e.getAttribute(B), "string" == typeof b) {
      try {
        b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : mb.test(b) ? g.parseJSON(b) : b
      } catch (c) {
      }
      Y.set(e, r, b)
    } else b = void 0;
    return b
  }

  function G() {
    return !0
  }

  function D() {
    return !1
  }

  function b() {
    try {
      return K.activeElement
    } catch (e) {
    }
  }

  function W(e, r) {
    return g.nodeName(e, "table") && g.nodeName(11 !== r.nodeType ? r : r.firstChild, "tr") ?
    e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function L(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function T(e) {
    var r = nb.exec(e.type);
    return r ? e.type = r[1] : e.removeAttribute("type"), e
  }

  function ma(e, r) {
    for (var b = 0, g = e.length; g > b; b++)H.set(e[b], "globalEval", !r || H.get(r[b], "globalEval"))
  }

  function l(e, r) {
    var b, B, c, d, m, l;
    if (1 === r.nodeType) {
      if (H.hasData(e) && (b = H.access(e), B = H.set(r, b), l = b.events))for (c in delete B.handle, B.events = {}, l)for (b =
                                                                                                                              0, B = l[c].length; B > b; b++)g.event.add(r, c, l[c][b]);
      Y.hasData(e) && (d = Y.access(e), m = g.extend({}, d), Y.set(r, m))
    }
  }

  function q(e, r) {
    var b = e.getElementsByTagName ? e.getElementsByTagName(r || "*") : e.querySelectorAll ? e.querySelectorAll(r || "*") : [];
    return void 0 === r || r && g.nodeName(e, r) ? g.merge([e], b) : b
  }

  function s(e, r) {
    var b = g(r.createElement(e)).appendTo(r.body), B = c.getDefaultComputedStyle ? c.getDefaultComputedStyle(b[0]).display : g.css(b[0], "display");
    return b.detach(), B
  }

  function v(e) {
    var r = K, b = Pa[e];
    return b || (b =
      s(e, r), "none" !== b && b || (wa = (wa || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = wa[0].contentDocument, r.write(), r.close(), b = s(e, r), wa.detach()), Pa[e] = b), b
  }

  function P(e, r, b) {
    var B, c, d, m, l = e.style;
    return b = b || xa(e), b && (m = b.getPropertyValue(r) || b[r]), b && ("" !== m || g.contains(e.ownerDocument, e) || (m = g.style(e, r)), Ia.test(m) && Qa.test(r) && (B = l.width, c = l.minWidth, d = l.maxWidth, l.minWidth = l.maxWidth = l.width = m, m = b.width, l.width = B, l.minWidth = c, l.maxWidth = d)), void 0 !== m ? m + "" : m
  }

  function E(e, b) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  function x(e, b) {
    if (b in e)return b;
    for (var t = b[0].toUpperCase() + b.slice(1), g = b, c = Ra.length; c--;)if (b = Ra[c] + t, b in e)return b;
    return g
  }

  function F(e, b, t) {
    return (e = ob.exec(b)) ? Math.max(0, e[1] - (t || 0)) + (e[2] || "px") : b
  }

  function m(e, b, t, B, c) {
    b = t === (B ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
    for (var d = 0; 4 > b; b += 2)"margin" === t && (d += g.css(e, t + ka[b], !0, c)), B ? ("content" === t && (d -= g.css(e, "padding" + ka[b], !0, c)),
    "margin" !== t && (d -= g.css(e, "border" + ka[b] + "Width", !0, c))) : (d += g.css(e, "padding" + ka[b], !0, c), "padding" !== t && (d += g.css(e, "border" + ka[b] + "Width", !0, c)));
    return d
  }

  function w(e, b, t) {
    var B = !0, c = "width" === b ? e.offsetWidth : e.offsetHeight, d = xa(e), l = "border-box" === g.css(e, "boxSizing", !1, d);
    if (0 >= c || null == c) {
      if (c = P(e, b, d), (0 > c || null == c) && (c = e.style[b]), Ia.test(c))return c;
      B = l && (S.boxSizingReliable() || c === e.style[b]);
      c = parseFloat(c) || 0
    }
    return c + m(e, b, t || (l ? "border" : "content"), B, d) + "px"
  }

  function y(e, b) {
    for (var t,
           B, c, d = [], m = 0, l = e.length; l > m; m++)B = e[m], B.style && (d[m] = H.get(B, "olddisplay"), t = B.style.display, b ? (d[m] || "none" !== t || (B.style.display = ""), "" === B.style.display && ra(B) && (d[m] = H.access(B, "olddisplay", v(B.nodeName)))) : d[m] || (c = ra(B), (t && "none" !== t || !c) && H.set(B, "olddisplay", c ? t : g.css(B, "display"))));
    for (m = 0; l > m; m++)B = e[m], B.style && (b && "none" !== B.style.display && "" !== B.style.display || (B.style.display = b ? d[m] || "" : "none"));
    return e
  }

  function Q(e, b, t, g, c) {
    return new Q.prototype.init(e, b, t, g, c)
  }

  function M() {
    return setTimeout(function () {
      ha = void 0
    }), ha = g.now()
  }

  function C(e, b) {
    var t, g = 0, c = {height: e};
    for (b = b ? 1 : 0; 4 > g; g += 2 - b)t = ka[g], c["margin" + t] = c["padding" + t] = e;
    return b && (c.opacity = c.width = e), c
  }

  function N(e, b, t) {
    for (var g, c = (sa[b] || []).concat(sa["*"]), d = 0, m = c.length; m > d; d++)if (g = c[d].call(t, b, e))return g
  }

  function U(e, b) {
    var t, c, d, m, l;
    for (t in e)if (c = g.camelCase(t), d = b[c], m = e[t], g.isArray(m) && (d = m[1], m = e[t] = m[0]), t !== c && (e[c] = m, delete e[t]), l = g.cssHooks[c], l && "expand"in l)for (t in m = l.expand(m), delete e[c], m)t in e || (e[t] = m[t], b[t] = d);
    else b[c] = d
  }

  function V(e, b, t) {
    var c, d = 0, m = ya.length, l = g.Deferred().always(function () {
      delete f.elem
    }), f = function () {
      if (c)return !1;
      for (var b = ha || M(), b = Math.max(0, q.startTime + q.duration - b), r = 1 - (b / q.duration || 0), t = 0, g = q.tweens.length; g > t; t++)q.tweens[t].run(r);
      return l.notifyWith(e, [q, r, b]), 1 > r && g ? b : (l.resolveWith(e, [q]), !1)
    }, q = l.promise({
      elem: e,
      props: g.extend({}, b),
      opts: g.extend(!0, {specialEasing: {}}, t),
      originalProperties: b,
      originalOptions: t,
      startTime: ha || M(),
      duration: t.duration,
      tweens: [],
      createTween: function (b,
                             r) {
        var t = g.Tween(e, q.opts, b, r, q.opts.specialEasing[b] || q.opts.easing);
        return q.tweens.push(t), t
      },
      stop: function (b) {
        var r = 0, t = b ? q.tweens.length : 0;
        if (c)return this;
        for (c = !0; t > r; r++)q.tweens[r].run(1);
        return b ? l.resolveWith(e, [q, b]) : l.rejectWith(e, [q, b]), this
      }
    });
    t = q.props;
    for (U(t, q.opts.specialEasing); m > d; d++)if (b = ya[d].call(q, e, t, q.opts))return b;
    return g.map(t, N, q), g.isFunction(q.opts.start) && q.opts.start.call(e, q), g.fx.timer(g.extend(f, {
      elem: e,
      anim: q,
      queue: q.opts.queue
    })), q.progress(q.opts.progress).done(q.opts.done,
      q.opts.complete).fail(q.opts.fail).always(q.opts.always)
  }

  function J(e) {
    return function (b, t) {
      "string" != typeof b && (t = b, b = "*");
      var c, d = 0, m = b.toLowerCase().match(Z) || [];
      if (g.isFunction(t))for (; c = m[d++];)"+" === c[0] ? (c = c.slice(1) || "*", (e[c] = e[c] || []).unshift(t)) : (e[c] = e[c] || []).push(t)
    }
  }

  function ta(e, b, t, c) {
    function d(q) {
      var f;
      return m[q] = !0, g.each(e[q] || [], function (e, g) {
        var q = g(b, t, c);
        return "string" != typeof q || l || m[q] ? l ? !(f = q) : void 0 : (b.dataTypes.unshift(q), d(q), !1)
      }), f
    }

    var m = {}, l = e === Ja;
    return d(b.dataTypes[0]) ||
      !m["*"] && d("*")
  }

  function I(e, b) {
    var t, c, d = g.ajaxSettings.flatOptions || {};
    for (t in b)void 0 !== b[t] && ((d[t] ? e : c || (c = {}))[t] = b[t]);
    return c && g.extend(!0, e, c), e
  }

  function X(e, b, t, c) {
    var d;
    if (g.isArray(b))g.each(b, function (b, r) {
      t || pb.test(e) ? c(e, r) : X(e + "[" + ("object" == typeof r ? b : "") + "]", r, t, c)
    }); else if (t || "object" !== g.type(b))c(e, b); else for (d in b)X(e + "[" + d + "]", b[d], t, c)
  }

  function Aa(e) {
    return g.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  var ea = [], O = ea.slice, ca = ea.concat, fa = ea.push, ga = ea.indexOf, ua = {},
    Fa = ua.toString, Ba = ua.hasOwnProperty, qb = "".trim, S = {}, K = c.document, g = function (e, b) {
      return new g.fn.init(e, b)
    }, rb = /^-ms-/, sb = /-([\da-z])/gi, tb = function (e, b) {
      return b.toUpperCase()
    };
  g.fn = g.prototype = {
    jquery: "2.1.0", constructor: g, selector: "", length: 0, toArray: function () {
      return O.call(this)
    }, get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : O.call(this)
    }, pushStack: function (e) {
      e = g.merge(this.constructor(), e);
      return e.prevObject = this, e.context = this.context, e
    }, each: function (e, b) {
      return g.each(this,
        e, b)
    }, map: function (e) {
      return this.pushStack(g.map(this, function (b, t) {
        return e.call(b, t, b)
      }))
    }, slice: function () {
      return this.pushStack(O.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var b = this.length;
      e = +e + (0 > e ? b : 0);
      return this.pushStack(0 <= e && b > e ? [this[e]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: fa, sort: ea.sort, splice: ea.splice
  };
  g.extend = g.fn.extend = function () {
    var e, b, t, c, d, m, l = arguments[0] || {}, q = 1, f =
      arguments.length, s = !1;
    "boolean" == typeof l && (s = l, l = arguments[q] || {}, q++);
    "object" == typeof l || g.isFunction(l) || (l = {});
    for (q === f && (l = this, q--); f > q; q++)if (null != (e = arguments[q]))for (b in e)t = l[b], c = e[b], l !== c && (s && c && (g.isPlainObject(c) || (d = g.isArray(c))) ? (d ? (d = !1, m = t && g.isArray(t) ? t : []) : m = t && g.isPlainObject(t) ? t : {}, l[b] = g.extend(s, m, c)) : void 0 !== c && (l[b] = c));
    return l
  };
  g.extend({
    expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw Error(e);
    }, noop: function () {
    },
    isFunction: function (e) {
      return "function" === g.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      return 0 <= e - parseFloat(e)
    }, isPlainObject: function (e) {
      if ("object" !== g.type(e) || e.nodeType || g.isWindow(e))return !1;
      try {
        if (e.constructor && !Ba.call(e.constructor.prototype, "isPrototypeOf"))return !1
      } catch (b) {
        return !1
      }
      return !0
    }, isEmptyObject: function (e) {
      for (var b in e)return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ?
      ua[Fa.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      var b, t = eval;
      (e = g.trim(e)) && (1 === e.indexOf("use strict") ? (b = K.createElement("script"), b.text = e, K.head.appendChild(b).parentNode.removeChild(b)) : t(e))
    }, camelCase: function (e) {
      return e.replace(rb, "ms-").replace(sb, tb)
    }, nodeName: function (e, b) {
      return e.nodeName && e.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (e, b, t) {
      var g, c = 0, d = e.length, m = p(e);
      if (t)if (m)for (; d > c && (g = b.apply(e[c], t), !1 !== g); c++); else for (c in e) {
        if (g = b.apply(e[c], t), !1 ===
          g)break
      } else if (m)for (; d > c && (g = b.call(e[c], c, e[c]), !1 !== g); c++); else for (c in e)if (g = b.call(e[c], c, e[c]), !1 === g)break;
      return e
    }, trim: function (e) {
      return null == e ? "" : qb.call(e)
    }, makeArray: function (e, b) {
      var t = b || [];
      return null != e && (p(Object(e)) ? g.merge(t, "string" == typeof e ? [e] : e) : fa.call(t, e)), t
    }, inArray: function (e, b, g) {
      return null == b ? -1 : ga.call(b, e, g)
    }, merge: function (e, b) {
      for (var g = +b.length, c = 0, d = e.length; g > c; c++)e[d++] = b[c];
      return e.length = d, e
    }, grep: function (e, b, g) {
      for (var c = [], d = 0, m = e.length, l = !g; m >
      d; d++)g = !b(e[d], d), g !== l && c.push(e[d]);
      return c
    }, map: function (e, b, g) {
      var c, d = 0, m = e.length, l = [];
      if (p(e))for (; m > d; d++)c = b(e[d], d, g), null != c && l.push(c); else for (d in e)c = b(e[d], d, g), null != c && l.push(c);
      return ca.apply([], l)
    }, guid: 1, proxy: function (e, b) {
      var c, d, m;
      return "string" == typeof b && (c = e[b], b = e, e = c), g.isFunction(e) ? (d = O.call(arguments, 2), m = function () {
        return e.apply(b || this, d.concat(O.call(arguments)))
      }, m.guid = e.guid = e.guid || g.guid++, m) : void 0
    }, now: Date.now, support: S
  });
  g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function (e, b) {
      ua["[object " + b + "]"] = b.toLowerCase()
    });
  var pa = function (e) {
    function b(e, r, c, g) {
      var t, d, m, l, B;
      if ((r ? r.ownerDocument || r : ca) !== J && V(r), r = r || J, c = c || [], !e || "string" != typeof e)return c;
      if (1 !== (l = r.nodeType) && 9 !== l)return [];
      if (D && !g) {
        if (t = ya.exec(e))if (m = t[1])if (9 === l) {
          if (d = r.getElementById(m), !d || !d.parentNode)return c;
          if (d.id === m)return c.push(d), c
        } else {
          if (r.ownerDocument && (d = r.ownerDocument.getElementById(m)) && K(r, d) && d.id === m)return c.push(d), c
        } else {
          if (t[2])return Z.apply(c, r.getElementsByTagName(e)),
            c;
          if ((m = t[3]) && E.getElementsByClassName && r.getElementsByClassName)return Z.apply(c, r.getElementsByClassName(m)), c
        }
        if (E.qsa && (!H || !H.test(e))) {
          if (d = t = O, m = r, B = 9 === l && e, 1 === l && "object" !== r.nodeName.toLowerCase()) {
            l = y(e);
            (t = r.getAttribute("id")) ? d = t.replace(za, "\\$&") : r.setAttribute("id", d);
            d = "[id='" + d + "'] ";
            for (m = l.length; m--;)l[m] = d + v(l[m]);
            m = qa.test(e) && w(r.parentNode) || r;
            B = l.join(",")
          }
          if (B)try {
            return Z.apply(c, m.querySelectorAll(B)), c
          } catch (q) {
          } finally {
            t || r.removeAttribute("id")
          }
        }
      }
      var f;
      a:{
        e = e.replace(ha,
          "$1");
        var R, s;
        d = y(e);
        if (!g && 1 === d.length) {
          if (f = d[0] = d[0].slice(0), 2 < f.length && "ID" === (R = f[0]).type && E.getById && 9 === r.nodeType && D && C.relative[f[1].type]) {
            if (r = (C.find.ID(R.matches[0].replace(na, oa), r) || [])[0], !r) {
              f = c;
              break a
            }
            e = e.slice(f.shift().value.length)
          }
          for (l = la.needsContext.test(e) ? 0 : f.length; l-- && (R = f[l], !C.relative[t = R.type]);)if ((s = C.find[t]) && (g = s(R.matches[0].replace(na, oa), qa.test(f[0].type) && w(r.parentNode) || r))) {
            if (f.splice(l, 1), e = g.length && v(f), !e) {
              f = (Z.apply(c, g), c);
              break a
            }
            break
          }
        }
        f =
          (N(e, d)(g, r, !D, c, qa.test(e) && w(r.parentNode) || r), c)
      }
      return f
    }

    function g() {
      function e(r, c) {
        return b.push(r + " ") > C.cacheLength && delete e[b.shift()], e[r + " "] = c
      }

      var b = [];
      return e
    }

    function c(e) {
      return e[O] = !0, e
    }

    function d(e) {
      var b = J.createElement("div");
      try {
        return !!e(b)
      } catch (r) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b)
      }
    }

    function m(e, b) {
      for (var r = e.split("|"), c = e.length; c--;)C.attrHandle[r[c]] = b
    }

    function l(e, b) {
      var r = b && e, c = r && 1 === e.nodeType && 1 === b.nodeType && (~b.sourceIndex || Y) - (~e.sourceIndex ||
        Y);
      if (c)return c;
      if (r)for (; r = r.nextSibling;)if (r === b)return -1;
      return e ? 1 : -1
    }

    function q(e) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === e
      }
    }

    function f(e) {
      return function (b) {
        var r = b.nodeName.toLowerCase();
        return ("input" === r || "button" === r) && b.type === e
      }
    }

    function s(e) {
      return c(function (b) {
        return b = +b, c(function (r, c) {
          for (var g, t = e([], r.length, b), d = t.length; d--;)r[g = t[d]] && (r[g] = !(c[g] = r[g]))
        })
      })
    }

    function w(e) {
      return e && typeof e.getElementsByTagName !== ga && e
    }

    function n() {
    }

    function y(e,
               c) {
      var g, t, d, m, l, B, q;
      if (l = S[e + " "])return c ? 0 : l.slice(0);
      l = e;
      B = [];
      for (q = C.preFilter; l;) {
        g && !(t = Ba.exec(l)) || (t && (l = l.slice(t[0].length) || l), B.push(d = []));
        g = !1;
        (t = pa.exec(l)) && (g = t.shift(), d.push({value: g, type: t[0].replace(ha, " ")}), l = l.slice(g.length));
        for (m in C.filter)!(t = la[m].exec(l)) || q[m] && !(t = q[m](t)) || (g = t.shift(), d.push({
          value: g,
          type: m,
          matches: t
        }), l = l.slice(g.length));
        if (!g)break
      }
      return c ? l.length : l ? b.error(e) : S(e, B).slice(0)
    }

    function v(e) {
      for (var b = 0, r = e.length, c = ""; r > b; b++)c += e[b].value;
      return c
    }

    function k(e, b, r) {
      var c = b.dir, g = r && "parentNode" === c, t = ma++;
      return b.first ? function (b, r, t) {
        for (; b = b[c];)if (1 === b.nodeType || g)return e(b, r, t)
      } : function (b, r, d) {
        var m, l, B = [T, t];
        if (d)for (; b = b[c];) {
          if ((1 === b.nodeType || g) && e(b, r, d))return !0
        } else for (; b = b[c];)if (1 === b.nodeType || g) {
          if (l = b[O] || (b[O] = {}), (m = l[c]) && m[0] === T && m[1] === t)return B[2] = m[2];
          if (l[c] = B, B[2] = e(b, r, d))return !0
        }
      }
    }

    function x(e) {
      return 1 < e.length ? function (b, r, c) {
        for (var g = e.length; g--;)if (!e[g](b, r, c))return !1;
        return !0
      } : e[0]
    }

    function F(e,
               b, r, c, g) {
      for (var t, d = [], m = 0, l = e.length, B = null != b; l > m; m++)(t = e[m]) && (!r || r(t, c, g)) && (d.push(t), B && b.push(m));
      return d
    }

    function Q(e, g, t, d, m, l) {
      return d && !d[O] && (d = Q(d)), m && !m[O] && (m = Q(m, l)), c(function (c, l, B, q) {
        var f, R, s = [], aa = [], w = l.length, n;
        if (!(n = c)) {
          n = g || "*";
          for (var y = B.nodeType ? [B] : B, v = [], k = 0, Ea = y.length; Ea > k; k++)b(n, y[k], v);
          n = v
        }
        n = !e || !c && g ? n : F(n, s, e, B, q);
        y = t ? m || (c ? e : w || d) ? [] : l : n;
        if (t && t(n, y, B, q), d)for (f = F(y, aa), d(f, [], B, q), B = f.length; B--;)(R = f[B]) && (y[aa[B]] = !(n[aa[B]] = R));
        if (c) {
          if (m || e) {
            if (m) {
              f =
                [];
              for (B = y.length; B--;)(R = y[B]) && f.push(n[B] = R);
              m(null, y = [], f, q)
            }
            for (B = y.length; B--;)(R = y[B]) && -1 < (f = m ? ba.call(c, R) : s[B]) && (c[f] = !(l[f] = R))
          }
        } else y = F(y === l ? y.splice(w, y.length) : y), m ? m(null, l, y, q) : Z.apply(l, y)
      })
    }

    function u(e) {
      var b, r, c, g = e.length, t = C.relative[e[0].type];
      r = t || C.relative[" "];
      for (var d = t ? 1 : 0, m = k(function (e) {
        return e === b
      }, r, !0), l = k(function (e) {
        return -1 < ba.call(b, e)
      }, r, !0), B = [function (e, r, c) {
        return !t && (c || r !== A) || ((b = r).nodeType ? m(e, r, c) : l(e, r, c))
      }]; g > d; d++)if (r = C.relative[e[d].type])B =
        [k(x(B), r)]; else {
        if (r = C.filter[e[d].type].apply(null, e[d].matches), r[O]) {
          for (c = ++d; g > c && !C.relative[e[c].type]; c++);
          return Q(1 < d && x(B), 1 < d && v(e.slice(0, d - 1).concat({value: " " === e[d - 2].type ? "*" : ""})).replace(ha, "$1"), r, c > d && u(e.slice(d, c)), g > c && u(e = e.slice(c)), g > c && v(e))
        }
        B.push(r)
      }
      return x(B)
    }

    function M(e, g) {
      var t = 0 < g.length, d = 0 < e.length, m = function (c, m, l, B, q) {
        var f, R, s, aa = 0, w = "0", n = c && [], y = [], v = A, k = c || d && C.find.TAG("*", q), Ea = T += null == v ? 1 : Math.random() || .1, x = k.length;
        for (q && (A = m !== J && m); w !== x && null !=
        (f = k[w]); w++) {
          if (d && f) {
            for (R = 0; s = e[R++];)if (s(f, m, l)) {
              B.push(f);
              break
            }
            q && (T = Ea)
          }
          t && ((f = !s && f) && aa--, c && n.push(f))
        }
        if (aa += w, t && w !== aa) {
          for (R = 0; s = g[R++];)s(n, y, m, l);
          if (c) {
            if (0 < aa)for (; w--;)n[w] || y[w] || (y[w] = W.call(B));
            y = F(y)
          }
          Z.apply(B, y);
          q && !c && 0 < y.length && 1 < aa + g.length && b.uniqueSort(B)
        }
        return q && (T = Ea, A = v), n
      };
      return t ? c(m) : m
    }

    var P, E, C, p, z, N, A, U, G, V, J, I, D, H, X, ta, K, O = "sizzle" + -new Date, ca = e.document, T = 0, ma = 0, Aa = g(), S = g(), ua = g(), L = function (e, b) {
      return e === b && (G = !0), 0
    }, ga = "undefined", Y = -2147483648, ea =
      {}.hasOwnProperty, fa = [], W = fa.pop, da = fa.push, Z = fa.push, ia = fa.slice, ba = fa.indexOf || function (e) {
        for (var b = 0, r = this.length; r > b; b++)if (this[b] === e)return b;
        return -1
      }, ka = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Fa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ka + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", ja = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
      Fa.replace(3, 8) + ")*)|.*)\\)|)", ha = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), Ba = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, pa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ra = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), sa = new RegExp(ja), va = new RegExp("^" + ka + "$"), la = {
      ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
      ATTR: new RegExp("^" +
        Fa),
      PSEUDO: new RegExp("^" + ja),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
      bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
      needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
        "i")
    }, wa = /^(?:input|select|textarea|button)$/i, xa = /^h\d$/i, Ca = /^[^{]+\{\s*\[native \w/, ya = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qa = /[+~]/, za = /'|\\/g, na = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), oa = function (e, b, r) {
      e = "0x" + b - 65536;
      return e !== e || r ? b : 0 > e ? String.fromCharCode(e + 65536) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320)
    };
    try {
      Z.apply(fa = ia.call(ca.childNodes), ca.childNodes), fa[ca.childNodes.length].nodeType
    } catch (Da) {
      Z = {
        apply: fa.length ? function (e, b) {
          da.apply(e,
            ia.call(b))
        } : function (e, b) {
          for (var r = e.length, c = 0; e[r++] = b[c++];);
          e.length = r - 1
        }
      }
    }
    E = b.support = {};
    z = b.isXML = function (e) {
      return (e = e && (e.ownerDocument || e).documentElement) ? "HTML" !== e.nodeName : !1
    };
    V = b.setDocument = function (e) {
      var b, r = e ? e.ownerDocument || e : ca;
      e = r.defaultView;
      return r !== J && 9 === r.nodeType && r.documentElement ? (J = r, I = r.documentElement, D = !z(r), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function () {
        V()
      }, !1) : e.attachEvent && e.attachEvent("onunload", function () {
        V()
      })), E.attributes =
        d(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), E.getElementsByTagName = d(function (e) {
        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
      }), E.getElementsByClassName = Ca.test(r.getElementsByClassName) && d(function (e) {
          return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
        }), E.getById = d(function (e) {
        return I.appendChild(e).id = O, !r.getElementsByName || !r.getElementsByName(O).length
      }),
        E.getById ? (C.find.ID = function (e, b) {
          if (typeof b.getElementById !== ga && D) {
            var r = b.getElementById(e);
            return r && r.parentNode ? [r] : []
          }
        }, C.filter.ID = function (e) {
          var b = e.replace(na, oa);
          return function (e) {
            return e.getAttribute("id") === b
          }
        }) : (delete C.find.ID, C.filter.ID = function (e) {
          var b = e.replace(na, oa);
          return function (e) {
            return (e = typeof e.getAttributeNode !== ga && e.getAttributeNode("id")) && e.value === b
          }
        }), C.find.TAG = E.getElementsByTagName ? function (e, b) {
        return typeof b.getElementsByTagName !== ga ? b.getElementsByTagName(e) :
          void 0
      } : function (e, b) {
        var r, c = [], g = 0, t = b.getElementsByTagName(e);
        if ("*" === e) {
          for (; r = t[g++];)1 === r.nodeType && c.push(r);
          return c
        }
        return t
      }, C.find.CLASS = E.getElementsByClassName && function (e, b) {
          return typeof b.getElementsByClassName !== ga && D ? b.getElementsByClassName(e) : void 0
        }, X = [], H = [], (E.qsa = Ca.test(r.querySelectorAll)) && (d(function (e) {
        e.innerHTML = "<select t=''><option selected=''></option></select>";
        e.querySelectorAll("[t^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
        e.querySelectorAll("[selected]").length ||
        H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
        e.querySelectorAll(":checked").length || H.push(":checked")
      }), d(function (e) {
        var b = r.createElement("input");
        b.setAttribute("type", "hidden");
        e.appendChild(b).setAttribute("name", "D");
        e.querySelectorAll("[name=d]").length && H.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
        e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
        e.querySelectorAll("*,:x");
        H.push(",.*:")
      })), (E.matchesSelector = Ca.test(ta = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && d(function (e) {
        E.disconnectedMatch = ta.call(e, "div");
        ta.call(e, "[s!='']:x");
        X.push("!=", ja)
      }), H = H.length && new RegExp(H.join("|")), X = X.length && new RegExp(X.join("|")), b = Ca.test(I.compareDocumentPosition), K = b || Ca.test(I.contains) ? function (e, b) {
        var r = 9 === e.nodeType ? e.documentElement : e, c = b && b.parentNode;
        return e === c || !(!c || 1 !== c.nodeType || !(r.contains ? r.contains(c) : e.compareDocumentPosition &&
          16 & e.compareDocumentPosition(c)))
      } : function (e, b) {
        if (b)for (; b = b.parentNode;)if (b === e)return !0;
        return !1
      }, L = b ? function (e, b) {
        if (e === b)return G = !0, 0;
        var c = !e.compareDocumentPosition - !b.compareDocumentPosition;
        return c ? c : (c = (e.ownerDocument || e) === (b.ownerDocument || b) ? e.compareDocumentPosition(b) : 1, 1 & c || !E.sortDetached && b.compareDocumentPosition(e) === c ? e === r || e.ownerDocument === ca && K(ca, e) ? -1 : b === r || b.ownerDocument === ca && K(ca, b) ? 1 : U ? ba.call(U, e) - ba.call(U, b) : 0 : 4 & c ? -1 : 1)
      } : function (e, b) {
        if (e === b)return G = !0,
          0;
        var c, g = 0;
        c = e.parentNode;
        var t = b.parentNode, d = [e], m = [b];
        if (!c || !t)return e === r ? -1 : b === r ? 1 : c ? -1 : t ? 1 : U ? ba.call(U, e) - ba.call(U, b) : 0;
        if (c === t)return l(e, b);
        for (c = e; c = c.parentNode;)d.unshift(c);
        for (c = b; c = c.parentNode;)m.unshift(c);
        for (; d[g] === m[g];)g++;
        return g ? l(d[g], m[g]) : d[g] === ca ? -1 : m[g] === ca ? 1 : 0
      }, r) : J
    };
    b.matches = function (e, c) {
      return b(e, null, null, c)
    };
    b.matchesSelector = function (e, c) {
      if ((e.ownerDocument || e) !== J && V(e), c = c.replace(ra, "='$1']"), !(!E.matchesSelector || !D || X && X.test(c) || H && H.test(c)))try {
        var g =
          ta.call(e, c);
        if (g || E.disconnectedMatch || e.document && 11 !== e.document.nodeType)return g
      } catch (t) {
      }
      return 0 < b(c, J, null, [e]).length
    };
    b.contains = function (e, b) {
      return (e.ownerDocument || e) !== J && V(e), K(e, b)
    };
    b.attr = function (e, b) {
      (e.ownerDocument || e) !== J && V(e);
      var r = C.attrHandle[b.toLowerCase()], r = r && ea.call(C.attrHandle, b.toLowerCase()) ? r(e, b, !D) : void 0;
      return void 0 !== r ? r : E.attributes || !D ? e.getAttribute(b) : (r = e.getAttributeNode(b)) && r.specified ? r.value : null
    };
    b.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " +
        e);
    };
    b.uniqueSort = function (e) {
      var b, r = [], c = 0, g = 0;
      if (G = !E.detectDuplicates, U = !E.sortStable && e.slice(0), e.sort(L), G) {
        for (; b = e[g++];)b === e[g] && (c = r.push(g));
        for (; c--;)e.splice(r[c], 1)
      }
      return U = null, e
    };
    p = b.getText = function (e) {
      var b, r = "", c = 0;
      if (b = e.nodeType)if (1 === b || 9 === b || 11 === b) {
        if ("string" == typeof e.textContent)return e.textContent;
        for (e = e.firstChild; e; e = e.nextSibling)r += p(e)
      } else {
        if (3 === b || 4 === b)return e.nodeValue
      } else for (; b = e[c++];)r += p(b);
      return r
    };
    C = b.selectors = {
      cacheLength: 50,
      createPseudo: c,
      match: la,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(na, oa), e[3] = (e[4] || e[5] || "").replace(na, oa), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]),
            e
        }, PSEUDO: function (e) {
          var b, r = !e[5] && e[2];
          return la.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : r && sa.test(r) && (b = y(r, !0)) && (b = r.indexOf(")", r.length - b) - r.length) && (e[0] = e[0].slice(0, b), e[2] = r.slice(0, b)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var b = e.replace(na, oa).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === b
          }
        }, CLASS: function (e) {
          var b = Aa[e + " "];
          return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)")) &&
            Aa(e, function (e) {
              return b.test("string" == typeof e.className && e.className || typeof e.getAttribute !== ga && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, c, g) {
          return function (t) {
            t = b.attr(t, e);
            return null == t ? "!=" === c : c ? (t += "", "=" === c ? t === g : "!=" === c ? t !== g : "^=" === c ? g && 0 === t.indexOf(g) : "*=" === c ? g && -1 < t.indexOf(g) : "$=" === c ? g && t.slice(-g.length) === g : "~=" === c ? -1 < (" " + t + " ").indexOf(g) : "|=" === c ? t === g || t.slice(0, g.length + 1) === g + "-" : !1) : !0
          }
        }, CHILD: function (e, b, r, c, g) {
          var t = "nth" !== e.slice(0, 3), d = "last" !== e.slice(-4),
            m = "of-type" === b;
          return 1 === c && 0 === g ? function (e) {
            return !!e.parentNode
          } : function (b, r, l) {
            var B, q, f, R, s;
            r = t !== d ? "nextSibling" : "previousSibling";
            var aa = b.parentNode, w = m && b.nodeName.toLowerCase();
            l = !l && !m;
            if (aa) {
              if (t) {
                for (; r;) {
                  for (q = b; q = q[r];)if (m ? q.nodeName.toLowerCase() === w : 1 === q.nodeType)return !1;
                  s = r = "only" === e && !s && "nextSibling"
                }
                return !0
              }
              if (s = [d ? aa.firstChild : aa.lastChild], d && l)for (l = aa[O] || (aa[O] = {}), B = l[e] || [], R = B[0] === T && B[1], f = B[0] === T && B[2], q = R && aa.childNodes[R]; q = ++R && q && q[r] || (f = R = 0) || s.pop();) {
                if (1 ===
                  q.nodeType && ++f && q === b) {
                  l[e] = [T, R, f];
                  break
                }
              } else if (l && (B = (b[O] || (b[O] = {}))[e]) && B[0] === T)f = B[1]; else for (; (q = ++R && q && q[r] || (f = R = 0) || s.pop()) && ((m ? q.nodeName.toLowerCase() !== w : 1 !== q.nodeType) || !++f || (l && ((q[O] || (q[O] = {}))[e] = [T, f]), q !== b)););
              return f -= g, f === c || 0 === f % c && 0 <= f / c
            }
          }
        }, PSEUDO: function (e, g) {
          var t, d = C.pseudos[e] || C.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
          return d[O] ? d(g) : 1 < d.length ? (t = [e, e, "", g], C.setFilters.hasOwnProperty(e.toLowerCase()) ? c(function (e, b) {
            for (var r,
                   c = d(e, g), t = c.length; t--;)r = ba.call(e, c[t]), e[r] = !(b[r] = c[t])
          }) : function (e) {
            return d(e, 0, t)
          }) : d
        }
      },
      pseudos: {
        not: c(function (e) {
          var b = [], r = [], g = N(e.replace(ha, "$1"));
          return g[O] ? c(function (e, b, r, c) {
            var t;
            r = g(e, null, c, []);
            for (c = e.length; c--;)(t = r[c]) && (e[c] = !(b[c] = t))
          }) : function (e, c, t) {
            return b[0] = e, g(b, null, t, r), !r.pop()
          }
        }), has: c(function (e) {
          return function (c) {
            return 0 < b(e, c).length
          }
        }), contains: c(function (e) {
          return function (b) {
            return -1 < (b.textContent || b.innerText || p(b)).indexOf(e)
          }
        }), lang: c(function (e) {
          return va.test(e ||
            "") || b.error("unsupported lang: " + e), e = e.replace(na, oa).toLowerCase(), function (b) {
            var r;
            do if (r = D ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return r = r.toLowerCase(), r === e || 0 === r.indexOf(e + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function (b) {
          var r = e.location && e.location.hash;
          return r && r.slice(1) === b.id
        }, root: function (e) {
          return e === I
        }, focus: function (e) {
          return e === J.activeElement && (!J.hasFocus || J.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return !1 ===
            e.disabled
        }, disabled: function (e) {
          return !0 === e.disabled
        }, checked: function (e) {
          var b = e.nodeName.toLowerCase();
          return "input" === b && !!e.checked || "option" === b && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)if (6 > e.nodeType)return !1;
          return !0
        }, parent: function (e) {
          return !C.pseudos.empty(e)
        }, header: function (e) {
          return xa.test(e.nodeName)
        }, input: function (e) {
          return wa.test(e.nodeName)
        }, button: function (e) {
          var b =
            e.nodeName.toLowerCase();
          return "input" === b && "button" === e.type || "button" === b
        }, text: function (e) {
          var b;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (b = e.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: s(function () {
          return [0]
        }), last: s(function (e, b) {
          return [b - 1]
        }), eq: s(function (e, b, r) {
          return [0 > r ? r + b : r]
        }), even: s(function (e, b) {
          for (var r = 0; b > r; r += 2)e.push(r);
          return e
        }), odd: s(function (e, b) {
          for (var r = 1; b > r; r += 2)e.push(r);
          return e
        }), lt: s(function (e, b, r) {
          for (b = 0 > r ? r + b : r; 0 <= --b;)e.push(b);
          return e
        }), gt: s(function (e, b, r) {
          for (r = 0 > r ? r + b : r; ++r < b;)e.push(r);
          return e
        })
      }
    };
    C.pseudos.nth = C.pseudos.eq;
    for (P in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[P] = q(P);
    for (P in{submit: !0, reset: !0})C.pseudos[P] = f(P);
    n.prototype = C.filters = C.pseudos;
    C.setFilters = new n;
    N = b.compile = function (e, b) {
      var r, c = [], g = [], t = ua[e + " "];
      if (!t) {
        b || (b = y(e));
        for (r = b.length; r--;)t = u(b[r]), t[O] ? c.push(t) : g.push(t);
        t = ua(e, M(g, c))
      }
      return t
    };
    return E.sortStable = O.split("").sort(L).join("") === O, E.detectDuplicates = !!G, V(), E.sortDetached = d(function (e) {
      return 1 & e.compareDocumentPosition(J.createElement("div"))
    }), d(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || m("type|href|height|width", function (e, b, r) {
      return r ? void 0 : e.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), E.attributes && d(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || m("value", function (e, b, r) {
      return r || "input" !== e.nodeName.toLowerCase() ?
        void 0 : e.defaultValue
    }), d(function (e) {
      return null == e.getAttribute("disabled")
    }) || m("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (e, b, r) {
      var c;
      return r ? void 0 : !0 === e[b] ? b.toLowerCase() : (c = e.getAttributeNode(b)) && c.specified ? c.value : null
    }), b
  }(c);
  g.find = pa;
  g.expr = pa.selectors;
  g.expr[":"] = g.expr.pseudos;
  g.unique = pa.uniqueSort;
  g.text = pa.getText;
  g.isXMLDoc = pa.isXML;
  g.contains = pa.contains;
  var Sa = g.expr.match.needsContext,
    Ta = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^.[^:#\[\.,]*$/;
  g.filter = function (e, b, c) {
    var d = b[0];
    return c && (e = ":not(" + e + ")"), 1 === b.length && 1 === d.nodeType ? g.find.matchesSelector(d, e) ? [d] : [] : g.find.matches(e, g.grep(b, function (e) {
      return 1 === e.nodeType
    }))
  };
  g.fn.extend({
    find: function (e) {
      var b, c = this.length, d = [], m = this;
      if ("string" != typeof e)return this.pushStack(g(e).filter(function () {
        for (b = 0; c > b; b++)if (g.contains(m[b], this))return !0
      }));
      for (b = 0; c > b; b++)g.find(e, m[b], d);
      return d = this.pushStack(1 < c ? g.unique(d) : d),
        d.selector = this.selector ? this.selector + " " + e : e, d
    }, filter: function (e) {
      return this.pushStack(d(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(d(this, e || [], !0))
    }, is: function (e) {
      return !!d(this, "string" == typeof e && Sa.test(e) ? g(e) : e || [], !1).length
    }
  });
  var qa, vb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (g.fn.init = function (e, b) {
    var c, d;
    if (!e)return this;
    if ("string" == typeof e) {
      if (c = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : vb.exec(e), !c || !c[1] && b)return !b || b.jquery ? (b || qa).find(e) : this.constructor(b).find(e);
      if (c[1]) {
        if (b = b instanceof g ? b[0] : b, g.merge(this, g.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : K, !0)), Ta.test(c[1]) && g.isPlainObject(b))for (c in b)g.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this
      }
      return d = K.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = K, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : g.isFunction(e) ? "undefined" != typeof qa.ready ? qa.ready(e) : e(g) : (void 0 !== e.selector && (this.selector = e.selector, this.context =
      e.context), g.makeArray(e, this))
  }).prototype = g.fn;
  qa = g(K);
  var wb = /^(?:parents|prev(?:Until|All))/, xb = {children: !0, contents: !0, next: !0, prev: !0};
  g.extend({
    dir: function (e, b, c) {
      for (var d = [], m = void 0 !== c; (e = e[b]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
        if (m && g(e).is(c))break;
        d.push(e)
      }
      return d
    }, sibling: function (e, b) {
      for (var c = []; e; e = e.nextSibling)1 === e.nodeType && e !== b && c.push(e);
      return c
    }
  });
  g.fn.extend({
    has: function (e) {
      var b = g(e, this), c = b.length;
      return this.filter(function () {
        for (var e = 0; c > e; e++)if (g.contains(this,
            b[e]))return !0
      })
    }, closest: function (e, b) {
      for (var c, d = 0, m = this.length, l = [], q = Sa.test(e) || "string" != typeof e ? g(e, b || this.context) : 0; m > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (11 > c.nodeType && (q ? -1 < q.index(c) : 1 === c.nodeType && g.find.matchesSelector(c, e))) {
        l.push(c);
        break
      }
      return this.pushStack(1 < l.length ? g.unique(l) : l)
    }, index: function (e) {
      return e ? "string" == typeof e ? ga.call(g(e), this[0]) : ga.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, b) {
      return this.pushStack(g.unique(g.merge(this.get(),
        g(e, b))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  });
  g.each({
    parent: function (e) {
      return (e = e.parentNode) && 11 !== e.nodeType ? e : null
    }, parents: function (e) {
      return g.dir(e, "parentNode")
    }, parentsUntil: function (e, b, c) {
      return g.dir(e, "parentNode", c)
    }, next: function (e) {
      return f(e, "nextSibling")
    }, prev: function (e) {
      return f(e, "previousSibling")
    }, nextAll: function (e) {
      return g.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return g.dir(e, "previousSibling")
    }, nextUntil: function (e,
                            b, c) {
      return g.dir(e, "nextSibling", c)
    }, prevUntil: function (e, b, c) {
      return g.dir(e, "previousSibling", c)
    }, siblings: function (e) {
      return g.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return g.sibling(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || g.merge([], e.childNodes)
    }
  }, function (e, b) {
    g.fn[e] = function (c, d) {
      var m = g.map(this, b, c);
      return "Until" !== e.slice(-5) && (d = c), d && "string" == typeof d && (m = g.filter(d, m)), 1 < this.length && (xb[e] || g.unique(m), wb.test(e) && m.reverse()), this.pushStack(m)
    }
  });
  var Z = /\S+/g, Oa = {};
  g.Callbacks = function (e) {
    e = "string" == typeof e ? Oa[e] || n(e) : g.extend({}, e);
    var b, c, d, m, l, q, f = [], s = !e.once && [], w = function (g) {
      b = e.memory && g;
      c = !0;
      q = m || 0;
      m = 0;
      l = f.length;
      for (d = !0; f && l > q; q++)if (!1 === f[q].apply(g[0], g[1]) && e.stopOnFalse) {
        b = !1;
        break
      }
      d = !1;
      f && (s ? s.length && w(s.shift()) : b ? f = [] : y.disable())
    }, y = {
      add: function () {
        if (f) {
          var c = f.length;
          !function ub(b) {
            g.each(b, function (b, c) {
              var r = g.type(c);
              "function" === r ? e.unique && y.has(c) || f.push(c) : c && c.length && "string" !== r && ub(c)
            })
          }(arguments);
          d ?
            l = f.length : b && (m = c, w(b))
        }
        return this
      }, remove: function () {
        return f && g.each(arguments, function (e, b) {
          for (var c; -1 < (c = g.inArray(b, f, c));)f.splice(c, 1), d && (l >= c && l--, q >= c && q--)
        }), this
      }, has: function (e) {
        return e ? -1 < g.inArray(e, f) : !(!f || !f.length)
      }, empty: function () {
        return f = [], l = 0, this
      }, disable: function () {
        return f = s = b = void 0, this
      }, disabled: function () {
        return !f
      }, lock: function () {
        return s = void 0, b || y.disable(), this
      }, locked: function () {
        return !s
      }, fireWith: function (e, b) {
        return !f || c && !s || (b = b || [], b = [e, b.slice ? b.slice() :
          b], d ? s.push(b) : w(b)), this
      }, fire: function () {
        return y.fireWith(this, arguments), this
      }, fired: function () {
        return !!c
      }
    };
    return y
  };
  g.extend({
    Deferred: function (e) {
      var b = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]], c = "pending", d = {
        state: function () {
          return c
        }, always: function () {
          return m.done(arguments).fail(arguments), this
        }, then: function () {
          var e = arguments;
          return g.Deferred(function (c) {
            g.each(b, function (b,
                                r) {
              var t = g.isFunction(e[b]) && e[b];
              m[r[1]](function () {
                var e = t && t.apply(this, arguments);
                e && g.isFunction(e.promise) ? e.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[r[0] + "With"](this === d ? c.promise() : this, t ? [e] : arguments)
              })
            });
            e = null
          }).promise()
        }, promise: function (e) {
          return null != e ? g.extend(e, d) : d
        }
      }, m = {};
      return d.pipe = d.then, g.each(b, function (e, g) {
        var l = g[2], q = g[3];
        d[g[1]] = l.add;
        q && l.add(function () {
          c = q
        }, b[1 ^ e][2].disable, b[2][2].lock);
        m[g[0]] = function () {
          return m[g[0] + "With"](this === m ? d : this,
            arguments), this
        };
        m[g[0] + "With"] = l.fireWith
      }), d.promise(m), e && e.call(m, m), m
    }, when: function (e) {
      var b = 0, c = O.call(arguments), d = c.length, m = 1 !== d || e && g.isFunction(e.promise) ? d : 0, l = 1 === m ? e : g.Deferred(), q = function (e, b, c) {
        return function (r) {
          b[e] = this;
          c[e] = 1 < arguments.length ? O.call(arguments) : r;
          c === f ? l.notifyWith(b, c) : --m || l.resolveWith(b, c)
        }
      }, f, s, w;
      if (1 < d)for (f = Array(d), s = Array(d), w = Array(d); d > b; b++)c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(q(b, w, c)).fail(l.reject).progress(q(b, s, f)) : --m;
      return m ||
      l.resolveWith(w, c), l.promise()
    }
  });
  var za;
  g.fn.ready = function (e) {
    return g.ready.promise().done(e), this
  };
  g.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? g.readyWait++ : g.ready(!0)
    }, ready: function (e) {
      (!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== e && 0 < --g.readyWait || (za.resolveWith(K, [g]), g.fn.trigger && g(K).trigger("ready").off("ready")))
    }
  });
  g.ready.promise = function (e) {
    return za || (za = g.Deferred(), "complete" === K.readyState ? setTimeout(g.ready) : (K.addEventListener("DOMContentLoaded", u, !1),
      c.addEventListener("load", u, !1))), za.promise(e)
  };
  g.ready.promise();
  var ia = g.access = function (e, b, c, d, m, l, q) {
    var f = 0, s = e.length, w = null == c;
    if ("object" === g.type(c))for (f in m = !0, c)g.access(e, b, f, c[f], !0, l, q); else if (void 0 !== d && (m = !0, g.isFunction(d) || (q = !0), w && (q ? (b.call(e, d), b = null) : (w = b, b = function (e, b, c) {
        return w.call(g(e), c)
      })), b))for (; s > f; f++)b(e[f], c, q ? d : d.call(e[f], f, b(e[f], c)));
    return m ? e : w ? b.call(e) : s ? b(e[0], c) : l
  };
  g.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  z.uid =
    1;
  z.accepts = g.acceptData;
  z.prototype = {
    key: function (e) {
      if (!z.accepts(e))return 0;
      var b = {}, c = e[this.expando];
      if (!c) {
        c = z.uid++;
        try {
          b[this.expando] = {value: c}, Object.defineProperties(e, b)
        } catch (d) {
          b[this.expando] = c, g.extend(e, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    }, set: function (e, b, c) {
      var d;
      e = this.key(e);
      var m = this.cache[e];
      if ("string" == typeof b)m[b] = c; else if (g.isEmptyObject(m))g.extend(this.cache[e], b); else for (d in b)m[d] = b[d];
      return m
    }, get: function (e, b) {
      var c = this.cache[this.key(e)];
      return void 0 ===
      b ? c : c[b]
    }, access: function (e, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(e, b), void 0 !== d ? d : this.get(e, g.camelCase(b))) : (this.set(e, b, c), void 0 !== c ? c : b)
    }, remove: function (e, b) {
      var c, d, m = this.key(e), l = this.cache[m];
      if (void 0 === b)this.cache[m] = {}; else for (g.isArray(b) ? d = b.concat(b.map(g.camelCase)) : (c = g.camelCase(b), b in l ? d = [b, c] : (d = c, d = d in l ? [d] : d.match(Z) || [])), c = d.length; c--;)delete l[d[c]]
    }, hasData: function (e) {
      return !g.isEmptyObject(this.cache[e[this.expando]] || {})
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var H = new z, Y = new z, mb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, lb = /([A-Z])/g;
  g.extend({
    hasData: function (e) {
      return Y.hasData(e) || H.hasData(e)
    }, data: function (e, b, c) {
      return Y.access(e, b, c)
    }, removeData: function (e, b) {
      Y.remove(e, b)
    }, _data: function (e, b, c) {
      return H.access(e, b, c)
    }, _removeData: function (e, b) {
      H.remove(e, b)
    }
  });
  g.fn.extend({
    data: function (e, b) {
      var c, d, m, l = this[0], q = l && l.attributes;
      if (void 0 === e) {
        if (this.length && (m = Y.get(l), 1 === l.nodeType && !H.get(l, "hasDataAttrs"))) {
          for (c = q.length; c--;)d = q[c].name, 0 === d.indexOf("data-") && (d = g.camelCase(d.slice(5)), A(l, d, m[d]));
          H.set(l, "hasDataAttrs", !0)
        }
        return m
      }
      return "object" == typeof e ? this.each(function () {
        Y.set(this, e)
      }) : ia(this, function (b) {
          var c, r = g.camelCase(e);
          if (l && void 0 === b) {
            if ((c = Y.get(l, e), void 0 !== c) || (c = Y.get(l, r), void 0 !== c) || (c = A(l, r, void 0), void 0 !== c))return c
          } else this.each(function () {
            var c = Y.get(this, r);
            Y.set(this, r, b);
            -1 !== e.indexOf("-") && void 0 !== c && Y.set(this, e, b)
          })
        }, null, b, 1 < arguments.length,
        null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        Y.remove(this, e)
      })
    }
  });
  g.extend({
    queue: function (e, b, c) {
      var d;
      return e ? (b = (b || "fx") + "queue", d = H.get(e, b), c && (!d || g.isArray(c) ? d = H.access(e, b, g.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (e, b) {
      b = b || "fx";
      var c = g.queue(e, b), d = c.length, m = c.shift(), l = g._queueHooks(e, b), q = function () {
        g.dequeue(e, b)
      };
      "inprogress" === m && (m = c.shift(), d--);
      m && ("fx" === b && c.unshift("inprogress"), delete l.stop, m.call(e, q, l));
      !d && l && l.empty.fire()
    }, _queueHooks: function (e,
                              b) {
      var c = b + "queueHooks";
      return H.get(e, c) || H.access(e, c, {
          empty: g.Callbacks("once memory").add(function () {
            H.remove(e, [b + "queue", c])
          })
        })
    }
  });
  g.fn.extend({
    queue: function (e, b) {
      var c = 2;
      return "string" != typeof e && (b = e, e = "fx", c--), arguments.length < c ? g.queue(this[0], e) : void 0 === b ? this : this.each(function () {
        var c = g.queue(this, e, b);
        g._queueHooks(this, e);
        "fx" === e && "inprogress" !== c[0] && g.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        g.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e ||
        "fx", [])
    }, promise: function (e, b) {
      var c, d = 1, m = g.Deferred(), l = this, q = this.length, f = function () {
        --d || m.resolveWith(l, [l])
      };
      "string" != typeof e && (b = e, e = void 0);
      for (e = e || "fx"; q--;)(c = H.get(l[q], e + "queueHooks")) && c.empty && (d++, c.empty.add(f));
      return f(), m.promise(b)
    }
  });
  var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ka = ["Top", "Right", "Bottom", "Left"], ra = function (e, b) {
    return e = b || e, "none" === g.css(e, "display") || !g.contains(e.ownerDocument, e)
  }, Ua = /^(?:checkbox|radio)$/i;
  !function () {
    var e = K.createDocumentFragment().appendChild(K.createElement("div"));
    e.innerHTML = "<input type='radio' checked='checked' name='t'/>";
    S.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
    e.innerHTML = "<textarea>x</textarea>";
    S.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  S.focusinBubbles = "onfocusin"in c;
  var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Va = /^(?:focusinfocus|focusoutblur)$/, Wa = /^([^.]*)(?:\.(.+)|)$/;
  g.event = {
    global: {},
    add: function (e, b, c, d, m) {
      var l, q, f, s, w, y, n, v, k, x;
      if (w = H.get(e))for (c.handler && (l = c, c = l.handler, m = l.selector), c.guid ||
      (c.guid = g.guid++), (s = w.events) || (s = w.events = {}), (q = w.handle) || (q = w.handle = function (b) {
        return "undefined" !== typeof g && g.event.triggered !== b.type ? g.event.dispatch.apply(e, arguments) : void 0
      }), b = (b || "").match(Z) || [""], w = b.length; w--;)f = Wa.exec(b[w]) || [], k = x = f[1], f = (f[2] || "").split(".").sort(), k && (n = g.event.special[k] || {}, k = (m ? n.delegateType : n.bindType) || k, n = g.event.special[k] || {}, y = g.extend({
          type: k,
          origType: x,
          data: d,
          handler: c,
          guid: c.guid,
          selector: m,
          needsContext: m && g.expr.match.needsContext.test(m),
          namespace: f.join(".")
        },
        l), (v = s[k]) || (v = s[k] = [], v.delegateCount = 0, n.setup && !1 !== n.setup.call(e, d, f, q) || e.addEventListener && e.addEventListener(k, q, !1)), n.add && (n.add.call(e, y), y.handler.guid || (y.handler.guid = c.guid)), m ? v.splice(v.delegateCount++, 0, y) : v.push(y), g.event.global[k] = !0)
    },
    remove: function (e, b, c, d, m) {
      var l, q, f, s, w, y, n, v, k, x, F, E = H.hasData(e) && H.get(e);
      if (E && (s = E.events)) {
        b = (b || "").match(Z) || [""];
        for (w = b.length; w--;)if (f = Wa.exec(b[w]) || [], k = F = f[1], x = (f[2] || "").split(".").sort(), k) {
          n = g.event.special[k] || {};
          k = (d ? n.delegateType :
              n.bindType) || k;
          v = s[k] || [];
          f = f[2] && new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (q = l = v.length; l--;)y = v[l], !m && F !== y.origType || c && c.guid !== y.guid || f && !f.test(y.namespace) || d && d !== y.selector && ("**" !== d || !y.selector) || (v.splice(l, 1), y.selector && v.delegateCount--, n.remove && n.remove.call(e, y));
          q && !v.length && (n.teardown && !1 !== n.teardown.call(e, x, E.handle) || g.removeEvent(e, k, E.handle), delete s[k])
        } else for (k in s)g.event.remove(e, k + b[w], c, d, !0);
        g.isEmptyObject(s) && (delete E.handle, H.remove(e,
          "events"))
      }
    },
    trigger: function (e, b, d, m) {
      var l, q, f, s, w, y, n, k = [d || K], v = Ba.call(e, "type") ? e.type : e;
      l = Ba.call(e, "namespace") ? e.namespace.split(".") : [];
      if (q = f = d = d || K, 3 !== d.nodeType && 8 !== d.nodeType && !Va.test(v + g.event.triggered) && (0 <= v.indexOf(".") && (l = v.split("."), v = l.shift(), l.sort()), w = 0 > v.indexOf(":") && "on" + v, e = e[g.expando] ? e : new g.Event(v, "object" == typeof e && e), e.isTrigger = m ? 2 : 3, e.namespace = l.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = d), b = null == b ? [e] : g.makeArray(b, [e]), n = g.event.special[v] || {}, m || !n.trigger || !1 !== n.trigger.apply(d, b))) {
        if (!m && !n.noBubble && !g.isWindow(d)) {
          s = n.delegateType || v;
          for (Va.test(s + v) || (q = q.parentNode); q; q = q.parentNode)k.push(q), f = q;
          f === (d.ownerDocument || K) && k.push(f.defaultView || f.parentWindow || c)
        }
        for (l = 0; (q = k[l++]) && !e.isPropagationStopped();)e.type = 1 < l ? s : n.bindType || v, (y = (H.get(q, "events") || {})[e.type] && H.get(q, "handle")) && y.apply(q, b), (y = w && q[w]) && y.apply && g.acceptData(q) &&
        (e.result = y.apply(q, b), !1 === e.result && e.preventDefault());
        return e.type = v, m || e.isDefaultPrevented() || n._default && !1 !== n._default.apply(k.pop(), b) || !g.acceptData(d) || w && g.isFunction(d[v]) && !g.isWindow(d) && (f = d[w], f && (d[w] = null), g.event.triggered = v, d[v](), g.event.triggered = void 0, f && (d[w] = f)), e.result
      }
    },
    dispatch: function (e) {
      e = g.event.fix(e);
      var b, c, d, m, l, q = [], f = O.call(arguments);
      b = (H.get(this, "events") || {})[e.type] || [];
      var s = g.event.special[e.type] || {};
      if (f[0] = e, e.delegateTarget = this, !s.preDispatch ||
        !1 !== s.preDispatch.call(this, e)) {
        q = g.event.handlers.call(this, e, b);
        for (b = 0; (m = q[b++]) && !e.isPropagationStopped();)for (e.currentTarget = m.elem, c = 0; (l = m.handlers[c++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(l.namespace) || (e.handleObj = l, e.data = l.data, d = ((g.event.special[l.origType] || {}).handle || l.handler).apply(m.elem, f), void 0 === d || !1 !== (e.result = d) || (e.preventDefault(), e.stopPropagation()));
        return s.postDispatch && s.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e,
                        b) {
      var c, d, m, l, q = [], f = b.delegateCount, s = e.target;
      if (f && s.nodeType && (!e.button || "click" !== e.type))for (; s !== this; s = s.parentNode || this)if (!0 !== s.disabled || "click" !== e.type) {
        d = [];
        for (c = 0; f > c; c++)l = b[c], m = l.selector + " ", void 0 === d[m] && (d[m] = l.needsContext ? 0 <= g(m, this).index(s) : g.find(m, this, null, [s]).length), d[m] && d.push(l);
        d.length && q.push({elem: s, handlers: d})
      }
      return f < b.length && q.push({elem: this, handlers: b.slice(f)}), q
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: ["char", "charCode", "key", "keyCode"], filter: function (e, b) {
        return null == e.which && (e.which = null != b.charCode ? b.charCode : b.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, b) {
        var c, d, g, m = b.button;
        return null == e.pageX && null != b.clientX && (c = e.target.ownerDocument || K, d = c.documentElement, g = c.body, e.pageX = b.clientX + (d && d.scrollLeft || g && g.scrollLeft || 0) - (d && d.clientLeft || g && g.clientLeft ||
          0), e.pageY = b.clientY + (d && d.scrollTop || g && g.scrollTop || 0) - (d && d.clientTop || g && g.clientTop || 0)), e.which || void 0 === m || (e.which = 1 & m ? 1 : 2 & m ? 3 : 4 & m ? 2 : 0), e
      }
    },
    fix: function (e) {
      if (e[g.expando])return e;
      var b, c, d;
      b = e.type;
      var m = e, l = this.fixHooks[b];
      l || (this.fixHooks[b] = l = zb.test(b) ? this.mouseHooks : yb.test(b) ? this.keyHooks : {});
      d = l.props ? this.props.concat(l.props) : this.props;
      e = new g.Event(m);
      for (b = d.length; b--;)c = d[b], e[c] = m[c];
      return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode),
        l.filter ? l.filter(e, m) : e
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== b() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === b() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && g.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (e) {
          return g.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue =
            e.result)
        }
      }
    },
    simulate: function (e, b, c, d) {
      e = g.extend(new g.Event, c, {type: e, isSimulated: !0, originalEvent: {}});
      d ? g.event.trigger(e, null, b) : g.event.dispatch.call(b, e);
      e.isDefaultPrevented() && c.preventDefault()
    }
  };
  g.removeEvent = function (e, b, c) {
    e.removeEventListener && e.removeEventListener(b, c, !1)
  };
  g.Event = function (e, b) {
    return this instanceof g.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ?
      G : D) : this.type = e, b && g.extend(this, b), this.timeStamp = e && e.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(e, b)
  };
  g.Event.prototype = {
    isDefaultPrevented: D, isPropagationStopped: D, isImmediatePropagationStopped: D, preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = G;
      e && e.preventDefault && e.preventDefault()
    }, stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = G;
      e && e.stopPropagation && e.stopPropagation()
    }, stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped =
        G;
      this.stopPropagation()
    }
  };
  g.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, b) {
    g.event.special[e] = {
      delegateType: b, bindType: b, handle: function (e) {
        var c, d = e.relatedTarget, m = e.handleObj;
        return (!d || d !== this && !g.contains(this, d)) && (e.type = m.origType, c = m.handler.apply(this, arguments), e.type = b), c
      }
    }
  });
  S.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (e, b) {
    var c = function (e) {
      g.event.simulate(b, e.target, g.event.fix(e), !0)
    };
    g.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument ||
          this, g = H.access(d, b);
        g || d.addEventListener(e, c, !0);
        H.access(d, b, (g || 0) + 1)
      }, teardown: function () {
        var d = this.ownerDocument || this, g = H.access(d, b) - 1;
        g ? H.access(d, b, g) : (d.removeEventListener(e, c, !0), H.remove(d, b))
      }
    }
  });
  g.fn.extend({
    on: function (e, b, c, d, m) {
      var l, q;
      if ("object" == typeof e) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (q in e)this.on(q, b, c, e[q], m);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d)d = D; else if (!d)return this;
      return 1 ===
      m && (l = d, d = function (e) {
        return g().off(e), l.apply(this, arguments)
      }, d.guid = l.guid || (l.guid = g.guid++)), this.each(function () {
        g.event.add(this, e, d, c, b)
      })
    }, one: function (e, b, c, d) {
      return this.on(e, b, c, d, 1)
    }, off: function (e, b, c) {
      var d, m;
      if (e && e.preventDefault && e.handleObj)return d = e.handleObj, g(e.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof e) {
        for (m in e)this.off(m, b, e[m]);
        return this
      }
      return (!1 === b || "function" == typeof b) && (c = b, b = void 0),
      !1 === c && (c = D), this.each(function () {
        g.event.remove(this, e, c, b)
      })
    }, trigger: function (e, b) {
      return this.each(function () {
        g.event.trigger(e, b, this)
      })
    }, triggerHandler: function (e, b) {
      var c = this[0];
      return c ? g.event.trigger(e, b, c, !0) : void 0
    }
  });
  var Xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ya = /<([\w:]+)/, Ab = /<|&#?\w+;/, Bb = /<(?:script|style|link)/i, Cb = /checked\s*(?:[^=]|=\s*.checked.)/i, Za = /^$|\/(?:java|ecma)script/i, nb = /^true\/(.*)/, Db = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    da = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  da.optgroup = da.option;
  da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
  da.th = da.td;
  g.extend({
    clone: function (e, b, c) {
      var d, m, f, s, w = e.cloneNode(!0), y = g.contains(e.ownerDocument, e);
      if (!(S.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))for (s =
                                                                                               q(w), f = q(e), d = 0, m = f.length; m > d; d++) {
        var n = f[d], v = s[d], k = v.nodeName.toLowerCase();
        "input" === k && Ua.test(n.type) ? v.checked = n.checked : ("input" === k || "textarea" === k) && (v.defaultValue = n.defaultValue)
      }
      if (b)if (c)for (f = f || q(e), s = s || q(w), d = 0, m = f.length; m > d; d++)l(f[d], s[d]); else l(e, w);
      return s = q(w, "script"), 0 < s.length && ma(s, !y && q(e, "script")), w
    }, buildFragment: function (e, b, c, d) {
      for (var m, l, f, s, w = b.createDocumentFragment(), y = [], n = 0, v = e.length; v > n; n++)if (m = e[n], m || 0 === m)if ("object" === g.type(m))g.merge(y, m.nodeType ?
        [m] : m); else if (Ab.test(m)) {
        l = l || w.appendChild(b.createElement("div"));
        f = (Ya.exec(m) || ["", ""])[1].toLowerCase();
        f = da[f] || da._default;
        l.innerHTML = f[1] + m.replace(Xa, "<$1></$2>") + f[2];
        for (f = f[0]; f--;)l = l.lastChild;
        g.merge(y, l.childNodes);
        l = w.firstChild;
        l.textContent = ""
      } else y.push(b.createTextNode(m));
      w.textContent = "";
      for (n = 0; m = y[n++];)if ((!d || -1 === g.inArray(m, d)) && (s = g.contains(m.ownerDocument, m), l = q(w.appendChild(m), "script"), s && ma(l), c))for (f = 0; m = l[f++];)Za.test(m.type || "") && c.push(m);
      return w
    }, cleanData: function (e) {
      for (var b,
             c, d, m, l, f, q = g.event.special, s = 0; void 0 !== (c = e[s]); s++) {
        if (g.acceptData(c) && (l = c[H.expando], l && (b = H.cache[l]))) {
          if (d = Object.keys(b.events || {}), d.length)for (f = 0; void 0 !== (m = d[f]); f++)q[m] ? g.event.remove(c, m) : g.removeEvent(c, m, b.handle);
          H.cache[l] && delete H.cache[l]
        }
        delete Y.cache[c[Y.expando]]
      }
    }
  });
  g.fn.extend({
    text: function (e) {
      return ia(this, function (e) {
          return void 0 === e ? g.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null,
        e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || W(this, e).appendChild(e)
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = W(this, e);
          b.insertBefore(e, b.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments,
        function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, b) {
      for (var c, d = e ? g.filter(e, this) : this, m = 0; null != (c = d[m]); m++)b || 1 !== c.nodeType || g.cleanData(q(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) && ma(q(c, "script")), c.parentNode.removeChild(c));
      return this
    }, empty: function () {
      for (var e, b = 0; null != (e = this[b]); b++)1 === e.nodeType && (g.cleanData(q(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, b) {
      return e = null == e ? !1 : e, b = null == b ? e : b, this.map(function () {
        return g.clone(this,
          e, b)
      })
    }, html: function (e) {
      return ia(this, function (e) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === e && 1 === b.nodeType)return b.innerHTML;
        if ("string" == typeof e && !Bb.test(e) && !da[(Ya.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Xa, "<$1></$2>");
          try {
            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (g.cleanData(q(b, !1)), b.innerHTML = e);
            b = 0
          } catch (m) {
          }
        }
        b && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = arguments[0];
      return this.domManip(arguments, function (b) {
        e = this.parentNode;
        g.cleanData(q(this));
        e && e.replaceChild(b, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, b) {
      e = ca.apply([], e);
      var c, d, m, l, f = 0, s = this.length, w = this, y = s - 1, n = e[0], v = g.isFunction(n);
      if (v || 1 < s && "string" == typeof n && !S.checkClone && Cb.test(n))return this.each(function (c) {
        var d = w.eq(c);
        v && (e[0] = n.call(this, c, d.html()));
        d.domManip(e, b)
      });
      if (s && (c = g.buildFragment(e, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c =
          d), d)) {
        d = g.map(q(c, "script"), L);
        for (m = d.length; s > f; f++)l = c, f !== y && (l = g.clone(l, !0, !0), m && g.merge(d, q(l, "script"))), b.call(this[f], l, f);
        if (m)for (c = d[d.length - 1].ownerDocument, g.map(d, T), f = 0; m > f; f++)l = d[f], Za.test(l.type || "") && !H.access(l, "globalEval") && g.contains(c, l) && (l.src ? g._evalUrl && g._evalUrl(l.src) : g.globalEval(l.textContent.replace(Db, "")))
      }
      return this
    }
  });
  g.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, b) {
    g.fn[e] =
      function (e) {
        for (var c = [], d = g(e), m = d.length - 1, l = 0; m >= l; l++)e = l === m ? this : this.clone(!0), g(d[l])[b](e), fa.apply(c, e.get());
        return this.pushStack(c)
      }
  });
  var wa, Pa = {}, Qa = /^margin/, Ia = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), xa = function (e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null)
  };
  !function () {
    function e() {
      f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
      m.appendChild(l);
      var e = c.getComputedStyle(f, null);
      b = "1%" !== e.top;
      d = "4px" === e.width;
      m.removeChild(l)
    }

    var b, d, m = K.documentElement, l = K.createElement("div"), f = K.createElement("div");
    f.style.backgroundClip = "content-box";
    f.cloneNode(!0).style.backgroundClip = "";
    S.clearCloneStyle = "content-box" === f.style.backgroundClip;
    l.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
    l.appendChild(f);
    c.getComputedStyle && g.extend(S, {
      pixelPosition: function () {
        return e(), b
      }, boxSizingReliable: function () {
        return null ==
        d && e(), d
      }, reliableMarginRight: function () {
        var e, b = f.appendChild(K.createElement("div"));
        return b.style.cssText = f.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", b.style.marginRight = b.style.width = "0", f.style.width = "1px", m.appendChild(l), e = !parseFloat(c.getComputedStyle(b, null).marginRight), m.removeChild(l), f.innerHTML = "", e
      }
    })
  }();
  g.swap = function (e, b, c, d) {
    var g, m = {};
    for (g in b)m[g] = e.style[g], e.style[g] = b[g];
    c =
      c.apply(e, d || []);
    for (g in b)e.style[g] = m[g];
    return c
  };
  var Eb = /^(none|table(?!-c[ea]).+)/, ob = new RegExp("^(" + Da + ")(.*)$", "i"), Fb = new RegExp("^([+-])=(" + Da + ")", "i"), Gb = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, $a = {letterSpacing: 0, fontWeight: 400}, Ra = ["Webkit", "O", "Moz", "ms"];
  g.extend({
    cssHooks: {
      opacity: {
        get: function (e, b) {
          if (b) {
            var c = P(e, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    }, cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    }, cssProps: {"float": "cssFloat"}, style: function (e, b, c, d) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var m, l, f, q = g.camelCase(b), s = e.style;
        return b = g.cssProps[q] || (g.cssProps[q] = x(s, q)), f = g.cssHooks[b] || g.cssHooks[q], void 0 === c ? f && "get"in f && void 0 !== (m = f.get(e, !1, d)) ? m : s[b] : (l = typeof c, "string" === l && (m = Fb.exec(c)) && (c = (m[1] + 1) * m[2] + parseFloat(g.css(e, b)), l = "number"), null != c && c === c && ("number" !== l || g.cssNumber[q] || (c += "px"), S.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (s[b] = "inherit"),
        f && "set"in f && void 0 === (c = f.set(e, c, d)) || (s[b] = "", s[b] = c)), void 0)
      }
    }, css: function (e, b, c, d) {
      var m, l, f, q = g.camelCase(b);
      return b = g.cssProps[q] || (g.cssProps[q] = x(e.style, q)), f = g.cssHooks[b] || g.cssHooks[q], f && "get"in f && (m = f.get(e, !0, c)), void 0 === m && (m = P(e, b, d)), "normal" === m && b in $a && (m = $a[b]), "" === c || c ? (l = parseFloat(m), !0 === c || g.isNumeric(l) ? l || 0 : m) : m
    }
  });
  g.each(["height", "width"], function (e, b) {
    g.cssHooks[b] = {
      get: function (e, c, d) {
        return c ? 0 === e.offsetWidth && Eb.test(g.css(e, "display")) ? g.swap(e, Gb, function () {
          return w(e,
            b, d)
        }) : w(e, b, d) : void 0
      }, set: function (e, c, d) {
        var l = d && xa(e);
        return F(e, c, d ? m(e, b, d, "border-box" === g.css(e, "boxSizing", !1, l), l) : 0)
      }
    }
  });
  g.cssHooks.marginRight = E(S.reliableMarginRight, function (e, b) {
    return b ? g.swap(e, {display: "inline-block"}, P, [e, "marginRight"]) : void 0
  });
  g.each({margin: "", padding: "", border: "Width"}, function (e, b) {
    g.cssHooks[e + b] = {
      expand: function (c) {
        var d = 0, g = {};
        for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)g[e + ka[d] + b] = c[d] || c[d - 2] || c[0];
        return g
      }
    };
    Qa.test(e) || (g.cssHooks[e + b].set =
      F)
  });
  g.fn.extend({
    css: function (e, b) {
      return ia(this, function (e, b, c) {
        var d, m = {}, l = 0;
        if (g.isArray(b)) {
          c = xa(e);
          for (d = b.length; d > l; l++)m[b[l]] = g.css(e, b[l], !1, c);
          return m
        }
        return void 0 !== c ? g.style(e, b, c) : g.css(e, b)
      }, e, b, 1 < arguments.length)
    }, show: function () {
      return y(this, !0)
    }, hide: function () {
      return y(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ra(this) ? g(this).show() : g(this).hide()
      })
    }
  });
  g.Tween = Q;
  Q.prototype = {
    constructor: Q, init: function (e, b, c, d, m, l) {
      this.elem =
        e;
      this.prop = c;
      this.easing = m || "swing";
      this.options = b;
      this.start = this.now = this.cur();
      this.end = d;
      this.unit = l || (g.cssNumber[c] ? "" : "px")
    }, cur: function () {
      var e = Q.propHooks[this.prop];
      return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
    }, run: function (e) {
      var b, c = Q.propHooks[this.prop];
      return this.pos = b = this.options.duration ? g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now,
        this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
    }
  };
  Q.prototype.init.prototype = Q.prototype;
  Q.propHooks = {
    _default: {
      get: function (e) {
        var b;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (b = g.css(e.elem, e.prop, ""), b && "auto" !== b ? b : 0) : e.elem[e.prop]
      }, set: function (e) {
        g.fx.step[e.prop] ? g.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[g.cssProps[e.prop]] || g.cssHooks[e.prop]) ? g.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  };
  Q.propHooks.scrollTop = Q.propHooks.scrollLeft =
  {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  };
  g.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  };
  g.fx = Q.prototype.init;
  g.fx.step = {};
  var ha, Ga, Hb = /^(?:toggle|show|hide)$/, ab = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"), Ib = /queueHooks$/, ya = [function (e, b, c) {
    var d, m, l, f, q, s, w = this, n = {}, y = e.style, k = e.nodeType && ra(e), x = H.get(e, "fxshow");
    c.queue || (f = g._queueHooks(e, "fx"), null == f.unqueued && (f.unqueued = 0, q = f.empty.fire, f.empty.fire =
      function () {
        f.unqueued || q()
      }), f.unqueued++, w.always(function () {
      w.always(function () {
        f.unqueued--;
        g.queue(e, "fx").length || f.empty.fire()
      })
    }));
    1 === e.nodeType && ("height"in b || "width"in b) && (c.overflow = [y.overflow, y.overflowX, y.overflowY], s = g.css(e, "display"), "none" === s && (s = v(e.nodeName)), "inline" === s && "none" === g.css(e, "float") && (y.display = "inline-block"));
    c.overflow && (y.overflow = "hidden", w.always(function () {
      y.overflow = c.overflow[0];
      y.overflowX = c.overflow[1];
      y.overflowY = c.overflow[2]
    }));
    for (d in b)if (m =
        b[d], Hb.exec(m)) {
      if (delete b[d], l = l || "toggle" === m, m === (k ? "hide" : "show")) {
        if ("show" !== m || !x || void 0 === x[d])continue;
        k = !0
      }
      n[d] = x && x[d] || g.style(e, d)
    }
    if (!g.isEmptyObject(n))for (d in x ? "hidden"in x && (k = x.hidden) : x = H.access(e, "fxshow", {}), l && (x.hidden = !k), k ? g(e).show() : w.done(function () {
      g(e).hide()
    }), w.done(function () {
      var b;
      H.remove(e, "fxshow");
      for (b in n)g.style(e, b, n[b])
    }), n)b = N(k ? x[d] : 0, d, w), d in x || (x[d] = b.start, k && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
  }], sa = {
    "*": [function (e, b) {
      var c =
        this.createTween(e, b), d = c.cur(), m = ab.exec(b), l = m && m[3] || (g.cssNumber[e] ? "" : "px"), f = (g.cssNumber[e] || "px" !== l && +d) && ab.exec(g.css(c.elem, e)), q = 1, s = 20;
      if (f && f[3] !== l) {
        l = l || f[3];
        m = m || [];
        f = +d || 1;
        do q = q || ".5", f /= q, g.style(c.elem, e, f + l); while (q !== (q = c.cur() / d) && 1 !== q && --s)
      }
      return m && (f = c.start = +f || +d || 0, c.unit = l, c.end = m[1] ? f + (m[1] + 1) * m[2] : +m[2]), c
    }]
  };
  g.Animation = g.extend(V, {
    tweener: function (e, b) {
      g.isFunction(e) ? (b = e, e = ["*"]) : e = e.split(" ");
      for (var c, d = 0, m = e.length; m > d; d++)c = e[d], sa[c] = sa[c] || [], sa[c].unshift(b)
    },
    prefilter: function (e, b) {
      b ? ya.unshift(e) : ya.push(e)
    }
  });
  g.speed = function (e, b, c) {
    var d = e && "object" == typeof e ? g.extend({}, e) : {
      complete: c || !c && b || g.isFunction(e) && e,
      duration: e,
      easing: c && b || b && !g.isFunction(b) && b
    };
    return d.duration = g.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default, (null == d.queue || !0 === d.queue) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      g.isFunction(d.old) && d.old.call(this);
      d.queue && g.dequeue(this, d.queue)
    },
      d
  };
  g.fn.extend({
    fadeTo: function (e, b, c, d) {
      return this.filter(ra).css("opacity", 0).show().end().animate({opacity: b}, e, c, d)
    }, animate: function (e, b, c, d) {
      var m = g.isEmptyObject(e), l = g.speed(b, c, d);
      b = function () {
        var b = V(this, g.extend({}, e), l);
        (m || H.get(this, "finish")) && b.stop(!0)
      };
      return b.finish = b, m || !1 === l.queue ? this.each(b) : this.queue(l.queue, b)
    }, stop: function (e, b, c) {
      var d = function (e) {
        var b = e.stop;
        delete e.stop;
        b(c)
      };
      return "string" != typeof e && (c = b, b = e, e = void 0), b && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var b =
          !0, m = null != e && e + "queueHooks", l = g.timers, f = H.get(this);
        if (m)f[m] && f[m].stop && d(f[m]); else for (m in f)f[m] && f[m].stop && Ib.test(m) && d(f[m]);
        for (m = l.length; m--;)l[m].elem !== this || null != e && l[m].queue !== e || (l[m].anim.stop(c), b = !1, l.splice(m, 1));
        !b && c || g.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var b, c = H.get(this), d = c[e + "queue"];
        b = c[e + "queueHooks"];
        var m = g.timers, l = d ? d.length : 0;
        c.finish = !0;
        g.queue(this, e, []);
        b && b.stop && b.stop.call(this, !0);
        for (b = m.length; b--;)m[b].elem ===
        this && m[b].queue === e && (m[b].anim.stop(!0), m.splice(b, 1));
        for (b = 0; l > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  });
  g.each(["toggle", "show", "hide"], function (e, b) {
    var c = g.fn[b];
    g.fn[b] = function (e, d, m) {
      return null == e || "boolean" == typeof e ? c.apply(this, arguments) : this.animate(C(b, !0), e, d, m)
    }
  });
  g.each({
    slideDown: C("show"),
    slideUp: C("hide"),
    slideToggle: C("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, b) {
    g.fn[e] = function (e, c, d) {
      return this.animate(b,
        e, c, d)
    }
  });
  g.timers = [];
  g.fx.tick = function () {
    var e, b = 0, c = g.timers;
    for (ha = g.now(); b < c.length; b++)e = c[b], e() || c[b] !== e || c.splice(b--, 1);
    c.length || g.fx.stop();
    ha = void 0
  };
  g.fx.timer = function (e) {
    g.timers.push(e);
    e() ? g.fx.start() : g.timers.pop()
  };
  g.fx.interval = 13;
  g.fx.start = function () {
    Ga || (Ga = setInterval(g.fx.tick, g.fx.interval))
  };
  g.fx.stop = function () {
    clearInterval(Ga);
    Ga = null
  };
  g.fx.speeds = {slow: 600, fast: 200, _default: 400};
  g.fn.delay = function (e, b) {
    return e = g.fx ? g.fx.speeds[e] || e : e, b = b || "fx", this.queue(b, function (b,
                                                                                      c) {
      var d = setTimeout(b, e);
      c.stop = function () {
        clearTimeout(d)
      }
    })
  };
  (function () {
    var e = K.createElement("input"), b = K.createElement("select"), c = b.appendChild(K.createElement("option"));
    e.type = "checkbox";
    S.checkOn = "" !== e.value;
    S.optSelected = c.selected;
    b.disabled = !0;
    S.optDisabled = !c.disabled;
    e = K.createElement("input");
    e.value = "t";
    e.type = "radio";
    S.radioValue = "t" === e.value
  })();
  var bb, va = g.expr.attrHandle;
  g.fn.extend({
    attr: function (e, b) {
      return ia(this, g.attr, e, b, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        g.removeAttr(this,
          e)
      })
    }
  });
  g.extend({
    attr: function (e, b, c) {
      var d, m, l = e.nodeType;
      if (e && 3 !== l && 8 !== l && 2 !== l)return "undefined" === typeof e.getAttribute ? g.prop(e, b, c) : (1 === l && g.isXMLDoc(e) || (b = b.toLowerCase(), d = g.attrHooks[b] || (g.expr.match.bool.test(b) ? bb : void 0)), void 0 === c ? d && "get"in d && null !== (m = d.get(e, b)) ? m : (m = g.find.attr(e, b), null == m ? void 0 : m) : null !== c ? d && "set"in d && void 0 !== (m = d.set(e, c, b)) ? m : (e.setAttribute(b, c + ""), c) : void g.removeAttr(e, b))
    }, removeAttr: function (e, b) {
      var c, d, m = 0, l = b && b.match(Z);
      if (l && 1 === e.nodeType)for (; c =
                                         l[m++];)d = g.propFix[c] || c, g.expr.match.bool.test(c) && (e[d] = !1), e.removeAttribute(c)
    }, attrHooks: {
      type: {
        set: function (e, b) {
          if (!S.radioValue && "radio" === b && g.nodeName(e, "input")) {
            var c = e.value;
            return e.setAttribute("type", b), c && (e.value = c), b
          }
        }
      }
    }
  });
  bb = {
    set: function (e, b, c) {
      return !1 === b ? g.removeAttr(e, c) : e.setAttribute(c, c), c
    }
  };
  g.each(g.expr.match.bool.source.match(/\w+/g), function (e, b) {
    var c = va[b] || g.find.attr;
    va[b] = function (e, b, d) {
      var m, g;
      return d || (g = va[b], va[b] = m, m = null != c(e, b, d) ? b.toLowerCase() : null,
        va[b] = g), m
    }
  });
  var Jb = /^(?:input|select|textarea|button)$/i;
  g.fn.extend({
    prop: function (b, c) {
      return ia(this, g.prop, b, c, 1 < arguments.length)
    }, removeProp: function (b) {
      return this.each(function () {
        delete this[g.propFix[b] || b]
      })
    }
  });
  g.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (b, c, d) {
      var m, l, f, q = b.nodeType;
      if (b && 3 !== q && 8 !== q && 2 !== q)return f = 1 !== q || !g.isXMLDoc(b), f && (c = g.propFix[c] || c, l = g.propHooks[c]), void 0 !== d ? l && "set"in l && void 0 !== (m = l.set(b, d, c)) ? m : b[c] = d : l && "get"in l && null !==
      (m = l.get(b, c)) ? m : b[c]
    }, propHooks: {
      tabIndex: {
        get: function (b) {
          return b.hasAttribute("tabindex") || Jb.test(b.nodeName) || b.href ? b.tabIndex : -1
        }
      }
    }
  });
  S.optSelected || (g.propHooks.selected = {
    get: function (b) {
      b = b.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  });
  g.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
    g.propFix[this.toLowerCase()] = this
  });
  var Ka = /[\t\r\n\f]/g;
  g.fn.extend({
    addClass: function (b) {
      var c,
        d, m, l, f;
      c = "string" == typeof b && b;
      var q = 0, s = this.length;
      if (g.isFunction(b))return this.each(function (c) {
        g(this).addClass(b.call(this, c, this.className))
      });
      if (c)for (c = (b || "").match(Z) || []; s > q; q++)if (d = this[q], m = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ka, " ") : " ")) {
        for (f = 0; l = c[f++];)0 > m.indexOf(" " + l + " ") && (m += l + " ");
        m = g.trim(m);
        d.className !== m && (d.className = m)
      }
      return this
    }, removeClass: function (b) {
      var c, d, m, l, f;
      c = 0 === arguments.length || "string" == typeof b && b;
      var q = 0, s = this.length;
      if (g.isFunction(b))return this.each(function (c) {
        g(this).removeClass(b.call(this,
          c, this.className))
      });
      if (c)for (c = (b || "").match(Z) || []; s > q; q++)if (d = this[q], m = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ka, " ") : "")) {
        for (f = 0; l = c[f++];)for (; 0 <= m.indexOf(" " + l + " ");)m = m.replace(" " + l + " ", " ");
        m = b ? g.trim(m) : "";
        d.className !== m && (d.className = m)
      }
      return this
    }, toggleClass: function (b, c) {
      var d = typeof b;
      return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : this.each(g.isFunction(b) ? function (d) {
        g(this).toggleClass(b.call(this, d, this.className, c), c)
      } : function () {
        if ("string" ===
          d)for (var c, m = 0, l = g(this), f = b.match(Z) || []; c = f[m++];)l.hasClass(c) ? l.removeClass(c) : l.addClass(c); else("undefined" === d || "boolean" === d) && (this.className && H.set(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : H.get(this, "__className__") || "")
      })
    }, hasClass: function (b) {
      b = " " + b + " ";
      for (var c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Ka, " ").indexOf(b))return !0;
      return !1
    }
  });
  var Kb = /\r/g;
  g.fn.extend({
    val: function (b) {
      var c, d, m, l = this[0];
      if (arguments.length)return m = g.isFunction(b), this.each(function (d) {
        var l;
        1 === this.nodeType && (l = m ? b.call(this, d, g(this).val()) : b, null == l ? l = "" : "number" == typeof l ? l += "" : g.isArray(l) && (l = g.map(l, function (b) {
          return null == b ? "" : b + ""
        })), c = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], c && "set"in c && void 0 !== c.set(this, l, "value") || (this.value = l))
      });
      if (l)return c = g.valHooks[l.type] || g.valHooks[l.nodeName.toLowerCase()], c && "get"in c && void 0 !== (d = c.get(l, "value")) ? d : (d = l.value, "string" == typeof d ?
        d.replace(Kb, "") : null == d ? "" : d)
    }
  });
  g.extend({
    valHooks: {
      select: {
        get: function (b) {
          for (var c, d = b.options, m = b.selectedIndex, l = "select-one" === b.type || 0 > m, f = l ? null : [], q = l ? m + 1 : d.length, s = 0 > m ? q : l ? m : 0; q > s; s++)if (c = d[s], !(!c.selected && s !== m || (S.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && g.nodeName(c.parentNode, "optgroup"))) {
            if (b = g(c).val(), l)return b;
            f.push(b)
          }
          return f
        }, set: function (b, c) {
          for (var d, m, l = b.options, f = g.makeArray(c), q = l.length; q--;)m = l[q], (m.selected = 0 <= g.inArray(g(m).val(),
              f)) && (d = !0);
          return d || (b.selectedIndex = -1), f
        }
      }
    }
  });
  g.each(["radio", "checkbox"], function () {
    g.valHooks[this] = {
      set: function (b, c) {
        return g.isArray(c) ? b.checked = 0 <= g.inArray(g(b).val(), c) : void 0
      }
    };
    S.checkOn || (g.valHooks[this].get = function (b) {
      return null === b.getAttribute("value") ? "on" : b.value
    })
  });
  g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function (b, c) {
      g.fn[c] = function (b, e) {
        return 0 < arguments.length ? this.on(c, null, b, e) : this.trigger(c)
      }
    });
  g.fn.extend({
    hover: function (b, c) {
      return this.mouseenter(b).mouseleave(c || b)
    }, bind: function (b, c, d) {
      return this.on(b, null, c, d)
    }, unbind: function (b, c) {
      return this.off(b, null, c)
    }, delegate: function (b, c, d, m) {
      return this.on(c, b, d, m)
    }, undelegate: function (b, c, d) {
      return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
    }
  });
  var La = g.now(), Ma = /\?/;
  g.parseJSON = function (b) {
    return JSON.parse(b + "")
  };
  g.parseXML =
    function (b) {
      var c, d;
      if (!b || "string" != typeof b)return null;
      try {
        d = new DOMParser, c = d.parseFromString(b, "text/xml")
      } catch (m) {
        c = void 0
      }
      return (!c || c.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + b), c
    };
  var ja, ba, Lb = /#.*$/, cb = /([?&])_=[^&]*/, Mb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//, db = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, eb = {}, Ja = {}, fb = "*/".concat("*");
  try {
    ba = location.href
  } catch (Wb) {
    ba = K.createElement("a"), ba.href = "", ba = ba.href
  }
  ja = db.exec(ba.toLowerCase()) ||
    [];
  g.extend({
    active: 0, lastModified: {}, etag: {}, ajaxSettings: {
      url: ba,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ja[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": fb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {
        "* text": String,
        "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML
      },
      flatOptions: {url: !0, context: !0}
    }, ajaxSetup: function (b, c) {
      return c ? I(I(b, g.ajaxSettings), c) : I(g.ajaxSettings, b)
    }, ajaxPrefilter: J(eb), ajaxTransport: J(Ja), ajax: function (b, c) {
      function d(b, e, c, q) {
        var r, w, n, t, u = e;
        if (2 !== C) {
          C = 2;
          s && clearTimeout(s);
          m = void 0;
          f = q || "";
          p.readyState = 0 < b ? 4 : 0;
          q = 200 <= b && 300 > b || 304 === b;
          if (c) {
            n = v;
            for (var P = p, M, z, N, A, U = n.contents, G = n.dataTypes; "*" === G[0];)G.shift(), void 0 === M && (M = n.mimeType || P.getResponseHeader("Content-Type"));
            if (M)for (z in U)if (U[z] && U[z].test(M)) {
              G.unshift(z);
              break
            }
            if (G[0]in c)N = G[0]; else {
              for (z in c) {
                if (!G[0] || n.converters[z + " " + G[0]]) {
                  N = z;
                  break
                }
                A || (A = z)
              }
              N = N || A
            }
            n = N ? (N !== G[0] && G.unshift(N), c[N]) : void 0
          }
          var V;
          a:{
            c = v;
            M = n;
            z = p;
            N = q;
            var J, I, D;
            n = {};
            P = c.dataTypes.slice();
            if (P[1])for (J in c.converters)n[J.toLowerCase()] = c.converters[J];
            for (A = P.shift(); A;)if (c.responseFields[A] && (z[c.responseFields[A]] = M), !D && N && c.dataFilter && (M = c.dataFilter(M, c.dataType)), D = A, A = P.shift())if ("*" === A)A = D; else if ("*" !== D && D !== A) {
              if (J =
                  n[D + " " + A] || n["* " + A], !J)for (V in n)if (I = V.split(" "), I[1] === A && (J = n[D + " " + I[0]] || n["* " + I[0]])) {
                !0 === J ? J = n[V] : !0 !== n[V] && (A = I[0], P.unshift(I[1]));
                break
              }
              if (!0 !== J)if (J && c["throws"])M = J(M); else try {
                M = J(M)
              } catch (H) {
                V = {state: "parsererror", error: J ? H : "No conversion from " + D + " to " + A};
                break a
              }
            }
            V = {state: "success", data: M}
          }
          n = V;
          q ? (v.ifModified && (t = p.getResponseHeader("Last-Modified"), t && (g.lastModified[l] = t), t = p.getResponseHeader("etag"), t && (g.etag[l] = t)), 204 === b || "HEAD" === v.type ? u = "nocontent" : 304 === b ? u = "notmodified" :
            (u = n.state, r = n.data, w = n.error, q = !w)) : (w = u, (b || !u) && (u = "error", 0 > b && (b = 0)));
          p.status = b;
          p.statusText = (e || u) + "";
          q ? F.resolveWith(k, [r, u, p]) : F.rejectWith(k, [p, u, w]);
          p.statusCode(Q);
          Q = void 0;
          y && x.trigger(q ? "ajaxSuccess" : "ajaxError", [p, v, q ? r : w]);
          E.fireWith(k, [p, u]);
          y && (x.trigger("ajaxComplete", [p, v]), --g.active || g.event.trigger("ajaxStop"))
        }
      }

      "object" == typeof b && (c = b, b = void 0);
      c = c || {};
      var m, l, f, q, s, w, y, n, v = g.ajaxSetup({}, c), k = v.context || v, x = v.context && (k.nodeType || k.jquery) ? g(k) : g.event, F = g.Deferred(), E =
        g.Callbacks("once memory"), Q = v.statusCode || {}, u = {}, P = {}, C = 0, M = "canceled", p = {
        readyState: 0, getResponseHeader: function (b) {
          var e;
          if (2 === C) {
            if (!q)for (q = {}; e = Mb.exec(f);)q[e[1].toLowerCase()] = e[2];
            e = q[b.toLowerCase()]
          }
          return null == e ? null : e
        }, getAllResponseHeaders: function () {
          return 2 === C ? f : null
        }, setRequestHeader: function (b, e) {
          var c = b.toLowerCase();
          return C || (b = P[c] = P[c] || b, u[b] = e), this
        }, overrideMimeType: function (b) {
          return C || (v.mimeType = b), this
        }, statusCode: function (b) {
          var e;
          if (b)if (2 > C)for (e in b)Q[e] = [Q[e],
            b[e]]; else p.always(b[p.status]);
          return this
        }, abort: function (b) {
          b = b || M;
          return m && m.abort(b), d(0, b), this
        }
      };
      if (F.promise(p).complete = E.add, p.success = p.done, p.error = p.fail, v.url = ((b || v.url || ba) + "").replace(Lb, "").replace(Ob, ja[1] + "//"), v.type = c.method || c.type || v.method || v.type, v.dataTypes = g.trim(v.dataType || "*").toLowerCase().match(Z) || [""], null == v.crossDomain && (w = db.exec(v.url.toLowerCase()), v.crossDomain = !(!w || w[1] === ja[1] && w[2] === ja[2] && (w[3] || ("http:" === w[1] ? "80" : "443")) === (ja[3] || ("http:" === ja[1] ?
          "80" : "443")))), v.data && v.processData && "string" != typeof v.data && (v.data = g.param(v.data, v.traditional)), ta(eb, v, c, p), 2 === C)return p;
      (y = v.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
      v.type = v.type.toUpperCase();
      v.hasContent = !Nb.test(v.type);
      l = v.url;
      v.hasContent || (v.data && (l = v.url += (Ma.test(l) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (v.url = cb.test(l) ? l.replace(cb, "$1_=" + La++) : l + (Ma.test(l) ? "&" : "?") + "_=" + La++));
      v.ifModified && (g.lastModified[l] && p.setRequestHeader("If-Modified-Since", g.lastModified[l]),
      g.etag[l] && p.setRequestHeader("If-None-Match", g.etag[l]));
      (v.data && v.hasContent && !1 !== v.contentType || c.contentType) && p.setRequestHeader("Content-Type", v.contentType);
      p.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + fb + "; q=0.01" : "") : v.accepts["*"]);
      for (n in v.headers)p.setRequestHeader(n, v.headers[n]);
      if (v.beforeSend && (!1 === v.beforeSend.call(k, p, v) || 2 === C))return p.abort();
      M = "abort";
      for (n in{success: 1, error: 1, complete: 1})p[n](v[n]);
      if (m = ta(Ja, v, c, p)) {
        p.readyState = 1;
        y && x.trigger("ajaxSend", [p, v]);
        v.async && 0 < v.timeout && (s = setTimeout(function () {
          p.abort("timeout")
        }, v.timeout));
        try {
          C = 1, m.send(u, d)
        } catch (z) {
          if (!(2 > C))throw z;
          d(-1, z)
        }
      } else d(-1, "No Transport");
      return p
    }, getJSON: function (b, c, d) {
      return g.get(b, c, d, "json")
    }, getScript: function (b, c) {
      return g.get(b, void 0, c, "script")
    }
  });
  g.each(["get", "post"], function (b, c) {
    g[c] = function (b, e, d, m) {
      return g.isFunction(e) && (m = m || d, d = e, e = void 0), g.ajax({
        url: b,
        type: c,
        dataType: m,
        data: e,
        success: d
      })
    }
  });
  g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
    g.fn[c] = function (b) {
      return this.on(c, b)
    }
  });
  g._evalUrl = function (b) {
    return g.ajax({url: b, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  };
  g.fn.extend({
    wrapAll: function (b) {
      var c;
      return g.isFunction(b) ? this.each(function (c) {
        g(this).wrapAll(b.call(this, c))
      }) : (this[0] && (c = g(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
        for (var b = this; b.firstElementChild;)b =
          b.firstElementChild;
        return b
      }).append(this)), this)
    }, wrapInner: function (b) {
      return this.each(g.isFunction(b) ? function (c) {
        g(this).wrapInner(b.call(this, c))
      } : function () {
        var c = g(this), d = c.contents();
        d.length ? d.wrapAll(b) : c.append(b)
      })
    }, wrap: function (b) {
      var c = g.isFunction(b);
      return this.each(function (d) {
        g(this).wrapAll(c ? b.call(this, d) : b)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  g.expr.filters.hidden = function (b) {
    return 0 >=
      b.offsetWidth && 0 >= b.offsetHeight
  };
  g.expr.filters.visible = function (b) {
    return !g.expr.filters.hidden(b)
  };
  var Pb = /%20/g, pb = /\[\]$/, gb = /\r?\n/g, Qb = /^(?:submit|button|image|reset|file)$/i, Rb = /^(?:input|select|textarea|keygen)/i;
  g.param = function (b, c) {
    var d, m = [], l = function (b, e) {
      e = g.isFunction(e) ? e() : null == e ? "" : e;
      m[m.length] = encodeURIComponent(b) + "=" + encodeURIComponent(e)
    };
    if (void 0 === c && (c = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(b) || b.jquery && !g.isPlainObject(b))g.each(b, function () {
      l(this.name,
        this.value)
    }); else for (d in b)X(d, b[d], c, l);
    return m.join("&").replace(Pb, "+")
  };
  g.fn.extend({
    serialize: function () {
      return g.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var b = g.prop(this, "elements");
        return b ? g.makeArray(b) : this
      }).filter(function () {
        var b = this.type;
        return this.name && !g(this).is(":disabled") && Rb.test(this.nodeName) && !Qb.test(b) && (this.checked || !Ua.test(b))
      }).map(function (b, c) {
        var d = g(this).val();
        return null == d ? null : g.isArray(d) ? g.map(d, function (b) {
          return {
            name: c.name,
            value: b.replace(gb, "\r\n")
          }
        }) : {name: c.name, value: d.replace(gb, "\r\n")}
      }).get()
    }
  });
  g.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (b) {
    }
  };
  var Sb = 0, Ha = {}, Tb = {0: 200, 1223: 204}, la = g.ajaxSettings.xhr();
  c.ActiveXObject && g(c).on("unload", function () {
    for (var b in Ha)Ha[b]()
  });
  S.cors = !!la && "withCredentials"in la;
  S.ajax = la = !!la;
  g.ajaxTransport(function (b) {
    var c;
    return S.cors || la && !b.crossDomain ? {
      send: function (d, m) {
        var l, g = b.xhr(), f = ++Sb;
        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (l in b.xhrFields)g[l] =
          b.xhrFields[l];
        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType);
        b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
        for (l in d)g.setRequestHeader(l, d[l]);
        c = function (b) {
          return function () {
            c && (delete Ha[f], c = g.onload = g.onerror = null, "abort" === b ? g.abort() : "error" === b ? m(g.status, g.statusText) : m(Tb[g.status] || g.status, g.statusText, "string" == typeof g.responseText ? {text: g.responseText} : void 0, g.getAllResponseHeaders()))
          }
        };
        g.onload = c();
        g.onerror = c("error");
        c = Ha[f] = c("abort");
        g.send(b.hasContent && b.data || null)
      }, abort: function () {
        c && c()
      }
    } : void 0
  });
  g.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (b) {
        return g.globalEval(b), b
      }
    }
  });
  g.ajaxPrefilter("script", function (b) {
    void 0 === b.cache && (b.cache = !1);
    b.crossDomain && (b.type = "GET")
  });
  g.ajaxTransport("script", function (b) {
    if (b.crossDomain) {
      var c, d;
      return {
        send: function (m, l) {
          c = g("<script>").prop({
            async: !0,
            charset: b.scriptCharset, src: b.url
          }).on("load error", d = function (b) {
            c.remove();
            d = null;
            b && l("error" === b.type ? 404 : 200, b.type)
          });
          K.head.appendChild(c[0])
        }, abort: function () {
          d && d()
        }
      }
    }
  });
  var hb = [], Na = /(=)\?(?=&|$)|\?\?/;
  g.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var b = hb.pop() || g.expando + "_" + La++;
      return this[b] = !0, b
    }
  });
  g.ajaxPrefilter("json jsonp", function (b, d, m) {
    var l, f, q, s = !1 !== b.jsonp && (Na.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") &&
      Na.test(b.data) && "data");
    return s || "jsonp" === b.dataTypes[0] ? (l = b.jsonpCallback = g.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, s ? b[s] = b[s].replace(Na, "$1" + l) : !1 !== b.jsonp && (b.url += (Ma.test(b.url) ? "&" : "?") + b.jsonp + "=" + l), b.converters["script json"] = function () {
      return q || g.error(l + " was not called"), q[0]
    }, b.dataTypes[0] = "json", f = c[l], c[l] = function () {
      q = arguments
    }, m.always(function () {
      c[l] = f;
      b[l] && (b.jsonpCallback = d.jsonpCallback, hb.push(l));
      q && g.isFunction(f) && f(q[0]);
      q = f = void 0
    }), "script") :
      void 0
  });
  g.parseHTML = function (b, c, d) {
    if (!b || "string" != typeof b)return null;
    "boolean" == typeof c && (d = c, c = !1);
    c = c || K;
    var m = Ta.exec(b);
    d = !d && [];
    return m ? [c.createElement(m[1])] : (m = g.buildFragment([b], c, d), d && d.length && g(d).remove(), g.merge([], m.childNodes))
  };
  var ib = g.fn.load;
  g.fn.load = function (b, c, d) {
    if ("string" != typeof b && ib)return ib.apply(this, arguments);
    var m, l, f, q = this, s = b.indexOf(" ");
    return 0 <= s && (m = b.slice(s), b = b.slice(0, s)), g.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (l = "POST"), 0 < q.length &&
    g.ajax({url: b, type: l, dataType: "html", data: c}).done(function (b) {
      f = arguments;
      q.html(m ? g("<div>").append(g.parseHTML(b)).find(m) : b)
    }).complete(d && function (b, e) {
        q.each(d, f || [b.responseText, e, b])
      }), this
  };
  g.expr.filters.animated = function (b) {
    return g.grep(g.timers, function (c) {
      return b === c.elem
    }).length
  };
  var jb = c.document.documentElement;
  g.offset = {
    setOffset: function (b, c, d) {
      var m, l, f, q, s, w, v = g.css(b, "position"), n = g(b), y = {};
      "static" === v && (b.style.position = "relative");
      s = n.offset();
      f = g.css(b, "top");
      w = g.css(b,
        "left");
      ("absolute" === v || "fixed" === v) && -1 < (f + w).indexOf("auto") ? (m = n.position(), q = m.top, l = m.left) : (q = parseFloat(f) || 0, l = parseFloat(w) || 0);
      g.isFunction(c) && (c = c.call(b, d, s));
      null != c.top && (y.top = c.top - s.top + q);
      null != c.left && (y.left = c.left - s.left + l);
      "using"in c ? c.using.call(b, y) : n.css(y)
    }
  };
  g.fn.extend({
    offset: function (b) {
      if (arguments.length)return void 0 === b ? this : this.each(function (c) {
        g.offset.setOffset(this, b, c)
      });
      var c, d, m = this[0], l = {top: 0, left: 0}, f = m && m.ownerDocument;
      if (f)return c = f.documentElement,
        g.contains(c, m) ? ("undefined" !== typeof m.getBoundingClientRect && (l = m.getBoundingClientRect()), d = Aa(f), {
          top: l.top + d.pageYOffset - c.clientTop,
          left: l.left + d.pageXOffset - c.clientLeft
        }) : l
    }, position: function () {
      if (this[0]) {
        var b, c, d = this[0], m = {top: 0, left: 0};
        return "fixed" === g.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), g.nodeName(b[0], "html") || (m = b.offset()), m.top += g.css(b[0], "borderTopWidth", !0), m.left += g.css(b[0], "borderLeftWidth", !0)), {
          top: c.top - m.top - g.css(d, "marginTop",
            !0), left: c.left - m.left - g.css(d, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var b = this.offsetParent || jb; b && !g.nodeName(b, "html") && "static" === g.css(b, "position");)b = b.offsetParent;
        return b || jb
      })
    }
  });
  g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, d) {
    var m = "pageYOffset" === d;
    g.fn[b] = function (l) {
      return ia(this, function (b, e, l) {
          var g = Aa(b);
          return void 0 === l ? g ? g[d] : b[e] : void(g ? g.scrollTo(m ? c.pageXOffset : l, m ? l : c.pageYOffset) : b[e] = l)
        }, b, l, arguments.length,
        null)
    }
  });
  g.each(["top", "left"], function (b, c) {
    g.cssHooks[c] = E(S.pixelPosition, function (b, e) {
      return e ? (e = P(b, c), Ia.test(e) ? g(b).position()[c] + "px" : e) : void 0
    })
  });
  g.each({Height: "height", Width: "width"}, function (b, c) {
    g.each({padding: "inner" + b, content: c, "": "outer" + b}, function (d, m) {
      g.fn[m] = function (m, l) {
        var f = arguments.length && (d || "boolean" != typeof m), q = d || (!0 === m || !0 === l ? "margin" : "border");
        return ia(this, function (c, d, m) {
          var l;
          return g.isWindow(c) ? c.document.documentElement["client" + b] : 9 === c.nodeType ? (l =
            c.documentElement, Math.max(c.body["scroll" + b], l["scroll" + b], c.body["offset" + b], l["offset" + b], l["client" + b])) : void 0 === m ? g.css(c, d, q) : g.style(c, d, m, q)
        }, c, f ? m : void 0, f, null)
      }
    })
  });
  g.fn.size = function () {
    return this.length
  };
  g.fn.andSelf = g.fn.addBack;
  "function" == typeof define && define.amd && define("jquery", [], function () {
    return g
  });
  var Ub = c.jQuery, Vb = c.$;
  return g.noConflict = function (b) {
    return c.$ === g && (c.$ = Vb), b && c.jQuery === g && (c.jQuery = Ub), g
  }, "undefined" === typeof k && (c.jQuery = c.$ = g), g
});
(function (c) {
  var k = null, p = null, d = function (f, n) {
    n = c.extend({duration: 5E3, sticky: !1, type: ""}, n);
    "number" == typeof n.duration || (n.duration = 5E3);
    "boolean" == typeof n.sticky || (n.sticky = !1);
    "string" == typeof n.type || (n.type = "");
    k || (p = d.config, k = c("<ul></ul>").addClass("toast").appendTo(document.body).hide(), "number" == typeof p.width || (p.width = 500), "string" == typeof p.align || (p.align = "center"), "boolean" == typeof p.closeForStickyOnly || (p.closeForStickyOnly = !1), k.width(p.width), ("left" === p.align || "right" === p.align) &&
    k.css("margin", "5px").css(p.align, "0") || k.css({left: "50%", margin: "5px 0 0 -" + p.width / 2 + "px"}));
    var u = c("<li></li>").hide().html(f).appendTo(k), z = c("<button>&times;</button>").addClass("close").prependTo(u), A = null;
    z.click(function () {
      clearTimeout(A);
      u.animate({height: 0, opacity: 0}, "fast", function () {
        u.remove();
        k.children().length || k.removeClass("active").hide()
      })
    });
    p.closeForStickyOnly && !n.sticky && z.hide();
    "" !== n.type && u.addClass(n.type);
    !k.hasClass("active") && k.addClass("active").show();
    !n.sticky && 0 <
    n.duration && (A = setTimeout(function () {
      z.click()
    }, n.duration));
    u.fadeIn("normal")
  };
  d.config = {width: 500, align: "center", closeForStickyOnly: !0};
  c.extend({toast: d})
})(jQuery);
if ("undefined" == typeof jQuery)throw Error("Bootstrap's JavaScript requires jQuery");
+function (c) {
  c.fn.emulateTransitionEnd = function (k) {
    var p = !1, d = this;
    c(this).one(c.support.transition.end, function () {
      p = !0
    });
    return setTimeout(function () {
      p || c(d).trigger(c.support.transition.end)
    }, k), this
  };
  c(function () {
    var k = c.support, p;
    a:{
      p = document.createElement("bootstrap");
      var d = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      }, f;
      for (f in d)if (void 0 !== p.style[f]) {
        p = {end: d[f]};
        break a
      }
      p = !1
    }
    k.transition = p
  })
}(jQuery);
+function (c) {
  var k = function (d) {
    c(d).on("click", '[data-dismiss="alert"]', this.close)
  };
  k.prototype.close = function (d) {
    function f() {
      p.trigger("closed.bs.alert").remove()
    }

    var n = c(this), k = n.attr("data-target");
    k || (k = n.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
    var p = c(k);
    d && d.preventDefault();
    p.length || (p = n.hasClass("alert") ? n : n.parent());
    p.trigger(d = c.Event("close.bs.alert"));
    d.isDefaultPrevented() || (p.removeClass("in"), c.support.transition && p.hasClass("fade") ? p.one(c.support.transition.end, f).emulateTransitionEnd(150) :
      f())
  };
  var p = c.fn.alert;
  c.fn.alert = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.alert");
      n || f.data("bs.alert", n = new k(this));
      "string" == typeof d && n[d].call(f)
    })
  };
  c.fn.alert.Constructor = k;
  c.fn.alert.noConflict = function () {
    return c.fn.alert = p, this
  };
  c(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', k.prototype.close)
}(jQuery);
+function (c) {
  var k = function (d, f) {
    this.$element = c(d);
    this.options = c.extend({}, k.DEFAULTS, f);
    this.isLoading = !1
  };
  k.DEFAULTS = {loadingText: "loading..."};
  k.prototype.setState = function (d) {
    var f = this.$element, n = f.is("input") ? "val" : "html", k = f.data();
    d += "Text";
    k.resetText || f.data("resetText", f[n]());
    f[n](k[d] || this.options[d]);
    setTimeout(c.proxy(function () {
        "loadingText" == d ? (this.isLoading = !0, f.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, f.removeClass("disabled").removeAttr("disabled"))
      },
      this), 0)
  };
  k.prototype.toggle = function () {
    var c = !0, f = this.$element.closest('[data-toggle="buttons"]');
    if (f.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? c = !1 : f.find(".active").removeClass("active"));
      c && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
    }
    c && this.$element.toggleClass("active")
  };
  var p = c.fn.button;
  c.fn.button = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.button"), u = "object" == typeof d && d;
      n || f.data("bs.button", n = new k(this, u));
      "toggle" == d ? n.toggle() : d && n.setState(d)
    })
  };
  c.fn.button.Constructor = k;
  c.fn.button.noConflict = function () {
    return c.fn.button = p, this
  };
  c(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (d) {
    var f = c(d.target);
    f.hasClass("btn") || (f = f.closest(".btn"));
    f.button("toggle");
    d.preventDefault()
  })
}(jQuery);
+function (c) {
  var k = function (d, f) {
    this.$element = c(d);
    this.$indicators = this.$element.find(".carousel-indicators");
    this.options = f;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    "hover" == this.options.pause && this.$element.on("mouseenter", c.proxy(this.pause, this)).on("mouseleave", c.proxy(this.cycle, this))
  };
  k.DEFAULTS = {interval: 5E3, pause: "hover", wrap: !0};
  k.prototype.cycle = function (d) {
    return d || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused &&
    (this.interval = setInterval(c.proxy(this.next, this), this.options.interval)), this
  };
  k.prototype.getActiveIndex = function () {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
  };
  k.prototype.to = function (d) {
    var f = this, n = this.getActiveIndex();
    return d > this.$items.length - 1 || 0 > d ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      f.to(d)
    }) : n == d ? this.pause().cycle() : this.slide(d > n ? "next" : "prev", c(this.$items[d]))
  };
  k.prototype.pause = function (d) {
    return d || (this.paused = !0), this.$element.find(".next, .prev").length && c.support.transition && (this.$element.trigger(c.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  };
  k.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  };
  k.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  };
  k.prototype.slide = function (d, f) {
    var n = this.$element.find(".item.active"), k = f || n[d](), p = this.interval, A = "next" == d ? "left" :
      "right", G = "next" == d ? "first" : "last", D = this;
    if (!k.length) {
      if (!this.options.wrap)return;
      k = this.$element.find(".item")[G]()
    }
    if (k.hasClass("active"))return this.sliding = !1;
    G = c.Event("slide.bs.carousel", {relatedTarget: k[0], direction: A});
    return this.$element.trigger(G), G.isDefaultPrevented() ? void 0 : (this.sliding = !0, p && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
      var b = c(D.$indicators.children()[D.getActiveIndex()]);
      b && b.addClass("active")
    })), c.support.transition && this.$element.hasClass("slide") ? (k.addClass(d), k[0].offsetWidth, n.addClass(A), k.addClass(A), n.one(c.support.transition.end, function () {
      k.removeClass([d, A].join(" ")).addClass("active");
      n.removeClass(["active", A].join(" "));
      D.sliding = !1;
      setTimeout(function () {
        D.$element.trigger("slid.bs.carousel")
      }, 0)
    }).emulateTransitionEnd(1E3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), k.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")),
    p && this.cycle(), this)
  };
  var p = c.fn.carousel;
  c.fn.carousel = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.carousel"), p = c.extend({}, k.DEFAULTS, f.data(), "object" == typeof d && d), z = "string" == typeof d ? d : p.slide;
      n || f.data("bs.carousel", n = new k(this, p));
      "number" == typeof d ? n.to(d) : z ? n[z]() : p.interval && n.pause().cycle()
    })
  };
  c.fn.carousel.Constructor = k;
  c.fn.carousel.noConflict = function () {
    return c.fn.carousel = p, this
  };
  c(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function (d) {
      var f, n = c(this), k = c(n.attr("data-target") || (f = n.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, ""));
      f = c.extend({}, k.data(), n.data());
      var p = n.attr("data-slide-to");
      p && (f.interval = !1);
      k.carousel(f);
      (p = n.attr("data-slide-to")) && k.data("bs.carousel").to(p);
      d.preventDefault()
    });
  c(window).on("load", function () {
    c('[data-ride="carousel"]').each(function () {
      var d = c(this);
      d.carousel(d.data())
    })
  })
}(jQuery);
+function (c) {
  var k = function (d, f) {
    this.$element = c(d);
    this.options = c.extend({}, k.DEFAULTS, f);
    this.transitioning = null;
    this.options.parent && (this.$parent = c(this.options.parent));
    this.options.toggle && this.toggle()
  };
  k.DEFAULTS = {toggle: !0};
  k.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height"
  };
  k.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var d = c.Event("show.bs.collapse");
      if (this.$element.trigger(d), !d.isDefaultPrevented()) {
        if ((d = this.$parent &&
            this.$parent.find("> .panel > .in")) && d.length) {
          var f = d.data("bs.collapse");
          if (f && f.transitioning)return;
          d.collapse("hide");
          f || d.data("bs.collapse", null)
        }
        var n = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[n](0);
        this.transitioning = 1;
        d = function () {
          this.$element.removeClass("collapsing").addClass("collapse in")[n]("auto");
          this.transitioning = 0;
          this.$element.trigger("shown.bs.collapse")
        };
        if (!c.support.transition)return d.call(this);
        f = c.camelCase(["scroll", n].join("-"));
        this.$element.one(c.support.transition.end, c.proxy(d, this)).emulateTransitionEnd(350)[n](this.$element[0][f])
      }
    }
  };
  k.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var d = c.Event("hide.bs.collapse");
      if (this.$element.trigger(d), !d.isDefaultPrevented()) {
        d = this.dimension();
        this.$element[d](this.$element[d]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var f = function () {
          this.transitioning = 0;
          this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        return c.support.transition ? void this.$element[d](0).one(c.support.transition.end, c.proxy(f, this)).emulateTransitionEnd(350) : f.call(this)
      }
    }
  };
  k.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  var p = c.fn.collapse;
  c.fn.collapse = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.collapse"), p = c.extend({}, k.DEFAULTS, f.data(), "object" == typeof d && d);
      !n && p.toggle && "show" == d && (d = !d);
      n || f.data("bs.collapse", n = new k(this, p));
      "string" == typeof d && n[d]()
    })
  };
  c.fn.collapse.Constructor =
    k;
  c.fn.collapse.noConflict = function () {
    return c.fn.collapse = p, this
  };
  c(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (d) {
    var f, n = c(this);
    d = n.attr("data-target") || d.preventDefault() || (f = n.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "");
    f = c(d);
    var k = (d = f.data("bs.collapse")) ? "toggle" : n.data(), p = n.attr("data-parent"), A = p && c(p);
    d && d.transitioning || (A && A.find('[data-toggle=collapse][data-parent="' + p + '"]').not(n).addClass("collapsed"), n[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed"));
    f.collapse(k)
  })
}(jQuery);
+function (c) {
  function k(n) {
    c(d).remove();
    c(f).each(function () {
      var d = p(c(this)), f = {relatedTarget: this};
      d.hasClass("open") && (d.trigger(n = c.Event("hide.bs.dropdown", f)), n.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", f))
    })
  }

  function p(d) {
    var f = d.attr("data-target");
    f || (f = d.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
    return (f = f && c(f)) && f.length ? f : d.parent()
  }

  var d = ".dropdown-backdrop", f = "[data-toggle=dropdown]", n = function (d) {
    c(d).on("click.bs.dropdown", this.toggle)
  };
  n.prototype.toggle = function (d) {
    var f = c(this);
    if (!f.is(".disabled, :disabled")) {
      var n = p(f), u = n.hasClass("open");
      if (k(), !u) {
        "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && c('<div class="dropdown-backdrop"/>').insertAfter(c(this)).on("click", k);
        u = {relatedTarget: this};
        if (n.trigger(d = c.Event("show.bs.dropdown", u)), d.isDefaultPrevented())return;
        n.toggleClass("open").trigger("shown.bs.dropdown", u);
        f.focus()
      }
      return !1
    }
  };
  n.prototype.keydown = function (d) {
    if (/(38|40|27)/.test(d.keyCode)) {
      var n =
        c(this);
      if (d.preventDefault(), d.stopPropagation(), !n.is(".disabled, :disabled")) {
        var k = p(n), u = k.hasClass("open");
        if (!u || u && 27 == d.keyCode)return 27 == d.which && k.find(f).focus(), n.click();
        n = k.find("[role=menu] li:not(.divider):visible a, [role=listbox] li:not(.divider):visible a");
        n.length && (k = n.index(n.filter(":focus")), 38 == d.keyCode && 0 < k && k--, 40 == d.keyCode && k < n.length - 1 && k++, ~k || (k = 0), n.eq(k).focus())
      }
    }
  };
  var u = c.fn.dropdown;
  c.fn.dropdown = function (d) {
    return this.each(function () {
      var f = c(this), k = f.data("bs.dropdown");
      k || f.data("bs.dropdown", k = new n(this));
      "string" == typeof d && k[d].call(f)
    })
  };
  c.fn.dropdown.Constructor = n;
  c.fn.dropdown.noConflict = function () {
    return c.fn.dropdown = u, this
  };
  c(document).on("click.bs.dropdown.data-api", k).on("click.bs.dropdown.data-api", ".dropdown form", function (c) {
    c.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, n.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ", [role=menu], [role=listbox]", n.prototype.keydown)
}(jQuery);
+function (c) {
  var k = function (d, f) {
    this.options = f;
    this.$element = c(d);
    this.$backdrop = this.isShown = null;
    this.options.remote && this.$element.find(".modal-content").load(this.options.remote, c.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  k.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0};
  k.prototype.toggle = function (c) {
    return this[this.isShown ? "hide" : "show"](c)
  };
  k.prototype.show = function (d) {
    var f = this, n = c.Event("show.bs.modal", {relatedTarget: d});
    this.$element.trigger(n);
    this.isShown || n.isDefaultPrevented() ||
    (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this)), this.backdrop(function () {
      var n = c.support.transition && f.$element.hasClass("fade");
      f.$element.parent().length || f.$element.appendTo(document.body);
      f.$element.show().scrollTop(0);
      n && f.$element[0].offsetWidth;
      f.$element.addClass("in").attr("aria-hidden", !1);
      f.enforceFocus();
      var k = c.Event("shown.bs.modal", {relatedTarget: d});
      n ? f.$element.find(".modal-dialog").one(c.support.transition.end,
        function () {
          f.$element.focus().trigger(k)
        }).emulateTransitionEnd(300) : f.$element.focus().trigger(k)
    }))
  };
  k.prototype.hide = function (d) {
    d && d.preventDefault();
    d = c.Event("hide.bs.modal");
    this.$element.trigger(d);
    this.isShown && !d.isDefaultPrevented() && (this.isShown = !1, this.escape(), c(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), c.support.transition && this.$element.hasClass("fade") ? this.$element.one(c.support.transition.end, c.proxy(this.hideModal,
      this)).emulateTransitionEnd(300) : this.hideModal())
  };
  k.prototype.enforceFocus = function () {
    c(document).off("focusin.bs.modal").on("focusin.bs.modal", c.proxy(function (c) {
      this.$element[0] === c.target || this.$element.has(c.target).length || this.$element.focus()
    }, this))
  };
  k.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", c.proxy(function (c) {
      27 == c.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  };
  k.prototype.hideModal =
    function () {
      var c = this;
      this.$element.hide();
      this.backdrop(function () {
        c.removeBackdrop();
        c.$element.trigger("hidden.bs.modal")
      })
    };
  k.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null
  };
  k.prototype.backdrop = function (d) {
    var f = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var n = c.support.transition && f;
      if (this.$backdrop = c('<div class="modal-backdrop ' + f + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal",
          c.proxy(function (c) {
            c.target === c.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
          }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), d)n ? this.$backdrop.one(c.support.transition.end, d).emulateTransitionEnd(150) : d()
    } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, d).emulateTransitionEnd(150) : d()) : d &&
    d()
  };
  var p = c.fn.modal;
  c.fn.modal = function (d, f) {
    return this.each(function () {
      var n = c(this), p = n.data("bs.modal"), z = c.extend({}, k.DEFAULTS, n.data(), "object" == typeof d && d);
      p || n.data("bs.modal", p = new k(this, z));
      "string" == typeof d ? p[d](f) : z.show && p.show(f)
    })
  };
  c.fn.modal.Constructor = k;
  c.fn.modal.noConflict = function () {
    return c.fn.modal = p, this
  };
  c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (d) {
    var f = c(this), n = f.attr("href"), k = c(f.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/,
        "")), n = k.data("bs.modal") ? "toggle" : c.extend({remote: !/#/.test(n) && n}, k.data(), f.data());
    f.is("a") && d.preventDefault();
    k.modal(n, this).one("hide", function () {
      f.is(":visible") && f.focus()
    })
  });
  c(document).on("show.bs.modal", ".modal", function () {
    c(document.body).addClass("modal-open")
  }).on("hidden.bs.modal", ".modal", function () {
    c(document.body).removeClass("modal-open")
  })
}(jQuery);
+function (c) {
  var k = function (c, f) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init("tooltip", c, f)
  };
  k.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  };
  k.prototype.init = function (d, f, n) {
    this.enabled = !0;
    this.type = d;
    this.$element = c(f);
    this.options = this.getOptions(n);
    d = this.options.trigger.split(" ");
    for (f = d.length; f--;)if (n = d[f], "click" == n)this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this)); else if ("manual" != n) {
      var k = "hover" == n ? "mouseleave" : "focusout";
      this.$element.on(("hover" == n ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, c.proxy(this.enter, this));
      this.$element.on(k + "." + this.type, this.options.selector, c.proxy(this.leave, this))
    }
    this.options.selector ? this._options = c.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  };
  k.prototype.getDefaults =
    function () {
      return k.DEFAULTS
    };
  k.prototype.getOptions = function (d) {
    return d = c.extend({}, this.getDefaults(), this.$element.data(), d), d.delay && "number" == typeof d.delay && (d.delay = {
      show: d.delay,
      hide: d.delay
    }), d
  };
  k.prototype.getDelegateOptions = function () {
    var d = {}, f = this.getDefaults();
    return this._options && c.each(this._options, function (c, k) {
      f[c] != k && (d[c] = k)
    }), d
  };
  k.prototype.enter = function (d) {
    var f = d instanceof this.constructor ? d : c(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(f.timeout), f.hoverState = "in", f.options.delay && f.options.delay.show ? void(f.timeout = setTimeout(function () {
      "in" == f.hoverState && f.show()
    }, f.options.delay.show)) : f.show()
  };
  k.prototype.leave = function (d) {
    var f = d instanceof this.constructor ? d : c(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(f.timeout), f.hoverState = "out", f.options.delay && f.options.delay.hide ? void(f.timeout = setTimeout(function () {
      "out" == f.hoverState && f.hide()
    }, f.options.delay.hide)) :
      f.hide()
  };
  k.prototype.show = function () {
    var d = c.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled && (this.$element.trigger(d), !d.isDefaultPrevented())) {
      var f = this, d = this.tip();
      this.setContent();
      this.options.animation && d.addClass("fade");
      var n = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement, k = /\s?auto?\s?/i, p = k.test(n);
      p && (n = n.replace(k, "") || "top");
      d.detach().css({top: 0, left: 0, display: "block"}).addClass(n);
      this.options.container ?
        d.appendTo(this.options.container) : d.insertAfter(this.$element);
      var k = this.getPosition(), A = d[0].offsetWidth, G = d[0].offsetHeight;
      if (p) {
        var D = this.$element.parent(), p = n, b = document.documentElement.scrollTop || document.body.scrollTop, W = "body" == this.options.container ? window.innerWidth : D.outerWidth(), L = "body" == this.options.container ? window.innerHeight : D.outerHeight(), D = "body" == this.options.container ? 0 : D.offset().left, n = "bottom" == n && k.top + k.height + G - b > L ? "top" : "top" == n && 0 > k.top - b - G ? "bottom" : "right" == n && k.right +
        A > W ? "left" : "left" == n && k.left - A < D ? "right" : n;
        d.removeClass(p).addClass(n)
      }
      k = this.getCalculatedOffset(n, k, A, G);
      this.applyPlacement(k, n);
      this.hoverState = null;
      n = function () {
        f.$element.trigger("shown.bs." + f.type)
      };
      c.support.transition && this.$tip.hasClass("fade") ? d.one(c.support.transition.end, n).emulateTransitionEnd(150) : n()
    }
  };
  k.prototype.applyPlacement = function (d, f) {
    var n, k = this.tip(), p = k[0].offsetWidth, A = k[0].offsetHeight, G = parseInt(k.css("margin-top"), 10), D = parseInt(k.css("margin-left"), 10);
    isNaN(G) &&
    (G = 0);
    isNaN(D) && (D = 0);
    d.top += G;
    d.left += D;
    c.offset.setOffset(k[0], c.extend({
      using: function (b) {
        k.css({top: Math.round(b.top), left: Math.round(b.left)})
      }
    }, d), 0);
    k.addClass("in");
    G = k[0].offsetWidth;
    D = k[0].offsetHeight;
    ("top" == f && D != A && (n = !0, d.top = d.top + A - D), /bottom|top/.test(f)) ? (A = 0, 0 > d.left && (A = -2 * d.left, d.left = 0, k.offset(d), G = k[0].offsetWidth, D = k[0].offsetHeight), this.replaceArrow(A - p + G, G, "left")) : this.replaceArrow(D - A, D, "top");
    n && k.offset(d)
  };
  k.prototype.replaceArrow = function (c, f, k) {
    this.arrow().css(k,
      c ? 50 * (1 - c / f) + "%" : "")
  };
  k.prototype.setContent = function () {
    var c = this.tip(), f = this.getTitle();
    c.find(".tooltip-inner")[this.options.html ? "html" : "text"](f);
    c.removeClass("fade in top bottom left right")
  };
  k.prototype.hide = function () {
    function d() {
      "in" != f.hoverState && k.detach();
      f.$element.trigger("hidden.bs." + f.type)
    }

    var f = this, k = this.tip(), p = c.Event("hide.bs." + this.type);
    return this.$element.trigger(p), p.isDefaultPrevented() ? void 0 : (k.removeClass("in"), c.support.transition && this.$tip.hasClass("fade") ? k.one(c.support.transition.end,
      d).emulateTransitionEnd(150) : d(), this.hoverState = null, this)
  };
  k.prototype.fixTitle = function () {
    var c = this.$element;
    (c.attr("title") || "string" != typeof c.attr("data-original-title")) && c.attr("data-original-title", c.attr("title") || "").attr("title", "")
  };
  k.prototype.hasContent = function () {
    return this.getTitle()
  };
  k.prototype.getPosition = function () {
    var d = this.$element[0];
    return c.extend({}, "function" == typeof d.getBoundingClientRect ? d.getBoundingClientRect() : {
      width: d.offsetWidth,
      height: d.offsetHeight
    }, this.$element.offset())
  };
  k.prototype.getCalculatedOffset = function (c, f, k, p) {
    return "bottom" == c ? {top: f.top + f.height, left: f.left + f.width / 2 - k / 2} : "top" == c ? {
      top: f.top - p,
      left: f.left + f.width / 2 - k / 2
    } : "left" == c ? {top: f.top + f.height / 2 - p / 2, left: f.left - k} : {
      top: f.top + f.height / 2 - p / 2,
      left: f.left + f.width
    }
  };
  k.prototype.getTitle = function () {
    var c = this.$element, f = this.options;
    return c.attr("data-original-title") || ("function" == typeof f.title ? f.title.call(c[0]) : f.title)
  };
  k.prototype.tip = function () {
    return this.$tip = this.$tip || c(this.options.template)
  };
  k.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  };
  k.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  };
  k.prototype.enable = function () {
    this.enabled = !0
  };
  k.prototype.disable = function () {
    this.enabled = !1
  };
  k.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  };
  k.prototype.toggle = function (d) {
    d = d ? c(d.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    d.tip().hasClass("in") ?
      d.leave(d) : d.enter(d)
  };
  k.prototype.destroy = function () {
    clearTimeout(this.timeout);
    this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var p = c.fn.tooltip;
  c.fn.tooltip = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.tooltip"), p = "object" == typeof d && d;
      (n || "destroy" != d) && (n || f.data("bs.tooltip", n = new k(this, p)), "string" == typeof d && n[d]())
    })
  };
  c.fn.tooltip.Constructor = k;
  c.fn.tooltip.noConflict = function () {
    return c.fn.tooltip = p, this
  }
}(jQuery);
+function (c) {
  var k = function (c, f) {
    this.init("popover", c, f)
  };
  if (!c.fn.tooltip)throw Error("Popover requires tooltip.js");
  k.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  k.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype);
  k.prototype.constructor = k;
  k.prototype.getDefaults = function () {
    return k.DEFAULTS
  };
  k.prototype.setContent =
    function () {
      var c = this.tip(), f = this.getTitle(), k = this.getContent();
      c.find(".popover-title")[this.options.html ? "html" : "text"](f);
      c.find(".popover-content")[this.options.html ? "string" == typeof k ? "html" : "append" : "text"](k);
      c.removeClass("fade top bottom left right in");
      c.find(".popover-title").html() || c.find(".popover-title").hide()
    };
  k.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  };
  k.prototype.getContent = function () {
    var c = this.$element, f = this.options;
    return c.attr("data-content") ||
      ("function" == typeof f.content ? f.content.call(c[0]) : f.content)
  };
  k.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  k.prototype.tip = function () {
    return this.$tip || (this.$tip = c(this.options.template)), this.$tip
  };
  var p = c.fn.popover;
  c.fn.popover = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.popover"), p = "object" == typeof d && d;
      (n || "destroy" != d) && (n || f.data("bs.popover", n = new k(this, p)), "string" == typeof d && n[d]())
    })
  };
  c.fn.popover.Constructor = k;
  c.fn.popover.noConflict =
    function () {
      return c.fn.popover = p, this
    }
}(jQuery);
+function (c) {
  function k(d, f) {
    var n, p = c.proxy(this.process, this);
    this.$element = c(c(d).is("body") ? window : d);
    this.$body = c("body");
    this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", p);
    this.options = c.extend({}, k.DEFAULTS, f);
    this.selector = (this.options.target || (n = c(d).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
    this.offsets = c([]);
    this.targets = c([]);
    this.activeTarget = null;
    this.refresh();
    this.process()
  }

  k.DEFAULTS = {offset: 10};
  k.prototype.refresh = function () {
    var d = this.$element[0] ==
    window ? "offset" : "position";
    this.offsets = c([]);
    this.targets = c([]);
    var f = this;
    this.$body.find(this.selector).map(function () {
      var k = c(this), k = k.data("target") || k.attr("href"), p = /^#./.test(k) && c(k);
      return p && p.length && p.is(":visible") && [[p[d]().top + (!c.isWindow(f.$scrollElement.get(0)) && f.$scrollElement.scrollTop()), k]] || null
    }).sort(function (c, d) {
      return c[0] - d[0]
    }).each(function () {
      f.offsets.push(this[0]);
      f.targets.push(this[1])
    })
  };
  k.prototype.process = function () {
    var c, f = this.$scrollElement.scrollTop() +
      this.options.offset, k = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(), p = this.offsets, z = this.targets, A = this.activeTarget;
    if (f >= k)return A != (c = z.last()[0]) && this.activate(c);
    if (A && f <= p[0])return A != (c = z[0]) && this.activate(c);
    for (c = p.length; c--;)A != z[c] && f >= p[c] && (!p[c + 1] || f <= p[c + 1]) && this.activate(z[c])
  };
  k.prototype.activate = function (d) {
    this.activeTarget = d;
    c(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    d = c(this.selector +
      '[data-target="' + d + '"],' + this.selector + '[href="' + d + '"]').parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active"));
    d.trigger("activate.bs.scrollspy")
  };
  var p = c.fn.scrollspy;
  c.fn.scrollspy = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.scrollspy"), p = "object" == typeof d && d;
      n || f.data("bs.scrollspy", n = new k(this, p));
      "string" == typeof d && n[d]()
    })
  };
  c.fn.scrollspy.Constructor = k;
  c.fn.scrollspy.noConflict = function () {
    return c.fn.scrollspy =
      p, this
  };
  c(window).on("load", function () {
    c('[data-spy="scroll"]').each(function () {
      var d = c(this);
      d.scrollspy(d.data())
    })
  })
}(jQuery);
+function (c) {
  var k = function (d) {
    this.element = c(d)
  };
  k.prototype.show = function () {
    var d = this.element, f = d.closest("ul:not(.dropdown-menu)"), k = d.data("target");
    if (k || (k = d.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, "")), !d.parent("li").hasClass("active")) {
      var p = f.find(".active:last a")[0], z = c.Event("show.bs.tab", {relatedTarget: p});
      (d.trigger(z), z.isDefaultPrevented()) || (k = c(k), this.activate(d.parent("li"), f), this.activate(k, k.parent(), function () {
        d.trigger({type: "shown.bs.tab", relatedTarget: p})
      }))
    }
  };
  k.prototype.activate =
    function (d, f, k) {
      function p() {
        z.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
        d.addClass("active");
        A ? (d[0].offsetWidth, d.addClass("in")) : d.removeClass("fade");
        d.parent(".dropdown-menu") && d.closest("li.dropdown").addClass("active");
        k && k()
      }

      var z = f.find("> .active"), A = k && c.support.transition && z.hasClass("fade");
      A ? z.one(c.support.transition.end, p).emulateTransitionEnd(150) : p();
      z.removeClass("in")
    };
  var p = c.fn.tab;
  c.fn.tab = function (d) {
    return this.each(function () {
      var f = c(this),
        n = f.data("bs.tab");
      n || f.data("bs.tab", n = new k(this));
      "string" == typeof d && n[d]()
    })
  };
  c.fn.tab.Constructor = k;
  c.fn.tab.noConflict = function () {
    return c.fn.tab = p, this
  };
  c(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (d) {
    d.preventDefault();
    c(this).tab("show")
  })
}(jQuery);
+function (c) {
  var k = function (d, f) {
    this.options = c.extend({}, k.DEFAULTS, f);
    this.$window = c(window).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this));
    this.$element = c(d);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition()
  };
  k.RESET = "affix affix-top affix-bottom";
  k.DEFAULTS = {offset: 0};
  k.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset)return this.pinnedOffset;
    this.$element.removeClass(k.RESET).addClass("affix");
    var c = this.$window.scrollTop();
    return this.pinnedOffset = this.$element.offset().top - c
  };
  k.prototype.checkPositionWithEventLoop = function () {
    setTimeout(c.proxy(this.checkPosition, this), 1)
  };
  k.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var d = c(document).height(), f = this.$window.scrollTop(), n = this.$element.offset(), p = this.options.offset, z = p.top, A = p.bottom;
      "top" == this.affixed && (n.top += f);
      "object" != typeof p && (A = z = p);
      "function" == typeof z && (z = p.top(this.$element));
      "function" == typeof A &&
      (A = p.bottom(this.$element));
      f = null != this.unpin && f + this.unpin <= n.top ? !1 : null != A && n.top + this.$element.height() >= d - A ? "bottom" : null != z && z >= f ? "top" : !1;
      this.affixed !== f && (this.unpin && this.$element.css("top", ""), n = "affix" + (f ? "-" + f : ""), p = c.Event(n + ".bs.affix"), this.$element.trigger(p), p.isDefaultPrevented() || (this.affixed = f, this.unpin = "bottom" == f ? this.getPinnedOffset() : null, this.$element.removeClass(k.RESET).addClass(n).trigger(c.Event(n.replace("affix", "affixed"))), "bottom" == f && this.$element.offset({
        top: d -
        A - this.$element.height()
      })))
    }
  };
  var p = c.fn.affix;
  c.fn.affix = function (d) {
    return this.each(function () {
      var f = c(this), n = f.data("bs.affix"), p = "object" == typeof d && d;
      n || f.data("bs.affix", n = new k(this, p));
      "string" == typeof d && n[d]()
    })
  };
  c.fn.affix.Constructor = k;
  c.fn.affix.noConflict = function () {
    return c.fn.affix = p, this
  };
  c(window).on("load", function () {
    c('[data-spy="affix"]').each(function () {
      var d = c(this), f = d.data();
      f.offset = f.offset || {};
      f.offsetBottom && (f.offset.bottom = f.offsetBottom);
      f.offsetTop && (f.offset.top =
        f.offsetTop);
      d.affix(f)
    })
  })
}(jQuery);
!function (c) {
  c.fn.bootstrapSwitch = function (k) {
    var p = {
      init: function () {
        return this.each(function () {
          var d = c(this), f, k, p, z, A = d.closest("form"), G = "", D = d.attr("class"), b;
          k = "ON";
          z = "OFF";
          var W = f = !1;
          c.each(["switch-mini", "switch-small", "switch-large"], function (b, c) {
            0 <= D.indexOf(c) && (G = c)
          });
          d.addClass("has-switch");
          void 0 !== d.data("on") && (p = "switch-" + d.data("on"));
          void 0 !== d.data("on-label") && (k = d.data("on-label"));
          void 0 !== d.data("off-label") && (z = d.data("off-label"));
          void 0 !== d.data("label-icon") && (f = d.data("label-icon"));
          void 0 !== d.data("text-label") && (W = d.data("text-label"));
          k = c("<span>").addClass("switch-left").addClass(G).addClass(p).html(k);
          p = "";
          void 0 !== d.data("off") && (p = "switch-" + d.data("off"));
          p = c("<span>").addClass("switch-right").addClass(G).addClass(p).html(z);
          z = c("<label>").html("&nbsp;").addClass(G).attr("for", d.find('input[type!="hidden"]').attr("id"));
          f && z.html('<i class="icon ' + f + '"></i>');
          W && z.html("" + W + "");
          f = d.find('input[type!="hidden"]').wrap(c("<div>")).parent().data("animated", !1);
          !1 !== d.data("animated") &&
          f.addClass("switch-animate").data("animated", !0);
          f.append(k).append(z).append(p);
          d.find(">div").addClass(d.find('input[type!="hidden"]').is(":checked") ? "switch-on" : "switch-off");
          d.find('input[type!="hidden"]').is(":disabled") && c(this).addClass("deactivate");
          var L = function (b) {
            d.parent("label").is(".label-change-switch") || b.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")
          };
          d.on("keydown", function (b) {
            32 === b.keyCode && (b.stopImmediatePropagation(), b.preventDefault(), L(c(b.target).find("span:first")))
          });
          k.on("click", function (b) {
            L(c(this))
          });
          p.on("click", function (b) {
            L(c(this))
          });
          d.find('input[type!="hidden"]').on("change", function (b, d) {
            var l = c(this), f = l.parent(), s = l.is(":checked"), k = f.is(".switch-off");
            b.preventDefault();
            f.css("left", "");
            k === s && (s ? f.removeClass("switch-off").addClass("switch-on") : f.removeClass("switch-on").addClass("switch-off"), !1 !== f.data("animated") && f.addClass("switch-animate"), "boolean" === typeof d && d || f.parent().trigger("switch-change", {
              el: l,
              value: s
            }))
          });
          d.find("label").on("mousedown touchstart",
            function (d) {
              var f = c(this);
              b = !1;
              d.preventDefault();
              d.stopImmediatePropagation();
              f.closest("div").removeClass("switch-animate");
              f.closest(".has-switch").is(".deactivate") ? f.unbind("click") : f.closest(".switch-on").parent().is(".radio-no-uncheck") ? f.unbind("click") : (f.on("mousemove touchmove", function (d) {
                var f = c(this).closest(".make-switch");
                d = ((d.pageX || d.originalEvent.targetTouches[0].pageX) - f.offset().left) / f.width() * 100;
                b = !0;
                25 > d ? d = 25 : 75 < d && (d = 75);
                f.find(">div").css("left", d - 75 + "%")
              }), f.on("click touchend",
                function (d) {
                  var f = c(this), s = c(d.target).siblings("input");
                  d.stopImmediatePropagation();
                  d.preventDefault();
                  f.unbind("mouseleave");
                  b ? s.prop("checked", !(-25 > parseInt(f.parent().css("left")))) : s.prop("checked", !s.is(":checked"));
                  b = !1;
                  s.trigger("change")
                }), f.on("mouseleave", function (b) {
                var d = c(this), f = d.siblings("input");
                b.preventDefault();
                b.stopImmediatePropagation();
                d.unbind("mouseleave");
                d.trigger("mouseup");
                f.prop("checked", !(-25 > parseInt(d.parent().css("left")))).trigger("change")
              }), f.on("mouseup",
                function (b) {
                  b.stopImmediatePropagation();
                  b.preventDefault();
                  c(this).unbind("mousemove")
                }))
            });
          "injected" !== A.data("bootstrapSwitch") && (A.bind("reset", function () {
            setTimeout(function () {
              A.find(".make-switch").each(function () {
                var b = c(this).find('input[type!="hidden"]');
                b.prop("checked", b.is(":checked")).trigger("change")
              })
            }, 1)
          }), A.data("bootstrapSwitch", "injected"))
        })
      }, toggleActivation: function () {
        var d = c(this);
        d.toggleClass("deactivate");
        d.find('input[type!="hidden"]').prop("disabled", d.is(".deactivate"))
      },
      isActive: function () {
        return !c(this).hasClass("deactivate")
      }, setActive: function (d) {
        var f = c(this);
        d ? (f.removeClass("deactivate"), f.find('input[type!="hidden"]').removeAttr("disabled")) : (f.addClass("deactivate"), f.find('input[type!="hidden"]').attr("disabled", "disabled"))
      }, toggleState: function (d) {
        var f = c(this).find(":checkbox");
        f.prop("checked", !f.is(":checked")).trigger("change", d)
      }, toggleRadioState: function (d) {
        var f = c(this).find(":radio");
        f.not(":checked").prop("checked", !f.is(":checked")).trigger("change",
          d)
      }, toggleRadioStateAllowUncheck: function (d, f) {
        var k = c(this).find(":radio");
        d ? k.not(":checked").trigger("change", f) : k.not(":checked").prop("checked", !k.is(":checked")).trigger("change", f)
      }, setState: function (d, f) {
        c(this).find('input[type!="hidden"]').prop("checked", d).trigger("change", f)
      }, setOnLabel: function (d) {
        c(this).find(".switch-left").html(d)
      }, setOffLabel: function (d) {
        c(this).find(".switch-right").html(d)
      }, setOnClass: function (d) {
        var f = c(this).find(".switch-left"), k = "";
        void 0 !== d && (void 0 !== c(this).attr("data-on") &&
        (k = "switch-" + c(this).attr("data-on")), f.removeClass(k), f.addClass("switch-" + d))
      }, setOffClass: function (d) {
        var f = c(this).find(".switch-right"), k = "";
        void 0 !== d && (void 0 !== c(this).attr("data-off") && (k = "switch-" + c(this).attr("data-off")), f.removeClass(k), f.addClass("switch-" + d))
      }, setAnimated: function (d) {
        var f = c(this).find('input[type!="hidden"]').parent();
        void 0 === d && (d = !1);
        f.data("animated", d);
        f.attr("data-animated", d);
        !1 !== f.data("animated") ? f.addClass("switch-animate") : f.removeClass("switch-animate")
      },
      setSizeClass: function (d) {
        var f = c(this), k = f.find(".switch-left"), p = f.find(".switch-right"), z = f.find("label");
        c.each(["switch-mini", "switch-small", "switch-large"], function (c, f) {
          f !== d ? (k.removeClass(f), p.removeClass(f), z.removeClass(f)) : (k.addClass(f), p.addClass(f), z.addClass(f))
        })
      }, status: function () {
        return c(this).find('input[type!="hidden"]').is(":checked")
      }, destroy: function () {
        var d = c(this), f = d.find("div"), d = d.closest("form");
        f.find(":not(input)").remove();
        f = f.children();
        f.unwrap().unwrap();
        f.unbind("change");
        d && (d.unbind("reset"), d.removeData("bootstrapSwitch"));
        return f
      }
    };
    if (p[k])return p[k].apply(this, Array.prototype.slice.call(arguments, 1));
    if ("object" !== typeof k && k)c.error("Method " + k + " does not exist!"); else return p.init.apply(this, arguments)
  }
}(jQuery);
(function (c) {
  c(function () {
    c(".make-switch").bootstrapSwitch()
  })
})(jQuery);
!function (c) {
  var k = function (p, d, f) {
    f && (f.stopPropagation(), f.preventDefault());
    this.$element = c(p);
    this.button = this.$newElement = null;
    this.options = c.extend({}, c.fn.selectpicker.defaults, this.$element.data(), "object" == typeof d && d);
    null == this.options.title && (this.options.title = this.$element.attr("title"));
    this.val = k.prototype.val;
    this.render = k.prototype.render;
    this.init()
  };
  k.prototype = {
    constructor: k, init: function (k) {
      var d = this;
      this.$element.hide();
      this.multiple = this.$element.prop("multiple");
      var f = void 0 !==
      this.$element.attr("class") ? this.$element.attr("class").split(/\s+/) : "", n = this.$element.attr("id");
      this.$element.after(this.createView());
      var u = this.$newElement = this.$element.next(".select"), z = this.$newElement.find(".dropdown-menu"), A = this.$newElement.find(".dropdown-arrow");
      z.find("li > a");
      var G = u.addClass("open").find(".dropdown-menu li > a").outerHeight();
      u.removeClass("open");
      k = z.find("li .divider").outerHeight(!0);
      var D = this.$newElement.offset().top, b = 0, W = this.$newElement.outerHeight();
      this.button =
        this.$newElement.find("> button");
      void 0 !== n && (this.button.attr("id", n), c('label[for="' + n + '"]').click(function () {
        u.find("button#" + n).focus()
      }));
      for (var L = 0; L < f.length; L++)"selectpicker" != f[L] && this.$newElement.addClass(f[L]);
      this.multiple && this.$newElement.addClass("select-multiple");
      this.button.addClass(this.options.style);
      z.addClass(this.options.menuStyle);
      A.addClass(function () {
        if (d.options.menuStyle)return d.options.menuStyle.replace("dropdown-", "dropdown-arrow-")
      });
      this.checkDisabled();
      this.checkTabIndex();
      this.clickListener();
      var T = parseInt(z.css("padding-top")) + parseInt(z.css("padding-bottom")) + parseInt(z.css("border-top-width")) + parseInt(z.css("border-bottom-width"));
      "auto" == this.options.size ? (k = function () {
        var d = D - c(window).scrollTop(), l = c(window).innerHeight(), f = T + parseInt(z.css("margin-top")) + parseInt(z.css("margin-bottom")) + 2;
        b = l - d - W - f;
        u.hasClass("dropup") && (b = d - f);
        z.css({"max-height": b + "px", "overflow-y": "auto", "min-height": 3 * G + "px"})
      }, k(), c(window).resize(k), c(window).scroll(k), window.MutationObserver ?
        (new MutationObserver(k)).observe(this.$element.get(0), {childList: !0}) : this.$element.bind("DOMNodeInserted", k)) : this.options.size && "auto" != this.options.size && z.find("li").length > this.options.size && (f = z.find("li > *").filter(":not(.divider)").slice(0, this.options.size).last().parent().index(), f = z.find("li").slice(0, f + 1).find(".divider").length, b = G * this.options.size + f * k + T, z.css({
        "max-height": b + "px",
        "overflow-y": "scroll"
      }));
      window.MutationObserver ? (new MutationObserver(c.proxy(this.reloadLi, this))).observe(this.$element.get(0),
        {childList: !0}) : this.$element.bind("DOMNodeInserted", c.proxy(this.reloadLi, this));
      this.render()
    }, createDropdown: function () {
      return c("<div class='btn-group select'><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span>&nbsp;<span class='caret'></span></button><span class='dropdown-arrow'></span><ul class='dropdown-menu' role='menu'></ul></div>")
    }, createView: function () {
      var c = this.createDropdown(), d = this.createLi();
      c.find("ul").append(d);
      return c
    },
    reloadLi: function () {
      this.destroyLi();
      $li = this.createLi();
      this.$newElement.find("ul").append($li);
      this.render()
    }, destroyLi: function () {
      this.$newElement.find("li").remove()
    }, createLi: function () {
      var k = this, d = [], f = [], n = "";
      this.$element.find("option").each(function () {
        d.push(c(this).text())
      });
      this.$element.find("option").each(function (d) {
        d = void 0 !== c(this).attr("class") ? c(this).attr("class") : "";
        var n = c(this).text(), u = void 0 !== c(this).data("subtext") ? '<small class="muted">' + c(this).data("subtext") + "</small>" :
          "", n = n + u;
        if (c(this).parent().is("optgroup") && !0 != c(this).data("divider"))if (0 == c(this).index()) {
          var u = c(this).parent().attr("label"), D = void 0 !== c(this).parent().data("subtext") ? '<small class="muted">' + c(this).parent().data("subtext") + "</small>" : "", u = u + D;
          0 != c(this)[0].index ? f.push('<div class="divider"></div><dt>' + u + "</dt>" + k.createA(n, "opt " + d)) : f.push("<dt>" + u + "</dt>" + k.createA(n, "opt " + d))
        } else f.push(k.createA(n, "opt " + d)); else!0 == c(this).data("divider") ? f.push('<div class="divider"></div>') : !0 ==
        c(this).data("hidden") ? f.push("") : f.push(k.createA(n, d))
      });
      if (0 < d.length)for (var u = 0; u < d.length; u++)this.$element.find("option").eq(u), n += "<li rel=" + u + ">" + f[u] + "</li>";
      0 != this.$element.find("option:selected").length || k.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected");
      return c(n)
    }, createA: function (c, d) {
      return '<a tabindex="-1" href="#" class="' + d + '"><span class="pull-left">' + c + "</span></a>"
    }, render: function () {
      var k = this;
      if ("auto" == this.options.width) {
        var d =
          this.$newElement.find(".dropdown-menu").css("width");
        this.$newElement.css("width", d)
      } else this.options.width && "auto" != this.options.width && this.$newElement.css("width", this.options.width);
      this.$element.find("option").each(function (d) {
        k.setDisabled(d, c(this).is(":disabled") || c(this).parent().is(":disabled"));
        k.setSelected(d, c(this).is(":selected"))
      });
      var d = this.$element.find("option:selected").map(function (d, f) {
        return void 0 != c(this).attr("title") ? c(this).attr("title") : c(this).text()
      }).toArray(), f =
        d.join(", ");
      if (k.multiple && -1 < k.options.selectedTextFormat.indexOf("count")) {
        var n = k.options.selectedTextFormat.split(">");
        if (1 < n.length && d.length > n[1] || 1 == n.length && 2 <= d.length)f = d.length + " of " + this.$element.find("option").length + " selected"
      }
      f || (f = void 0 != k.options.title ? k.options.title : k.options.noneSelectedText);
      this.$element.next(".select").find(".filter-option").html(f)
    }, setSelected: function (c, d) {
      d ? this.$newElement.find("li").eq(c).addClass("selected") : this.$newElement.find("li").eq(c).removeClass("selected")
    },
    setDisabled: function (c, d) {
      d ? this.$newElement.find("li").eq(c).addClass("disabled") : this.$newElement.find("li").eq(c).removeClass("disabled")
    }, checkDisabled: function () {
      this.$element.is(":disabled") && (this.button.addClass("disabled"), this.button.click(function (c) {
        c.preventDefault()
      }))
    }, checkTabIndex: function () {
      if (this.$element.is("[tabindex]")) {
        var c = this.$element.attr("tabindex");
        this.button.attr("tabindex", c)
      }
    }, clickListener: function () {
      var k = this;
      c("body").on("touchstart.dropdown", ".dropdown-menu",
        function (c) {
          c.stopPropagation()
        });
      this.$newElement.on("click", "li a", function (d) {
        var f = c(this).parent().index(), n = c(this).parent(), u = n.parents(".select");
        k.multiple && d.stopPropagation();
        d.preventDefault();
        u.prev("select").not(":disabled") && !c(this).parent().hasClass("disabled") && (k.multiple ? u.prev("select").find("option").eq(f).prop("selected") ? u.prev("select").find("option").eq(f).removeAttr("selected") : u.prev("select").find("option").eq(f).prop("selected", !0).attr("selected", "selected") : (u.prev("select").find("option").removeAttr("selected"),
          u.prev("select").find("option").eq(f).prop("selected", !0).attr("selected", "selected")), u.find(".filter-option").html(n.text()), u.find("button").focus(), u.prev("select").trigger("change"))
      });
      this.$newElement.on("click", "li.disabled a, li dt, li .divider", function (d) {
        d.preventDefault();
        d.stopPropagation();
        $select = c(this).parent().parents(".select");
        $select.find("button").focus()
      });
      this.$element.on("change", function (c) {
        k.render()
      })
    }, val: function (c) {
      return void 0 != c ? (this.$element.val(c), this.$element.trigger("change"),
        this.$element) : this.$element.val()
    }
  };
  c.fn.selectpicker = function (p, d) {
    var f = arguments, n, u = this.each(function () {
      var u = c(this), A = u.data("selectpicker"), G = "object" == typeof p && p;
      if (A)for (var D in p)A[D] = p[D]; else u.data("selectpicker", A = new k(this, G, d));
      "string" == typeof p && (property = p, A[property]instanceof Function ? ([].shift.apply(f), n = A[property].apply(A, f)) : n = A[property])
    });
    return void 0 != n ? n : u
  };
  c.fn.selectpicker.defaults = {
    style: null, size: "auto", title: null, selectedTextFormat: "values", noneSelectedText: "Nothing selected",
    width: null, menuStyle: null, toggleSize: null
  }
}(window.jQuery);
(function () {
  (function (c) {
    var k = this || (0, eval)("this"), p = k.document, d = k.navigator, f = k.jQuery, n = k.JSON;
    (function (c) {
      "function" === typeof require && "object" === typeof exports && "object" === typeof module ? c(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], c) : c(k.ko = {})
    })(function (u) {
      function z(b, c) {
        return null === b || typeof b in W ? b === c : !1
      }

      function A(b, d) {
        var f;
        return function () {
          f || (f = setTimeout(function () {
            f = c;
            b()
          }, d))
        }
      }

      function G(b, c) {
        var d;
        return function () {
          clearTimeout(d);
          d = setTimeout(b, c)
        }
      }

      function D(c, d, f, k) {
        b.d[c] = {
          init: function (c, l, n, p, m) {
            var w, y;
            b.ba(function () {
              var n = b.a.c(l()), x = !f !== !n, p = !y;
              if (p || d || x !== w)p && b.ca.fa() && (y = b.a.lb(b.e.childNodes(c), !0)), x ? (p || b.e.U(c, b.a.lb(y)), b.gb(k ? k(m, n) : m, c)) : b.e.da(c), w = x
            }, null, {G: c});
            return {controlsDescendantBindings: !0}
          }
        };
        b.g.aa[c] = !1;
        b.e.Q[c] = !0
      }

      var b = "undefined" !== typeof u ? u : {};
      b.b = function (c, d) {
        for (var f = c.split("."), k = b, n = 0; n < f.length - 1; n++)k = k[f[n]];
        k[f[f.length - 1]] = d
      };
      b.s = function (b, c, d) {
        b[c] = d
      };
      b.version = "3.1.0";
      b.b("version", b.version);
      b.a = function () {
        function l(b, c) {
          for (var d in b)b.hasOwnProperty(d) && c(d, b[d])
        }

        function q(b, c) {
          if (c)for (var d in c)c.hasOwnProperty(d) && (b[d] = c[d]);
          return b
        }

        function s(b, c) {
          b.__proto__ = c;
          return b
        }

        var v = {__proto__: []}instanceof Array, P = {}, E = {};
        P[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
        P.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
        l(P, function (b, c) {
          if (c.length)for (var d =
            0, l = c.length; d < l; d++)E[c[d]] = b
        });
        var x = {propertychange: !0}, F = p && function () {
            for (var b = 3, d = p.createElement("div"), l = d.getElementsByTagName("i"); d.innerHTML = "\x3c!--[if gt IE " + ++b + "]><i></i><![endif]--\x3e", l[0];);
            return 4 < b ? b : c
          }();
        return {
          mb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], r: function (b, c) {
            for (var d = 0, l = b.length; d < l; d++)c(b[d], d)
          }, l: function (b, c) {
            if ("function" == typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(b, c);
            for (var d = 0, l = b.length; d < l; d++)if (b[d] ===
              c)return d;
            return -1
          }, hb: function (b, c, d) {
            for (var l = 0, f = b.length; l < f; l++)if (c.call(d, b[l], l))return b[l];
            return null
          }, ma: function (c, d) {
            var l = b.a.l(c, d);
            0 < l ? c.splice(l, 1) : 0 === l && c.shift()
          }, ib: function (c) {
            c = c || [];
            for (var d = [], l = 0, f = c.length; l < f; l++)0 > b.a.l(d, c[l]) && d.push(c[l]);
            return d
          }, ya: function (b, c) {
            b = b || [];
            for (var d = [], l = 0, f = b.length; l < f; l++)d.push(c(b[l], l));
            return d
          }, la: function (b, c) {
            b = b || [];
            for (var d = [], l = 0, f = b.length; l < f; l++)c(b[l], l) && d.push(b[l]);
            return d
          }, $: function (b, c) {
            if (c instanceof Array)b.push.apply(b,
              c); else for (var d = 0, l = c.length; d < l; d++)b.push(c[d]);
            return b
          }, Y: function (c, d, l) {
            var f = b.a.l(b.a.Sa(c), d);
            0 > f ? l && c.push(d) : l || c.splice(f, 1)
          }, na: v, extend: q, ra: s, sa: v ? s : q, A: l, Oa: function (b, c) {
            if (!b)return b;
            var d = {}, l;
            for (l in b)b.hasOwnProperty(l) && (d[l] = c(b[l], l, b));
            return d
          }, Fa: function (c) {
            for (; c.firstChild;)b.removeNode(c.firstChild)
          }, ec: function (c) {
            c = b.a.R(c);
            for (var d = p.createElement("div"), l = 0, f = c.length; l < f; l++)d.appendChild(b.M(c[l]));
            return d
          }, lb: function (c, d) {
            for (var l = 0, f = c.length, q = []; l <
            f; l++) {
              var k = c[l].cloneNode(!0);
              q.push(d ? b.M(k) : k)
            }
            return q
          }, U: function (c, d) {
            b.a.Fa(c);
            if (d)for (var l = 0, f = d.length; l < f; l++)c.appendChild(d[l])
          }, Bb: function (c, d) {
            var l = c.nodeType ? [c] : c;
            if (0 < l.length) {
              for (var f = l[0], q = f.parentNode, k = 0, s = d.length; k < s; k++)q.insertBefore(d[k], f);
              k = 0;
              for (s = l.length; k < s; k++)b.removeNode(l[k])
            }
          }, ea: function (b, c) {
            if (b.length) {
              for (c = 8 === c.nodeType && c.parentNode || c; b.length && b[0].parentNode !== c;)b.shift();
              if (1 < b.length) {
                var d = b[0], l = b[b.length - 1];
                for (b.length = 0; d !== l;)if (b.push(d),
                    d = d.nextSibling, !d)return;
                b.push(l)
              }
            }
            return b
          }, Db: function (b, c) {
            7 > F ? b.setAttribute("selected", c) : b.selected = c
          }, ta: function (b) {
            return null === b || b === c ? "" : b.trim ? b.trim() : b.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
          }, oc: function (c, d) {
            for (var l = [], f = (c || "").split(d), q = 0, k = f.length; q < k; q++) {
              var s = b.a.ta(f[q]);
              "" !== s && l.push(s)
            }
            return l
          }, kc: function (b, c) {
            b = b || "";
            return c.length > b.length ? !1 : b.substring(0, c.length) === c
          }, Sb: function (b, c) {
            if (b === c)return !0;
            if (11 === b.nodeType)return !1;
            if (c.contains)return c.contains(3 ===
            b.nodeType ? b.parentNode : b);
            if (c.compareDocumentPosition)return 16 == (c.compareDocumentPosition(b) & 16);
            for (; b && b != c;)b = b.parentNode;
            return !!b
          }, Ea: function (c) {
            return b.a.Sb(c, c.ownerDocument.documentElement)
          }, eb: function (c) {
            return !!b.a.hb(c, b.a.Ea)
          }, B: function (b) {
            return b && b.tagName && b.tagName.toLowerCase()
          }, q: function (c, d, l) {
            var q = F && x[d];
            if (!q && f)f(c).bind(d, l); else if (q || "function" != typeof c.addEventListener)if ("undefined" != typeof c.attachEvent) {
              var k = function (b) {
                l.call(c, b)
              }, s = "on" + d;
              c.attachEvent(s,
                k);
              b.a.u.ja(c, function () {
                c.detachEvent(s, k)
              })
            } else throw Error("Browser doesn't support addEventListener or attachEvent"); else c.addEventListener(d, l, !1)
          }, ha: function (c, d) {
            if (!c || !c.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
            var l;
            "input" === b.a.B(c) && c.type && "click" == d.toLowerCase() ? (l = c.type, l = "checkbox" == l || "radio" == l) : l = !1;
            if (f && !l)f(c).trigger(d); else if ("function" == typeof p.createEvent)if ("function" == typeof c.dispatchEvent)l = p.createEvent(E[d] || "HTMLEvents"),
              l.initEvent(d, !0, !0, k, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, c), c.dispatchEvent(l); else throw Error("The supplied element doesn't support dispatchEvent"); else if (l && c.click)c.click(); else if ("undefined" != typeof c.fireEvent)c.fireEvent("on" + d); else throw Error("Browser doesn't support triggering events");
          }, c: function (c) {
            return b.v(c) ? c() : c
          }, Sa: function (c) {
            return b.v(c) ? c.o() : c
          }, ua: function (c, d, l) {
            if (d) {
              var f = /\S+/g, q = c.className.match(f) || [];
              b.a.r(d.match(f), function (c) {
                b.a.Y(q, c, l)
              });
              c.className = q.join(" ")
            }
          }, Xa: function (d,
                           l) {
            var f = b.a.c(l);
            if (null === f || f === c)f = "";
            var q = b.e.firstChild(d);
            !q || 3 != q.nodeType || b.e.nextSibling(q) ? b.e.U(d, [d.ownerDocument.createTextNode(f)]) : q.data = f;
            b.a.Vb(d)
          }, Cb: function (b, c) {
            b.name = c;
            if (7 >= F)try {
              b.mergeAttributes(p.createElement("<input name='" + b.name + "'/>"), !1)
            } catch (d) {
            }
          }, Vb: function (b) {
            9 <= F && (b = 1 == b.nodeType ? b : b.parentNode, b.style && (b.style.zoom = b.style.zoom))
          }, Tb: function (b) {
            if (F) {
              var c = b.style.width;
              b.style.width = 0;
              b.style.width = c
            }
          }, ic: function (c, d) {
            c = b.a.c(c);
            d = b.a.c(d);
            for (var l =
              [], f = c; f <= d; f++)l.push(f);
            return l
          }, R: function (b) {
            for (var c = [], d = 0, l = b.length; d < l; d++)c.push(b[d]);
            return c
          }, mc: 6 === F, nc: 7 === F, oa: F, ob: function (c, d) {
            for (var l = b.a.R(c.getElementsByTagName("input")).concat(b.a.R(c.getElementsByTagName("textarea"))), f = "string" == typeof d ? function (b) {
              return b.name === d
            } : function (b) {
              return d.test(b.name)
            }, q = [], k = l.length - 1; 0 <= k; k--)f(l[k]) && q.push(l[k]);
            return q
          }, fc: function (c) {
            return "string" == typeof c && (c = b.a.ta(c)) ? n && n.parse ? n.parse(c) : (new Function("return " + c))() :
              null
          }, Ya: function (c, d, l) {
            if (!n || !n.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return n.stringify(b.a.c(c), d, l)
          }, gc: function (c, d, f) {
            f = f || {};
            var q = f.params || {}, k = f.includeFields || this.mb, s = c;
            if ("object" == typeof c && "form" === b.a.B(c))for (var s = c.action, v = k.length - 1; 0 <= v; v--)for (var n = b.a.ob(c, k[v]), x = n.length - 1; 0 <= x; x--)q[n[x].name] =
              n[x].value;
            d = b.a.c(d);
            var F = p.createElement("form");
            F.style.display = "none";
            F.action = s;
            F.method = "post";
            for (var E in d)c = p.createElement("input"), c.name = E, c.value = b.a.Ya(b.a.c(d[E])), F.appendChild(c);
            l(q, function (b, c) {
              var d = p.createElement("input");
              d.name = b;
              d.value = c;
              F.appendChild(d)
            });
            p.body.appendChild(F);
            f.submitter ? f.submitter(F) : F.submit();
            setTimeout(function () {
              F.parentNode.removeChild(F)
            }, 0)
          }
        }
      }();
      b.b("utils", b.a);
      b.b("utils.arrayForEach", b.a.r);
      b.b("utils.arrayFirst", b.a.hb);
      b.b("utils.arrayFilter",
        b.a.la);
      b.b("utils.arrayGetDistinctValues", b.a.ib);
      b.b("utils.arrayIndexOf", b.a.l);
      b.b("utils.arrayMap", b.a.ya);
      b.b("utils.arrayPushAll", b.a.$);
      b.b("utils.arrayRemoveItem", b.a.ma);
      b.b("utils.extend", b.a.extend);
      b.b("utils.fieldsIncludedWithJsonPost", b.a.mb);
      b.b("utils.getFormFields", b.a.ob);
      b.b("utils.peekObservable", b.a.Sa);
      b.b("utils.postJson", b.a.gc);
      b.b("utils.parseJson", b.a.fc);
      b.b("utils.registerEventHandler", b.a.q);
      b.b("utils.stringifyJson", b.a.Ya);
      b.b("utils.range", b.a.ic);
      b.b("utils.toggleDomNodeCssClass",
        b.a.ua);
      b.b("utils.triggerEvent", b.a.ha);
      b.b("utils.unwrapObservable", b.a.c);
      b.b("utils.objectForEach", b.a.A);
      b.b("utils.addOrRemoveItem", b.a.Y);
      b.b("unwrap", b.a.c);
      Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this, d = Array.prototype.slice.call(arguments);
        b = d.shift();
        return function () {
          return c.apply(b, d.concat(Array.prototype.slice.call(arguments)))
        }
      });
      b.a.f = new function () {
        function b(l, n) {
          var x = l[f];
          if (!x || "null" === x || !k[x]) {
            if (!n)return c;
            x = l[f] = "ko" + d++;
            k[x] = {}
          }
          return k[x]
        }

        var d = 0, f = "__ko__" + (new Date).getTime(), k = {};
        return {
          get: function (d, f) {
            var q = b(d, !1);
            return q === c ? c : q[f]
          }, set: function (d, f, q) {
            if (q !== c || b(d, !1) !== c)b(d, !0)[f] = q
          }, clear: function (b) {
            var c = b[f];
            return c ? (delete k[c], b[f] = null, !0) : !1
          }, L: function () {
            return d++ + f
          }
        }
      };
      b.b("utils.domData", b.a.f);
      b.b("utils.domData.clear", b.a.f.clear);
      b.a.u = new function () {
        function d(l, f) {
          var q = b.a.f.get(l, k);
          q === c && f && (q = [], b.a.f.set(l, k, q));
          return q
        }

        function q(c) {
          var f = d(c, !1);
          if (f)for (var f = f.slice(0), k = 0; k < f.length; k++)f[k](c);
          b.a.f.clear(c);
          b.a.u.cleanExternalData(c);
          if (n[c.nodeType])for (f = c.firstChild; c = f;)f = c.nextSibling, 8 === c.nodeType && q(c)
        }

        var k = b.a.f.L(), v = {1: !0, 8: !0, 9: !0}, n = {1: !0, 9: !0};
        return {
          ja: function (b, c) {
            if ("function" != typeof c)throw Error("Callback must be a function");
            d(b, !0).push(c)
          }, Ab: function (f, q) {
            var v = d(f, !1);
            v && (b.a.ma(v, q), 0 == v.length && b.a.f.set(f, k, c))
          }, M: function (c) {
            if (v[c.nodeType] && (q(c), n[c.nodeType])) {
              var d = [];
              b.a.$(d, c.getElementsByTagName("*"));
              for (var l = 0, f = d.length; l < f; l++)q(d[l])
            }
            return c
          },
          removeNode: function (c) {
            b.M(c);
            c.parentNode && c.parentNode.removeChild(c)
          }, cleanExternalData: function (b) {
            f && "function" == typeof f.cleanData && f.cleanData([b])
          }
        }
      };
      b.M = b.a.u.M;
      b.removeNode = b.a.u.removeNode;
      b.b("cleanNode", b.M);
      b.b("removeNode", b.removeNode);
      b.b("utils.domNodeDisposal", b.a.u);
      b.b("utils.domNodeDisposal.addDisposeCallback", b.a.u.ja);
      b.b("utils.domNodeDisposal.removeDisposeCallback", b.a.u.Ab);
      (function () {
        b.a.Qa = function (c) {
          var d;
          if (f)if (f.parseHTML)d = f.parseHTML(c) || []; else {
            if ((d = f.clean([c])) &&
              d[0]) {
              for (c = d[0]; c.parentNode && 11 !== c.parentNode.nodeType;)c = c.parentNode;
              c.parentNode && c.parentNode.removeChild(c)
            }
          } else {
            var s = b.a.ta(c).toLowerCase();
            d = p.createElement("div");
            s = s.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !s.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!s.indexOf("<td") || !s.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
            c = "ignored<div>" + s[1] + c + s[2] + "</div>";
            for ("function" == typeof k.innerShiv ? d.appendChild(k.innerShiv(c)) :
                   d.innerHTML = c; s[0]--;)d = d.lastChild;
            d = b.a.R(d.lastChild.childNodes)
          }
          return d
        };
        b.a.Va = function (d, q) {
          b.a.Fa(d);
          q = b.a.c(q);
          if (null !== q && q !== c)if ("string" != typeof q && (q = q.toString()), f)f(d).html(q); else for (var k = b.a.Qa(q), v = 0; v < k.length; v++)d.appendChild(k[v])
        }
      })();
      b.b("utils.parseHtmlFragment", b.a.Qa);
      b.b("utils.setHtml", b.a.Va);
      b.w = function () {
        function d(c, f) {
          if (c)if (8 == c.nodeType) {
            var q = b.w.xb(c.nodeValue);
            null != q && f.push({Rb: c, cc: q})
          } else if (1 == c.nodeType)for (var q = 0, k = c.childNodes, n = k.length; q < n; q++)d(k[q],
            f)
        }

        var f = {};
        return {
          Na: function (b) {
            if ("function" != typeof b)throw Error("You can only pass a function to ko.memoization.memoize()");
            var c = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            f[c] = b;
            return "\x3c!--[ko_memo:" + c + "]--\x3e"
          }, Hb: function (b, d) {
            var l = f[b];
            if (l === c)throw Error("Couldn't find any memo with ID " + b + ". Perhaps it's already been unmemoized.");
            try {
              return l.apply(null, d || []), !0
            } finally {
              delete f[b]
            }
          }, Ib: function (c, f) {
            var q =
              [];
            d(c, q);
            for (var k = 0, n = q.length; k < n; k++) {
              var p = q[k].Rb, m = [p];
              f && b.a.$(m, f);
              b.w.Hb(q[k].cc, m);
              p.nodeValue = "";
              p.parentNode && p.parentNode.removeChild(p)
            }
          }, xb: function (b) {
            return (b = b.match(/^\[ko_memo\:(.*?)\]$/)) ? b[1] : null
          }
        }
      }();
      b.b("memoization", b.w);
      b.b("memoization.memoize", b.w.Na);
      b.b("memoization.unmemoize", b.w.Hb);
      b.b("memoization.parseMemoText", b.w.xb);
      b.b("memoization.unmemoizeDomNodeAndDescendants", b.w.Ib);
      b.Ga = {
        throttle: function (c, d) {
          c.throttleEvaluation = d;
          var f = null;
          return b.h({
            read: c, write: function (b) {
              clearTimeout(f);
              f = setTimeout(function () {
                c(b)
              }, d)
            }
          })
        }, rateLimit: function (b, c) {
          var d, f, k;
          "number" == typeof c ? d = c : (d = c.timeout, f = c.method);
          k = "notifyWhenChangesStop" == f ? G : A;
          b.Ma(function (b) {
            return k(b, d)
          })
        }, notify: function (b, c) {
          b.equalityComparer = "always" == c ? null : z
        }
      };
      var W = {undefined: 1, "boolean": 1, number: 1, string: 1};
      b.b("extenders", b.Ga);
      b.Fb = function (c, d, f) {
        this.target = c;
        this.za = d;
        this.Qb = f;
        this.sb = !1;
        b.s(this, "dispose", this.F)
      };
      b.Fb.prototype.F = function () {
        this.sb = !0;
        this.Qb()
      };
      b.N = function () {
        b.a.sa(this, b.N.fn);
        this.H =
        {}
      };
      u = {
        V: function (c, d, f) {
          var k = this;
          f = f || "change";
          var n = new b.Fb(k, d ? c.bind(d) : c, function () {
            b.a.ma(k.H[f], n)
          });
          k.o && k.o();
          k.H[f] || (k.H[f] = []);
          k.H[f].push(n);
          return n
        }, notifySubscribers: function (c, d) {
          d = d || "change";
          if (this.qb(d))try {
            b.k.jb();
            for (var f = this.H[d].slice(0), k = 0, n; n = f[k]; ++k)n.sb || n.za(c)
          } finally {
            b.k.end()
          }
        }, Ma: function (c) {
          var d = this, f = b.v(d), k, n, p;
          d.ia || (d.ia = d.notifySubscribers, d.notifySubscribers = function (b, c) {
            c && "change" !== c ? "beforeChange" === c ? d.bb(b) : d.ia(b, c) : d.cb(b)
          });
          var x = c(function () {
            f &&
            p === d && (p = d());
            k = !1;
            d.Ka(n, p) && d.ia(n = p)
          });
          d.cb = function (b) {
            k = !0;
            p = b;
            x()
          };
          d.bb = function (b) {
            k || (n = b, d.ia(b, "beforeChange"))
          }
        }, qb: function (b) {
          return this.H[b] && this.H[b].length
        }, Wb: function () {
          var c = 0;
          b.a.A(this.H, function (b, d) {
            c += d.length
          });
          return c
        }, Ka: function (b, c) {
          return !this.equalityComparer || !this.equalityComparer(b, c)
        }, extend: function (c) {
          var d = this;
          c && b.a.A(c, function (c, l) {
            var f = b.Ga[c];
            "function" == typeof f && (d = f(d, l) || d)
          });
          return d
        }
      };
      b.s(u, "subscribe", u.V);
      b.s(u, "extend", u.extend);
      b.s(u, "getSubscriptionsCount",
        u.Wb);
      b.a.na && b.a.ra(u, Function.prototype);
      b.N.fn = u;
      b.tb = function (b) {
        return null != b && "function" == typeof b.V && "function" == typeof b.notifySubscribers
      };
      b.b("subscribable", b.N);
      b.b("isSubscribable", b.tb);
      b.ca = b.k = function () {
        function c(b) {
          f.push(k);
          k = b
        }

        function d() {
          k = f.pop()
        }

        var f = [], k, n = 0;
        return {
          jb: c, end: d, zb: function (c) {
            if (k) {
              if (!b.tb(c))throw Error("Only subscribable things can act as dependencies");
              k.za(c, c.Kb || (c.Kb = ++n))
            }
          }, t: function (b, f, k) {
            try {
              return c(), b.apply(f, k || [])
            } finally {
              d()
            }
          }, fa: function () {
            if (k)return k.ba.fa()
          },
          pa: function () {
            if (k)return k.pa
          }
        }
      }();
      b.b("computedContext", b.ca);
      b.b("computedContext.getDependenciesCount", b.ca.fa);
      b.b("computedContext.isInitial", b.ca.pa);
      b.m = function (c) {
        function d() {
          if (0 < arguments.length)return d.Ka(f, arguments[0]) && (d.P(), f = arguments[0], d.O()), this;
          b.k.zb(d);
          return f
        }

        var f = c;
        b.N.call(d);
        b.a.sa(d, b.m.fn);
        d.o = function () {
          return f
        };
        d.O = function () {
          d.notifySubscribers(f)
        };
        d.P = function () {
          d.notifySubscribers(f, "beforeChange")
        };
        b.s(d, "peek", d.o);
        b.s(d, "valueHasMutated", d.O);
        b.s(d, "valueWillMutate",
          d.P);
        return d
      };
      b.m.fn = {equalityComparer: z};
      var L = b.m.hc = "__ko_proto__";
      b.m.fn[L] = b.m;
      b.a.na && b.a.ra(b.m.fn, b.N.fn);
      b.Ha = function (d, f) {
        return null === d || d === c || d[L] === c ? !1 : d[L] === f ? !0 : b.Ha(d[L], f)
      };
      b.v = function (c) {
        return b.Ha(c, b.m)
      };
      b.ub = function (c) {
        return "function" == typeof c && c[L] === b.m || "function" == typeof c && c[L] === b.h && c.Yb ? !0 : !1
      };
      b.b("observable", b.m);
      b.b("isObservable", b.v);
      b.b("isWriteableObservable", b.ub);
      b.T = function (c) {
        c = c || [];
        if ("object" != typeof c || !("length"in c))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
        c = b.m(c);
        b.a.sa(c, b.T.fn);
        return c.extend({trackArrayChanges: !0})
      };
      b.T.fn = {
        remove: function (c) {
          for (var d = this.o(), f = [], k = "function" != typeof c || b.v(c) ? function (b) {
            return b === c
          } : c, n = 0; n < d.length; n++) {
            var p = d[n];
            k(p) && (0 === f.length && this.P(), f.push(p), d.splice(n, 1), n--)
          }
          f.length && this.O();
          return f
        }, removeAll: function (d) {
          if (d === c) {
            var f = this.o(), k = f.slice(0);
            this.P();
            f.splice(0, f.length);
            this.O();
            return k
          }
          return d ? this.remove(function (c) {
            return 0 <= b.a.l(d, c)
          }) : []
        }, destroy: function (c) {
          var d = this.o(), f =
            "function" != typeof c || b.v(c) ? function (b) {
              return b === c
            } : c;
          this.P();
          for (var k = d.length - 1; 0 <= k; k--)f(d[k]) && (d[k]._destroy = !0);
          this.O()
        }, destroyAll: function (d) {
          return d === c ? this.destroy(function () {
            return !0
          }) : d ? this.destroy(function (c) {
            return 0 <= b.a.l(d, c)
          }) : []
        }, indexOf: function (c) {
          var d = this();
          return b.a.l(d, c)
        }, replace: function (b, c) {
          var d = this.indexOf(b);
          0 <= d && (this.P(), this.o()[d] = c, this.O())
        }
      };
      b.a.r("pop push reverse shift sort splice unshift".split(" "), function (c) {
        b.T.fn[c] = function () {
          var b = this.o();
          this.P();
          this.kb(b, c, arguments);
          b = b[c].apply(b, arguments);
          this.O();
          return b
        }
      });
      b.a.r(["slice"], function (c) {
        b.T.fn[c] = function () {
          var b = this();
          return b[c].apply(b, arguments)
        }
      });
      b.a.na && b.a.ra(b.T.fn, b.m.fn);
      b.b("observableArray", b.T);
      b.Ga.trackArrayChanges = function (c) {
        function d() {
          if (!f) {
            f = !0;
            var q = c.notifySubscribers;
            c.notifySubscribers = function (b, c) {
              c && "change" !== c || ++n;
              return q.apply(this, arguments)
            };
            var p = [].concat(c.o() || []);
            k = null;
            c.V(function (d) {
              d = [].concat(d || []);
              if (c.qb("arrayChange")) {
                var f;
                if (!k || 1 < n)k = b.a.Aa(p, d, {sparse: !0});
                f = k;
                f.length && c.notifySubscribers(f, "arrayChange")
              }
              p = d;
              k = null;
              n = 0
            })
          }
        }

        if (!c.kb) {
          var f = !1, k = null, n = 0, p = c.V;
          c.V = c.subscribe = function (b, c, f) {
            "arrayChange" === f && d();
            return p.apply(this, arguments)
          };
          c.kb = function (c, d, l) {
            function q(b, c, d) {
              return p[p.length] = {status: b, value: c, index: d}
            }

            if (f && !n) {
              var p = [], E = c.length, M = l.length, C = 0;
              switch (d) {
                case "push":
                  C = E;
                case "unshift":
                  for (d = 0; d < M; d++)q("added", l[d], C + d);
                  break;
                case "pop":
                  C = E - 1;
                case "shift":
                  E && q("deleted", c[C], C);
                  break;
                case "splice":
                  d = Math.min(Math.max(0, 0 > l[0] ? E + l[0] : l[0]), E);
                  for (var E = 1 === M ? E : Math.min(d + (l[1] || 0), E), M = d + M - 2, C = Math.max(E, M), N = [], U = [], u = 2; d < C; ++d, ++u)d < E && U.push(q("deleted", c[d], d)), d < M && N.push(q("added", l[u], d));
                  b.a.nb(U, N);
                  break;
                default:
                  return
              }
              k = p
            }
          }
        }
      };
      b.ba = b.h = function (c, d, f) {
        function k() {
          M = !0;
          b.a.A(I, function (b, c) {
            c.F()
          });
          I = {};
          D = 0;
          w = !1
        }

        function n() {
          var b = x.throttleEvaluation;
          b && 0 <= b ? (clearTimeout(G), G = setTimeout(p, b)) : x.wa ? x.wa() : p()
        }

        function p() {
          if (!y && !M) {
            if (z && z()) {
              if (!Q) {
                A();
                return
              }
            } else Q = !1;
            y = !0;
            try {
              var c = I, f = D;
              b.k.jb({
                za: function (b, d) {
                  M || (f && c[d] ? (I[d] = c[d], ++D, delete c[d], --f) : I[d] || (I[d] = b.V(n), ++D))
                }, ba: x, pa: !D
              });
              I = {};
              D = 0;
              try {
                var l = d ? C.call(d) : C()
              } finally {
                b.k.end(), f && b.a.A(c, function (b, c) {
                  c.F()
                }), w = !1
              }
              x.Ka(m, l) && (x.notifySubscribers(m, "beforeChange"), m = l, x.wa && !x.throttleEvaluation || x.notifySubscribers(m))
            } finally {
              y = !1
            }
            D || A()
          }
        }

        function x() {
          if (0 < arguments.length) {
            if ("function" === typeof N)N.apply(d, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            return this
          }
          w && p();
          b.k.zb(x);
          return m
        }

        function F() {
          return w || 0 < D
        }

        var m, w = !0, y = !1, Q = !1, M = !1, C = c;
        C && "object" == typeof C ? (f = C, C = f.read) : (f = f || {}, C || (C = f.read));
        if ("function" != typeof C)throw Error("Pass a function that returns the value of the ko.computed");
        var N = f.write, U = f.disposeWhenNodeIsRemoved || f.G || null, u = f.disposeWhen || f.Da, z = u, A = k, I = {}, D = 0, G = null;
        d || (d = f.owner);
        b.N.call(x);
        b.a.sa(x, b.h.fn);
        x.o = function () {
          w && !D && p();
          return m
        };
        x.fa = function () {
          return D
        };
        x.Yb = "function" === typeof f.write;
        x.F = function () {
          A()
        };
        x.ga = F;
        var L = x.Ma;
        x.Ma = function (b) {
          L.call(x, b);
          x.wa = function () {
            x.bb(m);
            w = !0;
            x.cb(x)
          }
        };
        b.s(x, "peek", x.o);
        b.s(x, "dispose", x.F);
        b.s(x, "isActive", x.ga);
        b.s(x, "getDependenciesCount", x.fa);
        U && (Q = !0, U.nodeType && (z = function () {
          return !b.a.Ea(U) || u && u()
        }));
        !0 !== f.deferEvaluation && p();
        U && F() && U.nodeType && (A = function () {
          b.a.u.Ab(U, A);
          k()
        }, b.a.u.ja(U, A));
        return x
      };
      b.$b = function (c) {
        return b.Ha(c, b.h)
      };
      u = b.m.hc;
      b.h[u] = b.m;
      b.h.fn = {equalityComparer: z};
      b.h.fn[u] = b.h;
      b.a.na && b.a.ra(b.h.fn, b.N.fn);
      b.b("dependentObservable",
        b.h);
      b.b("computed", b.h);
      b.b("isComputed", b.$b);
      (function () {
        function d(b, n, p) {
          p = p || new k;
          b = n(b);
          if ("object" != typeof b || null === b || b === c || b instanceof Date || b instanceof String || b instanceof Number || b instanceof Boolean)return b;
          var x = b instanceof Array ? [] : {};
          p.save(b, x);
          f(b, function (f) {
            var m = n(b[f]);
            switch (typeof m) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                x[f] = m;
                break;
              case "object":
              case "undefined":
                var k = p.get(m);
                x[f] = k !== c ? k : d(m, n, p)
            }
          });
          return x
        }

        function f(b, c) {
          if (b instanceof Array) {
            for (var d =
              0; d < b.length; d++)c(d);
            "function" == typeof b.toJSON && c("toJSON")
          } else for (d in b)c(d)
        }

        function k() {
          this.keys = [];
          this.ab = []
        }

        b.Gb = function (c) {
          if (0 == arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
          return d(c, function (c) {
            for (var d = 0; b.v(c) && 10 > d; d++)c = c();
            return c
          })
        };
        b.toJSON = function (c, d, f) {
          c = b.Gb(c);
          return b.a.Ya(c, d, f)
        };
        k.prototype = {
          save: function (c, d) {
            var f = b.a.l(this.keys, c);
            0 <= f ? this.ab[f] = d : (this.keys.push(c), this.ab.push(d))
          }, get: function (d) {
            d = b.a.l(this.keys,
              d);
            return 0 <= d ? this.ab[d] : c
          }
        }
      })();
      b.b("toJS", b.Gb);
      b.b("toJSON", b.toJSON);
      (function () {
        b.i = {
          p: function (d) {
            switch (b.a.B(d)) {
              case "option":
                return !0 === d.__ko__hasDomDataOptionValue__ ? b.a.f.get(d, b.d.options.Pa) : 7 >= b.a.oa ? d.getAttributeNode("value") && d.getAttributeNode("value").specified ? d.value : d.text : d.value;
              case "select":
                return 0 <= d.selectedIndex ? b.i.p(d.options[d.selectedIndex]) : c;
              default:
                return d.value
            }
          }, X: function (d, f, k) {
            switch (b.a.B(d)) {
              case "option":
                switch (typeof f) {
                  case "string":
                    b.a.f.set(d, b.d.options.Pa,
                      c);
                    "__ko__hasDomDataOptionValue__"in d && delete d.__ko__hasDomDataOptionValue__;
                    d.value = f;
                    break;
                  default:
                    b.a.f.set(d, b.d.options.Pa, f), d.__ko__hasDomDataOptionValue__ = !0, d.value = "number" === typeof f ? f : ""
                }
                break;
              case "select":
                if ("" === f || null === f)f = c;
                for (var n = -1, p = 0, E = d.options.length, x; p < E; ++p)if (x = b.i.p(d.options[p]), x == f || "" == x && f === c) {
                  n = p;
                  break
                }
                if (k || 0 <= n || f === c && 1 < d.size)d.selectedIndex = n;
                break;
              default:
                if (null === f || f === c)f = "";
                d.value = f
            }
          }
        }
      })();
      b.b("selectExtensions", b.i);
      b.b("selectExtensions.readValue",
        b.i.p);
      b.b("selectExtensions.writeValue", b.i.X);
      b.g = function () {
        function c(d) {
          d = b.a.ta(d);
          123 === d.charCodeAt(0) && (d = d.slice(1, -1));
          var f = [], l = d.match(k), q, s, x = 0;
          if (l) {
            l.push(",");
            for (var C = 0, N; N = l[C]; ++C) {
              var u = N.charCodeAt(0);
              if (44 === u) {
                if (0 >= x) {
                  q && f.push(s ? {key: q, value: s.join("")} : {unknown: q});
                  q = s = x = 0;
                  continue
                }
              } else if (58 === u) {
                if (!s)continue
              } else if (47 === u && C && 1 < N.length)(u = l[C - 1].match(n)) && !p[u[0]] && (d = d.substr(d.indexOf(N) + 1), l = d.match(k), l.push(","), C = -1, N = "/"); else if (40 === u || 123 === u || 91 ===
                u)++x; else if (41 === u || 125 === u || 93 === u)--x; else if (!q && !s) {
                q = 34 === u || 39 === u ? N.slice(1, -1) : N;
                continue
              }
              s ? s.push(N) : s = [N]
            }
          }
          return f
        }

        var d = ["true", "false", "null", "undefined"], f = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, k = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), n = /[\])"'A-Za-z0-9_$]+$/, p = {
          "in": 1,
          "return": 1,
          "typeof": 1
        }, x = {};
        return {
          aa: [], W: x, Ra: c, qa: function (k, m) {
            function n(c, l) {
              var m, k = b.getBindingHandler(c);
              if (k && k.preprocess ? l = k.preprocess(l, c, n) : 1) {
                if (k = x[c])m = l, 0 <= b.a.l(d, m) ? m = !1 : (k = m.match(f), m = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : m), k = m;
                k && v.push("'" + c + "':function(_z){" + m + "=_z}");
                M && (l = "function(){return " + l + " }");
                p.push("'" + c + "':" + l)
              }
            }

            m = m || {};
            var p = [], v = [], M = m.valueAccessors, C = "string" === typeof k ? c(k) : k;
            b.a.r(C, function (b) {
              n(b.key || b.unknown, b.value)
            });
            v.length && n("_ko_property_writers", "{" + v.join(",") + " }");
            return p.join(",")
          }, bc: function (b, c) {
            for (var d = 0; d < b.length; d++)if (b[d].key == c)return !0;
            return !1
          }, va: function (c, d, f, l, k) {
            if (c && b.v(c))!b.ub(c) || k && c.o() === l || c(l); else if ((c = d.get("_ko_property_writers")) && c[f])c[f](l)
          }
        }
      }();
      b.b("expressionRewriting", b.g);
      b.b("expressionRewriting.bindingRewriteValidators", b.g.aa);
      b.b("expressionRewriting.parseObjectLiteral", b.g.Ra);
      b.b("expressionRewriting.preProcessBindings", b.g.qa);
      b.b("expressionRewriting._twoWayBindings", b.g.W);
      b.b("jsonExpressionRewriting", b.g);
      b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", b.g.qa);
      (function () {
        function c(b) {
          return 8 ==
            b.nodeType && E.test(n ? b.text : b.nodeValue)
        }

        function d(b) {
          return 8 == b.nodeType && x.test(n ? b.text : b.nodeValue)
        }

        function f(b, k) {
          for (var n = b, s = 1, p = []; n = n.nextSibling;) {
            if (d(n) && (s--, 0 === s))return p;
            p.push(n);
            c(n) && s++
          }
          if (!k)throw Error("Cannot find closing comment tag to match: " + b.nodeValue);
          return null
        }

        function k(b, c) {
          var d = f(b, c);
          return d ? 0 < d.length ? d[d.length - 1].nextSibling : b.nextSibling : null
        }

        var n = p && "\x3c!--test--\x3e" === p.createComment("test").text, E = n ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
          x = n ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, F = {ul: !0, ol: !0};
        b.e = {
          Q: {}, childNodes: function (b) {
            return c(b) ? f(b) : b.childNodes
          }, da: function (d) {
            if (c(d)) {
              d = b.e.childNodes(d);
              for (var f = 0, k = d.length; f < k; f++)b.removeNode(d[f])
            } else b.a.Fa(d)
          }, U: function (d, f) {
            if (c(d)) {
              b.e.da(d);
              for (var k = d.nextSibling, q = 0, n = f.length; q < n; q++)k.parentNode.insertBefore(f[q], k)
            } else b.a.U(d, f)
          }, yb: function (b, d) {
            c(b) ? b.parentNode.insertBefore(d, b.nextSibling) : b.firstChild ? b.insertBefore(d, b.firstChild) : b.appendChild(d)
          }, rb: function (d,
                           f, k) {
            k ? c(d) ? d.parentNode.insertBefore(f, k.nextSibling) : k.nextSibling ? d.insertBefore(f, k.nextSibling) : d.appendChild(f) : b.e.yb(d, f)
          }, firstChild: function (b) {
            return c(b) ? !b.nextSibling || d(b.nextSibling) ? null : b.nextSibling : b.firstChild
          }, nextSibling: function (b) {
            c(b) && (b = k(b));
            return b.nextSibling && d(b.nextSibling) ? null : b.nextSibling
          }, Xb: c, lc: function (b) {
            return (b = (n ? b.text : b.nodeValue).match(E)) ? b[1] : null
          }, wb: function (f) {
            if (F[b.a.B(f)]) {
              var n = f.firstChild;
              if (n) {
                do if (1 === n.nodeType) {
                  var s;
                  s = n.firstChild;
                  var p = null;
                  if (s) {
                    do if (p)p.push(s); else if (c(s)) {
                      var x = k(s, !0);
                      x ? s = x : p = [s]
                    } else d(s) && (p = [s]); while (s = s.nextSibling)
                  }
                  if (s = p)for (p = n.nextSibling, x = 0; x < s.length; x++)p ? f.insertBefore(s[x], p) : f.appendChild(s[x])
                } while (n = n.nextSibling)
              }
            }
          }
        }
      })();
      b.b("virtualElements", b.e);
      b.b("virtualElements.allowedBindings", b.e.Q);
      b.b("virtualElements.emptyNode", b.e.da);
      b.b("virtualElements.insertAfter", b.e.rb);
      b.b("virtualElements.prepend", b.e.yb);
      b.b("virtualElements.setDomNodeChildren", b.e.U);
      (function () {
        b.J = function () {
          this.Nb =
          {}
        };
        b.a.extend(b.J.prototype, {
          nodeHasBindings: function (c) {
            switch (c.nodeType) {
              case 1:
                return null != c.getAttribute("data-bind");
              case 8:
                return b.e.Xb(c);
              default:
                return !1
            }
          }, getBindings: function (b, c) {
            var d = this.getBindingsString(b, c);
            return d ? this.parseBindingsString(d, c, b) : null
          }, getBindingAccessors: function (b, c) {
            var d = this.getBindingsString(b, c);
            return d ? this.parseBindingsString(d, c, b, {valueAccessors: !0}) : null
          }, getBindingsString: function (c) {
            switch (c.nodeType) {
              case 1:
                return c.getAttribute("data-bind");
              case 8:
                return b.e.lc(c);
              default:
                return null
            }
          }, parseBindingsString: function (c, d, f, k) {
            try {
              var n = this.Nb, p = c + (k && k.valueAccessors || ""), x;
              if (!(x = n[p])) {
                var F, m = "with($context){with($data||{}){return{" + b.g.qa(c, k) + "}}}";
                F = new Function("$context", "$element", m);
                x = n[p] = F
              }
              return x(d, f)
            } catch (w) {
              throw w.message = "Unable to parse bindings.\nBindings value: " + c + "\nMessage: " + w.message, w;
            }
          }
        });
        b.J.instance = new b.J
      })();
      b.b("bindingProvider", b.J);
      (function () {
        function d(b) {
          return function () {
            return b
          }
        }

        function q(b) {
          return b()
        }

        function n(c) {
          return b.a.Oa(b.k.t(c), function (b, d) {
            return function () {
              return c()[d]
            }
          })
        }

        function p(b, c) {
          return n(this.getBindings.bind(this, b, c))
        }

        function u(c, d, f) {
          var l, k = b.e.firstChild(d), m = b.J.instance, q = m.preprocessNode;
          if (q) {
            for (; l = k;)k = b.e.nextSibling(l), q.call(m, l);
            k = b.e.firstChild(d)
          }
          for (; l = k;)k = b.e.nextSibling(l), E(c, l, f)
        }

        function E(c, d, f) {
          var l = !0, k = 1 === d.nodeType;
          k && b.e.wb(d);
          if (k && f || b.J.instance.nodeHasBindings(d))l = F(d, null, c, f).shouldBindDescendants;
          l && !w[b.a.B(d)] && u(c, d, !k)
        }

        function x(c) {
          var d =
            [], f = {}, l = [];
          b.a.A(c, function J(k) {
            if (!f[k]) {
              var m = b.getBindingHandler(k);
              m && (m.after && (l.push(k), b.a.r(m.after, function (d) {
                if (c[d]) {
                  if (-1 !== b.a.l(l, d))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + l.join(", "));
                  J(d)
                }
              }), l.length--), d.push({key: k, pb: m}));
              f[k] = !0
            }
          });
          return d
        }

        function F(d, f, l, k) {
          var m = b.a.f.get(d, y);
          if (!f) {
            if (m)throw Error("You cannot apply bindings multiple times to the same element.");
            b.a.f.set(d, y, !0)
          }
          !m && k && b.Eb(d, l);
          var n;
          if (f && "function" !== typeof f)n = f; else {
            var s = b.J.instance, w = s.getBindingAccessors || p, F = b.h(function () {
              (n = f ? f(l, d) : w.call(s, d, l)) && l.D && l.D();
              return n
            }, null, {G: d});
            n && F.ga() || (F = null)
          }
          var E;
          if (n) {
            var u = F ? function (b) {
              return function () {
                return q(F()[b])
              }
            } : function (b) {
              return n[b]
            }, P = function () {
              return b.a.Oa(F ? F() : n, q)
            };
            P.get = function (b) {
              return n[b] && q(u(b))
            };
            P.has = function (b) {
              return b in n
            };
            k = x(n);
            b.a.r(k, function (f) {
              var k = f.pb.init, m = f.pb.update, q = f.key;
              if (8 === d.nodeType && !b.e.Q[q])throw Error("The binding '" + q + "' cannot be used with virtual elements");
              try {
                "function" == typeof k && b.k.t(function () {
                  var b = k(d, u(q), P, l.$data, l);
                  if (b && b.controlsDescendantBindings) {
                    if (E !== c)throw Error("Multiple bindings (" + E + " and " + q + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                    E = q
                  }
                }), "function" == typeof m && b.h(function () {
                  m(d, u(q), P, l.$data, l)
                }, null, {G: d})
              } catch (s) {
                throw s.message = 'Unable to process binding "' + q + ": " + n[q] + '"\nMessage: ' + s.message, s;
              }
            })
          }
          return {shouldBindDescendants: E === c}
        }

        function m(c) {
          return c && c instanceof b.I ? c : new b.I(c)
        }

        b.d = {};
        var w = {script: !0};
        b.getBindingHandler = function (c) {
          return b.d[c]
        };
        b.I = function (d, f, l, k) {
          var m = this, q = "function" == typeof d && !b.v(d), n, s = b.h(function () {
            var c = q ? d() : d, n = b.a.c(c);
            f ? (f.D && f.D(), b.a.extend(m, f), s && (m.D = s)) : (m.$parents = [], m.$root = n, m.ko = b);
            m.$rawData = c;
            m.$data = n;
            l && (m[l] = n);
            k && k(m, f, n);
            return m.$data
          }, null, {
            Da: function () {
              return n && !b.a.eb(n)
            }, G: !0
          });
          s.ga() && (m.D = s, s.equalityComparer = null, n = [], s.Jb = function (d) {
            n.push(d);
            b.a.u.ja(d,
              function (d) {
                b.a.ma(n, d);
                n.length || (s.F(), m.D = s = c)
              })
          })
        };
        b.I.prototype.createChildContext = function (c, d, f) {
          return new b.I(c, this, d, function (b, c) {
            b.$parentContext = c;
            b.$parent = c.$data;
            b.$parents = (c.$parents || []).slice(0);
            b.$parents.unshift(b.$parent);
            f && f(b)
          })
        };
        b.I.prototype.extend = function (c) {
          return new b.I(this.D || this.$data, this, null, function (d, f) {
            d.$rawData = f.$rawData;
            b.a.extend(d, "function" == typeof c ? c() : c)
          })
        };
        var y = b.a.f.L(), Q = b.a.f.L();
        b.Eb = function (c, d) {
          if (2 == arguments.length)b.a.f.set(c, Q, d),
          d.D && d.D.Jb(c); else return b.a.f.get(c, Q)
        };
        b.xa = function (c, d, f) {
          1 === c.nodeType && b.e.wb(c);
          return F(c, d, m(f), !0)
        };
        b.Lb = function (c, f, k) {
          k = m(k);
          return b.xa(c, "function" === typeof f ? n(f.bind(null, k, c)) : b.a.Oa(f, d), k)
        };
        b.gb = function (b, c) {
          1 !== c.nodeType && 8 !== c.nodeType || u(m(b), c, !0)
        };
        b.fb = function (b, c) {
          !f && k.jQuery && (f = k.jQuery);
          if (c && 1 !== c.nodeType && 8 !== c.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
          c = c || k.document.body;
          E(m(b),
            c, !0)
        };
        b.Ca = function (d) {
          switch (d.nodeType) {
            case 1:
            case 8:
              var f = b.Eb(d);
              if (f)return f;
              if (d.parentNode)return b.Ca(d.parentNode)
          }
          return c
        };
        b.Pb = function (d) {
          return (d = b.Ca(d)) ? d.$data : c
        };
        b.b("bindingHandlers", b.d);
        b.b("applyBindings", b.fb);
        b.b("applyBindingsToDescendants", b.gb);
        b.b("applyBindingAccessorsToNode", b.xa);
        b.b("applyBindingsToNode", b.Lb);
        b.b("contextFor", b.Ca);
        b.b("dataFor", b.Pb)
      })();
      var T = {"class": "className", "for": "htmlFor"};
      b.d.attr = {
        update: function (d, f) {
          var k = b.a.c(f()) || {};
          b.a.A(k, function (f,
                             k) {
            k = b.a.c(k);
            var q = !1 === k || null === k || k === c;
            q && d.removeAttribute(f);
            8 >= b.a.oa && f in T ? (f = T[f], q ? d.removeAttribute(f) : d[f] = k) : q || d.setAttribute(f, k.toString());
            "name" === f && b.a.Cb(d, q ? "" : k.toString())
          })
        }
      };
      (function () {
        b.d.checked = {
          after: ["value", "attr"], init: function (d, f, k) {
            function n() {
              return k.has("checkedValue") ? b.a.c(k.get("checkedValue")) : d.value
            }

            function p() {
              var c = d.checked, x = y ? n() : c;
              if (!b.ca.pa() && (!F || c)) {
                var E = b.k.t(f);
                m ? w !== x ? (c && (b.a.Y(E, x, !0), b.a.Y(E, w, !1)), w = x) : b.a.Y(E, x, c) : b.g.va(E, k, "checked",
                  x, !0)
              }
            }

            function E() {
              var c = b.a.c(f());
              d.checked = m ? 0 <= b.a.l(c, n()) : x ? c : n() === c
            }

            var x = "checkbox" == d.type, F = "radio" == d.type;
            if (x || F) {
              var m = x && b.a.c(f())instanceof Array, w = m ? n() : c, y = F || m;
              F && !d.name && b.d.uniqueName.init(d, function () {
                return !0
              });
              b.ba(p, null, {G: d});
              b.a.q(d, "click", p);
              b.ba(E, null, {G: d})
            }
          }
        };
        b.g.W.checked = !0;
        b.d.checkedValue = {
          update: function (c, d) {
            c.value = b.a.c(d())
          }
        }
      })();
      b.d.css = {
        update: function (c, d) {
          var f = b.a.c(d());
          "object" == typeof f ? b.a.A(f, function (d, f) {
            f = b.a.c(f);
            b.a.ua(c, d, f)
          }) : (f = String(f ||
            ""), b.a.ua(c, c.__ko__cssValue, !1), c.__ko__cssValue = f, b.a.ua(c, f, !0))
        }
      };
      b.d.enable = {
        update: function (c, d) {
          var f = b.a.c(d());
          f && c.disabled ? c.removeAttribute("disabled") : f || c.disabled || (c.disabled = !0)
        }
      };
      b.d.disable = {
        update: function (c, d) {
          b.d.enable.update(c, function () {
            return !b.a.c(d())
          })
        }
      };
      b.d.event = {
        init: function (c, d, f, k, n) {
          var p = d() || {};
          b.a.A(p, function (p) {
            "string" == typeof p && b.a.q(c, p, function (c) {
              var l, w = d()[p];
              if (w) {
                try {
                  var y = b.a.R(arguments);
                  k = n.$data;
                  y.unshift(k);
                  l = w.apply(k, y)
                } finally {
                  !0 !== l && (c.preventDefault ?
                    c.preventDefault() : c.returnValue = !1)
                }
                !1 === f.get(p + "Bubble") && (c.cancelBubble = !0, c.stopPropagation && c.stopPropagation())
              }
            })
          })
        }
      };
      b.d.foreach = {
        vb: function (c) {
          return function () {
            var d = c(), f = b.a.Sa(d);
            if (!f || "number" == typeof f.length)return {foreach: d, templateEngine: b.K.Ja};
            b.a.c(d);
            return {
              foreach: f.data,
              as: f.as,
              includeDestroyed: f.includeDestroyed,
              afterAdd: f.afterAdd,
              beforeRemove: f.beforeRemove,
              afterRender: f.afterRender,
              beforeMove: f.beforeMove,
              afterMove: f.afterMove,
              templateEngine: b.K.Ja
            }
          }
        }, init: function (c,
                           d) {
          return b.d.template.init(c, b.d.foreach.vb(d))
        }, update: function (c, d, f, k, n) {
          return b.d.template.update(c, b.d.foreach.vb(d), f, k, n)
        }
      };
      b.g.aa.foreach = !1;
      b.e.Q.foreach = !0;
      b.d.hasfocus = {
        init: function (c, d, f) {
          function k(n) {
            c.__ko_hasfocusUpdating = !0;
            var p = c.ownerDocument;
            if ("activeElement"in p) {
              var m;
              try {
                m = p.activeElement
              } catch (v) {
                m = p.body
              }
              n = m === c
            }
            p = d();
            b.g.va(p, f, "hasfocus", n, !0);
            c.__ko_hasfocusLastValue = n;
            c.__ko_hasfocusUpdating = !1
          }

          var n = k.bind(null, !0), p = k.bind(null, !1);
          b.a.q(c, "focus", n);
          b.a.q(c, "focusin",
            n);
          b.a.q(c, "blur", p);
          b.a.q(c, "focusout", p)
        }, update: function (c, d) {
          var f = !!b.a.c(d());
          c.__ko_hasfocusUpdating || c.__ko_hasfocusLastValue === f || (f ? c.focus() : c.blur(), b.k.t(b.a.ha, null, [c, f ? "focusin" : "focusout"]))
        }
      };
      b.g.W.hasfocus = !0;
      b.d.hasFocus = b.d.hasfocus;
      b.g.W.hasFocus = !0;
      b.d.html = {
        init: function () {
          return {controlsDescendantBindings: !0}
        }, update: function (c, d) {
          b.a.Va(c, d())
        }
      };
      D("if");
      D("ifnot", !1, !0);
      D("with", !0, !1, function (b, c) {
        return b.createChildContext(c)
      });
      var ma = {};
      b.d.options = {
        init: function (c) {
          if ("select" !==
            b.a.B(c))throw Error("options binding applies only to SELECT elements");
          for (; 0 < c.length;)c.remove(0);
          return {controlsDescendantBindings: !0}
        }, update: function (d, f, k) {
          function n() {
            return b.a.la(d.options, function (b) {
              return b.selected
            })
          }

          function p(b, c, d) {
            var f = typeof c;
            return "function" == f ? c(b) : "string" == f ? b[c] : d
          }

          function E(c, f) {
            if (y.length) {
              var k = 0 <= b.a.l(y, b.i.p(f[0]));
              b.a.Db(f[0], k);
              u && !k && b.k.t(b.a.ha, null, [d, "change"])
            }
          }

          var x = 0 != d.length && d.multiple ? d.scrollTop : null, F = b.a.c(f()), m = k.get("optionsIncludeDestroyed");
          f = {};
          var w, y;
          y = d.multiple ? b.a.ya(n(), b.i.p) : 0 <= d.selectedIndex ? [b.i.p(d.options[d.selectedIndex])] : [];
          F && ("undefined" == typeof F.length && (F = [F]), w = b.a.la(F, function (d) {
            return m || d === c || null === d || !b.a.c(d._destroy)
          }), k.has("optionsCaption") && (F = b.a.c(k.get("optionsCaption")), null !== F && F !== c && w.unshift(ma)));
          var u = !1;
          f.beforeRemove = function (b) {
            d.removeChild(b)
          };
          F = E;
          k.has("optionsAfterRender") && (F = function (d, f) {
            E(0, f);
            b.k.t(k.get("optionsAfterRender"), null, [f[0], d !== ma ? d : c])
          });
          b.a.Ua(d, w, function (f, m,
                                 n) {
            n.length && (y = n[0].selected ? [b.i.p(n[0])] : [], u = !0);
            m = d.ownerDocument.createElement("option");
            f === ma ? (b.a.Xa(m, k.get("optionsCaption")), b.i.X(m, c)) : (n = p(f, k.get("optionsValue"), f), b.i.X(m, b.a.c(n)), f = p(f, k.get("optionsText"), n), b.a.Xa(m, f));
            return [m]
          }, f, F);
          b.k.t(function () {
            k.get("valueAllowUnset") && k.has("value") ? b.i.X(d, b.a.c(k.get("value")), !0) : (d.multiple ? y.length && n().length < y.length : y.length && 0 <= d.selectedIndex ? b.i.p(d.options[d.selectedIndex]) !== y[0] : y.length || 0 <= d.selectedIndex) && b.a.ha(d,
              "change")
          });
          b.a.Tb(d);
          x && 20 < Math.abs(x - d.scrollTop) && (d.scrollTop = x)
        }
      };
      b.d.options.Pa = b.a.f.L();
      b.d.selectedOptions = {
        after: ["options", "foreach"], init: function (c, d, f) {
          b.a.q(c, "change", function () {
            var k = d(), n = [];
            b.a.r(c.getElementsByTagName("option"), function (c) {
              c.selected && n.push(b.i.p(c))
            });
            b.g.va(k, f, "selectedOptions", n)
          })
        }, update: function (c, d) {
          if ("select" != b.a.B(c))throw Error("values binding applies only to SELECT elements");
          var f = b.a.c(d());
          f && "number" == typeof f.length && b.a.r(c.getElementsByTagName("option"),
            function (c) {
              var d = 0 <= b.a.l(f, b.i.p(c));
              b.a.Db(c, d)
            })
        }
      };
      b.g.W.selectedOptions = !0;
      b.d.style = {
        update: function (c, d) {
          var f = b.a.c(d() || {});
          b.a.A(f, function (d, f) {
            f = b.a.c(f);
            c.style[d] = f || ""
          })
        }
      };
      b.d.submit = {
        init: function (c, d, f, k, n) {
          if ("function" != typeof d())throw Error("The value for a submit binding must be a function");
          b.a.q(c, "submit", function (b) {
            var f, k = d();
            try {
              f = k.call(n.$data, c)
            } finally {
              !0 !== f && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
            }
          })
        }
      };
      b.d.text = {
        init: function () {
          return {controlsDescendantBindings: !0}
        },
        update: function (c, d) {
          b.a.Xa(c, d())
        }
      };
      b.e.Q.text = !0;
      b.d.uniqueName = {
        init: function (c, d) {
          if (d()) {
            var f = "ko_unique_" + ++b.d.uniqueName.Ob;
            b.a.Cb(c, f)
          }
        }
      };
      b.d.uniqueName.Ob = 0;
      b.d.value = {
        after: ["options", "foreach"], init: function (c, d, f) {
          function k() {
            x = !1;
            var n = d(), m = b.i.p(c);
            b.g.va(n, f, "value", m)
          }

          var n = ["change"], p = f.get("valueUpdate"), x = !1;
          p && ("string" == typeof p && (p = [p]), b.a.$(n, p), n = b.a.ib(n));
          !b.a.oa || "input" != c.tagName.toLowerCase() || "text" != c.type || "off" == c.autocomplete || c.form && "off" == c.form.autocomplete ||
          -1 != b.a.l(n, "propertychange") || (b.a.q(c, "propertychange", function () {
            x = !0
          }), b.a.q(c, "focus", function () {
            x = !1
          }), b.a.q(c, "blur", function () {
            x && k()
          }));
          b.a.r(n, function (d) {
            var f = k;
            b.a.kc(d, "after") && (f = function () {
              setTimeout(k, 0)
            }, d = d.substring(5));
            b.a.q(c, d, f)
          })
        }, update: function (c, d, f) {
          var k = b.a.c(d());
          d = b.i.p(c);
          if (k !== d)if ("select" === b.a.B(c)) {
            var n = f.get("valueAllowUnset");
            f = function () {
              b.i.X(c, k, n)
            };
            f();
            n || k === b.i.p(c) ? setTimeout(f, 0) : b.k.t(b.a.ha, null, [c, "change"])
          } else b.i.X(c, k)
        }
      };
      b.g.W.value = !0;
      b.d.visible =
      {
        update: function (c, d) {
          var f = b.a.c(d()), k = "none" != c.style.display;
          f && !k ? c.style.display = "" : !f && k && (c.style.display = "none")
        }
      };
      (function (c) {
        b.d[c] = {
          init: function (d, f, k, n, p) {
            return b.d.event.init.call(this, d, function () {
              var b = {};
              b[c] = f();
              return b
            }, k, n, p)
          }
        }
      })("click");
      b.C = function () {
      };
      b.C.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      };
      b.C.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      };
      b.C.prototype.makeTemplateSource =
        function (c, d) {
          if ("string" == typeof c) {
            d = d || p;
            var f = d.getElementById(c);
            if (!f)throw Error("Cannot find template with ID " + c);
            return new b.n.j(f)
          }
          if (1 == c.nodeType || 8 == c.nodeType)return new b.n.Z(c);
          throw Error("Unknown template type: " + c);
        };
      b.C.prototype.renderTemplate = function (b, c, d, f) {
        b = this.makeTemplateSource(b, f);
        return this.renderTemplateSource(b, c, d)
      };
      b.C.prototype.isTemplateRewritten = function (b, c) {
        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(b, c).data("isRewritten")
      };
      b.C.prototype.rewriteTemplate =
        function (b, c, d) {
          b = this.makeTemplateSource(b, d);
          c = c(b.text());
          b.text(c);
          b.data("isRewritten", !0)
        };
      b.b("templateEngine", b.C);
      b.Za = function () {
        function c(d, f, k, l) {
          d = b.g.Ra(d);
          for (var n = b.g.aa, m = 0; m < d.length; m++) {
            var q = d[m].key;
            if (n.hasOwnProperty(q)) {
              var p = n[q];
              if ("function" === typeof p) {
                if (q = p(d[m].value))throw Error(q);
              } else if (!p)throw Error("This template engine does not support the '" + q + "' binding within its templates");
            }
          }
          k = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + b.g.qa(d,
              {valueAccessors: !0}) + " } })()},'" + k.toLowerCase() + "')";
          return l.createJavaScriptEvaluatorBlock(k) + f
        }

        var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, f = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
        return {
          Ub: function (c, d, f) {
            d.isTemplateRewritten(c, f) || d.rewriteTemplate(c, function (c) {
              return b.Za.dc(c, d)
            }, f)
          }, dc: function (b, k) {
            return b.replace(d, function (b, d, f, m, n) {
              return c(n, d, f, k)
            }).replace(f, function (b, d) {
              return c(d, "\x3c!-- ko --\x3e",
                "#comment", k)
            })
          }, Mb: function (c, d) {
            return b.w.Na(function (f, k) {
              var l = f.nextSibling;
              l && l.nodeName.toLowerCase() === d && b.xa(l, c, k)
            })
          }
        }
      }();
      b.b("__tr_ambtns", b.Za.Mb);
      (function () {
        b.n = {};
        b.n.j = function (b) {
          this.j = b
        };
        b.n.j.prototype.text = function () {
          var c = b.a.B(this.j), c = "script" === c ? "text" : "textarea" === c ? "value" : "innerHTML";
          if (0 == arguments.length)return this.j[c];
          var d = arguments[0];
          "innerHTML" === c ? b.a.Va(this.j, d) : this.j[c] = d
        };
        var d = b.a.f.L() + "_";
        b.n.j.prototype.data = function (c) {
          if (1 === arguments.length)return b.a.f.get(this.j,
            d + c);
          b.a.f.set(this.j, d + c, arguments[1])
        };
        var f = b.a.f.L();
        b.n.Z = function (b) {
          this.j = b
        };
        b.n.Z.prototype = new b.n.j;
        b.n.Z.prototype.text = function () {
          if (0 == arguments.length) {
            var d = b.a.f.get(this.j, f) || {};
            d.$a === c && d.Ba && (d.$a = d.Ba.innerHTML);
            return d.$a
          }
          b.a.f.set(this.j, f, {$a: arguments[0]})
        };
        b.n.j.prototype.nodes = function () {
          if (0 == arguments.length)return (b.a.f.get(this.j, f) || {}).Ba;
          b.a.f.set(this.j, f, {Ba: arguments[0]})
        };
        b.b("templateSources", b.n);
        b.b("templateSources.domElement", b.n.j);
        b.b("templateSources.anonymousTemplate",
          b.n.Z)
      })();
      (function () {
        function d(c, f, k) {
          var l;
          for (f = b.e.nextSibling(f); c && (l = c) !== f;)c = b.e.nextSibling(l), k(l, c)
        }

        function f(c, k) {
          if (c.length) {
            var m = c[0], n = c[c.length - 1], q = m.parentNode, p = b.J.instance, s = p.preprocessNode;
            if (s) {
              d(m, n, function (b, c) {
                var d = b.previousSibling, f = s.call(p, b);
                f && (b === m && (m = f[0] || c), b === n && (n = f[f.length - 1] || d))
              });
              c.length = 0;
              if (!m)return;
              m === n ? c.push(m) : (c.push(m, n), b.a.ea(c, q))
            }
            d(m, n, function (c) {
              1 !== c.nodeType && 8 !== c.nodeType || b.fb(k, c)
            });
            d(m, n, function (c) {
              1 !== c.nodeType && 8 !==
              c.nodeType || b.w.Ib(c, [k])
            });
            b.a.ea(c, q)
          }
        }

        function k(b) {
          return b.nodeType ? b : 0 < b.length ? b[0] : null
        }

        function n(c, d, l, v, y) {
          y = y || {};
          var u = c && k(c), u = u && u.ownerDocument, E = y.templateEngine || p;
          b.Za.Ub(l, E, u);
          l = E.renderTemplate(l, v, y, u);
          if ("number" != typeof l.length || 0 < l.length && "number" != typeof l[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
          u = !1;
          switch (d) {
            case "replaceChildren":
              b.e.U(c, l);
              u = !0;
              break;
            case "replaceNode":
              b.a.Bb(c, l);
              u = !0;
              break;
            case "ignoreTargetNode":
              break;
            default:
              throw Error("Unknown renderMode: " +
                d);
          }
          u && (f(l, v), y.afterRender && b.k.t(y.afterRender, null, [l, v.$data]));
          return l
        }

        var p;
        b.Wa = function (d) {
          if (d != c && !(d instanceof b.C))throw Error("templateEngine must inherit from ko.templateEngine");
          p = d
        };
        b.Ta = function (d, f, l, q, y) {
          l = l || {};
          if ((l.templateEngine || p) == c)throw Error("Set a template engine before calling renderTemplate");
          y = y || "replaceChildren";
          if (q) {
            var u = k(q);
            return b.h(function () {
              var c = f && f instanceof b.I ? f : new b.I(b.a.c(f)), p = b.v(d) ? d() : "function" == typeof d ? d(c.$data, c) : d, c = n(q, y, p, c, l);
              "replaceNode" == y && (q = c, u = k(q))
            }, null, {
              Da: function () {
                return !u || !b.a.Ea(u)
              }, G: u && "replaceNode" == y ? u.parentNode : u
            })
          }
          return b.w.Na(function (c) {
            b.Ta(d, f, l, c, "replaceNode")
          })
        };
        b.jc = function (d, k, l, p, s) {
          function u(b, c) {
            f(c, z);
            l.afterRender && l.afterRender(c, b)
          }

          function E(b, c) {
            z = s.createChildContext(b, l.as, function (b) {
              b.$index = c
            });
            var f = "function" == typeof d ? d(b, z) : d;
            return n(null, "ignoreTargetNode", f, z, l)
          }

          var z;
          return b.h(function () {
            var d = b.a.c(k) || [];
            "undefined" == typeof d.length && (d = [d]);
            d = b.a.la(d, function (d) {
              return l.includeDestroyed ||
                d === c || null === d || !b.a.c(d._destroy)
            });
            b.k.t(b.a.Ua, null, [p, d, E, l, u])
          }, null, {G: p})
        };
        var u = b.a.f.L();
        b.d.template = {
          init: function (c, d) {
            var f = b.a.c(d());
            "string" == typeof f || f.name ? b.e.da(c) : (f = b.e.childNodes(c), f = b.a.ec(f), (new b.n.Z(c)).nodes(f));
            return {controlsDescendantBindings: !0}
          }, update: function (d, f, k, l, n) {
            var q = f(), p;
            f = b.a.c(q);
            k = !0;
            l = null;
            "string" == typeof f ? f = {} : (q = f.name, "if"in f && (k = b.a.c(f["if"])), k && "ifnot"in f && (k = !b.a.c(f.ifnot)), p = b.a.c(f.data));
            "foreach"in f ? l = b.jc(q || d, k && f.foreach ||
              [], f, d, n) : k ? (n = "data"in f ? n.createChildContext(p, f.as) : n, l = b.Ta(q || d, n, f, d)) : b.e.da(d);
            n = l;
            (p = b.a.f.get(d, u)) && "function" == typeof p.F && p.F();
            b.a.f.set(d, u, n && n.ga() ? n : c)
          }
        };
        b.g.aa.template = function (c) {
          c = b.g.Ra(c);
          return 1 == c.length && c[0].unknown || b.g.bc(c, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
        };
        b.e.Q.template = !0
      })();
      b.b("setTemplateEngine", b.Wa);
      b.b("renderTemplate", b.Ta);
      b.a.nb = function (b, c, d) {
        if (b.length && c.length) {
          var f, k, n, p, u;
          for (f =
                 k = 0; (!d || f < d) && (p = b[k]); ++k) {
            for (n = 0; u = c[n]; ++n)if (p.value === u.value) {
              p.moved = u.index;
              u.moved = p.index;
              c.splice(n, 1);
              f = n = 0;
              break
            }
            f += n
          }
        }
      };
      b.a.Aa = function () {
        function c(d, f, k, l, n) {
          var p = Math.min, u = Math.max, m = [], w, y = d.length, z, A = f.length, C = A - y || 1, D = y + A + 1, G, L, J;
          for (w = 0; w <= y; w++)for (L = G, m.push(G = []), J = p(A, w + C), z = u(0, w - 1); z <= J; z++)G[z] = z ? w ? d[w - 1] === f[z - 1] ? L[z - 1] : p(L[z] || D, G[z - 1] || D) + 1 : z + 1 : w + 1;
          p = [];
          u = [];
          C = [];
          w = y;
          for (z = A; w || z;)A = m[w][z] - 1, z && A === m[w][z - 1] ? u.push(p[p.length] = {
            status: k,
            value: f[--z],
            index: z
          }) :
            w && A === m[w - 1][z] ? C.push(p[p.length] = {
              status: l,
              value: d[--w],
              index: w
            }) : (--z, --w, n.sparse || p.push({status: "retained", value: f[z]}));
          b.a.nb(u, C, 10 * y);
          return p.reverse()
        }

        return function (b, d, f) {
          f = "boolean" === typeof f ? {dontLimitMoves: f} : f || {};
          b = b || [];
          d = d || [];
          return b.length <= d.length ? c(b, d, "added", "deleted", f) : c(d, b, "deleted", "added", f)
        }
      }();
      b.b("utils.compareArrays", b.a.Aa);
      (function () {
        function d(f, k, l, n, p) {
          var q = [], m = b.h(function () {
            var c = k(l, p, b.a.ea(q, f)) || [];
            0 < q.length && (b.a.Bb(q, c), n && b.k.t(n, null, [l,
              c, p]));
            q.length = 0;
            b.a.$(q, c)
          }, null, {
            G: f, Da: function () {
              return !b.a.eb(q)
            }
          });
          return {S: q, h: m.ga() ? m : c}
        }

        var f = b.a.f.L();
        b.a.Ua = function (k, n, p, u, x) {
          function z(c, d) {
            I = y[d];
            L !== d && (T[c] = I);
            I.Ia(L++);
            b.a.ea(I.S, k);
            C.push(I);
            J.push(I)
          }

          function m(c, d) {
            if (c)for (var f = 0, k = d.length; f < k; f++)d[f] && b.a.r(d[f].S, function (b) {
              c(b, f, d[f].ka)
            })
          }

          n = n || [];
          u = u || {};
          var w = b.a.f.get(k, f) === c, y = b.a.f.get(k, f) || [], A = b.a.ya(y, function (b) {
            return b.ka
          }), D = b.a.Aa(A, n, u.dontLimitMoves), C = [], G = 0, L = 0, V = [], J = [];
          n = [];
          for (var T = [], A = [],
                 I, X = 0, W, ea; W = D[X]; X++)switch (ea = W.moved, W.status) {
            case "deleted":
              ea === c && (I = y[G], I.h && I.h.F(), V.push.apply(V, b.a.ea(I.S, k)), u.beforeRemove && (n[X] = I, J.push(I)));
              G++;
              break;
            case "retained":
              z(X, G++);
              break;
            case "added":
              ea !== c ? z(X, ea) : (I = {ka: W.value, Ia: b.m(L++)}, C.push(I), J.push(I), w || (A[X] = I))
          }
          m(u.beforeMove, T);
          b.a.r(V, u.beforeRemove ? b.M : b.removeNode);
          for (var X = 0, w = b.e.firstChild(k), O; I = J[X]; X++) {
            I.S || b.a.extend(I, d(k, p, I.ka, x, I.Ia));
            for (G = 0; D = I.S[G]; w = D.nextSibling, O = D, G++)D !== w && b.e.rb(k, D, O);
            !I.Zb &&
            x && (x(I.ka, I.S, I.Ia), I.Zb = !0)
          }
          m(u.beforeRemove, n);
          m(u.afterMove, T);
          m(u.afterAdd, A);
          b.a.f.set(k, f, C)
        }
      })();
      b.b("utils.setDomNodeChildrenFromArrayMapping", b.a.Ua);
      b.K = function () {
        this.allowTemplateRewriting = !1
      };
      b.K.prototype = new b.C;
      b.K.prototype.renderTemplateSource = function (c) {
        var d = (9 > b.a.oa ? 0 : c.nodes) ? c.nodes() : null;
        if (d)return b.a.R(d.cloneNode(!0).childNodes);
        c = c.text();
        return b.a.Qa(c)
      };
      b.K.Ja = new b.K;
      b.Wa(b.K.Ja);
      b.b("nativeTemplateEngine", b.K);
      (function () {
        b.La = function () {
          var b = this.ac = function () {
            if (!f || !f.tmpl)return 0;
            try {
              if (0 <= f.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2
            } catch (b) {
            }
            return 1
          }();
          this.renderTemplateSource = function (c, d, k) {
            k = k || {};
            if (2 > b)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
            var l = c.data("precompiled");
            l || (l = c.text() || "", l = f.template(null, "{{ko_with $item.koBindingContext}}" + l + "{{/ko_with}}"), c.data("precompiled", l));
            c = [d.$data];
            d = f.extend({koBindingContext: d}, k.templateOptions);
            d = f.tmpl(l, c, d);
            d.appendTo(p.createElement("div"));
            f.fragments = {};
            return d
          };
          this.createJavaScriptEvaluatorBlock = function (b) {
            return "{{ko_code ((function() { return " + b + " })()) }}"
          };
          this.addTemplate = function (b, c) {
            p.write("<script type='text/html' id='" + b + "'>" + c + "\x3c/script>")
          };
          0 < b && (f.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, f.tmpl.tag.ko_with = {
            open: "with($1) {",
            close: "} "
          })
        };
        b.La.prototype = new b.C;
        var c = new b.La;
        0 < c.ac && b.Wa(c);
        b.b("jqueryTmplTemplateEngine", b.La)
      })()
    })
  })()
})();
var sort_by = function (c, k, p) {
  var d = function (d) {
    return p ? p(d[c]) : d[c]
  };
  return function (c, n) {
    var p = d(c), z = d(n);
    return (p < z ? -1 : p > z ? 1 : 0) * [-1, 1][+!!k]
  }
};
function br() {
  return $(document.createElement("br"))
}
function div() {
  return $(document.createElement("div"))
}
function span() {
  return $(document.createElement("span"))
}
function h(c) {
  return $(document.createElement("h" + c))
}
function label() {
  return $(document.createElement("label"))
}
function a() {
  return $(document.createElement("a"))
}
function ul() {
  return $(document.createElement("ul"))
}
function li() {
  return $(document.createElement("li"))
}
function select() {
  return $(document.createElement("select"))
}
function option(c, k) {
  return $(document.createElement("option")).attr({value: k}).text(c)
}
function radio() {
  return $(document.createElement("input")).attr({type: "radio"})
}
function inputtext() {
  return $(document.createElement("input")).attr({type: "text"})
}
function checkbx(c) {
  return $(document.createElement("input")).attr({type: "checkbox"}).prop("checked", c)
}
function dropdown(c) {
  c = $.map(c, function (c) {
    var p = c.split("|");
    return option(p[1] || c, p[0])
  });
  return select().append(c)
}
function mapSorted(c, k) {
  var p = Object.keys(c).sort(), d, f;
  c = [];
  for (f = 0; f < p.length; f++)d = p[f], c.push(k(d, c[d]));
  return c
}
function selectFirstDropdown(c) {
  c.prop("selectedIndex", 0).trigger("change")
}
function setDropdownFromText(c, k) {
  c.children("option").each(function () {
    $(this).text() == k && $(this).attr("selected", "selected").trigger("change")
  })
}
function getHash() {
  return window.location.hash.substring(1)
}
function getValue(c) {
  return "checkbox" == c.attr("type") ? c.is(":checked") : c.val()
};
function tellproxAPI(c) {
  auth = {key: c};
  this.getAuthData = function () {
    return auth
  }
}
tellproxAPI.prototype.group = {
  remove: function (c, k) {
    return $.post("json/group/remove", $.extend(auth, {id: c}), k)
  }
};
tellproxAPI.prototype.sensor = {
  info: function (c, k) {
    return $.post("json/sensor/info", $.extend(auth, {id: c}), k)
  }, setname: function (c, k, p) {
    return $.post("json/sensor/setname", $.extend(auth, {id: c, name: k}), p)
  }, setignore: function (c, k, p) {
    return $.post("json/sensor/setignore", $.extend(auth, {id: c, ignore: k}), p)
  }
};
tellproxAPI.prototype.clients = {
  list: function (c, k) {
    return $.post("json/clients/list", $.extend(auth, {extras: c}), k)
  }
};
tellproxAPI.prototype.devices = {
  list: function (c, k) {
    return $.post("json/devices/list", $.extend(auth, {supportedMethods: c}), k)
  }
};
tellproxAPI.prototype.client = {
  info: function (c, k) {
    return $.post("json/client/info", $.extend(auth, {id: c}), k)
  }
};
tellproxAPI.prototype.api = {
  install: function (c) {
    return $.post("json/api/install", auth, c)
  }, list: function (c) {
    return $.post("json/api/list", auth, c)
  }, shutdown: function (c) {
    return $.post("json/api/shutdown", auth, c)
  }, restart: function (c) {
    return $.post("json/api/restart", auth, c)
  }
};
tellproxAPI.prototype.scheduler = {
  removejob: function (c, k) {
    return $.post("json/scheduler/removejob", $.extend(auth, {id: c}), k)
  }, jobinfo: function (c, k) {
    return $.post("json/scheduler/jobinfo", $.extend(auth, {id: c}), k)
  }, joblist: function (c) {
    return $.post("json/scheduler/joblist", auth, c)
  }, setjob: function (c, k, p, d, f, n, u, z, A, G, D, b, W, L, T) {
    return $.post("json/scheduler/setjob", $.extend(auth, {
      id: c,
      deviceId: k,
      method: p,
      methodValue: d,
      type: f,
      hour: n,
      minute: u,
      offset: z,
      randomInterval: A,
      retries: G,
      retryInterval: D,
      reps: b,
      active: W,
      weekdays: L
    }), T)
  }
};
tellproxAPI.prototype.device = {
  info: function (c, k, p) {
    return $.post("json/device/info", $.extend(auth, {id: c, supportedMethods: k}), p)
  }, dim: function (c, k, p) {
    return $.post("json/device/dim", $.extend(auth, {id: c, level: k}), p)
  }, toggle: function (c, k) {
    return $.post("json/device/toggle", $.extend(auth, {id: c}), k)
  }, learn: function (c, k) {
    return $.post("json/device/learn", $.extend(auth, {id: c}), k)
  }, setname: function (c, k, p) {
    return $.post("json/device/setname", $.extend(auth, {id: c, name: k}), p)
  }, setprotocol: function (c, k, p) {
    return $.post("json/device/setprotocol",
      $.extend(auth, {id: c, protocol: k}), p)
  }, bell: function (c, k) {
    return $.post("json/device/bell", $.extend(auth, {id: c}), k)
  }, stop: function (c, k) {
    return $.post("json/device/stop", $.extend(auth, {id: c}), k)
  }, up: function (c, k) {
    return $.post("json/device/up", $.extend(auth, {id: c}), k)
  }, remove: function (c, k) {
    return $.post("json/device/remove", $.extend(auth, {id: c}), k)
  }, down: function (c, k) {
    return $.post("json/device/down", $.extend(auth, {id: c}), k)
  }, add: function (c, k, p, d, f) {
    return $.post("json/device/add", $.extend(auth, {
      clientId: c,
      name: k, protocol: p, model: d
    }), f)
  }, turnoff: function (c, k) {
    return $.post("json/device/turnoff", $.extend(auth, {id: c}), k)
  }, command: function (c, k, p, d) {
    return $.post("json/device/command", $.extend(auth, {id: c, value: k, method: p}), d)
  }, execute: function (c, k) {
    return $.post("json/device/execute", $.extend(auth, {id: c}), k)
  }, setmodel: function (c, k, p) {
    return $.post("json/device/setmodel", $.extend(auth, {id: c, model: k}), p)
  }, turnon: function (c, k) {
    return $.post("json/device/turnon", $.extend(auth, {id: c}), k)
  }, setparameter: function (c,
                             k, p, d) {
    return $.post("json/device/setparameter", $.extend(auth, {id: c, parameter: k, value: p}), d)
  }
};
tellproxAPI.prototype.sensors = {
  list: function (c, k) {
    return $.post("json/sensors/list", $.extend(auth, {includeignored: c}), k)
  }
};
tellproxAPI.prototype.config = {
  getall: function (c) {
    return $.post("json/config/getall", auth, c)
  }, set: function (c, k, p) {
    return $.post("json/config/set", $.extend(auth, {item: c, value: k}), p)
  }, get: function (c, k) {
    return $.post("json/config/get", $.extend(auth, {item: c}), k)
  }
};
