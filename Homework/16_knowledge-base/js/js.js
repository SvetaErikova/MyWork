// Селект
const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,

});




// Карта
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [48.856663, 2.351556],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });

    var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'Subtract.svg',
        iconImageSize: [40, 28],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}



// Форма

var selector = document.getElementById("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask("input[type='tel']");

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 9
            }
        },
        mail: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: 'Как вас зовут?'
        },
        tel: {

            required: 'Укажите ваш телефон'
        },
        mail: {

            required: 'Укажите ваш e-mail'
        },


    },
});