(function () {
  var main = document.getElementById("main");
  if (!main) return;

  var HOME_PATH = "/";

  function isInternal(href) {
    try {
      var u = new URL(href, window.location.origin);
      return u.origin === window.location.origin && u.pathname !== window.location.pathname;
    } catch (e) {
      return false;
    }
  }

  function normalizePath(pathname) {
    if (!pathname || pathname === "") return "/";
    return pathname.endsWith("/") ? pathname : pathname + "/";
  }

  function isSectionPage(pathname) {
    var path = normalizePath(pathname);
    return path === "/media/" || path === "/labs/";
  }

  function load(url, push) {
    fetch(url, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var newMain = doc.getElementById("main");
        var newTitle = doc.querySelector("title");
        var hash = "";
        if (newMain) main.innerHTML = newMain.innerHTML;
        if (newTitle) document.title = newTitle.textContent;
        if (push !== false) window.history.pushState({ pjax: true }, "", url);
        try {
          hash = new URL(url, window.location.origin).hash;
        } catch (e) {}

        document.dispatchEvent(new CustomEvent("pjax:load"));

        if (hash) {
          var target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "instant", block: "start" });
            return;
          }
        }

        main.scrollIntoView({ behavior: "instant", block: "start" });
      })
      .catch(function () {
        window.location.href = url;
      });
  }

  function seedHomeHistory() {
    var path = normalizePath(window.location.pathname);
    if (path === HOME_PATH || !isSectionPage(path)) return;

    var nav = window.performance && performance.getEntriesByType
      ? performance.getEntriesByType("navigation")[0]
      : null;
    if (nav && nav.type === "back_forward") return;

    window.history.pushState({ pjax: true, home: true }, "", HOME_PATH);
    window.history.pushState({ pjax: true }, "", window.location.pathname + window.location.search + window.location.hash);
  }

  if (!window.history.state || !window.history.state.pjax) {
    window.history.replaceState({ pjax: true }, "", window.location.href);
  }

  seedHomeHistory();

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-pjax]");
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var href = a.getAttribute("href");
    if (!href || href.startsWith("#") || !isInternal(href)) return;
    e.preventDefault();
    load(href, true);
  });

  window.addEventListener("popstate", function () {
    load(window.location.href, false);
  });
})();
