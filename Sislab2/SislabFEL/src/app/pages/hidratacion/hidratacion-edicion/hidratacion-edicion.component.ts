import { Hidratacion } from './../../../_model/hidratacion';
import { HidratacionService } from './../../../_service/hidratacion.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-hidratacion-edicion',
  templateUrl: './hidratacion-edicion.component.html',
  styleUrls: ['./hidratacion-edicion.component.css']
})
export class HidratacionEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  hidratacion: Hidratacion;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<HidratacionEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Hidratacion, private route: ActivatedRoute, private hidratacionService: HidratacionService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.hidratacion = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.hidratacion.id_hidratacion != null) {
      this.hidratacionService.modificarHidratacion(this.hidratacion).subscribe( data => {
        this.hidratacionService.listarHidratacion().subscribe(hidrataciones => {
          this.hidratacionService.hidratacionCambio.next(hidrataciones);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.hidratacionService.registrarHidratacion(this.hidratacion).subscribe( data => {
        this.hidratacionService.listarHidratacion().subscribe(hidratacionN => {
          this.hidratacionService.hidratacionCambio.next(hidratacionN);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['hidratacion']);
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
