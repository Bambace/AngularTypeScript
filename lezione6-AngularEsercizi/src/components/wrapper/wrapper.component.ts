import { Component } from '@angular/core';
import { BarraComponent } from '../barra/barra.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [BarraComponent, ChatComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  dataRicevuta: string = '';

  riceviRisposta(event: string) {
    this.dataRicevuta = event;
    // console.log(this.dataRicevuta);
  }
}
