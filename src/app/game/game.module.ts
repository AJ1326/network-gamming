import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, GameRoutingModule],
  declarations: [GameComponent],
})
export class GameModule {}
