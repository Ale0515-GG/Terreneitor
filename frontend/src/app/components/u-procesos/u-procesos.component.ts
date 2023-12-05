import { Component, OnInit } from '@angular/core';
import { ReciboService } from 'src/app/services/recibo/resibo.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-u-procesos',
  templateUrl: './u-procesos.component.html',
  styleUrls: ['./u-procesos.component.css']
})
export class UProcesosComponent implements OnInit {
  username: string = '';
  usuario: any;
  recibos: any[] = []; // Array para almacenar los recibos

  constructor(private reciboService: ReciboService, private ugloService: UserglobalService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.username = this.ugloService.getUserName();
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(id: string) {
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
        // Llamar a la función para cargar los recibos después de obtener el usuario
        this.loadRecibos();
      },
      (err) => console.log(err)
    );
  }

  // Función para cargar los recibos
  loadRecibos() {
    // Llamada al servicio para obtener los recibos
    this.reciboService.getRecibosPorUsuario(this.usuario.ID).subscribe(
      (res: any) => {
        this.recibos = res;
      },
      (err) => console.log(err)
    );
  }
}
