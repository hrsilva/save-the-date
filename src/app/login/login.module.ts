import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Login } from './login.page';
import { LoginRoutingModule } from './login-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MessageComponentModule
  ],
  declarations: [Login]
})
export class LoginModule {}
