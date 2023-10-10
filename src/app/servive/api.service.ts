import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>('https://dummyjson.com/products')
  }

  //get a particular product
  viewProduct(productId:string){
    return this.http.get(`https://dummyjson.com/products/${productId}`)
  }
}
