import { Component } from '@angular/core';
 import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-table',
  standalone:true,
  imports: [MatTableDataSource],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
displayColumns=['id','name','salary','action'];
data=[
  {id:101,name:'Mostafa Ahmed',salary:2500},
  {id:102,name:'Heba Mostafa',salary:3500},
  {id:103,name:'Ali Omar',salary:2800},
  {id:104,name:'Khalid Othman',salary:4000},
  {id:105,name:'Mahmoud Mohamed',salary:3550},
  {id:106,name:'Omran Ahmed',salary:4500},
  {id:107,name:'Mostafa Waleed',salary:3500},
  {id:108,name:'Waleed Alaa',salary:1500},
  {id:109,name:'Esraa Omar',salary:7500},
  {id:110,name:'Khloud Ahmed',salary:8030},
  {id:111,name:'Hager Mostafa',salary:5400},
  {id:112,name:'Salem Saad',salary:3200},
];

}
