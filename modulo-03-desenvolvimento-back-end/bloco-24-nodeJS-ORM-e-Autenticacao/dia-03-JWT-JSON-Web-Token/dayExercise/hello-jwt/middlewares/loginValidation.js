const loginSchema = require('../schemas/loginSchema');

const loginValidation = (req, res, next) => {
  try {
    const { body } = req;
    const { error /* , value */ } = loginSchema.validate(body);
    // console.log('error: ', error, '//', 'value: ', value);
    if (error) return next(error);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginValidation;