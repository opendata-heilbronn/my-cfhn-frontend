import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReplaceProductModalComponent} from './replace-product-modal.component';

describe('ReplaceProductModalComponent', () => {
	let component: ReplaceProductModalComponent;
	let fixture: ComponentFixture<ReplaceProductModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ReplaceProductModalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReplaceProductModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
