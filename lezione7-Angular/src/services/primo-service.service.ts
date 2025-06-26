import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimoServiceService {
  log(messaggio: string) {
    console.log('LOG:', messaggio);
  }

  somma(num1: number, num2: number) {
    console.log('La somma è:', num1 + num2);
  }

  sottrazione(num1: number, num2: number) {
    console.log('La sottrazione è:', num1 - num2);
  }

  moltiplicazione(num1: number, num2: number) {
    console.log('La moltiplicazione è:', num1 * num2);
  }

  divisione(num1: number, num2: number) {
    console.log('La divisione è:', num1 / num2);
  }
}
