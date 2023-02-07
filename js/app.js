let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let slide_index = 0

let can_slide_play = true



let hero_bgs = [
    './assests/images/beef_bg.jpg',
    './assests/images/pork_bg.jpg',
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

// pause slide item when hover
slider.addEventListener('mouseover', () => can_slide_play = false)
// resume slide item when mouse leave
slider.addEventListener('mouseleave', () => can_slide_play = true)

showSlide(slide_index)
// // auto play slide
 setInterval(() => {
    if (!can_slide_play) return
    nextSlide()
}, 5500);

slider.querySelectorAll('.slider-control__item').forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})

//menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.main-menu');
const menuClose = document.querySelector('#menu-close');

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
});

