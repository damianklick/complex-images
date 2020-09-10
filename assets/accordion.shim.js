/* https://github.com/KlickInc/klick-accessibility/tree/master/components/accordion */
/* dist/accordion.shim.js v1.3.2 Tue Sep 01 2020 17:04:54 GMT-0400 (Eastern Daylight Time) */
Array.prototype.forEach ||
  (Array.prototype.forEach = function(e, t) {
    for (var n = 0, o = this.length; n < o; ++n)
      e.call(t || this, this[n], n, this);
  }),
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function(e) {
      var t = this;
      do {
        if (t.matches(e)) return t;
        t = t.parentElement || t.parentNode;
      } while (null !== t && 1 === t.nodeType);
      return null;
    }),
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = Array.prototype.forEach),
  "function" != typeof window.CustomEvent &&
    (window.CustomEvent = function(e, t) {
      t = t || { bubbles: !1, cancelable: !1, detail: null };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }),
  window.Element &&
    Element.prototype.attachEvent &&
    !Element.prototype.addEventListener &&
    (function() {
      function e(e, t) {
        Window.prototype[e] = HTMLDocument.prototype[e] = Element.prototype[
          e
        ] = t;
      }
      function t(e) {
        t.interval &&
          document.body &&
          ((t.interval = clearInterval(t.interval)),
          document.dispatchEvent(new CustomEvent("DOMContentLoaded")));
      }
      e("addEventListener", function(e, t) {
        var s = this,
          n = (s.addEventListener.listeners =
            s.addEventListener.listeners || {}),
          u = (n[e] = n[e] || []);
        u.length ||
          s.attachEvent(
            "on" + e,
            (u.event = function(e) {
              var t = (s.document && s.document.documentElement) ||
                s.documentElement || { scrollLeft: 0, scrollTop: 0 };
              (e.currentTarget = s),
                (e.pageX = e.clientX + t.scrollLeft),
                (e.pageY = e.clientY + t.scrollTop),
                (e.preventDefault = function() {
                  e.returnValue = !1;
                }),
                (e.relatedTarget = e.fromElement || null),
                (e.stopImmediatePropagation = function() {
                  (l = !1), (e.cancelBubble = !0);
                }),
                (e.stopPropagation = function() {
                  e.cancelBubble = !0;
                }),
                (e.target = e.srcElement || s),
                (e.timeStamp = +new Date());
              var n = {};
              for (var o in e) n[o] = e[o];
              for (var r, o = 0, a = [].concat(u), l = !0; l && (r = a[o]); ++o)
                for (var i, c = 0; (i = u[c]); ++c)
                  if (i == r) {
                    i.call(s, n);
                    break;
                  }
            })
          ),
          u.push(t);
      }),
        e("removeEventListener", function(e, t) {
          for (
            var n,
              o = this,
              r = (o.addEventListener.listeners =
                o.addEventListener.listeners || {}),
              a = (r[e] = r[e] || []),
              l = a.length - 1;
            (n = a[l]);
            --l
          )
            if (n == t) {
              a.splice(l, 1);
              break;
            }
          !a.length && a.event && o.detachEvent("on" + e, a.event);
        }),
        e("dispatchEvent", function(t) {
          var e = this,
            n = t.type,
            o = (e.addEventListener.listeners =
              e.addEventListener.listeners || {}),
            r = (o[n] = o[n] || []);
          try {
            return e.fireEvent("on" + n, t);
          } catch (e) {
            return void (r.event && r.event(t));
          }
        }),
        Object.defineProperty(Window.prototype, "CustomEvent", {
          get: function() {
            var r = this;
            return function(e, t) {
              var n,
                o = r.document.createEventObject();
              for (n in ((o.type = e), t))
                "cancelable" == n
                  ? (o.returnValue = !t.cancelable)
                  : "bubbles" == n
                  ? (o.cancelBubble = !t.bubbles)
                  : "detail" == n && (o.detail = t.detail);
              return o;
            };
          }
        }),
        (t.interval = setInterval(t, 1)),
        window.addEventListener("load", t);
    })();
