import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-snackingdojo',
  templateUrl: './snackingdojo.component.html',
  styleUrls: ['./snackingdojo.component.css']
})
export class SnackingdojoComponent implements OnInit {
  productList = []
  user = {}
  githubUser = {id: "", login: "", avatar_url: ""}
  user_id = ""
  productsUserLikes = []
  productsUserDislikes = []
  constructor(private _dbService: DatabaseService) { }
  checkStatus(){
    console.log("checking status")
    if(!this.user){
      console.log("abc")
    this._dbService.checkStatus().then((githubUser)=>{
      console.log(githubUser)

    }).catch((error)=>{
      console.log(error)
    })}else{console.log("check status else")}
  }
  ngOnInit() {
    console.log("oninit")
    this.checkStatus()
    
    

    console.log("user", this.user)
    console.log("githubUser", this.githubUser)


  }
  vote(data){
    console.log("inside vote methoawefawefwed")
    this.checkStatus()
    console.log("checked status, user = ", this.user)
    if(this.user){
      console.log("inside if(this.user)")
      this._dbService.likeProduct(data).then(()=>{this.updateUser(this.githubUser.id);this.updateProducts()}).catch((err)=>{
      console.log(err)
    })
    }else{
      window.location.href = '/auth/github'
    }
    
  }
  
  updateUser(user_id){
    this.productsUserDislikes = []
    this.productsUserLikes = []
    console.log(this.user_id)
    this._dbService.getOneUser(user_id).then((user)=>{
      console.log("************************")
      if(user){this.user = user
      console.log(user)
      
      user.likes.forEach((like)=>{
        if(like.value){
          this.productsUserLikes.push(like.product_id)
        }else{
          this.productsUserDislikes.push(like.product_id)
        }
      })}else{
        this._dbService.createUser({github_id : this.githubUser.id, username: this.githubUser.login, img: this.githubUser.avatar_url}).then((user)=>{
          this.user = user
        }).catch((asdf)=>{
          console.log(asdf)
        })
      }
    })
  }
  updateProducts(){
    this._dbService.getAllProducts().then((products)=>{
      this.productList = products
    })
  }
}
