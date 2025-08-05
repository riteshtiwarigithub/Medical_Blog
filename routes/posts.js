// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.send(posts);
});

router.put('/:id', async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send({ message: 'Post deleted' });
});

module.exports = router;