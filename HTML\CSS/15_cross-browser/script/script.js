document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
      tabContent.classList.remove('tab-content-active')

    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger__btn--active');
});

burgerBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger__btn--active');

  document.querySelector('.burger__list').classList.toggle('burger__list-active')

});


$(function () {
  $("#accordion").accordion({
  active: false,
  collapsible: true,
  });
},
);

