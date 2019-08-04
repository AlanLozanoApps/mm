import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactoPage } from './contacto.page';
import { ComponentsModule } from '../../components/components.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import 'gl-ionic-background-video';

const routes: Routes = [
  {
    path: '',
    component: ContactoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgxTypedJsModule
  ],
  declarations: [ContactoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // here is the schema declaration to add
})
export class ContactoPageModule {}
