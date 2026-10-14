// Deep links (e.g. search results): the browser's own scroll to `#anchor` is
// dropped on these pages (smooth scrolling + content that shifts while loading),
// so land on the target explicitly, under the sticky navbar.
(function () {
  function target() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return id ? document.getElementById(id) : null;
  }

  function goTo(el) {
    const nav = document.getElementById("mainNavbar");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const top = el.getBoundingClientRect().top + window.scrollY - Math.max(navHeight + 16, margin);
    window.scrollTo({ top: Math.max(top, 0), behavior: "instant" });
  }

  function run() {
    const el = target();
    if (!el) return;
    goTo(el);
    // Images and fonts settle after `load`: correct the position once they have
    setTimeout(() => goTo(el), 400);
  }

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
  window.addEventListener("hashchange", () => {
    const el = target();
    if (el) goTo(el);
  });
})();
