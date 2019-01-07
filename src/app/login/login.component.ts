import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  obj:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  login(){

    this.obj={
      "username":this.username, 
      "password":this.password
     };

    // this.http.post("http://localhost:8080/login",this.obj).subscribe(data=>{
    //   console.log(data);
    // });

    alert("Hi, you are logged in as '"+ this.username+"'");
  }

}
