// ==========================================================================
// SporTour — Interacciones (menú mobile)
// ==========================================================================

(function () {
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');

  if (!burger || !navlinks) return;

  burger.addEventListener('click', function () {
    var open = navlinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navlinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navlinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();