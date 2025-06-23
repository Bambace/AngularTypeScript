import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteDiProvaComponent } from '../components/componente-di-prova/componente-di-prova.component';
import { TemplateComponent } from '../components/template/template.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PipeUpperCaseComponent } from '../components/pipe-upper-case/pipe-upper-case.component';
import { PippeLowerCaseComponent } from '../components/pippe-lower-case/pippe-lower-case.component';
import { PipeTitleCaseComponent } from '../components/pipe-title-case/pipe-title-case.component';
import { PipeCurrencyComponent } from '../components/pipe-currency/pipe-currency.component';
import { PipeDateComponent } from '../components/pipe-date/pipe-date.component';
import { PipePersonalizzataComponent } from '../components/pipe-personalizzata/pipe-personalizzata.component';
import { OggettoUtenteComponent } from '../components/oggetto-utente/oggetto-utente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponenteDiProvaComponent,
    TemplateComponent,
    LayoutComponent,
    FooterComponent,
    CommonModule,
    PipeUpperCaseComponent,
    PippeLowerCaseComponent,
    PipeTitleCaseComponent,
    PipeCurrencyComponent,
    PipeDateComponent,
    PipePersonalizzataComponent,
    OggettoUtenteComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione4-Angular';
}

//pseudocosdice

// Input

// 1.il padre importa il figlio nel template(app-figlio)
// 2.il figlio si aspettaun valore dal padre (@Input())
// 3.il padre pasa il valore tramite parametro nel template
// 4.il figlio riceve il valore

//Output

// 1.il figlio vuole mandare un valore al padre(@Output())
// 2.il filgio manda il valore(  this.inviaMessaggioEvent.emit('Ciao papà!');)
// 3.il padre riceve il valore nel template e chiama un metodo
// 4.il padre esegue il metodo e assegna il valore ricevuto

//  messaggioDelFiglio: string = '';

//   riceviMessaggio(event: any) {
//     this.messaggioDelFiglio = event;
//   }
