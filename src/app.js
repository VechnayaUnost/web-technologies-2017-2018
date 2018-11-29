const express = require('express');
const app = express();

const constants = require('./config/constants');
const services = require('./services/services');
const db = require('./db');

const router = require('./routes/route');
app.use('/', router);

require('dotenv').config();

const port = process.env.PORT || 3000;

db.init().then(() => {
  app.listen(port, () => {
    console.log(constants.LISTENING_MESSAGE + port);
  });
});

