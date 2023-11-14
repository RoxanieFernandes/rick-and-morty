import { Component, Input} from '@angular/core';
import { Character } from 'src/app/Character';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  @Input() character: Character | undefined;
}
