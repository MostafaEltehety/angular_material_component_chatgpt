import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormField } from '../form-field/form-field';
import { MatInput } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-select',
  imports: [MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInput,
    MatFormFieldModule, FormField],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select implements OnInit {
  ngOnInit(): void {
    this.filteredEmployees = this.employees;
  }

  country: string = '';
  form = new FormGroup({
    city: new FormControl(''),
  });

  cities: string[] = ['Assuit', 'Cairo', 'Gizaa'];

  skills: string[] = [
    'C#',
    'Python',
    'TypeScript',
    'JavaScript',
    'React',
    'Vue',
    'Angular',
    'SQL Server',
  ];

  selectSkills: string[] = [];

  employees: string[] = [
    'Mostafa',
    'Ahmed',
    'Mohamed',
    'Ali',
    'Heba',
    'Khalid',
    'Omar',
    'Yassmin',
    'Esraa',
  ];
  textSerach = '';
  selectedEmp = '';
  filteredEmployees: string[] = [];

  filterEmployees() {
    this.filteredEmployees = this.employees.filter((emp) =>
      emp.toLowerCase().includes(this.textSerach.toLowerCase())
    );
  }


}
