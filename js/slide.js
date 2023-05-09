JavaScript:

const slider = document.querySelector('.slider');
const slideWrapper = slider.querySelector('.slide-wrapper');
const slides = slideWrapper.querySelectorAll('.slide');
const prevSlideButton = slider.querySelector('.prev-slide');
const nextSlideButton = slider.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(nextSlide) {
  // Set the current slide to inactive
  slides[currentSlide].classList.remove('active');
  // Set the next slide to active
  slides[nextSlide].classList.add('active');
  // Update the current slide index
  currentSlide = nextSlide;
}

function showNextSlide() {
  // Calculate the index of the next slide
  const nextSlide = (currentSlide + 1) % slides.length;
  // Show the next slide
  showSlide(nextSlide);
}

function showPrevSlide() {
  // Calculate the index of the previous slide
  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
  // Show the previous slide
  showSlide(prevSlide);
}

// Add event listeners to the prev and next slide buttons
prevSlideButton.addEventListener('click', showPrevSlide);
nextSlideButton.addEventListener('click', showNextSlide);