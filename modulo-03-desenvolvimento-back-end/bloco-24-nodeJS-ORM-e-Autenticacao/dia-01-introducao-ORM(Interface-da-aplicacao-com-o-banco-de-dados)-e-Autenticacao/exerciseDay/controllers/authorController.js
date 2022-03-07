const express = require('express');
const { Book } = require('../models')
const router = express.Router();

router.get('/:author', async (req, res, next) => {
  try {
    const { author } = req.params;

    const booksByAuthor = await Book.findAll({ where: { author } });

    return res.status(200).json(booksByAuthor);
  } catch (e) {
    next(e);
  }
});

module.exports = router;