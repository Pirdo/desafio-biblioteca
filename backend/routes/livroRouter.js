const express = require('express');
const livroController = require('../controller/livroController');

const router = express.Router();

router.post('/adicionar', (req, res) => {
    livroController.insertLivro(req.body);
    res.json({ message: 'insert funcionou!' });
});

router.get('/buscar', (req, res) => {
    livroController.buscarLivro();
    res.json({ message: `select funcionou!` });
});

router.get('/buscarId/:id', (req, res) => {
    livroController.buscarIdLivro(req.params.id);
    res.json({ message: 'edit funcionou!' });
});

router.put('/atualizar', (req, res) => {
    livroController.atualizarLivro(req.body);
    res.json({ message: 'update funcionou!' });
});

router.delete('/deletar/:id', (req, res) => {
    livroController.deleteLivro(req.params.id);
    res.json({ message: 'delete funcionou!' });
});

module.exports = router;
