import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddSymbolPipe } from '../../pipes/add-symbol.pipe';

@Component({
  selector: 'app-pipe-personalizzata',
  standalone: true,
  imports: [CommonModule, AddSymbolPipe],
  templateUrl: './pipe-personalizzata.component.html',
  styleUrl: './pipe-personalizzata.component.scss',
})
export class PipePersonalizzataComponent {
  saluto: string = 'benvenuto...';
}
