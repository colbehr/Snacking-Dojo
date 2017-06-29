let mongoose = require('mongoose')
let Product = mongoose.model("Product")
let User = mongoose.model("User")
module.exports = {
  getAll: (request, response)=>{
    Product.find({}).sort("-votes").exec((error, products)=>{
      if(error){
        console.log(error)
        response.status(500).json(error)
      }else{
        response.json(products)
      }
    })
  },
  getOne: (request, response)=>{
    Product.findById(request.params.id).populate("comments._user").exec((err, product)=>{
      if(err){
        response.status(500).json("error finding product")
      }else{
        response.json(product)
      }
    })
  },
  addComment: (request, response)=>{
    Product.findByIdAndUpdate(request.body.product_id, {$push: {comments: {comment: request.body.comment, _user: request.body.user_id, createdAt: request.body.createdAt}}}, (err, product)=>{
      if(err){
        console.log("err adding comment")
        response.status(500).json(err)
      }else{
        response.json(product)
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