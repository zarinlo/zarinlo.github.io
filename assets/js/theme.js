(function () {
  var STORAGE_KEY = "blog-theme";
  var THEMES = ["light", "cyber"];

  function getStored() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (THEMES.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return "cyber";
  }

  function updateToggle(theme) {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    var isDark = theme === "cyber";
    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
    toggle.setAttribute(
      "title",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    updateToggle(theme);
  }

  function init() {
    applyTheme(getStored());

    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      applyTheme(getStored() === "light" ? "cyber" : "light");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
