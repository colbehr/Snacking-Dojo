import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs"
@Injectable()
export class DatabaseService {

  constructor(private _http: Http) { }
  //users
  createUser(user){
    return this._http.post("/users/create", user).map(data=>data.json()).toPromise()
  }
  getAllUsers(){
    return this._http.get('/users').map(data=>data.json()).toPromise()
  }
  likeProduct(id_object_with_value){
    //{product_id = "woifjoi3f23f", user_id = "fj23iofj22442", value = "0" (zero or 1)}
    return this._http.post("/users/like", id_object_with_value).map(data=>data.json()).toPromise()
  }

  //products
  createProduct(product){
    return this._http.post("/products/create", product).toPromise()
  }
  getAllProducts(){
    return this._http.get("/products").map(data=>data.json()).toPromise()
  }


}
