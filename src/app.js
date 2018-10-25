const express = require('express');
const app = express();

const constants = require('./config/constants');

const router = require('./routes/route');
app.use('/', router);

require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(constants.LISTENING_MESSAGE + port);
});