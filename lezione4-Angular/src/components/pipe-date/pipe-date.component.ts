import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-date.component.html',
  styleUrl: './pipe-date.component.scss',
})
export class PipeDateComponent {
  dataDiOggi: Date = new Date();
}
