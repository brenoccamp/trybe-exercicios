const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5),
});

module.exports = loginSchema;