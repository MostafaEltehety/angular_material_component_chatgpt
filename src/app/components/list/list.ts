import { Component } from '@angular/core';
import { MatList, MatListSubheaderCssMatStyler, MatListItem, MatListItemAvatar, MatListItemIcon, MatDivider, MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-list',
  imports: [MatList, MatNavList, MatListItem, MatIcon, MatListItemIcon, MatDivider],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

}
