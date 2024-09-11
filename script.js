//JavaScript to toggle the navigation menu -->

const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const galleryImages = document.querySelectorAll('.gallery-item img');

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