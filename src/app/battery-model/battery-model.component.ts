import { Component, OnInit } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-battery-model',
  templateUrl: './battery-model.component.html',
  styleUrls: ['./battery-model.component.css']
})
export class BatteryModelComponent implements OnInit {

	id;
	oid;
	batteryModels;

  constructor(private router : ActivatedRoute,private userService : UserService) { }

  ngOnInit() {

  	this.id = this.router.snapshot.params['id'];
  	this.oid = this.router.snapshot.params['oid'];

  	console.log(this.id,this.oid);

  	this.userService.getBatteryModelsByOrderId(this.oid).map(res=> res.json()).subscribe(data=>{
       console.log(data);
       if(data.success){

       	 this.batteryModels = data.data;
         console.log(this.batteryModels);
         
       }else{

       }
  	},err=>{
       console.log("unable to get the data")
  	})

  }

  add(value){
  	console.log(value);

  	value.orderId = this.oid;

  	// console.log(value);
     
  	this.userService.addNewBatteryModel(value).map(res =>res.json()).subscribe(data=>{
         if(data.success){
         	window.location.reload();
         }else{
         	console.log('unable to save the data')
         }
  	},err=>{
  		console.log('unable to save the data');
  	})
  }

}
