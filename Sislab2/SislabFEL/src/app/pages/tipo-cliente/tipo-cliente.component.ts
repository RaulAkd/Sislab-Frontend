import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { TipoCliente } from './../../_model/tipoCliente';
import { TipoClienteService } from './../../_service/tipo-cliente.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { TipoClienteEdicionComponent } from './tipo-cliente-edicion/tipo-cliente-edicion.component';

@Component({
  selector: 'app-tipo-cliente',
  templateUrl: './tipo-cliente.component.html',
  styleUrls: ['./tipo-cliente.component.css']
})
export class TipoClienteComponent implements OnInit {

  mensaje: string;
  accion: string;
  datosFila: TipoCliente;
  tipoClienteModificado: TipoCliente;
  name2: string;
  // tslint:disable-next-line:variable-name
  id_tipocliente2: string;
  dataSource: MatTableDataSource<TipoCliente>;
  displayedColumns = ['id_tipocliente', 'tipo_tcl', 'factura_tcl', 'descr_tcl', 'iva_tcl', 'acciones'];
  displayedColumnsData = ['id_tipocliente', 'tipo_tcl', 'factura_tcl', 'descr_tcl', 'iva_tcl', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:variable-named
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoClienteService: TipoClienteService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  openDialog(row) {
    this.name2 = 'asd';
    console.log('Open dialog');
    console.log('Datos fila');
    console.log(row);
    console.log('Datos fila pasados');
    this.datosFila = row;
    console.log(this.datosFila);
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(TipoClienteEdicionComponent, { data: {
      id_tipocliente: this.datosFila.id_tipocliente,
      tipo_tcl: this.datosFila.tipo_tcl,
      factura_tcl: this.datosFila.factura_tcl,
      descr_tcl: this.datosFila.descr_tcl,
      iva_tcl: this.datosFila.iva_tcl
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log('de vuelta');
      console.log(result);
      this.tipoClienteModificado = result;
      this.tipoClienteService.modificarTipoCliente(this.tipoClienteModificado).subscribe(data => {
        this.tipoClienteService.listarTipoCliente().subscribe(tiposCliente => {
          this.tipoClienteService.tipoClienteCambio.next(tiposCliente);
          this.mensaje = 'Se Modificó';
          this.accion = 'AVISO';
          this.notificar(this.mensaje, this.accion);
        });
      });
    });
  }

  nuevoTipoCliente() {
    console.log('Nuevo Tipo Cliente');
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(TipoClienteEdicionComponent, { data: {
      id_tipocliente: '',
      tipo_tcl: '',
      factura_tcl: '',
      descr_tcl: '',
      iva_tcl: ''
    }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.tipoClienteModificado = result;
      this.tipoClienteService.registrarTipoCliente(this.tipoClienteModificado).subscribe(data => {
        this.tipoClienteService.listarTipoCliente().subscribe(tiposCliente => {
        this.tipoClienteService.tipoClienteCambio.next(tiposCliente);
        this.mensaje = 'Se Registro';
        this.accion = 'AVISO';
        this.notificar(this.mensaje, this.accion);
        });
      });
    });
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoCliente(id_tipocliente: string) {
    console.log('Eliminar');
    console.log(id_tipocliente);
    this.tipoClienteService.eliminarTipoCliente(id_tipocliente).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoClienteService.listarTipoCliente().subscribe(data => {
        this.tipoClienteService.tipoClienteCambio.next(data);
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

    this.tipoClienteService.tipoClienteCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoClienteService.listarTipoCliente().subscribe( data => {
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

