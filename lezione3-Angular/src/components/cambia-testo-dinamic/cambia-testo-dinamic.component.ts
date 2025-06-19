import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambia-testo-dinamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambia-testo-dinamic.component.html',
  styleUrl: './cambia-testo-dinamic.component.scss',
})
export class CambiaTestoDinamicComponent {
  isActive: boolean = true;
}
