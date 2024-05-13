
import { AfterViewInit, Component, OnInit } from '@angular/core';


import * as L from 'leaflet';
import 'leaflet.heat'; 


@Component({
  selector: 'app-test-angular',
  templateUrl: './test-angular.component.html',
  styleUrls: ['./test-angular.component.scss']
})
export class TestAngularComponent implements OnInit, AfterViewInit {

  private map;
  private heatLayer: any;

  ngOnInit(): void {
    this.initMap();
    this.addHeatmapLayer();
  }

  ngAfterViewInit(): void {
    this.map.invalidateSize();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private addHeatmapLayer(): void {
    const heatmapData = [
      [51.5, -0.09, 10],
      [51.51, -0.1, 10],
      [51.49, -0.1, 50],
      [51.48, -0.08, 30],
      [51.52, -0.07, 10]
    ];
  
    this.heatLayer = (L as any).heatLayer(heatmapData, {
      radius: 20,
      blur: 15,
      maxZoom: 17,
      gradient: { 0.4: 'yellow', 0.65: 'red', 1: 'yellow' } 
    }).addTo(this.map);
    
    this.heatLayer._latlngs[3].forEach((latlng) => {
      latlng.radius = 70; // Ajustez le rayon pour que cette zone de chaleur soit plus grande
    });
  }
}
