import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CambiaColoreComponent } from '../components/cambia-colore/cambia-colore.component';
import { CambiaTestoDinamicComponent } from '../components/cambia-testo-dinamic/cambia-testo-dinamic.component';
import { CambiaLarghezzaComponent } from '../components/cambia-larghezza/cambia-larghezza.component';
import { BarraDinamicaComponent } from '../components/barra-dinamica/barra-dinamica.component';
import { EventComponent } from '../components/event/event.component';
import { CambiaColoreTestoComponent } from '../components/cambia-colore-testo/cambia-colore-testo.component';
import { MouseEnterComponent } from '../components/mouse-enter/mouse-enter.component';
import { CambiaImagineComponent } from '../components/cambia-imagine/cambia-imagine.component';
import { FocusComponent } from '../components/focus/focus.component';
import { BlurComponent } from '../components/blur/blur.component';
import { ContaInputComponent } from '../components/conta-input/conta-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CambiaColoreComponent,
    CambiaColoreComponent,
    CambiaTestoDinamicComponent,
    CambiaTestoDinamicComponent,
    CambiaLarghezzaComponent,
    BarraDinamicaComponent,
    EventComponent,
    CambiaColoreTestoComponent,
    MouseEnterComponent,
    CambiaImagineComponent,
    FocusComponent,
    BlurComponent,
    ContaInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione3-Angular';

  isActive: boolean = false;

  isDarkModeActive() {
    this.isActive = !this.isActive;
  }
}
