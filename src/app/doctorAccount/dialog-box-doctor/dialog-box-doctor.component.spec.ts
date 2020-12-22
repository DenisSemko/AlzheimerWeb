import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxDoctorComponent } from './dialog-box-doctor.component';

describe('DialogBoxDoctorComponent', () => {
  let component: DialogBoxDoctorComponent;
  let fixture: ComponentFixture<DialogBoxDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoxDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
