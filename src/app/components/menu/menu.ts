import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatListItem } from "@angular/material/list";
@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatAnchor, MatIcon],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

}
