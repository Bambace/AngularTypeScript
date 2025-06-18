import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from '../components/componente1/componente1.component';
import { Componente2Component } from '../components/componente-2/componente-2.component';
import { ContatoreComponent } from '../components/contatore/contatore.component';
import { InputComponent } from '../components/input/input.component';
import { DirettiveStrutturaliComponent } from '../components/direttive-strutturali/direttive-strutturali.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { TabellaComponent } from '../components/tabella/tabella.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Componente1Component,
    Componente2Component,
    ContatoreComponent,
    InputComponent,
    DirettiveStrutturaliComponent,
    SwitchComponent,
    TabellaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione2-Angular';
}
