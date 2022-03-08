const { Book, User } = require('../models');

const listUserBooks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  listUserBooks,
}