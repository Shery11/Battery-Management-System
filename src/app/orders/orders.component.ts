import { Component, OnInit } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

declare var $ :any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

   orders;
   id; 
   public loading = false;
 
      
  constructor(private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit() {
     
    this.id = this.route.snapshot.params['id']
    this.loading = false; 
  	
  	this.userService.getOrdersByClientId(this.id).map(res=> res.json()).subscribe(data=>{
       console.log(data);
       if(data.success){
          this.orders = data.data;
          console.log(this.orders)
       }else{
          console.log("No data available");
       }
       
  	},err=>{
  		console.log("unable to get the data")
  	})
  }


  add(value){
     this.loading = true; 

    value.clientId = this.id;
    console.log(value);

    this.userService.addNewOrder(value).map(res => res.json()).subscribe(data=>{
      console.log(data);
       if(data.success){
           this.ngOnInit();
           $('#myModal2').modal('hide');
       }else{
          console.log("unable to add data");
          $('#myModal2').modal('hide');
          this.loading = false;
       }
    },err=>{
      console.log('unable to fetch data')
    })
  }

}
