let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  img: {
    type: String
  },
  token: {
    type: String
  }
  ,
  likes: [{product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"}, value: Boolean}] 
    

}, {timestamps: true})

mongoose.model("User", UserSchema)