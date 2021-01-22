import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditInfoComponent } from './member-edit-info.component';

describe('MemberEditInfoComponent', () => {
  let component: MemberEditInfoComponent;
  let fixture: ComponentFixture<MemberEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
