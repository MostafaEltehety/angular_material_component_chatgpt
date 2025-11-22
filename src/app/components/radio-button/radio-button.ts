import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatRadioModule } from '@angular/material/radio';
import { MatList, MatListItem } from "@angular/material/list";

@Component({
  selector: 'app-radio-button',
  imports: [ReactiveFormsModule, MatRadioModule, FormsModule, MatListItem],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
})
export class RadioButton {
form=new FormGroup(
{
  gender:new FormControl('')
}
);


payment:string='';


}
