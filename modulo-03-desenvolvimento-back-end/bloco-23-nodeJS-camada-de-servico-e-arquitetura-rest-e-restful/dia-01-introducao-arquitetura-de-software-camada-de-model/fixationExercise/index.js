const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

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

app.post('/authors', async (req, res) => {
  try {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Invalid datas' });
    }

    await Author.createNewAuthor(first_name, middle_name, last_name);

    return res.status(201).json({ message: 'Author created with success' });
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
})

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

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.bookById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found!' });
  
    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author_id} = req.body;

    if (!Book.isValidBook(title, author_id)) return res.status(400).json({ message: 'Invalid title' });
    if (await Author.findById(author_id) === null) return res.status(400).json({ message: 'Invalid author id' });

    await Book.createNewBook(title, author_id);

    return res.status(201).json({ message: 'Book created with success' });
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));