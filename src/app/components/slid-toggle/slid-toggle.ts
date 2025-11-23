import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slid-toggle',
  imports: [MatSlideToggle,ReactiveFormsModule],
  templateUrl: './slid-toggle.html',
  styleUrl: './slid-toggle.scss',
})
export class SlidToggle {
form=new FormGroup({
  dark_mode:new FormControl(false)
});
}
