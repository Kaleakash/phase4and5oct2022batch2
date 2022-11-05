import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRef = new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    url:new FormControl()
  });


  productsInfo:Array<Product>=[];
  constructor(public ps:ProductService) { }  // DI for ProductService

  // this is life cycle or hook of component. it will call only once after constructor. 
  ngOnInit(): void {
    this.loadData();
  }
  storeMsg:string =""
  deleteMsg:string="";
  b1:string ="Store Product";

  loadData() : void {
   // this.ps.loadJsonData();

   this.ps.loaJsonData().subscribe({
      //next:(data:any)=>this.productsInfo=data.products,
      next:(data:any)=>this.productsInfo=data,
      error:(error:any)=>console.log("Error generated "+error),
      complete:()=>console.log("task done!")
   })
  }

  storeProduct() {
    let product = this.productRef.value;
    if(this.b1=="Update Product"){
      this.ps.updateProductDetails(product).subscribe({
        next:(data:any)=>this.storeMsg="Data Updated successfully",
        error:(error:any)=>console.log(error),
        complete:()=>this.loadData()
  });
    this.b1="Store Product";
    }else {
      this.ps.storeProductDetails(product).subscribe({
            next:(data:any)=>this.storeMsg="Data Stored successfully",
            error:(error:any)=>this.storeMsg="Data didn't store",
            complete:()=>this.loadData()
      })
    }
    

    this.productRef.reset();
  }

  deleteProduct(pid:any){
     // alert(pid);
     this.ps.deleteProductDetails(pid).subscribe({
      next:(data:any)=>this.deleteMsg="Record deleted successfully",
      error:(error:any)=>this.deleteMsg="Record didn't delete",
      complete:()=>this.loadData()
})
  }

  updateProduct(product:any){
    this.productRef.get("id")?.setValue(product.id);
    this.productRef.get("pname")?.setValue(product.pname);
    this.productRef.get("price")?.setValue(product.price);
    this.productRef.get("url")?.setValue(product.url);
    this.b1="Update Product";
  }
}
