import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import * as $ from 'jquery';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private network: Network
  ) {
    this.initializeApp();

    this.check_sesion();

    setInterval(() => {
      this.check_sesion();
      this.disconnectSubscription();
    }, 500);

  }

  // watch network for a disconnection
  disconnectSubscription() { this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
    });
  }

  check_sesion() {
    this.authService.Session.subscribe( session => {
      if ( session ) {
        $(document).ready(() => {
          $('#login-menu').hide();
        });
      } else {
        $(document).ready(() => {
          $('#login-menu').show();

          $('#user-menu').hide();
          $('#user-kill').hide();
          $('#blog-publish').hide();
          $('#blog-post-form').hide();
          $('#blog-post-actions').hide();
        });
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
