import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EventosPage } from './eventos.page';
import { EventosPageRoutingModule } from './eventos-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    EventosPageRoutingModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
