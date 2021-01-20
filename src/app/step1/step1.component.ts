import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerdataService } from '../Services/customerdata.service';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
 
  constructor(public service : CustomerdataService) {
    
   }
   name;
  
  ngOnInit(): void {
  }
  updatename(){
    
  }
  input(e){
    this.service.Name=e;
  }
  changename(){
    this.name = "changed"
  }

}
