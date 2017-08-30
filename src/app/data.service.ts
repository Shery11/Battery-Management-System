import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }


  cars = [
     'ford','Audi','bentely','Lamborgnini'
  ]

  myData(){
  	return "This is my data from service";
  }

}
