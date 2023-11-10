import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserglobalService } from 'src/app/services/userglobal.service';


@Component({
  selector: 'app-u-info-per',
  templateUrl: './u-info-per.component.html',
  styleUrls: ['./u-info-per.component.css']
})
export class UInfoPerComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuario: any;
  username: string = '';
 
  constructor(
    private usuarioService: UsuarioService,

    private ugloService: UserglobalService,

  ) {  }

  ngOnInit() {
    // Obtiene el nombre de usuario desde la variable global y asigna el valor a this.username
    this.username = this.ugloService.getUserName();

    // Llama a la función para obtener la información del usuario
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(id: string) {
    // Realiza la solicitud al servidor para obtener la información del usuario
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
        // Una vez que se ha cargado la información del usuario, puedes llamar a getImages

      },
      (err) => console.log(err)
    );
  }

  guardarCambios() {
    // Llama a tu servicio para actualizar los datos del usuario
    this.usuarioService.updateUsuario(this.usuario.ID, this.usuario)
      .subscribe(
        (res) => {
          console.log('Datos del usuario actualizados:', res);
        },
        (err) => {
          console.error('Error al actualizar los datos del usuario:', err);
        }
      );
  }
  
}
