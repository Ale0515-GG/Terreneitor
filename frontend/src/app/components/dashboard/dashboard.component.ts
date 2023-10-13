import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/interfaces/unidad';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  unidades: any=[] ;
  localizacionListo: boolean = false; 
  constructor(private unidadservice: UnidadService, private router: Router) {}

  ngOnInit(): void {
    this.getUnidades();
  }

  getUnidades() {
    this.unidadservice.getUnidades().subscribe(
      res => {
        this.unidades = res;
      },
      err => console.log(err)
    );
  }
}
