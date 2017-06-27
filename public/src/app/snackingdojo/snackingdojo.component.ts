import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"

@Component({
  selector: 'app-snackingdojo',
  templateUrl: './snackingdojo.component.html',
  styleUrls: ['./snackingdojo.component.css']
})
export class SnackingdojoComponent implements OnInit {
  productList = []
  user = {}
  productsUserLikes = []
  productsUserDislikes = []
  constructor(private _dbService: DatabaseService) { }

  ngOnInit() {
    this.updateUser()
    this.updateProducts()
    console.log(this.productsUserLikes)

  }
  vote(data){
    this._dbService.likeProduct(data).then(()=>{this.updateUser();this.updateProducts()}).catch((err)=>{
      console.log(err)
    })
  }
  updateUser(){
    this._dbService.getOneUser("59526e587339d656a96aad22").then((user)=>{
      this.user = user
      console.log(user)
      user.likes.forEach((like)=>{
        if(like.value){
          this.productsUserLikes.push(like.product_id)
        }else{
          this.productsUserDislikes.push(like.product_id)
        }
      })
    })
  }
  updateProducts(){
    this._dbService.getAllProducts().then((products)=>{
      this.productList = products
    })
  }
}
