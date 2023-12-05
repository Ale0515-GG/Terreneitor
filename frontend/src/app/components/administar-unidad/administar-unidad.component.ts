import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-administar-unidad',
  templateUrl: './administar-unidad.component.html',
  styleUrls: ['./administar-unidad.component.css']
})
export class AdministarUnidadComponent implements OnInit {
  username: string = '';
  usuario: any;
  unidades: any[] = [];

  constructor(private unidadService: UnidadService, private ugloService: UserglobalService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.username = this.ugloService.getUserName();
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(id: string) {
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
        this.loadUnidades();
      },
      (err) => console.log(err)
    );
  }

  loadUnidades() {
    this.unidadService.getUnidadesPorUsuario(this.usuario.ID).subscribe(
      (res: any) => {
        this.unidades = res;
      },
      (err) => console.log(err)
    );
  }

  eliminarUnidad(id: string) {
    if (confirm('¿Estás seguro de eliminar esta unidad?')) {
      this.unidadService.deleteUnidad(id).subscribe(
        (res) => {
          // Actualizar la lista de unidades después de la eliminación
          this.loadUnidades();
        },
        (err) => console.log(err)
      );
    }
  }
}
