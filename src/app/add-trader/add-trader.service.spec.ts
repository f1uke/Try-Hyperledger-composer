import { TestBed, inject } from '@angular/core/testing';

import { AddTraderService } from './add-trader.service';

describe('AddTraderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTraderService]
    });
  });

  it('should ...', inject([AddTraderService], (service: AddTraderService) => {
    expect(service).toBeTruthy();
  }));
});
