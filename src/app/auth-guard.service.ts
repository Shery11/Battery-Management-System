import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {CookieService } from 'ngx-cookie';




@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private cookie : CookieService,private router : Router) { }

  canActivate(){

  	if(this.cookie.get('token')){
  	   return true;	
  	}else{
		this.router.navigate(['/login'])
	}
	return false;
 }

}
