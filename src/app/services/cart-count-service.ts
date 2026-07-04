import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartCountService {
  count: number = 0;
  commonCartPrice: number = 0;
}
