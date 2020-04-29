const express = require('express');
const config = require('./api/config');
const ip = require('ip');
const socket = require('./api/startup/socket');
global.tag = require('./api/models/tag.model');

const port = config.PORT || 3000;
const app = express();
const http = require('http').createServer(app);
let io = require('socket.io').listen(http);

//setup configurations
app.config = config
const isLocal = config.ENV === 'local';
const serverIP = isLocal ? 'localhost' : ip.address();

//startup setup
require('./api/startup/express')(app);
require('./api/startup/mongodb')(app);
require('./api/startup/routes')(app);

//setup Socket.io connections
io.on('connection', socket);

//setup server listening
http.listen(port, serverIP, () => {
  console.log('-- LISTENING ON SERVER --');
  console.log(`listening on: ${serverIP}:${port}`);
});
