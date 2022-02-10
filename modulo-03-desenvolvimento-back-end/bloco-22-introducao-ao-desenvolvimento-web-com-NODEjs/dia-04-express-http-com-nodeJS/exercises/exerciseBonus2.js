// Create one route POST called /signup that receives email, password, firstName and phone.
const appRequires = require('./helper');
const crypto = require('crypto');

const app = appRequires();

const generateToken = () => crypto.randomBytes(8).toString('hex');

function exerciseBonus2() {
  app.post('/signup', (req, res) => {
    const { email, password, firstName, phone } = req.body;

    if (!email || !password || !firstName || !phone) {
      return res.status(401).json({ message: 'Missing fields! Please fill them all!' });
    }

    const aleatoryToken = generateToken();

    res.status(200).json({ token: `${aleatoryToken}` });
  });

  app.listen('3000', () => console.log('Running app on port 3000'));
}

module.exports = exerciseBonus2;