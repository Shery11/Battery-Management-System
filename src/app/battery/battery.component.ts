import { Component, OnInit } from '@angular/core';
import { Router, Params ,ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';

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
  
  ngOnInit() {


  }

}
