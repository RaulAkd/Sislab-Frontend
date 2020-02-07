import { Metodo } from './../../_model/metodo';
import { Servicio } from './../../_model/Servicio';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { MetodoService } from './../../_service/metodo.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { MetodoEdicionComponent } from './metodo-edicion/metodo-edicion.component';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.css']
})
export class MetodoComponent implements OnInit {

  dataSource: MatTableDataSource<Metodo>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_metodo', 'servicio', 'descr_mt', 'certificado_mt', 'nombre_mt', 'aux_idmetodo', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_metodo', 'servicio', 'descr_mt', 'certificado_mt', 'nombre_mt', 'aux_idmetodo', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private metodoService: MetodoService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(metodo?: Metodo) {
    // tslint:disable-next-line:prefer-const
    let met = metodo != null ? metodo : new Metodo();
    console.log('Antes de pasar');
    console.log(met);
    this.dialog.open(MetodoEdicionComponent, { data: met});
  }

  // tslint:disable-next-line:variable-name
  eliminarMetodo(id_metodo: string) {
    console.log('Eliminar');
    console.log(id_metodo);
    this.metodoService.eliminarMetodo(id_metodo).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.metodoService.listarMetodo().subscribe(data => {
        this.metodoService.MetodoCambio.next(data);
        this.notificar('Se elimino', 'AVISO');
      });
    });
  }

  notificar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.metodoService.MetodoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.metodoService.listarMetodo().subscribe( data => {
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
