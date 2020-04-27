import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';
const config = require('../config/index');

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
let host = config.API_URL
let port = config.API_PORT
let uri = '/api/tags/'
const baseURL = `${host}:${port}${uri}`;

//debug baseURL
console.log(baseURL);

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  gettag: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  gettags: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deletetag: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createtag: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatetag: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};