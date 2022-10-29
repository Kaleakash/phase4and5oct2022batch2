import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = false;
  b1:string ="show";
  f4:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.f3=true;
  }
  toggle() {
    if(this.f4){
        this.f4=false;
        this.b1="show";
    }else {
      this.f4=true;
      this.b1="hide";
    }
  }
}
