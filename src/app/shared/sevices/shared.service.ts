import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data = new Subject<ICard | undefined>()
  currentProduct$ = new BehaviorSubject<number>(1)
  constructor() { }
}
