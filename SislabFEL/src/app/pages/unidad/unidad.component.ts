import { UnidadEdicionComponent } from './unidad-edicion/unidad-edicion.component';
import { UnidadService } from './../../_service/unidad.service';
import { Unidad } from './../../_model/unidad';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {

  dataSource: MatTableDataSource<Unidad>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombre_u', 'jefe_u', 'descr_u', 'sigla_u', 'direccion_u', 'telefono_u', 'codigo_u', 'acciones'];
  // tslint:disable-next-line:max-line-length
  // displayedColumns = ['id_unidad', 'nombre_u', 'jefe_u', 'descr_u', 'sigla_u', 'direccion_u', 'telefono_u', 'contacto1_u', 'contacto2_u', 'tel_cont1_u', 'tel_cont2_u', 'email_cont1_u', 'email_cont2_u', 'codigo_u', 'aux_id_unid', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombre_u', 'jefe_u', 'descr_u', 'sigla_u', 'direccion_u', 'telefono_u', 'codigo_u', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private unidadService: UnidadService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(unidad?: Unidad) {
    // tslint:disable-next-line:prefer-const
    let uni = unidad != null ? unidad : new Unidad();
    this.dialog.open(UnidadEdicionComponent, { data: uni});
  }

  // tslint:disable-next-line:variable-name
  eliminarUnidad(id_unidad: string) {
    this.unidadService.eliminarUnidad(id_unidad).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.unidadService.listarUnidad().subscribe(data => {
        this.unidadService.unidadCambio.next(data);
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
    this.unidadService.unidadCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.unidadService.listarUnidad().subscribe( data => {
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
