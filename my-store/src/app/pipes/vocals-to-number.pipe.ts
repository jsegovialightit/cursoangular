import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalsToNumber',
})
export class VocalsToNumberPipe implements PipeTransform {
  transform(value: string): string {
    //https://platzi.com/comentario/2928830/
    return value
      .split('')
      .map((item: string) => {
        switch (item) {
          case 'a':
            item = '1';
            break;
          case 'e':
            item = '2';
            break;
          case 'i':
            item = '3';
            break;
          case 'o':
            item = '4';
            break;
          case 'u':
            item = '5';
            break;
          default:
        }
        return item;
      })
      .join('');
  }
}
