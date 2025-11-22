import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatSelectModule}from '@angular/material/select';
import { FormField } from "../form-field/form-field";
@Component({
  selector: 'app-select',
  imports: [MatSelectModule,ReactiveFormsModule, FormsModule, FormField],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
country:string='';
form=new FormGroup({
  city:new FormControl('')
});

cities:string[]=['Assuit','Cairo','Gizaa']

skills:string[]=['C#',"Angular","SQL Server"];

selectSkills:string[]=[];


}
