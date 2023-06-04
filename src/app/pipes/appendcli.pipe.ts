import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendcli'
})
export class AppendcliPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "City name from: "+value;
  }

}
