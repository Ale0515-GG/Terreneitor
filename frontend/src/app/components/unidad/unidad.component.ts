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
  unidad: any; 

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  

// esta parte 


  title='angular-paypal-payment';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadService: UnidadService,
    private idStorageService: IdStorageService
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
                nombre:this.unidad.NombrePropiedad,
                descripcion:this.unidad.Descripcion,
                amount: {
                  currency_code: 'MXN',
                  value: this.unidad.PrecioPorNoche
                }
              }
            ]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: function (err: any) {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
