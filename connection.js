const sql = require('mssql');

const config = {
  user: '',
  password: '',
  server: '',
  database: '',
  options: {
    encrypt: true, 
  },
};

const pool = new sql.ConnectionPool(config);
const db = pool.connect();

module.exports = db;
