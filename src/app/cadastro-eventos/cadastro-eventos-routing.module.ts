import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEventosPage } from './cadastro-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEventosPageRoutingModule {}
