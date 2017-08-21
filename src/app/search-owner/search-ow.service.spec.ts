import { TestBed, inject } from '@angular/core/testing';

import { SearchOWService } from './search-ow.service';

describe('SearchOWService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchOWService]
    });
  });

  it('should ...', inject([SearchOWService], (service: SearchOWService) => {
    expect(service).toBeTruthy();
  }));
});
