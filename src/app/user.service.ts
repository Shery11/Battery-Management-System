import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

   getAllClients(){
     return this.http.get("http://localhost:3000/client/getAllClients");
   }
   
   addNewClient(data){
      return this.http.post("http://localhost:3000/client/addClient",data);
    }

    getOrdersByClientId(id){
       var data = {
         id :id
       }
      return this.http.post("http://localhost:3000/order/getOrdersbyClientId",data);
    }

    addNewOrder(id){
      var data = {
        id :id
      }
      return this.http.post('http://localhost:3000/order/addOrder',data);
    }

    getBatteryModelsByOrderId(id){
       var data = {
         id :id
       }

       return this.http.post('http://localhost:3000/batteryModel/getBatteryModelsbyOrderId',data)
     }

     addNewBatteryModel(data){

       return this.http.post('http://localhost:3000/batteryModel/addBatteryModel',data)

     }

}
