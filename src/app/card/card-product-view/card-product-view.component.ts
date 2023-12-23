import { SharedService } from './../../shared/sevices/shared.service';
import { BehaviorSubject, Observable, Observer, Subject, retry } from 'rxjs';
import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { ICard, IColor } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card-product-view',
  templateUrl: './card-product-view.component.html',
  styleUrls: ['./card-product-view.component.scss'],
})
export class CardProductViewComponent implements OnInit {
  product: ICard | undefined;
  productImages: IColor[] | undefined;
  selectedImg$!: BehaviorSubject<string | undefined>;
  colors: IColor[] | undefined = [];
  selectedSize!: number;
  selectedColor!: string;
  currentProduct!: number;
  rating!: number;
  starsArr:any[]=[]

  constructor(
    private cardService: CardService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.sharedService.currentProduct$.subscribe((prod) => {
      this.getProductsById(prod);
      this.currentProduct = prod;
    });
  }

  getProductsById(id: number) {
    this.cardService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.sharedService.data.next(data);
      this.selectedImg$ = new BehaviorSubject(
        this.productImages?.[this.currentProduct]?.images?.[0]
      );

      this.getProductByColor(data, 'red');
      this.getAllColors();
      this.getStars()
    });
  }

  getProductByColor(data: ICard | undefined, color: string) {
    this.productImages = data?.colors.filter((prod) => prod.name === color);
  }

  getAllColors() {
    this.colors = this.product?.colors;
  }

  getImage(img: any) {
    this.selectedImg$.next('../../../assets/' + img);
  }
  detectSize(size: number) {
    this.selectedSize = size;
  }
  detectColor(colorHex: string, colorName: string) {
    this.selectedColor = colorHex;
    this.getProductByColor(this.product, colorName);
  }

  getStars() {
    this.rating = this.product?.rate!
    this.starsArr = new Array(Math.floor(this.product?.rate!) ).fill(0)
  }

}
