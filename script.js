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
  // Toggle the 'is-active' class on both the navbar burger button and the navbar menu
  navbarBurger.classList.toggle('is-active');
  navbarMenu.classList.toggle('is-active');
});

// Add a click event listener to all the navbar menu items
navbarMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the 'is-active' class from both the navbar burger button and the navbar menu
    navbarBurger.classList.remove('is-active');
    navbarMenu.classList.remove('is-active');
  });
});


// Intersection Observer


// create a new intersection observer
const observer = new IntersectionObserver(entries => {
  // check if the about section is in view
  if (entries[0].isIntersecting) {
    console.log('about')
    // add a class to the navbar to change its background
    navbar.classList.remove('solid-bg');
  } else {
    // remove the class if the about section is not in view
    navbar.classList.add('solid-bg');
  }
});

// observe the about section
observer.observe(homeSection);