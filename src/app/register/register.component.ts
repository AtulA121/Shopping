import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerObj : Object={};

  constructor(private _auth : AuthService,private _router : Router) { }

  ngOnInit() {
  }

  register()
  {
    console.log("register data : ",this.registerObj);
    this._auth.registerUser(this.registerObj).subscribe((res)=>{
      console.log("response : ",res);
      if(res.result)
      {
        localStorage.setItem("token",res.token);
        this._router.navigate(["/login"]);
      }
    },(error)=>{
      console.log("error : ",error);
    });
  }

}
