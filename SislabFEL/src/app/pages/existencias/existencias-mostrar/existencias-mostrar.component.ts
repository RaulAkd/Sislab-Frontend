import { Existencias } from './../../../_model/existencias';
import { Producto } from './../../../_model/producto';
import { Bodega } from './../../../_model/bodega';
import { Presentacion } from './../../../_model/presentacion';
import { UnidadMedida } from './../../../_model/unidadMedida';
import { EstadoProducto } from './../../../_model/estadoProducto';
import { Grado } from './../../../_model/grado';
import { Posgiro } from './../../../_model/posgiro';
import { Concentracion } from './../../../_model/concentracion';
import { Caracteristica } from './../../../_model/caracteristica';
import { TipoProducto } from './../../../_model/tipoProducto';
import { ExistenciasService } from './../../../_service/existencias.service';
import { ExistenciasEdicionComponent } from './../existencias-edicion/existencias-edicion.component';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-existencias-mostrar',
  templateUrl: './existencias-mostrar.component.html',
  styleUrls: ['./existencias-mostrar.component.css']
})
export class ExistenciasMostrarComponent implements OnInit {

  datos: 'Hola';
  dataSource: MatTableDataSource<Existencias>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_existencias', 'id_unidad', 'producto', 'bodega', 'presentacion', 'unidadMedida', 'estadoProducto', 'grado', 'hidratacion', 'posgiro', 'cantidad_e', 'fechacad_e', 'obsolescencia_e', 'tasauso_e', 'nenvase_e', 'fechabaja_e', 'ubica_e', 'pureza_e', 'concentracion', 'caracteristica', 'cantidadneta_e', 'tipoProducto', 'dism', 'increm', 'aux1', 'aux2', 'toi'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_existencias', 'id_unidad', 'producto', 'bodega', 'presentacion', 'unidadMedida', 'estadoProducto', 'grado', 'hidratacion', 'posgiro', 'cantidad_e', 'fechacad_e', 'obsolescencia_e', 'tasauso_e', 'nenvase_e', 'fechabaja_e', 'ubica_e', 'pureza_e', 'concentracion', 'caracteristica', 'cantidadneta_e', 'tipoProducto', 'dism', 'increm', 'aux1', 'aux2', 'toi'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ExistenciasMostrarComponent>, private router: Router, private route: ActivatedRoute, private existenciasService: ExistenciasService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(existencias?: Existencias) {
    // tslint:disable-next-line:prefer-const
    let exist = existencias != null ? existencias : new Existencias();
    console.log('Antes de pasar');
    console.log(exist);
    this.dialog.open(ExistenciasEdicionComponent, { data: exist});
  }

  // tslint:disable-next-line:variable-name
  eliminarExistencias(id_existencias: string) {
    console.log('Eliminar');
    console.log(id_existencias);
    this.existenciasService.eliminarExistencias(id_existencias).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.existenciasService.listarExistencias().subscribe(data => {
        this.existenciasService.ExistenciasCambio.next(data);
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
    this.existenciasService.ExistenciasCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.existenciasService.listarExistencias().subscribe( data => {
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
  mensaje(row: any) {
    console.log('Mensajeeeeeee');
    console.log(row);
    this.datos = row;
  }
}
