import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  standalone: true,
  imports: [],
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.scss',
})
export class QueryParamsComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(this.route);
      this.id = params['id'];
    });
  }
}
