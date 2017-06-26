let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  likes: {}
  //need to add likes/dislikes and github stuff
}, {timestamps: true})