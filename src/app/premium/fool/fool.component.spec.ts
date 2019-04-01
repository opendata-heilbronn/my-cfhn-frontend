import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FoolComponent} from './fool.component';

describe('FoolComponent', () => {
	let component: FoolComponent;
	let fixture: ComponentFixture<FoolComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FoolComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FoolComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
