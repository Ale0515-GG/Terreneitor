import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { IdStorageService } from 'src/app/services/id-storage.service';

declare var paypal: any;

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  i: number = 0;
  id: number = 0;

  unidad: any; // Declarar una variable para almacenar la unidad
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  producto = {
    describe: 'Unidad en venta',
    precio: 11.11,
    img: 'imagen'
  };
  title = 'angular-paypal-payment';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadService: UnidadService,
    private idStorageService: IdStorageService
  ) {}

  ngOnInit(): void {
    // Obtener la variable global 'id' y convertirla a tipo 'number'
    const globalID = this.idStorageService.getID();

    this.id = globalID ? parseInt(globalID, 10) : 0; // Puedes definir un valor predeterminado si no se encuentra la variable global

    this.getUnidad();

    paypal
      .Buttons({
        createOrder:(data:any,actions:any)=>{
        return actions.order.create({
          purchase_units:[
          {
            description:this.producto.describe,
            amount :{
              currency_code:'MXN',
              value:this.producto.precio
            }
          }
          ]
        })
        },
        onApprove:async (data:any,actions:any)=>{
          const order =await actions.order.capture();
          console.log(order)
        },
        onError: function (err: any) {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  getUnidad() {
    if (this.id) {
      this.unidadService.getUnidad(this.id.toString()).subscribe(
        (data: any) => {
          this.unidad = data; // Almacena los datos de la unidad en la variable unidad
          // Luego, puedes actualizar tus elementos HTML con estos datos
        },
        (error) => {
          console.error('Error al obtener los detalles de la unidad:', error);
        }
      );
    }
  }
}
