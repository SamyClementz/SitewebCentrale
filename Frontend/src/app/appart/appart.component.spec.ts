import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartComponent } from './appart.component';

describe('AppartComponent', () => {
  let component: AppartComponent;
  let fixture: ComponentFixture<AppartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
