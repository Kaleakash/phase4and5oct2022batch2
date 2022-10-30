import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsInfo:Array<Product>=[];
  constructor(public ps:ProductService) { }  // DI for ProductService

  ngOnInit(): void {
  }

  loadData() : void {
   // this.ps.loadJsonData();

   this.ps.loaJsonData().subscribe({
      next:(data:any)=>this.productsInfo=data.products,
      error:(error:any)=>console.log("Error generated "+error),
      complete:()=>console.log("task done!")
   })
  }
}
