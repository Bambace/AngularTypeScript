import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  //la variable esta vacia
  tastoPremuto: string = '';

  //mmostramos las coordenadas del mouse
  mostraCoordinate(event: MouseEvent) {
    //console.log(event);
    alert(`X: ${event.clientX}, Y: ${event.clientY}`);
  }
}
