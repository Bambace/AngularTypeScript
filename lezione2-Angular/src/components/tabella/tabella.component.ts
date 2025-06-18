import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Utente {
  nome: string;
  eta: number;
  ruolo: 'ADMIN' | 'USER';
}

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.scss',
})
export class TabellaComponent {
  utenti: Utente[] = [
    { nome: 'Mario Rossi', eta: 34, ruolo: 'ADMIN' },
    { nome: 'Luca Bianchi', eta: 28, ruolo: 'USER' },
    { nome: 'Giulia Verdi', eta: 41, ruolo: 'USER' },
    { nome: 'Francesca Neri', eta: 30, ruolo: 'ADMIN' },
    { nome: 'Alessandro Gallo', eta: 25, ruolo: 'USER' },
    { nome: 'Sara Romano', eta: 37, ruolo: 'ADMIN' },
    { nome: 'Davide Conti', eta: 29, ruolo: 'USER' },
    { nome: 'Elena Moretti', eta: 33, ruolo: 'USER' },
  ];
}
