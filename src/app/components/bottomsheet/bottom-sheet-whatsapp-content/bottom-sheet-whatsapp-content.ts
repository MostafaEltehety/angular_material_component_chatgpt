import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from "@angular/material/icon";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-bottom-sheet-whatsapp-content',
  imports: [MatNavList, MatListItem, MatIcon, A11yModule],
  templateUrl: './bottom-sheet-whatsapp-content.html',
  styleUrl: './bottom-sheet-whatsapp-content.scss',
})
export class BottomSheetWhatsappContent {
constructor(private sheetRef:MatBottomSheetRef){}

select(opition:string){
  this.sheetRef.dismiss(opition);
}
}
