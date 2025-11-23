import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  imports: [ReactiveFormsModule,MatSliderModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {




form=new FormGroup({
  sound:new FormControl(50)
});

}
