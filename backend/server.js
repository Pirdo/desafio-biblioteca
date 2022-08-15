require('dotenv').config();

const livroRouter = require('./routes/livroRouter');
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
app.use('/livros', livroRouter);

app.listen(port, () => console.log(`Running service on port ${port}`));
