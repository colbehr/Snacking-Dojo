import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router"
import {DatabaseService} from "./../../database.service"
import {Product} from "./../../product"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product
  constructor(private _route: ActivatedRoute, private _dbService: DatabaseService) { 
    this._route.params.subscribe((param)=>{
      this._dbService.getOneProduct(param.id).then((product)=>{
        this.product = product
      }).catch((err)=>{
        console.log(err)
      })
    })
  }

  ngOnInit() {
  }

}
