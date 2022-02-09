// Create a get route called /ping
const appRequires = require('./helper');

const app = appRequires();

function exercise1() {
  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
  });

  app.listen('3000', () => {
    console.log('App running on port 3000');
  });
}

module.exports = exercise1;