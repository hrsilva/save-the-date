import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditPerfil } from './edit-perfil.page';
import { EditPerfilRoutingModule } from './edit-perfil-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditPerfilRoutingModule,
    MessageComponentModule
  ],
  declarations: [EditPerfil]
})
export class EditPerfilModule {}
