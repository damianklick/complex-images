/* https://github.com/KlickInc/klick-accessibility/tree/master/components/accordion */
/* dist/accordion.debug.js v1.3.2 Tue Sep 01 2020 17:04:54 GMT-0400 (Eastern Daylight Time) */
var accordion_debug_helper = {
    checkTriggersAndPanels: function(e) {
      var t = e.querySelectorAll("[data-trigger]"),
        n = e.querySelectorAll("[data-panel]");
      t.length < 1 &&
        console.warn(
          "Accordion component expected to have at least 1 trigger.",
          e
        ),
        n.length < 1 &&
          console.warn(
            "Accordion component expected to have at least 1 panel.",
            e
          ),
        t.length !== n.length &&
          console.warn(
            "Accordion component expected to have the same number of triggers (" +
              t.length +
              ") as panels (" +
              n.length +
              ").",
            e
          ),
        t.forEach(function(e) {
          e.nodeName.match(/^H[1-6]$/) ||
            console.warn(
              "Triggers are expected to be heading elements. This trigger is",
              e.nodeName,
              e
            );
        });
    },
    checkInitAttrs: function(t) {
      var e = t.querySelectorAll("[data-trigger]"),
        n = t.querySelectorAll("[data-panel]");
      ["role", "aria-multiselectable", "data-initialized"].forEach(function(e) {
        t.hasAttribute(e) &&
          console.warn(
            "Found attribute (" +
              e +
              ") on component, but this normally shouldn't exist until the component is initialized. Was the HTML markup copied from a live page?",
            t
          );
      }),
        [
          "data-trigger-accordion",
          "role",
          "aria-expanded",
          "data-state",
          "data-accordion-group",
          "aria-controls"
        ].forEach(function(t) {
          e.forEach(function(e) {
            e.hasAttribute(t) &&
              console.warn(
                "Found attribute (" +
                  t +
                  ") on trigger, but this normally shouldn't exist until the component is initialized. Was the HTML markup copied from a live page?",
                e
              );
          });
        }),
        ["data-state"].forEach(function(t) {
          n.forEach(function(e) {
            e.hasAttribute(t) &&
              console.warn(
                "Found attribute (" +
                  t +
                  ") on panel, but this normally shouldn't exist until the component is initialized. Was the HTML markup copied from a live page?",
                e
              );
          });
        });
    }
  },
  accordion_debug_hooks = {
    beforeInit: function(e, t, n, o) {
      accordion_debug_helper.checkTriggersAndPanels(e),
        accordion_debug_helper.checkInitAttrs(e);
    }
  };
