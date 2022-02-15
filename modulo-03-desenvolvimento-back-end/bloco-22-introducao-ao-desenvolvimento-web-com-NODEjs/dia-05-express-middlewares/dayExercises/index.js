const express = require('express');
const userController = require('./controllers/user');
const btcController = require('./controllers/btc');
const postsController = require('./controllers/posts');

const app = express();
app.use(express.json());
app.use('/user', userController);
app.use('/btc', btcController);
app.use('/posts', postsController);
app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));

app.listen('3002', () => console.log('Run server on port 3002'));
