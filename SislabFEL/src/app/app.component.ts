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
  numMenus = 3;
  menus: Menu[] = [];
  constructor(private router: Router, public loginService: LoginService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });

    this.llenarMenu();
  }

  llenarMenu() {
    const helper = new JwtHelperService();
    // tslint:disable-next-line:prefer-const
    let token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
    const decodedToken = helper.decodeToken(token.access_token);
    // tslint:disable-next-line:prefer-const
    this.menuService.listarPorUsuario(decodedToken.user_name).pipe(map((data: Menu[]) => {
      this.menuService.menuCambio.next(data);
      console.log(data);
      // tslint:disable-next-line:prefer-const
    }));
  }

}
