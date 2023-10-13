import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//Modulos
import {HttpClientModule} from '@angular/common/http';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NarvarComponent } from './components/narvar/narvar.component';

import { UInfoPerComponent } from './components/u-info-per/u-info-per.component';
import { UPagoscobrosComponent } from './components/u-pagoscobros/u-pagoscobros.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { AgregarUnidadComponent } from './components/agregar-unidad/agregar-unidad.component';
import { EditarUnidadComponent } from './components/editar-unidad/editar-unidad.component';
import { AdministarUnidadComponent } from './components/administar-unidad/administar-unidad.component';
import { NoficacionesComponent } from './components/noficaciones/noficaciones.component';
import { UProcesosComponent } from './components/u-procesos/u-procesos.component';
import { UDocumentosComponent } from './components/u-documentos/u-documentos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { CargandoMapaComponent } from './components/cargando-mapa/cargando-mapa.component';
import { MapaVistaComponent } from './components/mapa-vista/mapa-vista.component';
import { BtnLocalizacionComponent } from './components/btn-localizacion/btn-localizacion.component';

import { UserglobalService } from './services/userglobal.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    UsuarioComponent,
    NarvarComponent,
 
    UInfoPerComponent,
       UPagoscobrosComponent,
       UnidadComponent,
       AgregarUnidadComponent,
       EditarUnidadComponent,
       AdministarUnidadComponent,
       NoficacionesComponent,
       UProcesosComponent,
       UDocumentosComponent,
       MensajesComponent,
       CargandoMapaComponent,
       MapaVistaComponent,
       BtnLocalizacionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass:'toast-bottom-right',
      preventDuplicates:true,
    }),
  ],
  providers: [UserglobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
