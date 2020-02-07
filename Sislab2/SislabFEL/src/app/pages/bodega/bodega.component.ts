import { Bodega } from './../../_model/bodega';
import { BodegaService } from './../../_service/bodega.service';
import { BodegaEdicionComponent } from './bodega-edicion/bodega-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  dataSource: MatTableDataSource< Bodega >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_bodega', 'id_unidad', 'id_usuario', 'nombre_bg', 'ubicacion_bg', 'descr_bg', 'habilitar_bd', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_bodega', 'id_unidad', 'id_usuario', 'nombre_bg', 'ubicacion_bg', 'descr_bg', 'habilitar_bd', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private bodegaService: BodegaService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(bodega?: Bodega) {
    // tslint:disable-next-line:prefer-const
    let bg = bodega != null ? bodega : new Bodega();
    this.dialog.open(BodegaEdicionComponent, { data: bg});
  }

  // tslint:disable-next-line:variable-name
  eliminarBodega(id_bodega: string) {
    this.bodegaService.eliminarBodega(id_bodega).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.bodegaService.listarBodega().subscribe(data => {
        this.bodegaService.bodegaCambio.next(data);
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
    this.bodegaService.bodegaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.bodegaService.listarBodega().subscribe( data => {
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
