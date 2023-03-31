// Get the navbar burger button, navbar menu, and all the navbar menu items
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarMenuItems = document.querySelectorAll('.navbar-item');

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