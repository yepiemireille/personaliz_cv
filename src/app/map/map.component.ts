import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{

  private map;
  constructor(){}
  
  ngOnInit(): void {
    // 
  }

  

  ngAfterViewInit(): void {
    this.initMap()
  }

  initMap(){
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const markers = L.markerClusterGroup({
      iconCreateFunction: function(cluster){
        return L.divIcon({
          html: '<div style="background-color:red; border-radius:50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; color:white; font-weight: bold;">' + cluster.getChildCount() + '</div>',
          className: 'custom-cluster-icon' 
        });
      }
    });

    const addMarker = (lat, lng) => {
      const marker = L.marker([lat, lng]);
      marker.on('click', (event)=>{
        console.log('', event.target.getLatLng());
      });
      marker.bindPopup('Latitude: ' + lat + '<br>Longitude: ' + lng);
      markers.addLayer(marker);
    };

    // Exemple d'ajout de plusieurs marqueurs
    addMarker(51.5, -0.09);
    addMarker(51.505, -0.085);
    // ******************************************************************************



    this.map.addLayer(tiles);
    this.map.addLayer(markers);
    this.map.setView([51.505, -0.09], 13);

    
  } 


  // ****************************************** HeatMap ***************************
  
  
  

}
