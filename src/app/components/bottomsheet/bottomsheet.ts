import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatAnchor } from "@angular/material/button";
import { BottomSheetContent } from './bottom-sheet-content/bottom-sheet-content';
import { BottomSheetWhatsappContent } from './bottom-sheet-whatsapp-content/bottom-sheet-whatsapp-content';
@Component({
  selector: 'app-bottomsheet',
  imports: [MatBottomSheetModule, MatAnchor],
  templateUrl: './bottomsheet.html',
  styleUrl: './bottomsheet.scss',
})
export class Bottomsheet {
openSheetWhatsApp() {
const sheetRef=this.bottomSheet.open(BottomSheetWhatsappContent,{
  panelClass:'wa-sheet',
  hasBackdrop:true
});
sheetRef.afterDismissed().subscribe(result=>{
  if(result){
    alert(`You Selected : ${result}`);
  }
});
}
  constructor(private bottomSheet:MatBottomSheet){}
openSheet() {
const sheetRef=this.bottomSheet.open(BottomSheetContent,{
  panelClass:'custom-sheet',
  disableClose:false,
  hasBackdrop:true
});
sheetRef.afterDismissed().subscribe(result=>{
  if(result){
    alert(`You Selected : ${result}`);
  }
});
}



}
