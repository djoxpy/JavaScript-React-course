"use strict";

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

for (let i = 0; numberOfFilms; i++) {
    if (typeof numberOfFilms === 'string' || numberOfFilms.length < 50 || numberOfFilms) {
        numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    let filmRating = prompt("На сколько оцените его?", "");
    
    personalMovieDB.movies[lastFilm] = filmRating;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (30 < personalMovieDB.count) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}


console.log(personalMovieDB);

