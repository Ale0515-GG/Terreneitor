import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { ToastrService } from 'ngx-toastr'; // Agrega la importación de ToastrService si estás utilizando Toastr para notificaciones

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
    private router: Router,
    private userService: UserService,
    private ugloService: UserglobalService,
    private toastrService: ToastrService // Agrega el servicio ToastrService al constructor
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

  updateUsuario(id: string) {
    this.usuarioService.updateUsuario(id, this.usuario).subscribe(
      res => {
        console.log(res);
        // Limpiamos la variable de edición

        this.toastrService.success('Actualización Completa', 'Aviso');
      },
      err => this.toastrService.error('No se pudo actualizar', 'Error')
    );
  }
}
