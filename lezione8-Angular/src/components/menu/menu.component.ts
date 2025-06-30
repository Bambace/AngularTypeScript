import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private router: Router, route: ActivatedRoute) {}

  name: string = 'Pippo';
  id: number = 10;

  onClickHome() {
    this.router.navigate(['home', this.name]);
  }
  onClickLogin() {
    this.router.navigate(['login']);
  }
  onClickPp() {
    this.router.navigate(['']);
  }
  onClickProduct() {
    this.router.navigate(['product', this.id]);
  }
  // onClickQuery() {
  //   this.router.navigate(['query'], { queryParams: { id: 30 } });
  // }
}
