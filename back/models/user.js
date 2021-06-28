const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileFotos:{
    type: String,
  },
  birthday:{
   type: String,
  },
  sex:{

    type: String,
  },
  nickname:{
    type: String,
  },

});

module.exports = mongoose.model('users', usersSchema);
