import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule}from '@angular/material/checkbox';
@Component({
  selector: 'app-checkbox',
  imports: [MatCheckboxModule, FormsModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
notifyMy(event: any) {
alert(event.checked);
}
isActive=false;

selectedAll=false;
items={
item1:false,
item2:false,
item3:false
};

toggleAll(){
  let newState=this.selectedAll;
  this.items={
    item1:newState,
    item2:newState,
    item3:newState
  };
}

checkIfAllSelected(){
  this.selectedAll=Object.values(this.items).every(v=>v===true);
}

}
