import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StrichlistePageComponent} from './strichliste-page.component';

describe('StrichlistePageComponent', () => {
	let component: StrichlistePageComponent;
	let fixture: ComponentFixture<StrichlistePageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StrichlistePageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StrichlistePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
