const Sequelize = require('sequelize');
const data = require('../config').data;
const constants = require('../config/constants');
const db = require('../db');

async function saveMovies() {
  data.slice(10000, 16000).forEach(async (movie)=> {
     await db.Movie.create(movie, { include: [db.GenreId] });
  });
}

async function getAllFilms() {
    return await db.Movie.findAll({include: [db.GenreId]});
}

async function getFilmById(id) {
    return await db.Movie.findOne({
      where: {
        id
      },
      include: [db.GenreId]
    });
}

async function getFilmByTitle(title) {
    return await db.Movie.findOne({where: {
      title: {
        [Sequelize.Op.iLike]: '%' + title + '%'
      }
      },
      include: [db.GenreId]
    });
}

async function getFilmsByPagination(offset, limit) {
    return await db.Movie.findAll({offset, limit});
}

async function getSortedFilms(field, direction) {
    const order = [[field, direction === 'asc' ? 'ASC' : 'DESC']];

    return await db.Movie.findAll({include: [db.GenreId], order});
}

const services = {getAllFilms, getFilmById, getFilmByTitle, getFilmsByPagination, getSortedFilms, saveMovies};
module.exports = services;

