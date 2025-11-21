import { Component } from '@angular/core';
import{MatCardModule} from '@angular/material/card';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatAnchor, MatIcon],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

}
