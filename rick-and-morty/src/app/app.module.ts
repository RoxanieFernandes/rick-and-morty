import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmallCardComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
