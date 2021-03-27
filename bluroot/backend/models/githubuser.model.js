const mongoose = require('mongoose');

//schema
const githubuserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique:true
      },
      html_url: {
        type: String,
        required:true
      },
      location: {
        type: String,
        required:true
      }
});

const User = mongoose.model('User', githubuserSchema);
module.exports = User;
