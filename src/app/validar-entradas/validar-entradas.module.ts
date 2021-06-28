import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarEntradasPage } from './validar-entradas.page';
import { ValidarEntradasPageRoutingModule } from './validar-entradas-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    ValidarEntradasPageRoutingModule
  ],
  declarations: [ValidarEntradasPage]
})
export class ValidarEntradasPageModule {}
