const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_POSTGRES,
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = pool;
