// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  patientName: String,
  age: Number,
  gender: String,
  medicalHistory: String,
  appointmentDate: Date,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);