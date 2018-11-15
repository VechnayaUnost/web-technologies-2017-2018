const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const { DB_NAME, DB_PORT, DB_HOST, DB_PASS, DB_USER } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  port: +DB_PORT,
  logging: false,
  define: {
    timestamps: false,
  }
});

const Movie = require('./models/movie')(sequelize);
const GenreId = require('./models/genre-id')(sequelize);

GenreId.movie = GenreId.belongsTo(Movie);
Movie.genre_ids = Movie.hasMany(GenreId);

sequelize.sync();

module.exports = { sequelize, Movie, GenreId };