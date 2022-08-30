const livroModel = require('../model/livroModel');
const dataFormatada = require('../helpers/formatDate');

const insertLivro = function (payload) {
    payload.dataRegistrado = dataFormatada();

    livroModel.insertLivro(payload);
};

const buscarLivro = function () {
    const results = livroModel.buscarLivro();
    return results;
};

const buscarIdLivro = async function (id) {
    const results = await livroModel.buscarIdLivro(id);
    return results;
};

const atualizarLivro = function (payload) {
    const data = livroModel.atualizarLivro(payload);
    return data;
};

const deleteLivro = function (id) {
    const data = livroModel.deleteLivro(id);
    return data;
};

module.exports = {
    insertLivro,
    buscarLivro,
    buscarIdLivro,
    atualizarLivro,
    deleteLivro
};
