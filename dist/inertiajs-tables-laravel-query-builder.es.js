import { ref as S, onMounted as Q, onBeforeUnmount as be, openBlock as a, createElementBlock as h, renderSlot as w, watch as U, resolveComponent as ce, createBlock as k, withCtx as _, createElementVNode as s, createVNode as j, normalizeClass as C, withModifiers as F, withDirectives as D, vShow as R, resolveDynamicComponent as V, toDisplayString as g, createCommentVNode as x, computed as $, Fragment as P, renderList as O, unref as t, createTextVNode as z, nextTick as ye, getCurrentInstance as we, onUnmounted as ke, Transition as xe } from "vue";
import { createPopper as _e } from "@popperjs/core/lib/popper-lite";
import $e from "@popperjs/core/lib/modifiers/preventOverflow";
import Ce from "@popperjs/core/lib/modifiers/flip";
import Se from "lodash-es/uniq";
import qe from "lodash-es/find";
import K from "qs";
import Fe from "lodash-es/clone";
import Be from "lodash-es/filter";
import Pe from "lodash-es/findKey";
import T from "lodash-es/forEach";
import Oe from "lodash-es/isEqual";
import Te from "lodash-es/map";
import je from "lodash-es/pickBy";
const Ie = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, i = S(null), c = S(null);
    return Q(() => {
      i.value = (u) => {
        u.target === c.value || c.value.contains(u.target) || o.do();
      }, document.addEventListener("click", i.value), document.addEventListener("touchstart", i.value);
    }), be(() => {
      document.removeEventListener("click", i.value), document.removeEventListener("touchstart", i.value);
    }), (u, r) => (a(), h("div", {
      ref_key: "root",
      ref: c
    }, [
      w(u.$slots, "default")
    ], 512));
  }
}, Ve = { class: "relative" }, Le = { class: "mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" }, Y = {
  __name: "ButtonWithDropdown",
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  setup(e, { expose: o }) {
    const i = e, c = S(!1), u = S(null);
    function r() {
      c.value = !c.value;
    }
    function n() {
      c.value = !1;
    }
    U(c, () => {
      u.value.update();
    });
    const f = S(null), b = S(null);
    return Q(() => {
      u.value = _e(f.value, b.value, {
        placement: i.placement,
        modifiers: [Ce, $e]
      });
    }), o({ hide: n }), (B, q) => {
      const v = ce("v-btn");
      return a(), k(Ie, { do: n }, {
        default: _(() => [
          s("div", Ve, [
            j(v, {
              ref_key: "button",
              ref: f,
              type: "button",
              dusk: e.dusk,
              disabled: e.disabled,
              class: C(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", { "border-green-300": e.active, "border-gray-300": !e.active, "cursor-not-allowed": e.disabled }]),
              "aria-haspopup": "true",
              onClick: F(r, ["prevent"])
            }, {
              default: _(() => [
                w(B.$slots, "button")
              ]),
              _: 3
            }, 8, ["dusk", "disabled", "class", "onClick"]),
            D(s("div", {
              ref_key: "tooltip",
              ref: b,
              class: "absolute z-10"
            }, [
              s("div", Le, [
                w(B.$slots, "default")
              ])
            ], 512), [
              [R, c.value]
            ])
          ])
        ]),
        _: 3
      });
    };
  }
}, Me = { class: "flex flex-row items-center" }, ze = { class: "uppercase" }, De = ["sorted"], Re = {
  key: 0,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, Ee = {
  key: 1,
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, We = {
  key: 2,
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, Ne = {
  __name: "HeaderCell",
  props: {
    cell: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    function i() {
      o.cell.sortable && o.cell.onSort(o.cell.key);
    }
    return (c, u) => D((a(), h("th", null, [
      (a(), k(V(e.cell.sortable ? "button" : "div"), {
        class: "py-3 px-6 w-full",
        dusk: e.cell.sortable ? `sort-${e.cell.key}` : null,
        onClick: F(i, ["prevent"])
      }, {
        default: _(() => [
          s("span", Me, [
            w(c.$slots, "label", {}, () => [
              s("span", ze, g(e.cell.label), 1)
            ]),
            w(c.$slots, "sort", {}, () => [
              e.cell.sortable ? (a(), h("svg", {
                key: 0,
                "aria-hidden": "true",
                class: C(["w-3 h-3 ml-2", {
                  "text-gray-400": !e.cell.sorted,
                  "text-green-500": e.cell.sorted
                }]),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 320 512",
                sorted: e.cell.sorted
              }, [
                e.cell.sorted ? x("", !0) : (a(), h("path", Re)),
                e.cell.sorted === "asc" ? (a(), h("path", Ee)) : x("", !0),
                e.cell.sorted === "desc" ? (a(), h("path", We)) : x("", !0)
              ], 10, De)) : x("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["dusk", "onClick"]))
    ], 512)), [
      [R, !e.cell.hidden]
    ]);
  }
}, J = {
  translations: {
    next: "Next",
    no_results_found: "No results found",
    of: "of",
    per_page: "per page",
    previous: "Previous",
    results: "results",
    to: "to"
  }
};
function de() {
  return J.translations;
}
function Cr(e, o) {
  J.translations[e] = o;
}
function Sr(e) {
  J.translations = e;
}
const Ae = ["dusk", "value"], He = ["value"], ie = {
  __name: "PerPageSelector",
  props: {
    dusk: {
      type: String,
      default: null,
      required: !1
    },
    value: {
      type: Number,
      default: 15,
      required: !1
    },
    options: {
      type: Array,
      default() {
        return [15, 30, 50, 100];
      },
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, i = de(), c = $(() => {
      let u = [...o.options];
      return u.push(parseInt(o.value)), Se(u).sort((r, n) => r - n);
    });
    return (u, r) => (a(), h("select", {
      name: "per_page",
      dusk: e.dusk,
      value: e.value,
      class: "block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",
      onChange: r[0] || (r[0] = (n) => e.onChange(n.target.value))
    }, [
      (a(!0), h(P, null, O(t(c), (n) => (a(), h("option", {
        key: n,
        value: n
      }, g(n) + " " + g(t(i).per_page), 9, He))), 128))
    ], 40, Ae));
  }
}, Ge = {
  key: 0,
  class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
}, Ke = { key: 0 }, Qe = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 16l-4-4m0 0l4-4m-4 4h18"
  })
], -1), Ue = { class: "hidden sm:inline ml-2" }, Ye = { class: "hidden sm:inline mr-2" }, Je = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  })
], -1), Xe = {
  key: 2,
  class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
}, Ze = { class: "flex flex-row space-x-4 items-center flex-grow" }, et = { class: "hidden lg:block text-sm text-gray-700 flex-grow" }, tt = { class: "font-medium" }, rt = { class: "font-medium" }, nt = { class: "font-medium" }, lt = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, st = { class: "sr-only" }, at = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), ot = { class: "sr-only" }, ut = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })
], -1), it = {
  __name: "Pagination",
  props: {
    onClick: {
      type: Function,
      required: !1
    },
    perPageOptions: {
      type: Array,
      default() {
        return () => [15, 30, 50, 100];
      },
      required: !1
    },
    onPerPageChange: {
      type: Function,
      default() {
        return () => {
        };
      },
      required: !1
    },
    hasData: {
      type: Boolean,
      required: !0
    },
    meta: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const o = e, i = de(), c = $(() => "links" in r.value ? r.value.links.length > 0 : !1), u = $(() => Object.keys(r.value).length > 0), r = $(() => o.meta), n = $(() => "prev_page_url" in r.value ? r.value.prev_page_url : null), f = $(() => "next_page_url" in r.value ? r.value.next_page_url : null), b = $(() => parseInt(r.value.per_page));
    return (B, q) => t(u) ? (a(), h("nav", Ge, [
      !e.hasData || t(r).total < 1 ? (a(), h("p", Ke, g(t(i).no_results_found), 1)) : x("", !0),
      e.hasData ? (a(), h("div", {
        key: 1,
        class: C(["flex-1 flex justify-between", { "sm:hidden": t(c) }])
      }, [
        (a(), k(V(t(n) ? "a" : "div"), {
          class: C([{
            "cursor-not-allowed text-gray-400": !t(n),
            "text-gray-700 hover:text-gray-500": t(n)
          }, "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(n),
          dusk: t(n) ? "pagination-simple-previous" : null,
          onClick: q[0] || (q[0] = F((v) => e.onClick(t(n)), ["prevent"]))
        }, {
          default: _(() => [
            Qe,
            s("span", Ue, g(t(i).previous), 1)
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"])),
        j(ie, {
          dusk: "per-page-mobile",
          value: t(b),
          options: e.perPageOptions,
          "on-change": e.onPerPageChange
        }, null, 8, ["value", "options", "on-change"]),
        (a(), k(V(t(f) ? "a" : "div"), {
          class: C([{
            "cursor-not-allowed text-gray-400": !t(f),
            "text-gray-700 hover:text-gray-500": t(f)
          }, "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),
          href: t(f),
          dusk: t(f) ? "pagination-simple-next" : null,
          onClick: q[1] || (q[1] = F((v) => e.onClick(t(f)), ["prevent"]))
        }, {
          default: _(() => [
            s("span", Ye, g(t(i).next), 1),
            Je
          ]),
          _: 1
        }, 8, ["class", "href", "dusk"]))
      ], 2)) : x("", !0),
      e.hasData && t(c) ? (a(), h("div", Xe, [
        s("div", Ze, [
          j(ie, {
            dusk: "per-page-full",
            value: t(b),
            options: e.perPageOptions,
            "on-change": e.onPerPageChange
          }, null, 8, ["value", "options", "on-change"]),
          s("p", et, [
            s("span", tt, g(t(r).from), 1),
            z(" " + g(t(i).to) + " ", 1),
            s("span", rt, g(t(r).to), 1),
            z(" " + g(t(i).of) + " ", 1),
            s("span", nt, g(t(r).total), 1),
            z(" " + g(t(i).results), 1)
          ])
        ]),
        s("div", null, [
          s("nav", lt, [
            (a(), k(V(t(n) ? "a" : "div"), {
              class: C([{
                "cursor-not-allowed text-gray-400": !t(n),
                "text-gray-500 hover:bg-gray-50": t(n)
              }, "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(n),
              dusk: t(n) ? "pagination-previous" : null,
              onClick: q[2] || (q[2] = F((v) => e.onClick(t(n)), ["prevent"]))
            }, {
              default: _(() => [
                s("span", st, g(t(i).previous), 1),
                at
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"])),
            (a(!0), h(P, null, O(t(r).links, (v, I) => (a(), h("div", { key: I }, [
              w(B.$slots, "link", {}, () => [
                !isNaN(v.label) || v.label === "..." ? (a(), k(V(v.url ? "a" : "div"), {
                  key: 0,
                  href: v.url,
                  dusk: v.url ? `pagination-${v.label}` : null,
                  class: C(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700", {
                    "cursor-not-allowed": !v.url,
                    "hover:bg-gray-50": v.url,
                    "bg-gray-100": v.active
                  }]),
                  onClick: F((W) => e.onClick(v.url), ["prevent"])
                }, {
                  default: _(() => [
                    z(g(v.label), 1)
                  ]),
                  _: 2
                }, 1032, ["href", "dusk", "class", "onClick"])) : x("", !0)
              ])
            ]))), 128)),
            (a(), k(V(t(f) ? "a" : "div"), {
              class: C([{
                "cursor-not-allowed text-gray-400": !t(f),
                "text-gray-500 hover:bg-gray-50": t(f)
              }, "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"]),
              href: t(f),
              dusk: t(f) ? "pagination-next" : null,
              onClick: q[3] || (q[3] = F((v) => e.onClick(t(f)), ["prevent"]))
            }, {
              default: _(() => [
                s("span", ot, g(t(i).next), 1),
                ut
              ]),
              _: 1
            }, 8, ["class", "href", "dusk"]))
          ])
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}, ct = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), dt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "add-search-input-menu",
  class: "min-w-max"
}, ht = ["dusk", "onClick"], ft = {
  __name: "TableAddSearchRow",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    hasSearchInputsWithoutValue: {
      type: Boolean,
      required: !0
    },
    onAdd: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, i = S(null);
    function c(u) {
      o.onAdd(u), i.value.hide();
    }
    return (u, r) => (a(), k(Y, {
      ref_key: "dropdown",
      ref: i,
      dusk: "add-search-row-dropdown",
      disabled: !e.hasSearchInputsWithoutValue,
      class: "w-auto"
    }, {
      button: _(() => [
        ct
      ]),
      default: _(() => [
        s("div", dt, [
          (a(!0), h(P, null, O(e.searchInputs, (n, f) => (a(), h("button", {
            key: f,
            dusk: `add-search-row-${n.key}`,
            class: "text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
            role: "menuitem",
            onClick: F((b) => c(n.key), ["prevent"])
          }, g(n.label), 9, ht))), 128))
        ])
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
}, pt = /* @__PURE__ */ s("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }, null, -1), gt = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
  "clip-rule": "evenodd"
}, null, -1), vt = [
  pt,
  gt
], mt = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "toggle-columns-menu",
  class: "min-w-max"
}, bt = { class: "px-2" }, yt = { class: "divide-y divide-gray-200" }, wt = { class: "text-sm text-gray-900" }, kt = ["aria-pressed", "aria-labelledby", "aria-describedby", "dusk", "onClick"], xt = /* @__PURE__ */ s("span", { class: "sr-only" }, "Column status", -1), _t = {
  __name: "TableColumns",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    hasHiddenColumns: {
      type: Boolean,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e;
    return (i, c) => (a(), k(Y, {
      placement: "bottom-end",
      dusk: "columns-dropdown",
      active: e.hasHiddenColumns
    }, {
      button: _(() => [
        (a(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: C(["h-5 w-5", {
            "text-gray-400": !e.hasHiddenColumns,
            "text-green-400": e.hasHiddenColumns
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, vt, 2))
      ]),
      default: _(() => [
        s("div", mt, [
          s("div", bt, [
            s("ul", yt, [
              (a(!0), h(P, null, O(o.columns, (u, r) => D((a(), h("li", {
                key: r,
                class: "py-2 flex items-center justify-between"
              }, [
                s("p", wt, g(u.label), 1),
                s("button", {
                  type: "button",
                  class: C(["ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500", {
                    "bg-green-500": !u.hidden,
                    "bg-gray-200": u.hidden
                  }]),
                  "aria-pressed": !u.hidden,
                  "aria-labelledby": `toggle-column-${u.key}`,
                  "aria-describedby": `toggle-column-${u.key}`,
                  dusk: `toggle-column-${u.key}`,
                  onClick: F((n) => e.onChange(u.key, u.hidden), ["prevent"])
                }, [
                  xt,
                  s("span", {
                    "aria-hidden": "true",
                    class: C([{
                      "translate-x-5": !u.hidden,
                      "translate-x-0": u.hidden
                    }, "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
                  }, null, 2)
                ], 10, kt)
              ])), [
                [R, u.can_be_hidden]
              ])), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, $t = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
  "clip-rule": "evenodd"
}, null, -1), Ct = [
  $t
], St = {
  role: "menu",
  "aria-orientation": "horizontal",
  "aria-labelledby": "filter-menu",
  class: "min-w-max"
}, qt = { class: "text-xs uppercase tracking-wide bg-gray-100 p-3" }, Ft = { class: "p-2" }, Bt = ["name", "value", "onChange"], Pt = ["value"], Ot = {
  __name: "TableFilter",
  props: {
    hasEnabledFilters: {
      type: Boolean,
      required: !0
    },
    filters: {
      type: Object,
      required: !0
    },
    onFilterChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, i) => (a(), k(Y, {
      placement: "bottom-end",
      dusk: "filters-dropdown",
      active: e.hasEnabledFilters
    }, {
      button: _(() => [
        (a(), h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: C(["h-5 w-5", {
            "text-gray-400": !e.hasEnabledFilters,
            "text-green-400": e.hasEnabledFilters
          }]),
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ct, 2))
      ]),
      default: _(() => [
        s("div", St, [
          (a(!0), h(P, null, O(e.filters, (c, u) => (a(), h("div", { key: u }, [
            s("h3", qt, g(c.label), 1),
            s("div", Ft, [
              c.type === "select" ? (a(), h("select", {
                key: 0,
                name: c.key,
                value: c.value,
                class: "block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",
                onChange: (r) => e.onFilterChange(c.key, r.target.value)
              }, [
                (a(!0), h(P, null, O(c.options, (r, n) => (a(), h("option", {
                  key: n,
                  value: n
                }, g(r), 9, Pt))), 128))
              ], 40, Bt)) : x("", !0)
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["active"]));
  }
}, Tt = { class: "relative" }, jt = {
  __name: "TableGlobalSearch",
  props: {
    label: {
      type: String,
      default: "Search...",
      required: !1
    },
    value: {
      type: String,
      default: "",
      required: !1
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, i) => {
      const c = ce("v-input");
      return a(), h("div", Tt, [
        j(c, {
          class: "block w-full pl-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",
          placeholder: e.label,
          value: e.value,
          type: "text",
          name: "global",
          onInput: i[0] || (i[0] = (u) => e.onChange(u.target.value))
        }, null, 8, ["placeholder", "value"])
      ]);
    };
  }
}, It = { class: "flex rounded-md shadow-sm relative mt-3" }, Vt = ["for"], Lt = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), Mt = ["id", "name", "value", "onInput"], zt = { class: "absolute inset-y-0 right-0 pr-3 flex items-center" }, Dt = ["dusk", "onClick"], Rt = /* @__PURE__ */ s("span", { class: "sr-only" }, "Remove search", -1), Et = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Wt = [
  Rt,
  Et
], Nt = {
  __name: "TableSearchRows",
  props: {
    searchInputs: {
      type: Object,
      required: !0
    },
    forcedVisibleSearchInputs: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    },
    onRemove: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const o = e, i = { el: S([]) };
    let c = $(() => i.el.value);
    function u(r) {
      return o.forcedVisibleSearchInputs.includes(r);
    }
    return U(o.forcedVisibleSearchInputs, (r) => {
      const n = r.length > 0 ? r[r.length - 1] : null;
      !n || ye().then(() => {
        const f = qe(c.value, (b) => b.__vnode.key === n);
        f && f.focus();
      });
    }, { immediate: !0 }), (r, n) => (a(!0), h(P, null, O(e.searchInputs, (f, b) => D((a(), h("div", {
      key: b,
      class: "px-4 sm:px-0"
    }, [
      s("div", It, [
        s("label", {
          for: f.key,
          class: "inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [
          Lt,
          s("span", null, g(f.label), 1)
        ], 8, Vt),
        (a(), h("input", {
          id: f.key,
          ref_for: !0,
          ref: i.el,
          key: f.key,
          name: f.key,
          value: f.value,
          type: "text",
          class: "flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",
          onInput: (B) => e.onChange(f.key, B.target.value)
        }, null, 40, Mt)),
        s("div", zt, [
          s("button", {
            class: "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            dusk: `remove-search-row-${f.key}`,
            onClick: F((B) => e.onRemove(f.key), ["prevent"])
          }, Wt, 8, Dt)
        ])
      ])
    ])), [
      [R, f.value !== null || u(f.key)]
    ])), 128));
  }
}, At = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), Ht = /* @__PURE__ */ s("span", null, "Reset", -1), Gt = [
  At,
  Ht
], Kt = {
  __name: "TableReset",
  props: {
    onClick: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    return (o, i) => (a(), h("button", {
      ref: "button",
      type: "button",
      dusk: "reset-table",
      class: "w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300",
      "aria-haspopup": "true",
      onClick: i[0] || (i[0] = F((...c) => e.onClick && e.onClick(...c), ["prevent"]))
    }, Gt, 512));
  }
}, Qt = (e, o) => {
  const i = e.__vccOpts || e;
  for (const [c, u] of o)
    i[c] = u;
  return i;
}, Ut = {}, Yt = { class: "flex flex-col" }, Jt = { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, Xt = { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, Zt = { class: "shadow border-b border-gray-200 relative" };
function er(e, o) {
  return a(), h("div", Yt, [
    s("div", Jt, [
      s("div", Xt, [
        s("div", Zt, [
          w(e.$slots, "default")
        ])
      ])
    ])
  ]);
}
const tr = /* @__PURE__ */ Qt(Ut, [["render", er]]), rr = ["dusk"], nr = { class: "flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0" }, lr = { class: "order-2 sm:order-1 mr-2 sm:mr-4" }, sr = {
  key: 0,
  class: "flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:mr-4"
}, ar = {
  key: 0,
  class: "order-5 sm:order-3 sm:mr-4 ml-auto"
}, or = { class: "min-w-full divide-y divide-gray-200 bg-white" }, ur = { class: "bg-gray-50" }, ir = { class: "font-medium text-xs uppercase text-left tracking-wider text-gray-500 py-3 px-6" }, cr = { class: "bg-white divide-y divide-gray-200" }, qr = {
  __name: "Table",
  props: {
    inertia: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    name: {
      type: String,
      default: "default",
      required: !1
    },
    striped: {
      type: Boolean,
      default: !1,
      required: !1
    },
    preventOverlappingRequests: {
      type: Boolean,
      default: !0,
      required: !1
    },
    inputDebounceMs: {
      type: Number,
      default: 350,
      required: !1
    },
    preserveScroll: {
      type: [Boolean, String],
      default: !1,
      required: !1
    },
    resource: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    meta: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    data: {
      type: Object,
      default: () => ({}),
      required: !1
    }
  },
  setup(e) {
    const o = e, i = we(), c = i ? i.appContext.config.globalProperties.$inertia : o.inertia, u = S(0), r = $(() => {
      let l = c.page.props.queryBuilderProps ? c.page.props.queryBuilderProps[o.name] || {} : {};
      return l._updates = u.value, l;
    }), n = S(r.value), f = $(() => r.value.pageName), b = S([]), B = S(null), q = $(() => !(r.value.hasToggleableColumns || r.value.hasFilters || r.value.hasSearchInputs || r.value.globalSearch)), v = $(() => Object.keys(o.resource).length === 0 ? o.data : "data" in o.resource ? o.resource.data : o.resource), I = $(() => Object.keys(o.resource).length === 0 ? o.meta : "links" in o.resource && "meta" in o.resource && Object.keys(o.resource.links).length === 4 && "next" in o.resource.links && "prev" in o.resource.links ? {
      ...o.resource.meta,
      next_page_url: o.resource.links.next,
      prev_page_url: o.resource.links.prev
    } : "meta" in o.resource ? o.resource.meta : o.resource), W = $(() => v.value.length > 0 || I.value.total > 0);
    function he(l) {
      b.value = b.value.filter((d) => d != l), E(l, null);
    }
    function X(l) {
      b.value.push(l);
    }
    const fe = $(() => {
      if (b.value.length > 0)
        return !0;
      const l = K.parse(location.search.substring(1));
      if (l[f.value] > 1)
        return !0;
      const p = o.name === "default" ? "" : o.name + "_";
      let m = !1;
      return T(["filter", "columns", "cursor", "sort"], (y) => {
        const M = l[p + y];
        y === "sort" && M === r.value.defaultSort || M !== void 0 && (m = !0);
      }), m;
    });
    function Z() {
      b.value = [], T(n.value.filters, (l, d) => {
        n.value.filters[d].value = null;
      }), T(n.value.searchInputs, (l, d) => {
        n.value.searchInputs[d].value = null;
      }), T(n.value.columns, (l, d) => {
        n.value.columns[d].hidden = l.can_be_hidden ? !r.value.defaultVisibleToggleableColumns.includes(l.key) : !1;
      }), n.value.sort = null, n.value.cursor = null, n.value.page = 1;
    }
    const ee = {};
    function E(l, d) {
      clearTimeout(ee[l]), ee[l] = setTimeout(() => {
        A.value && o.preventOverlappingRequests && A.value.cancel();
        const p = L("searchInputs", l);
        n.value.searchInputs[p].value = d, n.value.cursor = null, n.value.page = 1;
      }, o.inputDebounceMs);
    }
    function te(l) {
      E("global", l);
    }
    function re(l, d) {
      const p = L("filters", l);
      n.value.filters[p].value = d, n.value.cursor = null, n.value.page = 1;
    }
    function ne(l) {
      n.value.cursor = null, n.value.perPage = l, n.value.page = 1;
    }
    function L(l, d) {
      return Pe(n.value[l], (p) => p.key == d);
    }
    function le(l, d) {
      const p = L("columns", l);
      n.value.columns[p].hidden = !d;
    }
    function pe() {
      let l = {};
      return T(n.value.searchInputs, (d) => {
        d.value !== null && (l[d.key] = d.value);
      }), T(n.value.filters, (d) => {
        d.value !== null && (l[d.key] = d.value);
      }), l;
    }
    function ge() {
      const l = n.value.columns;
      let d = Be(l, (m) => !m.hidden), p = Te(d, (m) => m.key).sort();
      return Oe(p, r.value.defaultVisibleToggleableColumns) ? {} : p;
    }
    function ve() {
      const l = pe(), d = ge(), p = {};
      Object.keys(l).length > 0 && (p.filter = l), Object.keys(d).length > 0 && (p.columns = d);
      const m = n.value.cursor, y = n.value.page, M = n.value.sort, ue = n.value.perPage;
      return m && (p.cursor = m), y > 1 && (p.page = y), ue > 1 && (p.perPage = ue), M && (p.sort = M), p;
    }
    function me() {
      const l = K.parse(location.search.substring(1)), d = o.name === "default" ? "" : o.name + "_";
      T(["filter", "columns", "cursor", "sort"], (m) => {
        delete l[d + m];
      }), delete l[f.value], T(ve(), (m, y) => {
        y === "page" ? l[f.value] = m : y === "perPage" ? l.perPage = m : l[d + y] = m;
      });
      let p = K.stringify(l, {
        filter(m, y) {
          return typeof y == "object" && y !== null ? je(y) : y;
        },
        skipNulls: !0,
        strictNullHandling: !0
      });
      return (!p || p === f.value + "=1") && (p = ""), p;
    }
    const N = S(!1), A = S(null);
    function H(l) {
      !l || c.get(
        l,
        {},
        {
          replace: !0,
          preserveState: !0,
          preserveScroll: o.preserveScroll !== !1,
          onBefore() {
            N.value = !0;
          },
          onCancelToken(d) {
            A.value = d;
          },
          onFinish() {
            N.value = !1;
          },
          onSuccess() {
            if ("queryBuilderProps" in c.page.props && (n.value.cursor = r.value.cursor, n.value.page = r.value.page), o.preserveScroll === "table-top") {
              const p = B.value.getBoundingClientRect().top + window.pageYOffset + -8;
              window.scrollTo({ top: p });
            }
            u.value++;
          }
        }
      );
    }
    U(n, () => {
      H(location.pathname + "?" + me());
    }, { deep: !0 });
    const se = () => {
      u.value++;
    };
    Q(() => {
      document.addEventListener("inertia:success", se);
    }), ke(() => {
      document.removeEventListener("inertia:success", se);
    });
    function ae(l) {
      n.value.sort == l ? n.value.sort = `-${l}` : n.value.sort = l, n.value.cursor = null, n.value.page = 1;
    }
    function G(l) {
      const d = L("columns", l);
      return !n.value.columns[d].hidden;
    }
    function oe(l) {
      const d = L("columns", l), p = Fe(r.value.columns[d]);
      return p.onSort = ae, p;
    }
    return (l, d) => (a(), k(xe, null, {
      default: _(() => [
        (a(), h("fieldset", {
          ref_key: "tableFieldset",
          ref: B,
          key: `table-${e.name}`,
          dusk: `table-${e.name}`,
          class: C(["min-w-0", { "opacity-75": N.value }])
        }, [
          s("div", nr, [
            s("div", lr, [
              w(l.$slots, "tableFilter", {
                hasFilters: t(r).hasFilters,
                hasEnabledFilters: t(r).hasEnabledFilters,
                filters: t(r).filters,
                onFilterChange: re
              }, () => [
                t(r).hasFilters ? (a(), k(Ot, {
                  key: 0,
                  "has-enabled-filters": t(r).hasEnabledFilters,
                  filters: t(r).filters,
                  "on-filter-change": re
                }, null, 8, ["has-enabled-filters", "filters"])) : x("", !0)
              ])
            ]),
            t(r).globalSearch ? (a(), h("div", sr, [
              w(l.$slots, "tableGlobalSearch", {
                hasGlobalSearch: t(r).globalSearch,
                label: t(r).globalSearch ? t(r).globalSearch.label : null,
                value: t(r).globalSearch ? t(r).globalSearch.value : null,
                onChange: te
              }, () => [
                t(r).globalSearch ? (a(), k(jt, {
                  key: 0,
                  class: "flex-grow",
                  label: t(r).globalSearch.label,
                  value: t(r).globalSearch.value,
                  "on-change": te
                }, null, 8, ["label", "value"])) : x("", !0)
              ])
            ])) : x("", !0),
            w(l.$slots, "tableReset", {
              canBeReset: "canBeReset",
              onClick: Z
            }, () => [
              t(fe) ? (a(), h("div", ar, [
                j(Kt, { "on-click": Z })
              ])) : x("", !0)
            ]),
            w(l.$slots, "tableAddSearchRow", {
              hasSearchInputs: t(r).hasSearchInputs,
              hasSearchInputsWithoutValue: t(r).hasSearchInputsWithoutValue,
              searchInputs: t(r).searchInputsWithoutGlobal,
              onAdd: X
            }, () => [
              t(r).hasSearchInputs ? (a(), k(ft, {
                key: 0,
                class: "order-3 sm:order-4 mr-2 sm:mr-4",
                "search-inputs": t(r).searchInputsWithoutGlobal,
                "has-search-inputs-without-value": t(r).hasSearchInputsWithoutValue,
                "on-add": X
              }, null, 8, ["search-inputs", "has-search-inputs-without-value"])) : x("", !0)
            ]),
            w(l.$slots, "tableColumns", {
              hasColumns: t(r).hasToggleableColumns,
              columns: t(r).columns,
              hasHiddenColumns: t(r).hasHiddenColumns,
              onChange: le
            }, () => [
              t(r).hasToggleableColumns ? (a(), k(_t, {
                key: 0,
                class: "order-4 mr-4 sm:mr-0 sm:order-5",
                columns: t(r).columns,
                "has-hidden-columns": t(r).hasHiddenColumns,
                "on-change": le
              }, null, 8, ["columns", "has-hidden-columns"])) : x("", !0)
            ])
          ]),
          w(l.$slots, "tableSearchRows", {
            hasSearchRowsWithValue: t(r).hasSearchInputsWithValue,
            searchInputs: t(r).searchInputsWithoutGlobal,
            forcedVisibleSearchInputs: b.value,
            onChange: E
          }, () => [
            t(r).hasSearchInputsWithValue || b.value.length > 0 ? (a(), k(Nt, {
              key: 0,
              "search-inputs": t(r).searchInputsWithoutGlobal,
              "forced-visible-search-inputs": b.value,
              "on-change": E,
              "on-remove": he
            }, null, 8, ["search-inputs", "forced-visible-search-inputs"])) : x("", !0)
          ]),
          w(l.$slots, "tableWrapper", { meta: t(I) }, () => [
            j(tr, {
              class: C({ "mt-3": !t(q) })
            }, {
              default: _(() => [
                w(l.$slots, "table", {}, () => [
                  s("table", or, [
                    s("thead", ur, [
                      w(l.$slots, "head", {
                        show: G,
                        sortBy: ae,
                        header: oe
                      }, () => [
                        s("tr", ir, [
                          (a(!0), h(P, null, O(t(r).columns, (p) => (a(), k(Ne, {
                            key: `table-${e.name}-header-${p.key}`,
                            cell: oe(p.key)
                          }, null, 8, ["cell"]))), 128))
                        ])
                      ])
                    ]),
                    s("tbody", cr, [
                      w(l.$slots, "body", { show: G }, () => [
                        (a(!0), h(P, null, O(t(v), (p, m) => (a(), h("tr", {
                          key: `table-${e.name}-row-${m}`,
                          class: C(["", {
                            "bg-gray-50": e.striped && m % 2,
                            "hover:bg-gray-100": e.striped,
                            "hover:bg-gray-50": !e.striped
                          }])
                        }, [
                          (a(!0), h(P, null, O(t(r).columns, (y) => D((a(), h("td", {
                            key: `table-${e.name}-row-${m}-column-${y.key}`,
                            class: "text-sm py-4 px-6 text-gray-500 whitespace-nowrap"
                          }, [
                            w(l.$slots, `cell(${y.key})`, { item: p }, () => [
                              z(g(p[y.key]), 1)
                            ])
                          ])), [
                            [R, G(y.key)]
                          ])), 128))
                        ], 2))), 128))
                      ])
                    ])
                  ])
                ]),
                w(l.$slots, "pagination", {
                  onClick: H,
                  hasData: t(W),
                  meta: t(I),
                  perPageOptions: t(r).perPageOptions,
                  onPerPageChange: ne
                }, () => [
                  j(it, {
                    "on-click": H,
                    "has-data": t(W),
                    meta: t(I),
                    "per-page-options": t(r).perPageOptions,
                    "on-per-page-change": ne
                  }, null, 8, ["has-data", "meta", "per-page-options"])
                ])
              ]),
              _: 3
            }, 8, ["class"])
          ])
        ], 10, rr))
      ]),
      _: 3
    }));
  }
};
export {
  Y as ButtonWithDropdown,
  Ne as HeaderCell,
  Ie as OnClickOutside,
  it as Pagination,
  qr as Table,
  ft as TableAddSearchRow,
  _t as TableColumns,
  Ot as TableFilter,
  jt as TableGlobalSearch,
  Kt as TableReset,
  Nt as TableSearchRows,
  tr as TableWrapper,
  de as getTranslations,
  Cr as setTranslation,
  Sr as setTranslations
};
