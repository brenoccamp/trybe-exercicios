const e = require('express');
const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (e) {
    console.error(e.message);
    next(e)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.error(e.message);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.error(e.message);
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const updatedBook = await Book.update({ title, author, pageQuantity }, { where: { id: id } });
    return res.status(201).json({ id, title, author, pageQuantity });
  } catch (e) {
    console.error(e.message);
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Book.destroy({ where: { id } });

    return res.status(204).end();
  } catch (e) {
    console.error(e.message);
    next(e);
  }
})

module.exports = router;