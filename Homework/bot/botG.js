// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  bot for Yandex
// @author       Erikova Svetlana
// @match       https://yandex.ru/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sites = {
    "napli.ru": ["10 популярных шрифтов от Google", "Отключение редакций и ревизий", "Вывод произвольных типов записей и полей в WordPress", "Взаимодействие PHP и MySQL.", "Плагины VS Сode", "DevTools"],
    "kiteuniverse.ru": ["Kite Universe Россия", "Красота. Грация. Интеллект", "Мастер классы Kite Universe"],
    "motoreforma.com": ["мотореформа", "прошивки для CAN-AM", "тюнинг Maverick X3", "тюнинг квадроциклов CAN-AM"]
};
let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];
let btnK = document.getElementsByClassName("button button_theme_search")[0]; //кнопка
let links = document.links; // ссылки
let googleInput = document.getElementsByName("text")[0]; // поле ввода


if (btnK !== undefined) {
    document.cookie = `site=${site}`;
} else if (location.hostname == "yandex.ru") {
    site = getCookie("site");
} else {
    site = location.hostname;
}
//если мы на главной странице
if (btnK !== undefined) {

    let i = 0;
    let timerId = setInterval(() => { //печатаем запрос
        googleInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            setTimeout(() => {
                btnK.click(); // клик по кнопке поиска
            }, getRandom(200, 500));

        }
    }, 500);

    //2 проверяем на целеом ли мы сайте
} else if (location.hostname == site) {

    setInterval(() => {
        let index = getRandom(0, links.length);
        if (getRandom(0, 101) >= 80) {
            location.href = "https://yandex.ru/";
        }
        if (links.length == 0) {
            location.href = site;
        }
        if (links[index].href.indexOf(site) !== -1) {
            links[index].click();
        }
    }, getRandom(3000, 5000));
    console.log("Мы на целевом сайте");
    //3 здесь работаем если на страничках поисковой выдачи
} else {
    let nextGooglePage = true;
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf(site) !== -1) {
            let link = links[i];
            nextGooglePage = false;
            console.log("Нашел строку " + link);

            setTimeout(() =>
                link.click(), getRandom(1500, 4000));

            break;
        }
    } //конец цикла где ищем целевой сайт в выдаче
    //если не нашли в выдаче целевой сайт
    if (document.querySelector(".pager__item_current_yes").innerText == "5") {
        nextGooglePage = false;
        location.href = "https://yandex.ru/";
    }
    if (nextGooglePage) { // клик по каждой странице выдачи
        setTimeout(() => {
            let next = document.querySelector(".pager__item_kind_next")
            next.click();
        }, getRandom(2000, 5000));

    }

}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}