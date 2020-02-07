import { PresentacionService } from './../../../_service/presentacion.service';
import { Presentacion } from './../../../_model/presentacion';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-presentacion-edicion',
  templateUrl: './presentacion-edicion.component.html',
  styleUrls: ['./presentacion-edicion.component.css']
})
export class PresentacionEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  presentacion: Presentacion;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<PresentacionEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Presentacion, private route: ActivatedRoute, private presentacionService: PresentacionService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.presentacion = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.presentacion.id_presentacion != null) {
      this.presentacionService.modificarPresentacion(this.presentacion).subscribe( data => {
        this.presentacionService.listarPresentacion().subscribe(presentaciones => {
          this.presentacionService.presentacionCambio.next(presentaciones);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.presentacionService.registrarPresentacion(this.presentacion).subscribe( data => {
        this.presentacionService.listarPresentacion().subscribe(presentacionNueva => {
          this.presentacionService.presentacionCambio.next(presentacionNueva);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['presentacion']);
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
