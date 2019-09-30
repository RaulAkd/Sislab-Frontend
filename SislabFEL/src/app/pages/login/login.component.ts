import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../_service/login.service';
import { TOKEN_NAME } from '../../_shared/var.constant';
import * as decode from 'jwt-decode';
import { MenuService } from '../../_service/menu.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;
  mensaje = '';
  error = '';

  constructor(private loginService: LoginService, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  iniciarSesion() {
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

        this.router.navigate(['unidad']);
      }
    });
  }

}
