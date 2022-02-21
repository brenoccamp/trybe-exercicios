const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);

    return res.status(201).json(newProduct);
  } catch (e) {
    return res.status(500).json({ message: 'Something was wrong' });
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({ message: 'Something was wrong' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({ message: 'Something was wrong' });
  }
});

module.exports = router;