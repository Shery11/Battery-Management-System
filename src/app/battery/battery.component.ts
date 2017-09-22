import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

declare var $ :any;


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
  loading = false;
  submit = false; 
  batteriesBulk = [];
  labSerialNo;
  batterySerialNo;
  volt;
  resistance;
  disableVolt;
  disableResistance;
  
  
  ngOnInit() {

  	this.id = this.router.snapshot.params['id'];
  	this.oid = this.router.snapshot.params['oid'];
  	this.mid = this.router.snapshot.params['mid'];

    this.batteriesBulk = [];
    this.labSerialNo = "";
    this.batterySerialNo = "";
    this.volt = "";
    this.resistance = "";
    this.disableVolt = false;
    this.disableResistance = false;

   

    this.userService.getBatteriesByBatteryModelId(this.mid).map(res=> res.json()).subscribe(data=>{
        console.log(data);
        if(data.success){
           this.batteries = data.data;
            this.loading = false;
        }else{
           console.log('Unable to get the data')
        }
     },err=>{
     	console.log(err);
     })

  }


  add(value){
  	console.log(value);
    this.submit = false;

  	var data = {
  		batterySerialNo : value.bs,
  		labSerialNo : value.ls,
  		batteryModel: this.mid,
  		batteryOrder: this.oid,
      batteryClient : this.id,
      volt : value.volt,
      resistance : value.resistance,
      remarks : value.remarks

  	}

  	this.userService.addNewBattery(data).map(res=> res.json()).subscribe(data => {
  		console.log(data);
  		if(data.success){
           this.ngOnInit();
            $('#myModal2').modal('hide');
            this.submit = false;
  		}else{
           console.log('unable to save the data');
            $('#myModal2').modal('hide');
            this.submit = false;
  		}
  	},err=>{
  		console.log(err);
      this.submit = false;
      $('#myModal2').modal('hide');

  	})

  	console.log(data);

  }



   status(data){
     console.log(data);
     this.loading = true;
      var value = {
        id:data._id,
        dispatch:true
      };
     
    console.log(value);

    this.userService.updateStatusbyBatteryId(value).map(res=> res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
         console.log(data);
          this.ngOnInit();
          
          
        }else{
         
         console.log('unable to dispatch try again');
         this.loading = false;

       }
    },err=>{
        console.log(err);
        this.loading = false;
     })
    }

    // this will push data to batteriesBulk
    addtoBulk(){

      console.log(this.labSerialNo,this.batterySerialNo);
     
     if( !(this.labSerialNo === "") &&  !(this.batterySerialNo === "")){ 
       var data = {
             labSerialNo:this.labSerialNo,
             batterySerialNo : this.batterySerialNo
           };
     
           this.batteriesBulk.push(data);
     }
      
        this.labSerialNo = "";
        this.batterySerialNo = "";

      
    }


    disableVoltandResistance(){
      if(this.resistance){
        this.disableResistance = true;
      }
      if(this.volt){
        this.disableVolt = true;
      }

    }
    
    // this will save data to database
    saveBulkToDatabase(){
      
      console.log(this.batteriesBulk);
      console.log(this.volt,this.resistance);
       var data = {
         volt:this.volt,
         resistance: this.resistance,
         batteriesBulk : this.batteriesBulk,
         batteryClient : this.id,
         batteryOrder : this.oid,
         batteryModel : this.mid

       }

       this.userService.saveBulkBatteries(data).map(res=> res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
         console.log(data);
          this.ngOnInit();
       }else{

         alert("Some values are not specified");
         
         console.log('unable to add try again');
       }
    },err=>{
        console.log(err);
        
     });

    }



    removeFromBulk(data){

        console.log(data);
       this.batteriesBulk.splice(data,1);

    }


    delete(id){
      this.loading = true;
      console.log(id);
      this.userService.deleteBattery(id).map(res=> res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
         console.log(data);
          this.ngOnInit();
          
          
        }else{
         
         console.log('unable to dispatch try again');
         this.loading = false;

       }
    },err=>{
        console.log(err);
        this.loading = false;
     })


    }

}
