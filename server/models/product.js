let mongoose = require('mongoose')

let ProductSchema = mongoose.Schema({
  name: {
    type: String, 
    required: [true, "Product Name is required"],
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
  }

}, {timestamps: true})
mongoose.model("Product", ProductSchema)