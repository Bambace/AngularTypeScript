import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blur.component.html',
  styleUrl: './blur.component.scss',
})
export class BlurComponent {
  isBlur: boolean = true;

  nascondi() {
    this.isBlur = false;
  }
}
