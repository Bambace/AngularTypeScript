import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambia-larghezza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambia-larghezza.component.html',
  styleUrl: './cambia-larghezza.component.scss',
})
export class CambiaLarghezzaComponent {
  width: string = '300px';
  height: string = '400px';
}
