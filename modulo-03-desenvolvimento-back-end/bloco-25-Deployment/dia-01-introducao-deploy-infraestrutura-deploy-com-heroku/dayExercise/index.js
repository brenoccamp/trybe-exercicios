const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res, _next) => {
  res.status(200).json('Está vivo!!!');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));