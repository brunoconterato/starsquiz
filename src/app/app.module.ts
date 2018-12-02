import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { MainComponent } from './core/main/main.component';
import { GameComponent } from './core/game/game.component';
import { CardComponent } from './core/game/card/card.component';
import { TimerComponent } from './core/game/timer/timer.component';
import { DetailsModalComponent } from './core/game/details-modal/details-modal.component';
import { FinishModalComponent } from './core/game/finish-modal/finish-modal.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
