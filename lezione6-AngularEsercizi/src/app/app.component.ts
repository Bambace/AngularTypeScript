import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from '../components/wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione6-AngularEsercizi';
}
