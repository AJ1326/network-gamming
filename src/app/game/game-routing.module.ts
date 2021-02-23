import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { GameComponent } from './game.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'game', component: GameComponent, data: { title: marker('Game | Lets begin !!!') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class GameRoutingModule {}
