import { OrdenTrabajoEEdicionComponent } from './orden-trabajo-e-edicion/orden-trabajo-e-edicion.component';
import { ClienteService } from './../../_service/cliente.service';
import { OrdenTrabajoService } from './../../_service/orden-trabajo.service';
import { OrdenTrabajo } from './../../_model/ordenTrabajo';
import { DetalleProforma } from './../../_model/detalle-proforma';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-orden-trabajo-e',
  templateUrl: './orden-trabajo-e.component.html',
  styleUrls: ['./orden-trabajo-e.component.css']
})
export class OrdenTrabajoEComponent implements OnInit {

  dataSource: MatTableDataSource<OrdenTrabajo>;
  // displayedColumns = ['id_orden', 'nombreCliente', 'fechaorden_ot', 'fechaentrega_ot', 'obser_ot', 'numeromuestra_ot',
  // 'aux_ordent', 'estado_ot', 'fecha_cierre', 'id_it', 'tipo_ot'];
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_orden', 'nombreCliente', 'fechaorden_ot', 'fechaentrega_ot', 'fecha_cierre', 'estado_ot'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_orden', 'nombreCliente', 'fechaorden_ot', 'fechaentrega_ot', 'fecha_cierre', 'estado_ot'];
  // tslint:disable-next-line:max-line-length
  // displayedColumns = ['id_proforma', 'cliente', 'subtotal_po', 'iva_po', 'total_po', 'fecha', 'estado_po', 'auxid_proforma', 'representante_po', 'obser_po', 'motivo_estadopo', 'id_usuario', 'fecha_ptarjeta', 'codigo_autoriza', 'id_emisor', 'tarjeta', 'obser_trj', 'codigo_resultado', 'codigo_operacion', 'codigo_plam', 'codigo_cuota', 'procesoweb_po', 'acciones'];
  // tslint:disable-next-line:max-line-length
  // displayedColumnsData = ['id_proforma', 'cliente', 'subtotal_po', 'iva_po', 'total_po', 'fecha', 'estado_po', 'auxid_proforma', 'representante_po', 'obser_po', 'motivo_estadopo', 'id_usuario', 'fecha_ptarjeta', 'codigo_autoriza', 'id_emisor', 'tarjeta', 'obser_trj', 'codigo_resultado', 'codigo_operacion', 'codigo_plam', 'codigo_cuota', 'procesoweb_po', 'acciones'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private ordenTrabajoService: OrdenTrabajoService, private clienteService: ClienteService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(ordenTrabajo?: OrdenTrabajo) {
    // tslint:disable-next-line:prefer-const
    let ordT = ordenTrabajo != null ? ordenTrabajo : new OrdenTrabajo();
    console.log('Antes de pasar');
    console.log(ordT);
    this.dialog.open(OrdenTrabajoEEdicionComponent, { data: ordT});
  }

  // tslint:disable-next-line:variable-name
  eliminarOrdenTrabajo(id_orden: string) {
    console.log('Eliminar');
    console.log(id_orden);
    this.ordenTrabajoService.eliminarOrdenTrabajo(id_orden).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.ordenTrabajoService.listarOrdenTrabajo().subscribe(data => {
        this.ordenTrabajoService.ordenTrabajoCambio.next(data);
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
    this.ordenTrabajoService.ordenTrabajoCambio.subscribe(data => {
      data.forEach(element => {
        this.clienteService.listarClientePorId( element.id_cliente).subscribe ( cliente => {
          element.nombreCliente = cliente.nombre_cl;
        });
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.ordenTrabajoService.listarOrdenTrabajo().subscribe( data => {
      data.forEach(element => {
        this.clienteService.listarClientePorId( element.id_cliente).subscribe ( cliente => {
          element.nombreCliente = cliente.nombre_cl;
        });
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editarProforma() {

  }

  eliminarDetalleProforma() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
