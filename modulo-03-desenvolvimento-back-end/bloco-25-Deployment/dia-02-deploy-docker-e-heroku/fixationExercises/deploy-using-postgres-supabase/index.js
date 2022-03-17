const express = require('express');
const { Product } = require('./models');

const app = express();

const PORT = process.env.DB_PORT || 3000;

app.use(express.json());

app.post('/product', async (req, res) => {
  const { name, description } = req.body;

  const product = await Product.create({ name, description });

  return res.status(201).json(product);
});

app.listen(PORT, () => console.log(`Online on: ${PORT}`));