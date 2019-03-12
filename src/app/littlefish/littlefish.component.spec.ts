import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittlefishComponent } from './littlefish.component';

describe('LittlefishComponent', () => {
  let component: LittlefishComponent;
  let fixture: ComponentFixture<LittlefishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittlefishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittlefishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
