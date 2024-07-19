document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const links = document.querySelectorAll('nav a');
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');

    function navigateToSlide(targetId) {
        slides.forEach(slide => {
            if (slide.id === targetId) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateToSlide(targetId);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentSlide = document.querySelector('.slide.active');
            const prevSlide = currentSlide.previousElementSibling;
            if (prevSlide && prevSlide.classList.contains('slide')) {
                navigateToSlide(prevSlide.id);
            }
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const currentSlide = document.querySelector('.slide.active');
            const nextSlide = currentSlide.nextElementSibling;
            if (nextSlide && nextSlide.classList.contains('slide')) {
                navigateToSlide(nextSlide.id);
            }
        });
    });

    // Initialize the first slide as active
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
});
