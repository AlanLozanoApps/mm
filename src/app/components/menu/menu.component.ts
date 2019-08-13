import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  USER_AUTH = this.user_stat();

  constructor(
    private menu: MenuController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    console.log('Stat is', this.user_stat());
  }

  user_stat() {
    this.authService.Session.subscribe( session => {
      if ( session ) {
        return true;
      } else {
        return false;
      }
    });
  }

  hideSideMenu() {
    this.menu.close();
  }

  killSesion() {
    this.authService.logoutUser();
  }

}
