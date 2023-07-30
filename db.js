const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", //Cambiar según su configuración
  host: "localhost",
  database: "postgres", //Cambiar según su configuración
  password: "r@ul1t012", //Cambiar según su configuración
  port: 5432,
});

module.exports = pool;
