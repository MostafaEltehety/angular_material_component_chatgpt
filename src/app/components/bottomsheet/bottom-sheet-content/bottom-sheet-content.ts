import { Component } from '@angular/core';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from "@angular/material/icon";
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-bottom-sheet-content',
  imports: [MatNavList, MatListItem, MatIcon],
  templateUrl: './bottom-sheet-content.html',
  styleUrl: './bottom-sheet-content.scss',
})
export class BottomSheetContent {
constructor(private sheetRef:MatBottomSheetRef){}
select(choose:string) {
this.sheetRef.dismiss(choose);
}

}
