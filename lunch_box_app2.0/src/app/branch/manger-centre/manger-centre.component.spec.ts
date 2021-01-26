import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerCentreComponent } from './manger-centre.component';

describe('MangerCentreComponent', () => {
  let component: MangerCentreComponent;
  let fixture: ComponentFixture<MangerCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
