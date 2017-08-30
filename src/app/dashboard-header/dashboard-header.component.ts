import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(public authService: AuthService,private cookie: CookieService) { }

  logOut(){
  	this.authService.logout();
  	this.cookie.removeAll();
  }

  ngOnInit() {
  }

}
