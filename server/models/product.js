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

}, {timestamps: true})
mongoose.model("Product", ProductSchema)