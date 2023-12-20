import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainViewComponent } from './card-main-view.component';

describe('CardMainViewComponent', () => {
  let component: CardMainViewComponent;
  let fixture: ComponentFixture<CardMainViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMainViewComponent]
    });
    fixture = TestBed.createComponent(CardMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
