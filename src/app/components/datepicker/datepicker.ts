import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix, MatSuffix } from "@angular/material/form-field";
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatInput } from "@angular/material/input";
import{MAT_DATE_LOCALE} from '@angular/material/core'
@Component({
  selector: 'app-datepicker',
  imports: [MatFormField, MatLabel, MatDatepickerModule, MatInput, MatPrefix, MatSuffix],
  templateUrl: './datepicker.html',
  styleUrl: './datepicker.scss',
  providers:[
    {provide:MAT_DATE_LOCALE,useValue:'ar-EG'}
  ]
})
export class Datepicker {
minDate=new Date(2023,0,1);// 01 Jan 2023
maxDate=new Date(2025,11,31);// 31 Dec 2025
}
