import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'  // it is equal to provider attriute in app.module.ts file 
})
export class ProductService {
  constructor(public http:HttpClient) { }


  // loadJsonData() : void {
    
  //   this.http.get("./assets/products.json").subscribe({
  //     next:(data:any)=>console.log(data),
  //     error:(error:any)=>console.log("Error generated "+error),
  //     complete:()=>console.log("task done!")
  //   });

  // }

  //returing observable with type casting all json data to Product model class. 

  loaJsonData():Observable<Product[]> {
    //return this.http.get<Product[]>("./assets/products.json");
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  
  // storeProductDetails(product:any): void {
  //   this.http.post("http://localhost:3000/products",product).subscribe({
  //     next:(data:any)=>console.log(data),
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("task done!")
  //   });

  // }

  storeProductDetails(product:any): Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/products",product)
  }

  deleteProductDetails(pid:any):Observable<Product> {
    return this.http.delete<Product>("http://localhost:3000/products/"+pid);
  }

  updateProductDetails(product:any): Observable<Product>{
    return this.http.patch<Product>("http://localhost:3000/products",product);
  }
}
