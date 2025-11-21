import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIcon } from "@angular/material/icon";
 @Component({
  selector: 'app-button-toggle',
  imports: [MatButtonToggleModule, MatIcon, ReactiveFormsModule, NgStyle],
  templateUrl: './button-toggle.html',
  styleUrl: './button-toggle.scss',
})
export class ButtonToggle {
changMode(event:any) {
alert(event.value);
}

styles=new FormControl<string|null>(null);

applyStyles(){
  return {
    'font-weight': this.styles.value?.includes('bold') ? 'bold' : 'normal',
    'font-style': this.styles.value?.includes('italic') ? 'italic' : 'normal',
    'text-decoration': this.styles.value?.includes('underline')
      ? 'underline'
      : 'none'
  };
}

}
