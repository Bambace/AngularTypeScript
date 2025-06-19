import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambia-imagine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambia-imagine.component.html',
  styleUrl: './cambia-imagine.component.scss',
})
export class CambiaImagineComponent {
  immagineCane: string =
    'https://www.caniegatti.info/wp-content/uploads/cane-Rottweiler-foto-razza-canina.jpg';
  img: string = this.immagineCane;

  immagineGatto: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PTw16ePqWzGi96QZw1zMWZzjgcr8NqaJSw&s';

  imgCane(event: any) {
    console.log(this.img);
    this.img = this.immagineCane;
  }

  imgGatto() {
    this.img = this.immagineGatto;
  }
}
