import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { IdStorageService } from 'src/app/services/id-storage.service';
import { UserglobalService } from 'src/app/services/userglobal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ReciboService } from 'src/app/services/recibo/resibo.service';

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
  du: any;

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  title = 'angular-paypal-payment';

  constructor(
    private reciboService: ReciboService,
    private route: ActivatedRoute,
    private router: Router,
    private unidadService: UnidadService,
    private idStorageService: IdStorageService,
    private ugloService: UserglobalService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.unidadService.getUnidad(id).subscribe(
          (res) => {
            this.unidad = res;
            this.getUsuario(this.unidad.IdUsuario);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });

    if (this.paypalElement) {
      paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  name: this.unidad.NombrePropiedad,
                  description: this.unidad.Descripcion,
                  amount: {
                    currency_code: 'MXN',
                    value: this.unidad.PrecioPorNoche,
                  },
                },
              ],
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const order = await actions.order.capture();
              console.log(order);
              this.generateReceipt(order);
            } catch (err) {
              console.error('Error al capturar la orden de PayPal:', err);
            }
          },
          onError: (err: any) => {
            console.log(err);
          },
        })
        .render(this.paypalElement.nativeElement);
    }

    this.username = this.ugloService.getUserName();
    this.getUsuarioByUsername(this.username);
    this.getUsuario(this.unidad.IdUsuario);
  }

  deleteUnidad(id: string) {
    this.unidadService.deleteUnidad(id).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  generateReceipt(order: any) {
    const datosRecibo = {
      ID: order.id.toString(),
      IdUsuario: this.usuario.ID.toString(),
      NombrePropiedad: this.unidad.NombrePropiedad.toString(),
      Estado: order.status.toString(),
      Cantidad: order.purchase_units[0].amount.value.toString(),
    };

    this.deleteUnidad(this.unidad.ID);

    this.reciboService.saveRecibo(datosRecibo).subscribe(
      (res: any) => {
        console.log('Recibo guardado exitosamente:', res);
        this.router.navigate(['/pagos']);
      },
      (err: any) => {
        console.error('Error al guardar el recibo:', err);
      }
    );
  }

  getUsuarioByUsername(id: string) {
    this.usuarioService.getUsuario(id).subscribe(
      (res) => {
        this.usuario = res;
      },
      (err) => console.log(err)
    );
  }

  getUsuario(IdUsuario: string) {
    this.usuarioService.getUsuario(IdUsuario).subscribe(
      (res) => {
        this.du = res;
      },
      (err) => console.log(err)
    );
  }
}
