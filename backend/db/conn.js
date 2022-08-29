const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '890999000',
    database: 'nodemysql2'
});

module.exports = pool;
