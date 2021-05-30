import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Cadastro } from './cadastro.page';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroRoutingModule,
    MessageComponentModule
  ],
  declarations: [Cadastro]
})
export class CadastroModule {}
