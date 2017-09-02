import { Component, OnInit } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  constructor(private router:ActivatedRoute,private userService: UserService) { }
  
  id;
  oid;
  mid;
  batteries;
  
  ngOnInit() {

  	this.id = this.router.snapshot.params['id'];
  	this.oid = this.router.snapshot.params['oid'];
  	this.mid = this.router.snapshot.params['mid']

    this.userService.getBatteriesByBatteryModelId(this.mid).map(res=> res.json()).subscribe(data=>{
        console.log(data);
        if(data.success){
           this.batteries = data.data;
        }else{
           console.log('Unable to get the data')
        }
     },err=>{
     	console.log(err);
     })



  }


  add(value){
  	console.log(value);

  	var data = {
  		batterySerialNo : value.bs,
  		labSerialNo : value.ls,
  		batteryModel: this.mid,
  		batteryOrder: this.oid,
  		batteryClient : this.id
  	}

  	this.userService.addNewBattery(data).map(res=> res.json()).subscribe(data => {
  		console.log(data);
  		if(data.success){
           window.location.reload();
  		}else{
           console.log('unable to save the data')
  		}
  	},err=>{
  		console.log(err);
  	})

  	console.log(data);

  }

}