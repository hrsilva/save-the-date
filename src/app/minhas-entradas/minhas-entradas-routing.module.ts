import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasEntradasPage } from './minhas-entradas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasEntradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasEntradasPageRoutingModule {}
