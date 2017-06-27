let mongoose = require('mongoose')
let Product = mongoose.model("Product")
module.exports = {
  getALl: (request, response)=>{
    Product.find({}).exec((error, products)=>{
      if(error){
        console.log(error)
        response.status(500).json(error)
      }else{
        response.json(products)
      }
    })
  },
  create: (request, response)=>{
    //request.body should be of the form:
    //{name: "product-name", img: "www.img.com/img.png"}
    let newProduct = new Product(request.body)
    newProduct.save().then((product)=>{
      console.log("saved, returning product as json")
      response.json(product)
    }).catch((error)=>{
      console.log("error in products.js create", error)
      response.status(500).json(false)
    })
  },
  createMany: (request, response)=>{
    //array of product objects
    for (let product of request.body){
      let newProduct = new Product(product)
      newProduct.save().then((product)=>{
      console.log("saved, returning product as json")
      response.json(product)
      }).catch((error)=>{
        console.log("error in products.js create", error)
        response.status(500).json(false)
      })
    }
  }


}