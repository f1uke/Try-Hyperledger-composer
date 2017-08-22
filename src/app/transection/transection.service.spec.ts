import { TestBed, inject } from '@angular/core/testing';

import { TransectionService } from './transection.service';

describe('TransectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransectionService]
    });
  });

  it('should ...', inject([TransectionService], (service: TransectionService) => {
    expect(service).toBeTruthy();
  }));
});
