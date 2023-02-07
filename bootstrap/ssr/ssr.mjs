import { createServer } from "http";
import require$$0 from "@vue/compiler-dom";
import require$$1 from "@vue/runtime-dom";
import require$$2 from "@vue/shared";
import { renderToString } from "@vue/server-renderer";
import ie from "axios";
var vueExports = {};
var vue = {
  get exports() {
    return vueExports;
  },
  set exports(v2) {
    vueExports = v2;
  }
};
var vue_cjs_prod = {};
var hasRequiredVue_cjs_prod;
function requireVue_cjs_prod() {
  if (hasRequiredVue_cjs_prod)
    return vue_cjs_prod;
  hasRequiredVue_cjs_prod = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return shared.NOOP;
        }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el2 = document.querySelector(template);
        template = el2 ? el2.innerHTML : ``;
      }
      const opts = shared.extend({
        hoistStatic: true,
        onError: void 0,
        onWarn: shared.NOOP
      }, options);
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports2.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default")
        exports2[k] = runtimeDom[k];
    });
  })(vue_cjs_prod);
  return vue_cjs_prod;
}
var vue_cjs = {};
var hasRequiredVue_cjs;
function requireVue_cjs() {
  if (hasRequiredVue_cjs)
    return vue_cjs;
  hasRequiredVue_cjs = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var compilerDom = require$$0;
    var runtimeDom = require$$1;
    var shared = require$$2;
    function _interopNamespaceDefault(e) {
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        for (var k in e) {
          n[k] = e[k];
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
    const compileCache = /* @__PURE__ */ Object.create(null);
    function compileToFunction(template, options) {
      if (!shared.isString(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          runtimeDom.warn(`invalid template option: `, template);
          return shared.NOOP;
        }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el2 = document.querySelector(template);
        if (!el2) {
          runtimeDom.warn(`Template element not found or is empty: ${template}`);
        }
        template = el2 ? el2.innerHTML : ``;
      }
      const opts = shared.extend({
        hoistStatic: true,
        onError,
        onWarn: (e) => onError(e, true)
      }, options);
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compilerDom.compile(template, opts);
      function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
        runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
      }
      const render = new Function("Vue", code)(runtimeDom__namespace);
      render._rc = true;
      return compileCache[key] = render;
    }
    runtimeDom.registerRuntimeCompiler(compileToFunction);
    exports2.compile = compileToFunction;
    Object.keys(runtimeDom).forEach(function(k) {
      if (k !== "default")
        exports2[k] = runtimeDom[k];
    });
  })(vue_cjs);
  return vue_cjs;
}
(function(module2) {
  if (process.env.NODE_ENV === "production") {
    module2.exports = requireVue_cjs_prod();
  } else {
    module2.exports = requireVue_cjs();
  }
})(vue);
function Ns(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
    ;
  return e;
}
function Vs(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === false)
        break;
    }
    return t;
  };
}
var Us = Vs();
const Hs = Us;
function Ws(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zs = typeof global == "object" && global && global.Object === Object && global;
const ci = zs;
var Gs = typeof self == "object" && self && self.Object === Object && self, Xs = ci || Gs || Function("return this")();
const de = Xs;
var Ks = de.Symbol;
const Ae = Ks;
var di = Object.prototype, Ys = di.hasOwnProperty, Qs = di.toString, pt = Ae ? Ae.toStringTag : void 0;
function Js(e) {
  var t = Ys.call(e, pt), r = e[pt];
  try {
    e[pt] = void 0;
    var n = true;
  } catch {
  }
  var i = Qs.call(e);
  return n && (t ? e[pt] = r : delete e[pt]), i;
}
var Zs = Object.prototype, ea = Zs.toString;
function ta(e) {
  return ea.call(e);
}
var ra = "[object Null]", na = "[object Undefined]", On = Ae ? Ae.toStringTag : void 0;
function Ce(e) {
  return e == null ? e === void 0 ? na : ra : On && On in Object(e) ? Js(e) : ta(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var ia = "[object Arguments]";
function $n(e) {
  return Pe(e) && Ce(e) == ia;
}
var fi = Object.prototype, sa = fi.hasOwnProperty, aa = fi.propertyIsEnumerable, oa = $n(function() {
  return arguments;
}()) ? $n : function(e) {
  return Pe(e) && sa.call(e, "callee") && !aa.call(e, "callee");
};
const pi = oa;
var la = Array.isArray;
const L = la;
function ua() {
  return false;
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, En = hi && typeof module == "object" && module && !module.nodeType && module, ca = En && En.exports === hi, Tn = ca ? de.Buffer : void 0, da = Tn ? Tn.isBuffer : void 0, fa = da || ua;
const yr = fa;
var pa = 9007199254740991, ha = /^(?:0|[1-9]\d*)$/;
function Br(e, t) {
  var r = typeof e;
  return t = t == null ? pa : t, !!t && (r == "number" || r != "symbol" && ha.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ma = 9007199254740991;
function Rr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ma;
}
var va = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", Sa = "[object Function]", Oa = "[object Map]", $a = "[object Number]", Ea = "[object Object]", Ta = "[object RegExp]", xa = "[object Set]", _a = "[object String]", Ia = "[object WeakMap]", Aa = "[object ArrayBuffer]", Pa = "[object DataView]", qa = "[object Float32Array]", Ca = "[object Float64Array]", Fa = "[object Int8Array]", La = "[object Int16Array]", ka = "[object Int32Array]", Da = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ra = "[object Uint16Array]", Ma = "[object Uint32Array]", q = {};
q[qa] = q[Ca] = q[Fa] = q[La] = q[ka] = q[Da] = q[Ba] = q[Ra] = q[Ma] = true;
q[va] = q[ga] = q[Aa] = q[ya] = q[Pa] = q[ba] = q[wa] = q[Sa] = q[Oa] = q[$a] = q[Ea] = q[Ta] = q[xa] = q[_a] = q[Ia] = false;
function ja(e) {
  return Pe(e) && Rr(e.length) && !!q[Ce(e)];
}
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, yt = mi && typeof module == "object" && module && !module.nodeType && module, Va = yt && yt.exports === mi, ur = Va && ci.process, Ua = function() {
  try {
    var e = yt && yt.require && yt.require("util").types;
    return e || ur && ur.binding && ur.binding("util");
  } catch {
  }
}();
const xn = Ua;
var _n = xn && xn.isTypedArray, Ha = _n ? Na(_n) : ja;
const vi = Ha;
var Wa = Object.prototype, za = Wa.hasOwnProperty;
function Ga(e, t) {
  var r = L(e), n = !r && pi(e), i = !r && !n && yr(e), s = !r && !n && !i && vi(e), a = r || n || i || s, o = a ? Ws(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || za.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Br(u, l))) && o.push(u);
  return o;
}
var Xa = Object.prototype;
function Ka(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xa;
  return e === r;
}
function Ya(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Qa = Ya(Object.keys, Object);
const Ja = Qa;
var Za = Object.prototype, eo = Za.hasOwnProperty;
function to(e) {
  if (!Ka(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    eo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function H(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ro = "[object AsyncFunction]", no = "[object Function]", io = "[object GeneratorFunction]", so = "[object Proxy]";
function gi(e) {
  if (!H(e))
    return false;
  var t = Ce(e);
  return t == no || t == io || t == ro || t == so;
}
function Ht(e) {
  return e != null && Rr(e.length) && !gi(e);
}
function Wt(e) {
  return Ht(e) ? Ga(e) : to(e);
}
function Mr(e, t) {
  return e && Hs(e, t, Wt);
}
function ao(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ht(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== false; )
      ;
    return r;
  };
}
var oo = ao(Mr);
const jr = oo;
function yi(e) {
  return e;
}
function bi(e) {
  return typeof e == "function" ? e : yi;
}
function lo(e, t) {
  var r = L(e) ? Ns : jr;
  return r(e, bi(t));
}
function ee(e, t) {
  return e && Mr(e, bi(t));
}
var uo = Array.prototype, co = uo.reverse;
function fo(e) {
  return e == null ? e : co.call(e);
}
class wi {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    !this.events[t] || (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    !this.events[t] || this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Mt = vueExports.ref(0), J = vueExports.ref(1), C = vueExports.ref({}), te = vueExports.ref(0), zt = vueExports.ref({}), tt = {}, ge = typeof window > "u";
function po(e, t, r) {
  ge || window.addEventListener("popstate", ho.bind(this)), Object.keys(t).length > 0 && Mt.value++, tt[J.value] = new wi(J.value), Hr(r), Gt(r.head), Wr(e);
  const n = ge ? "" : location.href, i = Nr(
    n,
    r.head,
    e,
    t,
    {},
    J.value,
    Mt.value,
    r.persistentLayout
  );
  Si(i);
}
function ho(e) {
  !e.state || (C.value = e.state, te.value = 0, zt.value = {}, zr.value = {}, Vr.value = C.value.persistentLayoutKey, Gt(C.value.head), Wr(C.value.html, C.value.rememberedState.scrollY));
}
function Nr(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return C.value = l, l;
}
function mo(e) {
  ge || window.history.pushState(e, "", e.url);
}
function vo(e) {
  const t = Nr(
    e,
    JSON.parse(JSON.stringify(C.value.head)),
    C.value.html,
    JSON.parse(JSON.stringify(C.value.dynamics)),
    { ...C.value.rememberedState },
    C.value.pageVisitId,
    C.value.dynamicVisitId,
    C.value.persistentLayoutKey
  );
  ge || window.history.replaceState(t, "", t.url);
}
function Si(e) {
  ge || window.history.replaceState(e, "", e.url);
}
const cr = vueExports.ref(0), Vr = vueExports.ref(null);
function go(e, t) {
  var h;
  cr.value++;
  const r = e.request.responseURL;
  if (H((h = e.data) == null ? void 0 : h.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && te.value++;
  const n = Vr.value;
  if (Hr(e.data.splade), Gt(e.data.splade.head), r === C.value.url && (t = true), e.data.splade.modal)
    return qi(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  te.value = 0, zt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(C.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && ee(s, (m, d) => {
    s[d] += `<!-- ${cr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${cr.value} -->`)) : (o && Mt.value++, (!o || !a) && (J.value++, tt[J.value] = tt[J.value] || new wi(J.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !ge && t && e.data.splade.preserveScroll && (u = window.scrollY), Wr(
    l ? C.value.html : i,
    u
  );
  const c = Nr(
    r,
    e.data.splade.head,
    l ? C.value.html : i,
    s,
    C.value.rememberedState ? { ...C.value.rememberedState } : {},
    J.value,
    Mt.value,
    e.data.splade.persistentLayout
  );
  t ? Si(c) : mo(c);
}
function yo() {
  te.value--, Gt(wo(te.value));
}
const Oi = vueExports.ref({}), $i = (e) => Oi.value[e], bo = (e) => Object.keys($i.value[e]).length > 0, Ei = vueExports.ref({}), wo = (e) => Ei.value[e], Ti = vueExports.ref({}), So = (e) => Ti.value[e], rt = vueExports.ref([]);
function Oo(e) {
  rt.value.push(e);
}
const $o = vueExports.computed(() => fo(rt.value));
function Eo(e) {
  rt.value[e].dismissed = true, rt.value[e].html = null;
}
const Ur = vueExports.ref(null);
function To(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = false), typeof s > "u" && (s = false), typeof a > "u" && (a = false);
  const u = new Promise((c, h) => {
    o = c, l = h;
  });
  return Ur.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function xo() {
  Ur.value = null;
}
const xi = vueExports.ref({});
function Hr(e) {
  Vr.value = e.persistentLayout, xi.value = e.shared ? e.shared : {}, Ti.value[te.value] = e.flash ? e.flash : {}, Ei.value[te.value] = e.head ? e.head : {}, lo(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), Oi.value[te.value] = e.errors ? e.errors : {};
}
const _i = vueExports.ref(() => {
}), Ii = vueExports.ref(() => {
}), Ai = vueExports.ref(() => {
}), Pi = vueExports.ref(() => {
});
function Gt(e) {
  _i.value(e);
}
function Wr(e, t) {
  Ii.value(e, t);
}
function qi(e, t) {
  zt.value[te.value] = true, Ai.value(e, t);
}
function _o(e) {
  return zt.value[e];
}
function Io(e) {
  Pi.value(e);
}
const Ci = vueExports.ref({});
function Fi(e, t, r) {
  Ci.value[e] = t, r && Ao(e, t);
}
function Ao(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Po(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ci.value[e];
}
function We(e, t, r, n, i) {
  if (ge || Fi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  vt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = ie({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), vt("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    go(a, i), vt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (vt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Hr(o), a.response.status != 422 && Io(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Li(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, true);
}
function qo(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, false);
}
function Co(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
const zr = vueExports.ref({});
function Fo(e) {
  const t = zr.value[e];
  return t ? (te.value++, qi(t.html, t.type), true) : false;
}
function Lo(e, t, r) {
  zr.value[e] = { html: t, type: r };
}
function ko(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function Do(e, t) {
  return We(e, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function Bo(e, t) {
  return We(e, "GET", {}, { "X-Splade-Rehydrate": t }, false);
}
function Ro() {
  return Li(C.value.url);
}
function Mo(e, t) {
  tt[J.value].on(e, t);
}
function jo(e, t) {
  tt[J.value].off(e, t);
}
function vt(e, t) {
  typeof t > "u" && (t = {}), tt[J.value].emit(e, t), ge || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: po,
  replace: Li,
  visit: qo,
  modal: Co,
  slideover: ko,
  refresh: Ro,
  request: We,
  lazy: Do,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: vo,
  htmlForDynamicComponent(e) {
    return C.value.dynamics[e];
  },
  setOnHead(e) {
    _i.value = e;
  },
  setOnHtml(e) {
    Ii.value = e;
  },
  setOnModal(e) {
    Ai.value = e;
  },
  setOnServerError(e) {
    Pi.value = e;
  },
  hasValidationErrors: bo,
  validationErrors: $i,
  sharedData: xi,
  flashData: So,
  toasts: rt,
  toastsReversed: $o,
  confirmModal: Ur,
  confirm: To,
  clearConfirmModal: xo,
  pushToast: Oo,
  dismissToast: Eo,
  restore: Po,
  remember: Fi,
  popStack: yo,
  currentStack: te,
  stackType: _o,
  pageVisitId: vueExports.computed(() => C.value.pageVisitId),
  dynamicVisitId: vueExports.computed(() => C.value.dynamicVisitId),
  isSsr: ge,
  openPreloadedModal: Fo,
  registerPreloadedModal: Lo,
  on: Mo,
  off: jo,
  emit: vt
};
var No = "[object String]";
function Z(e) {
  return typeof e == "string" || !L(e) && Pe(e) && Ce(e) == No;
}
const se = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = vueExports.ref(null);
    function n() {
      r.value = vueExports.h({
        template: t.html
      });
    }
    return vueExports.watch(() => t.html, n, { immediate: true }), (i, s) => e.html ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(r), { key: 0 })) : vueExports.createCommentVNode("", true);
  }
}, Vo = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = vueExports.ref(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return vueExports.onMounted(() => i()), (o, l) => (vueExports.openBlock(), vueExports.createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      vueExports.createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Uo = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    vueExports.provide("stack", 0);
    const r = vueExports.ref(), n = vueExports.ref([]), i = vueExports.ref(null), s = vueExports.ref(null), a = vueExports.ref(true), o = vueExports.inject("$spladeOptions") || {}, l = vueExports.computed(() => v.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, v.popStack();
    }
    function h(d) {
      const p = document.createElement("meta");
      ee(d, (f, g) => {
        p[g] = f;
      }), document.getElementsByTagName("head")[0].appendChild(p);
    }
    function m(d) {
      var f;
      let p = "meta";
      ee(d, (g, S) => {
        p = `${p}[${S}="${g}"]`;
      });
      try {
        (f = document.querySelector(p)) == null || f.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var p;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((f) => {
          m(f);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((f) => {
          h(f);
        }), (p = document.querySelector('link[rel="canonical"]')) == null || p.remove(), d.canonical) {
          const f = document.createElement("link");
          f.rel = "canonical", f.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(f);
        }
      }
    }), v.setOnHtml((d, p) => {
      n.value = [], r.value = d, vueExports.nextTick(() => {
        v.isSsr || window.scrollTo(0, p), o.transform_anchors && [...document.querySelectorAll("a")].forEach((f) => {
          f.href == "" || f.href.charAt(0) == "#" || f.__vnode.dynamicProps === null && (f.hasAttribute("download") || (f.onclick = function(g) {
            g.preventDefault(), v.visit(f.href);
          }));
        });
      });
    }), v.setOnModal(function(d, p) {
      n.value[v.currentStack.value] && (a.value = false), n.value[v.currentStack.value] = { html: d, type: p }, vueExports.nextTick(() => {
        a.value = true;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), vueExports.onMounted(() => {
      if (v.isSsr)
        return;
      const d = Z(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((p) => {
        delete d.dataset[p];
      });
    }), (d, p) => (vueExports.openBlock(), vueExports.createElementBlock("div", null, [
      vueExports.unref(v).isSsr ? (vueExports.openBlock(), vueExports.createBlock(se, {
        key: `visit.${vueExports.unref(v).pageVisitId.value}`,
        style: vueExports.normalizeStyle(vueExports.unref(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.KeepAlive, {
        key: 0,
        max: vueExports.unref(o).max_keep_alive
      }, [
        (vueExports.openBlock(), vueExports.createBlock(se, {
          key: `visit.${vueExports.unref(v).pageVisitId.value}`,
          style: vueExports.normalizeStyle(vueExports.unref(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      vueExports.createVNode(se, { html: e.components }, null, 8, ["html"]),
      (vueExports.openBlock(true), vueExports.createElementBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(v).currentStack.value, (f) => (vueExports.openBlock(), vueExports.createBlock(se, {
        key: `modal.${f}`,
        type: n.value[f].type,
        html: n.value[f].html,
        stack: f,
        "on-top-of-stack": vueExports.unref(v).currentStack.value === f,
        animate: a.value,
        onClose: (g) => c(f)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (vueExports.openBlock(), vueExports.createBlock(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : vueExports.createCommentVNode("", true)
    ]));
  }
};
function xp(e) {
  return () => vueExports.h(Uo, e);
}
var Ho = Object.prototype, Wo = Ho.hasOwnProperty;
function zo(e, t) {
  return e != null && Wo.call(e, t);
}
var Go = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Pe(e) && Ce(e) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function Gr(e, t) {
  if (L(e))
    return false;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? true : Ko.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Yo = de["__core-js_shared__"];
const dr = Yo;
var In = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!In && In in e;
}
var Jo = Function.prototype, Zo = Jo.toString;
function ze(e) {
  if (e != null) {
    try {
      return Zo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, tl = /^\[object .+?Constructor\]$/, rl = Function.prototype, nl = Object.prototype, il = rl.toString, sl = nl.hasOwnProperty, al = RegExp(
  "^" + il.call(sl).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ol(e) {
  if (!H(e) || Qo(e))
    return false;
  var t = gi(e) ? al : tl;
  return t.test(ze(e));
}
function ll(e, t) {
  return e == null ? void 0 : e[t];
}
function Ge(e, t) {
  var r = ll(e, t);
  return ol(r) ? r : void 0;
}
var ul = Ge(Object, "create");
const wt = ul;
function cl() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function dl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  if (wt) {
    var r = t[e];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e) ? t[e] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : gl.call(t, e);
}
var bl = "__lodash_hash_undefined__";
function wl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wt && t === void 0 ? bl : t, this;
}
function Ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ve.prototype.clear = cl;
Ve.prototype.delete = dl;
Ve.prototype.get = ml;
Ve.prototype.has = yl;
Ve.prototype.set = wl;
function Sl() {
  this.__data__ = [], this.size = 0;
}
function Xr(e, t) {
  return e === t || e !== e && t !== t;
}
function Kt(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
      return r;
  return -1;
}
var Ol = Array.prototype, $l = Ol.splice;
function El(e) {
  var t = this.__data__, r = Kt(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : $l.call(t, r, 1), --this.size, true;
}
function Tl(e) {
  var t = this.__data__, r = Kt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xl(e) {
  return Kt(this.__data__, e) > -1;
}
function _l(e, t) {
  var r = this.__data__, n = Kt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = Sl;
be.prototype.delete = El;
be.prototype.get = Tl;
be.prototype.has = xl;
be.prototype.set = _l;
var Il = Ge(de, "Map");
const St = Il;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new Ve(),
    map: new (St || be)(),
    string: new Ve()
  };
}
function Pl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Yt(e, t) {
  var r = e.__data__;
  return Pl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ql(e) {
  var t = Yt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cl(e) {
  return Yt(this, e).get(e);
}
function Fl(e) {
  return Yt(this, e).has(e);
}
function Ll(e, t) {
  var r = Yt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = Al;
we.prototype.delete = ql;
we.prototype.get = Cl;
we.prototype.has = Fl;
we.prototype.set = Ll;
var kl = "Expected a function";
function Kr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Kr.Cache || we)(), r;
}
Kr.Cache = we;
var Dl = 500;
function Bl(e) {
  var t = Kr(e, function(n) {
    return r.size === Dl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Rl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ml = /\\(\\)?/g, jl = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Rl, function(r, n, i, s) {
    t.push(i ? s.replace(Ml, "$1") : n || r);
  }), t;
});
const Nl = jl;
function ki(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Vl = 1 / 0, An = Ae ? Ae.prototype : void 0, Pn = An ? An.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return ki(e, Qt) + "";
  if (Xt(e))
    return Pn ? Pn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Yr(e) {
  return e == null ? "" : Qt(e);
}
function Qr(e, t) {
  return L(e) ? e : Gr(e, t) ? [e] : Nl(Yr(e));
}
var Ul = 1 / 0;
function $t(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ul ? "-0" : t;
}
function Di(e, t, r) {
  t = Qr(t, e);
  for (var n = -1, i = t.length, s = false; ++n < i; ) {
    var a = $t(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rr(i) && Br(a, i) && (L(e) || pi(e)));
}
function G(e, t) {
  return e != null && Di(e, t, zo);
}
const Hl = {
  props: {
    spinner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function X(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, X), n;
}
var jt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(jt || {}), _e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_e || {});
function z({ visible: e = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Ri(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return fr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return X(l, { [0]() {
      return null;
    }, [1]() {
      return fr({ ...i, props: { ...a, hidden: true, style: { display: "none" } } });
    } });
  }
  return fr(o);
}
function fr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Mi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let h = false, m = [];
    for (let [d, p] of Object.entries(n))
      typeof p == "boolean" && (h = true), p === true && m.push(d);
    h && (c["data-headlessui-state"] = m.join(" "));
  }
  if (o === "template") {
    if (u = Bi(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [h, ...m] = u != null ? u : [];
      if (!Wl(h) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((f) => f.trim()).filter((f, g, S) => S.indexOf(f) === g).sort((f, g) => f.localeCompare(g)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let d = Ri((a = h.props) != null ? a : {}, l), p = vueExports.cloneVNode(h, d);
      for (let f in d)
        f.startsWith("on") && (p.props || (p.props = {}), p.props[f] = d[f]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return vueExports.h(o, Object.assign({}, l, c), { default: () => u });
}
function Bi(e) {
  return e.flatMap((t) => t.type === vueExports.Fragment ? Bi(t.children) : [t]);
}
function Ri(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Mi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Wl(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zl = 0;
function Gl() {
  return ++zl;
}
function Xe() {
  return Gl();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function le(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ni = Symbol("Context");
var Ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ue || {});
function Xl() {
  return Jr() !== null;
}
function Jr() {
  return vueExports.inject(Ni, null);
}
function Kl(e) {
  vueExports.provide(Ni, e);
}
class Yl {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let Et = new Yl();
function lt(e) {
  if (Et.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = le(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let br = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(xe || {}), Vi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vi || {}), Ql = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ql || {});
function Jl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ui = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ui || {});
function Zl(e, t = 0) {
  var r;
  return e === ((r = lt(e)) == null ? void 0 : r.body) ? false : X(t, { [0]() {
    return e.matches(br);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(br))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
function Ze(e) {
  e == null || e.focus({ preventScroll: true });
}
let eu = ["textarea", "input"].join(",");
function tu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, eu)) != null ? r : false;
}
function ru(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function kt(e, t, { sorted: r = true, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? ru(e) : e : Jl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((p) => !i.includes(p))), n = n != null ? n : a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: true } : {}, h = 0, m = o.length, d;
  do {
    if (h >= m || h + m <= 0)
      return 0;
    let p = u + h;
    if (t & 16)
      p = (p + m) % m;
    else {
      if (p < 0)
        return 3;
      if (p >= m)
        return 1;
    }
    d = o[p], d == null || d.focus(c), h += l;
  } while (d !== a.activeElement);
  return t & 6 && tu(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function pr(e, t, r) {
  Et.isServer || vueExports.watchEffect((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function nu(e, t, r = vueExports.computed(() => true)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : le(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Zl(o, Ui.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = vueExports.ref(null);
  pr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, true), pr("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, true), pr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let wr = vueExports.defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function iu(e, t, r) {
  Et.isServer || vueExports.watchEffect((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var gt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gt || {});
function su() {
  let e = vueExports.ref(0);
  return iu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Hi(e, t, r, n) {
  Et.isServer || vueExports.watchEffect((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function au(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Wi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wi || {});
let ht = Object.assign(vueExports.defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: vueExports.ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = vueExports.ref(null);
  n({ el: i, $el: i });
  let s = vueExports.computed(() => lt(i));
  ou({ ownerDocument: s }, vueExports.computed(() => Boolean(e.features & 16)));
  let a = lu({ ownerDocument: s, container: i, initialFocus: vueExports.computed(() => e.initialFocus) }, vueExports.computed(() => Boolean(e.features & 2)));
  uu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, vueExports.computed(() => Boolean(e.features & 8)));
  let o = su();
  function l(m) {
    let d = le(i);
    !d || ((p) => p())(() => {
      X(o.value, { [gt.Forwards]: () => {
        kt(d, xe.First, { skipElements: [m.relatedTarget] });
      }, [gt.Backwards]: () => {
        kt(d, xe.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = vueExports.ref(false);
  function c(m) {
    m.key === "Tab" && (u.value = true, requestAnimationFrame(() => {
      u.value = false;
    }));
  }
  function h(m) {
    var d;
    let p = new Set((d = e.containers) == null ? void 0 : d.value);
    p.add(i);
    let f = m.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (zi(p, f) || (u.value ? kt(le(i), X(o.value, { [gt.Forwards]: () => xe.Next, [gt.Backwards]: () => xe.Previous }) | xe.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Ze(m.target)));
  }
  return () => {
    let m = {}, d = { ref: i, onKeydown: c, onFocusout: h }, { features: p, initialFocus: f, containers: g, ...S } = e;
    return vueExports.h(vueExports.Fragment, [Boolean(p & 4) && vueExports.h(wr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: l, features: Nt.Focusable }), z({ ourProps: d, theirProps: { ...t, ...S }, slot: m, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && vueExports.h(wr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: l, features: Nt.Focusable })]);
  };
} }), { features: Wi });
function ou({ ownerDocument: e }, t) {
  let r = vueExports.ref(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    !r.value || (Ze(r.value), r.value = null);
  }
  vueExports.onMounted(() => {
    vueExports.watch(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: true });
  }), vueExports.onUnmounted(i);
}
function lu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = vueExports.ref(null), s = vueExports.ref(false);
  return vueExports.onMounted(() => s.value = true), vueExports.onUnmounted(() => s.value = false), vueExports.onMounted(() => {
    vueExports.watch([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = le(t);
      !l || au(() => {
        var u, c;
        if (!s.value)
          return;
        let h = le(r), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (h) {
          if (h === m) {
            i.value = m;
            return;
          }
        } else if (l.contains(m)) {
          i.value = m;
          return;
        }
        h ? Ze(h) : kt(l, xe.First | xe.NoScroll) === Vi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function uu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Hi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? zi(o, u) ? (n.value = u, Ze(u)) : (a.preventDefault(), a.stopPropagation(), Ze(l)) : Ze(n.value);
  }, true);
}
function zi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return true;
  return false;
}
let qn = "body > *", Qe = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
function Cn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function Fn(e) {
  let t = Te.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function cu(e, t = vueExports.ref(true)) {
  vueExports.watchEffect((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = lt(n);
    if (i) {
      Qe.add(n);
      for (let s of Te.keys())
        s.contains(n) && (Fn(s), Te.delete(s));
      i.querySelectorAll(qn).forEach((s) => {
        if (s instanceof HTMLElement) {
          for (let a of Qe)
            if (s.contains(a))
              return;
          Qe.size === 1 && (Te.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Cn(s));
        }
      }), r(() => {
        if (Qe.delete(n), Qe.size > 0)
          i.querySelectorAll(qn).forEach((s) => {
            if (s instanceof HTMLElement && !Te.has(s)) {
              for (let a of Qe)
                if (s.contains(a))
                  return;
              Te.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Cn(s);
            }
          });
        else
          for (let s of Te.keys())
            Fn(s), Te.delete(s);
      });
    }
  });
}
let Gi = Symbol("ForcePortalRootContext");
function du() {
  return vueExports.inject(Gi, false);
}
let Sr = vueExports.defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e, { slots: t, attrs: r }) {
  return vueExports.provide(Gi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function fu(e) {
  let t = lt(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Xi = vueExports.defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = vueExports.ref(null), i = vueExports.computed(() => lt(n)), s = du(), a = vueExports.inject(Ki, null), o = vueExports.ref(s === true || a == null ? fu(n.value) : a.resolveTarget());
  return vueExports.watchEffect(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), vueExports.onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return vueExports.h(vueExports.Teleport, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ki = Symbol("PortalGroupContext"), pu = vueExports.defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = vueExports.reactive({ resolveTarget() {
    return e.target;
  } });
  return vueExports.provide(Ki, n), () => {
    let { target: i, ...s } = e;
    return z({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Yi = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function hu() {
  return vueExports.inject(Yi, () => {
  });
}
function mu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = hu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  vueExports.onMounted(() => {
    vueExports.watch(t, (a, o) => {
      a ? s(0, e, r) : o === true && s(1, e, r);
    }, { immediate: true, flush: "sync" });
  }), vueExports.onUnmounted(() => {
    t.value && s(1, e, r);
  }), vueExports.provide(Yi, s);
}
let Qi = Symbol("DescriptionContext");
function vu() {
  let e = vueExports.inject(Qi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function gu({ slot: e = vueExports.ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = vueExports.ref([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return vueExports.provide(Qi, { register: i, slot: e, name: t, props: r }), vueExports.computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
vueExports.defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = vu();
  return vueExports.onMounted(() => vueExports.onUnmounted(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = vueExports.ref({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [h, m]) => Object.assign(c, { [h]: vueExports.unref(m) }), {}), id: o };
    return z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function yu(e) {
  let t = vueExports.shallowRef(e.getSnapshot());
  return vueExports.onUnmounted(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Zr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, s, a) {
    return n.addEventListener(i, s, a), r.add(() => n.removeEventListener(i, s, a));
  }, requestAnimationFrame(...n) {
    let i = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(i));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let i = setTimeout(...n);
    r.add(() => clearTimeout(i));
  }, add(n) {
    e.push(n);
  }, style(n, i, s) {
    let a = n.style.getPropertyValue(i);
    return Object.assign(n.style, { [i]: s }), this.add(() => {
      Object.assign(n.style, { [i]: a });
    });
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function bu(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function wu() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function Su() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ou() {
  if (!Su())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, true), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: false }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function $u() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Eu(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let je = bu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Zr(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Eu(r) }, i = [Ou(), wu(), $u()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
je.subscribe(() => {
  let e = je.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && je.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && je.dispatch("TEARDOWN", r);
  }
});
function Tu(e, t, r) {
  let n = yu(je), i = vueExports.computed(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : false;
  });
  return vueExports.watch([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    je.dispatch("PUSH", s, r);
    let u = false;
    l(() => {
      u || (je.dispatch("POP", o != null ? o : s, r), u = true);
    });
  }, { immediate: true }), i;
}
var xu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xu || {});
let $r = Symbol("DialogContext");
function Tt(e) {
  let t = vueExports.inject($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Tt), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", en = vueExports.defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Xe()}` } }, emits: { close: (e) => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = vueExports.ref(false);
  vueExports.onMounted(() => {
    a.value = true;
  });
  let o = vueExports.ref(0), l = Jr(), u = vueExports.computed(() => e.open === qt && l !== null ? X(l.value, { [Ue.Open]: true, [Ue.Closed]: false }) : e.open), c = vueExports.ref(/* @__PURE__ */ new Set()), h = vueExports.ref(null), m = vueExports.ref(null), d = vueExports.computed(() => lt(h));
  if (i({ el: h, $el: h }), !(e.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e.open}`);
  let p = vueExports.computed(() => a.value && u.value ? 0 : 1), f = vueExports.computed(() => p.value === 0), g = vueExports.computed(() => o.value > 1);
  vueExports.inject($r, null);
  let S = vueExports.computed(() => g.value ? "parent" : "leaf");
  cu(h, vueExports.computed(() => g.value ? f.value : false)), mu({ type: "Dialog", enabled: vueExports.computed(() => p.value === 0), element: h, onUpdate: (y, O, $) => {
    if (O === "Dialog")
      return X(y, { [Or.Add]() {
        c.value.add($), o.value += 1;
      }, [Or.Remove]() {
        c.value.delete($), o.value -= 1;
      } });
  } });
  let I = gu({ name: "DialogDescription", slot: vueExports.computed(() => ({ open: u.value })) }), A = vueExports.ref(null), w = { titleId: A, panelRef: vueExports.ref(null), dialogState: p, setTitleId(y) {
    A.value !== y && (A.value = y);
  }, close() {
    t("close", false);
  } };
  vueExports.provide($r, w);
  function E() {
    var y, O, $;
    return [...Array.from((O = (y = d.value) == null ? void 0 : y.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(T === document.body || T === document.head || !(T instanceof HTMLElement) || T.contains(le(m)) || w.panelRef.value && T.contains(w.panelRef.value))), ($ = w.panelRef.value) != null ? $ : h.value];
  }
  return nu(() => E(), (y, O) => {
    w.close(), vueExports.nextTick(() => O == null ? void 0 : O.focus());
  }, vueExports.computed(() => p.value === 0 && !g.value)), Hi((s = d.value) == null ? void 0 : s.defaultView, "keydown", (y) => {
    y.defaultPrevented || y.key === ji.Escape && p.value === 0 && (g.value || (y.preventDefault(), y.stopPropagation(), w.close()));
  }), Tu(d, f, (y) => {
    var O;
    return { containers: [...(O = y.containers) != null ? O : [], E] };
  }), vueExports.watchEffect((y) => {
    if (p.value !== 0)
      return;
    let O = le(h);
    if (!O)
      return;
    let $ = new IntersectionObserver((T) => {
      for (let x of T)
        x.boundingClientRect.x === 0 && x.boundingClientRect.y === 0 && x.boundingClientRect.width === 0 && x.boundingClientRect.height === 0 && w.close();
    });
    $.observe(O), y(() => $.disconnect());
  }), () => {
    let { id: y, open: O, initialFocus: $, ...T } = e, x = { ...r, ref: h, id: y, role: "dialog", "aria-modal": p.value === 0 ? true : void 0, "aria-labelledby": A.value, "aria-describedby": I.value }, _ = { open: p.value === 0 };
    return vueExports.h(Sr, { force: true }, () => [vueExports.h(Xi, () => vueExports.h(pu, { target: h.value }, () => vueExports.h(Sr, { force: false }, () => vueExports.h(ht, { initialFocus: $, containers: c, features: f.value ? X(S.value, { parent: ht.features.RestoreFocus, leaf: ht.features.All & ~ht.features.FocusLock }) : ht.features.None }, () => z({ ourProps: x, theirProps: T, slot: _, attrs: r, slots: n, visible: p.value === 0, features: jt.RenderStrategy | jt.Static, name: "Dialog" }))))), vueExports.h(wr, { features: Nt.Hidden, ref: m })]);
  };
} });
vueExports.defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Tt("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return z({ ourProps: { id: s, "aria-hidden": true, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
vueExports.defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Xe()}` } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Tt("DialogBackdrop"), s = vueExports.ref(null);
  return n({ el: s, $el: s }), vueExports.onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": true };
    return vueExports.h(Sr, { force: true }, () => vueExports.h(Xi, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let tn = vueExports.defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Xe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Tt("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return z({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
vueExports.defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Tt("DialogTitle");
  return vueExports.onMounted(() => {
    n.setTitleId(e.id), vueExports.onUnmounted(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return z({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function _u(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function hr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ct(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Er = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Er || {});
function Iu(e, t) {
  let r = Zr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Ln(e, t, r, n, i, s) {
  let a = Zr(), o = s !== void 0 ? _u(s) : () => {
  };
  return Ct(e, ...i), hr(e, ...t, ...r), a.nextFrame(() => {
    Ct(e, ...r), hr(e, ...n), a.add(Iu(e, (l) => (Ct(e, ...n, ...t), hr(e, ...i), o(l))));
  }), a.add(() => Ct(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rn = Symbol("TransitionContext");
var Au = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Au || {});
function Pu() {
  return vueExports.inject(rn, null) !== null;
}
function qu() {
  let e = vueExports.inject(rn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Cu() {
  let e = vueExports.inject(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nn = Symbol("NestingContext");
function Jt(e) {
  return "children" in e ? Jt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ji(e) {
  let t = vueExports.ref([]), r = vueExports.ref(false);
  vueExports.onMounted(() => r.value = true), vueExports.onUnmounted(() => r.value = false);
  function n(s, a = _e.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (X(a, { [_e.Unmount]() {
      t.value.splice(o, 1);
    }, [_e.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Jt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, _e.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Zi = jt.RenderStrategy, ut = vueExports.defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Pu() && Xl())
    return () => vueExports.h(ct, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let s = vueExports.ref(null), a = vueExports.ref("visible"), o = vueExports.computed(() => e.unmount ? _e.Unmount : _e.Hidden);
  i({ el: s, $el: s });
  let { show: l, appear: u } = qu(), { register: c, unregister: h } = Cu(), m = { value: true }, d = Xe(), p = { value: false }, f = Ji(() => {
    p.value || (a.value = "hidden", h(d), t("afterLeave"));
  });
  vueExports.onMounted(() => {
    let $ = c(d);
    vueExports.onUnmounted($);
  }), vueExports.watchEffect(() => {
    if (o.value === _e.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      X(a.value, { hidden: () => h(d), visible: () => c(d) });
    }
  });
  let g = Be(e.enter), S = Be(e.enterFrom), I = Be(e.enterTo), A = Be(e.entered), w = Be(e.leave), E = Be(e.leaveFrom), y = Be(e.leaveTo);
  vueExports.onMounted(() => {
    vueExports.watchEffect(() => {
      if (a.value === "visible") {
        let $ = le(s);
        if ($ instanceof Comment && $.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function O($) {
    let T = m.value && !u.value, x = le(s);
    !x || !(x instanceof HTMLElement) || T || (p.value = true, l.value && t("beforeEnter"), l.value || t("beforeLeave"), $(l.value ? Ln(x, g, S, I, A, (_) => {
      p.value = false, _ === Er.Finished && t("afterEnter");
    }) : Ln(x, w, E, y, A, (_) => {
      p.value = false, _ === Er.Finished && (Jt(f) || (a.value = "hidden", h(d), t("afterLeave")));
    })));
  }
  return vueExports.onMounted(() => {
    vueExports.watch([l], ($, T, x) => {
      O(x), m.value = false;
    }, { immediate: true });
  }), vueExports.provide(nn, f), Kl(vueExports.computed(() => X(a.value, { visible: Ue.Open, hidden: Ue.Closed }))), () => {
    let { appear: $, show: T, enter: x, enterFrom: _, enterTo: D, entered: B, leave: Se, leaveFrom: Oe, leaveTo: M, ...j } = e, Ke = { ref: s }, fe = { ...j, ...u && l && Et.isServer ? { class: vueExports.normalizeClass([j.class, ...g, ...S]) } : {} };
    return z({ theirProps: fe, ourProps: Ke, slot: {}, slots: n, attrs: r, features: Zi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), Fu = ut, ct = vueExports.defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Jr(), s = vueExports.computed(() => e.show === null && i !== null ? X(i.value, { [Ue.Open]: true, [Ue.Closed]: false }) : e.show);
  vueExports.watchEffect(() => {
    if (![true, false].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = vueExports.ref(s.value ? "visible" : "hidden"), o = Ji(() => {
    a.value = "hidden";
  }), l = vueExports.ref(true), u = { show: s, appear: vueExports.computed(() => e.appear || !l.value) };
  return vueExports.onMounted(() => {
    vueExports.watchEffect(() => {
      l.value = false, s.value ? a.value = "visible" : Jt(o) || (a.value = "hidden");
    });
  }), vueExports.provide(nn, o), vueExports.provide(rn, u), () => {
    let c = Mi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return z({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [vueExports.h(Fu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...h, ...c }, n.default)] }, attrs: {}, features: Zi, visible: a.value === "visible", name: "Transition" });
  };
} });
const Lu = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultPasswordText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    },
    confirmPasswordRoute: {
      type: String,
      required: false,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false,
      password: "",
      passwordError: "",
      submitting: false
    };
  },
  computed: {
    hasConfirmModal: () => !!v.confirmModal.value,
    title: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.title ? v.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.text ? v.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmButton ? v.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.cancelButton ? v.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPassword ? v.confirmModal.value.confirmPassword : false;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPasswordOnce ? v.confirmModal.value.confirmPasswordOnce : false;
    },
    confirmDanger: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmDanger ? v.confirmModal.value.confirmDanger : false;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(true), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      v.confirmModal.value.rejectPromise(), this.setIsOpen(false), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = true;
      let e = this.password;
      this.passwordError = "", ie.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = false;
      });
    },
    handleSuccess(e) {
      v.confirmModal.value.resolvePromise(e), this.setIsOpen(false), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ie.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), v.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), v.clearConfirmModal();
    },
    setPassword(e) {
      this.password = e;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
};
function es(e, t) {
  t = Qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$t(t[r++])];
  return r && r == n ? e : void 0;
}
function et(e, t, r) {
  var n = e == null ? void 0 : es(e, t);
  return n === void 0 ? r : n;
}
var ku = function() {
  try {
    var e = Ge(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const kn = ku;
function ts(e, t, r) {
  t == "__proto__" && kn ? kn(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
var Du = Object.prototype, Bu = Du.hasOwnProperty;
function Ru(e, t, r) {
  var n = e[t];
  (!(Bu.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && ts(e, t, r);
}
function Mu(e, t, r, n) {
  if (!H(e))
    return e;
  t = Qr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = $t(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = H(c) ? c : Br(t[i + 1]) ? [] : {});
    }
    Ru(o, l, u), o = o[l];
  }
  return e;
}
function rs(e, t, r) {
  return e == null ? e : Mu(e, t, r);
}
const ju = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: String,
      default: null,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: {}
    };
  },
  beforeMount() {
    if (this.remember) {
      let e = v.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && v.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return et(e.values, r);
        },
        set(t, r, n) {
          rs(e.values, r, n);
        }
      })
    );
  }
};
var Nu = function() {
  return de.Date.now();
};
const mr = Nu;
var Vu = /\s/;
function Uu(e) {
  for (var t = e.length; t-- && Vu.test(e.charAt(t)); )
    ;
  return t;
}
var Hu = /^\s+/;
function Wu(e) {
  return e && e.slice(0, Uu(e) + 1).replace(Hu, "");
}
var Dn = 0 / 0, zu = /^[-+]0x[0-9a-f]+$/i, Gu = /^0b[01]+$/i, Xu = /^0o[0-7]+$/i, Ku = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Xt(e))
    return Dn;
  if (H(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = H(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Wu(e);
  var r = Gu.test(e);
  return r || Xu.test(e) ? Ku(e.slice(2), r ? 2 : 8) : zu.test(e) ? Dn : +e;
}
var Yu = "Expected a function", Qu = Math.max, Ju = Math.min;
function Zt(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = false, h = false, m = true;
  if (typeof e != "function")
    throw new TypeError(Yu);
  t = Tr(t) || 0, H(r) && (c = !!r.leading, h = "maxWait" in r, s = h ? Qu(Tr(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
  function d(y) {
    var O = n, $ = i;
    return n = i = void 0, u = y, a = e.apply($, O), a;
  }
  function p(y) {
    return u = y, o = setTimeout(S, t), c ? d(y) : a;
  }
  function f(y) {
    var O = y - l, $ = y - u, T = t - O;
    return h ? Ju(T, s - $) : T;
  }
  function g(y) {
    var O = y - l, $ = y - u;
    return l === void 0 || O >= t || O < 0 || h && $ >= s;
  }
  function S() {
    var y = mr();
    if (g(y))
      return I(y);
    o = setTimeout(S, f(y));
  }
  function I(y) {
    return o = void 0, m && n ? d(y) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function w() {
    return o === void 0 ? a : I(mr());
  }
  function E() {
    var y = mr(), O = g(y);
    if (n = arguments, i = this, l = y, O) {
      if (o === void 0)
        return p(l);
      if (h)
        return clearTimeout(o), o = setTimeout(S, t), d(l);
    }
    return o === void 0 && (o = setTimeout(S, t)), a;
  }
  return E.cancel = A, E.flush = w, E;
}
const Zu = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: false,
      default: false
    },
    watchDebounce: {
      type: Number,
      required: false,
      default: 0
    },
    watchValue: {
      validator() {
        return true;
      },
      required: false,
      default: null
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: true,
      handler() {
        this.processing = true, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = Zt(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e = {
        url: this.url,
        method: this.method,
        headers: {
          Accept: this.acceptHeader
        }
      };
      Object.keys(this.request).length > 0 && (e.data = this.request), ie(e).then((t) => {
        this.response = t.data, this.processing = false, this.$emit("success", t.data);
      }).catch(() => {
        this.processing = false, this.$emit("error");
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, ec = {
  data() {
    return {
      isActivated: true
    };
  },
  deactivated() {
    this.isActivated = false;
  },
  activated() {
    this.isActivated = true;
  },
  render() {
    return this.$slots.default({
      Dialog: en,
      DialogPanel: tn,
      isActivated: this.isActivated
    });
  }
}, ns = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = vueExports.ref(null), n = vueExports.ref(null), i = vueExports.ref(null);
    return vueExports.onMounted(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), vueExports.onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (vueExports.openBlock(), vueExports.createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      vueExports.renderSlot(s.$slots, "default")
    ], 512));
  }
};
function Q(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function He(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function K(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function sn(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ne = Math.max, Vt = Math.min, nt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function is() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && K(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = He(e) ? Q(e) : window, o = a.visualViewport, l = !is() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, h = n.width / i, m = n.height / s;
  return {
    width: h,
    height: m,
    top: c,
    right: u + h,
    bottom: c + m,
    left: u,
    x: u,
    y: c
  };
}
function an(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function tc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rc(e) {
  return e === Q(e) || !K(e) ? an(e) : tc(e);
}
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fe(e) {
  return ((He(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function on(e) {
  return it(Fe(e)).left + an(e).scrollLeft;
}
function ne(e) {
  return Q(e).getComputedStyle(e);
}
function ln(e) {
  var t = ne(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function nc(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ic(e, t, r) {
  r === void 0 && (r = false);
  var n = K(t), i = K(t) && nc(t), s = Fe(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ue(t) !== "body" || ln(s)) && (o = rc(t)), K(t) ? (l = it(t, true), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = on(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ss(e) {
  var t = it(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function er(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (sn(e) ? e.host : null) || Fe(e);
}
function as(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : K(e) && ln(e) ? e : as(er(e));
}
function bt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = as(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Q(n), a = i ? [s].concat(s.visualViewport || [], ln(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(bt(er(a)));
}
function sc(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function Bn(e) {
  return !K(e) || ne(e).position === "fixed" ? null : e.offsetParent;
}
function ac(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && K(e)) {
    var n = ne(e);
    if (n.position === "fixed")
      return null;
  }
  var i = er(e);
  for (sn(i) && (i = i.host); K(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
    var s = ne(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tr(e) {
  for (var t = Q(e), r = Bn(e); r && sc(r) && ne(r).position === "static"; )
    r = Bn(r);
  return r && (ue(r) === "html" || ue(r) === "body" && ne(r).position === "static") ? t : r || ac(e) || t;
}
var re = "top", ce = "bottom", qe = "right", pe = "left", rr = "auto", nr = [re, ce, qe, pe], st = "start", Ot = "end", oc = "clippingParents", os = "viewport", mt = "popper", lc = "reference", Rn = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + Ot]);
}, []), uc = /* @__PURE__ */ [].concat(nr, [rr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + Ot]);
}, []), cc = "beforeRead", dc = "read", fc = "afterRead", pc = "beforeMain", hc = "main", mc = "afterMain", vc = "beforeWrite", gc = "write", yc = "afterWrite", _r = [cc, dc, fc, pc, hc, mc, vc, gc, yc];
function bc(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function wc(e) {
  var t = bc(e);
  return _r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Sc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ee(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Re = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Oc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Mn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $c(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Mn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ee(Re, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ee(Re, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          _r.indexOf(t.phase) < 0 && console.error(Ee(Re, t.name, '"phase"', "either " + _r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ee(Re, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ee(Re, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ee(Re, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ee(Re, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Mn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ee(Oc, String(t.name), n, n));
      });
    });
  });
}
function Ec(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), true;
  });
}
function he(e) {
  return e.split("-")[0];
}
function Tc(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function xc(e, t) {
  var r = Q(e), n = Fe(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = is();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + on(e),
    y: l
  };
}
function _c(e) {
  var t, r = Fe(e), n = an(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ne(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ne(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + on(e), l = -n.scrollTop;
  return ne(i || r).direction === "rtl" && (o += Ne(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Ic(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (r && sn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Ir(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ac(e, t) {
  var r = it(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === os ? Ir(xc(e, r)) : He(t) ? Ac(t, r) : Ir(_c(Fe(e)));
}
function Pc(e) {
  var t = bt(er(e)), r = ["absolute", "fixed"].indexOf(ne(e).position) >= 0, n = r && K(e) ? tr(e) : e;
  return He(n) ? t.filter(function(i) {
    return He(i) && Ic(i, n) && ue(i) !== "body";
  }) : [];
}
function qc(e, t, r, n) {
  var i = t === "clippingParents" ? Pc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = Ne(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = Ne(c.left, l.left), l;
  }, jn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function at(e) {
  return e.split("-")[1];
}
function ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function us(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? he(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case re:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ce:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case qe:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case pe:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? ls(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case st:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Ot:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function cs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cc(e) {
  return Object.assign({}, cs(), e);
}
function Fc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function un(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? oc : o, u = r.rootBoundary, c = u === void 0 ? os : u, h = r.elementContext, m = h === void 0 ? mt : h, d = r.altBoundary, p = d === void 0 ? false : d, f = r.padding, g = f === void 0 ? 0 : f, S = Cc(typeof g != "number" ? g : Fc(g, nr)), I = m === mt ? lc : mt, A = e.rects.popper, w = e.elements[p ? I : m], E = qc(He(w) ? w : w.contextElement || Fe(e.elements.popper), l, c, a), y = it(e.elements.reference), O = us({
    reference: y,
    element: A,
    strategy: "absolute",
    placement: i
  }), $ = Ir(Object.assign({}, A, O)), T = m === mt ? $ : y, x = {
    top: E.top - T.top + S.top,
    bottom: T.bottom - E.bottom + S.bottom,
    left: E.left - T.left + S.left,
    right: T.right - E.right + S.right
  }, _ = e.modifiersData.offset;
  if (m === mt && _) {
    var D = _[i];
    Object.keys(x).forEach(function(B) {
      var Se = [qe, ce].indexOf(B) >= 0 ? 1 : -1, Oe = [re, ce].indexOf(B) >= 0 ? "y" : "x";
      x[B] += D[Oe] * Se;
    });
  }
  return x;
}
var Nn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Lc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Vn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Un() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function kc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Vn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], m = false, d = {
      state: c,
      setOptions: function(S) {
        var I = typeof S == "function" ? S(c.options) : S;
        f(), c.options = Object.assign({}, s, c.options, I), c.scrollParents = {
          reference: He(o) ? bt(o) : o.contextElement ? bt(o.contextElement) : [],
          popper: bt(l)
        };
        var A = wc(Tc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var w = Ec([].concat(A, c.options.modifiers), function(_) {
            var D = _.name;
            return D;
          });
          if ($c(w), he(c.options.placement) === rr) {
            var E = c.orderedModifiers.find(function(_) {
              var D = _.name;
              return D === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ne(l), O = y.marginTop, $ = y.marginRight, T = y.marginBottom, x = y.marginLeft;
          [O, $, T, x].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), d.update();
      },
      forceUpdate: function() {
        if (!m) {
          var S = c.elements, I = S.reference, A = S.popper;
          if (!Un(I, A)) {
            process.env.NODE_ENV !== "production" && console.error(Nn);
            return;
          }
          c.rects = {
            reference: ic(I, tr(A), c.options.strategy === "fixed"),
            popper: ss(A)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var w = 0, E = 0; E < c.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (w += 1, w > 100)) {
              console.error(Lc);
              break;
            }
            if (c.reset === true) {
              c.reset = false, E = -1;
              continue;
            }
            var y = c.orderedModifiers[E], O = y.fn, $ = y.options, T = $ === void 0 ? {} : $, x = y.name;
            typeof O == "function" && (c = O({
              state: c,
              options: T,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Sc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        f(), m = true;
      }
    };
    if (!Un(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Nn), d;
    d.setOptions(u).then(function(g) {
      !m && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      c.orderedModifiers.forEach(function(g) {
        var S = g.name, I = g.options, A = I === void 0 ? {} : I, w = g.effect;
        if (typeof w == "function") {
          var E = w({
            state: c,
            name: S,
            instance: d,
            options: A
          }), y = function() {
          };
          h.push(E || y);
        }
      });
    }
    function f() {
      h.forEach(function(g) {
        return g();
      }), h = [];
    }
    return d;
  };
}
var Ft = {
  passive: true
};
function Dc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? true : i, a = n.resize, o = a === void 0 ? true : a, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), o && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), o && l.removeEventListener("resize", r.update, Ft);
  };
}
const Bc = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Dc,
  data: {}
};
function Rc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = us({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mc = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Rc,
  data: {}
};
var jc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Nc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: nt(t * i) / i || 0,
    y: nt(r * i) / i || 0
  };
}
function Hn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, h = e.isFixed, m = a.x, d = m === void 0 ? 0 : m, p = a.y, f = p === void 0 ? 0 : p, g = typeof c == "function" ? c({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  d = g.x, f = g.y;
  var S = a.hasOwnProperty("x"), I = a.hasOwnProperty("y"), A = pe, w = re, E = window;
  if (u) {
    var y = tr(r), O = "clientHeight", $ = "clientWidth";
    if (y === Q(r) && (y = Fe(r), ne(y).position !== "static" && o === "absolute" && (O = "scrollHeight", $ = "scrollWidth")), y = y, i === re || (i === pe || i === qe) && s === Ot) {
      w = ce;
      var T = h && y === E && E.visualViewport ? E.visualViewport.height : y[O];
      f -= T - n.height, f *= l ? 1 : -1;
    }
    if (i === pe || (i === re || i === ce) && s === Ot) {
      A = qe;
      var x = h && y === E && E.visualViewport ? E.visualViewport.width : y[$];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: o
  }, u && jc), D = c === true ? Nc({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  if (d = D.x, f = D.y, l) {
    var B;
    return Object.assign({}, _, (B = {}, B[w] = I ? "0" : "", B[A] = S ? "0" : "", B.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", B));
  }
  return Object.assign({}, _, (t = {}, t[w] = I ? f + "px" : "", t[A] = S ? d + "px" : "", t.transform = "", t));
}
function Vc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, s = r.adaptive, a = s === void 0 ? true : s, o = r.roundOffsets, l = o === void 0 ? true : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ne(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(h) {
      return u.indexOf(h) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: he(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Uc = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Vc,
  data: {}
};
function Hc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !K(s) || !ue(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === false ? s.removeAttribute(a) : s.setAttribute(a, o === true ? "" : o);
    }));
  });
}
function Wc(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !K(i) || !ue(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const zc = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Hc,
  effect: Wc,
  requires: ["computeStyles"]
};
var Gc = [Bc, Mc, Uc, zc], Xc = /* @__PURE__ */ kc({
  defaultModifiers: Gc
});
function Kc(e) {
  return e === "x" ? "y" : "x";
}
function Dt(e, t, r) {
  return Ne(e, Vt(t, r));
}
function Yc(e, t, r) {
  var n = Dt(e, t, r);
  return n > r ? r : n;
}
function Qc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? false : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, h = r.padding, m = r.tether, d = m === void 0 ? true : m, p = r.tetherOffset, f = p === void 0 ? 0 : p, g = un(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: c
  }), S = he(t.placement), I = at(t.placement), A = !I, w = ls(S), E = Kc(w), y = t.modifiersData.popperOffsets, O = t.rects.reference, $ = t.rects.popper, T = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, x = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (s) {
      var B, Se = w === "y" ? re : pe, Oe = w === "y" ? ce : qe, M = w === "y" ? "height" : "width", j = y[w], Ke = j + g[Se], fe = j - g[Oe], _t = d ? -$[M] / 2 : 0, sr = I === st ? O[M] : $[M], dt = I === st ? -$[M] : -O[M], It = t.elements.arrow, Ye = d && It ? ss(It) : {
        width: 0,
        height: 0
      }, $e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cs(), ft = $e[Se], At = $e[Oe], ke = Dt(0, O[M], Ye[M]), ar = A ? O[M] / 2 - _t - ke - ft - x.mainAxis : sr - ke - ft - x.mainAxis, Os = A ? -O[M] / 2 + _t + ke + At + x.mainAxis : dt + ke + At + x.mainAxis, or = t.elements.arrow && tr(t.elements.arrow), $s = or ? w === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, pn = (B = _ == null ? void 0 : _[w]) != null ? B : 0, Es = j + ar - pn - $s, Ts = j + Os - pn, hn = Dt(d ? Vt(Ke, Es) : Ke, j, d ? Ne(fe, Ts) : fe);
      y[w] = hn, D[w] = hn - j;
    }
    if (o) {
      var mn, xs = w === "x" ? re : pe, _s = w === "x" ? ce : qe, De = y[E], Pt = E === "y" ? "height" : "width", vn = De + g[xs], gn = De - g[_s], lr = [re, pe].indexOf(S) !== -1, yn = (mn = _ == null ? void 0 : _[E]) != null ? mn : 0, bn = lr ? vn : De - O[Pt] - $[Pt] - yn + x.altAxis, wn = lr ? De + O[Pt] + $[Pt] - yn - x.altAxis : gn, Sn = d && lr ? Yc(bn, De, wn) : Dt(d ? bn : vn, De, d ? wn : gn);
      y[E] = Sn, D[E] = Sn - De;
    }
    t.modifiersData[n] = D;
  }
}
const Jc = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Qc,
  requiresIfExists: ["offset"]
};
var Zc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Zc[t];
  });
}
var ed = {
  start: "end",
  end: "start"
};
function Wn(e) {
  return e.replace(/start|end/g, function(t) {
    return ed[t];
  });
}
function td(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? uc : l, c = at(n), h = c ? o ? Rn : Rn.filter(function(p) {
    return at(p) === c;
  }) : nr, m = h.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  m.length === 0 && (m = h, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = m.reduce(function(p, f) {
    return p[f] = un(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[he(f)], p;
  }, {});
  return Object.keys(d).sort(function(p, f) {
    return d[p] - d[f];
  });
}
function rd(e) {
  if (he(e) === rr)
    return [];
  var t = Bt(e);
  return [Wn(e), t, Wn(t)];
}
function nd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? true : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, h = r.rootBoundary, m = r.altBoundary, d = r.flipVariations, p = d === void 0 ? true : d, f = r.allowedAutoPlacements, g = t.options.placement, S = he(g), I = S === g, A = l || (I || !p ? [Bt(g)] : rd(g)), w = [g].concat(A).reduce(function(Ye, $e) {
      return Ye.concat(he($e) === rr ? td(t, {
        placement: $e,
        boundary: c,
        rootBoundary: h,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: f
      }) : $e);
    }, []), E = t.rects.reference, y = t.rects.popper, O = /* @__PURE__ */ new Map(), $ = true, T = w[0], x = 0; x < w.length; x++) {
      var _ = w[x], D = he(_), B = at(_) === st, Se = [re, ce].indexOf(D) >= 0, Oe = Se ? "width" : "height", M = un(t, {
        placement: _,
        boundary: c,
        rootBoundary: h,
        altBoundary: m,
        padding: u
      }), j = Se ? B ? qe : pe : B ? ce : re;
      E[Oe] > y[Oe] && (j = Bt(j));
      var Ke = Bt(j), fe = [];
      if (s && fe.push(M[D] <= 0), o && fe.push(M[j] <= 0, M[Ke] <= 0), fe.every(function(Ye) {
        return Ye;
      })) {
        T = _, $ = false;
        break;
      }
      O.set(_, fe);
    }
    if ($)
      for (var _t = p ? 3 : 1, sr = function($e) {
        var ft = w.find(function(At) {
          var ke = O.get(At);
          if (ke)
            return ke.slice(0, $e).every(function(ar) {
              return ar;
            });
        });
        if (ft)
          return T = ft, "break";
      }, dt = _t; dt > 0; dt--) {
        var It = sr(dt);
        if (It === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = true, t.placement = T, t.reset = true);
  }
}
const id = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: nd,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, Le = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, sd = {
  components: {
    OnClickOutside: ns
  },
  props: {
    spladeId: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    strategy: {
      type: String,
      default: "absolute",
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    teleport: {
      type: Boolean,
      default: false,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await vueExports.nextTick();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Xc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [id, Jc],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, ad = { ref: "tooltip" };
function od(e, t, r, n, i, s) {
  const a = vueExports.resolveComponent("OnClickOutside");
  return vueExports.openBlock(), vueExports.createBlock(a, {
    style: vueExports.normalizeStyle(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: vueExports.withCtx(() => [
      vueExports.createElementVNode("div", {
        ref: "button",
        style: vueExports.normalizeStyle(s.buttonStyle)
      }, [
        vueExports.renderSlot(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      vueExports.createElementVNode("div", ad, [
        vueExports.renderSlot(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ld = /* @__PURE__ */ Le(sd, [["render", od]]), ud = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(e) {
    const t = vueExports.inject("$splade") || {}, r = vueExports.inject("$spladeOptions") || {};
    return (n, i) => vueExports.unref(t).isSsr ? (vueExports.openBlock(), vueExports.createBlock(se, {
      key: e.keepAliveKey,
      html: vueExports.unref(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.KeepAlive, {
      key: 0,
      max: vueExports.unref(r).max_keep_alive
    }, [
      (vueExports.openBlock(), vueExports.createBlock(se, {
        key: e.keepAliveKey,
        html: vueExports.unref(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function ds(e) {
  return e && e.length ? e[0] : void 0;
}
const cd = {
  inject: ["stack"],
  computed: {
    values() {
      return v.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return G(e.values, t);
      },
      first(t) {
        return ds(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, dd = {
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    }
  },
  emits: ["subscribed", "event"],
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription.on("pusher:subscription_succeeded", () => {
      this.subscribed = true, this.$emit("subscribed");
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        this.$emit("event", { name: e, data: r });
        const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
        let a = null, o = false, l = [];
        ee(r, (u) => {
          !H(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
        }), a ? v.visit(a) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          v.pushToast(u);
        }), this.$root.$emit(`event.${e}`, r);
      });
      this.subscriptions.push(t);
    });
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function fd() {
  this.__data__ = new be(), this.size = 0;
}
function pd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function hd(e) {
  return this.__data__.get(e);
}
function md(e) {
  return this.__data__.has(e);
}
var vd = 200;
function gd(e, t) {
  var r = this.__data__;
  if (r instanceof be) {
    var n = r.__data__;
    if (!St || n.length < vd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new we(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function me(e) {
  var t = this.__data__ = new be(e);
  this.size = t.size;
}
me.prototype.clear = fd;
me.prototype.delete = pd;
me.prototype.get = hd;
me.prototype.has = md;
me.prototype.set = gd;
var yd = "__lodash_hash_undefined__";
function bd(e) {
  return this.__data__.set(e, yd), this;
}
function wd(e) {
  return this.__data__.has(e);
}
function Ut(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new we(); ++t < r; )
    this.add(e[t]);
}
Ut.prototype.add = Ut.prototype.push = bd;
Ut.prototype.has = wd;
function Sd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return true;
  return false;
}
function Od(e, t) {
  return e.has(t);
}
var $d = 1, Ed = 2;
function fs(e, t, r, n, i, s) {
  var a = r & $d, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return false;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var h = -1, m = true, d = r & Ed ? new Ut() : void 0;
  for (s.set(e, t), s.set(t, e); ++h < o; ) {
    var p = e[h], f = t[h];
    if (n)
      var g = a ? n(f, p, h, t, e, s) : n(p, f, h, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      m = false;
      break;
    }
    if (d) {
      if (!Sd(t, function(S, I) {
        if (!Od(d, I) && (p === S || i(p, S, r, n, s)))
          return d.push(I);
      })) {
        m = false;
        break;
      }
    } else if (!(p === f || i(p, f, r, n, s))) {
      m = false;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
}
var Td = de.Uint8Array;
const zn = Td;
function xd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function _d(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Id = 1, Ad = 2, Pd = "[object Boolean]", qd = "[object Date]", Cd = "[object Error]", Fd = "[object Map]", Ld = "[object Number]", kd = "[object RegExp]", Dd = "[object Set]", Bd = "[object String]", Rd = "[object Symbol]", Md = "[object ArrayBuffer]", jd = "[object DataView]", Gn = Ae ? Ae.prototype : void 0, vr = Gn ? Gn.valueOf : void 0;
function Nd(e, t, r, n, i, s, a) {
  switch (r) {
    case jd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Md:
      return !(e.byteLength != t.byteLength || !s(new zn(e), new zn(t)));
    case Pd:
    case qd:
    case Ld:
      return Xr(+e, +t);
    case Cd:
      return e.name == t.name && e.message == t.message;
    case kd:
    case Bd:
      return e == t + "";
    case Fd:
      var o = xd;
    case Dd:
      var l = n & Id;
      if (o || (o = _d), e.size != t.size && !l)
        return false;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Ad, a.set(e, t);
      var c = fs(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Rd:
      if (vr)
        return vr.call(e) == vr.call(t);
  }
  return false;
}
function Vd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Ud(e, t, r) {
  var n = t(e);
  return L(e) ? n : Vd(n, r(e));
}
function ps(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Hd() {
  return [];
}
var Wd = Object.prototype, zd = Wd.propertyIsEnumerable, Xn = Object.getOwnPropertySymbols, Gd = Xn ? function(e) {
  return e == null ? [] : (e = Object(e), ps(Xn(e), function(t) {
    return zd.call(e, t);
  }));
} : Hd;
const Xd = Gd;
function Kn(e) {
  return Ud(e, Wt, Xd);
}
var Kd = 1, Yd = Object.prototype, Qd = Yd.hasOwnProperty;
function Jd(e, t, r, n, i, s) {
  var a = r & Kd, o = Kn(e), l = o.length, u = Kn(t), c = u.length;
  if (l != c && !a)
    return false;
  for (var h = l; h--; ) {
    var m = o[h];
    if (!(a ? m in t : Qd.call(t, m)))
      return false;
  }
  var d = s.get(e), p = s.get(t);
  if (d && p)
    return d == t && p == e;
  var f = true;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++h < l; ) {
    m = o[h];
    var S = e[m], I = t[m];
    if (n)
      var A = a ? n(I, S, m, t, e, s) : n(S, I, m, e, t, s);
    if (!(A === void 0 ? S === I || i(S, I, r, n, s) : A)) {
      f = false;
      break;
    }
    g || (g = m == "constructor");
  }
  if (f && !g) {
    var w = e.constructor, E = t.constructor;
    w != E && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (f = false);
  }
  return s.delete(e), s.delete(t), f;
}
var Zd = Ge(de, "DataView");
const Ar = Zd;
var ef = Ge(de, "Promise");
const Pr = ef;
var tf = Ge(de, "Set");
const qr = tf;
var rf = Ge(de, "WeakMap");
const Cr = rf;
var Yn = "[object Map]", nf = "[object Object]", Qn = "[object Promise]", Jn = "[object Set]", Zn = "[object WeakMap]", ei = "[object DataView]", sf = ze(Ar), af = ze(St), of = ze(Pr), lf = ze(qr), uf = ze(Cr), Me = Ce;
(Ar && Me(new Ar(new ArrayBuffer(1))) != ei || St && Me(new St()) != Yn || Pr && Me(Pr.resolve()) != Qn || qr && Me(new qr()) != Jn || Cr && Me(new Cr()) != Zn) && (Me = function(e) {
  var t = Ce(e), r = t == nf ? e.constructor : void 0, n = r ? ze(r) : "";
  if (n)
    switch (n) {
      case sf:
        return ei;
      case af:
        return Yn;
      case of:
        return Qn;
      case lf:
        return Jn;
      case uf:
        return Zn;
    }
  return t;
});
const ti = Me;
var cf = 1, ri = "[object Arguments]", ni = "[object Array]", Lt = "[object Object]", df = Object.prototype, ii = df.hasOwnProperty;
function ff(e, t, r, n, i, s) {
  var a = L(e), o = L(t), l = a ? ni : ti(e), u = o ? ni : ti(t);
  l = l == ri ? Lt : l, u = u == ri ? Lt : u;
  var c = l == Lt, h = u == Lt, m = l == u;
  if (m && yr(e)) {
    if (!yr(t))
      return false;
    a = true, c = false;
  }
  if (m && !c)
    return s || (s = new me()), a || vi(e) ? fs(e, t, r, n, i, s) : Nd(e, t, l, r, n, i, s);
  if (!(r & cf)) {
    var d = c && ii.call(e, "__wrapped__"), p = h && ii.call(t, "__wrapped__");
    if (d || p) {
      var f = d ? e.value() : e, g = p ? t.value() : t;
      return s || (s = new me()), i(f, g, r, n, s);
    }
  }
  return m ? (s || (s = new me()), Jd(e, t, r, n, i, s)) : false;
}
function ir(e, t, r, n, i) {
  return e === t ? true : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : ff(e, t, r, n, ir, i);
}
var pf = 1, hf = 2;
function mf(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return false;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return false;
    } else {
      var h = new me();
      if (n)
        var m = n(u, c, l, e, t, h);
      if (!(m === void 0 ? ir(c, u, pf | hf, n, h) : m))
        return false;
    }
  }
  return true;
}
function hs(e) {
  return e === e && !H(e);
}
function vf(e) {
  for (var t = Wt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, hs(i)];
  }
  return t;
}
function ms(e, t) {
  return function(r) {
    return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function gf(e) {
  var t = vf(e);
  return t.length == 1 && t[0][2] ? ms(t[0][0], t[0][1]) : function(r) {
    return r === e || mf(r, e, t);
  };
}
function yf(e, t) {
  return e != null && t in Object(e);
}
function bf(e, t) {
  return e != null && Di(e, t, yf);
}
var wf = 1, Sf = 2;
function Of(e, t) {
  return Gr(e) && hs(t) ? ms($t(e), t) : function(r) {
    var n = et(r, e);
    return n === void 0 && n === t ? bf(r, e) : ir(t, n, wf | Sf);
  };
}
function $f(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ef(e) {
  return function(t) {
    return es(t, e);
  };
}
function Tf(e) {
  return Gr(e) ? $f($t(e)) : Ef(e);
}
function xt(e) {
  return typeof e == "function" ? e : e == null ? yi : typeof e == "object" ? L(e) ? Of(e[0], e[1]) : gf(e) : Tf(e);
}
function xf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ht(t)) {
      var s = xt(r);
      t = Wt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function _f(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var si = 1 / 0, If = 17976931348623157e292;
function Af(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === si || e === -si) {
    var t = e < 0 ? -1 : 1;
    return t * If;
  }
  return e === e ? e : 0;
}
function cn(e) {
  var t = Af(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Pf = Math.max;
function qf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : cn(r);
  return i < 0 && (i = Pf(n + i, 0)), _f(e, xt(t), i);
}
var Cf = xf(qf);
const dn = Cf, Ff = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    filepond: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    jsFilepondOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    server: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    accept: {
      type: Array,
      required: false,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    existingSuffix: {
      type: String,
      required: false,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: false,
      default: "_order"
    },
    dusk: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: false
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? Z(e) ? e : L(e) ? e.map(this.extractMetadataFromExistingFile) : H(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-exif-orientation")), e.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const m = ie.CancelToken.source();
              return ie({
                url: a.preview_url,
                method: "GET",
                cancelToken: m.token,
                responseType: "blob"
              }).then((d) => {
                const p = new File([d.data], a.name, { type: a.type });
                o(p);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  m.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, h, m) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const f = ie.CancelToken.source();
            ie({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: f.token,
              onUploadProgress: (g) => {
                h(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var S;
              axios.isCancel(g) ? m() : c((S = g.response) == null ? void 0 : S.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ie({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = false), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = dn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, Lf = { ref: "file" };
function kf(e, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", Lf, [
    vueExports.renderSlot(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Df = /* @__PURE__ */ Le(Ff, [["render", kf]]), Bf = {
  inject: ["stack"],
  computed: {
    values() {
      return v.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return G(e.values, t);
      },
      ...this.values
    });
  }
};
function fn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && gs(t, vs(r, n), e[n]);
  return t;
}
function vs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function gs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => gs(e, vs(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  fn(r, e, t);
}
var Rf = "[object Boolean]";
function ys(e) {
  return e === true || e === false || Pe(e) && Ce(e) == Rf;
}
function bs(e, t) {
  var r = {};
  return t = xt(t), Mr(e, function(n, i, s) {
    ts(r, i, t(n, i, s));
  }), r;
}
function ws(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Je(e, t, r) {
  return e = Yr(e), r = r == null ? 0 : ws(cn(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Mf = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: false,
      default: false
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollOnError: {
      type: Boolean,
      required: false,
      default: true
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: false,
      default: false
    },
    escapeValidationMessages: {
      type: Boolean,
      required: false,
      default: true
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    },
    debounce: {
      type: Number,
      required: false,
      default: 0
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: false,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      processingInBackground: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: false,
      recentlyUnsuccessful: false,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return v.validationErrors(this.stack);
    },
    errors() {
      return bs(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = Zt(() => {
      this.request(this.background);
    }, this.debounce);
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? false : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === true ? this.$watch("values", () => {
      this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: true }) : L(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: true });
    }), this.isMounted = true;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $fileAsUrl(e) {
      const t = this.values[e];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, false), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e, t) {
      return rs(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = true;
      if (e._flatpickr && (t = false), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = false), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (!this.$uploading) {
        if (e) {
          const t = e.submitter;
          t && t.name && this.$put(t.name, t.value);
        }
        if (!this.confirm)
          return this.request();
        v.confirm(
          ys(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton,
          !!this.requirePassword,
          this.requirePasswordOnce,
          !!this.confirmDanger
        ).then((t) => {
          if (!this.requirePassword) {
            this.request();
            return;
          }
          this.method.toUpperCase() !== "GET" && t && this.$put(
            Z(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
            t
          ), this.request();
        }).catch(() => {
        });
      }
    },
    async request(e) {
      if (typeof e > "u" && (e = false), this.$uploading)
        return;
      await this.$nextTick(), this.background ? this.processingInBackground = true : this.processing = true, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = false, this.recentlyUnsuccessful = false, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : fn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = true), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = true);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.processingInBackground = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, { ...r, ...this.headers }).then(i).catch(async (s) => {
        if (this.processing = false, this.processingInBackground = false, this.wasUnsuccessful = true, this.recentlyUnsuccessful = true, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = false, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = dn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
        );
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$all",
              "$attrs",
              "$put",
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ].includes(r) || Je(r, "__v_") ? e[r] : (!e.isMounted && !G(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), et(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, jf = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Nf = { ref: "input" };
function Vf(e, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", Nf, [
    vueExports.renderSlot(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Uf = /* @__PURE__ */ Le(jf, [["render", Vf]]), Hf = {
  components: { Render: se },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, v.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Wf(e, t, r, n, i, s) {
  const a = vueExports.resolveComponent("Render");
  return i.html ? (vueExports.openBlock(), vueExports.createBlock(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? vueExports.renderSlot(e.$slots, "default", { key: 1 }) : vueExports.createCommentVNode("", true);
}
const zf = /* @__PURE__ */ Le(Hf, [["render", Wf]]), Gf = ["href", "onClick"], Xf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: false,
      default: "#"
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    data: {
      type: Object,
      required: false,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e) => e.requirePasswordOnce
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    },
    away: {
      type: Boolean,
      required: false,
      default: false
    },
    keepModal: {
      type: Boolean,
      required: false,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = vueExports.inject("stack"), n = vueExports.ref(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        ys(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
      ).then((a) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        a && (n.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const o = r > 0 && t.keepModal;
      if (t.modal && !o)
        return v.modal(t.href);
      if (t.slideover && !o)
        return v.slideover(t.href);
      if (Je(t.href, "#")) {
        if (v.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = v.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = true), l === "GET")
        return t.replace ? v.replace(t.href, u) : v.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : fn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(Z(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (vueExports.openBlock(), vueExports.createElementBlock("a", {
      href: e.href,
      onClick: vueExports.withModifiers(i, ["prevent"])
    }, [
      vueExports.renderSlot(a.$slots, "default")
    ], 8, Gf));
  }
}, Kf = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    },
    position: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    animate: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: true,
      isOpen: false
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      animate: this.staticAnimate,
      position: this.position,
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Yf = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "modal"
    }
  },
  setup(e) {
    const t = e;
    return v.registerPreloadedModal(t.name, t.html, t.type), () => {
    };
  }
}, Qf = {
  components: { Render: se },
  props: {
    name: {
      type: String,
      required: true
    },
    on: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: false,
      default: null
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: false
    };
  },
  mounted() {
    this.on.forEach((e) => {
      this.$splade.on(e, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = true, v.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = false, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function Jf(e, t, r, n, i, s) {
  const a = vueExports.resolveComponent("Render");
  return i.html ? (vueExports.openBlock(), vueExports.createBlock(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : i.loading ? vueExports.renderSlot(e.$slots, "placeholder", { key: 1 }) : vueExports.renderSlot(e.$slots, "default", { key: 2 });
}
const Zf = /* @__PURE__ */ Le(Qf, [["render", Jf]]), ep = {
  props: {
    script: {
      type: String,
      required: true
    }
  },
  mounted() {
    var e = new Function("obj", "with (obj) { " + this.script + "}");
    e = e.bind(this, this), e(this.script);
  },
  render() {
    return "";
  }
};
function tp(e, t) {
  var r = -1, n = Ht(e) ? Array(e.length) : [];
  return jr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function Ss(e, t) {
  var r = L(e) ? ki : tp;
  return r(e, xt(t));
}
const rp = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    },
    remoteUrl: {
      type: String,
      required: false,
      default: null
    },
    optionValue: {
      type: String,
      required: false,
      default: null
    },
    optionLabel: {
      type: String,
      required: false,
      default: null
    },
    remoteRoot: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: false
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && L(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = true, ie({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? et(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = false;
        if (ee(t, (s) => {
          var a = document.createElement("option");
          a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && (i = true), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = false;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = false;
      }).catch(() => {
        this.loading = false;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = L(e);
      if (!r && H(e))
        if (this.optionValue && this.optionLabel) {
          let n = et(e, this.optionValue);
          Z(n) || (n = `${n}`), t.push({
            value: n,
            label: et(e, this.optionLabel)
          });
        } else
          ee(e, (n, i) => {
            Z(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = Ss(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return dn(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: true })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(true);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, np = { ref: "select" };
function ip(e, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", np, [
    vueExports.renderSlot(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const sp = /* @__PURE__ */ Le(rp, [["render", ip]]), ap = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = bs(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return G(t, i);
      },
      hasShared(i) {
        return G(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function op(e, t, r) {
  e = Yr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : ws(cn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function lp(e, t) {
  var r = [];
  return jr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function up(e, t) {
  var r = L(e) ? ps : lp;
  return r(e, xt(t));
}
function ai(e, t) {
  return ir(e, t);
}
const cp = {
  inject: ["stack"],
  props: {
    baseUrl: {
      type: String,
      required: false,
      default() {
        return window.location.pathname;
      }
    },
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    },
    searchDebounce: {
      type: Number,
      required: false,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: false,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: false,
      processingAction: false
    };
  },
  computed: {
    columnsAreToggled() {
      return !ai(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = Zt(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    ee(e, (r, n) => {
      if (Je(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? v.modal(e) : t === "slideover" ? v.slideover(e) : v.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, ee(e, (t, r) => {
        Je(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, true);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = up(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : true);
      let n = Ss(r, (i) => i.key).sort();
      ai(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], vueExports.nextTick(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!op(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e] = t, (Je(e, "perPage") || Je(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = true);
      let n = {};
      ee(e, (u, c) => {
        if (!L(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((h, m) => {
          n[`${c}[${m}]`] = h;
        });
      });
      let i = "";
      ee(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : v.replaceUrlOfCurrentPage(s);
      this.isLoading = true;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": v.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      v.replace(s, o).then(() => {
        this.isLoading = false, typeof t < "u" && t && vueExports.nextTick(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = false);
      let a = null;
      if (t)
        try {
          a = await v.confirm(t === true ? "" : t, r, n, i, !!s);
        } catch {
          return false;
        }
      this.isLoading = true;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = Z(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, false).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = L(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? true : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, dp = {
  inheritAttrs: false,
  data() {
    return {
      isMounted: false,
      Teleport: vueExports.Teleport
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function fp(e, t, r, n, i, s) {
  return vueExports.withDirectives((vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(i.isMounted ? i.Teleport : "div"), vueExports.normalizeProps(vueExports.guardReactiveProps(e.$attrs)), {
    default: vueExports.withCtx(() => [
      vueExports.renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [vueExports.vShow, i.isMounted]
  ]);
}
const pp = /* @__PURE__ */ Le(dp, [["render", fp]]), hp = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        vueExports.nextTick(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, mp = { ref: "textarea" };
function vp(e, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", mp, [
    vueExports.renderSlot(e.$slots, "default")
  ], 512);
}
const gp = /* @__PURE__ */ Le(hp, [["render", vp]]), yp = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, bp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], wp = {
  computed: {
    toasts: function() {
      return v.toastsReversed.value;
    },
    hasBackdrop: function() {
      return v.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      v.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: bp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: se,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Sp = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : false;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && ds(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Op = {
  render() {
    return this.$slots.default({
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, $p = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && vueExports.nextTick(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Zt(i, 100)), i();
  }
}, Fr = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Fr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Fr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Ip = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : false, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Hl).component(`${r}Confirm`, Lu).component(`${r}Data`, ju).component(`${r}Defer`, Zu).component(`${r}Dialog`, ec).component(`${r}Dropdown`, ld).component(`${r}DynamicHtml`, ud).component(`${r}Errors`, cd).component(`${r}Event`, dd).component(`${r}File`, Df).component(`${r}Flash`, Bf).component(`${r}Form`, Mf).component(`${r}Input`, Uf).component(`${r}Lazy`, zf).component(`${r}Modal`, Kf).component(`${r}OnClickOutside`, ns).component(`${r}PreloadedModal`, Yf).component(`${r}Rehydrate`, Zf).component(`${r}Render`, se).component(`${r}Script`, ep).component(`${r}Select`, sp).component(`${r}State`, ap).component(`${r}Table`, cp).component(`${r}Teleport`, pp).component(`${r}Textarea`, gp).component(`${r}Toast`, yp).component(`${r}Toasts`, wp).component(`${r}Toggle`, Sp).component(`${r}Transition`, Op).component(t.link_component, Xf).directive(`${r}PreserveScroll`, $p), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      H(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Fr.init(t.progress_bar);
    }
    ee(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Ap(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : true;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
Ap(createServer, renderToString, (props) => {
  return vueExports.createSSRApp({
    render: xp(props)
  }).use(Ip);
});
