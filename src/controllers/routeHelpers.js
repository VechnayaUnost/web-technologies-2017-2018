const Joi = require('joi');

function validateId(id) {
    const schema = {
        id: Joi.number().integer().positive().required()
    };

    return Joi.validate(id, schema);
}

function validateTitle(title) {
    const schema = {
        title: Joi.string().min(1).required()
    };

    return Joi.validate(title, schema);
}

function validatePagination(page) {
    const schema = {
        offset: Joi.number().integer().min(0).required(),
        limit: Joi.number().integer().positive().required()
    };

    return Joi.validate(page, schema);
}

function validateSort(sort) {
    const schema = {
        field: Joi.string().min(1).required(),
        direction: Joi.string().min(3).required()
    };

    return Joi.validate(sort, schema);
}

const helpers = {validateId, validateTitle, validatePagination, validateSort};
module.exports = helpers;
