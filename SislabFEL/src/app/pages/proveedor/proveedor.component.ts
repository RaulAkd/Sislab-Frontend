import { ProveedorEdicionComponent } from './proveedor-edicion/proveedor-edicion.component';
import { TipoProveedorService } from './../../_service/tipo-proveedor.service';
import { ProveedorService } from './../../_service/proveedor.service';
import { Proveedor } from './../../_model/proveedor';
import { TipoProveedor } from './../../_model/tipoProveedor';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  dataSource: MatTableDataSource<Proveedor>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombre_pv', 'tipoProveedor', 'ruc_pv', 'direccion_pv', 'telefono_pv', 'descr_pv', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombre_pv', 'tipoProveedor', 'ruc_pv', 'direccion_pv', 'telefono_pv', 'descr_pv', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private proveedorService: ProveedorService, private tipoProveedorService: TipoProveedorService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(proveedor?: Proveedor) {
    // tslint:disable-next-line:prefer-const
    let pro = proveedor != null ? proveedor : new Proveedor();
    this.dialog.open(ProveedorEdicionComponent, { data: pro});
  }

  /*mostrarProveedor(proveedor: Proveedor) {
    this.dialog.open(ClienteMostrarComponent, { data: cliente});
  }*/

  // tslint:disable-next-line:variable-name
  eliminarProveedor(id_proveedor: string) {
    console.log('Eliminar');
    console.log(id_proveedor);
    this.proveedorService.eliminarProveedor(id_proveedor).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.proveedorService.listarProveedor().subscribe(data => {
        this.proveedorService.ProveedorCambio.next(data);
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
    this.proveedorService.ProveedorCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    console.log('Antes service');
    this.proveedorService.listarProveedor().subscribe( data => {
      console.log('Datos Get Proveedor');
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
