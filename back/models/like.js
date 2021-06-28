const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movie: Array
});

module.exports = mongoose.model('Like', likeSchema);
