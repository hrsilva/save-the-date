import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'show-perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../show-perfil/show-perfil.module').then(m => m.ShowPerfilModule)
          }
        ]
      },
      {
        path: 'eventos',
        children: [
          {
            path: '',
            loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/eventos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/eventos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
