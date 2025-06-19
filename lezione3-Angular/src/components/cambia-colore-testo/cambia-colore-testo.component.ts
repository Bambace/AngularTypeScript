import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambia-colore-testo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambia-colore-testo.component.html',
  styleUrl: './cambia-colore-testo.component.scss',
})
export class CambiaColoreTestoComponent {
  colore: string = 'green';

  cambiaColore() {
    this.colore = 'red';
  }
}
