import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ProductType } from './types/product.type';
import { AdvantageType } from './types/advantage.type';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products-service';
import { CartCountService } from './services/cart-count-service';
import { AdvantagesComponents } from './components/advantages-components/advantages-components';
import { ProductsComponents } from './components/products-components/products-components';
import { BtnBgDirective } from './directives/btn-bg';
import { PhoneMaskPipe } from './pipes/phone-mask-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, AdvantagesComponents, ProductsComponents, BtnBgDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [ProductsService],
})
export class App implements OnInit {
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

  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    userName: '',
    phone: '',
  };

  public displayPhone: string = '';

  public onPhoneInput(raw: string): void {
    const digits = raw.replace(/\D/g, '').substring(0, 12);

    this.formValues.phone = digits;
    if (digits.length === 12) {
      const phonePipe = new PhoneMaskPipe();
      this.displayPhone = phonePipe.transform(digits) || digits;
    } else {
      this.displayPhone = digits;
    }
  }

  lateData: Promise<string> | null = null;

  constructor(
    private productService: ProductsService,
    public cartCount: CartCountService,
    public commonCartPrice: CartCountService,
  ) {}

  ngOnInit() {
    this.lateData = new Promise<string>(function () {
      setTimeout(() => {}, 3000);
    });
    this.products = this.productService.getProducts();
  }

  public showPresent: boolean = true;

  public phoneNumber = '+375 (29) 368-98-68';
  public socialInst = '#';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();

    this.cartCount.count++;
    this.commonCartPrice.commonCartPrice += product.price;

    alert(product.title + ' добавлен в корзину!');
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
      this.displayPhone = '';

      this.cartCount.count = 0;
      this.commonCartPrice.commonCartPrice = 0;
    }
  }
}
