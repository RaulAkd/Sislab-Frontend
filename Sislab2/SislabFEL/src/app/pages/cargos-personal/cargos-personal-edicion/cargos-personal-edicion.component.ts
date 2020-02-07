import { CargosPersonalService } from './../../../_service/cargospersonal.service';
import { CargosPersonal } from './../../../_model/cargospersonal';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-cargos-personal-edicion',
  templateUrl: './cargos-personal-edicion.component.html',
  styleUrls: ['./cargos-personal-edicion.component.css']
})
export class CargosPersonalEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  cargosPersonal: CargosPersonal;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<CargosPersonalEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: CargosPersonal, private route: ActivatedRoute, private cargosPersonalService: CargosPersonalService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.cargosPersonal = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.cargosPersonal.id_cargo != null) {
      this.cargosPersonalService.modificarCargosPersonal(this.cargosPersonal).subscribe( data => {
        this.cargosPersonalService.listarCargosPersonal().subscribe(cargosPersonales => {
          this.cargosPersonalService.cargosPersonalCambio.next(cargosPersonales);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.cargosPersonalService.registrarCargosPersonal(this.cargosPersonal).subscribe( data => {
        this.cargosPersonalService.listarCargosPersonal().subscribe(cargosPersonalNuevo => {
          this.cargosPersonalService.cargosPersonalCambio.next(cargosPersonalNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['cargosPersonal']);
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
