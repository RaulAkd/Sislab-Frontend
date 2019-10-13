import { MenuTitulo } from './_model/menuTitulo';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './_service/login.service';
import { Menu } from './_model/menu';
import { MenuService } from './_service/menu.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { TOKEN_NAME } from './_shared/var.constant';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SyslabFE';
  menus: Menu[] = [];
  micro1: MenuTitulo[] = [];
  micro2: MenuTitulo[] = [];
  micro3: MenuTitulo[] = [];
  accesos1 = true;
  accesos2 = true;
  accesos3 = true;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router,  public loginService: LoginService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
      // tslint:disable-next-line:prefer-const
      this.micro1 = [];
      this.micro2 = [];
      this.micro3 = [];

      this.accesos1 = false;
      this.accesos2 = false;
      this.accesos3 = false;
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].url === 'Proformas') {
          this.micro1.push({url: this.menus[i].nombre, titulo: this.menus[i].titulo});
          this.accesos1 = true;
        } else if (this.menus[i].url === 'Orden de Trabajo') {
          // this.microservicio2.push(this.menus[i].titulo);
          this.micro2.push({url: this.menus[i].nombre, titulo: this.menus[i].titulo});
          this.accesos2 = true;
        } else {
          this.micro3.push({url: this.menus[i].nombre, titulo: this.menus[i].titulo});
          this.accesos3 = true;
        }
      }
    });
  }
}
