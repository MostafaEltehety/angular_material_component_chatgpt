import { Component } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatAccordion } from '@angular/material/expansion';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatIcon, MatExpansionPanelDescription, MatAccordion],
  templateUrl: './expansion-panel.html',
  styleUrl: './expansion-panel.scss',
})
export class ExpansionPanel {

}
