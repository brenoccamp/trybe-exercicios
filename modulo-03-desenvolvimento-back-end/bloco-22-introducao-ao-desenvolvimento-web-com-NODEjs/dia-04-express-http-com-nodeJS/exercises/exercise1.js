// Create a get route called /ping
const appRequires = require('./helper');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise1() {
  app.get('/ping', (req, res) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    res.status(200).json({ message: 'pong' });
  });

  app.listen('3000', () => {
    console.log('App running on port 3000');
  });
}

module.exports = exercise1;