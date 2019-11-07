import { TipoCliente } from './../../_model/tipoCliente';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from './../../_model/cliente';
import { ClienteService } from './../../_service/cliente.service';
import { TipoClienteService } from './../../_service/tipo-cliente.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ClienteEdicionComponent } from './cliente-edicion/cliente-edicion.component';
import { ClienteMostrarComponent } from './cliente-mostrar/cliente-mostrar.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  dataSource: MatTableDataSource<Cliente>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombre_cl', 'tipoCliente', 'cedula', 'ruc_cl', 'direccion_cl', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombre_cl', 'tipoCliente', 'cedula',  'ruc_cl', 'direccion_cl', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService, private tipoClienteService: TipoClienteService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(cliente?: Cliente) {
    // tslint:disable-next-line:prefer-const
    let cli = cliente != null ? cliente : new Cliente();
    this.dialog.open(ClienteEdicionComponent, { data: cli});
  }

  mostrarCliente(cliente: Cliente) {
    this.dialog.open(ClienteMostrarComponent, { data: cliente});
  }

  // tslint:disable-next-line:variable-name
  eliminarCliente(id_cliente: string) {
    console.log('Eliminar');
    console.log(id_cliente);
    this.clienteService.eliminarCliente(id_cliente).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.clienteService.listarCliente().subscribe(data => {
        this.clienteService.ClienteCambio.next(data);
        this.notificar('Se elimino', 'AVISO');
      });
    });
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.clienteService.ClienteCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    console.log('Antes service');
    this.clienteService.listarCliente().subscribe( data => {
      console.log('Datos Get Cliente');
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
