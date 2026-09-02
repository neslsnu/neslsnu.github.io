(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  const arrows = Array.from(document.querySelectorAll(".hero-arrow"));
  const hero = document.querySelector(".hero");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const toast = document.querySelector(".toast");
  const partners = Array.from(document.querySelectorAll(".partner-track img"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentSlide = 0;
  let slideTimer;
  let partnerIndex = 0;
  let partnerTimer;
  let toastTimer;

  function showSlide(nextIndex) {
    if (!slides.length) return;
    currentSlide = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === currentSlide));
    dots.forEach((dot, index) => {
      const active = index === currentSlide;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
  }

  function startSlides() {
    if (reducedMotion || slides.length < 2) return;
    window.clearInterval(slideTimer);
    slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 5500);
  }

  function stopSlides() { window.clearInterval(slideTimer); }

  dots.forEach((dot, index) => dot.addEventListener("click", () => {
    showSlide(index);
    startSlides();
  }));

  arrows.forEach((arrow) => arrow.addEventListener("click", () => {
    showSlide(currentSlide + (arrow.dataset.direction === "previous" ? -1 : 1));
    startSlides();
  }));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
    if (event.key === "ArrowRight") showSlide(currentSlide + 1);
  });

  if (hero) {
    hero.addEventListener("mouseenter", stopSlides);
    hero.addEventListener("mouseleave", startSlides);
    hero.addEventListener("focusin", stopSlides);
    hero.addEventListener("focusout", startSlides);
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.setAttribute("aria-hidden", "false");
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.setAttribute("aria-hidden", "true");
    }, 2800);
  }

  document.querySelectorAll("[data-status='planned']").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("이 메뉴는 다음 복구 단계에서 정적 페이지로 연결할 예정입니다.");
      if (siteNav) siteNav.classList.remove("is-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    });
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.querySelector(".sr-only").textContent = isOpen ? "메뉴 닫기" : "메뉴 열기";
    });
  }

  document.querySelectorAll(".site-nav a:not([data-status='planned'])").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".site-nav a").forEach((item) => item.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "page");
      if (siteNav) siteNav.classList.remove("is-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    });
  });

  function rotatePartner() {
    if (partners.length < 2) return;
    partners[partnerIndex].classList.remove("is-active");
    partnerIndex = (partnerIndex + 1) % partners.length;
    partners[partnerIndex].classList.add("is-active");
  }

  if (!reducedMotion && partners.length > 1) {
    partnerTimer = window.setInterval(rotatePartner, 3200);
  }

  window.addEventListener("beforeunload", () => {
    window.clearInterval(slideTimer);
    window.clearInterval(partnerTimer);
  });

  showSlide(0);
  startSlides();
}());
