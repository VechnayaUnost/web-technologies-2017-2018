const services = require('../services/services');
const helpers = require('./routeHelpers');

let allFilms = (req, res) => {
    res.status(200).send(services.getAllFilms());
};

let id = (req, res) => {
    const result = helpers.validateId(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(services.getFilmById(parseInt(req.params.id)));
};

let title = (req, res) => {
    const result = helpers.validateTitle(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(services.getFilmByTitle(req.params.title));
};

let page = (req, res) => {
    const result = helpers.validatePagination(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(services.getFilmsByPagination(parseInt(req.params.offset), parseInt(req.params.limit)));
};

let sort = (req, res) => {
    const result = helpers.validateSort(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(services.getSortedFilms(req.params.field, req.params.direction));
};

const controllers = {allFilms, id, title, page, sort};
module.exports = controllers;