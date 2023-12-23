import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICard } from '../shared/models/card';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  url: string = '../../assets/data/data.json';
  allProducts$ = new Subject<ICard[]>();
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<ICard[]>(this.url);
  }

  getProductById(id: number) {
    return this.getAllProducts().pipe(
      map((el) => {
        this.allProducts$.next(el);
       return el.find((product) => product.id === id);
      })
    );
  }
}
