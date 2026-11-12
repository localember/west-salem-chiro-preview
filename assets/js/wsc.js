(function () {
  // Dropdown / mobile submenu
  document.querySelectorAll('.apx-nav__item--has-sub > .apx-nav__link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth > 1119) return;
      e.preventDefault();
      var item = link.parentElement;
      var open = item.classList.contains('is-open');
      document.querySelectorAll('.apx-nav__item--has-sub.is-open').forEach(function (el) {
        if (el !== item) el.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !open);
    });
  });

  // Inactive preview forms
  document.querySelectorAll('form.wsc-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.wsc-form-note');
      if (note) {
        note.classList.add('is-visible');
        note.focus && note.focus();
      }
    });
  });
})();
