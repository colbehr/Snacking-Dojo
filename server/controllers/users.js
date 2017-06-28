let mongoose = require('mongoose')
let User = mongoose.model("User")
let Product = mongoose.model("Product")

module.exports = {
  
  like: (request, response)=>{

    if(request.isAuthenticated()){
      console.log(JSON.stringify(request.user, null, 4))
    }else{
      console.log("not authorized")
    }
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

    if(request.isAuthenticated()){

      response.json(request.user)
    }else{
      response.status(401).json(false)
    }
  }


}