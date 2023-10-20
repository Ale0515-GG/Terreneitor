import { Component } from '@angular/core';
import { Feature } from 'src/app/interfaces/lugares';
import { LugaresService } from 'src/app/services/lugares.service';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  public  selectedId:string ='';

constructor (private lugaresService:LugaresService,
  private mapaService:MapaService){}

get isLoadingPlaces():boolean{
  return this.lugaresService.isLoadingPlaces;
}

get places():Feature[]{
  return this.lugaresService.places;
}

flyto(place:Feature){
  this.selectedId= place.id;
  const [lng, lat] = place.center;
  this.mapaService.flyto([lng,lat])


}
getDirections(place: Feature) {
  if (!this.lugaresService.useLocation) {
    throw new Error('No hay useLocation disponible');
  }

  const start = this.lugaresService.useLocation;
  const end = place.center as [number, number];

  this.mapaService.getRouteBetweenPoints(start, end);
}

}
