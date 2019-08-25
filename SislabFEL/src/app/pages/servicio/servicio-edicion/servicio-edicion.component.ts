import { TipoServicio } from './../../../_model/tipoServicio';
import { TipoServicioService } from './../../../_service/tipo-servicio.service';
import { ServicioService } from './../../../_service/servicio.service';
import { Servicio } from './../../../_model/servicio';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-servicio-edicion',
  templateUrl: './servicio-edicion.component.html',
  styleUrls: ['./servicio-edicion.component.css']
})
export class ServicioEdicionComponent implements OnInit {
  ts: TipoServicio[] = [];
  selected: string;
  form: FormGroup;
  edicion = false;
  servicio: Servicio;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ServicioEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Servicio, private route: ActivatedRoute, private servicioService: ServicioService, private tipoServicioService: TipoServicioService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Estos son los datos');
    console.log(this.data);
    if (!this.data.id_servicio) {
      // nuevo cliente
      // tslint:disable-next-line:prefer-const
      let nuevoTipoServicio = new TipoServicio();
      this.data = new Servicio();
      this.data.tipoServicio = nuevoTipoServicio;
    } else {
      // editar cliente
      this.selected =  this.data.tipoServicio.id_tiposerv;
    }
    this.tipoServicioService.listarTipoServicio().subscribe( lista => {
      this.ts = lista;
    });
    this.servicio = Object.assign({} , this.data);

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(servicioNg?: Servicio) {
    console.log('vino a operar');
    if (this.servicio.id_servicio != null) {
      this.servicio.tipoServicio.id_tiposerv = this.selected;
      this.servicioService.modificarServicio(this.servicio).subscribe( data => {
        this.servicioService.listarServicio().subscribe(servicios => {
          this.servicioService.ServicioCambio.next(servicios);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      console.log('Vino a registrar');
      this.servicio.tipoServicio.id_tiposerv = this.selected;
      console.log(this.servicio);
      console.log('Selecteeeed');
      console.log(this.selected);
      this.servicioService.registrarServicio(this.servicio).subscribe( data => {
        this.servicioService.listarServicio().subscribe(servicioNuevo => {
          this.servicioService.ServicioCambio.next(servicioNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['servicio']);
    this.dialogRef.close();
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
}
