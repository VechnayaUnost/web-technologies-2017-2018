const data = require('../config/index');
const constants = require('../config/constants');

function getAllFilms() {
    return data;
}

function getFilmById(id) {
    return data.find(film => film.id === id);
}

function getFilmByTitle(title) {
    return data.filter(film => film.title.toLowerCase().includes(title.toLowerCase()));
}

function getFilmsByPagination(offset, limit) {
    return data.slice(offset, offset + limit);
}

function getSortedFilms(field, direction) {
    const sortedFilms = data.sort((a, b) => {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
    });
    return direction === constants.IN_ASCENDING_ORDER ? sortedFilms : direction === constants.IN_DESCENDING_ORDER ? sortedFilms.reverse() : [];
}

const services = {getAllFilms, getFilmById, getFilmByTitle, getFilmsByPagination, getSortedFilms};
module.exports = services;

