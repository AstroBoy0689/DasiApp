/**
 * ----------------------------
 * --author: Sandro del Valle--
 * ----------------------------
 */
import { TestBed, inject } from '@angular/core/testing';

import { InvoiceHttpService } from './invoice-http.service';

describe('InvoiceHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceHttpService]
    });
  });

  it('should be created', inject([InvoiceHttpService], (service: InvoiceHttpService) => {
    expect(service).toBeTruthy();
  }));
}); 