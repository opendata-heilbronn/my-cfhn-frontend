import {MemberdataModule} from './memberdata.module';

describe('MemberdataModule', () => {
	let memberdataModule: MemberdataModule;

	beforeEach(() => {
		memberdataModule = new MemberdataModule();
	});

	it('should create an instance', () => {
		expect(memberdataModule).toBeTruthy();
	});
});
