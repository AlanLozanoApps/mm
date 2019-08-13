import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = { email : '', password : ''};
  allowNewUser = this.can_add();

  constructor(
    public authService: AuthService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  can_add() {
    return false;
  }

  signin() {
    this.authService.registerUser(this.user.email, this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch( async err => {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      });
      await alert.present();
    });
  }

  login() {
    this.authService.loginUser(this.user.email, this.user.password).then( async (user) => {
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        subHeader: '¿Que deseas hacer?',
        buttons: [
          {
            text: 'Ir al blog',
            handler: () => {
              window.location.href = '/blog';
            }
          },
          {
            text: 'Solicitar una cotización',
            handler: () => {
              window.location.href = '/contacto';
            }
          },
          {
            text: 'Cerrar',
            role: 'cancel'
          }]
      });
      await alert.present();
    })
     .catch( async err => {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      });
      await alert.present();
    });
  }
}
