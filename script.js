const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const galleryImages = document.querySelectorAll('.gallery-item img');
const backToTopButton = document.getElementById('backToTop');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');
let isToggled = false;

// Toggle the navigation menu
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
	if (isToggled) {
		document.getElementById("menu-icon").innerHTML = '&#9776;';
		isToggled = false;
	} else {
		document.getElementById("menu-icon").innerHTML = '&#124;&#124;&#124;';
		isToggled = true;
	}
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

// Modal image viewer functionality
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Close the modal when the 'x' button is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function (e) {
	e.preventDefault();
	alert("Your booking request has been submitted! We will contact you soon.");
	bookingForm.reset();
});
