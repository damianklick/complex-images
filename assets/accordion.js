/* https://github.com/KlickInc/klick-accessibility/tree/master/components/accordion */
/* dist/accordion.js v1.3.2 Tue Sep 01 2020 17:04:54 GMT-0400 (Eastern Daylight Time) */
!(function(t, e) {
  var a = "object" == typeof accordion_debug_hooks ? accordion_debug_hooks : {};
  "object" == typeof exports
    ? (module.exports = e(
        t.document,
        a,
        require("@klickinc/klick-component-shared")
      ))
    : (t.accordion = e(t.document, a, t.kAccComponentLib));
})("object" == typeof window ? window : this, function(n, t, e) {
  function u(t) {
    return {
      multiselect: l.getAttribute(t, "data-multiselect", {
        defaultValue: "false",
        valid: ["true", "false"]
      }),
      autoinit: l.getAttribute(t, "data-autoinit", {
        defaultValue: "true",
        valid: ["true", "false"]
      }),
      prepend: l.getAttribute(t, "data-prepend-id", { defaultValue: "" }),
      append: l.getAttribute(t, "data-append-id", { defaultValue: "" })
    };
  }
  function a(t) {
    l.defineHooks(
      [
        "beforeInit",
        "afterInit",
        "beforeCollapse",
        "afterCollapse",
        "beforeExpand",
        "afterExpand",
        "beforeToggle",
        "afterToggle"
      ],
      t
    );
  }
  var r,
    d = "accordion",
    l = new e(n, d, t),
    o = l.isDOM(n),
    i = function(t) {
      var a, e, r, o, i;
      "true" !== t.getAttribute("data-initialized") &&
        t.getAttribute("data-component") === d &&
        (l.tagComponent(t, 0),
        (a = u(t)),
        l.execHook("before", "init", t, a),
        (e = ["data", d, "group"].join("-")),
        (r = t.getAttribute(e)),
        t.setAttribute("role", "tablist"),
        t.setAttribute("aria-multiselectable", a.multiselect),
        t.setAttribute("data-initialized", "true"),
        (o = t.querySelectorAll("[data-trigger][" + e + '="' + r + '"]')),
        (i = t.querySelectorAll("[data-panel][" + e + '="' + r + '"]')),
        o.forEach(function(t, e) {
          !(function(t, e, a) {
            var r = t.querySelector("button"),
              o = r.getAttribute("data-" + d + "-group"),
              i = a.getAttribute("id");
            (null !== i && "" !== i) ||
              ((i = l.getUniqueId("panel-" + o + "-" + e)),
              a.setAttribute("id", i)),
              r.setAttribute("aria-controls", i);
            var n = r.getAttribute("id");
            (null !== n && "" !== n) ||
              ((n = l.getUniqueId("trigger-" + o + "-" + e)),
              r.setAttribute("id", n)),
              a.setAttribute("aria-labelledby", n),
              ("true" === r.getAttribute("aria-expanded") ? k : x)(r);
          })(
            (t = (function(t, e, a) {
              var r = l.getAttribute(t, "data-initial-state", {
                  defaultValue: "collapsed",
                  valid: ["collapsed", "expanded"]
                }),
                o = {};
              ["prepend", "append"].forEach(function(t) {
                var e = n.getElementById(a[t]);
                o[t] = e ? e.innerHTML : "";
              });
              var i =
                "<button " +
                [
                  "data-trigger",
                  "data-trigger-" + d,
                  'role="tab"',
                  'aria-expanded="' +
                    ("expanded" === r ? "true" : "false") +
                    '"',
                  'data-state="' + r + '"',
                  "data-" + d + '-group="' + e + '"'
                ].join(" ") +
                ">";
              return (
                (i += o.prepend + t.innerHTML + o.append),
                (i += "</button>"),
                (t.innerHTML = i),
                t.removeAttribute("data-trigger"),
                t.removeAttribute("data-trigger-" + d),
                t.removeAttribute("data-" + d + "-group"),
                t
              );
            })(t, r, a)),
            e,
            i[e]
          );
        }),
        l.execHook("after", "init", t, a));
    },
    c = function(t) {
      var e,
        a = t.target.closest("[data-trigger-" + d + "]");
      a && ((e = f(a)), g(a, e));
    },
    f = function(t) {
      return u(p(t));
    },
    p = function(t) {
      var e = t.getAttribute("data-" + d + "-group");
      return n.querySelector(
        '[data-component="' + d + '"][data-' + d + '-group="' + e + '"]'
      );
    },
    g = function(t, e) {
      e = void 0 === e ? f(t) : e;
      var a = p(t),
        r = t.getAttribute("aria-expanded");
      l.execHook("before", "toggle", a, e, t),
        (r =
          "true" === r
            ? (v(t, e), "false")
            : ("false" === e.multiselect && s(a, e), m(t, e), "true")),
        l.execHook("after", "toggle", a, e, t, r);
    },
    s = function(t, e) {
      var a;
      void 0 !== t && (a = t.getAttribute("data-" + d + "-group")),
        (void 0 === a ? b() : [a]).forEach(function(t) {
          A(t, e, v);
        });
    },
    b = function() {
      var a = [];
      return (
        n
          .querySelectorAll(
            '[data-component="' + d + '"][data-initialized="true"]'
          )
          .forEach(function(t) {
            var e = l.getAttribute(t, "data-" + d + "-group", {
              defaultValue: !1
            });
            e && a.push(e);
          }),
        a
      );
    },
    A = function(t, e, a) {
      var r = "[data-trigger-" + d + "][data-" + d + '-group="' + t + '"]',
        o = n.querySelectorAll(r);
      (e = void 0 === e ? f(o[0]) : e),
        o.forEach(function(t) {
          a(t, e);
        });
    },
    v = function(t, e) {
      var a;
      "false" !== t.getAttribute("aria-expanded") &&
        ((e = void 0 === e ? f(t) : e),
        (a = p(t)),
        l.execHook("before", "collapse", a, e, t),
        (t = x(t)),
        l.execHook("after", "collapse", a, e, t));
    },
    x = function(t) {
      var e = t.getAttribute("aria-controls"),
        a = n.getElementById(e);
      return (
        t.setAttribute("aria-expanded", "false"),
        t.setAttribute("data-state", "collapsed"),
        a.setAttribute("data-state", "collapsed"),
        t
      );
    },
    m = function(t, e) {
      var a;
      "true" !== t.getAttribute("aria-expanded") &&
        ((e = void 0 === e ? f(t) : e),
        (a = p(t)),
        l.execHook("before", "expand", a, e, t),
        (t = k(t)),
        l.execHook("after", "expand", a, e, t));
    },
    k = function(t) {
      var e = t.getAttribute("aria-controls"),
        a = n.getElementById(e);
      return (
        t.setAttribute("aria-expanded", "true"),
        t.setAttribute("data-state", "expanded"),
        a.setAttribute("data-state", "expanded"),
        t
      );
    };
  return (
    a({}),
    o &&
      (n.addEventListener("click", c, !1),
      (r = '[data-component="' + d + '"]'),
      l.tagComponents(r),
      n.querySelectorAll(r).forEach(function(t) {
        "true" ===
          l.getAttribute(t, "data-autoinit", {
            defaultValue: "true",
            valid: ["true", "false"]
          }) && i(t);
      })),
    {
      init: function(t) {
        o && i(t);
      },
      collapse: function(t) {
        o && v(t);
      },
      collapseAll: function(t) {
        o && s(t);
      },
      expand: function(t) {
        o && m(t);
      },
      expandAll: function(t) {
        var e, a, r;
        o &&
          (void 0 !== (e = t) && (r = e.getAttribute("data-" + d + "-group")),
          (void 0 === r ? b() : [r]).forEach(function(t) {
            A(t, a, m);
          }));
      },
      toggle: function(t) {
        o && g(t);
      },
      defineHooks: a
    }
  );
});
