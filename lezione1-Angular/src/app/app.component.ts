import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitoloComponent } from '../components/titolo/titolo.component';
import { ParagrafoComponent } from '../components/paragrafo/paragrafo.component';
import { SalutoComponent } from '../components/saluto/saluto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitoloComponent, ParagrafoComponent, SalutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione1-Angular';
}
