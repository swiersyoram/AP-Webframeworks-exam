import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../Services/customerdata.service';
import { RouteReuseStrategy } from '@angular/router'

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(public service : CustomerdataService) { 

  }

  ngOnInit(): void {
  }
  submit(){
   this.service.pooldata.Name = this.service.Name;
   this.service.pooldata.MemberId = this.service.MemberId;
   this.service.pooldata.PoolName = this.service.PoolName;
   this.service.pooldata.Timeslot = this.service.Timeslot;
   console.log(this.service.pooldata)
   this.service.postData();
  }

  empty(){

  }
}
