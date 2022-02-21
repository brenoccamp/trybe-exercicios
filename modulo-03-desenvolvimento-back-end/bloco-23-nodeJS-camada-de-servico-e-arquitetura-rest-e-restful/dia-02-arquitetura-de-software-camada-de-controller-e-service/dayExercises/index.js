require('dotenv').config();
const express = require('express');
const pingRouter = require('./routers/pingRouter');
const cepRouter = require('./routers/cepRouter');

const app = express();

app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));