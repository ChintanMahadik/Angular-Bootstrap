import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import {MatSnackBar} from '@angular/material';

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
  flag:boolean;
  constructor(private http:HttpClient, private router:Router,private session:SessionStorageService,private snackBar: MatSnackBar) {
    this.flag=false;
   }

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
        "image":"./assets/img/chintan.jpg",
        "description":"PI Brothers !!"
      }

      this.session.set("data",this.value,1,'h');
      this.router.navigate(['/profile']);
  }
  else if(this.username=="raj" && this.password=="raj1234")    {
    this.value={
          "name":"Raj Kamal",
          "nick":"The free Wikipedia of Filenet",
          "thing1":"You have always been encouraging in my course of time. ",
          "thing2":"When nobody is there, Raj is the one whom you can call. Not only professionally, but this man will support you anytime you need him.",
          "thing3":"I am grateful for having you just like my brother. Nike shoe Bros :)",
          "thing4":"We shared work, Gym, food, trips, talks, fun together. Everything gonna be missed for ever. I will be available for you all the time.",
          "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
          "image":"./assets/img/raj.jpg",
          "description":"PI Brothers !!"
        }
        this.session.set("data",this.value,1,'h');
        this.router.navigate(['/profile']);
  
    }
    else if(this.username=="vikas" && this.password=="vikas1234")    { 
      this.value={
            "name":"Vikas Kumar",
            "nick":"The Player of Filenet",
            "thing1":"The only person I talk with in my cubicle.",
            "thing2":"Karan-Arjun to be specific. We have spent most of the time together watching videos, jokes, memes etc and just Laughing and giggling.",
            "thing3":"Yes, I liked the fun we had being cubicle partners. Selfie bro :).",
            "thing4":"We have not only shared cubicle but also memories like united 21, panchgani, camping. Indeed gonna be missed. Thik hai!!",
            "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
            "image":"./assets/img/vikas.jpg",
            "description":"Very Social Brothers !!"
          }
          this.session.set("data",this.value,1,'h');
          this.router.navigate(['/profile']);
    
      }

      else if(this.username=="rajat" && this.password=="rajat1234")    {
        this.value={
              "name":"Rajat Sahu",
              "nick":"The Gamer of Filenet",
              "thing1":"Kuch bhi ha Chintan. Chintan paagal ho gaya hai. Akela hass raha hai.",
              "thing2":"Yaa, these were the things i have heard from you. Although we didn't talk much but still whenever we talked, we laughed terribly.",
              "thing3":"There are so many things we had together like trips, clash of clans, 8 ball pool. and ummm... health check PI too. :)",
              "thing4":"Doreamon of filenet who tags me in his pics socially without having me completely in it. You will be missed for sure. Thik hai!!",
              "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
              "image":"./assets/img/rajat.jpg",
              "description":"Gamer Brothers !!"
            }
            this.session.set("data",this.value,1,'h');
            this.router.navigate(['/profile']);
      
        }
        else if(this.username=="anurag" && this.password=="anurag1234")    {
          this.value={
                "name":"Anurag Sharma",
                "nick":"The Sir of Everybody",
                "thing1":"You have always been with me from my start.",
                "thing2":"Whenever i needed any help for work, the first person to be thought of is you.",
                "thing3":"I have never created any Change Request of my own till today. Each and every small thing such as fun at your desk, teasing, gym, marine drive, trips etc gonna be missed",
                "thing4":"You were Sir, You are Sir and Will remain Sir forever. Such a kind personality.",
                "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                "image":"./assets/img/anurag.jpg",
                "description":"Bhak Saale Chintan !!"
              }
              this.session.set("data",this.value,1,'h');
              this.router.navigate(['/profile']);
        
          }
          
          else if(this.username=="supriya" && this.password=="supriya1234")    {
            this.value={
                  "name":"Supriya Rokade",
                  "nick":"The Clarity girl of Filenet",
                  "thing1":"The busiest girl of our team. She can skip meals for her work.",
                  "thing2":"A lot to learn from her. Ambitious, Proactive, A Good teacher, Mentor, offcourse our clarity spoc.",
                  "thing3":"Working with her will make you learn many good things. Keep calm and work on.",
                  "thing4":"We have been part of various team events, trips, lunch, snacks etc. and Everything gonna be missed. :)",
                  "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                  "image":"./assets/img/supriya.jpg",
                  "description":"DPA Girl !!"
                }
                this.session.set("data",this.value,1,'h');
                this.router.navigate(['/profile']);
          
            }   

            else if(this.username=="naina" && this.password=="naina1234")    { 
              this.value={
                    "name":"Naina Dutta",
                    "nick":"The Blazeds Girl of Filenet",
                    "thing1":"Adventurous girl i have ever met. A strong, independent girl",
                    "thing2":"My Life's first project was with her i.e. CR10 - UA Damage. I was very excited to work and eventually learnt many things from her during the course of task. ",
                    "thing3":"She is often quite but her laughter can destroy silence.",
                    "thing4":"She is my neighbour and we share same desk phone :). Everything gonna be missed. :)",
                    "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                    "image":"./assets/img/naina.jpg",
                    "description":"Party Animal !!"
                  }
                  this.session.set("data",this.value,1,'h');
                  this.router.navigate(['/profile']);
            
              }
              
              else if(this.username=="prajakta" && this.password=="prajakta1234")    { 
                this.value={
                      "name":"Prajakta Borude",
                      "nick":"The Zoned Out girl of Mankind",
                      "thing1":"Here we come to our new joinee of 2017. She is little Alag.",
                      "thing2":"When people talk to her, she talk to gods [I mean she gets zone out easily.] and later she will ask 'Kya bol rahe the aap?'. I am like Nothing!!",
                      "thing3":"Very much soft spoken, patient, obedient girl. Although we worked together for a less time, It was good working with you.",
                      "thing4":"Yes, we were a part of various trips, events etc. and all these small things will be missed. Jakta Devi cha vijay aso !! ",
                      "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                      "image":"./assets/img/prajakta.jpg",
                      "description":"Oh Please !!"
                    }
                    this.session.set("data",this.value,1,'h');
                    this.router.navigate(['/profile']);
              
                }
                
                else if(this.username=="kaveri" && this.password=="kaveri1234")    { 
                  this.value={
                        "name":"Kaveri Andhale",
                        "nick":"The SRK lover and THUG",
                        "thing1":"Here we come to our new joinee of 2017. She doesnt care about anybody.",
                        "thing2":"Dare you speak about srk then you will be soon RIP. :)",
                        "thing3":"She is very much cautious about things like emails, Frank etc. I remember one incident where she typed and relooked her finger instead of keyboard.",
                        "thing4":"We have been a part of many trips, events, team stuff etc. Everthing will be missed. SRK is the best Actor of bollywood !!",
                        "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                        "image":"./assets/img/kaveri.jpg",
                        "description":"khhh khhhh Kaveri !!"
                      }
                      this.session.set("data",this.value,1,'h');
                      this.router.navigate(['/profile']);
                
                  }  
                  
      else if(this.username=="saumya" && this.password=="saumya1234")    { 
          this.value={
              "name":"Saumya Singh",
              "nick":"The Silent Girl",
              "thing1":"For any Maintenance assistance contact her.",
              "thing2":"She is quite and takes work very seriously. Although we havent worked together much, but it was a good experience being in a team.",
              "thing3":"It seems you are a very passionate towards exploring and learning new things.",
              "thing4":"We have been a part of many trips, events, team stuff etc. It will be missed indeed.",
              "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
              "image":"./assets/img/saumya.jpg",
              "description":"Self Learner !!"
              }
              this.session.set("data",this.value,1,'h');
              this.router.navigate(['/profile']);
                  
          }
          else if(this.username=="ankit" && this.password=="ankit1234")    { 
            this.value={
                "name":"Ankit Pandey",
                "nick":"The Foodie of Filenet and Investment advisor",
                "thing1":"I think you should have gone for Banking jobs.",
                "thing2":"The person who not only have knowledge about banking, investments etc but also have adviced many of us.",
                "thing3":"There is not much of difference in our experience. We were like brothers and tickle friends throughout. All the best for your higher studies bro.",
                "thing4":"We have been part of Team events, parties etc and have enjoyed alot. Surely these things will be missed.",
                "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                "image":"./assets/img/ankit.jpg",
                "description":"Tujhe last warning de raha hoon !! :)"
            }
            this.session.set("data",this.value,1,'h');
            this.router.navigate(['/profile']);
                    
            }
            else if(this.username=="rohit" && this.password=="rohit1234")    { 
              this.value={
                  "name":"Rohit Singh",
                  "nick":"Player",
                  "thing1":"I have not much interacted with you, yet a very nice person to talk with.",
                  "thing2":"He is not seen on his desk but can be frequently observed at Gymkhana or Gym.",
                  "thing3":"Nocturnal PUBG player.",
                  "thing4":"We have been part of Team events and have enjoyed alot.",
                  "speciality":"Bhale Hi Apne Dost Kam Hai, Par Jitne Bhi Hai…Saare Parmanu Bum Hai.",
                  "image":"./assets/img/rohit.png",
                  "description":"PUBG khelega kya ?"
              }
              this.session.set("data",this.value,1,'h');
              this.router.navigate(['/profile']);
                      
              }
               else if(this.username=="anagha" && this.password=="anagha1234")    { 
              this.value={
                  "name":"Anagha Anande",
                  "nick":"Ma'am",
                  "thing1":"You are very kind by nature and a sweet personality overall.",
                  "thing2":"You have always been encouraging and Helpful Throughout.",
                  "thing3":"There are many things to learn from you. ",
                  "thing4":"Although you have always been telling us that not to call ' Ma'am ' but still I kept calling you ma'am only :).",
                  "speciality":"Leadership is the art of giving people a platform for spreading ideas that work.",
                  "image":"./assets/img/anagha.jpg",
                  "description":"Best Manager Ever!!"
              }
              this.session.set("data",this.value,1,'h');
              this.router.navigate(['/profile']);
                      
              }
          else if(this.username=="fresher" && this.password=="fresher1234")    { 
            this.value={
                "name":"New Shining Stars",
                "nick":"Keep Shining",
                "thing1":"Its your time now.",
                "thing2":"Never stop doing what you like.",
                "thing3":"Explore new things and excel your skills.",
                "thing4":"Best of luck.",
                "speciality":"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT",
                "image":"./assets/img/main.jpg",
                "description":"Enjoy !! :)"
              }
              this.session.set("data",this.value,1,'h');
              this.router.navigate(['/profile']);
                    
            }   
            
         else{

          this.openSnackBar();
            }
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
    });
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color:deepskyblue;
    }
  `],
})
export class SnackbarComponent {}