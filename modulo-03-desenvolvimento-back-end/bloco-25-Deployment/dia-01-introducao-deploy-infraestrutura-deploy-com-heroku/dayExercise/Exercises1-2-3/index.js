require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const message = process.env.HEROKU_NEW_MESSAGE || 'Está vivo!!!';

app.get('/', (_req, res, _next) => {
  res.status(200).json(message);
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));