let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let can_slide_play = true

let slide_index = 0

let hero_bgs = [
    './assests/images/meat_bg.jpg',
    './assests/images/pork.bg.jpg',
    './assests/images/salmon_bg.jpg',
]

showSlide = (index) => {
    slides.forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    hero.style.backgroundImage = `url(${hero_bgs[index]})`
};

nextSlide = () => {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
    showSlide(slide_index)
};

showSlide(slide_index);
// auto play slide
setInterval(nextSlide, 5000);

