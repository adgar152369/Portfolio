const portfolioSections = document.querySelectorAll('.portfolio-section');
const helloSection = document.querySelector('#hello');
const helloSectionParagraph = document.querySelector('#hello p');
const helloSectionHeader = document.querySelector('#hello h2');
const navLinks = document.querySelectorAll('#footer-nav li');


const addActiveClass = (entries, options) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const current = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.classList.contains(current)) {
                    link.classList.add('active');
                }
            })
        }
    })
}

const options = {
    root: null,
    threshold: .5 // observe halfway through section
};
const observer = new IntersectionObserver(addActiveClass, options); 

portfolioSections.forEach(section => {
    observer.observe(section);
})