const carouselItems = document.querySelectorAll('.landing--carouselItem');
const navBtns = document.querySelectorAll('.landing--navLink');
const copyrightYear = document.querySelector('#copyrightYear');
const lastUpdated = document.querySelector('#lastUpdated');

navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // only allow btn to have active class at a time
        navBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        // if btn has active class, go to slide
        if (btn.classList.contains('active')) {
            goToSlide(btn);
        }
    });

});

function goToSlide(btn) {
    // get index of btn
    const index = btn.getAttribute('data-index');
    // remove active class from all items
    carouselItems.forEach((item) => {
        item.classList.remove('active');
    });
    // add active class to item
    carouselItems[index].classList.add('active');
}

// get current year
const year = new Date().getFullYear();
// set copy right year
copyrightYear.textContent = year;
// set last updated date
lastUpdated.textContent = document.lastModified;
