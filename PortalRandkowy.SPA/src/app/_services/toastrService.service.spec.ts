/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrServiceService } from './toastrService.service';

describe('Service: ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrServiceService]
    });
  });

  it('should ...', inject([ToastrServiceService], (service: ToastrServiceService) => {
    expect(service).toBeTruthy();
  }));
});
