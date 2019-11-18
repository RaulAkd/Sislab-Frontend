import { DetalleMetodo } from './../../../_model/detalleMetodo';
import { DetalleProforma } from './../../../_model/detalle-proforma';
import { AgregarDetalleProformaComponent } from './agregar-detalle-proforma/agregar-detalle-proforma.component';
import { Cliente } from './../../../_model/cliente';
import { ListaClienteComponent } from './../../cliente/lista-cliente/lista-cliente.component';
import { ClienteComponent } from './../../cliente/cliente.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { TipoCliente } from '../../../_model/tipoCliente';
import { Proforma } from '../../../_model/proforma';
import { ProformaService } from '../../../_service/proforma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proforma-edicion',
  templateUrl: './proforma-edicion.component.html',
  styleUrls: ['./proforma-edicion.component.css']
})
export class ProformaEdicionComponent implements OnInit {

  cliente: Cliente;
  proforma: Proforma;
  detalleProforma: DetalleProforma;
  dataDetalleProforma: Array<DetalleProforma>;
  seleccionCliente = false;
  errorProforma = true;
  telefonoCliente: string;
  cedulaCliente: string;
  subtotal = 0;
  subtotalIva = 0;

  dataSource: MatTableDataSource<DetalleProforma>;

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_detallepo', 'servicio', 'nombreLaboratorio', 'cantidad_po', 'valorunitario_po', 'totalservicio_po', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_detallepo', 'servicio', 'nombreLaboratorio', 'cantidad_po', 'valorunitario_po', 'totalservicio_po', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  // tslint:disable-next-line:max-line-length
  constructor(private dialogRef: MatDialogRef<ListaClienteComponent>, public dialog: MatDialog, private proformaService: ProformaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.detalleProforma = new DetalleProforma();
    this.dataDetalleProforma = new Array();
    this.cliente = new Cliente();
    this.cliente.tipoCliente = new TipoCliente();
    this.proforma = new Proforma();
    this.proforma.cliente = new Cliente();
    this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
    // this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buscarCliente(parametro?: string) {
    // tslint:disable-next-line:prefer-const
    if (parametro != null) {
      const dialogRef = this.dialog.open(ListaClienteComponent, { data: parametro});
    } else {
      const dialogRef = this.dialog.open(ListaClienteComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.seleccionCliente = true;
        }
        console.log('The dialog was closed');
        this.cliente = result;
        console.log(this.cliente);
      });
    }
  }

  agregarDetalle() {
    const dialogRef = this.dialog.open(AgregarDetalleProformaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'false') {
        return;
      }
      this.dataDetalleProforma.push(result);
      this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('empieza subtotal');
      this.subtotal = this.subtotal + +result.totalservicio_po;
      console.log(this.subtotal);
      this.subtotalIva = (this.subtotal * this.cliente.tipoCliente.iva_tcl) / 100;
      console.log('totallllllll');
      this.proforma.total_po = this.subtotal + this.subtotalIva;
      // this.detalleProforma.totalservicio_po = this.subtotal + this.subtotalIva;
      console.log(this.proforma.total_po);
      console.log('subtotal');
      console.log(this.subtotal);
      this.errorProforma = false;
    });
  }

  ingresoCliente() {
      if (this.seleccionCliente === true) {
      return false;
    } else {
      return true;
    }
  }

  ingresoDatos() {
    if (this.seleccionCliente === true && this.errorProforma === false) {
      return false;
    } else {
      return true;
    }
  }

  consultaCliente() {
      if (this.cliente === null) {
        return false;
      } else {
        return true;
      }
  }

  guardarProforma() {
    this.proforma.cliente.id_cliente = this.cliente.id_cliente;
    this.proforma.subtotal_po = this.subtotal;
    this.proforma.iva_po = this.subtotalIva;
    // this.proforma.total_po = this.detalleProforma.totalservicio_po;
    this.proforma.estado_po = 'Pendiente';
    this.proforma.detalleProforma = this.dataDetalleProforma;
    console.log('Proforma a guardar');
    console.log(this.proforma);
    this.proformaService.registrarProforma(this.proforma).subscribe( data => {
      this.proformaService.listarProforma().subscribe(proformas => {
        this.proformaService.proformaCambio.next(proformas);
        this.notificar('Se registro', 'Aviso');
      });
    });
    this.dialogRef.close();
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
}
