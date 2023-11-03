import { Component } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent{
  constructor(private lugarSvc:LugaresService,mapaSvc:MapaService){}

  goToMyLocation(){
    if(!this.lugarSvc.isLoadingPlaces) throw Error('No hay ubicacion del mapa ')
  }
}

