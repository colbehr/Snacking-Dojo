import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-snackingdojo',
  templateUrl: './snackingdojo.component.html',
  styleUrls: ['./snackingdojo.component.css'],
})
export class SnackingdojoComponent implements OnInit {
  productList = []
  user: any
  githubUser = {id: "", username: "", _json: {avatar_url: "", displayName: ""}}
  user_id = ""
  search = ""
  productsUserLikes = []
  productsUserDislikes = []
  constructor(private _dbService: DatabaseService) { }
  checkStatus(){
    console.log("checking status")
    if(this.githubUser.id){
      return true
    }
        
      this._dbService.checkStatus().then((githubUser)=>{
      console.log("dbservice check status")
      console.log(githubUser)
      this.githubUser = githubUser
      this.updateUser(githubUser.id)
    }).catch((error)=>{
      
    })
      
  }
  ngOnInit() {
    console.log("oninit")
    this.checkStatus()
    
    
    this.updateProducts()
    console.log("user", this.user)
    console.log("githubUser", this.githubUser)
    console.log(this.productsUserLikes)

  }
  vote(data){
    console.log("inside vote method")


    if(this.user){
      data.github_id = this.githubUser.id
      this._dbService.likeProduct(data).then(()=>{
        this.updateUser(this.githubUser.id);
        // this.updateProducts()
      }).catch((err)=>{
      console.log(err)
    })
  }else{
      window.location.href = '/auth/github'
      // this.checkStatus()
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
        this._dbService.createUser({github_id : this.githubUser.id, username: this.githubUser.username, img: this.githubUser._json.avatar_url}).then((user)=>{
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
