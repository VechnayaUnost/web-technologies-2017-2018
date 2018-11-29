const data = require('../config').data;
const constants = require('../config/constants');
const Movie = require('../db/models/movie').Movie;

async function saveMovies() {
  const saved = await Movie.insertMany(data);

  return saved;
}

async function getAllFilms() {
    return await Movie.find({});
}

async function getFilmById(id) {
  return await Movie.findOne({ id });
}

async function getFilmByTitle(title) {
  const foundMovies = await Movie.find({
    title: new RegExp('^' + title + '$', 'i'),
  });

  return foundMovies;
}

async function getFilmsByPagination(skip, limit) {
  return await Movie.find({}, null, {
    skip,
    limit,
  });
}

async function getSortedFilms(field, direction) {
  return await Movie.find({}, null, {
    sort: {
      [field]: direction,
    },
  });
}

const services = {getAllFilms, getFilmById, getFilmByTitle, getFilmsByPagination, getSortedFilms, saveMovies};
module.exports = services;

