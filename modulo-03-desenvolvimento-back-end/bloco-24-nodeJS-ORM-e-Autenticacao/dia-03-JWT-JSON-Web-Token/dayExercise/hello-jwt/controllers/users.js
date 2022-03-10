const listUsers = (req, res, next) => {
  try {
    const { username, admin } = req.user;

    res.status(200).json({ username, admin });
  } catch (err) {
    next(err);
  }
};

module.exports = listUsers;