import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"
import { Product } from "./../product"



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList: Product[]

  constructor(private _dbService: DatabaseService) { }

  ngOnInit() {
    
    this.updateProducts()
    
    }
    updateProducts(){
    this._dbService.getAllProducts().then((products)=>{
    this.productList = products
    })
  }
}
