import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  standalone: true,
  imports: [],
  templateUrl: './product-id.component.html',
  styleUrl: './product-id.component.scss',
})
export class ProductIDComponent {
  id: number = 0;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
