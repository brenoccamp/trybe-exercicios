function appRequires() {
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();

  app.use(bodyParser.json());

  return app;
}

module.exports = appRequires;