"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', '');
	if (a != '' && b != '' && a != null && b != null && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Vse verno!');
	} else {
		console.log("Error");
		i--;
	}


}
// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
	console.log('Priosmotreno dovolino malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Vu klasicheskiy zritel');
} else if (personalMovieDB.count >= 30) {
	console.log('Vu kiniman');
} else {
	console.log('Proizishla oshubka');
}

