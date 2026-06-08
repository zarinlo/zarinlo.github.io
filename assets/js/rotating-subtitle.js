(function () {
  var TYPE_MS = 75;
  var DELETE_MS = 40;
  var HOLD_MS = 1400;
  var timerId = null;

  function stopRotation() {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = null;
    }
  }

  function typePhrase(el, phrase, charIndex, done) {
    el.textContent = phrase.slice(0, charIndex);

    if (charIndex >= phrase.length) {
      timerId = window.setTimeout(done, HOLD_MS);
      return;
    }

    timerId = window.setTimeout(function () {
      typePhrase(el, phrase, charIndex + 1, done);
    }, TYPE_MS);
  }

  function deletePhrase(el, phrase, charIndex, done) {
    el.textContent = phrase.slice(0, charIndex);

    if (charIndex <= 0) {
      done();
      return;
    }

    timerId = window.setTimeout(function () {
      deletePhrase(el, phrase, charIndex - 1, done);
    }, DELETE_MS);
  }

  function cycle(el, items, index) {
    var phrase = items[index];

    typePhrase(el, phrase, 1, function () {
      deletePhrase(el, phrase, phrase.length - 1, function () {
        cycle(el, items, (index + 1) % items.length);
      });
    });
  }

  function startRotation() {
    stopRotation();

    var el = document.querySelector("[data-rotate-text]");
    if (!el) return;

    var items = (el.getAttribute("data-rotate-items") || "")
      .split("|")
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);

    if (items.length < 2) {
      if (items.length === 1) el.textContent = items[0];
      return;
    }

    el.textContent = "";
    cycle(el, items, 0);
  }

  document.addEventListener("DOMContentLoaded", startRotation);
  document.addEventListener("pjax:load", startRotation);
})();
