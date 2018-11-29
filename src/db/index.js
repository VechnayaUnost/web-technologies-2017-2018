const mongoose = require('mongoose');

function init() {
  return mongoose.connect(
    'mongodb://127.0.0.1:27017/admin',
    {
      promiseLibrary: global.Promise,
      useNewUrlParser: true
    }
  );
}

module.exports = {
  init,
  instance: mongoose
};
