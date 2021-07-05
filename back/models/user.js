const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  userLastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
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
  googleId:{
    type: String,
  },
  nickname:{
    type: String,
  },
  comments: {
    type: Array
  }
});

module.exports = mongoose.model('users', usersSchema);
