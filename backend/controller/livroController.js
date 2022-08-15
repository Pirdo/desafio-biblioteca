const livroModel = require('../model/livroModel');

const insertLivro = function (payload) {
    payload.dataRegistrado = new Date();
    livroModel.insertLivro(payload);
};

const buscarLivro = function () {
    livroModel.buscarLivro();
};

const buscarIdLivro = function (id) {
    livroModel.buscarIdLivro(id);
};

const atualizarLivro = function (payload) {
    livroModel.atualizarLivro(payload);
};

const deleteLivro = function (id) {
    livroModel.deleteLivro(id);
};

module.exports = {
    insertLivro,
    buscarLivro,
    buscarIdLivro,
    atualizarLivro,
    deleteLivro
};
