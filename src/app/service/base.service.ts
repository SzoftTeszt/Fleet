import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
url:string="https://todoapi20230326213833.azurewebsites.net/api/";  
feliratkozasok: any=[];
feliratkozasok2: any;

constructor(private http:HttpClient) { }

  getAdatok(mit:string):Observable<any>{
    if (!this.feliratkozasok[mit])
      this.feliratkozasok[mit]= new Subject();  
    this.http.get(this.url+mit).forEach(
      adat => this.feliratkozasok[mit].next(adat)
    );
      
    return this.feliratkozasok[mit];
  }

  create (sor:any, mit:string)
  {
    this.http.post(this.url+mit,sor)
    .forEach(()=> this.getAdatok(mit))
  }
  delete (sor:any, mit:string)
  {
    this.http.delete(this.url+mit+"/"+sor.id)
    .forEach(()=> this.getAdatok(mit))
  }
  update(sor:any, mit:string)
  {
    this.http.put(this.url+mit+"/"+sor.id,sor)
    .forEach(()=> this.getAdatok(mit))
  } 
}
