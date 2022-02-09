// Create one route POST called /hello
const appRequires = require('./helper');

const app = appRequires();

function exercise2() {
  app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}!` });
  });

  app.listen('3000', () => {
    console.log('App running on port 3000');
  });
}

module.exports = exercise2;