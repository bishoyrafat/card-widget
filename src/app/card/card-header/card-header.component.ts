import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/models/card';
import { SharedService } from 'src/app/shared/sevices/shared.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  product!: ICard | undefined;
  cart: any;
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.data.subscribe((data) => {
      this.product = data;
    });



      this.cart = JSON.parse(localStorage.getItem('cart')!);

  }
}
