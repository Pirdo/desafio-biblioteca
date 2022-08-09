const express = require('express');

const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '890999000',
    database: 'nodemysql2'
});

conn.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Conetou ao MySQL');
    }

    app.listen(3000);
});
