const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit : 4,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

function db(query, values, callback) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting a connection from the pool:', err.stack);
        return callback(err, null);
      }
  
      connection.query(query, values, (queryErr, results) => {
        connection.release(); // Always release the connection back to the pool
  
        if (queryErr) {
          console.error('Query error:', queryErr.stack);
          return callback(queryErr, null);
        }
  
        callback(null, results);
      });
    });
  }
  
module.exports = { db };
