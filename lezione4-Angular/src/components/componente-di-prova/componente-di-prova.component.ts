import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-di-prova',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-di-prova.component.html',
  styleUrl: './componente-di-prova.component.scss',
})
export class ComponenteDiProvaComponent {}
