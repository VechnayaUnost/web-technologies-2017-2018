const constants = require('./constants');
const fs = require('fs');
const path = require('path');
const file = fs.readFileSync(path.join(__dirname + constants.FILE_PATH));

module.exports = JSON.parse(file);