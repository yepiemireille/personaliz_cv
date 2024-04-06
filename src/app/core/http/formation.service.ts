import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { } 

  api_url ="assets/data/formation-list.json"

  getFormation():Observable<any>{
    return this.http.get<any>(this.api_url);
  }


  formatDateDDMMYYYY(date:string){

    if (date!=undefined && date.length==8) {
      let years = date.slice(0, 4) ;
      let month = date.slice(4,6) ;
      let days = date.slice(-2) ;
      return days+"/"+month+"/"+years;
    }else{
      return "";
    }
  }
  
  dashDate(date: Date) {
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if ( date.getMonth() + 1 < 10) {
      month = '0' + month;
    }
    if ( date.getDate() < 10) {
      day = '0' + day;
    }
    // console.log(day + '/' + month + '/' + year);
    return  year+''+month+''+day;
  }

}
