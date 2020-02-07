import { Posgiro } from './../../_model/posgiro';
import { PosgiroService } from './../../_service/posgiro.service';
import { PosgiroEdicionComponent } from './posgiro-edicion/posgiro-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-posgiro',
  templateUrl: './posgiro.component.html',
  styleUrls: ['./posgiro.component.css']
})
export class PosgiroComponent implements OnInit {

  dataSource: MatTableDataSource< Posgiro >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_posgiro', 'nombre_pg', 'descr_pg', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_posgiro', 'nombre_pg', 'descr_pg', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private posgiroService: PosgiroService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(posgiro?: Posgiro) {
    // tslint:disable-next-line:prefer-const
    let pg = posgiro != null ? posgiro : new Posgiro();
    this.dialog.open(PosgiroEdicionComponent, { data: pg});
  }

  // tslint:disable-next-line:variable-name
  eliminarPosgiro(id_posgiro: string) {
    this.posgiroService.eliminarPosgiro(id_posgiro).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.posgiroService.listarPosgiro().subscribe(data => {
        this.posgiroService.posgiroCambio.next(data);
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
    this.posgiroService.posgiroCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.posgiroService.listarPosgiro().subscribe( data => {
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
