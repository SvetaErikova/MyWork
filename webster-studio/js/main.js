//BURGER
const burgerBtn = document.querySelector('.header__hamburger-line');
const logoHeader = document.querySelector('.header__logo')
burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');
    document.querySelector('.header__hamburger').classList.toggle('burger__btn--active')
});
burgerBtn.addEventListener('click', (e) => {
    document.querySelector('.menu').classList.toggle('menu-active')

});

////SWIPER
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,

    init: false,
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
let slide = document.querySelectorAll('.swiper-slide')
swiper.on("slideChange afterInit init", function() {
    let currentSlide = this.activeIndex + 1;
    document.querySelector('.counter').innerHTML = `
    <span class="counter__current">
    ${currentSlide < 5 ? + currentSlide : currentSlide}
    </span> 
    / 
    <span class="counter__total">
      ${this.slides.length}
    </span>`;
});

swiper.init();
//ACCORDION
document.querySelectorAll('.accordion__title').forEach(function(accordion) {
    accordion.addEventListener('click', function(e) {
        e.preventDefault()
        e.currentTarget.classList.toggle('accordion__title-active')
    });
});

const phoneOpen = document.querySelector('.header__phone')
phoneOpen.addEventListener('click', function() {
    phoneOpen.classList.toggle('header__phone-active')
})
