import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-dinamica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-dinamica.component.html',
  styleUrl: './barra-dinamica.component.scss',
})
export class BarraDinamicaComponent {
  isActive: boolean = true;
  // range: number = 0;
  // width: string = this.range + 'px';
  progress: number = 0;
  width: string = this.progress + 'px';
  heigth: string = '50px';
  backgroundColor: string = 'green';

  progressBar() {
    if (this.progress >= 0) {
      this.progress += 10;
      this.width = this.progress + 'px';
    } else if (this.progress === 10) {
      //da vedere il ritorno
      this.progress -= 10;
      this.width = this.progress + 'px';
    }
  }
  mostraBarra() {
    setInterval(() => {
      this.progressBar();
    }, 50);
  }

  //ngDoCheck(): void {
  //  this.width = this.range + 'px';
  //  console.log(this.range);
  // }
  //}
}
