import { Component } from '@angular/core';
import {
  MatChipInput,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatInput, MatFormField, MatLabel } from '@angular/material/input';
@Component({
  selector: 'app-chip',
  imports: [
    MatChipsModule,
    MatIcon,
    MatChipInput,
    MatInput,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  speratorKeys = [ENTER, COMMA];
  tags: string[] = ['CSharp', 'PHP', 'SQL Server'];

  removeChip(tag: string) {
    this.tags = this.tags.filter((t) => t !== tag);
  }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    if (value) this.tags.push(value);
    event.chipInput!.clear();
  }
}
