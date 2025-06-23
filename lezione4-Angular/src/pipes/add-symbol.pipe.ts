import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSymbol',
  standalone: true,
})

//en transform utiliziamo "symbol con il pipe per dare gli opzioni a scegliere"
export class AddSymbolPipe implements PipeTransform {
  transform(value: string, symbol: '!' | '?' | '*' | '-'): string {
    return value + symbol;
  }
}
