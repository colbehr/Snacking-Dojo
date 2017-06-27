import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../database.service"

@Component({
  selector: 'app-snackingdojo',
  templateUrl: './snackingdojo.component.html',
  styleUrls: ['./snackingdojo.component.css']
})
export class SnackingdojoComponent implements OnInit {
  productList = []
  constructor(private _dbService: DatabaseService) { }

  ngOnInit() {
    this.updateProducts()
  }
  vote(data){
    this._dbService.likeProduct(data).then(()=>{this.updateProducts()})
  }
  updateProducts(){
    this._dbService.getAllProducts().then((products)=>{
      this.productList = products
    })
  }
}
