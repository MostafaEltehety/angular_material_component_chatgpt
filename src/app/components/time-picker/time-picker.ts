import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import{NgxMatTimepickerModule}from 'ngx-mat-timepicker';
import { MatInput } from "@angular/material/input";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTimepicker, MatTimepickerModule, MatTimepickerToggle } from '@angular/material/timepicker';

@Component({
  selector: 'app-time-picker',
  imports: [MatTimepickerModule, MatFormField, MatLabel, NgxMatTimepickerModule, MatInput, NgxMaterialTimepickerModule, MatTimepickerToggle, MatPrefix],
  templateUrl: './time-picker.html',
  styleUrl: './time-picker.scss',
})
export class TimePicker {

}
