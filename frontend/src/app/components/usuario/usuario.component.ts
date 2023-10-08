import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuario: any; // No necesitas un arreglo aquí

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsuarios(); // Cambio en el nombre de la función
  }

  getUsuarios() { // Cambio en el nombre de la función
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
      },
      err => console.log(err)
    );
  }
}
