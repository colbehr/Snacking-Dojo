import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"
import { Product } from "./../product"
import {User} from "./../user"
import {Router} from "@angular/router"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList: Product[]

  constructor(private _dbService: DatabaseService, private _router: Router ) { }

  ngOnInit() {
    this._dbService.checkStatus().then((user:User)=>{
      if(user.isAdmin){
        console.log("welcome admin...")
      }else{
        this._router.navigate(["/"])
      }
    }).catch((error)=>{
      console.log(error)
    })

    this.updateProducts()
    console.log(this.productList)
    
    }
    updateProducts(){
    this._dbService.getAllProducts().then((products)=>{
    this.productList = products
    })
  }
}
