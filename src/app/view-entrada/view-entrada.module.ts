import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEntradaPageRoutingModule } from './view-entrada-routing.module';

import { ViewEntradaPage } from './view-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEntradaPageRoutingModule
  ],
  declarations: [ViewEntradaPage]
})
export class ViewEntradaPageModule {}
