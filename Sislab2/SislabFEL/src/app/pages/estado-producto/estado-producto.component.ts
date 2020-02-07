import { EstadoProducto } from './../../_model/estadoProducto';
import { EstadoProductoService } from './../../_service/estado-producto.service';
import { EstadoProductoEdicionComponent } from './estado-producto-edicion/estado-producto-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-estado-producto',
  templateUrl: './estado-producto.component.html',
  styleUrls: ['./estado-producto.component.css']
})
export class EstadoProductoComponent implements OnInit {


  dataSource: MatTableDataSource< EstadoProducto >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_estadoprod', 'nombre_estp', 'descr_estp', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_estadoprod', 'nombre_estp', 'descr_estp', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private estadoProductoService: EstadoProductoService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(estadoProducto?: EstadoProducto) {
    // tslint:disable-next-line:prefer-const
    let ep = estadoProducto != null ? estadoProducto : new EstadoProducto();
    this.dialog.open(EstadoProductoEdicionComponent, { data: ep});
  }

  // tslint:disable-next-line:variable-name
  eliminarEstadoProducto(id_estadoprod: string) {
    this.estadoProductoService.eliminarEstadoProducto(id_estadoprod).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.estadoProductoService.listarEstadoProducto().subscribe(data => {
        this.estadoProductoService.estadoProductoCambio.next(data);
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
    this.estadoProductoService.estadoProductoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.estadoProductoService.listarEstadoProducto().subscribe( data => {
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
