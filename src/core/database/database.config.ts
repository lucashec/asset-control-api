/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({ path: path.resolve('.env') });

module.exports = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PSWD,
  database:
    process.env.NODE_ENV === 'test'
      ? `${process.env.MYSQL_DB}`
      : process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: false,
  },
  ssl: true,
  dialectOptions: {
    ssl: {
      require: process.env.NODE_ENV === 'production',
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
    decimalNumbers: true,
  },
  logging: process.env.DB_LOGGING === 'true' ? console.log : false,
};
