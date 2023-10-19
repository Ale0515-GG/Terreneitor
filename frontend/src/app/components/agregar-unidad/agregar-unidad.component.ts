import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { Router } from '@angular/router';
import { Unidad } from 'src/app/interfaces/unidad';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';

@Component({
  selector: 'app-agregar-unidad',
  templateUrl: './agregar-unidad.component.html',
  styleUrls: ['./agregar-unidad.component.css']
})
export class AgregarUnidadComponent implements OnInit {
  unida: Unidad = {
    NombrePropiedad: '',
    Descripcion: '',
    TipoPropiedad: '',
    PrecioPorNoche: 0,
    DireccionID: '',
   
  };
images:string[];
  
  constructor(private unidadService: UnidadService, private router: Router, private storage:Storage) {this.images=[];}

  ngOnInit(){
    this.getImages
  }

  saveNewUnidad() {
    this.unidadService.saveUnidad(this.unida).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/administar-unidad']);
      },
      (err) => console.error(err)
    );
  }

  uploadImages($event:any){
    const file= $event.target.files[0];
    console.log(file)
    const imageRef= ref(this.storage,`images/${file.name}`);

    uploadBytes(imageRef,file)
    .then(response=> console.log(response))
    .catch(error=> console.log(error))
  }

  getImages(){
    const imagesRef= ref(this.storage,`imagenes`)
    listAll(imagesRef)
    .then(async response=>{
      console.log(response)
      this.images=[];
      for(let item of response.items){
       const url= await getDownloadURL(item);
       this.images.push(url)
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
