

  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { enableProdMode } from '@angular/core';

  import { AppModule } from './app/app.module';


  import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZ2ciLCJhIjoiY2xueGU5cjAxMGMzNTJqcGU2ZWl4cHJ3aSJ9.aco018tTQskT63Crif1T5Q';

  if(!navigator.geolocation){
    alert('Navegador no soporta la Geolocation');
    throw new Error('Navegador no soporta la Geolocation')
  }




  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
