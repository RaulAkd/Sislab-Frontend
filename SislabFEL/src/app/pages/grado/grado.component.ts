import { Grado } from './../../_model/grado';
import { GradoService } from './../../_service/grado.service';
import { GradoEdicionComponent } from './grado-edicion/grado-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {

  dataSource: MatTableDataSource< Grado >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_grado', 'nombre_gr', 'descr_gr', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_grado', 'nombre_gr', 'descr_gr', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private gradoService: GradoService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(grado?: Grado) {
    // tslint:disable-next-line:prefer-const
    let gr = grado != null ? grado : new Grado();
    this.dialog.open(GradoEdicionComponent, { data: gr});
  }

  // tslint:disable-next-line:variable-name
  eliminarGrado(id_grado: string) {
    this.gradoService.eliminarGrado(id_grado).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.gradoService.listarGrado().subscribe(data => {
        this.gradoService.gradoCambio.next(data);
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
    this.gradoService.gradoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.gradoService.listarGrado().subscribe( data => {
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
