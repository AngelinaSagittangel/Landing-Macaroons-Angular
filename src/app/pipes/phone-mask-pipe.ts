import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask',
  standalone: true,
})
export class PhoneMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 12) {
      return value;
    }
    return digits.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
  }
}
