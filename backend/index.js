const express = require('express');

const cors = require('cors');

const pool = require('./db/conn');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get('/livros/adicionarlivros', (req, res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const editora = req.body.editora;
    const publicacao = req.body.publicacao;

    const sql = `INSERT INTO livros (livro_titulo, livro_autor, livro_editora, livro_publicacao) VALUES ('${titulo}', '${autor}', '${editora}', '${publicacao}')`;

    pool.query(sql, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        //enviar para pagina vizualizar livros
    });
});

app.get('/livros/editarlivros/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM livros WHERE id = ${id}`;

    pool.query(sql, function (err) {
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

    const sql = `UPDATE livros SET livro_titulo = '${titulo}', livro_autor = '${autor}', livro_editora = '${editora}', livro_publicacao = '${publicacao}' WHERE id = ${id}`;

    pool.query(sql, function (err) {
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

    const sql = `DELETE FROM livros WHERE id = ${id}`;

    pool.query(sql, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        //enviar para pagina vizualizar livros
    });
});

app.get('/', (req, res) => {
    res.render('frontend/src/app/app.component.html');
});

app.listen(process.env.PORT || 3000);
