import { Component, OnInit} from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';


@Component({
  selector: 'app-single-battery',
  templateUrl: './single-battery.component.html',
  styleUrls: ['./single-battery.component.css']
})
export class SingleBatteryComponent implements OnInit {

  constructor(private router : ActivatedRoute, private userService: UserService) { }
   
   bid;
   battery;
   regeneration;
   charging;
   discharging;
   isDataAvailable = false;

  ngOnInit() {
     
     this.bid = this.router.snapshot.params['bid']
     console.log(this.bid);

     this.userService.getBatteryById(this.bid).map(res => res.json()).subscribe(data=>{
         console.log(data);
     	if(data.success){
           this.battery = data.data;
           this.regeneration = data.data.regeneration;
           this.isDataAvailable = true;

           console.log(this.battery,this.regeneration);
     	}else{

     		console.log('unable to get the battery data')

     	}

     },err=>{
        console.log(err);
     })


  }

   regenerationData(value){

  	console.log(value);
  	value.id = this.bid;
  	console.log(value);
  	this.userService.addRegenerationDatabyId(value).map(res => res.json()).subscribe(data=>{
         console.log(data);
     	if(data.success){
          
        }else{

     		console.log('unable to get the battery data')

     	}

     },err=>{
        console.log(err);
     })
  }

}
