const mongoose = require('mongoose');

const superlikeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movie: Array
});

module.exports = mongoose.model('Superlike', superlikeSchema);
