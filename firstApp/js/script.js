"use strict";

const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm;
let filmRating; 

for (let i = 0; i < 2; i++) {

    lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    filmRating = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[lastFilm] = filmRating;
}

console.log(personalMovieDB);

