import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfspraakComponent } from './afspraak.component';

describe('AfspraakComponent', () => {
  let component: AfspraakComponent;
  let fixture: ComponentFixture<AfspraakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfspraakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfspraakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
