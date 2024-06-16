// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     connectionLimit: 10,
// });

// // Test the connection to ensure the pool is ready
// db.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             console.error('Database connection was closed.');
//         } else if (err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('Database has too many connections.');
//         } else if (err.code === 'ECONNREFUSED') {
//             console.error('Database connection was refused.');
//         } else {
//             console.error('Database error:', err);
//         }
//     }

//     if (connection) {
//         console.log('Successfully connected to the database.');
//         connection.release();
//     }
// });

// module.exports = db;