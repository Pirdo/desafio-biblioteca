require('dotenv').config();

const pool = require('./db/conn');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/health', (request, response) =>
    response.json({ health: "application it's work" })
);

app.post('/livros/adicionar', (req, res) => {
    const { titulo, autor, editora, publicacao } = req.body;
    const data_registrado = new Date();

    const sql = `INSERT INTO livros (livro_titulo, livro_autor, livro_editora, livro_publicacao, livro_data_registrado) VALUES (?, ?, ?, ?, ?)`;
    const data = [titulo, autor, editora, publicacao, data_registrado];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    res.json({ message: 'insert funcionou!' });
});

app.get('/livros/buscar/', (req, res) => {
    const sql = `SELECT * FROM livros`;

    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data;
        console.log(book);
        res.json({ message: `select funcionou!` });
        //res.render('tela de editar', {livro})
    });
});

app.get('/livros/editar/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM livros WHERE livro_id = ?`;
    const data = [id];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];

        //res.render('tela de editar', {livro})
    });
    res.json({ message: 'edit funcionou!' });
});

app.post('/livros/atualizar', (req, res) => {
    const { id, titulo, autor, editora, publicacao } = req.body;

    const sql = `UPDATE livros SET livro_titulo = ?, livro_autor = ?, livro_editora = ?, livro_publicacao = ? WHERE livro_id = ?`;
    const data = [titulo, autor, editora, publicacao, id];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];

        //enviar para pagina vizualizar livros
    });
    res.json({ message: 'update funcionou!' });
});

app.post('/livros/deletar/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM livros WHERE livro_id = ?`;
    const data = [id];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        //enviar para pagina vizualizar livros
    });
    res.json({ message: 'delete funcionou!' });
});

app.listen(port, () => console.log(`Running service on port ${port}`));
