import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AneComponent } from './ane.component';

describe('AneComponent', () => {
  let component: AneComponent;
  let fixture: ComponentFixture<AneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
