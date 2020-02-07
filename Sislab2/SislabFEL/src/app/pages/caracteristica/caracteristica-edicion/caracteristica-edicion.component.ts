import { Caracteristica } from './../../../_model/caracteristica';
import { CaracteristicaService } from './../../../_service/caracteristica.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-caracteristica-edicion',
  templateUrl: './caracteristica-edicion.component.html',
  styleUrls: ['./caracteristica-edicion.component.css']
})
export class CaracteristicaEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  caracteristica: Caracteristica;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<CaracteristicaEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Caracteristica, private route: ActivatedRoute, private caracteristicaService: CaracteristicaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.caracteristica = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.caracteristica.id_caracteristica != null) {
      this.caracteristicaService.modificarCaracteristica(this.caracteristica).subscribe( data => {
        this.caracteristicaService.listarCaracteristica().subscribe(caracteristicas => {
          this.caracteristicaService.caracteristicaCambio.next(caracteristicas);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.caracteristicaService.registrarCaracteristica(this.caracteristica).subscribe( data => {
        this.caracteristicaService.listarCaracteristica().subscribe(caracteristicaN => {
          this.caracteristicaService.caracteristicaCambio.next(caracteristicaN);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['concentracion']);
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
