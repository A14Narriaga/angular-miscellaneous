import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(colorId: number): string {
    switch (colorId) {
      case 0: return '#ec09094b'
      case 1: return '#0918ec4b'
      case 2: return '#23ec094b'
      case 3: return '#a409ec4b'
      default: return '#2725294b'
    }
  }

}
