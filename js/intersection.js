const helloSection = document.querySelector('#hello');
const helloSectionParagraph = document.querySelector('#hello p');
const helloSectionHeader = document.querySelector('#hello h2');
const helloSectionSkills = document.querySelectorAll('#hello .skill');
const helloSectionH3 = document.querySelector('#hello h3');

export default function intersectObserve() {
    // Create an IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the class to the element to trigger the animation
                helloSectionHeader.classList.add("smooth-appear");
                helloSectionParagraph.classList.add("come-from-right");

                helloSectionSkills.forEach(skill => {
                    skill.classList.add('pop-up-obo');
                    helloSectionH3.classList.add('pop-up-obo');
                })

                // Stop observing the element
                observer.unobserve(helloSection);
            }
        })
    });
    
    // Start observing the element
    observer.observe(helloSection);
}