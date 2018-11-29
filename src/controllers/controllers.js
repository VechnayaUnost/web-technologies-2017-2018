const services = require('../services/services');
const helpers = require('./routeHelpers');

let allFilms = async (req, res) => {
    res.status(200).send(await services.getAllFilms());
};

let id = async (req, res) => {
    const result = helpers.validateId(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(await services.getFilmById(parseInt(req.params.id)));
};

let title = async (req, res) => {
    const result = helpers.validateTitle(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(await services.getFilmByTitle(req.params.title));
};

let page = async (req, res) => {
    const result = helpers.validatePagination(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(await services.getFilmsByPagination(parseInt(req.params.offset), parseInt(req.params.limit)));
};

let sort = async (req, res) => {
    const result = helpers.validateSort(req.params);

    if (result.error) {
        res.status(400).send(result.error.details[0].message.toString());
        return;
    }
    res.status(200).send(await services.getSortedFilms(req.params.field, req.params.direction));
};

const controllers = {allFilms, id, title, page, sort};
module.exports = controllers;