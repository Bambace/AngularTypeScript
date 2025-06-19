import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambia-colore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambia-colore.component.html',
  styleUrl: './cambia-colore.component.scss',
})
export class CambiaColoreComponent {
  isRed: boolean = true;
}
