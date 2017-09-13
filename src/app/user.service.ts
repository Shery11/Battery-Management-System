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

    addNewOrder(data){
      console.log(data);
      
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


     getBatteriesByBatteryModelId(id){
       var data = {
         id:id
       }
       return this.http.post('http://localhost:3000/battery/getBattieriesByBatteryModelId',data)
     }

     addNewBattery(data){
       return this.http.post('http://localhost:3000/battery/addBattery',data); 
     }


     getBatteryById(id){
       var data = {
         id:id
       }
       return this.http.post('http://localhost:3000/battery/getBattery',data);
     }

     addRegenerationDatabyId(data){

       console.log(data);

       return this.http.post('http://localhost:3000/battery/addRegenerationDatabyId',data)
     }

     addDischargingDatabyId(data){

       console.log(data);

       return this.http.post('http://localhost:3000/battery/addDischargingDatabyId',data)
     }


     addChargingDatabyId(data){

        console.log(data);

       return this.http.post('http://localhost:3000/battery/addChargingDatabyId',data)

     }

}
