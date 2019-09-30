import { Component, OnInit } from '@angular/core';
import { LoginService } from './_service/login.service';
import { Menu } from './_model/menu';
import { MenuService } from './_service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SyslabFE';
  numMenus = 3;
  menus: Menu[] = [];
  constructor(public loginService: LoginService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });
  }

}
