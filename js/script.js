"use strict";


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			console.log('Priosmotreno dovolino malo filmov');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Vu klasicheskiy zritel');
		} else if (personalMovieDB.count >= 30) {
			console.log('Vu kiniman');
		} else {
			console.log('Proizishla oshubka');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden)	 {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
			if (genre != null && genre != '') {
				personalMovieDB.genres[i - 1] = genre;
			} else {
				console.log('Вы ввели не коректные данные!');
				i--;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
};




