import { Component } from '@angular/core';
import { LugaresService } from './services/lugares.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private lugarSvc:LugaresService){}

  get localizacionListo(){
    console.log(this.lugarSvc.localizacion);
    return this.lugarSvc.localizacionListo;
  }
}
