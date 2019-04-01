import {PremiumModule} from './premium.module';

describe('PremiumModule', () => {
	let premiumModule: PremiumModule;

	beforeEach(() => {
		premiumModule = new PremiumModule();
	});

	it('should create an instance', () => {
		expect(premiumModule).toBeTruthy();
	});
});
