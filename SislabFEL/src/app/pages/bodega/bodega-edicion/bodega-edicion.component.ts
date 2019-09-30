import { Bodega } from './../../../_model/bodega';
import { BodegaService } from './../../../_service/bodega.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-bodega-edicion',
  templateUrl: './bodega-edicion.component.html',
  styleUrls: ['./bodega-edicion.component.css']
})
export class BodegaEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  bodega: Bodega;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<BodegaEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Bodega, private route: ActivatedRoute, private bodegaService: BodegaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.bodega = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.bodega.id_bodega != null) {
      this.bodegaService.modificarBodega(this.bodega).subscribe( data => {
        this.bodegaService.listarBodega().subscribe(bodegas => {
          this.bodegaService.bodegaCambio.next(bodegas);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.bodegaService.registrarBodega(this.bodega).subscribe( data => {
        this.bodegaService.listarBodega().subscribe(bodegaN => {
          this.bodegaService.bodegaCambio.next(bodegaN);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['bodega']);
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
