const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    simulateTouch: false,
    speed: 15000,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
}, );

//FORM

const btnForm = document.querySelector('.btn__zvonok');

btnForm.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('btn__zvonok--active');
});

btnForm.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('btn__zvonok--active');

    document.querySelector('.obratnuj-zvonok').classList.toggle('obratnuj-zvonok-active')
    document.querySelector('.header__block').style.visibility = 'hidden'
});
const formClose = document.querySelector('.obratnuj-zvonok__close');
formClose.addEventListener('click', (e) => {
    document.querySelector('.obratnuj-zvonok').classList.remove('obratnuj-zvonok-active')
    document.querySelector('.header__block').style.visibility = 'inherit'
});
// FOR MASK
var selector = document.getElementById("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask("input[type='tel']");


//ACCORDION
$(function() {
    $("#accordion").accordion({

        collapsible: true,
        heightStyle: "content"
    });
}, );

//ACCORDION-CREDIT
$(function() {
    $("#accordion-credit").accordion({

        collapsible: true,
        heightStyle: "content"
    });
}, );