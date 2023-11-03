let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    currentSlide = index;

    const pageIndicator = document.querySelector('.page-indicator');
    pageIndicator.textContent = `${index + 1} / 3`; // Cambia 3 por el número total de slides
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});
