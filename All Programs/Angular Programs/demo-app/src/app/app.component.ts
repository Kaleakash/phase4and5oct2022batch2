import { Component } from '@angular/core';

@Component({
  selector: 'abc',       // <app-root></app-root>
  templateUrl: './app.component.html',        // connecting to html page 
  styleUrls: ['./app.component.css']      // connecting to css file 
})
export class AppComponent {
 id:number = 123;
 name:string ="Raj Deep"
 result : boolean = true;

}
