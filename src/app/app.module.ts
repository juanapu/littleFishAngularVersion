import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LittlefishComponent } from './littlefish/littlefish.component';

import { DrawService } from './service/draw.service';
import { AneComponent } from './littlefish/ane/ane.component';
import { SingleaneComponent } from './littlefish/ane/singleane/singleane.component';
import { FruitComponent } from './littlefish/fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    LittlefishComponent,
    AneComponent,
    SingleaneComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DrawService],
  bootstrap: [AppComponent]
})
export class AppModule { }
