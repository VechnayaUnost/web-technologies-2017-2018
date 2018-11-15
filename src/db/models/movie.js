const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define('movie', {
    vote_count: Sequelize.STRING,
    vote_average: Sequelize.INTEGER,
    title: Sequelize.STRING,
    popularity: Sequelize.INTEGER,
    poster_path: Sequelize.STRING,
    original_language: Sequelize.STRING,
    original_title: Sequelize.STRING,
    backdrop_path: Sequelize.STRING,
    adult: Sequelize.BOOLEAN,
    overview: Sequelize.STRING(1000),
    release_date: Sequelize.STRING,
  })
}