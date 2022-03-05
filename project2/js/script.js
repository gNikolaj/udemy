/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

removeAdv();
changeGnr();
changeBG();
sortFilms();

function sortFilms() {
    const filmsList = document.querySelector('.promo__interactive-list');

    filmsList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((item, index) => {
        filmsList.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${item}
                <div class="delete"></div>
            </li>
        `;
    })
}

function changeBG() {
    const background = document.querySelector('.promo__bg');
    background.style.backgroundImage = 'url(img/bg.jpg)';
}

function changeGnr() {
    const gnr = document.querySelector('.promo__genre');
    gnr.textContent = 'драма';
}

function removeAdv() {
    const advImages = document.querySelectorAll('.promo__adv img');
    advImages.forEach(item => {
        item.remove();
    })
}




