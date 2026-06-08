(function () {
  function normalizePath(path) {
    if (!path) return "/";
    if (!path.endsWith("/")) path += "/";
    return path;
  }

  function updateNavActive() {
    var currentPath = normalizePath(window.location.pathname);
    document.querySelectorAll("[data-nav-path]").forEach(function (link) {
      var navPath = normalizePath(link.getAttribute("data-nav-path"));
      var isActive = currentPath === navPath;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateNavActive);
  } else {
    updateNavActive();
  }

  document.addEventListener("pjax:load", updateNavActive);
  window.addEventListener("popstate", updateNavActive);
})();
