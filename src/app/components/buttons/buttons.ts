import { Component } from '@angular/core';
import { MatAnchor, MatIconButton, MatFabButton, MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-buttons',
  imports: [MatAnchor, MatIcon, MatIconButton, MatFabButton,MatMiniFabButton],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {

}
