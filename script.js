const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const galleryImages = document.querySelectorAll('.gallery-item img');
const backToTopButton = document.getElementById('backToTop');

// Toggle the navigation menu
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Add click event listener to each image
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        // Open the image source in a new tab
        window.open(this.src, '_blank');
    });
});

// Back to Top button functionality
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
});

// Show the button when the user scrolls down 100px
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});