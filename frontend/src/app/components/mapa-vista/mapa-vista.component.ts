import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.css']
})
export class MapaVistaComponent implements OnInit{
  constructor(private lugarSvc:LugaresService){}

  ngOnInit(): void {
    console.log(this.lugarSvc.localizacion)
  }

}
