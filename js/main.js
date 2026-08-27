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


/* =========================================================
   CARRUSELES SPORTOUR
========================================================= */

(function () {

    function moveCarousel(id, direction) {

        const carousel = document.getElementById(id);

        if (!carousel) return;

        const amount = carousel.clientWidth * 0.75;

        carousel.scrollBy({
            left: amount * direction,
            behavior: "smooth"
        });

    }


    document
        .querySelectorAll("[data-carousel-next]")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const id =
                    button.getAttribute("data-carousel-next");

                moveCarousel(id, 1);

            });

        });


    document
        .querySelectorAll("[data-carousel-prev]")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const id =
                    button.getAttribute("data-carousel-prev");

                moveCarousel(id, -1);

            });

        });

})();


/* ==========================================================================
   SPORTOUR — JS DE LAS 4 PAGES
   PEGAR AL FINAL DE js/main.js
   ========================================================================== */

/* Entrenamiento: tabs */
(function () {
  const tabs = document.querySelectorAll("[data-training-tab]");
  const panels = document.querySelectorAll("[data-training-content]");

  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-training-tab");

      tabs.forEach(function (item) {
        item.classList.remove("active");
      });

      panels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      tab.classList.add("active");

      const panel = document.querySelector(
        '[data-training-content="' + target + '"]'
      );

      if (panel) panel.classList.add("active");
    });
  });
})();

/* Cultura: acordeón */
(function () {
  const items = document.querySelectorAll(".sp-culture-item");

  if (!items.length) return;

  items.forEach(function (item) {
    const button = item.querySelector(".sp-culture-toggle");

    if (!button) return;

    button.addEventListener("click", function () {
      const wasOpen = item.classList.contains("open");

      items.forEach(function (other) {
        other.classList.remove("open");

        const otherButton = other.querySelector(".sp-culture-toggle");
        if (otherButton) {
          otherButton.setAttribute("aria-expanded", "false");
        }
      });

      if (!wasOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
})();

/* Carruseles genéricos. Si ya tenés este código en main.js por Clubes y Estadios,
   NO hace falta pegarlo de nuevo. */
(function () {
  if (window.sportourCarouselReady) return;
  window.sportourCarouselReady = true;

  function moveCarousel(id, direction) {
    const carousel = document.getElementById(id);
    if (!carousel) return;

    carousel.scrollBy({
      left: carousel.clientWidth * 0.75 * direction,
      behavior: "smooth"
    });
  }

  document.querySelectorAll("[data-carousel-next]").forEach(function (button) {
    button.addEventListener("click", function () {
      moveCarousel(button.getAttribute("data-carousel-next"), 1);
    });
  });

  document.querySelectorAll("[data-carousel-prev]").forEach(function (button) {
    button.addEventListener("click", function () {
      moveCarousel(button.getAttribute("data-carousel-prev"), -1);
    });
  });
})();


/* ==========================================================================
   CARRUSEL DE ALOJAMIENTOS
   ========================================================================== */

(function () {

    const carousel = document.getElementById('hotel-carousel');

    const prev = document.getElementById('hotel-prev');
    const next = document.getElementById('hotel-next');


    if (!carousel || !prev || !next) return;


    next.addEventListener('click', function () {

        carousel.scrollBy({
            left: carousel.clientWidth * 0.75,
            behavior: 'smooth'
        });

    });


    prev.addEventListener('click', function () {

        carousel.scrollBy({
            left: -carousel.clientWidth * 0.75,
            behavior: 'smooth'
        });

    });

})();