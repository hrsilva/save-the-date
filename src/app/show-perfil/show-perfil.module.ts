import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShowPerfil } from './show-perfil.page';
import { ShowPerfilRoutingModule } from './show-perfil-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShowPerfilRoutingModule,
    MessageComponentModule
  ],
  declarations: [ShowPerfil]
})
export class ShowPerfilModule {}
