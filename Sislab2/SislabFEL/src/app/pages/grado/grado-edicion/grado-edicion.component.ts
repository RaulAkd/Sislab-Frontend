import { Grado } from './../../../_model/grado';
import { GradoService } from './../../../_service/grado.service';
import { Concentracion } from './../../../_model/concentracion';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-grado-edicion',
  templateUrl: './grado-edicion.component.html',
  styleUrls: ['./grado-edicion.component.css']
})
export class GradoEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  grado: Grado;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<GradoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Grado, private route: ActivatedRoute, private gradoService: GradoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.grado = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.grado.id_grado != null) {
      this.gradoService.modificarGrado(this.grado).subscribe( data => {
        this.gradoService.listarGrado().subscribe(grados => {
          this.gradoService.gradoCambio.next(grados);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.gradoService.registrarGrado(this.grado).subscribe( data => {
        this.gradoService.listarGrado().subscribe(gradoN => {
          this.gradoService.gradoCambio.next(gradoN);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['grado']);
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
