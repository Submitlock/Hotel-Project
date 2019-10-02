import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDate'
})
export class TransformDatePipe implements PipeTransform {

  transform(value: Date, args: string): string {
    switch (args) {
      case 'getDay':
        const dayString: string = value.getDate().toString();
        return dayString.length === 1 ? '0' + dayString : dayString;
      case 'getMonth':
        const month = value.getMonth();
        return this.translateMonth(month);
      default:
        return null;
    }
  }

  private translateMonth(index: number): string {
    switch (index) {
      case 0:
        return 'янр';
      case 1:
        return 'фев';
      case 2:
        return 'мар';
      case 3:
        return 'апр';
      case 4:
        return 'май';
      case 5:
        return 'юни';
      case 6:
        return 'юли';
      case 7:
        return 'авг';
      case 8:
        return 'сеп';
      case 9:
        return 'окт';
      case 10:
        return 'ное';
      case 11:
        return 'дек';
      default:
        return null;
    }
  }

}
