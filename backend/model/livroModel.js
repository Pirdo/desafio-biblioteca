const { json } = require('express');
const pool = require('../db/conn');

const insertLivro = function ({
    titulo,
    autor,
    editora,
    publicacao,
    dataRegistrado
}) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO livros (livro_titulo, livro_autor, livro_editora, livro_publicacao, livro_data_registrado) VALUES (?, ?, ?, ?, ?)`;
        const data = [titulo, autor, editora, publicacao, dataRegistrado];

        pool.query(sql, data, function (err) {
            err ? reject(console.error(err)) : resolve('Successfully saved');
        });
    });
};

const buscarLivro = function () {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM livros';

        pool.query(sql, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

const buscarIdLivro = function (id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM livros WHERE livro_id = ?`;
        const data = [id];

        pool.query(sql, data, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

const atualizarLivro = function ({
    livro_titulo,
    livro_autor,
    livro_editora,
    livro_publicacao,
    livro_id
}) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE livros SET livro_titulo = ?, livro_autor = ?, livro_editora = ?, livro_publicacao = ? WHERE livro_id = ?`;
        const data = [
            livro_titulo,
            livro_autor,
            livro_editora,
            livro_publicacao,
            livro_id
        ];

        pool.query(sql, data, function (err, data) {
            err ? reject(console.error(err)) : resolve(data);
        });
    });
};

const deleteLivro = function (id) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM livros WHERE livro_id = ?`;
        const data = [id];

        pool.query(sql, data, function (err) {
            err ? reject(err) : resolve(data);
        });
    });
};

module.exports = {
    insertLivro,
    buscarLivro,
    buscarIdLivro,
    atualizarLivro,
    deleteLivro
};
