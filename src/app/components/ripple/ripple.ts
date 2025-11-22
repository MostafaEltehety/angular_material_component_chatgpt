import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRipple } from "@angular/material/core";

@Component({
  selector: 'app-ripple',
  imports: [MatRipple,MatButtonModule],
  templateUrl: './ripple.html',
  styleUrl: './ripple.scss',
})
export class Ripple {

}
