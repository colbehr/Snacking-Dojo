let mongoose = require('mongoose')
let User = mongoose.model("User")

module.exports = {
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
    //todo
  }


}