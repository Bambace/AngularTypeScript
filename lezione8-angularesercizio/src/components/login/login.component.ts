import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nome: string = '';
  password: string = '';

  constructor(
    private api: ApiService,
    private router: Router,
    route: ActivatedRoute
  ) {}

  onSubmit(from: any) {
    console.log(this.nome, this.password);

    let credentials = {
      username: this.nome,
      password: this.password,
    };

    this.api.post('auth/login', credentials).subscribe((response: any) => {
      sessionStorage.setItem('token', response.accessToken);
      this.router.navigate([`home/:${this.nome}`]);
    });
  }
}
