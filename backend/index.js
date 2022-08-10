require('dotenv').config();
const express = require('express');

const cors = require('cors');

const pool = require('./db/conn');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json);
app.use(cors());

app.use('/health', (request, response) =>
    response.json({ health: "application it's work" })
);

app.get('/livros/adicionarlivros', (req, res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const editora = req.body.editora;
    const publicacao = req.body.publicacao;

    const sql = `INSERT INTO livros (??, ??, ??, ??) VALUES (?, ?, ?, ?)`;
    const data = [
        'livro_titulo',
        'livro_autor',
        'livro_editora',
        'livro_publicacao',
        titulo,
        autor,
        editora,
        publicacao
    ];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        //enviar para pagina vizualizar livros
    });
});

app.get('/livros/editarlivros/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM livros WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];

        //res.render('tela de editar', {livro})
    });
});

app.post('/livros/atualizarlivros', (req, res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const editora = req.body.editora;
    const publicacao = req.body.publicacao;

    const sql = `UPDATE livros SET ?? = ?, ?? = ?, ?? = ?', ?? = ? WHERE ?? = ?`;
    const data = [
        'livro_titulo',
        titulo,
        'livro_autor',
        autor,
        'livro_editora',
        editora,
        'livro_publicacao',
        publicacao,
        'id',
        id
    ];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];

        //enviar para pagina vizualizar livros
    });
});

app.post('/livros/deletarlivros/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM livros WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        //enviar para pagina vizualizar livros
    });
});

app.get('/', (req, res) => {});

app.listen(3000);
