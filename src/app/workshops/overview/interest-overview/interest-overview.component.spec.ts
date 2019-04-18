import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InterestOverviewComponent} from './interest-overview.component';

describe('InterestOverviewComponent', () => {
	let component: InterestOverviewComponent;
	let fixture: ComponentFixture<InterestOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InterestOverviewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InterestOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
