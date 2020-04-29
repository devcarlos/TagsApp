const api = require('../api.js');
const express = require('express');
const path = require('path');

module.exports = app => {

  app.use(express.static(path.join(__dirname, '/')))

  // mount /api routes
  app.use('/api', api);
};
