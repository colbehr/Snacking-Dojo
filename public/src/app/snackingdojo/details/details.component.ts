import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router"
import {DatabaseService} from "./../../database.service"
import {Product} from "./../../product"
import {User} from "./../../user"
import {GithubUser} from "./../../github-user"
import {Comment} from "./../../comment"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product = {img: "", name: ""}
  product_id = ""
  //need to sort comments somehow?
  //need to refresh item page after adding comment

  githubUser: GithubUser
  commentData: Comment = new Comment
  constructor(private _route: ActivatedRoute, private _dbService: DatabaseService, private _router: Router) { 
    this._route.params.subscribe((param)=>{
      this.product_id = param.id
      
    })
  }
  submitComment(comment){
    console.log(comment)
    
    this._dbService.addComment(comment).then((something)=>{
      console.log(something)
      this.getProduct()
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  ngOnInit() {
    console.log("***********")
    this.getProduct()
    this._dbService.checkStatus().then((user)=>{
      this.githubUser = user
      this._dbService.getOneUser(user.id).then((dbUser)=>{
        console.log("user form db?", dbUser)
        this.commentData.user_id = dbUser._id
        console.log(this.commentData)
      }).catch((err)=>{
        console.log("differnt error")
      })
    }).catch((error)=>{
      console.log("not logged in")
    })
    console.log("this.product", this.product)
  }

  getProduct(){
    this._dbService.getOneProduct(this.product_id).then((product)=>{
        console.log("got product")
        this.product = product
        this.commentData.product_id = product._id
        console.log(this.product)
      }).catch((err)=>{
        console.log(err)
      })
  }
}
