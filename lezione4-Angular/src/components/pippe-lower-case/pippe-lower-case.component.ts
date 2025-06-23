import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pippe-lower-case',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pippe-lower-case.component.html',
  styleUrl: './pippe-lower-case.component.scss',
})
export class PippeLowerCaseComponent {
  nome: string = 'PEDRO';
}
