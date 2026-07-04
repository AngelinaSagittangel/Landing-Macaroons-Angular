import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable()
export class ProductsService {
  constructor() {}
  getProducts(): ProductType[] {
    return [
      {
        image: 'product1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.50,
      },
      {
        image: 'product2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.20,
      },
      {
        image: 'product3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.30,
      },
      {
        image: 'product4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.40,
      },
    ];
  }
}
