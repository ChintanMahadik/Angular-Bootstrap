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
  value:any;
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
if(this.username=="chintan" && this.password=="chintan1234")    {
  this.value={
        "name":this.username,
        "nick":"chintya",
        "thing1":"You are supportive",
        "thing2":"You are always helpful",
        "thing3":"You are Kind by heart",
        "speciality":"Jovial by nature and always keep entertaining.",
        "image":"./assets/img/chintan.jpg"
      }

  }
  else if(this.username=="raj" && this.password=="raj1234")    {
    this.value={
          "name":"Raj Kamal",
          "nick":"The open Wikipedia of Filenet",
          "thing1":"You are supportive",
          "thing2":"You are always helpful",
          "thing3":"You are Kind by heart",
          "speciality":"Jovial by nature and always keep entertaining.",
          "image":"./assets/img/raj.jpg"
        }
  
    }
    else if(this.username=="vikas" && this.password=="vikas1234")    { 
      this.value={
            "name":"Vikas Kumar",
            "nick":"The Player of Filenet",
            "thing1":"You are supportive",
            "thing2":"You are always helpful",
            "thing3":"You are Kind by heart",
            "speciality":"Jovial by nature and always keep entertaining.",
            "image":"./assets/img/vikas.jpg"
          }
    
      }

      else if(this.username=="rajat" && this.password=="rajat1234")    {
        this.value={
              "name":"Rajat Sahu",
              "nick":"The Doreamon of Filenet",
              "thing1":"You are supportive",
              "thing2":"You are always helpful",
              "thing3":"You are Kind by heart",
              "speciality":"Jovial by nature and always keep entertaining.",
              "image":"./assets/img/rajat.jpg"
            }
      
        }
        else if(this.username=="anurag" && this.password=="anurag1234")    {
          this.value={
                "name":"Anurag Sharma",
                "nick":"The Sir of Everybody",
                "thing1":"You are supportive",
                "thing2":"You are always helpful",
                "thing3":"You are Kind by heart",
                "speciality":"Jovial by nature and always keep entertaining.",
                "image":"./assets/img/anurag.jpg"
              }
        
          }
          
          else if(this.username=="supriya" && this.password=="supriya1234")    {
            this.value={
                  "name":"Supriya Rokade",
                  "nick":"The Clarity girl of Filenet",
                  "thing1":"You are supportive",
                  "thing2":"You are always helpful",
                  "thing3":"You are Kind by heart",
                  "speciality":"Jovial by nature and always keep entertaining.",
                  "image":"./assets/img/supriya.jpg"
                }
          
            }   

            else if(this.username=="naina" && this.password=="naina1234")    { 
              this.value={
                    "name":"Naina Dutta",
                    "nick":"The Blazeds Girl of Filenet",
                    "thing1":"You are supportive",
                    "thing2":"You are always helpful",
                    "thing3":"You are Kind by heart",
                    "speciality":"Jovial by nature and always keep entertaining.",
                    "image":"./assets/img/naina.jpg"
                  }
            
              }
              
              else if(this.username=="prajakta" && this.password=="prajakta1234")    { 
                this.value={
                      "name":"Prajakta Borude",
                      "nick":"The Zoned Out girl of Mankind",
                      "thing1":"You are supportive",
                      "thing2":"You are always helpful",
                      "thing3":"You are Kind by heart",
                      "speciality":"Jovial by nature and always keep entertaining.",
                      "image":"./assets/img/prajakta.jpg"
                    }
              
                }
                
                else if(this.username=="kaveri" && this.password=="kaveri1234")    { 
                  this.value={
                        "name":"Kaveri Andhale",
                        "nick":"The SRK lover and THUG",
                        "thing1":"You are supportive",
                        "thing2":"You are always helpful",
                        "thing3":"You are Kind by heart",
                        "speciality":"Jovial by nature and always keep entertaining.",
                        "image":"./assets/img/kaveri.jpg"
                      }
                
                  }  
                  
      else if(this.username=="saumya" && this.password=="saumya1234")    { 
          this.value={
              "name":"Saumya Singh",
              "nick":"The Silent Heels breaker",
              "thing1":"You are supportive",
              "thing2":"You are always helpful",
              "thing3":"You are Kind by heart",
              "speciality":"Jovial by nature and always keep entertaining.",
              "image":"./assets/img/saumya.jpg"
                        }
                  
          }
          else if(this.username=="ankit" && this.password=="ankit1234")    { 
            this.value={
                "name":"Ankit Pandey",
                "nick":"The Foodie of Filenet and Investment advisor",
                "thing1":"You are supportive",
                "thing2":"You are always helpful",
                "thing3":"You are Kind by heart",
                "speciality":"Jovial by nature and always keep entertaining.",
                "image":"./assets/img/ankit.jpg"
                          }
                    
            }
          else if(this.username=="fresher" && this.password=="fresher1234")    { 
            this.value={
                "name":"New Bloods",
                "nick":"Keep Shining",
                "thing1":"You are supportive",
                "thing2":"You are always helpful",
                "thing3":"You are Kind by heart",
                "speciality":"Jovial by nature and always keep entertaining.",
                "image":"./assets/img/main.jpg"
                          }
                    
            }    
      this.session.set("data",this.value,1,'h');
    
     this.router.navigate(['/profile']);
  }

}
