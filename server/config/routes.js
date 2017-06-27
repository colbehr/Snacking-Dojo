let mongoose = require('mongoose')
let users = require("./../controllers/users")
let products = require("./../controllers/products")
let path = require("path")
module.exports = (app)=>{
  //users
  app.post("/users/create", users.create)
  app.post("/users/like", users.like)
  app.get("/users", users.getAll)

  //products
  app.post("/products/create", products.create)
  app.post("/products/addMany", products.createMany)
  app.get("/products", products.getAll)

  app.get("*", (request, response)=>{
    response.sendFile(path.resolve("./public/dist/index.html"))
  })
}