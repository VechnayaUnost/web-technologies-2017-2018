const constants = require('./constants');
const fs = require('fs');
const path = require('path');

let temp;

const parseFile = function(filePath) {
    try {
        const file = fs.readFileSync(filePath);
        temp = JSON.parse(file);
    } catch (e) {
        console.error(e);
        return 'File error';
    }
};

parseFile(path.join(__dirname + constants.FILE_PATH));

module.exports = temp;