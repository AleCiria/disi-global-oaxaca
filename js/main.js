document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  var hero = document.querySelector('.hero');
  var blobs = document.querySelector('.hero-blobs');
  var heroLayers = Array.prototype.slice.call(document.querySelectorAll('.hero-image-layer'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var heroImages = [
    'assets/analuisa-gamboa-DISI.jpg',
    'assets/sergi_ferrete_Oaxaca.avif',
    'assets/seema-miah-Oaxaca.jpg',
    'assets/anastasiia-malai-Oaxaca.jpg',
    'assets/Oaxaca_1.JPG',
    'assets/Oaxaca_2.JPG',
    'assets/Oaxaca_3.JPEG',
    'assets/anastasiia_malai_Oaxaa.avif',
    'assets/Oaxaca_5.JPEG'
  ];

  function preloadImage(src, callback) {
    var img = new Image();
    img.onload = function () { callback(true, src); };
    img.onerror = function () { callback(false, src); };
    img.src = src;
  }

  function pickNextImage(currentIndex) {
    if (heroImages.length < 2) return currentIndex;
    var nextIndex = Math.floor(Math.random() * heroImages.length);
    if (nextIndex === currentIndex) {
      nextIndex = (nextIndex + 1) % heroImages.length;
    }
    return nextIndex;
  }

  if (hero && heroLayers.length >= 2 && heroImages.length) {
    var activeLayer = 0;
    var imageIndex = Math.floor(Math.random() * heroImages.length);

    preloadImage(heroImages[imageIndex], function (loaded, src) {
      if (!loaded) {
        imageIndex = 0;
        src = heroImages[imageIndex];
      }
      heroLayers[activeLayer].style.backgroundImage = 'url("' + src + '")';
    });

    if (!reduceMotion && heroImages.length > 1) {
      window.setInterval(function () {
        var nextIndex = pickNextImage(imageIndex);

        preloadImage(heroImages[nextIndex], function (loaded, src) {
          if (!loaded) return;
          var nextLayer = activeLayer === 0 ? 1 : 0;
          heroLayers[nextLayer].style.backgroundImage = 'url("' + src + '")';
          heroLayers[nextLayer].classList.add('is-visible');
          heroLayers[activeLayer].classList.remove('is-visible');
          activeLayer = nextLayer;
          imageIndex = nextIndex;
        });
      }, 9000);
    }
  }

  if (hero && blobs && !reduceMotion) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      blobs.style.transform = 'translate(' + (x * 36) + 'px, ' + (y * 36) + 'px)';
    });
    hero.addEventListener('mouseleave', function () {
      blobs.style.transform = 'translate(0, 0)';
    });
  }
});
