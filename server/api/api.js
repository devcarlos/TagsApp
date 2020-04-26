const express = require('express');
// const expressJwt = require('express-jwt');
const TagRoutes = require('./routes/tag.route');
const { COLORS } = require('./utils/index');

const app = express.Router();

// GET the colors list
app.get('/colors', (req, res) => res.json(COLORS));

// mount tag routes at /tags
app.use('/tags', TagRoutes);

// //verified jwt
// app.use(expressJwt({ secret: config.JWT_SECRET }));

module.exports = app;
