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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MapaComponent } from './components/mapa/mapa.component';
import { ResultsComponent } from './components/results/results.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { VerUnidadesComponent } from './components/ver-unidades/ver-unidades.component';
import { VerUbiComponent } from './components/ver-ubi/ver-ubi.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';

//youtybe 
import { YoutubePipe } from './pipe/youtube.pipe';
import { ConsejosComponent } from './components/consejos/consejos.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

//login Red sosical 
import {
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';




///red


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
       MapaComponent,
       ResultsComponent,
       BuscarComponent,
       VerUnidadesComponent,
       VerUbiComponent,
       FooterComponent,

       BtnMyLocationComponent,

      
       YoutubePipe,
       ConsejosComponent,

   
  ],
  imports: [
    //login redsocial
    SocialLoginModule,
    ReactiveFormsModule,
    //
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass:'toast-bottom-right',
      preventDuplicates:true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    UserglobalService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('644370744353231'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  
  bootstrap: [AppComponent],

})

export class AppModule { }
