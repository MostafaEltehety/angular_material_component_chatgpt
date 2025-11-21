import { Component } from '@angular/core';
import{MatBadgeModule} from '@angular/material/badge';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-badge',
  imports: [MatBadgeModule, MatAnchor,MatIcon],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
counter=0;
}
