import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


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
       name : value.name,
       phone : value.phone,
       address : {
         area : value.area,
         city : value.city,
         state : value.state	
       }
  	}

  	 this.userService.addNewClient(data).map(res=> res.json()).subscribe(data=>{
  	 	console.log(data);
  	 	if(data.success){
            window.location.reload();
  	 	}else{
  	 		console.log("unable to add data")
  	 	}
  	 },err=>{
       console.log(err);
  	})
  }

}
