let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  //need to add likes/dislikes and github stuff
})