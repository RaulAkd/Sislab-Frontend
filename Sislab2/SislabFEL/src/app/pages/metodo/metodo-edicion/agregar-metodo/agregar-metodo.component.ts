import { UnidadMedida } from './../../../../_model/unidadMedida';
import { Existencias } from './../../../../_model/existencias';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ExistenciasMostrarComponent } from '../../../existencias/existencias-mostrar/existencias-mostrar.component';
import { ExistenciasComponent } from '../../../existencias/existencias.component';

@Component({
  selector: 'app-agregar-metodo',
  templateUrl: './agregar-metodo.component.html',
  styleUrls: ['./agregar-metodo.component.css']
})

export class AgregarMetodoComponent implements OnInit {
  data: Existencias;
  idExistencia: string;
  unidadM: string;
  producto: string;
  cantidad: number;
  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<ExistenciasMostrarComponent>) {   }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
  }

  buscarExistencias() {
    const dialogRef =  this.dialog.open(ExistenciasMostrarComponent, { });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      console.log(this.data.unidadMedida);
      this.unidadM = this.data.unidadMedida.medida_um;
      this.producto = this.data.producto.nombre_pr;
      this.cantidad = this.data.cantidad_e;
      this.idExistencia = this.data.id_existencia;
    });
  }
}
