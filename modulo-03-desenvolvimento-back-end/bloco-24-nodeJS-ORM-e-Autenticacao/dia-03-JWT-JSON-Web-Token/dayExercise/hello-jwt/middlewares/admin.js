require('dotenv').config();

const isAdmin = (req, _res, next) => {
  try {
    const { admin } = req.user;

  if (!admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;

    return next(err);
  }

  next();
  } catch (err) {
    next(err);
  }
};

module.exports = isAdmin;