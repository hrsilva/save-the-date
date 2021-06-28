import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasEntradasPage } from './minhas-entradas.page';
import { MinhasEntradasPageRoutingModule } from './minhas-entradas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MinhasEntradasPageRoutingModule
  ],
  declarations: [MinhasEntradasPage]
})
export class MinhasEntradasPageModule {}
