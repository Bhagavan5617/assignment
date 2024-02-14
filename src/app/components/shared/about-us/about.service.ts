import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  public cartData:any =[]
  public productData: any[] = [];
  private productApi = 'https://fakestoreapi.com/products'
  constructor( private http:HttpClient) { }
  getProducts(){

    return this.http.get(this.productApi)
  }
  deleteProduct(id:any){
    const api= this.productApi+`/${id}`
    return this.http.delete(api)
  }

  addProducts(){
    return this.http.post(this.productApi, this.productData)
  }
  addToCart(product:any){
    this.cartData.push(product)
  }

  getCartData(){
    return this.cartData;
  }

}
