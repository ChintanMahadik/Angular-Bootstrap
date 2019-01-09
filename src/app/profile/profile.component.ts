import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string="";
  subtitle:string="";
  data:any;
  constructor(private session:SessionStorageService) { }

  ngOnInit() {
   this.data=this.session.get("data");
    console.log(this.data.name);
  }

}
