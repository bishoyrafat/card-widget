import { filter } from 'rxjs/operators';
import { CardService } from './../card.service';
import { ICard } from 'src/app/shared/models/card';
import { SharedService } from './../../shared/sevices/shared.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {
  productsNumber!: number;
  currentProduct!: number;
  products: ICard[] = [];
  cartArr: any = [];
  isExist!: any;
  heart:boolean=false

  constructor(
    private sharedService: SharedService,
    private cardService: CardService
  ) {}
  product!: ICard | undefined;
  isOpen: boolean = false;
  ngOnInit(): void {
    this.sharedService.data.subscribe((data) => {
      this.product = data;
    });

    this.cardService.allProducts$.subscribe((data) => {
      this.products = data;
      this.productsNumber = data.length;
    });

    this.sharedService.currentProduct$.subscribe(
      (n) => (this.currentProduct = n)
    );
  }

  isOpened() {
    this.isOpen = !this.isOpen;
  }

  prevProduct() {
    if (this.currentProduct === 1) {
      return;
    } else {
      this.currentProduct--;
      this.sharedService.currentProduct$.next(this.currentProduct);
    }
  }
  nextProduct() {
    if (this.currentProduct == this.productsNumber) {
      return;
    } else {
      this.currentProduct++;
      this.sharedService.currentProduct$.next(this.currentProduct);
    }
  }

  detectIndicator(i: number,item:ICard) {
    this.sharedService.currentProduct$.next(i);
  }



  addToCart(product: ICard | undefined) {
    if ('cart' in localStorage) {
      this.cartArr = JSON.parse(localStorage.getItem('cart')!);
      let isExist = this.cartArr.find((el: any) => el.id === product?.id);

      if (isExist) {
        alert(product?.title + ' Is Added Before!');
      } else {
        this.cartArr.push({ ...product, count: true });
        localStorage.setItem('cart', JSON.stringify(this.cartArr));
        this.sharedService.cartCounter$.next(this.cartArr)

      }
    } else {
      this.cartArr.push({ ...product, count: true });
      localStorage.setItem('cart', JSON.stringify(this.cartArr));
      this.sharedService.cartCounter$.next(this.cartArr)
    }

  }
}
