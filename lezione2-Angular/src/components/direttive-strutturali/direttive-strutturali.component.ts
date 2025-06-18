import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive-strutturali',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direttive-strutturali.component.html',
  styleUrl: './direttive-strutturali.component.scss',
})
export class DirettiveStrutturaliComponent {
  isOnline: boolean = false;

  listaSpesa = ['pane', 'Banana', 'Mela', 'Prosciuto'];
  listaElementi = ['computer', 'cuffie', 'mouse', 'tastiera'];

  isEmpty = true;
}
