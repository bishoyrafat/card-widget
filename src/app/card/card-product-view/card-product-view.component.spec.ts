import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductViewComponent } from './card-product-view.component';

describe('CardProductViewComponent', () => {
  let component: CardProductViewComponent;
  let fixture: ComponentFixture<CardProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProductViewComponent]
    });
    fixture = TestBed.createComponent(CardProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
