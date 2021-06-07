import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPerfil } from './show-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPerfil
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPerfilRoutingModule {}
