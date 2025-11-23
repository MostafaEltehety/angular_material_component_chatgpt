import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-snackbar',
  imports: [MatSnackBarModule, MatAnchor],
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.scss',
})
export class Snackbar {
showSnackbarError() {
 this.snackbar.open('Somthing Error','Close',{
  duration:50000,
panelClass: ['snack-error']
 })
}
snackbar=inject(MatSnackBar);

showSnackbar(){
  this.snackbar.open('Saved Succefully','Ok',{
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'bottom'
  })
}

}
