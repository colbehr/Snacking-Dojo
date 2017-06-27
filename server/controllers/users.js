let mongoose = require('mongoose')
let User = mongoose.model("User")
let Product = mongoose.model("Product")

module.exports = {
  logout: (request, response)=>{
    request.session.destroy()
    response.redirect("/")
  },
  like: (request, response)=>{
    //user sends post request with user/product _id in body, and maybe like/dislike boolean?
    //{user_id: "lakf32f3l3ktt43", product_id: "lf23f23424f", value: "0"}
    //check like value, toggle it or remove it or add it
    User.findOne({github_id: request.body.user_id}).exec((error, user)=>{
      if(error){
        console.log(error)
        response.status(500).json(false)
      }else{
        if(user){
          let userSave = user
          console.log("found user: ", user)
          let found = false
          let incVal = 0
          let userLikeBool = false
        //check if product is in "likes" array

        if(user.likes){user.likes.forEach((like, index)=>{
          if(like.product_id == request.body.product_id){
            //user has liked/disliked product
            console.log("found product in likes")
            found = true
            console.log("like.value, request.body.value",typeof(like.value), typeof(request.body.value))
            if(like.value == Number(request.body.value)){
              console.log("inside if(like.value == number(request.body.value)")
              console.log("like.value, request.body.value = ", like.value, Number(request.body.value))
              //user is undoing a like/dislike
              user.likes.splice(index, 1)
              if(Number(request.body.value)){
                incVal = -1
              }else{
                incVal = 1
              }
              
              
              
            }else{
              console.log("toggling value")
              //user is toggling value
              console.log("like.value=", like.value)
              console.log("!like.value = ", !like.value)
              like.value = !like.value
              console.log("like.value", like.value)
              if(Number(request.body.value)){
                console.log("incrementing 2, body.value ==", Number(request.body.value))
                incVal = 2
              }else{
                incVal = -2
              }

            }

            userSave.save().then((result)=>{
              Product.findByIdAndUpdate(request.body.product_id, {$inc: {votes: incVal}},(err, res)=>{
                if(err){
                  console.log(err)
                }else{
                  console.log("updating product by inc = ", incVal)
                  

                }
              })
              response.json(result)
            }).catch((err)=>{console.log(err); response.status(500).json(err)})
          }
        })}
        //after for loop
        if(!found){
          //user hasn't liked/disliked product, add it
          if(Number(request.body.value)){
            incVal = 1
            userLikeBool = true
          }else{
            incVal = -1
            userLikeBool = false
          }
          console.log("product not found, adding it")

          User.findOneAndUpdate({github_id: request.body.github_id},{$push: {likes: {product_id: request.body.product_id, value: userLikeBool}}}, (err, result)=>{
            console.log("inside callback")
            if(err){console.log(err); response.status(500).json(false)}else{
              console.log("inside else"); 
              Product.findByIdAndUpdate(request.body.product_id, {$inc: {votes: incVal}},(err, res)=>{
                if(err){
                  console.log(err)
                }else{
                  console.log("updating product by inc = ", incVal)
                  

                }
              })
              response.json(result)
            }
          })

        }}else{console.log("didn't find user"); response.status(500).json(false)}
      }
    })
  },
  getAll: (request, response)=>{
    User.find({}).exec((error, users)=>{
      if(error){
        console.log(error)
        response.status(500).json(false)
      }else{
        response.json(users)
      }
    })
  },
  create: (request, response)=>{
    User.findOne({github_id: request.body.github_id}, (error, user)=>{
      if(error){
        console.log("error finding user  create: users.js")
        response.status(500).json(false)
      }else{
        if(user){

          response.json(user)
        }else{
          //user not in db, create user
          let newUser = new User(request.body)
          
          newUser.save().then(()=>{response.json(newUser)}).catch(()=>{console.log("catch in create user users.js")
          response.status(500).json("user failed to save")
          })
        }
      }
    })
  },
  getOne: (request, response)=>{
    User.findOne({github_id: request.params.id}, (err, user)=>{
      if(err){
        response.status(500).json(false)
      }else{
        response.json(user)
      }
    })
  },
  checkStatus: (request, response)=>{

    if(request.user){
      console.log(request.user)
      response.json(request.user)
    }else{
      response.status(401).json(false)
    }
  }


}