//your JS code here. If required.
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesText = document.querySelectorAll('.left-slide div');
const slidesImage = document.querySelectorAll('.right-slide div');
let currentSlide = 0;
const totalSlides = slidesText.length;

function updateSlides() {
    // Hide all slides
    slidesText.forEach(slide => slide.classList.remove('active'));
    slidesImage.forEach(slide => slide.classList.remove('active'));
    
    // Show the current slide
    slidesText[currentSlide].classList.add('active');
    slidesImage[currentSlide].classList.add('active');
}

upButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateSlides();
});

downButton.addEventListener('click', () => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlides();
});

// Initialize the first slide
updateSlides();
