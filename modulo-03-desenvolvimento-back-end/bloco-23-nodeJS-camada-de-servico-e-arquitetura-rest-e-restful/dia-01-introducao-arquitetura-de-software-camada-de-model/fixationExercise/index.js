const express = require('express');

const app = express();
const port = 3000;

const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));