const express = require('express');
const livroController = require('../controller/livroController');

const router = express.Router();

router.post('/adicionar', (req, res) => {
    livroController.insertLivro(req.body);
    res.json({ message: 'insert funcionou!' });
});

router.get('/buscar', async (req, res) => {
    try {
        const results = await livroController.buscarLivro();

        res.json(results);
    } catch (err) {
        console.error(err);
    }
});

router.get('/buscarId/:id', async (req, res) => {
    try {
        const results = await livroController.buscarIdLivro(req.params.id);
        res.json(results);
    } catch (err) {
        console.error(err);
    }
});

router.put('/atualizar', async (req, res) => {
    try {
        const data = await livroController.atualizarLivro(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
    }
});

router.delete('/deletar/:id', async (req, res) => {
    try {
        const data = await livroController.deleteLivro(req.params.id);
        res.json(data);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
