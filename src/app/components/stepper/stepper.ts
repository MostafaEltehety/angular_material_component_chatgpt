import { Component } from '@angular/core';
import{MatStepperModule} from '@angular/material/stepper';
import { Step1 } from "./step1/step1";
import { Step2 } from "./step2/step2";
import { Step3 } from "./step3/step3";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-stepper',
  imports: [MatStepperModule, Step1, Step2, Step3,ReactiveFormsModule],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {

}
