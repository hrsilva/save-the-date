import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventosPage } from './eventos.page';
import { EventosPageRoutingModule } from './eventos-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MessageComponentModule,
    EventosPageRoutingModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
