const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });