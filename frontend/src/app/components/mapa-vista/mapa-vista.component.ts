import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map} from 'mapbox-gl';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.css']
})
export class MapaVistaComponent implements AfterViewInit{
  constructor(private lugarSvc:LugaresService){}

@ViewChild('mapaListo')
mapDivElement!:ElementRef

  ngAfterViewInit(): void {
    if(!this.lugarSvc.localizacion)throw Error('No hay lugarSvc.localizacion')
    
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lugarSvc.localizacion,
      zoom: 14, // starting zoom
      });

  }

}
