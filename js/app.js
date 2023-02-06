const portfolioSections = document.querySelectorAll('.portfolio-section');
const helloSection = document.querySelector('#hello');
const helloSectionParagraph = document.querySelector('#hello p');
const helloSectionHeader = document.querySelector('#hello h2');
const navLinks = document.querySelectorAll('#footer-nav a');


const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
        }
    })
}

const options = {};
const observer = new IntersectionObserver(addActiveClass, options); 

portfolioSections.forEach(section => {
    observer.observe(section);
})