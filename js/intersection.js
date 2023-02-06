const portfolioSections = document.querySelectorAll('.portfolio-section');
const helloSection = document.querySelector('#hello');
const helloSectionParagraph = document.querySelector('#hello p');
const helloSectionHeader = document.querySelector('#hello h2');
const navLinks = document.querySelectorAll('#footer-nav a');

export default function intersectObserve() {
    // Create an IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the class to the element to trigger the animation
                helloSectionHeader.classList.add("smooth-appear");
                // helloSectionParagraph.classList.add("come-from-right")

                // Stop observing the element
                observer.unobserve(helloSection);
            }
        })
    });
    
    // Start observing the element
    observer.observe(helloSection);
}