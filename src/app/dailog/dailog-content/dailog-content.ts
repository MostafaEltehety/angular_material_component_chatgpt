import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MatDialogModule, MatDialogClose, MatAnchor],
  templateUrl: './dailog-content.html',
  styleUrl: './dailog-content.scss',
})
export class DialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
