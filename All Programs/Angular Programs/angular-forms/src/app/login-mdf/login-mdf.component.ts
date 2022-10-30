import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { CustomService } from '../custom.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-mdf',
  templateUrl: './login-mdf.component.html',
  styleUrls: ['./login-mdf.component.css']
})
export class LoginMdfComponent implements OnInit {
  loginRef = new FormGroup({
      emailid:new FormControl(),
      password:new FormControl()
  });
  msg:string =""
  constructor(public ls:LoginService) { }     // DI for service class 

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    // if(login.emailid=="raj@gmail.com" && login.password=="123"){
    //     this.msg="successfully login"
    // }else {
    //     this.msg = "failure try once again"
    // }
    //let cs = new CustomService();
    //this.msg = cs.checkUser(login);
    
    this.msg = this.ls.checkUser(login);
    this.loginRef.reset();
  }
}
