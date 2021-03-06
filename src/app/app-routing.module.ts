import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./view-message/view-message.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./edit-perfil/edit-perfil.module').then(m => m.EditPerfilModule)
  },
  {
    path: 'show-perfil',
    loadChildren: () => import('./show-perfil/show-perfil.module').then(m => m.ShowPerfilModule)
  },
  {
    path: 'cadastro-eventos',
    loadChildren: () => import('./cadastro-eventos/cadastro-eventos.module').then(m => m.CadastroEventosPageModule)
  },
  {
    path: 'cadastro-eventos/:id',
    loadChildren: () => import('./cadastro-eventos/cadastro-eventos.module').then(m => m.CadastroEventosPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'participantes-evento/:id',
    loadChildren: () => import('./participantes-evento/participantes-evento.module').then( m => m.ParticipantesEventoPageModule)
  },
  {
    path: 'participantes',
    loadChildren: () => import('./participantes/participantes.module').then( m => m.ParticipantesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'minhas-entradas',
    loadChildren: () => import('./minhas-entradas/minhas-entradas.module').then( m => m.MinhasEntradasPageModule)
  },
  {
    path: 'meus-eventos',
    loadChildren: () => import('./meus-eventos/meus-eventos.module').then( m => m.MeusEventosPageModule)
  },
  {
    path: 'entrada/:id',
    loadChildren: () => import('./view-entrada/view-entrada.module').then( m => m.ViewEntradaPageModule)
  },
  {
    path: 'validar-entradas/:id',
    loadChildren: () => import('./validar-entradas/validar-entradas.module').then( m => m.ValidarEntradasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
