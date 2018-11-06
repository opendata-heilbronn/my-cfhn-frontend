import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GuestAddModalComponent} from './guest-add-modal.component';

describe('GuestAddModalComponent', () => {
	let component: GuestAddModalComponent;
	let fixture: ComponentFixture<GuestAddModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GuestAddModalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GuestAddModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
