import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkshopOverviewComponent} from './workshop-overview.component';

describe('WorkshopOverviewComponent', () => {
	let component: WorkshopOverviewComponent;
	let fixture: ComponentFixture<WorkshopOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WorkshopOverviewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorkshopOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
