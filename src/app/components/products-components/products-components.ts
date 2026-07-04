import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '../../types/product.type';
import { CommonModule } from '@angular/common';
import { BtnBgDirective } from '../../directives/btn-bg';

@Component({
  selector: 'product',
  imports: [CommonModule, BtnBgDirective],
  templateUrl: './products-components.html',
  styleUrl: './products-components.scss',
})
export class ProductsComponents {
  @Input() product: ProductType;
  @Input() i!: number;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      quantity: '',
      price: 0,
    };
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  }
}
