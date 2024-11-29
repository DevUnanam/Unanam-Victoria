const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.carousel');

let scrollPosition = 0;

prevBtn.addEventListener('click', () => {
    scrollPosition = Math.min(scrollPosition + 300, 0);
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});

nextBtn.addEventListener('click', () => {
    const maxScroll = -(carousel.scrollWidth - carousel.parentElement.offsetWidth);
    scrollPosition = Math.max(scrollPosition - 300, maxScroll);
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});
