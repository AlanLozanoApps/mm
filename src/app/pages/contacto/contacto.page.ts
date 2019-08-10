import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../services/firestore/firestore.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(
    private fireStoreService: FireStoreService,
    private alertController: AlertController
  ) { }
  name: string;
  phone: string;
  message: string;

  ngOnInit() {
  }

  async simpleAlert(title: any, msg: any) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['Aceptar']
    });
    await alert.present();
  }


  saveContact() {
    const record = {};
    record['name'] = this.name;
    record['phone'] = this.phone;
    record['message'] = this.message;
    if (this.name === '' || this.phone === '' || this.message === '') {
      this.simpleAlert('Error al enviar', 'Todos los campos son necesarios');
    }
    this.fireStoreService.create_contact(record).then( async resp => {
      this.name = '';
      this.phone = undefined;
      this.message = '';
      this.simpleAlert('Gracias','En Meeting Marketing estamos complacidos de ser conciderados por tu parte, en breve uno de nuestros representantes se pondrá en contacto contigo');
    })
      .catch( async error => {
        const alert = await this.alertController.create({
          header: 'Algo no ha salido bien',
          message: 'Al parecer tu solicitud no pudo ser procesada, no te preocupes, siempre puedes ponerte en contacto mediante Facebook o Whatsapp',
          buttons: [
            {
              text: 'Mandar Whatsapp',
              handler: () => {
                window.location.href = 'https://wa.me/5218121074183?text=Meeting%20Marketing';
              }
            },
            {
              text: 'Mandar Inbox',
              handler: () => {
                window.location.href = 'http://m.me/RegistroEventos';
              }
            }
          ]
        });
        await alert.present();
      });
  }


}