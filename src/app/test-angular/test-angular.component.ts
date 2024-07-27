

import { AfterViewInit, Component, OnInit } from '@angular/core'; 
import { Observable, from, fromEvent, interval, map, of, timer } from 'rxjs';

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
    this.addLegend();

    this.testRxjs()
  }

  ngAfterViewInit(): void {
    this.map.invalidateSize(); // biliothèque de leaflet pour ajuster la taille de la carte
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
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } 
    }).addTo(this.map);
  }

  private addLegend(): void {
    const legend = (L as any).control({ position: 'bottomright' });

    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', 'legend');
      const grades = [0.4, 0.65, 1];
      const labels = ['<strong>Intensity</strong>'];
      const colors = ['blue', 'lime', 'red'];

      for (let i = 0; i < grades.length; i++) {
        labels.push(
          '<i style="background:' + colors[i] + '"></i> ' +
          (grades[i] * 100) + (grades[i + 1] ? '&ndash;' + (grades[i + 1] * 100) : '+')
        );
      }

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(this.map);
  }







  testRxjs(){
    const element = document.getElementById('my-element');
    const observable = fromEvent(element, 'click');

    observable.subscribe(() => {
      console.log('The element was clicked!');
    });
  }
  




}

