const mongoose = require('mongoose');

const viewedSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movie: Array
});

module.exports = mongoose.model('Viewed', viewedSchema);
