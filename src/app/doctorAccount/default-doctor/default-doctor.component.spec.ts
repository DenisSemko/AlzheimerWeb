import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDoctorComponent } from './default-doctor.component';

describe('DefaultDoctorComponent', () => {
  let component: DefaultDoctorComponent;
  let fixture: ComponentFixture<DefaultDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
