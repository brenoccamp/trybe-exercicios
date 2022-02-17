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

app.get('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Author not found!' });
  
    res.status(200).json(author);
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/books', async (req, res) => {
  try{
    const { author_id } = req.query
    const books = (author_id)
    ? await Book.getAuthorById(author_id)
    : await Book.getAll();  
    
    res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: 'Internal server error!' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));