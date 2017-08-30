import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService } from 'ngx-cookie';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	error;
 
  ngOnInit() {
  }


   constructor(public authService: AuthService,private router:Router,private cookie : CookieService,private userService : UserService) {}

	  onSubmit(value) {
	    
	    this.authService.login(value.email, value.password).then(res => {
        this.router.navigateByUrl('/dashboard');
        console.log(res.uid);
        this.cookie.put('token',res.uid);
      }).catch(err => {

        this.error = err.message
        setTimeout(()=>{
           this.error = false;
        } , 3000);
       
      });
	      
	  }

    signInFacebook(){
      this.authService.signInWithFacebook()
      .then(res =>{

        // this.router.navigateByUrl('/dashboard');

         console.log(res.user.uid);
         console.log(res.user.email);
         console.log(res.user.displayName);


         this.userService.getUserData(res.user.uid).subscribe(resp => {
         console.log(resp.json());
          var response = resp.json();

         if(! response.success){

            console.log("No user found register the user");
                 this.userService.registerUser(res.user.displayName,res.user.email,res.user.uid).subscribe(resp => {
                   console.log(resp.json());
                   var response = resp.json();

                   if(response.success){
                      this.router.navigateByUrl('/dashboard'); 
                      this.cookie.put('token',res.user.uid); 
                   }else{
                      this.error = "Unknown error occured, contact customer support";
                       setTimeout(()=>{
                         // this.router.navigateByUrl('/register');
                         this.error = false;
                      } , 3000);
                   }

                   
                 
                 },e=>{
                    console.log(e);
                 });

            
         }else{

            console.log("user found means he is registed,navigate to dashboard");
            this.router.navigateByUrl('/dashboard'); 
            this.cookie.put('token',res.user.uid);
         }

         
         
         },e=>{
            console.log(e);
         });

        
        
       

        

      }).catch(err =>{

         this.error = err.message
        setTimeout(()=>{
           // this.router.navigate(['register']);
           this.error = false;
        } , 3000);

      })
    }

    signInGoogle(){

      this.authService.signInWithGoogle()
      .then(res =>{
         console.log(res.user.uid);
         console.log(res.user.email);
         console.log(res.user.displayName);


         this.userService.getUserData(res.user.uid).subscribe(resp => {
          console.log(resp.json());
          var response = resp.json();

         if(! response.success){

            console.log("No user found register the user");
                 this.userService.registerUser(res.user.displayName,res.user.email,res.user.uid).subscribe(resp => {
                   console.log(resp.json());
                   var response = resp.json();

                   if(response.success){
                       this.router.navigateByUrl('/dashboard'); 
                      this.cookie.put('token',res.user.uid);   
                   }else{
                      this.error = "Unknown error occured, contact customer support";
                       setTimeout(()=>{
                         // this.router.navigateByUrl('/register');
                         this.error = false;
                      } , 3000);
                   }

                   
                 
                 },e=>{
                    console.log(e);
                 });
                 
           
         }else{

            console.log("user found means he is registed,navigate to dashboard");
            this.router.navigateByUrl('/dashboard'); 
            this.cookie.put('token',res.user.uid);
         }

         
         
         },e=>{
            console.log(e);
         });

      }).catch(err =>{

         this.error = err.message
        setTimeout(()=>{
           // this.router.navigate(['register']);
           this.error = false;
        } , 3000);

      })
    }

    signInGithub(){
      this.authService.signInWithGithub()
      .then(res =>{
         console.log(res.user.uid);
         console.log(res.user.email);
         console.log(res.user.displayName);


         this.userService.getUserData(res.user.uid).subscribe(resp => {
          console.log(resp.json());
          var response = resp.json();

         if(! response.success){

            console.log("No user found register the user");
                 this.userService.registerUser(res.user.displayName,res.user.email,res.user.uid).subscribe(resp => {
                   console.log(resp.json());
                   var response = resp.json();

                   if(response.success){
                      this.router.navigateByUrl('/dashboard'); 
                      this.cookie.put('token',res.user.uid); 
                   }else{
                      this.error = "Unknown error occured, contact customer support";
                       setTimeout(()=>{
                         // this.router.navigateByUrl('/register');
                         this.error = false;
                      } , 3000);
                   }

                   
                 
                 },e=>{
                    console.log(e);
                 });
                 
            
         }else{

            console.log("user found means he is registed,navigate to dashboard");
            this.router.navigateByUrl('/dashboard'); 
            this.cookie.put('token',res.user.uid);
         }

         
         
         },e=>{
            console.log(e);
         });

      }).catch(err =>{

         this.error = err.message
        setTimeout(()=>{
           // this.router.navigate(['register']);
           this.error = false;
        } , 3000);

      })
    }




	 
}
