import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  msg:string ="";
  constructor(public router:Router,public ls:LoginService) { }  //DI for Router API 

  ngOnInit(): void {
  }

  checkUserDetails(){
    let login = this.loginRef.value;
    this.ls.checkUserDetails().subscribe({
      next:(data:any)=> {
            let result = data.find((l:any)=>l.emailid == login.emailid && l.password==login.password);
            if(result!= undefined){
                sessionStorage.setItem("user",result.emailid);
                this.router.navigate(["home"],{"skipLocationChange":true});
            }else {
              this.msg="InVaid emailid or password";
            }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Done")
    });
    
    // if(login.emailid=="raj@gmail.com" && login.password=="123"){
    //     this.router.navigate(["home"]);
    // }else {
    //     this.msg="InVaid emailid or password";
    // }

    this.loginRef.reset();
  }
}
