import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
OpenWin() {
window.open('/#/sidenav', '_blank');
}
  protected title = 'angular_material_component_chatgpt';
}
