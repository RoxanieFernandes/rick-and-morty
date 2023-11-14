import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  allCharacters: Character[] = []
  characters: Character[] = []
  currentPage = 1


  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getCharacters()
    this.getOneCharacter()

  }
  ngOnInit(): void { }

  getCharacters(): void {
    this.listService.getAllCharacter(this.currentPage).subscribe(
      (data) => {
        this.allCharacters = this.allCharacters.concat(data.results);
        this.currentPage++
        this.characters = this.allCharacters;
      });
  }

  scroll(): void {
    this.getCharacters()
  }

  getOneCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe(
      (data) => {

        this.characters = data.results;
        console.log(data);

      },
      (error) => console.error('Erro ao obter personagens', error)
    );
  }

  search(event: any): void {
    const target = event.target as HTMLInputElement
    const value = target.value.toLowerCase()

    this.characters = this.allCharacters.filter(character => {
      return character.name.toLowerCase().includes(value)
    })
   }
}
