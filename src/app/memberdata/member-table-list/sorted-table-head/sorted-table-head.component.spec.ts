import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SortedTableHeadComponent} from './sorted-table-head.component';

describe('SortedTableHeadComponent', () => {
  let component: SortedTableHeadComponent;
  let fixture: ComponentFixture<SortedTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedTableHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
