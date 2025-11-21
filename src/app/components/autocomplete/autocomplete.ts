import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, pipe, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-autocomplete',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
})
export class Autocomplete implements OnInit {
  onSelect(event: any) {
    const selected = event.option.value;
    alert(`employee : ${selected.name} with Id : ${selected.id}`);
  }

  ngOnInit(): void {
    this.countryControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => this.filter(value || ''))
      )
      .subscribe((res) => {
        this.filerdOpition = res;
      });

    this.employeeControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : value?.name)),
        map((name) => (name ? this.filterEmployees(name) : this.employees))
      )
      .subscribe((res) => {
        this.filredEmps = res;
      });
  }

  countryControl = new FormControl('');
  countries: string[] = ['Egypt', 'KSA', 'UAE', 'Qatar', 'Kuwait'];
  filerdOpition: string[] = [];
  employeeControl = new FormControl<
    { id: number; name: string } | string | null
  >(null);

  employees = [
    { id: 1, name: 'Mostafa Ahmed' },
    { id: 2, name: 'Omar Khaled' },
    { id: 3, name: 'Sara Ali' },
    { id: 4, name: 'Mohamed Samir' },
  ];

  filredEmps = this.employees;

  filter(value: string) {
    const filterdValue = value.toLowerCase();
    return this.countries.filter((f) => f.toLowerCase().includes(filterdValue));
  }

  filterEmployees(name: string) {
    const emp = name.toLowerCase();
    return this.employees.filter((x) => x.name.toLowerCase().includes(emp));
  }
  displayEmployee(emp: any) {
    return emp ? emp.name : '';
  }
}
