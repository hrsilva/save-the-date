import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ParticipantesEventoPageRoutingModule } from './participantes-evento-routing.module';

import { ParticipantesEventoPage } from './participantes-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesEventoPageRoutingModule
  ],
  declarations: [ParticipantesEventoPage]
})
export class ParticipantesEventoPageModule {}
