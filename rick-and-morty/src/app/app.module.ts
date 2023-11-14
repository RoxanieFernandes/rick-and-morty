import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmallCardComponent,
    DetailCardComponent,
    CharactersComponent,
    CharacterDetailComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
