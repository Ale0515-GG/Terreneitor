import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/interfaces/unidad';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router,ActivatedRoute } from '@angular/router';
import { UserglobalService } from 'src/app/services/userglobal.service';

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

 ID: number = 0;

  constructor(private unidadservice: UnidadService, private router: Router,  private route: ActivatedRoute,private usergo: UserglobalService) {}

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

  
  setUnidad(){
    this.usergo.setUnidad(this.ID);
    console.log('Id Unidad:', this.ID);
  }
}
