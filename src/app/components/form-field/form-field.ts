import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-form-field',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput,MatError],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
email=new FormControl('',[Validators.email,Validators.required]);

}
