import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-upper-case',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-upper-case.component.html',
  styleUrl: './pipe-upper-case.component.scss',
})
export class PipeUpperCaseComponent {
  nome: string = 'pedro';
}
