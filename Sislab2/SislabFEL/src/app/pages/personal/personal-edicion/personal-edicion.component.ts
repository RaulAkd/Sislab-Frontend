import { CargosPersonalService } from './../../../_service/cargospersonal.service';
import { TipoPersonalService } from './../../../_service/tipo-personal.service';
import { CargosPersonal } from './../../../_model/cargospersonal';
import { TipoPersonal } from './../../../_model/tipoPersonal';
import { PersonalService } from './../../../_service/personal.service';
import { Personal } from './../../../_model/personal';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-personal-edicion',
  templateUrl: './personal-edicion.component.html',
  styleUrls: ['./personal-edicion.component.css']
})
export class PersonalEdicionComponent implements OnInit {

  tp: TipoPersonal[] = [];
  selected: string;
  personalNg: Personal;
  form: FormGroup;
  edicion = false;
  personal: Personal;
  datosFila = this.data;
  select = '';
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<PersonalEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Personal, private route: ActivatedRoute, private personalService: PersonalService, private tipoPersonalService: TipoPersonalService, private cargosPersonalService: CargosPersonalService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Pasado al modal');
    console.log(this.data);

    if (!this.data.id_personal) {
      // nuevo proveedor
      // tslint:disable-next-line:prefer-const
      let nuevoTipoPersonal = new TipoPersonal();
      this.data = new Personal();
      this.data.tipoPersonal = nuevoTipoPersonal;
    } else {
      // editar proveedor
      this.selected =  this.data.tipoPersonal.id_tipopersonal;
    }
    this.tipoPersonalService.listarTipoPersonal().subscribe( lista => {
      this.tp = lista;
    });
    this.personal = Object.assign({} , this.data);
  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(personalNg?: Personal) {
    console.log('vino a operar');
    if (this.personal.id_personal != null) {
      this.personal.tipoPersonal.id_tipopersonal = this.selected;
      this.personalService.modificarPersonal(this.personal).subscribe( data => {
        this.personalService.listarPersonal().subscribe(personales => {
          this.personalService.PersonalCambio.next(personales);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      this.personal.tipoPersonal.id_tipopersonal = this.selected;
      this.personalService.registrarPersonal(this.personal).subscribe( data => {
        this.personalService.listarPersonal().subscribe(personalNuevo => {
          this.personalService.PersonalCambio.next(personalNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['proveedor']);
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
