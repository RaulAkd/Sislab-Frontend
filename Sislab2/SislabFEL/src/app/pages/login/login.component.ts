import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../_service/login.service';
import { TOKEN_NAME } from '../../_shared/var.constant';
import * as decode from 'jwt-decode';
import { MenuService } from '../../_service/menu.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DatosUsuarioService } from '../../_service/datos-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements ErrorStateMatcher {
 export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;
  mensaje = '';
  error = '';
  hide = true;
  @Output() emisor = new EventEmitter();

  usuarioF = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  claveF = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  // tslint:disable-next-line:max-line-length
  constructor(public datosUsuario: DatosUsuarioService, private loginService: LoginService, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  errorF( uf: FormControl, cF: FormControl) {
    if (uf.hasError('required') || uf.hasError('email') || cF.hasError('required')) {
      console.log('Error campo');
      return true;
    } else {
      console.log('Sin errores');
      return false;
    }
  }

  iniciarSesion() {
    this.usuario = this.usuarioF.value;
    console.log(this.usuario);
    this.clave = this.claveF.value;
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      if (data) {
        const helper = new JwtHelperService();

        // tslint:disable-next-line:prefer-const
        let token = JSON.stringify(data);
        sessionStorage.setItem(TOKEN_NAME, token);

        // tslint:disable-next-line:prefer-const
        let tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
        const decodedToken = helper.decodeToken(tk.access_token);
        // const decodedToken = decode(tk.access_token);

        // tslint:disable-next-line:no-shadowed-variable
        /* this.menuService.listarPorUsuario(decodedToken.user_name).subscribe(data => {
          this.menuService.menuCambio.next(data);
        });*/
        console.log('Antes del emit');
        this.datosUsuario.nombreUsuario = this.usuario;
        this.emisor.emit(this.usuario);
        this.router.navigate(['tipoCliente']);
      }
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
