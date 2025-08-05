// routes/comments.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.post('/', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.send(comment);
});

router.get('/:postID', async (req, res) => {
  const comments = await Comment.find({ postID: req.params.postID }).populate('userID');
  res.send(comments);
});

module.exports = router;