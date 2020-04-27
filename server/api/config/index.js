const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../..', '.env') });

const env = process.env;

module.exports = {
  MONGO_DB_URL: env.MONGO_DB_URL,
  PORT: env.PORT,
  //JWT_SECRET: env.JWT_SECRET,
  TIMEZONE: 'America/New_York'
}
