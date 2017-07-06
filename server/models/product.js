let mongoose = require('mongoose')

let ProductSchema = mongoose.Schema({
  _id: {
    type:String
  },
  subcategory: {
    type: String
  },
  name: {
    type: String
  },
  img: {
    type: String,
  },
  votes:{
    type: Number,
    default: 0
  },
  category:{
    type: String
  },
  price:{
    type: String
  },
  comments: [{
    comment: String, _user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, createdAt: {type: Date}
  }, ]

}, {timestamps: true})
mongoose.model("Product", ProductSchema)