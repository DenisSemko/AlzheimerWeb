import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedComponent } from './rounded.component';

describe('RoundedComponent', () => {
  let component: RoundedComponent;
  let fixture: ComponentFixture<RoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
