let mongoose = require('mongoose')

let ProductSchema = mongoose.Schema({
  name: {
    type: String, 
    required: [true, "Product Name is required"],
  },
  img_url: {
    type: String,
  },
  votes:{
    type: Number,
    default: 0
  },

})