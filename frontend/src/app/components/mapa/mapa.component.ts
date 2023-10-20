import { LugaresService } from 'src/app/services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/interfaces/unidad';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  constructor(private ubicacionService:LugaresService){}
  get isUserLocationReady(){
    return this.ubicacionService.isUserLocationReady;
  }
}
