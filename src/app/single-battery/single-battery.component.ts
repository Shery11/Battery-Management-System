import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

declare var $ :any;

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
   showReg = false;
   showDis = false;
   showChar = false;
   status; 

   regEdit = {};
   disEdit = {};
   charEdit = {};

   ngOnInit() {
     
     this.bid = this.router.snapshot.params['bid']
     console.log(this.bid);
     this.showReg = false;
     this.showDis = false;
     this.showChar = false;

     this.userService.getBatteryById(this.bid).map(res => res.json()).subscribe(data=>{
         console.log(data);
     	if(data.success){
           this.battery = data.data;
           this.regeneration = data.data.regeneration;
           this.discharging = data.data.discharging;
           this.charging = data.data.charging;
           this.isDataAvailable = true;

           if(data.data.dispatch){
              this.status = 'Dispatched';
           }else{
              this.status = 'In Lab'; 
           }

           console.log(this.battery,this.regeneration,this.charging,this.discharging);
     	}else{

     		console.log('unable to get the battery data')

     	}

     },err=>{
        console.log(err);
     })


  }


  editRegeneration(data){
    this.showReg = true;
    console.log(data);
    Object.assign(this.regEdit,data);
     
  }

  saveEditable(data){
    console.log(data);
  }


  // this will be called when the save button is pressed
   saveEditRegeneration(data){
    console.log(data);
    // this is where we will make an http call to the server and save the data to database
    this.userService.updateRegenerationDataById(data)
    .map(res => res.json()).subscribe(data=>{
         console.log(data);
     	if(data.success){
          // window.location.reload();     
          this.ngOnInit();   
        }else{

     		console.log('unable to get the battery data')

     	}

     },err=>{
        console.log(err);
     })

  }


  editDischarging(data){
    this.showDis = true;
    console.log(data);
    Object.assign(this.disEdit,data);

  }

  saveEditDischarging(data){
    console.log(data);
    // this is where we will make an http call to the server and save the data to database
    this.userService.updateDischargingDatabyId(data)
    .map(res => res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
        this.ngOnInit();   
        }else{

         console.log('unable to get the battery data')

       }

     },err=>{
        console.log(err);
     })

  }

 

   editCharging(data){
    this.showChar = true;
    console.log(data);
    Object.assign(this.charEdit,data);
   }

  saveEditCharging(data){
    console.log(data);
    // this is where we will make an http call to the server and save the data to database
    this.userService.updateChargingDatabyId(data)
    .map(res => res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
        this.ngOnInit();      
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
  	

   // this removes empty keys
    Object.keys(value).forEach((key) => (value[key] == "") && delete value[key]);
    

    console.log(value);


   this.userService.addRegenerationDatabyId(value)
    .map(res => res.json()).subscribe(data=>{
         console.log(data);
     	if(data.success){
        this.ngOnInit(); 
         $('#myModal2').modal('hide');     
        }else{
         $('#myModal2').modal('hide');
     		console.log('unable to get the battery data')

     	}

     },err=>{
        console.log(err);
     })
  }


  dischargingData(value){
    

    value.id = this.bid;
    console.log(value);
    
   // this removes empty keys
    Object.keys(value).forEach((key) => (value[key] == "") && delete value[key]);
    

    this.userService.addDischargingDatabyId(value).map(res => res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
        this.ngOnInit();  
        $('#myModal4').modal('hide');       
        }else{
         $('#myModal4').modal('hide'); 
         console.log('unable to get the battery data')

       }

     },err=>{
        console.log(err);
     })
  }


   chargingData(value){
    

    value.id = this.bid;
    console.log(value);
    // this removes empty keys
    Object.keys(value).forEach((key) => (value[key] == "") && delete value[key]);
    console.log(value);
    this.userService.addChargingDatabyId(value).map(res => res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
        this.ngOnInit(); 
        $('.modal').modal('hide');         
        }else{
         $('.modal').modal('hide'); 
         console.log('unable to get the battery data')

       }

     },err=>{
        console.log(err);
     })
  }



  dispatchData(value){
    console.log(value);

    value.dispatch = true;
    value.id = this.bid;

    console.log(value);

    this.userService.updateDispatchDatabyBatteryId(value).map(res=> res.json()).subscribe(data=>{
         console.log(data);
       if(data.success){
         console.log(data);
          this.ngOnInit(); 
          $('.modal').modal('hide');  
        }else{
         $('.modal').modal('hide');   
         console.log('unable to get the battery data')

       }
    },err=>{
        console.log(err);
     })
   }

}
