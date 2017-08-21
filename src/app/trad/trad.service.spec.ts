import { TestBed, inject } from '@angular/core/testing';

import { TradService } from './trad.service';

describe('TradService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradService]
    });
  });

  it('should ...', inject([TradService], (service: TradService) => {
    expect(service).toBeTruthy();
  }));
});
