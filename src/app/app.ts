import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductType } from './types/product.type';
import { AdvantageType } from './types/advantage.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Macaroons');

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      info: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      info: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      info: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      info: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public products: ProductType[] = [
    {
      image: 'product1.png',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product2.png',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product3.png',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product4.png',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public formValues = {
    productTitle: '',
    userName: '',
    phone: '',
  };

  public showPresent: boolean = true;

  public phoneNumber = '+375 (29) 368-98-68';
  public socialInst = '#';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполите название товара');
      return;
    } else if (!this.formValues.userName) {
      alert('Заполите ваше имя');
      return;
    } else if (!this.formValues.phone) {
      alert('Заполите ваш номер телефона');
      return;
    } else {
      alert('Спасибо за заказ');
      this.formValues.productTitle = '';
      this.formValues.userName = '';
      this.formValues.phone = '';
    }
  }
}
