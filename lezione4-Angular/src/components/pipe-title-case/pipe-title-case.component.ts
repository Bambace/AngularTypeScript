import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-title-case',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-title-case.component.html',
  styleUrl: './pipe-title-case.component.scss',
})
export class PipeTitleCaseComponent {
  titolo: string = 'benvenuto!';
}
