import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEventosPageRoutingModule } from './cadastro-eventos-routing.module';

import { CadastroEventosPage } from './cadastro-eventos.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    CadastroEventosPageRoutingModule
  ],
  declarations: [CadastroEventosPage]
})
export class CadastroEventosPageModule {}
