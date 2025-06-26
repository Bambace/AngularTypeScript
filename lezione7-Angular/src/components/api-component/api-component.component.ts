import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../services/api.service';
import { response } from 'express';

@Component({
  selector: 'app-api-component',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './api-component.component.html',
  styleUrl: './api-component.component.scss',
})
export class ApiComponentComponent {
  listaPost: any = [];

  constructor(private api: ApiService) {
    this.api.get('posts').subscribe((response) => {
      //utiliziamo .sort per ordinare per views, compariamo il valor attuale con quell precedente per sapere si e piu grande o
      response.posts.sort((a: any, b: any) => a.views - b.views);

      this.listaPost = response.posts;
    });
  }
}
