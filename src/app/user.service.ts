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


     updateRegenerationDataById(data){
       console.log(data);
       
       return this.http.post('http://localhost:3000/battery/updateRegenerationDatabyId',data);
       
     }

     addDischargingDatabyId(data){

       console.log(data);

       return this.http.post('http://localhost:3000/battery/addDischargingDatabyId',data)
     }

     updateDischargingDatabyId(data){

       console.log(data);

       return this.http.post('http://localhost:3000/battery/updateDischargingDatabyId',data)
     }


     addChargingDatabyId(data){

        console.log(data);

       return this.http.post('http://localhost:3000/battery/addChargingDatabyId',data)

     }

     updateChargingDatabyId(data){

        console.log(data);

       return this.http.post('http://localhost:3000/battery/updateChargingDatabyId',data)

     }

     updateDispatchDatabyBatteryId(data){
       console.log(data);

       return this.http.post('http://localhost:3000/battery/updateDispatchDatabyBatteryId',data);
     }

     updateStatusbyBatteryId(data){

       console.log(data);

       return this.http.post('http://localhost:3000/battery/updateStatusbyBatteryId',data);

     }

     saveBulkBatteries(data){
         console.log(data);
         
         return this.http.post('http://localhost:3000/battery/saveBulkBatteries',data);
     }

     deleteBattery(id){

       var data = {
          id:id
        }

        return this.http.post('http://localhost:3000/battery/deleteBattery',data);
     }

}
