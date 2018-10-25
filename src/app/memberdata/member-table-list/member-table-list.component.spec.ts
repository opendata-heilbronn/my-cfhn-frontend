import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberTableListComponent} from './member-table-list.component';

describe('MemberTableListComponent', () => {
  let component: MemberTableListComponent;
  let fixture: ComponentFixture<MemberTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
