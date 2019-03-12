import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleaneComponent } from './singleane.component';

describe('SingleaneComponent', () => {
  let component: SingleaneComponent;
  let fixture: ComponentFixture<SingleaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
