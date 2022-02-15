const express = require('express');
const { isValidId, allPosts } = require('../middlewares/postsValidations');

const router = express.Router();

router.get(
  '/:id',
  isValidId
  );

router.get(
  '/posts',
  allPosts
)

module.exports = router;