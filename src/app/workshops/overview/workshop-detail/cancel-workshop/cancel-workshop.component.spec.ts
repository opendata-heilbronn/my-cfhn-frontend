import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CancelWorkshopComponent} from './cancel-workshop.component';

describe('CancelWorkshopComponent', () => {
	let component: CancelWorkshopComponent;
	let fixture: ComponentFixture<CancelWorkshopComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CancelWorkshopComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CancelWorkshopComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
