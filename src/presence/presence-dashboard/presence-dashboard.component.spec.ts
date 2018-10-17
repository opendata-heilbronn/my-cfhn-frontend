import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PresenceDashboardComponent} from './presence-dashboard.component';

describe('PresenceDashboardComponent', () => {
  let component: PresenceDashboardComponent;
  let fixture: ComponentFixture<PresenceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
