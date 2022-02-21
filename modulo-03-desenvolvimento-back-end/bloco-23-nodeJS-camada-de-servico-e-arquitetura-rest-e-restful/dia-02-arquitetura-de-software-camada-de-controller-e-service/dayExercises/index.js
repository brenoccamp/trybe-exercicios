require('dotenv').config();
const express = require('express');
const routerPing = require('./routers/pingRouter');

const app = express();

app.use(express.json());

app.use('/ping', routerPing);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));