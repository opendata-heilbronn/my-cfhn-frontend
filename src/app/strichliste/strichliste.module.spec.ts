import {StrichlisteModule} from './strichliste.module';

describe('StrichlisteModule', () => {
	let strichlisteModule: StrichlisteModule;

	beforeEach(() => {
		strichlisteModule = new StrichlisteModule();
	});

	it('should create an instance', () => {
		expect(strichlisteModule).toBeTruthy();
	});
});
