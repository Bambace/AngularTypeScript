import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss',
})
export class Componente1Component {
  ngOnInit(): void {
    console.time('timer');
    console.log('✔ ngOnInit: Il componente è stato inizializzato.');
  }
  ngDoCheck(): void {
    console.log('🔍 ngDoCheck: Rilevato un cambiamento!');
  }
  ngOnDestroy(): void {
    console.timeLog('timer');
    console.timeEnd('timer');
    console.log('❌ ngOnDestroy: Il componente sta per essere distrutto');
  }
}
