const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Running on port: ${PORT}`));
app.listen(PORT, () => console.log(`Online: ${PORT}`));

//TESTING REVIEW APPS HEROKU