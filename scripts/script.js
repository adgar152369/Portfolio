import { selectTabs } from "./utilities.js";

// Get the navbar burger button, navbar menu, and all the navbar menu items
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarMenuItems = document.querySelectorAll('.navbar-item');
// select the navbar and the about section
const navbar = document.querySelector('.navbar');
const aboutSection = document.querySelector('#about');
const homeSection = document.querySelector('#home');

// Add a click event listener to the navbar burger button
navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('is-active');
  navbarMenu.classList.toggle('is-active');
});

// Add a click event listener to all the navbar menu items
navbarMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    navbarBurger.classList.remove('is-active');
    navbarMenu.classList.remove('is-active');
  });
});


// create a new intersection observer
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    navbar.classList.remove('solid-bg');
  } else {
    navbar.classList.add('solid-bg');
  }
});

observer.observe(homeSection);
selectTabs();