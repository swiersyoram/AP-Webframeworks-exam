import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from '../Services/customerdata.service';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export  class Step2Component implements OnInit {
  zwembaddata;
  uren;
  urenselected;
  open: boolean = false;
 
 constructor(public service : CustomerdataService) { 
  this.getdata();
 
  }
async getdata(){
 this.zwembaddata=await this.service.getzwembad();
 this.uren = await this.service.geturen();
 
 if(this.service.Timeslot != null){
  this.urenselected = this.uren.filter((element)=>element.zwembadId == this.service.poolid)[0].uren
 }

 //console.log(this.zwembaddata)
}
ngOnInit(): void {
}
  greeting(){
    if(this.service.PoolName!=null){
      return this.service.PoolName
    }
    else return "Kies een zwembad"
  }
  selectpool(selectedpool){
    //this.service.PoolName = poolname;
    this.service.poolid=selectedpool;
    console.log(selectedpool,this.zwembaddata.filter((e)=>e.id == this.service.poolid)[0].name)
    this.service.PoolName = this.zwembaddata.filter((e)=>e.id == this.service.poolid)[0].name;
    this.service.poolselected =true
    //console.log(this.uren.filter((element)=>element.zwembadId == selectedpool))
    this.urenselected = this.uren.filter((element)=>element.zwembadId == this.service.poolid)[0].uren
  }
  selecthour(uur){
    console.log(uur)
    this.service.Timeslot = uur;
  }
}
