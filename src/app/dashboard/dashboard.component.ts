import { Component, OnInit } from '@angular/core';
import {CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from '../user.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService : UserService,private router:Router,private cookie : CookieService) { }
   
   // authenticate(){
   // 	if(this.cookie.get('token')){
   // 		this.userService.getUserData(this.cookie.get('token')).subscribe(res=>{
           
   // 		},e=>{

   // 		})
   // 	}
   // }
   

  
  ngOnInit() {
  }

}
