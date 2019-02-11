import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavbarPageComponent } from './topnavbar-page.component';

describe('TopnavbarPageComponent', () => {
  let component: TopnavbarPageComponent;
  let fixture: ComponentFixture<TopnavbarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavbarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
