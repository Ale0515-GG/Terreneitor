

  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { enableProdMode } from '@angular/core';

  import { AppModule } from './app/app.module';

// or "const mapboxgl = require('mapbox-gl');"
 
  Mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZ2ciLCJhIjoiY2xueGU5cjAxMGMzNTJqcGU2ZWl4cHJ3aSJ9.aco018tTQskT63Crif1T5Q';
  import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from './environments/environment';


  if (!navigator.geolocation){
    alert('Navegador no soporta la Geolocalizacion');
    throw new Error('Navegador no soporta la Geolocalizacion');
  }

if (environment.production){
  enableProdMode();
}


  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
