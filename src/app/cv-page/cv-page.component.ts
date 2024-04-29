import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as Highcharts from 'highcharts'; 
// import { MarkerService } from '../core/http/marker.service';
// **********

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {
  // constructor(private markerService: MarkerService) { }
 

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
  

}

