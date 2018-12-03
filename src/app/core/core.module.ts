import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreComponent } from './core.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './game/card/card.component';
import { TimerComponent } from './game/timer/timer.component';
import { DetailsModalComponent } from './game/details-modal/details-modal.component';
import { FinishModalComponent } from './game/finish-modal/finish-modal.component';
import { PaginationComponent } from './game/pagination/pagination.component';

@NgModule({
  declarations: [
    CoreComponent,
    MainComponent,
    GameComponent,
    CardComponent,
    TimerComponent,
    DetailsModalComponent,
    FinishModalComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
