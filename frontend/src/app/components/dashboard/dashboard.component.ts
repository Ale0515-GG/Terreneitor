import { LugaresService } from 'src/app/services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/interfaces/unidad';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserglobalService } from 'src/app/services/userglobal.service';

import { IdStorageService } from 'src/app/services/id-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  unidades: any=[] ;
  localizacionListo: boolean = false;
  selectedUnidad: Unidad | null = null;
  username: string = '';
  password: string = '';
  loading: boolean = false;

 value: string = '';

 constructor(private ubicacionService:LugaresService,private unidadservice: UnidadService, private router: Router, private route: ActivatedRoute, private usergo: UserglobalService, private idStorageService: IdStorageService) {}

  ngOnInit(): void {
    this.getUnidades();
  }

  getUnidades() {
    this.unidadservice.getUnidades().subscribe(
      res => {
        this.unidades = res;
      },
      err => console.log(err)
    );
  }



  
  guardarIDEnVariableGlobal(id: string) {
    this.idStorageService.setID(id);
    console.log('Nombre de usuario:', id);
        this.router.navigate(['/info-unidad']);
  }

  get isUserLocationReady(){
    return this.ubicacionService.isUserLocationReady;
  }





}
