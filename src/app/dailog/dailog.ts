import { Component } from '@angular/core';
import{MatDialog, MatDialogModule}from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";
import { DialogContent } from './dailog-content/dailog-content';
import { DeleteDailog } from './delete-dailog/delete-dailog';
@Component({
  selector: 'app-dailog',
  imports: [MatDialogModule, MatAnchor],
  templateUrl: './dailog.html',
  styleUrl: './dailog.scss',
})
export class Dailog {
OpenConfirmDailog() {
const ref=this.dailog.open(DeleteDailog,{
  width:'500px',
  height:'300px'
}
 );
ref.afterClosed().subscribe(answer=>{
  if(answer==="true"){
alert("Item Deleted Succfully");
  }else{
    alert("Canceled Deleted");
  }
});

}

constructor(private dailog:MatDialog){}

openDailog() {
const ref= this.dailog.open(DialogContent,{
  data:{id:101,name:'mostafa ahmed',age:30,salary:5000}
});

ref.afterClosed().subscribe(res=>{
  alert(res);
});

}

}
