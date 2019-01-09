import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  obj:any;
  constructor(private http:HttpClient, private router:Router,private session:SessionStorageService) { }

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

//to get values from service based on username and password
      let data={
        "name":this.username,
        "nick":"chintya",
        "thing1":"You are supportive",
        "thing2":"You are always helpful",
        "thing3":"You are Kind by heart",
        "speciality":"Jovial by nature and always keep entertaining."
      }
      this.session.set("data",data,1,'h');
    
     this.router.navigate(['/profile']);
  }

}
