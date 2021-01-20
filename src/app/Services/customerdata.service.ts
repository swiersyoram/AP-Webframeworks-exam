import { Injectable } from '@angular/core';
import{IRegister} from './interfaces'
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CustomerdataService implements IRegister {

  constructor(private http: HttpClient) { }
  _id: string;
  Name: string;
  MemberId: string;
  PoolName: string;
  Timeslot: string;
postresponse;
  getzwembad(){
    return this.http.get(`http://localhost:3000/zwembaden`).toPromise();
  }
  geturen(){
    return this.http.get(`http://localhost:3000/uren`).toPromise();
  }
  pooldata ={
    _id:null,
    Name: null,
  MemberId: null,
  PoolName: null,
  Timeslot: null,

  }
   async postData(){
    this.postresponse= await this.http.post(`http://localhost:4000/zwembadpost`,this.pooldata).toPromise();
     console.log(this.postresponse)
  }
 
  poolselected:boolean=false;
  poolid;
}
