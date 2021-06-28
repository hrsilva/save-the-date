import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidarEntradasPage } from './validar-entradas.page';

const routes: Routes = [
  {
    path: '',
    component: ValidarEntradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidarEntradasPageRoutingModule {}
