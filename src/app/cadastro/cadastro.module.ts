import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { Cadastro } from './cadastro.page';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    CadastroRoutingModule
  ],
  declarations: [Cadastro]
})
export class CadastroModule {}
