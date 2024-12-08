let currentSlide = 0; 
let isDragging = false; 
let startX, scrollLeft;
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides-container');
const slideshow = document.querySelector('.slideshow');
const slideWidth = slides[0].offsetWidth;
const totalWidth = totalSlides * (slideWidth + 9);
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; 
    }
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${currentSlide * (slideWidth + 9)}px)`; // Dịch chuyển các slide
}

