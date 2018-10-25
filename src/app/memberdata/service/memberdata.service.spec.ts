import {TestBed} from '@angular/core/testing';

import {MemberdataService} from './memberdata.service';

describe('MemberdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberdataService = TestBed.get(MemberdataService);
    expect(service).toBeTruthy();
  });
});
