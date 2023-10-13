import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-cargando-mapa',
  templateUrl: './cargando-mapa.component.html',
  styleUrls: ['./cargando-mapa.component.css']
})

export class CargandoMapaComponent implements OnInit{
  constructor(private lugarSvc:LugaresService){}

  ngOnInit(): void {
    
  }
}
