const sections = document.querySelectorAll('section');
const hamburger = document.querySelectorAll('.toggle-navMenu');
const navClose = document.querySelector('.nav-close');
const nav = document.querySelector('nav');
const mainHeader = document.querySelector('header');

function openNavigation() {
  mainHeader.classList.toggle('open');
  nav.classList.toggle('open');
}

hamburger.forEach((navLink) => navLink.addEventListener('click', openNavigation));


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