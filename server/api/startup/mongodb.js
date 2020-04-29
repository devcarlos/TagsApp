const mongoose = require('mongoose');

module.exports = (app) => {
    const { MONGO_DB_URL } = app.config;
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

