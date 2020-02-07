import { TipoServicio } from './../../../_model/tipoServicio';
import { TipoServicioService } from './../../../_service/tipo-servicio.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tipo-servicio-edicion',
  templateUrl: './tipo-servicio-edicion.component.html',
  styleUrls: ['./tipo-servicio-edicion.component.css']
})
export class TipoServicioEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  tipoServicio: TipoServicio;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<TipoServicioEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: TipoServicio, private route: ActivatedRoute, private tipoServicioService: TipoServicioService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.tipoServicio = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.tipoServicio.id_tiposerv != null) {
      this.tipoServicioService.modificarTipoServicio(this.tipoServicio).subscribe( data => {
        this.tipoServicioService.listarTipoServicio().subscribe(tiposServicio => {
          this.tipoServicioService.tipoServicioCambio.next(tiposServicio);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.tipoServicioService.registrarTipoServicio(this.tipoServicio).subscribe( data => {
        this.tipoServicioService.listarTipoServicio().subscribe(tipoServicioNuevo => {
          this.tipoServicioService.tipoServicioCambio.next(tipoServicioNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['tipoServicio']);
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
