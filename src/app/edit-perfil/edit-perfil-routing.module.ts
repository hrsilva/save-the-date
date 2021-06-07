import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPerfil } from './edit-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: EditPerfil
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPerfilRoutingModule {}
