import { Component } from '@angular/core';
import{ MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
 import { MatMenuItem } from "@angular/material/menu";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor } from "@angular/material/button";
import { MatNavList } from '@angular/material/list';
@Component({
  selector: 'app-sidenav',
  imports: [MatSidenav, MatSidenavContainer, MatNavList, MatToolbarModule, MatSidenavContent, MatAnchor, MatMenuItem],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {

}
