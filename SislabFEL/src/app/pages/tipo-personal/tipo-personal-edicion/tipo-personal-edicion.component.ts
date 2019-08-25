import { TipoPersonal } from './../../../_model/tipoPersonal';
import { TipoPersonalService } from './../../../_service/tipo-personal.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-tipo-personal-edicion',
  templateUrl: './tipo-personal-edicion.component.html',
  styleUrls: ['./tipo-personal-edicion.component.css']
})
export class TipoPersonalEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  tipoPersonal: TipoPersonal;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<TipoPersonalEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: TipoPersonal, private route: ActivatedRoute, private tipoPersonalService: TipoPersonalService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.tipoPersonal = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.tipoPersonal.id_tipopersonal != null) {
      this.tipoPersonalService.modificarTipoPersonal(this.tipoPersonal).subscribe( data => {
        this.tipoPersonalService.listarTipoPersonal().subscribe(tiposPersonal => {
          this.tipoPersonalService.tipoPersonalCambio.next(tiposPersonal);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.tipoPersonalService.registrarTipoPersonal(this.tipoPersonal).subscribe( data => {
        this.tipoPersonalService.listarTipoPersonal().subscribe(tipoPersonalNuevo => {
          this.tipoPersonalService.tipoPersonalCambio.next(tipoPersonalNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['tipoPersonal']);
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
