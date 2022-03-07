const express = require('express');
const bookController = require('./controllers/bookController');
const authorController = require('./controllers/authorController');
const error = require('./controllers/error');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/books', bookController);
app.use('/author', authorController);

app.use(error);

app.listen(PORT, () => console.log(`Runnig on PORT ${PORT}`));
