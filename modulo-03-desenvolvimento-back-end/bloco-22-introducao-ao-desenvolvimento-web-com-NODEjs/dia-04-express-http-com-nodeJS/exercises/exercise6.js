// Create and endpoint GET called /simpsons that returns an array with all simpsons' name
const appRequires = require('./helper');
const { getSimpsons } = require('./exercise5');

const app = appRequires();

function exercise6() {
  app.get('/simpsons', async (req, res) => {
    const simpsons = await getSimpsons();

    res.status(200).send(simpsons);
  });

  app.listen('3000', () => console.log('App running on port 3000'));
}

module.exports = exercise6;