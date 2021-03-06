const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/', (_req, res) => res.status(200).send('Hello World!'));

app.use(require('../controllers/root'));

app.use(require('../middlewares/error'));

module.exports = app;