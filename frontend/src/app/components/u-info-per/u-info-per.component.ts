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

  // Variables para las actualizaciones
  nuevoNombre: string = '';
  nuevoApellido: string = '';
  nuevoCorreo: string = '';
  nuevoTelefono: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private userService: UserService,
    private ugloService: UserglobalService
  ) {}

  ngOnInit() {
    // Obtiene el nombre de usuario desde la variable global y asigna el valor a this.username
    this.username = this.ugloService.getUserName();
    console.log('Nombre de usuario:', this.username);

    // Llama a la función para obtener la información del usuario
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(id: string) {
    // Realiza la solicitud al servidor para obtener la información del usuario
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
      },
      (err) => console.log(err)
    );
  }

  actualizarNombre() {
    this.usuarioService.updateNombre(this.username, this.nuevoNombre).subscribe(
      (res) => {
        // Manejar la respuesta exitosa si es necesario
      },
      (err) => console.log(err)
    );
  }

  actualizarApellido() {
    this.usuarioService.updateApellido(this.username, this.nuevoApellido).subscribe(
      (res) => {
        // Manejar la respuesta exitosa si es necesario
      },
      (err) => console.log(err)
    );
  }

  actualizarCorreo() {
    this.usuarioService.updateCorreoElectronico(this.username, this.nuevoCorreo).subscribe(
      (res) => {
        // Manejar la respuesta exitosa si es necesario
      },
      (err) => console.log(err)
    );
  }

  actualizarTelefono() {
    this.usuarioService.updateNumeroTelefono(this.username, this.nuevoTelefono).subscribe(
      (res) => {
        // Manejar la respuesta exitosa si es necesario
      },
      (err) => console.log(err)
    );
  }
}
