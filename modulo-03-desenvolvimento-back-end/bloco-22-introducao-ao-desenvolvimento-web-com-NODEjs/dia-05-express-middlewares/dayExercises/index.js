const express = require('express');
const userController = require('./controllers/user');
const btcController = require('./controllers/btc');

const app = express();
app.use(express.json());
app.use('/user', userController);
app.use('/btc', btcController);

app.listen('3002', () => console.log('Run server on port 3002'));
