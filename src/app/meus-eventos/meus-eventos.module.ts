import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusEventosPage } from './meus-eventos.page';
import { MessageComponentModule } from '../message/message.module';
import { MeusEventosPageRoutingModule } from './meus-eventos-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    MessageComponentModule,
    MeusEventosPageRoutingModule
  ],
  declarations: [MeusEventosPage]
})
export class MeusEventosPageModule {}
