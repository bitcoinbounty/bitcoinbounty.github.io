// SatCode homepage — progressive enhancement only.
// Smooth anchor scrolling is CSS (scroll-behavior) and the FAQ accordion is
// native <details name="faq">; the only JS is the header tint on scroll.

const header = document.querySelector('.site-header');

const setScrolled = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};

setScrolled();
window.addEventListener('scroll', setScrolled, { passive: true });
