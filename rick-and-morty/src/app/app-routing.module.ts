import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
