const User = require('../models/User');

const createNewUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const created = await User.createUser({ first_name, last_name, email, password });

    return res.status(201).json(created);
  } catch (e) {
    next(e);
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    
    if (!users.length) return res.status(200).json([]);

    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
}

const userById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.getUserById(id);

    if (!user.length) return res.status(404).json({ error: true, message: 'User not found' });

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const selectedUser = await User.getUserById(id);

    if (!selectedUser.length) return res.status(404).json({ error: true, message: 'User not found' });

    const { first_name, last_name, email, password } = req.body;

    const user = { id, first_name, last_name, email, password };

    const updated = await User.updateUser(user);

    return res.status(200).json(updated);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createNewUser,
  getAllUsers,
  userById,
  updateUser,
};