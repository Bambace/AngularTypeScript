import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// interface rispostaChat {
//   id: number;
//   messaggio: string;
// }
// messaggiInviati: rispostaChat[] = [];

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss',
})
export class BarraComponent {
  risposta: string = '';

  //output di barra a padre Wrapper
  @Output() rispostaEvent = new EventEmitter<string>();

  sendRisposta() {
    this.rispostaEvent.emit(this.risposta);
  }
}
