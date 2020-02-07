import { TipoOrdenInventario } from './../../_model/tipoOrdenInventario';
import { TipoOrdenInventarioService } from './../../_service/tipo-orden-inventario.service';
import { TipoOrdenInventarioEdicionComponent } from './tipo-orden-inventario-edicion/tipo-orden-inventario-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-tipo-orden-inventario',
  templateUrl: './tipo-orden-inventario.component.html',
  styleUrls: ['./tipo-orden-inventario.component.css']
})

export class TipoOrdenInventarioComponent implements OnInit {

  dataSource: MatTableDataSource< TipoOrdenInventario >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombre_toi', 'descr_toi', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombre_toi', 'descr_toi', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoOrdenInventarioService: TipoOrdenInventarioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(tipoOrdenInventario?: TipoOrdenInventario) {
    // tslint:disable-next-line:prefer-const
    let toi = tipoOrdenInventario != null ? tipoOrdenInventario : new TipoOrdenInventario();
    this.dialog.open(TipoOrdenInventarioEdicionComponent, { data: toi});
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoOrdenInventario(id_tipordeninv: string) {
    this.tipoOrdenInventarioService.eliminarTipoOrdenInventario(id_tipordeninv).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoOrdenInventarioService.listarTipoOrdenInventario().subscribe(data => {
        this.tipoOrdenInventarioService.tipoOrdenInventarioCambio.next(data);
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
    this.tipoOrdenInventarioService.tipoOrdenInventarioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoOrdenInventarioService.listarTipoOrdenInventario().subscribe( data => {
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
