const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.tag = require('./api/models/tag.model');
const api = require('./api/api');
const config = require('./api/config');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  config.MONGO_DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

console.log('MONGO_DB_URL => ', config.MONGO_DB_URL);
console.log('PORT => ', config.PORT);

const port = config.PORT || 3000;
const app = express();

app.config = config

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

// routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`TagApps server started on port ${port}`);