const express = require('express');
const userController = require('./controllers/user');

const app = express();
app.use(express.json());
app.use('/user', userController)

app.listen('3002', () => console.log('Running app on port 3002'));
