const express = require('express');

const userController = require('./src/controllers/userController');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/user', userController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));