const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../..', '.env') });

const env = process.env;

console.log('CONFIG ENV:')
console.log(process.env.VUE_APP_API_URL)
console.log(process.env.VUE_APP_API_PORT)

module.exports = {
  API_URL: env.VUE_APP_API_URL,
  API_PORT: env.VUE_APP_API_PORT
}
