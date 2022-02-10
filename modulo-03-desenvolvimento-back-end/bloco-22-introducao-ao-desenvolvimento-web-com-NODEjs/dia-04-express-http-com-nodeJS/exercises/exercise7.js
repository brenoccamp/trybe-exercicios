// Create one endpoint GET called /simpsons/:id that returns a character searched by id
const appRequires = require('./helper');
const { getSimpsons } = require('./exercise5');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise7() {
  app.get('/simpsons/:id', async (req, res) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    const simpsons = await getSimpsons();
    const { id } = req.params;

    const searchedSimpson = simpsons.find((simpson) => parseInt(simpson.id) === parseInt(id));

    if (!searchedSimpson) return res.status(404).json({ message: `Simpson with id:${id} not found!` });

    res.status(200).json(searchedSimpson);
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise7;