import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http : Http) { }

   
  registerUser(name,email,uid){
     
    var data = {
    	name: name,
    	email : email,
    	uid:uid
    } 

  	return this.http.post('/user/addUser',data)
  } 


  getUserData(id){
  	// make a route
  	return this.http.get('/user/getUserData/'+id);
  }

}
