import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { LugaresService } from 'src/app/services/lugares.service';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.css']
})
export class MapaVistaComponent implements AfterViewInit, OnInit{

  ngOnInit(): void {
    console.log(this.ubicacionService.useLocation);
  }

  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  selectedId: string | null = null;
  places: any;

  constructor(private ubicacionService: LugaresService, private mapaService: MapaService) {}

  ngAfterViewInit(): void {
    if (!this.ubicacionService.useLocation) {
      console.error('Ubicación no disponible');
      return;
    }

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: this.ubicacionService.useLocation,
      zoom: 12,
    });



    const popup = new Popup().setHTML(`
      <h6>Mi Ubicacion</h6>
      <span></span>
    `);

    new Marker({ color: 'red' })
      .setLngLat(this.ubicacionService.useLocation)
      .setPopup(popup)
      .addTo(map);


    this.mapaService.setMap(map);
  }

}
