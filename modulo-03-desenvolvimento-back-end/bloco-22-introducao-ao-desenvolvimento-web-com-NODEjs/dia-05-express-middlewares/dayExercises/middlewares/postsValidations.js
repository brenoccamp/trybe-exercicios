const { readFile } = require('../herlpers/read-write');

const isValidId = async (req, res, next) => {
  const { id } = req.params;

  const post = await readFile('posts.json');

  const foundID = post.find((post) => post.id == id);

  if (!foundID) return res.status(404).json({ message: 'Post not found' });

  return res.status(200).json(foundID);
}

const allPosts = async (req, res, next) => {
  const posts = await readFile('posts.json');

  if (posts.length === 0) return res.status(200).json({ posts: [] });

  return res.status(200).json(JSON.stringify(posts));
}

module.exports = {
  isValidId,
  allPosts
};