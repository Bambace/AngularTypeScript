import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-enter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-enter.component.html',
  styleUrl: './mouse-enter.component.scss',
})
export class MouseEnterComponent {
  mouseEnter() {
    alert('Sei pasato');
  }
}
