import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestPrimoServiceComponent } from '../components/test-primo-service/test-primo-service.component';
import { ApiComponentComponent } from '../components/api-component/api-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestPrimoServiceComponent,
    ApiComponentComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lezione7-Angular';
}
