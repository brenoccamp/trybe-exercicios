// Create one endpoint POST /simpsons to add new simpsons or return 404 - Simpson already exists!
const appRequires = require('./helper');
const { setSimpsons, getSimpsons } = require('./exercise5');
const validateToken = require('./validateToken');

const app = appRequires();

function exercise8() {
  app.post('/simpsons', async (req, res) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) {
      res.status(401).json({ message: `Invalid token. It must have 16 characters!` });
      return;
    }

    const { id, name } = req.body;
    const simpsons = await getSimpsons();

    const simpsonIndex = simpsons.findIndex((simpson) => parseInt(simpson.id) === parseInt(id));

    if (simpsonIndex !== -1) return res.status(409).json({ message: `ID:'${id}' already exists!` });

    simpsons.push({id, name});
    setSimpsons(simpsons);
    res.status(204).end();
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise8;