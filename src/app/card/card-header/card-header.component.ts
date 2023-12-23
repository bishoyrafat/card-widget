import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/models/card';
import { SharedService } from 'src/app/shared/sevices/shared.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class CardHeaderComponent implements OnInit {
  bounce: any;

  product!: ICard | undefined;
  cart: any=[]
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!) ?? [];
    this.sharedService.cartCounter$.subscribe((data) => {
      this.cart = data;
    });

    this.sharedService.data.subscribe((data) => {
      this.product = data;
    });
  }
}
