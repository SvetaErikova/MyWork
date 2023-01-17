//GAMBURGER
const burgerBtn = document.querySelector('.header__hamburger-line');

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');
    document.querySelector('.header__hamburger').classList.toggle('burger__btn--active')

});

burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger__btn--active');

    document.querySelector('.header__open-menu').classList.toggle('header__open-menu-active')

});