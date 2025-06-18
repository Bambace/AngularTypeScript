import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

enum Colori {
  rosso = '#f00',
  verde = '#0f0',
  blu = '#00f',
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  name: string = '';
  isEnable: boolean = true;
  stile: string = '';
  isDisable() {
    this.isEnable = !this.isEnable;
  }

  changeColor() {
    let rn: number = Math.floor(Math.random() * 3) + 1;
    let coloreSelezionato: string = '';
    switch (rn) {
      case 1:
        coloreSelezionato = Colori.rosso;
        break;
      case 2:
        coloreSelezionato = Colori.verde;
        break;
      case 3:
        coloreSelezionato = Colori.blu;
        break;
    }

    this.stile = 'color: ' + coloreSelezionato;
    console.log(rn);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(this.name);
  }
}
