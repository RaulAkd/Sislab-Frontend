import { TipoClienteService } from './../../../_service/tipo-cliente.service';
import { TipoCliente } from './../../../_model/tipoCliente';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-tipo-cliente-edicion',
  templateUrl: './tipo-cliente-edicion.component.html',
  styleUrls: ['./tipo-cliente-edicion.component.css']
})
export class TipoClienteEdicionComponent implements OnInit {

  tipoCLienteNg: TipoCliente;
  // tslint:disable-next-line:variable-name
  id_tipoclienteNg: string;
  // tslint:disable-next-line:variable-name
  tipo_tclNg: string;
  // tslint:disable-next-line:variable-name
  factura_tclNg: string;
  // tslint:disable-next-line:variable-name
  descr_tclNg: string;
  // tslint:disable-next-line:variable-name
  iva_tclNg: number;

  form: FormGroup;
  edicion = false;
  tipoCliente: TipoCliente;
  prueba: 'Si vale';
  datosFila = this.data;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, private tipoClienteService: TipoClienteService) { }

  ngOnInit() {
    this.id_tipoclienteNg = this.data.id_tipocliente;
    this.tipo_tclNg = this.data.tipo_tcl;
    this.factura_tclNg = this.data.factura_tcl;
    this.descr_tclNg = this.data.descr_tcl;
    this.iva_tclNg = this.data.iva_tcl;
    this.form = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      'id_tipocliente' : new FormControl(this.data.id_tipocliente),
      // tslint:disable-next-line:object-literal-key-quotes
      'tipo_tcl' : new FormControl(this.data.tipo_tcl),
      // tslint:disable-next-line:object-literal-key-quotes
      'factura_tcl' : new FormControl(this.data.factura_tcl),
      // tslint:disable-next-line:object-literal-key-quotes
      'descr_tcl' : new FormControl(this.data.descr_tcl),
      // tslint:disable-next-line:object-literal-key-quotes
      'iva_tcl' : new FormControl(this.data.iva_tcl),
    });
    // console.log('tomar valor');
    // console.log(this.route.snapshot.paramMap.get('id_tipocliente'));
    // console.log('Form vacio');
    /* this.tipoCliente = new TipoCliente();
    this.route.params.subscribe( (params: Params) => {
      this.id_tipocliente = params.id_tipocliente;
      console.log('id dialog');
      console.log(this.id_tipocliente);
      this.edicion = this.id_tipocliente != null;
     //  this.initForm();

    });*/
  }
/*
  initForm() {
    console.log('Vino a iniciar');
    console.log(this.edicion);
    if (this.edicion) {
      console.log('Edicion true');
      this.tipoClienteService.listarTipoClientePorId(this.id_tipocliente).subscribe( data => {
        this.form = new FormGroup({
          // tslint:disable-next-line:object-literal-key-quotes
          'id_tipocliente' : new FormControl(this.datosFila.id_tipocliente),
          // tslint:disable-next-line:object-literal-key-quotes
          'tipo_tcl' : new FormControl(data.tipo_tcl),
          // tslint:disable-next-line:object-literal-key-quotes
          'factura_tcl' : new FormControl(data.factura_tcl),
          // tslint:disable-next-line:object-literal-key-quotes
          'descr_tcl' : new FormControl(data.descr_tcl),
          // tslint:disable-next-line:object-literal-key-quotes
          'iva_tcl' : new FormControl(data.iva_tcl),
        });
      });
    }
  }

  operar() {
    // tslint:disable-next-line:no-string-literal
    this.tipoCliente.id_tipocliente  = this.form.value['id_tipocliente'];
    // tslint:disable-next-line:no-string-literal
    this.tipoCliente.tipo_tcl  = this.form.value['tipo_tcl'];
    // tslint:disable-next-line:no-string-literal
    this.tipoCliente.factura_tcl  = this.form.value['factura_tcl'];
    // tslint:disable-next-line:no-string-literal
    this.tipoCliente.descr_tcl  = this.form.value['descr_tcl'];
    // tslint:disable-next-line:no-string-literal
    this.tipoCliente.iva_tcl  = this.form.value['iva_tcl'];
    this.tipoClienteService.modificarTipoCliente(this.tipoCliente).subscribe(data => {
      console.log('Datos modificados');
      console.log(data);
    });
  }*/
}
