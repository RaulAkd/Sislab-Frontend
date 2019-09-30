import { ConcentracionService } from './../../../_service/concentracion.service';
import { Concentracion } from './../../../_model/concentracion';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-concentracion-edicion',
  templateUrl: './concentracion-edicion.component.html',
  styleUrls: ['./concentracion-edicion.component.css']
})
export class ConcentracionEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  concentracion: Concentracion;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ConcentracionEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Concentracion, private route: ActivatedRoute, private concentracionService: ConcentracionService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.concentracion = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.concentracion.id_concentracion != null) {
      this.concentracionService.modificarConcentracion(this.concentracion).subscribe( data => {
        this.concentracionService.listarConcentracion().subscribe(concentraciones => {
          this.concentracionService.concentracionCambio.next(concentraciones);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.concentracionService.registrarConcentracion(this.concentracion).subscribe( data => {
        this.concentracionService.listarConcentracion().subscribe(concentracionN => {
          this.concentracionService.concentracionCambio.next(concentracionN);
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
