const helloSection = document.querySelector('#hello');

export default function intersectObserve() {
    // Create an IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
        // Check if the element is intersecting
        if (entries[0].isIntersecting) {
            // Add the class to the element to trigger the animation
            helloSection.classList.add("smooth-appear");
            // Stop observing the element
            observer.unobserve(helloSection);
        }
    });
    
    // Start observing the element
    observer.observe(helloSection);
}