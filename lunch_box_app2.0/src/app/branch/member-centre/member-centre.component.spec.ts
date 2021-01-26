import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCentreComponent } from './member-centre.component';

describe('MemberCentreComponent', () => {
  let component: MemberCentreComponent;
  let fixture: ComponentFixture<MemberCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
