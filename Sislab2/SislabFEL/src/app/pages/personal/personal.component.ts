import { PersonalService } from './../../_service/personal.service';
import { CargosPersonal } from './../../_model/cargospersonal';
import { TipoPersonal } from './../../_model/tipoPersonal';
import { PersonalEdicionComponent } from './personal-edicion/personal-edicion.component';
import { Personal } from './../../_model/personal';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personal: Personal;
  cargosPersonal: CargosPersonal;
  // tslint:disable-next-line:max-line-length
  // displayedColumns = ['id_personal', 'tipoPersonal', 'cargosPersonal', 'cedula_pe', 'nombres_pe', 'direccion_pe', 'telefono_pe', 'email_pe', 'cargo_pe', 'tipo_pe', 'sueldo_pe', 'fechaing_pe', 'fechafin_pe', 'aux_idpersonal', 'id_unidad', 'acciones'];
  dataSource: MatTableDataSource<Personal>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_personal', 'tipoPersonal', 'cedula_pe', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_personal', 'tipoPersonal', 'cedula_pe', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private personalService: PersonalService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(personal?: Personal) {
    // tslint:disable-next-line:prefer-const
    let per = personal != null ? personal : new Personal();
    console.log('Antes de pasar');
    console.log(per);
    this.dialog.open(PersonalEdicionComponent, { data: per});
  }

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
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.personal = new Personal();
    this.personal.cargosPersonal = new CargosPersonal();
    this.cargosPersonal = new CargosPersonal();
    this.personalService.PersonalCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.personalService.listarPersonal().subscribe( data => {
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
