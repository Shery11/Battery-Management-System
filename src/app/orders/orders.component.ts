import { Component, OnInit } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

   orders;
   id; 
      
  constructor(private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit() {
     
    this.id = this.route.snapshot.params['id'] 
  	
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

    value.clientId = this.id;
    console.log(value);

    this.userService.addNewOrder(value).map(res => res.json()).subscribe(data=>{
      console.log(data);
       if(data.success){
           window.location.reload();
       }else{
          console.log("unable to add data");
       }
    },err=>{
      console.log('unable to fetch data')
    })
  }

}
