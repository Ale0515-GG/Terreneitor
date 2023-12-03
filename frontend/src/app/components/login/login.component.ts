import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';

import { UserglobalService } from 'src/app/services/userglobal.service';
import { usersRed } from '../../interfaces/usersRed';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;
 

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
    private usergo: UserglobalService,
    private userService: UserService,
    private authService: SocialAuthService,
    private UsuarioService:UsuarioService
   
    ) { }

  ngOnInit(): void {
  }

  login() {
    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      password: this.password,
    }

    this.loading = true;
    
    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        
        // Establece el nombre de usuario en el servicio
        this.usergo.setUserName(this.username);
        console.log('Nombre de usuario:', this.username);
        this.router.navigate(['/dashboard']);
      },
      // ...
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
  
        const user: Usuario = {
          
          username: data.name,
          password: data.id,
          Nombre: data.name,
          Apellido: data.lastName,
          CorreoElectronico: data.email
        };
  
        this.loading = true;


        
  
        this._userService.signIn(user).subscribe({
          next: (v) => {
            this.loading = false;
            this.usergo.setUserName(this.username);
            console.log('Nombre de usuario:', this.username);

            this.router.navigate(['/dashboard']);
          },
          error: (e: HttpErrorResponse) => {
            this.loading = false;
            this._errorService.msjError(e);
          }
        });
      }  // <-- Missing closing parenthesis here
    );
  }

  signOut(): void {
    this.authService.signOut();
  }


 

}    