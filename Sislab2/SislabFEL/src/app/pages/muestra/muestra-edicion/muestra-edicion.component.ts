import { MuestraService } from './../../../_service/muestra.service';
import { Muestra } from './../../../_model/muestra';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { TOKEN_NAME } from 'src/app/_shared/var.constant';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-muestra-edicion',
  templateUrl: './muestra-edicion.component.html',
  styleUrls: ['./muestra-edicion.component.css']
})
export class MuestraEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  muestra: Muestra;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<MuestraEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Muestra, private route: ActivatedRoute, private muestraService: MuestraService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.muestra = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.muestra.id_muestra != null) {
      this.muestraService.modificarMuestra(this.muestra).subscribe( data => {
        this.muestraService.listarMuestra().subscribe(muestras => {
          this.muestraService.muestraCambio.next(muestras);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      const helper = new JwtHelperService();
      // tslint:disable-next-line:prefer-const
      let token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
      const decodedToken = helper.decodeToken(token.access_token);
      this.muestra.origen_m = decodedToken.user_name;
      console.log('Vino a else');
      this.muestraService.registrarMuestra(this.muestra).subscribe( data => {
        this.muestraService.listarMuestra().subscribe(muestraNuevo => {
          this.muestraService.muestraCambio.next(muestraNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['muestra']);
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
