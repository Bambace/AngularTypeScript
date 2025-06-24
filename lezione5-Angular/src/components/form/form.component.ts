import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  UtenteForm = {
    Nome: '',
    Cognome: '',
    Email: '',
    Password: '',
    DataDiNascita: new Date(), //dateTime
    Regione: '',
    Citta: '',
    Indirizzo: '',
    Cap: 0,
    Telefono: '',
    CodiceFiscale: '',
  };

  confermaPassword: string = '';
  isPasswordEqual: boolean = false;
  dataOggi = new Date();

  controllaPasword() {
    if (this.UtenteForm.Password === this.confermaPassword) {
      console.log('asdsa');
      this.isPasswordEqual = true;
    } else {
      this.isPasswordEqual = false;
    }
  }

  onSubmit(form: any) {
    console.log(this.UtenteForm);
  }
}
