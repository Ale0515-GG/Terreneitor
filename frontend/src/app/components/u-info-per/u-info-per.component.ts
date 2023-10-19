import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';

@Component({
  selector: 'app-u-info-per',
  templateUrl: './u-info-per.component.html',
  styleUrls: ['./u-info-per.component.css']
})
export class UInfoPerComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuario: any;
  username: string = '';
  id: number = 0;
  images: string[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private userService: UserService,
    private ugloService: UserglobalService,
    private storage: Storage
  ) { this.images = []; }

  ngOnInit() {
    // Obtiene el nombre de usuario desde la variable global y asigna el valor a this.username
    this.username = this.ugloService.getUserName();

    // Llama a la función para obtener la información del usuario
    this.getUsuarioByUsername(this.username);
  }

  getUsuarioByUsername(id: string) {
    // Realiza la solicitud al servidor para obtener la información del usuario
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
        // Una vez que se ha cargado la información del usuario, puedes llamar a getImages
        this.getImages();
      },
      (err) => console.log(err)
    );
  }

  uploadImage($event: any) {
    // Verifica si se ha seleccionado un archivo
    if ($event.target.files.length === 0) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    const file = $event.target.files[0];
    console.log(file);

    // Verifica si this.usuario tiene un valor antes de acceder a this.usuario.ID
    if (this.usuario && this.usuario.ID) {
      const usuarioID = this.usuario.ID;
      const storage = this.storage; // Almacena una referencia al servicio de almacenamiento

      // Elimina la imagen anterior
      listAll(ref(storage, `imagenes/${usuarioID}`))
        .then(async response => {
          for (let item of response.items) {
            await deleteObject(item);
          }

          // Sube la nueva imagen después de eliminar la anterior
          const imgRef = ref(storage, `imagenes/${usuarioID}/${file.name}`);
          uploadBytes(imgRef, file)
            .then(response => {
              console.log('Nueva imagen subida:', response);
              // Llama a getImages para actualizar la lista de imágenes
              this.getImages();
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    } else {
      console.error('El objeto de usuario o su ID son undefined.');
    }
  }

  getImages() {
    if (this.usuario && this.usuario.ID) {
      const usuarioID = this.usuario.ID;
      const imagesRef = ref(this.storage, `imagenes/${usuarioID}`);

      listAll(imagesRef)
        .then(async response => {
          console.log(response);
          this.images = [];

          for (let item of response.items) {
            const url = await getDownloadURL(item);
            this.images.push(url);
            console.log(url);
          }
        })
        .catch((error: any) => console.log(error));
    } else {
      console.error('El objeto de usuario o su ID son undefined.');
    }
  }
}
