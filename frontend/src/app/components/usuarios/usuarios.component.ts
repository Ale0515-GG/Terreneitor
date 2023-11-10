import { Component, HostBinding, OnInit } from '@angular/core';
import { UserglobalService } from 'src/app/services/userglobal.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  username: string = '';

  constructor(

    private ugloService: UserglobalService,

  ) {  }

  ngOnInit() {
    // Obtiene el nombre de usuario desde la variable global y asigna el valor a this.username
    this.username = this.ugloService.getUserName();
    
  }
}
