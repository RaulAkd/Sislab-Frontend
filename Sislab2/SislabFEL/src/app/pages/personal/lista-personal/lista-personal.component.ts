import { TipoPersonal } from './../../../_model/tipoPersonal';
import { Personal } from './../../../_model/personal';
import { PersonalService } from './../../../_service/personal.service';
import { TipoPersonalService } from './../../../_service/tipo-personal.service';
import { PersonalEdicionComponent } from './../personal-edicion/personal-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { CargosPersonalService } from '../../../_service/cargospersonal.service';
import { CargosPersonal } from '../../../_model/cargospersonal';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.css']
})
export class ListaPersonalComponent implements OnInit {

  // personal: Personal[];
  selectedRowIndex = -1;
  datos: '';
  filtro: string;
  dataSource: MatTableDataSource<Personal>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_personal', 'tipoPersonal', 'nombres_pe', 'direccion_pe', 'cedula_pe', 'telefono_pe', 'email_pe', 'cargo_pe'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_personal', 'tipoPersonal', 'nombres_pe', 'direccion_pe', 'cedula_pe', 'telefono_pe', 'email_pe', 'cargo_pe'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private personalService: PersonalService, private tipoPersonalService: TipoPersonalService, private cargoService: CargosPersonalService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(personal?: Personal) {
    // tslint:disable-next-line:prefer-const
    let per = personal != null ? personal : new Personal();
    this.dialog.open(PersonalEdicionComponent, { data: per});
  }

  /*mostrarCliente(personal: Personal) {
    this.dialog.open(ClienteMostrarComponent, { data: cliente});
  }*/

  // tslint:disable-next-line:variable-name
  eliminarPersonal(id_personal: string) {
    console.log('Eliminar');
    console.log(id_personal);
    this.personalService.eliminarPersonal(id_personal).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.personalService.listarPersonal().subscribe(data => {
        this.personalService.PersonalCambio.next(data);
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
    // this.personal = new Personal();
    // this.personal.cargosPersonal = new CargosPersonal();
    this.personalService.PersonalCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    console.log('Antes service');
    this.personalService.listarPersonal().subscribe( data => {
      console.log('Datos Get Personal');
      console.log(data);
      // this.personal = data;
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

  seleccion(row: any) {
    console.log('Mensajeeeeeee');
    console.log(row);
    this.datos = row;
    this.selectedRowIndex = row.id_cliente;
    console.log('Indice');
    console.log(this.selectedRowIndex);
  }
}
