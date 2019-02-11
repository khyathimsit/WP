import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistroyComponent } from './order-histroy.component';

describe('OrderHistroyComponent', () => {
  let component: OrderHistroyComponent;
  let fixture: ComponentFixture<OrderHistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
