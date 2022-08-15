const pool = require('../db/conn');

const insertLivro = function ({
    titulo,
    autor,
    editora,
    publicacao,
    dataRegistrado
}) {
    const sql = `INSERT INTO livros (livro_titulo, livro_autor, livro_editora, livro_publicacao, livro_data_registrado) VALUES (?, ?, ?, ?, ?)`;
    const data = [titulo, autor, editora, publicacao, dataRegistrado];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
};

const buscarLivro = function () {
    const sql = `SELECT * FROM livros`;

    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data;
        console.log(book);
    });
};

const buscarIdLivro = function (id) {
    const sql = `SELECT * FROM livros WHERE livro_id = ?`;
    const data = [id];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];
    });
};

const atualizarLivro = function ({ titulo, autor, editora, publicacao, id }) {
    const sql = `UPDATE livros SET livro_titulo = ?, livro_autor = ?, livro_editora = ?, livro_publicacao = ? WHERE livro_id = ?`;
    const data = [titulo, autor, editora, publicacao, id];

    pool.query(sql, data, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const book = data[0];
    });
};

const deleteLivro = function (id) {
    const sql = `DELETE FROM livros WHERE id = ?`;
    const data = [id];

    pool.query(sql, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
};

module.exports = {
    insertLivro,
    buscarLivro,
    buscarIdLivro,
    atualizarLivro,
    deleteLivro
};
