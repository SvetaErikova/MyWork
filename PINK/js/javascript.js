/*BURGER*/
const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');
});

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');
    document.querySelector('.burger__btn').classList.toggle('burger__btn--active')
    document.querySelector('.burger__list').classList.toggle('burger__list-active')
    document.querySelector('.nav').classList.toggle('nav__bck')




});

/*SWIPER*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});