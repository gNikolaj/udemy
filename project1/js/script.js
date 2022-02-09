/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberFilms();

writeYourGenres();

detectPersonalLevel();

showMyDB();

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        let film = prompt("Один из последних просмотренных фильмов?", "");
        let mark = prompt("На сколько оцените его?", "");
        if (film === '' || mark === '' || film.length > 50) {
            i--;
        }else {
            personalMovieDB.movies[film] = mark;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log(("Просмотрено довольно мало фильмов"));
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log(("Вы классический зритель"));
    } else if (personalMovieDB > 30) {
        console.log(("Вы киноман"));
    } else {
        console.log(("ERROR"));
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

