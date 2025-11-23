import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import{MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-tooltip',
  imports: [MatTooltipModule,MatButtonModule],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {

}
