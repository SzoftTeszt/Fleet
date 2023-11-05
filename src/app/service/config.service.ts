import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

oszlopok={
  vehicles:[
    {key:"id", text:"#", type:"plain"},
    {key:"lp", text:"Rendszám", type:"text"},
    {key:"year", text:"Év", type:"text"},
    {key:"manufactured", text:"Gyártó", type:"text"},
    {key:"consumption", text:"Fogyasztás", type:"text"},
    {key:"engine", text:"Motor", type:"text"}
  ],
  fuelings:[
    {key:"id", text:"#", type:"plain"},
    {key:"vehicleId", text:"Jármű", type:"select", options:[{}]},
    {key:"driverId", text:"Sofőr", type:"select", options:[{}]},
    {key:"amount", text:"Mennyiség", type:"number"},
    {key:"date", text:"Dátum", type:"date"}   
  ],
  drivers:[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"email", text:"Email", type:"email"},
    {key:"phone", text:"Telefon", type:"text"},
    {key:"city", text:"Város", type:"text"},  
    {key:"address", text:"Cím", type:"text"}   
  ]
}
  getOszlopok(mit:string):any{
    if (mit=="drivers") return this.oszlopok.drivers;
    if (mit=="vehicles") return this.oszlopok.vehicles;
    if (mit=="fuelings") return this.oszlopok.fuelings;
  }
  constructor(bs: BaseService) {
      bs.getAdatok("vehicles").subscribe(
        (list)=>{
          this.oszlopok.fuelings[1].options=[{}];
           for(let jarmu of list)
           {
            this.oszlopok.fuelings[1].options
            .push({value:jarmu.id, text:jarmu.lp});
           }
        }
      );

      bs.getAdatok("drivers").subscribe(
        (list)=>{
          this.oszlopok.fuelings[2].options=[{}];
           for(let sofor of list)
           {
            this.oszlopok.fuelings[2].options
            .push({value:sofor.id, text:sofor.name});
           }
        }
      );

   }
}
