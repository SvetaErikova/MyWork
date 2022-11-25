//HERO SWIPER
const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 400,

    loop: true,
    // навигация
    navigation: {
        nextEl: '.hero__swiper-next',
        prevEl: '.hero__swiper-prev',
    },
});

// CATALOG SWIPER

const swiper2 = new Swiper('.catalog__swiper', {

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // навигация
    navigation: {
        nextEl: '.catalog__swiper-next',
        prevEl: '.catalog__swiper-prev',
    },
});