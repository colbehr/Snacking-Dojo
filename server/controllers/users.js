let mongoose = require('mongoose')
let User = mongoose.model("User")
let Product = mongoose.model("Product")

module.exports = {
  logout: (request, response)=>{
    //add logout
  },
  like: (request, response)=>{
    //user sends post request with user/product _id in body, and maybe like/dislike boolean?
    //{user_id: "lakf32f3l3ktt43", product_id: "lf23f23424f", value: "0"}
    //check like value, toggle it or remove it or add it
    User.findOne({_id: request.body.user_id}).exec((error, user)=>{
      if(error){
        console.log(error)
        response.status(500).json(false)
      }else{
        if(user){
          let userSave = user
          console.log("found user: ", user)
          let found = false
          let incVal = 0
        //check if product is in "likes" array

        if(user.likes){user.likes.forEach((like, index)=>{
          if(like.product_id == request.body.product_id){
            //user has liked/disliked product
            console.log("found product in likes")
            found = true
            console.log("like.value, request.body.value",typeof(like.value), typeof(request.body.value))
            if(like.value == Number(request.body.value)){
              console.log("like.value == body.value")
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
                incVal = -2
              }else{
                incVal = 2
              }

            }

            user.save().then((result)=>{
              // Product.findByIdAndUpdate(request.body.product_id, {$inc: {votes: incVal}},(err, res)=>{
              //   if(err){
              //     console.log(err)
              //   }
              // })
              response.json(result)
            }).catch((err)=>{console.log(err); response.status(500).json(err)})
          }
        })}
        //after for loop
        if(!found){
          //user hasn't liked/disliked product, add it
          if(Number(request.body.value)){
            incVal = 1
          }else{
            incVal = -1
          }
          console.log("product not found, adding it")
          User.findByIdAndUpdate(user._id ,{$push: {likes: {product_id: request.body.product_id, value: request.body.value}}}, (err, result)=>{
            console.log("inside callback")
            if(err){console.log(err); response.status(500).json(false)}else{
              console.log("inside else"); 
              // Product.findByIdAndUpdate(request.body.product_id, {$inc: {votes: Number(request.body.value)}},(err, res)=>{
              //   if(err){
              //     console.log(err)
              //   }
              // })
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
    User.findOne({email: request.body.email.toLowerCase()}, (error, user)=>{
      if(error){
        console.log("error finding user  create: users.js")
        response.status(500).json(false)
      }else{
        if(user){
          request.session.user_id = user._id
          response.json(user)
        }else{
          //user not in db, create user
          let newUser = new User(request.body)
          newUser.email = newUser.email.toLowerCase()
          newUser.save().then(()=>{request.session.user_id = newUser._id;response.json(newUser)}).catch(()=>{console.log("catch in create user users.js")
          response.status(500).json(false)
          })
        }
      }
    })
  }


}