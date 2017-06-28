import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs"
@Injectable()
export class DatabaseService {

  constructor(private _http: Http) { }
  //users
  checkStatus(){
    return this._http.get("/users/checkstatus").map(data=>data.json()).toPromise()
  }
  createUser(user){
    return this._http.post("/users/create", user).map(data=>data.json()).toPromise()
  }
  getOneUser(user_id){
    return this._http.get("/users/"+user_id).map(data=>data.json()).toPromise()
  }
  getAllUsers(){
    return this._http.get('/users').map(data=>data.json()).toPromise()
  }
  likeProduct(id_object_with_value){
    //{product_id = "woifjoi3f23f", github_id = "fj23iofj22442", value = "0" (zero or 1)}
    return this._http.post("/users/like", id_object_with_value).map(data=>data.json()).toPromise()
  }

  //products
  createProduct(product){
    return this._http.post("/products/create", product).toPromise()
  }
  getAllProducts(){
    return this._http.get("/products").map(data=>data.json()).toPromise()
  }

  //github
 

}
