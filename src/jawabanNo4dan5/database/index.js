const mysql = require('mysql');
const conn = mysql.createConnection({
    user: 'root',
    password: process.env.password,
    host: 'localhost',
    database: 'test_backend_gadjian',
    port: 3306
});

module.exports = conn;