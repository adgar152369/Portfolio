const sections = document.querySelectorAll('section');
const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('.nav-close');
const navigationMenu = document.querySelector('.main-header');

navOpen.addEventListener('click', openNavigation);

function openNavigation() {
  navigationMenu.classList.add('opened');
  navClose.addEventListener('click', () => {
    navigationMenu.classList.add('closed');
    navigationMenu.classList.remove('opened');
  })
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // Trigger at 50% visibility

sections.forEach(section => {
  observer.observe(section);
});