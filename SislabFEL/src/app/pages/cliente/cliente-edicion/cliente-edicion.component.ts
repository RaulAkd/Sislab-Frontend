import { TipoClienteService } from './../../../_service/tipo-cliente.service';
import { TipoCliente } from './../../../_model/tipoCliente';
import { ClienteService } from './../../../_service/cliente.service';
import { Cliente } from './../../../_model/cliente';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-edicion',
  templateUrl: './cliente-edicion.component.html',
  styleUrls: ['./cliente-edicion.component.css']
})
export class ClienteEdicionComponent implements OnInit {

  tc: TipoCliente[] = [];
  selected: string;
  clienteNg: Cliente;
  form: FormGroup;
  edicion = false;
  cliente: Cliente;
  datosFila = this.data;
  select = 'hiug';
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ClienteEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Cliente, private route: ActivatedRoute, private clienteService: ClienteService, private tipoClienteService: TipoClienteService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Pasado al modal');
    console.log(this.data);

    if (!this.data.id_cliente) {
      // nuevo cliente
      // tslint:disable-next-line:prefer-const
      let nuevoTipoCliente = new TipoCliente();
      this.data = new Cliente();
      this.data.tipoCliente = nuevoTipoCliente;
    } else {
      // editar cliente
      this.selected =  this.data.tipoCliente.id_tipocliente;
    }
    this.tipoClienteService.listarTipoCliente().subscribe( lista => {
      this.tc = lista;
    });
    this.cliente = Object.assign({} , this.data);

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(clienteNg?: Cliente) {
    console.log('vino a operar');
    if (this.cliente.id_cliente != null) {
      this.cliente.tipoCliente.id_tipocliente = this.selected;
      this.clienteService.modificarCliente(this.cliente).subscribe( data => {
        this.clienteService.listarCliente().subscribe(clientes => {
          this.clienteService.ClienteCambio.next(clientes);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      this.cliente.tipoCliente.id_tipocliente = this.selected;
      this.clienteService.registrarCliente(this.cliente).subscribe( data => {
        this.clienteService.listarCliente().subscribe(clienteNuevo => {
          this.clienteService.ClienteCambio.next(clienteNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['cliente']);
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
