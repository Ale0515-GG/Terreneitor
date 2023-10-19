import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZ2ciLCJhIjoiY2xueGU5cjAxMGMzNTJqcGU2ZWl4cHJ3aSJ9.aco018tTQskT63Crif1T5Q';

if(!navigator.geolocation){
  alert('El navegador no soporta la geolocalizacion')
  throw new Error('El navegador no soporta la geolocalizacion');
}

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
