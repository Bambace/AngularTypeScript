import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { FormReactiveComponent } from '../components/form-reactive/form-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FormReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione5-Angular';
}
