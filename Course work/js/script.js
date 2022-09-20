//BURGER

const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');
});

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');

    document.querySelector('.burger__list').classList.toggle('burger__list-active')

});


//HEADER TABS

document.querySelectorAll('.bottom__item').forEach(function(bottomItem) {
    bottomItem.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.bottom__item').forEach(function(btn) {
            btn.classList.remove('bottom__item--active')
        });
        e.currentTarget.classList.add('bottom__item--active');
        document.querySelectorAll('.scroll__content').forEach(function(bottomItem) {
            bottomItem.classList.remove('scroll__content--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('scroll__content--active ');
    });
});


//  SWIPER HERO

const swiper = new Swiper('.hero__swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    swipe: true,
    autoplay: {
        delay: 5000,
        type: true,
    },
}, );

// GALLERY SELECT
const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,

});

//GALLERY SWIPER 

const swiper1 = new Swiper('.gallery-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    centerInsufficientSlides: true,
    swipe: true,
    navigation: {
        nextEl: '.gallery__swiper-next',
        prevEl: '.gallery__swiper-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
}, );


//CATALOG ACCORDION

$(function() {
    $("#accordion").accordion({
        active: 0,
        collapsible: true,
        heightStyle: "content"
    });
}, );




//  CATALOG TABS

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
                tabContent.classList.remove('tabs__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
        })
    })
})

// EVENT SWIPER
const swiper2 = new Swiper('.events-swiper', {
    direction: 'horizontal',
    swipe: true,
    slidesPerView: 1,
    centerInsufficientSlides: true,
    navigation: {
        nextEl: '.events__swiper-next',
        prevEl: '.events__swiper-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }



});

//PROJECT SWIPER

const swiper3 = new Swiper('.project-swiper', {
    direction: 'horizontal',
    loop: true,
    swipe: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.project-swiper__next',
        prevEl: '.project-swiper__prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }


});



// FORM

var selector = document.getElementById("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask("input[type='tel']");

new JustValidate('.contact-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,


        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 9
            }
        },

    },
    messages: {
        name: {
            required: 'Как вас зовут?',
            myField: 'Недопустимый формат'
        },
        tel: {

            required: 'Укажите ваш телефон'
        },


    },
});

// Карта

ymaps.ready(init);

function init() {
    // Создание карты.

    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [55.755819, 37.617644],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 5
    });

    var myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [55.758468, 37.601088]
        }
    });
}