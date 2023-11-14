
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/Character';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  character!: Character;

  constructor(private router: Router) {}

  toDetails(id:number): void {
    this.router.navigate(['/characters', id])
  }
}


