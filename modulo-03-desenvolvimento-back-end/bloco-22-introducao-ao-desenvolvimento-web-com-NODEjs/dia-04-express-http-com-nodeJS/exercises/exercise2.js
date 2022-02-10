// Create one route POST called /hello
const appRequires = require('./helper');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise2() {
  app.post('/hello', (req, res) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}!` });
  });

  app.listen('3000', () => {
    console.log('App running on port 3000');
  });
}

module.exports = exercise2;