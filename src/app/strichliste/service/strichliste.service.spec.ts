import {TestBed} from '@angular/core/testing';

import {StrichlisteService} from './strichliste.service';

describe('StrichlisteService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: StrichlisteService = TestBed.get(StrichlisteService);
		expect(service).toBeTruthy();
	});
});
