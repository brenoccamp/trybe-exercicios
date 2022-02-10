// Create and endpoint GET called /simpsons that returns an array with all simpsons' name
const appRequires = require('./helper');
const { getSimpsons } = require('./exercise5');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise6() {
  app.get('/simpsons', async (req, res) => {
    const token = req.headers.authorization;
    
    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    const simpsons = await getSimpsons();

    res.status(200).send(simpsons);
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise6;