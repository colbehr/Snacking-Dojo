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
  }

}
