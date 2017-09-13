import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService } from 'ngx-cookie';
import { UserService } from '../user.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	error;
  bar = false;
 
 
  ngOnInit() {


  }


   constructor(public authService: AuthService,private router:Router,private cookie : CookieService,private userService : UserService) {}

	

    onSubmit(value) {

      this.bar = true;
	    
	    this.authService.login(value.email, value.password).then(res => {
        this.router.navigateByUrl('/dashboard');
        console.log(res.uid);
        this.cookie.put('token',res.uid);

      }).catch(err => {
         this.bar = false
        this.error = err.message
        setTimeout(()=>{
           this.error = false;
        } , 3000);
       
      });
	      
	  }





	 
}
