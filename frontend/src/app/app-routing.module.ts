import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UInfoPerComponent } from './components/u-info-per/u-info-per.component';
import { UPagoscobrosComponent } from './components/u-pagoscobros/u-pagoscobros.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { AgregarUnidadComponent } from './components/agregar-unidad/agregar-unidad.component';
import { AdministarUnidadComponent } from './components/administar-unidad/administar-unidad.component';
import { EditarUnidadComponent } from './components/editar-unidad/editar-unidad.component';
import { NoficacionesComponent } from './components/noficaciones/noficaciones.component';
import { UProcesosComponent } from './components/u-procesos/u-procesos.component';
import { UDocumentosComponent } from './components/u-documentos/u-documentos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { VerUbiComponent } from './components/ver-ubi/ver-ubi.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsejosComponent } from './components/consejos/consejos.component';




const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'login',component: LoginComponent},

  {path: 'signIn',component:SignInComponent},

  {path: 'dashboard',component:DashboardComponent},
  {path: 'usuario',component:UsuarioComponent},
  {path: 'pagos',component:UPagoscobrosComponent},
  {path: 'info-unidad',component:UnidadComponent},
  { path: 'info-unidad/:id', component: UnidadComponent },
  {path: 'ubicacion',component:VerUbiComponent},
  {path: 'agregar-unidad',component:AgregarUnidadComponent},
  {path: 'consejos',component:ConsejosComponent},





  {path: 'administar-unidad',component:AdministarUnidadComponent},
  {path: 'notificaiones',component:NoficacionesComponent},
  {path: 'editar-unidad',component:EditarUnidadComponent},
  {path: 'procesos',component:UProcesosComponent},
  {path: 'mensajes',component:MensajesComponent},
  {path: 'documentos',component:UDocumentosComponent},
  {path: 'usuario_informacionPersonal',component:UInfoPerComponent},
  {path: 'mapa',component:MapaComponent},

  {path:'**',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
