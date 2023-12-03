import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { IdStorageService } from 'src/app/services/id-storage.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
declare var paypal: any;

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  unidad: any; 
  username: string = '';
  usuario: any;

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  

// esta parte 


  title='angular-paypal-payment';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadService: UnidadService,
    private idStorageService: IdStorageService,
    private ugloService: UserglobalService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la unidad de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Llamar al servicio para obtener los detalles de la unidad
        this.unidadService.getUnidad(id).subscribe(
          res => {
            this.unidad = res; // Almacena la información de la unidad
          },
          err => {
            console.log(err);
            // Manejar el error, por ejemplo, redirigir a una página de error
          }
        );
      }
    });

    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                nombre: this.unidad.NombrePropiedad,
                descripcion: this.unidad.Descripcion,
                amount: {
                  currency_code: 'MXN',
                  value: this.unidad.PrecioPorNoche,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);

          // Llamar a la función para generar el recibo
          this.generateReceipt(order);
        },
        onError: function (err: any) {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);


      this.username = this.ugloService.getUserName();

      // Llama a la función para obtener la información del usuario
      this.getUsuarioByUsername(this.username);
  }

  deleteUnidad(id: string) {
    this.unidadService.deleteUnidad(id).subscribe(
      () => {
        // Redirige a la página deseada después de eliminar la unidad
        this.router.navigate(['/']); // Cambia '/otro-componente' por la URL real
      },
      (err) => {
        console.log(err);
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }
  


generateReceipt(order: any) {
  // Puedes personalizar el formato del recibo según tus necesidades
  const receipt = `
    Recibo de PayPal
    -----------------
    ID Usuario:${this.usuario.ID}
    ID de la orden: ${order.id}
    Nombre de la propiedad: ${this.unidad.NombrePropiedad}
    Starus: ${order.status}
    Cantidad: ${order.purchase_units[0].amount.value} ${order.purchase_units[0].amount.currency_code}
    -----------------
    ¡Gracias por tu compra!
  `;

  // Puedes imprimir el recibo en la consola o mostrarlo en tu aplicación
  console.log(receipt);

  // También puedes agregar lógica adicional aquí, como enviar el recibo por correo electrónico, etc.
}

getUsuarioByUsername(id: string) {
  // Realiza la solicitud al servidor para obtener la información del usuario
  this.usuarioService.getUsuario(id).subscribe(
    (res) => {
      this.usuario = res;
   
    },
    (err) => console.log(err)
  );
}

}
  

