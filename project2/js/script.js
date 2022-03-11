/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    inputForm();
    createList();

    function inputForm() {
        const form = document.querySelector('form.add'),
            input = form.querySelector('.adding__input'),
            checkbox = form.querySelector('[type="checkbox"]');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let film = input.value;

            if (film) {
                if (film.length > 21) {
                    film = film.slice(0, 21) + '...';
                }
                if (checkbox.checked) {
                    console.log("Add favourite!")
                }
                movieDB.movies.push(film);
                createList();
            }
            event.target.reset();
        })
    }

    function createList() {
        const filmsList = document.querySelector('.promo__interactive-list');

        filmsList.innerHTML = '';

        movieDB.movies.sort();

        movieDB.movies.forEach((item, index) => {
            filmsList.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createList();
            })
        });
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
})

