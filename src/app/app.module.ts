import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import {DropdownModule} from 'primeng/dropdown';
// import { TableModule } from 'primeng/table'; 
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginService } from './core/http/login.service';
import { TableModule } from 'primeng/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { MarkerService } from './core/http/marker.service';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
// import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    LoginComponent,
    CvPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    AppRoutingModule,
    HighchartsChartModule,
    TableModule,
    LeafletModule,
    // LeafletMarkerClusterModule,
    
  ],
  providers: [LoginService, MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
