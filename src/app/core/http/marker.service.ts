import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  
  // capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) { }

  // gestion la logique de chargement et d'ajout de marqueurs à la carte.
  // makeCapitalMarkers(map: L.Map) {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lon = c.geometry.coordinates[0];
  //       const lat = c.geometry.coordinates[1];
  //       const marker = L.marker([lat, lon]);
        
  //       marker.addTo(map);
  //     }
  //   });
  // }

  // makeCapitalCircleMarkers(map: L.Map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     for (const c of res.features) {
  //       const lon = c.geometry.coordinates[0];
  //       const lat = c.geometry.coordinates[1];
  //       const circle = L.circleMarker([lat, lon]);
        
  //       circle.addTo(map);
  //     }
  //   });
  // }
  

}
