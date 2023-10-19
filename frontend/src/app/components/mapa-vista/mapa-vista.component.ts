import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Popup} from 'mapbox-gl';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.css']
})
export class MapaVistaComponent implements AfterViewInit{

@ViewChild('mapDiv') mapDivElement!:ElementRef

constructor(private lugarSvc:LugaresService){}

  ngAfterViewInit(): void {
    if(!this.lugarSvc.localizacion)throw Error('No hay Localizacion')
    
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lugarSvc.localizacion,
      zoom: 14, // starting zoom
      });


      const popup = new Popup().setHTML(`
      <h6></h6>
      
      `);

  }

}
