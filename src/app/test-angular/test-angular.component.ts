
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
    const heatmapData = [];
    for (let i = 0; i < 100; i++) {
      const lat = 51.5 + Math.random() * 0.1 - 0.05;
      const lng = -0.09 + Math.random() * 0.1 - 0.05;
      const intensity = Math.floor(Math.random() * 100);
      heatmapData.push([lat, lng, intensity]);
    }

    this.heatLayer = (L as any).heatLayer(heatmapData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } 
    }).addTo(this.map);
  }


}
