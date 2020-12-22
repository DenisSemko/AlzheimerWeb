import { TestBed } from '@angular/core/testing';


import { MmseService } from './mmse.service';

describe('MmseService', () => {
  let service: MmseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
