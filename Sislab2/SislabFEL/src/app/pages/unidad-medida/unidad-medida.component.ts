import { UnidadEdicionComponent } from './../unidad/unidad-edicion/unidad-edicion.component';
import { UnidadMedidaService } from './../../_service/unidad-medida.service';
import { UnidadMedida } from './../../_model/unidadMedida';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { UnidadMedidaEdicionComponent } from './unidad-medida-edicion/unidad-medida-edicion.component';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {

  dataSource: MatTableDataSource< UnidadMedida >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_umedida', 'medida_um', 'descr_um', 'sigla_um', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_umedida', 'medida_um', 'descr_um', 'sigla_um', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private unidadMedidaService: UnidadMedidaService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(unidadMedida?: UnidadMedida) {
    // tslint:disable-next-line:prefer-const
    let um = unidadMedida != null ? unidadMedida : new UnidadMedida();
    this.dialog.open(UnidadMedidaEdicionComponent, { data: um});
  }

  // tslint:disable-next-line:variable-name
  eliminarUnidadMedida(id_umedida: string) {
    this.unidadMedidaService.eliminarUnidadMedida(id_umedida).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.unidadMedidaService.listarUnidadMedida().subscribe(data => {
        this.unidadMedidaService.unidadMedidaCambio.next(data);
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
    this.unidadMedidaService.unidadMedidaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.unidadMedidaService.listarUnidadMedida().subscribe( data => {
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
