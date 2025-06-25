import { Component } from '@angular/core';

import { FormFilmComponent } from '../components/form-film/form-film.component';
import { CardFilmComponent } from '../components/card-film/card-film.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormFilmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione6-Angular';
}
