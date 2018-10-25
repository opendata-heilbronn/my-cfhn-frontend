import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberCreatePageComponent} from './member-create-page.component';

describe('MemberCreatePageComponent', () => {
  let component: MemberCreatePageComponent;
  let fixture: ComponentFixture<MemberCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
