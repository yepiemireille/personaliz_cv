import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  
  // capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) { }

  api_heatmap_url ="/assets/data/heatmap.json"

  getDataHeatMap(): Observable<any> {
    return this.http.get<any>(this.api_heatmap_url);
  }


  
  

}
