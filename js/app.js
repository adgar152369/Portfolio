import intersectObserve from './intersection.js';

const portfolioSections = document.querySelectorAll('.portfolio-section');
const helloSection = document.querySelector('#hello');
const helloSectionParagraph = document.querySelector('#hello p');
const helloSectionHeader = document.querySelector('#hello h2');
const navLinks = document.querySelectorAll('#footer-nav li');

const carouselImages = document.querySelector('.project-carousel-images');
const thumbnailImages = document.querySelectorAll('.project-carousel-thumbnails img');

thumbnailImages.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const index = thumbnail.dataset.index;
    const translateX = -index * carouselImages.clientWidth;
    carouselImages.style.transform = `translateX(${translateX}px)`;

    thumbnailImages.forEach(thumbnail => thumbnail.classList.remove('active'));
    thumbnail.classList.add('active');
  });
});


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
});


intersectObserve();