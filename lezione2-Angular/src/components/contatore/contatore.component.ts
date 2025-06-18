import { Component } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-contatore',
  standalone: true,
  imports: [],
  templateUrl: './contatore.component.html',
  styleUrl: './contatore.component.scss',
})
export class ContatoreComponent {
  title: string = 'Contatore';
  count: number = 0;

  addOnClick() {
    this.count += 1;
  }
}
