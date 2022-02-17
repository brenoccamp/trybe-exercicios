const express = require('express');

const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.getAll();
    
    res.status(200).json(authors);
  } catch (e) {
    res.status(500).json({ message: 'Internal server error!' });
  }
});

app.get('/books', async (_req, res) => {
  try{
    const books = await Book.getAll();
    
    res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: 'Internal server error!' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));