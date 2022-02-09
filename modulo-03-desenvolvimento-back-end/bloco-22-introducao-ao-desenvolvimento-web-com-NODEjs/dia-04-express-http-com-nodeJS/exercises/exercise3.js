// Create one route POST called /greetings
const appRequires = require('./helper');

const app = appRequires();

function exercise3() {
  app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

    if (parseInt(age) <= 17) return res.status(401).json({ message: 'Unauthorized' });

    res.status(200).json({ message: `Hello, ${name}!` });
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise3;