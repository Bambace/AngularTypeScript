import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormFilmComponent } from '../form-film/form-film.component';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule, FormFilmComponent],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.scss',
})
export class CardFilmComponent {
  //con il decoratore @Input pasiamo reciviamo i dati e gli pasiamo al template
  @Input() dati: any;
}
