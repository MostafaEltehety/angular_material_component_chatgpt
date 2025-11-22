import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-progress',
  imports: [MatProgressBarModule,MatProgressSpinnerModule],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress implements OnInit{
ngOnInit(): void {
  const interval=setInterval(()=>{
this.progressInterval+=10;
 if(this.progressInterval>=100){
 clearInterval(interval);
 }
  },1000);
}
progress=.40;
progressInterval=0;
}
