import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEntradaPage } from './view-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEntradaPageRoutingModule {}
