import { Component } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-delete-dailog',
  imports: [MatDialogContent, MatDialogActions, MatAnchor, MatDialogClose],
  templateUrl: './delete-dailog.html',
  styleUrl: './delete-dailog.scss',
})
export class DeleteDailog {

}
