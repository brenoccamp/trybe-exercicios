import Joi from 'joi';

const UserValidation = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

export default UserValidation;