import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UInfoPerComponent } from './components/u-info-per/u-info-per.component';
import { UPagoscobrosComponent } from './components/u-pagoscobros/u-pagoscobros.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'login',component: LoginComponent},

  {path: 'signIn',component:SignInComponent},

  {path: 'dashboard',component:DashboardComponent},
  {path: 'usuario',component:UsuarioComponent},
  {path: 'pagos',component:UPagoscobrosComponent},
  {path: 'usuario_informacionPersonal',component:UInfoPerComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
