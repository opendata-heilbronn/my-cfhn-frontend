import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PayConsumeModalComponent} from './pay-consume-modal.component';

describe('PayConsumeModalComponent', () => {
	let component: PayConsumeModalComponent;
	let fixture: ComponentFixture<PayConsumeModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PayConsumeModalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PayConsumeModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
