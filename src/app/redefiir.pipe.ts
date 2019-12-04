import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redefiir'
})
export class RedefiirPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
