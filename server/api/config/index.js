const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../..', '.env') });

const env = process.env;

module.exports = {
  ENV: env.ENV,
  MONGO_DB_URL: env.MONGO_DB_URL,
  PORT: env.PORT,
}
