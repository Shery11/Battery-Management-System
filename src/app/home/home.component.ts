import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService : UserService,private router: Router) { }

  clients;
  

  ngOnInit() {
    
    console.log("initialized");


  	this.userService.getAllClients().map(res => res.json()).subscribe(data=>{
       console.log(data);
       if(data.success){
       	 this.clients = data.data;
       }else{
       	 console.log("No data available");
       }
  	},err=>{
       console.log(err);
  	})
  }


  add(value){
  	console.log(value);

  	var data = {
      name: value.name,
      contactPerson : value.contactPerson,
      jobTitle : value.jobTitle,
      contactNumber : value.contactNumber,
      mobileNumber : value.mobileNumber,
      address : value.address
    }
    
    console.log(data);

  	 this.userService.addNewClient(data).map(res=> res.json()).subscribe(data=>{
  	 	console.log(data);
  	 	if(data.success){
            this.ngOnInit();

            $('#myModal2').modal('hide');

  	 	}else{
  	 		console.log("unable to add data");
         $('#myModal2').modal('hide');
  	 	}
  	 },err=>{
       console.log(err);
  	})
  }

}
