import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { MainComponent } from './core/main/main.component';
import { GameComponent } from './core/game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full'
  },
  {
    path: 'core',
    component: CoreComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
