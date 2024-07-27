import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as Highcharts from 'highcharts'; 
import { Observable, map } from 'rxjs';
import { MarkerService } from '../core/http/marker.service';
import { HttpClient } from '@angular/common/http';
// import { MarkerService } from '../core/http/marker.service';
// **********

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {
  constructor(private http:HttpClient, private markerService: MarkerService) {
    this.user$= this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(
      map(data=>data.map(item =>new User(item)))
    )
   }
  
 

  map; 
  visibleFormation;
  visibleExperience;
  visibleCompetence;
  

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };


  ngOnInit(): void {
    // 
  }
  showDialogFormation(){
    this.visibleFormation = true;
  }

  showDialogExperience(){
    this.visibleExperience = true;
  }

  showDialogCompetence(){
    this.visibleCompetence = true;
  }
  user$ : Observable<any[]>
  

}
  class User {
    constructor(data:any) {
      // this.name = data.name
      // this.email = data.email
    }
  }
