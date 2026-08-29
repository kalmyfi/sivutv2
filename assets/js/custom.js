(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // These flourishes (tilt, scroll-reveal) are homepage-only, by design —
  // inner pages (Uutiset, etc.) share the palette/type/cards but stay calm.
  var isHome = !!document.getElementById('banner');

  // Cursor-reactive 3D tilt on floating cards.
  if (!reduceMotion) {
    var tiltEls = document.querySelectorAll('.intro-stats-list .stat, .intro-stats-text, .bento-posts .box.post');
    tiltEls.forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty('--tilt-x', (y * -6).toFixed(2) + 'deg');
        el.style.setProperty('--tilt-y', (x * 6).toFixed(2) + 'deg');
      });
      el.addEventListener('mouseleave', function () {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  // Fade-up reveal as sections scroll into view.
  if (isHome && 'IntersectionObserver' in window && !reduceMotion) {
    var revealEls = document.querySelectorAll('.wrapper, #cta');
    revealEls.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
