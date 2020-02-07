import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Cliente } from './../../../_model/cliente';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-cliente-mostrar',
  templateUrl: './cliente-mostrar.component.html',
  styleUrls: ['./cliente-mostrar.component.css']
})
export class ClienteMostrarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ClienteMostrarComponent>, @Inject(MAT_DIALOG_DATA) public data: Cliente) { }

  ngOnInit() {
    console.log(this.data);
  }

}
