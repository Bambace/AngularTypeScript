import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private ruote: ActivatedRoute) {}

  nome: string = '';

  ngOnInit() {
    this.ruote.params.subscribe((params) => {
      this.nome = params['nome'];
    });
  }
}
