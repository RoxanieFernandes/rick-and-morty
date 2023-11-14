import { ListService } from './../../service/list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;


  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getOneCharacter()

  }
  ngOnInit(): void { }

  getOneCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe(
      (data) => {
        console.log(data);
        this.character = data;
      },
      (error) => console.error('Erro ao obter personagens', error)
    );


  }
}
