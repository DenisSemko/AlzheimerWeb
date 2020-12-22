import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingChartComponent } from './loading-chart.component';

describe('LoadingChartComponent', () => {
  let component: LoadingChartComponent;
  let fixture: ComponentFixture<LoadingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
