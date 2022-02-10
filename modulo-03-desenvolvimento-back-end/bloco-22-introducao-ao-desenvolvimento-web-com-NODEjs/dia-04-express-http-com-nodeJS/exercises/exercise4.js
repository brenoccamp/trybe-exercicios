// Create one route PUT called /users/:name/:age
const appRequires = require('./helper');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise4() {
  app.put('/users/:name/:age', (req, res) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    const { name, age } = req.params;
    res.status(200).json({ message: `Your name is ${name} and you are ${age} years old!` });
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise4;