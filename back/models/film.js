const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: String,
  genre: Array,
  withWom: Array,
  mood: Array,
  idKP: Number
});

module.exports = mongoose.model('Film', filmSchema);
