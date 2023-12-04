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
    IdUsuario: 0,  // Asegúrate de asignar el IdUsuario correcto
  };
  username: string = '';
  usuario: any;

  constructor(private unidadService: UnidadService, private router: Router, private ugloService: UserglobalService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.username = this.ugloService.getUserName();
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(username: string) {
    this.usuarioService.getUsuario(username).subscribe(
      (res) => {
        this.usuario = res;
        this.unida.IdUsuario = this.usuario.id;  // Asegúrate de obtener el Id correcto del usuario
      },
      (err) => console.log(err)
    );
  }

  saveNewUnidad() {
    this.unidadService.saveUnidad(this.unida).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      (err) => console.error(err)
    );
  }
}
