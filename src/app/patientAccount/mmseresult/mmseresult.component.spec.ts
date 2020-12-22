import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmseresultComponent } from './mmseresult.component';

describe('MmseresultComponent', () => {
  let component: MmseresultComponent;
  let fixture: ComponentFixture<MmseresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmseresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmseresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
