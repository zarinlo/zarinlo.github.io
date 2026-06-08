(function () {
  function initMenu() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector("[data-menu-toggle]");
    var menu = document.querySelector("[data-site-menu]");

    if (!header || !toggle || !menu || header.getAttribute("data-menu-bound") === "true") {
      return;
    }

    header.setAttribute("data-menu-bound", "true");

    function setOpenState(isOpen) {
      header.setAttribute("data-menu-open", isOpen ? "true" : "false");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    function closeMenu() {
      setOpenState(false);
    }

    toggle.addEventListener("click", function () {
      setOpenState(header.getAttribute("data-menu-open") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    });

    document.addEventListener("pjax:load", closeMenu);
    setOpenState(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenu);
  } else {
    initMenu();
  }
})();
