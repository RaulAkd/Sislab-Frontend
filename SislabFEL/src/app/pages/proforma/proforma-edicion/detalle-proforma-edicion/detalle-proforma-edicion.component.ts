import { DetalleProforma } from './../../../../_model/detalle-proforma';
import { Servicio } from './../../../../_model/servicio';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detalle-proforma-edicion',
  templateUrl: './detalle-proforma-edicion.component.html',
  styleUrls: ['./detalle-proforma-edicion.component.css']
})
export class DetalleProformaEdicionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DetalleProformaEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: DetalleProforma) { }

  ngOnInit() {
    console.log(this.data);
  }

}
