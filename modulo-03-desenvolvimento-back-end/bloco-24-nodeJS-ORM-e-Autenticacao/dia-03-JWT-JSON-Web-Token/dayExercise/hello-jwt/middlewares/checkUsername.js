const { findOne } = require('../models/User');

const checkExistsUsername = async (req, res, next) => {
  try {
    const { username } = req.body;

    const foundUser = await findOne(username);
  
    if (foundUser) return res.status(409).json({ error: { message: 'user already exists' } });

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = checkExistsUsername;