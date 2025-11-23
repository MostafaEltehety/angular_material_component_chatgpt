import { Component } from '@angular/core';
import { MatTab, MatTabGroup, MatTabLabel, MatTabContent } from '@angular/material/tabs';
import { CdkNoDataRow } from "@angular/cdk/table";
import { MatIcon } from "@angular/material/icon";
import { Badge } from "../badge/badge";

@Component({
  selector: 'app-tabs',
  imports: [MatTab, MatTabGroup, MatIcon, MatTabLabel, Badge, MatTabContent],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {

}
