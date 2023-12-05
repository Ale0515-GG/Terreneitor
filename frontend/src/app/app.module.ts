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


import { UserglobalService } from './services/userglobal.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { VerUnidadesComponent } from './components/ver-unidades/ver-unidades.component';

import { FooterComponent } from './components/footer/footer.component';


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

import { MapsModule } from './maps/maps.module';

import { UsuariosComponent } from './components/usuarios/usuarios.component';



import { MapViewComponent } from './components/mapita/maps/components/map-view/map-view.component';
import { LoadingComponent } from './components/mapita/maps/components/loading/loading.component';

///red


@NgModule({
  declarations: [
    MapViewComponent,
    LoadingComponent,
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

    VerUnidadesComponent,
    FooterComponent,
    YoutubePipe,
    ConsejosComponent,
    

      
       YoutubePipe,
       ConsejosComponent,
       UsuariosComponent,
  ],
  imports: [
    SocialLoginModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MapsModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
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
