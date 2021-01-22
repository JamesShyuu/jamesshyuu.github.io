import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSearchOrderComponent } from './member-search-order.component';

describe('MemberSearchOrderComponent', () => {
  let component: MemberSearchOrderComponent;
  let fixture: ComponentFixture<MemberSearchOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSearchOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSearchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
