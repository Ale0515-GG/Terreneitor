import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router } from '@angular/router';
import { Unidad } from 'src/app/interfaces/unidad';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

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
    IdUsuario: 0, // Este valor se llenará en ngOnInit
  };
  username: string = '';
  usuario: any; // Objeto para almacenar la información del usuario

  constructor(
    private unidadService: UnidadService,
    private router: Router,
    private ugloService: UserglobalService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // Obtener el nombre de usuario del servicio UserglobalService
    this.username = this.ugloService.getUserName();

    // Obtener información del usuario usando el nombre de usuario
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(username: string) {
    this.usuarioService.getUsuario(username).subscribe(
      (res) => {
        console.log(res);
        this.usuario = res;
  
        // Asignar el ID del usuario al campo IdUsuario de la unidad
        this.unida.IdUsuario = this.usuario.ID;
      },
      (err) => console.log(err)
    );
  }
  
  

  saveNewUnidad() {
    // Llamar al servicio UnidadService para guardar la nueva unidad
    this.unidadService.saveUnidad(this.unida).subscribe(
      (res) => {
        console.log(res);
        // Redirigir a la página de dashboard después de guardar la unidad
        this.router.navigate(['/dashboard']);
      },
      (err) => console.error(err)
    );
  }
}
