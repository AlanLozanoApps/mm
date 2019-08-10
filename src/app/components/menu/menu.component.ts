import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private authService: AuthService
    ) { }

  ngOnInit() {}

  hideSideMenu() {
    this.menu.close();
  }

  killSesion() {
    this.authService.logoutUser();
  }

}
