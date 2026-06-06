/* =========================================================
   Portfolio interactions — vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  // 1) Current year in the footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) Add a border/shadow to the nav once the page is scrolled
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // 3) Lightbox: click a project screenshot to view it full size.
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector(".lightbox__img");
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var lastFocused = null;

    var openLightbox = function (src, alt, trigger) {
      lastFocused = trigger;
      lightboxImg.setAttribute("src", src);
      lightboxImg.setAttribute("alt", alt || "");
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      lightboxImg.setAttribute("src", "");
      document.body.style.overflow = "";
      if (lastFocused) {
        lastFocused.focus();
      }
    };

    document.querySelectorAll(".shot__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        if (img) {
          openLightbox(img.currentSrc || img.src, img.alt, btn);
        }
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    // Click the backdrop or the image itself to dismiss
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target === lightboxImg) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }

  // 4) Subtle scroll-reveal for sections.
  //    Falls back to "everything visible" if IntersectionObserver is missing
  //    or the user prefers reduced motion.
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
