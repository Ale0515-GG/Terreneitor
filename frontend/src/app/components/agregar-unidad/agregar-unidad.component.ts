import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router } from '@angular/router';
import { Unidad } from 'src/app/interfaces/unidad';

@Component({
  selector: 'app-agregar-unidad',
  templateUrl: './agregar-unidad.component.html',
  styleUrls: ['./agregar-unidad.component.css']
})
export class AgregarUnidadComponent implements OnInit {
  unida: Unidad = {
    NombrePropiedad: '',
    Descripcion: '',
    TipoPropiedad: '',
    PrecioPorNoche: 0,
    DireccionID: '',
   
  };

  constructor(private unidadService: UnidadService, private router: Router) {}

  ngOnInit(): void {}

  saveNewUnidad() {
    this.unidadService.saveUnidad(this.unida).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/administar-unidad']);
      },
      (err) => console.error(err)
    );
  }
}
