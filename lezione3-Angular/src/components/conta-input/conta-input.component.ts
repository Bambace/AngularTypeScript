import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conta-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conta-input.component.html',
  styleUrl: './conta-input.component.scss',
})
export class ContaInputComponent {
  inp: string = '';
  contaInp: number = 0;
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    console.log(this.inp);
  }

  conta() {
    this.contaInp;
  }
}
