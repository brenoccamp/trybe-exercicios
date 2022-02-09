// Create a get route called /ping
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

function exercise1() {
  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
  });

  app.listen('3000', () => {
    console.log('App running on port 3000');
  });
}

module.exports = exercise1;