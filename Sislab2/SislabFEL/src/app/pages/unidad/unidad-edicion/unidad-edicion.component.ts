import { UnidadService } from './../../../_service/unidad.service';
import { Unidad } from './../../../_model/unidad';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-unidad-edicion',
  templateUrl: './unidad-edicion.component.html',
  styleUrls: ['./unidad-edicion.component.css']
})
export class UnidadEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  unidad: Unidad;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<UnidadEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Unidad, private route: ActivatedRoute, private unidadService: UnidadService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.unidad = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.unidad.id_unidad != null) {
      this.unidadService.modificarUnidad(this.unidad).subscribe( data => {
        this.unidadService.listarUnidad().subscribe(unidades => {
          this.unidadService.unidadCambio.next(unidades);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.unidadService.registrarUnidad(this.unidad).subscribe( data => {
        this.unidadService.listarUnidad().subscribe(unidadNueva => {
          this.unidadService.unidadCambio.next(unidadNueva);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['unidad']);
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
