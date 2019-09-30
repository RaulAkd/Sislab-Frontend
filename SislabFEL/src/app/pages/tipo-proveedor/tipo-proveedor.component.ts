import { TipoProveedor } from './../../_model/tipoProveedor';
import { TipoProveedorService } from './../../_service/tipo-proveedor.service';
import { TipoProveedorEdicionComponent } from './tipo-proveedor-edicion/tipo-proveedor-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tipo-proveedor',
  templateUrl: './tipo-proveedor.component.html',
  styleUrls: ['./tipo-proveedor.component.css']
})
export class TipoProveedorComponent implements OnInit {

  dataSource: MatTableDataSource< TipoProveedor >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_tipoproveedor', 'nombre_tpv', 'descr_tpv', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_tipoproveedor', 'nombre_tpv', 'descr_tpv', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoProveedorService: TipoProveedorService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(tipoProveedor?: TipoProveedor) {
    // tslint:disable-next-line:prefer-const
    let tpv = tipoProveedor != null ? tipoProveedor : new TipoProveedor();
    this.dialog.open(TipoProveedorEdicionComponent, { data: tpv});
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoProveedor(id_tipoproveedor: string) {
    this.tipoProveedorService.eliminarTipoProveedor(id_tipoproveedor).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoProveedorService.listarTipoProveedor().subscribe(data => {
        this.tipoProveedorService.tipoProveedorCambio.next(data);
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
    this.tipoProveedorService.tipoProveedorCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoProveedorService.listarTipoProveedor().subscribe( data => {
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
