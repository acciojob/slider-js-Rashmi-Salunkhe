//your JS code here. If required.
const slides = document.querySelectorAll('.slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'flex';
}

function moveUp() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function moveDown() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);

// Initialize first slide
showSlide(currentSlide);
