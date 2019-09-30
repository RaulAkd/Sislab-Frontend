import { RiesgoEspecifico } from './../../../_model/riesgoEspecifico';
import { RiesgoEspecificoService } from './../../../_service/riesgo-especifico.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-riesgo-especifico-edicion',
  templateUrl: './riesgo-especifico-edicion.component.html',
  styleUrls: ['./riesgo-especifico-edicion.component.css']
})
export class RiesgoEspecificoEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  riesgoEspecifico: RiesgoEspecifico;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<RiesgoEspecificoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: RiesgoEspecifico, private route: ActivatedRoute, private riesgoEspecificoService: RiesgoEspecificoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.riesgoEspecifico = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.riesgoEspecifico.id_riesgoespecifico != null) {
      this.riesgoEspecificoService.modificarRiesgoEspecifico(this.riesgoEspecifico).subscribe( data => {
        this.riesgoEspecificoService.listarRiesgosEspecifico().subscribe(riesgoEspecifico => {
          this.riesgoEspecificoService.riesgoEspecificoCambio.next(riesgoEspecifico);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.riesgoEspecificoService.registrarRiesgoEspecifico(this.riesgoEspecifico).subscribe( data => {
        this.riesgoEspecificoService.listarRiesgosEspecifico().subscribe(riesgoEspecificoNuevo => {
          this.riesgoEspecificoService.riesgoEspecificoCambio.next(riesgoEspecificoNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['riesgoEspecifico']);
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
