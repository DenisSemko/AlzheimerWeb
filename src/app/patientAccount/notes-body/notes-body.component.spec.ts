import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesBodyComponent } from './notes-body.component';

describe('NotesBodyComponent', () => {
  let component: NotesBodyComponent;
  let fixture: ComponentFixture<NotesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
