import { Posgiro } from './../../../_model/posgiro';
import { PosgiroService } from './../../../_service/posgiro.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-posgiro-edicion',
  templateUrl: './posgiro-edicion.component.html',
  styleUrls: ['./posgiro-edicion.component.css']
})
export class PosgiroEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  posgiro: Posgiro;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<PosgiroEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Posgiro, private route: ActivatedRoute, private posgiroService: PosgiroService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.posgiro = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.posgiro.id_posgiro != null) {
      this.posgiroService.modificarPosgiro(this.posgiro).subscribe( data => {
        this.posgiroService.listarPosgiro().subscribe(posgiros => {
          this.posgiroService.posgiroCambio.next(posgiros);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.posgiroService.registrarPosgiro(this.posgiro).subscribe( data => {
        this.posgiroService.listarPosgiro().subscribe(posgiroNuevo => {
          this.posgiroService.posgiroCambio.next(posgiroNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['posgiro']);
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
