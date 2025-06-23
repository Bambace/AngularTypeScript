import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oggetto-utente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oggetto-utente.component.html',
  styleUrl: './oggetto-utente.component.scss',
})
export class OggettoUtenteComponent {
  @Input() message!: string[];
}
