import { Pipe, PipeTransform } from '@angular/core';
import { BADFLAGS } from 'dns';

@Pipe({
  name: 'textReducePipe',
})
export class TextReducePipe implements PipeTransform {
  transform(value: string, limit: number = 95, point: string = '...'): string {
    if (!value || typeof value !== 'string') return value;

    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + point;
  }
}
