import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent {
  constructor(private ruote: ActivatedRoute) {}

  name: string = '';

  ngOnInit() {
    this.ruote.params.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
