import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'
const config = require('../config/index');

// const vm = new Vue();
let host = config.API_URL
let port = config.API_PORT
let server = `${host}:${port}`;

//debug baseURL
console.log(server);

export const socketVUE = new VueSocketIO({
    debug: true,
    connection: io.connect(server)
});