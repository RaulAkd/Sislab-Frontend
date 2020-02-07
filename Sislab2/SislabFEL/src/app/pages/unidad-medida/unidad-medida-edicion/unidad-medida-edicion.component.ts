import { UnidadMedidaService } from './../../../_service/unidad-medida.service';
import { UnidadMedida } from './../../../_model/unidadMedida';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-unidad-medida-edicion',
  templateUrl: './unidad-medida-edicion.component.html',
  styleUrls: ['./unidad-medida-edicion.component.css']
})
export class UnidadMedidaEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  unidadMedida: UnidadMedida;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<UnidadMedidaEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: UnidadMedida, private route: ActivatedRoute, private unidadMedidaService: UnidadMedidaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.unidadMedida = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.unidadMedida.id_umedida != null) {
      this.unidadMedidaService.modificarUnidadMedida(this.unidadMedida).subscribe( data => {
        this.unidadMedidaService.listarUnidadMedida().subscribe(unidadMedidas => {
          this.unidadMedidaService.unidadMedidaCambio.next(unidadMedidas);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.unidadMedidaService.registrarUnidadMedida(this.unidadMedida).subscribe( data => {
        this.unidadMedidaService.listarUnidadMedida().subscribe(unidadMedidaNueva => {
          this.unidadMedidaService.unidadMedidaCambio.next(unidadMedidaNueva);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['unidadMedida']);
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
