import { DetalleMetodo } from './../../../_model/detalleMetodo';
import { DetalleProforma } from './../../../_model/detalle-proforma';
import { AgregarDetalleProformaComponent } from './agregar-detalle-proforma/agregar-detalle-proforma.component';
import { Cliente } from './../../../_model/cliente';
import { ListaClienteComponent } from './../../cliente/lista-cliente/lista-cliente.component';
import { ClienteComponent } from './../../cliente/cliente.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TipoCliente } from '../../../_model/tipoCliente';
import { Proforma } from '../../../_model/proforma';
import { ProformaService } from '../../../_service/proforma.service';
import { Router } from '@angular/router';
import { DetalleProformaEdicionComponent } from './detalle-proforma-edicion/detalle-proforma-edicion.component';
import { TOKEN_NAME } from 'src/app/_shared/var.constant';
import { JwtHelperService } from '@auth0/angular-jwt';

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
  nuevaProforma = true;
  editarCliente = false;

  dataSource: MatTableDataSource<DetalleProforma>;

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_detallepo', 'servicio', 'nombreLaboratorio', 'cantidad_po', 'valorunitario_po', 'totalservicio_po', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_detallepo', 'servicio', 'nombreLaboratorio', 'cantidad_po', 'valorunitario_po', 'totalservicio_po', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:max-line-length
  constructor(private dialogRef: MatDialogRef<ListaClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: Proforma, public dialog: MatDialog, private proformaService: ProformaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.detalleProforma = new DetalleProforma();
    this.dataDetalleProforma = new Array();
    this.cliente = new Cliente();
    this.cliente.tipoCliente = new TipoCliente();
    this.proforma = new Proforma();
    this.proforma.cliente = new Cliente();
    // this.proforma.fecha = new Date().toISOString().slice(0, 10);
//    this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
//    this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
//    this.dataSource.paginator = this.paginator;
//    this.dataSource.sort = this.sort;
    if (!this.data.id_proforma) {
      // nueva proforma
      this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
      // this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.nuevaProforma = false;
      console.log('editar');
      // editar proforma
      this.editarCliente = true;
      this.seleccionCliente = true;
      this.proformaService.listarProformaPorId(this.data.id_proforma).subscribe( data => {
        console.log(data);
        this.cliente.id_cliente = data.cliente.id_cliente;
        this.cliente.nombre_cl = data.cliente.nombre_cl;
        this.cliente.direccion_cl = data.cliente.direccion_cl;
        this.cliente.telefono_cl = data.cliente.telefono_cl;
        this.cliente.tipoCliente.iva_tcl = data.cliente.tipoCliente.iva_tcl;
        this.proforma.fecha = new Date(data.fecha).toISOString().slice(0, 10);
        this.cliente.ruc_cl = data.cliente.ruc_cl;
        this.cliente.cedula = data.cliente.cedula;
        this.data.detalleProforma.forEach(element => {
          this.detalleProforma = element;
          this.dataDetalleProforma.push(this.detalleProforma);
        });
        this.dataDetalleProforma = this.data.detalleProforma;
        this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
        /*this.data.detalleProforma.forEach(element => {
          this.detalleProforma = element;
          this.dataDetalleProforma.push(this.detalleProforma);
        });
        // this.dataDetalleProforma = this.data.detalleProforma; */
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.subtotal = this.data.subtotal_po;
        // this.detalleProforma.
        this.subtotalIva = (this.subtotal * this.cliente.tipoCliente.iva_tcl) / 100;
        this.proforma.total_po = this.data.total_po;
      });
    }
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
      this.subtotal = this.subtotal + +result.totalservicio_po;
      this.subtotalIva = (this.subtotal * this.cliente.tipoCliente.iva_tcl) / 100;
      this.proforma.total_po = this.subtotal + this.subtotalIva;
      this.errorProforma = false;
    });
  }

  ingresoCliente() {
      if (this.seleccionCliente === true  ) {
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

  editarDetalleProforma(row: any) {
    const dialogRef = this.dialog.open(DetalleProformaEdicionComponent, { data: row});
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  guardarProforma() {
    this.proforma.cliente.id_cliente = this.cliente.id_cliente;
    this.proforma.subtotal_po = this.subtotal;
    this.proforma.iva_po = this.subtotalIva;
    // this.proforma.total_po = this.detalleProforma.totalservicio_po;
    this.proforma.estado_po = 'Pendiente';

    if (!this.data.id_proforma) {
      // nueva proforma
      // Para generar id_compuesto
      const helper = new JwtHelperService();
      // tslint:disable-next-line:prefer-const
      let token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
      const decodedToken = helper.decodeToken(token.access_token);
      this.proforma.id_emisor = decodedToken.user_name;
      console.log('Guardar nueva proforma');
      this.proforma.fecha = new Date().toISOString().slice(0, 10);
      this.proforma.detalleProforma = this.dataDetalleProforma;
      console.log('Proforma a guardar');
      console.log(this.proforma);
      this.proformaService.registrarProforma(this.proforma).subscribe( data => {
        this.proformaService.listarProforma().subscribe(proformas => {
          this.proformaService.proformaCambio.next(proformas);
          this.notificar('Se registro', 'Aviso');
        });
      });
    } else {
      // editar proforma
      console.log('Editar proforma');
      this.proforma.detalleProforma = this.dataDetalleProforma;
      console.log('Proforma a guardar');
      console.log(this.proforma);
      this.proforma.id_proforma = this.data.id_proforma;
      this.proformaService.modificarProforma(this.proforma).subscribe( data => {
        this.proformaService.listarProforma().subscribe(proformas => {
          this.proformaService.proformaCambio.next(proformas);
          this.notificar('Se registro', 'Aviso');
        });
      });
    }
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
