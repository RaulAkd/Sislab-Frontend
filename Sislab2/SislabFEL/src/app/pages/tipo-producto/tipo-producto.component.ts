import { TipoProductoEdicionComponent } from './tipo-producto-edicion/tipo-producto-edicion.component';
import { TipoProductoService } from './../../_service/tipo-producto.service';
import { TipoProducto } from './../../_model/tipoProducto';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tipo-producto',
  templateUrl: './tipo-producto.component.html',
  styleUrls: ['./tipo-producto.component.css']
})
export class TipoProductoComponent implements OnInit {

  dataSource: MatTableDataSource< TipoProducto >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombre_tprod', 'descr_tprod', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombre_tprod', 'descr_tprod', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoProductoService: TipoProductoService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(tipoProducto?: TipoProducto) {
    // tslint:disable-next-line:prefer-const
    let tp = tipoProducto != null ? tipoProducto : new TipoProducto();
    this.dialog.open(TipoProductoEdicionComponent, { data: tp});
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoProducto(id_tipoprod: string) {
    this.tipoProductoService.eliminarTipoProducto(id_tipoprod).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoProductoService.listarTipoProducto().subscribe(data => {
        this.tipoProductoService.tipoProductoCambio.next(data);
        this.notificar('Se eliminó', 'AVISO');
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
    this.tipoProductoService.tipoProductoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoProductoService.listarTipoProducto().subscribe( data => {
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
