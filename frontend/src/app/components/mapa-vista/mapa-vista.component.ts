import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Marker, Popup} from 'mapbox-gl';
import { LugaresService } from 'src/app/services/lugares.service';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.css']
})
export class MapaVistaComponent implements AfterViewInit{

@ViewChild('mapDiv') mapDivElement!:ElementRef

constructor(private lugarSvc:LugaresService,private mapService:MapaService){}

  ngAfterViewInit(): void {
    if(!this.lugarSvc.localizacion)throw Error('No hay Localizacion')
    
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lugarSvc.localizacion,
      zoom: 14, // starting zoom
      });

      const popup=new Popup().setHTML(`
        <h6>Estoy aqui<h6>
        <span>En este lugar</span>
      `);

      new Marker({color:'red'})
      .setLngLat(this.lugarSvc.localizacion)
      .setPopup(popup)
      .addTo(map);


      this.mapService.setMap(map);
  }

}
