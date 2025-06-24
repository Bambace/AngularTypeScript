import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.scss',
})
export class FormReactiveComponent {
  filmForm = new FormGroup({
    titolo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    descrizione: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(150),
    ]),
    numVisual: new FormControl(0, [Validators.required, Validators.min(0)]),
    rating: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    stato: new FormControl(false),
    coloreSfondo: new FormControl('', [Validators.required]),
  });

  oggettoFilm = {
    titolo: '',
    descrizione: '',
    numvisual: 0,
    rating: 0,
    stato: false,
    coloreSfondo: '',
  };

  onSubmit() {
    //console.log('Dati inviati: ', this.filmForm.value);
    this.oggettoFilm = {
      titolo: this.filmForm.get('titolo')?.value ?? '',
      descrizione: this.filmForm.get('descrizione')?.value ?? '',
      numvisual: this.filmForm.get('numVisual')?.value ?? 0,
      rating: this.filmForm.get('rating')?.value ?? 0,
      stato: this.filmForm.get('stato')?.value ?? false,
      coloreSfondo: this.filmForm.get('coloreSfondo')?.value ?? '',
    };
    console.log(this.oggettoFilm);
  }
}
