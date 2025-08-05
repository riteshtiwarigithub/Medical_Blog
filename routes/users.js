// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) res.send(user);
  else res.status(401).send('Invalid credentials');
});

module.exports = router;