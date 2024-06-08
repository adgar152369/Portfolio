const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('nav');
const mainHeader = document.querySelector('header');

hamburger.addEventListener('click', openNavigation);

function openNavigation() {
  mainHeader.classList.toggle('open');
  nav.classList.toggle('open');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 }); // Trigger at 50% visibility

sections.forEach(section => {
  observer.observe(section);
});