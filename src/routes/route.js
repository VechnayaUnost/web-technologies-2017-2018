const controllers = require('../controllers/controllers');
const constants = require('../config/constants');

const express = require('express');
const router = express.Router();

router.get(constants.PATH_FILM_BY_ID, controllers.id);
router.get(constants.PATH_ALL_FILMS, controllers.allFilms);
router.get(constants.PATH_FILM_BY_TITLE, controllers.title);
router.get(constants.PATH_FILMS_BY_PAGINATION, controllers.page);
router.get(constants.PATH_SORTED_FILMS, controllers.sort);

module.exports = router;