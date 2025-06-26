import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CardFilmComponent } from '../card-film/card-film.component';

interface OggettoFilms {
  titolo: string;
  descrizione: string;
  colore: string;
  prezzo: number;
}

@Component({
  selector: 'app-form-film',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, CardFilmComponent],
  templateUrl: './form-film.component.html',
  styleUrl: './form-film.component.scss',
})
export class FormFilmComponent {
  formFilm = new FormGroup({
    titolo: new FormControl('', [Validators.required]),
    descrizione: new FormControl('', [Validators.required]),
    colore: new FormControl('', Validators.required),
    prezzo: new FormControl(0, [Validators.required, Validators.min(20)]),
  });

  cardsFims: OggettoFilms[] = [];

  oggettoFilms: OggettoFilms = {
    titolo: '',
    descrizione: '',
    colore: '',
    prezzo: 20,
  };

  onsubmit() {
    this.oggettoFilms = {
      titolo: this.formFilm.get('titolo')?.value ?? '',
      descrizione: this.formFilm.get('descrizione')?.value ?? '',
      colore: this.formFilm.get('colore')?.value ?? '',
      prezzo: this.formFilm.get('prezzo')?.value ?? 0,
    };

    console.log(this.oggettoFilms);

    this.cardsFims.push(this.oggettoFilms);
  }
}
