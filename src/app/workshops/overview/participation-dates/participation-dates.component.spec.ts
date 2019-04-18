import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParticipationDatesComponent} from './participation-dates.component';

describe('ParticipationDatesComponent', () => {
	let component: ParticipationDatesComponent;
	let fixture: ComponentFixture<ParticipationDatesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ParticipationDatesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ParticipationDatesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
